import React from "react";
import { motion, AnimatePresence } from "framer-motion";


interface modalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}


const Modal: React.FC<modalProps> = ({isOpen, onClose, onConfirm}) => {
      
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-overlay">
                    <motion.div
                        className="modal-backdrop"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onClick={onClose}
                    />

                    <motion.div
                    className="modal-card"
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.9, opacity: 0}}
                    >
                       <h3>Are you sure?</h3>
                       <p>This will permanently remove all completed tasks.</p>
                       <div className="modal-buttons">
                       <button className="btn-secondary" onClick={onClose}>Cancel</button>
                       <button className="btn-danger" onClick={onConfirm}>Yes, Clear All</button>
                       </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}


export default Modal
