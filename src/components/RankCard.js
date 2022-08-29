import React from 'react'

const images = [
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABUmHRzNTytd_4D38_BiRJSprB2TnirdDhWlWGUAiUevW_Fx-kplILkuBibLzHP1EPe1tlzQaaWJjJgPbFcN521Sif3Aa9TIyTb1ROaN1pe6vnkzgC-IFiqM5o4xM_mo_vT94uemqL7avFQM3qfj8zA.webp?r=617", title: "top10Series"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABW8nfvcD5WDBOZ4N8gtg9HZ0oNOv9XfLssAi2ZHUx-YAhwOr9cMKRIWhGdlVShFWVHalgyBh8NRDkKJ-Z2VyK5pCt8Iz-WOiwXCFodLT010ld0iyby1NVZsCUBR4LgIhqor0Zw.jpg?r=072", title: "top10Series"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABR4-SKX3hJWAD_F67B8ghjm3bvZ5nOpcmT9QNYokQ_yK9pfePaFbxQkSmjd0B08nWqPjY2rmc0Vojo6lpj7uJqftS-4GTM7XyiKL.webp?r=d83", title: "top10Series"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQJc7LflHouEZfRhqcCpbcvUG5miodteZbGr_EfOPaWvy7_gfcKuxS_yJ5lJwU4C5EKtSJHmjXDrJLn41V4fXLsRMeYIfQJDg1434hHzGCoJJMpZNXJNOVX1K7e2-mfhvaUwMXLEOa0.webp?r=cf3", title: "top10Series"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABctL6aLEZHqbTMovAinm8H3uz8t-BTAj7Z5pNXoidVUnETERj-cEb15Fs2yI9oI8DaWdyrOELOu46fxkc8cBl3YyHnmpta7mwm6s.webp?r=f83", title: "top10Series"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTjG9tklJ0qfIHmLh2jmnks0L18KhCDPz_1Kz8bcOlKEz-1HbksPbZDyeJseRDDw4F7MKc_R_-7sjjKklfcPt31QCwqGEN0vEDMvXJ1Gkc2K87nWj8mmNFLaHT_SZd_bp6hXPQ.jpg?r=5e6", title: "top10Series"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABVH9jMZvWUFwgdXMk91dd1TIKXBxDE-Rbok4Dyup-mXwpEhNufSD8e49BRnv9nV2Lpnnv0X5gGQEVmIXdNcYr53HhjOJqyBciqeCNbZid8K_Gw8j-jZ5y6BTE08skchLIguAtTdY941VE6du-UXGsA.webp?r=0f5", title: "top10Series"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABc1nAdcdKPWjdTUAcxoIi_t118oIu5PU0S4nXS8XwoD2_C8UlYNABDcLc67hEecq2ZBRjkIG_fwTBVLv7d41xrQ6H7iJ8M0WNCjlV04rsX13UuIRkBZLQ0nZ7jX1MwzTgwlHIb_8Q8n2nQK9fWSNVA.webp?r=f66", title: "top10Series"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQ5t5ZEeTTbnD7zkux2H7Ebt0zBTnzGM5chZfRcomEpkrsnrlJj12MIw8GuYM3JmoXyFPGlZHLwGhN8eSs_TQ1xpcLgKf5JNdxv-jj1ZeDccD6r_9H6osksdVPQnSaeDHSPnnadhGihFOFDRREsNtw.webp?r=7f9", title: "top10Series"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfG70zr5oju6Z1v0CpKTvTUXs52_5mgV9VRGqjKipg9YIRWNHKiZ6am0fRGxXjHk4P-YvRm9ejldPbTafpoMR3wSN6HWOXoMaM4f.webp?r=a62", title: "top10Series"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSN5aMmPnld1JabXzlrGeVDIxsHhdjJdED7PQPwYdCQ5-sCp9io1XFbw7bH5si84bbQoOugOHSXwFpAOSmAv_Uxk6b8IB7ux3q8mOEpuhb1forNyywPwkd64ZSh00_ZzPQr55w.jpg?r=bab", title: "top10Movies"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXM6EwtPrFOe4NSROTleT22852BfvuKupxJzMm0XxrJnEgn78RIE6SEW3i1TL55_YDkRR2e2V_t_gXcXPIaOZ5AeWNo8p7g2f0EtbhMx9EshYTcSWPsE_DWtqt_GtBcxMPiBnQ.jpg?r=f20", title: "top10Movies"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbxnLAbnMPff5SXKonKJOc6kydRfBMjCkFNLJ3bqVTCblZjZ8GmfLdwNRLMOyd-v0M6Ode0wtwWGSrrhM1wL_4cfddpi8vl19jpq.webp?r=f5c", title: "top10Movies"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABYcOH0_LTlyQVffiDeyFlpi815xsT1umGBuSKKtgQm6ZxNMNy9nJw28GqYao5_4vjADGwDgR1TJhAlhXERIQPCnMCaPz6Kox-yC_8JJAi-WrqDSMPvjGbLuShRzw_9YsB2wcdg.jpg?r=08f", title: "top10Movies"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQtgOJMLz2UAVJB416Q_C5fzPx8qcwnZWX_a_J9CPibRFB1HsmxPlCCQXkd7MNDEKMbyn8-P9QJTq9pE6SrUo95BZb8fVSj-4TAi6aw_9OfBtCrfJRUV9fJxFY05cLsNjbgdrg.jpg?r=d6b", title: "top10Movies"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTjG9tklJ0qfIHmLh2jmnks0L18KhCDPz_1Kz8bcOlKEz-1HbksPbZDyeJseRDDw4F7MKc_R_-7sjjKklfcPt31QCwqGEN0vEDMvXJ1Gkc2K87nWj8mmNFLaHT_SZd_bp6hXPQ.jpg?r=5e6", title: "top10Movies"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQdtkL7v9ksvpR64gyGFgnDnQoea6wx6Jal-0ADm0-LzJ0TKAY4jhH10RM_rxh7T2jggjaMQsTcL0rqY9QtXV0ffWE4McT7LLq0I.webp?r=e19", title: "top10Movies"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABaqxiaBO-AsDi851vyVfCbkCvrYVRtjR9aaCbThumy7sj7_igjBX9bYDbysyJqF1AN6ZmlTznssBw58yaUgd1jdhZJhGyXUEYZr8rk3kzXO9ltdyNqA-Iap0HwxGzu2Ial58eA.jpg?r=c79", title: "top10Movies"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRpuLxMsmofwk-PsiJNBnxiFZ13bKqLAJvwjPvDKQ8YKSAbu5tcgPr_vfXjOdlmLhCsUHletHHA_7YJFUKd9WyoUiFDTo1rYwoRY.webp?r=c9a", title: "top10Movies"},
    {image: "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQ3fz0NtS4hs9gnd2JFFHQfndV9AaMaRPeUAv7wEkaQMiYm0I1ITNFkXNjfjOTwfSqZh0BEowfdBTHUUhM6p7hKoy0C00TgqU704cmuvT088HM1qIKrHyKrWLPgdTxBAiZWHZQ.jpg?r=5f9", title: "top10Movies"},
]

const RankCard = () => {
  return (
    <div className="swiper-slide rank">
        <svg id="rank-1" width="100%" height="100%" viewBox="-20 0 80 154" className="svg-icon svg-icon-rank-1 top-10-rank"><path stroke="#595959" strokeLinejoin="square" strokeWidth="4" d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z"></path></svg>                           
        { images.map(({image, title}) => 
          <img className="swiper-slide-rank-img" src={image} title={title} alt=""/>
        )}
    </div>
  )
};

export default RankCard;