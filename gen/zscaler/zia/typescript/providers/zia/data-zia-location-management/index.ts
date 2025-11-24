// https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/location_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaLocationManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Basic Authentication at the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/location_management#basic_auth_enabled DataZiaLocationManagement#basic_auth_enabled}
  */
  readonly basicAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/location_management#id DataZiaLocationManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/location_management#name DataZiaLocationManagement#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/location_management#parent_name DataZiaLocationManagement#parent_name}
  */
  readonly parentName?: string;
}
export interface DataZiaLocationManagementExtranet {
}

export function dataZiaLocationManagementExtranetToTerraform(struct?: DataZiaLocationManagementExtranet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaLocationManagementExtranetToHclTerraform(struct?: DataZiaLocationManagementExtranet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaLocationManagementExtranetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZiaLocationManagementExtranet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaLocationManagementExtranet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }
}

export class DataZiaLocationManagementExtranetList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaLocationManagementExtranetOutputReference {
    return new DataZiaLocationManagementExtranetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaLocationManagementExtranetDns {
}

export function dataZiaLocationManagementExtranetDnsToTerraform(struct?: DataZiaLocationManagementExtranetDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaLocationManagementExtranetDnsToHclTerraform(struct?: DataZiaLocationManagementExtranetDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaLocationManagementExtranetDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZiaLocationManagementExtranetDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaLocationManagementExtranetDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }
}

export class DataZiaLocationManagementExtranetDnsList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaLocationManagementExtranetDnsOutputReference {
    return new DataZiaLocationManagementExtranetDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaLocationManagementExtranetIpPool {
}

export function dataZiaLocationManagementExtranetIpPoolToTerraform(struct?: DataZiaLocationManagementExtranetIpPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaLocationManagementExtranetIpPoolToHclTerraform(struct?: DataZiaLocationManagementExtranetIpPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaLocationManagementExtranetIpPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZiaLocationManagementExtranetIpPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaLocationManagementExtranetIpPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }
}

export class DataZiaLocationManagementExtranetIpPoolList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaLocationManagementExtranetIpPoolOutputReference {
    return new DataZiaLocationManagementExtranetIpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaLocationManagementVpnCredentialsLocation {
}

export function dataZiaLocationManagementVpnCredentialsLocationToTerraform(struct?: DataZiaLocationManagementVpnCredentialsLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaLocationManagementVpnCredentialsLocationToHclTerraform(struct?: DataZiaLocationManagementVpnCredentialsLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaLocationManagementVpnCredentialsLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZiaLocationManagementVpnCredentialsLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaLocationManagementVpnCredentialsLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZiaLocationManagementVpnCredentialsLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaLocationManagementVpnCredentialsLocationOutputReference {
    return new DataZiaLocationManagementVpnCredentialsLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaLocationManagementVpnCredentialsManagedBy {
}

export function dataZiaLocationManagementVpnCredentialsManagedByToTerraform(struct?: DataZiaLocationManagementVpnCredentialsManagedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaLocationManagementVpnCredentialsManagedByToHclTerraform(struct?: DataZiaLocationManagementVpnCredentialsManagedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaLocationManagementVpnCredentialsManagedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZiaLocationManagementVpnCredentialsManagedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaLocationManagementVpnCredentialsManagedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZiaLocationManagementVpnCredentialsManagedByList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaLocationManagementVpnCredentialsManagedByOutputReference {
    return new DataZiaLocationManagementVpnCredentialsManagedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaLocationManagementVpnCredentials {
}

export function dataZiaLocationManagementVpnCredentialsToTerraform(struct?: DataZiaLocationManagementVpnCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaLocationManagementVpnCredentialsToHclTerraform(struct?: DataZiaLocationManagementVpnCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaLocationManagementVpnCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZiaLocationManagementVpnCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaLocationManagementVpnCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataZiaLocationManagementVpnCredentialsLocationList(this, "location", false);
  public get location() {
    return this._location;
  }

  // managed_by - computed: true, optional: false, required: false
  private _managedBy = new DataZiaLocationManagementVpnCredentialsManagedByList(this, "managed_by", false);
  public get managedBy() {
    return this._managedBy;
  }

  // pre_shared_key - computed: true, optional: false, required: false
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZiaLocationManagementVpnCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaLocationManagementVpnCredentialsOutputReference {
    return new DataZiaLocationManagementVpnCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/location_management zia_location_management}
*/
export class DataZiaLocationManagement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_location_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaLocationManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaLocationManagement to import
  * @param importFromId The id of the existing DataZiaLocationManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/location_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaLocationManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_location_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/location_management zia_location_management} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaLocationManagementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaLocationManagementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_location_management',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.3',
        providerVersionConstraint: '4.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._basicAuthEnabled = config.basicAuthEnabled;
    this._id = config.id;
    this._name = config.name;
    this._parentName = config.parentName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aup_block_internet_until_accepted - computed: true, optional: false, required: false
  public get aupBlockInternetUntilAccepted() {
    return this.getBooleanAttribute('aup_block_internet_until_accepted');
  }

  // aup_enabled - computed: true, optional: false, required: false
  public get aupEnabled() {
    return this.getBooleanAttribute('aup_enabled');
  }

  // aup_force_ssl_inspection - computed: true, optional: false, required: false
  public get aupForceSslInspection() {
    return this.getBooleanAttribute('aup_force_ssl_inspection');
  }

  // aup_timeout_in_days - computed: true, optional: false, required: false
  public get aupTimeoutInDays() {
    return this.getNumberAttribute('aup_timeout_in_days');
  }

  // auth_required - computed: true, optional: false, required: false
  public get authRequired() {
    return this.getBooleanAttribute('auth_required');
  }

  // basic_auth_enabled - computed: true, optional: true, required: false
  private _basicAuthEnabled?: boolean | cdktf.IResolvable; 
  public get basicAuthEnabled() {
    return this.getBooleanAttribute('basic_auth_enabled');
  }
  public set basicAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._basicAuthEnabled = value;
  }
  public resetBasicAuthEnabled() {
    this._basicAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthEnabledInput() {
    return this._basicAuthEnabled;
  }

  // caution_enabled - computed: true, optional: false, required: false
  public get cautionEnabled() {
    return this.getBooleanAttribute('caution_enabled');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // default_extranet_dns - computed: true, optional: false, required: false
  public get defaultExtranetDns() {
    return this.getBooleanAttribute('default_extranet_dns');
  }

  // default_extranet_ts_pool - computed: true, optional: false, required: false
  public get defaultExtranetTsPool() {
    return this.getBooleanAttribute('default_extranet_ts_pool');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // digest_auth_enabled - computed: true, optional: false, required: false
  public get digestAuthEnabled() {
    return this.getBooleanAttribute('digest_auth_enabled');
  }

  // display_time_unit - computed: true, optional: false, required: false
  public get displayTimeUnit() {
    return this.getStringAttribute('display_time_unit');
  }

  // dn_bandwidth - computed: true, optional: false, required: false
  public get dnBandwidth() {
    return this.getNumberAttribute('dn_bandwidth');
  }

  // extranet - computed: true, optional: false, required: false
  private _extranet = new DataZiaLocationManagementExtranetList(this, "extranet", true);
  public get extranet() {
    return this._extranet;
  }

  // extranet_dns - computed: true, optional: false, required: false
  private _extranetDns = new DataZiaLocationManagementExtranetDnsList(this, "extranet_dns", true);
  public get extranetDns() {
    return this._extranetDns;
  }

  // extranet_ip_pool - computed: true, optional: false, required: false
  private _extranetIpPool = new DataZiaLocationManagementExtranetIpPoolList(this, "extranet_ip_pool", true);
  public get extranetIpPool() {
    return this._extranetIpPool;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // idle_time_in_minutes - computed: true, optional: false, required: false
  public get idleTimeInMinutes() {
    return this.getNumberAttribute('idle_time_in_minutes');
  }

  // iot_discovery_enabled - computed: true, optional: false, required: false
  public get iotDiscoveryEnabled() {
    return this.getBooleanAttribute('iot_discovery_enabled');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // ips_control - computed: true, optional: false, required: false
  public get ipsControl() {
    return this.getBooleanAttribute('ips_control');
  }

  // kerberos_auth_enabled - computed: true, optional: false, required: false
  public get kerberosAuthEnabled() {
    return this.getBooleanAttribute('kerberos_auth_enabled');
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

  // ofw_enabled - computed: true, optional: false, required: false
  public get ofwEnabled() {
    return this.getBooleanAttribute('ofw_enabled');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }

  // parent_name - computed: false, optional: true, required: false
  private _parentName?: string; 
  public get parentName() {
    return this.getStringAttribute('parent_name');
  }
  public set parentName(value: string) {
    this._parentName = value;
  }
  public resetParentName() {
    this._parentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentNameInput() {
    return this._parentName;
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getListAttribute('ports');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // ssl_scan_enabled - computed: true, optional: false, required: false
  public get sslScanEnabled() {
    return this.getBooleanAttribute('ssl_scan_enabled');
  }

  // surrogate_ip - computed: true, optional: false, required: false
  public get surrogateIp() {
    return this.getBooleanAttribute('surrogate_ip');
  }

  // surrogate_ip_enforced_for_known_browsers - computed: true, optional: false, required: false
  public get surrogateIpEnforcedForKnownBrowsers() {
    return this.getBooleanAttribute('surrogate_ip_enforced_for_known_browsers');
  }

  // surrogate_refresh_time_in_minutes - computed: true, optional: false, required: false
  public get surrogateRefreshTimeInMinutes() {
    return this.getNumberAttribute('surrogate_refresh_time_in_minutes');
  }

  // surrogate_refresh_time_unit - computed: true, optional: false, required: false
  public get surrogateRefreshTimeUnit() {
    return this.getStringAttribute('surrogate_refresh_time_unit');
  }

  // tz - computed: true, optional: false, required: false
  public get tz() {
    return this.getStringAttribute('tz');
  }

  // up_bandwidth - computed: true, optional: false, required: false
  public get upBandwidth() {
    return this.getNumberAttribute('up_bandwidth');
  }

  // vpn_credentials - computed: true, optional: false, required: false
  private _vpnCredentials = new DataZiaLocationManagementVpnCredentialsList(this, "vpn_credentials", false);
  public get vpnCredentials() {
    return this._vpnCredentials;
  }

  // xff_forward_enabled - computed: true, optional: false, required: false
  public get xffForwardEnabled() {
    return this.getBooleanAttribute('xff_forward_enabled');
  }

  // zapp_ssl_scan_enabled - computed: true, optional: false, required: false
  public get zappSslScanEnabled() {
    return this.getBooleanAttribute('zapp_ssl_scan_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      basic_auth_enabled: cdktf.booleanToTerraform(this._basicAuthEnabled),
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_name: cdktf.stringToTerraform(this._parentName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      basic_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._basicAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
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
      parent_name: {
        value: cdktf.stringToHclTerraform(this._parentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
