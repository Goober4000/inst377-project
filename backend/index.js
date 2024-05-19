const supabaseClient = require('@supabase/supabase-js')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 3000;
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));


const supabaseUrl = 'https://zwcjxtzbywpsvybkrcma.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Y2p4dHpieXdwc3Z5YmtyY21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwODU1MTgsImV4cCI6MjAzMTY2MTUxOH0.hi2qlkXOcvQJ4wc_0eoR-Rc0ypiKTt-E2BFxxnjFrB8'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)

app.get('/', (req, res) => {
    res.sendFile('public/home_page.html', { root: __dirname })
})

app.get('/customers', async (req, res) => {
    console.log('Attempting to GET all Customers')
    res.header('Content-type', 'application/json');
    const { data, error } = await supabase
        .from('Customer')
        .select();

    if (error) {
        console.log(error)
        res.send(error)
    } else if (data) {
        res.send(data)
    }
}) 

app.post('/customer', async (req, res) => {
    console.log(`Adding Customer`)

    var firstName = req.body.firstName;
    var lastName = req.body.lastName;

    const {data, error } = await supabase
        .from('Customer')
        .insert ({'customer_first_name': firstName, 'customer_last_name': lastName})
        .select()

    if (error) {
        console.log(error);
        res.status(500).json({ message: 'Error adding customer', error });
    } else if (data) {
         res.json(data);
    }
    });
    
    app.get('/postings', async (req, res) => {
        console.log('Attempting to GET all Customers')
        res.header('Content-type', 'application/json');
        const { data, error } = await supabase
            .from('posting')
            .select();
    
        if (error) {
            console.log(error)
            res.send(error)
        } else if (data) {
            res.send(data)
        }
    }) 
    
app.listen(port, () => {
    console.log('APP IS ALIVEEEEEE')
})