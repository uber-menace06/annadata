import axios from "axios";

const serverUrl = "http://localhost:4000/api";

export const login = (userid, password) => async (dispatch) => {
    try {
        dispatch({ type: "loginRequest" });

        const { data } = await axios.post(
            `${serverUrl}/login`,
            { userid, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("Hari bol");
        dispatch({ type: "loginSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "loginFailure", payload: error.response.data.message });
    }
};

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: "loadUserRequest" });

        const { data } = await axios.get(`${serverUrl}/me`);
        dispatch({ type: "loadUserSuccess", payload: data });
    } catch (error) {
        console.log(error + ' load error');
        dispatch({ type: "loadUserFailure", payload: error.response.data.message });
    }
};

export const addPickup = (title, description) => async (dispatch) => {
    try {
        dispatch({ type: "addPickupRequest" });

        const { data } = await axios.post(
            `${serverUrl}/orderpickup`,
            {
                title,
                description,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        dispatch({ type: "addPickupSuccess", payload: data.message });
    } catch (error) {
        console.log(error + "Pickup");
        dispatch({ type: "addPickupFailure", payload: error.response.data.message });
    }
};

export const updatePickup = (PickupId) => async (dispatch) => {
    try {
        dispatch({ type: "updatePickupRequest" });

        const { data } = await axios.get(`${serverUrl}/pickup/${PickupId}`);
        dispatch({ type: "updatePickupSuccess", payload: data.message });
    } catch (error) {
        console.log(error + ' update error');
        dispatch({
            type: "updatePickupFailure",
            payload: error.response.data.message,
        });
    }
};

export const cancelPickup = (PickupId) => async (dispatch) => {
    try {
        dispatch({ type: "cancelPickupRequest" });

        const { data } = await axios.delete(`${serverUrl}/pickup/${PickupId}`);
        dispatch({ type: "cancelPickupSuccess", payload: data.message });
    } catch (error) {
        dispatch({
            type: "cancelPickupFailure",
            payload: error.response.data.message,
        });
    }
};

export const updateProfile = (formData) => async (dispatch) => {
    try {
        dispatch({ type: "updateProfileRequest" });

        const { data } = await axios.put(`${serverUrl}/updateprofile`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        dispatch({ type: "updateProfileSuccess", payload: data.message });
    } catch (error) {
        dispatch({
            type: "updateProfileFailure",
            payload: error.response.data.message,
        });
    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: "logoutRequest" });

        await axios.get(`${serverUrl}/logout`);
        dispatch({ type: "logoutSuccess" });
    } catch (error) {
        dispatch({
            type: "logoutFailure",
            payload: error.response.data.message,
        });
    }
};

export const register = (formData) => async (dispatch) => {
    try {
        dispatch({ type: "registerRequest" });

        const { data } = await axios.post(`${serverUrl}/register`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        dispatch({ type: "registerSuccess", payload: data });
    } catch (error) {
        console.log(error + ' reg error');
        dispatch({
            type: "registerFailure",
            payload: error.response.data.message,
        });
    }
};

export const updatePassword =
    (oldPassword, newPassword) => async (dispatch) => {
        try {
            dispatch({ type: "updatePasswordRequest" });

            const { data } = await axios.put(
                `${serverUrl}/updatepassword`,
                { oldPassword, newPassword },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            dispatch({ type: "updatePasswordSuccess", payload: data.message });
        } catch (error) {
            dispatch({
                type: "updatePasswordFailure",
                payload: error.response.data.message,
            });
        }
    };

