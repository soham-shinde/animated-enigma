<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="shortcut icon" href="./img/logo.svg" type="image/x-icon">
    <link rel="stylesheet" href="./style.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand fs-2 mx-5" href="#">
                <img src="./img/logo.svg" alt="Logo" width="40" height="40" class="d-inline-block align-text-top" />
                <span class="pb-1">
                    Smart Sphere</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item mx-3">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link" href="#">Store</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link" href="#">FAQ</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link" href="#">Cotact Us</a>
                    </li>

                    <li class="nav-item mx-3">
                        <a class="btn btn-dark " href="./signupPage.html">Login/SignUp</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container-fluid px-5 m-auto mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        <h1 class="h3">Welcome</h1>
                    </div>
                    <div class="card-body">
                        <?php
                            $name = $_POST['name'];
                            $email = $_POST['email'];
                            $phone = $_POST['phonenumber'];
                            $gender = $_POST['gender'];
                            $birthday = $_POST['birthdate'];
                            $address = $_POST['address'];
                            $city = $_POST['city'];
                            $pincode = $_POST['pincode'];
                        ?>
                        <div class="mb-3">
                            <h4 class="card-title">Hello, <?php echo $name; ?>!</h4>
                            <p class="card-text">Thank you for signing up. Here is your information:</p>
                        </div>

                        <ul class="list-group">
                            <li class="list-group-item"><strong>Email:</strong> <?php echo $email; ?></li>
                            <li class="list-group-item"><strong>Phone Number:</strong> <?php echo $phone; ?></li>
                            <li class="list-group-item"><strong>Gender:</strong> <?php echo $gender; ?></li>
                            <li class="list-group-item"><strong>Birth Date:</strong> <?php echo $birthday; ?></li>
                            <li class="list-group-item"><strong>Address:</strong> <?php echo $address; ?></li>
                            <li class="list-group-item"><strong>City:</strong> <?php echo $city; ?></li>
                            <li class="list-group-item"><strong>Pin code:</strong> <?php echo $pincode; ?></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-wMZPYBwEEzFLP2cTg5eOK2fEXwPq8EOEjwV8V6E0Uq3K/y6eImdTp1RDAw5NZNE" crossorigin="anonymous">
    </script>
</body>

</html>