// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceLoopbackIpRipAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#id InterfaceLoopbackIpRipA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ifnum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#ifnum InterfaceLoopbackIpRipA#ifnum}
  */
  readonly ifnum: string;
  /**
  * Enable receiving packet through the specified interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#receive_packet InterfaceLoopbackIpRipA#receive_packet}
  */
  readonly receivePacket?: number;
  /**
  * Enable sending packets through the specified interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#send_packet InterfaceLoopbackIpRipA#send_packet}
  */
  readonly sendPacket?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#uuid InterfaceLoopbackIpRipA#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#authentication InterfaceLoopbackIpRipA#authentication}
  */
  readonly authentication?: InterfaceLoopbackIpRipAuthenticationA;
  /**
  * receive_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#receive_cfg InterfaceLoopbackIpRipA#receive_cfg}
  */
  readonly receiveCfg?: InterfaceLoopbackIpRipReceiveCfgA;
  /**
  * send_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#send_cfg InterfaceLoopbackIpRipA#send_cfg}
  */
  readonly sendCfg?: InterfaceLoopbackIpRipSendCfgA;
  /**
  * split_horizon_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#split_horizon_cfg InterfaceLoopbackIpRipA#split_horizon_cfg}
  */
  readonly splitHorizonCfg?: InterfaceLoopbackIpRipSplitHorizonCfgA;
}
export interface InterfaceLoopbackIpRipAuthenticationKeyChainA {
  /**
  * Authentication key-chain (Name of key-chain)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#key_chain InterfaceLoopbackIpRipA#key_chain}
  */
  readonly keyChain?: string;
}

export function interfaceLoopbackIpRipAuthenticationKeyChainAToTerraform(struct?: InterfaceLoopbackIpRipAuthenticationKeyChainAOutputReference | InterfaceLoopbackIpRipAuthenticationKeyChainA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: cdktf.stringToTerraform(struct!.keyChain),
  }
}


export function interfaceLoopbackIpRipAuthenticationKeyChainAToHclTerraform(struct?: InterfaceLoopbackIpRipAuthenticationKeyChainAOutputReference | InterfaceLoopbackIpRipAuthenticationKeyChainA): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLoopbackIpRipAuthenticationKeyChainAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceLoopbackIpRipAuthenticationKeyChainA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChain = this._keyChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLoopbackIpRipAuthenticationKeyChainA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyChain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyChain = value.keyChain;
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
}
export interface InterfaceLoopbackIpRipAuthenticationModeA {
  /**
  * 'md5': Keyed message digest; 'text': Clear text authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#mode InterfaceLoopbackIpRipA#mode}
  */
  readonly mode?: string;
}

export function interfaceLoopbackIpRipAuthenticationModeAToTerraform(struct?: InterfaceLoopbackIpRipAuthenticationModeAOutputReference | InterfaceLoopbackIpRipAuthenticationModeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function interfaceLoopbackIpRipAuthenticationModeAToHclTerraform(struct?: InterfaceLoopbackIpRipAuthenticationModeAOutputReference | InterfaceLoopbackIpRipAuthenticationModeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class InterfaceLoopbackIpRipAuthenticationModeAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceLoopbackIpRipAuthenticationModeA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLoopbackIpRipAuthenticationModeA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
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
export interface InterfaceLoopbackIpRipAuthenticationStrA {
  /**
  * The RIP authentication string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#string InterfaceLoopbackIpRipA#string}
  */
  readonly string?: string;
}

export function interfaceLoopbackIpRipAuthenticationStrAToTerraform(struct?: InterfaceLoopbackIpRipAuthenticationStrAOutputReference | InterfaceLoopbackIpRipAuthenticationStrA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function interfaceLoopbackIpRipAuthenticationStrAToHclTerraform(struct?: InterfaceLoopbackIpRipAuthenticationStrAOutputReference | InterfaceLoopbackIpRipAuthenticationStrA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLoopbackIpRipAuthenticationStrAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceLoopbackIpRipAuthenticationStrA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLoopbackIpRipAuthenticationStrA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._string = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._string = value.string;
    }
  }

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}
export interface InterfaceLoopbackIpRipAuthenticationA {
  /**
  * key_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#key_chain InterfaceLoopbackIpRipA#key_chain}
  */
  readonly keyChain?: InterfaceLoopbackIpRipAuthenticationKeyChainA;
  /**
  * mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#mode InterfaceLoopbackIpRipA#mode}
  */
  readonly mode?: InterfaceLoopbackIpRipAuthenticationModeA;
  /**
  * str block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#str InterfaceLoopbackIpRipA#str}
  */
  readonly str?: InterfaceLoopbackIpRipAuthenticationStrA;
}

export function interfaceLoopbackIpRipAuthenticationAToTerraform(struct?: InterfaceLoopbackIpRipAuthenticationAOutputReference | InterfaceLoopbackIpRipAuthenticationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: interfaceLoopbackIpRipAuthenticationKeyChainAToTerraform(struct!.keyChain),
    mode: interfaceLoopbackIpRipAuthenticationModeAToTerraform(struct!.mode),
    str: interfaceLoopbackIpRipAuthenticationStrAToTerraform(struct!.str),
  }
}


export function interfaceLoopbackIpRipAuthenticationAToHclTerraform(struct?: InterfaceLoopbackIpRipAuthenticationAOutputReference | InterfaceLoopbackIpRipAuthenticationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain: {
      value: interfaceLoopbackIpRipAuthenticationKeyChainAToHclTerraform(struct!.keyChain),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceLoopbackIpRipAuthenticationKeyChainAList",
    },
    mode: {
      value: interfaceLoopbackIpRipAuthenticationModeAToHclTerraform(struct!.mode),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceLoopbackIpRipAuthenticationModeAList",
    },
    str: {
      value: interfaceLoopbackIpRipAuthenticationStrAToHclTerraform(struct!.str),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceLoopbackIpRipAuthenticationStrAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLoopbackIpRipAuthenticationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceLoopbackIpRipAuthenticationA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChain = this._keyChain?.internalValue;
    }
    if (this._mode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode?.internalValue;
    }
    if (this._str?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLoopbackIpRipAuthenticationA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyChain.internalValue = undefined;
      this._mode.internalValue = undefined;
      this._str.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyChain.internalValue = value.keyChain;
      this._mode.internalValue = value.mode;
      this._str.internalValue = value.str;
    }
  }

  // key_chain - computed: false, optional: true, required: false
  private _keyChain = new InterfaceLoopbackIpRipAuthenticationKeyChainAOutputReference(this, "key_chain");
  public get keyChain() {
    return this._keyChain;
  }
  public putKeyChain(value: InterfaceLoopbackIpRipAuthenticationKeyChainA) {
    this._keyChain.internalValue = value;
  }
  public resetKeyChain() {
    this._keyChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainInput() {
    return this._keyChain.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode = new InterfaceLoopbackIpRipAuthenticationModeAOutputReference(this, "mode");
  public get mode() {
    return this._mode;
  }
  public putMode(value: InterfaceLoopbackIpRipAuthenticationModeA) {
    this._mode.internalValue = value;
  }
  public resetMode() {
    this._mode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode.internalValue;
  }

  // str - computed: false, optional: true, required: false
  private _str = new InterfaceLoopbackIpRipAuthenticationStrAOutputReference(this, "str");
  public get str() {
    return this._str;
  }
  public putStr(value: InterfaceLoopbackIpRipAuthenticationStrA) {
    this._str.internalValue = value;
  }
  public resetStr() {
    this._str.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str.internalValue;
  }
}
export interface InterfaceLoopbackIpRipReceiveCfgA {
  /**
  * Advertisement reception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#receive InterfaceLoopbackIpRipA#receive}
  */
  readonly receive?: number;
  /**
  * '1': RIP version 1; '2': RIP version 2; '1-2': RIP version 1 & 2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#version InterfaceLoopbackIpRipA#version}
  */
  readonly version?: string;
}

export function interfaceLoopbackIpRipReceiveCfgAToTerraform(struct?: InterfaceLoopbackIpRipReceiveCfgAOutputReference | InterfaceLoopbackIpRipReceiveCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive: cdktf.numberToTerraform(struct!.receive),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function interfaceLoopbackIpRipReceiveCfgAToHclTerraform(struct?: InterfaceLoopbackIpRipReceiveCfgAOutputReference | InterfaceLoopbackIpRipReceiveCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    receive: {
      value: cdktf.numberToHclTerraform(struct!.receive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLoopbackIpRipReceiveCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceLoopbackIpRipReceiveCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLoopbackIpRipReceiveCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._receive = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._receive = value.receive;
      this._version = value.version;
    }
  }

  // receive - computed: false, optional: true, required: false
  private _receive?: number; 
  public get receive() {
    return this.getNumberAttribute('receive');
  }
  public set receive(value: number) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface InterfaceLoopbackIpRipSendCfgA {
  /**
  * Advertisement transmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#send InterfaceLoopbackIpRipA#send}
  */
  readonly send?: number;
  /**
  * '1': RIP version 1; '2': RIP version 2; '1-compatible': RIPv1-compatible; '1-2': RIP version 1 & 2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#version InterfaceLoopbackIpRipA#version}
  */
  readonly version?: string;
}

export function interfaceLoopbackIpRipSendCfgAToTerraform(struct?: InterfaceLoopbackIpRipSendCfgAOutputReference | InterfaceLoopbackIpRipSendCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    send: cdktf.numberToTerraform(struct!.send),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function interfaceLoopbackIpRipSendCfgAToHclTerraform(struct?: InterfaceLoopbackIpRipSendCfgAOutputReference | InterfaceLoopbackIpRipSendCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    send: {
      value: cdktf.numberToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLoopbackIpRipSendCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceLoopbackIpRipSendCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLoopbackIpRipSendCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._send = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._send = value.send;
      this._version = value.version;
    }
  }

  // send - computed: false, optional: true, required: false
  private _send?: number; 
  public get send() {
    return this.getNumberAttribute('send');
  }
  public set send(value: number) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface InterfaceLoopbackIpRipSplitHorizonCfgA {
  /**
  * 'poisoned': Perform split horizon with poisoned reverse; 'disable': Disable split horizon; 'enable': Perform split horizon without poisoned reverse;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#state InterfaceLoopbackIpRipA#state}
  */
  readonly state?: string;
}

export function interfaceLoopbackIpRipSplitHorizonCfgAToTerraform(struct?: InterfaceLoopbackIpRipSplitHorizonCfgAOutputReference | InterfaceLoopbackIpRipSplitHorizonCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function interfaceLoopbackIpRipSplitHorizonCfgAToHclTerraform(struct?: InterfaceLoopbackIpRipSplitHorizonCfgAOutputReference | InterfaceLoopbackIpRipSplitHorizonCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLoopbackIpRipSplitHorizonCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceLoopbackIpRipSplitHorizonCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLoopbackIpRipSplitHorizonCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip thunder_interface_loopback_ip_rip}
*/
export class InterfaceLoopbackIpRipA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_loopback_ip_rip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceLoopbackIpRipA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceLoopbackIpRipA to import
  * @param importFromId The id of the existing InterfaceLoopbackIpRipA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceLoopbackIpRipA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_loopback_ip_rip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_loopback_ip_rip thunder_interface_loopback_ip_rip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceLoopbackIpRipAConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceLoopbackIpRipAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_loopback_ip_rip',
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
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._receivePacket = config.receivePacket;
    this._sendPacket = config.sendPacket;
    this._uuid = config.uuid;
    this._authentication.internalValue = config.authentication;
    this._receiveCfg.internalValue = config.receiveCfg;
    this._sendCfg.internalValue = config.sendCfg;
    this._splitHorizonCfg.internalValue = config.splitHorizonCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // receive_packet - computed: false, optional: true, required: false
  private _receivePacket?: number; 
  public get receivePacket() {
    return this.getNumberAttribute('receive_packet');
  }
  public set receivePacket(value: number) {
    this._receivePacket = value;
  }
  public resetReceivePacket() {
    this._receivePacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receivePacketInput() {
    return this._receivePacket;
  }

  // send_packet - computed: false, optional: true, required: false
  private _sendPacket?: number; 
  public get sendPacket() {
    return this.getNumberAttribute('send_packet');
  }
  public set sendPacket(value: number) {
    this._sendPacket = value;
  }
  public resetSendPacket() {
    this._sendPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPacketInput() {
    return this._sendPacket;
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
  private _authentication = new InterfaceLoopbackIpRipAuthenticationAOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceLoopbackIpRipAuthenticationA) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // receive_cfg - computed: false, optional: true, required: false
  private _receiveCfg = new InterfaceLoopbackIpRipReceiveCfgAOutputReference(this, "receive_cfg");
  public get receiveCfg() {
    return this._receiveCfg;
  }
  public putReceiveCfg(value: InterfaceLoopbackIpRipReceiveCfgA) {
    this._receiveCfg.internalValue = value;
  }
  public resetReceiveCfg() {
    this._receiveCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveCfgInput() {
    return this._receiveCfg.internalValue;
  }

  // send_cfg - computed: false, optional: true, required: false
  private _sendCfg = new InterfaceLoopbackIpRipSendCfgAOutputReference(this, "send_cfg");
  public get sendCfg() {
    return this._sendCfg;
  }
  public putSendCfg(value: InterfaceLoopbackIpRipSendCfgA) {
    this._sendCfg.internalValue = value;
  }
  public resetSendCfg() {
    this._sendCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCfgInput() {
    return this._sendCfg.internalValue;
  }

  // split_horizon_cfg - computed: false, optional: true, required: false
  private _splitHorizonCfg = new InterfaceLoopbackIpRipSplitHorizonCfgAOutputReference(this, "split_horizon_cfg");
  public get splitHorizonCfg() {
    return this._splitHorizonCfg;
  }
  public putSplitHorizonCfg(value: InterfaceLoopbackIpRipSplitHorizonCfgA) {
    this._splitHorizonCfg.internalValue = value;
  }
  public resetSplitHorizonCfg() {
    this._splitHorizonCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonCfgInput() {
    return this._splitHorizonCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.stringToTerraform(this._ifnum),
      receive_packet: cdktf.numberToTerraform(this._receivePacket),
      send_packet: cdktf.numberToTerraform(this._sendPacket),
      uuid: cdktf.stringToTerraform(this._uuid),
      authentication: interfaceLoopbackIpRipAuthenticationAToTerraform(this._authentication.internalValue),
      receive_cfg: interfaceLoopbackIpRipReceiveCfgAToTerraform(this._receiveCfg.internalValue),
      send_cfg: interfaceLoopbackIpRipSendCfgAToTerraform(this._sendCfg.internalValue),
      split_horizon_cfg: interfaceLoopbackIpRipSplitHorizonCfgAToTerraform(this._splitHorizonCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      receive_packet: {
        value: cdktf.numberToHclTerraform(this._receivePacket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      send_packet: {
        value: cdktf.numberToHclTerraform(this._sendPacket),
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
        value: interfaceLoopbackIpRipAuthenticationAToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLoopbackIpRipAuthenticationAList",
      },
      receive_cfg: {
        value: interfaceLoopbackIpRipReceiveCfgAToHclTerraform(this._receiveCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLoopbackIpRipReceiveCfgAList",
      },
      send_cfg: {
        value: interfaceLoopbackIpRipSendCfgAToHclTerraform(this._sendCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLoopbackIpRipSendCfgAList",
      },
      split_horizon_cfg: {
        value: interfaceLoopbackIpRipSplitHorizonCfgAToHclTerraform(this._splitHorizonCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLoopbackIpRipSplitHorizonCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
