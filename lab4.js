var express = require('express');
var expressHbs= require('express-handlebars');
var app = express();

app.listen(8080);

app.engine('.hbs',expressHbs.engine({extname:'.hbs',defaultLayout:'main' }));
app.set('view engine',".hbs");
app.get('/',function(req,res){
    res.render('home'
        
    );
});
app.get('/tinhtoan',function(req,res){
    res.render('defaultView',{
        layout:'main',
        soA:10,
        soB:2,
        phepTinh:"Cong",
        kq:12,
        showContentTinhToan: true,
        showTitle: false
    })
});
app.get('/pheptinh',function(req,res){
    res.render('defaultView',{
        showPhepTinh:true
    })
})
