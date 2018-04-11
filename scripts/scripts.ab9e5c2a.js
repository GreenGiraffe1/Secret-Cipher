"use strict";angular.module("secretCipherApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("secretCipherApp").controller("EncryptCtrl",function(){this.subject='Fkqolarzqflk ql Zxbpxo\'p "Qeb Zlknrbpq lc Dxri"',this.message="Xii Dxri (jlabok Coxkzb) fp afsfaba fkql qeobb mxoqp, lkb lc tefze qeb Ybidxb fkexyfq, qeb Xnrfqxkf xklqebo, qelpb tel fk qebfo ltk ixkdrxdb xob zxiiba Zbiqp, fk lro Dxrip, qeb qefoa. Xii qebpb afccbo colj bxze lqebo fk ixkdrxdb, zrpqljp xka ixtp. Qeb ofsbo Dxolkkb pbmxoxqbp qeb Dxrip colj qeb Xnrfqxkf; qeb Jxokb xka qeb Pbfkb pbmxoxqb qebj colj qeb Ybidxb.",this.shift=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],this.charShift=23,this.cryptState=-1,this.toggleCrypt=function(a){return""===this.message?void alert("Must enter a message before taking that action."):(this.subject=this.caesar(this.subject,a),this.message=this.caesar(this.message,a),void(this.cryptState*=-1))},this.caesar=function(a,b){var c=a.split(""),d=[];0>b&&(b=26+b);for(var e=0;e<c.length;e++){var f=c[e],g=f.charCodeAt(),h=0;if(91>g&&g>64&&(h=g+b>90?64+(g+b)%90:g+b),123>g&&g>96&&(h=g+b>122?96+(g+b)%122:g+b),0!==h){var i=String.fromCharCode(h);d.push(i)}else d.push(f)}var j=d.join("");return j}}),angular.module("secretCipherApp").run(["$templateCache",function(a){a.put("views/encrypt.html",'<div class="intro"> <p>Julius Caesar was a great general and politician, but he had many enemies. He encoded his communications to frustrate their spies. Caesar\'s method was so effective that it still bears his name. It obscures a message by shifting each letter by a secret number of characters. Though not secure today, it continues to be used in online forums to hide spoilers and nsfw content from unintentional viewing. It\'s pattern is easily recognizable to computers, and can even be discerned with a keen eye. </p> <br> <p>Put your friends to the test. Write a secret message and see if they can break Caesar\'s Cipher!</p> </div> <div class="subject"> <h4><b>Subject:</b></h4> <input class="subject-input" ng-model="encrypt.subject" type="text" name="subject" value="{{encrypt.subject}}"> </div> <div class="body"> <h4><b>Message:</b></h4> <textarea name="msgBody" ng-model="encrypt.message" rows="6" cols="80">{{encrypt.message}}</textarea> <p class="msg-reminder" ng-if="encrypt.message === \'\'">Please enter a message.</p> </div> <div class="character-shift"> <h4><b>How many letters should the characters be shifted?</b></h4> <select class="" ng-model="encrypt.charShift" ng-options="x for x in encrypt.shift" name=""> </select> </div> <div class="convert"> <button class="cycle" ng-if="encrypt.cryptState === 1" ng-click="encrypt.toggleCrypt(encrypt.charShift)" type="button" name="encrypt">Encrypt</button> <button class="cycle" ng-if="encrypt.cryptState === -1" ng-click="encrypt.toggleCrypt(encrypt.charShift * (-1))" type="button" name="decrypt">Decrypt</button> </div>')}]);