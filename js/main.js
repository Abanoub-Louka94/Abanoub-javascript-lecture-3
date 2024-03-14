let newArray = {
    firstName: "Abanoub",
    lastName: "Louka",
    job: {
        webDeveloper: [20000, 30000],
        pilot: [1000, 2000],
        shipCaptain: [40000, 60000]
    },
},
    content = document.querySelector("h1");

content.textContent = "max salary for pilot job is " + newArray.job.pilot[1]