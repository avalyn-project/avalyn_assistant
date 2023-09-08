// This file is an included SSL configuration for the WEB UI and RPC Client

If you are unsure as to how you should set these files up, that is what this file is for.

First, instead of spending tons of time trying to figure out the SSL creation, you can setup SSL certificates with ease using certbot

<VirtualHost *:80>
  ProxyPreserveHost On
  ProxyRequests Off
  ServerAdmin server@example.com
  ServerName rpc-client.example.com
  ServerAlias rpc-client.example.com

Redirect 301 / https://rpc-client.example.com/
RewriteEngine on
RewriteCond %{SERVER_NAME} =rpc-client.example.com
RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]
</VirtualHost>

<IfModule mod_ssl.c>
<VirtualHost *:443>
  ProxyPreserveHost On
  ProxyRequests Off
  ServerAdmin server@example.com
  ServerName rpc-client.example.com
  ServerAlias rpc-client.example.com
  ProxyPass / http://rpc-client.example.com:1281/
  ProxyPassReverse / http://rpc-client.example.com:1281/
Include /etc/letsencrypt/options-ssl-apache.conf
SSLCertificateFile /etc/letsencrypt/live/rpc-client.example.com/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/rpc-client.example.com/privkey.pem
</VirtualHost>
</IfModule>
