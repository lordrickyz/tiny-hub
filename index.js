const apps = [
  'app',
  'blog',
  'shop',
  'note',
  'game',
  'grave'
];

const colors = [
  'blue',
  'yellow',
  'green',
  'pink',
  'lightblue',
  'red',
];


let appName = document.getElementById('app-name');
appName.innerText = apps[0]
appName.style.color = colors[0]

const toggleDark = () => {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = '#FFFFFF';
}

const toggleLight = () => {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}

const rotateRight = () => {
  apps.push(apps.shift())
  appName.innerText = apps[0]

  colors.push(colors.shift())
  appName.style.color = colors[0]

  apps[0] === 'grave' ? toggleDark() : toggleLight();

  return apps
}

const rotateLeft = () => {
  apps.unshift(apps.pop())
  appName.innerText = apps[0]

  colors.push(colors.shift())
  appName.style.color = colors[0]

    
  apps[0] === 'grave' ? toggleDark() : toggleLight();

  return apps
}

document.getElementById('left-button').onclick = rotateLeft;
document.getElementById('right-button').onclick = rotateRight;
