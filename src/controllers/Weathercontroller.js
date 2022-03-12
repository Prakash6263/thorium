let axios = require("axios")



let getSortedCities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = []
        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=663bf7447d8f68e5a3dad9b5473bdea5`)
            console.log(resp.data.main.temp)
            obj.temp = resp.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })
        console.log(sorted)
        res.status(200).send({ status: true, data: sorted })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ status: true, msg: "server error" })

    }
}


let createMemes = async function (req, res) {
    try {
        let id = 181913649
        let text0 = "College"
        let text1 = "FunctionUp"
        let name = "chewie12345"
        let pass = "meme@123"

        let options =
        {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${name}&password=${pass}`
        }
        let result = await axios(options);
        res.status(200).send({ data: result.data })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.createMemes = createMemes;







module.exports.getSortedCities = getSortedCities