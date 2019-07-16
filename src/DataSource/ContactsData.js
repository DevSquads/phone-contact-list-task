
const ContactsTable = [
    { id: '1', name: 'Peter Dinklage', desc: 'American actor' },
    { id: '2', name: 'Walter White', desc: 'High school chemistry teacher' },
    { id: '3', name: 'George Martin', desc: 'American novelist' },
    { id: '4', name: 'Hajime Isayama', desc: 'Japanese manga artist' },
    { id: '5', name: 'Rick Grimes', desc: 'King county sheriff\'s deputy' },
    { id: '6', name: 'Elliot Alderson', desc: '‎Cybersecurity engineer' },
    { id: '7', name: 'Anatoly Dyatlov', desc: '‎Nuclear power engineer' },
    { id: '8', name: 'Sayid Jarrah', desc: '‎Intelligence officer' },
    { id: '9', name: 'Hiroshi Kamiya', desc: '‎Japanese voice actor' },
    { id: '10', name: 'Mohamed Hosnie', desc: '‎Software engineer' },
    { id: '11', name: 'Pedro Pascal', desc: '‎Chilean-American actor' },
    { id: '12', name: 'Pablo Escobar', desc: 'Head of the Medellín Cartel' },
    { id: '13', name: 'Marion Negan', desc: 'High school gym teacher' },
    { id: '14', name: 'Lester Nygaard', desc: 'Insurance salesman' },
    { id: '15', name: 'Maxine Mayfield', desc: 'Student' },
    { id: '16', name: 'Kate Austen', desc: 'Mechanic at DHARMA Initiative' },
    { id: '17', name: 'Benjamin Linus', desc: 'Workman at DHARMA Initiative' },
    { id: '18', name: 'Travis Fimmel', desc: 'Australian actor' },
    { id: '19', name: 'Justin Roiland', desc: 'Animator, writer and director' },
    { id: '20', name: 'Mark Watney', desc: 'Astronaut' },
];

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}

exports.getContacts = (search) => {
    var regex = new RegExp(search, 'gi');
    if(search) {
        return ContactsTable.filter(({name}) => name.match(regex)).sort(compare);
    } else {
        return ContactsTable.sort(compare);
    }
};