const hour_hand = document.querySelector('[data-hour-hand]');
const min_hand = document.querySelector('[data-min-hand]');
const sec_hand = document.querySelector('[data-sec-hand]');

const set_clock = () => {
  const curr_date = new Date();
  const sec_ratio = curr_date.getSeconds() / 60;
  const min_ratio = (sec_ratio + curr_date.getMinutes()) / 60;
  const hour_ratio = (min_ratio + curr_date.getHours()) / 12;
  set_rotation(sec_hand, sec_ratio);
  set_rotation(min_hand, min_ratio);
  set_rotation(hour_hand, hour_ratio);
};

const set_rotation = (element, rotation_ratio) => {
  element.style.setProperty('--rotation', rotation_ratio * 360);
};

setInterval(set_clock, 1000);

set_clock();