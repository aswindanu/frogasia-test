/*
# node books.js SEARCH_TERM HUMAN
Ping openlibrary api for a list of books matched on keyword, we're looking to sample the number of books that have a corresponded e-book. Output is in either a human readable or json format, specifiy using cli parameters.
https://github.com/internetarchive/openlibrary/blob/master/conf/solr/conf/schema.xml
*/

const fs = require('fs')
const https = require('https');

if (typeof process.argv[2] !== 'undefined') {
    var search = process.argv[2]
}
else var search = "frog"

if (typeof process.argv[3] !== 'undefined') {
    var human_readable = process.argv[3]
}
    else var human_readable = "y"

if (fs.existsSync("cache." + search + ".json")) {
    fs.readFile("cache." + search + ".json", 'utf8' , (err, data) => {
        process_data(data)
    })
}
else{
    https.get('https://openlibrary.org/search.json?q=' + search, (res) => {
        var data = ''
        res.on('data', function (chunk) {
            data += chunk
        })

        res.on('end', function () {
            fs.writeFile("cache." + search + ".json", data, (err,data) => {
            });
                    process_data(data)
        })
    }) 
}

process_data = function(res){
        data = JSON.parse(res)

    var t = 0, total_ebook = 0, results = {}
    data.docs.forEach(function(book) {
        t = ++t
        if(book.ebook_count_i > 0) total_ebook = ++total_ebook
    });

    results.books = []
    data.docs.forEach(function(book) {
        if(book.ebook_count_i > 0) results.books.push(book.title + " " + book.key + ": " + book.ebook_count_i)
    });

    if(human_readable == "n"){
        results.summary = {total_ebooks: total_ebook, t: t, num_found: data.num_found}
        console.log(JSON.stringify(results))
    }
    else{
        results.books.forEach(function(overview) {
            console.log(overview)
        })
        console.log("Total records: " + total_ebook + "/" + t + " out of " + data.num_found)
    }
}