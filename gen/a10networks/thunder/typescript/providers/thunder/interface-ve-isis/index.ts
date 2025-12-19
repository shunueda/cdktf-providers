// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceVeIsisAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'level-1': Level-1 only adjacencies are formed; 'level-1-2': Level-1-2 adjacencies are formed; 'level-2-only': Level-2 only adjacencies are formed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#circuit_type InterfaceVeIsisA#circuit_type}
  */
  readonly circuitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#id InterfaceVeIsisA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ifnum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#ifnum InterfaceVeIsisA#ifnum}
  */
  readonly ifnum: string;
  /**
  * Set LSP transmission interval (LSP transmission interval (milliseconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#lsp_interval InterfaceVeIsisA#lsp_interval}
  */
  readonly lspInterval?: number;
  /**
  * 'broadcast': Specify IS-IS broadcast multi-access network; 'point-to-point': Specify IS-IS point-to-point network;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#network InterfaceVeIsisA#network}
  */
  readonly network?: string;
  /**
  * Add padding to IS-IS hello packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#padding InterfaceVeIsisA#padding}
  */
  readonly padding?: number;
  /**
  * Set per-LSP retransmission interval (Interval between retransmissions of the same LSP (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#retransmit_interval InterfaceVeIsisA#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#uuid InterfaceVeIsisA#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#authentication InterfaceVeIsisA#authentication}
  */
  readonly authentication?: InterfaceVeIsisAuthenticationA;
  /**
  * bfd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#bfd_cfg InterfaceVeIsisA#bfd_cfg}
  */
  readonly bfdCfg?: InterfaceVeIsisBfdCfgA;
  /**
  * csnp_interval_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#csnp_interval_list InterfaceVeIsisA#csnp_interval_list}
  */
  readonly csnpIntervalList?: InterfaceVeIsisCsnpIntervalListStructA[] | cdktf.IResolvable;
  /**
  * hello_interval_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#hello_interval_list InterfaceVeIsisA#hello_interval_list}
  */
  readonly helloIntervalList?: InterfaceVeIsisHelloIntervalListStructA[] | cdktf.IResolvable;
  /**
  * hello_interval_minimal_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#hello_interval_minimal_list InterfaceVeIsisA#hello_interval_minimal_list}
  */
  readonly helloIntervalMinimalList?: InterfaceVeIsisHelloIntervalMinimalListStructA[] | cdktf.IResolvable;
  /**
  * hello_multiplier_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#hello_multiplier_list InterfaceVeIsisA#hello_multiplier_list}
  */
  readonly helloMultiplierList?: InterfaceVeIsisHelloMultiplierListStructA[] | cdktf.IResolvable;
  /**
  * mesh_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#mesh_group InterfaceVeIsisA#mesh_group}
  */
  readonly meshGroup?: InterfaceVeIsisMeshGroupA;
  /**
  * metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#metric_list InterfaceVeIsisA#metric_list}
  */
  readonly metricList?: InterfaceVeIsisMetricListStructA[] | cdktf.IResolvable;
  /**
  * password_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#password_list InterfaceVeIsisA#password_list}
  */
  readonly passwordList?: InterfaceVeIsisPasswordListStructA[] | cdktf.IResolvable;
  /**
  * priority_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#priority_list InterfaceVeIsisA#priority_list}
  */
  readonly priorityList?: InterfaceVeIsisPriorityListStructA[] | cdktf.IResolvable;
  /**
  * wide_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#wide_metric_list InterfaceVeIsisA#wide_metric_list}
  */
  readonly wideMetricList?: InterfaceVeIsisWideMetricListStructA[] | cdktf.IResolvable;
}
export interface InterfaceVeIsisAuthenticationKeyChainListStructA {
  /**
  * Authentication key-chain (Name of key-chain)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#key_chain InterfaceVeIsisA#key_chain}
  */
  readonly keyChain?: string;
  /**
  * 'level-1': Specify authentication key-chain for level-1 PDUs; 'level-2': Specify authentication key-chain for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#level InterfaceVeIsisA#level}
  */
  readonly level?: string;
}

export function interfaceVeIsisAuthenticationKeyChainListStructAToTerraform(struct?: InterfaceVeIsisAuthenticationKeyChainListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: cdktf.stringToTerraform(struct!.keyChain),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceVeIsisAuthenticationKeyChainListStructAToHclTerraform(struct?: InterfaceVeIsisAuthenticationKeyChainListStructA | cdktf.IResolvable): any {
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

export class InterfaceVeIsisAuthenticationKeyChainListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisAuthenticationKeyChainListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisAuthenticationKeyChainListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisAuthenticationKeyChainListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisAuthenticationKeyChainListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisAuthenticationKeyChainListStructAOutputReference {
    return new InterfaceVeIsisAuthenticationKeyChainListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisAuthenticationModeListStructA {
  /**
  * 'level-1': Specify authentication mode for level-1 PDUs; 'level-2': Specify authentication mode for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#level InterfaceVeIsisA#level}
  */
  readonly level?: string;
  /**
  * 'md5': Keyed message digest;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#mode InterfaceVeIsisA#mode}
  */
  readonly mode?: string;
}

export function interfaceVeIsisAuthenticationModeListStructAToTerraform(struct?: InterfaceVeIsisAuthenticationModeListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function interfaceVeIsisAuthenticationModeListStructAToHclTerraform(struct?: InterfaceVeIsisAuthenticationModeListStructA | cdktf.IResolvable): any {
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

export class InterfaceVeIsisAuthenticationModeListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisAuthenticationModeListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisAuthenticationModeListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisAuthenticationModeListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisAuthenticationModeListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisAuthenticationModeListStructAOutputReference {
    return new InterfaceVeIsisAuthenticationModeListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisAuthenticationSendOnlyListStructA {
  /**
  * 'level-1': Specify authentication send-only for level-1 PDUs; 'level-2': Specify authentication send-only for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#level InterfaceVeIsisA#level}
  */
  readonly level?: string;
  /**
  * Authentication send-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#send_only InterfaceVeIsisA#send_only}
  */
  readonly sendOnly?: number;
}

export function interfaceVeIsisAuthenticationSendOnlyListStructAToTerraform(struct?: InterfaceVeIsisAuthenticationSendOnlyListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    send_only: cdktf.numberToTerraform(struct!.sendOnly),
  }
}


export function interfaceVeIsisAuthenticationSendOnlyListStructAToHclTerraform(struct?: InterfaceVeIsisAuthenticationSendOnlyListStructA | cdktf.IResolvable): any {
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

export class InterfaceVeIsisAuthenticationSendOnlyListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisAuthenticationSendOnlyListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisAuthenticationSendOnlyListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisAuthenticationSendOnlyListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisAuthenticationSendOnlyListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisAuthenticationSendOnlyListStructAOutputReference {
    return new InterfaceVeIsisAuthenticationSendOnlyListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisAuthenticationA {
  /**
  * key_chain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#key_chain_list InterfaceVeIsisA#key_chain_list}
  */
  readonly keyChainList?: InterfaceVeIsisAuthenticationKeyChainListStructA[] | cdktf.IResolvable;
  /**
  * mode_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#mode_list InterfaceVeIsisA#mode_list}
  */
  readonly modeList?: InterfaceVeIsisAuthenticationModeListStructA[] | cdktf.IResolvable;
  /**
  * send_only_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#send_only_list InterfaceVeIsisA#send_only_list}
  */
  readonly sendOnlyList?: InterfaceVeIsisAuthenticationSendOnlyListStructA[] | cdktf.IResolvable;
}

export function interfaceVeIsisAuthenticationAToTerraform(struct?: InterfaceVeIsisAuthenticationAOutputReference | InterfaceVeIsisAuthenticationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain_list: cdktf.listMapper(interfaceVeIsisAuthenticationKeyChainListStructAToTerraform, true)(struct!.keyChainList),
    mode_list: cdktf.listMapper(interfaceVeIsisAuthenticationModeListStructAToTerraform, true)(struct!.modeList),
    send_only_list: cdktf.listMapper(interfaceVeIsisAuthenticationSendOnlyListStructAToTerraform, true)(struct!.sendOnlyList),
  }
}


export function interfaceVeIsisAuthenticationAToHclTerraform(struct?: InterfaceVeIsisAuthenticationAOutputReference | InterfaceVeIsisAuthenticationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain_list: {
      value: cdktf.listMapperHcl(interfaceVeIsisAuthenticationKeyChainListStructAToHclTerraform, true)(struct!.keyChainList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisAuthenticationKeyChainListStructAList",
    },
    mode_list: {
      value: cdktf.listMapperHcl(interfaceVeIsisAuthenticationModeListStructAToHclTerraform, true)(struct!.modeList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisAuthenticationModeListStructAList",
    },
    send_only_list: {
      value: cdktf.listMapperHcl(interfaceVeIsisAuthenticationSendOnlyListStructAToHclTerraform, true)(struct!.sendOnlyList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisAuthenticationSendOnlyListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIsisAuthenticationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIsisAuthenticationA | undefined {
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

  public set internalValue(value: InterfaceVeIsisAuthenticationA | undefined) {
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
  private _keyChainList = new InterfaceVeIsisAuthenticationKeyChainListStructAList(this, "key_chain_list", false);
  public get keyChainList() {
    return this._keyChainList;
  }
  public putKeyChainList(value: InterfaceVeIsisAuthenticationKeyChainListStructA[] | cdktf.IResolvable) {
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
  private _modeList = new InterfaceVeIsisAuthenticationModeListStructAList(this, "mode_list", false);
  public get modeList() {
    return this._modeList;
  }
  public putModeList(value: InterfaceVeIsisAuthenticationModeListStructA[] | cdktf.IResolvable) {
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
  private _sendOnlyList = new InterfaceVeIsisAuthenticationSendOnlyListStructAList(this, "send_only_list", false);
  public get sendOnlyList() {
    return this._sendOnlyList;
  }
  public putSendOnlyList(value: InterfaceVeIsisAuthenticationSendOnlyListStructA[] | cdktf.IResolvable) {
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
export interface InterfaceVeIsisBfdCfgA {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#bfd InterfaceVeIsisA#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#disable InterfaceVeIsisA#disable}
  */
  readonly disable?: number;
}

export function interfaceVeIsisBfdCfgAToTerraform(struct?: InterfaceVeIsisBfdCfgAOutputReference | InterfaceVeIsisBfdCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
  }
}


export function interfaceVeIsisBfdCfgAToHclTerraform(struct?: InterfaceVeIsisBfdCfgAOutputReference | InterfaceVeIsisBfdCfgA): any {
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

export class InterfaceVeIsisBfdCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIsisBfdCfgA | undefined {
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

  public set internalValue(value: InterfaceVeIsisBfdCfgA | undefined) {
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
export interface InterfaceVeIsisCsnpIntervalListStructA {
  /**
  * Set CSNP interval in seconds (CSNP interval value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#csnp_interval InterfaceVeIsisA#csnp_interval}
  */
  readonly csnpInterval?: number;
  /**
  * 'level-1': Speficy interval for level-1 CSNPs; 'level-2': Specify interval for level-2 CSNPs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#level InterfaceVeIsisA#level}
  */
  readonly level?: string;
}

export function interfaceVeIsisCsnpIntervalListStructAToTerraform(struct?: InterfaceVeIsisCsnpIntervalListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csnp_interval: cdktf.numberToTerraform(struct!.csnpInterval),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceVeIsisCsnpIntervalListStructAToHclTerraform(struct?: InterfaceVeIsisCsnpIntervalListStructA | cdktf.IResolvable): any {
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

export class InterfaceVeIsisCsnpIntervalListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisCsnpIntervalListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisCsnpIntervalListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisCsnpIntervalListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisCsnpIntervalListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisCsnpIntervalListStructAOutputReference {
    return new InterfaceVeIsisCsnpIntervalListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisHelloIntervalListStructA {
  /**
  * Set Hello interval in seconds (Hello interval value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#hello_interval InterfaceVeIsisA#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * 'level-1': Specify hello-interval for level-1 IIHs; 'level-2': Specify hello-interval for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#level InterfaceVeIsisA#level}
  */
  readonly level?: string;
}

export function interfaceVeIsisHelloIntervalListStructAToTerraform(struct?: InterfaceVeIsisHelloIntervalListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceVeIsisHelloIntervalListStructAToHclTerraform(struct?: InterfaceVeIsisHelloIntervalListStructA | cdktf.IResolvable): any {
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

export class InterfaceVeIsisHelloIntervalListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisHelloIntervalListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisHelloIntervalListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisHelloIntervalListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisHelloIntervalListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisHelloIntervalListStructAOutputReference {
    return new InterfaceVeIsisHelloIntervalListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisHelloIntervalMinimalListStructA {
  /**
  * Set Hello holdtime 1 second, interval depends on multiplier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#hello_interval_minimal InterfaceVeIsisA#hello_interval_minimal}
  */
  readonly helloIntervalMinimal?: number;
  /**
  * 'level-1': Specify hello-interval for level-1 IIHs; 'level-2': Specify hello-interval for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#level InterfaceVeIsisA#level}
  */
  readonly level?: string;
}

export function interfaceVeIsisHelloIntervalMinimalListStructAToTerraform(struct?: InterfaceVeIsisHelloIntervalMinimalListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval_minimal: cdktf.numberToTerraform(struct!.helloIntervalMinimal),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceVeIsisHelloIntervalMinimalListStructAToHclTerraform(struct?: InterfaceVeIsisHelloIntervalMinimalListStructA | cdktf.IResolvable): any {
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

export class InterfaceVeIsisHelloIntervalMinimalListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisHelloIntervalMinimalListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisHelloIntervalMinimalListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisHelloIntervalMinimalListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisHelloIntervalMinimalListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisHelloIntervalMinimalListStructAOutputReference {
    return new InterfaceVeIsisHelloIntervalMinimalListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisHelloMultiplierListStructA {
  /**
  * Set multiplier for Hello holding time (Hello multiplier value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#hello_multiplier InterfaceVeIsisA#hello_multiplier}
  */
  readonly helloMultiplier?: number;
  /**
  * 'level-1': Specify hello multiplier for level-1 IIHs; 'level-2': Specify hello multiplier for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#level InterfaceVeIsisA#level}
  */
  readonly level?: string;
}

export function interfaceVeIsisHelloMultiplierListStructAToTerraform(struct?: InterfaceVeIsisHelloMultiplierListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_multiplier: cdktf.numberToTerraform(struct!.helloMultiplier),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceVeIsisHelloMultiplierListStructAToHclTerraform(struct?: InterfaceVeIsisHelloMultiplierListStructA | cdktf.IResolvable): any {
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

export class InterfaceVeIsisHelloMultiplierListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisHelloMultiplierListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisHelloMultiplierListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisHelloMultiplierListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisHelloMultiplierListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisHelloMultiplierListStructAOutputReference {
    return new InterfaceVeIsisHelloMultiplierListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisMeshGroupA {
  /**
  * Block LSPs on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#blocked InterfaceVeIsisA#blocked}
  */
  readonly blocked?: number;
  /**
  * Mesh group number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#value InterfaceVeIsisA#value}
  */
  readonly value?: number;
}

export function interfaceVeIsisMeshGroupAToTerraform(struct?: InterfaceVeIsisMeshGroupAOutputReference | InterfaceVeIsisMeshGroupA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked: cdktf.numberToTerraform(struct!.blocked),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function interfaceVeIsisMeshGroupAToHclTerraform(struct?: InterfaceVeIsisMeshGroupAOutputReference | InterfaceVeIsisMeshGroupA): any {
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

export class InterfaceVeIsisMeshGroupAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIsisMeshGroupA | undefined {
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

  public set internalValue(value: InterfaceVeIsisMeshGroupA | undefined) {
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
export interface InterfaceVeIsisMetricListStructA {
  /**
  * 'level-1': Apply metric to level-1 links; 'level-2': Apply metric to level-2 links;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#level InterfaceVeIsisA#level}
  */
  readonly level?: string;
  /**
  * Configure the metric for interface (Default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#metric InterfaceVeIsisA#metric}
  */
  readonly metric?: number;
}

export function interfaceVeIsisMetricListStructAToTerraform(struct?: InterfaceVeIsisMetricListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function interfaceVeIsisMetricListStructAToHclTerraform(struct?: InterfaceVeIsisMetricListStructA | cdktf.IResolvable): any {
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

export class InterfaceVeIsisMetricListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisMetricListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisMetricListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisMetricListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisMetricListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisMetricListStructAOutputReference {
    return new InterfaceVeIsisMetricListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisPasswordListStructA {
  /**
  * 'level-1': Specify password for level-1 PDUs; 'level-2': Specify password for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#level InterfaceVeIsisA#level}
  */
  readonly level?: string;
  /**
  * Configure the authentication password for interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#password InterfaceVeIsisA#password}
  */
  readonly password?: string;
}

export function interfaceVeIsisPasswordListStructAToTerraform(struct?: InterfaceVeIsisPasswordListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function interfaceVeIsisPasswordListStructAToHclTerraform(struct?: InterfaceVeIsisPasswordListStructA | cdktf.IResolvable): any {
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

export class InterfaceVeIsisPasswordListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisPasswordListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisPasswordListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisPasswordListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisPasswordListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisPasswordListStructAOutputReference {
    return new InterfaceVeIsisPasswordListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisPriorityListStructA {
  /**
  * 'level-1': Specify priority for level-1 routing; 'level-2': Specify priority for level-2 routing;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#level InterfaceVeIsisA#level}
  */
  readonly level?: string;
  /**
  * Set priority for Designated Router election (Priority value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#priority InterfaceVeIsisA#priority}
  */
  readonly priority?: number;
}

export function interfaceVeIsisPriorityListStructAToTerraform(struct?: InterfaceVeIsisPriorityListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function interfaceVeIsisPriorityListStructAToHclTerraform(struct?: InterfaceVeIsisPriorityListStructA | cdktf.IResolvable): any {
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

export class InterfaceVeIsisPriorityListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisPriorityListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisPriorityListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisPriorityListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisPriorityListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisPriorityListStructAOutputReference {
    return new InterfaceVeIsisPriorityListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisWideMetricListStructA {
  /**
  * 'level-1': Apply metric to level-1 links; 'level-2': Apply metric to level-2 links;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#level InterfaceVeIsisA#level}
  */
  readonly level?: string;
  /**
  * Configure the wide metric for interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#wide_metric InterfaceVeIsisA#wide_metric}
  */
  readonly wideMetric?: number;
}

export function interfaceVeIsisWideMetricListStructAToTerraform(struct?: InterfaceVeIsisWideMetricListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    wide_metric: cdktf.numberToTerraform(struct!.wideMetric),
  }
}


export function interfaceVeIsisWideMetricListStructAToHclTerraform(struct?: InterfaceVeIsisWideMetricListStructA | cdktf.IResolvable): any {
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

export class InterfaceVeIsisWideMetricListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisWideMetricListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisWideMetricListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisWideMetricListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisWideMetricListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisWideMetricListStructAOutputReference {
    return new InterfaceVeIsisWideMetricListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis thunder_interface_ve_isis}
*/
export class InterfaceVeIsisA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_ve_isis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceVeIsisA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceVeIsisA to import
  * @param importFromId The id of the existing InterfaceVeIsisA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceVeIsisA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_ve_isis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_isis thunder_interface_ve_isis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceVeIsisAConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceVeIsisAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_ve_isis',
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
  private _authentication = new InterfaceVeIsisAuthenticationAOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceVeIsisAuthenticationA) {
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
  private _bfdCfg = new InterfaceVeIsisBfdCfgAOutputReference(this, "bfd_cfg");
  public get bfdCfg() {
    return this._bfdCfg;
  }
  public putBfdCfg(value: InterfaceVeIsisBfdCfgA) {
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
  private _csnpIntervalList = new InterfaceVeIsisCsnpIntervalListStructAList(this, "csnp_interval_list", false);
  public get csnpIntervalList() {
    return this._csnpIntervalList;
  }
  public putCsnpIntervalList(value: InterfaceVeIsisCsnpIntervalListStructA[] | cdktf.IResolvable) {
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
  private _helloIntervalList = new InterfaceVeIsisHelloIntervalListStructAList(this, "hello_interval_list", false);
  public get helloIntervalList() {
    return this._helloIntervalList;
  }
  public putHelloIntervalList(value: InterfaceVeIsisHelloIntervalListStructA[] | cdktf.IResolvable) {
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
  private _helloIntervalMinimalList = new InterfaceVeIsisHelloIntervalMinimalListStructAList(this, "hello_interval_minimal_list", false);
  public get helloIntervalMinimalList() {
    return this._helloIntervalMinimalList;
  }
  public putHelloIntervalMinimalList(value: InterfaceVeIsisHelloIntervalMinimalListStructA[] | cdktf.IResolvable) {
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
  private _helloMultiplierList = new InterfaceVeIsisHelloMultiplierListStructAList(this, "hello_multiplier_list", false);
  public get helloMultiplierList() {
    return this._helloMultiplierList;
  }
  public putHelloMultiplierList(value: InterfaceVeIsisHelloMultiplierListStructA[] | cdktf.IResolvable) {
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
  private _meshGroup = new InterfaceVeIsisMeshGroupAOutputReference(this, "mesh_group");
  public get meshGroup() {
    return this._meshGroup;
  }
  public putMeshGroup(value: InterfaceVeIsisMeshGroupA) {
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
  private _metricList = new InterfaceVeIsisMetricListStructAList(this, "metric_list", false);
  public get metricList() {
    return this._metricList;
  }
  public putMetricList(value: InterfaceVeIsisMetricListStructA[] | cdktf.IResolvable) {
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
  private _passwordList = new InterfaceVeIsisPasswordListStructAList(this, "password_list", false);
  public get passwordList() {
    return this._passwordList;
  }
  public putPasswordList(value: InterfaceVeIsisPasswordListStructA[] | cdktf.IResolvable) {
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
  private _priorityList = new InterfaceVeIsisPriorityListStructAList(this, "priority_list", false);
  public get priorityList() {
    return this._priorityList;
  }
  public putPriorityList(value: InterfaceVeIsisPriorityListStructA[] | cdktf.IResolvable) {
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
  private _wideMetricList = new InterfaceVeIsisWideMetricListStructAList(this, "wide_metric_list", false);
  public get wideMetricList() {
    return this._wideMetricList;
  }
  public putWideMetricList(value: InterfaceVeIsisWideMetricListStructA[] | cdktf.IResolvable) {
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
      authentication: interfaceVeIsisAuthenticationAToTerraform(this._authentication.internalValue),
      bfd_cfg: interfaceVeIsisBfdCfgAToTerraform(this._bfdCfg.internalValue),
      csnp_interval_list: cdktf.listMapper(interfaceVeIsisCsnpIntervalListStructAToTerraform, true)(this._csnpIntervalList.internalValue),
      hello_interval_list: cdktf.listMapper(interfaceVeIsisHelloIntervalListStructAToTerraform, true)(this._helloIntervalList.internalValue),
      hello_interval_minimal_list: cdktf.listMapper(interfaceVeIsisHelloIntervalMinimalListStructAToTerraform, true)(this._helloIntervalMinimalList.internalValue),
      hello_multiplier_list: cdktf.listMapper(interfaceVeIsisHelloMultiplierListStructAToTerraform, true)(this._helloMultiplierList.internalValue),
      mesh_group: interfaceVeIsisMeshGroupAToTerraform(this._meshGroup.internalValue),
      metric_list: cdktf.listMapper(interfaceVeIsisMetricListStructAToTerraform, true)(this._metricList.internalValue),
      password_list: cdktf.listMapper(interfaceVeIsisPasswordListStructAToTerraform, true)(this._passwordList.internalValue),
      priority_list: cdktf.listMapper(interfaceVeIsisPriorityListStructAToTerraform, true)(this._priorityList.internalValue),
      wide_metric_list: cdktf.listMapper(interfaceVeIsisWideMetricListStructAToTerraform, true)(this._wideMetricList.internalValue),
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
        value: interfaceVeIsisAuthenticationAToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIsisAuthenticationAList",
      },
      bfd_cfg: {
        value: interfaceVeIsisBfdCfgAToHclTerraform(this._bfdCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIsisBfdCfgAList",
      },
      csnp_interval_list: {
        value: cdktf.listMapperHcl(interfaceVeIsisCsnpIntervalListStructAToHclTerraform, true)(this._csnpIntervalList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIsisCsnpIntervalListStructAList",
      },
      hello_interval_list: {
        value: cdktf.listMapperHcl(interfaceVeIsisHelloIntervalListStructAToHclTerraform, true)(this._helloIntervalList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIsisHelloIntervalListStructAList",
      },
      hello_interval_minimal_list: {
        value: cdktf.listMapperHcl(interfaceVeIsisHelloIntervalMinimalListStructAToHclTerraform, true)(this._helloIntervalMinimalList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIsisHelloIntervalMinimalListStructAList",
      },
      hello_multiplier_list: {
        value: cdktf.listMapperHcl(interfaceVeIsisHelloMultiplierListStructAToHclTerraform, true)(this._helloMultiplierList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIsisHelloMultiplierListStructAList",
      },
      mesh_group: {
        value: interfaceVeIsisMeshGroupAToHclTerraform(this._meshGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIsisMeshGroupAList",
      },
      metric_list: {
        value: cdktf.listMapperHcl(interfaceVeIsisMetricListStructAToHclTerraform, true)(this._metricList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIsisMetricListStructAList",
      },
      password_list: {
        value: cdktf.listMapperHcl(interfaceVeIsisPasswordListStructAToHclTerraform, true)(this._passwordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIsisPasswordListStructAList",
      },
      priority_list: {
        value: cdktf.listMapperHcl(interfaceVeIsisPriorityListStructAToHclTerraform, true)(this._priorityList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIsisPriorityListStructAList",
      },
      wide_metric_list: {
        value: cdktf.listMapperHcl(interfaceVeIsisWideMetricListStructAToHclTerraform, true)(this._wideMetricList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIsisWideMetricListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
