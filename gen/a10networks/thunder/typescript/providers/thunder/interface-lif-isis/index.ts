// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceLifIsisAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'level-1': Level-1 only adjacencies are formed; 'level-1-2': Level-1-2 adjacencies are formed; 'level-2-only': Level-2 only adjacencies are formed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#circuit_type InterfaceLifIsisA#circuit_type}
  */
  readonly circuitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#id InterfaceLifIsisA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ifname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#ifname InterfaceLifIsisA#ifname}
  */
  readonly ifname: string;
  /**
  * Set LSP transmission interval (LSP transmission interval (milliseconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#lsp_interval InterfaceLifIsisA#lsp_interval}
  */
  readonly lspInterval?: number;
  /**
  * 'broadcast': Specify IS-IS broadcast multi-access network; 'point-to-point': Specify IS-IS point-to-point network;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#network InterfaceLifIsisA#network}
  */
  readonly network?: string;
  /**
  * Add padding to IS-IS hello packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#padding InterfaceLifIsisA#padding}
  */
  readonly padding?: number;
  /**
  * Set per-LSP retransmission interval (Interval between retransmissions of the same LSP (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#retransmit_interval InterfaceLifIsisA#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#uuid InterfaceLifIsisA#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#authentication InterfaceLifIsisA#authentication}
  */
  readonly authentication?: InterfaceLifIsisAuthenticationA;
  /**
  * bfd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#bfd_cfg InterfaceLifIsisA#bfd_cfg}
  */
  readonly bfdCfg?: InterfaceLifIsisBfdCfgA;
  /**
  * csnp_interval_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#csnp_interval_list InterfaceLifIsisA#csnp_interval_list}
  */
  readonly csnpIntervalList?: InterfaceLifIsisCsnpIntervalListStructA[] | cdktf.IResolvable;
  /**
  * hello_interval_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#hello_interval_list InterfaceLifIsisA#hello_interval_list}
  */
  readonly helloIntervalList?: InterfaceLifIsisHelloIntervalListStructA[] | cdktf.IResolvable;
  /**
  * hello_interval_minimal_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#hello_interval_minimal_list InterfaceLifIsisA#hello_interval_minimal_list}
  */
  readonly helloIntervalMinimalList?: InterfaceLifIsisHelloIntervalMinimalListStructA[] | cdktf.IResolvable;
  /**
  * hello_multiplier_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#hello_multiplier_list InterfaceLifIsisA#hello_multiplier_list}
  */
  readonly helloMultiplierList?: InterfaceLifIsisHelloMultiplierListStructA[] | cdktf.IResolvable;
  /**
  * mesh_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#mesh_group InterfaceLifIsisA#mesh_group}
  */
  readonly meshGroup?: InterfaceLifIsisMeshGroupA;
  /**
  * metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#metric_list InterfaceLifIsisA#metric_list}
  */
  readonly metricList?: InterfaceLifIsisMetricListStructA[] | cdktf.IResolvable;
  /**
  * password_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#password_list InterfaceLifIsisA#password_list}
  */
  readonly passwordList?: InterfaceLifIsisPasswordListStructA[] | cdktf.IResolvable;
  /**
  * priority_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#priority_list InterfaceLifIsisA#priority_list}
  */
  readonly priorityList?: InterfaceLifIsisPriorityListStructA[] | cdktf.IResolvable;
  /**
  * wide_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#wide_metric_list InterfaceLifIsisA#wide_metric_list}
  */
  readonly wideMetricList?: InterfaceLifIsisWideMetricListStructA[] | cdktf.IResolvable;
}
export interface InterfaceLifIsisAuthenticationKeyChainListStructA {
  /**
  * Authentication key-chain (Name of key-chain)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#key_chain InterfaceLifIsisA#key_chain}
  */
  readonly keyChain?: string;
  /**
  * 'level-1': Specify authentication key-chain for level-1 PDUs; 'level-2': Specify authentication key-chain for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#level InterfaceLifIsisA#level}
  */
  readonly level?: string;
}

export function interfaceLifIsisAuthenticationKeyChainListStructAToTerraform(struct?: InterfaceLifIsisAuthenticationKeyChainListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: cdktf.stringToTerraform(struct!.keyChain),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceLifIsisAuthenticationKeyChainListStructAToHclTerraform(struct?: InterfaceLifIsisAuthenticationKeyChainListStructA | cdktf.IResolvable): any {
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

export class InterfaceLifIsisAuthenticationKeyChainListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLifIsisAuthenticationKeyChainListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceLifIsisAuthenticationKeyChainListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceLifIsisAuthenticationKeyChainListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceLifIsisAuthenticationKeyChainListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLifIsisAuthenticationKeyChainListStructAOutputReference {
    return new InterfaceLifIsisAuthenticationKeyChainListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLifIsisAuthenticationModeListStructA {
  /**
  * 'level-1': Specify authentication mode for level-1 PDUs; 'level-2': Specify authentication mode for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#level InterfaceLifIsisA#level}
  */
  readonly level?: string;
  /**
  * 'md5': Keyed message digest;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#mode InterfaceLifIsisA#mode}
  */
  readonly mode?: string;
}

export function interfaceLifIsisAuthenticationModeListStructAToTerraform(struct?: InterfaceLifIsisAuthenticationModeListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function interfaceLifIsisAuthenticationModeListStructAToHclTerraform(struct?: InterfaceLifIsisAuthenticationModeListStructA | cdktf.IResolvable): any {
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

export class InterfaceLifIsisAuthenticationModeListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLifIsisAuthenticationModeListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceLifIsisAuthenticationModeListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceLifIsisAuthenticationModeListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceLifIsisAuthenticationModeListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLifIsisAuthenticationModeListStructAOutputReference {
    return new InterfaceLifIsisAuthenticationModeListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLifIsisAuthenticationSendOnlyListStructA {
  /**
  * 'level-1': Specify authentication send-only for level-1 PDUs; 'level-2': Specify authentication send-only for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#level InterfaceLifIsisA#level}
  */
  readonly level?: string;
  /**
  * Authentication send-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#send_only InterfaceLifIsisA#send_only}
  */
  readonly sendOnly?: number;
}

export function interfaceLifIsisAuthenticationSendOnlyListStructAToTerraform(struct?: InterfaceLifIsisAuthenticationSendOnlyListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    send_only: cdktf.numberToTerraform(struct!.sendOnly),
  }
}


export function interfaceLifIsisAuthenticationSendOnlyListStructAToHclTerraform(struct?: InterfaceLifIsisAuthenticationSendOnlyListStructA | cdktf.IResolvable): any {
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

export class InterfaceLifIsisAuthenticationSendOnlyListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLifIsisAuthenticationSendOnlyListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceLifIsisAuthenticationSendOnlyListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceLifIsisAuthenticationSendOnlyListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceLifIsisAuthenticationSendOnlyListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLifIsisAuthenticationSendOnlyListStructAOutputReference {
    return new InterfaceLifIsisAuthenticationSendOnlyListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLifIsisAuthenticationA {
  /**
  * key_chain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#key_chain_list InterfaceLifIsisA#key_chain_list}
  */
  readonly keyChainList?: InterfaceLifIsisAuthenticationKeyChainListStructA[] | cdktf.IResolvable;
  /**
  * mode_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#mode_list InterfaceLifIsisA#mode_list}
  */
  readonly modeList?: InterfaceLifIsisAuthenticationModeListStructA[] | cdktf.IResolvable;
  /**
  * send_only_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#send_only_list InterfaceLifIsisA#send_only_list}
  */
  readonly sendOnlyList?: InterfaceLifIsisAuthenticationSendOnlyListStructA[] | cdktf.IResolvable;
}

export function interfaceLifIsisAuthenticationAToTerraform(struct?: InterfaceLifIsisAuthenticationAOutputReference | InterfaceLifIsisAuthenticationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain_list: cdktf.listMapper(interfaceLifIsisAuthenticationKeyChainListStructAToTerraform, true)(struct!.keyChainList),
    mode_list: cdktf.listMapper(interfaceLifIsisAuthenticationModeListStructAToTerraform, true)(struct!.modeList),
    send_only_list: cdktf.listMapper(interfaceLifIsisAuthenticationSendOnlyListStructAToTerraform, true)(struct!.sendOnlyList),
  }
}


export function interfaceLifIsisAuthenticationAToHclTerraform(struct?: InterfaceLifIsisAuthenticationAOutputReference | InterfaceLifIsisAuthenticationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain_list: {
      value: cdktf.listMapperHcl(interfaceLifIsisAuthenticationKeyChainListStructAToHclTerraform, true)(struct!.keyChainList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceLifIsisAuthenticationKeyChainListStructAList",
    },
    mode_list: {
      value: cdktf.listMapperHcl(interfaceLifIsisAuthenticationModeListStructAToHclTerraform, true)(struct!.modeList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceLifIsisAuthenticationModeListStructAList",
    },
    send_only_list: {
      value: cdktf.listMapperHcl(interfaceLifIsisAuthenticationSendOnlyListStructAToHclTerraform, true)(struct!.sendOnlyList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceLifIsisAuthenticationSendOnlyListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLifIsisAuthenticationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceLifIsisAuthenticationA | undefined {
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

  public set internalValue(value: InterfaceLifIsisAuthenticationA | undefined) {
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
  private _keyChainList = new InterfaceLifIsisAuthenticationKeyChainListStructAList(this, "key_chain_list", false);
  public get keyChainList() {
    return this._keyChainList;
  }
  public putKeyChainList(value: InterfaceLifIsisAuthenticationKeyChainListStructA[] | cdktf.IResolvable) {
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
  private _modeList = new InterfaceLifIsisAuthenticationModeListStructAList(this, "mode_list", false);
  public get modeList() {
    return this._modeList;
  }
  public putModeList(value: InterfaceLifIsisAuthenticationModeListStructA[] | cdktf.IResolvable) {
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
  private _sendOnlyList = new InterfaceLifIsisAuthenticationSendOnlyListStructAList(this, "send_only_list", false);
  public get sendOnlyList() {
    return this._sendOnlyList;
  }
  public putSendOnlyList(value: InterfaceLifIsisAuthenticationSendOnlyListStructA[] | cdktf.IResolvable) {
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
export interface InterfaceLifIsisBfdCfgA {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#bfd InterfaceLifIsisA#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#disable InterfaceLifIsisA#disable}
  */
  readonly disable?: number;
}

export function interfaceLifIsisBfdCfgAToTerraform(struct?: InterfaceLifIsisBfdCfgAOutputReference | InterfaceLifIsisBfdCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
  }
}


export function interfaceLifIsisBfdCfgAToHclTerraform(struct?: InterfaceLifIsisBfdCfgAOutputReference | InterfaceLifIsisBfdCfgA): any {
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

export class InterfaceLifIsisBfdCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceLifIsisBfdCfgA | undefined {
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

  public set internalValue(value: InterfaceLifIsisBfdCfgA | undefined) {
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
export interface InterfaceLifIsisCsnpIntervalListStructA {
  /**
  * Set CSNP interval in seconds (CSNP interval value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#csnp_interval InterfaceLifIsisA#csnp_interval}
  */
  readonly csnpInterval?: number;
  /**
  * 'level-1': Speficy interval for level-1 CSNPs; 'level-2': Specify interval for level-2 CSNPs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#level InterfaceLifIsisA#level}
  */
  readonly level?: string;
}

export function interfaceLifIsisCsnpIntervalListStructAToTerraform(struct?: InterfaceLifIsisCsnpIntervalListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csnp_interval: cdktf.numberToTerraform(struct!.csnpInterval),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceLifIsisCsnpIntervalListStructAToHclTerraform(struct?: InterfaceLifIsisCsnpIntervalListStructA | cdktf.IResolvable): any {
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

export class InterfaceLifIsisCsnpIntervalListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLifIsisCsnpIntervalListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceLifIsisCsnpIntervalListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceLifIsisCsnpIntervalListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceLifIsisCsnpIntervalListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLifIsisCsnpIntervalListStructAOutputReference {
    return new InterfaceLifIsisCsnpIntervalListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLifIsisHelloIntervalListStructA {
  /**
  * Set Hello interval in seconds (Hello interval value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#hello_interval InterfaceLifIsisA#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * 'level-1': Specify hello-interval for level-1 IIHs; 'level-2': Specify hello-interval for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#level InterfaceLifIsisA#level}
  */
  readonly level?: string;
}

export function interfaceLifIsisHelloIntervalListStructAToTerraform(struct?: InterfaceLifIsisHelloIntervalListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceLifIsisHelloIntervalListStructAToHclTerraform(struct?: InterfaceLifIsisHelloIntervalListStructA | cdktf.IResolvable): any {
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

export class InterfaceLifIsisHelloIntervalListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLifIsisHelloIntervalListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceLifIsisHelloIntervalListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceLifIsisHelloIntervalListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceLifIsisHelloIntervalListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLifIsisHelloIntervalListStructAOutputReference {
    return new InterfaceLifIsisHelloIntervalListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLifIsisHelloIntervalMinimalListStructA {
  /**
  * Set Hello holdtime 1 second, interval depends on multiplier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#hello_interval_minimal InterfaceLifIsisA#hello_interval_minimal}
  */
  readonly helloIntervalMinimal?: number;
  /**
  * 'level-1': Specify hello-interval for level-1 IIHs; 'level-2': Specify hello-interval for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#level InterfaceLifIsisA#level}
  */
  readonly level?: string;
}

export function interfaceLifIsisHelloIntervalMinimalListStructAToTerraform(struct?: InterfaceLifIsisHelloIntervalMinimalListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval_minimal: cdktf.numberToTerraform(struct!.helloIntervalMinimal),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceLifIsisHelloIntervalMinimalListStructAToHclTerraform(struct?: InterfaceLifIsisHelloIntervalMinimalListStructA | cdktf.IResolvable): any {
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

export class InterfaceLifIsisHelloIntervalMinimalListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLifIsisHelloIntervalMinimalListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceLifIsisHelloIntervalMinimalListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceLifIsisHelloIntervalMinimalListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceLifIsisHelloIntervalMinimalListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLifIsisHelloIntervalMinimalListStructAOutputReference {
    return new InterfaceLifIsisHelloIntervalMinimalListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLifIsisHelloMultiplierListStructA {
  /**
  * Set multiplier for Hello holding time (Hello multiplier value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#hello_multiplier InterfaceLifIsisA#hello_multiplier}
  */
  readonly helloMultiplier?: number;
  /**
  * 'level-1': Specify hello multiplier for level-1 IIHs; 'level-2': Specify hello multiplier for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#level InterfaceLifIsisA#level}
  */
  readonly level?: string;
}

export function interfaceLifIsisHelloMultiplierListStructAToTerraform(struct?: InterfaceLifIsisHelloMultiplierListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_multiplier: cdktf.numberToTerraform(struct!.helloMultiplier),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceLifIsisHelloMultiplierListStructAToHclTerraform(struct?: InterfaceLifIsisHelloMultiplierListStructA | cdktf.IResolvable): any {
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

export class InterfaceLifIsisHelloMultiplierListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLifIsisHelloMultiplierListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceLifIsisHelloMultiplierListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceLifIsisHelloMultiplierListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceLifIsisHelloMultiplierListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLifIsisHelloMultiplierListStructAOutputReference {
    return new InterfaceLifIsisHelloMultiplierListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLifIsisMeshGroupA {
  /**
  * Block LSPs on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#blocked InterfaceLifIsisA#blocked}
  */
  readonly blocked?: number;
  /**
  * Mesh group number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#value InterfaceLifIsisA#value}
  */
  readonly value?: number;
}

export function interfaceLifIsisMeshGroupAToTerraform(struct?: InterfaceLifIsisMeshGroupAOutputReference | InterfaceLifIsisMeshGroupA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked: cdktf.numberToTerraform(struct!.blocked),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function interfaceLifIsisMeshGroupAToHclTerraform(struct?: InterfaceLifIsisMeshGroupAOutputReference | InterfaceLifIsisMeshGroupA): any {
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

export class InterfaceLifIsisMeshGroupAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceLifIsisMeshGroupA | undefined {
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

  public set internalValue(value: InterfaceLifIsisMeshGroupA | undefined) {
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
export interface InterfaceLifIsisMetricListStructA {
  /**
  * 'level-1': Apply metric to level-1 links; 'level-2': Apply metric to level-2 links;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#level InterfaceLifIsisA#level}
  */
  readonly level?: string;
  /**
  * Configure the metric for interface (Default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#metric InterfaceLifIsisA#metric}
  */
  readonly metric?: number;
}

export function interfaceLifIsisMetricListStructAToTerraform(struct?: InterfaceLifIsisMetricListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function interfaceLifIsisMetricListStructAToHclTerraform(struct?: InterfaceLifIsisMetricListStructA | cdktf.IResolvable): any {
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

export class InterfaceLifIsisMetricListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLifIsisMetricListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceLifIsisMetricListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceLifIsisMetricListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceLifIsisMetricListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLifIsisMetricListStructAOutputReference {
    return new InterfaceLifIsisMetricListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLifIsisPasswordListStructA {
  /**
  * 'level-1': Specify password for level-1 PDUs; 'level-2': Specify password for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#level InterfaceLifIsisA#level}
  */
  readonly level?: string;
  /**
  * Configure the authentication password for interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#password InterfaceLifIsisA#password}
  */
  readonly password?: string;
}

export function interfaceLifIsisPasswordListStructAToTerraform(struct?: InterfaceLifIsisPasswordListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function interfaceLifIsisPasswordListStructAToHclTerraform(struct?: InterfaceLifIsisPasswordListStructA | cdktf.IResolvable): any {
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

export class InterfaceLifIsisPasswordListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLifIsisPasswordListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceLifIsisPasswordListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceLifIsisPasswordListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceLifIsisPasswordListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLifIsisPasswordListStructAOutputReference {
    return new InterfaceLifIsisPasswordListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLifIsisPriorityListStructA {
  /**
  * 'level-1': Specify priority for level-1 routing; 'level-2': Specify priority for level-2 routing;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#level InterfaceLifIsisA#level}
  */
  readonly level?: string;
  /**
  * Set priority for Designated Router election (Priority value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#priority InterfaceLifIsisA#priority}
  */
  readonly priority?: number;
}

export function interfaceLifIsisPriorityListStructAToTerraform(struct?: InterfaceLifIsisPriorityListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function interfaceLifIsisPriorityListStructAToHclTerraform(struct?: InterfaceLifIsisPriorityListStructA | cdktf.IResolvable): any {
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

export class InterfaceLifIsisPriorityListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLifIsisPriorityListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceLifIsisPriorityListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceLifIsisPriorityListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceLifIsisPriorityListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLifIsisPriorityListStructAOutputReference {
    return new InterfaceLifIsisPriorityListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLifIsisWideMetricListStructA {
  /**
  * 'level-1': Apply metric to level-1 links; 'level-2': Apply metric to level-2 links;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#level InterfaceLifIsisA#level}
  */
  readonly level?: string;
  /**
  * Configure the wide metric for interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#wide_metric InterfaceLifIsisA#wide_metric}
  */
  readonly wideMetric?: number;
}

export function interfaceLifIsisWideMetricListStructAToTerraform(struct?: InterfaceLifIsisWideMetricListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    wide_metric: cdktf.numberToTerraform(struct!.wideMetric),
  }
}


export function interfaceLifIsisWideMetricListStructAToHclTerraform(struct?: InterfaceLifIsisWideMetricListStructA | cdktf.IResolvable): any {
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

export class InterfaceLifIsisWideMetricListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLifIsisWideMetricListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceLifIsisWideMetricListStructA | cdktf.IResolvable | undefined) {
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

export class InterfaceLifIsisWideMetricListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceLifIsisWideMetricListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLifIsisWideMetricListStructAOutputReference {
    return new InterfaceLifIsisWideMetricListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis thunder_interface_lif_isis}
*/
export class InterfaceLifIsisA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_lif_isis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceLifIsisA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceLifIsisA to import
  * @param importFromId The id of the existing InterfaceLifIsisA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceLifIsisA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_lif_isis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_isis thunder_interface_lif_isis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceLifIsisAConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceLifIsisAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_lif_isis',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._ifname = config.ifname;
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

  // ifname - computed: false, optional: false, required: true
  private _ifname?: string; 
  public get ifname() {
    return this.getStringAttribute('ifname');
  }
  public set ifname(value: string) {
    this._ifname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnameInput() {
    return this._ifname;
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
  private _authentication = new InterfaceLifIsisAuthenticationAOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceLifIsisAuthenticationA) {
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
  private _bfdCfg = new InterfaceLifIsisBfdCfgAOutputReference(this, "bfd_cfg");
  public get bfdCfg() {
    return this._bfdCfg;
  }
  public putBfdCfg(value: InterfaceLifIsisBfdCfgA) {
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
  private _csnpIntervalList = new InterfaceLifIsisCsnpIntervalListStructAList(this, "csnp_interval_list", false);
  public get csnpIntervalList() {
    return this._csnpIntervalList;
  }
  public putCsnpIntervalList(value: InterfaceLifIsisCsnpIntervalListStructA[] | cdktf.IResolvable) {
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
  private _helloIntervalList = new InterfaceLifIsisHelloIntervalListStructAList(this, "hello_interval_list", false);
  public get helloIntervalList() {
    return this._helloIntervalList;
  }
  public putHelloIntervalList(value: InterfaceLifIsisHelloIntervalListStructA[] | cdktf.IResolvable) {
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
  private _helloIntervalMinimalList = new InterfaceLifIsisHelloIntervalMinimalListStructAList(this, "hello_interval_minimal_list", false);
  public get helloIntervalMinimalList() {
    return this._helloIntervalMinimalList;
  }
  public putHelloIntervalMinimalList(value: InterfaceLifIsisHelloIntervalMinimalListStructA[] | cdktf.IResolvable) {
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
  private _helloMultiplierList = new InterfaceLifIsisHelloMultiplierListStructAList(this, "hello_multiplier_list", false);
  public get helloMultiplierList() {
    return this._helloMultiplierList;
  }
  public putHelloMultiplierList(value: InterfaceLifIsisHelloMultiplierListStructA[] | cdktf.IResolvable) {
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
  private _meshGroup = new InterfaceLifIsisMeshGroupAOutputReference(this, "mesh_group");
  public get meshGroup() {
    return this._meshGroup;
  }
  public putMeshGroup(value: InterfaceLifIsisMeshGroupA) {
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
  private _metricList = new InterfaceLifIsisMetricListStructAList(this, "metric_list", false);
  public get metricList() {
    return this._metricList;
  }
  public putMetricList(value: InterfaceLifIsisMetricListStructA[] | cdktf.IResolvable) {
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
  private _passwordList = new InterfaceLifIsisPasswordListStructAList(this, "password_list", false);
  public get passwordList() {
    return this._passwordList;
  }
  public putPasswordList(value: InterfaceLifIsisPasswordListStructA[] | cdktf.IResolvable) {
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
  private _priorityList = new InterfaceLifIsisPriorityListStructAList(this, "priority_list", false);
  public get priorityList() {
    return this._priorityList;
  }
  public putPriorityList(value: InterfaceLifIsisPriorityListStructA[] | cdktf.IResolvable) {
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
  private _wideMetricList = new InterfaceLifIsisWideMetricListStructAList(this, "wide_metric_list", false);
  public get wideMetricList() {
    return this._wideMetricList;
  }
  public putWideMetricList(value: InterfaceLifIsisWideMetricListStructA[] | cdktf.IResolvable) {
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
      ifname: cdktf.stringToTerraform(this._ifname),
      lsp_interval: cdktf.numberToTerraform(this._lspInterval),
      network: cdktf.stringToTerraform(this._network),
      padding: cdktf.numberToTerraform(this._padding),
      retransmit_interval: cdktf.numberToTerraform(this._retransmitInterval),
      uuid: cdktf.stringToTerraform(this._uuid),
      authentication: interfaceLifIsisAuthenticationAToTerraform(this._authentication.internalValue),
      bfd_cfg: interfaceLifIsisBfdCfgAToTerraform(this._bfdCfg.internalValue),
      csnp_interval_list: cdktf.listMapper(interfaceLifIsisCsnpIntervalListStructAToTerraform, true)(this._csnpIntervalList.internalValue),
      hello_interval_list: cdktf.listMapper(interfaceLifIsisHelloIntervalListStructAToTerraform, true)(this._helloIntervalList.internalValue),
      hello_interval_minimal_list: cdktf.listMapper(interfaceLifIsisHelloIntervalMinimalListStructAToTerraform, true)(this._helloIntervalMinimalList.internalValue),
      hello_multiplier_list: cdktf.listMapper(interfaceLifIsisHelloMultiplierListStructAToTerraform, true)(this._helloMultiplierList.internalValue),
      mesh_group: interfaceLifIsisMeshGroupAToTerraform(this._meshGroup.internalValue),
      metric_list: cdktf.listMapper(interfaceLifIsisMetricListStructAToTerraform, true)(this._metricList.internalValue),
      password_list: cdktf.listMapper(interfaceLifIsisPasswordListStructAToTerraform, true)(this._passwordList.internalValue),
      priority_list: cdktf.listMapper(interfaceLifIsisPriorityListStructAToTerraform, true)(this._priorityList.internalValue),
      wide_metric_list: cdktf.listMapper(interfaceLifIsisWideMetricListStructAToTerraform, true)(this._wideMetricList.internalValue),
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
      ifname: {
        value: cdktf.stringToHclTerraform(this._ifname),
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
        value: interfaceLifIsisAuthenticationAToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLifIsisAuthenticationAList",
      },
      bfd_cfg: {
        value: interfaceLifIsisBfdCfgAToHclTerraform(this._bfdCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLifIsisBfdCfgAList",
      },
      csnp_interval_list: {
        value: cdktf.listMapperHcl(interfaceLifIsisCsnpIntervalListStructAToHclTerraform, true)(this._csnpIntervalList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLifIsisCsnpIntervalListStructAList",
      },
      hello_interval_list: {
        value: cdktf.listMapperHcl(interfaceLifIsisHelloIntervalListStructAToHclTerraform, true)(this._helloIntervalList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLifIsisHelloIntervalListStructAList",
      },
      hello_interval_minimal_list: {
        value: cdktf.listMapperHcl(interfaceLifIsisHelloIntervalMinimalListStructAToHclTerraform, true)(this._helloIntervalMinimalList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLifIsisHelloIntervalMinimalListStructAList",
      },
      hello_multiplier_list: {
        value: cdktf.listMapperHcl(interfaceLifIsisHelloMultiplierListStructAToHclTerraform, true)(this._helloMultiplierList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLifIsisHelloMultiplierListStructAList",
      },
      mesh_group: {
        value: interfaceLifIsisMeshGroupAToHclTerraform(this._meshGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLifIsisMeshGroupAList",
      },
      metric_list: {
        value: cdktf.listMapperHcl(interfaceLifIsisMetricListStructAToHclTerraform, true)(this._metricList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLifIsisMetricListStructAList",
      },
      password_list: {
        value: cdktf.listMapperHcl(interfaceLifIsisPasswordListStructAToHclTerraform, true)(this._passwordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLifIsisPasswordListStructAList",
      },
      priority_list: {
        value: cdktf.listMapperHcl(interfaceLifIsisPriorityListStructAToHclTerraform, true)(this._priorityList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLifIsisPriorityListStructAList",
      },
      wide_metric_list: {
        value: cdktf.listMapperHcl(interfaceLifIsisWideMetricListStructAToHclTerraform, true)(this._wideMetricList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLifIsisWideMetricListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
