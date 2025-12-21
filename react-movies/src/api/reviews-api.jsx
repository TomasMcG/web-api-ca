export const addReview = async(data) => {
    const res = await fetch(
        `http://localhost:8080/api/reviews`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        }
    )
        return res.json();
};

export const getUserReviews = async () => {
    const response = await fetch(
        `http://localhost:8080/api/reviews`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    )

    
    return response.json();
};