<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Finding Llama</title>
        <link rel="stylesheet" href="style/main.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
        <script src="script/main.js"></script>
    </head>

    <body ng-app="mainApp" ng-controller="mainController">
        <header>
            <div class="icon col-xs-3 col-md-3 col-sm-3 col-lg-3"> <img src="resources/icon3.jpg" alt="llama icon"/></div>
            <div class="text title col-xs-9 col-md-9 col-sm-9 col-lg-9"> Finding Llama</div>
        </header>
        <section class="main-section">
            <div class="main-menu">
                <div class="about-llama col-xs-6 col-md-6 col-sm-6 col-lg-6 clickable" ng-click="showLlama()">About Llama</div>
                <div class="about-me col-xs-6 col-md-6 col-sm-6 col-lg-6 clickable" ng-click="showMe()">About Me</div>
            </div>
            <div class="content">
                <div ng-if="llama">
                    <div class="sub-menu">
                        <div class="col-xs-3 col-md-3 col-sm-3 col-lg-3 clickable" ng-click="showBasicInfo()">Basic info</div>
                        <div class="col-xs-3 col-md-3 col-sm-3 col-lg-3 clickable" ng-click="showScientificDetails()">Scientific Details</div>
                        <div class="col-xs-3 col-md-3 col-sm-3 col-lg-3 clickable" ng-click="showSocialLife()">Social Life</div>
                        <div class="col-xs-3 col-md-3 col-sm-3 col-lg-3 clickable" ng-click="showFacts()">Facts</div>
                    </div>
                    <div class="details">
                        <div ng-if="basicInfo">
                            <div class="col-xs-8 col-md-8 col-sm-8 col-lg-8 text">
                                <p>Llama - a camel like social animal found in South America have widely domesticated since 
                                    pre Columbus era mainly used for transportation. They are around 1.7m to 1.8m tall at 
                                    the top of the head and weight around 300-400 lbs. Unlike camels they do not have hump
                                    although they are highly thirst tolerant enabling them to walk 5-8 miles while carrying
                                    loads euivalent upto 30% of their body weight. Also, can reach speeds up to 35mph.
                                </p>
                            </div>
                            <div class="col-xs-4 col-md-4 col-sm-4 col-lg-4 picture">
                                <img class="image" src="resources/pic3.jpg" alt="llama picture"/>
                            </div>
                        </div>
                        <div ng-if="scientificDetails">
                            <div class="col-xs-8 col-md-8 col-sm-8 col-lg-8 text">
                                <p>Scientific name (species) of llama is 'Lama glama'. Their average life span is 15-20 
                                    years. Due to their extremly long and complex intestine they can survive on much 
                                    less water water, vitamins and electrolytes gets reabsorbed while food waste is passing
                                     through. Their three compartment stomach allows them to comsume low quality high 
                                     cellulose food such as grass
                                </p>
                                <p>
                                    As they are mammals, they breed through mating. While females are mature to breed at 18
                                    -24 months old, males get mature to breed at an age of around 3 years. The gestation 
                                    period is approximately 350 days. Typically, only one cria (llama baby) is born at a time. 
                                </p>    
                            </div>
                            <div class="col-xs-4 col-md-4 col-sm-4 col-lg-4 picture">
                                <img class="image" src="resources/pic5.jpg" alt="llama picture"/>
                            </div>
                        </div>
                        <div ng-if="socialLife">
                            <div class="col-xs-8 col-md-8 col-sm-8 col-lg-8 text">
                                <p>Llamas are very well-socialized among themselve and often with human as well due to 
                                    which they can be well trained. They usually stay in families and trigger high 
                                    pitch alarms to warn other members in case of danger. However, they may spit 
                                    for the quest of rank. In case of mistreat, they may spit human as well although
                                    it is quite rare.
                                </p>
                                <p>
                                    Due to the ease of training and litte care, they are very useful. They are often used as 
                                    pack animals. In North America, they have been used as guard animals. Also, they are 
                                    good source of fibre due to their fine undercoat, which can be used for handicrafts and 
                                    garments of different colors. Due to lack of odor, their excreta is used as eco-friendly
                                    fertilizers.
                                </p>
                            </div>
                            <div class="col-xs-4 col-md-4 col-sm-4 col-lg-4 picture">
                                <img class="image" src="resources/pic4.jpg" alt="llama picture"/>
                            </div>
                        </div>
                        <div ng-if="facts">
                            <div class="col-xs-8 col-md-8 col-sm-8 col-lg-8 text">
                                <p>So llamas are smart, friendly, cooperative, fast, alert, and durable. With all these 
                                    qualifications llama became the national symbol of Peru. But that's it? Are they meant 
                                    to be just guards or do they have larger scope? Yes, they can be your fighter, savior in case of
                                    war. 
                                </p>
                                <p>
                                    "You players, you Villagers. Your war is destroying our world!" - Steve the Llama
                                </p>
                                <p>Steve the llama aka The Mighty Llama Spirit is a fictional charactor is know for such
                                    traits.
                                </p>
                            </div>
                            <div class="col-xs-4 col-md-4 col-sm-4 col-lg-4 picture">
                                <img class="image" src="resources/pic1.jpg" alt="llama picture"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div ng-if="me">
                    <div class="sub-menu">
                        <div class="col-xs-4 col-md-4 col-sm-4 col-lg-4 clickable" ng-click="showMyInfo()">My info</div>
                        <div class="col-xs-4 col-md-4 col-sm-4 col-lg-4 clickable" ng-click="showWebDetails()">Web Details</div>
                        <div class="col-xs-4 col-md-4 col-sm-4 col-lg-4 clickable" ng-click="showTechDetails()">Tech Details</div>
                    </div>
                    <div class="details">
                        <div ng-if="myInfo">
                            <div class="col-xs-8 col-md-8 col-sm-8 col-lg-8 text">
                                <p>Currently, I am a master's student at NYU Courant. I have full time experience of 
                                    developing web-applications that are scalable, responsive, localized, support
                                    accessibility (WCAG 2.0) and are used by thousands of people world wide every day.
                                    I find this field (especially the front-end) as quite challenging as it has to deal
                                    with several changes such as browser updates, device changes, cross-platform and 
                                    network speed. Therefore, an error-free site has to be tolerant to these.
                                </p>
                                <p><a href="https://www.linkedin.com/in/dibyajit/" target="_blank">Click here for my 
                                    complete profile </a></p>
                            </div>
                            <div class="col-xs-4 col-md-4 col-sm-4 col-lg-4 picture">
                                <img class="image" src="resources/pic6.jpg" alt="llama picture"/>
                            </div>
                        </div>
                        <div ng-if="webDetails">
                            <div class="col-xs-8 col-md-8 col-sm-8 col-lg-8 text">
                                <p>This site is structured into two main components - one for information related to llama
                                    that is the main purpose of the site, another for the details of the author and the technical
                                    details of this site.
                                </p>
                                <p>
                                    Since it is a very light weight site, it is a single page application. While maintaining 
                                    a basic layout without using too many fancy CSS stuffs, different skills have been 
                                    demonstrated. Visitor can get the information without scroll and it is responsive to
                                    different screen sizes.
                                </p>
                                <p>
                                    Different types of information about llama have been segregated so that it can helpful
                                    for different section of visitors. Whether someone just wants to know about what is 
                                    llama or someone is searching for some fun facts, this site serves everyone. 
                                </p>
                            </div>
                            <div class="col-xs-4 col-md-4 col-sm-4 col-lg-4 picture">
                                <img class="image" src="resources/pic7.png" alt="llama picture"/>
                            </div>
                        </div>
                        <div ng-if="techDetails">
                            <div class="col-xs-8 col-md-8 col-sm-8 col-lg-8 text">
                                <p>Apart from basic HTML, CSS and JavaScript, AngularJs has been used for switching 
                                    contents based upon menu items click. Since AngularJs provides two way binding, it
                                    eases the effort of controlling DOM elements through JavaScript. 
                                </p>
                                <p>
                                    In order to make it responsive, Bootstrap has been used. Since there isn't too much css
                                    involved therefore no CSS pre-processor has been used.   
                                </p>
                            </div>
                            <div class="col-xs-4 col-md-4 col-sm-4 col-lg-4 picture">
                                <img class="image" src="resources/pic8.jpg" alt="llama picture"/>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </section>
        <footer></footer>
    </body>

</html>
