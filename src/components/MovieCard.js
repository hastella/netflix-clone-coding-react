import React from 'react';
import dummy from "../db.json";

const MovieCard = (props) => {
  console.log(dummy);

  return (
    <div className = "slider">
      {dummy.movies.map(movies => (
        <img src = {movies.url} key = {movies.id}/>
      )
        )}
    </div>
  )
}

export default MovieCard

// {
//   "id": 1,
//   "url": "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfSN7DqeKCkBkNUokg3Afs7ie5DJy3LhRIvmbfm9CJ_MhtJKhTOJuNAcX5ahAcznyFzvPHlvv5-1rteijJ0fmbx2HpatqHY6wus.webp?r=708"
// },
// {
//   "id" : 1,
//   "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABasCSTmlCOh9CKKqnmbIGwlld77PpwI_0UkZYA6f0PPFQWtgprQZIkhqTKOlARFlM8Wxnbs67yRsahXKPPFFjI8TX1FzLbgR5rA.webp?r=8b8"
// },
// {
//   "id": 1,
//   "url": "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZC3AWh250O-dFh9pYN-ypqmL0Y3n9OyOeLSRmMwVzBiKWnqgp6Q8mLLkLf4qciSuZPAW_aFy5U2cfzTLzqNXA5loA23U45hUD4.webp?r=19c"
// },
// {
//   "id" : 1,
//   "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABejvUsQQ1Z4YPzq19qf32CuynH1hIIP1Y3hTCtLm579lytFQB7LpDfXsWJQZExJmiUuoV4vBHe1LBc-nKiHo9pKe2f4_SFevEQI.webp?r=d52"
// },
// {
//   "id": 1,
//   "url": "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ1TppvaFw0mk7EQ6_soqgqNCwXOW-2Y0oCt-0hEvxiRgIMARwBj5fBqfE_vvpgbGDL2o5x3qUnOr4oIb4wl10-bCMZIcydybpFEmdsVeQMixRt0-br5nT101QPCJuRssNNi.jpg?r=a3c"
// },
// {
//   "id" : 1,
//   "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS0rra5Q7QJq9MR_OTTMC07QaBDIKttRCkxPNuTVZ7KQ2hTxU8YUlV7p3JJEyVfBe2c0wkm0g_ODNAMyH2U7CTijGQvVqmu_fzA.webp?r=ea6"
// },
// {
//   "id": 1,
//   "url": "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYDFpMAAqdapBa1m5HBLvth_UnUqfwjJwARFXzDypzB03rtKW_0J-RyrWVRwEx9Cp5sE-T7kyBCqOXeoNMlm629Dz2NQh0tzFpXZkuv4lw90r04EQiNiy40Dbuz94bGpjy0C.jpg?r=98f"
// },

// {
//   "id" : 1,
//   "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb0JIJgM4HxB7Ya2g1rYxG9a4pCismZsi-12QVn1jS2EO05O1lm8lyZlIFPdB22id8xGXOdBwvOT5ZONrdzww6h5BadFm1cmH_o.webp?r=b2a"
// },
// {
//   "id": 1,
//   "url": "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQUpKGRor1oIWNhXWYciPrFIQ5NFYTyoFj28pT4NTRfV0LkHBRE4-i2G5I8CEojvBoAw_lm2SFhdjFPaGBH0xCs3pBXMQ4-2iqR-PSil5homBFodGU033WYIIHJ45SqiESoM.jpg?r=9f4"
// },

// {
//   "id" : 1,
//   "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdaKR1_MJVzCRuTX03vsd4zjgwxSiIvAJE48vWpN3ewSQk5na8f2_RZDc3jBjiQP11KLNS6GE9vXuO9NN1sU4tVz6RymQirE13jyXfdyPwH_CrpCTnsx3e-iSyymPKo-oDJT.jpg?r=a11"
// },

// {
//   "id" : 3,
//   "title" : "코미디 시리즈",
//   "img" : [
//     "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVBC4E4SaVdShjUSJpNOfM627cb-3YO4stS2ss64JALeF-kHcGQhweC0xrrILuHP8mo54bK2GF7vcwBglwocuKmy13eQxeWPXCE.webp?r=1c7",
//     "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdPzfGvGFS7gdXVs1_ap8cJyU_bk7uH8XVtte319lybKlkF2-QJv44R0FxOdWTlKGFwlQV-0jgq-uwjp-rjyBlJXkWAOx9VAvwQGp21r213NQ4Y5ZmaYjj7PAybkhLZQKaQBJTMxUdsOX6fjlGsSr1rCv46U87KL4wDC7xoe3AREud_t_n-GoBv8VhqEHkBchtnt.webp?r=e62",
//     "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb2Na59vnIWYAJ1Go3XalYcSVs_qGQpaeCIExNTaqLLFH6HEoWDy9nCoHxGRmQa7OW4S1c9xNUNBtKJd6tsOhwKEBS1g_NLfU58.webp?r=089",
//     "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYx5ysoRYdB-0aZVyUGHKPCl9Gbgs4oswR45I6LiXtF9G7c4VnPV088x17hIdDzliOi98YMbofAPdS_e_BefJWuQwodS4ZBBhxs.webp?r=77f",
//     "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe9BxHZ3xKYa-a9pqMOFSr7b3LtXfaYFKoWMjhh4DHyt-vNb8FjB5fwyimVLAKlwtaf-8YdkNGAi-IEO4m6gVWhR4vhTC_jMaC0.webp?r=db4",
//     "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQjJ1DJnyX7P7mnaKrdgi4KKv0bTcVmZptO4k5wyTdIViOkhHjhwDOwt67Z8wbJptQb3mtbU6PtmtS-1Wq76rC3_Bn2emdLQitRpbrlRLIeVCSDPzDI1azeDyW3e6-_L3ENj2M_Vc709yjykAsaj4xXrzlUhtRY8J10.webp?r=36c",
//     "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVRE_EKM-JQTWrnLGFUAe0fSpNxV4nya965D6kgEKAyUrVCXXRxbllTZ4wTb3Teq0l1P97IBmQNeFfEh2PtHhl7WBL3_JG4qdQI8PiOQMqNTHunvzvfl8r6DhhP6YS0gd3aBMCnsX9wfZS86MJqDhFT3elwMS7ia1vgOeA.jpg?r=f39",
//     "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQOuuhE2M3GzSogPV-cR1_h6ECW3ZqtvV0URmFfU3aiQeODkQbacWIiJlCaAKTAjdM9Yy-zWHz8QvZ3tRke6jHQoZk9TEa0osLo.webp?r=350",
//     "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTZGlcsPgLPRvP-rXqRyPo5nHu137fBaq7KqgZTOS7gXz9ZCIXNlp-vMFNSDEI0ffkqscBex5aTNz5--hGzoFxl1MIBLyHxGuKs.webp?r=492",
//     "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUSyC0aKyBo7H-HEyxMjAF3rms450kZl1eZlvPDu4KxCaUnVj9rAVrodphw-arD33NYYBN7T1kxESUcq0mNbr5VjbBhG82Z_bAIavyZ6UkfjzSQeTCyXbRIHL_hzJ1yi1PlV.jpg?r=8a9"
//   ]
// }
// ]
// }



// {
//   "movies": [

//     {
//       "id": 1,
//       "urls": [
//         "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfSN7DqeKCkBkNUokg3Afs7ie5DJy3LhRIvmbfm9CJ_MhtJKhTOJuNAcX5ahAcznyFzvPHlvv5-1rteijJ0fmbx2HpatqHY6wus.webp?r=708",
//         "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABasCSTmlCOh9CKKqnmbIGwlld77PpwI_0UkZYA6f0PPFQWtgprQZIkhqTKOlARFlM8Wxnbs67yRsahXKPPFFjI8TX1FzLbgR5rA.webp?r=8b8",
//         "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZC3AWh250O-dFh9pYN-ypqmL0Y3n9OyOeLSRmMwVzBiKWnqgp6Q8mLLkLf4qciSuZPAW_aFy5U2cfzTLzqNXA5loA23U45hUD4.webp?r=19c",
//         "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABejvUsQQ1Z4YPzq19qf32CuynH1hIIP1Y3hTCtLm579lytFQB7LpDfXsWJQZExJmiUuoV4vBHe1LBc-nKiHo9pKe2f4_SFevEQI.webp?r=d52",
//         "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ1TppvaFw0mk7EQ6_soqgqNCwXOW-2Y0oCt-0hEvxiRgIMARwBj5fBqfE_vvpgbGDL2o5x3qUnOr4oIb4wl10-bCMZIcydybpFEmdsVeQMixRt0-br5nT101QPCJuRssNNi.jpg?r=a3c",
//         "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS0rra5Q7QJq9MR_OTTMC07QaBDIKttRCkxPNuTVZ7KQ2hTxU8YUlV7p3JJEyVfBe2c0wkm0g_ODNAMyH2U7CTijGQvVqmu_fzA.webp?r=ea6",
//         "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYDFpMAAqdapBa1m5HBLvth_UnUqfwjJwARFXzDypzB03rtKW_0J-RyrWVRwEx9Cp5sE-T7kyBCqOXeoNMlm629Dz2NQh0tzFpXZkuv4lw90r04EQiNiy40Dbuz94bGpjy0C.jpg?r=98f",
//         "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb0JIJgM4HxB7Ya2g1rYxG9a4pCismZsi-12QVn1jS2EO05O1lm8lyZlIFPdB22id8xGXOdBwvOT5ZONrdzww6h5BadFm1cmH_o.webp?r=b2a",
//         "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQUpKGRor1oIWNhXWYciPrFIQ5NFYTyoFj28pT4NTRfV0LkHBRE4-i2G5I8CEojvBoAw_lm2SFhdjFPaGBH0xCs3pBXMQ4-2iqR-PSil5homBFodGU033WYIIHJ45SqiESoM.jpg?r=9f4",
//         "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdaKR1_MJVzCRuTX03vsd4zjgwxSiIvAJE48vWpN3ewSQk5na8f2_RZDc3jBjiQP11KLNS6GE9vXuO9NN1sU4tVz6RymQirE13jyXfdyPwH_CrpCTnsx3e-iSyymPKo-oDJT.jpg?r=a11"
//       ]
//     },

//     {
//       "id" : 2,
//       "urls" : [
//         
//         
//         
//         
//         C
//         "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUvGrfTEhWirLaLL2LIy77EvGAsMpR4LpGtxUBryvIJdGtjhVc9n_I9cwusJDZxQ_4Th8IUYSXSKJjpgix8Pd-pSNjYHBMth4IiXqjkkiAKO0MJVmSeZHiDJZWjoC-n-lY_3bwIhws2itHQFxAHZVJHq8cfMm2bEKHSUehozY8MRBhWjnttkFUPwkgfPP0Y.jpg?r=4d0",
//         "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR2-ca3VzDi32dhvfXdaFj4wE8B59jRxKuD6rwivODsw3SqEzkyx4I4qC1-r6g8pa-lwelajoxFiVVF03w4L0zkpZ3Cf9_NoOmTh82zdMWu3VID9blOoc2ahPYqKEqpWxM9o.jpg?r=a8d",
//         "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYRCV1EtkfVxPVA_tNbJnydHkb2kBjduk0S6ZmPaEj6FJxZu1JPe40NHYc-FW9tNzCcEGWhZGMXSjKban07j9PPn2Rh6zRadvjA.webp?r=bac",
//         "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd_uk0lcBO6Tba5QFNsaDPbNvbOLvjLBOWfZXrlaarIoybGHs-XeR5duqPSZdeKZfnrPjWQNl_YnQ0U23_hMIvFVSeK-m4aHJ3kRhyTlNKHKipRwEynQcEiSWIN7yGz8ZuhR.jpg?r=c4b",
//         "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXouPlejdY8iy5s66l6KBBADqTZOn0MenA3Jnng0hAAPCabY71OlzrjE7txYnEf5oosLPkjUeFBEtrIwMS5ICoI6JYlYI3bbAnI.webp?r=5f6"
//       ]
//     }
//   ]
// }

// {
//   "movies": [
//     {
//       "id": 1,
//       "url": "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfSN7DqeKCkBkNUokg3Afs7ie5DJy3LhRIvmbfm9CJ_MhtJKhTOJuNAcX5ahAcznyFzvPHlvv5-1rteijJ0fmbx2HpatqHY6wus.webp?r=708"
//     },
//     {
//       "id" : 1,
//       "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABasCSTmlCOh9CKKqnmbIGwlld77PpwI_0UkZYA6f0PPFQWtgprQZIkhqTKOlARFlM8Wxnbs67yRsahXKPPFFjI8TX1FzLbgR5rA.webp?r=8b8"
//     },
//     {
//       "id": 1,
//       "url": "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZC3AWh250O-dFh9pYN-ypqmL0Y3n9OyOeLSRmMwVzBiKWnqgp6Q8mLLkLf4qciSuZPAW_aFy5U2cfzTLzqNXA5loA23U45hUD4.webp?r=19c"
//     },
//     {
//       "id" : 1,
//       "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABejvUsQQ1Z4YPzq19qf32CuynH1hIIP1Y3hTCtLm579lytFQB7LpDfXsWJQZExJmiUuoV4vBHe1LBc-nKiHo9pKe2f4_SFevEQI.webp?r=d52"
//     },
//     {
//       "id": 1,
//       "url": "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ1TppvaFw0mk7EQ6_soqgqNCwXOW-2Y0oCt-0hEvxiRgIMARwBj5fBqfE_vvpgbGDL2o5x3qUnOr4oIb4wl10-bCMZIcydybpFEmdsVeQMixRt0-br5nT101QPCJuRssNNi.jpg?r=a3c"
//     },
//     {
//       "id" : 1,
//       "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS0rra5Q7QJq9MR_OTTMC07QaBDIKttRCkxPNuTVZ7KQ2hTxU8YUlV7p3JJEyVfBe2c0wkm0g_ODNAMyH2U7CTijGQvVqmu_fzA.webp?r=ea6"
//     },
//     {
//       "id": 1,
//       "url": "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYDFpMAAqdapBa1m5HBLvth_UnUqfwjJwARFXzDypzB03rtKW_0J-RyrWVRwEx9Cp5sE-T7kyBCqOXeoNMlm629Dz2NQh0tzFpXZkuv4lw90r04EQiNiy40Dbuz94bGpjy0C.jpg?r=98f"
//     },

//     {
//       "id" : 1,
//       "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb0JIJgM4HxB7Ya2g1rYxG9a4pCismZsi-12QVn1jS2EO05O1lm8lyZlIFPdB22id8xGXOdBwvOT5ZONrdzww6h5BadFm1cmH_o.webp?r=b2a"
//     },
//     {
//       "id": 1,
//       "url": "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQUpKGRor1oIWNhXWYciPrFIQ5NFYTyoFj28pT4NTRfV0LkHBRE4-i2G5I8CEojvBoAw_lm2SFhdjFPaGBH0xCs3pBXMQ4-2iqR-PSil5homBFodGU033WYIIHJ45SqiESoM.jpg?r=9f4"
//     },

//     {
//       "id" : 1,
//       "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdaKR1_MJVzCRuTX03vsd4zjgwxSiIvAJE48vWpN3ewSQk5na8f2_RZDc3jBjiQP11KLNS6GE9vXuO9NN1sU4tVz6RymQirE13jyXfdyPwH_CrpCTnsx3e-iSyymPKo-oDJT.jpg?r=a11"
//     },

//     {
//       "id": 2,
//       "url": "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa0Y39ZkcGGOoeeoTLMRLJe0KpXXZH2xefajxWPBVK2NCKefnJ-xUkSo2JOhkSDXK5liiWIIomfHj111gAGy4CFz0q276qbAH4Q.webp?r=b61"
//     },
//     {
//       "id": 2,
//       "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe97xsH9PSijSfQoZ6QLruB9U3Uxo1E3WkFD3XTjUWUNjzD86qM564IDZxUK6WzY75fcb1MVMPrjzOY2-fWuu0OQRbKQbtotVhiZpxpjKbhG23PGJq8FJMYWeJSMqnxc01xO.jpg?r=607"
//     },
//     {
//       "id": 2,
//       "url": "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbVeSaSXi_LRJFe1LwUnvXdgC24rsltbw975RNF6Bz3GxHnbyyspxBnYtRczcUAiCfwZ6z0TUIPckMFHu7nzDeMyvvu2BsmJOjTma_TLVHenH2DrxxxEX6P8UcAPMy3cnAPj.jpg?r=4d0"
//     },
//     {
//       "id": 2,
//       "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeJDwIDyuYuLIajuemhNibP3A8QQTt6YEPpoh28weJA4L4thVjfU1GvqMnZDWW3yoteiiEOFSgmPj5vt-WQrK24owvDj_7NqUBw.webp?r=b98"
//     },
//     {
//       "id": 2,
//       "url": "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcD69mH2p6i2IQyPGZgCrDg1D49GKd7lcCry5L3YdN8fCTkOvU6jcd1j6Lj6WB9rmRsiIhJuAXt8EkMygQ0-f1UFiNQBJXZ3yrc.webp?r=cb6"
//     },
//     {
//       "id" : 1,
//       "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS0rra5Q7QJq9MR_OTTMC07QaBDIKttRCkxPNuTVZ7KQ2hTxU8YUlV7p3JJEyVfBe2c0wkm0g_ODNAMyH2U7CTijGQvVqmu_fzA.webp?r=ea6"
//     },
//     {
//       "id": 1,
//       "url": "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYDFpMAAqdapBa1m5HBLvth_UnUqfwjJwARFXzDypzB03rtKW_0J-RyrWVRwEx9Cp5sE-T7kyBCqOXeoNMlm629Dz2NQh0tzFpXZkuv4lw90r04EQiNiy40Dbuz94bGpjy0C.jpg?r=98f"
//     },

//     {
//       "id" : 1,
//       "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb0JIJgM4HxB7Ya2g1rYxG9a4pCismZsi-12QVn1jS2EO05O1lm8lyZlIFPdB22id8xGXOdBwvOT5ZONrdzww6h5BadFm1cmH_o.webp?r=b2a"
//     },
//     {
//       "id": 1,
//       "url": "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQUpKGRor1oIWNhXWYciPrFIQ5NFYTyoFj28pT4NTRfV0LkHBRE4-i2G5I8CEojvBoAw_lm2SFhdjFPaGBH0xCs3pBXMQ4-2iqR-PSil5homBFodGU033WYIIHJ45SqiESoM.jpg?r=9f4"
//     },

//     {
//       "id" : 1,
//       "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdaKR1_MJVzCRuTX03vsd4zjgwxSiIvAJE48vWpN3ewSQk5na8f2_RZDc3jBjiQP11KLNS6GE9vXuO9NN1sU4tVz6RymQirE13jyXfdyPwH_CrpCTnsx3e-iSyymPKo-oDJT.jpg?r=a11"
//     }
//   ],

//   "comedy" : [
//     {
//       "id" : 2,
//       "url" : "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdaKR1_MJVzCRuTX03vsd4zjgwxSiIvAJE48vWpN3ewSQk5na8f2_RZDc3jBjiQP11KLNS6GE9vXuO9NN1sU4tVz6RymQirE13jyXfdyPwH_CrpCTnsx3e-iSyymPKo-oDJT.jpg?r=a11"
//     }
//   ]
// }
