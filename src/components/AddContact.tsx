import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import useAddContact from "../hooks/useAddContact";

export default function AddContact() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { contact, handleContact, searchUser } = useAddContact();

  console.log(contact);

  return (
    <div className="">
      <Button className="border-none hover:border-none hover:opacity-0" onPress={onOpen}>
        Add Contact to agenda
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add New Contact</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  type="text"
                  name="amount"
                  onChange={(e) => handleContact(e)}
                  label="Search by email"
                  placeholder="chocolatero@gmail.com"
                  variant="bordered"
                />
                <Button className="border-none hover:border-none hover:opacity-0 w-8"  onClick={() => searchUser(contact)} >
                  {" "}
                  <FaMagnifyingGlass/>
                </Button>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Add to agenda
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
