
import {useForm} from "../../hooks/useForm.ts";


export const formComponents = () => {
    // const [email, setEmail] = useState('');
    // const [name, setName] = useState('');
    // const [age, setAge] = useState(0);

    // const [values, setValues] = useState({
    //     email:'', name: '',age: 0
    // })
    //
    // const {email, name, age} = values;
    //
    // const handleSubmitForm = () => {
    //     console.log(values);
    // };
    //
    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const {value, name} = event.target;
    //     if(name !== 'edad'){
    //         setValues({...values, [`${name}`]: value});
    //     }else{
    //         setValues({...values, [`${name}`]: parseInt(value)});
    //     }
    // }

    const {values, handleChange, resetForm} = useForm({
        email:'', name:'', age: 0
    });

    const {email, name, age} = values;

    const handleSubmitForm = () => {
        console.log(values);
    }

    const handleResetForm = () => {
        resetForm();
    }

    return(
        <div>
            <div>
                <h2>Formualario</h2>
            </div>
            <div style={ { display: "flex", flexDirection: "column" , gap:"2vh"} }>
                <input value={email} name="email" onChange={(handleChange)} type="email" placeholder="ejemplo@"/>
                <input value={name} name="name" onChange={(handleChange)} type="text" placeholder="Nombre" />
                <input value={age} name="age"  onChange={(handleChange)} type="number" placeholder="Edad" />
            </div>
            <div>
                <button onClick={handleSubmitForm}>Enviar formulario</button>
                <button onClick={handleResetForm}>Resetear formulario</button>
            </div>
        </div>
    )
}

export default formComponents;