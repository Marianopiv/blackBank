import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import useTransferences from "../hooks/useTransferences";
import { TransferenceObject, publicServicesObj } from "../interfaces/interfaces";
import { IconType } from "react-icons";

type Props = {
  service: publicServicesObj;
  Icon:IconType
};

export default function AddPayment({ service }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { transferenceObj, addTransference, createTransference, createTransferenceToDb } = useTransferences();

  const {Icon} = service

  const handleAddTransference = (transfObj: TransferenceObject) => {
    createTransferenceToDb(transfObj);
    addTransference(transfObj);
  };
  return (
    <div className="">
      <Button className="border-none hover:border-none hover:opacity-0" onPress={onOpen}>
        New Payment
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
            
              <ModalHeader className="flex items-center gap-1"><div className="">Make a payment for {service.type}</div>
              <div className=""><Icon/></div></ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  type="number"
                  name="amount"
                  onChange={(e) => createTransference(e, true,service)}
                  label="Amount"
                  placeholder="$10000"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button onClick={() => handleAddTransference(transferenceObj)} color="primary" onPress={onClose}>
                  Pay Service
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
