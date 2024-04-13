import {makeTravelSdk} from '@/lib/sdk'

import {travelDB} from '../db/Travel'

export const travelSdk = makeTravelSdk(travelDB)
