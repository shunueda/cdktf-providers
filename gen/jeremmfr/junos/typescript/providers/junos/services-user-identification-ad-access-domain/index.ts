// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicesUserIdentificationAdAccessDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#name ServicesUserIdentificationAdAccessDomain#name}
  */
  readonly name: string;
  /**
  * User name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#user_name ServicesUserIdentificationAdAccessDomain#user_name}
  */
  readonly userName: string;
  /**
  * Password string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#user_password ServicesUserIdentificationAdAccessDomain#user_password}
  */
  readonly userPassword: string;
  /**
  * domain_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#domain_controller ServicesUserIdentificationAdAccessDomain#domain_controller}
  */
  readonly domainController?: ServicesUserIdentificationAdAccessDomainDomainController[] | cdktf.IResolvable;
  /**
  * ip_user_mapping_discovery_wmi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#ip_user_mapping_discovery_wmi ServicesUserIdentificationAdAccessDomain#ip_user_mapping_discovery_wmi}
  */
  readonly ipUserMappingDiscoveryWmi?: ServicesUserIdentificationAdAccessDomainIpUserMappingDiscoveryWmi;
  /**
  * user_group_mapping_ldap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#user_group_mapping_ldap ServicesUserIdentificationAdAccessDomain#user_group_mapping_ldap}
  */
  readonly userGroupMappingLdap?: ServicesUserIdentificationAdAccessDomainUserGroupMappingLdap;
}
export interface ServicesUserIdentificationAdAccessDomainDomainController {
  /**
  * Address of domain controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#address ServicesUserIdentificationAdAccessDomain#address}
  */
  readonly address: string;
  /**
  * Domain controller name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#name ServicesUserIdentificationAdAccessDomain#name}
  */
  readonly name: string;
}

export function servicesUserIdentificationAdAccessDomainDomainControllerToTerraform(struct?: ServicesUserIdentificationAdAccessDomainDomainController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function servicesUserIdentificationAdAccessDomainDomainControllerToHclTerraform(struct?: ServicesUserIdentificationAdAccessDomainDomainController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesUserIdentificationAdAccessDomainDomainControllerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicesUserIdentificationAdAccessDomainDomainController | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesUserIdentificationAdAccessDomainDomainController | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._name = value.name;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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
}

export class ServicesUserIdentificationAdAccessDomainDomainControllerList extends cdktf.ComplexList {
  public internalValue? : ServicesUserIdentificationAdAccessDomainDomainController[] | cdktf.IResolvable

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
  public get(index: number): ServicesUserIdentificationAdAccessDomainDomainControllerOutputReference {
    return new ServicesUserIdentificationAdAccessDomainDomainControllerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicesUserIdentificationAdAccessDomainIpUserMappingDiscoveryWmi {
  /**
  * Interval of event log scanning (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#event_log_scanning_interval ServicesUserIdentificationAdAccessDomain#event_log_scanning_interval}
  */
  readonly eventLogScanningInterval?: number;
  /**
  * Event log scanning timespan (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#initial_event_log_timespan ServicesUserIdentificationAdAccessDomain#initial_event_log_timespan}
  */
  readonly initialEventLogTimespan?: number;
}

export function servicesUserIdentificationAdAccessDomainIpUserMappingDiscoveryWmiToTerraform(struct?: ServicesUserIdentificationAdAccessDomainIpUserMappingDiscoveryWmi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_log_scanning_interval: cdktf.numberToTerraform(struct!.eventLogScanningInterval),
    initial_event_log_timespan: cdktf.numberToTerraform(struct!.initialEventLogTimespan),
  }
}


export function servicesUserIdentificationAdAccessDomainIpUserMappingDiscoveryWmiToHclTerraform(struct?: ServicesUserIdentificationAdAccessDomainIpUserMappingDiscoveryWmi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_log_scanning_interval: {
      value: cdktf.numberToHclTerraform(struct!.eventLogScanningInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_event_log_timespan: {
      value: cdktf.numberToHclTerraform(struct!.initialEventLogTimespan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesUserIdentificationAdAccessDomainIpUserMappingDiscoveryWmiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesUserIdentificationAdAccessDomainIpUserMappingDiscoveryWmi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventLogScanningInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventLogScanningInterval = this._eventLogScanningInterval;
    }
    if (this._initialEventLogTimespan !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialEventLogTimespan = this._initialEventLogTimespan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesUserIdentificationAdAccessDomainIpUserMappingDiscoveryWmi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventLogScanningInterval = undefined;
      this._initialEventLogTimespan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventLogScanningInterval = value.eventLogScanningInterval;
      this._initialEventLogTimespan = value.initialEventLogTimespan;
    }
  }

  // event_log_scanning_interval - computed: false, optional: true, required: false
  private _eventLogScanningInterval?: number; 
  public get eventLogScanningInterval() {
    return this.getNumberAttribute('event_log_scanning_interval');
  }
  public set eventLogScanningInterval(value: number) {
    this._eventLogScanningInterval = value;
  }
  public resetEventLogScanningInterval() {
    this._eventLogScanningInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLogScanningIntervalInput() {
    return this._eventLogScanningInterval;
  }

  // initial_event_log_timespan - computed: false, optional: true, required: false
  private _initialEventLogTimespan?: number; 
  public get initialEventLogTimespan() {
    return this.getNumberAttribute('initial_event_log_timespan');
  }
  public set initialEventLogTimespan(value: number) {
    this._initialEventLogTimespan = value;
  }
  public resetInitialEventLogTimespan() {
    this._initialEventLogTimespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialEventLogTimespanInput() {
    return this._initialEventLogTimespan;
  }
}
export interface ServicesUserIdentificationAdAccessDomainUserGroupMappingLdap {
  /**
  * Address of LDAP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#address ServicesUserIdentificationAdAccessDomain#address}
  */
  readonly address?: string[];
  /**
  * Authentication-algorithm simple.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#auth_algo_simple ServicesUserIdentificationAdAccessDomain#auth_algo_simple}
  */
  readonly authAlgoSimple?: boolean | cdktf.IResolvable;
  /**
  * Base distinguished name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#base ServicesUserIdentificationAdAccessDomain#base}
  */
  readonly base?: string;
  /**
  * SSL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#ssl ServicesUserIdentificationAdAccessDomain#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * User name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#user_name ServicesUserIdentificationAdAccessDomain#user_name}
  */
  readonly userName?: string;
  /**
  * Password string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#user_password ServicesUserIdentificationAdAccessDomain#user_password}
  */
  readonly userPassword?: string;
}

export function servicesUserIdentificationAdAccessDomainUserGroupMappingLdapToTerraform(struct?: ServicesUserIdentificationAdAccessDomainUserGroupMappingLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.address),
    auth_algo_simple: cdktf.booleanToTerraform(struct!.authAlgoSimple),
    base: cdktf.stringToTerraform(struct!.base),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    user_name: cdktf.stringToTerraform(struct!.userName),
    user_password: cdktf.stringToTerraform(struct!.userPassword),
  }
}


export function servicesUserIdentificationAdAccessDomainUserGroupMappingLdapToHclTerraform(struct?: ServicesUserIdentificationAdAccessDomainUserGroupMappingLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.address),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth_algo_simple: {
      value: cdktf.booleanToHclTerraform(struct!.authAlgoSimple),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    base: {
      value: cdktf.stringToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl: {
      value: cdktf.booleanToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_password: {
      value: cdktf.stringToHclTerraform(struct!.userPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesUserIdentificationAdAccessDomainUserGroupMappingLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesUserIdentificationAdAccessDomainUserGroupMappingLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._authAlgoSimple !== undefined) {
      hasAnyValues = true;
      internalValueResult.authAlgoSimple = this._authAlgoSimple;
    }
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._userPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesUserIdentificationAdAccessDomainUserGroupMappingLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._authAlgoSimple = undefined;
      this._base = undefined;
      this._ssl = undefined;
      this._userName = undefined;
      this._userPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._authAlgoSimple = value.authAlgoSimple;
      this._base = value.base;
      this._ssl = value.ssl;
      this._userName = value.userName;
      this._userPassword = value.userPassword;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string[]; 
  public get address() {
    return this.getListAttribute('address');
  }
  public set address(value: string[]) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // auth_algo_simple - computed: false, optional: true, required: false
  private _authAlgoSimple?: boolean | cdktf.IResolvable; 
  public get authAlgoSimple() {
    return this.getBooleanAttribute('auth_algo_simple');
  }
  public set authAlgoSimple(value: boolean | cdktf.IResolvable) {
    this._authAlgoSimple = value;
  }
  public resetAuthAlgoSimple() {
    this._authAlgoSimple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgoSimpleInput() {
    return this._authAlgoSimple;
  }

  // base - computed: false, optional: true, required: false
  private _base?: string; 
  public get base() {
    return this.getStringAttribute('base');
  }
  public set base(value: string) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_password - computed: false, optional: true, required: false
  private _userPassword?: string; 
  public get userPassword() {
    return this.getStringAttribute('user_password');
  }
  public set userPassword(value: string) {
    this._userPassword = value;
  }
  public resetUserPassword() {
    this._userPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain junos_services_user_identification_ad_access_domain}
*/
export class ServicesUserIdentificationAdAccessDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_services_user_identification_ad_access_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicesUserIdentificationAdAccessDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicesUserIdentificationAdAccessDomain to import
  * @param importFromId The id of the existing ServicesUserIdentificationAdAccessDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicesUserIdentificationAdAccessDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_services_user_identification_ad_access_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_ad_access_domain junos_services_user_identification_ad_access_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicesUserIdentificationAdAccessDomainConfig
  */
  public constructor(scope: Construct, id: string, config: ServicesUserIdentificationAdAccessDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_services_user_identification_ad_access_domain',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._userName = config.userName;
    this._userPassword = config.userPassword;
    this._domainController.internalValue = config.domainController;
    this._ipUserMappingDiscoveryWmi.internalValue = config.ipUserMappingDiscoveryWmi;
    this._userGroupMappingLdap.internalValue = config.userGroupMappingLdap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_password - computed: false, optional: false, required: true
  private _userPassword?: string; 
  public get userPassword() {
    return this.getStringAttribute('user_password');
  }
  public set userPassword(value: string) {
    this._userPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword;
  }

  // domain_controller - computed: false, optional: true, required: false
  private _domainController = new ServicesUserIdentificationAdAccessDomainDomainControllerList(this, "domain_controller", false);
  public get domainController() {
    return this._domainController;
  }
  public putDomainController(value: ServicesUserIdentificationAdAccessDomainDomainController[] | cdktf.IResolvable) {
    this._domainController.internalValue = value;
  }
  public resetDomainController() {
    this._domainController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainControllerInput() {
    return this._domainController.internalValue;
  }

  // ip_user_mapping_discovery_wmi - computed: false, optional: true, required: false
  private _ipUserMappingDiscoveryWmi = new ServicesUserIdentificationAdAccessDomainIpUserMappingDiscoveryWmiOutputReference(this, "ip_user_mapping_discovery_wmi");
  public get ipUserMappingDiscoveryWmi() {
    return this._ipUserMappingDiscoveryWmi;
  }
  public putIpUserMappingDiscoveryWmi(value: ServicesUserIdentificationAdAccessDomainIpUserMappingDiscoveryWmi) {
    this._ipUserMappingDiscoveryWmi.internalValue = value;
  }
  public resetIpUserMappingDiscoveryWmi() {
    this._ipUserMappingDiscoveryWmi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUserMappingDiscoveryWmiInput() {
    return this._ipUserMappingDiscoveryWmi.internalValue;
  }

  // user_group_mapping_ldap - computed: false, optional: true, required: false
  private _userGroupMappingLdap = new ServicesUserIdentificationAdAccessDomainUserGroupMappingLdapOutputReference(this, "user_group_mapping_ldap");
  public get userGroupMappingLdap() {
    return this._userGroupMappingLdap;
  }
  public putUserGroupMappingLdap(value: ServicesUserIdentificationAdAccessDomainUserGroupMappingLdap) {
    this._userGroupMappingLdap.internalValue = value;
  }
  public resetUserGroupMappingLdap() {
    this._userGroupMappingLdap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupMappingLdapInput() {
    return this._userGroupMappingLdap.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      user_name: cdktf.stringToTerraform(this._userName),
      user_password: cdktf.stringToTerraform(this._userPassword),
      domain_controller: cdktf.listMapper(servicesUserIdentificationAdAccessDomainDomainControllerToTerraform, true)(this._domainController.internalValue),
      ip_user_mapping_discovery_wmi: servicesUserIdentificationAdAccessDomainIpUserMappingDiscoveryWmiToTerraform(this._ipUserMappingDiscoveryWmi.internalValue),
      user_group_mapping_ldap: servicesUserIdentificationAdAccessDomainUserGroupMappingLdapToTerraform(this._userGroupMappingLdap.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_password: {
        value: cdktf.stringToHclTerraform(this._userPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_controller: {
        value: cdktf.listMapperHcl(servicesUserIdentificationAdAccessDomainDomainControllerToHclTerraform, true)(this._domainController.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicesUserIdentificationAdAccessDomainDomainControllerList",
      },
      ip_user_mapping_discovery_wmi: {
        value: servicesUserIdentificationAdAccessDomainIpUserMappingDiscoveryWmiToHclTerraform(this._ipUserMappingDiscoveryWmi.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicesUserIdentificationAdAccessDomainIpUserMappingDiscoveryWmi",
      },
      user_group_mapping_ldap: {
        value: servicesUserIdentificationAdAccessDomainUserGroupMappingLdapToHclTerraform(this._userGroupMappingLdap.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicesUserIdentificationAdAccessDomainUserGroupMappingLdap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
