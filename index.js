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
appName.innerText = apps[0];
appName.style.color = colors[0];

let linkName = document.getElementById('link-app');
linkName.style.color = colors[0];
linkName.style.textDecoration = 'underline'

const linkers = document.getElementsByClassName('linkers')

const toggleDark = () => {
  for(let i = 0; i < linkers.length; i++) {
    linkers[i].style.color = 'white';
  }
  linkName.style.textDecoration = 'none'
  document.body.style.backgroundColor = 'black';
  document.body.style.color = '#FFFFFF';
  document.getElementsByClassName('side-btns')[0].style.color = 'white';
  document.getElementsByClassName('side-btns')[1].style.color = 'white';
}

const toggleLight = () => {
  for(let i = 0; i < linkers.length; i++) {
    if (linkers[i].innerText != apps[0]) {
      linkers[i].style.color = 'black';
    }
  }
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  document.getElementsByClassName('side-btns')[0].style.color = 'black';
  document.getElementsByClassName('side-btns')[1].style.color = 'black';
}

const rotateRight = () => {
  apps.push(apps.shift())
  appName.innerText = apps[0]

  colors.push(colors.shift())
  appName.style.color = colors[0]

  if (apps[0] != 'grave') {
    linkName.style.color = 'black'
    linkName.style.textDecoration = 'none'
    linkName = document.getElementById('link-' + apps[0])
    linkName.style.color = colors[0]
    linkName.style.textDecoration = 'underline'
  }
  
  apps[0] === 'grave' ? toggleDark() : toggleLight();

  return apps
}

const rotateLeft = () => {
  apps.unshift(apps.pop())
  appName.innerText = apps[0]

  colors.unshift(colors.pop())
  appName.style.color = colors[0]

  if (apps[0] != 'grave') {
    linkName.style.color = 'black'
    linkName.style.textDecoration = 'none'
    linkName = document.getElementById('link-' + apps[0])
    linkName.style.color = colors[0]
    linkName.style.textDecoration = 'underline'
  }
    
  apps[0] === 'grave' ? toggleDark() : toggleLight();

  return apps
}

document.getElementById('left-button').onclick = rotateLeft;
document.getElementById('right-button').onclick = rotateRight;
