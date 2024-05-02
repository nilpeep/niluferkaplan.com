// import axios from "axios"
import { useRouter } from 'next/navigation'
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../store/auth"
import { useDispatch } from "react-redux"
// import {  useSelector } from "react-redux"
import useAxios from "./useAxios"
import axios from 'axios'

const useAuthCalls = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  // const { token } = useSelector((state) => state.auth)
  const { axiosWithToken, axiosPublic } = useAxios()

  const login = async (values) => {
    const res = await fetch("http://127.0.0.1:8000/user/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!res.ok) {
      throw new Error("smt went wrong");
    }

    dispatch(loginSuccess(values))
    router.push('/')

    
  };

  const register = async (userInfo) => {
    dispatch(fetchStart())
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/users/`,
      //   userInfo
      // )
      const { data } = await axiosPublic.post("/users/", userInfo)
      dispatch(registerSuccess(data))
      // router.push("/stock")
    } catch (error) {
      dispatch(fetchFail())
    }
  }

  const logout = async () => {
    dispatch(fetchStart())
    try {
      // await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
      //   headers: { Authorization: `Token ${token}` },
      // })
      await axiosWithToken("/auth/logout/")
      toastSuccessNotify("Çıkış işlemi başarili.")
      dispatch(logoutSuccess())
      // router.push("/")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Çıkış işlemi başarisiz oldu.")
    }
  }

  return { login, register, logout }
}

export default useAuthCalls
