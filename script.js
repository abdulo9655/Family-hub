// ==============================
// Family Hub
// Login System
// ==============================

// บัญชีที่อนุญาต
const accounts = [
    "aumboonpakin",
    "supanan",
    "jarun"
];

// เข้าสู่ระบบ
function login(){

    const username = document
        .getElementById("username")
        .value
        .trim()
        .toLowerCase();

    if(accounts.includes(username)){

        localStorage.setItem(
            "familyUser",
            username
        );

        window.location.href =
        "dashboard.html";

    }else{

        alert(
        "❌ ไม่มีสิทธิ์เข้าใช้งาน"
        );

    }

}
