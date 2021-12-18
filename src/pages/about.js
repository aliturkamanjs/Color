/* eslint-disable react/jsx-no-target-blank */
import { Container } from "@chakra-ui/react";
import { Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import aboutImg from "../images/about.png";
import bgHome from "../images/background.png";
import Layout from "../layout/layout";

const About = () => {
  return (
    <Container
      maxW="container.3xl"
      backgroundImage={bgHome}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Layout>
        <Flex
          pb="20"
          pt="20"
          pl="28"
          pr="28"
          w="100%"
          justifyContent="space-around"
          alignItems="center"
        >
          <Flex flexDir="column" w="530px">
            <Heading size="lg" color="gray.700">
              hi, my name is ali. I’m a frontend developer and content
              creator.
            </Heading>
            <Text fontSize="16px" mt="3" textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipiscing elit massa
              consectetur in molestie augue sed sed augue nibh et quis nibh
              faucibus sem non cursus lectus nibh volutpat aliquam sed est nibh
              adipiscing hendrerit rhoncus, sed dolor tortor pellentesque quis
              molestie volutpat volutpat euismod sit non sit sed.Lorem ipsum
              dolor sit amet consectetur adipiscing elit massa consectetur in
              molestie augue sed sed augue nibh et quis nibh faucibus sem non
              cursus lectus nibh volutpat aliquam sed est nibh adipiscing
              hendrerit rhoncus, sed dolor tortor pellentesque quis molestie
              volutpat volutpat euismod sit non sit sed.
            </Text>
            <a href="https://www.instagram.com/ali_turkaman_n/" target="_blank">
              <Button
                mt="3"
                w="100px"
                h="37px"
                bg="#F774B9"
                color="#fff"
                rounded="10px"
                _focus={{}}
                _hover={{ bg: "#F250A5" }}
                _active={{ bg: "#D31E7E" }}
              >
                contact
              </Button>
            </a>
          </Flex>
          <Image w="490px" src={aboutImg} />
        </Flex>
      </Layout>
    </Container>
  );
};

export default About;
