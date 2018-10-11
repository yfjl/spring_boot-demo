import axios from 'axios'

let baseUrl = 'http://192.168.1.82:8081';
const service = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 100000    // 请求超时时间
});

export function faceIn(imgInfo) {
  return service({
    url: '/face_in',
    method: 'post',
    data: imgInfo
  })
}

export function search(imgInfo) {
  return service({
    url: '/search_faces',
    method: 'post',
    data: imgInfo
  })
}

export function bindUser(params) {
  return service({
    url: "/bind_user",
    method: 'get',
    params: params
  })
}

export function aliFaceIn(imgInfo) {
  return service({
    url: '/ali/face_in',
    method: 'post',
    data: imgInfo
  })
}
