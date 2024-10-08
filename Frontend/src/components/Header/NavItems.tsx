import React from "react";
import { links } from "./links";
import { HStack, Button, ButtonGroup } from "@chakra-ui/react";
import Link from "next/link";

const NavItems: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <HStack
        display={{ base: "flex", md: "flex", sm: "none", xs: "none" }}
        className="hidden md:flex text-primaryBlue"
        flexDir="row"
      >
        <ButtonGroup isAttached alignSelf="center">
          {links.map(
            (
              item: { name: any; link: any },
              index: React.Key | null | undefined
            ) => (
              <Button
                key={index}
                as={Link}
                variant={"ghost"}
                size="sm"
                colorScheme=""
                href={item.link}
                passHref
                _focus={{ boxShadow: "outline" }}
                className=" text-gray-600 "
              >
                {item.name}
              </Button>
            )
          )}
        </ButtonGroup>
      </HStack>
    </React.Fragment>
  );
};

export default NavItems;