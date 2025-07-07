// 示例故事数据，后续可改为 JSON 文件动态加载
const stories = [
    { date: "2023-01-01", title: "第一次约会", content: "我们第一次手牵手散步。" },
    { date: "2023-05-20", title: "一起看星星", content: "那晚的星空特别美。" },
    { date: "2023-08-15", title: "旅行小记", content: "去了海边，留下美好回忆。" }
  ];
  
  // 示例地点数据
  const places = [
    { name: "北京", description: "首都，我们一起去的第一座大城市。" },
    { name: "厦门", description: "海边的浪漫城市。" },
    { name: "杭州", description: "西湖边的温馨时光。" }
  ];
  
  function loadStories() {
    const container = document.getElementById("story-list");
    stories.forEach(story => {
      const div = document.createElement("div");
      div.style.borderLeft = "3px solid #ff3399";
      div.style.padding = "10px 15px";
      div.style.marginBottom = "15px";
      div.style.background = "#ffe6f0";
      div.innerHTML = `<strong>${story.date} - ${story.title}</strong><p>${story.content}</p>`;
      container.appendChild(div);
    });
  }
  
  function loadPlaces() {
    const container = document.getElementById("places-list");
    places.forEach(place => {
      const div = document.createElement("div");
      div.style.border = "1px solid #ff99cc";
      div.style.padding = "10px 15px";
      div.style.marginBottom = "15px";
      div.style.borderRadius = "8px";
      div.style.background = "#fff0f5";
      div.innerHTML = `<strong>${place.name}</strong><p>${place.description}</p>`;
      container.appendChild(div);
    });
  }
  
  window.onload = () => {
    loadStories();
    loadPlaces();
  };
  