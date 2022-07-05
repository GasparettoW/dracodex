import { Dragon } from '@/common/types'
import {
  getDragon,
  createDragon,
  updateDragon,
  removeDragon,
} from '../interface/dragon'

export default {
  getAll: () => getDragon(),
  get: (id: string) => getDragon({ id }).then((data: any) => data[0]),
  create: (dragon: Dragon) => createDragon({ data: dragon }),
  update: (dragon: Dragon) => updateDragon(dragon.id, { data: dragon }),
  remove: (id: string) => removeDragon({ id }),
}
