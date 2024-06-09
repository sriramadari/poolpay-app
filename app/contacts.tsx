import Contacts from 'react-native-contacts';

Contacts.getAll()
  .then((contacts) => {
    console.log(contacts);
  })
  .catch((error) => {
    console.error(error);
  });

