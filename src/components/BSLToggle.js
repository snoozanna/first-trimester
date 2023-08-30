import { FormControlLabel, FormGroup, Switch, alpha } from '@mui/material';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { pink } from '@mui/material/colors';
import AccessContext from '../context/access.context';

const PinkSwitch = styled(Switch)(() => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600]),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));
const BSLToggle = () => {
  const { isBSLShowing, toggle } = useContext(AccessContext);

  const handleChange = () => {
    toggle();
  };

  return (
    <>
      <FormGroup>
        <FormControlLabel
          value={isBSLShowing}
          control={
            <PinkSwitch
              sx={{
                backgroundColor: 'var(--mintgreen)',
                borderRadius: '15px',
              }}
              onChange={handleChange}
            />
          }
          sx={{ textAlign: 'Center', marginLeft: 0 }}
          label="Show BSL Videos"
          labelPlacement="top"
        />
      </FormGroup>
    </>
  );
};

export default BSLToggle;
