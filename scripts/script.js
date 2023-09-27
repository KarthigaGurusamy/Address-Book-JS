let data = [
  { Id: 1, Name: "ABC", Phno: 12345, Address: "Chennai" },
  { Id: 2, Name: "ABC", Phno: 23456, Address: "Chennai" },
  { Id: 3, Name: "ABC", Phno: 34567, Address: "Chennai" },
  { Id: 4, Name: "ABC", Phno: 45678, Address: "Chennai" },
  { Id: 5, Name: "ABC", Phno: 56789, Address: "Chennai" },
];

let id = 5;
let isEdited = 0;

const datasRef = document.getElementById("Datas");
const nameInputRef = document.getElementById("nameinput");
const phnoInputRef = document.getElementById("phnoinput");
const addressInputRef = document.getElementById("addressinput");
const buttonRef = document.getElementById("button1");

const deleteData = (deleteid) => {
   data = data.filter((del)=>{
    if(del.Id!==deleteid){
      return del;
    }
   });
   displayMethod();
};

const editData = (editId) => {
  //   console.log("success " +editId);
  //   const val = data.find((eid) => data.Id === editId);
  //   buttonRef.innerText = "Edit";
  //   console.log(val);
  // nameInputRef.value = val.Name;
  // phnoInputRef.value = val.Phno;
  // addressInputRef.value = val.Address;
  isEdited = editId;
  for (let i of data) {
    if (i.Id === editId) {
      buttonRef.innerText = "Edit";
      nameInputRef.value = i.Name;
      phnoInputRef.value = i.Phno;
      addressInputRef.value = i.Address;
    }
  }
};

const displayMethod = () => {
  let personsData = "";
  for (let addressdata of data) {
    personsData += `<div class="d-flex align-items-center justify-content-between p-2 border-bottom border-primary">
        <p class="fs-5 m-0">${addressdata.Name}</p>
        <p class="fs-5 m-0">${addressdata.Phno}</p>
        <p class="fs-5 m-0">${addressdata.Address}</p>
        <div>
            <button class="btn fs-5" onClick="editData(${addressdata.Id})">Edit</button>
            <button class="btn fs-5 text-danger" onClick="deleteData(${addressdata.Id})">Delete</button>
        </div>
    </div>`;
  }
  datasRef.innerHTML = personsData;
  //console.log(personsData);
};

buttonRef.addEventListener("click", () => {
  if (nameInputRef !== "" && phnoInputRef !== "" && addressInputRef !== "") {
    if (isEdited === 0) {
      data.push({
        Id: ++id,
        Name: nameInputRef.value,
        Phno: phnoInputRef.value,
        Address: addressInputRef.value,
      });
      nameInputRef.value = "";
      phnoInputRef.value = "";
      addressInputRef.value = "";
      displayMethod();
    } else {
      for (let addressdata of data) {
        if (addressdata.Id === isEdited) {
          addressdata.Name = nameInputRef.value;
          addressdata.Phno = phnoInputRef.value;
          addressdata.Address = addressInputRef.value;
        }
      }
      isEdited = 0;
      buttonRef.innerText = "Submit";
      nameInputRef.value = "";
      phnoInputRef.value = "";
      addressInputRef.value = "";
      displayMethod();
    }

    // console.log(data);
  }
});

displayMethod();
