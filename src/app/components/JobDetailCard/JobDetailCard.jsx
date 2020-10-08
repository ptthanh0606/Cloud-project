import { Box, Card, CardBody, CardHeader, Heading, Text } from "grommet";
import React from "react";
import SimpleCard from "../SimpleCard/SimpleCard";

const JobDetailCard = ({ jobdetail, interviewdetail, salary, address, contactnumber}) => {
  return (
    <Card
      pad={{ horizontal: "medium", vertical: "medium" }}
      background="white"
      elevation="none"
      width="full"
      className="job-card-container"
    >
      <CardHeader>
        <SimpleCard title="Organization name" desc="2020-06-06" />
      </CardHeader>
      <CardBody>
        <Box>
          <Heading level="4" margin={{ top: "49px" }}>
            Job detail
          </Heading>
          <Text size="14">
            Mauris rhoncus aenean vel elit scelerisque. Id ornare arcu odio ut
            sem nulla pharetra diam. Malesuada proin libero nunc consequat
            interdum varius sit. Tortor posuere ac ut consequat. Pellentesque
            habitant morbi tristique senectus et netus et. Consectetur purus ut
            faucibus pulvinar elementum integer enim neque volutpat. Vitae
            congue eu consequat ac felis. Ullamcorper morbi tincidunt ornare
            massa eget egestas purus viverra. Interdum velit laoreet id donec
            ultrices tincidunt arcu non sodales. Eu tincidunt tortor aliquam
            nulla facilisi. Enim nunc faucibus a pellentesque sit amet
            porttitor. Accumsan sit amet nulla facilisi morbi tempus iaculis
            urna id. Ipsum faucibus vitae aliquet nec. Et tortor at risus
            viverra adipiscing at in tellus integer. Faucibus scelerisque
            eleifend donec pretium vulputate. Tristique magna sit amet purus.
            Elit scelerisque mauris pellentesque pulvinar pellentesque habitant.
            Nec ultrices dui sapien eget mi.
          </Text>
        </Box>
        <Box>
          <Heading level="4" margin={{ top: "49px" }}>
            Interview requisition description
          </Heading>
          <Text size="14">
            Mauris rhoncus aenean vel elit scelerisque. Id ornare arcu odio ut
            sem nulla pharetra diam. Malesuada proin libero nunc consequat
            interdum varius sit. Tortor posuere ac ut consequat. Pellentesque
            habitant morbi tristique senectus et netus et. Consectetur purus ut
            faucibus pulvinar elementum integer enim neque volutpat. Vitae
            congue eu consequat ac felis. Ullamcorper morbi tincidunt ornare
            massa eget egestas purus viverra. Interdum velit laoreet id donec
            ultrices tincidunt arcu non sodales. Eu tincidunt tortor aliquam
            nulla facilisi. Enim nunc faucibus a pellentesque sit amet
            porttitor. Accumsan sit amet nulla facilisi morbi tempus iaculis
            urna id. Ipsum faucibus vitae aliquet nec. Et tortor at risus
            viverra adipiscing at in tellus integer. Faucibus scelerisque
            eleifend donec pretium vulputate. Tristique magna sit amet purus.
            Elit scelerisque mauris pellentesque pulvinar pellentesque habitant.
            Nec ultrices dui sapien eget mi.
          </Text>
        </Box>
        <Box
          direction="row"
          margin={{ top: "49px" }}
          align="center"
          gap="medium"
        >
          <Heading level="4" margin="none">
            Salary:
          </Heading>
          <Text size="14" weight="bold" color="brand">
            ~ $1000
          </Text>
        </Box>
        <Box
          direction="row"
          margin={{ top: "29px", bottom: "none" }}
          align="center"
          gap="medium"
        >
          <Heading level="4" margin="none">
            Address:
          </Heading>
          <Text size="14">124 DTL St. W4 D8</Text>
        </Box>
        <Box
          direction="row"
          margin={{ top: "29px", bottom: "none" }}
          align="center"
          gap="medium"
        >
          <Heading level="4" margin="none">
            Contact number:
          </Heading>
          <Text size="14">+84 76 5413 668</Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default JobDetailCard;
