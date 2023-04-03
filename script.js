const videoCardContainer = document.querySelector('.video-container');
const heading = document.querySelector('.container');

var retrieve=fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC1exNUUAIMvRPxZFH_yKKPw&key=AIzaSyDwQ6_BZKvgoG_Uzn1u07WD3UBzjZqmGyc");
retrieve.then((user)=>user.json())
.then((user1)=>makeHeading(user1))
.catch((error)=>console.log(error));


var res=fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLoU1f0q2cnQhTCfueO0PramJZcNZpVh2U&key=AIzaSyDwQ6_BZKvgoG_Uzn1u07WD3UBzjZqmGyc");
res.then((data)=>data.json())
.then((data1)=>makeVideoCard(data1))
.catch((error)=>console.log(error));

const makeHeading = (user1) => {
heading.innerHTML = ` <div class="left "><img src="${user1.items[0].snippet.thumbnails.high.url}" alt=""></div>
<div class="center"><h2>${user1.items[0].snippet.title}</h2>
<span>${user1.items[0].snippet.customUrl}</span>  <span>${user1.items[0].statistics.subscriberCount} ${`Subscribers`}</span>  <span>${user1.items[0].statistics.videoCount} ${`Video`}</span>
<div>More about this channel ></div></div>
<div class="right1">customized channel</div>
<div class="right2">Manage Videos</div>
`
    
}

const makeVideoCard = (data1) => {
    for(i=0;i<=10;i++){
    videoCardContainer.innerHTML += `
    <div class="video" >
        <img src="${data1.items[i].snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data1.items[i].snippet.thumbnails.default.url}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data1.items[i].snippet.title}</h4>
                <p class="channel-name">${data1.items[i].snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
    }
}

// search bar

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})

fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLoU1f0q2cnQhTCfueO0PramJZcNZpVh2U&&key=AIzaSyDwQ6_BZKvgoG_Uzn1u07WD3UBzjZqmGyc`)
.then(sum => sum.json())
.then(list => console.log(list));


