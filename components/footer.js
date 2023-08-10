import {
  Box,
  Button,
  chakra,
  Flex,
  Hide,
  Input,
  Link,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineSend } from "react-icons/ai";
import MyHeading from "./MyHeading";
import { useState } from "react";
import { HiMail } from "react-icons/hi";
import trackEvent from "../lib/trackEvent";

export function Footer(params) {
  const toast = useToast();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <Hide breakpoint={"print"}>
            <Flex bg={"rgba(0,0,0,0.2)"} width={"100%"} p={5} m={0} flexDir={"column"}>
        <Flex justifyContent={"center"} flexWrap={"wrap"} pb={5}>
          <Link m={2} href={"https://github.com/ZhechengLiao"} target={"_blank"}>
            <Flex m={2} alignItems={"center"}>
              <AiOutlineGithub size={"2em"} />
              <chakra.p ml={2} fontFamily={"Fira Code"}>
                /ZhechengLiao
              </chakra.p>
            </Flex>
          </Link>
          <Link m={2} href={"https://www.linkedin.com/in/zhecheng-tim-liao-561710253/"} target={"_blank"}>
            <Flex m={2} alignItems={"center"}>
              <AiFillLinkedin size={"2em"} />
              <chakra.p ml={2} fontFamily={"Fira Code"}>
                /in/Zhecheng(Tim) Liao
              </chakra.p>
            </Flex>
          </Link>
          <Link m={2} href={"mailto:zhechengliao@gmail.com"} target={"_blank"}>
            <Flex m={2} alignItems={"center"}>
              <HiMail size={"2em"} />
              <chakra.p ml={2} fontFamily={"Fira Code"}>
                zhechengliao@gmail.com 
              </chakra.p>
            </Flex>
          </Link>
        </Flex>
        <Text textAlign={"center"} color={"gray.900"} fontSize={"sm"}>
          Portfolio made by Zhecheng Liao | <Link href={"https://github.com/samyok/portfolio"}>Github</Link>
        </Text>
      </Flex>
    </Hide>
  );
}
