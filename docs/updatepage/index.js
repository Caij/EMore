// 读取地址中的内容
const urlForInfo = 'https://raw.githubusercontent.com/Caij/EMore/master/update/see_update';
//const urlForInfo = "https://caij.coding.net/p/datacenter/d/datacenter/git/raw/master/update/see_update"

fetch(urlForInfo).then(res => {
  if(res) {
    return res.json();
  }
}).then(res => {
  window.appInfo = res;

  const {url} = res || {};

  showAppInfo(res);
  addDownloadButton(url);
}).catch(e => {
  console.error(e);
});

// 将内容中的版本和更新日志显示

function showAppInfo(info) {
  if(!info) return;

  const { desc, versionName, url } = info || {};

  const divForVersion = document.getElementById('versionValue');
  divForVersion.innerHTML = versionName;

  const divForDesc = document.getElementById('descValue');
  divForDesc.innerHTML = desc;
}


// 增加下载按钮
function addDownloadButton(link) {
  if(!link) return;
  const downloadLinkATag = document.createElement('a');
  downloadLinkATag.setAttribute("href", link);
  downloadLinkATag.setAttribute("download", "app");
  downloadLinkATag.innerHTML = "下载"

  document.body.appendChild(downloadLinkATag);
}