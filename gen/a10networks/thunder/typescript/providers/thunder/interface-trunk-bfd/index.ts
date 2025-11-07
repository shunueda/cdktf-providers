// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceTrunkBfdAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Demand mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#demand InterfaceTrunkBfdA#demand}
  */
  readonly demand?: number;
  /**
  * Enable BFD Echo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#echo InterfaceTrunkBfdA#echo}
  */
  readonly echo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#id InterfaceTrunkBfdA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ifnum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#ifnum InterfaceTrunkBfdA#ifnum}
  */
  readonly ifnum: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#uuid InterfaceTrunkBfdA#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#authentication InterfaceTrunkBfdA#authentication}
  */
  readonly authentication?: InterfaceTrunkBfdAuthenticationA;
  /**
  * interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#interval_cfg InterfaceTrunkBfdA#interval_cfg}
  */
  readonly intervalCfg?: InterfaceTrunkBfdIntervalCfgA;
  /**
  * per_member_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#per_member_port InterfaceTrunkBfdA#per_member_port}
  */
  readonly perMemberPort?: InterfaceTrunkBfdPerMemberPortA;
}
export interface InterfaceTrunkBfdAuthenticationA {
  /**
  * Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#key_id InterfaceTrunkBfdA#key_id}
  */
  readonly keyId?: number;
  /**
  * 'md5': Keyed MD5; 'meticulous-md5': Meticulous Keyed MD5; 'meticulous-sha1': Meticulous Keyed SHA1; 'sha1': Keyed SHA1; 'simple': Simple Password;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#method InterfaceTrunkBfdA#method}
  */
  readonly method?: string;
  /**
  * Key String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#password InterfaceTrunkBfdA#password}
  */
  readonly password?: string;
}

export function interfaceTrunkBfdAuthenticationAToTerraform(struct?: InterfaceTrunkBfdAuthenticationAOutputReference | InterfaceTrunkBfdAuthenticationA): any {
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


export function interfaceTrunkBfdAuthenticationAToHclTerraform(struct?: InterfaceTrunkBfdAuthenticationAOutputReference | InterfaceTrunkBfdAuthenticationA): any {
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

export class InterfaceTrunkBfdAuthenticationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkBfdAuthenticationA | undefined {
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

  public set internalValue(value: InterfaceTrunkBfdAuthenticationA | undefined) {
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
export interface InterfaceTrunkBfdIntervalCfgA {
  /**
  * Transmit interval between BFD packets (Milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#interval InterfaceTrunkBfdA#interval}
  */
  readonly interval?: number;
  /**
  * Minimum receive interval capability (Milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#min_rx InterfaceTrunkBfdA#min_rx}
  */
  readonly minRx?: number;
  /**
  * Multiplier value used to compute holddown (value used to multiply the interval)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#multiplier InterfaceTrunkBfdA#multiplier}
  */
  readonly multiplier?: number;
}

export function interfaceTrunkBfdIntervalCfgAToTerraform(struct?: InterfaceTrunkBfdIntervalCfgAOutputReference | InterfaceTrunkBfdIntervalCfgA): any {
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


export function interfaceTrunkBfdIntervalCfgAToHclTerraform(struct?: InterfaceTrunkBfdIntervalCfgAOutputReference | InterfaceTrunkBfdIntervalCfgA): any {
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

export class InterfaceTrunkBfdIntervalCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkBfdIntervalCfgA | undefined {
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

  public set internalValue(value: InterfaceTrunkBfdIntervalCfgA | undefined) {
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
export interface InterfaceTrunkBfdPerMemberPortA {
  /**
  * IPv6 local-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#ipv6_local InterfaceTrunkBfdA#ipv6_local}
  */
  readonly ipv6Local?: string;
  /**
  * IPv6 neighbor-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#ipv6_nbr InterfaceTrunkBfdA#ipv6_nbr}
  */
  readonly ipv6Nbr?: string;
  /**
  * IPv4 local-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#local_address InterfaceTrunkBfdA#local_address}
  */
  readonly localAddress?: string;
  /**
  * IPv4 neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#neighbor_address InterfaceTrunkBfdA#neighbor_address}
  */
  readonly neighborAddress?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#uuid InterfaceTrunkBfdA#uuid}
  */
  readonly uuid?: string;
}

export function interfaceTrunkBfdPerMemberPortAToTerraform(struct?: InterfaceTrunkBfdPerMemberPortAOutputReference | InterfaceTrunkBfdPerMemberPortA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_local: cdktf.stringToTerraform(struct!.ipv6Local),
    ipv6_nbr: cdktf.stringToTerraform(struct!.ipv6Nbr),
    local_address: cdktf.stringToTerraform(struct!.localAddress),
    neighbor_address: cdktf.stringToTerraform(struct!.neighborAddress),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceTrunkBfdPerMemberPortAToHclTerraform(struct?: InterfaceTrunkBfdPerMemberPortAOutputReference | InterfaceTrunkBfdPerMemberPortA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_local: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Local),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_nbr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Nbr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_address: {
      value: cdktf.stringToHclTerraform(struct!.localAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_address: {
      value: cdktf.stringToHclTerraform(struct!.neighborAddress),
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

export class InterfaceTrunkBfdPerMemberPortAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkBfdPerMemberPortA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Local = this._ipv6Local;
    }
    if (this._ipv6Nbr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Nbr = this._ipv6Nbr;
    }
    if (this._localAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAddress = this._localAddress;
    }
    if (this._neighborAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborAddress = this._neighborAddress;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkBfdPerMemberPortA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Local = undefined;
      this._ipv6Nbr = undefined;
      this._localAddress = undefined;
      this._neighborAddress = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Local = value.ipv6Local;
      this._ipv6Nbr = value.ipv6Nbr;
      this._localAddress = value.localAddress;
      this._neighborAddress = value.neighborAddress;
      this._uuid = value.uuid;
    }
  }

  // ipv6_local - computed: false, optional: true, required: false
  private _ipv6Local?: string; 
  public get ipv6Local() {
    return this.getStringAttribute('ipv6_local');
  }
  public set ipv6Local(value: string) {
    this._ipv6Local = value;
  }
  public resetIpv6Local() {
    this._ipv6Local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LocalInput() {
    return this._ipv6Local;
  }

  // ipv6_nbr - computed: false, optional: true, required: false
  private _ipv6Nbr?: string; 
  public get ipv6Nbr() {
    return this.getStringAttribute('ipv6_nbr');
  }
  public set ipv6Nbr(value: string) {
    this._ipv6Nbr = value;
  }
  public resetIpv6Nbr() {
    this._ipv6Nbr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NbrInput() {
    return this._ipv6Nbr;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress?: string; 
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }
  public set localAddress(value: string) {
    this._localAddress = value;
  }
  public resetLocalAddress() {
    this._localAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
  }

  // neighbor_address - computed: false, optional: true, required: false
  private _neighborAddress?: string; 
  public get neighborAddress() {
    return this.getStringAttribute('neighbor_address');
  }
  public set neighborAddress(value: string) {
    this._neighborAddress = value;
  }
  public resetNeighborAddress() {
    this._neighborAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAddressInput() {
    return this._neighborAddress;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd thunder_interface_trunk_bfd}
*/
export class InterfaceTrunkBfdA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_trunk_bfd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceTrunkBfdA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceTrunkBfdA to import
  * @param importFromId The id of the existing InterfaceTrunkBfdA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceTrunkBfdA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_trunk_bfd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk_bfd thunder_interface_trunk_bfd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceTrunkBfdAConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceTrunkBfdAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_trunk_bfd',
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
    this._demand = config.demand;
    this._echo = config.echo;
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._uuid = config.uuid;
    this._authentication.internalValue = config.authentication;
    this._intervalCfg.internalValue = config.intervalCfg;
    this._perMemberPort.internalValue = config.perMemberPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _authentication = new InterfaceTrunkBfdAuthenticationAOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceTrunkBfdAuthenticationA) {
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
  private _intervalCfg = new InterfaceTrunkBfdIntervalCfgAOutputReference(this, "interval_cfg");
  public get intervalCfg() {
    return this._intervalCfg;
  }
  public putIntervalCfg(value: InterfaceTrunkBfdIntervalCfgA) {
    this._intervalCfg.internalValue = value;
  }
  public resetIntervalCfg() {
    this._intervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalCfgInput() {
    return this._intervalCfg.internalValue;
  }

  // per_member_port - computed: false, optional: true, required: false
  private _perMemberPort = new InterfaceTrunkBfdPerMemberPortAOutputReference(this, "per_member_port");
  public get perMemberPort() {
    return this._perMemberPort;
  }
  public putPerMemberPort(value: InterfaceTrunkBfdPerMemberPortA) {
    this._perMemberPort.internalValue = value;
  }
  public resetPerMemberPort() {
    this._perMemberPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perMemberPortInput() {
    return this._perMemberPort.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      demand: cdktf.numberToTerraform(this._demand),
      echo: cdktf.numberToTerraform(this._echo),
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.stringToTerraform(this._ifnum),
      uuid: cdktf.stringToTerraform(this._uuid),
      authentication: interfaceTrunkBfdAuthenticationAToTerraform(this._authentication.internalValue),
      interval_cfg: interfaceTrunkBfdIntervalCfgAToTerraform(this._intervalCfg.internalValue),
      per_member_port: interfaceTrunkBfdPerMemberPortAToTerraform(this._perMemberPort.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      demand: {
        value: cdktf.numberToHclTerraform(this._demand),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      echo: {
        value: cdktf.numberToHclTerraform(this._echo),
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
        value: cdktf.stringToHclTerraform(this._ifnum),
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
      authentication: {
        value: interfaceTrunkBfdAuthenticationAToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkBfdAuthenticationAList",
      },
      interval_cfg: {
        value: interfaceTrunkBfdIntervalCfgAToHclTerraform(this._intervalCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkBfdIntervalCfgAList",
      },
      per_member_port: {
        value: interfaceTrunkBfdPerMemberPortAToHclTerraform(this._perMemberPort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkBfdPerMemberPortAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
