// Your deployed contract ABI
const abi = ["YOUR ABI"];

// Your deployed contract address
const contractAddress = "Your deployed contract address";

let web3_local = null;
let contract = null;
let account = null;

const initProvider = () => {
  if (typeof web3 !== "undefined") {
    web3_local = new Web3(ethereum);
  } else {
    // set the provider you want from Web3.providers
    web3_local = new Web3(
      new Web3.providers.HttpProvider("http://localhost:8545")
    );
  }
  getAccount();
};

const getAccount = async () => {
  let accounts = await web3_local.eth.getAccounts();
  account = accounts[0];
  getContract();
};

const getContract = async () => {
  contract = new web3_local.eth.Contract(abi, contractAddress);
  // console.log(contract);
};

initProvider();

// UI actions ------------------------------------------------>

//For getting Student Count
$("#btnCount").click(async () => {
  const stuCount = await contract.methods.countStudents().call();
  $("#stdCount").html("There are currently " + stuCount + " student(s)");
});

//For getting Student ID List
$("#btnStdIds").click(async () => {
  $("#stdIds").html("");
  const stuList = await contract.methods.getStudents().call();

  $.each(stuList, (index, value) => {
    $("#stdIds").append("Student " + (index + 1) + ": " + value + "<br>");
  });
});

//For getting student details
$("#btnDetails").click(async () => {
  const student = await contract.methods
    .getParticularStudent($("#idDetails").val())
    .call();

  if (student[0]) {
    $("#stdDetails").html(
      "Name: " +
        student[0] +
        " " +
        student[1] +
        "<br />" +
        "Age: " +
        student[2] +
        "<br />" +
        "Attendance : " +
        student[3] +
        " Days present"
    );
  } else $("#stdDetails").html("No student found");
});

//For Incrementing Attendance
$("#btnIncAttnd").click(async () => {
  await contract.methods
    .incrementAttendance($("#idAttendance").val())
    .send({ from: account });
  const student = await contract.methods
    .getParticularStudent($("#idAttendance").val())
    .call();
  if (student[0]) {
    $("#attendance").html(
      "Attendance Incremented to " +
        student[3] +
        " for " +
        student[0] +
        " " +
        student[1]
    );
  } else $("#attendance").html("No student found");
});

//For Creating new student
$("#newStudentForm").submit(async (e) => {
  e.preventDefault();

  $("#newStudentBtn").html("Uploading..");
  $("#newStudentBtn").attr("disabled", true);

  try {
    await contract.methods
      .createStudent(
        $("#id").val(),
        $("#age").val(),
        $("#fname").val(),
        $("#lname").val()
      )
      .send({
        from: account,
        gas: 1000000,
        gasPrice: 10000000000,
      });
    $("#studentDetails").html("New student created with id " + $("#id").val());
  } catch (err) {
    $("#studentDetails").html("Student id already exists");
  }

  $("#newStudentBtn").html("Submit");
  $("#newStudentBtn").attr("disabled", false);
});
