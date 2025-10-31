переименовать наконцто accountEmail в accountAddress

TODO: в контроллере подключаешь только клиентский model

clientAccount.current.email переделываешь в getCurrentAccount()

ВЕЗДЕ экпортируем только функции

controller подключает view
controller подключает model/client !!

model/client подключает model/server
model/client подключает model/sessionStorage

model/server подключает model/localStorage

clientAccount подключает serverAccount
clientAccount подключает serverAuth ??

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
email: email, // address !!!
passwd: passwd,
firstName: firstName,
lastName: lastName,
}

account.address

email.recipient
email.sender
