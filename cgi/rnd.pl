#!/usr/bin/perl -w

use strict;
use SDB::common;
use SDB::cgi;

my $query_string =  get_query_string();
my %cgi = parse_query_string( $query_string );

my $ch = $cgi{ch};

my $res;


$res = int(rand($ch))+1;

print_content_type;

print "$res";

exit(0);
