import { system } from '@/utils/request'

export default {
  login: (data: any) => system.post(`/login`, data),
  list: (data: any) => system.post(`/project/list`, data)
}
