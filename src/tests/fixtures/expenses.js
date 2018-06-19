import moment from 'moment';

export default [{
    id: '1',
    description: 'gum',
    note: '',
    amount: 199,
    createdAt: 0
}, {
    id: '2',
    description: 'beer',
    note: 'delicious beer',
    amount: 350,
    createdAt: moment(0).subtract(1, 'week').valueOf()
}, {
    id: '3',
    description: 'bratwurst',
    note: 'so tasty',
    amount: 695,
    createdAt: moment(0).add(1, 'week').valueOf()
}];