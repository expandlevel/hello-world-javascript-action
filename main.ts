import DownloadManager from "bun-downloader-manager";

const urls = [
  // "https://www.wow.xxx/get_file/8512/b98568b646dbe994a8239a96d06272de4256acbadf/93814000/93814514/93814514_720m.mp4/?download=true&download_filename=joshua-lewis-pays-gracey-snow-for-her-pussy-after-seeing-her-tits_720m.mp4",
  //
  "https://v5.cdnde.com/x5/upload_c320be7e88e22671a31d6157136a1f78/47272/47272_720p.mp4",
];

const downloadManager = new DownloadManager({
  consoleLog: true, // Enable logging
  method: "queue", // Use queue-based download
  downloadFolder: "downloads",
});

await downloadManager.download(urls);
