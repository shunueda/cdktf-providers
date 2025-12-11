// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CtsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Local authorization list to use for CTS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#authorization_list Cts#authorization_list}
  */
  readonly authorizationList?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#delete_mode Cts#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#device Cts#device}
  */
  readonly device?: string;
  /**
  * Enable Role-based Access Control enforcement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#role_based_enforcement Cts#role_based_enforcement}
  */
  readonly roleBasedEnforcement?: boolean | cdktf.IResolvable;
  /**
  * Configure sgacl logging interval
  *   - Range: `5`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#role_based_enforcement_logging_interval Cts#role_based_enforcement_logging_interval}
  */
  readonly roleBasedEnforcementLoggingInterval?: number;
  /**
  * VLANs on which Role-based ACLs are enforced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#role_based_enforcement_vlan_lists Cts#role_based_enforcement_vlan_lists}
  */
  readonly roleBasedEnforcementVlanLists?: number[];
  /**
  * Role-based Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#role_based_permissions_default_acl_name Cts#role_based_permissions_default_acl_name}
  */
  readonly roleBasedPermissionsDefaultAclName?: string[];
  /**
  * Local device security group
  *   - Range: `2`-`65519`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#sgt Cts#sgt}
  */
  readonly sgt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#sxp_connection_peers_ipv4 Cts#sxp_connection_peers_ipv4}
  */
  readonly sxpConnectionPeersIpv4?: CtsSxpConnectionPeersIpv4[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#sxp_connection_peers_ipv4_vrf Cts#sxp_connection_peers_ipv4_vrf}
  */
  readonly sxpConnectionPeersIpv4Vrf?: CtsSxpConnectionPeersIpv4Vrf[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#sxp_default_password Cts#sxp_default_password}
  */
  readonly sxpDefaultPassword?: string;
  /**
  * 
  *   - Choices: `0`, `6`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#sxp_default_password_type Cts#sxp_default_password_type}
  */
  readonly sxpDefaultPasswordType?: string;
  /**
  * Enable CTS SXP support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#sxp_enable Cts#sxp_enable}
  */
  readonly sxpEnable?: boolean | cdktf.IResolvable;
  /**
  * Enter maximum allowed Hold Time in seconds
  *   - Range: `1`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#sxp_listener_hold_max_time Cts#sxp_listener_hold_max_time}
  */
  readonly sxpListenerHoldMaxTime?: number;
  /**
  * Enter minimum allowed Hold Time in seconds
  *   - Range: `1`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#sxp_listener_hold_min_time Cts#sxp_listener_hold_min_time}
  */
  readonly sxpListenerHoldMinTime?: number;
  /**
  * Enter retry period value for sxp connection in seconds
  *   - Range: `0`-`64000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#sxp_retry_period Cts#sxp_retry_period}
  */
  readonly sxpRetryPeriod?: number;
  /**
  * Enter speaker hold-time value in seconds
  *   - Range: `1`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#sxp_speaker_hold_time Cts#sxp_speaker_hold_time}
  */
  readonly sxpSpeakerHoldTime?: number;
}
export interface CtsSxpConnectionPeersIpv4 {
  /**
  * Mode of connection
  *   - Choices: `local`, `peer`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#connection_mode Cts#connection_mode}
  */
  readonly connectionMode?: string;
  /**
  * Minimum hold time period
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#hold_time Cts#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Enter SXP Peer IP address (IPv4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#ip Cts#ip}
  */
  readonly ip: string;
  /**
  * Maximum hold time period
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#max_time Cts#max_time}
  */
  readonly maxTime?: number;
  /**
  * Role of a device speaker/listener/both
  *   - Choices: `both`, `listener`, `speaker`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#option Cts#option}
  */
  readonly option?: string;
  /**
  * Password type
  *   - Choices: `default`, `key-chain`, `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#password Cts#password}
  */
  readonly password?: string;
  /**
  * Enter SXP Source IP address (IPv4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#source_ip Cts#source_ip}
  */
  readonly sourceIp?: string;
}

export function ctsSxpConnectionPeersIpv4ToTerraform(struct?: CtsSxpConnectionPeersIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_mode: cdktf.stringToTerraform(struct!.connectionMode),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    ip: cdktf.stringToTerraform(struct!.ip),
    max_time: cdktf.numberToTerraform(struct!.maxTime),
    option: cdktf.stringToTerraform(struct!.option),
    password: cdktf.stringToTerraform(struct!.password),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
  }
}


export function ctsSxpConnectionPeersIpv4ToHclTerraform(struct?: CtsSxpConnectionPeersIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_mode: {
      value: cdktf.stringToHclTerraform(struct!.connectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hold_time: {
      value: cdktf.numberToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_time: {
      value: cdktf.numberToHclTerraform(struct!.maxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
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
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CtsSxpConnectionPeersIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CtsSxpConnectionPeersIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionMode = this._connectionMode;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._maxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTime = this._maxTime;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CtsSxpConnectionPeersIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionMode = undefined;
      this._holdTime = undefined;
      this._ip = undefined;
      this._maxTime = undefined;
      this._option = undefined;
      this._password = undefined;
      this._sourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionMode = value.connectionMode;
      this._holdTime = value.holdTime;
      this._ip = value.ip;
      this._maxTime = value.maxTime;
      this._option = value.option;
      this._password = value.password;
      this._sourceIp = value.sourceIp;
    }
  }

  // connection_mode - computed: false, optional: true, required: false
  private _connectionMode?: string; 
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }
  public set connectionMode(value: string) {
    this._connectionMode = value;
  }
  public resetConnectionMode() {
    this._connectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionModeInput() {
    return this._connectionMode;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // max_time - computed: false, optional: true, required: false
  private _maxTime?: number; 
  public get maxTime() {
    return this.getNumberAttribute('max_time');
  }
  public set maxTime(value: number) {
    this._maxTime = value;
  }
  public resetMaxTime() {
    this._maxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeInput() {
    return this._maxTime;
  }

  // option - computed: false, optional: true, required: false
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
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

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }
}

export class CtsSxpConnectionPeersIpv4List extends cdktf.ComplexList {
  public internalValue? : CtsSxpConnectionPeersIpv4[] | cdktf.IResolvable

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
  public get(index: number): CtsSxpConnectionPeersIpv4OutputReference {
    return new CtsSxpConnectionPeersIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CtsSxpConnectionPeersIpv4Vrf {
  /**
  * Mode of connection
  *   - Choices: `local`, `peer`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#connection_mode Cts#connection_mode}
  */
  readonly connectionMode?: string;
  /**
  * Minimum hold time period
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#hold_time Cts#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Enter SXP Peer IP address (IPv4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#ip Cts#ip}
  */
  readonly ip: string;
  /**
  * Maximum hold time period
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#max_time Cts#max_time}
  */
  readonly maxTime?: number;
  /**
  * Role of a device speaker/listener/both
  *   - Choices: `both`, `listener`, `speaker`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#option Cts#option}
  */
  readonly option?: string;
  /**
  * Password type
  *   - Choices: `default`, `key-chain`, `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#password Cts#password}
  */
  readonly password?: string;
  /**
  * Enter SXP Source IP address (IPv4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#source_ip Cts#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * VRF details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#vrf Cts#vrf}
  */
  readonly vrf: string;
}

export function ctsSxpConnectionPeersIpv4VrfToTerraform(struct?: CtsSxpConnectionPeersIpv4Vrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_mode: cdktf.stringToTerraform(struct!.connectionMode),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    ip: cdktf.stringToTerraform(struct!.ip),
    max_time: cdktf.numberToTerraform(struct!.maxTime),
    option: cdktf.stringToTerraform(struct!.option),
    password: cdktf.stringToTerraform(struct!.password),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function ctsSxpConnectionPeersIpv4VrfToHclTerraform(struct?: CtsSxpConnectionPeersIpv4Vrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_mode: {
      value: cdktf.stringToHclTerraform(struct!.connectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hold_time: {
      value: cdktf.numberToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_time: {
      value: cdktf.numberToHclTerraform(struct!.maxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
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
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CtsSxpConnectionPeersIpv4VrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CtsSxpConnectionPeersIpv4Vrf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionMode = this._connectionMode;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._maxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTime = this._maxTime;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CtsSxpConnectionPeersIpv4Vrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionMode = undefined;
      this._holdTime = undefined;
      this._ip = undefined;
      this._maxTime = undefined;
      this._option = undefined;
      this._password = undefined;
      this._sourceIp = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionMode = value.connectionMode;
      this._holdTime = value.holdTime;
      this._ip = value.ip;
      this._maxTime = value.maxTime;
      this._option = value.option;
      this._password = value.password;
      this._sourceIp = value.sourceIp;
      this._vrf = value.vrf;
    }
  }

  // connection_mode - computed: false, optional: true, required: false
  private _connectionMode?: string; 
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }
  public set connectionMode(value: string) {
    this._connectionMode = value;
  }
  public resetConnectionMode() {
    this._connectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionModeInput() {
    return this._connectionMode;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // max_time - computed: false, optional: true, required: false
  private _maxTime?: number; 
  public get maxTime() {
    return this.getNumberAttribute('max_time');
  }
  public set maxTime(value: number) {
    this._maxTime = value;
  }
  public resetMaxTime() {
    this._maxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeInput() {
    return this._maxTime;
  }

  // option - computed: false, optional: true, required: false
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
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

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class CtsSxpConnectionPeersIpv4VrfList extends cdktf.ComplexList {
  public internalValue? : CtsSxpConnectionPeersIpv4Vrf[] | cdktf.IResolvable

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
  public get(index: number): CtsSxpConnectionPeersIpv4VrfOutputReference {
    return new CtsSxpConnectionPeersIpv4VrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts iosxe_cts}
*/
export class Cts extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_cts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cts to import
  * @param importFromId The id of the existing Cts that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_cts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/cts iosxe_cts} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CtsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CtsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_cts',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizationList = config.authorizationList;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._roleBasedEnforcement = config.roleBasedEnforcement;
    this._roleBasedEnforcementLoggingInterval = config.roleBasedEnforcementLoggingInterval;
    this._roleBasedEnforcementVlanLists = config.roleBasedEnforcementVlanLists;
    this._roleBasedPermissionsDefaultAclName = config.roleBasedPermissionsDefaultAclName;
    this._sgt = config.sgt;
    this._sxpConnectionPeersIpv4.internalValue = config.sxpConnectionPeersIpv4;
    this._sxpConnectionPeersIpv4Vrf.internalValue = config.sxpConnectionPeersIpv4Vrf;
    this._sxpDefaultPassword = config.sxpDefaultPassword;
    this._sxpDefaultPasswordType = config.sxpDefaultPasswordType;
    this._sxpEnable = config.sxpEnable;
    this._sxpListenerHoldMaxTime = config.sxpListenerHoldMaxTime;
    this._sxpListenerHoldMinTime = config.sxpListenerHoldMinTime;
    this._sxpRetryPeriod = config.sxpRetryPeriod;
    this._sxpSpeakerHoldTime = config.sxpSpeakerHoldTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_list - computed: false, optional: true, required: false
  private _authorizationList?: string; 
  public get authorizationList() {
    return this.getStringAttribute('authorization_list');
  }
  public set authorizationList(value: string) {
    this._authorizationList = value;
  }
  public resetAuthorizationList() {
    this._authorizationList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationListInput() {
    return this._authorizationList;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_based_enforcement - computed: false, optional: true, required: false
  private _roleBasedEnforcement?: boolean | cdktf.IResolvable; 
  public get roleBasedEnforcement() {
    return this.getBooleanAttribute('role_based_enforcement');
  }
  public set roleBasedEnforcement(value: boolean | cdktf.IResolvable) {
    this._roleBasedEnforcement = value;
  }
  public resetRoleBasedEnforcement() {
    this._roleBasedEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBasedEnforcementInput() {
    return this._roleBasedEnforcement;
  }

  // role_based_enforcement_logging_interval - computed: false, optional: true, required: false
  private _roleBasedEnforcementLoggingInterval?: number; 
  public get roleBasedEnforcementLoggingInterval() {
    return this.getNumberAttribute('role_based_enforcement_logging_interval');
  }
  public set roleBasedEnforcementLoggingInterval(value: number) {
    this._roleBasedEnforcementLoggingInterval = value;
  }
  public resetRoleBasedEnforcementLoggingInterval() {
    this._roleBasedEnforcementLoggingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBasedEnforcementLoggingIntervalInput() {
    return this._roleBasedEnforcementLoggingInterval;
  }

  // role_based_enforcement_vlan_lists - computed: false, optional: true, required: false
  private _roleBasedEnforcementVlanLists?: number[]; 
  public get roleBasedEnforcementVlanLists() {
    return this.getNumberListAttribute('role_based_enforcement_vlan_lists');
  }
  public set roleBasedEnforcementVlanLists(value: number[]) {
    this._roleBasedEnforcementVlanLists = value;
  }
  public resetRoleBasedEnforcementVlanLists() {
    this._roleBasedEnforcementVlanLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBasedEnforcementVlanListsInput() {
    return this._roleBasedEnforcementVlanLists;
  }

  // role_based_permissions_default_acl_name - computed: false, optional: true, required: false
  private _roleBasedPermissionsDefaultAclName?: string[]; 
  public get roleBasedPermissionsDefaultAclName() {
    return this.getListAttribute('role_based_permissions_default_acl_name');
  }
  public set roleBasedPermissionsDefaultAclName(value: string[]) {
    this._roleBasedPermissionsDefaultAclName = value;
  }
  public resetRoleBasedPermissionsDefaultAclName() {
    this._roleBasedPermissionsDefaultAclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBasedPermissionsDefaultAclNameInput() {
    return this._roleBasedPermissionsDefaultAclName;
  }

  // sgt - computed: false, optional: true, required: false
  private _sgt?: number; 
  public get sgt() {
    return this.getNumberAttribute('sgt');
  }
  public set sgt(value: number) {
    this._sgt = value;
  }
  public resetSgt() {
    this._sgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtInput() {
    return this._sgt;
  }

  // sxp_connection_peers_ipv4 - computed: false, optional: true, required: false
  private _sxpConnectionPeersIpv4 = new CtsSxpConnectionPeersIpv4List(this, "sxp_connection_peers_ipv4", false);
  public get sxpConnectionPeersIpv4() {
    return this._sxpConnectionPeersIpv4;
  }
  public putSxpConnectionPeersIpv4(value: CtsSxpConnectionPeersIpv4[] | cdktf.IResolvable) {
    this._sxpConnectionPeersIpv4.internalValue = value;
  }
  public resetSxpConnectionPeersIpv4() {
    this._sxpConnectionPeersIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpConnectionPeersIpv4Input() {
    return this._sxpConnectionPeersIpv4.internalValue;
  }

  // sxp_connection_peers_ipv4_vrf - computed: false, optional: true, required: false
  private _sxpConnectionPeersIpv4Vrf = new CtsSxpConnectionPeersIpv4VrfList(this, "sxp_connection_peers_ipv4_vrf", false);
  public get sxpConnectionPeersIpv4Vrf() {
    return this._sxpConnectionPeersIpv4Vrf;
  }
  public putSxpConnectionPeersIpv4Vrf(value: CtsSxpConnectionPeersIpv4Vrf[] | cdktf.IResolvable) {
    this._sxpConnectionPeersIpv4Vrf.internalValue = value;
  }
  public resetSxpConnectionPeersIpv4Vrf() {
    this._sxpConnectionPeersIpv4Vrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpConnectionPeersIpv4VrfInput() {
    return this._sxpConnectionPeersIpv4Vrf.internalValue;
  }

  // sxp_default_password - computed: false, optional: true, required: false
  private _sxpDefaultPassword?: string; 
  public get sxpDefaultPassword() {
    return this.getStringAttribute('sxp_default_password');
  }
  public set sxpDefaultPassword(value: string) {
    this._sxpDefaultPassword = value;
  }
  public resetSxpDefaultPassword() {
    this._sxpDefaultPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpDefaultPasswordInput() {
    return this._sxpDefaultPassword;
  }

  // sxp_default_password_type - computed: false, optional: true, required: false
  private _sxpDefaultPasswordType?: string; 
  public get sxpDefaultPasswordType() {
    return this.getStringAttribute('sxp_default_password_type');
  }
  public set sxpDefaultPasswordType(value: string) {
    this._sxpDefaultPasswordType = value;
  }
  public resetSxpDefaultPasswordType() {
    this._sxpDefaultPasswordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpDefaultPasswordTypeInput() {
    return this._sxpDefaultPasswordType;
  }

  // sxp_enable - computed: false, optional: true, required: false
  private _sxpEnable?: boolean | cdktf.IResolvable; 
  public get sxpEnable() {
    return this.getBooleanAttribute('sxp_enable');
  }
  public set sxpEnable(value: boolean | cdktf.IResolvable) {
    this._sxpEnable = value;
  }
  public resetSxpEnable() {
    this._sxpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpEnableInput() {
    return this._sxpEnable;
  }

  // sxp_listener_hold_max_time - computed: false, optional: true, required: false
  private _sxpListenerHoldMaxTime?: number; 
  public get sxpListenerHoldMaxTime() {
    return this.getNumberAttribute('sxp_listener_hold_max_time');
  }
  public set sxpListenerHoldMaxTime(value: number) {
    this._sxpListenerHoldMaxTime = value;
  }
  public resetSxpListenerHoldMaxTime() {
    this._sxpListenerHoldMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpListenerHoldMaxTimeInput() {
    return this._sxpListenerHoldMaxTime;
  }

  // sxp_listener_hold_min_time - computed: false, optional: true, required: false
  private _sxpListenerHoldMinTime?: number; 
  public get sxpListenerHoldMinTime() {
    return this.getNumberAttribute('sxp_listener_hold_min_time');
  }
  public set sxpListenerHoldMinTime(value: number) {
    this._sxpListenerHoldMinTime = value;
  }
  public resetSxpListenerHoldMinTime() {
    this._sxpListenerHoldMinTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpListenerHoldMinTimeInput() {
    return this._sxpListenerHoldMinTime;
  }

  // sxp_retry_period - computed: false, optional: true, required: false
  private _sxpRetryPeriod?: number; 
  public get sxpRetryPeriod() {
    return this.getNumberAttribute('sxp_retry_period');
  }
  public set sxpRetryPeriod(value: number) {
    this._sxpRetryPeriod = value;
  }
  public resetSxpRetryPeriod() {
    this._sxpRetryPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpRetryPeriodInput() {
    return this._sxpRetryPeriod;
  }

  // sxp_speaker_hold_time - computed: false, optional: true, required: false
  private _sxpSpeakerHoldTime?: number; 
  public get sxpSpeakerHoldTime() {
    return this.getNumberAttribute('sxp_speaker_hold_time');
  }
  public set sxpSpeakerHoldTime(value: number) {
    this._sxpSpeakerHoldTime = value;
  }
  public resetSxpSpeakerHoldTime() {
    this._sxpSpeakerHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sxpSpeakerHoldTimeInput() {
    return this._sxpSpeakerHoldTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_list: cdktf.stringToTerraform(this._authorizationList),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      role_based_enforcement: cdktf.booleanToTerraform(this._roleBasedEnforcement),
      role_based_enforcement_logging_interval: cdktf.numberToTerraform(this._roleBasedEnforcementLoggingInterval),
      role_based_enforcement_vlan_lists: cdktf.listMapper(cdktf.numberToTerraform, false)(this._roleBasedEnforcementVlanLists),
      role_based_permissions_default_acl_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleBasedPermissionsDefaultAclName),
      sgt: cdktf.numberToTerraform(this._sgt),
      sxp_connection_peers_ipv4: cdktf.listMapper(ctsSxpConnectionPeersIpv4ToTerraform, false)(this._sxpConnectionPeersIpv4.internalValue),
      sxp_connection_peers_ipv4_vrf: cdktf.listMapper(ctsSxpConnectionPeersIpv4VrfToTerraform, false)(this._sxpConnectionPeersIpv4Vrf.internalValue),
      sxp_default_password: cdktf.stringToTerraform(this._sxpDefaultPassword),
      sxp_default_password_type: cdktf.stringToTerraform(this._sxpDefaultPasswordType),
      sxp_enable: cdktf.booleanToTerraform(this._sxpEnable),
      sxp_listener_hold_max_time: cdktf.numberToTerraform(this._sxpListenerHoldMaxTime),
      sxp_listener_hold_min_time: cdktf.numberToTerraform(this._sxpListenerHoldMinTime),
      sxp_retry_period: cdktf.numberToTerraform(this._sxpRetryPeriod),
      sxp_speaker_hold_time: cdktf.numberToTerraform(this._sxpSpeakerHoldTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_list: {
        value: cdktf.stringToHclTerraform(this._authorizationList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_based_enforcement: {
        value: cdktf.booleanToHclTerraform(this._roleBasedEnforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role_based_enforcement_logging_interval: {
        value: cdktf.numberToHclTerraform(this._roleBasedEnforcementLoggingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_based_enforcement_vlan_lists: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._roleBasedEnforcementVlanLists),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      role_based_permissions_default_acl_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleBasedPermissionsDefaultAclName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sgt: {
        value: cdktf.numberToHclTerraform(this._sgt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sxp_connection_peers_ipv4: {
        value: cdktf.listMapperHcl(ctsSxpConnectionPeersIpv4ToHclTerraform, false)(this._sxpConnectionPeersIpv4.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CtsSxpConnectionPeersIpv4List",
      },
      sxp_connection_peers_ipv4_vrf: {
        value: cdktf.listMapperHcl(ctsSxpConnectionPeersIpv4VrfToHclTerraform, false)(this._sxpConnectionPeersIpv4Vrf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CtsSxpConnectionPeersIpv4VrfList",
      },
      sxp_default_password: {
        value: cdktf.stringToHclTerraform(this._sxpDefaultPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sxp_default_password_type: {
        value: cdktf.stringToHclTerraform(this._sxpDefaultPasswordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sxp_enable: {
        value: cdktf.booleanToHclTerraform(this._sxpEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sxp_listener_hold_max_time: {
        value: cdktf.numberToHclTerraform(this._sxpListenerHoldMaxTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sxp_listener_hold_min_time: {
        value: cdktf.numberToHclTerraform(this._sxpListenerHoldMinTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sxp_retry_period: {
        value: cdktf.numberToHclTerraform(this._sxpRetryPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sxp_speaker_hold_time: {
        value: cdktf.numberToHclTerraform(this._sxpSpeakerHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
