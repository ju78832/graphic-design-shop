import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface VerificationEmailProps {
  name: string;
  email: string;
  number: string;
  address: string;
}

export default function VerificationEmail({
  name,
  email,
  number,
  address,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Visitor&apos;s Details</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Visitor&apos;s Details: {name}</Preview>
      <Section>
        <Row>
          <Heading as="h2">Details: </Heading>
        </Row>
        <Row>
          <Text>{name}</Text>
        </Row>
        <Row>
          <Text>{email}</Text>
        </Row>
        <Row>
          <Text>{number}</Text>
        </Row>
        <Row>
          <Text>{address}</Text>
        </Row>
        {/* <Row>
            <Button
              href={`http://localhost:3000/verify/${username}`}
              style={{ color: '#61dafb' }}
            >
              Verify here
            </Button>
          </Row> */}
      </Section>
    </Html>
  );
}
