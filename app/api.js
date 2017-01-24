import Axios from 'axios';

let API = {
    getVideos: function () {
        return new Promise(function (resolve, reject) {
           Axios.get("https://www.googleapis.com/youtube/v3/videos", {
               params: {
                   part: 'snippet',
                   key: 'AIzaSyALTCWvsRUOF9yCXf5Er8OPYH-y5a7kPUY',
                   chart: 'mostPopular',
                   maxResults: 5
               }
            }).then(function (data) {
               resolve(data.data.items)
           })
        })
    }
};

export default API;