let input = document.querySelector('.search');
let output = document.querySelector('.output');
let data = [
{
  name: 'Zapp Brannigan',
  age: 45,
  prof: '25-Star General' },

{
  name: 'John Snow',
  age: 23,
  prof: 'Raven' },

{
  name: 'John Smith',
  age: 40,
  prof: 'Engineer' },

{
  name: 'Bilbo Buggins',
  age: 30,
  prof: 'Driver' },

{
  name: 'Eddard "Ned" Stark',
  age: 42,
  prof: 'King of the North' },

{
  name: 'Hodor',
  age: 43,
  prof: 'Hodor' },

{
  name: 'Tyrion Lannister',
  age: 35,
  prof: 'Just "BIG man"' },

{
  name: 'Margaery ‘Baratheon’ – Tyrell',
  age: 22,
  prof: 'HotHotHot' }];



function isMatch(value, regExp) {
  value += '';
  if (value.match(regExp)) {
    return true;
  } else {
    return false;
  }
}
function draw(data, container) {
  if (data.length) {
    let outHTML = `<table><thead><td>name</td><td>age</td><td>prof</td></thead>`;
    data.forEach((value, index) => {
      outHTML += `<tr class="tran" style="animation-delay: ${index / 30}s">
										<td>${value.name}</td>
										<td>${value.age}</td>
										<td>${value.prof}</td>
									</tr>`;
    });
    container.innerHTML = outHTML + `</table>`;
  } else {
    container.innerHTML = `<h3 class="err tran">Sorry, no match found</h3>`;
  }
}
draw([...data], output);
input.addEventListener('keyup', e => {
  let inputData = e.target.value;
  if (inputData !== '') {
    let reg = new RegExp(inputData, 'gi');
    let outar = [...data].filter((value, index) => {
      return isMatch(value.age, reg) ||

      isMatch(value.name, reg) ||

      isMatch(value.prof, reg);
    }).map(v => {
      return {
        age: `${v.age}`.replace(reg, `<span class='accent'>${inputData}</span>`),
        name: v.name.replace(reg, `<span class='accent'>${inputData}</span>`),
        prof: v.prof.replace(reg, `<span class='accent'>${inputData}</span>`) };

    });
    draw(outar, output);
  } else {
    draw([...data], output);
  }
});