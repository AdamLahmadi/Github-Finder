// Init classes

const github = new GitHub;

const ui = new UI;

// Listen to the search input 

searchUser = document.getElementById('searchUser')

// Event Listeners

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== ''){
        // Make HTTP call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show Alert
                    ui.showAlert('User not found','alert alert-danger')

                } else {
                    // Show Profile and Repos
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        // Clear Profile
        ui.clearProfile();
    }
})