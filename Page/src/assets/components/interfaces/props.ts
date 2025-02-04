export interface checkProps{
    newUser?: User
    setNameCheck?: React.Dispatch<React.SetStateAction<boolean>>;
    setEmailCheck?: React.Dispatch<React.SetStateAction<boolean>>;
    setAgeCheck?: React.Dispatch<React.SetStateAction<boolean>>;
    setPasswCheck?: React.Dispatch<React.SetStateAction<boolean>>;
    setRender?: React.Dispatch<React.SetStateAction<boolean>>;

}
export interface User{ 
    name?: string;
    password?: string;
    email?: string;
    age?: number | string;
}  
