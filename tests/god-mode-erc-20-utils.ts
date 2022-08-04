import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  Burn,
  Mint,
  Transfer
} from "../generated/GodModeErc20/GodModeErc20"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return approvalEvent
}

export function createBurnEvent(holder: Address, burnAmount: BigInt): Burn {
  let burnEvent = changetype<Burn>(newMockEvent())

  burnEvent.parameters = new Array()

  burnEvent.parameters.push(
    new ethereum.EventParam("holder", ethereum.Value.fromAddress(holder))
  )
  burnEvent.parameters.push(
    new ethereum.EventParam(
      "burnAmount",
      ethereum.Value.fromUnsignedBigInt(burnAmount)
    )
  )

  return burnEvent
}

export function createMintEvent(
  beneficiary: Address,
  mintAmount: BigInt
): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )

  return mintEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return transferEvent
}
