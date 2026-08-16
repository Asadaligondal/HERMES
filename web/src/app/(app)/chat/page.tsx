import { ThemeToggle } from "@/components/ThemeToggle";
import { PageHeader } from "@/components/PageHeader";
import { ChevronDownIcon } from "@/components/icons";
import { AnimatedChatInput } from "@/components/AnimatedChatInput";

export default function ChatPage() {
  return (
    <div className="main">
      <PageHeader title="Chat">
        <ThemeToggle />
      </PageHeader>

      <div className="chat-layout">
        <div className="chat-main">
          <div className="chat-empty">
            <div className="chat-empty-mark">H</div>
            <h2 className="chat-greeting">What can I help with?</h2>

            <AnimatedChatInput />

            <div className="chips">
              <div className="chip">Summarize my last 5 emails</div>
              <div className="chip">Draft a Linear ticket</div>
              <div className="chip">Schedule a recurring report</div>
            </div>
          </div>
        </div>

        <aside className="chat-side">
          <div>
            <div className="chat-side-label">Model</div>
            <button className="model-select-btn" type="button">
              solar-pro4:free
              <ChevronDownIcon />
            </button>
          </div>

          <div>
            <div className="chat-side-label">Sessions</div>
            <button className="btn btn-primary btn-block" type="button">
              + New chat
            </button>
            <div className="chat-side-empty">No chats yet</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
