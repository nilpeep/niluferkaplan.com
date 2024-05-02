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
  // const router = useRouter()
  const dispatch = useDispatch()
  // const { token } = useSelector((state) => state.auth)
  const { axiosWithToken, axiosPublic } = useAxios()

  const login = async (userInfo) => {
    axios.post('http://127.0.0.1:8000/user/login/', userInfo)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    // try {
    //    axios.post(
    //     `http://127.0.0.1:8000/user/login/`,
    //     userInfo
    //   )
    //   // const { data } = await axiosPublic.post("/auth/login/", userInfo)
    //   console.log(data)
    //   console.log('logged in')
    //   dispatch(loginSuccess(data))
    //   // router.push("/stock")
    // } catch (error) {
    //   console.log(userInfo)
    //   console.log('can not log in')
    //   console.log(error)
    // }
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
