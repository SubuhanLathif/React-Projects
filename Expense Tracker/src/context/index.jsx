import { createContext,useState } from "react";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => setIsModalOpen(true);
    const hideModal = () => setIsModalOpen(false);

    const initialFormData = {
        type: '',
        amount: '',
        description: ''
      };

    const [formData,setFormData] = useState(initialFormData);
    const [value,setValue] = useState('');
    const [totalExpense,setTotalExpense] = useState(0);
    const [totalIncome,setTotalIncome] = useState(0);
    const [allTrasaction,setAllTrasaction] = useState([]);
    const handleFormSubmit = (currentFormData) => {
        if (!currentFormData.description || !currentFormData.amount) return;
        setAllTrasaction([
          ...allTrasaction,
          { ...currentFormData, id: Date.now() },
        ]);
      };
    console.log(allTrasaction);
    return (
        <GlobalContext.Provider value={{ 
            isModalOpen, showModal, hideModal,
            formData,setFormData,
            value,setValue,
            totalExpense,setTotalExpense,
            totalIncome,setTotalIncome,
            allTrasaction,setAllTrasaction,
            handleFormSubmit,
            }}>
            {children}
        </GlobalContext.Provider>

    )
}

// export default function GlobalState({ children }) {
//     return (
//         <GlobalContext.Provider>
//             {children}
//         </GlobalContext.Provider>
//     )
// }