email - это объект письма
{
id: makeId(),
date: Date.now(),
sender: sender,
recipient: recipient,
subject: subject,
text: text,
}
email - это проперти в объекте аккаунта
{
id: makeId(),
date: Date.now(),
email: email, // address
passwd: passwd,
firstName: firstName,
lastName: lastName,
}

account.address

email.recipient
email.sender
