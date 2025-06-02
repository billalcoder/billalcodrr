const Addlistbtn = document.querySelector(".img3")
const inputList = document.querySelector(".input-list")
const cancelBtn = document.querySelector(".cancel")
const applyBtn = document.querySelector(".APPLY")
const inputValue = document.querySelector(".input-type")
const todoList = document.querySelector(".todoList")
const h1 = document.querySelector(".h1")
const UpdateBtn = document.querySelector(".Update")
const darkmode = document.querySelector("#darkmode")
const body = document.querySelector("body")
const search = document.querySelector(".search")
const user = JSON.parse(localStorage.getItem("User")) || []

search.addEventListener("input" , (e)=>{
    console.log("hi");
  const user = JSON.parse( localStorage.getItem("User"))
  const value = search.value
  const filterValue =   user.filter(user => user.Aim == value)
  todoList.innerHTML = ""
 showUser(filterValue)
 if(search.value === ""){
     showUser(user)
    }
})

showUser(user)


function showUser(arr){
arr.forEach((e) => {
    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.id = e.Aim
    const label = document.createElement("label")

    label.htmlFor = e.Aim
    label.innerHTML = e.Aim

    checkBox.addEventListener("click", (ev) => {
        label.style.textDecoration = "line-through";
    })
    const img1 = document.createElement("img")
    img1.src = "./png/trash.png"

    img1.addEventListener("click", (ev) => {
        const targetAim = e.Aim;

        const updatedUsers = user.filter(users => users.Aim !== targetAim);

        localStorage.setItem("User", JSON.stringify(updatedUsers));

        location.reload()
    });


    const img2 = document.createElement("img")
    img2.src = "./png/Frame 6.png"

    img2.addEventListener("click", (ev) => {
        h1.innerHTML = "Update"
        inputList.style.display = "block"
        UpdateBtn.style.display = "block"
        applyBtn.style.display = "none"
        console.log(applyBtn);
        UpdateBtn.addEventListener("click", (ev) => {
            console.log(e.Aim);
            const value = inputValue.value
            e.Aim = value
            const newObj = user.map((user) => {
                return user
            })
            localStorage.setItem("User", JSON.stringify(newObj))
            inputList.style.display = "none"
            location.reload()
        })
    })

    const hr = document.createElement("hr")

    todoList.append(checkBox, label, img1, img2, hr)
});
}


// showUser(Addlistbtn)
Addlistbtn.addEventListener("click", (e) => {
    inputList.style.display = "block"
    h1.innerHTML = "new value"
})

// showUser(cancelBtn)
cancelBtn.addEventListener("click", (e) => {
    inputList.style.display = "none"
})

function storedata(array){
array.addEventListener("click", (e) => {
    applyBtn.style.display = "display"
    let arr = JSON.parse(localStorage.getItem("User")) || []

    const value = inputValue.value
    if (value === "") {
        return console.log("valuse is not filed");
    }

    const obj = {
        Aim: value,
        status: "false"
    }
    arr.push(obj)
    localStorage.setItem("User", JSON.stringify(arr))

    console.log(arr);

    inputList.style.display = "none"
    inputValue.value = ""

    location.reload()
})
}

storedata(applyBtn)
// applyBtn.addEventListener("click", (e) => {
//     applyBtn.style.display = "display"
//     let arr = JSON.parse(localStorage.getItem("User")) || []

//     const value = inputValue.value
//     if (value === "") {
//         return console.log("valuse is not filed");
//     }

//     const obj = {
//         Aim: value,
//         status: "false"
//     }
//     arr.push(obj)
//     localStorage.setItem("User", JSON.stringify(arr))

//     console.log(arr);

//     inputList.style.display = "none"
//     inputValue.value = ""

//     location.reload()
// })

darkmode.addEventListener("click", (e) => {
    const darkmode = document.getElementById("darkmode");
    const body = document.body;

    darkmode.addEventListener("click", () => {
        body.classList.toggle("dark");
        
        inputList.classList.toggle("dark")
    });
    
})