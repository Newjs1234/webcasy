const fs = require('fs');

const getHeader = function() {
    return `
    <!DOCTYPE html>
    <html lang="de">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link href="../css/style.css" rel="stylesheet">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <title>Home</title>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        </head>
        <body>
            <div class="container-fluid">
                <div class="row bg-dark" style="height: 60px;">
                    <div class="col-2">
                        <a href="/"><img src="../../img/docker.png" alt="logo" style="width: 50px; height: auto; padding-top: 10px;"></a>
                    </div>
                    <div class="col-10 align-self-center">
                        <ul class="nav justify-content-end" id="test">
                            <li class="nav-item" id="touch-technologien">
                                <span class="nav-link text-light">TECHNOLOGIEN</span>
                                <div id="touch-technologien-box" class="nav-container-links">
                                    <div class="row bg-light">
                                        <div class="col-6">
                                            <div class="row bg-light">
                                                <div class="col-6">
                                                    <a href="/technologien/nodejs"><div class="row nav-container-links-border nav-link-hover" style="height: 100px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">NODE JS</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="col-6">
                                                    <a href="/technologien/vuejs"><div class="row nav-container-links-border nav-link-hover" style="height: 100px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">VUE JS</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="w-100"></div>
                                                <div class="col-6">
                                                    <a href="/technologien/jakarta-ee"><div class="row nav-container-links-border nav-link-hover" style="height: 100px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">JAKARTA EE</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="col-6">
                                                    <a href="/technologien/reactjs"><div class="row nav-container-links-border nav-link-hover" style="height: 100px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">REACT JS</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="w-100"></div>
                                                <div class="col-6">
                                                    <a href="/technologien/angular"><div class="row nav-container-links-border nav-link-hover" style="height: 100px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">ANGULAR</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="col-6">
                                                    <a href="/technologien/springboot"><div class="row nav-container-links-border nav-link-hover" style="height: 100px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">SPRING BOOT</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="w-100"></div>
                                                <div class="col-6">
                                                    <a href="/technologien/firstspirit"><div class="row nav-container-links-border nav-link-hover" style="height: 100px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">FIRSTSPIRIT</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="col-6">
                                                    <a href="/technologien/docker"><div class="row nav-container-links-border nav-link-hover" style="height: 100px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">DOCKER</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6" style="padding: 0;">
                                            <img src="../../img/nav01.jpg" alt="buro" style="width: auto; height: 400px;">
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item" id="touch-dienstleistungen">
                                <span class="nav-link text-light">DIENSTLEISTUNGEN</span>
                                <div class="nav-container-links" id="touch-dienstleistungen-box">
                                    <div class="row bg-light">
                                        <div class="col-6">
                                            <div class="row bg-light">
                                                <div class="col-6">
                                                    <a href="/dienstleistungen/entwicklung.html"><div class="row nav-container-links-border nav-link-hover" style="height: 200px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">ENTWICKLUNG</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="col-6">
                                                    <a href="/dienstleistungen/beratung.html"><div class="row nav-container-links-border nav-link-hover" style="height: 200px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">BERATUNG</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="w-100"></div>
                                                <div class="col-6">
                                                    <a href="/dienstleistungen/workshops.html"><div class="row nav-container-links-border nav-link-hover" style="height: 200px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">WORKSHOPS</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="col-6">
                                                    <a href="/dienstleistungen/sozialearbeit.html"><div class="row nav-container-links-border nav-link-hover" style="height: 200px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">SOZIALE ARBEIT</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6" style="padding: 0;">
                                            <img src="../../img/nav02.jpg" alt="buro" style="width: auto; height: 400px;">
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item" id="touch-unternehmen">
                                <span class="nav-link text-light">UNTERNEHMEN</span>
                                <div class="nav-container-links" id="touch-unternehmen-box">
                                    <div class="row bg-light">
                                        <div class="col-6">
                                            <div class="row bg-light">
                                                <div class="col-6">
                                                    <a href="#"><div class="row nav-container-links-border nav-link-hover" style="height: 200px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">ÜBER UNS</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="col-6">
                                                    <a href="#"><div class="row nav-container-links-border nav-link-hover" style="height: 200px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">BLOG</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="w-100"></div>
                                                <div class="col-6">
                                                    <a href="#"><div class="row nav-container-links-border nav-link-hover" style="height: 200px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">KONTAKT</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="col-6">
                                                    <a href="#"><div class="row nav-container-links-border nav-link-hover" style="height: 200px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">IMPRESSUM</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6" style="padding: 0;">
                                            <img src="../../img/nav03.jpg" alt="buro" style="width: auto; height: 400px;">
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item" id="touch-karriere">
                                <span class="nav-link text-light">KARRIERE</span>
                                <div class="nav-container-links" id="touch-karriere-box">
                                    <div class="row bg-light">
                                        <div class="col-6">
                                            <div class="row bg-light">
                                                <div class="col-6">
                                                    <a href="#"><div class="row nav-container-links-border nav-link-hover" style="height: 200px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">BEI UNS ARBEITEN</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="col-6">
                                                    <a href="#"><div class="row nav-container-links-border nav-link-hover" style="height: 200px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">STELLENANZEIGEN</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="w-100"></div>
                                                <div class="col-6">
                                                    <a href="#"><div class="row nav-container-links-border nav-link-hover" style="height: 200px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;">BEWERBUNG</h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                                <div class="col-6">
                                                    <a href="#"><div class="row nav-container-links-border" style="height: 200px;">
                                                        <div class="col align-self-center">
                                                            <h5 style="text-align: center;"></h5>
                                                        </div>
                                                    </div></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6" style="padding: 0;">
                                            <img src="../../img/nav04.jpg" alt="buro" style="width: auto; height: 400px;">
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i style="font-size:15px" class="fa">&#xf09b;</i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i style="font-size:15px" class="fa">&#xf167;</i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i style="font-size:15px" class="fa">&#xf082;</i>
                                </a>
                            </li>
                          </ul>
                    </div>
                </div>
            
            <script src="../js/script.js"></script>
        </body>
    </html>
    `
}

module.exports = getHeader;