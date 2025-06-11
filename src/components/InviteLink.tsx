
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InviteLink = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleInvite = () => {
    const inviteUrl = window.location.origin;
    navigator.clipboard.writeText(inviteUrl).then(() => {
      setCopied(true);
      toast({
        title: "Invite link copied!",
        description: "Share this link with your team members",
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Button
      onClick={handleInvite}
      variant="outline"
      size="sm"
      className="border-purple-500 text-purple-600 hover:bg-purple-50"
    >
      {copied ? <Check className="h-4 w-4 mr-2" /> : <Users className="h-4 w-4 mr-2" />}
      {copied ? "Copied!" : "Invite Team"}
    </Button>
  );
};

export default InviteLink;
