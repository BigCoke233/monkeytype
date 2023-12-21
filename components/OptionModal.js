/**
 * 设置项弹窗
 */

import { GetOptions, UpdateOptions } from "@/lib/Options";

//ui
import {
    Button,
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    useDisclosure,
    Input
} from "@nextui-org/react";
import { IoSettings } from "react-icons/io5";

export function OptionModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const options = GetOptions()
    
    return (
        <>
            <Button onPress={onOpen} isIconOnly variant="light" size="lg"><IoSettings /></Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">设置项</ModalHeader>
                    <ModalBody>
                        <div id="options">
                            <Input 
                                id="option-buttonText" 
                                label="自定义按钮文字" 
                                defaultValue={options.buttonText} 
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="light" onPress={() => {
                            onClose()
                            UpdateOptions()
                        }}>
                            确认
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}