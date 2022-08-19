import { system } from '@/utils/request'

export default {
  list: (data: any) =>
    system.post(`/project/task/list`, data, { headers: { 'project-id': '29b5d82a182a47ebaf5674a64db3e12e' } })
}
