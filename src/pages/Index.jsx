import React, { useState } from "react";
import { Container, Box, Text, VStack, HStack, Button, Input, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { FaDice } from "react-icons/fa";

const rollDice = (sides) => Math.floor(Math.random() * sides) + 1;

const Index = () => {
  const [characterName, setCharacterName] = useState("");
  const [characterStats, setCharacterStats] = useState({ strength: 10, dexterity: 10, intelligence: 10 });
  const [diceResult, setDiceResult] = useState(null);

  const handleRollDice = (sides) => {
    const result = rollDice(sides);
    setDiceResult(result);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Offline Tabletop RPG</Text>

        <Box width="100%">
          <Text fontSize="xl">Character Sheet</Text>
          <VStack spacing={2} align="start">
            <HStack>
              <Text>Name:</Text>
              <Input value={characterName} onChange={(e) => setCharacterName(e.target.value)} placeholder="Enter character name" />
            </HStack>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Stat</Th>
                  <Th>Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Object.keys(characterStats).map((stat) => (
                  <Tr key={stat}>
                    <Td>{stat.charAt(0).toUpperCase() + stat.slice(1)}</Td>
                    <Td>{characterStats[stat]}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </VStack>
        </Box>

        <Box width="100%">
          <Text fontSize="xl">Dice Roller</Text>
          <HStack spacing={4}>
            <Button onClick={() => handleRollDice(6)} leftIcon={<FaDice />}>
              Roll D6
            </Button>
            <Button onClick={() => handleRollDice(20)} leftIcon={<FaDice />}>
              Roll D20
            </Button>
          </HStack>
          {diceResult !== null && <Text mt={2}>Result: {diceResult}</Text>}
        </Box>

        <Box width="100%">
          <Text fontSize="xl">Game Board</Text>
          <Box border="1px" borderColor="gray.200" p={4} borderRadius="md">
            <Text>Game board content goes here...</Text>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
