import { Dragon } from '@/common/types'
import {
  getDragon,
  createDragon,
  updateDragon,
  removeDragon,
} from '../interface/fb_dragon'

export default {
  getAll: () => getDragon(),
  get: (id: string) => getDragon({ id }),
  create: (dragon: Dragon) => createDragon({ data: dragon }),
  update: (dragon: Dragon) => updateDragon({ data: dragon }),
  remove: (id: string) => removeDragon({ id }),
}
