dataSetVersion = "2019-07-18"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Higurashi", key: "higu" },
      { name: "Umineko", key: "umi" },
      { name: "Higanbana", key: "higan" },
      { name: "Rose Guns Days", key: "rgd" }
    ]
  },
  {
	 name: "Remove Extra Characters",
	 key: "extra",
	 tooltip: "Check this to remove characters featured in console arcs/side content.",
  }
];
dataSet[dataSetVersion].characterData = [
 {name: "Keiichi Maebara",
  img: "Y6T8TjF.png",
  opts: {series: ["higu"]}
 },
 {name: "Rena Ryuugu",
  img: "qS5R6cS.png",
  opts: {series: ["higu"]}
 },
 {name: "Rika Furude",
  img: "gL4iiqK.png",
  opts: {series: ["higu"]}
 },
 {name: "Satoko Houjou",
  img: "jYUHkI7.png",
  opts: {series: ["higu"]}
 },
 {name: "Satoshi Houjou",
  img: "DIKmr8c.png",
  opts: {series: ["higu"]}
 },
 {name: "Teppei Houjou",
  img: "aGLSkeD.png",
  opts: { series: ["higu"]}
 },
 {name: "Mion Sonozaki",
  img: "AQ6VVcx.png",
  opts: { series: ["higu"]}
 },
 {name: "Shion Sonozaki",
  img: "uwZbYAg.png",
  opts: {series: ["higu"]}
 },
 {name: "Ozaki Nagisa",
  img: "PvMUGds.png",
  opts: { series: ["higu"],
  extra: true}
 },
 {name: "Otobe Akira",
  img: "txikOlb.png",
  opts: { series: ["higu"],
  extra: true}
 },
 {name: "Tatsuyoshi Kasai",
  img: "Z7K99Lw.png",
  opts: {series: ["higu"]}
 },
 {name: "Oryou Sonozaki",
  img: "aC8Gwka.png",
  opts: {series: ["higu"]}
 },
 {name: "Jirou Tomitake",
  img: "BpPMX0X.png",
  opts: { series: ["higu"]}
 },
 {name: "Tomoko Okada",
  img: "5aLFzzb.png",
  opts: { series: ["higan"]}
 },
 {name: "Miyo Takano",
  img: "W775gXH.png",
  opts: { series: ["higu"]}
 },
 {name: "Hanyuu Furude",
  img: "l8J5Gg9.png",
  opts: {series: ["higu"]}
 },
 {name: "Tetsurou Okonogi",
  img: "KBWgQeg.png",
  opts: {series: ["higu"]}
 },
 {name: "Tamurahime-no-mikoto",
  img: "Ak0I1Dw.png",
  opts: { series: ["higu"],
  extra: true}
 },
 {name: "Rumiko Chie",
  img: "6sA8LEN.png",
  opts: { series: ["higu"]}
  },
 {name: "Akane Sonozaki",
  img: "BCp0HFm.png",
  opts: { series: ["higu"]}
 },
 {name: "Une",
  img: "FN1rFee.png",
  opts: { series: ["higu"],
  extra: true}
 },
 {name: "Koichi Kameda",
  img: "DBvTzUS.png",
  opts: {series: ["higu"]}
 },
 {name: "Tomita Daiki",
  img: "KNfgI8J.png",
  opts: {series: ["higu"]}
 },
 {name: "Okumura Suguru",
  img: "MA41SiZ.png",
  opts: {series: ["higu"]}
 },
 {name: "Willard H. Wright",
  img: "k6SDkCn.png",
  opts: { series: ["umi"]}
 },
 {name: "Battler Ushiromiya",
  img: "fA8AEjK.png",
  opts: {series: ["umi"]}
 },
 {name: "Rudolf Ushiromiya",
  img: "aHBsLMP.png",
  opts: {series: ["umi"]}
 },
 {name: "Jessica Ushiromiya",
  img: "luNEUF9.png", 
  opts: { series: ["umi"]}
 },
 {name: "Kyrie Ushiromiya",
  img: "bVmGeni.png",
  opts: { series: ["umi"]}
 },
 {name: "Maria Ushiromiya",
   img: "uYPpK3d.png",
   opts: { series: ["umi"]}
 },
 {name: "Rosa Ushiromiya",
  img: "FUahStQ.png",
  opts: { series: ["umi"]}
 },
 {name: "Eva Ushiromiya",
  img: "ZwDIKVP.png",
  opts: { series: ["umi"]}
 },
 {name: "Hideyoshi Ushiromiya",
  img: "nJaTvkO.png",
  opts: {series: ["umi"]}
 },
 {name: "George Ushiromiya",
  img: "B3U4YI4.png",
  opts: { series: ["umi"]}
 },
 {name: "Krauss Ushiromiya",
  img: "shOyVrv.png",
  opts: { series: ["umi"]}
 },
 {name: "Tsukada Satoshi",
  img: "7PktPjp.png",
  opts: {series: ["higu"],
  extra: true}
 },
 {name: "Natsuhi Ushiromiya",
  img: "VaS6yRv.png",
  opts: { series: ["umi"]}
 },
 {name: "Kinzo Ushiromiya",
  img: "iaBdNfb.png",
  opts: {series: ["umi"]}
 },
 {name: "Rina Mamiya",
  img: "vRR1ezS.png",
  opts: { series: ["higu"]}
 },
 {name: "Terumasa Nanjo",
   img: "2Qv6Zbq.png",
   opts: { series: ["umi"]}
 },
 {name: "Hameln",
  img: "3KnrmbY.png",
  opts: {series: ["higan"]}
 },
 {name: "Toshiro Gohda",
  img: "yLQi71L.png",
  opts: {series: ["umi"]}
 },
 {name: "Chiyo Kumasawa",
  img: "Z1YyGpY.png",
  opts: { series: ["umi"]}
 },
 {name: "Akira Todo",
  img: "X1tfKoe.png",
  opts: {series: ["higu"],
  extra: true}
 },
 {name: "Nomura",
  img: "j9YkwTL.png",
  opts: {series: ["higu"]}
 },
 {name: "Shannon",
  img: "Jbcnev5.png",
  opts: { series: ["umi"]}
 },
 {name: "Kanon",
  img: "N68FKAW.png",
  opts: { series: ["umi"]}
 },
 {name: "Beatrice",
  img: "xS1AawR.png",
  opts: { series: ["umi"]}
 },
 {name: "Bernkastel",
  img: "YvaUrSh.png",
  opts: { series: ["umi"]}
 },
 {name: "Lambdadelta",
  img: "IqFIW4B.png",
  opts: { series: ["umi"]}
 },
 {name: "Beatrice Castiglioni",
  img: "zau9NMY.png",
  opts: {series: ["umi"]}
 },
 {name: "Beatrice Ushiromiya",
  img: "8P0KK8f.png",
  opts: { series: ["umi"]}
 },
 {name: "Chick Beato",
  img: "2wHB3Oc.png",
  opts: { series: ["umi"]}
 },
 {name: "Elder Beato",
  img: "MJFNbS5.png",
  opts: { series: ["umi"]}
 },
 {name: "Clair Vaux Bernardus",
  img: "nfqv2cr.png",
  opts: { series: ["umi"]}
 },
 {name: "Yasu",
  img: "vYh9yNA.png",
  opts: {series: ["umi"]}
 },
 {name: "Black Battler",
  img: "E6AfIq1.png",
  opts: { series: ["umi"],
  extra: true}
 },
 {name: "Goat-kun",
  img: "6JOnqoW.png",
  opts: { series: ["umi"]}
 },
 {name: "Lucifer",
  img: "d96Cdhb.png",
  opts: { series: ["umi"]}
 },
 {name: "Satan",
  img: "1hbq7jy.png",
  opts: { series: ["umi"]}
 },
 {name: "Beelzebub",
  img: "Vsu8FL7.png",
  opts: { series: ["umi"]}
 },
 {name: "Belphegor",
  img: "WPLc0PC.png",
  opts: { series: ["umi"]}
 },
 {name: "Mammon",
  img: "2jlflzE.png",
  opts: { series: ["umi"]}
 },
 {name: "Asmodeus",
  img: "AWJwoeT.png",
  opts: { series: ["umi"]}
 },
 {name: "Leviathan",
  img: "NHDf9BQ.png",
  opts: { series: ["umi"]}
 },
 {name: "Gaap",
  img: "A5PMWpT.png",
  opts: { series: ["umi"]}
 },
 {name: "Hifumi Takano",
  img: "bPchoX6.png",
  opts: {series: ["higu"]}
 },
 {name: "Ronove",
  img: "RSy3uTb.png",
  opts: { series: ["umi"]}
 },
 {name: "Chiester 410",
  img: "OAaDSJR.png",
  opts: { series: ["umi"]}
 },
 {name: "EVA-Beatrice",
  img: "gAHz2Ij.png",
  opts: { series: ["umi"]}
 },
 {name: "Chiester 45",
  img: "6m7VBRo.png",
  opts: { series: ["umi"]}
 },
 {name: "Chiester 00",
  img: "6s3Azv4.png",
  opts: { series: ["umi"]}
 },
 {name: "Chiester 556",
  img: "ZwlzkhV.png",
  opts: { series: ["umi"]}
 },
 {name: "Mamoru Akasaka",
  img: "gtwN9w7.png",
  opts: { series: ["higu"]}
 },
 {name: "Kuraudo Ooishi",
  img: "06gXrc7.png",
  opts: { series: ["higu"]}
 },
 {name: "Kumagai Katsuya",
  img: "XAFdEDD.png",
  opts: { series: ["higu"]}
 },
 {name: "Flauros",
  img: "adxAXgc.png",
  opts: {series: ["umi"],
  extra: true}
 },
 {name: "Kiichiro Kimiyoshi",
  img: "0ujP6AI.png",
  opts: { series: ["higu"]}
 },
 {name: "Lion Ushiromiya",
  img: "xteIe8z.png",
  opts: { series: ["umi"]}
 },
 {name: "Dlanor A. Knox",
  img: "SAMoWCN.png",
  opts: { series: ["umi"]}
 },
 {name: "Gertrude",
  img: "knwfJ43.png",
  opts: { series: ["umi"]}
 }, 
 {name: "Cornelia",
  img: "8DbnC8T.png",
  opts: { series: ["umi"]}
 },
 {name: "Zepar",
  img: "l2bu6XC.png",
  opts: { series: ["umi"]}
 },
 {name: "Furfur",
  img: "51eTML0.png",
  opts: { series: ["umi"]}
 },
 {name: "Erika Furudo",
  img: "HLFZyVM.png",
  opts: { series: ["umi"]}
 },
 {name: "Sakutaro",
  img: "m8glAOQ.png",
  opts: { series: ["umi"]}
 },
 {name: "Ange Ushiromiya",
  img: "N4JtXNT.png",
  opts: { series: ["umi"]}
 },
 {name: "Hachijo Ikuko",
  img: "CktBjF6.png",
  opts: { series: ["umi"]}
 },
 {name: "Hachijo Tohya",
  img: "pOcjgsx.png",
  opts: { series: ["umi"]}
 },
 {name: "Featherine Augustus Aurora",
  img: "ee2WNc3.png",
  opts: { series: ["umi"]}
 },
 {name: "Virgilia",
  img: "nz5TPEK.png",
  opts: { series: ["umi"]}
 },
 {name: "Juuza Amakusa",
  img: "UulA84j.png",
  opts: { series: ["umi"]}
 },
 {name: "Tetsurou Okonogi",
  img: "eZmDJd7.png",
  opts: { series: ["umi"]}
 },
 {name: "Higanbana",
  img: "cI8XyPf.png",
  opts: { series: ["higan"]}
 },
 {name: "Marie Moriya",
  img: "suHQQqx.png",
  opts: { series: ["higan"]}
 },
 {name: "Mirror Marie",
  img: "8JhFIaC.png",
  opts: { series: ["higan"]}
 },
 {name: "Black Tea Gentleman",
  img: "DygYB56.png",
  opts: { series: ["higan"]}
 },
 {name: "Izanami",
  img: "xBtBjDk.png",
  opts: { series: ["higan"]}
 },
 {name: "Towada Yae",
  img: "QoAcu17.png",
  opts: { series: ["higu"],
  extra: true}
 },
 {name: "Headmaster",
  img: "ZIe2Zly.png",
  opts: { series: ["higan"]}
 },
 {name: "Sakunoshin",
  img: "SsI72Vb.jpg",
  opts: { series: ["higan"]}
 },
 {name: "Kyou",
  img: "nJ60rFb.jpg",
  opts: { series: ["higan"]}
 },
 {name: "Renoir",
  img: "h0sN28W.png",
  opts: { series: ["higan"]}
 },
 {name: "Sumire",
  img: "xFc4oql.png",
  opts: { series: ["higan"]}
 },
 {name: "Azami", 
  img: "Tb9Iebe.png", 
  opts: { series: ["higan"]} 
 },
 {name: "Yukari Sakaki",
  img: "AmfgVYE.png",
  opts: { series: ["higan"]}
 },
 {name: "Leo Shishigami",
  img: "wVlkPx6.png",
  opts: { series: ["rgd"]}
 },
 {name: "Rose Haibara",
  img: "vB741eY.png",
  opts: { series: ["rgd"]}
 }, 
 {name: "Saeki Chisato",
  img: "zjUwYZT.png",
  opts: { series: ["higu"],
  extra: true}
 },
 {name: "Stella Maiougi",
  img: "y2urLle.png",
  opts: { series: ["rgd"]}
 },
 {name: "Richard Maiougi",
  img: "KgGuEnQ.png",
  opts: { series: ["rgd"]}
 },
 {name: "Meryl Tanashi",
  img: "cnjtv74.png",
  opts: { series: ["rgd"]}
 },
 {name: "Cyrus Saimura",
  img: "3bbH1x6.png",
  opts: { series: ["rgd"]}
 },
 {name: "Caleb Keireiji",
  img: "16f674e.png",
  opts: { series: ["rgd"]}
 },
 {name: "Chinese Brawler",
  img: "WgGdbb2.png",
  opts: { series: ["rgd"]}
 },
 {name: "Phillip U. Butler",
  img: "er1gAL2.png",
  opts: { series: ["rgd"]}
 },
 {name: "Gabriel Kaburaya",
  img: "a8JMz2O.png",
  opts: {series: ["rgd"]}
 },
 {name: "Alfred Akagi",
  img: "7nKV9rC.png",
  opts: { series: ["rgd"]}
 },
 {name: "Maurice Monobe",
  img: "joMQYhZ.png",
  opts: { series: ["rgd"]}
 },
 {name: "Claudia Kurosaki",
  img: "Vdg2ykn.png",
  opts: { series: ["rgd"]}
 },
 {name: "Miguel Kurashiki",
  img: "L7ahDu4.png",
  opts: { series: ["rgd"]}
 },
 {name: "Nina Nanagi",
  img: "mDB6kEn.png",
  opts: { series: ["rgd"]}
 },
 {name: "Riku Furude",
  img: "cW8TCXj.png",
  opts: { series: ["higu"],
  extra: true}
 },
 {name: "Charles Chatani",
  img: "vxmNbdw.png",
  opts: { series: ["rgd"]}
 },
 {name: "Lee Meijiu",
  img: "4G6fNRS.png",
  opts: { series: ["rgd"]}
 },
 {name: "Hibari 13",
  img: "Gq6he1R.png",
  opts: { series: ["higu"]}
 },
 {name: "Lee Meixue", 
  img: "4NOOxSL.png", 
  opts: { series: ["rgd"]} 
 },
 {name: "Witch of Peace",
  img: "6Nl2HkI.png",
  opts: { series: ["umi"],
  extra: true}
 },
 {name: "Alan Aramaki",
  img: "rBOTz2p.png",
  opts: { series: ["rgd"]}
 },
 {name: "Keith Kisaragi",
  img: "1S3jpp1.png",
  opts: { series: ["rgd"]}
 },
 {name: "Tequila Matoba",
  img: "3Z8HYkc.png",
  opts: { series: ["rgd"]}
 },
 {name: "Oliver Oribe",
  img: "e5pMnA7.png",
  opts: { series: ["rgd"]}	
 },
 {name: "Wang Yuanhong",
  img: "BiVinG5.png",
  opts: { series: ["rgd"]}
 },
 {name: "Amanda Amamiya",
  img: "y1OtY66.png",
  opts: { series: ["rgd"]}
 },
 {name: "Jeanne Amakawa",
  img: "bUNJw2n.png",
  opts: { series: ["rgd"]}
 },
 {name: "James Tomitake",
  img: "52ogGIe.png",
  opts: { series: ["rgd"]}
 },
 {name: "Julie Hayashibara",
  img: "8RF4771.png",
  opts: { series: ["rgd"]}
 },
 {name: "Wayne Uedera",
  img: "ht55ZMV.png",
  opts: { series: ["rgd"]}
 },
 {name: "Toratsugu Uedera",
  img: "0EEZZJi.png",
  opts: { series: ["rgd"]}
 },
 {name: "Sun Zilong",
  img: "AmIVXvb.png",
  opts: { series: ["rgd"]}
 },
 {name: "Xiaolan",
  img: "9RrFGj2.png",
  opts: { series: ["rgd"]}
 },
 {name: "Zel",
  img: "KIFISKj.png",
  opts: { series: ["rgd"]}
 },
 {name: "Yoko Numata",
  img: "jcUOQCM.png",
  opts: { series: ["higan"]}
 },
 {name: "Aya Souma",
  img: "VktN4nN.png",
  opts: { series: ["higan"]}
 },
 {name: "Yoshihito Kanamori",
  img: "VgreoB9.png",
  opts: { series: ["higan"]}
 },
 {name: "Nafumi Shintani",
  img: "b6VxO1S.png",
  opts: { series: ["higan"]}
 },
 {name: "Hikaru Nihei", 
  img: "bKrFvxi.png",
  opts: { series: ["higan"]} 
 },
 {name: "Takeshi Nonomiya",
  img: "iGqimCP.png",
  opts: { series: ["higan"]}
 },
 {name: "Yuuki Noda",
  img: "yJGoTge.png",
  opts: { series: ["higan"]}
 },
 {name: "Nurse",
  img: "gjf4qPd.png",
  opts: { series: ["higan"]}
 },
 {name: "Michiru Sakurada",
  img: "x4nT9Xw.png",
  opts: { series: ["higan"]}
 },
 {name: "Shuiichi Arimori",
  img: "EharWMs.png",
  opts: { series: ["higan"]}
 },
 {name: "Ronoue Genji",
  img: "eujvj4F.png",
  opts: { series: ["umi"]}
 },
 {name: "Masaaki Yoshikawa",
  img: "1Pzf3jF.png",
  opts: { series: ["higan"]}
 },
 {name: "Captain Kawabata",
  img: "V7qy6ox.png",
  opts: { series: ["umi"]}
 },
 {name: "Professor Ootsuki",
   img: "nYOxrQI.png",
   opts: { series: ["umi"]}
 },
 {name: "Kasumi Sumadera",
   img: "zOVzX6V.png",
   opts: { series: ["umi"]}
 },
 {name: "Midori Kusunoki",
  img: "RbAz4nr.png",
  opts: { series: ["higan"]}
 },
 {name: "Sabakichi Kumasawa",
  img: "LZZAll1.png",
  opts: { series: ["umi"]}
 },
 {name: "Masayuki Nanjo",
   img: "FFbxbW1.png",
   opts: { series: ["umi"]}
 },
 {name: "Ouka Furude",
   img: "Q0NzMHX.png",
   opts: { series: ["higu"],
   extra: true}
 },
 {name: "Natsumi Kimiyoshi",
   img: "BQD1SWo.png",
   opts: { series: ["higu"],
   extra: true}
 }
];