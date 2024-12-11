function validateInput() {
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");

    let dayError = document.getElementById("day-error");
    let monthError = document.getElementById("month-error");
    let yearError = document.getElementById("year-error");
    let dateError = document.getElementById("date-error");

    let valid = true;

    if (day.value.trim() === "") {
        day.classList.add("red");
        dayError.style.display = "block";
        valid = false;
    } else {
        day.classList.remove("red");
        dayError.style.display = "none";
    }

    if (month.value.trim() === "") {
        month.classList.add("red");
        monthError.style.display = "block";
        valid = false;
    } else {
        month.classList.remove("red");
        monthError.style.display = "none";
    }

    if (year.value.trim() === "") {
        year.classList.add("red");
        yearError.style.display = "block";
        valid = false;
    } else {
        year.classList.remove("red");
        yearError.style.display = "none";
    }

    // Check if the date is valid
    if (valid) {
        let birthDate = new Date(year.value, month.value - 1, day.value);
        if (birthDate.getDate() != day.value || birthDate.getMonth() != month.value - 1 || birthDate.getFullYear() != year.value) {
            dateError.style.display = "block";
            valid = false;
        } else {
            dateError.style.display = "none";
        }
    } else {
        dateError.style.display = "none";
    }

    return valid;
}

function displayValues() {
    if (!validateInput()) {
        return;
    }

    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    let birthDate = new Date(year, month - 1, day);
    let today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('years').innerHTML = '<span class="highlight">' + ageYears + '</span><span class="black"> years</span>';
    document.getElementById('months').innerHTML = '<span class="highlight">' + ageMonths + '</span><span class="black"> months</span>';
    document.getElementById('days').innerHTML = '<span class="highlight">' + ageDays + '</span><span class="black"> days</span>';
}
