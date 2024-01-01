function getBMR(weight, height, age, gen) {
  let bmr = '';
  if (gen === 'male') {
    bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    return bmr;
  } else {
    bmr = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    return bmr;
    }
  }

function getAMR(activity, bmr) {
  if (activity === 'sedentary') {
    return bmr * 1.2
  } else if (activity === 'light') {
    return bmr * 1.375
  } else if (activity === 'moderate') {
    return bmr * 1.55
  } else if (activity === 'active') {
    return bmr * 1.725
  } else {
    return bmr * 1.9
  }
}

const checkButton = document.getElementById('check');
const div = document.querySelector('.result')
const h2 = document.querySelector('h2')
const p = div.querySelector('p')

// get result calculation
checkButton.addEventListener('click', (elem) => {

  const age = document.getElementById('age').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const activity = document.querySelector('.activity').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const bmr = getBMR(weight, height, age, gender);
  const result = getAMR(activity, bmr);

  elem.preventDefault()

  h2.style.display = 'block';
  p.innerHTML = `${Math.floor(result)}`;
})