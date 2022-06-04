const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
  
    async function fetchData() {
      const response = await axios.get(endpoint);
      setData(response.data);
    }
  
    useEffect(() => {
      try {
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }, []);
  
    return data;
  };
  
  export default useFetch;
  © 2022 GitHub, Inc.
  Terms
  Privacy
  Security
  Status
  Docs
  Conta