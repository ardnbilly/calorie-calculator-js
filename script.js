function getBMR(weight, height, age, gen) {
  let bmr = '';
  const maleFormula = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
  const femaleFormula = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
  if (gen === 'male') {
    bmr = maleFormula;
  } else {
    bmr = femaleFormula
    }
    return bmr;
  }

function getActivityModifier(activity) {
  switch (activity) {
    case 'sedentary':
      return 1.2;
    case 'light':
      return 1.375;
    case 'moderate':
      return 1.55;
    case 'active':
      return 1.725;
    default:
      return 1.9;
  }
}

function getAMR(activity, bmr) {
  const activityModifier = getActivityModifier(activity);
  return bmr * activityModifier;
}

function getInputUser() {
  const age = document.getElementById('age').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const activity = document.querySelector('.activity').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  return { age, height, weight, activity, gender };
}

const checkButton = document.getElementById('check');
const div = document.querySelector('.result')
const h2 = document.querySelector('h2')
const p = div.querySelector('p')

// get result calculation
checkButton.addEventListener('click', (elem) => {
  const { age, height, weight, activity, gender } = getInputUser();

  const bmr = getBMR(weight, height, age, gender);
  const result = getAMR(activity, bmr);

  elem.preventDefault()

  h2.style.display = 'block';
  p.innerHTML = `${Math.floor(result)}`;
})
