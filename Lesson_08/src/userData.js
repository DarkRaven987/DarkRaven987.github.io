const load_users = [
	{"login": "user01@gmail.com", "password": "user01"},
    {"login": "user02@gmail.com", "password": "user02"},
    {"login": "user03@gmail.com", "password": "user03"},
    {"login": "user04@gmail.com", "password": "user04"},
    {"login": "user05@gmail.com", "password": "user05"},
    {"login": "user06@gmail.com", "password": "user06"},
];

let userData = JSON.stringify(load_users);

export class UserData{

    static loadUsers(){
    
        localStorage.setItem("myKey", userData);
    }

    static getUsers(){
        return load_users;
    }
}