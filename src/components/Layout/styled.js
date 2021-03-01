import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const SiteContent = styled.section`
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--width-container);
  margin: 0 auto;
  padding: 0 var(--space);
  ${media.lessThan('medium')`
    padding: calc(var(--space) * 3.3) var(--space);
  `}
  ${media.greaterThan('medium')`
    padding: calc(var(--space) * 10.3) var(--space-sm);
  `}
`;
