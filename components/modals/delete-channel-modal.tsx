"use client";
import { useModal } from "@/hooks/use-modal-store";
import queryString from "query-string";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";

import { useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const DeleteChannelModal = () => {
  const [isLoading, setisLoading] = useState(false);
  const params = useParams()
  const router = useRouter();
  const { isOpen, onClose, type, data } = useModal();
  const { server, channel } = data;

  const isModalOpen = isOpen && type == "deleteChannel";

  const onClick = async () => { 
    try {
      const url = queryString.stringifyUrl({
        url:`/api/channels/${channel?.id}`,
        query:{
          serverId: params?.serverid,
        }
      })
      setisLoading(true);

      await axios.delete(url);

      onClose();
      router.refresh();
      router.push(`/servers/${params?.serverid}`);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Delete Channel
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Are you sure you want to do this? <br />{" "}
            <span className="font-semibold text-indigo-500">
              #{channel?.name} will be permanently deleted
            </span>
            .
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="bg-gray-100 px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <Button disabled={isLoading} onClick={onClose} variant="ghost">
              Cancel
            </Button>

            <Button disabled={isLoading} onClick={onClick} variant="primary">
              Confirm
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteChannelModal;
