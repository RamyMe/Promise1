const userDataContainer = document.getElementById('user-data');

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        userDataContainer.innerHTML = `<p class="alert alert-danger">Error fetching data!</p>`;
    }
};

const displayUserData = (data) => {
    const user = data.results[0]; // Assuming the API returns an array of users

    const userCard = document.createElement('div');
    userCard.classList.add('card');

    userCard.innerHTML = `
        <img src="${user.picture.large}" class="card-img-top" alt="User Image">
        <div class="card-body">
            <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
            <p class="card-text">Email: ${user.email}</p>
            <p class="card-text">Phone: ${user.phone}</p>
            <p class="card-text">Cell: ${user.cell}</p>
        </div>
    `;

    userDataContainer.appendChild(userCard);
};

const fetchAndDisplayUserData = async () => {
    const url = 'https://randomuser.me/api/'; 
    const userData = await fetchData(url);
    displayUserData(userData);
};

fetchAndDisplayUserData();


const generateUserButton = document.getElementById('generate-users');

generateUserButton.addEventListener('click', () => {
    fetchAndDisplayUserData();
});

const displayUsers = (data) => {
    const users = data.results;
    userDataContainer.innerHTML = ''; // Clear previous content

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        // ... create user card content

        userDataContainer.appendChild(userCard);
    });
};
