import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelctor } from "../app/hooks";
import React, { useState } from 'react'


export const Temp2 = () => {
    const [state, setState] = useState(false);
    const s = useAppSelctor(state => state.auth.isAuthenticated);
    return (
        <>
            <Link to='/game'>game</Link>
            Hey hey storage state is {s ? <>true</> : <>false</>}
            <br />But local state is {state ? <>true</> : <>false</>}
            <Button
                onClick={() => setState(!state)}
            >Update
            </Button>
        </>
    )
}