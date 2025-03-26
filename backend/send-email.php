<?php
header("Access-Control-Allow-Origin: *"); // Permite requisições de qualquer origem
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Permite apenas métodos específicos
header("Access-Control-Allow-Headers: Content-Type"); // Permite cabeçalhos específicos
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Carregar PHPMailer via Composer
require_once 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Função para sanitizar inputs e evitar XSS
    function sanitizeInput($data) {
        return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
    }

    $name = sanitizeInput($_POST['name'] ?? '');
    $companyName = sanitizeInput($_POST['companyName'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = sanitizeInput($_POST['phone'] ?? '');
    $position = sanitizeInput($_POST['position'] ?? '');

    // Validações
    if (empty($name) || empty($companyName) || empty($email) || empty($phone)) {
        echo "Por favor, preencha todos os campos obrigatórios.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "E-mail inválido.";
        exit;
    }

    // Configuração do PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configurar o servidor SMTP
        require_once './emaiLCredencials.php';
        $mail->isSMTP();
        $mail->Host       = $smtpHost; // Servidor SMTP (ex: smtp.gmail.com)
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtpEmail; // Seu e-mail SMTP
        $mail->Password   = $smtpPassword; // Sua senha SMTP
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // TLS ou PHPMailer::ENCRYPTION_SMTPS para SSL
        $mail->Port       = $smtpPortNumber; // Porta SMTP (465 para SSL, 587 para TLS)

        // Configurar remetente e destinatário
        $mail->setFrom($smtpEmail, $name);
        $mail->addAddress($emailReceiver); // Para onde o formulário será enviado
        $mail->addReplyTo($email, $name); // Permite responder ao remetente

        // Conteúdo do e-mail
        $mail->isHTML(false); // Definir para texto puro
        $mail->Subject = "Novo contato de $name";
        $mail->Body    = "Nome: $name\n".
                         "Empresa: $companyName\n".
                         "Email: $email\n".
                         "Telefone: $phone\n".
                         "Cargo: $position\n";

        // Enviar e-mail
        if ($mail->send()) {
            echo json_encode(["success" => true, "message" => "Mensagem enviada com sucesso!"]);
        } else {
            echo json_encode(["success" => false, "message" => "Erro ao enviar mensagem."]);
        }
    } catch (Exception $e) {
        echo "Erro ao enviar e-mail: {$mail->ErrorInfo}";
    }
} else {
    echo json_encode(["success" => false, "message" => "Método inválido."]);
}
?>
