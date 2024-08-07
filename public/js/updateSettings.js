import axios from 'axios';
import { showAlert } from './alert';

export const updateSettings = async (data, type) => {
    try {
        const url =
            type === 'password'
                ? '/api/v1/user/UpdateMyPassword'
                : '/api/v1/user/updateMe';

        const res = await axios({
            method: 'PATCH',
            url,
            data
        });

        if (res.data.status === 'success') {
            showAlert('success', `${type.toUpperCase()} updated successfully!`);
        }
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
};


