<?php
// ============================================================
// ST Executive — Mailer via SMTP (PHPMailer)
// ============================================================

header("Access-Control-Allow-Origin: https://stexecutive.com.br");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["ok" => false, "message" => "Método não permitido."]);
    exit();
}

$raw  = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["ok" => false, "message" => "Dados inválidos."]);
    exit();
}

// ── Campos ───────────────────────────────────────────────────
// Empresa, Local de embarque e Local de desembarque sairam em 24/08/2026:
// o formulario novo nao pergunta mais esses tres, e eles chegavam sempre
// como "—", ocupando linha no e-mail sem dizer nada. Origem, destino e
// data agora vem dentro de Observacoes.
$nome              = htmlspecialchars(trim($data["nome"]               ?? ""));
$email             = filter_var(trim($data["email"] ?? ""), FILTER_VALIDATE_EMAIL);
$telefone          = htmlspecialchars(trim($data["telefone"]           ?? ""));
$tipoServico       = htmlspecialchars(trim($data["tipoServico"]        ?? ""));
$motoristaBilingue = htmlspecialchars(trim($data["motoristaBilingue"]  ?? ""));
$observacao        = htmlspecialchars(trim($data["observacao"]         ?? "—"));

if (!$nome || !$email || !$telefone || !$tipoServico || !$motoristaBilingue) {
    http_response_code(422);
    echo json_encode(["ok" => false, "message" => "Campos obrigatórios ausentes."]);
    exit();
}

// ── PHPMailer ────────────────────────────────────────────────
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

$corpo = "
<!DOCTYPE html>
<html lang='pt-BR'>
<head><meta charset='UTF-8'></head>
<body style='font-family:Arial,sans-serif;background:#f4f4f4;padding:24px;'>
  <div style='max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08)'>
    <div style='background:#0a1628;padding:28px 32px;'>
      <h2 style='color:#d4a843;margin:0;font-size:20px;'>ST Executive</h2>
      <p style='color:#ffffff99;margin:4px 0 0;font-size:13px;'>Novo pedido de orçamento</p>
    </div>
    <div style='padding:28px 32px;'>
      <table style='width:100%;border-collapse:collapse;font-size:14px;'>
        <tr style='border-bottom:1px solid #eee;'><td style='padding:10px 0;color:#666;width:45%;'>Nome</td><td style='padding:10px 0;font-weight:600;color:#0a1628;'>$nome</td></tr>
        <tr style='border-bottom:1px solid #eee;'><td style='padding:10px 0;color:#666;'>E-mail</td><td style='padding:10px 0;font-weight:600;color:#0a1628;'>$email</td></tr>
        <tr style='border-bottom:1px solid #eee;'><td style='padding:10px 0;color:#666;'>Telefone</td><td style='padding:10px 0;font-weight:600;color:#0a1628;'>$telefone</td></tr>
        <tr style='border-bottom:1px solid #eee;'><td style='padding:10px 0;color:#666;'>Tipo de serviço</td><td style='padding:10px 0;font-weight:600;color:#0a1628;'>$tipoServico</td></tr>
        <tr style='border-bottom:1px solid #eee;'><td style='padding:10px 0;color:#666;'>Motorista bilíngue</td><td style='padding:10px 0;font-weight:600;color:#0a1628;'>$motoristaBilingue</td></tr>
        <tr><td style='padding:10px 0;color:#666;vertical-align:top;'>Observações</td><td style='padding:10px 0;font-weight:600;color:#0a1628;'>$observacao</td></tr>
      </table>
    </div>
    <div style='background:#f9f9f9;padding:16px 32px;border-top:1px solid #eee;'>
      <p style='font-size:12px;color:#999;margin:0;'>Enviado via formulário — stexecutive.com.br</p>
    </div>
  </div>
</body>
</html>
";

$smtpConfig = require __DIR__ . '/smtp-config.php';

try {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host       = $smtpConfig['host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpConfig['username'];
    $mail->Password   = $smtpConfig['password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = $smtpConfig['port'];
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom('contato@stexecutive.com.br', 'ST Executive — Formulário');
    $mail->addAddress('stexecutivebsb@hotmail.com');
    $mail->addReplyTo($email, $nome);

    $mail->isHTML(true);
    $mail->Subject = "Novo orçamento — ST Executive | $nome";
    $mail->Body    = $corpo;

    $mail->send();
    echo json_encode(["ok" => true, "message" => "E-mail enviado com sucesso."]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["ok" => false, "message" => $mail->ErrorInfo]);
}
