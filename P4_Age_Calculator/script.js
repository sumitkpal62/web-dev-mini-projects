const dateOfBirth = document.querySelector("#age");
const convertBtn = document.querySelector(".date button");
const currDate = new Date().toISOString().split("T")[0];
const result = document.querySelector(".result");

dateOfBirth.setAttribute("max", currDate)

const noOfDays = (y2, m2) => {
    return new Date(y2, m2, 0).getDate();
}

const dateDiff = (d1, d2, m1, m2, y1, y2) => {
    let l = [];

    let d3 = 0;
    let m3 = 0;
    let y3 = 0;

    if (d2 >= d1) {
        d3 = d2 - d1;
    }
    else {
        d3 = noOfDays(y2, m2) + d2 - d1;
        m2--;
    }
    l.push(d3);

    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        m3 = 12 + m2 - m1;
        y2--;
    }
    l.push(m3)

    y3 = y2 - y1;
    l.push(y3);

    return l;
}

const showResult = (l) => {
    result.innerText = `You are ${l[2]} years ${l[1]} months and ${l[0]} days old`
}


const calAge = () => {
    let birthDate = new Date(dateOfBirth.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let l = dateDiff(d1, d2, m1, m2, y1, y2);

    showResult(l);

}

convertBtn.addEventListener("click", calAge);