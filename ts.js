
var firebaseConfig = {
  apiKey: "AIzaSyDZEs3ddtP2PaskZlDtPdgLB6-IJbVGx5Y",
  authDomain: "timesheet-project-cc6c1.firebaseapp.com",
  databaseURL: "https://timesheet-project-cc6c1.firebaseio.com",
  projectId: "timesheet-project-cc6c1",
  storageBucket: "",
  messagingSenderId: "403747809066",
  appId: "1:403747809066:web:2b06ff4b5e04212b636053"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database()

$("button").on("click", function (event) {
  event.preventDefault();

  //USER INPUT
  var employeeName = $("#newEmployee").val();
  var employeeRole = $("newRole").val();
  var startDate = $("#newStart").val();
  var employeeRate = $("#monthlyRate").val();


  database.ref().push({
    name: employeeName,
    role: employeeRole,
    start: startDate,
    rate: employeeRate
  });

  //Alert
  alert("Employee successfully added");

  $("newEmployee").val("");
  $("newRole").val("");
  $("newStart").val("");
  $("monthlyRate").val("");

});

database.ref().on("child_added", function (childSnapshot) {

  var employeeName = childSnapshot.val().name;
  var employeeRole = childSnapshot.val().role;
  var employeeStart = childSnapshot.val().start;
  var employeeRate = childSnapshot.val().rate;
  var employeeMonths = 3;
  var employeeTotal = employeeRate * employeeMonths;


  $("table tr:last").after("<tr><td>" + employeeName + "</td><td>" + employeeRole + "</td><td>" + employeeStart + "</td><td>" + employeeMonths + "</td><td>" + employeeRate + "</td><td>" + employeeTotal + "</td>");
  // var employeeStartPretty = moment.unix(employeeStart).format("MM/DD/YY");

  // var employeeBilled = employeeMonths * employeeRate;

  // var employeeMonths = moment().diff(moment.unix(employeeStart, "X"), "months");

  // var employeeBilled = employeeMonths * employeeRate;

  // $("#employee-table > tbody").append("<tr><td>" + employeeName + "</td><td>" + employeeRole + "</td><td>" + employeeStartPretty + "</td><td>" + employeeMonths + "</td><td>" + employeeRate + "</td><td>" + employeeBilled + "</td><td>");

});