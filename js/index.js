const bodyParser require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))