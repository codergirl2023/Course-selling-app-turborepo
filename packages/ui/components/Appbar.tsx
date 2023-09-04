import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { isUserLoading } from "store/src/selectors/isUserLoading";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState } from "store/src/atoms/user";
import { userEmailState } from "store/src/selectors/userEmail"
import axios from "axios";

export function Appbar() {
    const userLoading = useRecoilValue(isUserLoading);
    const userEmail = useRecoilValue(userEmailState);
    const setUser = useSetRecoilState(userState);
    if (userLoading) {
        return <></>
    }
    if (userEmail) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => {
                window.location.href="/";
            }}>
                <Typography variant={"h6"}>Coursera</Typography>
            </div>

            <div style={{ display: "flex" }}>
                <div style={{ marginRight: 10, display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                        <Button
                            onClick={() => {
                                window.location.href="/addcourse";
                            }}
                        >Add course</Button>
                    </div>

                    <div style={{ marginRight: 10 }}>
                        <Button
                            onClick={() => {
                                window.location.href="/courses";
                            }}
                        >Courses</Button>
                    </div>

                    <Button
                        variant={"contained"}
                        onClick={async() => {
                                await axios.post('/api/admin/logout');
                                setUser({
                                    isLoading:false,
                                    userEmail:null
                                })
                                window.location.href='/signin';
                            }
                        }
                    >Logout</Button>
                </div>
            </div>
        </div>
    } else {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => {
                window.location.href="/";
            }}>
                <Typography variant={"h6"}>Coursera</Typography>
            </div>

            <div style={{ display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            window.location.href="/signup";
                        }}
                    >Signup</Button>
                </div>
                <div>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            window.location.href="/signin";
                        }}
                    >Signin</Button>
                </div>
            </div>
        </div>
    }
}
