import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

const TextLink = (props) => (
  <Text
    fontSize={12}
    fontWeight={300}
    mx={2}
    onClick={(e) => props.onEdit?.(e)}
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}>
    {props.icon && <FontAwesomeIcon icon={props.icon} style={{ height: 12 }} />}
    <Link href={props.href} marginLeft={props.icon ? 2 : 0}>
      {props.children}
    </Link>
  </Text>
);

// if type is array, first one is default
const data = {
  email: ["zhechengliao@gmail.com", "zhecheng@ucsb.edu"],
  phone: ["(805)-869-9003", ""],
  github: ["/Zhecheng Liao", "https://github.com/ZhechengLiao"],
  linkedin: ["/in/zhechengliao", "https://www.linkedin.com/in/zhecheng-tim-liao-561710253/"],
  url: ["zhechengliao.github.io"],
};

const autoPrintIndices = {
  phone: 1,
};

export const ResumeTop = ({ isEditing }) => {
  const router = useRouter();

  const [dataIndices, setDataIndices] = useState({
    email: 0,
    phone: 0,
    github: 0,
    linkedin: 0,
    url: 0,
  });

  const cycleData = (prop) => {
    return (e) => {
      // prevent default if editing
      if (isEditing) {
        if (e) e.preventDefault();
        // cycle data indices of prop
        if (data[prop]) {
          setDataIndices((prev) => {
            const next = { ...prev };
            next[prop] = (next[prop] + 1) % data[prop].length;
            return next;
          });
        }
      }
    };
  };

  const getValue = (prop) => {
    if (router.query.hasOwnProperty("print") && autoPrintIndices.hasOwnProperty(prop)) {
      return data[prop][autoPrintIndices[prop]];
    }
    return data[prop][dataIndices[prop]];
  };

  return (
    <Box pt={6} px={2} textAlign={"center"}>
      <Heading size={"xl"} mb={1}>
         Tim Liao
      </Heading>
      <Flex justifyContent={"center"}>
        <TextLink href={`mailto:${getValue("email")}`} onEdit={cycleData("email")} icon={faPaperPlane}>
          {getValue("email")}
        </TextLink>
        <TextLink href={`tel:${getValue("phone")}`} onEdit={cycleData("phone")} icon={faPhone}>
          {getValue("phone")}
        </TextLink>
      </Flex>
      <Flex justifyContent={"center"} mt={0.5}>
        <TextLink href={"https://zhechengliao.github.io"} onEdit={cycleData("url")} icon={faGlobe}>
          {getValue("url")}
        </TextLink>
        <TextLink href={"https://zhechengliao.github.io/"} onEdit={cycleData("github")} icon={faGithub}>
          {getValue("github")}
        </TextLink>
        <TextLink href={"https://www.linkedin.com/in/zhecheng-tim-liao-561710253/"} onEdit={cycleData("linkedin")} icon={faLinkedin}>
          {getValue("linkedin")}
        </TextLink>
      </Flex>
    </Box>
  );
};
