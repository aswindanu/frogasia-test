<?php
/*
# php -f books.php SEARCH_TERM HUMAN
Ping openlibrary api for a list of books matched on keyword, we're looking to sample the number of books that have a corresponded e-book. Output is in either a human readable or json format, specifiy using cli parameters.
https://github.com/internetarchive/openlibrary/blob/master/conf/solr/conf/schema.xml
*/

if(!$search = $argv[1]) $search = "frog";
if(!$human_readable = $argv[2]) $human_readable = 'y';

if(file_exists("cache.{$search}.json")) $output = file_get_contents("cache.{$search}.json");
else {
    $output = file_get_contents("http://openlibrary.org/search.json?q={$search}");
        file_put_contents("cache.{$search}.json", $output);
}
$output = json_decode($output);

$t = 0;
foreach($output->docs as $i=>$item){
    $t++;
    if($item->ebook_count_i > 0) $total_ebooks++;
}

$results = new stdClass();
foreach($output->docs as $i=>$item){
    if($item->ebook_count_i > 0){
            $results->books[] = "{$item->title} ({$item->key}): {$item->ebook_count_i}\n";
    }
}

if($human_readable == 'n'){
    $results->summary->total_ebooks = $total_ebooks;
    $results->summary->t = $t;
    $results->summary->num_found = $output->num_found;
    print_r(json_encode($results));
}
else{
    foreach($results->books as $book) print "{$book}";
    print "Total records: {$total_ebooks}/{$t} out of {$output->num_found}\n";
}