
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const JOBS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function createFreelancer() {
  const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
  const randomJob = JOBS[Math.floor(Math.random() * JOBS.length)];
  const randomRate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;

  return {
    name: randomName,
    occupation: randomJob,
    rate: randomRate
  };
}


let freelancers = [];

for (let i = 0; i < NUM_FREELANCERS; i++) {
  const newFreelancer = createFreelancer();
  freelancers.push(newFreelancer);
}


function calculateAverageRate() {
  let total = 0;
  for (let i = 0; i < freelancers.length; i++) {
    total += freelancers[i].rate;
  }
  let average = total / freelancers.length;
  return average.toFixed(2); 
}

let averageRate = calculateAverageRate();


function makeFreelancerRow(freelancer) {
  let row = "<tr>";
  row += "<td>" + freelancer.name + "</td>";
  row += "<td>" + freelancer.occupation + "</td>";
  row += "<td>$" + freelancer.rate + "</td>";
  row += "</tr>";
  return row;
}


function makeAllFreelancerRows() {
  let rows = "";
  for (let i = 0; i < freelancers.length; i++) {
    rows += makeFreelancerRow(freelancers[i]);
  }
  return rows;
}

function makeAverageRateMessage() {
  return "Average Hourly Rate: $" + averageRate;
}

function render() {

  const app = document.getElementById("app");


  app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <p>${makeAverageRateMessage()}</p>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody id="FreelancerRows">
        ${makeAllFreelancerRows()}
      </tbody>
    </table>
  `;
}


render();