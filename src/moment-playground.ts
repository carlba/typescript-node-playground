import * as moment from 'moment';

const date = '2020-09-24T15:01:01.478Z';

console.log(moment(date) < moment.utc());

moment.utc();