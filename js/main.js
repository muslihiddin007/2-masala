let sum = 0;

function sumSalaries(salaries){
	let values = Object.values(salaries);
	for(const val of values){
		sum += val;
	}
	return sum;
}

var salaries = {
	"sardor": 3000,
	"Shohruhbek": 5200,
	"Muslihiddin": 1800
}

console.log(sumSalaries(salaries)); // Natija: 10000 -> chiqishi kk
document.querySelector('.result').innerHTML = "Jami: " + sum;