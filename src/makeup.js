function buttonSearch() {
    input = document.getElementById("brand").value
    input2 = document.getElementById("category").value
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${input}&product_category=${input2}`;
    fetch(url)
    .then (response => response.json())
    .then (data => {
        // 👇️ rename button to try again
        document.querySelector('#search').value = 'Try again';
        // 👇️ call function if clicked twice
        const search = document.getElementById('search');
        search.addEventListener('click', () => {
        // 👇️ reload page button
        location.reload()
        });
        // 👇️ display product found once searched
        if (data[0] != null){
            document.getElementById("displaytit").append("Product Found")
        } else {
            document.getElementById("displaytit").append("Product Unvailable")
        }
        // 👇️ display image
        if (data[0].image_link != null){
            src = data[0].image_link
            img = document.createElement('img')
            img.src = src
            document.getElementById("displayima").append(img)
        } else {
            document.getElementById("displayima").append("Image : Unvailable")
        }
        // 👇️ display name
        if (data[0].name != null){
            document.getElementById("displaynam").append("Name : " + data[0].name)
        } else {
            document.getElementById("displaynam").append("Name : Unvailable")
        }
        // 👇️ display type
        if (data[0].product_type != null){
            document.getElementById("displaytyp").append("Type : " + data[0].product_type)
        } else {
            document.getElementById("displaytyp").append("Type : Unvailable")
        }
        // 👇️ display category
        if (data[0].category != null){
            document.getElementById("displaycat").append("Category : " + data[0].category)
        } else {
            document.getElementById("displaycat").append("Category : Unvailable")
        }
        // 👇️ display rating
        if (data[0].rating != null){
            document.getElementById("displayrat").append("Rating : " + data[0].rating)
        } else {
            document.getElementById("displayrat").append("Rating : Unvailable")
        }
        // 👇️ display description
        if (data[0].description != null){
            document.getElementById("displaydes").append("Description : " + data[0].description)
        } else {
            document.getElementById("displaydes").append("Description : Unvailable")
        }
        // 👇️ display price
        if (data[0].price != null){
            document.getElementById("displaypri").append("Price : $" + data[0].price)
        } else {
            document.getElementById("displaypri").append("Price : Unvailable")
        }
        // 👇️ print data on console (ctrl + shift + i)
        console.log(data)
        
})}
