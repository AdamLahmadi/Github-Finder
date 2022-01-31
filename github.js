class GitHub{
    constructor() {
        this.client_id = 'd68b10ec7743e164b024';
        this.client_secret = '530781869a83e604c550cf0ff219de2f87a419eb';
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }



    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();
        
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}