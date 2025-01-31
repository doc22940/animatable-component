import { ANIMATIONS, AnimationsType } from './common';
import ATTENTION_SEEKERS from './attention-seekers';
import BOUNCING_ENTRANCES from './bouncing-entrances';
import BOUNCING_EXITS from './bouncing-exits';
import FADING_ENTRANCES from './fading-entrances';
import FADING_EXITS from './fading-exits';
import FLIPPERS from './flippers';
import LIGHTSPEED from './lightspeed';
import ROTATING_ENTRANCES from './rotating-entrances';
import ROTATING_EXITS from './rotating-exits';
import SLIDING_ENTRANCES from './sliding-entrances';
import SLIDING_EXITS from './sliding-exits';
import ZOOM_ENTRANCES from './zoom-entrances';
import ZOOM_EXITS from './zoom-exits';
import SPECIALS from './specials';

const DEFAULT_ANIMATION = {
  [ANIMATIONS.NONE]: [] as Keyframe[]
};
export const ANIMATION_KEY_ERROR = 'Animation not supported';
export { ANIMATIONS, AnimationsType };
export default {
  ...DEFAULT_ANIMATION,
  ...ATTENTION_SEEKERS,
  ...BOUNCING_ENTRANCES,
  ...BOUNCING_EXITS,
  ...FADING_ENTRANCES,
  ...FADING_EXITS,
  ...FLIPPERS,
  ...LIGHTSPEED,
  ...ROTATING_ENTRANCES,
  ...ROTATING_EXITS,
  ...SLIDING_ENTRANCES,
  ...SLIDING_EXITS,
  ...ZOOM_ENTRANCES,
  ...ZOOM_EXITS,
  ...SPECIALS
} as const;