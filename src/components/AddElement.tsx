import { FaPlusSquare } from "react-icons/fa";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import useHome from "../hooks/useHome";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosPerson } from "react-icons/io";
import { Select, SelectItem } from "@nextui-org/react";
import { typeOfCards } from "../config/config";
import { BsCashCoin } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import useTransferences from "../hooks/useTransferences";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { TransferenceObject, userData } from "../interfaces/interfaces";
import AddContact from "./AddContact";

type Props = {
  forTransference?: boolean;
};
export default function AddElement({ forTransference }: Props) {
  const { newCard, handleAddCard, handleNewCard } = useHome();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { transferenceObj, addTransference, createTransference, createTransferenceToDb,resetTransferenceObj } = useTransferences();
  const { totalUsers } = useContext(GlobalContext);
  const handleAddTransference = (transfObj: TransferenceObject) => {
    createTransferenceToDb(transfObj);
    addTransference(transfObj);
    resetTransferenceObj()
  };
  return (
    <>
      {forTransference ? (
        <Button
          onClick={onOpen}
          startContent={<FiPlus className="text-white" />}
          className="bg-[#2CAB6E] text-white shadow-lg text-md h-12 rounded-sm"
        >
          New Request
        </Button>
      ) : (
        <FaPlusSquare onClick={onOpen} className="text-4xl hover:cursor-pointer" />
      )}

      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{forTransference ? "Create Transference" : "Add Card"}</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <Input
                    onChange={forTransference ? createTransference : handleNewCard}
                    isDisabled
                    name="name"
                    type="name"
                    label={forTransference ? "payer" : "name"}
                    defaultValue="Mariano Pividori"
                    className="max-w-xs"
                    startContent={<IoIosPerson className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  />
                  <Input
                    onChange={forTransference ? createTransference : handleNewCard}
                    type={forTransference ? "number" : "number"}
                    label={forTransference ? "amount" : "number"}
                    name={forTransference ? "amount" : "number"}
                    placeholder={forTransference ? "$10000" : "4541-8533-6666"}
                    startContent={
                      forTransference ? (
                        <BsCashCoin className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      ) : (
                        <CiCreditCard1 className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      )
                    }
                  />
                  {forTransference ? (
                    <>
                    <Select name="receiver" onChange={createTransference} label={forTransference ? "Receiver" : "Select type of card"}>
                      {totalUsers.map((user: userData) => (
                        <SelectItem className="capitalize" key={user.name} value={user.name}>
                          {user.name}
                        </SelectItem>
                      ))}
                    </Select>
                    <AddContact/>
                    </>

                  ) : (
                    <Select name="type" onChange={handleNewCard} label={forTransference ? "Receiver" : "Select type of card"}>
                      {typeOfCards.map((card: string) => (
                        <SelectItem className="capitalize" key={card} value={card}>
                          {card}
                        </SelectItem>
                      ))}
                    </Select>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  disabled={forTransference&&transferenceObj.amount===0}
                  color="primary"
                  onClick={forTransference ? () => handleAddTransference(transferenceObj) : () => handleAddCard(newCard)}
                  onPress={forTransference&&transferenceObj.amount===0?()=>alert("Ingresá un importe correcto"):onClose}
                >
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
