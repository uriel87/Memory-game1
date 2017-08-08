

var app = angular.module('app', ['ngAnimate']);

app.controller('memoryCtl', ['$scope', '$http', '$timeout', '$window', function ($scope, $http, $timeout, $window) {

    $scope.cardsList = [];
    $scope.pickFirstCard = null;
    $scope.pickSecondCard = null;
    $scope.showCard = false;
    $scope.gameOver = null;


    var classHideShow = {
        show : "cardBox showCard ",
        hide : "cardBox hideCard"
    }
    $scope.cardStay = $scope.cardsList.length;


    $http.get("./data/cards.js").then(function (response) {
        $scope.cardsList = response.data;
        // $scope.cardsList.concat($scope.cardsList);
        shuffle();
    });
    
    function shuffle() {
        $scope.session = true;
        var cardsLength = $scope.cardsList.length, temp, i, pos;
        $scope.cardStay = cardsLength/2;
        for (i = cardsLength-1; i > -1; i--) {
            pos = Math.floor(Math.random() * i);
            temp = $scope.cardsList[pos];
            $scope.cardsList[pos] = $scope.cardsList[i];
            $scope.cardsList[i] = temp;
            $scope.cardsList[i].id = i;
            $scope.cardsList[i].show = false;
            $scope.cardsList[i].style = classHideShow.hide;
            //console.log($scope.cardsList);
        }
    }
    
    $scope.pickCard = function (cardId) {
        if($scope.session == true) {
            if ($scope.cardsList[cardId].show == false) {
                showCard($scope.cardsList[cardId]);
                CheckMatch($scope.cardsList[cardId]);
            }
        }
    }

    function hideCard(card) {
        card.style = classHideShow.hide;
        card.show = false;

    }

    function showCard(card) {
        card.style = classHideShow.show + card.name;
        card.show = true;
    }

    function winedPick() {
        $scope.pickFirstCard = null;
        $scope.pickSecondCard = null;
        if($scope.cardStay) {
            $scope.cardStay--;
            if(0 == $scope.cardStay) {
                $scope.gameOver = "opacity";
                $scope.successDialog = true;
                $scope.successDialogWindow = "successDialogOpen";
            }
        }
        $scope.session = true;
    }

    function failedPick() {
        $scope.cardsList[$scope.pickFirstCard.id].style = classHideShow.hide;
        $scope.cardsList[$scope.pickFirstCard.id].show = false;
        $scope.cardsList[$scope.pickSecondCard.id].style = classHideShow.hide;
        $scope.cardsList[$scope.pickSecondCard.id].show = false;
        $scope.pickFirstCard = null;
        $scope.pickSecondCard = null;
        $scope.session = true;
    }

    function CheckMatch(pickCard) {
        if ($scope.pickFirstCard == null) {
            $scope.pickFirstCard = pickCard;
        } else {
            $scope.session = false;
            $scope.pickSecondCard = pickCard;
            if ($scope.pickFirstCard.name != $scope.pickSecondCard.name) {
                $timeout(failedPick, 1200);
            } else {
                winedPick()
            }
        }
    }


    $scope.playAgain = function () {
        $scope.successDialog = false;
        $scope.showCard = false;
        $scope.gameOver = null;
        $scope.successDialogWindow = "successDialogClose";
        shuffle();
    }


}]);