//constructor notation//
function Candy (name, imgSrc) {
    this.name = name;
    this.imgSrc = imgSrc;
}


//array//
const candies = [
    new Candy ("Kit-Kat","Images/Kit-Kat.jpg"),
    new Candy ("M&Ms", "Images/M&M's.jpg"),
    new Candy ("Sour Patch", "Images/Sour Patch.jpg"),
    new Candy ("Twix", "Images/Twix.jpeg"),
];

//function for generating random index//
function generateRandomCandy() {
    const randomIndex = Math.floor(Math.random() * candies.length);
    const selectedCandy = candies[randomIndex];


//call images by id//
const candyImage = document.getElementById("images");
    candyImage.src = selectedCandy.imgSrc;
    candyImage.alt = selectedCandy.name;
}
