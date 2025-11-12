// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceInfobloxConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the `alkira_policy_prefix_list` to be used to whitelist prefixes for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#allow_list_id ServiceInfoblox#allow_list_id}
  */
  readonly allowListId?: number;
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#billing_tag_ids ServiceInfoblox#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * The CXP where the service should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#cxp ServiceInfoblox#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the Infoblox service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#description ServiceInfoblox#description}
  */
  readonly description?: string;
  /**
  * The ID of the global cidr list to be associated with the Infoblox service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#global_cidr_list_id ServiceInfoblox#global_cidr_list_id}
  */
  readonly globalCidrListId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#id ServiceInfoblox#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Infoblox license type, only `BRING_YOUR_OWN` is supported right now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#license_type ServiceInfoblox#license_type}
  */
  readonly licenseType: string;
  /**
  * Name of the Infoblox service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#name ServiceInfoblox#name}
  */
  readonly name: string;
  /**
  * IDs of segments associated with the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#segment_ids ServiceInfoblox#segment_ids}
  */
  readonly segmentIds: string[];
  /**
  * The name of the service group to be associated with the service. A service group represents the service in traffic policies, route policies and when configuring segment resource shares.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#service_group_name ServiceInfoblox#service_group_name}
  */
  readonly serviceGroupName: string;
  /**
  * Shared Secret of the InfoBlox grid. This cannot be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#shared_secret ServiceInfoblox#shared_secret}
  */
  readonly sharedSecret: string;
  /**
  * anycast block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#anycast ServiceInfoblox#anycast}
  */
  readonly anycast: ServiceInfobloxAnycast[] | cdktf.IResolvable;
  /**
  * grid_master block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#grid_master ServiceInfoblox#grid_master}
  */
  readonly gridMaster: ServiceInfobloxGridMaster[] | cdktf.IResolvable;
  /**
  * instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#instance ServiceInfoblox#instance}
  */
  readonly instance: ServiceInfobloxInstance[] | cdktf.IResolvable;
}
export interface ServiceInfobloxAnycast {
  /**
  * The `backup_cxps` to be used when the current Infoblox service is not available. It also needs to have a configured Infoblox service in order to take advantage of this feature. It is NOT required that the `backup_cxps` should have a configured Infoblox service before it can be designated as a backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#backup_cxps ServiceInfoblox#backup_cxps}
  */
  readonly backupCxps?: string[];
  /**
  * Defines if AnyCast should be enabled. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#enabled ServiceInfoblox#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The IPs to be used when AnyCast is enabled. When AnyCast is enabled this list cannot be empty. The IPs used for AnyCast MUST NOT overlap the CIDR of `alkira_segment` resource associated with the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#ips ServiceInfoblox#ips}
  */
  readonly ips?: string[];
}

export function serviceInfobloxAnycastToTerraform(struct?: ServiceInfobloxAnycast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_cxps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backupCxps),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
  }
}


export function serviceInfobloxAnycastToHclTerraform(struct?: ServiceInfobloxAnycast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_cxps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backupCxps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceInfobloxAnycastOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceInfobloxAnycast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupCxps !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupCxps = this._backupCxps;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceInfobloxAnycast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupCxps = undefined;
      this._enabled = undefined;
      this._ips = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupCxps = value.backupCxps;
      this._enabled = value.enabled;
      this._ips = value.ips;
    }
  }

  // backup_cxps - computed: false, optional: true, required: false
  private _backupCxps?: string[]; 
  public get backupCxps() {
    return this.getListAttribute('backup_cxps');
  }
  public set backupCxps(value: string[]) {
    this._backupCxps = value;
  }
  public resetBackupCxps() {
    this._backupCxps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupCxpsInput() {
    return this._backupCxps;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }
}

export class ServiceInfobloxAnycastList extends cdktf.ComplexList {
  public internalValue? : ServiceInfobloxAnycast[] | cdktf.IResolvable

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
  public get(index: number): ServiceInfobloxAnycastOutputReference {
    return new ServiceInfobloxAnycastOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceInfobloxGridMaster {
  /**
  * External indicates if a new grid master should be created or if an existing grid master should be used. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#external ServiceInfoblox#external}
  */
  readonly external?: boolean | cdktf.IResolvable;
  /**
  * The IP address of the grid master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#ip ServiceInfoblox#ip}
  */
  readonly ip?: string;
  /**
  * Name of the grid master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#name ServiceInfoblox#name}
  */
  readonly name: string;
  /**
  * The Grid Master password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#password ServiceInfoblox#password}
  */
  readonly password: string;
  /**
  * The Grid Master user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#username ServiceInfoblox#username}
  */
  readonly username: string;
}

export function serviceInfobloxGridMasterToTerraform(struct?: ServiceInfobloxGridMaster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external: cdktf.booleanToTerraform(struct!.external),
    ip: cdktf.stringToTerraform(struct!.ip),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function serviceInfobloxGridMasterToHclTerraform(struct?: ServiceInfobloxGridMaster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external: {
      value: cdktf.booleanToHclTerraform(struct!.external),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceInfobloxGridMasterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceInfobloxGridMaster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceInfobloxGridMaster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._external = undefined;
      this._ip = undefined;
      this._name = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._external = value.external;
      this._ip = value.ip;
      this._name = value.name;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }

  // external - computed: false, optional: true, required: false
  private _external?: boolean | cdktf.IResolvable; 
  public get external() {
    return this.getBooleanAttribute('external');
  }
  public set external(value: boolean | cdktf.IResolvable) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ServiceInfobloxGridMasterList extends cdktf.ComplexList {
  public internalValue? : ServiceInfobloxGridMaster[] | cdktf.IResolvable

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
  public get(index: number): ServiceInfobloxGridMasterOutputReference {
    return new ServiceInfobloxGridMasterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceInfobloxInstance {
  /**
  *  This knob controls whether AnyCast is to be enabled for this instance or not. AnyCast can only be enabled on an instance if it is also enabled on the service. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#anycast_enabled ServiceInfoblox#anycast_enabled}
  */
  readonly anycastEnabled?: boolean | cdktf.IResolvable;
  /**
  * The host name of the instance. The host name MUST always have a suffix `.localdomain`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#hostname ServiceInfoblox#hostname}
  */
  readonly hostname: string;
  /**
  * The model of the Infoblox instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#model ServiceInfoblox#model}
  */
  readonly model: string;
  /**
  * The password associated with the infoblox instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#password ServiceInfoblox#password}
  */
  readonly password: string;
  /**
  * The type of the Infoblox instance that is to be provisioned. The value could be `MASTER`, `MASTER_CANDIDATE` and `MEMBER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#type ServiceInfoblox#type}
  */
  readonly type: string;
  /**
  * The version of the Infoblox to be used. Please check Alkira Portal for all supported versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#version ServiceInfoblox#version}
  */
  readonly version: string;
}

export function serviceInfobloxInstanceToTerraform(struct?: ServiceInfobloxInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anycast_enabled: cdktf.booleanToTerraform(struct!.anycastEnabled),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    model: cdktf.stringToTerraform(struct!.model),
    password: cdktf.stringToTerraform(struct!.password),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function serviceInfobloxInstanceToHclTerraform(struct?: ServiceInfobloxInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anycast_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.anycastEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ServiceInfobloxInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceInfobloxInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anycastEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.anycastEnabled = this._anycastEnabled;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceInfobloxInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anycastEnabled = undefined;
      this._hostname = undefined;
      this._model = undefined;
      this._password = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anycastEnabled = value.anycastEnabled;
      this._hostname = value.hostname;
      this._model = value.model;
      this._password = value.password;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // anycast_enabled - computed: false, optional: true, required: false
  private _anycastEnabled?: boolean | cdktf.IResolvable; 
  public get anycastEnabled() {
    return this.getBooleanAttribute('anycast_enabled');
  }
  public set anycastEnabled(value: boolean | cdktf.IResolvable) {
    this._anycastEnabled = value;
  }
  public resetAnycastEnabled() {
    this._anycastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastEnabledInput() {
    return this._anycastEnabled;
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class ServiceInfobloxInstanceList extends cdktf.ComplexList {
  public internalValue? : ServiceInfobloxInstance[] | cdktf.IResolvable

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
  public get(index: number): ServiceInfobloxInstanceOutputReference {
    return new ServiceInfobloxInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox alkira_service_infoblox}
*/
export class ServiceInfoblox extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_service_infoblox";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceInfoblox resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceInfoblox to import
  * @param importFromId The id of the existing ServiceInfoblox that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceInfoblox to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_service_infoblox", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_infoblox alkira_service_infoblox} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceInfobloxConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceInfobloxConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_service_infoblox',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowListId = config.allowListId;
    this._billingTagIds = config.billingTagIds;
    this._cxp = config.cxp;
    this._description = config.description;
    this._globalCidrListId = config.globalCidrListId;
    this._id = config.id;
    this._licenseType = config.licenseType;
    this._name = config.name;
    this._segmentIds = config.segmentIds;
    this._serviceGroupName = config.serviceGroupName;
    this._sharedSecret = config.sharedSecret;
    this._anycast.internalValue = config.anycast;
    this._gridMaster.internalValue = config.gridMaster;
    this._instance.internalValue = config.instance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_list_id - computed: false, optional: true, required: false
  private _allowListId?: number; 
  public get allowListId() {
    return this.getNumberAttribute('allow_list_id');
  }
  public set allowListId(value: number) {
    this._allowListId = value;
  }
  public resetAllowListId() {
    this._allowListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListIdInput() {
    return this._allowListId;
  }

  // billing_tag_ids - computed: false, optional: true, required: false
  private _billingTagIds?: number[]; 
  public get billingTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('billing_tag_ids')));
  }
  public set billingTagIds(value: number[]) {
    this._billingTagIds = value;
  }
  public resetBillingTagIds() {
    this._billingTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTagIdsInput() {
    return this._billingTagIds;
  }

  // cxp - computed: false, optional: false, required: true
  private _cxp?: string; 
  public get cxp() {
    return this.getStringAttribute('cxp');
  }
  public set cxp(value: string) {
    this._cxp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpInput() {
    return this._cxp;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // global_cidr_list_id - computed: false, optional: false, required: true
  private _globalCidrListId?: number; 
  public get globalCidrListId() {
    return this.getNumberAttribute('global_cidr_list_id');
  }
  public set globalCidrListId(value: number) {
    this._globalCidrListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalCidrListIdInput() {
    return this._globalCidrListId;
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

  // license_type - computed: false, optional: false, required: true
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
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

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // segment_ids - computed: false, optional: false, required: true
  private _segmentIds?: string[]; 
  public get segmentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('segment_ids'));
  }
  public set segmentIds(value: string[]) {
    this._segmentIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdsInput() {
    return this._segmentIds;
  }

  // service_group_id - computed: true, optional: false, required: false
  public get serviceGroupId() {
    return this.getNumberAttribute('service_group_id');
  }

  // service_group_implicit_group_id - computed: true, optional: false, required: false
  public get serviceGroupImplicitGroupId() {
    return this.getNumberAttribute('service_group_implicit_group_id');
  }

  // service_group_name - computed: false, optional: false, required: true
  private _serviceGroupName?: string; 
  public get serviceGroupName() {
    return this.getStringAttribute('service_group_name');
  }
  public set serviceGroupName(value: string) {
    this._serviceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupNameInput() {
    return this._serviceGroupName;
  }

  // shared_secret - computed: false, optional: false, required: true
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }

  // anycast - computed: false, optional: false, required: true
  private _anycast = new ServiceInfobloxAnycastList(this, "anycast", true);
  public get anycast() {
    return this._anycast;
  }
  public putAnycast(value: ServiceInfobloxAnycast[] | cdktf.IResolvable) {
    this._anycast.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastInput() {
    return this._anycast.internalValue;
  }

  // grid_master - computed: false, optional: false, required: true
  private _gridMaster = new ServiceInfobloxGridMasterList(this, "grid_master", false);
  public get gridMaster() {
    return this._gridMaster;
  }
  public putGridMaster(value: ServiceInfobloxGridMaster[] | cdktf.IResolvable) {
    this._gridMaster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gridMasterInput() {
    return this._gridMaster.internalValue;
  }

  // instance - computed: false, optional: false, required: true
  private _instance = new ServiceInfobloxInstanceList(this, "instance", false);
  public get instance() {
    return this._instance;
  }
  public putInstance(value: ServiceInfobloxInstance[] | cdktf.IResolvable) {
    this._instance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_list_id: cdktf.numberToTerraform(this._allowListId),
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      global_cidr_list_id: cdktf.numberToTerraform(this._globalCidrListId),
      id: cdktf.stringToTerraform(this._id),
      license_type: cdktf.stringToTerraform(this._licenseType),
      name: cdktf.stringToTerraform(this._name),
      segment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._segmentIds),
      service_group_name: cdktf.stringToTerraform(this._serviceGroupName),
      shared_secret: cdktf.stringToTerraform(this._sharedSecret),
      anycast: cdktf.listMapper(serviceInfobloxAnycastToTerraform, true)(this._anycast.internalValue),
      grid_master: cdktf.listMapper(serviceInfobloxGridMasterToTerraform, true)(this._gridMaster.internalValue),
      instance: cdktf.listMapper(serviceInfobloxInstanceToTerraform, true)(this._instance.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_list_id: {
        value: cdktf.numberToHclTerraform(this._allowListId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      billing_tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._billingTagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      cxp: {
        value: cdktf.stringToHclTerraform(this._cxp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_cidr_list_id: {
        value: cdktf.numberToHclTerraform(this._globalCidrListId),
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
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._segmentIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_group_name: {
        value: cdktf.stringToHclTerraform(this._serviceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_secret: {
        value: cdktf.stringToHclTerraform(this._sharedSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anycast: {
        value: cdktf.listMapperHcl(serviceInfobloxAnycastToHclTerraform, true)(this._anycast.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceInfobloxAnycastList",
      },
      grid_master: {
        value: cdktf.listMapperHcl(serviceInfobloxGridMasterToHclTerraform, true)(this._gridMaster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceInfobloxGridMasterList",
      },
      instance: {
        value: cdktf.listMapperHcl(serviceInfobloxInstanceToHclTerraform, true)(this._instance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceInfobloxInstanceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
