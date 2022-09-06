import React from 'react'
import '../css/AccountPage.css'
import { useNavigate } from 'react-router-dom'

const AccountPage = () => {
    const navigate = useNavigate()

    const goToLoadingPage=()=> {
        navigate("/loading");
    }

    // const [search, setSearch] = useRecoilState(searchState);

  return (
    <div>
        {/* <Link to ="/loading">go to loading page</Link> */}
        <nav>
            <div className="navbar_netflix">
                <img className= "navbar-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158" alt="logo"/>
            </div>
        </nav>
        <div className="accounts_manage">
            <h1 className="accounts_title">넷플릭스를 시청할 프로필을 선택하세요.</h1>
                <div className="accounts">
                    <button onClick={goToLoadingPage} className="user">
                        <img className="user_img" src="https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"/>
                        <div className="user_name">
                            User1
                        </div>
                    </button>
                    <button onClick={goToLoadingPage} className="user">
                        <img className="user_img" src="https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdi6oYb6DJb1LndQWckgaXvrqqP3QURNa8Xngiq7wwFwDtWIg1otEuYKVxbYwS9c5clAI1_Bn7DuljwcvhfUzQu2_Y2v9y5P6t_n.png?r=e6e"/>
                        <div className="user_name">
                            User2
                        </div>
                    </button>
                    <button onClick={goToLoadingPage} className="user">
                        <img className="user_img" src="https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbV2URr-qEYOrESG0qnP2787XsIxWTMBh7QfJwyqYxMAVFNyiXAqFeu16gI8yTxg3kLwF2mUDKmZGfwBEDd7722xskhYwAMwsBBe.png?r=bd7"/>
                        <div className="user_name">
                            User3
                        </div>
                    </button>
                    <button onClick={goToLoadingPage} className="user">
                        <img className="user_img" src="https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"/>
                        <div className="user_name">
                            User4
                        </div>
                    </button>
                    <button onClick={goToLoadingPage} className="user_kids">
                        <img className="user_img" src="https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRZ9UvLLN8tmuXW65YweIeYLuhKgR4qnSL0rVwNF6rgxxbsMoW9mCtlxPcz76Ti7bnciG7lE4WcqR8Z7YVM4xjX_-r0wd449rgnY.png?r=acf"/>
                        <div className="user_name">
                            Kids
                        </div>
                    </button>
                </div>
                <div className="user_manage mt-5">
                    <button>프로필 관리</button>
                </div>
        </div>

    <script src="https://kit.fontawesome.com/739348ab3c.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <script src="main.js"></script>
    </div>
  )
}

export default AccountPage