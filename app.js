// Prerequisites
const createError   = require('http-errors'),
      express       = require('express'),
      path          = require('path'),
      cookieParser  = require('cookie-parser'),
      logger        = require('morgan'),
      ejs           = require('ejs'),
      sass          = require('node-sass'),
      mongoose      = require('mongoose'),
      bodyParser    = require('body-parser'),
      nodemailer    = require('nodemailer');

// Routes
const indexRouter       = require('./api/routes/index'),
			usersRouter       = require('./api/routes/users'),
			eventsRouter      = require('./api/routes/events'),
      mailRouter        = require('./api/routes/mail');
 

mongoose.connect("mongodb://humangasour:0709Fcb@ds125392.mlab.com:25392/aap", {
	useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

/*var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'anuj.adsvento@gmail.com',
        pass: '0709Fcb??'
    }
});

const mailOptions = {
  from: 'anuj.adsvento@gmail.com', // sender address
  to: 'anujsachdeva100@gmail.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: '<p>Your html here</p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});*/

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', eventsRouter);
app.use('/', mailRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('index');
});

module.exports = app;
