import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaMapMarkedAlt, FaSignInAlt, FaUserPlus, FaPlusSquare } from "react-icons/fa";

const Index = () => {
  const [showEvents, setShowEvents] = useState(false);

  const handleBrowse = () => {
    // Simulate browsing functionality
    setShowEvents(true);
  };

  const handleMembershipLogin = () => {
    // Simulate membership login
    // In a real application, you would handle authentication here
  };

  const handleParticipate = () => {
    // Handle event participation logic
  };

  const handleCreateEvent = () => {
    // Handle logic for creating a new event
  };

  return (
    <VStack spacing={8} p={5}>
      <Heading>Welcome to Eventinder</Heading>
      <Flex justify="center" width="100%">
        <Button leftIcon={<FaSignInAlt />} onClick={handleMembershipLogin} m={2}>
          Membership Login
        </Button>
        <Button leftIcon={<FaMapMarkedAlt />} onClick={handleBrowse} m={2}>
          Browse Events
        </Button>
      </Flex>

      {showEvents && (
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">Upcoming Events</Heading>
          <Text mt={4}>Here are the main events happening in the next 3 days:</Text>
          {/* Map component would be here, showing events */}
          <Button leftIcon={<FaPlusSquare />} mt={4} onClick={handleParticipate}>
            Participate in an Event
          </Button>
          <Button leftIcon={<FaUserPlus />} mt={4} onClick={handleCreateEvent}>
            Create a New Organization
          </Button>
          {/* Form for creating an event would be here */}
        </Box>
      )}

      {/* This would be a modal or separate form where users can specify details for new events */}
      {/*
      <Box as="form">
        <Stack spacing={3}>
          <Input placeholder="Event Name" size="md" />
          <Input placeholder="Location" size="md" />
          <Input placeholder="Date & Time" size="md" type="datetime-local" />
          <Input placeholder="Description" size="md" />
          <Button>Submit New Event</Button>
        </Stack>
      </Box>
      */}
    </VStack>
  );
};

export default Index;
