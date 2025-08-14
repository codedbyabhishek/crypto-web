"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import type { PortfolioHolding } from "@/lib/portfolio"

interface AddHoldingDialogProps {
  onAddHolding: (holding: Omit<PortfolioHolding, "id" | "currentPrice">) => void
}

export function AddHoldingDialog({ onAddHolding }: AddHoldingDialogProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    symbol: "",
    name: "",
    amount: "",
    averagePrice: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.symbol || !formData.name || !formData.amount || !formData.averagePrice) {
      return
    }

    onAddHolding({
      symbol: formData.symbol.toUpperCase(),
      name: formData.name,
      amount: Number.parseFloat(formData.amount),
      averagePrice: Number.parseFloat(formData.averagePrice),
    })

    setFormData({ symbol: "", name: "", amount: "", averagePrice: "" })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="glass neon-glow">
          <Plus className="mr-2 h-4 w-4" />
          Add Holding
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-strong border-white/20">
        <DialogHeader>
          <DialogTitle className="gradient-text">Add New Holding</DialogTitle>
          <DialogDescription>Add a cryptocurrency to your portfolio tracker.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="symbol" className="text-right">
                Symbol
              </Label>
              <Input
                id="symbol"
                placeholder="BTC"
                className="col-span-3 glass border-white/20"
                value={formData.symbol}
                onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Bitcoin"
                className="col-span-3 glass border-white/20"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input
                id="amount"
                type="number"
                step="any"
                placeholder="0.5"
                className="col-span-3 glass border-white/20"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="averagePrice" className="text-right">
                Avg Price
              </Label>
              <Input
                id="averagePrice"
                type="number"
                step="any"
                placeholder="45000"
                className="col-span-3 glass border-white/20"
                value={formData.averagePrice}
                onChange={(e) => setFormData({ ...formData, averagePrice: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="neon-glow">
              Add Holding
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
