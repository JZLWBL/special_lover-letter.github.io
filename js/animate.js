// 设定开始日期
const startDate = new Date("2022-09-01"); // 你们的纪念日，改成你们的时间
const now = new Date();

// 计算相差的天数
function getDaysDiff(d1, d2) {
  return Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
}

const totalDays = getDaysDiff(startDate, now);

const progressBar = document.getElementById("progress");
const daysCount = document.getElementById("days-count");

let currentDay = 0;

function animateTimeAxis() {
  if (currentDay <= totalDays) {
    const percent = (currentDay / totalDays) * 100;
    progressBar.style.width = percent + "%";
    daysCount.textContent = `已在一起 ${currentDay} 天`;
    currentDay++;
    setTimeout(animateTimeAxis, 40); // 调整动画速度
  } else {
    // 动画结束后跳转到主页面
    setTimeout(() => {
      window.location.href = "main.html";
    }, 1500);
  }
}

// 页面加载后开始动画
window.onload = () => {
  animateTimeAxis();
};
