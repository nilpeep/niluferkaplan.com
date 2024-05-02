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

const useAuthCalls = () => {
  // const router = useRouter()
  const dispatch = useDispatch()
  // const { token } = useSelector((state) => state.auth)
  const { axiosWithToken, axiosPublic } = useAxios()

  const login = async (userInfo) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login/`,
        userInfo
      )
      // const { data } = await axiosPublic.post("/auth/login/", userInfo)
      dispatch(loginSuccess(data))
      console.log('logged in')
      // router.push("/stock")
    } catch (error) {
      dispatch(fetchFail())
      console.log('can not log in')
      console.log(error)
    }
  }

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
