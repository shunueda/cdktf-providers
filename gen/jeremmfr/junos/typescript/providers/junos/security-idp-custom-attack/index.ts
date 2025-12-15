// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityIdpCustomAttackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom attack name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#name SecurityIdpCustomAttack#name}
  */
  readonly name: string;
  /**
  * Recommended action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#recommended_action SecurityIdpCustomAttack#recommended_action}
  */
  readonly recommendedAction?: string;
  /**
  * Select the severity that matches the lethality of this attack on your network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#severity SecurityIdpCustomAttack#severity}
  */
  readonly severity: string;
  /**
  * Number of times this attack is to be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#time_binding_count SecurityIdpCustomAttack#time_binding_count}
  */
  readonly timeBindingCount?: number;
  /**
  * Scope within which the count occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#time_binding_scope SecurityIdpCustomAttack#time_binding_scope}
  */
  readonly timeBindingScope?: string;
  /**
  * attack_type_anomaly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#attack_type_anomaly SecurityIdpCustomAttack#attack_type_anomaly}
  */
  readonly attackTypeAnomaly?: SecurityIdpCustomAttackAttackTypeAnomaly;
  /**
  * attack_type_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#attack_type_chain SecurityIdpCustomAttack#attack_type_chain}
  */
  readonly attackTypeChain?: SecurityIdpCustomAttackAttackTypeChain;
  /**
  * attack_type_signature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#attack_type_signature SecurityIdpCustomAttack#attack_type_signature}
  */
  readonly attackTypeSignature?: SecurityIdpCustomAttackAttackTypeSignature;
}
export interface SecurityIdpCustomAttackAttackTypeAnomaly {
  /**
  * Connection direction of the attack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#direction SecurityIdpCustomAttack#direction}
  */
  readonly direction?: string;
  /**
  * Service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#service SecurityIdpCustomAttack#service}
  */
  readonly service?: string;
  /**
  * Specify shellcode flag for this attack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#shellcode SecurityIdpCustomAttack#shellcode}
  */
  readonly shellcode?: string;
  /**
  * Protocol anomaly condition to be checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#test SecurityIdpCustomAttack#test}
  */
  readonly test?: string;
}

export function securityIdpCustomAttackAttackTypeAnomalyToTerraform(struct?: SecurityIdpCustomAttackAttackTypeAnomaly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    service: cdktf.stringToTerraform(struct!.service),
    shellcode: cdktf.stringToTerraform(struct!.shellcode),
    test: cdktf.stringToTerraform(struct!.test),
  }
}


export function securityIdpCustomAttackAttackTypeAnomalyToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeAnomaly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shellcode: {
      value: cdktf.stringToHclTerraform(struct!.shellcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test: {
      value: cdktf.stringToHclTerraform(struct!.test),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeAnomalyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeAnomaly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._shellcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.shellcode = this._shellcode;
    }
    if (this._test !== undefined) {
      hasAnyValues = true;
      internalValueResult.test = this._test;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeAnomaly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._service = undefined;
      this._shellcode = undefined;
      this._test = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._service = value.service;
      this._shellcode = value.shellcode;
      this._test = value.test;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // shellcode - computed: false, optional: true, required: false
  private _shellcode?: string; 
  public get shellcode() {
    return this.getStringAttribute('shellcode');
  }
  public set shellcode(value: string) {
    this._shellcode = value;
  }
  public resetShellcode() {
    this._shellcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellcodeInput() {
    return this._shellcode;
  }

  // test - computed: false, optional: true, required: false
  private _test?: string; 
  public get test() {
    return this.getStringAttribute('test');
  }
  public set test(value: string) {
    this._test = value;
  }
  public resetTest() {
    this._test = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test;
  }
}
export interface SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeAnomaly {
  /**
  * Connection direction of the attack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#direction SecurityIdpCustomAttack#direction}
  */
  readonly direction?: string;
  /**
  * Specify shellcode flag for this attack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#shellcode SecurityIdpCustomAttack#shellcode}
  */
  readonly shellcode?: string;
  /**
  * Protocol anomaly condition to be checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#test SecurityIdpCustomAttack#test}
  */
  readonly test?: string;
}

export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeAnomalyToTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeAnomaly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    shellcode: cdktf.stringToTerraform(struct!.shellcode),
    test: cdktf.stringToTerraform(struct!.test),
  }
}


export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeAnomalyToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeAnomaly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shellcode: {
      value: cdktf.stringToHclTerraform(struct!.shellcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test: {
      value: cdktf.stringToHclTerraform(struct!.test),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeAnomalyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeAnomaly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._shellcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.shellcode = this._shellcode;
    }
    if (this._test !== undefined) {
      hasAnyValues = true;
      internalValueResult.test = this._test;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeAnomaly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._shellcode = undefined;
      this._test = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._shellcode = value.shellcode;
      this._test = value.test;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // shellcode - computed: false, optional: true, required: false
  private _shellcode?: string; 
  public get shellcode() {
    return this.getStringAttribute('shellcode');
  }
  public set shellcode(value: string) {
    this._shellcode = value;
  }
  public resetShellcode() {
    this._shellcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellcodeInput() {
    return this._shellcode;
  }

  // test - computed: false, optional: true, required: false
  private _test?: string; 
  public get test() {
    return this.getStringAttribute('test');
  }
  public set test(value: string) {
    this._test = value;
  }
  public resetTest() {
    this._test = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test;
  }
}
export interface SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmp {
  /**
  * Condition for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_match SecurityIdpCustomAttack#checksum_validate_match}
  */
  readonly checksumValidateMatch?: string;
  /**
  * Value for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_value SecurityIdpCustomAttack#checksum_validate_value}
  */
  readonly checksumValidateValue?: number;
  /**
  * Condition for code field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#code_match SecurityIdpCustomAttack#code_match}
  */
  readonly codeMatch?: string;
  /**
  * Value for code field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#code_value SecurityIdpCustomAttack#code_value}
  */
  readonly codeValue?: number;
  /**
  * Condition for size of IP datagram subtracted by ICMP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_match SecurityIdpCustomAttack#data_length_match}
  */
  readonly dataLengthMatch?: string;
  /**
  * Value for size of IP datagram subtracted by ICMP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_value SecurityIdpCustomAttack#data_length_value}
  */
  readonly dataLengthValue?: number;
  /**
  * Condition for identifier in echo request/reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#identification_match SecurityIdpCustomAttack#identification_match}
  */
  readonly identificationMatch?: string;
  /**
  * Value for identifier in echo request/reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#identification_value SecurityIdpCustomAttack#identification_value}
  */
  readonly identificationValue?: number;
  /**
  * Condition for sequence number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#sequence_number_match SecurityIdpCustomAttack#sequence_number_match}
  */
  readonly sequenceNumberMatch?: string;
  /**
  * Value for sequence number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#sequence_number_value SecurityIdpCustomAttack#sequence_number_value}
  */
  readonly sequenceNumberValue?: number;
  /**
  * Condition for type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#type_match SecurityIdpCustomAttack#type_match}
  */
  readonly typeMatch?: string;
  /**
  * Value for type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#type_value SecurityIdpCustomAttack#type_value}
  */
  readonly typeValue?: number;
}

export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpToTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum_validate_match: cdktf.stringToTerraform(struct!.checksumValidateMatch),
    checksum_validate_value: cdktf.numberToTerraform(struct!.checksumValidateValue),
    code_match: cdktf.stringToTerraform(struct!.codeMatch),
    code_value: cdktf.numberToTerraform(struct!.codeValue),
    data_length_match: cdktf.stringToTerraform(struct!.dataLengthMatch),
    data_length_value: cdktf.numberToTerraform(struct!.dataLengthValue),
    identification_match: cdktf.stringToTerraform(struct!.identificationMatch),
    identification_value: cdktf.numberToTerraform(struct!.identificationValue),
    sequence_number_match: cdktf.stringToTerraform(struct!.sequenceNumberMatch),
    sequence_number_value: cdktf.numberToTerraform(struct!.sequenceNumberValue),
    type_match: cdktf.stringToTerraform(struct!.typeMatch),
    type_value: cdktf.numberToTerraform(struct!.typeValue),
  }
}


export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum_validate_match: {
      value: cdktf.stringToHclTerraform(struct!.checksumValidateMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum_validate_value: {
      value: cdktf.numberToHclTerraform(struct!.checksumValidateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_match: {
      value: cdktf.stringToHclTerraform(struct!.codeMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code_value: {
      value: cdktf.numberToHclTerraform(struct!.codeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_length_match: {
      value: cdktf.stringToHclTerraform(struct!.dataLengthMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_length_value: {
      value: cdktf.numberToHclTerraform(struct!.dataLengthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    identification_match: {
      value: cdktf.stringToHclTerraform(struct!.identificationMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identification_value: {
      value: cdktf.numberToHclTerraform(struct!.identificationValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_number_match: {
      value: cdktf.stringToHclTerraform(struct!.sequenceNumberMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_number_value: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumberValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_match: {
      value: cdktf.stringToHclTerraform(struct!.typeMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_value: {
      value: cdktf.numberToHclTerraform(struct!.typeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksumValidateMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateMatch = this._checksumValidateMatch;
    }
    if (this._checksumValidateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateValue = this._checksumValidateValue;
    }
    if (this._codeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeMatch = this._codeMatch;
    }
    if (this._codeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeValue = this._codeValue;
    }
    if (this._dataLengthMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthMatch = this._dataLengthMatch;
    }
    if (this._dataLengthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthValue = this._dataLengthValue;
    }
    if (this._identificationMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.identificationMatch = this._identificationMatch;
    }
    if (this._identificationValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identificationValue = this._identificationValue;
    }
    if (this._sequenceNumberMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumberMatch = this._sequenceNumberMatch;
    }
    if (this._sequenceNumberValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumberValue = this._sequenceNumberValue;
    }
    if (this._typeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeMatch = this._typeMatch;
    }
    if (this._typeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeValue = this._typeValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = undefined;
      this._checksumValidateValue = undefined;
      this._codeMatch = undefined;
      this._codeValue = undefined;
      this._dataLengthMatch = undefined;
      this._dataLengthValue = undefined;
      this._identificationMatch = undefined;
      this._identificationValue = undefined;
      this._sequenceNumberMatch = undefined;
      this._sequenceNumberValue = undefined;
      this._typeMatch = undefined;
      this._typeValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = value.checksumValidateMatch;
      this._checksumValidateValue = value.checksumValidateValue;
      this._codeMatch = value.codeMatch;
      this._codeValue = value.codeValue;
      this._dataLengthMatch = value.dataLengthMatch;
      this._dataLengthValue = value.dataLengthValue;
      this._identificationMatch = value.identificationMatch;
      this._identificationValue = value.identificationValue;
      this._sequenceNumberMatch = value.sequenceNumberMatch;
      this._sequenceNumberValue = value.sequenceNumberValue;
      this._typeMatch = value.typeMatch;
      this._typeValue = value.typeValue;
    }
  }

  // checksum_validate_match - computed: false, optional: true, required: false
  private _checksumValidateMatch?: string; 
  public get checksumValidateMatch() {
    return this.getStringAttribute('checksum_validate_match');
  }
  public set checksumValidateMatch(value: string) {
    this._checksumValidateMatch = value;
  }
  public resetChecksumValidateMatch() {
    this._checksumValidateMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateMatchInput() {
    return this._checksumValidateMatch;
  }

  // checksum_validate_value - computed: false, optional: true, required: false
  private _checksumValidateValue?: number; 
  public get checksumValidateValue() {
    return this.getNumberAttribute('checksum_validate_value');
  }
  public set checksumValidateValue(value: number) {
    this._checksumValidateValue = value;
  }
  public resetChecksumValidateValue() {
    this._checksumValidateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateValueInput() {
    return this._checksumValidateValue;
  }

  // code_match - computed: false, optional: true, required: false
  private _codeMatch?: string; 
  public get codeMatch() {
    return this.getStringAttribute('code_match');
  }
  public set codeMatch(value: string) {
    this._codeMatch = value;
  }
  public resetCodeMatch() {
    this._codeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeMatchInput() {
    return this._codeMatch;
  }

  // code_value - computed: false, optional: true, required: false
  private _codeValue?: number; 
  public get codeValue() {
    return this.getNumberAttribute('code_value');
  }
  public set codeValue(value: number) {
    this._codeValue = value;
  }
  public resetCodeValue() {
    this._codeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeValueInput() {
    return this._codeValue;
  }

  // data_length_match - computed: false, optional: true, required: false
  private _dataLengthMatch?: string; 
  public get dataLengthMatch() {
    return this.getStringAttribute('data_length_match');
  }
  public set dataLengthMatch(value: string) {
    this._dataLengthMatch = value;
  }
  public resetDataLengthMatch() {
    this._dataLengthMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthMatchInput() {
    return this._dataLengthMatch;
  }

  // data_length_value - computed: false, optional: true, required: false
  private _dataLengthValue?: number; 
  public get dataLengthValue() {
    return this.getNumberAttribute('data_length_value');
  }
  public set dataLengthValue(value: number) {
    this._dataLengthValue = value;
  }
  public resetDataLengthValue() {
    this._dataLengthValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthValueInput() {
    return this._dataLengthValue;
  }

  // identification_match - computed: false, optional: true, required: false
  private _identificationMatch?: string; 
  public get identificationMatch() {
    return this.getStringAttribute('identification_match');
  }
  public set identificationMatch(value: string) {
    this._identificationMatch = value;
  }
  public resetIdentificationMatch() {
    this._identificationMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationMatchInput() {
    return this._identificationMatch;
  }

  // identification_value - computed: false, optional: true, required: false
  private _identificationValue?: number; 
  public get identificationValue() {
    return this.getNumberAttribute('identification_value');
  }
  public set identificationValue(value: number) {
    this._identificationValue = value;
  }
  public resetIdentificationValue() {
    this._identificationValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationValueInput() {
    return this._identificationValue;
  }

  // sequence_number_match - computed: false, optional: true, required: false
  private _sequenceNumberMatch?: string; 
  public get sequenceNumberMatch() {
    return this.getStringAttribute('sequence_number_match');
  }
  public set sequenceNumberMatch(value: string) {
    this._sequenceNumberMatch = value;
  }
  public resetSequenceNumberMatch() {
    this._sequenceNumberMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberMatchInput() {
    return this._sequenceNumberMatch;
  }

  // sequence_number_value - computed: false, optional: true, required: false
  private _sequenceNumberValue?: number; 
  public get sequenceNumberValue() {
    return this.getNumberAttribute('sequence_number_value');
  }
  public set sequenceNumberValue(value: number) {
    this._sequenceNumberValue = value;
  }
  public resetSequenceNumberValue() {
    this._sequenceNumberValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberValueInput() {
    return this._sequenceNumberValue;
  }

  // type_match - computed: false, optional: true, required: false
  private _typeMatch?: string; 
  public get typeMatch() {
    return this.getStringAttribute('type_match');
  }
  public set typeMatch(value: string) {
    this._typeMatch = value;
  }
  public resetTypeMatch() {
    this._typeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeMatchInput() {
    return this._typeMatch;
  }

  // type_value - computed: false, optional: true, required: false
  private _typeValue?: number; 
  public get typeValue() {
    return this.getNumberAttribute('type_value');
  }
  public set typeValue(value: number) {
    this._typeValue = value;
  }
  public resetTypeValue() {
    this._typeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeValueInput() {
    return this._typeValue;
  }
}
export interface SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpv6 {
  /**
  * Condition for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_match SecurityIdpCustomAttack#checksum_validate_match}
  */
  readonly checksumValidateMatch?: string;
  /**
  * Value for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_value SecurityIdpCustomAttack#checksum_validate_value}
  */
  readonly checksumValidateValue?: number;
  /**
  * Condition for code field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#code_match SecurityIdpCustomAttack#code_match}
  */
  readonly codeMatch?: string;
  /**
  * Value for code field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#code_value SecurityIdpCustomAttack#code_value}
  */
  readonly codeValue?: number;
  /**
  * Condition for size of IP datagram subtracted by ICMP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_match SecurityIdpCustomAttack#data_length_match}
  */
  readonly dataLengthMatch?: string;
  /**
  * Value for size of IP datagram subtracted by ICMP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_value SecurityIdpCustomAttack#data_length_value}
  */
  readonly dataLengthValue?: number;
  /**
  * Condition for identifier in echo request/reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#identification_match SecurityIdpCustomAttack#identification_match}
  */
  readonly identificationMatch?: string;
  /**
  * Value for identifier in echo request/reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#identification_value SecurityIdpCustomAttack#identification_value}
  */
  readonly identificationValue?: number;
  /**
  * Condition for sequence number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#sequence_number_match SecurityIdpCustomAttack#sequence_number_match}
  */
  readonly sequenceNumberMatch?: string;
  /**
  * Value for sequence number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#sequence_number_value SecurityIdpCustomAttack#sequence_number_value}
  */
  readonly sequenceNumberValue?: number;
  /**
  * Condition for type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#type_match SecurityIdpCustomAttack#type_match}
  */
  readonly typeMatch?: string;
  /**
  * Value for type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#type_value SecurityIdpCustomAttack#type_value}
  */
  readonly typeValue?: number;
}

export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpv6ToTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum_validate_match: cdktf.stringToTerraform(struct!.checksumValidateMatch),
    checksum_validate_value: cdktf.numberToTerraform(struct!.checksumValidateValue),
    code_match: cdktf.stringToTerraform(struct!.codeMatch),
    code_value: cdktf.numberToTerraform(struct!.codeValue),
    data_length_match: cdktf.stringToTerraform(struct!.dataLengthMatch),
    data_length_value: cdktf.numberToTerraform(struct!.dataLengthValue),
    identification_match: cdktf.stringToTerraform(struct!.identificationMatch),
    identification_value: cdktf.numberToTerraform(struct!.identificationValue),
    sequence_number_match: cdktf.stringToTerraform(struct!.sequenceNumberMatch),
    sequence_number_value: cdktf.numberToTerraform(struct!.sequenceNumberValue),
    type_match: cdktf.stringToTerraform(struct!.typeMatch),
    type_value: cdktf.numberToTerraform(struct!.typeValue),
  }
}


export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpv6ToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum_validate_match: {
      value: cdktf.stringToHclTerraform(struct!.checksumValidateMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum_validate_value: {
      value: cdktf.numberToHclTerraform(struct!.checksumValidateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_match: {
      value: cdktf.stringToHclTerraform(struct!.codeMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code_value: {
      value: cdktf.numberToHclTerraform(struct!.codeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_length_match: {
      value: cdktf.stringToHclTerraform(struct!.dataLengthMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_length_value: {
      value: cdktf.numberToHclTerraform(struct!.dataLengthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    identification_match: {
      value: cdktf.stringToHclTerraform(struct!.identificationMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identification_value: {
      value: cdktf.numberToHclTerraform(struct!.identificationValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_number_match: {
      value: cdktf.stringToHclTerraform(struct!.sequenceNumberMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_number_value: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumberValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_match: {
      value: cdktf.stringToHclTerraform(struct!.typeMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_value: {
      value: cdktf.numberToHclTerraform(struct!.typeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksumValidateMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateMatch = this._checksumValidateMatch;
    }
    if (this._checksumValidateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateValue = this._checksumValidateValue;
    }
    if (this._codeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeMatch = this._codeMatch;
    }
    if (this._codeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeValue = this._codeValue;
    }
    if (this._dataLengthMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthMatch = this._dataLengthMatch;
    }
    if (this._dataLengthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthValue = this._dataLengthValue;
    }
    if (this._identificationMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.identificationMatch = this._identificationMatch;
    }
    if (this._identificationValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identificationValue = this._identificationValue;
    }
    if (this._sequenceNumberMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumberMatch = this._sequenceNumberMatch;
    }
    if (this._sequenceNumberValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumberValue = this._sequenceNumberValue;
    }
    if (this._typeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeMatch = this._typeMatch;
    }
    if (this._typeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeValue = this._typeValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = undefined;
      this._checksumValidateValue = undefined;
      this._codeMatch = undefined;
      this._codeValue = undefined;
      this._dataLengthMatch = undefined;
      this._dataLengthValue = undefined;
      this._identificationMatch = undefined;
      this._identificationValue = undefined;
      this._sequenceNumberMatch = undefined;
      this._sequenceNumberValue = undefined;
      this._typeMatch = undefined;
      this._typeValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = value.checksumValidateMatch;
      this._checksumValidateValue = value.checksumValidateValue;
      this._codeMatch = value.codeMatch;
      this._codeValue = value.codeValue;
      this._dataLengthMatch = value.dataLengthMatch;
      this._dataLengthValue = value.dataLengthValue;
      this._identificationMatch = value.identificationMatch;
      this._identificationValue = value.identificationValue;
      this._sequenceNumberMatch = value.sequenceNumberMatch;
      this._sequenceNumberValue = value.sequenceNumberValue;
      this._typeMatch = value.typeMatch;
      this._typeValue = value.typeValue;
    }
  }

  // checksum_validate_match - computed: false, optional: true, required: false
  private _checksumValidateMatch?: string; 
  public get checksumValidateMatch() {
    return this.getStringAttribute('checksum_validate_match');
  }
  public set checksumValidateMatch(value: string) {
    this._checksumValidateMatch = value;
  }
  public resetChecksumValidateMatch() {
    this._checksumValidateMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateMatchInput() {
    return this._checksumValidateMatch;
  }

  // checksum_validate_value - computed: false, optional: true, required: false
  private _checksumValidateValue?: number; 
  public get checksumValidateValue() {
    return this.getNumberAttribute('checksum_validate_value');
  }
  public set checksumValidateValue(value: number) {
    this._checksumValidateValue = value;
  }
  public resetChecksumValidateValue() {
    this._checksumValidateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateValueInput() {
    return this._checksumValidateValue;
  }

  // code_match - computed: false, optional: true, required: false
  private _codeMatch?: string; 
  public get codeMatch() {
    return this.getStringAttribute('code_match');
  }
  public set codeMatch(value: string) {
    this._codeMatch = value;
  }
  public resetCodeMatch() {
    this._codeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeMatchInput() {
    return this._codeMatch;
  }

  // code_value - computed: false, optional: true, required: false
  private _codeValue?: number; 
  public get codeValue() {
    return this.getNumberAttribute('code_value');
  }
  public set codeValue(value: number) {
    this._codeValue = value;
  }
  public resetCodeValue() {
    this._codeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeValueInput() {
    return this._codeValue;
  }

  // data_length_match - computed: false, optional: true, required: false
  private _dataLengthMatch?: string; 
  public get dataLengthMatch() {
    return this.getStringAttribute('data_length_match');
  }
  public set dataLengthMatch(value: string) {
    this._dataLengthMatch = value;
  }
  public resetDataLengthMatch() {
    this._dataLengthMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthMatchInput() {
    return this._dataLengthMatch;
  }

  // data_length_value - computed: false, optional: true, required: false
  private _dataLengthValue?: number; 
  public get dataLengthValue() {
    return this.getNumberAttribute('data_length_value');
  }
  public set dataLengthValue(value: number) {
    this._dataLengthValue = value;
  }
  public resetDataLengthValue() {
    this._dataLengthValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthValueInput() {
    return this._dataLengthValue;
  }

  // identification_match - computed: false, optional: true, required: false
  private _identificationMatch?: string; 
  public get identificationMatch() {
    return this.getStringAttribute('identification_match');
  }
  public set identificationMatch(value: string) {
    this._identificationMatch = value;
  }
  public resetIdentificationMatch() {
    this._identificationMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationMatchInput() {
    return this._identificationMatch;
  }

  // identification_value - computed: false, optional: true, required: false
  private _identificationValue?: number; 
  public get identificationValue() {
    return this.getNumberAttribute('identification_value');
  }
  public set identificationValue(value: number) {
    this._identificationValue = value;
  }
  public resetIdentificationValue() {
    this._identificationValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationValueInput() {
    return this._identificationValue;
  }

  // sequence_number_match - computed: false, optional: true, required: false
  private _sequenceNumberMatch?: string; 
  public get sequenceNumberMatch() {
    return this.getStringAttribute('sequence_number_match');
  }
  public set sequenceNumberMatch(value: string) {
    this._sequenceNumberMatch = value;
  }
  public resetSequenceNumberMatch() {
    this._sequenceNumberMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberMatchInput() {
    return this._sequenceNumberMatch;
  }

  // sequence_number_value - computed: false, optional: true, required: false
  private _sequenceNumberValue?: number; 
  public get sequenceNumberValue() {
    return this.getNumberAttribute('sequence_number_value');
  }
  public set sequenceNumberValue(value: number) {
    this._sequenceNumberValue = value;
  }
  public resetSequenceNumberValue() {
    this._sequenceNumberValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberValueInput() {
    return this._sequenceNumberValue;
  }

  // type_match - computed: false, optional: true, required: false
  private _typeMatch?: string; 
  public get typeMatch() {
    return this.getStringAttribute('type_match');
  }
  public set typeMatch(value: string) {
    this._typeMatch = value;
  }
  public resetTypeMatch() {
    this._typeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeMatchInput() {
    return this._typeMatch;
  }

  // type_value - computed: false, optional: true, required: false
  private _typeValue?: number; 
  public get typeValue() {
    return this.getNumberAttribute('type_value');
  }
  public set typeValue(value: number) {
    this._typeValue = value;
  }
  public resetTypeValue() {
    this._typeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeValueInput() {
    return this._typeValue;
  }
}
export interface SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv4 {
  /**
  * Condition for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_match SecurityIdpCustomAttack#checksum_validate_match}
  */
  readonly checksumValidateMatch?: string;
  /**
  * Value for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_value SecurityIdpCustomAttack#checksum_validate_value}
  */
  readonly checksumValidateValue?: number;
  /**
  * Condition for destination IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_match SecurityIdpCustomAttack#destination_match}
  */
  readonly destinationMatch?: string;
  /**
  * Value for destination IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_value SecurityIdpCustomAttack#destination_value}
  */
  readonly destinationValue?: string;
  /**
  * Condition for fragment identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#identification_match SecurityIdpCustomAttack#identification_match}
  */
  readonly identificationMatch?: string;
  /**
  * Value for fragment identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#identification_value SecurityIdpCustomAttack#identification_value}
  */
  readonly identificationValue?: number;
  /**
  * Condition for header length in words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#ihl_match SecurityIdpCustomAttack#ihl_match}
  */
  readonly ihlMatch?: string;
  /**
  * Value for header length in words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#ihl_value SecurityIdpCustomAttack#ihl_value}
  */
  readonly ihlValue?: number;
  /**
  * IP Flag bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#ip_flags SecurityIdpCustomAttack#ip_flags}
  */
  readonly ipFlags?: string[];
  /**
  * Condition for transport layer protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_match SecurityIdpCustomAttack#protocol_match}
  */
  readonly protocolMatch?: string;
  /**
  * Value for transport layer protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_value SecurityIdpCustomAttack#protocol_value}
  */
  readonly protocolValue?: number;
  /**
  * Condition for source IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_match SecurityIdpCustomAttack#source_match}
  */
  readonly sourceMatch?: string;
  /**
  * Value for source IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_value SecurityIdpCustomAttack#source_value}
  */
  readonly sourceValue?: string;
  /**
  * Condition for type of service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#tos_match SecurityIdpCustomAttack#tos_match}
  */
  readonly tosMatch?: string;
  /**
  * Value for type of service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#tos_value SecurityIdpCustomAttack#tos_value}
  */
  readonly tosValue?: number;
  /**
  * Condition for total length of IP datagram.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#total_length_match SecurityIdpCustomAttack#total_length_match}
  */
  readonly totalLengthMatch?: string;
  /**
  * Value for total length of IP datagram.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#total_length_value SecurityIdpCustomAttack#total_length_value}
  */
  readonly totalLengthValue?: number;
  /**
  * Condition for time to live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#ttl_match SecurityIdpCustomAttack#ttl_match}
  */
  readonly ttlMatch?: string;
  /**
  * Value for time to live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#ttl_value SecurityIdpCustomAttack#ttl_value}
  */
  readonly ttlValue?: number;
}

export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv4ToTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum_validate_match: cdktf.stringToTerraform(struct!.checksumValidateMatch),
    checksum_validate_value: cdktf.numberToTerraform(struct!.checksumValidateValue),
    destination_match: cdktf.stringToTerraform(struct!.destinationMatch),
    destination_value: cdktf.stringToTerraform(struct!.destinationValue),
    identification_match: cdktf.stringToTerraform(struct!.identificationMatch),
    identification_value: cdktf.numberToTerraform(struct!.identificationValue),
    ihl_match: cdktf.stringToTerraform(struct!.ihlMatch),
    ihl_value: cdktf.numberToTerraform(struct!.ihlValue),
    ip_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFlags),
    protocol_match: cdktf.stringToTerraform(struct!.protocolMatch),
    protocol_value: cdktf.numberToTerraform(struct!.protocolValue),
    source_match: cdktf.stringToTerraform(struct!.sourceMatch),
    source_value: cdktf.stringToTerraform(struct!.sourceValue),
    tos_match: cdktf.stringToTerraform(struct!.tosMatch),
    tos_value: cdktf.numberToTerraform(struct!.tosValue),
    total_length_match: cdktf.stringToTerraform(struct!.totalLengthMatch),
    total_length_value: cdktf.numberToTerraform(struct!.totalLengthValue),
    ttl_match: cdktf.stringToTerraform(struct!.ttlMatch),
    ttl_value: cdktf.numberToTerraform(struct!.ttlValue),
  }
}


export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv4ToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum_validate_match: {
      value: cdktf.stringToHclTerraform(struct!.checksumValidateMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum_validate_value: {
      value: cdktf.numberToHclTerraform(struct!.checksumValidateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_match: {
      value: cdktf.stringToHclTerraform(struct!.destinationMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_value: {
      value: cdktf.stringToHclTerraform(struct!.destinationValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identification_match: {
      value: cdktf.stringToHclTerraform(struct!.identificationMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identification_value: {
      value: cdktf.numberToHclTerraform(struct!.identificationValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ihl_match: {
      value: cdktf.stringToHclTerraform(struct!.ihlMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ihl_value: {
      value: cdktf.numberToHclTerraform(struct!.ihlValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFlags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protocol_match: {
      value: cdktf.stringToHclTerraform(struct!.protocolMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_value: {
      value: cdktf.numberToHclTerraform(struct!.protocolValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_match: {
      value: cdktf.stringToHclTerraform(struct!.sourceMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_value: {
      value: cdktf.stringToHclTerraform(struct!.sourceValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_match: {
      value: cdktf.stringToHclTerraform(struct!.tosMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_value: {
      value: cdktf.numberToHclTerraform(struct!.tosValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_length_match: {
      value: cdktf.stringToHclTerraform(struct!.totalLengthMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_length_value: {
      value: cdktf.numberToHclTerraform(struct!.totalLengthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_match: {
      value: cdktf.stringToHclTerraform(struct!.ttlMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl_value: {
      value: cdktf.numberToHclTerraform(struct!.ttlValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksumValidateMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateMatch = this._checksumValidateMatch;
    }
    if (this._checksumValidateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateValue = this._checksumValidateValue;
    }
    if (this._destinationMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationMatch = this._destinationMatch;
    }
    if (this._destinationValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationValue = this._destinationValue;
    }
    if (this._identificationMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.identificationMatch = this._identificationMatch;
    }
    if (this._identificationValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identificationValue = this._identificationValue;
    }
    if (this._ihlMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ihlMatch = this._ihlMatch;
    }
    if (this._ihlValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ihlValue = this._ihlValue;
    }
    if (this._ipFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFlags = this._ipFlags;
    }
    if (this._protocolMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolMatch = this._protocolMatch;
    }
    if (this._protocolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolValue = this._protocolValue;
    }
    if (this._sourceMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMatch = this._sourceMatch;
    }
    if (this._sourceValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceValue = this._sourceValue;
    }
    if (this._tosMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosMatch = this._tosMatch;
    }
    if (this._tosValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosValue = this._tosValue;
    }
    if (this._totalLengthMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLengthMatch = this._totalLengthMatch;
    }
    if (this._totalLengthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLengthValue = this._totalLengthValue;
    }
    if (this._ttlMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlMatch = this._ttlMatch;
    }
    if (this._ttlValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlValue = this._ttlValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = undefined;
      this._checksumValidateValue = undefined;
      this._destinationMatch = undefined;
      this._destinationValue = undefined;
      this._identificationMatch = undefined;
      this._identificationValue = undefined;
      this._ihlMatch = undefined;
      this._ihlValue = undefined;
      this._ipFlags = undefined;
      this._protocolMatch = undefined;
      this._protocolValue = undefined;
      this._sourceMatch = undefined;
      this._sourceValue = undefined;
      this._tosMatch = undefined;
      this._tosValue = undefined;
      this._totalLengthMatch = undefined;
      this._totalLengthValue = undefined;
      this._ttlMatch = undefined;
      this._ttlValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = value.checksumValidateMatch;
      this._checksumValidateValue = value.checksumValidateValue;
      this._destinationMatch = value.destinationMatch;
      this._destinationValue = value.destinationValue;
      this._identificationMatch = value.identificationMatch;
      this._identificationValue = value.identificationValue;
      this._ihlMatch = value.ihlMatch;
      this._ihlValue = value.ihlValue;
      this._ipFlags = value.ipFlags;
      this._protocolMatch = value.protocolMatch;
      this._protocolValue = value.protocolValue;
      this._sourceMatch = value.sourceMatch;
      this._sourceValue = value.sourceValue;
      this._tosMatch = value.tosMatch;
      this._tosValue = value.tosValue;
      this._totalLengthMatch = value.totalLengthMatch;
      this._totalLengthValue = value.totalLengthValue;
      this._ttlMatch = value.ttlMatch;
      this._ttlValue = value.ttlValue;
    }
  }

  // checksum_validate_match - computed: false, optional: true, required: false
  private _checksumValidateMatch?: string; 
  public get checksumValidateMatch() {
    return this.getStringAttribute('checksum_validate_match');
  }
  public set checksumValidateMatch(value: string) {
    this._checksumValidateMatch = value;
  }
  public resetChecksumValidateMatch() {
    this._checksumValidateMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateMatchInput() {
    return this._checksumValidateMatch;
  }

  // checksum_validate_value - computed: false, optional: true, required: false
  private _checksumValidateValue?: number; 
  public get checksumValidateValue() {
    return this.getNumberAttribute('checksum_validate_value');
  }
  public set checksumValidateValue(value: number) {
    this._checksumValidateValue = value;
  }
  public resetChecksumValidateValue() {
    this._checksumValidateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateValueInput() {
    return this._checksumValidateValue;
  }

  // destination_match - computed: false, optional: true, required: false
  private _destinationMatch?: string; 
  public get destinationMatch() {
    return this.getStringAttribute('destination_match');
  }
  public set destinationMatch(value: string) {
    this._destinationMatch = value;
  }
  public resetDestinationMatch() {
    this._destinationMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationMatchInput() {
    return this._destinationMatch;
  }

  // destination_value - computed: false, optional: true, required: false
  private _destinationValue?: string; 
  public get destinationValue() {
    return this.getStringAttribute('destination_value');
  }
  public set destinationValue(value: string) {
    this._destinationValue = value;
  }
  public resetDestinationValue() {
    this._destinationValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationValueInput() {
    return this._destinationValue;
  }

  // identification_match - computed: false, optional: true, required: false
  private _identificationMatch?: string; 
  public get identificationMatch() {
    return this.getStringAttribute('identification_match');
  }
  public set identificationMatch(value: string) {
    this._identificationMatch = value;
  }
  public resetIdentificationMatch() {
    this._identificationMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationMatchInput() {
    return this._identificationMatch;
  }

  // identification_value - computed: false, optional: true, required: false
  private _identificationValue?: number; 
  public get identificationValue() {
    return this.getNumberAttribute('identification_value');
  }
  public set identificationValue(value: number) {
    this._identificationValue = value;
  }
  public resetIdentificationValue() {
    this._identificationValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationValueInput() {
    return this._identificationValue;
  }

  // ihl_match - computed: false, optional: true, required: false
  private _ihlMatch?: string; 
  public get ihlMatch() {
    return this.getStringAttribute('ihl_match');
  }
  public set ihlMatch(value: string) {
    this._ihlMatch = value;
  }
  public resetIhlMatch() {
    this._ihlMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ihlMatchInput() {
    return this._ihlMatch;
  }

  // ihl_value - computed: false, optional: true, required: false
  private _ihlValue?: number; 
  public get ihlValue() {
    return this.getNumberAttribute('ihl_value');
  }
  public set ihlValue(value: number) {
    this._ihlValue = value;
  }
  public resetIhlValue() {
    this._ihlValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ihlValueInput() {
    return this._ihlValue;
  }

  // ip_flags - computed: false, optional: true, required: false
  private _ipFlags?: string[]; 
  public get ipFlags() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_flags'));
  }
  public set ipFlags(value: string[]) {
    this._ipFlags = value;
  }
  public resetIpFlags() {
    this._ipFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFlagsInput() {
    return this._ipFlags;
  }

  // protocol_match - computed: false, optional: true, required: false
  private _protocolMatch?: string; 
  public get protocolMatch() {
    return this.getStringAttribute('protocol_match');
  }
  public set protocolMatch(value: string) {
    this._protocolMatch = value;
  }
  public resetProtocolMatch() {
    this._protocolMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolMatchInput() {
    return this._protocolMatch;
  }

  // protocol_value - computed: false, optional: true, required: false
  private _protocolValue?: number; 
  public get protocolValue() {
    return this.getNumberAttribute('protocol_value');
  }
  public set protocolValue(value: number) {
    this._protocolValue = value;
  }
  public resetProtocolValue() {
    this._protocolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolValueInput() {
    return this._protocolValue;
  }

  // source_match - computed: false, optional: true, required: false
  private _sourceMatch?: string; 
  public get sourceMatch() {
    return this.getStringAttribute('source_match');
  }
  public set sourceMatch(value: string) {
    this._sourceMatch = value;
  }
  public resetSourceMatch() {
    this._sourceMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMatchInput() {
    return this._sourceMatch;
  }

  // source_value - computed: false, optional: true, required: false
  private _sourceValue?: string; 
  public get sourceValue() {
    return this.getStringAttribute('source_value');
  }
  public set sourceValue(value: string) {
    this._sourceValue = value;
  }
  public resetSourceValue() {
    this._sourceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceValueInput() {
    return this._sourceValue;
  }

  // tos_match - computed: false, optional: true, required: false
  private _tosMatch?: string; 
  public get tosMatch() {
    return this.getStringAttribute('tos_match');
  }
  public set tosMatch(value: string) {
    this._tosMatch = value;
  }
  public resetTosMatch() {
    this._tosMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosMatchInput() {
    return this._tosMatch;
  }

  // tos_value - computed: false, optional: true, required: false
  private _tosValue?: number; 
  public get tosValue() {
    return this.getNumberAttribute('tos_value');
  }
  public set tosValue(value: number) {
    this._tosValue = value;
  }
  public resetTosValue() {
    this._tosValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosValueInput() {
    return this._tosValue;
  }

  // total_length_match - computed: false, optional: true, required: false
  private _totalLengthMatch?: string; 
  public get totalLengthMatch() {
    return this.getStringAttribute('total_length_match');
  }
  public set totalLengthMatch(value: string) {
    this._totalLengthMatch = value;
  }
  public resetTotalLengthMatch() {
    this._totalLengthMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLengthMatchInput() {
    return this._totalLengthMatch;
  }

  // total_length_value - computed: false, optional: true, required: false
  private _totalLengthValue?: number; 
  public get totalLengthValue() {
    return this.getNumberAttribute('total_length_value');
  }
  public set totalLengthValue(value: number) {
    this._totalLengthValue = value;
  }
  public resetTotalLengthValue() {
    this._totalLengthValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLengthValueInput() {
    return this._totalLengthValue;
  }

  // ttl_match - computed: false, optional: true, required: false
  private _ttlMatch?: string; 
  public get ttlMatch() {
    return this.getStringAttribute('ttl_match');
  }
  public set ttlMatch(value: string) {
    this._ttlMatch = value;
  }
  public resetTtlMatch() {
    this._ttlMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlMatchInput() {
    return this._ttlMatch;
  }

  // ttl_value - computed: false, optional: true, required: false
  private _ttlValue?: number; 
  public get ttlValue() {
    return this.getNumberAttribute('ttl_value');
  }
  public set ttlValue(value: number) {
    this._ttlValue = value;
  }
  public resetTtlValue() {
    this._ttlValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlValueInput() {
    return this._ttlValue;
  }
}
export interface SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv6 {
  /**
  * Condition for destination IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_match SecurityIdpCustomAttack#destination_match}
  */
  readonly destinationMatch?: string;
  /**
  * Value for destination IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_value SecurityIdpCustomAttack#destination_value}
  */
  readonly destinationValue?: string;
  /**
  * Condition for home address of the mobile node in destination option extension header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#extension_header_destination_option_home_address_match SecurityIdpCustomAttack#extension_header_destination_option_home_address_match}
  */
  readonly extensionHeaderDestinationOptionHomeAddressMatch?: string;
  /**
  * Value for home address of the mobile node in destination option extension header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#extension_header_destination_option_home_address_value SecurityIdpCustomAttack#extension_header_destination_option_home_address_value}
  */
  readonly extensionHeaderDestinationOptionHomeAddressValue?: string;
  /**
  * Condition for header type in destination option extension header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#extension_header_destination_option_type_match SecurityIdpCustomAttack#extension_header_destination_option_type_match}
  */
  readonly extensionHeaderDestinationOptionTypeMatch?: string;
  /**
  * Value for header type in  destination option extension header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#extension_header_destination_option_type_value SecurityIdpCustomAttack#extension_header_destination_option_type_value}
  */
  readonly extensionHeaderDestinationOptionTypeValue?: number;
  /**
  * Condition for header type in routing extension header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#extension_header_routing_header_type_match SecurityIdpCustomAttack#extension_header_routing_header_type_match}
  */
  readonly extensionHeaderRoutingHeaderTypeMatch?: string;
  /**
  * Value for header type in routing extension header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#extension_header_routing_header_type_value SecurityIdpCustomAttack#extension_header_routing_header_type_value}
  */
  readonly extensionHeaderRoutingHeaderTypeValue?: number;
  /**
  * Condition for flow label identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#flow_label_match SecurityIdpCustomAttack#flow_label_match}
  */
  readonly flowLabelMatch?: string;
  /**
  * Value for flow label identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#flow_label_value SecurityIdpCustomAttack#flow_label_value}
  */
  readonly flowLabelValue?: number;
  /**
  * Condition for hop limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#hop_limit_match SecurityIdpCustomAttack#hop_limit_match}
  */
  readonly hopLimitMatch?: string;
  /**
  * Value for hop limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#hop_limit_value SecurityIdpCustomAttack#hop_limit_value}
  */
  readonly hopLimitValue?: number;
  /**
  * Condition for the header following the basic IPv6 header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#next_header_match SecurityIdpCustomAttack#next_header_match}
  */
  readonly nextHeaderMatch?: string;
  /**
  * Value for the header following the basic IPv6 header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#next_header_value SecurityIdpCustomAttack#next_header_value}
  */
  readonly nextHeaderValue?: number;
  /**
  * Condition for length of the payload in the IPv6 datagram.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#payload_length_match SecurityIdpCustomAttack#payload_length_match}
  */
  readonly payloadLengthMatch?: string;
  /**
  * Value for length of the payload in the IPv6 datagram.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#payload_length_value SecurityIdpCustomAttack#payload_length_value}
  */
  readonly payloadLengthValue?: number;
  /**
  * Condition for source IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_match SecurityIdpCustomAttack#source_match}
  */
  readonly sourceMatch?: string;
  /**
  * Value for source IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_value SecurityIdpCustomAttack#source_value}
  */
  readonly sourceValue?: string;
  /**
  * Condition for traffic class. Similar to TOS in IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#traffic_class_match SecurityIdpCustomAttack#traffic_class_match}
  */
  readonly trafficClassMatch?: string;
  /**
  * Value for traffic class. Similar to TOS in IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#traffic_class_value SecurityIdpCustomAttack#traffic_class_value}
  */
  readonly trafficClassValue?: number;
}

export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv6ToTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_match: cdktf.stringToTerraform(struct!.destinationMatch),
    destination_value: cdktf.stringToTerraform(struct!.destinationValue),
    extension_header_destination_option_home_address_match: cdktf.stringToTerraform(struct!.extensionHeaderDestinationOptionHomeAddressMatch),
    extension_header_destination_option_home_address_value: cdktf.stringToTerraform(struct!.extensionHeaderDestinationOptionHomeAddressValue),
    extension_header_destination_option_type_match: cdktf.stringToTerraform(struct!.extensionHeaderDestinationOptionTypeMatch),
    extension_header_destination_option_type_value: cdktf.numberToTerraform(struct!.extensionHeaderDestinationOptionTypeValue),
    extension_header_routing_header_type_match: cdktf.stringToTerraform(struct!.extensionHeaderRoutingHeaderTypeMatch),
    extension_header_routing_header_type_value: cdktf.numberToTerraform(struct!.extensionHeaderRoutingHeaderTypeValue),
    flow_label_match: cdktf.stringToTerraform(struct!.flowLabelMatch),
    flow_label_value: cdktf.numberToTerraform(struct!.flowLabelValue),
    hop_limit_match: cdktf.stringToTerraform(struct!.hopLimitMatch),
    hop_limit_value: cdktf.numberToTerraform(struct!.hopLimitValue),
    next_header_match: cdktf.stringToTerraform(struct!.nextHeaderMatch),
    next_header_value: cdktf.numberToTerraform(struct!.nextHeaderValue),
    payload_length_match: cdktf.stringToTerraform(struct!.payloadLengthMatch),
    payload_length_value: cdktf.numberToTerraform(struct!.payloadLengthValue),
    source_match: cdktf.stringToTerraform(struct!.sourceMatch),
    source_value: cdktf.stringToTerraform(struct!.sourceValue),
    traffic_class_match: cdktf.stringToTerraform(struct!.trafficClassMatch),
    traffic_class_value: cdktf.numberToTerraform(struct!.trafficClassValue),
  }
}


export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv6ToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_match: {
      value: cdktf.stringToHclTerraform(struct!.destinationMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_value: {
      value: cdktf.stringToHclTerraform(struct!.destinationValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_header_destination_option_home_address_match: {
      value: cdktf.stringToHclTerraform(struct!.extensionHeaderDestinationOptionHomeAddressMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_header_destination_option_home_address_value: {
      value: cdktf.stringToHclTerraform(struct!.extensionHeaderDestinationOptionHomeAddressValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_header_destination_option_type_match: {
      value: cdktf.stringToHclTerraform(struct!.extensionHeaderDestinationOptionTypeMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_header_destination_option_type_value: {
      value: cdktf.numberToHclTerraform(struct!.extensionHeaderDestinationOptionTypeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extension_header_routing_header_type_match: {
      value: cdktf.stringToHclTerraform(struct!.extensionHeaderRoutingHeaderTypeMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_header_routing_header_type_value: {
      value: cdktf.numberToHclTerraform(struct!.extensionHeaderRoutingHeaderTypeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flow_label_match: {
      value: cdktf.stringToHclTerraform(struct!.flowLabelMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_label_value: {
      value: cdktf.numberToHclTerraform(struct!.flowLabelValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hop_limit_match: {
      value: cdktf.stringToHclTerraform(struct!.hopLimitMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hop_limit_value: {
      value: cdktf.numberToHclTerraform(struct!.hopLimitValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_header_match: {
      value: cdktf.stringToHclTerraform(struct!.nextHeaderMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_header_value: {
      value: cdktf.numberToHclTerraform(struct!.nextHeaderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    payload_length_match: {
      value: cdktf.stringToHclTerraform(struct!.payloadLengthMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_length_value: {
      value: cdktf.numberToHclTerraform(struct!.payloadLengthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_match: {
      value: cdktf.stringToHclTerraform(struct!.sourceMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_value: {
      value: cdktf.stringToHclTerraform(struct!.sourceValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_class_match: {
      value: cdktf.stringToHclTerraform(struct!.trafficClassMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_class_value: {
      value: cdktf.numberToHclTerraform(struct!.trafficClassValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationMatch = this._destinationMatch;
    }
    if (this._destinationValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationValue = this._destinationValue;
    }
    if (this._extensionHeaderDestinationOptionHomeAddressMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionHeaderDestinationOptionHomeAddressMatch = this._extensionHeaderDestinationOptionHomeAddressMatch;
    }
    if (this._extensionHeaderDestinationOptionHomeAddressValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionHeaderDestinationOptionHomeAddressValue = this._extensionHeaderDestinationOptionHomeAddressValue;
    }
    if (this._extensionHeaderDestinationOptionTypeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionHeaderDestinationOptionTypeMatch = this._extensionHeaderDestinationOptionTypeMatch;
    }
    if (this._extensionHeaderDestinationOptionTypeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionHeaderDestinationOptionTypeValue = this._extensionHeaderDestinationOptionTypeValue;
    }
    if (this._extensionHeaderRoutingHeaderTypeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionHeaderRoutingHeaderTypeMatch = this._extensionHeaderRoutingHeaderTypeMatch;
    }
    if (this._extensionHeaderRoutingHeaderTypeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionHeaderRoutingHeaderTypeValue = this._extensionHeaderRoutingHeaderTypeValue;
    }
    if (this._flowLabelMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLabelMatch = this._flowLabelMatch;
    }
    if (this._flowLabelValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLabelValue = this._flowLabelValue;
    }
    if (this._hopLimitMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hopLimitMatch = this._hopLimitMatch;
    }
    if (this._hopLimitValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hopLimitValue = this._hopLimitValue;
    }
    if (this._nextHeaderMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHeaderMatch = this._nextHeaderMatch;
    }
    if (this._nextHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHeaderValue = this._nextHeaderValue;
    }
    if (this._payloadLengthMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadLengthMatch = this._payloadLengthMatch;
    }
    if (this._payloadLengthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadLengthValue = this._payloadLengthValue;
    }
    if (this._sourceMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMatch = this._sourceMatch;
    }
    if (this._sourceValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceValue = this._sourceValue;
    }
    if (this._trafficClassMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficClassMatch = this._trafficClassMatch;
    }
    if (this._trafficClassValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficClassValue = this._trafficClassValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationMatch = undefined;
      this._destinationValue = undefined;
      this._extensionHeaderDestinationOptionHomeAddressMatch = undefined;
      this._extensionHeaderDestinationOptionHomeAddressValue = undefined;
      this._extensionHeaderDestinationOptionTypeMatch = undefined;
      this._extensionHeaderDestinationOptionTypeValue = undefined;
      this._extensionHeaderRoutingHeaderTypeMatch = undefined;
      this._extensionHeaderRoutingHeaderTypeValue = undefined;
      this._flowLabelMatch = undefined;
      this._flowLabelValue = undefined;
      this._hopLimitMatch = undefined;
      this._hopLimitValue = undefined;
      this._nextHeaderMatch = undefined;
      this._nextHeaderValue = undefined;
      this._payloadLengthMatch = undefined;
      this._payloadLengthValue = undefined;
      this._sourceMatch = undefined;
      this._sourceValue = undefined;
      this._trafficClassMatch = undefined;
      this._trafficClassValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationMatch = value.destinationMatch;
      this._destinationValue = value.destinationValue;
      this._extensionHeaderDestinationOptionHomeAddressMatch = value.extensionHeaderDestinationOptionHomeAddressMatch;
      this._extensionHeaderDestinationOptionHomeAddressValue = value.extensionHeaderDestinationOptionHomeAddressValue;
      this._extensionHeaderDestinationOptionTypeMatch = value.extensionHeaderDestinationOptionTypeMatch;
      this._extensionHeaderDestinationOptionTypeValue = value.extensionHeaderDestinationOptionTypeValue;
      this._extensionHeaderRoutingHeaderTypeMatch = value.extensionHeaderRoutingHeaderTypeMatch;
      this._extensionHeaderRoutingHeaderTypeValue = value.extensionHeaderRoutingHeaderTypeValue;
      this._flowLabelMatch = value.flowLabelMatch;
      this._flowLabelValue = value.flowLabelValue;
      this._hopLimitMatch = value.hopLimitMatch;
      this._hopLimitValue = value.hopLimitValue;
      this._nextHeaderMatch = value.nextHeaderMatch;
      this._nextHeaderValue = value.nextHeaderValue;
      this._payloadLengthMatch = value.payloadLengthMatch;
      this._payloadLengthValue = value.payloadLengthValue;
      this._sourceMatch = value.sourceMatch;
      this._sourceValue = value.sourceValue;
      this._trafficClassMatch = value.trafficClassMatch;
      this._trafficClassValue = value.trafficClassValue;
    }
  }

  // destination_match - computed: false, optional: true, required: false
  private _destinationMatch?: string; 
  public get destinationMatch() {
    return this.getStringAttribute('destination_match');
  }
  public set destinationMatch(value: string) {
    this._destinationMatch = value;
  }
  public resetDestinationMatch() {
    this._destinationMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationMatchInput() {
    return this._destinationMatch;
  }

  // destination_value - computed: false, optional: true, required: false
  private _destinationValue?: string; 
  public get destinationValue() {
    return this.getStringAttribute('destination_value');
  }
  public set destinationValue(value: string) {
    this._destinationValue = value;
  }
  public resetDestinationValue() {
    this._destinationValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationValueInput() {
    return this._destinationValue;
  }

  // extension_header_destination_option_home_address_match - computed: false, optional: true, required: false
  private _extensionHeaderDestinationOptionHomeAddressMatch?: string; 
  public get extensionHeaderDestinationOptionHomeAddressMatch() {
    return this.getStringAttribute('extension_header_destination_option_home_address_match');
  }
  public set extensionHeaderDestinationOptionHomeAddressMatch(value: string) {
    this._extensionHeaderDestinationOptionHomeAddressMatch = value;
  }
  public resetExtensionHeaderDestinationOptionHomeAddressMatch() {
    this._extensionHeaderDestinationOptionHomeAddressMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionHeaderDestinationOptionHomeAddressMatchInput() {
    return this._extensionHeaderDestinationOptionHomeAddressMatch;
  }

  // extension_header_destination_option_home_address_value - computed: false, optional: true, required: false
  private _extensionHeaderDestinationOptionHomeAddressValue?: string; 
  public get extensionHeaderDestinationOptionHomeAddressValue() {
    return this.getStringAttribute('extension_header_destination_option_home_address_value');
  }
  public set extensionHeaderDestinationOptionHomeAddressValue(value: string) {
    this._extensionHeaderDestinationOptionHomeAddressValue = value;
  }
  public resetExtensionHeaderDestinationOptionHomeAddressValue() {
    this._extensionHeaderDestinationOptionHomeAddressValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionHeaderDestinationOptionHomeAddressValueInput() {
    return this._extensionHeaderDestinationOptionHomeAddressValue;
  }

  // extension_header_destination_option_type_match - computed: false, optional: true, required: false
  private _extensionHeaderDestinationOptionTypeMatch?: string; 
  public get extensionHeaderDestinationOptionTypeMatch() {
    return this.getStringAttribute('extension_header_destination_option_type_match');
  }
  public set extensionHeaderDestinationOptionTypeMatch(value: string) {
    this._extensionHeaderDestinationOptionTypeMatch = value;
  }
  public resetExtensionHeaderDestinationOptionTypeMatch() {
    this._extensionHeaderDestinationOptionTypeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionHeaderDestinationOptionTypeMatchInput() {
    return this._extensionHeaderDestinationOptionTypeMatch;
  }

  // extension_header_destination_option_type_value - computed: false, optional: true, required: false
  private _extensionHeaderDestinationOptionTypeValue?: number; 
  public get extensionHeaderDestinationOptionTypeValue() {
    return this.getNumberAttribute('extension_header_destination_option_type_value');
  }
  public set extensionHeaderDestinationOptionTypeValue(value: number) {
    this._extensionHeaderDestinationOptionTypeValue = value;
  }
  public resetExtensionHeaderDestinationOptionTypeValue() {
    this._extensionHeaderDestinationOptionTypeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionHeaderDestinationOptionTypeValueInput() {
    return this._extensionHeaderDestinationOptionTypeValue;
  }

  // extension_header_routing_header_type_match - computed: false, optional: true, required: false
  private _extensionHeaderRoutingHeaderTypeMatch?: string; 
  public get extensionHeaderRoutingHeaderTypeMatch() {
    return this.getStringAttribute('extension_header_routing_header_type_match');
  }
  public set extensionHeaderRoutingHeaderTypeMatch(value: string) {
    this._extensionHeaderRoutingHeaderTypeMatch = value;
  }
  public resetExtensionHeaderRoutingHeaderTypeMatch() {
    this._extensionHeaderRoutingHeaderTypeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionHeaderRoutingHeaderTypeMatchInput() {
    return this._extensionHeaderRoutingHeaderTypeMatch;
  }

  // extension_header_routing_header_type_value - computed: false, optional: true, required: false
  private _extensionHeaderRoutingHeaderTypeValue?: number; 
  public get extensionHeaderRoutingHeaderTypeValue() {
    return this.getNumberAttribute('extension_header_routing_header_type_value');
  }
  public set extensionHeaderRoutingHeaderTypeValue(value: number) {
    this._extensionHeaderRoutingHeaderTypeValue = value;
  }
  public resetExtensionHeaderRoutingHeaderTypeValue() {
    this._extensionHeaderRoutingHeaderTypeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionHeaderRoutingHeaderTypeValueInput() {
    return this._extensionHeaderRoutingHeaderTypeValue;
  }

  // flow_label_match - computed: false, optional: true, required: false
  private _flowLabelMatch?: string; 
  public get flowLabelMatch() {
    return this.getStringAttribute('flow_label_match');
  }
  public set flowLabelMatch(value: string) {
    this._flowLabelMatch = value;
  }
  public resetFlowLabelMatch() {
    this._flowLabelMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLabelMatchInput() {
    return this._flowLabelMatch;
  }

  // flow_label_value - computed: false, optional: true, required: false
  private _flowLabelValue?: number; 
  public get flowLabelValue() {
    return this.getNumberAttribute('flow_label_value');
  }
  public set flowLabelValue(value: number) {
    this._flowLabelValue = value;
  }
  public resetFlowLabelValue() {
    this._flowLabelValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLabelValueInput() {
    return this._flowLabelValue;
  }

  // hop_limit_match - computed: false, optional: true, required: false
  private _hopLimitMatch?: string; 
  public get hopLimitMatch() {
    return this.getStringAttribute('hop_limit_match');
  }
  public set hopLimitMatch(value: string) {
    this._hopLimitMatch = value;
  }
  public resetHopLimitMatch() {
    this._hopLimitMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopLimitMatchInput() {
    return this._hopLimitMatch;
  }

  // hop_limit_value - computed: false, optional: true, required: false
  private _hopLimitValue?: number; 
  public get hopLimitValue() {
    return this.getNumberAttribute('hop_limit_value');
  }
  public set hopLimitValue(value: number) {
    this._hopLimitValue = value;
  }
  public resetHopLimitValue() {
    this._hopLimitValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopLimitValueInput() {
    return this._hopLimitValue;
  }

  // next_header_match - computed: false, optional: true, required: false
  private _nextHeaderMatch?: string; 
  public get nextHeaderMatch() {
    return this.getStringAttribute('next_header_match');
  }
  public set nextHeaderMatch(value: string) {
    this._nextHeaderMatch = value;
  }
  public resetNextHeaderMatch() {
    this._nextHeaderMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHeaderMatchInput() {
    return this._nextHeaderMatch;
  }

  // next_header_value - computed: false, optional: true, required: false
  private _nextHeaderValue?: number; 
  public get nextHeaderValue() {
    return this.getNumberAttribute('next_header_value');
  }
  public set nextHeaderValue(value: number) {
    this._nextHeaderValue = value;
  }
  public resetNextHeaderValue() {
    this._nextHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHeaderValueInput() {
    return this._nextHeaderValue;
  }

  // payload_length_match - computed: false, optional: true, required: false
  private _payloadLengthMatch?: string; 
  public get payloadLengthMatch() {
    return this.getStringAttribute('payload_length_match');
  }
  public set payloadLengthMatch(value: string) {
    this._payloadLengthMatch = value;
  }
  public resetPayloadLengthMatch() {
    this._payloadLengthMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadLengthMatchInput() {
    return this._payloadLengthMatch;
  }

  // payload_length_value - computed: false, optional: true, required: false
  private _payloadLengthValue?: number; 
  public get payloadLengthValue() {
    return this.getNumberAttribute('payload_length_value');
  }
  public set payloadLengthValue(value: number) {
    this._payloadLengthValue = value;
  }
  public resetPayloadLengthValue() {
    this._payloadLengthValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadLengthValueInput() {
    return this._payloadLengthValue;
  }

  // source_match - computed: false, optional: true, required: false
  private _sourceMatch?: string; 
  public get sourceMatch() {
    return this.getStringAttribute('source_match');
  }
  public set sourceMatch(value: string) {
    this._sourceMatch = value;
  }
  public resetSourceMatch() {
    this._sourceMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMatchInput() {
    return this._sourceMatch;
  }

  // source_value - computed: false, optional: true, required: false
  private _sourceValue?: string; 
  public get sourceValue() {
    return this.getStringAttribute('source_value');
  }
  public set sourceValue(value: string) {
    this._sourceValue = value;
  }
  public resetSourceValue() {
    this._sourceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceValueInput() {
    return this._sourceValue;
  }

  // traffic_class_match - computed: false, optional: true, required: false
  private _trafficClassMatch?: string; 
  public get trafficClassMatch() {
    return this.getStringAttribute('traffic_class_match');
  }
  public set trafficClassMatch(value: string) {
    this._trafficClassMatch = value;
  }
  public resetTrafficClassMatch() {
    this._trafficClassMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassMatchInput() {
    return this._trafficClassMatch;
  }

  // traffic_class_value - computed: false, optional: true, required: false
  private _trafficClassValue?: number; 
  public get trafficClassValue() {
    return this.getNumberAttribute('traffic_class_value');
  }
  public set trafficClassValue(value: number) {
    this._trafficClassValue = value;
  }
  public resetTrafficClassValue() {
    this._trafficClassValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassValueInput() {
    return this._trafficClassValue;
  }
}
export interface SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolTcp {
  /**
  * Condition for acknowledgement number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#ack_number_match SecurityIdpCustomAttack#ack_number_match}
  */
  readonly ackNumberMatch?: string;
  /**
  *  Value for acknowledgement number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#ack_number_value SecurityIdpCustomAttack#ack_number_value}
  */
  readonly ackNumberValue?: number;
  /**
  * Condition for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_match SecurityIdpCustomAttack#checksum_validate_match}
  */
  readonly checksumValidateMatch?: string;
  /**
  * Value for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_value SecurityIdpCustomAttack#checksum_validate_value}
  */
  readonly checksumValidateValue?: number;
  /**
  * Condition for size of IP datagram subtracted by TCP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_match SecurityIdpCustomAttack#data_length_match}
  */
  readonly dataLengthMatch?: string;
  /**
  * Value for size of IP datagram subtracted by TCP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_value SecurityIdpCustomAttack#data_length_value}
  */
  readonly dataLengthValue?: number;
  /**
  * Condition for destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_port_match SecurityIdpCustomAttack#destination_port_match}
  */
  readonly destinationPortMatch?: string;
  /**
  * Value for destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_port_value SecurityIdpCustomAttack#destination_port_value}
  */
  readonly destinationPortValue?: number;
  /**
  * Condition for header length in words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#header_length_match SecurityIdpCustomAttack#header_length_match}
  */
  readonly headerLengthMatch?: string;
  /**
  * Value for header length in words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#header_length_value SecurityIdpCustomAttack#header_length_value}
  */
  readonly headerLengthValue?: number;
  /**
  * Condition for maximum segment size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#mss_match SecurityIdpCustomAttack#mss_match}
  */
  readonly mssMatch?: string;
  /**
  * Value for maximum segment size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#mss_value SecurityIdpCustomAttack#mss_value}
  */
  readonly mssValue?: number;
  /**
  * Condition for kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#option_match SecurityIdpCustomAttack#option_match}
  */
  readonly optionMatch?: string;
  /**
  * Value for kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#option_value SecurityIdpCustomAttack#option_value}
  */
  readonly optionValue?: number;
  /**
  * Condition for three reserved bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#reserved_match SecurityIdpCustomAttack#reserved_match}
  */
  readonly reservedMatch?: string;
  /**
  * Value for three reserved bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#reserved_value SecurityIdpCustomAttack#reserved_value}
  */
  readonly reservedValue?: number;
  /**
  * Condition for sequence number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#sequence_number_match SecurityIdpCustomAttack#sequence_number_match}
  */
  readonly sequenceNumberMatch?: string;
  /**
  * Value for sequence number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#sequence_number_value SecurityIdpCustomAttack#sequence_number_value}
  */
  readonly sequenceNumberValue?: number;
  /**
  * Condition for source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_port_match SecurityIdpCustomAttack#source_port_match}
  */
  readonly sourcePortMatch?: string;
  /**
  * Value for source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_port_value SecurityIdpCustomAttack#source_port_value}
  */
  readonly sourcePortValue?: number;
  /**
  * TCP header flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#tcp_flags SecurityIdpCustomAttack#tcp_flags}
  */
  readonly tcpFlags?: string[];
  /**
  * Condition for urgent pointer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#urgent_pointer_match SecurityIdpCustomAttack#urgent_pointer_match}
  */
  readonly urgentPointerMatch?: string;
  /**
  * Value for urgent pointer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#urgent_pointer_value SecurityIdpCustomAttack#urgent_pointer_value}
  */
  readonly urgentPointerValue?: number;
  /**
  * Condition for window scale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#window_scale_match SecurityIdpCustomAttack#window_scale_match}
  */
  readonly windowScaleMatch?: string;
  /**
  * Value for sindow scale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#window_scale_value SecurityIdpCustomAttack#window_scale_value}
  */
  readonly windowScaleValue?: number;
  /**
  * Condition for window size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#window_size_match SecurityIdpCustomAttack#window_size_match}
  */
  readonly windowSizeMatch?: string;
  /**
  * Value for window size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#window_size_value SecurityIdpCustomAttack#window_size_value}
  */
  readonly windowSizeValue?: number;
}

export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolTcpToTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_number_match: cdktf.stringToTerraform(struct!.ackNumberMatch),
    ack_number_value: cdktf.numberToTerraform(struct!.ackNumberValue),
    checksum_validate_match: cdktf.stringToTerraform(struct!.checksumValidateMatch),
    checksum_validate_value: cdktf.numberToTerraform(struct!.checksumValidateValue),
    data_length_match: cdktf.stringToTerraform(struct!.dataLengthMatch),
    data_length_value: cdktf.numberToTerraform(struct!.dataLengthValue),
    destination_port_match: cdktf.stringToTerraform(struct!.destinationPortMatch),
    destination_port_value: cdktf.numberToTerraform(struct!.destinationPortValue),
    header_length_match: cdktf.stringToTerraform(struct!.headerLengthMatch),
    header_length_value: cdktf.numberToTerraform(struct!.headerLengthValue),
    mss_match: cdktf.stringToTerraform(struct!.mssMatch),
    mss_value: cdktf.numberToTerraform(struct!.mssValue),
    option_match: cdktf.stringToTerraform(struct!.optionMatch),
    option_value: cdktf.numberToTerraform(struct!.optionValue),
    reserved_match: cdktf.stringToTerraform(struct!.reservedMatch),
    reserved_value: cdktf.numberToTerraform(struct!.reservedValue),
    sequence_number_match: cdktf.stringToTerraform(struct!.sequenceNumberMatch),
    sequence_number_value: cdktf.numberToTerraform(struct!.sequenceNumberValue),
    source_port_match: cdktf.stringToTerraform(struct!.sourcePortMatch),
    source_port_value: cdktf.numberToTerraform(struct!.sourcePortValue),
    tcp_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tcpFlags),
    urgent_pointer_match: cdktf.stringToTerraform(struct!.urgentPointerMatch),
    urgent_pointer_value: cdktf.numberToTerraform(struct!.urgentPointerValue),
    window_scale_match: cdktf.stringToTerraform(struct!.windowScaleMatch),
    window_scale_value: cdktf.numberToTerraform(struct!.windowScaleValue),
    window_size_match: cdktf.stringToTerraform(struct!.windowSizeMatch),
    window_size_value: cdktf.numberToTerraform(struct!.windowSizeValue),
  }
}


export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolTcpToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_number_match: {
      value: cdktf.stringToHclTerraform(struct!.ackNumberMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ack_number_value: {
      value: cdktf.numberToHclTerraform(struct!.ackNumberValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    checksum_validate_match: {
      value: cdktf.stringToHclTerraform(struct!.checksumValidateMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum_validate_value: {
      value: cdktf.numberToHclTerraform(struct!.checksumValidateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_length_match: {
      value: cdktf.stringToHclTerraform(struct!.dataLengthMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_length_value: {
      value: cdktf.numberToHclTerraform(struct!.dataLengthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_port_match: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_value: {
      value: cdktf.numberToHclTerraform(struct!.destinationPortValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_length_match: {
      value: cdktf.stringToHclTerraform(struct!.headerLengthMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_length_value: {
      value: cdktf.numberToHclTerraform(struct!.headerLengthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mss_match: {
      value: cdktf.stringToHclTerraform(struct!.mssMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mss_value: {
      value: cdktf.numberToHclTerraform(struct!.mssValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    option_match: {
      value: cdktf.stringToHclTerraform(struct!.optionMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_value: {
      value: cdktf.numberToHclTerraform(struct!.optionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reserved_match: {
      value: cdktf.stringToHclTerraform(struct!.reservedMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_value: {
      value: cdktf.numberToHclTerraform(struct!.reservedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_number_match: {
      value: cdktf.stringToHclTerraform(struct!.sequenceNumberMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_number_value: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumberValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port_match: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_value: {
      value: cdktf.numberToHclTerraform(struct!.sourcePortValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tcpFlags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    urgent_pointer_match: {
      value: cdktf.stringToHclTerraform(struct!.urgentPointerMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgent_pointer_value: {
      value: cdktf.numberToHclTerraform(struct!.urgentPointerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_scale_match: {
      value: cdktf.stringToHclTerraform(struct!.windowScaleMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_scale_value: {
      value: cdktf.numberToHclTerraform(struct!.windowScaleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_size_match: {
      value: cdktf.stringToHclTerraform(struct!.windowSizeMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_size_value: {
      value: cdktf.numberToHclTerraform(struct!.windowSizeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackNumberMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackNumberMatch = this._ackNumberMatch;
    }
    if (this._ackNumberValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackNumberValue = this._ackNumberValue;
    }
    if (this._checksumValidateMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateMatch = this._checksumValidateMatch;
    }
    if (this._checksumValidateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateValue = this._checksumValidateValue;
    }
    if (this._dataLengthMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthMatch = this._dataLengthMatch;
    }
    if (this._dataLengthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthValue = this._dataLengthValue;
    }
    if (this._destinationPortMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortMatch = this._destinationPortMatch;
    }
    if (this._destinationPortValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortValue = this._destinationPortValue;
    }
    if (this._headerLengthMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerLengthMatch = this._headerLengthMatch;
    }
    if (this._headerLengthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerLengthValue = this._headerLengthValue;
    }
    if (this._mssMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssMatch = this._mssMatch;
    }
    if (this._mssValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssValue = this._mssValue;
    }
    if (this._optionMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionMatch = this._optionMatch;
    }
    if (this._optionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionValue = this._optionValue;
    }
    if (this._reservedMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedMatch = this._reservedMatch;
    }
    if (this._reservedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedValue = this._reservedValue;
    }
    if (this._sequenceNumberMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumberMatch = this._sequenceNumberMatch;
    }
    if (this._sequenceNumberValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumberValue = this._sequenceNumberValue;
    }
    if (this._sourcePortMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortMatch = this._sourcePortMatch;
    }
    if (this._sourcePortValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortValue = this._sourcePortValue;
    }
    if (this._tcpFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFlags = this._tcpFlags;
    }
    if (this._urgentPointerMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgentPointerMatch = this._urgentPointerMatch;
    }
    if (this._urgentPointerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgentPointerValue = this._urgentPointerValue;
    }
    if (this._windowScaleMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowScaleMatch = this._windowScaleMatch;
    }
    if (this._windowScaleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowScaleValue = this._windowScaleValue;
    }
    if (this._windowSizeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSizeMatch = this._windowSizeMatch;
    }
    if (this._windowSizeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSizeValue = this._windowSizeValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ackNumberMatch = undefined;
      this._ackNumberValue = undefined;
      this._checksumValidateMatch = undefined;
      this._checksumValidateValue = undefined;
      this._dataLengthMatch = undefined;
      this._dataLengthValue = undefined;
      this._destinationPortMatch = undefined;
      this._destinationPortValue = undefined;
      this._headerLengthMatch = undefined;
      this._headerLengthValue = undefined;
      this._mssMatch = undefined;
      this._mssValue = undefined;
      this._optionMatch = undefined;
      this._optionValue = undefined;
      this._reservedMatch = undefined;
      this._reservedValue = undefined;
      this._sequenceNumberMatch = undefined;
      this._sequenceNumberValue = undefined;
      this._sourcePortMatch = undefined;
      this._sourcePortValue = undefined;
      this._tcpFlags = undefined;
      this._urgentPointerMatch = undefined;
      this._urgentPointerValue = undefined;
      this._windowScaleMatch = undefined;
      this._windowScaleValue = undefined;
      this._windowSizeMatch = undefined;
      this._windowSizeValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ackNumberMatch = value.ackNumberMatch;
      this._ackNumberValue = value.ackNumberValue;
      this._checksumValidateMatch = value.checksumValidateMatch;
      this._checksumValidateValue = value.checksumValidateValue;
      this._dataLengthMatch = value.dataLengthMatch;
      this._dataLengthValue = value.dataLengthValue;
      this._destinationPortMatch = value.destinationPortMatch;
      this._destinationPortValue = value.destinationPortValue;
      this._headerLengthMatch = value.headerLengthMatch;
      this._headerLengthValue = value.headerLengthValue;
      this._mssMatch = value.mssMatch;
      this._mssValue = value.mssValue;
      this._optionMatch = value.optionMatch;
      this._optionValue = value.optionValue;
      this._reservedMatch = value.reservedMatch;
      this._reservedValue = value.reservedValue;
      this._sequenceNumberMatch = value.sequenceNumberMatch;
      this._sequenceNumberValue = value.sequenceNumberValue;
      this._sourcePortMatch = value.sourcePortMatch;
      this._sourcePortValue = value.sourcePortValue;
      this._tcpFlags = value.tcpFlags;
      this._urgentPointerMatch = value.urgentPointerMatch;
      this._urgentPointerValue = value.urgentPointerValue;
      this._windowScaleMatch = value.windowScaleMatch;
      this._windowScaleValue = value.windowScaleValue;
      this._windowSizeMatch = value.windowSizeMatch;
      this._windowSizeValue = value.windowSizeValue;
    }
  }

  // ack_number_match - computed: false, optional: true, required: false
  private _ackNumberMatch?: string; 
  public get ackNumberMatch() {
    return this.getStringAttribute('ack_number_match');
  }
  public set ackNumberMatch(value: string) {
    this._ackNumberMatch = value;
  }
  public resetAckNumberMatch() {
    this._ackNumberMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackNumberMatchInput() {
    return this._ackNumberMatch;
  }

  // ack_number_value - computed: false, optional: true, required: false
  private _ackNumberValue?: number; 
  public get ackNumberValue() {
    return this.getNumberAttribute('ack_number_value');
  }
  public set ackNumberValue(value: number) {
    this._ackNumberValue = value;
  }
  public resetAckNumberValue() {
    this._ackNumberValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackNumberValueInput() {
    return this._ackNumberValue;
  }

  // checksum_validate_match - computed: false, optional: true, required: false
  private _checksumValidateMatch?: string; 
  public get checksumValidateMatch() {
    return this.getStringAttribute('checksum_validate_match');
  }
  public set checksumValidateMatch(value: string) {
    this._checksumValidateMatch = value;
  }
  public resetChecksumValidateMatch() {
    this._checksumValidateMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateMatchInput() {
    return this._checksumValidateMatch;
  }

  // checksum_validate_value - computed: false, optional: true, required: false
  private _checksumValidateValue?: number; 
  public get checksumValidateValue() {
    return this.getNumberAttribute('checksum_validate_value');
  }
  public set checksumValidateValue(value: number) {
    this._checksumValidateValue = value;
  }
  public resetChecksumValidateValue() {
    this._checksumValidateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateValueInput() {
    return this._checksumValidateValue;
  }

  // data_length_match - computed: false, optional: true, required: false
  private _dataLengthMatch?: string; 
  public get dataLengthMatch() {
    return this.getStringAttribute('data_length_match');
  }
  public set dataLengthMatch(value: string) {
    this._dataLengthMatch = value;
  }
  public resetDataLengthMatch() {
    this._dataLengthMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthMatchInput() {
    return this._dataLengthMatch;
  }

  // data_length_value - computed: false, optional: true, required: false
  private _dataLengthValue?: number; 
  public get dataLengthValue() {
    return this.getNumberAttribute('data_length_value');
  }
  public set dataLengthValue(value: number) {
    this._dataLengthValue = value;
  }
  public resetDataLengthValue() {
    this._dataLengthValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthValueInput() {
    return this._dataLengthValue;
  }

  // destination_port_match - computed: false, optional: true, required: false
  private _destinationPortMatch?: string; 
  public get destinationPortMatch() {
    return this.getStringAttribute('destination_port_match');
  }
  public set destinationPortMatch(value: string) {
    this._destinationPortMatch = value;
  }
  public resetDestinationPortMatch() {
    this._destinationPortMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortMatchInput() {
    return this._destinationPortMatch;
  }

  // destination_port_value - computed: false, optional: true, required: false
  private _destinationPortValue?: number; 
  public get destinationPortValue() {
    return this.getNumberAttribute('destination_port_value');
  }
  public set destinationPortValue(value: number) {
    this._destinationPortValue = value;
  }
  public resetDestinationPortValue() {
    this._destinationPortValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortValueInput() {
    return this._destinationPortValue;
  }

  // header_length_match - computed: false, optional: true, required: false
  private _headerLengthMatch?: string; 
  public get headerLengthMatch() {
    return this.getStringAttribute('header_length_match');
  }
  public set headerLengthMatch(value: string) {
    this._headerLengthMatch = value;
  }
  public resetHeaderLengthMatch() {
    this._headerLengthMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerLengthMatchInput() {
    return this._headerLengthMatch;
  }

  // header_length_value - computed: false, optional: true, required: false
  private _headerLengthValue?: number; 
  public get headerLengthValue() {
    return this.getNumberAttribute('header_length_value');
  }
  public set headerLengthValue(value: number) {
    this._headerLengthValue = value;
  }
  public resetHeaderLengthValue() {
    this._headerLengthValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerLengthValueInput() {
    return this._headerLengthValue;
  }

  // mss_match - computed: false, optional: true, required: false
  private _mssMatch?: string; 
  public get mssMatch() {
    return this.getStringAttribute('mss_match');
  }
  public set mssMatch(value: string) {
    this._mssMatch = value;
  }
  public resetMssMatch() {
    this._mssMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssMatchInput() {
    return this._mssMatch;
  }

  // mss_value - computed: false, optional: true, required: false
  private _mssValue?: number; 
  public get mssValue() {
    return this.getNumberAttribute('mss_value');
  }
  public set mssValue(value: number) {
    this._mssValue = value;
  }
  public resetMssValue() {
    this._mssValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssValueInput() {
    return this._mssValue;
  }

  // option_match - computed: false, optional: true, required: false
  private _optionMatch?: string; 
  public get optionMatch() {
    return this.getStringAttribute('option_match');
  }
  public set optionMatch(value: string) {
    this._optionMatch = value;
  }
  public resetOptionMatch() {
    this._optionMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionMatchInput() {
    return this._optionMatch;
  }

  // option_value - computed: false, optional: true, required: false
  private _optionValue?: number; 
  public get optionValue() {
    return this.getNumberAttribute('option_value');
  }
  public set optionValue(value: number) {
    this._optionValue = value;
  }
  public resetOptionValue() {
    this._optionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValueInput() {
    return this._optionValue;
  }

  // reserved_match - computed: false, optional: true, required: false
  private _reservedMatch?: string; 
  public get reservedMatch() {
    return this.getStringAttribute('reserved_match');
  }
  public set reservedMatch(value: string) {
    this._reservedMatch = value;
  }
  public resetReservedMatch() {
    this._reservedMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedMatchInput() {
    return this._reservedMatch;
  }

  // reserved_value - computed: false, optional: true, required: false
  private _reservedValue?: number; 
  public get reservedValue() {
    return this.getNumberAttribute('reserved_value');
  }
  public set reservedValue(value: number) {
    this._reservedValue = value;
  }
  public resetReservedValue() {
    this._reservedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedValueInput() {
    return this._reservedValue;
  }

  // sequence_number_match - computed: false, optional: true, required: false
  private _sequenceNumberMatch?: string; 
  public get sequenceNumberMatch() {
    return this.getStringAttribute('sequence_number_match');
  }
  public set sequenceNumberMatch(value: string) {
    this._sequenceNumberMatch = value;
  }
  public resetSequenceNumberMatch() {
    this._sequenceNumberMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberMatchInput() {
    return this._sequenceNumberMatch;
  }

  // sequence_number_value - computed: false, optional: true, required: false
  private _sequenceNumberValue?: number; 
  public get sequenceNumberValue() {
    return this.getNumberAttribute('sequence_number_value');
  }
  public set sequenceNumberValue(value: number) {
    this._sequenceNumberValue = value;
  }
  public resetSequenceNumberValue() {
    this._sequenceNumberValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberValueInput() {
    return this._sequenceNumberValue;
  }

  // source_port_match - computed: false, optional: true, required: false
  private _sourcePortMatch?: string; 
  public get sourcePortMatch() {
    return this.getStringAttribute('source_port_match');
  }
  public set sourcePortMatch(value: string) {
    this._sourcePortMatch = value;
  }
  public resetSourcePortMatch() {
    this._sourcePortMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortMatchInput() {
    return this._sourcePortMatch;
  }

  // source_port_value - computed: false, optional: true, required: false
  private _sourcePortValue?: number; 
  public get sourcePortValue() {
    return this.getNumberAttribute('source_port_value');
  }
  public set sourcePortValue(value: number) {
    this._sourcePortValue = value;
  }
  public resetSourcePortValue() {
    this._sourcePortValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortValueInput() {
    return this._sourcePortValue;
  }

  // tcp_flags - computed: false, optional: true, required: false
  private _tcpFlags?: string[]; 
  public get tcpFlags() {
    return cdktf.Fn.tolist(this.getListAttribute('tcp_flags'));
  }
  public set tcpFlags(value: string[]) {
    this._tcpFlags = value;
  }
  public resetTcpFlags() {
    this._tcpFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagsInput() {
    return this._tcpFlags;
  }

  // urgent_pointer_match - computed: false, optional: true, required: false
  private _urgentPointerMatch?: string; 
  public get urgentPointerMatch() {
    return this.getStringAttribute('urgent_pointer_match');
  }
  public set urgentPointerMatch(value: string) {
    this._urgentPointerMatch = value;
  }
  public resetUrgentPointerMatch() {
    this._urgentPointerMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgentPointerMatchInput() {
    return this._urgentPointerMatch;
  }

  // urgent_pointer_value - computed: false, optional: true, required: false
  private _urgentPointerValue?: number; 
  public get urgentPointerValue() {
    return this.getNumberAttribute('urgent_pointer_value');
  }
  public set urgentPointerValue(value: number) {
    this._urgentPointerValue = value;
  }
  public resetUrgentPointerValue() {
    this._urgentPointerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgentPointerValueInput() {
    return this._urgentPointerValue;
  }

  // window_scale_match - computed: false, optional: true, required: false
  private _windowScaleMatch?: string; 
  public get windowScaleMatch() {
    return this.getStringAttribute('window_scale_match');
  }
  public set windowScaleMatch(value: string) {
    this._windowScaleMatch = value;
  }
  public resetWindowScaleMatch() {
    this._windowScaleMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowScaleMatchInput() {
    return this._windowScaleMatch;
  }

  // window_scale_value - computed: false, optional: true, required: false
  private _windowScaleValue?: number; 
  public get windowScaleValue() {
    return this.getNumberAttribute('window_scale_value');
  }
  public set windowScaleValue(value: number) {
    this._windowScaleValue = value;
  }
  public resetWindowScaleValue() {
    this._windowScaleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowScaleValueInput() {
    return this._windowScaleValue;
  }

  // window_size_match - computed: false, optional: true, required: false
  private _windowSizeMatch?: string; 
  public get windowSizeMatch() {
    return this.getStringAttribute('window_size_match');
  }
  public set windowSizeMatch(value: string) {
    this._windowSizeMatch = value;
  }
  public resetWindowSizeMatch() {
    this._windowSizeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeMatchInput() {
    return this._windowSizeMatch;
  }

  // window_size_value - computed: false, optional: true, required: false
  private _windowSizeValue?: number; 
  public get windowSizeValue() {
    return this.getNumberAttribute('window_size_value');
  }
  public set windowSizeValue(value: number) {
    this._windowSizeValue = value;
  }
  public resetWindowSizeValue() {
    this._windowSizeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeValueInput() {
    return this._windowSizeValue;
  }
}
export interface SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolUdp {
  /**
  * Condition for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_match SecurityIdpCustomAttack#checksum_validate_match}
  */
  readonly checksumValidateMatch?: string;
  /**
  * Value for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_value SecurityIdpCustomAttack#checksum_validate_value}
  */
  readonly checksumValidateValue?: number;
  /**
  * Condition for size of IP datagram subtracted by UDP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_match SecurityIdpCustomAttack#data_length_match}
  */
  readonly dataLengthMatch?: string;
  /**
  * Value for size of IP datagram subtracted by UDP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_value SecurityIdpCustomAttack#data_length_value}
  */
  readonly dataLengthValue?: number;
  /**
  * Condition for destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_port_match SecurityIdpCustomAttack#destination_port_match}
  */
  readonly destinationPortMatch?: string;
  /**
  * Value for destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_port_value SecurityIdpCustomAttack#destination_port_value}
  */
  readonly destinationPortValue?: number;
  /**
  * Condition for source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_port_match SecurityIdpCustomAttack#source_port_match}
  */
  readonly sourcePortMatch?: string;
  /**
  * Value for source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_port_value SecurityIdpCustomAttack#source_port_value}
  */
  readonly sourcePortValue?: number;
}

export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolUdpToTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum_validate_match: cdktf.stringToTerraform(struct!.checksumValidateMatch),
    checksum_validate_value: cdktf.numberToTerraform(struct!.checksumValidateValue),
    data_length_match: cdktf.stringToTerraform(struct!.dataLengthMatch),
    data_length_value: cdktf.numberToTerraform(struct!.dataLengthValue),
    destination_port_match: cdktf.stringToTerraform(struct!.destinationPortMatch),
    destination_port_value: cdktf.numberToTerraform(struct!.destinationPortValue),
    source_port_match: cdktf.stringToTerraform(struct!.sourcePortMatch),
    source_port_value: cdktf.numberToTerraform(struct!.sourcePortValue),
  }
}


export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolUdpToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum_validate_match: {
      value: cdktf.stringToHclTerraform(struct!.checksumValidateMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum_validate_value: {
      value: cdktf.numberToHclTerraform(struct!.checksumValidateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_length_match: {
      value: cdktf.stringToHclTerraform(struct!.dataLengthMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_length_value: {
      value: cdktf.numberToHclTerraform(struct!.dataLengthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_port_match: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_value: {
      value: cdktf.numberToHclTerraform(struct!.destinationPortValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port_match: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_value: {
      value: cdktf.numberToHclTerraform(struct!.sourcePortValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolUdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksumValidateMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateMatch = this._checksumValidateMatch;
    }
    if (this._checksumValidateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateValue = this._checksumValidateValue;
    }
    if (this._dataLengthMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthMatch = this._dataLengthMatch;
    }
    if (this._dataLengthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthValue = this._dataLengthValue;
    }
    if (this._destinationPortMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortMatch = this._destinationPortMatch;
    }
    if (this._destinationPortValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortValue = this._destinationPortValue;
    }
    if (this._sourcePortMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortMatch = this._sourcePortMatch;
    }
    if (this._sourcePortValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortValue = this._sourcePortValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolUdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = undefined;
      this._checksumValidateValue = undefined;
      this._dataLengthMatch = undefined;
      this._dataLengthValue = undefined;
      this._destinationPortMatch = undefined;
      this._destinationPortValue = undefined;
      this._sourcePortMatch = undefined;
      this._sourcePortValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = value.checksumValidateMatch;
      this._checksumValidateValue = value.checksumValidateValue;
      this._dataLengthMatch = value.dataLengthMatch;
      this._dataLengthValue = value.dataLengthValue;
      this._destinationPortMatch = value.destinationPortMatch;
      this._destinationPortValue = value.destinationPortValue;
      this._sourcePortMatch = value.sourcePortMatch;
      this._sourcePortValue = value.sourcePortValue;
    }
  }

  // checksum_validate_match - computed: false, optional: true, required: false
  private _checksumValidateMatch?: string; 
  public get checksumValidateMatch() {
    return this.getStringAttribute('checksum_validate_match');
  }
  public set checksumValidateMatch(value: string) {
    this._checksumValidateMatch = value;
  }
  public resetChecksumValidateMatch() {
    this._checksumValidateMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateMatchInput() {
    return this._checksumValidateMatch;
  }

  // checksum_validate_value - computed: false, optional: true, required: false
  private _checksumValidateValue?: number; 
  public get checksumValidateValue() {
    return this.getNumberAttribute('checksum_validate_value');
  }
  public set checksumValidateValue(value: number) {
    this._checksumValidateValue = value;
  }
  public resetChecksumValidateValue() {
    this._checksumValidateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateValueInput() {
    return this._checksumValidateValue;
  }

  // data_length_match - computed: false, optional: true, required: false
  private _dataLengthMatch?: string; 
  public get dataLengthMatch() {
    return this.getStringAttribute('data_length_match');
  }
  public set dataLengthMatch(value: string) {
    this._dataLengthMatch = value;
  }
  public resetDataLengthMatch() {
    this._dataLengthMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthMatchInput() {
    return this._dataLengthMatch;
  }

  // data_length_value - computed: false, optional: true, required: false
  private _dataLengthValue?: number; 
  public get dataLengthValue() {
    return this.getNumberAttribute('data_length_value');
  }
  public set dataLengthValue(value: number) {
    this._dataLengthValue = value;
  }
  public resetDataLengthValue() {
    this._dataLengthValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthValueInput() {
    return this._dataLengthValue;
  }

  // destination_port_match - computed: false, optional: true, required: false
  private _destinationPortMatch?: string; 
  public get destinationPortMatch() {
    return this.getStringAttribute('destination_port_match');
  }
  public set destinationPortMatch(value: string) {
    this._destinationPortMatch = value;
  }
  public resetDestinationPortMatch() {
    this._destinationPortMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortMatchInput() {
    return this._destinationPortMatch;
  }

  // destination_port_value - computed: false, optional: true, required: false
  private _destinationPortValue?: number; 
  public get destinationPortValue() {
    return this.getNumberAttribute('destination_port_value');
  }
  public set destinationPortValue(value: number) {
    this._destinationPortValue = value;
  }
  public resetDestinationPortValue() {
    this._destinationPortValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortValueInput() {
    return this._destinationPortValue;
  }

  // source_port_match - computed: false, optional: true, required: false
  private _sourcePortMatch?: string; 
  public get sourcePortMatch() {
    return this.getStringAttribute('source_port_match');
  }
  public set sourcePortMatch(value: string) {
    this._sourcePortMatch = value;
  }
  public resetSourcePortMatch() {
    this._sourcePortMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortMatchInput() {
    return this._sourcePortMatch;
  }

  // source_port_value - computed: false, optional: true, required: false
  private _sourcePortValue?: number; 
  public get sourcePortValue() {
    return this.getNumberAttribute('source_port_value');
  }
  public set sourcePortValue(value: number) {
    this._sourcePortValue = value;
  }
  public resetSourcePortValue() {
    this._sourcePortValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortValueInput() {
    return this._sourcePortValue;
  }
}
export interface SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignature {
  /**
  * Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#context SecurityIdpCustomAttack#context}
  */
  readonly context?: string;
  /**
  * Connection direction of the attack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#direction SecurityIdpCustomAttack#direction}
  */
  readonly direction?: string;
  /**
  * Trigger the attack if condition is not met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#negate SecurityIdpCustomAttack#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Pattern is the signature of the attack you want to detect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#pattern SecurityIdpCustomAttack#pattern}
  */
  readonly pattern?: string;
  /**
  * Attack signature pattern in PCRE format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#pattern_pcre SecurityIdpCustomAttack#pattern_pcre}
  */
  readonly patternPcre?: string;
  /**
  * Regular expression used for matching repetition of patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#regexp SecurityIdpCustomAttack#regexp}
  */
  readonly regexp?: string;
  /**
  * Specify shellcode flag for this attack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#shellcode SecurityIdpCustomAttack#shellcode}
  */
  readonly shellcode?: string;
  /**
  * protocol_icmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_icmp SecurityIdpCustomAttack#protocol_icmp}
  */
  readonly protocolIcmp?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmp;
  /**
  * protocol_icmpv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_icmpv6 SecurityIdpCustomAttack#protocol_icmpv6}
  */
  readonly protocolIcmpv6?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpv6;
  /**
  * protocol_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_ipv4 SecurityIdpCustomAttack#protocol_ipv4}
  */
  readonly protocolIpv4?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv4;
  /**
  * protocol_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_ipv6 SecurityIdpCustomAttack#protocol_ipv6}
  */
  readonly protocolIpv6?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv6;
  /**
  * protocol_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_tcp SecurityIdpCustomAttack#protocol_tcp}
  */
  readonly protocolTcp?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolTcp;
  /**
  * protocol_udp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_udp SecurityIdpCustomAttack#protocol_udp}
  */
  readonly protocolUdp?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolUdp;
}

export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureToTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    direction: cdktf.stringToTerraform(struct!.direction),
    negate: cdktf.booleanToTerraform(struct!.negate),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    pattern_pcre: cdktf.stringToTerraform(struct!.patternPcre),
    regexp: cdktf.stringToTerraform(struct!.regexp),
    shellcode: cdktf.stringToTerraform(struct!.shellcode),
    protocol_icmp: securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpToTerraform(struct!.protocolIcmp),
    protocol_icmpv6: securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpv6ToTerraform(struct!.protocolIcmpv6),
    protocol_ipv4: securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv4ToTerraform(struct!.protocolIpv4),
    protocol_ipv6: securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv6ToTerraform(struct!.protocolIpv6),
    protocol_tcp: securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolTcpToTerraform(struct!.protocolTcp),
    protocol_udp: securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolUdpToTerraform(struct!.protocolUdp),
  }
}


export function securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_pcre: {
      value: cdktf.stringToHclTerraform(struct!.patternPcre),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shellcode: {
      value: cdktf.stringToHclTerraform(struct!.shellcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_icmp: {
      value: securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpToHclTerraform(struct!.protocolIcmp),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmp",
    },
    protocol_icmpv6: {
      value: securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpv6ToHclTerraform(struct!.protocolIcmpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpv6",
    },
    protocol_ipv4: {
      value: securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv4ToHclTerraform(struct!.protocolIpv4),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv4",
    },
    protocol_ipv6: {
      value: securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv6ToHclTerraform(struct!.protocolIpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv6",
    },
    protocol_tcp: {
      value: securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolTcpToHclTerraform(struct!.protocolTcp),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolTcp",
    },
    protocol_udp: {
      value: securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolUdpToHclTerraform(struct!.protocolUdp),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolUdp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._patternPcre !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternPcre = this._patternPcre;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._shellcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.shellcode = this._shellcode;
    }
    if (this._protocolIcmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolIcmp = this._protocolIcmp?.internalValue;
    }
    if (this._protocolIcmpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolIcmpv6 = this._protocolIcmpv6?.internalValue;
    }
    if (this._protocolIpv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolIpv4 = this._protocolIpv4?.internalValue;
    }
    if (this._protocolIpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolIpv6 = this._protocolIpv6?.internalValue;
    }
    if (this._protocolTcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolTcp = this._protocolTcp?.internalValue;
    }
    if (this._protocolUdp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolUdp = this._protocolUdp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._direction = undefined;
      this._negate = undefined;
      this._pattern = undefined;
      this._patternPcre = undefined;
      this._regexp = undefined;
      this._shellcode = undefined;
      this._protocolIcmp.internalValue = undefined;
      this._protocolIcmpv6.internalValue = undefined;
      this._protocolIpv4.internalValue = undefined;
      this._protocolIpv6.internalValue = undefined;
      this._protocolTcp.internalValue = undefined;
      this._protocolUdp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._direction = value.direction;
      this._negate = value.negate;
      this._pattern = value.pattern;
      this._patternPcre = value.patternPcre;
      this._regexp = value.regexp;
      this._shellcode = value.shellcode;
      this._protocolIcmp.internalValue = value.protocolIcmp;
      this._protocolIcmpv6.internalValue = value.protocolIcmpv6;
      this._protocolIpv4.internalValue = value.protocolIpv4;
      this._protocolIpv6.internalValue = value.protocolIpv6;
      this._protocolTcp.internalValue = value.protocolTcp;
      this._protocolUdp.internalValue = value.protocolUdp;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // pattern_pcre - computed: false, optional: true, required: false
  private _patternPcre?: string; 
  public get patternPcre() {
    return this.getStringAttribute('pattern_pcre');
  }
  public set patternPcre(value: string) {
    this._patternPcre = value;
  }
  public resetPatternPcre() {
    this._patternPcre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternPcreInput() {
    return this._patternPcre;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // shellcode - computed: false, optional: true, required: false
  private _shellcode?: string; 
  public get shellcode() {
    return this.getStringAttribute('shellcode');
  }
  public set shellcode(value: string) {
    this._shellcode = value;
  }
  public resetShellcode() {
    this._shellcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellcodeInput() {
    return this._shellcode;
  }

  // protocol_icmp - computed: false, optional: true, required: false
  private _protocolIcmp = new SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpOutputReference(this, "protocol_icmp");
  public get protocolIcmp() {
    return this._protocolIcmp;
  }
  public putProtocolIcmp(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmp) {
    this._protocolIcmp.internalValue = value;
  }
  public resetProtocolIcmp() {
    this._protocolIcmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolIcmpInput() {
    return this._protocolIcmp.internalValue;
  }

  // protocol_icmpv6 - computed: false, optional: true, required: false
  private _protocolIcmpv6 = new SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpv6OutputReference(this, "protocol_icmpv6");
  public get protocolIcmpv6() {
    return this._protocolIcmpv6;
  }
  public putProtocolIcmpv6(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIcmpv6) {
    this._protocolIcmpv6.internalValue = value;
  }
  public resetProtocolIcmpv6() {
    this._protocolIcmpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolIcmpv6Input() {
    return this._protocolIcmpv6.internalValue;
  }

  // protocol_ipv4 - computed: false, optional: true, required: false
  private _protocolIpv4 = new SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv4OutputReference(this, "protocol_ipv4");
  public get protocolIpv4() {
    return this._protocolIpv4;
  }
  public putProtocolIpv4(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv4) {
    this._protocolIpv4.internalValue = value;
  }
  public resetProtocolIpv4() {
    this._protocolIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolIpv4Input() {
    return this._protocolIpv4.internalValue;
  }

  // protocol_ipv6 - computed: false, optional: true, required: false
  private _protocolIpv6 = new SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv6OutputReference(this, "protocol_ipv6");
  public get protocolIpv6() {
    return this._protocolIpv6;
  }
  public putProtocolIpv6(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolIpv6) {
    this._protocolIpv6.internalValue = value;
  }
  public resetProtocolIpv6() {
    this._protocolIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolIpv6Input() {
    return this._protocolIpv6.internalValue;
  }

  // protocol_tcp - computed: false, optional: true, required: false
  private _protocolTcp = new SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolTcpOutputReference(this, "protocol_tcp");
  public get protocolTcp() {
    return this._protocolTcp;
  }
  public putProtocolTcp(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolTcp) {
    this._protocolTcp.internalValue = value;
  }
  public resetProtocolTcp() {
    this._protocolTcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTcpInput() {
    return this._protocolTcp.internalValue;
  }

  // protocol_udp - computed: false, optional: true, required: false
  private _protocolUdp = new SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolUdpOutputReference(this, "protocol_udp");
  public get protocolUdp() {
    return this._protocolUdp;
  }
  public putProtocolUdp(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureProtocolUdp) {
    this._protocolUdp.internalValue = value;
  }
  public resetProtocolUdp() {
    this._protocolUdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolUdpInput() {
    return this._protocolUdp.internalValue;
  }
}
export interface SecurityIdpCustomAttackAttackTypeChainMember {
  /**
  * Custom attack name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#name SecurityIdpCustomAttack#name}
  */
  readonly name: string;
  /**
  * attack_type_anomaly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#attack_type_anomaly SecurityIdpCustomAttack#attack_type_anomaly}
  */
  readonly attackTypeAnomaly?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeAnomaly;
  /**
  * attack_type_signature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#attack_type_signature SecurityIdpCustomAttack#attack_type_signature}
  */
  readonly attackTypeSignature?: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignature;
}

export function securityIdpCustomAttackAttackTypeChainMemberToTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    attack_type_anomaly: securityIdpCustomAttackAttackTypeChainMemberAttackTypeAnomalyToTerraform(struct!.attackTypeAnomaly),
    attack_type_signature: securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureToTerraform(struct!.attackTypeSignature),
  }
}


export function securityIdpCustomAttackAttackTypeChainMemberToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeChainMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attack_type_anomaly: {
      value: securityIdpCustomAttackAttackTypeChainMemberAttackTypeAnomalyToHclTerraform(struct!.attackTypeAnomaly),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeAnomaly",
    },
    attack_type_signature: {
      value: securityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureToHclTerraform(struct!.attackTypeSignature),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignature",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeChainMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeChainMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._attackTypeAnomaly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackTypeAnomaly = this._attackTypeAnomaly?.internalValue;
    }
    if (this._attackTypeSignature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackTypeSignature = this._attackTypeSignature?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeChainMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._attackTypeAnomaly.internalValue = undefined;
      this._attackTypeSignature.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._attackTypeAnomaly.internalValue = value.attackTypeAnomaly;
      this._attackTypeSignature.internalValue = value.attackTypeSignature;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // attack_type_anomaly - computed: false, optional: true, required: false
  private _attackTypeAnomaly = new SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeAnomalyOutputReference(this, "attack_type_anomaly");
  public get attackTypeAnomaly() {
    return this._attackTypeAnomaly;
  }
  public putAttackTypeAnomaly(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeAnomaly) {
    this._attackTypeAnomaly.internalValue = value;
  }
  public resetAttackTypeAnomaly() {
    this._attackTypeAnomaly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackTypeAnomalyInput() {
    return this._attackTypeAnomaly.internalValue;
  }

  // attack_type_signature - computed: false, optional: true, required: false
  private _attackTypeSignature = new SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignatureOutputReference(this, "attack_type_signature");
  public get attackTypeSignature() {
    return this._attackTypeSignature;
  }
  public putAttackTypeSignature(value: SecurityIdpCustomAttackAttackTypeChainMemberAttackTypeSignature) {
    this._attackTypeSignature.internalValue = value;
  }
  public resetAttackTypeSignature() {
    this._attackTypeSignature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackTypeSignatureInput() {
    return this._attackTypeSignature.internalValue;
  }
}

export class SecurityIdpCustomAttackAttackTypeChainMemberList extends cdktf.ComplexList {
  public internalValue? : SecurityIdpCustomAttackAttackTypeChainMember[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityIdpCustomAttackAttackTypeChainMemberOutputReference {
    return new SecurityIdpCustomAttackAttackTypeChainMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityIdpCustomAttackAttackTypeChain {
  /**
  * Boolean Expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#expression SecurityIdpCustomAttack#expression}
  */
  readonly expression?: string;
  /**
  * Attacks should match in the order in which they are defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#order SecurityIdpCustomAttack#order}
  */
  readonly order?: boolean | cdktf.IResolvable;
  /**
  * Protocol binding over which attack will be detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_binding SecurityIdpCustomAttack#protocol_binding}
  */
  readonly protocolBinding?: string;
  /**
  * Repeat match should generate a new alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#reset SecurityIdpCustomAttack#reset}
  */
  readonly reset?: boolean | cdktf.IResolvable;
  /**
  * Scope of the attack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#scope SecurityIdpCustomAttack#scope}
  */
  readonly scope?: string;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#member SecurityIdpCustomAttack#member}
  */
  readonly member?: SecurityIdpCustomAttackAttackTypeChainMember[] | cdktf.IResolvable;
}

export function securityIdpCustomAttackAttackTypeChainToTerraform(struct?: SecurityIdpCustomAttackAttackTypeChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    order: cdktf.booleanToTerraform(struct!.order),
    protocol_binding: cdktf.stringToTerraform(struct!.protocolBinding),
    reset: cdktf.booleanToTerraform(struct!.reset),
    scope: cdktf.stringToTerraform(struct!.scope),
    member: cdktf.listMapper(securityIdpCustomAttackAttackTypeChainMemberToTerraform, true)(struct!.member),
  }
}


export function securityIdpCustomAttackAttackTypeChainToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.booleanToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol_binding: {
      value: cdktf.stringToHclTerraform(struct!.protocolBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset: {
      value: cdktf.booleanToHclTerraform(struct!.reset),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member: {
      value: cdktf.listMapperHcl(securityIdpCustomAttackAttackTypeChainMemberToHclTerraform, true)(struct!.member),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityIdpCustomAttackAttackTypeChainMemberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeChainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeChain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._protocolBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolBinding = this._protocolBinding;
    }
    if (this._reset !== undefined) {
      hasAnyValues = true;
      internalValueResult.reset = this._reset;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._member?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeChain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._order = undefined;
      this._protocolBinding = undefined;
      this._reset = undefined;
      this._scope = undefined;
      this._member.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._order = value.order;
      this._protocolBinding = value.protocolBinding;
      this._reset = value.reset;
      this._scope = value.scope;
      this._member.internalValue = value.member;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // order - computed: false, optional: true, required: false
  private _order?: boolean | cdktf.IResolvable; 
  public get order() {
    return this.getBooleanAttribute('order');
  }
  public set order(value: boolean | cdktf.IResolvable) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // protocol_binding - computed: false, optional: true, required: false
  private _protocolBinding?: string; 
  public get protocolBinding() {
    return this.getStringAttribute('protocol_binding');
  }
  public set protocolBinding(value: string) {
    this._protocolBinding = value;
  }
  public resetProtocolBinding() {
    this._protocolBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolBindingInput() {
    return this._protocolBinding;
  }

  // reset - computed: false, optional: true, required: false
  private _reset?: boolean | cdktf.IResolvable; 
  public get reset() {
    return this.getBooleanAttribute('reset');
  }
  public set reset(value: boolean | cdktf.IResolvable) {
    this._reset = value;
  }
  public resetReset() {
    this._reset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // member - computed: false, optional: true, required: false
  private _member = new SecurityIdpCustomAttackAttackTypeChainMemberList(this, "member", false);
  public get member() {
    return this._member;
  }
  public putMember(value: SecurityIdpCustomAttackAttackTypeChainMember[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }
}
export interface SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmp {
  /**
  * Condition for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_match SecurityIdpCustomAttack#checksum_validate_match}
  */
  readonly checksumValidateMatch?: string;
  /**
  * Value for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_value SecurityIdpCustomAttack#checksum_validate_value}
  */
  readonly checksumValidateValue?: number;
  /**
  * Condition for code field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#code_match SecurityIdpCustomAttack#code_match}
  */
  readonly codeMatch?: string;
  /**
  * Value for code field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#code_value SecurityIdpCustomAttack#code_value}
  */
  readonly codeValue?: number;
  /**
  * Condition for size of IP datagram subtracted by ICMP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_match SecurityIdpCustomAttack#data_length_match}
  */
  readonly dataLengthMatch?: string;
  /**
  * Value for size of IP datagram subtracted by ICMP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_value SecurityIdpCustomAttack#data_length_value}
  */
  readonly dataLengthValue?: number;
  /**
  * Condition for identifier in echo request/reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#identification_match SecurityIdpCustomAttack#identification_match}
  */
  readonly identificationMatch?: string;
  /**
  * Value for identifier in echo request/reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#identification_value SecurityIdpCustomAttack#identification_value}
  */
  readonly identificationValue?: number;
  /**
  * Condition for sequence number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#sequence_number_match SecurityIdpCustomAttack#sequence_number_match}
  */
  readonly sequenceNumberMatch?: string;
  /**
  * Value for sequence number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#sequence_number_value SecurityIdpCustomAttack#sequence_number_value}
  */
  readonly sequenceNumberValue?: number;
  /**
  * Condition for type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#type_match SecurityIdpCustomAttack#type_match}
  */
  readonly typeMatch?: string;
  /**
  * Value for type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#type_value SecurityIdpCustomAttack#type_value}
  */
  readonly typeValue?: number;
}

export function securityIdpCustomAttackAttackTypeSignatureProtocolIcmpToTerraform(struct?: SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum_validate_match: cdktf.stringToTerraform(struct!.checksumValidateMatch),
    checksum_validate_value: cdktf.numberToTerraform(struct!.checksumValidateValue),
    code_match: cdktf.stringToTerraform(struct!.codeMatch),
    code_value: cdktf.numberToTerraform(struct!.codeValue),
    data_length_match: cdktf.stringToTerraform(struct!.dataLengthMatch),
    data_length_value: cdktf.numberToTerraform(struct!.dataLengthValue),
    identification_match: cdktf.stringToTerraform(struct!.identificationMatch),
    identification_value: cdktf.numberToTerraform(struct!.identificationValue),
    sequence_number_match: cdktf.stringToTerraform(struct!.sequenceNumberMatch),
    sequence_number_value: cdktf.numberToTerraform(struct!.sequenceNumberValue),
    type_match: cdktf.stringToTerraform(struct!.typeMatch),
    type_value: cdktf.numberToTerraform(struct!.typeValue),
  }
}


export function securityIdpCustomAttackAttackTypeSignatureProtocolIcmpToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum_validate_match: {
      value: cdktf.stringToHclTerraform(struct!.checksumValidateMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum_validate_value: {
      value: cdktf.numberToHclTerraform(struct!.checksumValidateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_match: {
      value: cdktf.stringToHclTerraform(struct!.codeMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code_value: {
      value: cdktf.numberToHclTerraform(struct!.codeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_length_match: {
      value: cdktf.stringToHclTerraform(struct!.dataLengthMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_length_value: {
      value: cdktf.numberToHclTerraform(struct!.dataLengthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    identification_match: {
      value: cdktf.stringToHclTerraform(struct!.identificationMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identification_value: {
      value: cdktf.numberToHclTerraform(struct!.identificationValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_number_match: {
      value: cdktf.stringToHclTerraform(struct!.sequenceNumberMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_number_value: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumberValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_match: {
      value: cdktf.stringToHclTerraform(struct!.typeMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_value: {
      value: cdktf.numberToHclTerraform(struct!.typeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksumValidateMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateMatch = this._checksumValidateMatch;
    }
    if (this._checksumValidateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateValue = this._checksumValidateValue;
    }
    if (this._codeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeMatch = this._codeMatch;
    }
    if (this._codeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeValue = this._codeValue;
    }
    if (this._dataLengthMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthMatch = this._dataLengthMatch;
    }
    if (this._dataLengthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthValue = this._dataLengthValue;
    }
    if (this._identificationMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.identificationMatch = this._identificationMatch;
    }
    if (this._identificationValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identificationValue = this._identificationValue;
    }
    if (this._sequenceNumberMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumberMatch = this._sequenceNumberMatch;
    }
    if (this._sequenceNumberValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumberValue = this._sequenceNumberValue;
    }
    if (this._typeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeMatch = this._typeMatch;
    }
    if (this._typeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeValue = this._typeValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = undefined;
      this._checksumValidateValue = undefined;
      this._codeMatch = undefined;
      this._codeValue = undefined;
      this._dataLengthMatch = undefined;
      this._dataLengthValue = undefined;
      this._identificationMatch = undefined;
      this._identificationValue = undefined;
      this._sequenceNumberMatch = undefined;
      this._sequenceNumberValue = undefined;
      this._typeMatch = undefined;
      this._typeValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = value.checksumValidateMatch;
      this._checksumValidateValue = value.checksumValidateValue;
      this._codeMatch = value.codeMatch;
      this._codeValue = value.codeValue;
      this._dataLengthMatch = value.dataLengthMatch;
      this._dataLengthValue = value.dataLengthValue;
      this._identificationMatch = value.identificationMatch;
      this._identificationValue = value.identificationValue;
      this._sequenceNumberMatch = value.sequenceNumberMatch;
      this._sequenceNumberValue = value.sequenceNumberValue;
      this._typeMatch = value.typeMatch;
      this._typeValue = value.typeValue;
    }
  }

  // checksum_validate_match - computed: false, optional: true, required: false
  private _checksumValidateMatch?: string; 
  public get checksumValidateMatch() {
    return this.getStringAttribute('checksum_validate_match');
  }
  public set checksumValidateMatch(value: string) {
    this._checksumValidateMatch = value;
  }
  public resetChecksumValidateMatch() {
    this._checksumValidateMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateMatchInput() {
    return this._checksumValidateMatch;
  }

  // checksum_validate_value - computed: false, optional: true, required: false
  private _checksumValidateValue?: number; 
  public get checksumValidateValue() {
    return this.getNumberAttribute('checksum_validate_value');
  }
  public set checksumValidateValue(value: number) {
    this._checksumValidateValue = value;
  }
  public resetChecksumValidateValue() {
    this._checksumValidateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateValueInput() {
    return this._checksumValidateValue;
  }

  // code_match - computed: false, optional: true, required: false
  private _codeMatch?: string; 
  public get codeMatch() {
    return this.getStringAttribute('code_match');
  }
  public set codeMatch(value: string) {
    this._codeMatch = value;
  }
  public resetCodeMatch() {
    this._codeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeMatchInput() {
    return this._codeMatch;
  }

  // code_value - computed: false, optional: true, required: false
  private _codeValue?: number; 
  public get codeValue() {
    return this.getNumberAttribute('code_value');
  }
  public set codeValue(value: number) {
    this._codeValue = value;
  }
  public resetCodeValue() {
    this._codeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeValueInput() {
    return this._codeValue;
  }

  // data_length_match - computed: false, optional: true, required: false
  private _dataLengthMatch?: string; 
  public get dataLengthMatch() {
    return this.getStringAttribute('data_length_match');
  }
  public set dataLengthMatch(value: string) {
    this._dataLengthMatch = value;
  }
  public resetDataLengthMatch() {
    this._dataLengthMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthMatchInput() {
    return this._dataLengthMatch;
  }

  // data_length_value - computed: false, optional: true, required: false
  private _dataLengthValue?: number; 
  public get dataLengthValue() {
    return this.getNumberAttribute('data_length_value');
  }
  public set dataLengthValue(value: number) {
    this._dataLengthValue = value;
  }
  public resetDataLengthValue() {
    this._dataLengthValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthValueInput() {
    return this._dataLengthValue;
  }

  // identification_match - computed: false, optional: true, required: false
  private _identificationMatch?: string; 
  public get identificationMatch() {
    return this.getStringAttribute('identification_match');
  }
  public set identificationMatch(value: string) {
    this._identificationMatch = value;
  }
  public resetIdentificationMatch() {
    this._identificationMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationMatchInput() {
    return this._identificationMatch;
  }

  // identification_value - computed: false, optional: true, required: false
  private _identificationValue?: number; 
  public get identificationValue() {
    return this.getNumberAttribute('identification_value');
  }
  public set identificationValue(value: number) {
    this._identificationValue = value;
  }
  public resetIdentificationValue() {
    this._identificationValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationValueInput() {
    return this._identificationValue;
  }

  // sequence_number_match - computed: false, optional: true, required: false
  private _sequenceNumberMatch?: string; 
  public get sequenceNumberMatch() {
    return this.getStringAttribute('sequence_number_match');
  }
  public set sequenceNumberMatch(value: string) {
    this._sequenceNumberMatch = value;
  }
  public resetSequenceNumberMatch() {
    this._sequenceNumberMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberMatchInput() {
    return this._sequenceNumberMatch;
  }

  // sequence_number_value - computed: false, optional: true, required: false
  private _sequenceNumberValue?: number; 
  public get sequenceNumberValue() {
    return this.getNumberAttribute('sequence_number_value');
  }
  public set sequenceNumberValue(value: number) {
    this._sequenceNumberValue = value;
  }
  public resetSequenceNumberValue() {
    this._sequenceNumberValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberValueInput() {
    return this._sequenceNumberValue;
  }

  // type_match - computed: false, optional: true, required: false
  private _typeMatch?: string; 
  public get typeMatch() {
    return this.getStringAttribute('type_match');
  }
  public set typeMatch(value: string) {
    this._typeMatch = value;
  }
  public resetTypeMatch() {
    this._typeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeMatchInput() {
    return this._typeMatch;
  }

  // type_value - computed: false, optional: true, required: false
  private _typeValue?: number; 
  public get typeValue() {
    return this.getNumberAttribute('type_value');
  }
  public set typeValue(value: number) {
    this._typeValue = value;
  }
  public resetTypeValue() {
    this._typeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeValueInput() {
    return this._typeValue;
  }
}
export interface SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmpv6 {
  /**
  * Condition for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_match SecurityIdpCustomAttack#checksum_validate_match}
  */
  readonly checksumValidateMatch?: string;
  /**
  * Value for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_value SecurityIdpCustomAttack#checksum_validate_value}
  */
  readonly checksumValidateValue?: number;
  /**
  * Condition for code field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#code_match SecurityIdpCustomAttack#code_match}
  */
  readonly codeMatch?: string;
  /**
  * Value for code field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#code_value SecurityIdpCustomAttack#code_value}
  */
  readonly codeValue?: number;
  /**
  * Condition for size of IP datagram subtracted by ICMP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_match SecurityIdpCustomAttack#data_length_match}
  */
  readonly dataLengthMatch?: string;
  /**
  * Value for size of IP datagram subtracted by ICMP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_value SecurityIdpCustomAttack#data_length_value}
  */
  readonly dataLengthValue?: number;
  /**
  * Condition for identifier in echo request/reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#identification_match SecurityIdpCustomAttack#identification_match}
  */
  readonly identificationMatch?: string;
  /**
  * Value for identifier in echo request/reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#identification_value SecurityIdpCustomAttack#identification_value}
  */
  readonly identificationValue?: number;
  /**
  * Condition for sequence number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#sequence_number_match SecurityIdpCustomAttack#sequence_number_match}
  */
  readonly sequenceNumberMatch?: string;
  /**
  * Value for sequence number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#sequence_number_value SecurityIdpCustomAttack#sequence_number_value}
  */
  readonly sequenceNumberValue?: number;
  /**
  * Condition for type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#type_match SecurityIdpCustomAttack#type_match}
  */
  readonly typeMatch?: string;
  /**
  * Value for type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#type_value SecurityIdpCustomAttack#type_value}
  */
  readonly typeValue?: number;
}

export function securityIdpCustomAttackAttackTypeSignatureProtocolIcmpv6ToTerraform(struct?: SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum_validate_match: cdktf.stringToTerraform(struct!.checksumValidateMatch),
    checksum_validate_value: cdktf.numberToTerraform(struct!.checksumValidateValue),
    code_match: cdktf.stringToTerraform(struct!.codeMatch),
    code_value: cdktf.numberToTerraform(struct!.codeValue),
    data_length_match: cdktf.stringToTerraform(struct!.dataLengthMatch),
    data_length_value: cdktf.numberToTerraform(struct!.dataLengthValue),
    identification_match: cdktf.stringToTerraform(struct!.identificationMatch),
    identification_value: cdktf.numberToTerraform(struct!.identificationValue),
    sequence_number_match: cdktf.stringToTerraform(struct!.sequenceNumberMatch),
    sequence_number_value: cdktf.numberToTerraform(struct!.sequenceNumberValue),
    type_match: cdktf.stringToTerraform(struct!.typeMatch),
    type_value: cdktf.numberToTerraform(struct!.typeValue),
  }
}


export function securityIdpCustomAttackAttackTypeSignatureProtocolIcmpv6ToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum_validate_match: {
      value: cdktf.stringToHclTerraform(struct!.checksumValidateMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum_validate_value: {
      value: cdktf.numberToHclTerraform(struct!.checksumValidateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_match: {
      value: cdktf.stringToHclTerraform(struct!.codeMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code_value: {
      value: cdktf.numberToHclTerraform(struct!.codeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_length_match: {
      value: cdktf.stringToHclTerraform(struct!.dataLengthMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_length_value: {
      value: cdktf.numberToHclTerraform(struct!.dataLengthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    identification_match: {
      value: cdktf.stringToHclTerraform(struct!.identificationMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identification_value: {
      value: cdktf.numberToHclTerraform(struct!.identificationValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_number_match: {
      value: cdktf.stringToHclTerraform(struct!.sequenceNumberMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_number_value: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumberValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_match: {
      value: cdktf.stringToHclTerraform(struct!.typeMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_value: {
      value: cdktf.numberToHclTerraform(struct!.typeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksumValidateMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateMatch = this._checksumValidateMatch;
    }
    if (this._checksumValidateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateValue = this._checksumValidateValue;
    }
    if (this._codeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeMatch = this._codeMatch;
    }
    if (this._codeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeValue = this._codeValue;
    }
    if (this._dataLengthMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthMatch = this._dataLengthMatch;
    }
    if (this._dataLengthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthValue = this._dataLengthValue;
    }
    if (this._identificationMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.identificationMatch = this._identificationMatch;
    }
    if (this._identificationValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identificationValue = this._identificationValue;
    }
    if (this._sequenceNumberMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumberMatch = this._sequenceNumberMatch;
    }
    if (this._sequenceNumberValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumberValue = this._sequenceNumberValue;
    }
    if (this._typeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeMatch = this._typeMatch;
    }
    if (this._typeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeValue = this._typeValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = undefined;
      this._checksumValidateValue = undefined;
      this._codeMatch = undefined;
      this._codeValue = undefined;
      this._dataLengthMatch = undefined;
      this._dataLengthValue = undefined;
      this._identificationMatch = undefined;
      this._identificationValue = undefined;
      this._sequenceNumberMatch = undefined;
      this._sequenceNumberValue = undefined;
      this._typeMatch = undefined;
      this._typeValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = value.checksumValidateMatch;
      this._checksumValidateValue = value.checksumValidateValue;
      this._codeMatch = value.codeMatch;
      this._codeValue = value.codeValue;
      this._dataLengthMatch = value.dataLengthMatch;
      this._dataLengthValue = value.dataLengthValue;
      this._identificationMatch = value.identificationMatch;
      this._identificationValue = value.identificationValue;
      this._sequenceNumberMatch = value.sequenceNumberMatch;
      this._sequenceNumberValue = value.sequenceNumberValue;
      this._typeMatch = value.typeMatch;
      this._typeValue = value.typeValue;
    }
  }

  // checksum_validate_match - computed: false, optional: true, required: false
  private _checksumValidateMatch?: string; 
  public get checksumValidateMatch() {
    return this.getStringAttribute('checksum_validate_match');
  }
  public set checksumValidateMatch(value: string) {
    this._checksumValidateMatch = value;
  }
  public resetChecksumValidateMatch() {
    this._checksumValidateMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateMatchInput() {
    return this._checksumValidateMatch;
  }

  // checksum_validate_value - computed: false, optional: true, required: false
  private _checksumValidateValue?: number; 
  public get checksumValidateValue() {
    return this.getNumberAttribute('checksum_validate_value');
  }
  public set checksumValidateValue(value: number) {
    this._checksumValidateValue = value;
  }
  public resetChecksumValidateValue() {
    this._checksumValidateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateValueInput() {
    return this._checksumValidateValue;
  }

  // code_match - computed: false, optional: true, required: false
  private _codeMatch?: string; 
  public get codeMatch() {
    return this.getStringAttribute('code_match');
  }
  public set codeMatch(value: string) {
    this._codeMatch = value;
  }
  public resetCodeMatch() {
    this._codeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeMatchInput() {
    return this._codeMatch;
  }

  // code_value - computed: false, optional: true, required: false
  private _codeValue?: number; 
  public get codeValue() {
    return this.getNumberAttribute('code_value');
  }
  public set codeValue(value: number) {
    this._codeValue = value;
  }
  public resetCodeValue() {
    this._codeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeValueInput() {
    return this._codeValue;
  }

  // data_length_match - computed: false, optional: true, required: false
  private _dataLengthMatch?: string; 
  public get dataLengthMatch() {
    return this.getStringAttribute('data_length_match');
  }
  public set dataLengthMatch(value: string) {
    this._dataLengthMatch = value;
  }
  public resetDataLengthMatch() {
    this._dataLengthMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthMatchInput() {
    return this._dataLengthMatch;
  }

  // data_length_value - computed: false, optional: true, required: false
  private _dataLengthValue?: number; 
  public get dataLengthValue() {
    return this.getNumberAttribute('data_length_value');
  }
  public set dataLengthValue(value: number) {
    this._dataLengthValue = value;
  }
  public resetDataLengthValue() {
    this._dataLengthValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthValueInput() {
    return this._dataLengthValue;
  }

  // identification_match - computed: false, optional: true, required: false
  private _identificationMatch?: string; 
  public get identificationMatch() {
    return this.getStringAttribute('identification_match');
  }
  public set identificationMatch(value: string) {
    this._identificationMatch = value;
  }
  public resetIdentificationMatch() {
    this._identificationMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationMatchInput() {
    return this._identificationMatch;
  }

  // identification_value - computed: false, optional: true, required: false
  private _identificationValue?: number; 
  public get identificationValue() {
    return this.getNumberAttribute('identification_value');
  }
  public set identificationValue(value: number) {
    this._identificationValue = value;
  }
  public resetIdentificationValue() {
    this._identificationValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationValueInput() {
    return this._identificationValue;
  }

  // sequence_number_match - computed: false, optional: true, required: false
  private _sequenceNumberMatch?: string; 
  public get sequenceNumberMatch() {
    return this.getStringAttribute('sequence_number_match');
  }
  public set sequenceNumberMatch(value: string) {
    this._sequenceNumberMatch = value;
  }
  public resetSequenceNumberMatch() {
    this._sequenceNumberMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberMatchInput() {
    return this._sequenceNumberMatch;
  }

  // sequence_number_value - computed: false, optional: true, required: false
  private _sequenceNumberValue?: number; 
  public get sequenceNumberValue() {
    return this.getNumberAttribute('sequence_number_value');
  }
  public set sequenceNumberValue(value: number) {
    this._sequenceNumberValue = value;
  }
  public resetSequenceNumberValue() {
    this._sequenceNumberValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberValueInput() {
    return this._sequenceNumberValue;
  }

  // type_match - computed: false, optional: true, required: false
  private _typeMatch?: string; 
  public get typeMatch() {
    return this.getStringAttribute('type_match');
  }
  public set typeMatch(value: string) {
    this._typeMatch = value;
  }
  public resetTypeMatch() {
    this._typeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeMatchInput() {
    return this._typeMatch;
  }

  // type_value - computed: false, optional: true, required: false
  private _typeValue?: number; 
  public get typeValue() {
    return this.getNumberAttribute('type_value');
  }
  public set typeValue(value: number) {
    this._typeValue = value;
  }
  public resetTypeValue() {
    this._typeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeValueInput() {
    return this._typeValue;
  }
}
export interface SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv4 {
  /**
  * Condition for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_match SecurityIdpCustomAttack#checksum_validate_match}
  */
  readonly checksumValidateMatch?: string;
  /**
  * Value for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_value SecurityIdpCustomAttack#checksum_validate_value}
  */
  readonly checksumValidateValue?: number;
  /**
  * Condition for destination IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_match SecurityIdpCustomAttack#destination_match}
  */
  readonly destinationMatch?: string;
  /**
  * Value for destination IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_value SecurityIdpCustomAttack#destination_value}
  */
  readonly destinationValue?: string;
  /**
  * Condition for fragment identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#identification_match SecurityIdpCustomAttack#identification_match}
  */
  readonly identificationMatch?: string;
  /**
  * Value for fragment identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#identification_value SecurityIdpCustomAttack#identification_value}
  */
  readonly identificationValue?: number;
  /**
  * Condition for header length in words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#ihl_match SecurityIdpCustomAttack#ihl_match}
  */
  readonly ihlMatch?: string;
  /**
  * Value for header length in words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#ihl_value SecurityIdpCustomAttack#ihl_value}
  */
  readonly ihlValue?: number;
  /**
  * IP Flag bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#ip_flags SecurityIdpCustomAttack#ip_flags}
  */
  readonly ipFlags?: string[];
  /**
  * Condition for transport layer protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_match SecurityIdpCustomAttack#protocol_match}
  */
  readonly protocolMatch?: string;
  /**
  * Value for transport layer protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_value SecurityIdpCustomAttack#protocol_value}
  */
  readonly protocolValue?: number;
  /**
  * Condition for source IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_match SecurityIdpCustomAttack#source_match}
  */
  readonly sourceMatch?: string;
  /**
  * Value for source IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_value SecurityIdpCustomAttack#source_value}
  */
  readonly sourceValue?: string;
  /**
  * Condition for type of service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#tos_match SecurityIdpCustomAttack#tos_match}
  */
  readonly tosMatch?: string;
  /**
  * Value for type of service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#tos_value SecurityIdpCustomAttack#tos_value}
  */
  readonly tosValue?: number;
  /**
  * Condition for total length of IP datagram.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#total_length_match SecurityIdpCustomAttack#total_length_match}
  */
  readonly totalLengthMatch?: string;
  /**
  * Value for total length of IP datagram.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#total_length_value SecurityIdpCustomAttack#total_length_value}
  */
  readonly totalLengthValue?: number;
  /**
  * Condition for time to live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#ttl_match SecurityIdpCustomAttack#ttl_match}
  */
  readonly ttlMatch?: string;
  /**
  * Value for time to live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#ttl_value SecurityIdpCustomAttack#ttl_value}
  */
  readonly ttlValue?: number;
}

export function securityIdpCustomAttackAttackTypeSignatureProtocolIpv4ToTerraform(struct?: SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum_validate_match: cdktf.stringToTerraform(struct!.checksumValidateMatch),
    checksum_validate_value: cdktf.numberToTerraform(struct!.checksumValidateValue),
    destination_match: cdktf.stringToTerraform(struct!.destinationMatch),
    destination_value: cdktf.stringToTerraform(struct!.destinationValue),
    identification_match: cdktf.stringToTerraform(struct!.identificationMatch),
    identification_value: cdktf.numberToTerraform(struct!.identificationValue),
    ihl_match: cdktf.stringToTerraform(struct!.ihlMatch),
    ihl_value: cdktf.numberToTerraform(struct!.ihlValue),
    ip_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFlags),
    protocol_match: cdktf.stringToTerraform(struct!.protocolMatch),
    protocol_value: cdktf.numberToTerraform(struct!.protocolValue),
    source_match: cdktf.stringToTerraform(struct!.sourceMatch),
    source_value: cdktf.stringToTerraform(struct!.sourceValue),
    tos_match: cdktf.stringToTerraform(struct!.tosMatch),
    tos_value: cdktf.numberToTerraform(struct!.tosValue),
    total_length_match: cdktf.stringToTerraform(struct!.totalLengthMatch),
    total_length_value: cdktf.numberToTerraform(struct!.totalLengthValue),
    ttl_match: cdktf.stringToTerraform(struct!.ttlMatch),
    ttl_value: cdktf.numberToTerraform(struct!.ttlValue),
  }
}


export function securityIdpCustomAttackAttackTypeSignatureProtocolIpv4ToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum_validate_match: {
      value: cdktf.stringToHclTerraform(struct!.checksumValidateMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum_validate_value: {
      value: cdktf.numberToHclTerraform(struct!.checksumValidateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_match: {
      value: cdktf.stringToHclTerraform(struct!.destinationMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_value: {
      value: cdktf.stringToHclTerraform(struct!.destinationValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identification_match: {
      value: cdktf.stringToHclTerraform(struct!.identificationMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identification_value: {
      value: cdktf.numberToHclTerraform(struct!.identificationValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ihl_match: {
      value: cdktf.stringToHclTerraform(struct!.ihlMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ihl_value: {
      value: cdktf.numberToHclTerraform(struct!.ihlValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFlags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protocol_match: {
      value: cdktf.stringToHclTerraform(struct!.protocolMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_value: {
      value: cdktf.numberToHclTerraform(struct!.protocolValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_match: {
      value: cdktf.stringToHclTerraform(struct!.sourceMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_value: {
      value: cdktf.stringToHclTerraform(struct!.sourceValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_match: {
      value: cdktf.stringToHclTerraform(struct!.tosMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_value: {
      value: cdktf.numberToHclTerraform(struct!.tosValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_length_match: {
      value: cdktf.stringToHclTerraform(struct!.totalLengthMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_length_value: {
      value: cdktf.numberToHclTerraform(struct!.totalLengthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_match: {
      value: cdktf.stringToHclTerraform(struct!.ttlMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl_value: {
      value: cdktf.numberToHclTerraform(struct!.ttlValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksumValidateMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateMatch = this._checksumValidateMatch;
    }
    if (this._checksumValidateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateValue = this._checksumValidateValue;
    }
    if (this._destinationMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationMatch = this._destinationMatch;
    }
    if (this._destinationValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationValue = this._destinationValue;
    }
    if (this._identificationMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.identificationMatch = this._identificationMatch;
    }
    if (this._identificationValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identificationValue = this._identificationValue;
    }
    if (this._ihlMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ihlMatch = this._ihlMatch;
    }
    if (this._ihlValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ihlValue = this._ihlValue;
    }
    if (this._ipFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFlags = this._ipFlags;
    }
    if (this._protocolMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolMatch = this._protocolMatch;
    }
    if (this._protocolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolValue = this._protocolValue;
    }
    if (this._sourceMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMatch = this._sourceMatch;
    }
    if (this._sourceValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceValue = this._sourceValue;
    }
    if (this._tosMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosMatch = this._tosMatch;
    }
    if (this._tosValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosValue = this._tosValue;
    }
    if (this._totalLengthMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLengthMatch = this._totalLengthMatch;
    }
    if (this._totalLengthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLengthValue = this._totalLengthValue;
    }
    if (this._ttlMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlMatch = this._ttlMatch;
    }
    if (this._ttlValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlValue = this._ttlValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = undefined;
      this._checksumValidateValue = undefined;
      this._destinationMatch = undefined;
      this._destinationValue = undefined;
      this._identificationMatch = undefined;
      this._identificationValue = undefined;
      this._ihlMatch = undefined;
      this._ihlValue = undefined;
      this._ipFlags = undefined;
      this._protocolMatch = undefined;
      this._protocolValue = undefined;
      this._sourceMatch = undefined;
      this._sourceValue = undefined;
      this._tosMatch = undefined;
      this._tosValue = undefined;
      this._totalLengthMatch = undefined;
      this._totalLengthValue = undefined;
      this._ttlMatch = undefined;
      this._ttlValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = value.checksumValidateMatch;
      this._checksumValidateValue = value.checksumValidateValue;
      this._destinationMatch = value.destinationMatch;
      this._destinationValue = value.destinationValue;
      this._identificationMatch = value.identificationMatch;
      this._identificationValue = value.identificationValue;
      this._ihlMatch = value.ihlMatch;
      this._ihlValue = value.ihlValue;
      this._ipFlags = value.ipFlags;
      this._protocolMatch = value.protocolMatch;
      this._protocolValue = value.protocolValue;
      this._sourceMatch = value.sourceMatch;
      this._sourceValue = value.sourceValue;
      this._tosMatch = value.tosMatch;
      this._tosValue = value.tosValue;
      this._totalLengthMatch = value.totalLengthMatch;
      this._totalLengthValue = value.totalLengthValue;
      this._ttlMatch = value.ttlMatch;
      this._ttlValue = value.ttlValue;
    }
  }

  // checksum_validate_match - computed: false, optional: true, required: false
  private _checksumValidateMatch?: string; 
  public get checksumValidateMatch() {
    return this.getStringAttribute('checksum_validate_match');
  }
  public set checksumValidateMatch(value: string) {
    this._checksumValidateMatch = value;
  }
  public resetChecksumValidateMatch() {
    this._checksumValidateMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateMatchInput() {
    return this._checksumValidateMatch;
  }

  // checksum_validate_value - computed: false, optional: true, required: false
  private _checksumValidateValue?: number; 
  public get checksumValidateValue() {
    return this.getNumberAttribute('checksum_validate_value');
  }
  public set checksumValidateValue(value: number) {
    this._checksumValidateValue = value;
  }
  public resetChecksumValidateValue() {
    this._checksumValidateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateValueInput() {
    return this._checksumValidateValue;
  }

  // destination_match - computed: false, optional: true, required: false
  private _destinationMatch?: string; 
  public get destinationMatch() {
    return this.getStringAttribute('destination_match');
  }
  public set destinationMatch(value: string) {
    this._destinationMatch = value;
  }
  public resetDestinationMatch() {
    this._destinationMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationMatchInput() {
    return this._destinationMatch;
  }

  // destination_value - computed: false, optional: true, required: false
  private _destinationValue?: string; 
  public get destinationValue() {
    return this.getStringAttribute('destination_value');
  }
  public set destinationValue(value: string) {
    this._destinationValue = value;
  }
  public resetDestinationValue() {
    this._destinationValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationValueInput() {
    return this._destinationValue;
  }

  // identification_match - computed: false, optional: true, required: false
  private _identificationMatch?: string; 
  public get identificationMatch() {
    return this.getStringAttribute('identification_match');
  }
  public set identificationMatch(value: string) {
    this._identificationMatch = value;
  }
  public resetIdentificationMatch() {
    this._identificationMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationMatchInput() {
    return this._identificationMatch;
  }

  // identification_value - computed: false, optional: true, required: false
  private _identificationValue?: number; 
  public get identificationValue() {
    return this.getNumberAttribute('identification_value');
  }
  public set identificationValue(value: number) {
    this._identificationValue = value;
  }
  public resetIdentificationValue() {
    this._identificationValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationValueInput() {
    return this._identificationValue;
  }

  // ihl_match - computed: false, optional: true, required: false
  private _ihlMatch?: string; 
  public get ihlMatch() {
    return this.getStringAttribute('ihl_match');
  }
  public set ihlMatch(value: string) {
    this._ihlMatch = value;
  }
  public resetIhlMatch() {
    this._ihlMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ihlMatchInput() {
    return this._ihlMatch;
  }

  // ihl_value - computed: false, optional: true, required: false
  private _ihlValue?: number; 
  public get ihlValue() {
    return this.getNumberAttribute('ihl_value');
  }
  public set ihlValue(value: number) {
    this._ihlValue = value;
  }
  public resetIhlValue() {
    this._ihlValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ihlValueInput() {
    return this._ihlValue;
  }

  // ip_flags - computed: false, optional: true, required: false
  private _ipFlags?: string[]; 
  public get ipFlags() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_flags'));
  }
  public set ipFlags(value: string[]) {
    this._ipFlags = value;
  }
  public resetIpFlags() {
    this._ipFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFlagsInput() {
    return this._ipFlags;
  }

  // protocol_match - computed: false, optional: true, required: false
  private _protocolMatch?: string; 
  public get protocolMatch() {
    return this.getStringAttribute('protocol_match');
  }
  public set protocolMatch(value: string) {
    this._protocolMatch = value;
  }
  public resetProtocolMatch() {
    this._protocolMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolMatchInput() {
    return this._protocolMatch;
  }

  // protocol_value - computed: false, optional: true, required: false
  private _protocolValue?: number; 
  public get protocolValue() {
    return this.getNumberAttribute('protocol_value');
  }
  public set protocolValue(value: number) {
    this._protocolValue = value;
  }
  public resetProtocolValue() {
    this._protocolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolValueInput() {
    return this._protocolValue;
  }

  // source_match - computed: false, optional: true, required: false
  private _sourceMatch?: string; 
  public get sourceMatch() {
    return this.getStringAttribute('source_match');
  }
  public set sourceMatch(value: string) {
    this._sourceMatch = value;
  }
  public resetSourceMatch() {
    this._sourceMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMatchInput() {
    return this._sourceMatch;
  }

  // source_value - computed: false, optional: true, required: false
  private _sourceValue?: string; 
  public get sourceValue() {
    return this.getStringAttribute('source_value');
  }
  public set sourceValue(value: string) {
    this._sourceValue = value;
  }
  public resetSourceValue() {
    this._sourceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceValueInput() {
    return this._sourceValue;
  }

  // tos_match - computed: false, optional: true, required: false
  private _tosMatch?: string; 
  public get tosMatch() {
    return this.getStringAttribute('tos_match');
  }
  public set tosMatch(value: string) {
    this._tosMatch = value;
  }
  public resetTosMatch() {
    this._tosMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosMatchInput() {
    return this._tosMatch;
  }

  // tos_value - computed: false, optional: true, required: false
  private _tosValue?: number; 
  public get tosValue() {
    return this.getNumberAttribute('tos_value');
  }
  public set tosValue(value: number) {
    this._tosValue = value;
  }
  public resetTosValue() {
    this._tosValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosValueInput() {
    return this._tosValue;
  }

  // total_length_match - computed: false, optional: true, required: false
  private _totalLengthMatch?: string; 
  public get totalLengthMatch() {
    return this.getStringAttribute('total_length_match');
  }
  public set totalLengthMatch(value: string) {
    this._totalLengthMatch = value;
  }
  public resetTotalLengthMatch() {
    this._totalLengthMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLengthMatchInput() {
    return this._totalLengthMatch;
  }

  // total_length_value - computed: false, optional: true, required: false
  private _totalLengthValue?: number; 
  public get totalLengthValue() {
    return this.getNumberAttribute('total_length_value');
  }
  public set totalLengthValue(value: number) {
    this._totalLengthValue = value;
  }
  public resetTotalLengthValue() {
    this._totalLengthValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLengthValueInput() {
    return this._totalLengthValue;
  }

  // ttl_match - computed: false, optional: true, required: false
  private _ttlMatch?: string; 
  public get ttlMatch() {
    return this.getStringAttribute('ttl_match');
  }
  public set ttlMatch(value: string) {
    this._ttlMatch = value;
  }
  public resetTtlMatch() {
    this._ttlMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlMatchInput() {
    return this._ttlMatch;
  }

  // ttl_value - computed: false, optional: true, required: false
  private _ttlValue?: number; 
  public get ttlValue() {
    return this.getNumberAttribute('ttl_value');
  }
  public set ttlValue(value: number) {
    this._ttlValue = value;
  }
  public resetTtlValue() {
    this._ttlValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlValueInput() {
    return this._ttlValue;
  }
}
export interface SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv6 {
  /**
  * Condition for destination IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_match SecurityIdpCustomAttack#destination_match}
  */
  readonly destinationMatch?: string;
  /**
  * Value for destination IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_value SecurityIdpCustomAttack#destination_value}
  */
  readonly destinationValue?: string;
  /**
  * Condition for home address of the mobile node in destination option extension header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#extension_header_destination_option_home_address_match SecurityIdpCustomAttack#extension_header_destination_option_home_address_match}
  */
  readonly extensionHeaderDestinationOptionHomeAddressMatch?: string;
  /**
  * Value for home address of the mobile node in destination option extension header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#extension_header_destination_option_home_address_value SecurityIdpCustomAttack#extension_header_destination_option_home_address_value}
  */
  readonly extensionHeaderDestinationOptionHomeAddressValue?: string;
  /**
  * Condition for header type in destination option extension header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#extension_header_destination_option_type_match SecurityIdpCustomAttack#extension_header_destination_option_type_match}
  */
  readonly extensionHeaderDestinationOptionTypeMatch?: string;
  /**
  * Value for header type in  destination option extension header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#extension_header_destination_option_type_value SecurityIdpCustomAttack#extension_header_destination_option_type_value}
  */
  readonly extensionHeaderDestinationOptionTypeValue?: number;
  /**
  * Condition for header type in routing extension header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#extension_header_routing_header_type_match SecurityIdpCustomAttack#extension_header_routing_header_type_match}
  */
  readonly extensionHeaderRoutingHeaderTypeMatch?: string;
  /**
  * Value for header type in routing extension header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#extension_header_routing_header_type_value SecurityIdpCustomAttack#extension_header_routing_header_type_value}
  */
  readonly extensionHeaderRoutingHeaderTypeValue?: number;
  /**
  * Condition for flow label identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#flow_label_match SecurityIdpCustomAttack#flow_label_match}
  */
  readonly flowLabelMatch?: string;
  /**
  * Value for flow label identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#flow_label_value SecurityIdpCustomAttack#flow_label_value}
  */
  readonly flowLabelValue?: number;
  /**
  * Condition for hop limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#hop_limit_match SecurityIdpCustomAttack#hop_limit_match}
  */
  readonly hopLimitMatch?: string;
  /**
  * Value for hop limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#hop_limit_value SecurityIdpCustomAttack#hop_limit_value}
  */
  readonly hopLimitValue?: number;
  /**
  * Condition for the header following the basic IPv6 header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#next_header_match SecurityIdpCustomAttack#next_header_match}
  */
  readonly nextHeaderMatch?: string;
  /**
  * Value for the header following the basic IPv6 header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#next_header_value SecurityIdpCustomAttack#next_header_value}
  */
  readonly nextHeaderValue?: number;
  /**
  * Condition for length of the payload in the IPv6 datagram.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#payload_length_match SecurityIdpCustomAttack#payload_length_match}
  */
  readonly payloadLengthMatch?: string;
  /**
  * Value for length of the payload in the IPv6 datagram.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#payload_length_value SecurityIdpCustomAttack#payload_length_value}
  */
  readonly payloadLengthValue?: number;
  /**
  * Condition for source IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_match SecurityIdpCustomAttack#source_match}
  */
  readonly sourceMatch?: string;
  /**
  * Value for source IP-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_value SecurityIdpCustomAttack#source_value}
  */
  readonly sourceValue?: string;
  /**
  * Condition for traffic class. Similar to TOS in IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#traffic_class_match SecurityIdpCustomAttack#traffic_class_match}
  */
  readonly trafficClassMatch?: string;
  /**
  * Value for traffic class. Similar to TOS in IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#traffic_class_value SecurityIdpCustomAttack#traffic_class_value}
  */
  readonly trafficClassValue?: number;
}

export function securityIdpCustomAttackAttackTypeSignatureProtocolIpv6ToTerraform(struct?: SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_match: cdktf.stringToTerraform(struct!.destinationMatch),
    destination_value: cdktf.stringToTerraform(struct!.destinationValue),
    extension_header_destination_option_home_address_match: cdktf.stringToTerraform(struct!.extensionHeaderDestinationOptionHomeAddressMatch),
    extension_header_destination_option_home_address_value: cdktf.stringToTerraform(struct!.extensionHeaderDestinationOptionHomeAddressValue),
    extension_header_destination_option_type_match: cdktf.stringToTerraform(struct!.extensionHeaderDestinationOptionTypeMatch),
    extension_header_destination_option_type_value: cdktf.numberToTerraform(struct!.extensionHeaderDestinationOptionTypeValue),
    extension_header_routing_header_type_match: cdktf.stringToTerraform(struct!.extensionHeaderRoutingHeaderTypeMatch),
    extension_header_routing_header_type_value: cdktf.numberToTerraform(struct!.extensionHeaderRoutingHeaderTypeValue),
    flow_label_match: cdktf.stringToTerraform(struct!.flowLabelMatch),
    flow_label_value: cdktf.numberToTerraform(struct!.flowLabelValue),
    hop_limit_match: cdktf.stringToTerraform(struct!.hopLimitMatch),
    hop_limit_value: cdktf.numberToTerraform(struct!.hopLimitValue),
    next_header_match: cdktf.stringToTerraform(struct!.nextHeaderMatch),
    next_header_value: cdktf.numberToTerraform(struct!.nextHeaderValue),
    payload_length_match: cdktf.stringToTerraform(struct!.payloadLengthMatch),
    payload_length_value: cdktf.numberToTerraform(struct!.payloadLengthValue),
    source_match: cdktf.stringToTerraform(struct!.sourceMatch),
    source_value: cdktf.stringToTerraform(struct!.sourceValue),
    traffic_class_match: cdktf.stringToTerraform(struct!.trafficClassMatch),
    traffic_class_value: cdktf.numberToTerraform(struct!.trafficClassValue),
  }
}


export function securityIdpCustomAttackAttackTypeSignatureProtocolIpv6ToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_match: {
      value: cdktf.stringToHclTerraform(struct!.destinationMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_value: {
      value: cdktf.stringToHclTerraform(struct!.destinationValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_header_destination_option_home_address_match: {
      value: cdktf.stringToHclTerraform(struct!.extensionHeaderDestinationOptionHomeAddressMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_header_destination_option_home_address_value: {
      value: cdktf.stringToHclTerraform(struct!.extensionHeaderDestinationOptionHomeAddressValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_header_destination_option_type_match: {
      value: cdktf.stringToHclTerraform(struct!.extensionHeaderDestinationOptionTypeMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_header_destination_option_type_value: {
      value: cdktf.numberToHclTerraform(struct!.extensionHeaderDestinationOptionTypeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extension_header_routing_header_type_match: {
      value: cdktf.stringToHclTerraform(struct!.extensionHeaderRoutingHeaderTypeMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_header_routing_header_type_value: {
      value: cdktf.numberToHclTerraform(struct!.extensionHeaderRoutingHeaderTypeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flow_label_match: {
      value: cdktf.stringToHclTerraform(struct!.flowLabelMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_label_value: {
      value: cdktf.numberToHclTerraform(struct!.flowLabelValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hop_limit_match: {
      value: cdktf.stringToHclTerraform(struct!.hopLimitMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hop_limit_value: {
      value: cdktf.numberToHclTerraform(struct!.hopLimitValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_header_match: {
      value: cdktf.stringToHclTerraform(struct!.nextHeaderMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_header_value: {
      value: cdktf.numberToHclTerraform(struct!.nextHeaderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    payload_length_match: {
      value: cdktf.stringToHclTerraform(struct!.payloadLengthMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_length_value: {
      value: cdktf.numberToHclTerraform(struct!.payloadLengthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_match: {
      value: cdktf.stringToHclTerraform(struct!.sourceMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_value: {
      value: cdktf.stringToHclTerraform(struct!.sourceValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_class_match: {
      value: cdktf.stringToHclTerraform(struct!.trafficClassMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_class_value: {
      value: cdktf.numberToHclTerraform(struct!.trafficClassValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationMatch = this._destinationMatch;
    }
    if (this._destinationValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationValue = this._destinationValue;
    }
    if (this._extensionHeaderDestinationOptionHomeAddressMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionHeaderDestinationOptionHomeAddressMatch = this._extensionHeaderDestinationOptionHomeAddressMatch;
    }
    if (this._extensionHeaderDestinationOptionHomeAddressValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionHeaderDestinationOptionHomeAddressValue = this._extensionHeaderDestinationOptionHomeAddressValue;
    }
    if (this._extensionHeaderDestinationOptionTypeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionHeaderDestinationOptionTypeMatch = this._extensionHeaderDestinationOptionTypeMatch;
    }
    if (this._extensionHeaderDestinationOptionTypeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionHeaderDestinationOptionTypeValue = this._extensionHeaderDestinationOptionTypeValue;
    }
    if (this._extensionHeaderRoutingHeaderTypeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionHeaderRoutingHeaderTypeMatch = this._extensionHeaderRoutingHeaderTypeMatch;
    }
    if (this._extensionHeaderRoutingHeaderTypeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionHeaderRoutingHeaderTypeValue = this._extensionHeaderRoutingHeaderTypeValue;
    }
    if (this._flowLabelMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLabelMatch = this._flowLabelMatch;
    }
    if (this._flowLabelValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLabelValue = this._flowLabelValue;
    }
    if (this._hopLimitMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hopLimitMatch = this._hopLimitMatch;
    }
    if (this._hopLimitValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hopLimitValue = this._hopLimitValue;
    }
    if (this._nextHeaderMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHeaderMatch = this._nextHeaderMatch;
    }
    if (this._nextHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHeaderValue = this._nextHeaderValue;
    }
    if (this._payloadLengthMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadLengthMatch = this._payloadLengthMatch;
    }
    if (this._payloadLengthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadLengthValue = this._payloadLengthValue;
    }
    if (this._sourceMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMatch = this._sourceMatch;
    }
    if (this._sourceValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceValue = this._sourceValue;
    }
    if (this._trafficClassMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficClassMatch = this._trafficClassMatch;
    }
    if (this._trafficClassValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficClassValue = this._trafficClassValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationMatch = undefined;
      this._destinationValue = undefined;
      this._extensionHeaderDestinationOptionHomeAddressMatch = undefined;
      this._extensionHeaderDestinationOptionHomeAddressValue = undefined;
      this._extensionHeaderDestinationOptionTypeMatch = undefined;
      this._extensionHeaderDestinationOptionTypeValue = undefined;
      this._extensionHeaderRoutingHeaderTypeMatch = undefined;
      this._extensionHeaderRoutingHeaderTypeValue = undefined;
      this._flowLabelMatch = undefined;
      this._flowLabelValue = undefined;
      this._hopLimitMatch = undefined;
      this._hopLimitValue = undefined;
      this._nextHeaderMatch = undefined;
      this._nextHeaderValue = undefined;
      this._payloadLengthMatch = undefined;
      this._payloadLengthValue = undefined;
      this._sourceMatch = undefined;
      this._sourceValue = undefined;
      this._trafficClassMatch = undefined;
      this._trafficClassValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationMatch = value.destinationMatch;
      this._destinationValue = value.destinationValue;
      this._extensionHeaderDestinationOptionHomeAddressMatch = value.extensionHeaderDestinationOptionHomeAddressMatch;
      this._extensionHeaderDestinationOptionHomeAddressValue = value.extensionHeaderDestinationOptionHomeAddressValue;
      this._extensionHeaderDestinationOptionTypeMatch = value.extensionHeaderDestinationOptionTypeMatch;
      this._extensionHeaderDestinationOptionTypeValue = value.extensionHeaderDestinationOptionTypeValue;
      this._extensionHeaderRoutingHeaderTypeMatch = value.extensionHeaderRoutingHeaderTypeMatch;
      this._extensionHeaderRoutingHeaderTypeValue = value.extensionHeaderRoutingHeaderTypeValue;
      this._flowLabelMatch = value.flowLabelMatch;
      this._flowLabelValue = value.flowLabelValue;
      this._hopLimitMatch = value.hopLimitMatch;
      this._hopLimitValue = value.hopLimitValue;
      this._nextHeaderMatch = value.nextHeaderMatch;
      this._nextHeaderValue = value.nextHeaderValue;
      this._payloadLengthMatch = value.payloadLengthMatch;
      this._payloadLengthValue = value.payloadLengthValue;
      this._sourceMatch = value.sourceMatch;
      this._sourceValue = value.sourceValue;
      this._trafficClassMatch = value.trafficClassMatch;
      this._trafficClassValue = value.trafficClassValue;
    }
  }

  // destination_match - computed: false, optional: true, required: false
  private _destinationMatch?: string; 
  public get destinationMatch() {
    return this.getStringAttribute('destination_match');
  }
  public set destinationMatch(value: string) {
    this._destinationMatch = value;
  }
  public resetDestinationMatch() {
    this._destinationMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationMatchInput() {
    return this._destinationMatch;
  }

  // destination_value - computed: false, optional: true, required: false
  private _destinationValue?: string; 
  public get destinationValue() {
    return this.getStringAttribute('destination_value');
  }
  public set destinationValue(value: string) {
    this._destinationValue = value;
  }
  public resetDestinationValue() {
    this._destinationValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationValueInput() {
    return this._destinationValue;
  }

  // extension_header_destination_option_home_address_match - computed: false, optional: true, required: false
  private _extensionHeaderDestinationOptionHomeAddressMatch?: string; 
  public get extensionHeaderDestinationOptionHomeAddressMatch() {
    return this.getStringAttribute('extension_header_destination_option_home_address_match');
  }
  public set extensionHeaderDestinationOptionHomeAddressMatch(value: string) {
    this._extensionHeaderDestinationOptionHomeAddressMatch = value;
  }
  public resetExtensionHeaderDestinationOptionHomeAddressMatch() {
    this._extensionHeaderDestinationOptionHomeAddressMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionHeaderDestinationOptionHomeAddressMatchInput() {
    return this._extensionHeaderDestinationOptionHomeAddressMatch;
  }

  // extension_header_destination_option_home_address_value - computed: false, optional: true, required: false
  private _extensionHeaderDestinationOptionHomeAddressValue?: string; 
  public get extensionHeaderDestinationOptionHomeAddressValue() {
    return this.getStringAttribute('extension_header_destination_option_home_address_value');
  }
  public set extensionHeaderDestinationOptionHomeAddressValue(value: string) {
    this._extensionHeaderDestinationOptionHomeAddressValue = value;
  }
  public resetExtensionHeaderDestinationOptionHomeAddressValue() {
    this._extensionHeaderDestinationOptionHomeAddressValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionHeaderDestinationOptionHomeAddressValueInput() {
    return this._extensionHeaderDestinationOptionHomeAddressValue;
  }

  // extension_header_destination_option_type_match - computed: false, optional: true, required: false
  private _extensionHeaderDestinationOptionTypeMatch?: string; 
  public get extensionHeaderDestinationOptionTypeMatch() {
    return this.getStringAttribute('extension_header_destination_option_type_match');
  }
  public set extensionHeaderDestinationOptionTypeMatch(value: string) {
    this._extensionHeaderDestinationOptionTypeMatch = value;
  }
  public resetExtensionHeaderDestinationOptionTypeMatch() {
    this._extensionHeaderDestinationOptionTypeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionHeaderDestinationOptionTypeMatchInput() {
    return this._extensionHeaderDestinationOptionTypeMatch;
  }

  // extension_header_destination_option_type_value - computed: false, optional: true, required: false
  private _extensionHeaderDestinationOptionTypeValue?: number; 
  public get extensionHeaderDestinationOptionTypeValue() {
    return this.getNumberAttribute('extension_header_destination_option_type_value');
  }
  public set extensionHeaderDestinationOptionTypeValue(value: number) {
    this._extensionHeaderDestinationOptionTypeValue = value;
  }
  public resetExtensionHeaderDestinationOptionTypeValue() {
    this._extensionHeaderDestinationOptionTypeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionHeaderDestinationOptionTypeValueInput() {
    return this._extensionHeaderDestinationOptionTypeValue;
  }

  // extension_header_routing_header_type_match - computed: false, optional: true, required: false
  private _extensionHeaderRoutingHeaderTypeMatch?: string; 
  public get extensionHeaderRoutingHeaderTypeMatch() {
    return this.getStringAttribute('extension_header_routing_header_type_match');
  }
  public set extensionHeaderRoutingHeaderTypeMatch(value: string) {
    this._extensionHeaderRoutingHeaderTypeMatch = value;
  }
  public resetExtensionHeaderRoutingHeaderTypeMatch() {
    this._extensionHeaderRoutingHeaderTypeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionHeaderRoutingHeaderTypeMatchInput() {
    return this._extensionHeaderRoutingHeaderTypeMatch;
  }

  // extension_header_routing_header_type_value - computed: false, optional: true, required: false
  private _extensionHeaderRoutingHeaderTypeValue?: number; 
  public get extensionHeaderRoutingHeaderTypeValue() {
    return this.getNumberAttribute('extension_header_routing_header_type_value');
  }
  public set extensionHeaderRoutingHeaderTypeValue(value: number) {
    this._extensionHeaderRoutingHeaderTypeValue = value;
  }
  public resetExtensionHeaderRoutingHeaderTypeValue() {
    this._extensionHeaderRoutingHeaderTypeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionHeaderRoutingHeaderTypeValueInput() {
    return this._extensionHeaderRoutingHeaderTypeValue;
  }

  // flow_label_match - computed: false, optional: true, required: false
  private _flowLabelMatch?: string; 
  public get flowLabelMatch() {
    return this.getStringAttribute('flow_label_match');
  }
  public set flowLabelMatch(value: string) {
    this._flowLabelMatch = value;
  }
  public resetFlowLabelMatch() {
    this._flowLabelMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLabelMatchInput() {
    return this._flowLabelMatch;
  }

  // flow_label_value - computed: false, optional: true, required: false
  private _flowLabelValue?: number; 
  public get flowLabelValue() {
    return this.getNumberAttribute('flow_label_value');
  }
  public set flowLabelValue(value: number) {
    this._flowLabelValue = value;
  }
  public resetFlowLabelValue() {
    this._flowLabelValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLabelValueInput() {
    return this._flowLabelValue;
  }

  // hop_limit_match - computed: false, optional: true, required: false
  private _hopLimitMatch?: string; 
  public get hopLimitMatch() {
    return this.getStringAttribute('hop_limit_match');
  }
  public set hopLimitMatch(value: string) {
    this._hopLimitMatch = value;
  }
  public resetHopLimitMatch() {
    this._hopLimitMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopLimitMatchInput() {
    return this._hopLimitMatch;
  }

  // hop_limit_value - computed: false, optional: true, required: false
  private _hopLimitValue?: number; 
  public get hopLimitValue() {
    return this.getNumberAttribute('hop_limit_value');
  }
  public set hopLimitValue(value: number) {
    this._hopLimitValue = value;
  }
  public resetHopLimitValue() {
    this._hopLimitValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopLimitValueInput() {
    return this._hopLimitValue;
  }

  // next_header_match - computed: false, optional: true, required: false
  private _nextHeaderMatch?: string; 
  public get nextHeaderMatch() {
    return this.getStringAttribute('next_header_match');
  }
  public set nextHeaderMatch(value: string) {
    this._nextHeaderMatch = value;
  }
  public resetNextHeaderMatch() {
    this._nextHeaderMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHeaderMatchInput() {
    return this._nextHeaderMatch;
  }

  // next_header_value - computed: false, optional: true, required: false
  private _nextHeaderValue?: number; 
  public get nextHeaderValue() {
    return this.getNumberAttribute('next_header_value');
  }
  public set nextHeaderValue(value: number) {
    this._nextHeaderValue = value;
  }
  public resetNextHeaderValue() {
    this._nextHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHeaderValueInput() {
    return this._nextHeaderValue;
  }

  // payload_length_match - computed: false, optional: true, required: false
  private _payloadLengthMatch?: string; 
  public get payloadLengthMatch() {
    return this.getStringAttribute('payload_length_match');
  }
  public set payloadLengthMatch(value: string) {
    this._payloadLengthMatch = value;
  }
  public resetPayloadLengthMatch() {
    this._payloadLengthMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadLengthMatchInput() {
    return this._payloadLengthMatch;
  }

  // payload_length_value - computed: false, optional: true, required: false
  private _payloadLengthValue?: number; 
  public get payloadLengthValue() {
    return this.getNumberAttribute('payload_length_value');
  }
  public set payloadLengthValue(value: number) {
    this._payloadLengthValue = value;
  }
  public resetPayloadLengthValue() {
    this._payloadLengthValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadLengthValueInput() {
    return this._payloadLengthValue;
  }

  // source_match - computed: false, optional: true, required: false
  private _sourceMatch?: string; 
  public get sourceMatch() {
    return this.getStringAttribute('source_match');
  }
  public set sourceMatch(value: string) {
    this._sourceMatch = value;
  }
  public resetSourceMatch() {
    this._sourceMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMatchInput() {
    return this._sourceMatch;
  }

  // source_value - computed: false, optional: true, required: false
  private _sourceValue?: string; 
  public get sourceValue() {
    return this.getStringAttribute('source_value');
  }
  public set sourceValue(value: string) {
    this._sourceValue = value;
  }
  public resetSourceValue() {
    this._sourceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceValueInput() {
    return this._sourceValue;
  }

  // traffic_class_match - computed: false, optional: true, required: false
  private _trafficClassMatch?: string; 
  public get trafficClassMatch() {
    return this.getStringAttribute('traffic_class_match');
  }
  public set trafficClassMatch(value: string) {
    this._trafficClassMatch = value;
  }
  public resetTrafficClassMatch() {
    this._trafficClassMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassMatchInput() {
    return this._trafficClassMatch;
  }

  // traffic_class_value - computed: false, optional: true, required: false
  private _trafficClassValue?: number; 
  public get trafficClassValue() {
    return this.getNumberAttribute('traffic_class_value');
  }
  public set trafficClassValue(value: number) {
    this._trafficClassValue = value;
  }
  public resetTrafficClassValue() {
    this._trafficClassValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassValueInput() {
    return this._trafficClassValue;
  }
}
export interface SecurityIdpCustomAttackAttackTypeSignatureProtocolTcp {
  /**
  * Condition for acknowledgement number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#ack_number_match SecurityIdpCustomAttack#ack_number_match}
  */
  readonly ackNumberMatch?: string;
  /**
  *  Value for acknowledgement number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#ack_number_value SecurityIdpCustomAttack#ack_number_value}
  */
  readonly ackNumberValue?: number;
  /**
  * Condition for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_match SecurityIdpCustomAttack#checksum_validate_match}
  */
  readonly checksumValidateMatch?: string;
  /**
  * Value for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_value SecurityIdpCustomAttack#checksum_validate_value}
  */
  readonly checksumValidateValue?: number;
  /**
  * Condition for size of IP datagram subtracted by TCP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_match SecurityIdpCustomAttack#data_length_match}
  */
  readonly dataLengthMatch?: string;
  /**
  * Value for size of IP datagram subtracted by TCP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_value SecurityIdpCustomAttack#data_length_value}
  */
  readonly dataLengthValue?: number;
  /**
  * Condition for destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_port_match SecurityIdpCustomAttack#destination_port_match}
  */
  readonly destinationPortMatch?: string;
  /**
  * Value for destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_port_value SecurityIdpCustomAttack#destination_port_value}
  */
  readonly destinationPortValue?: number;
  /**
  * Condition for header length in words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#header_length_match SecurityIdpCustomAttack#header_length_match}
  */
  readonly headerLengthMatch?: string;
  /**
  * Value for header length in words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#header_length_value SecurityIdpCustomAttack#header_length_value}
  */
  readonly headerLengthValue?: number;
  /**
  * Condition for maximum segment size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#mss_match SecurityIdpCustomAttack#mss_match}
  */
  readonly mssMatch?: string;
  /**
  * Value for maximum segment size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#mss_value SecurityIdpCustomAttack#mss_value}
  */
  readonly mssValue?: number;
  /**
  * Condition for kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#option_match SecurityIdpCustomAttack#option_match}
  */
  readonly optionMatch?: string;
  /**
  * Value for kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#option_value SecurityIdpCustomAttack#option_value}
  */
  readonly optionValue?: number;
  /**
  * Condition for three reserved bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#reserved_match SecurityIdpCustomAttack#reserved_match}
  */
  readonly reservedMatch?: string;
  /**
  * Value for three reserved bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#reserved_value SecurityIdpCustomAttack#reserved_value}
  */
  readonly reservedValue?: number;
  /**
  * Condition for sequence number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#sequence_number_match SecurityIdpCustomAttack#sequence_number_match}
  */
  readonly sequenceNumberMatch?: string;
  /**
  * Value for sequence number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#sequence_number_value SecurityIdpCustomAttack#sequence_number_value}
  */
  readonly sequenceNumberValue?: number;
  /**
  * Condition for source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_port_match SecurityIdpCustomAttack#source_port_match}
  */
  readonly sourcePortMatch?: string;
  /**
  * Value for source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_port_value SecurityIdpCustomAttack#source_port_value}
  */
  readonly sourcePortValue?: number;
  /**
  * TCP header flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#tcp_flags SecurityIdpCustomAttack#tcp_flags}
  */
  readonly tcpFlags?: string[];
  /**
  * Condition for urgent pointer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#urgent_pointer_match SecurityIdpCustomAttack#urgent_pointer_match}
  */
  readonly urgentPointerMatch?: string;
  /**
  * Value for urgent pointer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#urgent_pointer_value SecurityIdpCustomAttack#urgent_pointer_value}
  */
  readonly urgentPointerValue?: number;
  /**
  * Condition for window scale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#window_scale_match SecurityIdpCustomAttack#window_scale_match}
  */
  readonly windowScaleMatch?: string;
  /**
  * Value for sindow scale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#window_scale_value SecurityIdpCustomAttack#window_scale_value}
  */
  readonly windowScaleValue?: number;
  /**
  * Condition for window size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#window_size_match SecurityIdpCustomAttack#window_size_match}
  */
  readonly windowSizeMatch?: string;
  /**
  * Value for window size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#window_size_value SecurityIdpCustomAttack#window_size_value}
  */
  readonly windowSizeValue?: number;
}

export function securityIdpCustomAttackAttackTypeSignatureProtocolTcpToTerraform(struct?: SecurityIdpCustomAttackAttackTypeSignatureProtocolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_number_match: cdktf.stringToTerraform(struct!.ackNumberMatch),
    ack_number_value: cdktf.numberToTerraform(struct!.ackNumberValue),
    checksum_validate_match: cdktf.stringToTerraform(struct!.checksumValidateMatch),
    checksum_validate_value: cdktf.numberToTerraform(struct!.checksumValidateValue),
    data_length_match: cdktf.stringToTerraform(struct!.dataLengthMatch),
    data_length_value: cdktf.numberToTerraform(struct!.dataLengthValue),
    destination_port_match: cdktf.stringToTerraform(struct!.destinationPortMatch),
    destination_port_value: cdktf.numberToTerraform(struct!.destinationPortValue),
    header_length_match: cdktf.stringToTerraform(struct!.headerLengthMatch),
    header_length_value: cdktf.numberToTerraform(struct!.headerLengthValue),
    mss_match: cdktf.stringToTerraform(struct!.mssMatch),
    mss_value: cdktf.numberToTerraform(struct!.mssValue),
    option_match: cdktf.stringToTerraform(struct!.optionMatch),
    option_value: cdktf.numberToTerraform(struct!.optionValue),
    reserved_match: cdktf.stringToTerraform(struct!.reservedMatch),
    reserved_value: cdktf.numberToTerraform(struct!.reservedValue),
    sequence_number_match: cdktf.stringToTerraform(struct!.sequenceNumberMatch),
    sequence_number_value: cdktf.numberToTerraform(struct!.sequenceNumberValue),
    source_port_match: cdktf.stringToTerraform(struct!.sourcePortMatch),
    source_port_value: cdktf.numberToTerraform(struct!.sourcePortValue),
    tcp_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tcpFlags),
    urgent_pointer_match: cdktf.stringToTerraform(struct!.urgentPointerMatch),
    urgent_pointer_value: cdktf.numberToTerraform(struct!.urgentPointerValue),
    window_scale_match: cdktf.stringToTerraform(struct!.windowScaleMatch),
    window_scale_value: cdktf.numberToTerraform(struct!.windowScaleValue),
    window_size_match: cdktf.stringToTerraform(struct!.windowSizeMatch),
    window_size_value: cdktf.numberToTerraform(struct!.windowSizeValue),
  }
}


export function securityIdpCustomAttackAttackTypeSignatureProtocolTcpToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeSignatureProtocolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_number_match: {
      value: cdktf.stringToHclTerraform(struct!.ackNumberMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ack_number_value: {
      value: cdktf.numberToHclTerraform(struct!.ackNumberValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    checksum_validate_match: {
      value: cdktf.stringToHclTerraform(struct!.checksumValidateMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum_validate_value: {
      value: cdktf.numberToHclTerraform(struct!.checksumValidateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_length_match: {
      value: cdktf.stringToHclTerraform(struct!.dataLengthMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_length_value: {
      value: cdktf.numberToHclTerraform(struct!.dataLengthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_port_match: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_value: {
      value: cdktf.numberToHclTerraform(struct!.destinationPortValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_length_match: {
      value: cdktf.stringToHclTerraform(struct!.headerLengthMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_length_value: {
      value: cdktf.numberToHclTerraform(struct!.headerLengthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mss_match: {
      value: cdktf.stringToHclTerraform(struct!.mssMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mss_value: {
      value: cdktf.numberToHclTerraform(struct!.mssValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    option_match: {
      value: cdktf.stringToHclTerraform(struct!.optionMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_value: {
      value: cdktf.numberToHclTerraform(struct!.optionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reserved_match: {
      value: cdktf.stringToHclTerraform(struct!.reservedMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_value: {
      value: cdktf.numberToHclTerraform(struct!.reservedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_number_match: {
      value: cdktf.stringToHclTerraform(struct!.sequenceNumberMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_number_value: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumberValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port_match: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_value: {
      value: cdktf.numberToHclTerraform(struct!.sourcePortValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tcpFlags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    urgent_pointer_match: {
      value: cdktf.stringToHclTerraform(struct!.urgentPointerMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgent_pointer_value: {
      value: cdktf.numberToHclTerraform(struct!.urgentPointerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_scale_match: {
      value: cdktf.stringToHclTerraform(struct!.windowScaleMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_scale_value: {
      value: cdktf.numberToHclTerraform(struct!.windowScaleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_size_match: {
      value: cdktf.stringToHclTerraform(struct!.windowSizeMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_size_value: {
      value: cdktf.numberToHclTerraform(struct!.windowSizeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeSignatureProtocolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeSignatureProtocolTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackNumberMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackNumberMatch = this._ackNumberMatch;
    }
    if (this._ackNumberValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackNumberValue = this._ackNumberValue;
    }
    if (this._checksumValidateMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateMatch = this._checksumValidateMatch;
    }
    if (this._checksumValidateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateValue = this._checksumValidateValue;
    }
    if (this._dataLengthMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthMatch = this._dataLengthMatch;
    }
    if (this._dataLengthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthValue = this._dataLengthValue;
    }
    if (this._destinationPortMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortMatch = this._destinationPortMatch;
    }
    if (this._destinationPortValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortValue = this._destinationPortValue;
    }
    if (this._headerLengthMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerLengthMatch = this._headerLengthMatch;
    }
    if (this._headerLengthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerLengthValue = this._headerLengthValue;
    }
    if (this._mssMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssMatch = this._mssMatch;
    }
    if (this._mssValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssValue = this._mssValue;
    }
    if (this._optionMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionMatch = this._optionMatch;
    }
    if (this._optionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionValue = this._optionValue;
    }
    if (this._reservedMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedMatch = this._reservedMatch;
    }
    if (this._reservedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedValue = this._reservedValue;
    }
    if (this._sequenceNumberMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumberMatch = this._sequenceNumberMatch;
    }
    if (this._sequenceNumberValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumberValue = this._sequenceNumberValue;
    }
    if (this._sourcePortMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortMatch = this._sourcePortMatch;
    }
    if (this._sourcePortValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortValue = this._sourcePortValue;
    }
    if (this._tcpFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFlags = this._tcpFlags;
    }
    if (this._urgentPointerMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgentPointerMatch = this._urgentPointerMatch;
    }
    if (this._urgentPointerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgentPointerValue = this._urgentPointerValue;
    }
    if (this._windowScaleMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowScaleMatch = this._windowScaleMatch;
    }
    if (this._windowScaleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowScaleValue = this._windowScaleValue;
    }
    if (this._windowSizeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSizeMatch = this._windowSizeMatch;
    }
    if (this._windowSizeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSizeValue = this._windowSizeValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeSignatureProtocolTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ackNumberMatch = undefined;
      this._ackNumberValue = undefined;
      this._checksumValidateMatch = undefined;
      this._checksumValidateValue = undefined;
      this._dataLengthMatch = undefined;
      this._dataLengthValue = undefined;
      this._destinationPortMatch = undefined;
      this._destinationPortValue = undefined;
      this._headerLengthMatch = undefined;
      this._headerLengthValue = undefined;
      this._mssMatch = undefined;
      this._mssValue = undefined;
      this._optionMatch = undefined;
      this._optionValue = undefined;
      this._reservedMatch = undefined;
      this._reservedValue = undefined;
      this._sequenceNumberMatch = undefined;
      this._sequenceNumberValue = undefined;
      this._sourcePortMatch = undefined;
      this._sourcePortValue = undefined;
      this._tcpFlags = undefined;
      this._urgentPointerMatch = undefined;
      this._urgentPointerValue = undefined;
      this._windowScaleMatch = undefined;
      this._windowScaleValue = undefined;
      this._windowSizeMatch = undefined;
      this._windowSizeValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ackNumberMatch = value.ackNumberMatch;
      this._ackNumberValue = value.ackNumberValue;
      this._checksumValidateMatch = value.checksumValidateMatch;
      this._checksumValidateValue = value.checksumValidateValue;
      this._dataLengthMatch = value.dataLengthMatch;
      this._dataLengthValue = value.dataLengthValue;
      this._destinationPortMatch = value.destinationPortMatch;
      this._destinationPortValue = value.destinationPortValue;
      this._headerLengthMatch = value.headerLengthMatch;
      this._headerLengthValue = value.headerLengthValue;
      this._mssMatch = value.mssMatch;
      this._mssValue = value.mssValue;
      this._optionMatch = value.optionMatch;
      this._optionValue = value.optionValue;
      this._reservedMatch = value.reservedMatch;
      this._reservedValue = value.reservedValue;
      this._sequenceNumberMatch = value.sequenceNumberMatch;
      this._sequenceNumberValue = value.sequenceNumberValue;
      this._sourcePortMatch = value.sourcePortMatch;
      this._sourcePortValue = value.sourcePortValue;
      this._tcpFlags = value.tcpFlags;
      this._urgentPointerMatch = value.urgentPointerMatch;
      this._urgentPointerValue = value.urgentPointerValue;
      this._windowScaleMatch = value.windowScaleMatch;
      this._windowScaleValue = value.windowScaleValue;
      this._windowSizeMatch = value.windowSizeMatch;
      this._windowSizeValue = value.windowSizeValue;
    }
  }

  // ack_number_match - computed: false, optional: true, required: false
  private _ackNumberMatch?: string; 
  public get ackNumberMatch() {
    return this.getStringAttribute('ack_number_match');
  }
  public set ackNumberMatch(value: string) {
    this._ackNumberMatch = value;
  }
  public resetAckNumberMatch() {
    this._ackNumberMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackNumberMatchInput() {
    return this._ackNumberMatch;
  }

  // ack_number_value - computed: false, optional: true, required: false
  private _ackNumberValue?: number; 
  public get ackNumberValue() {
    return this.getNumberAttribute('ack_number_value');
  }
  public set ackNumberValue(value: number) {
    this._ackNumberValue = value;
  }
  public resetAckNumberValue() {
    this._ackNumberValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackNumberValueInput() {
    return this._ackNumberValue;
  }

  // checksum_validate_match - computed: false, optional: true, required: false
  private _checksumValidateMatch?: string; 
  public get checksumValidateMatch() {
    return this.getStringAttribute('checksum_validate_match');
  }
  public set checksumValidateMatch(value: string) {
    this._checksumValidateMatch = value;
  }
  public resetChecksumValidateMatch() {
    this._checksumValidateMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateMatchInput() {
    return this._checksumValidateMatch;
  }

  // checksum_validate_value - computed: false, optional: true, required: false
  private _checksumValidateValue?: number; 
  public get checksumValidateValue() {
    return this.getNumberAttribute('checksum_validate_value');
  }
  public set checksumValidateValue(value: number) {
    this._checksumValidateValue = value;
  }
  public resetChecksumValidateValue() {
    this._checksumValidateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateValueInput() {
    return this._checksumValidateValue;
  }

  // data_length_match - computed: false, optional: true, required: false
  private _dataLengthMatch?: string; 
  public get dataLengthMatch() {
    return this.getStringAttribute('data_length_match');
  }
  public set dataLengthMatch(value: string) {
    this._dataLengthMatch = value;
  }
  public resetDataLengthMatch() {
    this._dataLengthMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthMatchInput() {
    return this._dataLengthMatch;
  }

  // data_length_value - computed: false, optional: true, required: false
  private _dataLengthValue?: number; 
  public get dataLengthValue() {
    return this.getNumberAttribute('data_length_value');
  }
  public set dataLengthValue(value: number) {
    this._dataLengthValue = value;
  }
  public resetDataLengthValue() {
    this._dataLengthValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthValueInput() {
    return this._dataLengthValue;
  }

  // destination_port_match - computed: false, optional: true, required: false
  private _destinationPortMatch?: string; 
  public get destinationPortMatch() {
    return this.getStringAttribute('destination_port_match');
  }
  public set destinationPortMatch(value: string) {
    this._destinationPortMatch = value;
  }
  public resetDestinationPortMatch() {
    this._destinationPortMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortMatchInput() {
    return this._destinationPortMatch;
  }

  // destination_port_value - computed: false, optional: true, required: false
  private _destinationPortValue?: number; 
  public get destinationPortValue() {
    return this.getNumberAttribute('destination_port_value');
  }
  public set destinationPortValue(value: number) {
    this._destinationPortValue = value;
  }
  public resetDestinationPortValue() {
    this._destinationPortValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortValueInput() {
    return this._destinationPortValue;
  }

  // header_length_match - computed: false, optional: true, required: false
  private _headerLengthMatch?: string; 
  public get headerLengthMatch() {
    return this.getStringAttribute('header_length_match');
  }
  public set headerLengthMatch(value: string) {
    this._headerLengthMatch = value;
  }
  public resetHeaderLengthMatch() {
    this._headerLengthMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerLengthMatchInput() {
    return this._headerLengthMatch;
  }

  // header_length_value - computed: false, optional: true, required: false
  private _headerLengthValue?: number; 
  public get headerLengthValue() {
    return this.getNumberAttribute('header_length_value');
  }
  public set headerLengthValue(value: number) {
    this._headerLengthValue = value;
  }
  public resetHeaderLengthValue() {
    this._headerLengthValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerLengthValueInput() {
    return this._headerLengthValue;
  }

  // mss_match - computed: false, optional: true, required: false
  private _mssMatch?: string; 
  public get mssMatch() {
    return this.getStringAttribute('mss_match');
  }
  public set mssMatch(value: string) {
    this._mssMatch = value;
  }
  public resetMssMatch() {
    this._mssMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssMatchInput() {
    return this._mssMatch;
  }

  // mss_value - computed: false, optional: true, required: false
  private _mssValue?: number; 
  public get mssValue() {
    return this.getNumberAttribute('mss_value');
  }
  public set mssValue(value: number) {
    this._mssValue = value;
  }
  public resetMssValue() {
    this._mssValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssValueInput() {
    return this._mssValue;
  }

  // option_match - computed: false, optional: true, required: false
  private _optionMatch?: string; 
  public get optionMatch() {
    return this.getStringAttribute('option_match');
  }
  public set optionMatch(value: string) {
    this._optionMatch = value;
  }
  public resetOptionMatch() {
    this._optionMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionMatchInput() {
    return this._optionMatch;
  }

  // option_value - computed: false, optional: true, required: false
  private _optionValue?: number; 
  public get optionValue() {
    return this.getNumberAttribute('option_value');
  }
  public set optionValue(value: number) {
    this._optionValue = value;
  }
  public resetOptionValue() {
    this._optionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValueInput() {
    return this._optionValue;
  }

  // reserved_match - computed: false, optional: true, required: false
  private _reservedMatch?: string; 
  public get reservedMatch() {
    return this.getStringAttribute('reserved_match');
  }
  public set reservedMatch(value: string) {
    this._reservedMatch = value;
  }
  public resetReservedMatch() {
    this._reservedMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedMatchInput() {
    return this._reservedMatch;
  }

  // reserved_value - computed: false, optional: true, required: false
  private _reservedValue?: number; 
  public get reservedValue() {
    return this.getNumberAttribute('reserved_value');
  }
  public set reservedValue(value: number) {
    this._reservedValue = value;
  }
  public resetReservedValue() {
    this._reservedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedValueInput() {
    return this._reservedValue;
  }

  // sequence_number_match - computed: false, optional: true, required: false
  private _sequenceNumberMatch?: string; 
  public get sequenceNumberMatch() {
    return this.getStringAttribute('sequence_number_match');
  }
  public set sequenceNumberMatch(value: string) {
    this._sequenceNumberMatch = value;
  }
  public resetSequenceNumberMatch() {
    this._sequenceNumberMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberMatchInput() {
    return this._sequenceNumberMatch;
  }

  // sequence_number_value - computed: false, optional: true, required: false
  private _sequenceNumberValue?: number; 
  public get sequenceNumberValue() {
    return this.getNumberAttribute('sequence_number_value');
  }
  public set sequenceNumberValue(value: number) {
    this._sequenceNumberValue = value;
  }
  public resetSequenceNumberValue() {
    this._sequenceNumberValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberValueInput() {
    return this._sequenceNumberValue;
  }

  // source_port_match - computed: false, optional: true, required: false
  private _sourcePortMatch?: string; 
  public get sourcePortMatch() {
    return this.getStringAttribute('source_port_match');
  }
  public set sourcePortMatch(value: string) {
    this._sourcePortMatch = value;
  }
  public resetSourcePortMatch() {
    this._sourcePortMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortMatchInput() {
    return this._sourcePortMatch;
  }

  // source_port_value - computed: false, optional: true, required: false
  private _sourcePortValue?: number; 
  public get sourcePortValue() {
    return this.getNumberAttribute('source_port_value');
  }
  public set sourcePortValue(value: number) {
    this._sourcePortValue = value;
  }
  public resetSourcePortValue() {
    this._sourcePortValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortValueInput() {
    return this._sourcePortValue;
  }

  // tcp_flags - computed: false, optional: true, required: false
  private _tcpFlags?: string[]; 
  public get tcpFlags() {
    return cdktf.Fn.tolist(this.getListAttribute('tcp_flags'));
  }
  public set tcpFlags(value: string[]) {
    this._tcpFlags = value;
  }
  public resetTcpFlags() {
    this._tcpFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagsInput() {
    return this._tcpFlags;
  }

  // urgent_pointer_match - computed: false, optional: true, required: false
  private _urgentPointerMatch?: string; 
  public get urgentPointerMatch() {
    return this.getStringAttribute('urgent_pointer_match');
  }
  public set urgentPointerMatch(value: string) {
    this._urgentPointerMatch = value;
  }
  public resetUrgentPointerMatch() {
    this._urgentPointerMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgentPointerMatchInput() {
    return this._urgentPointerMatch;
  }

  // urgent_pointer_value - computed: false, optional: true, required: false
  private _urgentPointerValue?: number; 
  public get urgentPointerValue() {
    return this.getNumberAttribute('urgent_pointer_value');
  }
  public set urgentPointerValue(value: number) {
    this._urgentPointerValue = value;
  }
  public resetUrgentPointerValue() {
    this._urgentPointerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgentPointerValueInput() {
    return this._urgentPointerValue;
  }

  // window_scale_match - computed: false, optional: true, required: false
  private _windowScaleMatch?: string; 
  public get windowScaleMatch() {
    return this.getStringAttribute('window_scale_match');
  }
  public set windowScaleMatch(value: string) {
    this._windowScaleMatch = value;
  }
  public resetWindowScaleMatch() {
    this._windowScaleMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowScaleMatchInput() {
    return this._windowScaleMatch;
  }

  // window_scale_value - computed: false, optional: true, required: false
  private _windowScaleValue?: number; 
  public get windowScaleValue() {
    return this.getNumberAttribute('window_scale_value');
  }
  public set windowScaleValue(value: number) {
    this._windowScaleValue = value;
  }
  public resetWindowScaleValue() {
    this._windowScaleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowScaleValueInput() {
    return this._windowScaleValue;
  }

  // window_size_match - computed: false, optional: true, required: false
  private _windowSizeMatch?: string; 
  public get windowSizeMatch() {
    return this.getStringAttribute('window_size_match');
  }
  public set windowSizeMatch(value: string) {
    this._windowSizeMatch = value;
  }
  public resetWindowSizeMatch() {
    this._windowSizeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeMatchInput() {
    return this._windowSizeMatch;
  }

  // window_size_value - computed: false, optional: true, required: false
  private _windowSizeValue?: number; 
  public get windowSizeValue() {
    return this.getNumberAttribute('window_size_value');
  }
  public set windowSizeValue(value: number) {
    this._windowSizeValue = value;
  }
  public resetWindowSizeValue() {
    this._windowSizeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeValueInput() {
    return this._windowSizeValue;
  }
}
export interface SecurityIdpCustomAttackAttackTypeSignatureProtocolUdp {
  /**
  * Condition for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_match SecurityIdpCustomAttack#checksum_validate_match}
  */
  readonly checksumValidateMatch?: string;
  /**
  * Value for validate checksum field against calculated checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#checksum_validate_value SecurityIdpCustomAttack#checksum_validate_value}
  */
  readonly checksumValidateValue?: number;
  /**
  * Condition for size of IP datagram subtracted by UDP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_match SecurityIdpCustomAttack#data_length_match}
  */
  readonly dataLengthMatch?: string;
  /**
  * Value for size of IP datagram subtracted by UDP header length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#data_length_value SecurityIdpCustomAttack#data_length_value}
  */
  readonly dataLengthValue?: number;
  /**
  * Condition for destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_port_match SecurityIdpCustomAttack#destination_port_match}
  */
  readonly destinationPortMatch?: string;
  /**
  * Value for destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#destination_port_value SecurityIdpCustomAttack#destination_port_value}
  */
  readonly destinationPortValue?: number;
  /**
  * Condition for source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_port_match SecurityIdpCustomAttack#source_port_match}
  */
  readonly sourcePortMatch?: string;
  /**
  * Value for source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#source_port_value SecurityIdpCustomAttack#source_port_value}
  */
  readonly sourcePortValue?: number;
}

export function securityIdpCustomAttackAttackTypeSignatureProtocolUdpToTerraform(struct?: SecurityIdpCustomAttackAttackTypeSignatureProtocolUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum_validate_match: cdktf.stringToTerraform(struct!.checksumValidateMatch),
    checksum_validate_value: cdktf.numberToTerraform(struct!.checksumValidateValue),
    data_length_match: cdktf.stringToTerraform(struct!.dataLengthMatch),
    data_length_value: cdktf.numberToTerraform(struct!.dataLengthValue),
    destination_port_match: cdktf.stringToTerraform(struct!.destinationPortMatch),
    destination_port_value: cdktf.numberToTerraform(struct!.destinationPortValue),
    source_port_match: cdktf.stringToTerraform(struct!.sourcePortMatch),
    source_port_value: cdktf.numberToTerraform(struct!.sourcePortValue),
  }
}


export function securityIdpCustomAttackAttackTypeSignatureProtocolUdpToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeSignatureProtocolUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum_validate_match: {
      value: cdktf.stringToHclTerraform(struct!.checksumValidateMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum_validate_value: {
      value: cdktf.numberToHclTerraform(struct!.checksumValidateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_length_match: {
      value: cdktf.stringToHclTerraform(struct!.dataLengthMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_length_value: {
      value: cdktf.numberToHclTerraform(struct!.dataLengthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_port_match: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_value: {
      value: cdktf.numberToHclTerraform(struct!.destinationPortValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port_match: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_value: {
      value: cdktf.numberToHclTerraform(struct!.sourcePortValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeSignatureProtocolUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeSignatureProtocolUdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksumValidateMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateMatch = this._checksumValidateMatch;
    }
    if (this._checksumValidateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumValidateValue = this._checksumValidateValue;
    }
    if (this._dataLengthMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthMatch = this._dataLengthMatch;
    }
    if (this._dataLengthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthValue = this._dataLengthValue;
    }
    if (this._destinationPortMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortMatch = this._destinationPortMatch;
    }
    if (this._destinationPortValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortValue = this._destinationPortValue;
    }
    if (this._sourcePortMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortMatch = this._sourcePortMatch;
    }
    if (this._sourcePortValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortValue = this._sourcePortValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeSignatureProtocolUdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = undefined;
      this._checksumValidateValue = undefined;
      this._dataLengthMatch = undefined;
      this._dataLengthValue = undefined;
      this._destinationPortMatch = undefined;
      this._destinationPortValue = undefined;
      this._sourcePortMatch = undefined;
      this._sourcePortValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksumValidateMatch = value.checksumValidateMatch;
      this._checksumValidateValue = value.checksumValidateValue;
      this._dataLengthMatch = value.dataLengthMatch;
      this._dataLengthValue = value.dataLengthValue;
      this._destinationPortMatch = value.destinationPortMatch;
      this._destinationPortValue = value.destinationPortValue;
      this._sourcePortMatch = value.sourcePortMatch;
      this._sourcePortValue = value.sourcePortValue;
    }
  }

  // checksum_validate_match - computed: false, optional: true, required: false
  private _checksumValidateMatch?: string; 
  public get checksumValidateMatch() {
    return this.getStringAttribute('checksum_validate_match');
  }
  public set checksumValidateMatch(value: string) {
    this._checksumValidateMatch = value;
  }
  public resetChecksumValidateMatch() {
    this._checksumValidateMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateMatchInput() {
    return this._checksumValidateMatch;
  }

  // checksum_validate_value - computed: false, optional: true, required: false
  private _checksumValidateValue?: number; 
  public get checksumValidateValue() {
    return this.getNumberAttribute('checksum_validate_value');
  }
  public set checksumValidateValue(value: number) {
    this._checksumValidateValue = value;
  }
  public resetChecksumValidateValue() {
    this._checksumValidateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumValidateValueInput() {
    return this._checksumValidateValue;
  }

  // data_length_match - computed: false, optional: true, required: false
  private _dataLengthMatch?: string; 
  public get dataLengthMatch() {
    return this.getStringAttribute('data_length_match');
  }
  public set dataLengthMatch(value: string) {
    this._dataLengthMatch = value;
  }
  public resetDataLengthMatch() {
    this._dataLengthMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthMatchInput() {
    return this._dataLengthMatch;
  }

  // data_length_value - computed: false, optional: true, required: false
  private _dataLengthValue?: number; 
  public get dataLengthValue() {
    return this.getNumberAttribute('data_length_value');
  }
  public set dataLengthValue(value: number) {
    this._dataLengthValue = value;
  }
  public resetDataLengthValue() {
    this._dataLengthValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthValueInput() {
    return this._dataLengthValue;
  }

  // destination_port_match - computed: false, optional: true, required: false
  private _destinationPortMatch?: string; 
  public get destinationPortMatch() {
    return this.getStringAttribute('destination_port_match');
  }
  public set destinationPortMatch(value: string) {
    this._destinationPortMatch = value;
  }
  public resetDestinationPortMatch() {
    this._destinationPortMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortMatchInput() {
    return this._destinationPortMatch;
  }

  // destination_port_value - computed: false, optional: true, required: false
  private _destinationPortValue?: number; 
  public get destinationPortValue() {
    return this.getNumberAttribute('destination_port_value');
  }
  public set destinationPortValue(value: number) {
    this._destinationPortValue = value;
  }
  public resetDestinationPortValue() {
    this._destinationPortValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortValueInput() {
    return this._destinationPortValue;
  }

  // source_port_match - computed: false, optional: true, required: false
  private _sourcePortMatch?: string; 
  public get sourcePortMatch() {
    return this.getStringAttribute('source_port_match');
  }
  public set sourcePortMatch(value: string) {
    this._sourcePortMatch = value;
  }
  public resetSourcePortMatch() {
    this._sourcePortMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortMatchInput() {
    return this._sourcePortMatch;
  }

  // source_port_value - computed: false, optional: true, required: false
  private _sourcePortValue?: number; 
  public get sourcePortValue() {
    return this.getNumberAttribute('source_port_value');
  }
  public set sourcePortValue(value: number) {
    this._sourcePortValue = value;
  }
  public resetSourcePortValue() {
    this._sourcePortValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortValueInput() {
    return this._sourcePortValue;
  }
}
export interface SecurityIdpCustomAttackAttackTypeSignature {
  /**
  * Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#context SecurityIdpCustomAttack#context}
  */
  readonly context?: string;
  /**
  * Connection direction of the attack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#direction SecurityIdpCustomAttack#direction}
  */
  readonly direction?: string;
  /**
  * Trigger the attack if condition is not met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#negate SecurityIdpCustomAttack#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Pattern is the signature of the attack you want to detect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#pattern SecurityIdpCustomAttack#pattern}
  */
  readonly pattern?: string;
  /**
  * Attack signature pattern in PCRE format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#pattern_pcre SecurityIdpCustomAttack#pattern_pcre}
  */
  readonly patternPcre?: string;
  /**
  * Protocol binding over which attack will be detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_binding SecurityIdpCustomAttack#protocol_binding}
  */
  readonly protocolBinding?: string;
  /**
  * Regular expression used for matching repetition of patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#regexp SecurityIdpCustomAttack#regexp}
  */
  readonly regexp?: string;
  /**
  * Specify shellcode flag for this attack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#shellcode SecurityIdpCustomAttack#shellcode}
  */
  readonly shellcode?: string;
  /**
  * protocol_icmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_icmp SecurityIdpCustomAttack#protocol_icmp}
  */
  readonly protocolIcmp?: SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmp;
  /**
  * protocol_icmpv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_icmpv6 SecurityIdpCustomAttack#protocol_icmpv6}
  */
  readonly protocolIcmpv6?: SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmpv6;
  /**
  * protocol_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_ipv4 SecurityIdpCustomAttack#protocol_ipv4}
  */
  readonly protocolIpv4?: SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv4;
  /**
  * protocol_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_ipv6 SecurityIdpCustomAttack#protocol_ipv6}
  */
  readonly protocolIpv6?: SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv6;
  /**
  * protocol_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_tcp SecurityIdpCustomAttack#protocol_tcp}
  */
  readonly protocolTcp?: SecurityIdpCustomAttackAttackTypeSignatureProtocolTcp;
  /**
  * protocol_udp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#protocol_udp SecurityIdpCustomAttack#protocol_udp}
  */
  readonly protocolUdp?: SecurityIdpCustomAttackAttackTypeSignatureProtocolUdp;
}

export function securityIdpCustomAttackAttackTypeSignatureToTerraform(struct?: SecurityIdpCustomAttackAttackTypeSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    direction: cdktf.stringToTerraform(struct!.direction),
    negate: cdktf.booleanToTerraform(struct!.negate),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    pattern_pcre: cdktf.stringToTerraform(struct!.patternPcre),
    protocol_binding: cdktf.stringToTerraform(struct!.protocolBinding),
    regexp: cdktf.stringToTerraform(struct!.regexp),
    shellcode: cdktf.stringToTerraform(struct!.shellcode),
    protocol_icmp: securityIdpCustomAttackAttackTypeSignatureProtocolIcmpToTerraform(struct!.protocolIcmp),
    protocol_icmpv6: securityIdpCustomAttackAttackTypeSignatureProtocolIcmpv6ToTerraform(struct!.protocolIcmpv6),
    protocol_ipv4: securityIdpCustomAttackAttackTypeSignatureProtocolIpv4ToTerraform(struct!.protocolIpv4),
    protocol_ipv6: securityIdpCustomAttackAttackTypeSignatureProtocolIpv6ToTerraform(struct!.protocolIpv6),
    protocol_tcp: securityIdpCustomAttackAttackTypeSignatureProtocolTcpToTerraform(struct!.protocolTcp),
    protocol_udp: securityIdpCustomAttackAttackTypeSignatureProtocolUdpToTerraform(struct!.protocolUdp),
  }
}


export function securityIdpCustomAttackAttackTypeSignatureToHclTerraform(struct?: SecurityIdpCustomAttackAttackTypeSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_pcre: {
      value: cdktf.stringToHclTerraform(struct!.patternPcre),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_binding: {
      value: cdktf.stringToHclTerraform(struct!.protocolBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shellcode: {
      value: cdktf.stringToHclTerraform(struct!.shellcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_icmp: {
      value: securityIdpCustomAttackAttackTypeSignatureProtocolIcmpToHclTerraform(struct!.protocolIcmp),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmp",
    },
    protocol_icmpv6: {
      value: securityIdpCustomAttackAttackTypeSignatureProtocolIcmpv6ToHclTerraform(struct!.protocolIcmpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmpv6",
    },
    protocol_ipv4: {
      value: securityIdpCustomAttackAttackTypeSignatureProtocolIpv4ToHclTerraform(struct!.protocolIpv4),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv4",
    },
    protocol_ipv6: {
      value: securityIdpCustomAttackAttackTypeSignatureProtocolIpv6ToHclTerraform(struct!.protocolIpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv6",
    },
    protocol_tcp: {
      value: securityIdpCustomAttackAttackTypeSignatureProtocolTcpToHclTerraform(struct!.protocolTcp),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpCustomAttackAttackTypeSignatureProtocolTcp",
    },
    protocol_udp: {
      value: securityIdpCustomAttackAttackTypeSignatureProtocolUdpToHclTerraform(struct!.protocolUdp),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpCustomAttackAttackTypeSignatureProtocolUdp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpCustomAttackAttackTypeSignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpCustomAttackAttackTypeSignature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._patternPcre !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternPcre = this._patternPcre;
    }
    if (this._protocolBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolBinding = this._protocolBinding;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._shellcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.shellcode = this._shellcode;
    }
    if (this._protocolIcmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolIcmp = this._protocolIcmp?.internalValue;
    }
    if (this._protocolIcmpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolIcmpv6 = this._protocolIcmpv6?.internalValue;
    }
    if (this._protocolIpv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolIpv4 = this._protocolIpv4?.internalValue;
    }
    if (this._protocolIpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolIpv6 = this._protocolIpv6?.internalValue;
    }
    if (this._protocolTcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolTcp = this._protocolTcp?.internalValue;
    }
    if (this._protocolUdp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolUdp = this._protocolUdp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpCustomAttackAttackTypeSignature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._direction = undefined;
      this._negate = undefined;
      this._pattern = undefined;
      this._patternPcre = undefined;
      this._protocolBinding = undefined;
      this._regexp = undefined;
      this._shellcode = undefined;
      this._protocolIcmp.internalValue = undefined;
      this._protocolIcmpv6.internalValue = undefined;
      this._protocolIpv4.internalValue = undefined;
      this._protocolIpv6.internalValue = undefined;
      this._protocolTcp.internalValue = undefined;
      this._protocolUdp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._direction = value.direction;
      this._negate = value.negate;
      this._pattern = value.pattern;
      this._patternPcre = value.patternPcre;
      this._protocolBinding = value.protocolBinding;
      this._regexp = value.regexp;
      this._shellcode = value.shellcode;
      this._protocolIcmp.internalValue = value.protocolIcmp;
      this._protocolIcmpv6.internalValue = value.protocolIcmpv6;
      this._protocolIpv4.internalValue = value.protocolIpv4;
      this._protocolIpv6.internalValue = value.protocolIpv6;
      this._protocolTcp.internalValue = value.protocolTcp;
      this._protocolUdp.internalValue = value.protocolUdp;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // pattern_pcre - computed: false, optional: true, required: false
  private _patternPcre?: string; 
  public get patternPcre() {
    return this.getStringAttribute('pattern_pcre');
  }
  public set patternPcre(value: string) {
    this._patternPcre = value;
  }
  public resetPatternPcre() {
    this._patternPcre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternPcreInput() {
    return this._patternPcre;
  }

  // protocol_binding - computed: false, optional: true, required: false
  private _protocolBinding?: string; 
  public get protocolBinding() {
    return this.getStringAttribute('protocol_binding');
  }
  public set protocolBinding(value: string) {
    this._protocolBinding = value;
  }
  public resetProtocolBinding() {
    this._protocolBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolBindingInput() {
    return this._protocolBinding;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // shellcode - computed: false, optional: true, required: false
  private _shellcode?: string; 
  public get shellcode() {
    return this.getStringAttribute('shellcode');
  }
  public set shellcode(value: string) {
    this._shellcode = value;
  }
  public resetShellcode() {
    this._shellcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellcodeInput() {
    return this._shellcode;
  }

  // protocol_icmp - computed: false, optional: true, required: false
  private _protocolIcmp = new SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmpOutputReference(this, "protocol_icmp");
  public get protocolIcmp() {
    return this._protocolIcmp;
  }
  public putProtocolIcmp(value: SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmp) {
    this._protocolIcmp.internalValue = value;
  }
  public resetProtocolIcmp() {
    this._protocolIcmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolIcmpInput() {
    return this._protocolIcmp.internalValue;
  }

  // protocol_icmpv6 - computed: false, optional: true, required: false
  private _protocolIcmpv6 = new SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmpv6OutputReference(this, "protocol_icmpv6");
  public get protocolIcmpv6() {
    return this._protocolIcmpv6;
  }
  public putProtocolIcmpv6(value: SecurityIdpCustomAttackAttackTypeSignatureProtocolIcmpv6) {
    this._protocolIcmpv6.internalValue = value;
  }
  public resetProtocolIcmpv6() {
    this._protocolIcmpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolIcmpv6Input() {
    return this._protocolIcmpv6.internalValue;
  }

  // protocol_ipv4 - computed: false, optional: true, required: false
  private _protocolIpv4 = new SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv4OutputReference(this, "protocol_ipv4");
  public get protocolIpv4() {
    return this._protocolIpv4;
  }
  public putProtocolIpv4(value: SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv4) {
    this._protocolIpv4.internalValue = value;
  }
  public resetProtocolIpv4() {
    this._protocolIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolIpv4Input() {
    return this._protocolIpv4.internalValue;
  }

  // protocol_ipv6 - computed: false, optional: true, required: false
  private _protocolIpv6 = new SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv6OutputReference(this, "protocol_ipv6");
  public get protocolIpv6() {
    return this._protocolIpv6;
  }
  public putProtocolIpv6(value: SecurityIdpCustomAttackAttackTypeSignatureProtocolIpv6) {
    this._protocolIpv6.internalValue = value;
  }
  public resetProtocolIpv6() {
    this._protocolIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolIpv6Input() {
    return this._protocolIpv6.internalValue;
  }

  // protocol_tcp - computed: false, optional: true, required: false
  private _protocolTcp = new SecurityIdpCustomAttackAttackTypeSignatureProtocolTcpOutputReference(this, "protocol_tcp");
  public get protocolTcp() {
    return this._protocolTcp;
  }
  public putProtocolTcp(value: SecurityIdpCustomAttackAttackTypeSignatureProtocolTcp) {
    this._protocolTcp.internalValue = value;
  }
  public resetProtocolTcp() {
    this._protocolTcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTcpInput() {
    return this._protocolTcp.internalValue;
  }

  // protocol_udp - computed: false, optional: true, required: false
  private _protocolUdp = new SecurityIdpCustomAttackAttackTypeSignatureProtocolUdpOutputReference(this, "protocol_udp");
  public get protocolUdp() {
    return this._protocolUdp;
  }
  public putProtocolUdp(value: SecurityIdpCustomAttackAttackTypeSignatureProtocolUdp) {
    this._protocolUdp.internalValue = value;
  }
  public resetProtocolUdp() {
    this._protocolUdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolUdpInput() {
    return this._protocolUdp.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack junos_security_idp_custom_attack}
*/
export class SecurityIdpCustomAttack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_idp_custom_attack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityIdpCustomAttack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityIdpCustomAttack to import
  * @param importFromId The id of the existing SecurityIdpCustomAttack that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityIdpCustomAttack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_idp_custom_attack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack junos_security_idp_custom_attack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityIdpCustomAttackConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityIdpCustomAttackConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_idp_custom_attack',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._recommendedAction = config.recommendedAction;
    this._severity = config.severity;
    this._timeBindingCount = config.timeBindingCount;
    this._timeBindingScope = config.timeBindingScope;
    this._attackTypeAnomaly.internalValue = config.attackTypeAnomaly;
    this._attackTypeChain.internalValue = config.attackTypeChain;
    this._attackTypeSignature.internalValue = config.attackTypeSignature;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // recommended_action - computed: false, optional: true, required: false
  private _recommendedAction?: string; 
  public get recommendedAction() {
    return this.getStringAttribute('recommended_action');
  }
  public set recommendedAction(value: string) {
    this._recommendedAction = value;
  }
  public resetRecommendedAction() {
    this._recommendedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedActionInput() {
    return this._recommendedAction;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // time_binding_count - computed: false, optional: true, required: false
  private _timeBindingCount?: number; 
  public get timeBindingCount() {
    return this.getNumberAttribute('time_binding_count');
  }
  public set timeBindingCount(value: number) {
    this._timeBindingCount = value;
  }
  public resetTimeBindingCount() {
    this._timeBindingCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBindingCountInput() {
    return this._timeBindingCount;
  }

  // time_binding_scope - computed: false, optional: true, required: false
  private _timeBindingScope?: string; 
  public get timeBindingScope() {
    return this.getStringAttribute('time_binding_scope');
  }
  public set timeBindingScope(value: string) {
    this._timeBindingScope = value;
  }
  public resetTimeBindingScope() {
    this._timeBindingScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBindingScopeInput() {
    return this._timeBindingScope;
  }

  // attack_type_anomaly - computed: false, optional: true, required: false
  private _attackTypeAnomaly = new SecurityIdpCustomAttackAttackTypeAnomalyOutputReference(this, "attack_type_anomaly");
  public get attackTypeAnomaly() {
    return this._attackTypeAnomaly;
  }
  public putAttackTypeAnomaly(value: SecurityIdpCustomAttackAttackTypeAnomaly) {
    this._attackTypeAnomaly.internalValue = value;
  }
  public resetAttackTypeAnomaly() {
    this._attackTypeAnomaly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackTypeAnomalyInput() {
    return this._attackTypeAnomaly.internalValue;
  }

  // attack_type_chain - computed: false, optional: true, required: false
  private _attackTypeChain = new SecurityIdpCustomAttackAttackTypeChainOutputReference(this, "attack_type_chain");
  public get attackTypeChain() {
    return this._attackTypeChain;
  }
  public putAttackTypeChain(value: SecurityIdpCustomAttackAttackTypeChain) {
    this._attackTypeChain.internalValue = value;
  }
  public resetAttackTypeChain() {
    this._attackTypeChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackTypeChainInput() {
    return this._attackTypeChain.internalValue;
  }

  // attack_type_signature - computed: false, optional: true, required: false
  private _attackTypeSignature = new SecurityIdpCustomAttackAttackTypeSignatureOutputReference(this, "attack_type_signature");
  public get attackTypeSignature() {
    return this._attackTypeSignature;
  }
  public putAttackTypeSignature(value: SecurityIdpCustomAttackAttackTypeSignature) {
    this._attackTypeSignature.internalValue = value;
  }
  public resetAttackTypeSignature() {
    this._attackTypeSignature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackTypeSignatureInput() {
    return this._attackTypeSignature.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      recommended_action: cdktf.stringToTerraform(this._recommendedAction),
      severity: cdktf.stringToTerraform(this._severity),
      time_binding_count: cdktf.numberToTerraform(this._timeBindingCount),
      time_binding_scope: cdktf.stringToTerraform(this._timeBindingScope),
      attack_type_anomaly: securityIdpCustomAttackAttackTypeAnomalyToTerraform(this._attackTypeAnomaly.internalValue),
      attack_type_chain: securityIdpCustomAttackAttackTypeChainToTerraform(this._attackTypeChain.internalValue),
      attack_type_signature: securityIdpCustomAttackAttackTypeSignatureToTerraform(this._attackTypeSignature.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recommended_action: {
        value: cdktf.stringToHclTerraform(this._recommendedAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_binding_count: {
        value: cdktf.numberToHclTerraform(this._timeBindingCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_binding_scope: {
        value: cdktf.stringToHclTerraform(this._timeBindingScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attack_type_anomaly: {
        value: securityIdpCustomAttackAttackTypeAnomalyToHclTerraform(this._attackTypeAnomaly.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityIdpCustomAttackAttackTypeAnomaly",
      },
      attack_type_chain: {
        value: securityIdpCustomAttackAttackTypeChainToHclTerraform(this._attackTypeChain.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityIdpCustomAttackAttackTypeChain",
      },
      attack_type_signature: {
        value: securityIdpCustomAttackAttackTypeSignatureToHclTerraform(this._attackTypeSignature.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityIdpCustomAttackAttackTypeSignature",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
