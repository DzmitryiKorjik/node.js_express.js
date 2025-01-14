const express = require('express');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/user/:username', (req, res) => {
    const username = req.params.username;
    res.render('user', { username });
});


app.post('/check-user', (req, res) => {
    let username = req.body.username;

    if(username === "") {
        return res.redirect('/');
    } else {
        return res.redirect('/user/' + username);
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
});