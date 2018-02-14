import React from 'react'
import styled from 'styled-components'

const ReadingText = styled.div`
  font-size: ${props => props.theme.text.md};
  line-height: ${props => props.theme.line.sm};

  > * {
    margin-bottom: ${props => props.theme.spacing.md};
  }
`;

export { ReadingText }
