var config = {
    apiKey: "AIzaSyCICN6u0wTOKERYz1ceaZPlxWt217uthnA",
    authDomain: "train-scheduler-caccd.firebaseapp.com",
    databaseURL: "https://train-scheduler-caccd.firebaseio.com",
    projectId: "train-scheduler-caccd",
    storageBucket: "",
    messagingSenderId: "425865483521"
};
firebase.initializeApp(config);

var database = firebase.database()


$(document).on("click", "#submit", function (e) {
    e.preventDefault()
    database.ref().push({
        trainName: $("#Train-Name").val(),
        destination: $("#Destination").val().trim(),
        firstTrain: $("#First-Train").val().trim(),
        frequency: $("#Frequency").val().trim(),
    })

})

database.ref().on("child_added", function(snapshot){
    console.log(snapshot.val())
    var row= $("<tr>")
    var trainName = $("<th>")
    var destination = $("<td>")
    var firstTrain = $("<td>")
    var frequency = $("<td>")
    var minutesAway= $("<td>")
    trainName.text(snapshot.val().trainName)
    destination.text(snapshot.val().destination)
    firstTrain.text(snapshot.val().firstTrain)
    frequency.text(snapshot.val().frequency)
    //gonna need some voodoo to calculate minutes away
    // and next arrival
    row.append(trainName)
    row.append(destination)
    row.append(frequency)
    row.append(firstTrain)
    row.append(minutesAway)
    $("tbody").append(row)

})
