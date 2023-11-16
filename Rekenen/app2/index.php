<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="style.css"> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="stylesheet" href="/app2/style.css">
    <title>Ids Osinga - Alfa-college</title>
</head>

<body>
    <!-- als je bootstrap gebruikt, zet dan alles in de container-class -->
    <div class="container">
        <!-- hier volgt de navigatiebalk -->
        <?php include '../inc/navbar.php'; ?>
        <!-- einde navigatiebalk-->
        <div class="text-center">
            <h1>Tafel oefen-app</h1>
        </div>
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <form class="row g-3 mb-2">
                    <div class="col-md-4">
                        <label for="inputTafelvan" class="form-label">Tafel tot</label>
                        <input type="number" class="form-control" id="inputTafelTot" value="">
                    </div>

                    <div class="col-md-4">
                        <label for="inputTafelvan" class="form-label">Tafel van</label>
                        <input type="number" class="form-control" id="inputTafelvan" value="">
                    </div>
                    <div class="d-grid col-md-4 mt-5">
                        <button type="button" class="btn btn-primary" onclick="start()">GO</button>
                    </div>
                    </form>
                    <div class="card text-center">
                        <div class="card-header">
                            Tafel van ... oefenen
                        </div>
                        <div id="tafel" class="card-body">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" value="Som" id="Som" disabled>
                                <span class="input-group-text">=</span>
                                <input type="text" class="form-control" placeholder="Antwoord" value="" id="InputField">
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-success  is-valid" id="oplossingCheck" onclick="CheckSolution()">Check oplossing</button>
                                
                            </div>
                        </div>
                        <div class="card-footer text-body-secondary">
                            made by OSD
                        </div>
                    </div>
                    </div>
                    <div class="col">
                        <div class="card" id="history-card" style="width: 18rem; margin-top: 103.5px; display: none;">
                            <div class="card-header">
                                history
                            </div>
                            <ul id="History" class="list-group list-group-flush">
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div class="row"> </div>
                    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"></script>

    <script src="/app2/script.js"></script>
    <script src="/app2/main.js"></script>
</body>

</html>