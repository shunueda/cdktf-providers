// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceCiscoFtdvConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicate if `auto_scale` should be enabled for your Cisco FTDv service. `ON` and `OFF` are accepted values. Default is `OFF`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#auto_scale ServiceCiscoFtdv#auto_scale}
  */
  readonly autoScale?: string;
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#billing_tag_ids ServiceCiscoFtdv#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * The CXP where the service should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#cxp ServiceCiscoFtdv#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#description ServiceCiscoFtdv#description}
  */
  readonly description?: string;
  /**
  * The ID of the `alkira_list_global_cidr` to be associated with the service. The list must be tagged with `CISCO FTDV`. CIDR must be at least `/25`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#global_cidr_list_id ServiceCiscoFtdv#global_cidr_list_id}
  */
  readonly globalCidrListId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#id ServiceCiscoFtdv#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum number of instances that should be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#max_instance_count ServiceCiscoFtdv#max_instance_count}
  */
  readonly maxInstanceCount: number;
  /**
  * The minimum number of instances that should be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#min_instance_count ServiceCiscoFtdv#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * The name of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#name ServiceCiscoFtdv#name}
  */
  readonly name: string;
  /**
  * IDs of segments associated with the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#segment_ids ServiceCiscoFtdv#segment_ids}
  */
  readonly segmentIds: string[];
  /**
  * The size of the service, one of `SMALL`, `MEDIUM`, `LARGE`, `2LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#size ServiceCiscoFtdv#size}
  */
  readonly size: string;
  /**
  * The tunnel protocol. Default is `IPSEC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#tunnel_protocol ServiceCiscoFtdv#tunnel_protocol}
  */
  readonly tunnelProtocol?: string;
  /**
  * firepower_management_center block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#firepower_management_center ServiceCiscoFtdv#firepower_management_center}
  */
  readonly firepowerManagementCenter: ServiceCiscoFtdvFirepowerManagementCenter[] | cdktf.IResolvable;
  /**
  * instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#instance ServiceCiscoFtdv#instance}
  */
  readonly instance: ServiceCiscoFtdvInstance[] | cdktf.IResolvable;
  /**
  * segment_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#segment_options ServiceCiscoFtdv#segment_options}
  */
  readonly segmentOptions?: ServiceCiscoFtdvSegmentOptions[] | cdktf.IResolvable;
}
export interface ServiceCiscoFtdvFirepowerManagementCenter {
  /**
  * List of IP addresses and CIDRs to access the Firepower Management Center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#ip_allow_list ServiceCiscoFtdv#ip_allow_list}
  */
  readonly ipAllowList?: string[];
  /**
  * Firepower Management Center (FMC) password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#password ServiceCiscoFtdv#password}
  */
  readonly password: string;
  /**
  * ID of the segment accociated with the Firepower Management Center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#segment_id ServiceCiscoFtdv#segment_id}
  */
  readonly segmentId: string;
  /**
  * IP address of the Firepower Management Center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#server_ip ServiceCiscoFtdv#server_ip}
  */
  readonly serverIp: string;
  /**
  * Firepower Management Center (FMC) username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#username ServiceCiscoFtdv#username}
  */
  readonly username: string;
}

export function serviceCiscoFtdvFirepowerManagementCenterToTerraform(struct?: ServiceCiscoFtdvFirepowerManagementCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAllowList),
    password: cdktf.stringToTerraform(struct!.password),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
    server_ip: cdktf.stringToTerraform(struct!.serverIp),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function serviceCiscoFtdvFirepowerManagementCenterToHclTerraform(struct?: ServiceCiscoFtdvFirepowerManagementCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_allow_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAllowList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_id: {
      value: cdktf.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_ip: {
      value: cdktf.stringToHclTerraform(struct!.serverIp),
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

export class ServiceCiscoFtdvFirepowerManagementCenterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceCiscoFtdvFirepowerManagementCenter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAllowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllowList = this._ipAllowList;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    if (this._serverIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIp = this._serverIp;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCiscoFtdvFirepowerManagementCenter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAllowList = undefined;
      this._password = undefined;
      this._segmentId = undefined;
      this._serverIp = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAllowList = value.ipAllowList;
      this._password = value.password;
      this._segmentId = value.segmentId;
      this._serverIp = value.serverIp;
      this._username = value.username;
    }
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }

  // ip_allow_list - computed: false, optional: true, required: false
  private _ipAllowList?: string[]; 
  public get ipAllowList() {
    return this.getListAttribute('ip_allow_list');
  }
  public set ipAllowList(value: string[]) {
    this._ipAllowList = value;
  }
  public resetIpAllowList() {
    this._ipAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowListInput() {
    return this._ipAllowList;
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

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // server_ip - computed: false, optional: false, required: true
  private _serverIp?: string; 
  public get serverIp() {
    return this.getStringAttribute('server_ip');
  }
  public set serverIp(value: string) {
    this._serverIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpInput() {
    return this._serverIp;
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

export class ServiceCiscoFtdvFirepowerManagementCenterList extends cdktf.ComplexList {
  public internalValue? : ServiceCiscoFtdvFirepowerManagementCenter[] | cdktf.IResolvable

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
  public get(index: number): ServiceCiscoFtdvFirepowerManagementCenterOutputReference {
    return new ServiceCiscoFtdvFirepowerManagementCenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceCiscoFtdvInstance {
  /**
  * Firepower Firewall Admin Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#admin_password ServiceCiscoFtdv#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Enable traffic on this instance of Cisco FTDv. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#enable_traffic ServiceCiscoFtdv#enable_traffic}
  */
  readonly enableTraffic?: boolean | cdktf.IResolvable;
  /**
  * FMC Registration Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#fmc_registration_key ServiceCiscoFtdv#fmc_registration_key}
  */
  readonly fmcRegistrationKey: string;
  /**
  * FTDv NAT ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#ftdv_nat_id ServiceCiscoFtdv#ftdv_nat_id}
  */
  readonly ftdvNatId?: string;
  /**
  * Hostname of the Firepower Firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#hostname ServiceCiscoFtdv#hostname}
  */
  readonly hostname: string;
  /**
  * Cisco Firepower Firewall license type, either `BRING_YOUR_OWN` or `PAY_AS_YOU_GO`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#license_type ServiceCiscoFtdv#license_type}
  */
  readonly licenseType: string;
  /**
  * Cisco Firepower Firewall version. Please check Alkira Portal for all supported versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#version ServiceCiscoFtdv#version}
  */
  readonly version: string;
}

export function serviceCiscoFtdvInstanceToTerraform(struct?: ServiceCiscoFtdvInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    enable_traffic: cdktf.booleanToTerraform(struct!.enableTraffic),
    fmc_registration_key: cdktf.stringToTerraform(struct!.fmcRegistrationKey),
    ftdv_nat_id: cdktf.stringToTerraform(struct!.ftdvNatId),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function serviceCiscoFtdvInstanceToHclTerraform(struct?: ServiceCiscoFtdvInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.enableTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fmc_registration_key: {
      value: cdktf.stringToHclTerraform(struct!.fmcRegistrationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ftdv_nat_id: {
      value: cdktf.stringToHclTerraform(struct!.ftdvNatId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
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

export class ServiceCiscoFtdvInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceCiscoFtdvInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._enableTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTraffic = this._enableTraffic;
    }
    if (this._fmcRegistrationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmcRegistrationKey = this._fmcRegistrationKey;
    }
    if (this._ftdvNatId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftdvNatId = this._ftdvNatId;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCiscoFtdvInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPassword = undefined;
      this._enableTraffic = undefined;
      this._fmcRegistrationKey = undefined;
      this._ftdvNatId = undefined;
      this._hostname = undefined;
      this._licenseType = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPassword = value.adminPassword;
      this._enableTraffic = value.enableTraffic;
      this._fmcRegistrationKey = value.fmcRegistrationKey;
      this._ftdvNatId = value.ftdvNatId;
      this._hostname = value.hostname;
      this._licenseType = value.licenseType;
      this._version = value.version;
    }
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }

  // enable_traffic - computed: false, optional: true, required: false
  private _enableTraffic?: boolean | cdktf.IResolvable; 
  public get enableTraffic() {
    return this.getBooleanAttribute('enable_traffic');
  }
  public set enableTraffic(value: boolean | cdktf.IResolvable) {
    this._enableTraffic = value;
  }
  public resetEnableTraffic() {
    this._enableTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrafficInput() {
    return this._enableTraffic;
  }

  // fmc_registration_key - computed: false, optional: false, required: true
  private _fmcRegistrationKey?: string; 
  public get fmcRegistrationKey() {
    return this.getStringAttribute('fmc_registration_key');
  }
  public set fmcRegistrationKey(value: string) {
    this._fmcRegistrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fmcRegistrationKeyInput() {
    return this._fmcRegistrationKey;
  }

  // ftdv_nat_id - computed: false, optional: true, required: false
  private _ftdvNatId?: string; 
  public get ftdvNatId() {
    return this.getStringAttribute('ftdv_nat_id');
  }
  public set ftdvNatId(value: string) {
    this._ftdvNatId = value;
  }
  public resetFtdvNatId() {
    this._ftdvNatId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftdvNatIdInput() {
    return this._ftdvNatId;
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

export class ServiceCiscoFtdvInstanceList extends cdktf.ComplexList {
  public internalValue? : ServiceCiscoFtdvInstance[] | cdktf.IResolvable

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
  public get(index: number): ServiceCiscoFtdvInstanceOutputReference {
    return new ServiceCiscoFtdvInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceCiscoFtdvSegmentOptions {
  /**
  * The list of Groups associated with the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#groups ServiceCiscoFtdv#groups}
  */
  readonly groups?: string[];
  /**
  * ID of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#segment_id ServiceCiscoFtdv#segment_id}
  */
  readonly segmentId: string;
  /**
  * The name of the associated zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#zone_name ServiceCiscoFtdv#zone_name}
  */
  readonly zoneName: string;
}

export function serviceCiscoFtdvSegmentOptionsToTerraform(struct?: ServiceCiscoFtdvSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function serviceCiscoFtdvSegmentOptionsToHclTerraform(struct?: ServiceCiscoFtdvSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    segment_id: {
      value: cdktf.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceCiscoFtdvSegmentOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceCiscoFtdvSegmentOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCiscoFtdvSegmentOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups = undefined;
      this._segmentId = undefined;
      this._zoneName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups = value.groups;
      this._segmentId = value.segmentId;
      this._zoneName = value.zoneName;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }
}

export class ServiceCiscoFtdvSegmentOptionsList extends cdktf.ComplexList {
  public internalValue? : ServiceCiscoFtdvSegmentOptions[] | cdktf.IResolvable

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
  public get(index: number): ServiceCiscoFtdvSegmentOptionsOutputReference {
    return new ServiceCiscoFtdvSegmentOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv alkira_service_cisco_ftdv}
*/
export class ServiceCiscoFtdv extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_service_cisco_ftdv";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceCiscoFtdv resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceCiscoFtdv to import
  * @param importFromId The id of the existing ServiceCiscoFtdv that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceCiscoFtdv to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_service_cisco_ftdv", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_cisco_ftdv alkira_service_cisco_ftdv} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceCiscoFtdvConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceCiscoFtdvConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_service_cisco_ftdv',
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
    this._autoScale = config.autoScale;
    this._billingTagIds = config.billingTagIds;
    this._cxp = config.cxp;
    this._description = config.description;
    this._globalCidrListId = config.globalCidrListId;
    this._id = config.id;
    this._maxInstanceCount = config.maxInstanceCount;
    this._minInstanceCount = config.minInstanceCount;
    this._name = config.name;
    this._segmentIds = config.segmentIds;
    this._size = config.size;
    this._tunnelProtocol = config.tunnelProtocol;
    this._firepowerManagementCenter.internalValue = config.firepowerManagementCenter;
    this._instance.internalValue = config.instance;
    this._segmentOptions.internalValue = config.segmentOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scale - computed: false, optional: true, required: false
  private _autoScale?: string; 
  public get autoScale() {
    return this.getStringAttribute('auto_scale');
  }
  public set autoScale(value: string) {
    this._autoScale = value;
  }
  public resetAutoScale() {
    this._autoScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale;
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

  // max_instance_count - computed: false, optional: false, required: true
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // min_instance_count - computed: false, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
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

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // tunnel_protocol - computed: false, optional: true, required: false
  private _tunnelProtocol?: string; 
  public get tunnelProtocol() {
    return this.getStringAttribute('tunnel_protocol');
  }
  public set tunnelProtocol(value: string) {
    this._tunnelProtocol = value;
  }
  public resetTunnelProtocol() {
    this._tunnelProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelProtocolInput() {
    return this._tunnelProtocol;
  }

  // firepower_management_center - computed: false, optional: false, required: true
  private _firepowerManagementCenter = new ServiceCiscoFtdvFirepowerManagementCenterList(this, "firepower_management_center", true);
  public get firepowerManagementCenter() {
    return this._firepowerManagementCenter;
  }
  public putFirepowerManagementCenter(value: ServiceCiscoFtdvFirepowerManagementCenter[] | cdktf.IResolvable) {
    this._firepowerManagementCenter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firepowerManagementCenterInput() {
    return this._firepowerManagementCenter.internalValue;
  }

  // instance - computed: false, optional: false, required: true
  private _instance = new ServiceCiscoFtdvInstanceList(this, "instance", false);
  public get instance() {
    return this._instance;
  }
  public putInstance(value: ServiceCiscoFtdvInstance[] | cdktf.IResolvable) {
    this._instance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance.internalValue;
  }

  // segment_options - computed: false, optional: true, required: false
  private _segmentOptions = new ServiceCiscoFtdvSegmentOptionsList(this, "segment_options", true);
  public get segmentOptions() {
    return this._segmentOptions;
  }
  public putSegmentOptions(value: ServiceCiscoFtdvSegmentOptions[] | cdktf.IResolvable) {
    this._segmentOptions.internalValue = value;
  }
  public resetSegmentOptions() {
    this._segmentOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentOptionsInput() {
    return this._segmentOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scale: cdktf.stringToTerraform(this._autoScale),
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      global_cidr_list_id: cdktf.numberToTerraform(this._globalCidrListId),
      id: cdktf.stringToTerraform(this._id),
      max_instance_count: cdktf.numberToTerraform(this._maxInstanceCount),
      min_instance_count: cdktf.numberToTerraform(this._minInstanceCount),
      name: cdktf.stringToTerraform(this._name),
      segment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._segmentIds),
      size: cdktf.stringToTerraform(this._size),
      tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
      firepower_management_center: cdktf.listMapper(serviceCiscoFtdvFirepowerManagementCenterToTerraform, true)(this._firepowerManagementCenter.internalValue),
      instance: cdktf.listMapper(serviceCiscoFtdvInstanceToTerraform, true)(this._instance.internalValue),
      segment_options: cdktf.listMapper(serviceCiscoFtdvSegmentOptionsToTerraform, true)(this._segmentOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scale: {
        value: cdktf.stringToHclTerraform(this._autoScale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      max_instance_count: {
        value: cdktf.numberToHclTerraform(this._maxInstanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_instance_count: {
        value: cdktf.numberToHclTerraform(this._minInstanceCount),
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
      segment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._segmentIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_protocol: {
        value: cdktf.stringToHclTerraform(this._tunnelProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firepower_management_center: {
        value: cdktf.listMapperHcl(serviceCiscoFtdvFirepowerManagementCenterToHclTerraform, true)(this._firepowerManagementCenter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceCiscoFtdvFirepowerManagementCenterList",
      },
      instance: {
        value: cdktf.listMapperHcl(serviceCiscoFtdvInstanceToHclTerraform, true)(this._instance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceCiscoFtdvInstanceList",
      },
      segment_options: {
        value: cdktf.listMapperHcl(serviceCiscoFtdvSegmentOptionsToHclTerraform, true)(this._segmentOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceCiscoFtdvSegmentOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
