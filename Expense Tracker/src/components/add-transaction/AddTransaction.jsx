import { GlobalContext } from "../../context";
import { useContext } from "react";
import { Modal,Box,Button,TextField,Radio,RadioGroup,FormControlLabel,FormControl } from "@mui/material"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};
export const AddTransaction = () => {
  const { isModalOpen, hideModal,formData,setFormData,value,setValue,handleFormSubmit } = useContext(GlobalContext);

  function handleFormChange(e) {
  setFormData({
    ...formData,
    [e.target.name] : e.target.value,
  })
  }

  function handleSubmit (e) {
    e.preventDefault()
    handleFormSubmit(formData);
    setFormData({
      type: 'income',
      amount: '',
      description: ''
    });
    hideModal();
  }

  return (
    <Modal open={isModalOpen} onClose={hideModal}>
    <Box sx={style} className="addtransaction-modal">
      <div className="d-flex justify-content-between align-items-center">
      <h5>Add New Transaction</h5>
      <button className="btn btn-sm position-absolute end-0 top-0" onClick={hideModal}><i className="bi bi-x fs-2"></i></button>
      </div>
      <div className='add-transaction-modal'>
        <form onSubmit={handleSubmit} autoComplete="off">
          <TextField 
            label="Transaction Description" 
            name = 'description'
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={formData.description}
            onChange={handleFormChange}
            required 
          />
          <TextField 
            label="Transaction Amount" 
            name='amount'
            type="number" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={formData.amount}
            onChange={handleFormChange}
            required 
          />
          <FormControl component="fieldset" margin="normal">
            <RadioGroup row value={value} onChange={setValue}>
              <FormControlLabel 
                value="income" 
                control={<Radio checked={formData.type === 'income'} name="type" onChange={handleFormChange}/>} 
                label="Income" 
              />
              <FormControlLabel 
                value="expense" 
                control={<Radio checked={formData.type === 'expense' } name="type" onChange={handleFormChange}/>} 
                label="Expense" 
              />
            </RadioGroup>
          </FormControl>
          <Button type="submit" variant="outlined" color="primary" className={`mt-2 py-2 fs-6 rounded-pill custom-btn`} fullWidth>
            Add
          </Button>
          <Button onClick={hideModal} variant="outlined" color="secondary" className={`mt-2 py-2 fs-6 rounded-pill custom-btn`} fullWidth>
            Cancel
          </Button>
        </form>
      </div>
    </Box>
  </Modal>
  )
}
