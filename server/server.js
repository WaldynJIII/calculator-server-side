const express = require('express');
// app.use(express.static('server/public'))
console.log('Hello Express');
let app = express()
// app.listen(5000)
app.use(express.static('server/public'))
app.get('/green', function(req,res){
    res.send('Turtle')
}
)
// app.use(express.static('server/public'))

app.get('/welcome', function (req, res) {
    res.send('Welcome')
}
)
app.listen(5000, function(){
    console.log('running on 5000')
})