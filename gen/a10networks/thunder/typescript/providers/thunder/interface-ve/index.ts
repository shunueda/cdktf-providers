// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceVeConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable; 'disable': Disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#action InterfaceVe#action}
  */
  readonly action?: string;
  /**
  * Enable Gaming Protocol Compliance Check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#gaming_protocol_compliance InterfaceVe#gaming_protocol_compliance}
  */
  readonly gamingProtocolCompliance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#id InterfaceVe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Virtual ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ifnum InterfaceVe#ifnum}
  */
  readonly ifnum: number;
  /**
  * Disable L3 forwarding between VLANs for incoming packets on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#l3_vlan_fwd_disable InterfaceVe#l3_vlan_fwd_disable}
  */
  readonly l3VlanFwdDisable?: number;
  /**
  * Interface mtu (Interface MTU, default 1 (min MTU is 1280 for IPv6))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#mtu InterfaceVe#mtu}
  */
  readonly mtu?: number;
  /**
  * Name for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#name InterfaceVe#name}
  */
  readonly name?: string;
  /**
  * 'enable': Enable ping sweep detection; 'disable': Disable ping sweep detection(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ping_sweep_detection InterfaceVe#ping_sweep_detection}
  */
  readonly pingSweepDetection?: string;
  /**
  * 'enable': Enable port scan detection; 'disable': Disable port scan detection(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#port_scan_detection InterfaceVe#port_scan_detection}
  */
  readonly portScanDetection?: string;
  /**
  * The trap source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#trap_source InterfaceVe#trap_source}
  */
  readonly trapSource?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#user_tag InterfaceVe#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
  /**
  * access_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#access_list InterfaceVe#access_list}
  */
  readonly accessList?: InterfaceVeAccessListStruct;
  /**
  * bfd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#bfd InterfaceVe#bfd}
  */
  readonly bfd?: InterfaceVeBfd;
  /**
  * ddos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ddos InterfaceVe#ddos}
  */
  readonly ddos?: InterfaceVeDdos;
  /**
  * icmp_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#icmp_rate_limit InterfaceVe#icmp_rate_limit}
  */
  readonly icmpRateLimit?: InterfaceVeIcmpRateLimit;
  /**
  * icmpv6_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#icmpv6_rate_limit InterfaceVe#icmpv6_rate_limit}
  */
  readonly icmpv6RateLimit?: InterfaceVeIcmpv6RateLimit;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ip InterfaceVe#ip}
  */
  readonly ip?: InterfaceVeIp;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ipv6 InterfaceVe#ipv6}
  */
  readonly ipv6?: InterfaceVeIpv6;
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#isis InterfaceVe#isis}
  */
  readonly isis?: InterfaceVeIsis;
  /**
  * lw_4o6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#lw_4o6 InterfaceVe#lw_4o6}
  */
  readonly lw4O6?: InterfaceVeLw4O6;
  /**
  * map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#map InterfaceVe#map}
  */
  readonly map?: InterfaceVeMap;
  /**
  * nptv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#nptv6 InterfaceVe#nptv6}
  */
  readonly nptv6?: InterfaceVeNptv6;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#sampling_enable InterfaceVe#sampling_enable}
  */
  readonly samplingEnable?: InterfaceVeSamplingEnable[] | cdktf.IResolvable;
}
export interface InterfaceVeAccessListStruct {
  /**
  * ACL id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#acl_id InterfaceVe#acl_id}
  */
  readonly aclId?: number;
  /**
  * Named Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#acl_name InterfaceVe#acl_name}
  */
  readonly aclName?: string;
}

export function interfaceVeAccessListStructToTerraform(struct?: InterfaceVeAccessListStructOutputReference | InterfaceVeAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_id: cdktf.numberToTerraform(struct!.aclId),
    acl_name: cdktf.stringToTerraform(struct!.aclName),
  }
}


export function interfaceVeAccessListStructToHclTerraform(struct?: InterfaceVeAccessListStructOutputReference | InterfaceVeAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_id: {
      value: cdktf.numberToHclTerraform(struct!.aclId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeAccessListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeAccessListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclId = this._aclId;
    }
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeAccessListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aclId = undefined;
      this._aclName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aclId = value.aclId;
      this._aclName = value.aclName;
    }
  }

  // acl_id - computed: false, optional: true, required: false
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }
}
export interface InterfaceVeBfdAuthentication {
  /**
  * Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#key_id InterfaceVe#key_id}
  */
  readonly keyId?: number;
  /**
  * 'md5': Keyed MD5; 'meticulous-md5': Meticulous Keyed MD5; 'meticulous-sha1': Meticulous Keyed SHA1; 'sha1': Keyed SHA1; 'simple': Simple Password;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#method InterfaceVe#method}
  */
  readonly method?: string;
  /**
  * Key String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#password InterfaceVe#password}
  */
  readonly password?: string;
}

export function interfaceVeBfdAuthenticationToTerraform(struct?: InterfaceVeBfdAuthenticationOutputReference | InterfaceVeBfdAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.numberToTerraform(struct!.keyId),
    method: cdktf.stringToTerraform(struct!.method),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function interfaceVeBfdAuthenticationToHclTerraform(struct?: InterfaceVeBfdAuthenticationOutputReference | InterfaceVeBfdAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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

export class InterfaceVeBfdAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeBfdAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeBfdAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
      this._method = undefined;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
      this._method = value.method;
      this._password = value.password;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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
export interface InterfaceVeBfdIntervalCfg {
  /**
  * Transmit interval between BFD packets (Milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#interval InterfaceVe#interval}
  */
  readonly interval?: number;
  /**
  * Minimum receive interval capability (Milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#min_rx InterfaceVe#min_rx}
  */
  readonly minRx?: number;
  /**
  * Multiplier value used to compute holddown (value used to multiply the interval)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#multiplier InterfaceVe#multiplier}
  */
  readonly multiplier?: number;
}

export function interfaceVeBfdIntervalCfgToTerraform(struct?: InterfaceVeBfdIntervalCfgOutputReference | InterfaceVeBfdIntervalCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    min_rx: cdktf.numberToTerraform(struct!.minRx),
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
  }
}


export function interfaceVeBfdIntervalCfgToHclTerraform(struct?: InterfaceVeBfdIntervalCfgOutputReference | InterfaceVeBfdIntervalCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_rx: {
      value: cdktf.numberToHclTerraform(struct!.minRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeBfdIntervalCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeBfdIntervalCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._minRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRx = this._minRx;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeBfdIntervalCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._minRx = undefined;
      this._multiplier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._minRx = value.minRx;
      this._multiplier = value.multiplier;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // min_rx - computed: false, optional: true, required: false
  private _minRx?: number; 
  public get minRx() {
    return this.getNumberAttribute('min_rx');
  }
  public set minRx(value: number) {
    this._minRx = value;
  }
  public resetMinRx() {
    this._minRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRxInput() {
    return this._minRx;
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }
}
export interface InterfaceVeBfd {
  /**
  * Demand mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#demand InterfaceVe#demand}
  */
  readonly demand?: number;
  /**
  * Enable BFD Echo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#echo InterfaceVe#echo}
  */
  readonly echo?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#authentication InterfaceVe#authentication}
  */
  readonly authentication?: InterfaceVeBfdAuthentication;
  /**
  * interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#interval_cfg InterfaceVe#interval_cfg}
  */
  readonly intervalCfg?: InterfaceVeBfdIntervalCfg;
}

export function interfaceVeBfdToTerraform(struct?: InterfaceVeBfdOutputReference | InterfaceVeBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    demand: cdktf.numberToTerraform(struct!.demand),
    echo: cdktf.numberToTerraform(struct!.echo),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication: interfaceVeBfdAuthenticationToTerraform(struct!.authentication),
    interval_cfg: interfaceVeBfdIntervalCfgToTerraform(struct!.intervalCfg),
  }
}


export function interfaceVeBfdToHclTerraform(struct?: InterfaceVeBfdOutputReference | InterfaceVeBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    demand: {
      value: cdktf.numberToHclTerraform(struct!.demand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    echo: {
      value: cdktf.numberToHclTerraform(struct!.echo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: interfaceVeBfdAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeBfdAuthenticationList",
    },
    interval_cfg: {
      value: interfaceVeBfdIntervalCfgToHclTerraform(struct!.intervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeBfdIntervalCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._demand !== undefined) {
      hasAnyValues = true;
      internalValueResult.demand = this._demand;
    }
    if (this._echo !== undefined) {
      hasAnyValues = true;
      internalValueResult.echo = this._echo;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._intervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalCfg = this._intervalCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeBfd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._demand = undefined;
      this._echo = undefined;
      this._uuid = undefined;
      this._authentication.internalValue = undefined;
      this._intervalCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._demand = value.demand;
      this._echo = value.echo;
      this._uuid = value.uuid;
      this._authentication.internalValue = value.authentication;
      this._intervalCfg.internalValue = value.intervalCfg;
    }
  }

  // demand - computed: false, optional: true, required: false
  private _demand?: number; 
  public get demand() {
    return this.getNumberAttribute('demand');
  }
  public set demand(value: number) {
    this._demand = value;
  }
  public resetDemand() {
    this._demand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get demandInput() {
    return this._demand;
  }

  // echo - computed: false, optional: true, required: false
  private _echo?: number; 
  public get echo() {
    return this.getNumberAttribute('echo');
  }
  public set echo(value: number) {
    this._echo = value;
  }
  public resetEcho() {
    this._echo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoInput() {
    return this._echo;
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
  private _authentication = new InterfaceVeBfdAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceVeBfdAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // interval_cfg - computed: false, optional: true, required: false
  private _intervalCfg = new InterfaceVeBfdIntervalCfgOutputReference(this, "interval_cfg");
  public get intervalCfg() {
    return this._intervalCfg;
  }
  public putIntervalCfg(value: InterfaceVeBfdIntervalCfg) {
    this._intervalCfg.internalValue = value;
  }
  public resetIntervalCfg() {
    this._intervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalCfgInput() {
    return this._intervalCfg.internalValue;
  }
}
export interface InterfaceVeDdos {
  /**
  * DDoS inside (trusted) or outside (untrusted) interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#inside InterfaceVe#inside}
  */
  readonly inside?: number;
  /**
  * DDoS inside (trusted) or outside (untrusted) interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#outside InterfaceVe#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
}

export function interfaceVeDdosToTerraform(struct?: InterfaceVeDdosOutputReference | InterfaceVeDdos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.numberToTerraform(struct!.inside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceVeDdosToHclTerraform(struct?: InterfaceVeDdosOutputReference | InterfaceVeDdos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeDdosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeDdos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeDdos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
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
}
export interface InterfaceVeIcmpRateLimit {
  /**
  * Enter lockup state when ICMP rate exceeds lockup rate limit (Maximum rate limit. If exceeds this limit, drop all ICMP packet for a time period)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#lockup InterfaceVe#lockup}
  */
  readonly lockup?: number;
  /**
  * Lockup period (second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#lockup_period InterfaceVe#lockup_period}
  */
  readonly lockupPeriod?: number;
  /**
  * Normal rate limit. If exceeds this limit, drop the ICMP packet that goes over the limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#normal InterfaceVe#normal}
  */
  readonly normal?: number;
}

export function interfaceVeIcmpRateLimitToTerraform(struct?: InterfaceVeIcmpRateLimitOutputReference | InterfaceVeIcmpRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockup: cdktf.numberToTerraform(struct!.lockup),
    lockup_period: cdktf.numberToTerraform(struct!.lockupPeriod),
    normal: cdktf.numberToTerraform(struct!.normal),
  }
}


export function interfaceVeIcmpRateLimitToHclTerraform(struct?: InterfaceVeIcmpRateLimitOutputReference | InterfaceVeIcmpRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockup: {
      value: cdktf.numberToHclTerraform(struct!.lockup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockup_period: {
      value: cdktf.numberToHclTerraform(struct!.lockupPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    normal: {
      value: cdktf.numberToHclTerraform(struct!.normal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIcmpRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIcmpRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockup !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockup = this._lockup;
    }
    if (this._lockupPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupPeriod = this._lockupPeriod;
    }
    if (this._normal !== undefined) {
      hasAnyValues = true;
      internalValueResult.normal = this._normal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIcmpRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lockup = undefined;
      this._lockupPeriod = undefined;
      this._normal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lockup = value.lockup;
      this._lockupPeriod = value.lockupPeriod;
      this._normal = value.normal;
    }
  }

  // lockup - computed: false, optional: true, required: false
  private _lockup?: number; 
  public get lockup() {
    return this.getNumberAttribute('lockup');
  }
  public set lockup(value: number) {
    this._lockup = value;
  }
  public resetLockup() {
    this._lockup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupInput() {
    return this._lockup;
  }

  // lockup_period - computed: false, optional: true, required: false
  private _lockupPeriod?: number; 
  public get lockupPeriod() {
    return this.getNumberAttribute('lockup_period');
  }
  public set lockupPeriod(value: number) {
    this._lockupPeriod = value;
  }
  public resetLockupPeriod() {
    this._lockupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupPeriodInput() {
    return this._lockupPeriod;
  }

  // normal - computed: false, optional: true, required: false
  private _normal?: number; 
  public get normal() {
    return this.getNumberAttribute('normal');
  }
  public set normal(value: number) {
    this._normal = value;
  }
  public resetNormal() {
    this._normal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalInput() {
    return this._normal;
  }
}
export interface InterfaceVeIcmpv6RateLimit {
  /**
  * Lockup period (second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#lockup_period_v6 InterfaceVe#lockup_period_v6}
  */
  readonly lockupPeriodV6?: number;
  /**
  * Enter lockup state when ICMP rate exceeds lockup rate limit (Maximum rate limit. If exceeds this limit, drop all ICMP packet for a time period)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#lockup_v6 InterfaceVe#lockup_v6}
  */
  readonly lockupV6?: number;
  /**
  * Normal rate limit. If exceeds this limit, drop the ICMP packet that goes over the limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#normal_v6 InterfaceVe#normal_v6}
  */
  readonly normalV6?: number;
}

export function interfaceVeIcmpv6RateLimitToTerraform(struct?: InterfaceVeIcmpv6RateLimitOutputReference | InterfaceVeIcmpv6RateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockup_period_v6: cdktf.numberToTerraform(struct!.lockupPeriodV6),
    lockup_v6: cdktf.numberToTerraform(struct!.lockupV6),
    normal_v6: cdktf.numberToTerraform(struct!.normalV6),
  }
}


export function interfaceVeIcmpv6RateLimitToHclTerraform(struct?: InterfaceVeIcmpv6RateLimitOutputReference | InterfaceVeIcmpv6RateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockup_period_v6: {
      value: cdktf.numberToHclTerraform(struct!.lockupPeriodV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockup_v6: {
      value: cdktf.numberToHclTerraform(struct!.lockupV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    normal_v6: {
      value: cdktf.numberToHclTerraform(struct!.normalV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIcmpv6RateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIcmpv6RateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockupPeriodV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupPeriodV6 = this._lockupPeriodV6;
    }
    if (this._lockupV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupV6 = this._lockupV6;
    }
    if (this._normalV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalV6 = this._normalV6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIcmpv6RateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lockupPeriodV6 = undefined;
      this._lockupV6 = undefined;
      this._normalV6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lockupPeriodV6 = value.lockupPeriodV6;
      this._lockupV6 = value.lockupV6;
      this._normalV6 = value.normalV6;
    }
  }

  // lockup_period_v6 - computed: false, optional: true, required: false
  private _lockupPeriodV6?: number; 
  public get lockupPeriodV6() {
    return this.getNumberAttribute('lockup_period_v6');
  }
  public set lockupPeriodV6(value: number) {
    this._lockupPeriodV6 = value;
  }
  public resetLockupPeriodV6() {
    this._lockupPeriodV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupPeriodV6Input() {
    return this._lockupPeriodV6;
  }

  // lockup_v6 - computed: false, optional: true, required: false
  private _lockupV6?: number; 
  public get lockupV6() {
    return this.getNumberAttribute('lockup_v6');
  }
  public set lockupV6(value: number) {
    this._lockupV6 = value;
  }
  public resetLockupV6() {
    this._lockupV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupV6Input() {
    return this._lockupV6;
  }

  // normal_v6 - computed: false, optional: true, required: false
  private _normalV6?: number; 
  public get normalV6() {
    return this.getNumberAttribute('normal_v6');
  }
  public set normalV6(value: number) {
    this._normalV6 = value;
  }
  public resetNormalV6() {
    this._normalV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalV6Input() {
    return this._normalV6;
  }
}
export interface InterfaceVeIpAddressListStruct {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ipv4_address InterfaceVe#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ipv4_netmask InterfaceVe#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
}

export function interfaceVeIpAddressListStructToTerraform(struct?: InterfaceVeIpAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
  }
}


export function interfaceVeIpAddressListStructToHclTerraform(struct?: InterfaceVeIpAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_netmask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
    }
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_netmask - computed: false, optional: true, required: false
  private _ipv4Netmask?: string; 
  public get ipv4Netmask() {
    return this.getStringAttribute('ipv4_netmask');
  }
  public set ipv4Netmask(value: string) {
    this._ipv4Netmask = value;
  }
  public resetIpv4Netmask() {
    this._ipv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskInput() {
    return this._ipv4Netmask;
  }
}

export class InterfaceVeIpAddressListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpAddressListStructOutputReference {
    return new InterfaceVeIpAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpHelperAddressListStruct {
  /**
  * Helper address for DHCP packets (IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#helper_address InterfaceVe#helper_address}
  */
  readonly helperAddress?: string;
}

export function interfaceVeIpHelperAddressListStructToTerraform(struct?: InterfaceVeIpHelperAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    helper_address: cdktf.stringToTerraform(struct!.helperAddress),
  }
}


export function interfaceVeIpHelperAddressListStructToHclTerraform(struct?: InterfaceVeIpHelperAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    helper_address: {
      value: cdktf.stringToHclTerraform(struct!.helperAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpHelperAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpHelperAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helperAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.helperAddress = this._helperAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpHelperAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helperAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helperAddress = value.helperAddress;
    }
  }

  // helper_address - computed: false, optional: true, required: false
  private _helperAddress?: string; 
  public get helperAddress() {
    return this.getStringAttribute('helper_address');
  }
  public set helperAddress(value: string) {
    this._helperAddress = value;
  }
  public resetHelperAddress() {
    this._helperAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperAddressInput() {
    return this._helperAddress;
  }
}

export class InterfaceVeIpHelperAddressListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpHelperAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpHelperAddressListStructOutputReference {
    return new InterfaceVeIpHelperAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpOspfOspfGlobalAuthenticationCfg {
  /**
  * Enable authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#authentication InterfaceVe#authentication}
  */
  readonly authentication?: number;
  /**
  * 'message-digest': Use message-digest authentication; 'null': Use no authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#value InterfaceVe#value}
  */
  readonly value?: string;
}

export function interfaceVeIpOspfOspfGlobalAuthenticationCfgToTerraform(struct?: InterfaceVeIpOspfOspfGlobalAuthenticationCfgOutputReference | InterfaceVeIpOspfOspfGlobalAuthenticationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.numberToTerraform(struct!.authentication),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function interfaceVeIpOspfOspfGlobalAuthenticationCfgToHclTerraform(struct?: InterfaceVeIpOspfOspfGlobalAuthenticationCfgOutputReference | InterfaceVeIpOspfOspfGlobalAuthenticationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.numberToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpOspfOspfGlobalAuthenticationCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpOspfOspfGlobalAuthenticationCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpOspfOspfGlobalAuthenticationCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication = value.authentication;
      this._value = value.value;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: number; 
  public get authentication() {
    return this.getNumberAttribute('authentication');
  }
  public set authentication(value: number) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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
export interface InterfaceVeIpOspfOspfGlobalBfdCfg {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#bfd InterfaceVe#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#disable InterfaceVe#disable}
  */
  readonly disable?: number;
}

export function interfaceVeIpOspfOspfGlobalBfdCfgToTerraform(struct?: InterfaceVeIpOspfOspfGlobalBfdCfgOutputReference | InterfaceVeIpOspfOspfGlobalBfdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
  }
}


export function interfaceVeIpOspfOspfGlobalBfdCfgToHclTerraform(struct?: InterfaceVeIpOspfOspfGlobalBfdCfgOutputReference | InterfaceVeIpOspfOspfGlobalBfdCfg): any {
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

export class InterfaceVeIpOspfOspfGlobalBfdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpOspfOspfGlobalBfdCfg | undefined {
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

  public set internalValue(value: InterfaceVeIpOspfOspfGlobalBfdCfg | undefined) {
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
export interface InterfaceVeIpOspfOspfGlobalDatabaseFilterCfg {
  /**
  * 'all': Filter all LSA;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#database_filter InterfaceVe#database_filter}
  */
  readonly databaseFilter?: string;
  /**
  * Outgoing LSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#out InterfaceVe#out}
  */
  readonly out?: number;
}

export function interfaceVeIpOspfOspfGlobalDatabaseFilterCfgToTerraform(struct?: InterfaceVeIpOspfOspfGlobalDatabaseFilterCfgOutputReference | InterfaceVeIpOspfOspfGlobalDatabaseFilterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_filter: cdktf.stringToTerraform(struct!.databaseFilter),
    out: cdktf.numberToTerraform(struct!.out),
  }
}


export function interfaceVeIpOspfOspfGlobalDatabaseFilterCfgToHclTerraform(struct?: InterfaceVeIpOspfOspfGlobalDatabaseFilterCfgOutputReference | InterfaceVeIpOspfOspfGlobalDatabaseFilterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_filter: {
      value: cdktf.stringToHclTerraform(struct!.databaseFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out: {
      value: cdktf.numberToHclTerraform(struct!.out),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpOspfOspfGlobalDatabaseFilterCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpOspfOspfGlobalDatabaseFilterCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFilter = this._databaseFilter;
    }
    if (this._out !== undefined) {
      hasAnyValues = true;
      internalValueResult.out = this._out;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpOspfOspfGlobalDatabaseFilterCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseFilter = undefined;
      this._out = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseFilter = value.databaseFilter;
      this._out = value.out;
    }
  }

  // database_filter - computed: false, optional: true, required: false
  private _databaseFilter?: string; 
  public get databaseFilter() {
    return this.getStringAttribute('database_filter');
  }
  public set databaseFilter(value: string) {
    this._databaseFilter = value;
  }
  public resetDatabaseFilter() {
    this._databaseFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFilterInput() {
    return this._databaseFilter;
  }

  // out - computed: false, optional: true, required: false
  private _out?: number; 
  public get out() {
    return this.getNumberAttribute('out');
  }
  public set out(value: number) {
    this._out = value;
  }
  public resetOut() {
    this._out = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outInput() {
    return this._out;
  }
}
export interface InterfaceVeIpOspfOspfGlobalMessageDigestCfgMd5 {
  /**
  * The OSPF password (1-16)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#md5_value InterfaceVe#md5_value}
  */
  readonly md5Value?: string;
}

export function interfaceVeIpOspfOspfGlobalMessageDigestCfgMd5ToTerraform(struct?: InterfaceVeIpOspfOspfGlobalMessageDigestCfgMd5OutputReference | InterfaceVeIpOspfOspfGlobalMessageDigestCfgMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5_value: cdktf.stringToTerraform(struct!.md5Value),
  }
}


export function interfaceVeIpOspfOspfGlobalMessageDigestCfgMd5ToHclTerraform(struct?: InterfaceVeIpOspfOspfGlobalMessageDigestCfgMd5OutputReference | InterfaceVeIpOspfOspfGlobalMessageDigestCfgMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5_value: {
      value: cdktf.stringToHclTerraform(struct!.md5Value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpOspfOspfGlobalMessageDigestCfgMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpOspfOspfGlobalMessageDigestCfgMd5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Value = this._md5Value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpOspfOspfGlobalMessageDigestCfgMd5 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._md5Value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._md5Value = value.md5Value;
    }
  }

  // md5_value - computed: false, optional: true, required: false
  private _md5Value?: string; 
  public get md5Value() {
    return this.getStringAttribute('md5_value');
  }
  public set md5Value(value: string) {
    this._md5Value = value;
  }
  public resetMd5Value() {
    this._md5Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5ValueInput() {
    return this._md5Value;
  }
}
export interface InterfaceVeIpOspfOspfGlobalMessageDigestCfg {
  /**
  * Message digest authentication password (key) (Key id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#message_digest_key InterfaceVe#message_digest_key}
  */
  readonly messageDigestKey?: number;
  /**
  * md5 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#md5 InterfaceVe#md5}
  */
  readonly md5?: InterfaceVeIpOspfOspfGlobalMessageDigestCfgMd5;
}

export function interfaceVeIpOspfOspfGlobalMessageDigestCfgToTerraform(struct?: InterfaceVeIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_digest_key: cdktf.numberToTerraform(struct!.messageDigestKey),
    md5: interfaceVeIpOspfOspfGlobalMessageDigestCfgMd5ToTerraform(struct!.md5),
  }
}


export function interfaceVeIpOspfOspfGlobalMessageDigestCfgToHclTerraform(struct?: InterfaceVeIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_digest_key: {
      value: cdktf.numberToHclTerraform(struct!.messageDigestKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md5: {
      value: interfaceVeIpOspfOspfGlobalMessageDigestCfgMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpOspfOspfGlobalMessageDigestCfgMd5List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpOspfOspfGlobalMessageDigestCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageDigestKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestKey = this._messageDigestKey;
    }
    if (this._md5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageDigestKey = undefined;
      this._md5.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageDigestKey = value.messageDigestKey;
      this._md5.internalValue = value.md5;
    }
  }

  // message_digest_key - computed: false, optional: true, required: false
  private _messageDigestKey?: number; 
  public get messageDigestKey() {
    return this.getNumberAttribute('message_digest_key');
  }
  public set messageDigestKey(value: number) {
    this._messageDigestKey = value;
  }
  public resetMessageDigestKey() {
    this._messageDigestKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestKeyInput() {
    return this._messageDigestKey;
  }

  // md5 - computed: false, optional: true, required: false
  private _md5 = new InterfaceVeIpOspfOspfGlobalMessageDigestCfgMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: InterfaceVeIpOspfOspfGlobalMessageDigestCfgMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }
}

export class InterfaceVeIpOspfOspfGlobalMessageDigestCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpOspfOspfGlobalMessageDigestCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpOspfOspfGlobalMessageDigestCfgOutputReference {
    return new InterfaceVeIpOspfOspfGlobalMessageDigestCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpOspfOspfGlobalNetwork {
  /**
  * Specify OSPF broadcast multi-access network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#broadcast InterfaceVe#broadcast}
  */
  readonly broadcast?: number;
  /**
  * Specify OSPF NBMA network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#non_broadcast InterfaceVe#non_broadcast}
  */
  readonly nonBroadcast?: number;
  /**
  * Specify non-broadcast point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#p2mp_nbma InterfaceVe#p2mp_nbma}
  */
  readonly p2MpNbma?: number;
  /**
  * Specify OSPF point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#point_to_multipoint InterfaceVe#point_to_multipoint}
  */
  readonly pointToMultipoint?: number;
  /**
  * Specify OSPF point-to-point network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#point_to_point InterfaceVe#point_to_point}
  */
  readonly pointToPoint?: number;
}

export function interfaceVeIpOspfOspfGlobalNetworkToTerraform(struct?: InterfaceVeIpOspfOspfGlobalNetworkOutputReference | InterfaceVeIpOspfOspfGlobalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast: cdktf.numberToTerraform(struct!.broadcast),
    non_broadcast: cdktf.numberToTerraform(struct!.nonBroadcast),
    p2mp_nbma: cdktf.numberToTerraform(struct!.p2MpNbma),
    point_to_multipoint: cdktf.numberToTerraform(struct!.pointToMultipoint),
    point_to_point: cdktf.numberToTerraform(struct!.pointToPoint),
  }
}


export function interfaceVeIpOspfOspfGlobalNetworkToHclTerraform(struct?: InterfaceVeIpOspfOspfGlobalNetworkOutputReference | InterfaceVeIpOspfOspfGlobalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast: {
      value: cdktf.numberToHclTerraform(struct!.broadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_broadcast: {
      value: cdktf.numberToHclTerraform(struct!.nonBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    p2mp_nbma: {
      value: cdktf.numberToHclTerraform(struct!.p2MpNbma),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    point_to_multipoint: {
      value: cdktf.numberToHclTerraform(struct!.pointToMultipoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    point_to_point: {
      value: cdktf.numberToHclTerraform(struct!.pointToPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpOspfOspfGlobalNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpOspfOspfGlobalNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcast = this._broadcast;
    }
    if (this._nonBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonBroadcast = this._nonBroadcast;
    }
    if (this._p2MpNbma !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2MpNbma = this._p2MpNbma;
    }
    if (this._pointToMultipoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointToMultipoint = this._pointToMultipoint;
    }
    if (this._pointToPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointToPoint = this._pointToPoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpOspfOspfGlobalNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._broadcast = undefined;
      this._nonBroadcast = undefined;
      this._p2MpNbma = undefined;
      this._pointToMultipoint = undefined;
      this._pointToPoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._broadcast = value.broadcast;
      this._nonBroadcast = value.nonBroadcast;
      this._p2MpNbma = value.p2MpNbma;
      this._pointToMultipoint = value.pointToMultipoint;
      this._pointToPoint = value.pointToPoint;
    }
  }

  // broadcast - computed: false, optional: true, required: false
  private _broadcast?: number; 
  public get broadcast() {
    return this.getNumberAttribute('broadcast');
  }
  public set broadcast(value: number) {
    this._broadcast = value;
  }
  public resetBroadcast() {
    this._broadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast;
  }

  // non_broadcast - computed: false, optional: true, required: false
  private _nonBroadcast?: number; 
  public get nonBroadcast() {
    return this.getNumberAttribute('non_broadcast');
  }
  public set nonBroadcast(value: number) {
    this._nonBroadcast = value;
  }
  public resetNonBroadcast() {
    this._nonBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonBroadcastInput() {
    return this._nonBroadcast;
  }

  // p2mp_nbma - computed: false, optional: true, required: false
  private _p2MpNbma?: number; 
  public get p2MpNbma() {
    return this.getNumberAttribute('p2mp_nbma');
  }
  public set p2MpNbma(value: number) {
    this._p2MpNbma = value;
  }
  public resetP2MpNbma() {
    this._p2MpNbma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2MpNbmaInput() {
    return this._p2MpNbma;
  }

  // point_to_multipoint - computed: false, optional: true, required: false
  private _pointToMultipoint?: number; 
  public get pointToMultipoint() {
    return this.getNumberAttribute('point_to_multipoint');
  }
  public set pointToMultipoint(value: number) {
    this._pointToMultipoint = value;
  }
  public resetPointToMultipoint() {
    this._pointToMultipoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointToMultipointInput() {
    return this._pointToMultipoint;
  }

  // point_to_point - computed: false, optional: true, required: false
  private _pointToPoint?: number; 
  public get pointToPoint() {
    return this.getNumberAttribute('point_to_point');
  }
  public set pointToPoint(value: number) {
    this._pointToPoint = value;
  }
  public resetPointToPoint() {
    this._pointToPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointToPointInput() {
    return this._pointToPoint;
  }
}
export interface InterfaceVeIpOspfOspfGlobal {
  /**
  * Authentication password (key) (The OSPF password (key))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#authentication_key InterfaceVe#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Interface cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#cost InterfaceVe#cost}
  */
  readonly cost?: number;
  /**
  * Interval after which a neighbor is declared dead (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#dead_interval InterfaceVe#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * 'all': All functionality;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#disable InterfaceVe#disable}
  */
  readonly disable?: string;
  /**
  * Time between HELLO packets (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#hello_interval InterfaceVe#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * OSPF interface MTU (MTU size)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#mtu InterfaceVe#mtu}
  */
  readonly mtu?: number;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#mtu_ignore InterfaceVe#mtu_ignore}
  */
  readonly mtuIgnore?: number;
  /**
  * Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#priority InterfaceVe#priority}
  */
  readonly priority?: number;
  /**
  * Time between retransmitting lost link state advertisements (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#retransmit_interval InterfaceVe#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Link state transmit delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#transmit_delay InterfaceVe#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#authentication_cfg InterfaceVe#authentication_cfg}
  */
  readonly authenticationCfg?: InterfaceVeIpOspfOspfGlobalAuthenticationCfg;
  /**
  * bfd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#bfd_cfg InterfaceVe#bfd_cfg}
  */
  readonly bfdCfg?: InterfaceVeIpOspfOspfGlobalBfdCfg;
  /**
  * database_filter_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#database_filter_cfg InterfaceVe#database_filter_cfg}
  */
  readonly databaseFilterCfg?: InterfaceVeIpOspfOspfGlobalDatabaseFilterCfg;
  /**
  * message_digest_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#message_digest_cfg InterfaceVe#message_digest_cfg}
  */
  readonly messageDigestCfg?: InterfaceVeIpOspfOspfGlobalMessageDigestCfg[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#network InterfaceVe#network}
  */
  readonly network?: InterfaceVeIpOspfOspfGlobalNetwork;
}

export function interfaceVeIpOspfOspfGlobalToTerraform(struct?: InterfaceVeIpOspfOspfGlobalOutputReference | InterfaceVeIpOspfOspfGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    cost: cdktf.numberToTerraform(struct!.cost),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    disable: cdktf.stringToTerraform(struct!.disable),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    mtu_ignore: cdktf.numberToTerraform(struct!.mtuIgnore),
    priority: cdktf.numberToTerraform(struct!.priority),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication_cfg: interfaceVeIpOspfOspfGlobalAuthenticationCfgToTerraform(struct!.authenticationCfg),
    bfd_cfg: interfaceVeIpOspfOspfGlobalBfdCfgToTerraform(struct!.bfdCfg),
    database_filter_cfg: interfaceVeIpOspfOspfGlobalDatabaseFilterCfgToTerraform(struct!.databaseFilterCfg),
    message_digest_cfg: cdktf.listMapper(interfaceVeIpOspfOspfGlobalMessageDigestCfgToTerraform, true)(struct!.messageDigestCfg),
    network: interfaceVeIpOspfOspfGlobalNetworkToTerraform(struct!.network),
  }
}


export function interfaceVeIpOspfOspfGlobalToHclTerraform(struct?: InterfaceVeIpOspfOspfGlobalOutputReference | InterfaceVeIpOspfOspfGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.stringToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_ignore: {
      value: cdktf.numberToHclTerraform(struct!.mtuIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_cfg: {
      value: interfaceVeIpOspfOspfGlobalAuthenticationCfgToHclTerraform(struct!.authenticationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpOspfOspfGlobalAuthenticationCfgList",
    },
    bfd_cfg: {
      value: interfaceVeIpOspfOspfGlobalBfdCfgToHclTerraform(struct!.bfdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpOspfOspfGlobalBfdCfgList",
    },
    database_filter_cfg: {
      value: interfaceVeIpOspfOspfGlobalDatabaseFilterCfgToHclTerraform(struct!.databaseFilterCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpOspfOspfGlobalDatabaseFilterCfgList",
    },
    message_digest_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpOspfOspfGlobalMessageDigestCfgToHclTerraform, true)(struct!.messageDigestCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpOspfOspfGlobalMessageDigestCfgList",
    },
    network: {
      value: interfaceVeIpOspfOspfGlobalNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpOspfOspfGlobalNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpOspfOspfGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpOspfOspfGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authenticationCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationCfg = this._authenticationCfg?.internalValue;
    }
    if (this._bfdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdCfg = this._bfdCfg?.internalValue;
    }
    if (this._databaseFilterCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFilterCfg = this._databaseFilterCfg?.internalValue;
    }
    if (this._messageDigestCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestCfg = this._messageDigestCfg?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpOspfOspfGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationKey = undefined;
      this._cost = undefined;
      this._deadInterval = undefined;
      this._disable = undefined;
      this._helloInterval = undefined;
      this._mtu = undefined;
      this._mtuIgnore = undefined;
      this._priority = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
      this._uuid = undefined;
      this._authenticationCfg.internalValue = undefined;
      this._bfdCfg.internalValue = undefined;
      this._databaseFilterCfg.internalValue = undefined;
      this._messageDigestCfg.internalValue = undefined;
      this._network.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationKey = value.authenticationKey;
      this._cost = value.cost;
      this._deadInterval = value.deadInterval;
      this._disable = value.disable;
      this._helloInterval = value.helloInterval;
      this._mtu = value.mtu;
      this._mtuIgnore = value.mtuIgnore;
      this._priority = value.priority;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
      this._uuid = value.uuid;
      this._authenticationCfg.internalValue = value.authenticationCfg;
      this._bfdCfg.internalValue = value.bfdCfg;
      this._databaseFilterCfg.internalValue = value.databaseFilterCfg;
      this._messageDigestCfg.internalValue = value.messageDigestCfg;
      this._network.internalValue = value.network;
    }
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: string; 
  public get disable() {
    return this.getStringAttribute('disable');
  }
  public set disable(value: string) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: number; 
  public get mtuIgnore() {
    return this.getNumberAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: number) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
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

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
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

  // authentication_cfg - computed: false, optional: true, required: false
  private _authenticationCfg = new InterfaceVeIpOspfOspfGlobalAuthenticationCfgOutputReference(this, "authentication_cfg");
  public get authenticationCfg() {
    return this._authenticationCfg;
  }
  public putAuthenticationCfg(value: InterfaceVeIpOspfOspfGlobalAuthenticationCfg) {
    this._authenticationCfg.internalValue = value;
  }
  public resetAuthenticationCfg() {
    this._authenticationCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationCfgInput() {
    return this._authenticationCfg.internalValue;
  }

  // bfd_cfg - computed: false, optional: true, required: false
  private _bfdCfg = new InterfaceVeIpOspfOspfGlobalBfdCfgOutputReference(this, "bfd_cfg");
  public get bfdCfg() {
    return this._bfdCfg;
  }
  public putBfdCfg(value: InterfaceVeIpOspfOspfGlobalBfdCfg) {
    this._bfdCfg.internalValue = value;
  }
  public resetBfdCfg() {
    this._bfdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdCfgInput() {
    return this._bfdCfg.internalValue;
  }

  // database_filter_cfg - computed: false, optional: true, required: false
  private _databaseFilterCfg = new InterfaceVeIpOspfOspfGlobalDatabaseFilterCfgOutputReference(this, "database_filter_cfg");
  public get databaseFilterCfg() {
    return this._databaseFilterCfg;
  }
  public putDatabaseFilterCfg(value: InterfaceVeIpOspfOspfGlobalDatabaseFilterCfg) {
    this._databaseFilterCfg.internalValue = value;
  }
  public resetDatabaseFilterCfg() {
    this._databaseFilterCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFilterCfgInput() {
    return this._databaseFilterCfg.internalValue;
  }

  // message_digest_cfg - computed: false, optional: true, required: false
  private _messageDigestCfg = new InterfaceVeIpOspfOspfGlobalMessageDigestCfgList(this, "message_digest_cfg", false);
  public get messageDigestCfg() {
    return this._messageDigestCfg;
  }
  public putMessageDigestCfg(value: InterfaceVeIpOspfOspfGlobalMessageDigestCfg[] | cdktf.IResolvable) {
    this._messageDigestCfg.internalValue = value;
  }
  public resetMessageDigestCfg() {
    this._messageDigestCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestCfgInput() {
    return this._messageDigestCfg.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new InterfaceVeIpOspfOspfGlobalNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: InterfaceVeIpOspfOspfGlobalNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}
export interface InterfaceVeIpOspfOspfIpListMessageDigestCfg {
  /**
  * The OSPF password (1-16)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#md5_value InterfaceVe#md5_value}
  */
  readonly md5Value?: string;
  /**
  * Message digest authentication password (key) (Key id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#message_digest_key InterfaceVe#message_digest_key}
  */
  readonly messageDigestKey?: number;
}

export function interfaceVeIpOspfOspfIpListMessageDigestCfgToTerraform(struct?: InterfaceVeIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5_value: cdktf.stringToTerraform(struct!.md5Value),
    message_digest_key: cdktf.numberToTerraform(struct!.messageDigestKey),
  }
}


export function interfaceVeIpOspfOspfIpListMessageDigestCfgToHclTerraform(struct?: InterfaceVeIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5_value: {
      value: cdktf.stringToHclTerraform(struct!.md5Value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_digest_key: {
      value: cdktf.numberToHclTerraform(struct!.messageDigestKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpOspfOspfIpListMessageDigestCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Value = this._md5Value;
    }
    if (this._messageDigestKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestKey = this._messageDigestKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._md5Value = undefined;
      this._messageDigestKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._md5Value = value.md5Value;
      this._messageDigestKey = value.messageDigestKey;
    }
  }

  // md5_value - computed: false, optional: true, required: false
  private _md5Value?: string; 
  public get md5Value() {
    return this.getStringAttribute('md5_value');
  }
  public set md5Value(value: string) {
    this._md5Value = value;
  }
  public resetMd5Value() {
    this._md5Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5ValueInput() {
    return this._md5Value;
  }

  // message_digest_key - computed: false, optional: true, required: false
  private _messageDigestKey?: number; 
  public get messageDigestKey() {
    return this.getNumberAttribute('message_digest_key');
  }
  public set messageDigestKey(value: number) {
    this._messageDigestKey = value;
  }
  public resetMessageDigestKey() {
    this._messageDigestKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestKeyInput() {
    return this._messageDigestKey;
  }
}

export class InterfaceVeIpOspfOspfIpListMessageDigestCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpOspfOspfIpListMessageDigestCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpOspfOspfIpListMessageDigestCfgOutputReference {
    return new InterfaceVeIpOspfOspfIpListMessageDigestCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpOspfOspfIpListStruct {
  /**
  * Enable authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#authentication InterfaceVe#authentication}
  */
  readonly authentication?: number;
  /**
  * Authentication password (key) (The OSPF password (key))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#authentication_key InterfaceVe#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Interface cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#cost InterfaceVe#cost}
  */
  readonly cost?: number;
  /**
  * 'all': Filter all LSA;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#database_filter InterfaceVe#database_filter}
  */
  readonly databaseFilter?: string;
  /**
  * Interval after which a neighbor is declared dead (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#dead_interval InterfaceVe#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Time between HELLO packets (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#hello_interval InterfaceVe#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Address of interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ip_addr InterfaceVe#ip_addr}
  */
  readonly ipAddr: string;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#mtu_ignore InterfaceVe#mtu_ignore}
  */
  readonly mtuIgnore?: number;
  /**
  * Outgoing LSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#out InterfaceVe#out}
  */
  readonly out?: number;
  /**
  * Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#priority InterfaceVe#priority}
  */
  readonly priority?: number;
  /**
  * Time between retransmitting lost link state advertisements (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#retransmit_interval InterfaceVe#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Link state transmit delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#transmit_delay InterfaceVe#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
  /**
  * 'message-digest': Use message-digest authentication; 'null': Use no authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#value InterfaceVe#value}
  */
  readonly value?: string;
  /**
  * message_digest_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#message_digest_cfg InterfaceVe#message_digest_cfg}
  */
  readonly messageDigestCfg?: InterfaceVeIpOspfOspfIpListMessageDigestCfg[] | cdktf.IResolvable;
}

export function interfaceVeIpOspfOspfIpListStructToTerraform(struct?: InterfaceVeIpOspfOspfIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.numberToTerraform(struct!.authentication),
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    cost: cdktf.numberToTerraform(struct!.cost),
    database_filter: cdktf.stringToTerraform(struct!.databaseFilter),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    mtu_ignore: cdktf.numberToTerraform(struct!.mtuIgnore),
    out: cdktf.numberToTerraform(struct!.out),
    priority: cdktf.numberToTerraform(struct!.priority),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.stringToTerraform(struct!.value),
    message_digest_cfg: cdktf.listMapper(interfaceVeIpOspfOspfIpListMessageDigestCfgToTerraform, true)(struct!.messageDigestCfg),
  }
}


export function interfaceVeIpOspfOspfIpListStructToHclTerraform(struct?: InterfaceVeIpOspfOspfIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.numberToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    database_filter: {
      value: cdktf.stringToHclTerraform(struct!.databaseFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu_ignore: {
      value: cdktf.numberToHclTerraform(struct!.mtuIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out: {
      value: cdktf.numberToHclTerraform(struct!.out),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_digest_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpOspfOspfIpListMessageDigestCfgToHclTerraform, true)(struct!.messageDigestCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpOspfOspfIpListMessageDigestCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpOspfOspfIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpOspfOspfIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._databaseFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFilter = this._databaseFilter;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    if (this._out !== undefined) {
      hasAnyValues = true;
      internalValueResult.out = this._out;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._messageDigestCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestCfg = this._messageDigestCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpOspfOspfIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._authenticationKey = undefined;
      this._cost = undefined;
      this._databaseFilter = undefined;
      this._deadInterval = undefined;
      this._helloInterval = undefined;
      this._ipAddr = undefined;
      this._mtuIgnore = undefined;
      this._out = undefined;
      this._priority = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
      this._uuid = undefined;
      this._value = undefined;
      this._messageDigestCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._authenticationKey = value.authenticationKey;
      this._cost = value.cost;
      this._databaseFilter = value.databaseFilter;
      this._deadInterval = value.deadInterval;
      this._helloInterval = value.helloInterval;
      this._ipAddr = value.ipAddr;
      this._mtuIgnore = value.mtuIgnore;
      this._out = value.out;
      this._priority = value.priority;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
      this._uuid = value.uuid;
      this._value = value.value;
      this._messageDigestCfg.internalValue = value.messageDigestCfg;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: number; 
  public get authentication() {
    return this.getNumberAttribute('authentication');
  }
  public set authentication(value: number) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // database_filter - computed: false, optional: true, required: false
  private _databaseFilter?: string; 
  public get databaseFilter() {
    return this.getStringAttribute('database_filter');
  }
  public set databaseFilter(value: string) {
    this._databaseFilter = value;
  }
  public resetDatabaseFilter() {
    this._databaseFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFilterInput() {
    return this._databaseFilter;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
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

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: number; 
  public get mtuIgnore() {
    return this.getNumberAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: number) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
  }

  // out - computed: false, optional: true, required: false
  private _out?: number; 
  public get out() {
    return this.getNumberAttribute('out');
  }
  public set out(value: number) {
    this._out = value;
  }
  public resetOut() {
    this._out = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outInput() {
    return this._out;
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

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // message_digest_cfg - computed: false, optional: true, required: false
  private _messageDigestCfg = new InterfaceVeIpOspfOspfIpListMessageDigestCfgList(this, "message_digest_cfg", false);
  public get messageDigestCfg() {
    return this._messageDigestCfg;
  }
  public putMessageDigestCfg(value: InterfaceVeIpOspfOspfIpListMessageDigestCfg[] | cdktf.IResolvable) {
    this._messageDigestCfg.internalValue = value;
  }
  public resetMessageDigestCfg() {
    this._messageDigestCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestCfgInput() {
    return this._messageDigestCfg.internalValue;
  }
}

export class InterfaceVeIpOspfOspfIpListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpOspfOspfIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpOspfOspfIpListStructOutputReference {
    return new InterfaceVeIpOspfOspfIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpOspf {
  /**
  * ospf_global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ospf_global InterfaceVe#ospf_global}
  */
  readonly ospfGlobal?: InterfaceVeIpOspfOspfGlobal;
  /**
  * ospf_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ospf_ip_list InterfaceVe#ospf_ip_list}
  */
  readonly ospfIpList?: InterfaceVeIpOspfOspfIpListStruct[] | cdktf.IResolvable;
}

export function interfaceVeIpOspfToTerraform(struct?: InterfaceVeIpOspfOutputReference | InterfaceVeIpOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ospf_global: interfaceVeIpOspfOspfGlobalToTerraform(struct!.ospfGlobal),
    ospf_ip_list: cdktf.listMapper(interfaceVeIpOspfOspfIpListStructToTerraform, true)(struct!.ospfIpList),
  }
}


export function interfaceVeIpOspfToHclTerraform(struct?: InterfaceVeIpOspfOutputReference | InterfaceVeIpOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ospf_global: {
      value: interfaceVeIpOspfOspfGlobalToHclTerraform(struct!.ospfGlobal),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpOspfOspfGlobalList",
    },
    ospf_ip_list: {
      value: cdktf.listMapperHcl(interfaceVeIpOspfOspfIpListStructToHclTerraform, true)(struct!.ospfIpList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpOspfOspfIpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ospfGlobal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfGlobal = this._ospfGlobal?.internalValue;
    }
    if (this._ospfIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfIpList = this._ospfIpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ospfGlobal.internalValue = undefined;
      this._ospfIpList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ospfGlobal.internalValue = value.ospfGlobal;
      this._ospfIpList.internalValue = value.ospfIpList;
    }
  }

  // ospf_global - computed: false, optional: true, required: false
  private _ospfGlobal = new InterfaceVeIpOspfOspfGlobalOutputReference(this, "ospf_global");
  public get ospfGlobal() {
    return this._ospfGlobal;
  }
  public putOspfGlobal(value: InterfaceVeIpOspfOspfGlobal) {
    this._ospfGlobal.internalValue = value;
  }
  public resetOspfGlobal() {
    this._ospfGlobal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfGlobalInput() {
    return this._ospfGlobal.internalValue;
  }

  // ospf_ip_list - computed: false, optional: true, required: false
  private _ospfIpList = new InterfaceVeIpOspfOspfIpListStructList(this, "ospf_ip_list", false);
  public get ospfIpList() {
    return this._ospfIpList;
  }
  public putOspfIpList(value: InterfaceVeIpOspfOspfIpListStruct[] | cdktf.IResolvable) {
    this._ospfIpList.internalValue = value;
  }
  public resetOspfIpList() {
    this._ospfIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfIpListInput() {
    return this._ospfIpList.internalValue;
  }
}
export interface InterfaceVeIpRipAuthenticationKeyChain {
  /**
  * Authentication key-chain (Name of key-chain)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#key_chain InterfaceVe#key_chain}
  */
  readonly keyChain?: string;
}

export function interfaceVeIpRipAuthenticationKeyChainToTerraform(struct?: InterfaceVeIpRipAuthenticationKeyChainOutputReference | InterfaceVeIpRipAuthenticationKeyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: cdktf.stringToTerraform(struct!.keyChain),
  }
}


export function interfaceVeIpRipAuthenticationKeyChainToHclTerraform(struct?: InterfaceVeIpRipAuthenticationKeyChainOutputReference | InterfaceVeIpRipAuthenticationKeyChain): any {
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

export class InterfaceVeIpRipAuthenticationKeyChainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpRipAuthenticationKeyChain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChain = this._keyChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpRipAuthenticationKeyChain | undefined) {
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
export interface InterfaceVeIpRipAuthenticationMode {
  /**
  * 'md5': Keyed message digest; 'text': Clear text authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#mode InterfaceVe#mode}
  */
  readonly mode?: string;
}

export function interfaceVeIpRipAuthenticationModeToTerraform(struct?: InterfaceVeIpRipAuthenticationModeOutputReference | InterfaceVeIpRipAuthenticationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function interfaceVeIpRipAuthenticationModeToHclTerraform(struct?: InterfaceVeIpRipAuthenticationModeOutputReference | InterfaceVeIpRipAuthenticationMode): any {
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

export class InterfaceVeIpRipAuthenticationModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpRipAuthenticationMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpRipAuthenticationMode | undefined) {
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
export interface InterfaceVeIpRipAuthenticationStr {
  /**
  * The RIP authentication string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#string InterfaceVe#string}
  */
  readonly string?: string;
}

export function interfaceVeIpRipAuthenticationStrToTerraform(struct?: InterfaceVeIpRipAuthenticationStrOutputReference | InterfaceVeIpRipAuthenticationStr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function interfaceVeIpRipAuthenticationStrToHclTerraform(struct?: InterfaceVeIpRipAuthenticationStrOutputReference | InterfaceVeIpRipAuthenticationStr): any {
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

export class InterfaceVeIpRipAuthenticationStrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpRipAuthenticationStr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpRipAuthenticationStr | undefined) {
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
export interface InterfaceVeIpRipAuthentication {
  /**
  * key_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#key_chain InterfaceVe#key_chain}
  */
  readonly keyChain?: InterfaceVeIpRipAuthenticationKeyChain;
  /**
  * mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#mode InterfaceVe#mode}
  */
  readonly mode?: InterfaceVeIpRipAuthenticationMode;
  /**
  * str block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#str InterfaceVe#str}
  */
  readonly str?: InterfaceVeIpRipAuthenticationStr;
}

export function interfaceVeIpRipAuthenticationToTerraform(struct?: InterfaceVeIpRipAuthenticationOutputReference | InterfaceVeIpRipAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: interfaceVeIpRipAuthenticationKeyChainToTerraform(struct!.keyChain),
    mode: interfaceVeIpRipAuthenticationModeToTerraform(struct!.mode),
    str: interfaceVeIpRipAuthenticationStrToTerraform(struct!.str),
  }
}


export function interfaceVeIpRipAuthenticationToHclTerraform(struct?: InterfaceVeIpRipAuthenticationOutputReference | InterfaceVeIpRipAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain: {
      value: interfaceVeIpRipAuthenticationKeyChainToHclTerraform(struct!.keyChain),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpRipAuthenticationKeyChainList",
    },
    mode: {
      value: interfaceVeIpRipAuthenticationModeToHclTerraform(struct!.mode),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpRipAuthenticationModeList",
    },
    str: {
      value: interfaceVeIpRipAuthenticationStrToHclTerraform(struct!.str),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpRipAuthenticationStrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpRipAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpRipAuthentication | undefined {
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

  public set internalValue(value: InterfaceVeIpRipAuthentication | undefined) {
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
  private _keyChain = new InterfaceVeIpRipAuthenticationKeyChainOutputReference(this, "key_chain");
  public get keyChain() {
    return this._keyChain;
  }
  public putKeyChain(value: InterfaceVeIpRipAuthenticationKeyChain) {
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
  private _mode = new InterfaceVeIpRipAuthenticationModeOutputReference(this, "mode");
  public get mode() {
    return this._mode;
  }
  public putMode(value: InterfaceVeIpRipAuthenticationMode) {
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
  private _str = new InterfaceVeIpRipAuthenticationStrOutputReference(this, "str");
  public get str() {
    return this._str;
  }
  public putStr(value: InterfaceVeIpRipAuthenticationStr) {
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
export interface InterfaceVeIpRipReceiveCfg {
  /**
  * Advertisement reception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#receive InterfaceVe#receive}
  */
  readonly receive?: number;
  /**
  * '1': RIP version 1; '2': RIP version 2; '1-2': RIP version 1 & 2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#version InterfaceVe#version}
  */
  readonly version?: string;
}

export function interfaceVeIpRipReceiveCfgToTerraform(struct?: InterfaceVeIpRipReceiveCfgOutputReference | InterfaceVeIpRipReceiveCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive: cdktf.numberToTerraform(struct!.receive),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function interfaceVeIpRipReceiveCfgToHclTerraform(struct?: InterfaceVeIpRipReceiveCfgOutputReference | InterfaceVeIpRipReceiveCfg): any {
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

export class InterfaceVeIpRipReceiveCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpRipReceiveCfg | undefined {
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

  public set internalValue(value: InterfaceVeIpRipReceiveCfg | undefined) {
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
export interface InterfaceVeIpRipSendCfg {
  /**
  * Advertisement transmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#send InterfaceVe#send}
  */
  readonly send?: number;
  /**
  * '1': RIP version 1; '2': RIP version 2; '1-compatible': RIPv1-compatible; '1-2': RIP version 1 & 2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#version InterfaceVe#version}
  */
  readonly version?: string;
}

export function interfaceVeIpRipSendCfgToTerraform(struct?: InterfaceVeIpRipSendCfgOutputReference | InterfaceVeIpRipSendCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    send: cdktf.numberToTerraform(struct!.send),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function interfaceVeIpRipSendCfgToHclTerraform(struct?: InterfaceVeIpRipSendCfgOutputReference | InterfaceVeIpRipSendCfg): any {
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

export class InterfaceVeIpRipSendCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpRipSendCfg | undefined {
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

  public set internalValue(value: InterfaceVeIpRipSendCfg | undefined) {
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
export interface InterfaceVeIpRipSplitHorizonCfg {
  /**
  * 'poisoned': Perform split horizon with poisoned reverse; 'disable': Disable split horizon; 'enable': Perform split horizon without poisoned reverse;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#state InterfaceVe#state}
  */
  readonly state?: string;
}

export function interfaceVeIpRipSplitHorizonCfgToTerraform(struct?: InterfaceVeIpRipSplitHorizonCfgOutputReference | InterfaceVeIpRipSplitHorizonCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function interfaceVeIpRipSplitHorizonCfgToHclTerraform(struct?: InterfaceVeIpRipSplitHorizonCfgOutputReference | InterfaceVeIpRipSplitHorizonCfg): any {
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

export class InterfaceVeIpRipSplitHorizonCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpRipSplitHorizonCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpRipSplitHorizonCfg | undefined) {
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
export interface InterfaceVeIpRip {
  /**
  * Enable receiving packet through the specified interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#receive_packet InterfaceVe#receive_packet}
  */
  readonly receivePacket?: number;
  /**
  * Enable sending packets through the specified interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#send_packet InterfaceVe#send_packet}
  */
  readonly sendPacket?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#authentication InterfaceVe#authentication}
  */
  readonly authentication?: InterfaceVeIpRipAuthentication;
  /**
  * receive_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#receive_cfg InterfaceVe#receive_cfg}
  */
  readonly receiveCfg?: InterfaceVeIpRipReceiveCfg;
  /**
  * send_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#send_cfg InterfaceVe#send_cfg}
  */
  readonly sendCfg?: InterfaceVeIpRipSendCfg;
  /**
  * split_horizon_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#split_horizon_cfg InterfaceVe#split_horizon_cfg}
  */
  readonly splitHorizonCfg?: InterfaceVeIpRipSplitHorizonCfg;
}

export function interfaceVeIpRipToTerraform(struct?: InterfaceVeIpRipOutputReference | InterfaceVeIpRip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive_packet: cdktf.numberToTerraform(struct!.receivePacket),
    send_packet: cdktf.numberToTerraform(struct!.sendPacket),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication: interfaceVeIpRipAuthenticationToTerraform(struct!.authentication),
    receive_cfg: interfaceVeIpRipReceiveCfgToTerraform(struct!.receiveCfg),
    send_cfg: interfaceVeIpRipSendCfgToTerraform(struct!.sendCfg),
    split_horizon_cfg: interfaceVeIpRipSplitHorizonCfgToTerraform(struct!.splitHorizonCfg),
  }
}


export function interfaceVeIpRipToHclTerraform(struct?: InterfaceVeIpRipOutputReference | InterfaceVeIpRip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    receive_packet: {
      value: cdktf.numberToHclTerraform(struct!.receivePacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_packet: {
      value: cdktf.numberToHclTerraform(struct!.sendPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: interfaceVeIpRipAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpRipAuthenticationList",
    },
    receive_cfg: {
      value: interfaceVeIpRipReceiveCfgToHclTerraform(struct!.receiveCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpRipReceiveCfgList",
    },
    send_cfg: {
      value: interfaceVeIpRipSendCfgToHclTerraform(struct!.sendCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpRipSendCfgList",
    },
    split_horizon_cfg: {
      value: interfaceVeIpRipSplitHorizonCfgToHclTerraform(struct!.splitHorizonCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpRipSplitHorizonCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpRipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpRip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receivePacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivePacket = this._receivePacket;
    }
    if (this._sendPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendPacket = this._sendPacket;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._receiveCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveCfg = this._receiveCfg?.internalValue;
    }
    if (this._sendCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCfg = this._sendCfg?.internalValue;
    }
    if (this._splitHorizonCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitHorizonCfg = this._splitHorizonCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpRip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._receivePacket = undefined;
      this._sendPacket = undefined;
      this._uuid = undefined;
      this._authentication.internalValue = undefined;
      this._receiveCfg.internalValue = undefined;
      this._sendCfg.internalValue = undefined;
      this._splitHorizonCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._receivePacket = value.receivePacket;
      this._sendPacket = value.sendPacket;
      this._uuid = value.uuid;
      this._authentication.internalValue = value.authentication;
      this._receiveCfg.internalValue = value.receiveCfg;
      this._sendCfg.internalValue = value.sendCfg;
      this._splitHorizonCfg.internalValue = value.splitHorizonCfg;
    }
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
  private _authentication = new InterfaceVeIpRipAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceVeIpRipAuthentication) {
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
  private _receiveCfg = new InterfaceVeIpRipReceiveCfgOutputReference(this, "receive_cfg");
  public get receiveCfg() {
    return this._receiveCfg;
  }
  public putReceiveCfg(value: InterfaceVeIpRipReceiveCfg) {
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
  private _sendCfg = new InterfaceVeIpRipSendCfgOutputReference(this, "send_cfg");
  public get sendCfg() {
    return this._sendCfg;
  }
  public putSendCfg(value: InterfaceVeIpRipSendCfg) {
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
  private _splitHorizonCfg = new InterfaceVeIpRipSplitHorizonCfgOutputReference(this, "split_horizon_cfg");
  public get splitHorizonCfg() {
    return this._splitHorizonCfg;
  }
  public putSplitHorizonCfg(value: InterfaceVeIpRipSplitHorizonCfg) {
    this._splitHorizonCfg.internalValue = value;
  }
  public resetSplitHorizonCfg() {
    this._splitHorizonCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonCfgInput() {
    return this._splitHorizonCfg.internalValue;
  }
}
export interface InterfaceVeIpRouterIsis {
  /**
  * ISO routing area tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#tag InterfaceVe#tag}
  */
  readonly tag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
}

export function interfaceVeIpRouterIsisToTerraform(struct?: InterfaceVeIpRouterIsisOutputReference | InterfaceVeIpRouterIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceVeIpRouterIsisToHclTerraform(struct?: InterfaceVeIpRouterIsisOutputReference | InterfaceVeIpRouterIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpRouterIsisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpRouterIsis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpRouterIsis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tag = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tag = value.tag;
      this._uuid = value.uuid;
    }
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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
}
export interface InterfaceVeIpRouter {
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#isis InterfaceVe#isis}
  */
  readonly isis?: InterfaceVeIpRouterIsis;
}

export function interfaceVeIpRouterToTerraform(struct?: InterfaceVeIpRouterOutputReference | InterfaceVeIpRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isis: interfaceVeIpRouterIsisToTerraform(struct!.isis),
  }
}


export function interfaceVeIpRouterToHclTerraform(struct?: InterfaceVeIpRouterOutputReference | InterfaceVeIpRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isis: {
      value: interfaceVeIpRouterIsisToHclTerraform(struct!.isis),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpRouterIsisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isis = this._isis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isis.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isis.internalValue = value.isis;
    }
  }

  // isis - computed: false, optional: true, required: false
  private _isis = new InterfaceVeIpRouterIsisOutputReference(this, "isis");
  public get isis() {
    return this._isis;
  }
  public putIsis(value: InterfaceVeIpRouterIsis) {
    this._isis.internalValue = value;
  }
  public resetIsis() {
    this._isis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis.internalValue;
  }
}
export interface InterfaceVeIp {
  /**
  * Allow traffic to be associated with promiscuous VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#allow_promiscuous_vip InterfaceVe#allow_promiscuous_vip}
  */
  readonly allowPromiscuousVip?: number;
  /**
  * Client facing interface for IPv4/v6 traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#client InterfaceVe#client}
  */
  readonly client?: number;
  /**
  * Use DHCP to configure IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#dhcp InterfaceVe#dhcp}
  */
  readonly dhcp?: number;
  /**
  * DMZ network facing interface for IPv4/v6 traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#dmz InterfaceVe#dmz}
  */
  readonly dmz?: number;
  /**
  * Enable Membership Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#generate_membership_query InterfaceVe#generate_membership_query}
  */
  readonly generateMembershipQuery?: number;
  /**
  * Configure interface as inside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#inside InterfaceVe#inside}
  */
  readonly inside?: number;
  /**
  * Maximum Response Time (Max Response Time (Default is 100))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#max_resp_time InterfaceVe#max_resp_time}
  */
  readonly maxRespTime?: number;
  /**
  * Configure interface as outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#outside InterfaceVe#outside}
  */
  readonly outside?: number;
  /**
  * 1 - 255 (Default is 125)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#query_interval InterfaceVe#query_interval}
  */
  readonly queryInterval?: number;
  /**
  * Server facing interface for IPv4/v6 traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#server InterfaceVe#server}
  */
  readonly server?: number;
  /**
  * Redirect SLB traffic across partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#slb_partition_redirect InterfaceVe#slb_partition_redirect}
  */
  readonly slbPartitionRedirect?: number;
  /**
  * Enable SYN-cookie on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#syn_cookie InterfaceVe#syn_cookie}
  */
  readonly synCookie?: number;
  /**
  * Ignore TTL decrement for a received packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ttl_ignore InterfaceVe#ttl_ignore}
  */
  readonly ttlIgnore?: number;
  /**
  * Set the interface as unnumbered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#unnumbered InterfaceVe#unnumbered}
  */
  readonly unnumbered?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
  /**
  * address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#address_list InterfaceVe#address_list}
  */
  readonly addressList?: InterfaceVeIpAddressListStruct[] | cdktf.IResolvable;
  /**
  * helper_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#helper_address_list InterfaceVe#helper_address_list}
  */
  readonly helperAddressList?: InterfaceVeIpHelperAddressListStruct[] | cdktf.IResolvable;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ospf InterfaceVe#ospf}
  */
  readonly ospf?: InterfaceVeIpOspf;
  /**
  * rip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#rip InterfaceVe#rip}
  */
  readonly rip?: InterfaceVeIpRip;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#router InterfaceVe#router}
  */
  readonly router?: InterfaceVeIpRouter;
}

export function interfaceVeIpToTerraform(struct?: InterfaceVeIpOutputReference | InterfaceVeIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_promiscuous_vip: cdktf.numberToTerraform(struct!.allowPromiscuousVip),
    client: cdktf.numberToTerraform(struct!.client),
    dhcp: cdktf.numberToTerraform(struct!.dhcp),
    dmz: cdktf.numberToTerraform(struct!.dmz),
    generate_membership_query: cdktf.numberToTerraform(struct!.generateMembershipQuery),
    inside: cdktf.numberToTerraform(struct!.inside),
    max_resp_time: cdktf.numberToTerraform(struct!.maxRespTime),
    outside: cdktf.numberToTerraform(struct!.outside),
    query_interval: cdktf.numberToTerraform(struct!.queryInterval),
    server: cdktf.numberToTerraform(struct!.server),
    slb_partition_redirect: cdktf.numberToTerraform(struct!.slbPartitionRedirect),
    syn_cookie: cdktf.numberToTerraform(struct!.synCookie),
    ttl_ignore: cdktf.numberToTerraform(struct!.ttlIgnore),
    unnumbered: cdktf.numberToTerraform(struct!.unnumbered),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    address_list: cdktf.listMapper(interfaceVeIpAddressListStructToTerraform, true)(struct!.addressList),
    helper_address_list: cdktf.listMapper(interfaceVeIpHelperAddressListStructToTerraform, true)(struct!.helperAddressList),
    ospf: interfaceVeIpOspfToTerraform(struct!.ospf),
    rip: interfaceVeIpRipToTerraform(struct!.rip),
    router: interfaceVeIpRouterToTerraform(struct!.router),
  }
}


export function interfaceVeIpToHclTerraform(struct?: InterfaceVeIpOutputReference | InterfaceVeIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_promiscuous_vip: {
      value: cdktf.numberToHclTerraform(struct!.allowPromiscuousVip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client: {
      value: cdktf.numberToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp: {
      value: cdktf.numberToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dmz: {
      value: cdktf.numberToHclTerraform(struct!.dmz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    generate_membership_query: {
      value: cdktf.numberToHclTerraform(struct!.generateMembershipQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_resp_time: {
      value: cdktf.numberToHclTerraform(struct!.maxRespTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_interval: {
      value: cdktf.numberToHclTerraform(struct!.queryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.numberToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_partition_redirect: {
      value: cdktf.numberToHclTerraform(struct!.slbPartitionRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie: {
      value: cdktf.numberToHclTerraform(struct!.synCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_ignore: {
      value: cdktf.numberToHclTerraform(struct!.ttlIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unnumbered: {
      value: cdktf.numberToHclTerraform(struct!.unnumbered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_list: {
      value: cdktf.listMapperHcl(interfaceVeIpAddressListStructToHclTerraform, true)(struct!.addressList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpAddressListStructList",
    },
    helper_address_list: {
      value: cdktf.listMapperHcl(interfaceVeIpHelperAddressListStructToHclTerraform, true)(struct!.helperAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpHelperAddressListStructList",
    },
    ospf: {
      value: interfaceVeIpOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpOspfList",
    },
    rip: {
      value: interfaceVeIpRipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpRipList",
    },
    router: {
      value: interfaceVeIpRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpRouterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPromiscuousVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPromiscuousVip = this._allowPromiscuousVip;
    }
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._dmz !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmz = this._dmz;
    }
    if (this._generateMembershipQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateMembershipQuery = this._generateMembershipQuery;
    }
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._maxRespTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRespTime = this._maxRespTime;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._queryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryInterval = this._queryInterval;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._slbPartitionRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbPartitionRedirect = this._slbPartitionRedirect;
    }
    if (this._synCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookie = this._synCookie;
    }
    if (this._ttlIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlIgnore = this._ttlIgnore;
    }
    if (this._unnumbered !== undefined) {
      hasAnyValues = true;
      internalValueResult.unnumbered = this._unnumbered;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._addressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressList = this._addressList?.internalValue;
    }
    if (this._helperAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helperAddressList = this._helperAddressList?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._rip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip?.internalValue;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowPromiscuousVip = undefined;
      this._client = undefined;
      this._dhcp = undefined;
      this._dmz = undefined;
      this._generateMembershipQuery = undefined;
      this._inside = undefined;
      this._maxRespTime = undefined;
      this._outside = undefined;
      this._queryInterval = undefined;
      this._server = undefined;
      this._slbPartitionRedirect = undefined;
      this._synCookie = undefined;
      this._ttlIgnore = undefined;
      this._unnumbered = undefined;
      this._uuid = undefined;
      this._addressList.internalValue = undefined;
      this._helperAddressList.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._rip.internalValue = undefined;
      this._router.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowPromiscuousVip = value.allowPromiscuousVip;
      this._client = value.client;
      this._dhcp = value.dhcp;
      this._dmz = value.dmz;
      this._generateMembershipQuery = value.generateMembershipQuery;
      this._inside = value.inside;
      this._maxRespTime = value.maxRespTime;
      this._outside = value.outside;
      this._queryInterval = value.queryInterval;
      this._server = value.server;
      this._slbPartitionRedirect = value.slbPartitionRedirect;
      this._synCookie = value.synCookie;
      this._ttlIgnore = value.ttlIgnore;
      this._unnumbered = value.unnumbered;
      this._uuid = value.uuid;
      this._addressList.internalValue = value.addressList;
      this._helperAddressList.internalValue = value.helperAddressList;
      this._ospf.internalValue = value.ospf;
      this._rip.internalValue = value.rip;
      this._router.internalValue = value.router;
    }
  }

  // allow_promiscuous_vip - computed: false, optional: true, required: false
  private _allowPromiscuousVip?: number; 
  public get allowPromiscuousVip() {
    return this.getNumberAttribute('allow_promiscuous_vip');
  }
  public set allowPromiscuousVip(value: number) {
    this._allowPromiscuousVip = value;
  }
  public resetAllowPromiscuousVip() {
    this._allowPromiscuousVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPromiscuousVipInput() {
    return this._allowPromiscuousVip;
  }

  // client - computed: false, optional: true, required: false
  private _client?: number; 
  public get client() {
    return this.getNumberAttribute('client');
  }
  public set client(value: number) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: number; 
  public get dhcp() {
    return this.getNumberAttribute('dhcp');
  }
  public set dhcp(value: number) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // dmz - computed: false, optional: true, required: false
  private _dmz?: number; 
  public get dmz() {
    return this.getNumberAttribute('dmz');
  }
  public set dmz(value: number) {
    this._dmz = value;
  }
  public resetDmz() {
    this._dmz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmzInput() {
    return this._dmz;
  }

  // generate_membership_query - computed: false, optional: true, required: false
  private _generateMembershipQuery?: number; 
  public get generateMembershipQuery() {
    return this.getNumberAttribute('generate_membership_query');
  }
  public set generateMembershipQuery(value: number) {
    this._generateMembershipQuery = value;
  }
  public resetGenerateMembershipQuery() {
    this._generateMembershipQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateMembershipQueryInput() {
    return this._generateMembershipQuery;
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // max_resp_time - computed: false, optional: true, required: false
  private _maxRespTime?: number; 
  public get maxRespTime() {
    return this.getNumberAttribute('max_resp_time');
  }
  public set maxRespTime(value: number) {
    this._maxRespTime = value;
  }
  public resetMaxRespTime() {
    this._maxRespTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRespTimeInput() {
    return this._maxRespTime;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
  }

  // query_interval - computed: false, optional: true, required: false
  private _queryInterval?: number; 
  public get queryInterval() {
    return this.getNumberAttribute('query_interval');
  }
  public set queryInterval(value: number) {
    this._queryInterval = value;
  }
  public resetQueryInterval() {
    this._queryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalInput() {
    return this._queryInterval;
  }

  // server - computed: false, optional: true, required: false
  private _server?: number; 
  public get server() {
    return this.getNumberAttribute('server');
  }
  public set server(value: number) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // slb_partition_redirect - computed: false, optional: true, required: false
  private _slbPartitionRedirect?: number; 
  public get slbPartitionRedirect() {
    return this.getNumberAttribute('slb_partition_redirect');
  }
  public set slbPartitionRedirect(value: number) {
    this._slbPartitionRedirect = value;
  }
  public resetSlbPartitionRedirect() {
    this._slbPartitionRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbPartitionRedirectInput() {
    return this._slbPartitionRedirect;
  }

  // syn_cookie - computed: false, optional: true, required: false
  private _synCookie?: number; 
  public get synCookie() {
    return this.getNumberAttribute('syn_cookie');
  }
  public set synCookie(value: number) {
    this._synCookie = value;
  }
  public resetSynCookie() {
    this._synCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieInput() {
    return this._synCookie;
  }

  // ttl_ignore - computed: false, optional: true, required: false
  private _ttlIgnore?: number; 
  public get ttlIgnore() {
    return this.getNumberAttribute('ttl_ignore');
  }
  public set ttlIgnore(value: number) {
    this._ttlIgnore = value;
  }
  public resetTtlIgnore() {
    this._ttlIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlIgnoreInput() {
    return this._ttlIgnore;
  }

  // unnumbered - computed: false, optional: true, required: false
  private _unnumbered?: number; 
  public get unnumbered() {
    return this.getNumberAttribute('unnumbered');
  }
  public set unnumbered(value: number) {
    this._unnumbered = value;
  }
  public resetUnnumbered() {
    this._unnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedInput() {
    return this._unnumbered;
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

  // address_list - computed: false, optional: true, required: false
  private _addressList = new InterfaceVeIpAddressListStructList(this, "address_list", false);
  public get addressList() {
    return this._addressList;
  }
  public putAddressList(value: InterfaceVeIpAddressListStruct[] | cdktf.IResolvable) {
    this._addressList.internalValue = value;
  }
  public resetAddressList() {
    this._addressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList.internalValue;
  }

  // helper_address_list - computed: false, optional: true, required: false
  private _helperAddressList = new InterfaceVeIpHelperAddressListStructList(this, "helper_address_list", false);
  public get helperAddressList() {
    return this._helperAddressList;
  }
  public putHelperAddressList(value: InterfaceVeIpHelperAddressListStruct[] | cdktf.IResolvable) {
    this._helperAddressList.internalValue = value;
  }
  public resetHelperAddressList() {
    this._helperAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperAddressListInput() {
    return this._helperAddressList.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new InterfaceVeIpOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: InterfaceVeIpOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // rip - computed: false, optional: true, required: false
  private _rip = new InterfaceVeIpRipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: InterfaceVeIpRip) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }

  // router - computed: false, optional: true, required: false
  private _router = new InterfaceVeIpRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: InterfaceVeIpRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }
}
export interface InterfaceVeIpv6AddressListStruct {
  /**
  * 'anycast': Configure an IPv6 anycast address; 'link-local': Configure an IPv6 link local address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#address_type InterfaceVe#address_type}
  */
  readonly addressType?: string;
  /**
  * Set the IPv6 address of an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ipv6_addr InterfaceVe#ipv6_addr}
  */
  readonly ipv6Addr?: string;
}

export function interfaceVeIpv6AddressListStructToTerraform(struct?: InterfaceVeIpv6AddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_type: cdktf.stringToTerraform(struct!.addressType),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
  }
}


export function interfaceVeIpv6AddressListStructToHclTerraform(struct?: InterfaceVeIpv6AddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_type: {
      value: cdktf.stringToHclTerraform(struct!.addressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6AddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6AddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6AddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressType = undefined;
      this._ipv6Addr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressType = value.addressType;
      this._ipv6Addr = value.ipv6Addr;
    }
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }
}

export class InterfaceVeIpv6AddressListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6AddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6AddressListStructOutputReference {
    return new InterfaceVeIpv6AddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfCostCfg {
  /**
  * Interface cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#cost InterfaceVe#cost}
  */
  readonly cost?: number;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#instance_id InterfaceVe#instance_id}
  */
  readonly instanceId?: number;
}

export function interfaceVeIpv6OspfCostCfgToTerraform(struct?: InterfaceVeIpv6OspfCostCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost: cdktf.numberToTerraform(struct!.cost),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function interfaceVeIpv6OspfCostCfgToHclTerraform(struct?: InterfaceVeIpv6OspfCostCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfCostCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfCostCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfCostCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cost = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cost = value.cost;
      this._instanceId = value.instanceId;
    }
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class InterfaceVeIpv6OspfCostCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfCostCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfCostCfgOutputReference {
    return new InterfaceVeIpv6OspfCostCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfDeadIntervalCfg {
  /**
  * Interval after which a neighbor is declared dead (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#dead_interval InterfaceVe#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#instance_id InterfaceVe#instance_id}
  */
  readonly instanceId?: number;
}

export function interfaceVeIpv6OspfDeadIntervalCfgToTerraform(struct?: InterfaceVeIpv6OspfDeadIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function interfaceVeIpv6OspfDeadIntervalCfgToHclTerraform(struct?: InterfaceVeIpv6OspfDeadIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfDeadIntervalCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfDeadIntervalCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfDeadIntervalCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deadInterval = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deadInterval = value.deadInterval;
      this._instanceId = value.instanceId;
    }
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class InterfaceVeIpv6OspfDeadIntervalCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfDeadIntervalCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfDeadIntervalCfgOutputReference {
    return new InterfaceVeIpv6OspfDeadIntervalCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfHelloIntervalCfg {
  /**
  * Time between HELLO packets (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#hello_interval InterfaceVe#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#instance_id InterfaceVe#instance_id}
  */
  readonly instanceId?: number;
}

export function interfaceVeIpv6OspfHelloIntervalCfgToTerraform(struct?: InterfaceVeIpv6OspfHelloIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function interfaceVeIpv6OspfHelloIntervalCfgToHclTerraform(struct?: InterfaceVeIpv6OspfHelloIntervalCfg | cdktf.IResolvable): any {
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
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfHelloIntervalCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfHelloIntervalCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfHelloIntervalCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloInterval = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloInterval = value.helloInterval;
      this._instanceId = value.instanceId;
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class InterfaceVeIpv6OspfHelloIntervalCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfHelloIntervalCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfHelloIntervalCfgOutputReference {
    return new InterfaceVeIpv6OspfHelloIntervalCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfMtuIgnoreCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#instance_id InterfaceVe#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#mtu_ignore InterfaceVe#mtu_ignore}
  */
  readonly mtuIgnore?: number;
}

export function interfaceVeIpv6OspfMtuIgnoreCfgToTerraform(struct?: InterfaceVeIpv6OspfMtuIgnoreCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    mtu_ignore: cdktf.numberToTerraform(struct!.mtuIgnore),
  }
}


export function interfaceVeIpv6OspfMtuIgnoreCfgToHclTerraform(struct?: InterfaceVeIpv6OspfMtuIgnoreCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_ignore: {
      value: cdktf.numberToHclTerraform(struct!.mtuIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfMtuIgnoreCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfMtuIgnoreCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfMtuIgnoreCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._mtuIgnore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._mtuIgnore = value.mtuIgnore;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: number; 
  public get mtuIgnore() {
    return this.getNumberAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: number) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
  }
}

export class InterfaceVeIpv6OspfMtuIgnoreCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfMtuIgnoreCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfMtuIgnoreCfgOutputReference {
    return new InterfaceVeIpv6OspfMtuIgnoreCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfNeighborCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#neig_inst InterfaceVe#neig_inst}
  */
  readonly neigInst?: number;
  /**
  * OSPFv3 neighbor (Neighbor IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#neighbor InterfaceVe#neighbor}
  */
  readonly neighbor?: string;
  /**
  * OSPF cost for point-to-multipoint neighbor (metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#neighbor_cost InterfaceVe#neighbor_cost}
  */
  readonly neighborCost?: number;
  /**
  * OSPF dead-router polling interval (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#neighbor_poll_interval InterfaceVe#neighbor_poll_interval}
  */
  readonly neighborPollInterval?: number;
  /**
  * OSPF priority of non-broadcast neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#neighbor_priority InterfaceVe#neighbor_priority}
  */
  readonly neighborPriority?: number;
}

export function interfaceVeIpv6OspfNeighborCfgToTerraform(struct?: InterfaceVeIpv6OspfNeighborCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    neig_inst: cdktf.numberToTerraform(struct!.neigInst),
    neighbor: cdktf.stringToTerraform(struct!.neighbor),
    neighbor_cost: cdktf.numberToTerraform(struct!.neighborCost),
    neighbor_poll_interval: cdktf.numberToTerraform(struct!.neighborPollInterval),
    neighbor_priority: cdktf.numberToTerraform(struct!.neighborPriority),
  }
}


export function interfaceVeIpv6OspfNeighborCfgToHclTerraform(struct?: InterfaceVeIpv6OspfNeighborCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    neig_inst: {
      value: cdktf.numberToHclTerraform(struct!.neigInst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor: {
      value: cdktf.stringToHclTerraform(struct!.neighbor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_cost: {
      value: cdktf.numberToHclTerraform(struct!.neighborCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_poll_interval: {
      value: cdktf.numberToHclTerraform(struct!.neighborPollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_priority: {
      value: cdktf.numberToHclTerraform(struct!.neighborPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfNeighborCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfNeighborCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._neigInst !== undefined) {
      hasAnyValues = true;
      internalValueResult.neigInst = this._neigInst;
    }
    if (this._neighbor !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor;
    }
    if (this._neighborCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborCost = this._neighborCost;
    }
    if (this._neighborPollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPollInterval = this._neighborPollInterval;
    }
    if (this._neighborPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPriority = this._neighborPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfNeighborCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._neigInst = undefined;
      this._neighbor = undefined;
      this._neighborCost = undefined;
      this._neighborPollInterval = undefined;
      this._neighborPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._neigInst = value.neigInst;
      this._neighbor = value.neighbor;
      this._neighborCost = value.neighborCost;
      this._neighborPollInterval = value.neighborPollInterval;
      this._neighborPriority = value.neighborPriority;
    }
  }

  // neig_inst - computed: false, optional: true, required: false
  private _neigInst?: number; 
  public get neigInst() {
    return this.getNumberAttribute('neig_inst');
  }
  public set neigInst(value: number) {
    this._neigInst = value;
  }
  public resetNeigInst() {
    this._neigInst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neigInstInput() {
    return this._neigInst;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor?: string; 
  public get neighbor() {
    return this.getStringAttribute('neighbor');
  }
  public set neighbor(value: string) {
    this._neighbor = value;
  }
  public resetNeighbor() {
    this._neighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor;
  }

  // neighbor_cost - computed: false, optional: true, required: false
  private _neighborCost?: number; 
  public get neighborCost() {
    return this.getNumberAttribute('neighbor_cost');
  }
  public set neighborCost(value: number) {
    this._neighborCost = value;
  }
  public resetNeighborCost() {
    this._neighborCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborCostInput() {
    return this._neighborCost;
  }

  // neighbor_poll_interval - computed: false, optional: true, required: false
  private _neighborPollInterval?: number; 
  public get neighborPollInterval() {
    return this.getNumberAttribute('neighbor_poll_interval');
  }
  public set neighborPollInterval(value: number) {
    this._neighborPollInterval = value;
  }
  public resetNeighborPollInterval() {
    this._neighborPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborPollIntervalInput() {
    return this._neighborPollInterval;
  }

  // neighbor_priority - computed: false, optional: true, required: false
  private _neighborPriority?: number; 
  public get neighborPriority() {
    return this.getNumberAttribute('neighbor_priority');
  }
  public set neighborPriority(value: number) {
    this._neighborPriority = value;
  }
  public resetNeighborPriority() {
    this._neighborPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborPriorityInput() {
    return this._neighborPriority;
  }
}

export class InterfaceVeIpv6OspfNeighborCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfNeighborCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfNeighborCfgOutputReference {
    return new InterfaceVeIpv6OspfNeighborCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfNetworkListStruct {
  /**
  * 'broadcast': Specify OSPF broadcast multi-access network; 'non-broadcast': Specify OSPF NBMA network; 'point-to-point': Specify OSPF point-to-point network; 'point-to-multipoint': Specify OSPF point-to-multipoint network;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#broadcast_type InterfaceVe#broadcast_type}
  */
  readonly broadcastType?: string;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#network_instance_id InterfaceVe#network_instance_id}
  */
  readonly networkInstanceId?: number;
  /**
  * Specify non-broadcast point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#p2mp_nbma InterfaceVe#p2mp_nbma}
  */
  readonly p2MpNbma?: number;
}

export function interfaceVeIpv6OspfNetworkListStructToTerraform(struct?: InterfaceVeIpv6OspfNetworkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast_type: cdktf.stringToTerraform(struct!.broadcastType),
    network_instance_id: cdktf.numberToTerraform(struct!.networkInstanceId),
    p2mp_nbma: cdktf.numberToTerraform(struct!.p2MpNbma),
  }
}


export function interfaceVeIpv6OspfNetworkListStructToHclTerraform(struct?: InterfaceVeIpv6OspfNetworkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast_type: {
      value: cdktf.stringToHclTerraform(struct!.broadcastType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_instance_id: {
      value: cdktf.numberToHclTerraform(struct!.networkInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    p2mp_nbma: {
      value: cdktf.numberToHclTerraform(struct!.p2MpNbma),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfNetworkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfNetworkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcastType !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastType = this._broadcastType;
    }
    if (this._networkInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInstanceId = this._networkInstanceId;
    }
    if (this._p2MpNbma !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2MpNbma = this._p2MpNbma;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfNetworkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._broadcastType = undefined;
      this._networkInstanceId = undefined;
      this._p2MpNbma = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._broadcastType = value.broadcastType;
      this._networkInstanceId = value.networkInstanceId;
      this._p2MpNbma = value.p2MpNbma;
    }
  }

  // broadcast_type - computed: false, optional: true, required: false
  private _broadcastType?: string; 
  public get broadcastType() {
    return this.getStringAttribute('broadcast_type');
  }
  public set broadcastType(value: string) {
    this._broadcastType = value;
  }
  public resetBroadcastType() {
    this._broadcastType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastTypeInput() {
    return this._broadcastType;
  }

  // network_instance_id - computed: false, optional: true, required: false
  private _networkInstanceId?: number; 
  public get networkInstanceId() {
    return this.getNumberAttribute('network_instance_id');
  }
  public set networkInstanceId(value: number) {
    this._networkInstanceId = value;
  }
  public resetNetworkInstanceId() {
    this._networkInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInstanceIdInput() {
    return this._networkInstanceId;
  }

  // p2mp_nbma - computed: false, optional: true, required: false
  private _p2MpNbma?: number; 
  public get p2MpNbma() {
    return this.getNumberAttribute('p2mp_nbma');
  }
  public set p2MpNbma(value: number) {
    this._p2MpNbma = value;
  }
  public resetP2MpNbma() {
    this._p2MpNbma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2MpNbmaInput() {
    return this._p2MpNbma;
  }
}

export class InterfaceVeIpv6OspfNetworkListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfNetworkListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfNetworkListStructOutputReference {
    return new InterfaceVeIpv6OspfNetworkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfPriorityCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#instance_id InterfaceVe#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#priority InterfaceVe#priority}
  */
  readonly priority?: number;
}

export function interfaceVeIpv6OspfPriorityCfgToTerraform(struct?: InterfaceVeIpv6OspfPriorityCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function interfaceVeIpv6OspfPriorityCfgToHclTerraform(struct?: InterfaceVeIpv6OspfPriorityCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class InterfaceVeIpv6OspfPriorityCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfPriorityCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfPriorityCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._priority = value.priority;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

export class InterfaceVeIpv6OspfPriorityCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfPriorityCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfPriorityCfgOutputReference {
    return new InterfaceVeIpv6OspfPriorityCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfRetransmitIntervalCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#instance_id InterfaceVe#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Time between retransmitting lost link state advertisements (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#retransmit_interval InterfaceVe#retransmit_interval}
  */
  readonly retransmitInterval?: number;
}

export function interfaceVeIpv6OspfRetransmitIntervalCfgToTerraform(struct?: InterfaceVeIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
  }
}


export function interfaceVeIpv6OspfRetransmitIntervalCfgToHclTerraform(struct?: InterfaceVeIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfRetransmitIntervalCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._retransmitInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._retransmitInterval = value.retransmitInterval;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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
}

export class InterfaceVeIpv6OspfRetransmitIntervalCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfRetransmitIntervalCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfRetransmitIntervalCfgOutputReference {
    return new InterfaceVeIpv6OspfRetransmitIntervalCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfTransmitDelayCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#instance_id InterfaceVe#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Link state transmit delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#transmit_delay InterfaceVe#transmit_delay}
  */
  readonly transmitDelay?: number;
}

export function interfaceVeIpv6OspfTransmitDelayCfgToTerraform(struct?: InterfaceVeIpv6OspfTransmitDelayCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
  }
}


export function interfaceVeIpv6OspfTransmitDelayCfgToHclTerraform(struct?: InterfaceVeIpv6OspfTransmitDelayCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfTransmitDelayCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfTransmitDelayCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfTransmitDelayCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._transmitDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._transmitDelay = value.transmitDelay;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
  }
}

export class InterfaceVeIpv6OspfTransmitDelayCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfTransmitDelayCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfTransmitDelayCfgOutputReference {
    return new InterfaceVeIpv6OspfTransmitDelayCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6Ospf {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#bfd InterfaceVe#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#disable InterfaceVe#disable}
  */
  readonly disable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
  /**
  * cost_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#cost_cfg InterfaceVe#cost_cfg}
  */
  readonly costCfg?: InterfaceVeIpv6OspfCostCfg[] | cdktf.IResolvable;
  /**
  * dead_interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#dead_interval_cfg InterfaceVe#dead_interval_cfg}
  */
  readonly deadIntervalCfg?: InterfaceVeIpv6OspfDeadIntervalCfg[] | cdktf.IResolvable;
  /**
  * hello_interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#hello_interval_cfg InterfaceVe#hello_interval_cfg}
  */
  readonly helloIntervalCfg?: InterfaceVeIpv6OspfHelloIntervalCfg[] | cdktf.IResolvable;
  /**
  * mtu_ignore_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#mtu_ignore_cfg InterfaceVe#mtu_ignore_cfg}
  */
  readonly mtuIgnoreCfg?: InterfaceVeIpv6OspfMtuIgnoreCfg[] | cdktf.IResolvable;
  /**
  * neighbor_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#neighbor_cfg InterfaceVe#neighbor_cfg}
  */
  readonly neighborCfg?: InterfaceVeIpv6OspfNeighborCfg[] | cdktf.IResolvable;
  /**
  * network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#network_list InterfaceVe#network_list}
  */
  readonly networkList?: InterfaceVeIpv6OspfNetworkListStruct[] | cdktf.IResolvable;
  /**
  * priority_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#priority_cfg InterfaceVe#priority_cfg}
  */
  readonly priorityCfg?: InterfaceVeIpv6OspfPriorityCfg[] | cdktf.IResolvable;
  /**
  * retransmit_interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#retransmit_interval_cfg InterfaceVe#retransmit_interval_cfg}
  */
  readonly retransmitIntervalCfg?: InterfaceVeIpv6OspfRetransmitIntervalCfg[] | cdktf.IResolvable;
  /**
  * transmit_delay_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#transmit_delay_cfg InterfaceVe#transmit_delay_cfg}
  */
  readonly transmitDelayCfg?: InterfaceVeIpv6OspfTransmitDelayCfg[] | cdktf.IResolvable;
}

export function interfaceVeIpv6OspfToTerraform(struct?: InterfaceVeIpv6OspfOutputReference | InterfaceVeIpv6Ospf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    cost_cfg: cdktf.listMapper(interfaceVeIpv6OspfCostCfgToTerraform, true)(struct!.costCfg),
    dead_interval_cfg: cdktf.listMapper(interfaceVeIpv6OspfDeadIntervalCfgToTerraform, true)(struct!.deadIntervalCfg),
    hello_interval_cfg: cdktf.listMapper(interfaceVeIpv6OspfHelloIntervalCfgToTerraform, true)(struct!.helloIntervalCfg),
    mtu_ignore_cfg: cdktf.listMapper(interfaceVeIpv6OspfMtuIgnoreCfgToTerraform, true)(struct!.mtuIgnoreCfg),
    neighbor_cfg: cdktf.listMapper(interfaceVeIpv6OspfNeighborCfgToTerraform, true)(struct!.neighborCfg),
    network_list: cdktf.listMapper(interfaceVeIpv6OspfNetworkListStructToTerraform, true)(struct!.networkList),
    priority_cfg: cdktf.listMapper(interfaceVeIpv6OspfPriorityCfgToTerraform, true)(struct!.priorityCfg),
    retransmit_interval_cfg: cdktf.listMapper(interfaceVeIpv6OspfRetransmitIntervalCfgToTerraform, true)(struct!.retransmitIntervalCfg),
    transmit_delay_cfg: cdktf.listMapper(interfaceVeIpv6OspfTransmitDelayCfgToTerraform, true)(struct!.transmitDelayCfg),
  }
}


export function interfaceVeIpv6OspfToHclTerraform(struct?: InterfaceVeIpv6OspfOutputReference | InterfaceVeIpv6Ospf): any {
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfCostCfgToHclTerraform, true)(struct!.costCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfCostCfgList",
    },
    dead_interval_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfDeadIntervalCfgToHclTerraform, true)(struct!.deadIntervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfDeadIntervalCfgList",
    },
    hello_interval_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfHelloIntervalCfgToHclTerraform, true)(struct!.helloIntervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfHelloIntervalCfgList",
    },
    mtu_ignore_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfMtuIgnoreCfgToHclTerraform, true)(struct!.mtuIgnoreCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfMtuIgnoreCfgList",
    },
    neighbor_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfNeighborCfgToHclTerraform, true)(struct!.neighborCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfNeighborCfgList",
    },
    network_list: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfNetworkListStructToHclTerraform, true)(struct!.networkList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfNetworkListStructList",
    },
    priority_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfPriorityCfgToHclTerraform, true)(struct!.priorityCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfPriorityCfgList",
    },
    retransmit_interval_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfRetransmitIntervalCfgToHclTerraform, true)(struct!.retransmitIntervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfRetransmitIntervalCfgList",
    },
    transmit_delay_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfTransmitDelayCfgToHclTerraform, true)(struct!.transmitDelayCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfTransmitDelayCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6Ospf | undefined {
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
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._costCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCfg = this._costCfg?.internalValue;
    }
    if (this._deadIntervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadIntervalCfg = this._deadIntervalCfg?.internalValue;
    }
    if (this._helloIntervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalCfg = this._helloIntervalCfg?.internalValue;
    }
    if (this._mtuIgnoreCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnoreCfg = this._mtuIgnoreCfg?.internalValue;
    }
    if (this._neighborCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborCfg = this._neighborCfg?.internalValue;
    }
    if (this._networkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkList = this._networkList?.internalValue;
    }
    if (this._priorityCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCfg = this._priorityCfg?.internalValue;
    }
    if (this._retransmitIntervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitIntervalCfg = this._retransmitIntervalCfg?.internalValue;
    }
    if (this._transmitDelayCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelayCfg = this._transmitDelayCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6Ospf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bfd = undefined;
      this._disable = undefined;
      this._uuid = undefined;
      this._costCfg.internalValue = undefined;
      this._deadIntervalCfg.internalValue = undefined;
      this._helloIntervalCfg.internalValue = undefined;
      this._mtuIgnoreCfg.internalValue = undefined;
      this._neighborCfg.internalValue = undefined;
      this._networkList.internalValue = undefined;
      this._priorityCfg.internalValue = undefined;
      this._retransmitIntervalCfg.internalValue = undefined;
      this._transmitDelayCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bfd = value.bfd;
      this._disable = value.disable;
      this._uuid = value.uuid;
      this._costCfg.internalValue = value.costCfg;
      this._deadIntervalCfg.internalValue = value.deadIntervalCfg;
      this._helloIntervalCfg.internalValue = value.helloIntervalCfg;
      this._mtuIgnoreCfg.internalValue = value.mtuIgnoreCfg;
      this._neighborCfg.internalValue = value.neighborCfg;
      this._networkList.internalValue = value.networkList;
      this._priorityCfg.internalValue = value.priorityCfg;
      this._retransmitIntervalCfg.internalValue = value.retransmitIntervalCfg;
      this._transmitDelayCfg.internalValue = value.transmitDelayCfg;
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

  // cost_cfg - computed: false, optional: true, required: false
  private _costCfg = new InterfaceVeIpv6OspfCostCfgList(this, "cost_cfg", false);
  public get costCfg() {
    return this._costCfg;
  }
  public putCostCfg(value: InterfaceVeIpv6OspfCostCfg[] | cdktf.IResolvable) {
    this._costCfg.internalValue = value;
  }
  public resetCostCfg() {
    this._costCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCfgInput() {
    return this._costCfg.internalValue;
  }

  // dead_interval_cfg - computed: false, optional: true, required: false
  private _deadIntervalCfg = new InterfaceVeIpv6OspfDeadIntervalCfgList(this, "dead_interval_cfg", false);
  public get deadIntervalCfg() {
    return this._deadIntervalCfg;
  }
  public putDeadIntervalCfg(value: InterfaceVeIpv6OspfDeadIntervalCfg[] | cdktf.IResolvable) {
    this._deadIntervalCfg.internalValue = value;
  }
  public resetDeadIntervalCfg() {
    this._deadIntervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalCfgInput() {
    return this._deadIntervalCfg.internalValue;
  }

  // hello_interval_cfg - computed: false, optional: true, required: false
  private _helloIntervalCfg = new InterfaceVeIpv6OspfHelloIntervalCfgList(this, "hello_interval_cfg", false);
  public get helloIntervalCfg() {
    return this._helloIntervalCfg;
  }
  public putHelloIntervalCfg(value: InterfaceVeIpv6OspfHelloIntervalCfg[] | cdktf.IResolvable) {
    this._helloIntervalCfg.internalValue = value;
  }
  public resetHelloIntervalCfg() {
    this._helloIntervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalCfgInput() {
    return this._helloIntervalCfg.internalValue;
  }

  // mtu_ignore_cfg - computed: false, optional: true, required: false
  private _mtuIgnoreCfg = new InterfaceVeIpv6OspfMtuIgnoreCfgList(this, "mtu_ignore_cfg", false);
  public get mtuIgnoreCfg() {
    return this._mtuIgnoreCfg;
  }
  public putMtuIgnoreCfg(value: InterfaceVeIpv6OspfMtuIgnoreCfg[] | cdktf.IResolvable) {
    this._mtuIgnoreCfg.internalValue = value;
  }
  public resetMtuIgnoreCfg() {
    this._mtuIgnoreCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreCfgInput() {
    return this._mtuIgnoreCfg.internalValue;
  }

  // neighbor_cfg - computed: false, optional: true, required: false
  private _neighborCfg = new InterfaceVeIpv6OspfNeighborCfgList(this, "neighbor_cfg", false);
  public get neighborCfg() {
    return this._neighborCfg;
  }
  public putNeighborCfg(value: InterfaceVeIpv6OspfNeighborCfg[] | cdktf.IResolvable) {
    this._neighborCfg.internalValue = value;
  }
  public resetNeighborCfg() {
    this._neighborCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborCfgInput() {
    return this._neighborCfg.internalValue;
  }

  // network_list - computed: false, optional: true, required: false
  private _networkList = new InterfaceVeIpv6OspfNetworkListStructList(this, "network_list", false);
  public get networkList() {
    return this._networkList;
  }
  public putNetworkList(value: InterfaceVeIpv6OspfNetworkListStruct[] | cdktf.IResolvable) {
    this._networkList.internalValue = value;
  }
  public resetNetworkList() {
    this._networkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkListInput() {
    return this._networkList.internalValue;
  }

  // priority_cfg - computed: false, optional: true, required: false
  private _priorityCfg = new InterfaceVeIpv6OspfPriorityCfgList(this, "priority_cfg", false);
  public get priorityCfg() {
    return this._priorityCfg;
  }
  public putPriorityCfg(value: InterfaceVeIpv6OspfPriorityCfg[] | cdktf.IResolvable) {
    this._priorityCfg.internalValue = value;
  }
  public resetPriorityCfg() {
    this._priorityCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCfgInput() {
    return this._priorityCfg.internalValue;
  }

  // retransmit_interval_cfg - computed: false, optional: true, required: false
  private _retransmitIntervalCfg = new InterfaceVeIpv6OspfRetransmitIntervalCfgList(this, "retransmit_interval_cfg", false);
  public get retransmitIntervalCfg() {
    return this._retransmitIntervalCfg;
  }
  public putRetransmitIntervalCfg(value: InterfaceVeIpv6OspfRetransmitIntervalCfg[] | cdktf.IResolvable) {
    this._retransmitIntervalCfg.internalValue = value;
  }
  public resetRetransmitIntervalCfg() {
    this._retransmitIntervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalCfgInput() {
    return this._retransmitIntervalCfg.internalValue;
  }

  // transmit_delay_cfg - computed: false, optional: true, required: false
  private _transmitDelayCfg = new InterfaceVeIpv6OspfTransmitDelayCfgList(this, "transmit_delay_cfg", false);
  public get transmitDelayCfg() {
    return this._transmitDelayCfg;
  }
  public putTransmitDelayCfg(value: InterfaceVeIpv6OspfTransmitDelayCfg[] | cdktf.IResolvable) {
    this._transmitDelayCfg.internalValue = value;
  }
  public resetTransmitDelayCfg() {
    this._transmitDelayCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayCfgInput() {
    return this._transmitDelayCfg.internalValue;
  }
}
export interface InterfaceVeIpv6RipSplitHorizonCfg {
  /**
  * 'poisoned': Perform split horizon with poisoned reverse; 'disable': Disable split horizon; 'enable': Perform split horizon without poisoned reverse;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#state InterfaceVe#state}
  */
  readonly state?: string;
}

export function interfaceVeIpv6RipSplitHorizonCfgToTerraform(struct?: InterfaceVeIpv6RipSplitHorizonCfgOutputReference | InterfaceVeIpv6RipSplitHorizonCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function interfaceVeIpv6RipSplitHorizonCfgToHclTerraform(struct?: InterfaceVeIpv6RipSplitHorizonCfgOutputReference | InterfaceVeIpv6RipSplitHorizonCfg): any {
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

export class InterfaceVeIpv6RipSplitHorizonCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6RipSplitHorizonCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RipSplitHorizonCfg | undefined) {
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
export interface InterfaceVeIpv6Rip {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
  /**
  * split_horizon_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#split_horizon_cfg InterfaceVe#split_horizon_cfg}
  */
  readonly splitHorizonCfg?: InterfaceVeIpv6RipSplitHorizonCfg;
}

export function interfaceVeIpv6RipToTerraform(struct?: InterfaceVeIpv6RipOutputReference | InterfaceVeIpv6Rip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    split_horizon_cfg: interfaceVeIpv6RipSplitHorizonCfgToTerraform(struct!.splitHorizonCfg),
  }
}


export function interfaceVeIpv6RipToHclTerraform(struct?: InterfaceVeIpv6RipOutputReference | InterfaceVeIpv6Rip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_horizon_cfg: {
      value: interfaceVeIpv6RipSplitHorizonCfgToHclTerraform(struct!.splitHorizonCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6RipSplitHorizonCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6RipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6Rip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._splitHorizonCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitHorizonCfg = this._splitHorizonCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6Rip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._splitHorizonCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._splitHorizonCfg.internalValue = value.splitHorizonCfg;
    }
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

  // split_horizon_cfg - computed: false, optional: true, required: false
  private _splitHorizonCfg = new InterfaceVeIpv6RipSplitHorizonCfgOutputReference(this, "split_horizon_cfg");
  public get splitHorizonCfg() {
    return this._splitHorizonCfg;
  }
  public putSplitHorizonCfg(value: InterfaceVeIpv6RipSplitHorizonCfg) {
    this._splitHorizonCfg.internalValue = value;
  }
  public resetSplitHorizonCfg() {
    this._splitHorizonCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonCfgInput() {
    return this._splitHorizonCfg.internalValue;
  }
}
export interface InterfaceVeIpv6RouterIsis {
  /**
  * ISO routing area tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#tag InterfaceVe#tag}
  */
  readonly tag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
}

export function interfaceVeIpv6RouterIsisToTerraform(struct?: InterfaceVeIpv6RouterIsisOutputReference | InterfaceVeIpv6RouterIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceVeIpv6RouterIsisToHclTerraform(struct?: InterfaceVeIpv6RouterIsisOutputReference | InterfaceVeIpv6RouterIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6RouterIsisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6RouterIsis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RouterIsis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tag = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tag = value.tag;
      this._uuid = value.uuid;
    }
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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
}
export interface InterfaceVeIpv6RouterOspfAreaListStruct {
  /**
  * OSPF area ID in IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#area_id_addr InterfaceVe#area_id_addr}
  */
  readonly areaIdAddr?: string;
  /**
  * OSPF area ID as a decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#area_id_num InterfaceVe#area_id_num}
  */
  readonly areaIdNum?: number;
  /**
  * Set the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#instance_id InterfaceVe#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Set the OSPFv3 process tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#tag InterfaceVe#tag}
  */
  readonly tag?: string;
}

export function interfaceVeIpv6RouterOspfAreaListStructToTerraform(struct?: InterfaceVeIpv6RouterOspfAreaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_id_addr: cdktf.stringToTerraform(struct!.areaIdAddr),
    area_id_num: cdktf.numberToTerraform(struct!.areaIdNum),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function interfaceVeIpv6RouterOspfAreaListStructToHclTerraform(struct?: InterfaceVeIpv6RouterOspfAreaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_id_addr: {
      value: cdktf.stringToHclTerraform(struct!.areaIdAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_id_num: {
      value: cdktf.numberToHclTerraform(struct!.areaIdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6RouterOspfAreaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6RouterOspfAreaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaIdAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIdAddr = this._areaIdAddr;
    }
    if (this._areaIdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIdNum = this._areaIdNum;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RouterOspfAreaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaIdAddr = undefined;
      this._areaIdNum = undefined;
      this._instanceId = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaIdAddr = value.areaIdAddr;
      this._areaIdNum = value.areaIdNum;
      this._instanceId = value.instanceId;
      this._tag = value.tag;
    }
  }

  // area_id_addr - computed: false, optional: true, required: false
  private _areaIdAddr?: string; 
  public get areaIdAddr() {
    return this.getStringAttribute('area_id_addr');
  }
  public set areaIdAddr(value: string) {
    this._areaIdAddr = value;
  }
  public resetAreaIdAddr() {
    this._areaIdAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdAddrInput() {
    return this._areaIdAddr;
  }

  // area_id_num - computed: false, optional: true, required: false
  private _areaIdNum?: number; 
  public get areaIdNum() {
    return this.getNumberAttribute('area_id_num');
  }
  public set areaIdNum(value: number) {
    this._areaIdNum = value;
  }
  public resetAreaIdNum() {
    this._areaIdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdNumInput() {
    return this._areaIdNum;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class InterfaceVeIpv6RouterOspfAreaListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6RouterOspfAreaListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6RouterOspfAreaListStructOutputReference {
    return new InterfaceVeIpv6RouterOspfAreaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6RouterOspf {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
  /**
  * area_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#area_list InterfaceVe#area_list}
  */
  readonly areaList?: InterfaceVeIpv6RouterOspfAreaListStruct[] | cdktf.IResolvable;
}

export function interfaceVeIpv6RouterOspfToTerraform(struct?: InterfaceVeIpv6RouterOspfOutputReference | InterfaceVeIpv6RouterOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    area_list: cdktf.listMapper(interfaceVeIpv6RouterOspfAreaListStructToTerraform, true)(struct!.areaList),
  }
}


export function interfaceVeIpv6RouterOspfToHclTerraform(struct?: InterfaceVeIpv6RouterOspfOutputReference | InterfaceVeIpv6RouterOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_list: {
      value: cdktf.listMapperHcl(interfaceVeIpv6RouterOspfAreaListStructToHclTerraform, true)(struct!.areaList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6RouterOspfAreaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6RouterOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6RouterOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._areaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaList = this._areaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RouterOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._areaList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._areaList.internalValue = value.areaList;
    }
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

  // area_list - computed: false, optional: true, required: false
  private _areaList = new InterfaceVeIpv6RouterOspfAreaListStructList(this, "area_list", false);
  public get areaList() {
    return this._areaList;
  }
  public putAreaList(value: InterfaceVeIpv6RouterOspfAreaListStruct[] | cdktf.IResolvable) {
    this._areaList.internalValue = value;
  }
  public resetAreaList() {
    this._areaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaListInput() {
    return this._areaList.internalValue;
  }
}
export interface InterfaceVeIpv6RouterRipng {
  /**
  * RIP Routing for IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#rip InterfaceVe#rip}
  */
  readonly rip?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
}

export function interfaceVeIpv6RouterRipngToTerraform(struct?: InterfaceVeIpv6RouterRipngOutputReference | InterfaceVeIpv6RouterRipng): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rip: cdktf.numberToTerraform(struct!.rip),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceVeIpv6RouterRipngToHclTerraform(struct?: InterfaceVeIpv6RouterRipngOutputReference | InterfaceVeIpv6RouterRipng): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rip: {
      value: cdktf.numberToHclTerraform(struct!.rip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6RouterRipngOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6RouterRipng | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rip !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RouterRipng | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rip = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rip = value.rip;
      this._uuid = value.uuid;
    }
  }

  // rip - computed: false, optional: true, required: false
  private _rip?: number; 
  public get rip() {
    return this.getNumberAttribute('rip');
  }
  public set rip(value: number) {
    this._rip = value;
  }
  public resetRip() {
    this._rip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip;
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
}
export interface InterfaceVeIpv6Router {
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#isis InterfaceVe#isis}
  */
  readonly isis?: InterfaceVeIpv6RouterIsis;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ospf InterfaceVe#ospf}
  */
  readonly ospf?: InterfaceVeIpv6RouterOspf;
  /**
  * ripng block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ripng InterfaceVe#ripng}
  */
  readonly ripng?: InterfaceVeIpv6RouterRipng;
}

export function interfaceVeIpv6RouterToTerraform(struct?: InterfaceVeIpv6RouterOutputReference | InterfaceVeIpv6Router): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isis: interfaceVeIpv6RouterIsisToTerraform(struct!.isis),
    ospf: interfaceVeIpv6RouterOspfToTerraform(struct!.ospf),
    ripng: interfaceVeIpv6RouterRipngToTerraform(struct!.ripng),
  }
}


export function interfaceVeIpv6RouterToHclTerraform(struct?: InterfaceVeIpv6RouterOutputReference | InterfaceVeIpv6Router): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isis: {
      value: interfaceVeIpv6RouterIsisToHclTerraform(struct!.isis),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6RouterIsisList",
    },
    ospf: {
      value: interfaceVeIpv6RouterOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6RouterOspfList",
    },
    ripng: {
      value: interfaceVeIpv6RouterRipngToHclTerraform(struct!.ripng),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6RouterRipngList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6RouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6Router | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isis = this._isis?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._ripng?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ripng = this._ripng?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6Router | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isis.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._ripng.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isis.internalValue = value.isis;
      this._ospf.internalValue = value.ospf;
      this._ripng.internalValue = value.ripng;
    }
  }

  // isis - computed: false, optional: true, required: false
  private _isis = new InterfaceVeIpv6RouterIsisOutputReference(this, "isis");
  public get isis() {
    return this._isis;
  }
  public putIsis(value: InterfaceVeIpv6RouterIsis) {
    this._isis.internalValue = value;
  }
  public resetIsis() {
    this._isis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new InterfaceVeIpv6RouterOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: InterfaceVeIpv6RouterOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // ripng - computed: false, optional: true, required: false
  private _ripng = new InterfaceVeIpv6RouterRipngOutputReference(this, "ripng");
  public get ripng() {
    return this._ripng;
  }
  public putRipng(value: InterfaceVeIpv6RouterRipng) {
    this._ripng.internalValue = value;
  }
  public resetRipng() {
    this._ripng.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripngInput() {
    return this._ripng.internalValue;
  }
}
export interface InterfaceVeIpv6RouterAdverPrefixListStruct {
  /**
  * Specify that the Prefix is not usable for autoconfiguration (default:autonomous)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#not_autonomous InterfaceVe#not_autonomous}
  */
  readonly notAutonomous?: number;
  /**
  * Specify that the Prefix is not On-Link (default: on-link)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#not_on_link InterfaceVe#not_on_link}
  */
  readonly notOnLink?: number;
  /**
  * Specify Prefix Preferred Lifetime (default:604800) (Prefix Advertised Preferred Lifetime (default: 604800))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#preferred_lifetime InterfaceVe#preferred_lifetime}
  */
  readonly preferredLifetime?: number;
  /**
  * Set Router Advertisement On-Link Prefix (IPv6 On-Link Prefix)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#prefix InterfaceVe#prefix}
  */
  readonly prefix?: string;
  /**
  * Specify Valid Lifetime (default:2592000) (Prefix Advertised Valid Lifetime (default: 2592000))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#valid_lifetime InterfaceVe#valid_lifetime}
  */
  readonly validLifetime?: number;
}

export function interfaceVeIpv6RouterAdverPrefixListStructToTerraform(struct?: InterfaceVeIpv6RouterAdverPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_autonomous: cdktf.numberToTerraform(struct!.notAutonomous),
    not_on_link: cdktf.numberToTerraform(struct!.notOnLink),
    preferred_lifetime: cdktf.numberToTerraform(struct!.preferredLifetime),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    valid_lifetime: cdktf.numberToTerraform(struct!.validLifetime),
  }
}


export function interfaceVeIpv6RouterAdverPrefixListStructToHclTerraform(struct?: InterfaceVeIpv6RouterAdverPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_autonomous: {
      value: cdktf.numberToHclTerraform(struct!.notAutonomous),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_on_link: {
      value: cdktf.numberToHclTerraform(struct!.notOnLink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preferred_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.preferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.validLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6RouterAdverPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6RouterAdverPrefixListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notAutonomous !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAutonomous = this._notAutonomous;
    }
    if (this._notOnLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.notOnLink = this._notOnLink;
    }
    if (this._preferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifetime = this._preferredLifetime;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._validLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifetime = this._validLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RouterAdverPrefixListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notAutonomous = undefined;
      this._notOnLink = undefined;
      this._preferredLifetime = undefined;
      this._prefix = undefined;
      this._validLifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notAutonomous = value.notAutonomous;
      this._notOnLink = value.notOnLink;
      this._preferredLifetime = value.preferredLifetime;
      this._prefix = value.prefix;
      this._validLifetime = value.validLifetime;
    }
  }

  // not_autonomous - computed: false, optional: true, required: false
  private _notAutonomous?: number; 
  public get notAutonomous() {
    return this.getNumberAttribute('not_autonomous');
  }
  public set notAutonomous(value: number) {
    this._notAutonomous = value;
  }
  public resetNotAutonomous() {
    this._notAutonomous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAutonomousInput() {
    return this._notAutonomous;
  }

  // not_on_link - computed: false, optional: true, required: false
  private _notOnLink?: number; 
  public get notOnLink() {
    return this.getNumberAttribute('not_on_link');
  }
  public set notOnLink(value: number) {
    this._notOnLink = value;
  }
  public resetNotOnLink() {
    this._notOnLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notOnLinkInput() {
    return this._notOnLink;
  }

  // preferred_lifetime - computed: false, optional: true, required: false
  private _preferredLifetime?: number; 
  public get preferredLifetime() {
    return this.getNumberAttribute('preferred_lifetime');
  }
  public set preferredLifetime(value: number) {
    this._preferredLifetime = value;
  }
  public resetPreferredLifetime() {
    this._preferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifetimeInput() {
    return this._preferredLifetime;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // valid_lifetime - computed: false, optional: true, required: false
  private _validLifetime?: number; 
  public get validLifetime() {
    return this.getNumberAttribute('valid_lifetime');
  }
  public set validLifetime(value: number) {
    this._validLifetime = value;
  }
  public resetValidLifetime() {
    this._validLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifetimeInput() {
    return this._validLifetime;
  }
}

export class InterfaceVeIpv6RouterAdverPrefixListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6RouterAdverPrefixListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6RouterAdverPrefixListStructOutputReference {
    return new InterfaceVeIpv6RouterAdverPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6RouterAdver {
  /**
  * 'enable': Enable Router Advertisements on this interface; 'disable': Disable Router Advertisements on this interface;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#action InterfaceVe#action}
  */
  readonly action?: string;
  /**
  * Set Router Advertisement MTU Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#adver_mtu InterfaceVe#adver_mtu}
  */
  readonly adverMtu?: number;
  /**
  * Disable Router Advertisement MTU Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#adver_mtu_disable InterfaceVe#adver_mtu_disable}
  */
  readonly adverMtuDisable?: number;
  /**
  * Vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#adver_vrid InterfaceVe#adver_vrid}
  */
  readonly adverVrid?: number;
  /**
  * Default VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#adver_vrid_default InterfaceVe#adver_vrid_default}
  */
  readonly adverVridDefault?: number;
  /**
  * Set Router Advertisement Default Lifetime (default: 1800) (Default Lifetime (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#default_lifetime InterfaceVe#default_lifetime}
  */
  readonly defaultLifetime?: number;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#floating_ip InterfaceVe#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#floating_ip_default_vrid InterfaceVe#floating_ip_default_vrid}
  */
  readonly floatingIpDefaultVrid?: string;
  /**
  * Set Router Advertisement Hop Limit (default: 255)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#hop_limit InterfaceVe#hop_limit}
  */
  readonly hopLimit?: number;
  /**
  * 'enable': Enable the Managed Address Configuration flag; 'disable': Disable the Managed Address Configuration flag (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#managed_config_action InterfaceVe#managed_config_action}
  */
  readonly managedConfigAction?: string;
  /**
  * Set Router Advertisement Max Interval (default: 600) (Max Router Advertisement Interval (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#max_interval InterfaceVe#max_interval}
  */
  readonly maxInterval?: number;
  /**
  * Set Router Advertisement Min Interval (default: 200) (Min Router Advertisement Interval (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#min_interval InterfaceVe#min_interval}
  */
  readonly minInterval?: number;
  /**
  * 'enable': Enable the Other Stateful Configuration flag; 'disable': Disable the Other Stateful Configuration flag (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#other_config_action InterfaceVe#other_config_action}
  */
  readonly otherConfigAction?: string;
  /**
  * Rate Limit the processing of incoming Router Solicitations (Max Number of Router Solicitations to process per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#rate_limit InterfaceVe#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Set Router Advertisement Reachable ime (default: 0) (Reachable Time (milliseconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#reachable_time InterfaceVe#reachable_time}
  */
  readonly reachableTime?: number;
  /**
  * Set Router Advertisement Retransmit Timer (default: 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#retransmit_timer InterfaceVe#retransmit_timer}
  */
  readonly retransmitTimer?: number;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#use_floating_ip InterfaceVe#use_floating_ip}
  */
  readonly useFloatingIp?: number;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#use_floating_ip_default_vrid InterfaceVe#use_floating_ip_default_vrid}
  */
  readonly useFloatingIpDefaultVrid?: number;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#prefix_list InterfaceVe#prefix_list}
  */
  readonly prefixList?: InterfaceVeIpv6RouterAdverPrefixListStruct[] | cdktf.IResolvable;
}

export function interfaceVeIpv6RouterAdverToTerraform(struct?: InterfaceVeIpv6RouterAdverOutputReference | InterfaceVeIpv6RouterAdver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    adver_mtu: cdktf.numberToTerraform(struct!.adverMtu),
    adver_mtu_disable: cdktf.numberToTerraform(struct!.adverMtuDisable),
    adver_vrid: cdktf.numberToTerraform(struct!.adverVrid),
    adver_vrid_default: cdktf.numberToTerraform(struct!.adverVridDefault),
    default_lifetime: cdktf.numberToTerraform(struct!.defaultLifetime),
    floating_ip: cdktf.stringToTerraform(struct!.floatingIp),
    floating_ip_default_vrid: cdktf.stringToTerraform(struct!.floatingIpDefaultVrid),
    hop_limit: cdktf.numberToTerraform(struct!.hopLimit),
    managed_config_action: cdktf.stringToTerraform(struct!.managedConfigAction),
    max_interval: cdktf.numberToTerraform(struct!.maxInterval),
    min_interval: cdktf.numberToTerraform(struct!.minInterval),
    other_config_action: cdktf.stringToTerraform(struct!.otherConfigAction),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
    retransmit_timer: cdktf.numberToTerraform(struct!.retransmitTimer),
    use_floating_ip: cdktf.numberToTerraform(struct!.useFloatingIp),
    use_floating_ip_default_vrid: cdktf.numberToTerraform(struct!.useFloatingIpDefaultVrid),
    prefix_list: cdktf.listMapper(interfaceVeIpv6RouterAdverPrefixListStructToTerraform, true)(struct!.prefixList),
  }
}


export function interfaceVeIpv6RouterAdverToHclTerraform(struct?: InterfaceVeIpv6RouterAdverOutputReference | InterfaceVeIpv6RouterAdver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adver_mtu: {
      value: cdktf.numberToHclTerraform(struct!.adverMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adver_mtu_disable: {
      value: cdktf.numberToHclTerraform(struct!.adverMtuDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adver_vrid: {
      value: cdktf.numberToHclTerraform(struct!.adverVrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adver_vrid_default: {
      value: cdktf.numberToHclTerraform(struct!.adverVridDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.defaultLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    floating_ip: {
      value: cdktf.stringToHclTerraform(struct!.floatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floating_ip_default_vrid: {
      value: cdktf.stringToHclTerraform(struct!.floatingIpDefaultVrid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hop_limit: {
      value: cdktf.numberToHclTerraform(struct!.hopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    managed_config_action: {
      value: cdktf.stringToHclTerraform(struct!.managedConfigAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_interval: {
      value: cdktf.numberToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_interval: {
      value: cdktf.numberToHclTerraform(struct!.minInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_config_action: {
      value: cdktf.stringToHclTerraform(struct!.otherConfigAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reachable_time: {
      value: cdktf.numberToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_timer: {
      value: cdktf.numberToHclTerraform(struct!.retransmitTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_floating_ip: {
      value: cdktf.numberToHclTerraform(struct!.useFloatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_floating_ip_default_vrid: {
      value: cdktf.numberToHclTerraform(struct!.useFloatingIpDefaultVrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_list: {
      value: cdktf.listMapperHcl(interfaceVeIpv6RouterAdverPrefixListStructToHclTerraform, true)(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6RouterAdverPrefixListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6RouterAdverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6RouterAdver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._adverMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverMtu = this._adverMtu;
    }
    if (this._adverMtuDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverMtuDisable = this._adverMtuDisable;
    }
    if (this._adverVrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverVrid = this._adverVrid;
    }
    if (this._adverVridDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverVridDefault = this._adverVridDefault;
    }
    if (this._defaultLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLifetime = this._defaultLifetime;
    }
    if (this._floatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp;
    }
    if (this._floatingIpDefaultVrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpDefaultVrid = this._floatingIpDefaultVrid;
    }
    if (this._hopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hopLimit = this._hopLimit;
    }
    if (this._managedConfigAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedConfigAction = this._managedConfigAction;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    if (this._minInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInterval = this._minInterval;
    }
    if (this._otherConfigAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherConfigAction = this._otherConfigAction;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    if (this._retransmitTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitTimer = this._retransmitTimer;
    }
    if (this._useFloatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFloatingIp = this._useFloatingIp;
    }
    if (this._useFloatingIpDefaultVrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFloatingIpDefaultVrid = this._useFloatingIpDefaultVrid;
    }
    if (this._prefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RouterAdver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._adverMtu = undefined;
      this._adverMtuDisable = undefined;
      this._adverVrid = undefined;
      this._adverVridDefault = undefined;
      this._defaultLifetime = undefined;
      this._floatingIp = undefined;
      this._floatingIpDefaultVrid = undefined;
      this._hopLimit = undefined;
      this._managedConfigAction = undefined;
      this._maxInterval = undefined;
      this._minInterval = undefined;
      this._otherConfigAction = undefined;
      this._rateLimit = undefined;
      this._reachableTime = undefined;
      this._retransmitTimer = undefined;
      this._useFloatingIp = undefined;
      this._useFloatingIpDefaultVrid = undefined;
      this._prefixList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._adverMtu = value.adverMtu;
      this._adverMtuDisable = value.adverMtuDisable;
      this._adverVrid = value.adverVrid;
      this._adverVridDefault = value.adverVridDefault;
      this._defaultLifetime = value.defaultLifetime;
      this._floatingIp = value.floatingIp;
      this._floatingIpDefaultVrid = value.floatingIpDefaultVrid;
      this._hopLimit = value.hopLimit;
      this._managedConfigAction = value.managedConfigAction;
      this._maxInterval = value.maxInterval;
      this._minInterval = value.minInterval;
      this._otherConfigAction = value.otherConfigAction;
      this._rateLimit = value.rateLimit;
      this._reachableTime = value.reachableTime;
      this._retransmitTimer = value.retransmitTimer;
      this._useFloatingIp = value.useFloatingIp;
      this._useFloatingIpDefaultVrid = value.useFloatingIpDefaultVrid;
      this._prefixList.internalValue = value.prefixList;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // adver_mtu - computed: false, optional: true, required: false
  private _adverMtu?: number; 
  public get adverMtu() {
    return this.getNumberAttribute('adver_mtu');
  }
  public set adverMtu(value: number) {
    this._adverMtu = value;
  }
  public resetAdverMtu() {
    this._adverMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverMtuInput() {
    return this._adverMtu;
  }

  // adver_mtu_disable - computed: false, optional: true, required: false
  private _adverMtuDisable?: number; 
  public get adverMtuDisable() {
    return this.getNumberAttribute('adver_mtu_disable');
  }
  public set adverMtuDisable(value: number) {
    this._adverMtuDisable = value;
  }
  public resetAdverMtuDisable() {
    this._adverMtuDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverMtuDisableInput() {
    return this._adverMtuDisable;
  }

  // adver_vrid - computed: false, optional: true, required: false
  private _adverVrid?: number; 
  public get adverVrid() {
    return this.getNumberAttribute('adver_vrid');
  }
  public set adverVrid(value: number) {
    this._adverVrid = value;
  }
  public resetAdverVrid() {
    this._adverVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverVridInput() {
    return this._adverVrid;
  }

  // adver_vrid_default - computed: false, optional: true, required: false
  private _adverVridDefault?: number; 
  public get adverVridDefault() {
    return this.getNumberAttribute('adver_vrid_default');
  }
  public set adverVridDefault(value: number) {
    this._adverVridDefault = value;
  }
  public resetAdverVridDefault() {
    this._adverVridDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverVridDefaultInput() {
    return this._adverVridDefault;
  }

  // default_lifetime - computed: false, optional: true, required: false
  private _defaultLifetime?: number; 
  public get defaultLifetime() {
    return this.getNumberAttribute('default_lifetime');
  }
  public set defaultLifetime(value: number) {
    this._defaultLifetime = value;
  }
  public resetDefaultLifetime() {
    this._defaultLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLifetimeInput() {
    return this._defaultLifetime;
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
  }

  // floating_ip_default_vrid - computed: false, optional: true, required: false
  private _floatingIpDefaultVrid?: string; 
  public get floatingIpDefaultVrid() {
    return this.getStringAttribute('floating_ip_default_vrid');
  }
  public set floatingIpDefaultVrid(value: string) {
    this._floatingIpDefaultVrid = value;
  }
  public resetFloatingIpDefaultVrid() {
    this._floatingIpDefaultVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpDefaultVridInput() {
    return this._floatingIpDefaultVrid;
  }

  // hop_limit - computed: false, optional: true, required: false
  private _hopLimit?: number; 
  public get hopLimit() {
    return this.getNumberAttribute('hop_limit');
  }
  public set hopLimit(value: number) {
    this._hopLimit = value;
  }
  public resetHopLimit() {
    this._hopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopLimitInput() {
    return this._hopLimit;
  }

  // managed_config_action - computed: false, optional: true, required: false
  private _managedConfigAction?: string; 
  public get managedConfigAction() {
    return this.getStringAttribute('managed_config_action');
  }
  public set managedConfigAction(value: string) {
    this._managedConfigAction = value;
  }
  public resetManagedConfigAction() {
    this._managedConfigAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedConfigActionInput() {
    return this._managedConfigAction;
  }

  // max_interval - computed: false, optional: true, required: false
  private _maxInterval?: number; 
  public get maxInterval() {
    return this.getNumberAttribute('max_interval');
  }
  public set maxInterval(value: number) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }

  // min_interval - computed: false, optional: true, required: false
  private _minInterval?: number; 
  public get minInterval() {
    return this.getNumberAttribute('min_interval');
  }
  public set minInterval(value: number) {
    this._minInterval = value;
  }
  public resetMinInterval() {
    this._minInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIntervalInput() {
    return this._minInterval;
  }

  // other_config_action - computed: false, optional: true, required: false
  private _otherConfigAction?: string; 
  public get otherConfigAction() {
    return this.getStringAttribute('other_config_action');
  }
  public set otherConfigAction(value: string) {
    this._otherConfigAction = value;
  }
  public resetOtherConfigAction() {
    this._otherConfigAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherConfigActionInput() {
    return this._otherConfigAction;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // reachable_time - computed: false, optional: true, required: false
  private _reachableTime?: number; 
  public get reachableTime() {
    return this.getNumberAttribute('reachable_time');
  }
  public set reachableTime(value: number) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }

  // retransmit_timer - computed: false, optional: true, required: false
  private _retransmitTimer?: number; 
  public get retransmitTimer() {
    return this.getNumberAttribute('retransmit_timer');
  }
  public set retransmitTimer(value: number) {
    this._retransmitTimer = value;
  }
  public resetRetransmitTimer() {
    this._retransmitTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitTimerInput() {
    return this._retransmitTimer;
  }

  // use_floating_ip - computed: false, optional: true, required: false
  private _useFloatingIp?: number; 
  public get useFloatingIp() {
    return this.getNumberAttribute('use_floating_ip');
  }
  public set useFloatingIp(value: number) {
    this._useFloatingIp = value;
  }
  public resetUseFloatingIp() {
    this._useFloatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFloatingIpInput() {
    return this._useFloatingIp;
  }

  // use_floating_ip_default_vrid - computed: false, optional: true, required: false
  private _useFloatingIpDefaultVrid?: number; 
  public get useFloatingIpDefaultVrid() {
    return this.getNumberAttribute('use_floating_ip_default_vrid');
  }
  public set useFloatingIpDefaultVrid(value: number) {
    this._useFloatingIpDefaultVrid = value;
  }
  public resetUseFloatingIpDefaultVrid() {
    this._useFloatingIpDefaultVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFloatingIpDefaultVridInput() {
    return this._useFloatingIpDefaultVrid;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new InterfaceVeIpv6RouterAdverPrefixListStructList(this, "prefix_list", false);
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: InterfaceVeIpv6RouterAdverPrefixListStruct[] | cdktf.IResolvable) {
    this._prefixList.internalValue = value;
  }
  public resetPrefixList() {
    this._prefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList.internalValue;
  }
}
export interface InterfaceVeIpv6 {
  /**
  * ACL applied on incoming packets to this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#inbound InterfaceVe#inbound}
  */
  readonly inbound?: number;
  /**
  * Configure interface as NAT inside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#inside InterfaceVe#inside}
  */
  readonly inside?: number;
  /**
  * Enable IPv6 processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ipv6_enable InterfaceVe#ipv6_enable}
  */
  readonly ipv6Enable?: number;
  /**
  * Configure interface as NAT outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#outside InterfaceVe#outside}
  */
  readonly outside?: number;
  /**
  * Ignore TTL decrement for a received packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ttl_ignore InterfaceVe#ttl_ignore}
  */
  readonly ttlIgnore?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
  /**
  * Apply ACL rules to incoming packets on this interface (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#v6_acl_name InterfaceVe#v6_acl_name}
  */
  readonly v6AclName?: string;
  /**
  * address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#address_list InterfaceVe#address_list}
  */
  readonly addressList?: InterfaceVeIpv6AddressListStruct[] | cdktf.IResolvable;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#ospf InterfaceVe#ospf}
  */
  readonly ospf?: InterfaceVeIpv6Ospf;
  /**
  * rip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#rip InterfaceVe#rip}
  */
  readonly rip?: InterfaceVeIpv6Rip;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#router InterfaceVe#router}
  */
  readonly router?: InterfaceVeIpv6Router;
  /**
  * router_adver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#router_adver InterfaceVe#router_adver}
  */
  readonly routerAdver?: InterfaceVeIpv6RouterAdver;
}

export function interfaceVeIpv6ToTerraform(struct?: InterfaceVeIpv6OutputReference | InterfaceVeIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.numberToTerraform(struct!.inbound),
    inside: cdktf.numberToTerraform(struct!.inside),
    ipv6_enable: cdktf.numberToTerraform(struct!.ipv6Enable),
    outside: cdktf.numberToTerraform(struct!.outside),
    ttl_ignore: cdktf.numberToTerraform(struct!.ttlIgnore),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    v6_acl_name: cdktf.stringToTerraform(struct!.v6AclName),
    address_list: cdktf.listMapper(interfaceVeIpv6AddressListStructToTerraform, true)(struct!.addressList),
    ospf: interfaceVeIpv6OspfToTerraform(struct!.ospf),
    rip: interfaceVeIpv6RipToTerraform(struct!.rip),
    router: interfaceVeIpv6RouterToTerraform(struct!.router),
    router_adver: interfaceVeIpv6RouterAdverToTerraform(struct!.routerAdver),
  }
}


export function interfaceVeIpv6ToHclTerraform(struct?: InterfaceVeIpv6OutputReference | InterfaceVeIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound: {
      value: cdktf.numberToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_enable: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_ignore: {
      value: cdktf.numberToHclTerraform(struct!.ttlIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6_acl_name: {
      value: cdktf.stringToHclTerraform(struct!.v6AclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_list: {
      value: cdktf.listMapperHcl(interfaceVeIpv6AddressListStructToHclTerraform, true)(struct!.addressList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6AddressListStructList",
    },
    ospf: {
      value: interfaceVeIpv6OspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfList",
    },
    rip: {
      value: interfaceVeIpv6RipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6RipList",
    },
    router: {
      value: interfaceVeIpv6RouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6RouterList",
    },
    router_adver: {
      value: interfaceVeIpv6RouterAdverToHclTerraform(struct!.routerAdver),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6RouterAdverList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._ipv6Enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Enable = this._ipv6Enable;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._ttlIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlIgnore = this._ttlIgnore;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._v6AclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6AclName = this._v6AclName;
    }
    if (this._addressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressList = this._addressList?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._rip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip?.internalValue;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    if (this._routerAdver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerAdver = this._routerAdver?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inbound = undefined;
      this._inside = undefined;
      this._ipv6Enable = undefined;
      this._outside = undefined;
      this._ttlIgnore = undefined;
      this._uuid = undefined;
      this._v6AclName = undefined;
      this._addressList.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._rip.internalValue = undefined;
      this._router.internalValue = undefined;
      this._routerAdver.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inbound = value.inbound;
      this._inside = value.inside;
      this._ipv6Enable = value.ipv6Enable;
      this._outside = value.outside;
      this._ttlIgnore = value.ttlIgnore;
      this._uuid = value.uuid;
      this._v6AclName = value.v6AclName;
      this._addressList.internalValue = value.addressList;
      this._ospf.internalValue = value.ospf;
      this._rip.internalValue = value.rip;
      this._router.internalValue = value.router;
      this._routerAdver.internalValue = value.routerAdver;
    }
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound?: number; 
  public get inbound() {
    return this.getNumberAttribute('inbound');
  }
  public set inbound(value: number) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // ipv6_enable - computed: false, optional: true, required: false
  private _ipv6Enable?: number; 
  public get ipv6Enable() {
    return this.getNumberAttribute('ipv6_enable');
  }
  public set ipv6Enable(value: number) {
    this._ipv6Enable = value;
  }
  public resetIpv6Enable() {
    this._ipv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
  }

  // ttl_ignore - computed: false, optional: true, required: false
  private _ttlIgnore?: number; 
  public get ttlIgnore() {
    return this.getNumberAttribute('ttl_ignore');
  }
  public set ttlIgnore(value: number) {
    this._ttlIgnore = value;
  }
  public resetTtlIgnore() {
    this._ttlIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlIgnoreInput() {
    return this._ttlIgnore;
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

  // v6_acl_name - computed: false, optional: true, required: false
  private _v6AclName?: string; 
  public get v6AclName() {
    return this.getStringAttribute('v6_acl_name');
  }
  public set v6AclName(value: string) {
    this._v6AclName = value;
  }
  public resetV6AclName() {
    this._v6AclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AclNameInput() {
    return this._v6AclName;
  }

  // address_list - computed: false, optional: true, required: false
  private _addressList = new InterfaceVeIpv6AddressListStructList(this, "address_list", false);
  public get addressList() {
    return this._addressList;
  }
  public putAddressList(value: InterfaceVeIpv6AddressListStruct[] | cdktf.IResolvable) {
    this._addressList.internalValue = value;
  }
  public resetAddressList() {
    this._addressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new InterfaceVeIpv6OspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: InterfaceVeIpv6Ospf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // rip - computed: false, optional: true, required: false
  private _rip = new InterfaceVeIpv6RipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: InterfaceVeIpv6Rip) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }

  // router - computed: false, optional: true, required: false
  private _router = new InterfaceVeIpv6RouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: InterfaceVeIpv6Router) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }

  // router_adver - computed: false, optional: true, required: false
  private _routerAdver = new InterfaceVeIpv6RouterAdverOutputReference(this, "router_adver");
  public get routerAdver() {
    return this._routerAdver;
  }
  public putRouterAdver(value: InterfaceVeIpv6RouterAdver) {
    this._routerAdver.internalValue = value;
  }
  public resetRouterAdver() {
    this._routerAdver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAdverInput() {
    return this._routerAdver.internalValue;
  }
}
export interface InterfaceVeIsisAuthenticationKeyChainListStruct {
  /**
  * Authentication key-chain (Name of key-chain)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#key_chain InterfaceVe#key_chain}
  */
  readonly keyChain?: string;
  /**
  * 'level-1': Specify authentication key-chain for level-1 PDUs; 'level-2': Specify authentication key-chain for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#level InterfaceVe#level}
  */
  readonly level?: string;
}

export function interfaceVeIsisAuthenticationKeyChainListStructToTerraform(struct?: InterfaceVeIsisAuthenticationKeyChainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: cdktf.stringToTerraform(struct!.keyChain),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceVeIsisAuthenticationKeyChainListStructToHclTerraform(struct?: InterfaceVeIsisAuthenticationKeyChainListStruct | cdktf.IResolvable): any {
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

export class InterfaceVeIsisAuthenticationKeyChainListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisAuthenticationKeyChainListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisAuthenticationKeyChainListStruct | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisAuthenticationKeyChainListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisAuthenticationKeyChainListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisAuthenticationKeyChainListStructOutputReference {
    return new InterfaceVeIsisAuthenticationKeyChainListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisAuthenticationModeListStruct {
  /**
  * 'level-1': Specify authentication mode for level-1 PDUs; 'level-2': Specify authentication mode for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#level InterfaceVe#level}
  */
  readonly level?: string;
  /**
  * 'md5': Keyed message digest;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#mode InterfaceVe#mode}
  */
  readonly mode?: string;
}

export function interfaceVeIsisAuthenticationModeListStructToTerraform(struct?: InterfaceVeIsisAuthenticationModeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function interfaceVeIsisAuthenticationModeListStructToHclTerraform(struct?: InterfaceVeIsisAuthenticationModeListStruct | cdktf.IResolvable): any {
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

export class InterfaceVeIsisAuthenticationModeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisAuthenticationModeListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisAuthenticationModeListStruct | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisAuthenticationModeListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisAuthenticationModeListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisAuthenticationModeListStructOutputReference {
    return new InterfaceVeIsisAuthenticationModeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisAuthenticationSendOnlyListStruct {
  /**
  * 'level-1': Specify authentication send-only for level-1 PDUs; 'level-2': Specify authentication send-only for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#level InterfaceVe#level}
  */
  readonly level?: string;
  /**
  * Authentication send-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#send_only InterfaceVe#send_only}
  */
  readonly sendOnly?: number;
}

export function interfaceVeIsisAuthenticationSendOnlyListStructToTerraform(struct?: InterfaceVeIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    send_only: cdktf.numberToTerraform(struct!.sendOnly),
  }
}


export function interfaceVeIsisAuthenticationSendOnlyListStructToHclTerraform(struct?: InterfaceVeIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable): any {
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

export class InterfaceVeIsisAuthenticationSendOnlyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisAuthenticationSendOnlyListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisAuthenticationSendOnlyListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisAuthenticationSendOnlyListStructOutputReference {
    return new InterfaceVeIsisAuthenticationSendOnlyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisAuthentication {
  /**
  * key_chain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#key_chain_list InterfaceVe#key_chain_list}
  */
  readonly keyChainList?: InterfaceVeIsisAuthenticationKeyChainListStruct[] | cdktf.IResolvable;
  /**
  * mode_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#mode_list InterfaceVe#mode_list}
  */
  readonly modeList?: InterfaceVeIsisAuthenticationModeListStruct[] | cdktf.IResolvable;
  /**
  * send_only_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#send_only_list InterfaceVe#send_only_list}
  */
  readonly sendOnlyList?: InterfaceVeIsisAuthenticationSendOnlyListStruct[] | cdktf.IResolvable;
}

export function interfaceVeIsisAuthenticationToTerraform(struct?: InterfaceVeIsisAuthenticationOutputReference | InterfaceVeIsisAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain_list: cdktf.listMapper(interfaceVeIsisAuthenticationKeyChainListStructToTerraform, true)(struct!.keyChainList),
    mode_list: cdktf.listMapper(interfaceVeIsisAuthenticationModeListStructToTerraform, true)(struct!.modeList),
    send_only_list: cdktf.listMapper(interfaceVeIsisAuthenticationSendOnlyListStructToTerraform, true)(struct!.sendOnlyList),
  }
}


export function interfaceVeIsisAuthenticationToHclTerraform(struct?: InterfaceVeIsisAuthenticationOutputReference | InterfaceVeIsisAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain_list: {
      value: cdktf.listMapperHcl(interfaceVeIsisAuthenticationKeyChainListStructToHclTerraform, true)(struct!.keyChainList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisAuthenticationKeyChainListStructList",
    },
    mode_list: {
      value: cdktf.listMapperHcl(interfaceVeIsisAuthenticationModeListStructToHclTerraform, true)(struct!.modeList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisAuthenticationModeListStructList",
    },
    send_only_list: {
      value: cdktf.listMapperHcl(interfaceVeIsisAuthenticationSendOnlyListStructToHclTerraform, true)(struct!.sendOnlyList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisAuthenticationSendOnlyListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIsisAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIsisAuthentication | undefined {
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

  public set internalValue(value: InterfaceVeIsisAuthentication | undefined) {
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
  private _keyChainList = new InterfaceVeIsisAuthenticationKeyChainListStructList(this, "key_chain_list", false);
  public get keyChainList() {
    return this._keyChainList;
  }
  public putKeyChainList(value: InterfaceVeIsisAuthenticationKeyChainListStruct[] | cdktf.IResolvable) {
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
  private _modeList = new InterfaceVeIsisAuthenticationModeListStructList(this, "mode_list", false);
  public get modeList() {
    return this._modeList;
  }
  public putModeList(value: InterfaceVeIsisAuthenticationModeListStruct[] | cdktf.IResolvable) {
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
  private _sendOnlyList = new InterfaceVeIsisAuthenticationSendOnlyListStructList(this, "send_only_list", false);
  public get sendOnlyList() {
    return this._sendOnlyList;
  }
  public putSendOnlyList(value: InterfaceVeIsisAuthenticationSendOnlyListStruct[] | cdktf.IResolvable) {
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
export interface InterfaceVeIsisBfdCfg {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#bfd InterfaceVe#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#disable InterfaceVe#disable}
  */
  readonly disable?: number;
}

export function interfaceVeIsisBfdCfgToTerraform(struct?: InterfaceVeIsisBfdCfgOutputReference | InterfaceVeIsisBfdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
  }
}


export function interfaceVeIsisBfdCfgToHclTerraform(struct?: InterfaceVeIsisBfdCfgOutputReference | InterfaceVeIsisBfdCfg): any {
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

export class InterfaceVeIsisBfdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIsisBfdCfg | undefined {
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

  public set internalValue(value: InterfaceVeIsisBfdCfg | undefined) {
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
export interface InterfaceVeIsisCsnpIntervalListStruct {
  /**
  * Set CSNP interval in seconds (CSNP interval value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#csnp_interval InterfaceVe#csnp_interval}
  */
  readonly csnpInterval?: number;
  /**
  * 'level-1': Speficy interval for level-1 CSNPs; 'level-2': Specify interval for level-2 CSNPs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#level InterfaceVe#level}
  */
  readonly level?: string;
}

export function interfaceVeIsisCsnpIntervalListStructToTerraform(struct?: InterfaceVeIsisCsnpIntervalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csnp_interval: cdktf.numberToTerraform(struct!.csnpInterval),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceVeIsisCsnpIntervalListStructToHclTerraform(struct?: InterfaceVeIsisCsnpIntervalListStruct | cdktf.IResolvable): any {
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

export class InterfaceVeIsisCsnpIntervalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisCsnpIntervalListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisCsnpIntervalListStruct | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisCsnpIntervalListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisCsnpIntervalListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisCsnpIntervalListStructOutputReference {
    return new InterfaceVeIsisCsnpIntervalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisHelloIntervalListStruct {
  /**
  * Set Hello interval in seconds (Hello interval value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#hello_interval InterfaceVe#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * 'level-1': Specify hello-interval for level-1 IIHs; 'level-2': Specify hello-interval for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#level InterfaceVe#level}
  */
  readonly level?: string;
}

export function interfaceVeIsisHelloIntervalListStructToTerraform(struct?: InterfaceVeIsisHelloIntervalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceVeIsisHelloIntervalListStructToHclTerraform(struct?: InterfaceVeIsisHelloIntervalListStruct | cdktf.IResolvable): any {
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

export class InterfaceVeIsisHelloIntervalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisHelloIntervalListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisHelloIntervalListStruct | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisHelloIntervalListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisHelloIntervalListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisHelloIntervalListStructOutputReference {
    return new InterfaceVeIsisHelloIntervalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisHelloIntervalMinimalListStruct {
  /**
  * Set Hello holdtime 1 second, interval depends on multiplier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#hello_interval_minimal InterfaceVe#hello_interval_minimal}
  */
  readonly helloIntervalMinimal?: number;
  /**
  * 'level-1': Specify hello-interval for level-1 IIHs; 'level-2': Specify hello-interval for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#level InterfaceVe#level}
  */
  readonly level?: string;
}

export function interfaceVeIsisHelloIntervalMinimalListStructToTerraform(struct?: InterfaceVeIsisHelloIntervalMinimalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval_minimal: cdktf.numberToTerraform(struct!.helloIntervalMinimal),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceVeIsisHelloIntervalMinimalListStructToHclTerraform(struct?: InterfaceVeIsisHelloIntervalMinimalListStruct | cdktf.IResolvable): any {
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

export class InterfaceVeIsisHelloIntervalMinimalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisHelloIntervalMinimalListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisHelloIntervalMinimalListStruct | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisHelloIntervalMinimalListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisHelloIntervalMinimalListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisHelloIntervalMinimalListStructOutputReference {
    return new InterfaceVeIsisHelloIntervalMinimalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisHelloMultiplierListStruct {
  /**
  * Set multiplier for Hello holding time (Hello multiplier value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#hello_multiplier InterfaceVe#hello_multiplier}
  */
  readonly helloMultiplier?: number;
  /**
  * 'level-1': Specify hello multiplier for level-1 IIHs; 'level-2': Specify hello multiplier for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#level InterfaceVe#level}
  */
  readonly level?: string;
}

export function interfaceVeIsisHelloMultiplierListStructToTerraform(struct?: InterfaceVeIsisHelloMultiplierListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_multiplier: cdktf.numberToTerraform(struct!.helloMultiplier),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceVeIsisHelloMultiplierListStructToHclTerraform(struct?: InterfaceVeIsisHelloMultiplierListStruct | cdktf.IResolvable): any {
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

export class InterfaceVeIsisHelloMultiplierListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisHelloMultiplierListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisHelloMultiplierListStruct | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisHelloMultiplierListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisHelloMultiplierListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisHelloMultiplierListStructOutputReference {
    return new InterfaceVeIsisHelloMultiplierListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisMeshGroup {
  /**
  * Block LSPs on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#blocked InterfaceVe#blocked}
  */
  readonly blocked?: number;
  /**
  * Mesh group number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#value InterfaceVe#value}
  */
  readonly value?: number;
}

export function interfaceVeIsisMeshGroupToTerraform(struct?: InterfaceVeIsisMeshGroupOutputReference | InterfaceVeIsisMeshGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked: cdktf.numberToTerraform(struct!.blocked),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function interfaceVeIsisMeshGroupToHclTerraform(struct?: InterfaceVeIsisMeshGroupOutputReference | InterfaceVeIsisMeshGroup): any {
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

export class InterfaceVeIsisMeshGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIsisMeshGroup | undefined {
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

  public set internalValue(value: InterfaceVeIsisMeshGroup | undefined) {
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
export interface InterfaceVeIsisMetricListStruct {
  /**
  * 'level-1': Apply metric to level-1 links; 'level-2': Apply metric to level-2 links;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#level InterfaceVe#level}
  */
  readonly level?: string;
  /**
  * Configure the metric for interface (Default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#metric InterfaceVe#metric}
  */
  readonly metric?: number;
}

export function interfaceVeIsisMetricListStructToTerraform(struct?: InterfaceVeIsisMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function interfaceVeIsisMetricListStructToHclTerraform(struct?: InterfaceVeIsisMetricListStruct | cdktf.IResolvable): any {
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

export class InterfaceVeIsisMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisMetricListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisMetricListStruct | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisMetricListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisMetricListStructOutputReference {
    return new InterfaceVeIsisMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisPasswordListStruct {
  /**
  * 'level-1': Specify password for level-1 PDUs; 'level-2': Specify password for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#level InterfaceVe#level}
  */
  readonly level?: string;
  /**
  * Configure the authentication password for interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#password InterfaceVe#password}
  */
  readonly password?: string;
}

export function interfaceVeIsisPasswordListStructToTerraform(struct?: InterfaceVeIsisPasswordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function interfaceVeIsisPasswordListStructToHclTerraform(struct?: InterfaceVeIsisPasswordListStruct | cdktf.IResolvable): any {
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

export class InterfaceVeIsisPasswordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisPasswordListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisPasswordListStruct | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisPasswordListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisPasswordListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisPasswordListStructOutputReference {
    return new InterfaceVeIsisPasswordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisPriorityListStruct {
  /**
  * 'level-1': Specify priority for level-1 routing; 'level-2': Specify priority for level-2 routing;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#level InterfaceVe#level}
  */
  readonly level?: string;
  /**
  * Set priority for Designated Router election (Priority value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#priority InterfaceVe#priority}
  */
  readonly priority?: number;
}

export function interfaceVeIsisPriorityListStructToTerraform(struct?: InterfaceVeIsisPriorityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function interfaceVeIsisPriorityListStructToHclTerraform(struct?: InterfaceVeIsisPriorityListStruct | cdktf.IResolvable): any {
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

export class InterfaceVeIsisPriorityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisPriorityListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisPriorityListStruct | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisPriorityListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisPriorityListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisPriorityListStructOutputReference {
    return new InterfaceVeIsisPriorityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsisWideMetricListStruct {
  /**
  * 'level-1': Apply metric to level-1 links; 'level-2': Apply metric to level-2 links;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#level InterfaceVe#level}
  */
  readonly level?: string;
  /**
  * Configure the wide metric for interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#wide_metric InterfaceVe#wide_metric}
  */
  readonly wideMetric?: number;
}

export function interfaceVeIsisWideMetricListStructToTerraform(struct?: InterfaceVeIsisWideMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    wide_metric: cdktf.numberToTerraform(struct!.wideMetric),
  }
}


export function interfaceVeIsisWideMetricListStructToHclTerraform(struct?: InterfaceVeIsisWideMetricListStruct | cdktf.IResolvable): any {
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

export class InterfaceVeIsisWideMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIsisWideMetricListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceVeIsisWideMetricListStruct | cdktf.IResolvable | undefined) {
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

export class InterfaceVeIsisWideMetricListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIsisWideMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIsisWideMetricListStructOutputReference {
    return new InterfaceVeIsisWideMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIsis {
  /**
  * 'level-1': Level-1 only adjacencies are formed; 'level-1-2': Level-1-2 adjacencies are formed; 'level-2-only': Level-2 only adjacencies are formed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#circuit_type InterfaceVe#circuit_type}
  */
  readonly circuitType?: string;
  /**
  * Set LSP transmission interval (LSP transmission interval (milliseconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#lsp_interval InterfaceVe#lsp_interval}
  */
  readonly lspInterval?: number;
  /**
  * 'broadcast': Specify IS-IS broadcast multi-access network; 'point-to-point': Specify IS-IS point-to-point network;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#network InterfaceVe#network}
  */
  readonly network?: string;
  /**
  * Add padding to IS-IS hello packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#padding InterfaceVe#padding}
  */
  readonly padding?: number;
  /**
  * Set per-LSP retransmission interval (Interval between retransmissions of the same LSP (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#retransmit_interval InterfaceVe#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#authentication InterfaceVe#authentication}
  */
  readonly authentication?: InterfaceVeIsisAuthentication;
  /**
  * bfd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#bfd_cfg InterfaceVe#bfd_cfg}
  */
  readonly bfdCfg?: InterfaceVeIsisBfdCfg;
  /**
  * csnp_interval_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#csnp_interval_list InterfaceVe#csnp_interval_list}
  */
  readonly csnpIntervalList?: InterfaceVeIsisCsnpIntervalListStruct[] | cdktf.IResolvable;
  /**
  * hello_interval_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#hello_interval_list InterfaceVe#hello_interval_list}
  */
  readonly helloIntervalList?: InterfaceVeIsisHelloIntervalListStruct[] | cdktf.IResolvable;
  /**
  * hello_interval_minimal_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#hello_interval_minimal_list InterfaceVe#hello_interval_minimal_list}
  */
  readonly helloIntervalMinimalList?: InterfaceVeIsisHelloIntervalMinimalListStruct[] | cdktf.IResolvable;
  /**
  * hello_multiplier_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#hello_multiplier_list InterfaceVe#hello_multiplier_list}
  */
  readonly helloMultiplierList?: InterfaceVeIsisHelloMultiplierListStruct[] | cdktf.IResolvable;
  /**
  * mesh_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#mesh_group InterfaceVe#mesh_group}
  */
  readonly meshGroup?: InterfaceVeIsisMeshGroup;
  /**
  * metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#metric_list InterfaceVe#metric_list}
  */
  readonly metricList?: InterfaceVeIsisMetricListStruct[] | cdktf.IResolvable;
  /**
  * password_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#password_list InterfaceVe#password_list}
  */
  readonly passwordList?: InterfaceVeIsisPasswordListStruct[] | cdktf.IResolvable;
  /**
  * priority_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#priority_list InterfaceVe#priority_list}
  */
  readonly priorityList?: InterfaceVeIsisPriorityListStruct[] | cdktf.IResolvable;
  /**
  * wide_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#wide_metric_list InterfaceVe#wide_metric_list}
  */
  readonly wideMetricList?: InterfaceVeIsisWideMetricListStruct[] | cdktf.IResolvable;
}

export function interfaceVeIsisToTerraform(struct?: InterfaceVeIsisOutputReference | InterfaceVeIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_type: cdktf.stringToTerraform(struct!.circuitType),
    lsp_interval: cdktf.numberToTerraform(struct!.lspInterval),
    network: cdktf.stringToTerraform(struct!.network),
    padding: cdktf.numberToTerraform(struct!.padding),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication: interfaceVeIsisAuthenticationToTerraform(struct!.authentication),
    bfd_cfg: interfaceVeIsisBfdCfgToTerraform(struct!.bfdCfg),
    csnp_interval_list: cdktf.listMapper(interfaceVeIsisCsnpIntervalListStructToTerraform, true)(struct!.csnpIntervalList),
    hello_interval_list: cdktf.listMapper(interfaceVeIsisHelloIntervalListStructToTerraform, true)(struct!.helloIntervalList),
    hello_interval_minimal_list: cdktf.listMapper(interfaceVeIsisHelloIntervalMinimalListStructToTerraform, true)(struct!.helloIntervalMinimalList),
    hello_multiplier_list: cdktf.listMapper(interfaceVeIsisHelloMultiplierListStructToTerraform, true)(struct!.helloMultiplierList),
    mesh_group: interfaceVeIsisMeshGroupToTerraform(struct!.meshGroup),
    metric_list: cdktf.listMapper(interfaceVeIsisMetricListStructToTerraform, true)(struct!.metricList),
    password_list: cdktf.listMapper(interfaceVeIsisPasswordListStructToTerraform, true)(struct!.passwordList),
    priority_list: cdktf.listMapper(interfaceVeIsisPriorityListStructToTerraform, true)(struct!.priorityList),
    wide_metric_list: cdktf.listMapper(interfaceVeIsisWideMetricListStructToTerraform, true)(struct!.wideMetricList),
  }
}


export function interfaceVeIsisToHclTerraform(struct?: InterfaceVeIsisOutputReference | InterfaceVeIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    circuit_type: {
      value: cdktf.stringToHclTerraform(struct!.circuitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lsp_interval: {
      value: cdktf.numberToHclTerraform(struct!.lspInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding: {
      value: cdktf.numberToHclTerraform(struct!.padding),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: interfaceVeIsisAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisAuthenticationList",
    },
    bfd_cfg: {
      value: interfaceVeIsisBfdCfgToHclTerraform(struct!.bfdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisBfdCfgList",
    },
    csnp_interval_list: {
      value: cdktf.listMapperHcl(interfaceVeIsisCsnpIntervalListStructToHclTerraform, true)(struct!.csnpIntervalList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisCsnpIntervalListStructList",
    },
    hello_interval_list: {
      value: cdktf.listMapperHcl(interfaceVeIsisHelloIntervalListStructToHclTerraform, true)(struct!.helloIntervalList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisHelloIntervalListStructList",
    },
    hello_interval_minimal_list: {
      value: cdktf.listMapperHcl(interfaceVeIsisHelloIntervalMinimalListStructToHclTerraform, true)(struct!.helloIntervalMinimalList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisHelloIntervalMinimalListStructList",
    },
    hello_multiplier_list: {
      value: cdktf.listMapperHcl(interfaceVeIsisHelloMultiplierListStructToHclTerraform, true)(struct!.helloMultiplierList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisHelloMultiplierListStructList",
    },
    mesh_group: {
      value: interfaceVeIsisMeshGroupToHclTerraform(struct!.meshGroup),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisMeshGroupList",
    },
    metric_list: {
      value: cdktf.listMapperHcl(interfaceVeIsisMetricListStructToHclTerraform, true)(struct!.metricList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisMetricListStructList",
    },
    password_list: {
      value: cdktf.listMapperHcl(interfaceVeIsisPasswordListStructToHclTerraform, true)(struct!.passwordList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisPasswordListStructList",
    },
    priority_list: {
      value: cdktf.listMapperHcl(interfaceVeIsisPriorityListStructToHclTerraform, true)(struct!.priorityList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisPriorityListStructList",
    },
    wide_metric_list: {
      value: cdktf.listMapperHcl(interfaceVeIsisWideMetricListStructToHclTerraform, true)(struct!.wideMetricList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIsisWideMetricListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIsisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIsis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circuitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitType = this._circuitType;
    }
    if (this._lspInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.lspInterval = this._lspInterval;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._padding !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._bfdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdCfg = this._bfdCfg?.internalValue;
    }
    if (this._csnpIntervalList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csnpIntervalList = this._csnpIntervalList?.internalValue;
    }
    if (this._helloIntervalList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalList = this._helloIntervalList?.internalValue;
    }
    if (this._helloIntervalMinimalList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalMinimalList = this._helloIntervalMinimalList?.internalValue;
    }
    if (this._helloMultiplierList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloMultiplierList = this._helloMultiplierList?.internalValue;
    }
    if (this._meshGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshGroup = this._meshGroup?.internalValue;
    }
    if (this._metricList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricList = this._metricList?.internalValue;
    }
    if (this._passwordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordList = this._passwordList?.internalValue;
    }
    if (this._priorityList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityList = this._priorityList?.internalValue;
    }
    if (this._wideMetricList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wideMetricList = this._wideMetricList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIsis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._circuitType = undefined;
      this._lspInterval = undefined;
      this._network = undefined;
      this._padding = undefined;
      this._retransmitInterval = undefined;
      this._uuid = undefined;
      this._authentication.internalValue = undefined;
      this._bfdCfg.internalValue = undefined;
      this._csnpIntervalList.internalValue = undefined;
      this._helloIntervalList.internalValue = undefined;
      this._helloIntervalMinimalList.internalValue = undefined;
      this._helloMultiplierList.internalValue = undefined;
      this._meshGroup.internalValue = undefined;
      this._metricList.internalValue = undefined;
      this._passwordList.internalValue = undefined;
      this._priorityList.internalValue = undefined;
      this._wideMetricList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._circuitType = value.circuitType;
      this._lspInterval = value.lspInterval;
      this._network = value.network;
      this._padding = value.padding;
      this._retransmitInterval = value.retransmitInterval;
      this._uuid = value.uuid;
      this._authentication.internalValue = value.authentication;
      this._bfdCfg.internalValue = value.bfdCfg;
      this._csnpIntervalList.internalValue = value.csnpIntervalList;
      this._helloIntervalList.internalValue = value.helloIntervalList;
      this._helloIntervalMinimalList.internalValue = value.helloIntervalMinimalList;
      this._helloMultiplierList.internalValue = value.helloMultiplierList;
      this._meshGroup.internalValue = value.meshGroup;
      this._metricList.internalValue = value.metricList;
      this._passwordList.internalValue = value.passwordList;
      this._priorityList.internalValue = value.priorityList;
      this._wideMetricList.internalValue = value.wideMetricList;
    }
  }

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
  private _authentication = new InterfaceVeIsisAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceVeIsisAuthentication) {
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
  private _bfdCfg = new InterfaceVeIsisBfdCfgOutputReference(this, "bfd_cfg");
  public get bfdCfg() {
    return this._bfdCfg;
  }
  public putBfdCfg(value: InterfaceVeIsisBfdCfg) {
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
  private _csnpIntervalList = new InterfaceVeIsisCsnpIntervalListStructList(this, "csnp_interval_list", false);
  public get csnpIntervalList() {
    return this._csnpIntervalList;
  }
  public putCsnpIntervalList(value: InterfaceVeIsisCsnpIntervalListStruct[] | cdktf.IResolvable) {
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
  private _helloIntervalList = new InterfaceVeIsisHelloIntervalListStructList(this, "hello_interval_list", false);
  public get helloIntervalList() {
    return this._helloIntervalList;
  }
  public putHelloIntervalList(value: InterfaceVeIsisHelloIntervalListStruct[] | cdktf.IResolvable) {
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
  private _helloIntervalMinimalList = new InterfaceVeIsisHelloIntervalMinimalListStructList(this, "hello_interval_minimal_list", false);
  public get helloIntervalMinimalList() {
    return this._helloIntervalMinimalList;
  }
  public putHelloIntervalMinimalList(value: InterfaceVeIsisHelloIntervalMinimalListStruct[] | cdktf.IResolvable) {
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
  private _helloMultiplierList = new InterfaceVeIsisHelloMultiplierListStructList(this, "hello_multiplier_list", false);
  public get helloMultiplierList() {
    return this._helloMultiplierList;
  }
  public putHelloMultiplierList(value: InterfaceVeIsisHelloMultiplierListStruct[] | cdktf.IResolvable) {
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
  private _meshGroup = new InterfaceVeIsisMeshGroupOutputReference(this, "mesh_group");
  public get meshGroup() {
    return this._meshGroup;
  }
  public putMeshGroup(value: InterfaceVeIsisMeshGroup) {
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
  private _metricList = new InterfaceVeIsisMetricListStructList(this, "metric_list", false);
  public get metricList() {
    return this._metricList;
  }
  public putMetricList(value: InterfaceVeIsisMetricListStruct[] | cdktf.IResolvable) {
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
  private _passwordList = new InterfaceVeIsisPasswordListStructList(this, "password_list", false);
  public get passwordList() {
    return this._passwordList;
  }
  public putPasswordList(value: InterfaceVeIsisPasswordListStruct[] | cdktf.IResolvable) {
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
  private _priorityList = new InterfaceVeIsisPriorityListStructList(this, "priority_list", false);
  public get priorityList() {
    return this._priorityList;
  }
  public putPriorityList(value: InterfaceVeIsisPriorityListStruct[] | cdktf.IResolvable) {
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
  private _wideMetricList = new InterfaceVeIsisWideMetricListStructList(this, "wide_metric_list", false);
  public get wideMetricList() {
    return this._wideMetricList;
  }
  public putWideMetricList(value: InterfaceVeIsisWideMetricListStruct[] | cdktf.IResolvable) {
    this._wideMetricList.internalValue = value;
  }
  public resetWideMetricList() {
    this._wideMetricList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wideMetricListInput() {
    return this._wideMetricList.internalValue;
  }
}
export interface InterfaceVeLw4O6 {
  /**
  * Configure LW-4over6 outside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#inside InterfaceVe#inside}
  */
  readonly inside?: number;
  /**
  * Configure LW-4over6 inside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#outside InterfaceVe#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
}

export function interfaceVeLw4O6ToTerraform(struct?: InterfaceVeLw4O6OutputReference | InterfaceVeLw4O6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.numberToTerraform(struct!.inside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceVeLw4O6ToHclTerraform(struct?: InterfaceVeLw4O6OutputReference | InterfaceVeLw4O6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeLw4O6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeLw4O6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeLw4O6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
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
}
export interface InterfaceVeMap {
  /**
  * Configure MAP inside interface (connected to MAP domains)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#inside InterfaceVe#inside}
  */
  readonly inside?: number;
  /**
  * Configure MAP inside interface (connected to MAP domains)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#map_t_inside InterfaceVe#map_t_inside}
  */
  readonly mapTInside?: number;
  /**
  * Configure MAP outside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#map_t_outside InterfaceVe#map_t_outside}
  */
  readonly mapTOutside?: number;
  /**
  * Configure MAP outside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#outside InterfaceVe#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
}

export function interfaceVeMapToTerraform(struct?: InterfaceVeMapOutputReference | InterfaceVeMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.numberToTerraform(struct!.inside),
    map_t_inside: cdktf.numberToTerraform(struct!.mapTInside),
    map_t_outside: cdktf.numberToTerraform(struct!.mapTOutside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceVeMapToHclTerraform(struct?: InterfaceVeMapOutputReference | InterfaceVeMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    map_t_inside: {
      value: cdktf.numberToHclTerraform(struct!.mapTInside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    map_t_outside: {
      value: cdktf.numberToHclTerraform(struct!.mapTOutside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._mapTInside !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapTInside = this._mapTInside;
    }
    if (this._mapTOutside !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapTOutside = this._mapTOutside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._mapTInside = undefined;
      this._mapTOutside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._mapTInside = value.mapTInside;
      this._mapTOutside = value.mapTOutside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // map_t_inside - computed: false, optional: true, required: false
  private _mapTInside?: number; 
  public get mapTInside() {
    return this.getNumberAttribute('map_t_inside');
  }
  public set mapTInside(value: number) {
    this._mapTInside = value;
  }
  public resetMapTInside() {
    this._mapTInside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTInsideInput() {
    return this._mapTInside;
  }

  // map_t_outside - computed: false, optional: true, required: false
  private _mapTOutside?: number; 
  public get mapTOutside() {
    return this.getNumberAttribute('map_t_outside');
  }
  public set mapTOutside(value: number) {
    this._mapTOutside = value;
  }
  public resetMapTOutside() {
    this._mapTOutside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTOutsideInput() {
    return this._mapTOutside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
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
}
export interface InterfaceVeNptv6DomainListStruct {
  /**
  * 'inside': This interface is connected to NPTv6 inside networks; 'outside': This interface is connected to NPTv6 outside networks;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#bind_type InterfaceVe#bind_type}
  */
  readonly bindType: string;
  /**
  * NPTv6 domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#domain_name InterfaceVe#domain_name}
  */
  readonly domainName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#uuid InterfaceVe#uuid}
  */
  readonly uuid?: string;
}

export function interfaceVeNptv6DomainListStructToTerraform(struct?: InterfaceVeNptv6DomainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_type: cdktf.stringToTerraform(struct!.bindType),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceVeNptv6DomainListStructToHclTerraform(struct?: InterfaceVeNptv6DomainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind_type: {
      value: cdktf.stringToHclTerraform(struct!.bindType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeNptv6DomainListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeNptv6DomainListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindType = this._bindType;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeNptv6DomainListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindType = undefined;
      this._domainName = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindType = value.bindType;
      this._domainName = value.domainName;
      this._uuid = value.uuid;
    }
  }

  // bind_type - computed: false, optional: false, required: true
  private _bindType?: string; 
  public get bindType() {
    return this.getStringAttribute('bind_type');
  }
  public set bindType(value: string) {
    this._bindType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindTypeInput() {
    return this._bindType;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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
}

export class InterfaceVeNptv6DomainListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeNptv6DomainListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeNptv6DomainListStructOutputReference {
    return new InterfaceVeNptv6DomainListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeNptv6 {
  /**
  * domain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#domain_list InterfaceVe#domain_list}
  */
  readonly domainList?: InterfaceVeNptv6DomainListStruct[] | cdktf.IResolvable;
}

export function interfaceVeNptv6ToTerraform(struct?: InterfaceVeNptv6OutputReference | InterfaceVeNptv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_list: cdktf.listMapper(interfaceVeNptv6DomainListStructToTerraform, true)(struct!.domainList),
  }
}


export function interfaceVeNptv6ToHclTerraform(struct?: InterfaceVeNptv6OutputReference | InterfaceVeNptv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_list: {
      value: cdktf.listMapperHcl(interfaceVeNptv6DomainListStructToHclTerraform, true)(struct!.domainList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeNptv6DomainListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeNptv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeNptv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainList = this._domainList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeNptv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainList.internalValue = value.domainList;
    }
  }

  // domain_list - computed: false, optional: true, required: false
  private _domainList = new InterfaceVeNptv6DomainListStructList(this, "domain_list", false);
  public get domainList() {
    return this._domainList;
  }
  public putDomainList(value: InterfaceVeNptv6DomainListStruct[] | cdktf.IResolvable) {
    this._domainList.internalValue = value;
  }
  public resetDomainList() {
    this._domainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListInput() {
    return this._domainList.internalValue;
  }
}
export interface InterfaceVeSamplingEnable {
  /**
  * 'all': all; 'num_pkts': Input packets; 'num_total_bytes': Input bytes; 'num_unicast_pkts': Received unicasts; 'num_broadcast_pkts': Received broadcasts; 'num_multicast_pkts': Received multicasts; 'num_tx_pkts': Transmitted packets; 'num_total_tx_bytes': Transmitted bytes; 'num_unicast_tx_pkts': Transmitted unicasts; 'num_broadcast_tx_pkts': Transmitted broadcasts; 'num_multicast_tx_pkts': Transmitted multicasts; 'rate_pkt_sent': Packet sent rate packets/sec; 'rate_byte_sent': Byte sent rate bits/sec; 'rate_pkt_rcvd': Packet received rate packets/sec; 'rate_byte_rcvd': Byte received rate bits/sec; 'load_interval': Load Interval;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#counters1 InterfaceVe#counters1}
  */
  readonly counters1?: string;
}

export function interfaceVeSamplingEnableToTerraform(struct?: InterfaceVeSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function interfaceVeSamplingEnableToHclTerraform(struct?: InterfaceVeSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class InterfaceVeSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeSamplingEnableOutputReference {
    return new InterfaceVeSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve thunder_interface_ve}
*/
export class InterfaceVe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_ve";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceVe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceVe to import
  * @param importFromId The id of the existing InterfaceVe that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceVe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_ve", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve thunder_interface_ve} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceVeConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceVeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_ve',
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
    this._action = config.action;
    this._gamingProtocolCompliance = config.gamingProtocolCompliance;
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._l3VlanFwdDisable = config.l3VlanFwdDisable;
    this._mtu = config.mtu;
    this._name = config.name;
    this._pingSweepDetection = config.pingSweepDetection;
    this._portScanDetection = config.portScanDetection;
    this._trapSource = config.trapSource;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._accessList.internalValue = config.accessList;
    this._bfd.internalValue = config.bfd;
    this._ddos.internalValue = config.ddos;
    this._icmpRateLimit.internalValue = config.icmpRateLimit;
    this._icmpv6RateLimit.internalValue = config.icmpv6RateLimit;
    this._ip.internalValue = config.ip;
    this._ipv6.internalValue = config.ipv6;
    this._isis.internalValue = config.isis;
    this._lw4O6.internalValue = config.lw4O6;
    this._map.internalValue = config.map;
    this._nptv6.internalValue = config.nptv6;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // gaming_protocol_compliance - computed: false, optional: true, required: false
  private _gamingProtocolCompliance?: number; 
  public get gamingProtocolCompliance() {
    return this.getNumberAttribute('gaming_protocol_compliance');
  }
  public set gamingProtocolCompliance(value: number) {
    this._gamingProtocolCompliance = value;
  }
  public resetGamingProtocolCompliance() {
    this._gamingProtocolCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gamingProtocolComplianceInput() {
    return this._gamingProtocolCompliance;
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
  private _ifnum?: number; 
  public get ifnum() {
    return this.getNumberAttribute('ifnum');
  }
  public set ifnum(value: number) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // l3_vlan_fwd_disable - computed: false, optional: true, required: false
  private _l3VlanFwdDisable?: number; 
  public get l3VlanFwdDisable() {
    return this.getNumberAttribute('l3_vlan_fwd_disable');
  }
  public set l3VlanFwdDisable(value: number) {
    this._l3VlanFwdDisable = value;
  }
  public resetL3VlanFwdDisable() {
    this._l3VlanFwdDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3VlanFwdDisableInput() {
    return this._l3VlanFwdDisable;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ping_sweep_detection - computed: false, optional: true, required: false
  private _pingSweepDetection?: string; 
  public get pingSweepDetection() {
    return this.getStringAttribute('ping_sweep_detection');
  }
  public set pingSweepDetection(value: string) {
    this._pingSweepDetection = value;
  }
  public resetPingSweepDetection() {
    this._pingSweepDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingSweepDetectionInput() {
    return this._pingSweepDetection;
  }

  // port_scan_detection - computed: false, optional: true, required: false
  private _portScanDetection?: string; 
  public get portScanDetection() {
    return this.getStringAttribute('port_scan_detection');
  }
  public set portScanDetection(value: string) {
    this._portScanDetection = value;
  }
  public resetPortScanDetection() {
    this._portScanDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScanDetectionInput() {
    return this._portScanDetection;
  }

  // trap_source - computed: false, optional: true, required: false
  private _trapSource?: number; 
  public get trapSource() {
    return this.getNumberAttribute('trap_source');
  }
  public set trapSource(value: number) {
    this._trapSource = value;
  }
  public resetTrapSource() {
    this._trapSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapSourceInput() {
    return this._trapSource;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // access_list - computed: false, optional: true, required: false
  private _accessList = new InterfaceVeAccessListStructOutputReference(this, "access_list");
  public get accessList() {
    return this._accessList;
  }
  public putAccessList(value: InterfaceVeAccessListStruct) {
    this._accessList.internalValue = value;
  }
  public resetAccessList() {
    this._accessList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList.internalValue;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new InterfaceVeBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: InterfaceVeBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // ddos - computed: false, optional: true, required: false
  private _ddos = new InterfaceVeDdosOutputReference(this, "ddos");
  public get ddos() {
    return this._ddos;
  }
  public putDdos(value: InterfaceVeDdos) {
    this._ddos.internalValue = value;
  }
  public resetDdos() {
    this._ddos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosInput() {
    return this._ddos.internalValue;
  }

  // icmp_rate_limit - computed: false, optional: true, required: false
  private _icmpRateLimit = new InterfaceVeIcmpRateLimitOutputReference(this, "icmp_rate_limit");
  public get icmpRateLimit() {
    return this._icmpRateLimit;
  }
  public putIcmpRateLimit(value: InterfaceVeIcmpRateLimit) {
    this._icmpRateLimit.internalValue = value;
  }
  public resetIcmpRateLimit() {
    this._icmpRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateLimitInput() {
    return this._icmpRateLimit.internalValue;
  }

  // icmpv6_rate_limit - computed: false, optional: true, required: false
  private _icmpv6RateLimit = new InterfaceVeIcmpv6RateLimitOutputReference(this, "icmpv6_rate_limit");
  public get icmpv6RateLimit() {
    return this._icmpv6RateLimit;
  }
  public putIcmpv6RateLimit(value: InterfaceVeIcmpv6RateLimit) {
    this._icmpv6RateLimit.internalValue = value;
  }
  public resetIcmpv6RateLimit() {
    this._icmpv6RateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6RateLimitInput() {
    return this._icmpv6RateLimit.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new InterfaceVeIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: InterfaceVeIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new InterfaceVeIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: InterfaceVeIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // isis - computed: false, optional: true, required: false
  private _isis = new InterfaceVeIsisOutputReference(this, "isis");
  public get isis() {
    return this._isis;
  }
  public putIsis(value: InterfaceVeIsis) {
    this._isis.internalValue = value;
  }
  public resetIsis() {
    this._isis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis.internalValue;
  }

  // lw_4o6 - computed: false, optional: true, required: false
  private _lw4O6 = new InterfaceVeLw4O6OutputReference(this, "lw_4o6");
  public get lw4O6() {
    return this._lw4O6;
  }
  public putLw4O6(value: InterfaceVeLw4O6) {
    this._lw4O6.internalValue = value;
  }
  public resetLw4O6() {
    this._lw4O6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lw4O6Input() {
    return this._lw4O6.internalValue;
  }

  // map - computed: false, optional: true, required: false
  private _map = new InterfaceVeMapOutputReference(this, "map");
  public get map() {
    return this._map;
  }
  public putMap(value: InterfaceVeMap) {
    this._map.internalValue = value;
  }
  public resetMap() {
    this._map.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map.internalValue;
  }

  // nptv6 - computed: false, optional: true, required: false
  private _nptv6 = new InterfaceVeNptv6OutputReference(this, "nptv6");
  public get nptv6() {
    return this._nptv6;
  }
  public putNptv6(value: InterfaceVeNptv6) {
    this._nptv6.internalValue = value;
  }
  public resetNptv6() {
    this._nptv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nptv6Input() {
    return this._nptv6.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new InterfaceVeSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: InterfaceVeSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      gaming_protocol_compliance: cdktf.numberToTerraform(this._gamingProtocolCompliance),
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.numberToTerraform(this._ifnum),
      l3_vlan_fwd_disable: cdktf.numberToTerraform(this._l3VlanFwdDisable),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      ping_sweep_detection: cdktf.stringToTerraform(this._pingSweepDetection),
      port_scan_detection: cdktf.stringToTerraform(this._portScanDetection),
      trap_source: cdktf.numberToTerraform(this._trapSource),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      access_list: interfaceVeAccessListStructToTerraform(this._accessList.internalValue),
      bfd: interfaceVeBfdToTerraform(this._bfd.internalValue),
      ddos: interfaceVeDdosToTerraform(this._ddos.internalValue),
      icmp_rate_limit: interfaceVeIcmpRateLimitToTerraform(this._icmpRateLimit.internalValue),
      icmpv6_rate_limit: interfaceVeIcmpv6RateLimitToTerraform(this._icmpv6RateLimit.internalValue),
      ip: interfaceVeIpToTerraform(this._ip.internalValue),
      ipv6: interfaceVeIpv6ToTerraform(this._ipv6.internalValue),
      isis: interfaceVeIsisToTerraform(this._isis.internalValue),
      lw_4o6: interfaceVeLw4O6ToTerraform(this._lw4O6.internalValue),
      map: interfaceVeMapToTerraform(this._map.internalValue),
      nptv6: interfaceVeNptv6ToTerraform(this._nptv6.internalValue),
      sampling_enable: cdktf.listMapper(interfaceVeSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gaming_protocol_compliance: {
        value: cdktf.numberToHclTerraform(this._gamingProtocolCompliance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ifnum: {
        value: cdktf.numberToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3_vlan_fwd_disable: {
        value: cdktf.numberToHclTerraform(this._l3VlanFwdDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ping_sweep_detection: {
        value: cdktf.stringToHclTerraform(this._pingSweepDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_scan_detection: {
        value: cdktf.stringToHclTerraform(this._portScanDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_source: {
        value: cdktf.numberToHclTerraform(this._trapSource),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_list: {
        value: interfaceVeAccessListStructToHclTerraform(this._accessList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeAccessListStructList",
      },
      bfd: {
        value: interfaceVeBfdToHclTerraform(this._bfd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeBfdList",
      },
      ddos: {
        value: interfaceVeDdosToHclTerraform(this._ddos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeDdosList",
      },
      icmp_rate_limit: {
        value: interfaceVeIcmpRateLimitToHclTerraform(this._icmpRateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIcmpRateLimitList",
      },
      icmpv6_rate_limit: {
        value: interfaceVeIcmpv6RateLimitToHclTerraform(this._icmpv6RateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIcmpv6RateLimitList",
      },
      ip: {
        value: interfaceVeIpToHclTerraform(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIpList",
      },
      ipv6: {
        value: interfaceVeIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIpv6List",
      },
      isis: {
        value: interfaceVeIsisToHclTerraform(this._isis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIsisList",
      },
      lw_4o6: {
        value: interfaceVeLw4O6ToHclTerraform(this._lw4O6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeLw4O6List",
      },
      map: {
        value: interfaceVeMapToHclTerraform(this._map.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeMapList",
      },
      nptv6: {
        value: interfaceVeNptv6ToHclTerraform(this._nptv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeNptv6List",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(interfaceVeSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
