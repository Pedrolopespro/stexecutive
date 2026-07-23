<?php
// ============================================================
// Configuração SMTP — mail.php
// ------------------------------------------------------------
// A senha real NUNCA deve ficar hardcoded neste arquivo.
// O workflow de deploy (.github/workflows/deploy.yml) substitui
// o placeholder abaixo pelo valor do secret SMTP_PASSWORD do
// GitHub Actions antes do build. Para testes locais, defina a
// variável de ambiente SMTP_PASSWORD no seu shell.
// ============================================================

return [
    'host'     => 'smtp.hostinger.com',
    'username' => 'contato@stexecutive.com.br',
    'password' => getenv('SMTP_PASSWORD') ?: '__SMTP_PASSWORD__',
    'port'     => 465,
];
