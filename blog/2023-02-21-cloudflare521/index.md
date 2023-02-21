---
draft: false
authors: xyspg
tags: [技术向,教程]
title: 解决 Cloudflare 521 错误
enableComments: true
---
在使用 Cloudflare 代理服务器时，有时会遇到 521 Web Server is Down 错误。本文将介绍如何解决这个问题。
![](CleanShot%202023-02-21%20at%2015.19.11.png)
<!--truncate-->

## 错误原因
查看 [CF 官方文档](https://support.cloudflare.com/hc/zh-cn/articles/115003011431-Cloudflare-5XX-%E9%94%99%E8%AF%AF%E6%95%85%E9%9A%9C%E6%8E%92%E9%99%A4#521error) 可以得知521错误的两个最常见原因：
- 源站 Web 服务器应用程序离线
- Cloudflare 请求被阻止

如果服务器正常运行，且防火墙没有设置特殊规则，最常见的原因是因为在服务器上没有安装 [Origin CA 证书](https://developers.cloudflare.com/ssl/origin-configuration/origin-ca)。  

## 解决方案
### 创建 Origin CA 证书
1. 登录 [Cloudflare 仪表板](https://dash.cloudflare.com)。
2. 选择你的域名
3. 转到 SSL/TLS \> 源服务器
![](CleanShot%202023-02-21%20at%2015.29.19@2x.png)
4. 单击“创建证书”
5. 选择通过 Cloudflare 生成私钥和 CSR
6. 输入域名（如 \*.你的网站.com，你的网站.com)。域名根和第一级通配符主机名已默认包含
7. 选择到期日期。
![](CleanShot%202023-02-21%20at%2015.31.37@2x.png)
8. 单击“下一步”
9. 选择密钥格式：
- 使用 OpenSSL 的服务器（如 Apache 和 NGINX）通常希望使用 PEM 文件（Base64 编码的 ASCII），但也可以使用二进制 DER 文件
- 使用 Windows 和 Apache Tomcat 的服务器需要 PKCS#7（.p7b 文件）
10. 将签名的 Origin 证书和私钥分别复制到不同的文件中。  

:::caution
退出页面后将无法再次查看私钥，所以务必保存到本地，否则只能重新创建
:::  

11. 单击“确定”。

### 在服务器上安装 Origin CA 证书（以 Nginx 为例）
将 Origin CA 证书（在步骤 1 中创建）上传到源站 Web 服务器上。（使用SFTP等）  
接下来的操作因服务器而异，以下以 Nginx 为例
1. 打开 Nginx 配置文件（通常位于 `/etc/nginx/`）
2. 在 Server 块中添加如下（将路径替换为你自己的）
```shell
	listen   443;
	
	ssl    on;
	ssl_certificate    /etc/ssl/your_domain_name.pem;
	ssl_certificate_key    /etc/ssl/your_domain_name.key;
```
例如：  
```shell
server {
	listen   443
	
	ssl    on;
	ssl_certificate    /etc/ssl/your_domain_name.pem; (or bundle.crt)
	ssl_certificate_key    /etc/ssl/your_domain_name.key;
	
	server_name your.domain.com;
	access_log /var/log/nginx/nginx.vhost.access.log;
	error_log /var/log/nginx/nginx.vhost.error.log;
	location / {
	root   /home/www/public_html/your.domain.com/public/;
	index  index.html;
	}
}
```
3. 重启 Nginx 
```shell
sudo /etc/init.d/nginx restart
```

其它服务器配置参考  
- [Apache httpd](https://www.digicert.com/kb/csr-ssl-installation/apache-openssl.htm)  
- [Microsoft IIS 10](https://www.digicert.com/kb/csr-creation-ssl-installation-iis-10.htm)


## 参见
- [Origin CA certificates](https://developers.cloudflare.com/ssl/origin-configuration/origin-ca)  
- [Cloudflare 5xx 故障排除](https://support.cloudflare.com/hc/zh-cn/articles/115003011431-Cloudflare-5XX-%E9%94%99%E8%AF%AF%E6%95%85%E9%9A%9C%E6%8E%92%E9%99%A4#521error)  
- [Nginx: Create CSR & Install SSL Certificate (OpenSSL)](https://www.digicert.com/kb/csr-ssl-installation/nginx-openssl.htm)