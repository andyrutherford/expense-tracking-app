import moment from 'moment';

export default [{
    id: '1',
    description: 'gum',
    category: 'personal',
    note: '',
    amount: 199,
    createdAt: 0
}, {
    id: '2',
    description: 'beer',
    category: 'business',
    note: 'delicious beer',
    amount: 350,
    createdAt: moment(0).subtract(1, 'week').valueOf()
}, {
    id: '3',
    description: 'bratwurst',
    category: 'family',
    note: 'so tasty',
    amount: 695,
    createdAt: moment(0).add(1, 'week').valueOf()
}];