import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import useAddContact from "../hooks/useAddContact";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { DocumentData } from "firebase/firestore";
import { Toast } from "../shared/CustomAlert";
import { optionsData, tempUserData } from "../config/config";
import TextField from "../shared/TextField";

export default function AddContact() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { contact, searchedBy, tempUser, handleContact, handleSearch, searchUser } = useAddContact();
  const { handleAddToAgenda } = useContext(GlobalContext);

  const handleAddedContact = (tempUser: DocumentData | null) => {
    handleAddToAgenda(tempUser);
    Toast.fire({
      icon: "success",
      title: "Contacto agendado exitosamente",
    });
  };
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
                <Select onChange={handleSearch} label="Select an criteria for search" className="max-w-xs">
                  {optionsData.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  autoFocus
                  type="text"
                  name="amount"
                  onChange={(e) => handleContact(e)}
                  label={`Search by ${searchedBy.split(",")[0]}`}
                  placeholder={searchedBy.split(",")[1]}
                  variant="bordered"
                />
                <Button
                  className="border-none hover:border-none hover:opacity-0 w-8"
                  onClick={() => searchUser(contact, searchedBy.split(",")[0])}
                >
                  {" "}
                  <FaMagnifyingGlass />
                </Button>
                {tempUser && (
                  <div className="p-4 border border-[#c1c1c1] shadow-2xl rounded-lg mx-auto my-6">
                    <h2 className="text-lg underline mb-8">Is this the account you want to add?</h2>
                    {tempUserData(tempUser).map((data, index) => (
                      <TextField key={index} className="font-bold" {...data} />
                    ))}
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button onClick={() => handleAddedContact(tempUser)} color="primary" onPress={onClose}>
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
