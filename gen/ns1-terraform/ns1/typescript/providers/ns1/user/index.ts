// https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#account_manage_account_settings User#account_manage_account_settings}
  */
  readonly accountManageAccountSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#account_manage_apikeys User#account_manage_apikeys}
  */
  readonly accountManageApikeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#account_manage_ip_whitelist User#account_manage_ip_whitelist}
  */
  readonly accountManageIpWhitelist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#account_manage_payment_methods User#account_manage_payment_methods}
  */
  readonly accountManagePaymentMethods?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#account_manage_plan User#account_manage_plan}
  */
  readonly accountManagePlan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#account_manage_teams User#account_manage_teams}
  */
  readonly accountManageTeams?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#account_manage_users User#account_manage_users}
  */
  readonly accountManageUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#account_view_activity_log User#account_view_activity_log}
  */
  readonly accountViewActivityLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#account_view_invoices User#account_view_invoices}
  */
  readonly accountViewInvoices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#data_manage_datafeeds User#data_manage_datafeeds}
  */
  readonly dataManageDatafeeds?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#data_manage_datasources User#data_manage_datasources}
  */
  readonly dataManageDatasources?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#data_push_to_datafeeds User#data_push_to_datafeeds}
  */
  readonly dataPushToDatafeeds?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#dns_manage_zones User#dns_manage_zones}
  */
  readonly dnsManageZones?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#dns_view_zones User#dns_view_zones}
  */
  readonly dnsViewZones?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#dns_zones_allow User#dns_zones_allow}
  */
  readonly dnsZonesAllow?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#dns_zones_allow_by_default User#dns_zones_allow_by_default}
  */
  readonly dnsZonesAllowByDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#dns_zones_deny User#dns_zones_deny}
  */
  readonly dnsZonesDeny?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#ip_whitelist User#ip_whitelist}
  */
  readonly ipWhitelist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#ip_whitelist_strict User#ip_whitelist_strict}
  */
  readonly ipWhitelistStrict?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#monitoring_create_jobs User#monitoring_create_jobs}
  */
  readonly monitoringCreateJobs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#monitoring_delete_jobs User#monitoring_delete_jobs}
  */
  readonly monitoringDeleteJobs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#monitoring_manage_jobs User#monitoring_manage_jobs}
  */
  readonly monitoringManageJobs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#monitoring_manage_lists User#monitoring_manage_lists}
  */
  readonly monitoringManageLists?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#monitoring_update_jobs User#monitoring_update_jobs}
  */
  readonly monitoringUpdateJobs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#monitoring_view_jobs User#monitoring_view_jobs}
  */
  readonly monitoringViewJobs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#notify User#notify}
  */
  readonly notify?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#redirects_manage_redirects User#redirects_manage_redirects}
  */
  readonly redirectsManageRedirects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#security_manage_active_directory User#security_manage_active_directory}
  */
  readonly securityManageActiveDirectory?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#security_manage_global_2fa User#security_manage_global_2fa}
  */
  readonly securityManageGlobal2Fa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#teams User#teams}
  */
  readonly teams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#username User#username}
  */
  readonly username: string;
  /**
  * dns_records_allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#dns_records_allow User#dns_records_allow}
  */
  readonly dnsRecordsAllow?: UserDnsRecordsAllow[] | cdktf.IResolvable;
  /**
  * dns_records_deny block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#dns_records_deny User#dns_records_deny}
  */
  readonly dnsRecordsDeny?: UserDnsRecordsDeny[] | cdktf.IResolvable;
}
export interface UserDnsRecordsAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#domain User#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#include_subdomains User#include_subdomains}
  */
  readonly includeSubdomains: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#type User#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#zone User#zone}
  */
  readonly zone: string;
}

export function userDnsRecordsAllowToTerraform(struct?: UserDnsRecordsAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    include_subdomains: cdktf.booleanToTerraform(struct!.includeSubdomains),
    type: cdktf.stringToTerraform(struct!.type),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function userDnsRecordsAllowToHclTerraform(struct?: UserDnsRecordsAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_subdomains: {
      value: cdktf.booleanToHclTerraform(struct!.includeSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserDnsRecordsAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserDnsRecordsAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._includeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubdomains = this._includeSubdomains;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserDnsRecordsAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._includeSubdomains = undefined;
      this._type = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._includeSubdomains = value.includeSubdomains;
      this._type = value.type;
      this._zone = value.zone;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // include_subdomains - computed: false, optional: false, required: true
  private _includeSubdomains?: boolean | cdktf.IResolvable; 
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }
  public set includeSubdomains(value: boolean | cdktf.IResolvable) {
    this._includeSubdomains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
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

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class UserDnsRecordsAllowList extends cdktf.ComplexList {
  public internalValue? : UserDnsRecordsAllow[] | cdktf.IResolvable

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
  public get(index: number): UserDnsRecordsAllowOutputReference {
    return new UserDnsRecordsAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserDnsRecordsDeny {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#domain User#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#include_subdomains User#include_subdomains}
  */
  readonly includeSubdomains: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#type User#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#zone User#zone}
  */
  readonly zone: string;
}

export function userDnsRecordsDenyToTerraform(struct?: UserDnsRecordsDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    include_subdomains: cdktf.booleanToTerraform(struct!.includeSubdomains),
    type: cdktf.stringToTerraform(struct!.type),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function userDnsRecordsDenyToHclTerraform(struct?: UserDnsRecordsDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_subdomains: {
      value: cdktf.booleanToHclTerraform(struct!.includeSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserDnsRecordsDenyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserDnsRecordsDeny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._includeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubdomains = this._includeSubdomains;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserDnsRecordsDeny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._includeSubdomains = undefined;
      this._type = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._includeSubdomains = value.includeSubdomains;
      this._type = value.type;
      this._zone = value.zone;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // include_subdomains - computed: false, optional: false, required: true
  private _includeSubdomains?: boolean | cdktf.IResolvable; 
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }
  public set includeSubdomains(value: boolean | cdktf.IResolvable) {
    this._includeSubdomains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
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

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class UserDnsRecordsDenyList extends cdktf.ComplexList {
  public internalValue? : UserDnsRecordsDeny[] | cdktf.IResolvable

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
  public get(index: number): UserDnsRecordsDenyOutputReference {
    return new UserDnsRecordsDenyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user ns1_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns1_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns1_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/user ns1_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'ns1_user',
      terraformGeneratorMetadata: {
        providerName: 'ns1',
        providerVersion: '2.7.2',
        providerVersionConstraint: '2.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountManageAccountSettings = config.accountManageAccountSettings;
    this._accountManageApikeys = config.accountManageApikeys;
    this._accountManageIpWhitelist = config.accountManageIpWhitelist;
    this._accountManagePaymentMethods = config.accountManagePaymentMethods;
    this._accountManagePlan = config.accountManagePlan;
    this._accountManageTeams = config.accountManageTeams;
    this._accountManageUsers = config.accountManageUsers;
    this._accountViewActivityLog = config.accountViewActivityLog;
    this._accountViewInvoices = config.accountViewInvoices;
    this._dataManageDatafeeds = config.dataManageDatafeeds;
    this._dataManageDatasources = config.dataManageDatasources;
    this._dataPushToDatafeeds = config.dataPushToDatafeeds;
    this._dnsManageZones = config.dnsManageZones;
    this._dnsViewZones = config.dnsViewZones;
    this._dnsZonesAllow = config.dnsZonesAllow;
    this._dnsZonesAllowByDefault = config.dnsZonesAllowByDefault;
    this._dnsZonesDeny = config.dnsZonesDeny;
    this._email = config.email;
    this._id = config.id;
    this._ipWhitelist = config.ipWhitelist;
    this._ipWhitelistStrict = config.ipWhitelistStrict;
    this._monitoringCreateJobs = config.monitoringCreateJobs;
    this._monitoringDeleteJobs = config.monitoringDeleteJobs;
    this._monitoringManageJobs = config.monitoringManageJobs;
    this._monitoringManageLists = config.monitoringManageLists;
    this._monitoringUpdateJobs = config.monitoringUpdateJobs;
    this._monitoringViewJobs = config.monitoringViewJobs;
    this._name = config.name;
    this._notify = config.notify;
    this._redirectsManageRedirects = config.redirectsManageRedirects;
    this._securityManageActiveDirectory = config.securityManageActiveDirectory;
    this._securityManageGlobal2Fa = config.securityManageGlobal2Fa;
    this._teams = config.teams;
    this._username = config.username;
    this._dnsRecordsAllow.internalValue = config.dnsRecordsAllow;
    this._dnsRecordsDeny.internalValue = config.dnsRecordsDeny;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_manage_account_settings - computed: false, optional: true, required: false
  private _accountManageAccountSettings?: boolean | cdktf.IResolvable; 
  public get accountManageAccountSettings() {
    return this.getBooleanAttribute('account_manage_account_settings');
  }
  public set accountManageAccountSettings(value: boolean | cdktf.IResolvable) {
    this._accountManageAccountSettings = value;
  }
  public resetAccountManageAccountSettings() {
    this._accountManageAccountSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountManageAccountSettingsInput() {
    return this._accountManageAccountSettings;
  }

  // account_manage_apikeys - computed: false, optional: true, required: false
  private _accountManageApikeys?: boolean | cdktf.IResolvable; 
  public get accountManageApikeys() {
    return this.getBooleanAttribute('account_manage_apikeys');
  }
  public set accountManageApikeys(value: boolean | cdktf.IResolvable) {
    this._accountManageApikeys = value;
  }
  public resetAccountManageApikeys() {
    this._accountManageApikeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountManageApikeysInput() {
    return this._accountManageApikeys;
  }

  // account_manage_ip_whitelist - computed: false, optional: true, required: false
  private _accountManageIpWhitelist?: boolean | cdktf.IResolvable; 
  public get accountManageIpWhitelist() {
    return this.getBooleanAttribute('account_manage_ip_whitelist');
  }
  public set accountManageIpWhitelist(value: boolean | cdktf.IResolvable) {
    this._accountManageIpWhitelist = value;
  }
  public resetAccountManageIpWhitelist() {
    this._accountManageIpWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountManageIpWhitelistInput() {
    return this._accountManageIpWhitelist;
  }

  // account_manage_payment_methods - computed: false, optional: true, required: false
  private _accountManagePaymentMethods?: boolean | cdktf.IResolvable; 
  public get accountManagePaymentMethods() {
    return this.getBooleanAttribute('account_manage_payment_methods');
  }
  public set accountManagePaymentMethods(value: boolean | cdktf.IResolvable) {
    this._accountManagePaymentMethods = value;
  }
  public resetAccountManagePaymentMethods() {
    this._accountManagePaymentMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountManagePaymentMethodsInput() {
    return this._accountManagePaymentMethods;
  }

  // account_manage_plan - computed: false, optional: true, required: false
  private _accountManagePlan?: boolean | cdktf.IResolvable; 
  public get accountManagePlan() {
    return this.getBooleanAttribute('account_manage_plan');
  }
  public set accountManagePlan(value: boolean | cdktf.IResolvable) {
    this._accountManagePlan = value;
  }
  public resetAccountManagePlan() {
    this._accountManagePlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountManagePlanInput() {
    return this._accountManagePlan;
  }

  // account_manage_teams - computed: false, optional: true, required: false
  private _accountManageTeams?: boolean | cdktf.IResolvable; 
  public get accountManageTeams() {
    return this.getBooleanAttribute('account_manage_teams');
  }
  public set accountManageTeams(value: boolean | cdktf.IResolvable) {
    this._accountManageTeams = value;
  }
  public resetAccountManageTeams() {
    this._accountManageTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountManageTeamsInput() {
    return this._accountManageTeams;
  }

  // account_manage_users - computed: false, optional: true, required: false
  private _accountManageUsers?: boolean | cdktf.IResolvable; 
  public get accountManageUsers() {
    return this.getBooleanAttribute('account_manage_users');
  }
  public set accountManageUsers(value: boolean | cdktf.IResolvable) {
    this._accountManageUsers = value;
  }
  public resetAccountManageUsers() {
    this._accountManageUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountManageUsersInput() {
    return this._accountManageUsers;
  }

  // account_view_activity_log - computed: false, optional: true, required: false
  private _accountViewActivityLog?: boolean | cdktf.IResolvable; 
  public get accountViewActivityLog() {
    return this.getBooleanAttribute('account_view_activity_log');
  }
  public set accountViewActivityLog(value: boolean | cdktf.IResolvable) {
    this._accountViewActivityLog = value;
  }
  public resetAccountViewActivityLog() {
    this._accountViewActivityLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountViewActivityLogInput() {
    return this._accountViewActivityLog;
  }

  // account_view_invoices - computed: false, optional: true, required: false
  private _accountViewInvoices?: boolean | cdktf.IResolvable; 
  public get accountViewInvoices() {
    return this.getBooleanAttribute('account_view_invoices');
  }
  public set accountViewInvoices(value: boolean | cdktf.IResolvable) {
    this._accountViewInvoices = value;
  }
  public resetAccountViewInvoices() {
    this._accountViewInvoices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountViewInvoicesInput() {
    return this._accountViewInvoices;
  }

  // data_manage_datafeeds - computed: false, optional: true, required: false
  private _dataManageDatafeeds?: boolean | cdktf.IResolvable; 
  public get dataManageDatafeeds() {
    return this.getBooleanAttribute('data_manage_datafeeds');
  }
  public set dataManageDatafeeds(value: boolean | cdktf.IResolvable) {
    this._dataManageDatafeeds = value;
  }
  public resetDataManageDatafeeds() {
    this._dataManageDatafeeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataManageDatafeedsInput() {
    return this._dataManageDatafeeds;
  }

  // data_manage_datasources - computed: false, optional: true, required: false
  private _dataManageDatasources?: boolean | cdktf.IResolvable; 
  public get dataManageDatasources() {
    return this.getBooleanAttribute('data_manage_datasources');
  }
  public set dataManageDatasources(value: boolean | cdktf.IResolvable) {
    this._dataManageDatasources = value;
  }
  public resetDataManageDatasources() {
    this._dataManageDatasources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataManageDatasourcesInput() {
    return this._dataManageDatasources;
  }

  // data_push_to_datafeeds - computed: false, optional: true, required: false
  private _dataPushToDatafeeds?: boolean | cdktf.IResolvable; 
  public get dataPushToDatafeeds() {
    return this.getBooleanAttribute('data_push_to_datafeeds');
  }
  public set dataPushToDatafeeds(value: boolean | cdktf.IResolvable) {
    this._dataPushToDatafeeds = value;
  }
  public resetDataPushToDatafeeds() {
    this._dataPushToDatafeeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPushToDatafeedsInput() {
    return this._dataPushToDatafeeds;
  }

  // dns_manage_zones - computed: false, optional: true, required: false
  private _dnsManageZones?: boolean | cdktf.IResolvable; 
  public get dnsManageZones() {
    return this.getBooleanAttribute('dns_manage_zones');
  }
  public set dnsManageZones(value: boolean | cdktf.IResolvable) {
    this._dnsManageZones = value;
  }
  public resetDnsManageZones() {
    this._dnsManageZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsManageZonesInput() {
    return this._dnsManageZones;
  }

  // dns_view_zones - computed: false, optional: true, required: false
  private _dnsViewZones?: boolean | cdktf.IResolvable; 
  public get dnsViewZones() {
    return this.getBooleanAttribute('dns_view_zones');
  }
  public set dnsViewZones(value: boolean | cdktf.IResolvable) {
    this._dnsViewZones = value;
  }
  public resetDnsViewZones() {
    this._dnsViewZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsViewZonesInput() {
    return this._dnsViewZones;
  }

  // dns_zones_allow - computed: false, optional: true, required: false
  private _dnsZonesAllow?: string[]; 
  public get dnsZonesAllow() {
    return this.getListAttribute('dns_zones_allow');
  }
  public set dnsZonesAllow(value: string[]) {
    this._dnsZonesAllow = value;
  }
  public resetDnsZonesAllow() {
    this._dnsZonesAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZonesAllowInput() {
    return this._dnsZonesAllow;
  }

  // dns_zones_allow_by_default - computed: false, optional: true, required: false
  private _dnsZonesAllowByDefault?: boolean | cdktf.IResolvable; 
  public get dnsZonesAllowByDefault() {
    return this.getBooleanAttribute('dns_zones_allow_by_default');
  }
  public set dnsZonesAllowByDefault(value: boolean | cdktf.IResolvable) {
    this._dnsZonesAllowByDefault = value;
  }
  public resetDnsZonesAllowByDefault() {
    this._dnsZonesAllowByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZonesAllowByDefaultInput() {
    return this._dnsZonesAllowByDefault;
  }

  // dns_zones_deny - computed: false, optional: true, required: false
  private _dnsZonesDeny?: string[]; 
  public get dnsZonesDeny() {
    return this.getListAttribute('dns_zones_deny');
  }
  public set dnsZonesDeny(value: string[]) {
    this._dnsZonesDeny = value;
  }
  public resetDnsZonesDeny() {
    this._dnsZonesDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZonesDenyInput() {
    return this._dnsZonesDeny;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // ip_whitelist - computed: false, optional: true, required: false
  private _ipWhitelist?: string[]; 
  public get ipWhitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_whitelist'));
  }
  public set ipWhitelist(value: string[]) {
    this._ipWhitelist = value;
  }
  public resetIpWhitelist() {
    this._ipWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWhitelistInput() {
    return this._ipWhitelist;
  }

  // ip_whitelist_strict - computed: false, optional: true, required: false
  private _ipWhitelistStrict?: boolean | cdktf.IResolvable; 
  public get ipWhitelistStrict() {
    return this.getBooleanAttribute('ip_whitelist_strict');
  }
  public set ipWhitelistStrict(value: boolean | cdktf.IResolvable) {
    this._ipWhitelistStrict = value;
  }
  public resetIpWhitelistStrict() {
    this._ipWhitelistStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWhitelistStrictInput() {
    return this._ipWhitelistStrict;
  }

  // monitoring_create_jobs - computed: false, optional: true, required: false
  private _monitoringCreateJobs?: boolean | cdktf.IResolvable; 
  public get monitoringCreateJobs() {
    return this.getBooleanAttribute('monitoring_create_jobs');
  }
  public set monitoringCreateJobs(value: boolean | cdktf.IResolvable) {
    this._monitoringCreateJobs = value;
  }
  public resetMonitoringCreateJobs() {
    this._monitoringCreateJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringCreateJobsInput() {
    return this._monitoringCreateJobs;
  }

  // monitoring_delete_jobs - computed: false, optional: true, required: false
  private _monitoringDeleteJobs?: boolean | cdktf.IResolvable; 
  public get monitoringDeleteJobs() {
    return this.getBooleanAttribute('monitoring_delete_jobs');
  }
  public set monitoringDeleteJobs(value: boolean | cdktf.IResolvable) {
    this._monitoringDeleteJobs = value;
  }
  public resetMonitoringDeleteJobs() {
    this._monitoringDeleteJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringDeleteJobsInput() {
    return this._monitoringDeleteJobs;
  }

  // monitoring_manage_jobs - computed: false, optional: true, required: false
  private _monitoringManageJobs?: boolean | cdktf.IResolvable; 
  public get monitoringManageJobs() {
    return this.getBooleanAttribute('monitoring_manage_jobs');
  }
  public set monitoringManageJobs(value: boolean | cdktf.IResolvable) {
    this._monitoringManageJobs = value;
  }
  public resetMonitoringManageJobs() {
    this._monitoringManageJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringManageJobsInput() {
    return this._monitoringManageJobs;
  }

  // monitoring_manage_lists - computed: false, optional: true, required: false
  private _monitoringManageLists?: boolean | cdktf.IResolvable; 
  public get monitoringManageLists() {
    return this.getBooleanAttribute('monitoring_manage_lists');
  }
  public set monitoringManageLists(value: boolean | cdktf.IResolvable) {
    this._monitoringManageLists = value;
  }
  public resetMonitoringManageLists() {
    this._monitoringManageLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringManageListsInput() {
    return this._monitoringManageLists;
  }

  // monitoring_update_jobs - computed: false, optional: true, required: false
  private _monitoringUpdateJobs?: boolean | cdktf.IResolvable; 
  public get monitoringUpdateJobs() {
    return this.getBooleanAttribute('monitoring_update_jobs');
  }
  public set monitoringUpdateJobs(value: boolean | cdktf.IResolvable) {
    this._monitoringUpdateJobs = value;
  }
  public resetMonitoringUpdateJobs() {
    this._monitoringUpdateJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringUpdateJobsInput() {
    return this._monitoringUpdateJobs;
  }

  // monitoring_view_jobs - computed: false, optional: true, required: false
  private _monitoringViewJobs?: boolean | cdktf.IResolvable; 
  public get monitoringViewJobs() {
    return this.getBooleanAttribute('monitoring_view_jobs');
  }
  public set monitoringViewJobs(value: boolean | cdktf.IResolvable) {
    this._monitoringViewJobs = value;
  }
  public resetMonitoringViewJobs() {
    this._monitoringViewJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringViewJobsInput() {
    return this._monitoringViewJobs;
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

  // notify - computed: true, optional: true, required: false
  private _notify?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get notify() {
    return this.getBooleanMapAttribute('notify');
  }
  public set notify(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }

  // redirects_manage_redirects - computed: false, optional: true, required: false
  private _redirectsManageRedirects?: boolean | cdktf.IResolvable; 
  public get redirectsManageRedirects() {
    return this.getBooleanAttribute('redirects_manage_redirects');
  }
  public set redirectsManageRedirects(value: boolean | cdktf.IResolvable) {
    this._redirectsManageRedirects = value;
  }
  public resetRedirectsManageRedirects() {
    this._redirectsManageRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectsManageRedirectsInput() {
    return this._redirectsManageRedirects;
  }

  // security_manage_active_directory - computed: false, optional: true, required: false
  private _securityManageActiveDirectory?: boolean | cdktf.IResolvable; 
  public get securityManageActiveDirectory() {
    return this.getBooleanAttribute('security_manage_active_directory');
  }
  public set securityManageActiveDirectory(value: boolean | cdktf.IResolvable) {
    this._securityManageActiveDirectory = value;
  }
  public resetSecurityManageActiveDirectory() {
    this._securityManageActiveDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityManageActiveDirectoryInput() {
    return this._securityManageActiveDirectory;
  }

  // security_manage_global_2fa - computed: false, optional: true, required: false
  private _securityManageGlobal2Fa?: boolean | cdktf.IResolvable; 
  public get securityManageGlobal2Fa() {
    return this.getBooleanAttribute('security_manage_global_2fa');
  }
  public set securityManageGlobal2Fa(value: boolean | cdktf.IResolvable) {
    this._securityManageGlobal2Fa = value;
  }
  public resetSecurityManageGlobal2Fa() {
    this._securityManageGlobal2Fa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityManageGlobal2FaInput() {
    return this._securityManageGlobal2Fa;
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return this.getListAttribute('teams');
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
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

  // dns_records_allow - computed: false, optional: true, required: false
  private _dnsRecordsAllow = new UserDnsRecordsAllowList(this, "dns_records_allow", false);
  public get dnsRecordsAllow() {
    return this._dnsRecordsAllow;
  }
  public putDnsRecordsAllow(value: UserDnsRecordsAllow[] | cdktf.IResolvable) {
    this._dnsRecordsAllow.internalValue = value;
  }
  public resetDnsRecordsAllow() {
    this._dnsRecordsAllow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordsAllowInput() {
    return this._dnsRecordsAllow.internalValue;
  }

  // dns_records_deny - computed: false, optional: true, required: false
  private _dnsRecordsDeny = new UserDnsRecordsDenyList(this, "dns_records_deny", false);
  public get dnsRecordsDeny() {
    return this._dnsRecordsDeny;
  }
  public putDnsRecordsDeny(value: UserDnsRecordsDeny[] | cdktf.IResolvable) {
    this._dnsRecordsDeny.internalValue = value;
  }
  public resetDnsRecordsDeny() {
    this._dnsRecordsDeny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordsDenyInput() {
    return this._dnsRecordsDeny.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_manage_account_settings: cdktf.booleanToTerraform(this._accountManageAccountSettings),
      account_manage_apikeys: cdktf.booleanToTerraform(this._accountManageApikeys),
      account_manage_ip_whitelist: cdktf.booleanToTerraform(this._accountManageIpWhitelist),
      account_manage_payment_methods: cdktf.booleanToTerraform(this._accountManagePaymentMethods),
      account_manage_plan: cdktf.booleanToTerraform(this._accountManagePlan),
      account_manage_teams: cdktf.booleanToTerraform(this._accountManageTeams),
      account_manage_users: cdktf.booleanToTerraform(this._accountManageUsers),
      account_view_activity_log: cdktf.booleanToTerraform(this._accountViewActivityLog),
      account_view_invoices: cdktf.booleanToTerraform(this._accountViewInvoices),
      data_manage_datafeeds: cdktf.booleanToTerraform(this._dataManageDatafeeds),
      data_manage_datasources: cdktf.booleanToTerraform(this._dataManageDatasources),
      data_push_to_datafeeds: cdktf.booleanToTerraform(this._dataPushToDatafeeds),
      dns_manage_zones: cdktf.booleanToTerraform(this._dnsManageZones),
      dns_view_zones: cdktf.booleanToTerraform(this._dnsViewZones),
      dns_zones_allow: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsZonesAllow),
      dns_zones_allow_by_default: cdktf.booleanToTerraform(this._dnsZonesAllowByDefault),
      dns_zones_deny: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsZonesDeny),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      ip_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipWhitelist),
      ip_whitelist_strict: cdktf.booleanToTerraform(this._ipWhitelistStrict),
      monitoring_create_jobs: cdktf.booleanToTerraform(this._monitoringCreateJobs),
      monitoring_delete_jobs: cdktf.booleanToTerraform(this._monitoringDeleteJobs),
      monitoring_manage_jobs: cdktf.booleanToTerraform(this._monitoringManageJobs),
      monitoring_manage_lists: cdktf.booleanToTerraform(this._monitoringManageLists),
      monitoring_update_jobs: cdktf.booleanToTerraform(this._monitoringUpdateJobs),
      monitoring_view_jobs: cdktf.booleanToTerraform(this._monitoringViewJobs),
      name: cdktf.stringToTerraform(this._name),
      notify: cdktf.hashMapper(cdktf.booleanToTerraform)(this._notify),
      redirects_manage_redirects: cdktf.booleanToTerraform(this._redirectsManageRedirects),
      security_manage_active_directory: cdktf.booleanToTerraform(this._securityManageActiveDirectory),
      security_manage_global_2fa: cdktf.booleanToTerraform(this._securityManageGlobal2Fa),
      teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teams),
      username: cdktf.stringToTerraform(this._username),
      dns_records_allow: cdktf.listMapper(userDnsRecordsAllowToTerraform, true)(this._dnsRecordsAllow.internalValue),
      dns_records_deny: cdktf.listMapper(userDnsRecordsDenyToTerraform, true)(this._dnsRecordsDeny.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_manage_account_settings: {
        value: cdktf.booleanToHclTerraform(this._accountManageAccountSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      account_manage_apikeys: {
        value: cdktf.booleanToHclTerraform(this._accountManageApikeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      account_manage_ip_whitelist: {
        value: cdktf.booleanToHclTerraform(this._accountManageIpWhitelist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      account_manage_payment_methods: {
        value: cdktf.booleanToHclTerraform(this._accountManagePaymentMethods),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      account_manage_plan: {
        value: cdktf.booleanToHclTerraform(this._accountManagePlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      account_manage_teams: {
        value: cdktf.booleanToHclTerraform(this._accountManageTeams),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      account_manage_users: {
        value: cdktf.booleanToHclTerraform(this._accountManageUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      account_view_activity_log: {
        value: cdktf.booleanToHclTerraform(this._accountViewActivityLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      account_view_invoices: {
        value: cdktf.booleanToHclTerraform(this._accountViewInvoices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_manage_datafeeds: {
        value: cdktf.booleanToHclTerraform(this._dataManageDatafeeds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_manage_datasources: {
        value: cdktf.booleanToHclTerraform(this._dataManageDatasources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_push_to_datafeeds: {
        value: cdktf.booleanToHclTerraform(this._dataPushToDatafeeds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_manage_zones: {
        value: cdktf.booleanToHclTerraform(this._dnsManageZones),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_view_zones: {
        value: cdktf.booleanToHclTerraform(this._dnsViewZones),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_zones_allow: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsZonesAllow),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_zones_allow_by_default: {
        value: cdktf.booleanToHclTerraform(this._dnsZonesAllowByDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_zones_deny: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsZonesDeny),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      ip_whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipWhitelist),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_whitelist_strict: {
        value: cdktf.booleanToHclTerraform(this._ipWhitelistStrict),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitoring_create_jobs: {
        value: cdktf.booleanToHclTerraform(this._monitoringCreateJobs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitoring_delete_jobs: {
        value: cdktf.booleanToHclTerraform(this._monitoringDeleteJobs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitoring_manage_jobs: {
        value: cdktf.booleanToHclTerraform(this._monitoringManageJobs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitoring_manage_lists: {
        value: cdktf.booleanToHclTerraform(this._monitoringManageLists),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitoring_update_jobs: {
        value: cdktf.booleanToHclTerraform(this._monitoringUpdateJobs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitoring_view_jobs: {
        value: cdktf.booleanToHclTerraform(this._monitoringViewJobs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify: {
        value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(this._notify),
        isBlock: false,
        type: "map",
        storageClassType: "booleanMap",
      },
      redirects_manage_redirects: {
        value: cdktf.booleanToHclTerraform(this._redirectsManageRedirects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_manage_active_directory: {
        value: cdktf.booleanToHclTerraform(this._securityManageActiveDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_manage_global_2fa: {
        value: cdktf.booleanToHclTerraform(this._securityManageGlobal2Fa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._teams),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_records_allow: {
        value: cdktf.listMapperHcl(userDnsRecordsAllowToHclTerraform, true)(this._dnsRecordsAllow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserDnsRecordsAllowList",
      },
      dns_records_deny: {
        value: cdktf.listMapperHcl(userDnsRecordsDenyToHclTerraform, true)(this._dnsRecordsDeny.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserDnsRecordsDenyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
