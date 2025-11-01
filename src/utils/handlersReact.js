export class Handler{

  handleChange(e, setFunction){
    const { name, value } = e.target;
    setFunction((prev) => ({...prev, [name]: value,}));
  };

}