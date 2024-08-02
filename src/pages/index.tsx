import { Body, Heading, Title, Typography } from "@/components/Typography";
import MaxWidthContainer from "@/components/UI/MaxWidthContainer";

export default function Home() {
  return (
    <MaxWidthContainer>
      <Typography as="h1">
        This is a typography
      </Typography>
      <Heading>Heading</Heading>
      <Title>Title</Title>
      <Body>Body</Body>
    </MaxWidthContainer>
  );
}
