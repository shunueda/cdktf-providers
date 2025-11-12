// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of SNMP Community configurations. Each community represents a group with specific security models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#snmp_community Snmp#snmp_community}
  */
  readonly snmpCommunity?: SnmpSnmpCommunity[] | cdktf.IResolvable;
  /**
  * Custom SNMP MIB entries for system information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#snmp_mib Snmp#snmp_mib}
  */
  readonly snmpMib?: SnmpSnmpMib;
  /**
  * List of SNMP Target configurations. Targets define where SNMP notifications are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#snmp_target Snmp#snmp_target}
  */
  readonly snmpTarget?: SnmpSnmpTarget[] | cdktf.IResolvable;
  /**
  * List of SNMP User configurations for SNMPv3. Due to API restrictions, passwords cannot be retrieved which leads to Terraform always detecting changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#snmp_user Snmp#snmp_user}
  */
  readonly snmpUser?: SnmpSnmpUser[] | cdktf.IResolvable;
  /**
  * State of the SNMP configuration. Valid options: `present`, `absent`. Default is `present`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#state Snmp#state}
  */
  readonly state?: string;
}
export interface SnmpSnmpCommunity {
  /**
  * Unique name for the SNMP community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#name Snmp#name}
  */
  readonly name: string;
  /**
  * List of security models for the community. Valid options: `v1`, `v2c`. Default is `["v1"]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#security_model Snmp#security_model}
  */
  readonly securityModel?: string[];
}

export function snmpSnmpCommunityToTerraform(struct?: SnmpSnmpCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    security_model: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityModel),
  }
}


export function snmpSnmpCommunityToHclTerraform(struct?: SnmpSnmpCommunity | cdktf.IResolvable): any {
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
    security_model: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityModel),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpSnmpCommunityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpSnmpCommunity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._securityModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityModel = this._securityModel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpSnmpCommunity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._securityModel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._securityModel = value.securityModel;
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

  // security_model - computed: true, optional: true, required: false
  private _securityModel?: string[]; 
  public get securityModel() {
    return this.getListAttribute('security_model');
  }
  public set securityModel(value: string[]) {
    this._securityModel = value;
  }
  public resetSecurityModel() {
    this._securityModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModelInput() {
    return this._securityModel;
  }
}

export class SnmpSnmpCommunityList extends cdktf.ComplexList {
  public internalValue? : SnmpSnmpCommunity[] | cdktf.IResolvable

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
  public get(index: number): SnmpSnmpCommunityOutputReference {
    return new SnmpSnmpCommunityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpSnmpMib {
  /**
  * SNMPv2 sysContact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#syscontact Snmp#syscontact}
  */
  readonly syscontact?: string;
  /**
  * SNMPv2 sysLocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#syslocation Snmp#syslocation}
  */
  readonly syslocation?: string;
  /**
  * SNMPv2 sysName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#sysname Snmp#sysname}
  */
  readonly sysname?: string;
}

export function snmpSnmpMibToTerraform(struct?: SnmpSnmpMib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    syscontact: cdktf.stringToTerraform(struct!.syscontact),
    syslocation: cdktf.stringToTerraform(struct!.syslocation),
    sysname: cdktf.stringToTerraform(struct!.sysname),
  }
}


export function snmpSnmpMibToHclTerraform(struct?: SnmpSnmpMib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    syscontact: {
      value: cdktf.stringToHclTerraform(struct!.syscontact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslocation: {
      value: cdktf.stringToHclTerraform(struct!.syslocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysname: {
      value: cdktf.stringToHclTerraform(struct!.sysname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpSnmpMibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnmpSnmpMib | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syscontact !== undefined) {
      hasAnyValues = true;
      internalValueResult.syscontact = this._syscontact;
    }
    if (this._syslocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslocation = this._syslocation;
    }
    if (this._sysname !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysname = this._sysname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpSnmpMib | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._syscontact = undefined;
      this._syslocation = undefined;
      this._sysname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._syscontact = value.syscontact;
      this._syslocation = value.syslocation;
      this._sysname = value.sysname;
    }
  }

  // syscontact - computed: false, optional: true, required: false
  private _syscontact?: string; 
  public get syscontact() {
    return this.getStringAttribute('syscontact');
  }
  public set syscontact(value: string) {
    this._syscontact = value;
  }
  public resetSyscontact() {
    this._syscontact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syscontactInput() {
    return this._syscontact;
  }

  // syslocation - computed: false, optional: true, required: false
  private _syslocation?: string; 
  public get syslocation() {
    return this.getStringAttribute('syslocation');
  }
  public set syslocation(value: string) {
    this._syslocation = value;
  }
  public resetSyslocation() {
    this._syslocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslocationInput() {
    return this._syslocation;
  }

  // sysname - computed: false, optional: true, required: false
  private _sysname?: string; 
  public get sysname() {
    return this.getStringAttribute('sysname');
  }
  public set sysname(value: string) {
    this._sysname = value;
  }
  public resetSysname() {
    this._sysname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysnameInput() {
    return this._sysname;
  }
}
export interface SnmpSnmpTarget {
  /**
  * SNMP community name to use for this target. Cannot be used with `user`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#community Snmp#community}
  */
  readonly community?: string;
  /**
  * IPv4 address for the SNMP target. Cannot be used with `ipv6_address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#ipv4_address Snmp#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv6 address for the SNMP target. Cannot be used with `ipv4_address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#ipv6_address Snmp#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Unique name for the SNMP target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#name Snmp#name}
  */
  readonly name: string;
  /**
  * Port number for the SNMP target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#port Snmp#port}
  */
  readonly port: number;
  /**
  * Security model for the SNMP target. Valid options: `v1`, `v2c`. Note: `v3` is applied automatically when `user` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#security_model Snmp#security_model}
  */
  readonly securityModel?: string;
  /**
  * SNMP user for SNMPv3 targets. Cannot be used with `community` or `security_model`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#user Snmp#user}
  */
  readonly user?: string;
}

export function snmpSnmpTargetToTerraform(struct?: SnmpSnmpTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.stringToTerraform(struct!.community),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    security_model: cdktf.stringToTerraform(struct!.securityModel),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function snmpSnmpTargetToHclTerraform(struct?: SnmpSnmpTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.stringToHclTerraform(struct!.community),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_model: {
      value: cdktf.stringToHclTerraform(struct!.securityModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpSnmpTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpSnmpTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._securityModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityModel = this._securityModel;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpSnmpTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._community = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
      this._name = undefined;
      this._port = undefined;
      this._securityModel = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._community = value.community;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
      this._name = value.name;
      this._port = value.port;
      this._securityModel = value.securityModel;
      this._user = value.user;
    }
  }

  // community - computed: false, optional: true, required: false
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
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

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // security_model - computed: false, optional: true, required: false
  private _securityModel?: string; 
  public get securityModel() {
    return this.getStringAttribute('security_model');
  }
  public set securityModel(value: string) {
    this._securityModel = value;
  }
  public resetSecurityModel() {
    this._securityModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModelInput() {
    return this._securityModel;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class SnmpSnmpTargetList extends cdktf.ComplexList {
  public internalValue? : SnmpSnmpTarget[] | cdktf.IResolvable

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
  public get(index: number): SnmpSnmpTargetOutputReference {
    return new SnmpSnmpTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpSnmpUser {
  /**
  * Password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#auth_passwd Snmp#auth_passwd}
  */
  readonly authPasswd?: string;
  /**
  * Authentication protocol. Valid options: `sha`, `md5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#auth_proto Snmp#auth_proto}
  */
  readonly authProto?: string;
  /**
  * Unique name for the SNMP user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#name Snmp#name}
  */
  readonly name: string;
  /**
  * Password for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#privacy_passwd Snmp#privacy_passwd}
  */
  readonly privacyPasswd?: string;
  /**
  * Privacy protocol. Valid options: `aes`, `des`. Requires authentication to be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#privacy_proto Snmp#privacy_proto}
  */
  readonly privacyProto?: string;
}

export function snmpSnmpUserToTerraform(struct?: SnmpSnmpUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_passwd: cdktf.stringToTerraform(struct!.authPasswd),
    auth_proto: cdktf.stringToTerraform(struct!.authProto),
    name: cdktf.stringToTerraform(struct!.name),
    privacy_passwd: cdktf.stringToTerraform(struct!.privacyPasswd),
    privacy_proto: cdktf.stringToTerraform(struct!.privacyProto),
  }
}


export function snmpSnmpUserToHclTerraform(struct?: SnmpSnmpUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_passwd: {
      value: cdktf.stringToHclTerraform(struct!.authPasswd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_proto: {
      value: cdktf.stringToHclTerraform(struct!.authProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_passwd: {
      value: cdktf.stringToHclTerraform(struct!.privacyPasswd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_proto: {
      value: cdktf.stringToHclTerraform(struct!.privacyProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpSnmpUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpSnmpUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPasswd !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPasswd = this._authPasswd;
    }
    if (this._authProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProto = this._authProto;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privacyPasswd !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPasswd = this._privacyPasswd;
    }
    if (this._privacyProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyProto = this._privacyProto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpSnmpUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authPasswd = undefined;
      this._authProto = undefined;
      this._name = undefined;
      this._privacyPasswd = undefined;
      this._privacyProto = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authPasswd = value.authPasswd;
      this._authProto = value.authProto;
      this._name = value.name;
      this._privacyPasswd = value.privacyPasswd;
      this._privacyProto = value.privacyProto;
    }
  }

  // auth_passwd - computed: false, optional: true, required: false
  private _authPasswd?: string; 
  public get authPasswd() {
    return this.getStringAttribute('auth_passwd');
  }
  public set authPasswd(value: string) {
    this._authPasswd = value;
  }
  public resetAuthPasswd() {
    this._authPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswdInput() {
    return this._authPasswd;
  }

  // auth_proto - computed: false, optional: true, required: false
  private _authProto?: string; 
  public get authProto() {
    return this.getStringAttribute('auth_proto');
  }
  public set authProto(value: string) {
    this._authProto = value;
  }
  public resetAuthProto() {
    this._authProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtoInput() {
    return this._authProto;
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

  // privacy_passwd - computed: false, optional: true, required: false
  private _privacyPasswd?: string; 
  public get privacyPasswd() {
    return this.getStringAttribute('privacy_passwd');
  }
  public set privacyPasswd(value: string) {
    this._privacyPasswd = value;
  }
  public resetPrivacyPasswd() {
    this._privacyPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPasswdInput() {
    return this._privacyPasswd;
  }

  // privacy_proto - computed: false, optional: true, required: false
  private _privacyProto?: string; 
  public get privacyProto() {
    return this.getStringAttribute('privacy_proto');
  }
  public set privacyProto(value: string) {
    this._privacyProto = value;
  }
  public resetPrivacyProto() {
    this._privacyProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyProtoInput() {
    return this._privacyProto;
  }
}

export class SnmpSnmpUserList extends cdktf.ComplexList {
  public internalValue? : SnmpSnmpUser[] | cdktf.IResolvable

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
  public get(index: number): SnmpSnmpUserOutputReference {
    return new SnmpSnmpUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp f5os_snmp}
*/
export class Snmp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_snmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snmp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snmp to import
  * @param importFromId The id of the existing Snmp that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snmp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_snmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/snmp f5os_snmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'f5os_snmp',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0',
        providerVersionConstraint: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._snmpCommunity.internalValue = config.snmpCommunity;
    this._snmpMib.internalValue = config.snmpMib;
    this._snmpTarget.internalValue = config.snmpTarget;
    this._snmpUser.internalValue = config.snmpUser;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // snmp_community - computed: false, optional: true, required: false
  private _snmpCommunity = new SnmpSnmpCommunityList(this, "snmp_community", false);
  public get snmpCommunity() {
    return this._snmpCommunity;
  }
  public putSnmpCommunity(value: SnmpSnmpCommunity[] | cdktf.IResolvable) {
    this._snmpCommunity.internalValue = value;
  }
  public resetSnmpCommunity() {
    this._snmpCommunity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpCommunityInput() {
    return this._snmpCommunity.internalValue;
  }

  // snmp_mib - computed: false, optional: true, required: false
  private _snmpMib = new SnmpSnmpMibOutputReference(this, "snmp_mib");
  public get snmpMib() {
    return this._snmpMib;
  }
  public putSnmpMib(value: SnmpSnmpMib) {
    this._snmpMib.internalValue = value;
  }
  public resetSnmpMib() {
    this._snmpMib.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpMibInput() {
    return this._snmpMib.internalValue;
  }

  // snmp_target - computed: false, optional: true, required: false
  private _snmpTarget = new SnmpSnmpTargetList(this, "snmp_target", false);
  public get snmpTarget() {
    return this._snmpTarget;
  }
  public putSnmpTarget(value: SnmpSnmpTarget[] | cdktf.IResolvable) {
    this._snmpTarget.internalValue = value;
  }
  public resetSnmpTarget() {
    this._snmpTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpTargetInput() {
    return this._snmpTarget.internalValue;
  }

  // snmp_user - computed: false, optional: true, required: false
  private _snmpUser = new SnmpSnmpUserList(this, "snmp_user", false);
  public get snmpUser() {
    return this._snmpUser;
  }
  public putSnmpUser(value: SnmpSnmpUser[] | cdktf.IResolvable) {
    this._snmpUser.internalValue = value;
  }
  public resetSnmpUser() {
    this._snmpUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpUserInput() {
    return this._snmpUser.internalValue;
  }

  // state - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      snmp_community: cdktf.listMapper(snmpSnmpCommunityToTerraform, false)(this._snmpCommunity.internalValue),
      snmp_mib: snmpSnmpMibToTerraform(this._snmpMib.internalValue),
      snmp_target: cdktf.listMapper(snmpSnmpTargetToTerraform, false)(this._snmpTarget.internalValue),
      snmp_user: cdktf.listMapper(snmpSnmpUserToTerraform, false)(this._snmpUser.internalValue),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      snmp_community: {
        value: cdktf.listMapperHcl(snmpSnmpCommunityToHclTerraform, false)(this._snmpCommunity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpSnmpCommunityList",
      },
      snmp_mib: {
        value: snmpSnmpMibToHclTerraform(this._snmpMib.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnmpSnmpMib",
      },
      snmp_target: {
        value: cdktf.listMapperHcl(snmpSnmpTargetToHclTerraform, false)(this._snmpTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpSnmpTargetList",
      },
      snmp_user: {
        value: cdktf.listMapperHcl(snmpSnmpUserToHclTerraform, false)(this._snmpUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpSnmpUserList",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
