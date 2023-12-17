export const emailValidator = (email: string) => { 
    const re =/\S+@\S+\.\S+/;

    if (!email || email.length <=0) return 'Email cannot be empty.';
    if (!re.test(email)) return 'Oops! We need a valid email address.';

    return '';
};

export const passwordValidator = (password:string) => {
    if (!password || password.length <=0) return 'password cannot be empty.';
    if (password.length <= 5) return 'password must be at least 6 characters.';

    return '';

}

export const nameValidator =(name: string) => {
    if (!name || name.length <=0) return 'Name cannot be empty.';

    return '';
}

export const phoneValidator =(phone: string) => {
    if (!phone || phone.length <= 0) return 'phone number cannot be empty. ';

    return '';
}

export const genderValidator = (gender: any) => {
    if (!gender || gender.length <= 0) return 'Please select a gender. ';

    return '';
}

export const idValidator = (id: any) => {
    if (!id  || id.length <= 0) return 'ID cannot be empty. ';

    return '';
}

export const usernameValidor =(username: string) =>{
    if (!username || username.length <=0){
        return 'Username cannot be empty.';
    } else if (username.length <=5) {
        return 'Username length 6 chanracter at least.';
    }

    return '';
};

export const txtValidator = (txt: string) => {
    if (!txt || txt.trim().length <= 0) return false;
  
    return true;
  };
  
  export const objValidator = (obj: any) => {
    if (!obj) return false;
  
    return true;
  };