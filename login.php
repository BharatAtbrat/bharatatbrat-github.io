<?php
// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    exit('Method Not Allowed');
}

// Check if username and password are provided in the request
if (!isset($_POST['username']) || !isset($_POST['password'])) {
    http_response_code(400); // Bad Request
    exit('Username and password are required');
}

// Establish a connection to the MySQL database
$servername = "localhost";
$username = "admin";
$password = "1234";
$dbname = "studlog";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    http_response_code(500); // Internal Server Error
    exit("Connection failed: " . $conn->connect_error);
}

// Retrieve the username and password from the POST request
$username = $_POST['username'];
$password = $_POST['password'];

// Sanitize input to prevent SQL injection
$username = $conn->real_escape_string($username);
$password = $conn->real_escape_string($password);

// Perform a query to check if the username and password are correct
$sql = "SELECT * FROM studdetails WHERE Username='$username' AND Password='$password'";
$result = $conn->query($sql);

// Check if there is a matching record in the database
if ($result && $result->num_rows > 0) {
    // Username and password are correct
    $response = array("success" => true);
} else {
    // Username and password are incorrect
    $response = array("success" => false);
}

// Send the JSON response back to the client
header('Content-Type: application/json');
echo json_encode($response);

// Close the database connection
$conn->close();
?>
