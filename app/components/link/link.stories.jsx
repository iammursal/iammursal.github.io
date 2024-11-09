import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://iammursal.github.io">Primary link</Link>
    <Link secondary href="https://iammursal.github.io">
      Secondary link
    </Link>
  </StoryContainer>
);
