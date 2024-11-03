
const menuItems = [
        { name: 'Brownie Sundae', price: 130, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587' },
    { name: 'Cheesecake', price: 140, image: 'https://plus.unsplash.com/premium_photo-1722686461601-b2a018a4213b?q=80&w=1555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Tiramisu', price: 150, image: 'https://plus.unsplash.com/premium_photo-1695028378225-97fbe39df62a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGlyYW1pc3V8ZW58MHx8MHx8fDA%3D' },
    { name: 'Blueberry Muffin', price: 90, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/03/white-muffin-with-blueberries-on-a-white-background.jpg' },
    { name: 'Biryani', price: 80, image: 'https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Sizzling Brownie', price: 120, image: 'https://images.unsplash.com/photo-1639744093270-36e0cc2817ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2l6emxpbmclMjBCcm93bmllfGVufDB8fDB8fHww' },
    { name: 'Ice Cream', price: 50, image: 'https://plus.unsplash.com/premium_photo-1661427159078-9d85039e99b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SWNlJTIwQ3JlYW18ZW58MHx8MHx8fDA%3D' },
    { name: 'Momos', price: 30, image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW9tb3N8ZW58MHx8MHx8fDA%3D' },
    { name: 'Chicken Rice', price: 90, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoaWNrZW4lMjBmcmllZCUyMHJpY2V8ZW58MHx8MHx8fDA%3D' },
    { name: 'Pizza', price: 200, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGl6emF8ZW58MHx8MHx8fDA%3D' },
    { name: 'Pasta Alfredo', price: 150, image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UGFzdGElMjBBbGZyZWRvfGVufDB8fDB8fHww' },
    { name: 'Garlic Bread', price: 70, image: 'https://plus.unsplash.com/premium_photo-1711752904630-0da29cbad0c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEdhcmxpYyUyMEJyZWFkfGVufDB8fDB8fHww' },
    { name: 'Burger', price: 100, image: 'https://www.foodiesfeed.com/wp-content/uploads/2015/09/summer-juicy-beef-burger.jpg' },
    { name: 'Hot Dog', price: 80, image: 'https://images.unsplash.com/photo-1613482084286-41f25b486fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEhvdCUyMERvZ3xlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Salad', price: 60, image: 'https://images.unsplash.com/photo-1534889196564-a6799df68403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNhbGFkfGVufDB8fDB8fHww' },
    { name: 'French Fries', price: 50, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/05/french-fries.jpg' },
    { name: 'Waffles', price: 110, image: 'https://media.istockphoto.com/id/1350766928/photo/woman-pouring-chocolate-sauce-onto-tasty-homemade-waffles-closeup.jpg?b=1&s=612x612&w=0&k=20&c=BcXz0oe9aKh2f6rRY4XQEbveFR-9xabyKN_6BEhz6hA=' },
    { name: 'Pancakes', price: 100, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/blueberry-pancakes.jpg' },
    { name: 'Nachos', price: 90, image: 'https://www.foodiesfeed.com/wp-content/uploads/2017/10/tortilla-chips-with-salsa.jpg' },
    { name: 'Tacos', price: 80, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/09/tacos-top-view.jpg' },
    { name: 'Spring Rolls', price: 70, image: 'https://images.unsplash.com/photo-1613135373494-d1f6a77d159b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNwcmluZyUyMFJvbGxzfGVufDB8fDB8fHww' },
    { name: 'Sushi', price: 180, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/08/sushi-roll-macro.jpg' },
    { name: 'Ramen', price: 150, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/05/ramen-soup.jpg' },
    { name: 'Smoothie', price: 60, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/fresh-smoothie-with-berries.jpg' },
    { name: 'Milkshake', price: 70, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/milkshake-with-cream.jpg' },
    { name: 'Falafel', price: 80, image: 'https://images.unsplash.com/photo-1680990999782-ba7fe26e4d0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmFsYWZlbHxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Hummus', price: 60, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/07/hummus-with-carrot.jpg' },
    { name: 'Grilled Chicken', price: 160, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/grilled-whole-chicken.jpg' },
    { name: 'Steak', price: 250, image: 'https://www.foodiesfeed.com/wp-content/uploads/2016/01/beef-steak-with-black-salt-close-up-2.jpg' },
    { name: 'Fish and Chips', price: 140, image: 'https://plus.unsplash.com/premium_photo-1694108747181-b71309018e39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmlzaCUyMGFuZCUyMENoaXBzfGVufDB8fDB8fHww' },
    { name: 'Cupcake', price: 60, image: 'https://www.foodiesfeed.com/wp-content/uploads/2019/01/raspberry-cupcake.jpg' },
    { name: 'Apple Pie', price: 100, image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/05/apple-pie-macro.jpg' }

];

const menuContainer = document.getElementById('menu-container');
const orderSummary = document.getElementById('order-summary');

// Render menu items with quantity input
menuItems.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('menu-item');
    
    itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
        <input type="number" id="quantity-${index}" placeholder="Qty" min="0">
    `;
    
    menuContainer.appendChild(itemDiv);
});

// Function to calculate total and display order summary
function calculateTotal() {
    let total = 0;
    let summary = '';

    menuItems.forEach((item, index) => {
        const quantity = document.getElementById(`quantity-${index}`).value;
        
        if (quantity && quantity > 0) {
            const cost = item.price * quantity;
            total += cost;
            summary += `<p>${item.name} x ${quantity} = ₹${cost}</p>`;
        }
    });

    if (summary) {
        summary += `<h3>Total: ₹${total}</h3>`;
        orderSummary.innerHTML = summary;
    } else {
        orderSummary.innerHTML = 'No items ordered.';
    }
}
const itemsContainer = document.getElementById('itemsContainer'); // Replace with your container's ID

const items = ['Item 1', 'Item 2', 'Item 3']; // Example items array

items.forEach(itemText => {
  const itemDiv = document.createElement('div');
  itemDiv.className = 'item-box'; // Add the class for hover effect
  itemDiv.textContent = itemText;

  // Append the item to the container
  itemsContainer.appendChild(itemDiv);
});