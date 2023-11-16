<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <title>Ids Osinga - Alfa-college</title>
</head>

<body>
    <!-- als je bootstrap gebruikt, zet dan alles in de container-class -->
    <div class="container">


        <!-- hier volgt de navigatiebalk -->
        <?php include '../inc/navbar.php'; ?>
        <!-- einde navigatiebalk-->


        <div class="text-center">
        <h1>Omrekenen</h1>
        </div>
        <br>
    <div class="row">
            <div class="col"></div>



            <div class="col">
            <div class="card" style="width: 30rem;">
              <div class="card-body">
                <select class="form-select" aria-label="Default select example" id="dim-select">
                  <option selected><p>1D (length)</p></option>
                  <option value="1">2D (oppervlakte)</option>
                  <option value="2">3D (ruimte)</option>
                </select>
<br>
                <div class="row">
                  <div class="col-5">
                    <div class="input-group mb-3">
                      <input type="text" class="form-control"  aria-label="value 1" aria-describedby="basic-addon1">
                      <span class="input-group-text" id="basic-addon1">
                        <select class="" id="">
                          <option selected>m</option>
                          <option value="1">mm</option>
                          <option value="2">dm</option>
                          <option value="3">km</option>
                        </select>
                      </span>

                    </div>
                  </div>

                  <div class="col-2">
                    <span>=</span>
                  </div>

                  <div class="col-5">
                    <div class="input-group mb-3">

                      <input type="text" class="form-control"  aria-label="value 2" aria-describedby="basic-addon1">
                      <span class="input-group-text" id="basic-addon1">

                        <select class="custom-select" id="">
                          <option selected>mm</option>
                          <option value="1">m</option>
                          <option value="2">dm</option>
                          <option value="3">km</option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>



                  <div class="row">
                    <div class="col-1">
                      <button type="button" class="btn btn-primary">Generate</button>
                    </div>
                    <div class="col-8"></div>
                    <div class="col-2">
                      <button type="button" class="btn btn-success" style="width: 94px;">Check</button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div class="col"></div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"></script>

    <script src="script.js"></script>
</body>

</html>