import { styled } from "styled-components";

export const GlobalMain = styled.div<{ $background?: string }>`
  background: ${({ $background }) => $background || "none"};
  padding: 0px 24px;
`;

