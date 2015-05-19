# Financial Assessment for Wellness Project

Recods Records:
   * basic client demo
   * client address
   * mailin address
   * responsible party
   * eligibility record
   * income record

## Implementation Notes

the Mailing Address record is recorded when the client address is save for the first time. The view uses the BUIControl RMI to send the new address data back to the wr-financial script to write both the client address and the mailing address so that when the eligibility record is created it can pull in the mailing address accurately. 

The address is needed on the eligibility record or data ends up missing on claims with billing is processed

## Dependencies
   * inc_uhp
   * inc_GetParm
   * inc_GetOption
   * inc_sysLibDef
   * lib_CLIENT
   * lib_DST
   * lib_FINELIG
