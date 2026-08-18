import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const homeTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa / Duplex", "Kitchen only"];
const budgets = ["Under ₹5 lakh", "₹5–10 lakh", "₹10–20 lakh", "₹20 lakh+", "Not sure yet"];

export function EstimateForm({ onDone, compact = false }: { onDone?: () => void; compact?: boolean }) {
  const [homeType, setHomeType] = useState("");
  const [budget, setBudget] = useState("");
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      setHomeType("");
      setBudget("");
      toast.success("Estimate request received", {
        description: "A design consultant will call you within one working day.",
      });
      onDone?.();
    }, 700);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field id="name" label="Full name">
          <Input id="name" name="name" required placeholder="Your name" autoComplete="name" />
        </Field>
        <Field id="phone" label="Phone">
          <Input
            id="phone"
            name="phone"
            required
            type="tel"
            pattern="[0-9+\s-]{8,15}"
            placeholder="+91 98xxx xxxxx"
            autoComplete="tel"
          />
        </Field>
        <Field id="email" label="Email">
          <Input id="email" name="email" required type="email" placeholder="you@email.com" autoComplete="email" />
        </Field>
        <Field id="city" label="City">
          <Input id="city" name="city" required placeholder="Mumbai" autoComplete="address-level2" />
        </Field>
        <Field id="homeType" label="Home type">
          <Select value={homeType} onValueChange={setHomeType} name="homeType" required>
            <SelectTrigger id="homeType" className="w-full">
              <SelectValue placeholder="Select home type" />
            </SelectTrigger>
            <SelectContent>
              {homeTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field id="budget" label="Budget">
          <Select value={budget} onValueChange={setBudget} name="budget" required>
            <SelectTrigger id="budget" className="w-full">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgets.map((b) => (
                <SelectItem key={b} value={b}>
                  {b}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
      <Field id="message" label="Message (optional)">
        <Textarea id="message" name="message" rows={3} placeholder="Tell us about your home and timeline" />
      </Field>
      <Button type="submit" size="lg" className="w-full" disabled={sending}>
        {sending ? "Sending…" : "Submit request"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        No account needed. We only use your details to prepare your estimate.
      </p>
    </form>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs tracking-wide text-muted-foreground uppercase">
        {label}
      </Label>
      {children}
    </div>
  );
}
