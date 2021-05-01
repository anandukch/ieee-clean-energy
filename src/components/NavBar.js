import './NavBar.css';

const NavBar=()=>{
    return(
        <div className="nav_main">

            <div className="img_bar">
                <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAA2CAMAAAD9AfsAAAAAsVBMVEX///8BUqH///4AUqL1+/sASJf3+fgAS5X3+Pn5/v4ARZwAS50AT6CktMsASZ2JnMGbrMoAM4yHnr8AOZDq7/pIa6Xs8PO0wNZTc68AQZoAU567v9IAQJX+//oAO5g0X6FadaUAMpI/Z6d1irIrVJtifazX3+h8kbQAJ4FHZZsAJ401YZzg5uvF0d+7x9Rjea4jU5RhfKQANZ64vcerssIAIo9TeK4AP4vI1NmAnrkAMYGZkurTAAAF+UlEQVRoge1Ya3ejNhDVwzwMQia4xkEL2ASDNzE42babZPv/f1hH+CWBcJr2bLYfcuOTg30RupoZjWZA6BOf+MT/GwTFgU3Ir5YxAMk2+fpXizChYjgJfrWIHjKCgkQImtTI4EqiovdV+V3eOcYSND7yavDUc8wYFo4xxA6/KY8Ye/iVyUdFETSui8QW5dYi5f7tYdU9WdPJEZJzJ2Zk8t4RbirnH+Fssy6SwZgVS0p74s4Sb2vyZJRaHW7kl/D4pYc0Bu63r0ZuvpSrvefGcYsxYxG09tJ9vHvYNW06D4b2QhGnHeadLo4xHQBbna6bIQNcspSzLJiJZLcjujK0TZxmn2Dqp8t4ky8HwkEXljjrongIy+10GRgsdSGpy8SZdcmoi4rVJJqDciHyrXtf7KVWXZev65ITCP3x1D/ayzS3d7TX4U6h3TOiK0PhzWJSeVQkgYcFrybrotVjzKyr58uTH4+zCZXu6dJH+iP2CovHyc6DNSymKcXM2k3Lh9e+Hw26KGQVFZouijUu1f2oDbSGcS+tImWt5LReiEqOBWMrt7ppkWKyEXtZjauBKLr4F6JxSNHFbnXONfgQYqtyn2RUC69BbSKHsY27hhi7eHJEF4+H5j/p8r4YPHPWZXKchqzM1wdrYXYHQwWMFL5/N9nNlV05Zq/ruobZ5h/qggS8SO6mO7+bxpNCIq/bL3wRb+bR2ZUfq4uQZmM59tqXd/s4XdZkH3qi2/5+2eRpRc5P/FB77eeMN1uPyny68mgeoY0nEo/J7JKHbcqd5qoufxCw/z2+wEPbBOetzPJ4XtWoXsF+XPhVE1Rd5stft5xZUI9Nx/PEdqYg0nSxSuW2saKL0tUPldxrwponj0pvwY1QdCE3eE5D9MjSdu9+47Tz0orRtIrH7YV9BVwgNU9Q5ihcUav2wowrA9NIlRXPodhK4wVEEw8RaRzOIPAffZHkK7SWu9KL2hRzx7miS0v3T5q9pLIzReeqLkq1s4DPNHMVcmp351PMI5lcGfb2qILjg6eZPKWZeKzhbPKLUT/KnHcB7eu6kBCtur3g4Rf4kbZD6o2HpUnAZRyiKFgVxRJVeW7N3Fb6UfxeV2C9XX3FXirYQNcZdKBLBdhL0QWXZYKLOpQJy7OiGtn1H3/u2yZeLubyvE+CNmfg+64yHtHlKUgcXZevkg+NHl8ql8/6GWVZsM1kLYsp6s/9u+cwmC2wzBNwIrPn2PHT9lBTj9Q5LNCg6eKlSoWxputOG9cOckWDvXuyOk4pt2WY0K40grN78pTsYnQl31Ps29rTiKZLz1+ZGvf9/NUzF1T19l1e2s5xc3k1Cvih2GNOXOVVJtu3cV0Mzu1BR6Tm+14bdrHX7XCcvkCCvhUzaIUOS2zQMpGXwrfisoguCxnJq7oupPlR10UI0vO9rsrQsaLZQ9h0gY67OkfuRJY28Ovbdc7POh8PMREVUWN1R3eMurTBrGb2dXny4b/XNbTBe3RBHf09hL0nmDNFdQLlKsj6vkTkrXoVcm48VdH1tRddGjeVPeop7vEz0kljXwvCHkp35Qn+tNlAxtjE24el7gSjLrkCFfxFre8Z1O16X3vRRX2NezH2tXIdUEtP17LzgJ7o3i0fAkTe7ocgycERyE44lj3nvMpOHJUftX8UVECKvHDi1mQvEAB9bX5nRznDUIPZiyKAX97uH+HpXQsp5H/5GfS1Ap/pfp8mBD7+CZk2RqNszTdNmyQv+8bJ5dkzNdsLj5+PBl0K0nf32wddZMHnQdxOwsQrITu7JOvp6r2fMLxowPygy/QKgh796Js4c197FBZbIlnNVp6/I+i1/BHqPPrxcuhB/5pKXS+OEYe4N1Jp58d7y8RZ92O65MxtTpkvKOSkrIpmZa3T9hFd7+q6tgldniATI2dLB2RmyrYzo6YOGQpSiMjkFaYto2qvFd3k0rCdDfxOkC5ozcwVWXLEM4RnKC+30f7eHdDqxdVXnaMTjLyvHBtyQpx6z4erfWBfeef54ai3cRciUtIV234wCDq9GDZWHp/4xCd+Cv4GRA+MglfQrEQAAAAASUVORK5CYII=" alt=""/></div>
                <div><img src="https://cmte.ieee.org/pes-substations/wp-content/uploads/sites/97/2019/12/logo-pes.png" alt=""/></div>
                {/* <div><img src="https://pes.ieeekerala.org/wp-content/uploads/2020/04/PES-Logo.png" alt="" style={{'width':100%}}/></div> */}
                
            </div>
            <div className="content">
                <h2>
                    Clean Energy Revolution
                </h2>
            </div>



        </div>
    )
}

export default NavBar;