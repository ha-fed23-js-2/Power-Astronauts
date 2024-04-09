//spara värde
export const saveValue = async (key, value) => {
    try {
        const response = await fetch('https://forverkliga.se/JavaScript/api/jsonStore.php?method=save', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                key: key,
                value: value
            })
        });
        if (response.ok) {
            console.log('Värdet sparades.');
        } else {
            console.error('Fel vid sparandet av värdet.');
        }
    } catch (error) {
        console.error('Något gick fel:', error);
    }
};
//hämta värde
export const loadValue = async (key) => {
    try {
        const response = await fetch(`https://forverkliga.se/JavaScript/api/jsonStore.php?method=load`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Laddat värde:', data);
        } else {
            console.error('Fel vid laddning av värdet.');
        }
    } catch (error) {
        console.error('Något gick fel:', error);
    }
};
