import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useAppSelctor } from '../app/hooks';

const Temp = () =>{
    const [state, setState]= useState(false);
    const s = useAppSelctor(state => state.auth.isAuthenticated);
    return (
        <>Hey hey storage state is {s? <>true</>: <>false</>}
        <br/>But local state is {state? <>true</>: <>false</>}
            <Button
                onClick={() => setState(!state)}
             >Update
             </Button>
        </>
    )
}
export default Temp