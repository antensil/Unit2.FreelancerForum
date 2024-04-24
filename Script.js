
const names = ["Alice", "Bob", "Carol", "David", "Emma"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Accountant"];

//  array of freelancers
let freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: 30 },
  { name: "Bob", occupation: "Teacher", startingPrice: 50 }
];

function renderFreelancers() {
  const tableBody = document.getElementById("freelancers-body");
  tableBody.innerHTML = ""; 
  
  freelancers.forEach(freelancer => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.startingPrice}</td>
    `;
    tableBody.appendChild(row);
  });
}

// to generate a new random freelancer list
function generateRandomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 70; // price between $70 & $169
  
  return { name: randomName, occupation: randomOccupation, startingPrice: randomPrice };
}

//  To calculate average starting price of freelancers
function calculateAveragePrice() {
  const totalPrices = freelancers.reduce((acc, curr) => acc + curr.startingPrice, 0);
  const averagePrice = totalPrices / freelancers.length;
  return averagePrice.toFixed(2); // Round to 2 decimal places
}

// This update the displayed average price
function updateAveragePrice() {
  const averagePriceElement = document.getElementById("average-price-value");
  const averagePrice = calculateAveragePrice();
  averagePriceElement.textContent = averagePrice;
}

//  new random freelancer
function addNewFreelancer() {
  const newFreelancer = generateRandomFreelancer();
  freelancers.push(newFreelancer);
  renderFreelancers();
  updateAveragePrice();
}

setInterval(addNewFreelancer, 5000); // Add a new freelancer every 5 seconds

renderFreelancers();
updateAveragePrice();
