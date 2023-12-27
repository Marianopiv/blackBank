import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import useTransferences from "../hooks/useTransferences";
import { TransferenceObject } from "../interfaces/interfaces";


export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const { transferenceObj, addTransference, createTransference, createTransferenceToDb } = useTransferences();

  const handleAddTransference = (transfObj: TransferenceObject) => {
    createTransferenceToDb(transfObj);
    addTransference(transfObj);
  };

  return (
    <div className="absolute ">
      <Button className="border-none hover:border-none hover:opacity-0" onPress={onOpen} color="white"></Button>
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
              <ModalHeader className="flex flex-col gap-1">Deposit Into account</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  type="number"
                  name="amount"
                  onChange={(e)=>createTransference(e,true)}
                  label="Amount"
                  placeholder="$10000"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button onClick={()=>handleAddTransference(transferenceObj)} color="primary" onPress={onClose}>
                 Deposit Money
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
