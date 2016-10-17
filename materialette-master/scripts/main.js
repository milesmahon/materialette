//TODO: get rid of resize property of the app in general
//Don't highlight when in focus
//use arrow-left, arrow-right for multiple notes
//option to save to text file?? yes
const CONTAINER_WIDTH = 370;
// const TOOLTIP_WIDTH = 140;
// const TOOLTIP_HEIGHT = 40;
const State = {
  output: ['Note'], //could use as label using current-output methods
  index: 0,
  tooltipEle: document.getElementById('tooltip'),
  currentColor: null,
  pinnedEle: document.getElementById('pinned'),
  sharedObj: (require('electron').remote).getGlobal('sharedObj')
};

//// Populate color cells
const container = document.getElementById('container');
text = document.getElementById('textbox');
// text.value = "Hello";
//for (let name in colors) {
//  const row = document.createElement('section');
//  row.className = 'row';
//  colors[name].forEach((val, idx) => {
//    //Append the color cell
//    const cell = createCell(val[0], val[1]);
//    row.appendChild(cell);
//    //Create the gutter cell from the 500 series
//    if (val[0] === '500') {
//      row.insertBefore(createCell(val[0], val[1], true, name), row.childNodes[0]);
//    }
//  })
//  container.appendChild(row);
//}
//
//function createCell(series, color, isGutter, name) {
//  const cell = document.createElement('div');
//  cell.className = 'cell color';
//  if (isGutter) {
//    cell.innerHTML = `<span>${name}</span>`;
//    cell.className += ' gutter';
//  }
//  cell.setAttribute('data-series', series);
//  cell.style.backgroundColor = color;
//  cell.style.color = luminance(color, '#fff', '#444');
//  return cell;
//}
//
//// Track tooltip movement and display a color + info
//document.body.addEventListener('mousemove', e => {
//  const tooltip = State.tooltipEle;
//  let node;
//  if (e.target.className.indexOf('color') > -1) {
//    node = e.target;
//  } else if (e.target.parentNode.className.indexOf('color') > -1) {
//    node = e.target.parentNode;
//  } else {
//    tooltip.className = "hidden";
//    State.currentColor = null;
//    return;
//  }
//
//  const rgb = node.style.backgroundColor;
//  const series = node.getAttribute('data-series');
//  const match = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/.exec(rgb);
//  let hex = rgbToHex(match[1], match[2], match[3]);
//
//  let output;
//  switch (State.output[State.index]) {
//    case 'RGB':
//      value = rgb;
//      break;
//    case 'HEX':
//      value = hex;
//      break;
//  }
//  tooltip.style.backgroundColor = value;
//  tooltip.innerHTML = `<span style='font-size:1.2em'>${value}</span>${series}`;
//
//  tooltip.style.color = luminance(hex, '#fff', '#000');
//  State.currentColor = value;
//
//  // Adjust bounds of tooltip to avoid edge bleeding
//  let offsetX = e.clientX - TOOLTIP_WIDTH / 2;
//  let offsetY = e.clientY - TOOLTIP_HEIGHT - 10;
//  if (offsetX < 0) {
//    offsetX = e.clientX + 30;
//  } else if (offsetX > CONTAINER_WIDTH - TOOLTIP_WIDTH) {
//    offsetX -= 65;
//  }
//  if (offsetY < 0) {
//    offsetY = e.clientY + 25;
//  }
//  tooltip.style.top = offsetY + 'px';
//  tooltip.style.left = offsetX + 'px';
//  tooltip.className = "";
//});
//
//// Copy the user's selected color to the clipboard
//document.body.addEventListener('click', e => {
//  if (State.currentColor !== null) {
//    const clipboard = document.getElementById('clipboard');
//    let output;
//    clipboard.innerHTML = output = State.currentColor;
//    clipboard.select();
//    try {
//      var successful = document.execCommand('copy');
//      document.getElementById('color-copied').innerHTML = output;
//      const curtain = document.getElementById('curtain');
//      curtain.className = "";
//      setTimeout(function() {
//        curtain.className = "hidden";
//      }, 1000);
//    } catch (err) {
//      console.log(err);
//    }
//  }
//});
//
///**
// * Toggle between HEX or RGB for the tooltip + copy
// */
//function changeOutput() {
//  State.index++;
//  if (State.index === State.output.length) {
//    State.index = 0;
//  }
//  document.getElementById('current-output').innerHTML = State.output[State.index];
//}
//
function closeApp() {
  State.sharedObj.quit()
}
function hideApp() {
  State.sharedObj.hide();
}
function togglePinned() {
  State.sharedObj.pinned = State.pinnedEle.checked;
}
//
///** Utilities **/
//
//function luminance(sHexColor, sLight, sDark) {
//  const oRGB = hexToRgb(sHexColor);
//  const yiq = ((oRGB.r * 299) + (oRGB.g * 587) + (oRGB.b * 114)) / 1000;
//  return (yiq >= 128) ? sDark : sLight;
//}
