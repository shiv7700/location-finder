const apiKey = "c35b967a4387ba70e6b2d475275deb372e8bb8fe87c36a5c725bb286";
const url = `https://api.ipdata.co?api-key=${apiKey}`;

// select element
const clickMe = document.querySelector(".click-me");
const ip = document.querySelector(".ip");
const country = document.querySelector(".country");
const countryCode = document.querySelector(".country-code");
const city = document.querySelector(".city");
const state = document.querySelector(".state");
const service = document.querySelector(".service-provider");
const language = document.querySelector(".language");
const lat = document.querySelector(".lat");
const long = document.querySelector(".long");
const flag = document.querySelector(".flag");
const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
const t3 = document.querySelector(".t3");
const t4 = document.querySelector(".t4");
const t5 = document.querySelector(".t5");
const t6 = document.querySelector(".t6");
const t7 = document.querySelector(".t7");
const t8 = document.querySelector(".t8");
const usage = document.querySelector(".usage");

async function getInfo() {
  try {
    const res = await fetch(url);
    let data = await res.json();
    console.log(data);
    ip.innerHTML = data.ip;
    country.innerHTML = data.country_name;
    countryCode.innerHTML = data.country_code;
    city.innerHTML = data.city;
    state.innerHTML = data.region;
    service.innerHTML = data.asn.name;
    lat.innerHTML = data.latitude;
    long.innerHTML = data.longitude;
    language.innerHTML =
      data.languages[1].native + " " + data.languages[0].native;
    ip.innerHTML = data.ip;
    ip.innerHTML = data.ip;
    ip.innerHTML = data.ip;
    ip.innerHTML = data.ip;
    flag.src = data.flag;
    usage.innerHTML = `you fool api is not free , api hit today { ${data.count} }`;
  } catch (error) {
    console.log("error is", error);
  }
}

clickMe.addEventListener("click", function () {
  getInfo();
});
