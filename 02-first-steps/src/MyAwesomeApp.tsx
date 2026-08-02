    const firstName = 'Angel';
    const lastname = 'Sena';

    const favoriteGames = ['The Legend of Zelda', 'Final Fantasy', 'Super Mario Bros'];
    const isActive = true;
    const adress = {
        zipCode: 12345,
        country: 'USA',
    }

export function MyAwesomeApp() {



    return(
        <>
        
        <h1>{firstName}</h1>
        <h3>{lastname}</h3>
        <p>{favoriteGames}</p>
        <h1>{isActive ? 'Active' : 'Inactive'}</h1>
        <p>
            {JSON.stringify(adress)}
        </p>
        </>
    )
}