const express = require('express');
const path = require('path')
let bodyParser = require('body-parser');


const app = express();
// app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})
app.get('/vue', (req, res) => {
    res.sendFile(path.join(__dirname, './vue.html'))
})

app.post('/test', (req, res) => {
    console.log(req.body)
    var data = [
        {
            id: 1,
            name: '周斌'
        },
        {
            id: 2,
            name: '朱莉'
        }
    ]
    var name = ''
    data.forEach(function(item) {
    
        if (item.id === +req.body.id) {
            name = item.name;
        }
    })

    res.json({
        name: "周斌"
    })

})

app.listen('3000', () => {
    console.log('服务已开启： 3000')
})