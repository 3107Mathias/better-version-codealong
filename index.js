import { compareAsc, format } from 'date-fns';
// matty message added to this file
// matty's second comment
// in total the fourth comment
// and another message to this file by matty
// matty added a new line 5, added line 3 to 4 and an empty line
// adding one more change via github
// Lena's going wild, adding line 7
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'

const dates = [
  new Date(2021, 10, 21),
  new Date(1987, 1, 11),
  new Date(1989, 7, 26),
]
dates.sort(compareAsc)
//=> [
//   Wed Mar 31 1987 00:00:00,
//   Mon Jul 31 1989 00:00:00,
//   Thu Oct 21 2021 00:00:00
// ]
console.log('These are the dates:', dates);
