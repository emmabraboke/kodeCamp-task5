let books=[
    {   id: 1,   
        name: "12 BYTES - JEANETTE",
        price: "$35",
        bookImage: "https://images.squarespace-cdn.com/content/v1/5ea4a128c6398826cb1be26d/1633387954561-IM0J2D5QJMHEUIRJ1A1R/18876C75-40C6-43DA-90A5-5EE7DBDBFCE1_4_5005_c.jpeg"
    },

    {   id: 2,
        name: "GREAT CIRCLE",
        price: "$37",
        bookImage: "https://images.squarespace-cdn.com/content/v1/5ea4a128c6398826cb1be26d/1630366543033-9T1C5O0Z3ETY1VAGACNV/9780857526816.jpg"
    },
    {   id: 3,
        name: "ALL ABOUT KATE",
        price: "$39",
        bookImage: "https://images.squarespace-cdn.com/content/v1/5ea4a128c6398826cb1be26d/1630365378447-41YAF3V1ZT29Q3HNMX8L/shopping.jpeg"
    },
    {   id: 4,
        name: "NOT BAD PEOPLE",
        price: "$35",
        bookImage: "https://images.squarespace-cdn.com/content/v1/5ea4a128c6398826cb1be26d/1630369648123-G5C0LY0HW3D246D2AQCN/9781460756171.jpg"
    },
    {   id: 5,
        name: "MADISON GAP",
        price: "$29",
        bookImage: "https://images.squarespace-cdn.com/content/v1/5ea4a128c6398826cb1be26d/1630389545516-TCFI5NDWUX1M8J00LWT6/9780473565671__15162.1625539967.jpg"
    },
    {   id: 6,
        name: "THE BEST THINGS",
        price: "$37",
        bookImage: "https://images.squarespace-cdn.com/content/v1/5ea4a128c6398826cb1be26d/1630365617961-NP1J46RVMR6RKW63E320/9781472256225.jpg"
    },
    {   id: 7,
        name: "CHAMPAGNE WAR",
        price: "$33",
        bookImage: "https://images.squarespace-cdn.com/content/v1/5ea4a128c6398826cb1be26d/1630365734126-V53MU8EUMZDT5ORPHYSV/9780143795469.jpg"
    },
    {   id: 8,
        name: "A HOUSE IN THE SKY",
        price: "$30",
        bookImage: "https://images.squarespace-cdn.com/content/v1/5ea4a128c6398826cb1be26d/1630369254496-24UZEB57U873W2T23CYH/9781451645613.jpg"
    },
    {   id: 9,
        name: "BELOW DECK",
        price: "$32",
        bookImage: "https://images.squarespace-cdn.com/content/v1/5ea4a128c6398826cb1be26d/1630389278098-HA7RDH5MARE7X6WI4URP/9781911630531.jpg"
    },
    {   id: 10,
        name: "MONTH OF SUNDAYS",
        price: "$23",
        bookImage: "https://images.squarespace-cdn.com/content/v1/5ea4a128c6398826cb1be26d/1630368384531-BWGCP00KVGXSXMGLI9RY/9781743534946-2.jpg"
    },
    {   id: 11,
        name: "OPERATOR",
        price: "$33.99",
        bookImage: "https://images.squarespace-cdn.com/content/v1/5ea4a128c6398826cb1be26d/1630368829457-QZOULBRD48D4KEFD64HB/9780062917195.jpg"
    },
    {   id: 12,
        name: "COASTLINERS",
        price: "$26.99",
        bookImage: "https://images.squarespace-cdn.com/content/v1/5ea4a128c6398826cb1be26d/1630366873083-TXJCFM1F6VSM32Z9CAXO/9780552998857.jpg"
    }
]



// let items= localStorage.setItem("orders",JSON.stringify(books))

var text= "";
books.forEach((e)=>{
    const bookshop = document.getElementById("card");

    text+=`
    <div class="col-12 col-md-6 col-lg-3 text-center" id="${e.id}">
    <button class="border-0 p-2 w-100">
    <a href="cart.html" class="text-decoration-none text-dark"><div class="">
            <img src="${e.bookImage}" alt="" id="bookimg" class="img-fluid w-100">
          </div>
        <div class="text-break">
            <h5 class="pt-4 fw-lighter" id="name">${e.name}</h3>
            <p class="pt-2 fw-bold" id="price">${e.price}</p>
        </div></a>
    </button>
   </div>`
    bookshop.innerHTML=text
   
}
)

 const items= document.querySelectorAll("#card button")
items.forEach((button)=>{
    button.addEventListener("click", (e)=>{

    const button = e.currentTarget;
    const container = button.parentNode;
     var img= container.querySelector("img")

  

    

    const order={
        id : container.getAttribute("id"),
        title: container.querySelector("#name").innerHTML,
        price: container.querySelector("#price").innerHTML,
        bookImg: container.querySelector("#bookimg").getAttribute("src")
    };

    const boos= localStorage.setItem("order",JSON.stringify(order))
}
)
}
)

    











