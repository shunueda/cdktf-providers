// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetIsisAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'level-1': Level-1 only adjacencies are formed; 'level-1-2': Level-1-2 adjacencies are formed; 'level-2-only': Level-2 only adjacencies are formed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#circuit_type InterfaceEthernetIsisA#circuit_type}
  */
  readonly circuitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#id InterfaceEthernetIsisA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ifnum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#ifnum InterfaceEthernetIsisA#ifnum}
  */
  readonly ifnum: string;
  /**
  * Set LSP transmission interval (LSP transmission interval (milliseconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#lsp_interval InterfaceEthernetIsisA#lsp_interval}
  */
  readonly lspInterval?: number;
  /**
  * 'broadcast': Specify IS-IS broadcast multi-access network; 'point-to-point': Specify IS-IS point-to-point network;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#network InterfaceEthernetIsisA#network}
  */
  readonly network?: string;
  /**
  * Add padding to IS-IS hello packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#padding InterfaceEthernetIsisA#padding}
  */
  readonly padding?: number;
  /**
  * Set per-LSP retransmission interval (Interval between retransmissions of the same LSP (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#retransmit_interval InterfaceEthernetIsisA#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#uuid InterfaceEthernetIsisA#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#authentication InterfaceEthernetIsisA#authentication}
  */
  readonly authentication?: InterfaceEthernetIsisAuthenticationA;
  /**
  * bfd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#bfd_cfg InterfaceEthernetIsisA#bfd_cfg}
  */
  readonly bfdCfg?: InterfaceEthernetIsisBfdCfgA;
  /**
  * csnp_interval_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#csnp_interval_list InterfaceEthernetIsisA#csnp_interval_list}
  */
  readonly csnpIntervalList?: InterfaceEthernetIsisCsnpIntervalListStructA[] | cdktf.IResolvable;
  /**
  * hello_interval_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#hello_interval_list InterfaceEthernetIsisA#hello_interval_list}
  */
  readonly helloIntervalList?: InterfaceEthernetIsisHelloIntervalListStructA[] | cdktf.IResolvable;
  /**
  * hello_interval_minimal_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#hello_interval_minimal_list InterfaceEthernetIsisA#hello_interval_minimal_list}
  */
  readonly helloIntervalMinimalList?: InterfaceEthernetIsisHelloIntervalMinimalListStructA[] | cdktf.IResolvable;
  /**
  * hello_multiplier_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#hello_multiplier_list InterfaceEthernetIsisA#hello_multiplier_list}
  */
  readonly helloMultiplierList?: InterfaceEthernetIsisHelloMultiplierListStructA[] | cdktf.IResolvable;
  /**
  * mesh_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#mesh_group InterfaceEthernetIsisA#mesh_group}
  */
  readonly meshGroup?: InterfaceEthernetIsisMeshGroupA;
  /**
  * metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#metric_list InterfaceEthernetIsisA#metric_list}
  */
  readonly metricList?: InterfaceEthernetIsisMetricListStructA[] | cdktf.IResolvable;
  /**
  * password_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#password_list InterfaceEthernetIsisA#password_list}
  */
  readonly passwordList?: InterfaceEthernetIsisPasswordListStructA[] | cdktf.IResolvable;
  /**
  * priority_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#priority_list InterfaceEthernetIsisA#priority_list}
  */
  readonly priorityList?: InterfaceEthernetIsisPriorityListStructA[] | cdktf.IResolvable;
  /**
  * wide_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#wide_metric_list InterfaceEthernetIsisA#wide_metric_list}
  */
  readonly wideMetricList?: InterfaceEthernetIsisWideMetricListStructA[] | cdktf.IResolvable;
}
export interface InterfaceEthernetIsisAuthenticationKeyChainListStructA {
  /**
  * Authentication key-chain (Name of key-chain)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#key_chain InterfaceEthernetIsisA#key_chain}
  */
  readonly keyChain?: string;
  /**
  * 'level-1': Specify authentication key-chain for level-1 PDUs; 'level-2': Specify authentication key-chain for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#level InterfaceEthernetIsisA#level}
  */
  readonly level?: string;
}

export function interfaceEthernetIsisAuthenticationKeyChainListStructAToTerraform(struct?: InterfaceEthernetIsisAuthenticationKeyChainListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: cdktf.stringToTerraform(struct!.keyChain),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceEthernetIsisAuthenticationKeyChainListStructAToHclTerraform(struct?: InterfaceEthernetIsisAuthenticationKeyChainListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain: {
      value: cdktf.stringToHclTerraform(struct!.keyChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisAuthenticationKeyChainListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisAuthenticationKeyChainListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChain = this._keyChain;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisAuthenticationKeyChainListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyChain = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyChain = value.keyChain;
      this._level = value.level;
    }
  }

  // key_chain - computed: false, optional: true, required: false
  private _keyChain?: string; 
  public get keyChain() {
    return this.getStringAttribute('key_chain');
  }
  public set keyChain(value: string) {
    this._keyChain = value;
  }
  public resetKeyChain() {
    this._keyChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainInput() {
    return this._keyChain;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class InterfaceEthernetIsisAuthenticationKeyChainListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisAuthenticationKeyChainListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisAuthenticationKeyChainListStructAOutputReference {
    return new InterfaceEthernetIsisAuthenticationKeyChainListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisAuthenticationModeListStructA {
  /**
  * 'level-1': Specify authentication mode for level-1 PDUs; 'level-2': Specify authentication mode for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#level InterfaceEthernetIsisA#level}
  */
  readonly level?: string;
  /**
  * 'md5': Keyed message digest;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#mode InterfaceEthernetIsisA#mode}
  */
  readonly mode?: string;
}

export function interfaceEthernetIsisAuthenticationModeListStructAToTerraform(struct?: InterfaceEthernetIsisAuthenticationModeListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function interfaceEthernetIsisAuthenticationModeListStructAToHclTerraform(struct?: InterfaceEthernetIsisAuthenticationModeListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisAuthenticationModeListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisAuthenticationModeListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisAuthenticationModeListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._mode = value.mode;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class InterfaceEthernetIsisAuthenticationModeListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisAuthenticationModeListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisAuthenticationModeListStructAOutputReference {
    return new InterfaceEthernetIsisAuthenticationModeListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisAuthenticationSendOnlyListStructA {
  /**
  * 'level-1': Specify authentication send-only for level-1 PDUs; 'level-2': Specify authentication send-only for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#level InterfaceEthernetIsisA#level}
  */
  readonly level?: string;
  /**
  * Authentication send-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#send_only InterfaceEthernetIsisA#send_only}
  */
  readonly sendOnly?: number;
}

export function interfaceEthernetIsisAuthenticationSendOnlyListStructAToTerraform(struct?: InterfaceEthernetIsisAuthenticationSendOnlyListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    send_only: cdktf.numberToTerraform(struct!.sendOnly),
  }
}


export function interfaceEthernetIsisAuthenticationSendOnlyListStructAToHclTerraform(struct?: InterfaceEthernetIsisAuthenticationSendOnlyListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_only: {
      value: cdktf.numberToHclTerraform(struct!.sendOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisAuthenticationSendOnlyListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisAuthenticationSendOnlyListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._sendOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOnly = this._sendOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisAuthenticationSendOnlyListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._sendOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._sendOnly = value.sendOnly;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // send_only - computed: false, optional: true, required: false
  private _sendOnly?: number; 
  public get sendOnly() {
    return this.getNumberAttribute('send_only');
  }
  public set sendOnly(value: number) {
    this._sendOnly = value;
  }
  public resetSendOnly() {
    this._sendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnlyInput() {
    return this._sendOnly;
  }
}

export class InterfaceEthernetIsisAuthenticationSendOnlyListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisAuthenticationSendOnlyListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisAuthenticationSendOnlyListStructAOutputReference {
    return new InterfaceEthernetIsisAuthenticationSendOnlyListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisAuthenticationA {
  /**
  * key_chain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#key_chain_list InterfaceEthernetIsisA#key_chain_list}
  */
  readonly keyChainList?: InterfaceEthernetIsisAuthenticationKeyChainListStructA[] | cdktf.IResolvable;
  /**
  * mode_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#mode_list InterfaceEthernetIsisA#mode_list}
  */
  readonly modeList?: InterfaceEthernetIsisAuthenticationModeListStructA[] | cdktf.IResolvable;
  /**
  * send_only_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#send_only_list InterfaceEthernetIsisA#send_only_list}
  */
  readonly sendOnlyList?: InterfaceEthernetIsisAuthenticationSendOnlyListStructA[] | cdktf.IResolvable;
}

export function interfaceEthernetIsisAuthenticationAToTerraform(struct?: InterfaceEthernetIsisAuthenticationAOutputReference | InterfaceEthernetIsisAuthenticationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain_list: cdktf.listMapper(interfaceEthernetIsisAuthenticationKeyChainListStructAToTerraform, true)(struct!.keyChainList),
    mode_list: cdktf.listMapper(interfaceEthernetIsisAuthenticationModeListStructAToTerraform, true)(struct!.modeList),
    send_only_list: cdktf.listMapper(interfaceEthernetIsisAuthenticationSendOnlyListStructAToTerraform, true)(struct!.sendOnlyList),
  }
}


export function interfaceEthernetIsisAuthenticationAToHclTerraform(struct?: InterfaceEthernetIsisAuthenticationAOutputReference | InterfaceEthernetIsisAuthenticationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIsisAuthenticationKeyChainListStructAToHclTerraform, true)(struct!.keyChainList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisAuthenticationKeyChainListStructAList",
    },
    mode_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIsisAuthenticationModeListStructAToHclTerraform, true)(struct!.modeList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisAuthenticationModeListStructAList",
    },
    send_only_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIsisAuthenticationSendOnlyListStructAToHclTerraform, true)(struct!.sendOnlyList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIsisAuthenticationSendOnlyListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisAuthenticationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIsisAuthenticationA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChainList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChainList = this._keyChainList?.internalValue;
    }
    if (this._modeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeList = this._modeList?.internalValue;
    }
    if (this._sendOnlyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOnlyList = this._sendOnlyList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisAuthenticationA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyChainList.internalValue = undefined;
      this._modeList.internalValue = undefined;
      this._sendOnlyList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyChainList.internalValue = value.keyChainList;
      this._modeList.internalValue = value.modeList;
      this._sendOnlyList.internalValue = value.sendOnlyList;
    }
  }

  // key_chain_list - computed: false, optional: true, required: false
  private _keyChainList = new InterfaceEthernetIsisAuthenticationKeyChainListStructAList(this, "key_chain_list", false);
  public get keyChainList() {
    return this._keyChainList;
  }
  public putKeyChainList(value: InterfaceEthernetIsisAuthenticationKeyChainListStructA[] | cdktf.IResolvable) {
    this._keyChainList.internalValue = value;
  }
  public resetKeyChainList() {
    this._keyChainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainListInput() {
    return this._keyChainList.internalValue;
  }

  // mode_list - computed: false, optional: true, required: false
  private _modeList = new InterfaceEthernetIsisAuthenticationModeListStructAList(this, "mode_list", false);
  public get modeList() {
    return this._modeList;
  }
  public putModeList(value: InterfaceEthernetIsisAuthenticationModeListStructA[] | cdktf.IResolvable) {
    this._modeList.internalValue = value;
  }
  public resetModeList() {
    this._modeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeListInput() {
    return this._modeList.internalValue;
  }

  // send_only_list - computed: false, optional: true, required: false
  private _sendOnlyList = new InterfaceEthernetIsisAuthenticationSendOnlyListStructAList(this, "send_only_list", false);
  public get sendOnlyList() {
    return this._sendOnlyList;
  }
  public putSendOnlyList(value: InterfaceEthernetIsisAuthenticationSendOnlyListStructA[] | cdktf.IResolvable) {
    this._sendOnlyList.internalValue = value;
  }
  public resetSendOnlyList() {
    this._sendOnlyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnlyListInput() {
    return this._sendOnlyList.internalValue;
  }
}
export interface InterfaceEthernetIsisBfdCfgA {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#bfd InterfaceEthernetIsisA#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#disable InterfaceEthernetIsisA#disable}
  */
  readonly disable?: number;
}

export function interfaceEthernetIsisBfdCfgAToTerraform(struct?: InterfaceEthernetIsisBfdCfgAOutputReference | InterfaceEthernetIsisBfdCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
  }
}


export function interfaceEthernetIsisBfdCfgAToHclTerraform(struct?: InterfaceEthernetIsisBfdCfgAOutputReference | InterfaceEthernetIsisBfdCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: cdktf.numberToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisBfdCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIsisBfdCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisBfdCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bfd = undefined;
      this._disable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bfd = value.bfd;
      this._disable = value.disable;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd?: number; 
  public get bfd() {
    return this.getNumberAttribute('bfd');
  }
  public set bfd(value: number) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }
}
export interface InterfaceEthernetIsisCsnpIntervalListStructA {
  /**
  * Set CSNP interval in seconds (CSNP interval value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#csnp_interval InterfaceEthernetIsisA#csnp_interval}
  */
  readonly csnpInterval?: number;
  /**
  * 'level-1': Speficy interval for level-1 CSNPs; 'level-2': Specify interval for level-2 CSNPs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#level InterfaceEthernetIsisA#level}
  */
  readonly level?: string;
}

export function interfaceEthernetIsisCsnpIntervalListStructAToTerraform(struct?: InterfaceEthernetIsisCsnpIntervalListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csnp_interval: cdktf.numberToTerraform(struct!.csnpInterval),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceEthernetIsisCsnpIntervalListStructAToHclTerraform(struct?: InterfaceEthernetIsisCsnpIntervalListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csnp_interval: {
      value: cdktf.numberToHclTerraform(struct!.csnpInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisCsnpIntervalListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisCsnpIntervalListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csnpInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.csnpInterval = this._csnpInterval;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisCsnpIntervalListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csnpInterval = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csnpInterval = value.csnpInterval;
      this._level = value.level;
    }
  }

  // csnp_interval - computed: false, optional: true, required: false
  private _csnpInterval?: number; 
  public get csnpInterval() {
    return this.getNumberAttribute('csnp_interval');
  }
  public set csnpInterval(value: number) {
    this._csnpInterval = value;
  }
  public resetCsnpInterval() {
    this._csnpInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csnpIntervalInput() {
    return this._csnpInterval;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class InterfaceEthernetIsisCsnpIntervalListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisCsnpIntervalListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisCsnpIntervalListStructAOutputReference {
    return new InterfaceEthernetIsisCsnpIntervalListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisHelloIntervalListStructA {
  /**
  * Set Hello interval in seconds (Hello interval value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#hello_interval InterfaceEthernetIsisA#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * 'level-1': Specify hello-interval for level-1 IIHs; 'level-2': Specify hello-interval for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#level InterfaceEthernetIsisA#level}
  */
  readonly level?: string;
}

export function interfaceEthernetIsisHelloIntervalListStructAToTerraform(struct?: InterfaceEthernetIsisHelloIntervalListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceEthernetIsisHelloIntervalListStructAToHclTerraform(struct?: InterfaceEthernetIsisHelloIntervalListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisHelloIntervalListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisHelloIntervalListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisHelloIntervalListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloInterval = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloInterval = value.helloInterval;
      this._level = value.level;
    }
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class InterfaceEthernetIsisHelloIntervalListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisHelloIntervalListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisHelloIntervalListStructAOutputReference {
    return new InterfaceEthernetIsisHelloIntervalListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisHelloIntervalMinimalListStructA {
  /**
  * Set Hello holdtime 1 second, interval depends on multiplier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#hello_interval_minimal InterfaceEthernetIsisA#hello_interval_minimal}
  */
  readonly helloIntervalMinimal?: number;
  /**
  * 'level-1': Specify hello-interval for level-1 IIHs; 'level-2': Specify hello-interval for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#level InterfaceEthernetIsisA#level}
  */
  readonly level?: string;
}

export function interfaceEthernetIsisHelloIntervalMinimalListStructAToTerraform(struct?: InterfaceEthernetIsisHelloIntervalMinimalListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval_minimal: cdktf.numberToTerraform(struct!.helloIntervalMinimal),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceEthernetIsisHelloIntervalMinimalListStructAToHclTerraform(struct?: InterfaceEthernetIsisHelloIntervalMinimalListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_interval_minimal: {
      value: cdktf.numberToHclTerraform(struct!.helloIntervalMinimal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisHelloIntervalMinimalListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisHelloIntervalMinimalListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloIntervalMinimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalMinimal = this._helloIntervalMinimal;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisHelloIntervalMinimalListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloIntervalMinimal = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloIntervalMinimal = value.helloIntervalMinimal;
      this._level = value.level;
    }
  }

  // hello_interval_minimal - computed: false, optional: true, required: false
  private _helloIntervalMinimal?: number; 
  public get helloIntervalMinimal() {
    return this.getNumberAttribute('hello_interval_minimal');
  }
  public set helloIntervalMinimal(value: number) {
    this._helloIntervalMinimal = value;
  }
  public resetHelloIntervalMinimal() {
    this._helloIntervalMinimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalMinimalInput() {
    return this._helloIntervalMinimal;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class InterfaceEthernetIsisHelloIntervalMinimalListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisHelloIntervalMinimalListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisHelloIntervalMinimalListStructAOutputReference {
    return new InterfaceEthernetIsisHelloIntervalMinimalListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisHelloMultiplierListStructA {
  /**
  * Set multiplier for Hello holding time (Hello multiplier value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#hello_multiplier InterfaceEthernetIsisA#hello_multiplier}
  */
  readonly helloMultiplier?: number;
  /**
  * 'level-1': Specify hello multiplier for level-1 IIHs; 'level-2': Specify hello multiplier for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#level InterfaceEthernetIsisA#level}
  */
  readonly level?: string;
}

export function interfaceEthernetIsisHelloMultiplierListStructAToTerraform(struct?: InterfaceEthernetIsisHelloMultiplierListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_multiplier: cdktf.numberToTerraform(struct!.helloMultiplier),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceEthernetIsisHelloMultiplierListStructAToHclTerraform(struct?: InterfaceEthernetIsisHelloMultiplierListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.helloMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisHelloMultiplierListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisHelloMultiplierListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloMultiplier = this._helloMultiplier;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisHelloMultiplierListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloMultiplier = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloMultiplier = value.helloMultiplier;
      this._level = value.level;
    }
  }

  // hello_multiplier - computed: false, optional: true, required: false
  private _helloMultiplier?: number; 
  public get helloMultiplier() {
    return this.getNumberAttribute('hello_multiplier');
  }
  public set helloMultiplier(value: number) {
    this._helloMultiplier = value;
  }
  public resetHelloMultiplier() {
    this._helloMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloMultiplierInput() {
    return this._helloMultiplier;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class InterfaceEthernetIsisHelloMultiplierListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisHelloMultiplierListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisHelloMultiplierListStructAOutputReference {
    return new InterfaceEthernetIsisHelloMultiplierListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisMeshGroupA {
  /**
  * Block LSPs on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#blocked InterfaceEthernetIsisA#blocked}
  */
  readonly blocked?: number;
  /**
  * Mesh group number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#value InterfaceEthernetIsisA#value}
  */
  readonly value?: number;
}

export function interfaceEthernetIsisMeshGroupAToTerraform(struct?: InterfaceEthernetIsisMeshGroupAOutputReference | InterfaceEthernetIsisMeshGroupA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked: cdktf.numberToTerraform(struct!.blocked),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function interfaceEthernetIsisMeshGroupAToHclTerraform(struct?: InterfaceEthernetIsisMeshGroupAOutputReference | InterfaceEthernetIsisMeshGroupA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked: {
      value: cdktf.numberToHclTerraform(struct!.blocked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisMeshGroupAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIsisMeshGroupA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocked = this._blocked;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisMeshGroupA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blocked = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blocked = value.blocked;
      this._value = value.value;
    }
  }

  // blocked - computed: false, optional: true, required: false
  private _blocked?: number; 
  public get blocked() {
    return this.getNumberAttribute('blocked');
  }
  public set blocked(value: number) {
    this._blocked = value;
  }
  public resetBlocked() {
    this._blocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInput() {
    return this._blocked;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface InterfaceEthernetIsisMetricListStructA {
  /**
  * 'level-1': Apply metric to level-1 links; 'level-2': Apply metric to level-2 links;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#level InterfaceEthernetIsisA#level}
  */
  readonly level?: string;
  /**
  * Configure the metric for interface (Default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#metric InterfaceEthernetIsisA#metric}
  */
  readonly metric?: number;
}

export function interfaceEthernetIsisMetricListStructAToTerraform(struct?: InterfaceEthernetIsisMetricListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function interfaceEthernetIsisMetricListStructAToHclTerraform(struct?: InterfaceEthernetIsisMetricListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisMetricListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisMetricListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisMetricListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._metric = value.metric;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }
}

export class InterfaceEthernetIsisMetricListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisMetricListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisMetricListStructAOutputReference {
    return new InterfaceEthernetIsisMetricListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisPasswordListStructA {
  /**
  * 'level-1': Specify password for level-1 PDUs; 'level-2': Specify password for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#level InterfaceEthernetIsisA#level}
  */
  readonly level?: string;
  /**
  * Configure the authentication password for interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#password InterfaceEthernetIsisA#password}
  */
  readonly password?: string;
}

export function interfaceEthernetIsisPasswordListStructAToTerraform(struct?: InterfaceEthernetIsisPasswordListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function interfaceEthernetIsisPasswordListStructAToHclTerraform(struct?: InterfaceEthernetIsisPasswordListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisPasswordListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisPasswordListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisPasswordListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._password = value.password;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

export class InterfaceEthernetIsisPasswordListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisPasswordListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisPasswordListStructAOutputReference {
    return new InterfaceEthernetIsisPasswordListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisPriorityListStructA {
  /**
  * 'level-1': Specify priority for level-1 routing; 'level-2': Specify priority for level-2 routing;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#level InterfaceEthernetIsisA#level}
  */
  readonly level?: string;
  /**
  * Set priority for Designated Router election (Priority value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#priority InterfaceEthernetIsisA#priority}
  */
  readonly priority?: number;
}

export function interfaceEthernetIsisPriorityListStructAToTerraform(struct?: InterfaceEthernetIsisPriorityListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function interfaceEthernetIsisPriorityListStructAToHclTerraform(struct?: InterfaceEthernetIsisPriorityListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisPriorityListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisPriorityListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisPriorityListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._priority = value.priority;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class InterfaceEthernetIsisPriorityListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisPriorityListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisPriorityListStructAOutputReference {
    return new InterfaceEthernetIsisPriorityListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIsisWideMetricListStructA {
  /**
  * 'level-1': Apply metric to level-1 links; 'level-2': Apply metric to level-2 links;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#level InterfaceEthernetIsisA#level}
  */
  readonly level?: string;
  /**
  * Configure the wide metric for interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#wide_metric InterfaceEthernetIsisA#wide_metric}
  */
  readonly wideMetric?: number;
}

export function interfaceEthernetIsisWideMetricListStructAToTerraform(struct?: InterfaceEthernetIsisWideMetricListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    wide_metric: cdktf.numberToTerraform(struct!.wideMetric),
  }
}


export function interfaceEthernetIsisWideMetricListStructAToHclTerraform(struct?: InterfaceEthernetIsisWideMetricListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wide_metric: {
      value: cdktf.numberToHclTerraform(struct!.wideMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIsisWideMetricListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIsisWideMetricListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._wideMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.wideMetric = this._wideMetric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIsisWideMetricListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._wideMetric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._wideMetric = value.wideMetric;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // wide_metric - computed: false, optional: true, required: false
  private _wideMetric?: number; 
  public get wideMetric() {
    return this.getNumberAttribute('wide_metric');
  }
  public set wideMetric(value: number) {
    this._wideMetric = value;
  }
  public resetWideMetric() {
    this._wideMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wideMetricInput() {
    return this._wideMetric;
  }
}

export class InterfaceEthernetIsisWideMetricListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIsisWideMetricListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIsisWideMetricListStructAOutputReference {
    return new InterfaceEthernetIsisWideMetricListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis thunder_interface_ethernet_isis}
*/
export class InterfaceEthernetIsisA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_ethernet_isis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernetIsisA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernetIsisA to import
  * @param importFromId The id of the existing InterfaceEthernetIsisA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernetIsisA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_ethernet_isis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ethernet_isis thunder_interface_ethernet_isis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetIsisAConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetIsisAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_ethernet_isis',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._circuitType = config.circuitType;
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._lspInterval = config.lspInterval;
    this._network = config.network;
    this._padding = config.padding;
    this._retransmitInterval = config.retransmitInterval;
    this._uuid = config.uuid;
    this._authentication.internalValue = config.authentication;
    this._bfdCfg.internalValue = config.bfdCfg;
    this._csnpIntervalList.internalValue = config.csnpIntervalList;
    this._helloIntervalList.internalValue = config.helloIntervalList;
    this._helloIntervalMinimalList.internalValue = config.helloIntervalMinimalList;
    this._helloMultiplierList.internalValue = config.helloMultiplierList;
    this._meshGroup.internalValue = config.meshGroup;
    this._metricList.internalValue = config.metricList;
    this._passwordList.internalValue = config.passwordList;
    this._priorityList.internalValue = config.priorityList;
    this._wideMetricList.internalValue = config.wideMetricList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // circuit_type - computed: false, optional: true, required: false
  private _circuitType?: string; 
  public get circuitType() {
    return this.getStringAttribute('circuit_type');
  }
  public set circuitType(value: string) {
    this._circuitType = value;
  }
  public resetCircuitType() {
    this._circuitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitTypeInput() {
    return this._circuitType;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: string; 
  public get ifnum() {
    return this.getStringAttribute('ifnum');
  }
  public set ifnum(value: string) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // lsp_interval - computed: false, optional: true, required: false
  private _lspInterval?: number; 
  public get lspInterval() {
    return this.getNumberAttribute('lsp_interval');
  }
  public set lspInterval(value: number) {
    this._lspInterval = value;
  }
  public resetLspInterval() {
    this._lspInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspIntervalInput() {
    return this._lspInterval;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // padding - computed: false, optional: true, required: false
  private _padding?: number; 
  public get padding() {
    return this.getNumberAttribute('padding');
  }
  public set padding(value: number) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new InterfaceEthernetIsisAuthenticationAOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceEthernetIsisAuthenticationA) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // bfd_cfg - computed: false, optional: true, required: false
  private _bfdCfg = new InterfaceEthernetIsisBfdCfgAOutputReference(this, "bfd_cfg");
  public get bfdCfg() {
    return this._bfdCfg;
  }
  public putBfdCfg(value: InterfaceEthernetIsisBfdCfgA) {
    this._bfdCfg.internalValue = value;
  }
  public resetBfdCfg() {
    this._bfdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdCfgInput() {
    return this._bfdCfg.internalValue;
  }

  // csnp_interval_list - computed: false, optional: true, required: false
  private _csnpIntervalList = new InterfaceEthernetIsisCsnpIntervalListStructAList(this, "csnp_interval_list", false);
  public get csnpIntervalList() {
    return this._csnpIntervalList;
  }
  public putCsnpIntervalList(value: InterfaceEthernetIsisCsnpIntervalListStructA[] | cdktf.IResolvable) {
    this._csnpIntervalList.internalValue = value;
  }
  public resetCsnpIntervalList() {
    this._csnpIntervalList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csnpIntervalListInput() {
    return this._csnpIntervalList.internalValue;
  }

  // hello_interval_list - computed: false, optional: true, required: false
  private _helloIntervalList = new InterfaceEthernetIsisHelloIntervalListStructAList(this, "hello_interval_list", false);
  public get helloIntervalList() {
    return this._helloIntervalList;
  }
  public putHelloIntervalList(value: InterfaceEthernetIsisHelloIntervalListStructA[] | cdktf.IResolvable) {
    this._helloIntervalList.internalValue = value;
  }
  public resetHelloIntervalList() {
    this._helloIntervalList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalListInput() {
    return this._helloIntervalList.internalValue;
  }

  // hello_interval_minimal_list - computed: false, optional: true, required: false
  private _helloIntervalMinimalList = new InterfaceEthernetIsisHelloIntervalMinimalListStructAList(this, "hello_interval_minimal_list", false);
  public get helloIntervalMinimalList() {
    return this._helloIntervalMinimalList;
  }
  public putHelloIntervalMinimalList(value: InterfaceEthernetIsisHelloIntervalMinimalListStructA[] | cdktf.IResolvable) {
    this._helloIntervalMinimalList.internalValue = value;
  }
  public resetHelloIntervalMinimalList() {
    this._helloIntervalMinimalList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalMinimalListInput() {
    return this._helloIntervalMinimalList.internalValue;
  }

  // hello_multiplier_list - computed: false, optional: true, required: false
  private _helloMultiplierList = new InterfaceEthernetIsisHelloMultiplierListStructAList(this, "hello_multiplier_list", false);
  public get helloMultiplierList() {
    return this._helloMultiplierList;
  }
  public putHelloMultiplierList(value: InterfaceEthernetIsisHelloMultiplierListStructA[] | cdktf.IResolvable) {
    this._helloMultiplierList.internalValue = value;
  }
  public resetHelloMultiplierList() {
    this._helloMultiplierList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloMultiplierListInput() {
    return this._helloMultiplierList.internalValue;
  }

  // mesh_group - computed: false, optional: true, required: false
  private _meshGroup = new InterfaceEthernetIsisMeshGroupAOutputReference(this, "mesh_group");
  public get meshGroup() {
    return this._meshGroup;
  }
  public putMeshGroup(value: InterfaceEthernetIsisMeshGroupA) {
    this._meshGroup.internalValue = value;
  }
  public resetMeshGroup() {
    this._meshGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshGroupInput() {
    return this._meshGroup.internalValue;
  }

  // metric_list - computed: false, optional: true, required: false
  private _metricList = new InterfaceEthernetIsisMetricListStructAList(this, "metric_list", false);
  public get metricList() {
    return this._metricList;
  }
  public putMetricList(value: InterfaceEthernetIsisMetricListStructA[] | cdktf.IResolvable) {
    this._metricList.internalValue = value;
  }
  public resetMetricList() {
    this._metricList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricListInput() {
    return this._metricList.internalValue;
  }

  // password_list - computed: false, optional: true, required: false
  private _passwordList = new InterfaceEthernetIsisPasswordListStructAList(this, "password_list", false);
  public get passwordList() {
    return this._passwordList;
  }
  public putPasswordList(value: InterfaceEthernetIsisPasswordListStructA[] | cdktf.IResolvable) {
    this._passwordList.internalValue = value;
  }
  public resetPasswordList() {
    this._passwordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordListInput() {
    return this._passwordList.internalValue;
  }

  // priority_list - computed: false, optional: true, required: false
  private _priorityList = new InterfaceEthernetIsisPriorityListStructAList(this, "priority_list", false);
  public get priorityList() {
    return this._priorityList;
  }
  public putPriorityList(value: InterfaceEthernetIsisPriorityListStructA[] | cdktf.IResolvable) {
    this._priorityList.internalValue = value;
  }
  public resetPriorityList() {
    this._priorityList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityListInput() {
    return this._priorityList.internalValue;
  }

  // wide_metric_list - computed: false, optional: true, required: false
  private _wideMetricList = new InterfaceEthernetIsisWideMetricListStructAList(this, "wide_metric_list", false);
  public get wideMetricList() {
    return this._wideMetricList;
  }
  public putWideMetricList(value: InterfaceEthernetIsisWideMetricListStructA[] | cdktf.IResolvable) {
    this._wideMetricList.internalValue = value;
  }
  public resetWideMetricList() {
    this._wideMetricList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wideMetricListInput() {
    return this._wideMetricList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      circuit_type: cdktf.stringToTerraform(this._circuitType),
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.stringToTerraform(this._ifnum),
      lsp_interval: cdktf.numberToTerraform(this._lspInterval),
      network: cdktf.stringToTerraform(this._network),
      padding: cdktf.numberToTerraform(this._padding),
      retransmit_interval: cdktf.numberToTerraform(this._retransmitInterval),
      uuid: cdktf.stringToTerraform(this._uuid),
      authentication: interfaceEthernetIsisAuthenticationAToTerraform(this._authentication.internalValue),
      bfd_cfg: interfaceEthernetIsisBfdCfgAToTerraform(this._bfdCfg.internalValue),
      csnp_interval_list: cdktf.listMapper(interfaceEthernetIsisCsnpIntervalListStructAToTerraform, true)(this._csnpIntervalList.internalValue),
      hello_interval_list: cdktf.listMapper(interfaceEthernetIsisHelloIntervalListStructAToTerraform, true)(this._helloIntervalList.internalValue),
      hello_interval_minimal_list: cdktf.listMapper(interfaceEthernetIsisHelloIntervalMinimalListStructAToTerraform, true)(this._helloIntervalMinimalList.internalValue),
      hello_multiplier_list: cdktf.listMapper(interfaceEthernetIsisHelloMultiplierListStructAToTerraform, true)(this._helloMultiplierList.internalValue),
      mesh_group: interfaceEthernetIsisMeshGroupAToTerraform(this._meshGroup.internalValue),
      metric_list: cdktf.listMapper(interfaceEthernetIsisMetricListStructAToTerraform, true)(this._metricList.internalValue),
      password_list: cdktf.listMapper(interfaceEthernetIsisPasswordListStructAToTerraform, true)(this._passwordList.internalValue),
      priority_list: cdktf.listMapper(interfaceEthernetIsisPriorityListStructAToTerraform, true)(this._priorityList.internalValue),
      wide_metric_list: cdktf.listMapper(interfaceEthernetIsisWideMetricListStructAToTerraform, true)(this._wideMetricList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      circuit_type: {
        value: cdktf.stringToHclTerraform(this._circuitType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ifnum: {
        value: cdktf.stringToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lsp_interval: {
        value: cdktf.numberToHclTerraform(this._lspInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      padding: {
        value: cdktf.numberToHclTerraform(this._padding),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retransmit_interval: {
        value: cdktf.numberToHclTerraform(this._retransmitInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: interfaceEthernetIsisAuthenticationAToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIsisAuthenticationAList",
      },
      bfd_cfg: {
        value: interfaceEthernetIsisBfdCfgAToHclTerraform(this._bfdCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIsisBfdCfgAList",
      },
      csnp_interval_list: {
        value: cdktf.listMapperHcl(interfaceEthernetIsisCsnpIntervalListStructAToHclTerraform, true)(this._csnpIntervalList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIsisCsnpIntervalListStructAList",
      },
      hello_interval_list: {
        value: cdktf.listMapperHcl(interfaceEthernetIsisHelloIntervalListStructAToHclTerraform, true)(this._helloIntervalList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIsisHelloIntervalListStructAList",
      },
      hello_interval_minimal_list: {
        value: cdktf.listMapperHcl(interfaceEthernetIsisHelloIntervalMinimalListStructAToHclTerraform, true)(this._helloIntervalMinimalList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIsisHelloIntervalMinimalListStructAList",
      },
      hello_multiplier_list: {
        value: cdktf.listMapperHcl(interfaceEthernetIsisHelloMultiplierListStructAToHclTerraform, true)(this._helloMultiplierList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIsisHelloMultiplierListStructAList",
      },
      mesh_group: {
        value: interfaceEthernetIsisMeshGroupAToHclTerraform(this._meshGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIsisMeshGroupAList",
      },
      metric_list: {
        value: cdktf.listMapperHcl(interfaceEthernetIsisMetricListStructAToHclTerraform, true)(this._metricList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIsisMetricListStructAList",
      },
      password_list: {
        value: cdktf.listMapperHcl(interfaceEthernetIsisPasswordListStructAToHclTerraform, true)(this._passwordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIsisPasswordListStructAList",
      },
      priority_list: {
        value: cdktf.listMapperHcl(interfaceEthernetIsisPriorityListStructAToHclTerraform, true)(this._priorityList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIsisPriorityListStructAList",
      },
      wide_metric_list: {
        value: cdktf.listMapperHcl(interfaceEthernetIsisWideMetricListStructAToHclTerraform, true)(this._wideMetricList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIsisWideMetricListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
