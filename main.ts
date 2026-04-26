import DownloadManager from "bun-downloader-manager";

console.log({ DownloadManager });

const fileUrl = await fetch(
  "https://www.wow.xxx/get_file/8512/b98568b646dbe994a8239a96d06272de4256acbadf/93814000/93814514/93814514_720m.mp4/?download=true&download_filename=joshua-lewis-pays-gracey-snow-for-her-pussy-after-seeing-her-tits_720m.mp4",
);

console.log("FILE URL:", fileUrl.url);

const urls = [
  // "https://www.wow.xxx/get_file/8512/b98568b646dbe994a8239a96d06272de4256acbadf/93814000/93814514/93814514_720m.mp4/?download=true&download_filename=joshua-lewis-pays-gracey-snow-for-her-pussy-after-seeing-her-tits_720m.mp4",
  // fileUrl.url,
  //
  "https://ip406309597.ahcdn.com/key=dFI2NT18mu-LYGk83dy2TA,s=,end=1777166883,ip=95.179.156.250/state=ae1cX7Oc/buffer=543296/speed=362198/reftag=0330073800/download2=/ssd2/178/0/486658860/joshua-lewis-pays-gracey-snow-for-her-pussy-after-seeing-her-tits_720m.mp4",
];

const downloadManager = new DownloadManager({
  consoleLog: true, // Enable logging
  method: "queue", // Use queue-based download
  downloadFolder: "downloads",
});

await downloadManager.download(urls);
