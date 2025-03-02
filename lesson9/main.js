// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.



let div = document.createElement('div')

div.classList.add('wrap','collapse','alpha','beta')

div.style.background = 'rgb(153,195,201)';
div.style.width = '100px';
div.style.height = '100px';
div.style.marginBottom = '10px'
document.body.appendChild(div)

let clone = div.cloneNode(true);

document.body.appendChild(clone)







//
// #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


let exampleArray = ['Main','Products','About us','Contacts'];

let ul = document.createElement('ul')

for(let element of exampleArray){

    let li = document.createElement('li')
    li.innerText=element

    ul.appendChild(li)

}


document.body.appendChild(ul)
//
// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.




let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


for (let course of coursesAndDurationArray){
    let div= document.createElement('div')
    div.innerText = `Title:${course.title}  
    Course duration: ${course.monthDuration}`


    div.style.background = 'rgb(230,200,241)';
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.marginBottom = '10px'
    div.style.textAlign='center'


    document.body.appendChild(div)
}
//
// #Kx1xgoKy8
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
//




for (let course of coursesAndDurationArray){
    let div= document.createElement('div')
    div.classList.add('item')
    document.body.appendChild(div)
    let h1= document.createElement('h1')
    h1.classList.add('heading')
    h1.innerText= `Title:${course.title}`
    let p=document.createElement('p')
    p.classList.add('description')
    p.innerText=`Duration:${course.monthDuration}`

    div.appendChild(h1)
    div.appendChild(p)
}































