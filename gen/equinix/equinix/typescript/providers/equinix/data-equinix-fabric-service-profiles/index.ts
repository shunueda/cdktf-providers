// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixFabricServiceProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional boolean flag to indicate if the filters will be AND'd together. Defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles#and_filters DataEquinixFabricServiceProfiles#and_filters}
  */
  readonly andFilters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles#id DataEquinixFabricServiceProfiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * flips view between buyer and seller representation. Available values : aSide, zSide. Default value : aSide
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles#view_point DataEquinixFabricServiceProfiles#view_point}
  */
  readonly viewPoint?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles#filter DataEquinixFabricServiceProfiles#filter}
  */
  readonly filter: DataEquinixFabricServiceProfilesFilter[] | cdktf.IResolvable;
  /**
  * pagination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles#pagination DataEquinixFabricServiceProfiles#pagination}
  */
  readonly pagination?: DataEquinixFabricServiceProfilesPagination;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles#sort DataEquinixFabricServiceProfiles#sort}
  */
  readonly sort?: DataEquinixFabricServiceProfilesSort[] | cdktf.IResolvable;
}
export interface DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsApiConfig {
}

export function dataEquinixFabricServiceProfilesDataAccessPointTypeConfigsApiConfigToTerraform(struct?: DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsApiConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataAccessPointTypeConfigsApiConfigToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsApiConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsApiConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsApiConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsApiConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_over_subscription - computed: true, optional: false, required: false
  public get allowOverSubscription() {
    return this.getBooleanAttribute('allow_over_subscription');
  }

  // api_available - computed: true, optional: false, required: false
  public get apiAvailable() {
    return this.getBooleanAttribute('api_available');
  }

  // bandwidth_from_api - computed: true, optional: false, required: false
  public get bandwidthFromApi() {
    return this.getBooleanAttribute('bandwidth_from_api');
  }

  // equinix_managed_port - computed: true, optional: false, required: false
  public get equinixManagedPort() {
    return this.getBooleanAttribute('equinix_managed_port');
  }

  // equinix_managed_vlan - computed: true, optional: false, required: false
  public get equinixManagedVlan() {
    return this.getBooleanAttribute('equinix_managed_vlan');
  }

  // integration_id - computed: true, optional: false, required: false
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }

  // over_subscription_limit - computed: true, optional: false, required: false
  public get overSubscriptionLimit() {
    return this.getNumberAttribute('over_subscription_limit');
  }
}

export class DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsApiConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsApiConfigOutputReference {
    return new DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsApiConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsAuthenticationKey {
}

export function dataEquinixFabricServiceProfilesDataAccessPointTypeConfigsAuthenticationKeyToTerraform(struct?: DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsAuthenticationKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataAccessPointTypeConfigsAuthenticationKeyToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsAuthenticationKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsAuthenticationKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsAuthenticationKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsAuthenticationKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}

export class DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsAuthenticationKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsAuthenticationKeyOutputReference {
    return new DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsAuthenticationKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsLinkProtocolConfig {
}

export function dataEquinixFabricServiceProfilesDataAccessPointTypeConfigsLinkProtocolConfigToTerraform(struct?: DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsLinkProtocolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataAccessPointTypeConfigsLinkProtocolConfigToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsLinkProtocolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsLinkProtocolConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsLinkProtocolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsLinkProtocolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encapsulation - computed: true, optional: false, required: false
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }

  // encapsulation_strategy - computed: true, optional: false, required: false
  public get encapsulationStrategy() {
    return this.getStringAttribute('encapsulation_strategy');
  }

  // reuse_vlan_s_tag - computed: true, optional: false, required: false
  public get reuseVlanSTag() {
    return this.getBooleanAttribute('reuse_vlan_s_tag');
  }
}

export class DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsLinkProtocolConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsLinkProtocolConfigOutputReference {
    return new DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsLinkProtocolConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesDataAccessPointTypeConfigs {
}

export function dataEquinixFabricServiceProfilesDataAccessPointTypeConfigsToTerraform(struct?: DataEquinixFabricServiceProfilesDataAccessPointTypeConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataAccessPointTypeConfigsToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataAccessPointTypeConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataAccessPointTypeConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataAccessPointTypeConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_bandwidth_auto_approval - computed: true, optional: false, required: false
  public get allowBandwidthAutoApproval() {
    return this.getBooleanAttribute('allow_bandwidth_auto_approval');
  }

  // allow_bandwidth_upgrade - computed: true, optional: false, required: false
  public get allowBandwidthUpgrade() {
    return this.getBooleanAttribute('allow_bandwidth_upgrade');
  }

  // allow_custom_bandwidth - computed: true, optional: false, required: false
  public get allowCustomBandwidth() {
    return this.getBooleanAttribute('allow_custom_bandwidth');
  }

  // allow_remote_connections - computed: true, optional: false, required: false
  public get allowRemoteConnections() {
    return this.getBooleanAttribute('allow_remote_connections');
  }

  // api_config - computed: true, optional: false, required: false
  private _apiConfig = new DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsApiConfigList(this, "api_config", true);
  public get apiConfig() {
    return this._apiConfig;
  }

  // authentication_key - computed: true, optional: false, required: false
  private _authenticationKey = new DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsAuthenticationKeyList(this, "authentication_key", true);
  public get authenticationKey() {
    return this._authenticationKey;
  }

  // bandwidth_alert_threshold - computed: true, optional: false, required: false
  public get bandwidthAlertThreshold() {
    return this.getNumberAttribute('bandwidth_alert_threshold');
  }

  // connection_label - computed: true, optional: false, required: false
  public get connectionLabel() {
    return this.getStringAttribute('connection_label');
  }

  // connection_redundancy_required - computed: true, optional: false, required: false
  public get connectionRedundancyRequired() {
    return this.getBooleanAttribute('connection_redundancy_required');
  }

  // enable_auto_generate_service_key - computed: true, optional: false, required: false
  public get enableAutoGenerateServiceKey() {
    return this.getBooleanAttribute('enable_auto_generate_service_key');
  }

  // link_protocol_config - computed: true, optional: false, required: false
  private _linkProtocolConfig = new DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsLinkProtocolConfigList(this, "link_protocol_config", true);
  public get linkProtocolConfig() {
    return this._linkProtocolConfig;
  }

  // selective_redundancy - computed: true, optional: false, required: false
  public get selectiveRedundancy() {
    return this.getBooleanAttribute('selective_redundancy');
  }

  // supported_bandwidths - computed: true, optional: false, required: false
  public get supportedBandwidths() {
    return this.getNumberListAttribute('supported_bandwidths');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsOutputReference {
    return new DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesDataAccount {
}

export function dataEquinixFabricServiceProfilesDataAccountToTerraform(struct?: DataEquinixFabricServiceProfilesDataAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataAccountToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // account_number - computed: true, optional: false, required: false
  public get accountNumber() {
    return this.getNumberAttribute('account_number');
  }

  // global_cust_id - computed: true, optional: false, required: false
  public get globalCustId() {
    return this.getStringAttribute('global_cust_id');
  }

  // global_org_id - computed: true, optional: false, required: false
  public get globalOrgId() {
    return this.getStringAttribute('global_org_id');
  }

  // global_organization_name - computed: true, optional: false, required: false
  public get globalOrganizationName() {
    return this.getStringAttribute('global_organization_name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // ucm_id - computed: true, optional: false, required: false
  public get ucmId() {
    return this.getStringAttribute('ucm_id');
  }
}

export class DataEquinixFabricServiceProfilesDataAccountList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataAccountOutputReference {
    return new DataEquinixFabricServiceProfilesDataAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesDataChangeLog {
}

export function dataEquinixFabricServiceProfilesDataChangeLogToTerraform(struct?: DataEquinixFabricServiceProfilesDataChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataChangeLogToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataChangeLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataChangeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataChangeLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_email - computed: true, optional: false, required: false
  public get createdByEmail() {
    return this.getStringAttribute('created_by_email');
  }

  // created_by_full_name - computed: true, optional: false, required: false
  public get createdByFullName() {
    return this.getStringAttribute('created_by_full_name');
  }

  // created_date_time - computed: true, optional: false, required: false
  public get createdDateTime() {
    return this.getStringAttribute('created_date_time');
  }

  // deleted_by - computed: true, optional: false, required: false
  public get deletedBy() {
    return this.getStringAttribute('deleted_by');
  }

  // deleted_by_email - computed: true, optional: false, required: false
  public get deletedByEmail() {
    return this.getStringAttribute('deleted_by_email');
  }

  // deleted_by_full_name - computed: true, optional: false, required: false
  public get deletedByFullName() {
    return this.getStringAttribute('deleted_by_full_name');
  }

  // deleted_date_time - computed: true, optional: false, required: false
  public get deletedDateTime() {
    return this.getStringAttribute('deleted_date_time');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_by_email - computed: true, optional: false, required: false
  public get updatedByEmail() {
    return this.getStringAttribute('updated_by_email');
  }

  // updated_by_full_name - computed: true, optional: false, required: false
  public get updatedByFullName() {
    return this.getStringAttribute('updated_by_full_name');
  }

  // updated_date_time - computed: true, optional: false, required: false
  public get updatedDateTime() {
    return this.getStringAttribute('updated_date_time');
  }
}

export class DataEquinixFabricServiceProfilesDataChangeLogList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataChangeLogOutputReference {
    return new DataEquinixFabricServiceProfilesDataChangeLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesDataCustomFields {
}

export function dataEquinixFabricServiceProfilesDataCustomFieldsToTerraform(struct?: DataEquinixFabricServiceProfilesDataCustomFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataCustomFieldsToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataCustomFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataCustomFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataCustomFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataCustomFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capture_in_email - computed: true, optional: false, required: false
  public get captureInEmail() {
    return this.getBooleanAttribute('capture_in_email');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getListAttribute('options');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}

export class DataEquinixFabricServiceProfilesDataCustomFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataCustomFieldsOutputReference {
    return new DataEquinixFabricServiceProfilesDataCustomFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesDataMarketingInfoProcessStep {
}

export function dataEquinixFabricServiceProfilesDataMarketingInfoProcessStepToTerraform(struct?: DataEquinixFabricServiceProfilesDataMarketingInfoProcessStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataMarketingInfoProcessStepToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataMarketingInfoProcessStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataMarketingInfoProcessStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataMarketingInfoProcessStep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataMarketingInfoProcessStep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // sub_title - computed: true, optional: false, required: false
  public get subTitle() {
    return this.getStringAttribute('sub_title');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataEquinixFabricServiceProfilesDataMarketingInfoProcessStepList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataMarketingInfoProcessStepOutputReference {
    return new DataEquinixFabricServiceProfilesDataMarketingInfoProcessStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesDataMarketingInfo {
}

export function dataEquinixFabricServiceProfilesDataMarketingInfoToTerraform(struct?: DataEquinixFabricServiceProfilesDataMarketingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataMarketingInfoToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataMarketingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataMarketingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataMarketingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataMarketingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logo - computed: true, optional: false, required: false
  public get logo() {
    return this.getStringAttribute('logo');
  }

  // process_step - computed: true, optional: false, required: false
  private _processStep = new DataEquinixFabricServiceProfilesDataMarketingInfoProcessStepList(this, "process_step", false);
  public get processStep() {
    return this._processStep;
  }

  // promotion - computed: true, optional: false, required: false
  public get promotion() {
    return this.getBooleanAttribute('promotion');
  }
}

export class DataEquinixFabricServiceProfilesDataMarketingInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataMarketingInfoOutputReference {
    return new DataEquinixFabricServiceProfilesDataMarketingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesDataMetros {
}

export function dataEquinixFabricServiceProfilesDataMetrosToTerraform(struct?: DataEquinixFabricServiceProfilesDataMetros): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataMetrosToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataMetros): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataMetrosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataMetros | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataMetros | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // ibxs - computed: true, optional: false, required: false
  public get ibxs() {
    return this.getListAttribute('ibxs');
  }

  // in_trail - computed: true, optional: false, required: false
  public get inTrail() {
    return this.getBooleanAttribute('in_trail');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // seller_regions - computed: true, optional: false, required: false
  private _sellerRegions = new cdktf.StringMap(this, "seller_regions");
  public get sellerRegions() {
    return this._sellerRegions;
  }
}

export class DataEquinixFabricServiceProfilesDataMetrosList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataMetrosOutputReference {
    return new DataEquinixFabricServiceProfilesDataMetrosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesDataNotifications {
}

export function dataEquinixFabricServiceProfilesDataNotificationsToTerraform(struct?: DataEquinixFabricServiceProfilesDataNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataNotificationsToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataNotificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // emails - computed: true, optional: false, required: false
  public get emails() {
    return this.getListAttribute('emails');
  }

  // send_interval - computed: true, optional: false, required: false
  public get sendInterval() {
    return this.getStringAttribute('send_interval');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataEquinixFabricServiceProfilesDataNotificationsList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataNotificationsOutputReference {
    return new DataEquinixFabricServiceProfilesDataNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesDataPortsLocation {
}

export function dataEquinixFabricServiceProfilesDataPortsLocationToTerraform(struct?: DataEquinixFabricServiceProfilesDataPortsLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataPortsLocationToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataPortsLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataPortsLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataPortsLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataPortsLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ibx - computed: true, optional: false, required: false
  public get ibx() {
    return this.getStringAttribute('ibx');
  }

  // metro_code - computed: true, optional: false, required: false
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }

  // metro_name - computed: true, optional: false, required: false
  public get metroName() {
    return this.getStringAttribute('metro_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataEquinixFabricServiceProfilesDataPortsLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataPortsLocationOutputReference {
    return new DataEquinixFabricServiceProfilesDataPortsLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesDataPorts {
}

export function dataEquinixFabricServiceProfilesDataPortsToTerraform(struct?: DataEquinixFabricServiceProfilesDataPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataPortsToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cross_connect_id - computed: true, optional: false, required: false
  public get crossConnectId() {
    return this.getStringAttribute('cross_connect_id');
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataEquinixFabricServiceProfilesDataPortsLocationList(this, "location", true);
  public get location() {
    return this._location;
  }

  // seller_region - computed: true, optional: false, required: false
  public get sellerRegion() {
    return this.getStringAttribute('seller_region');
  }

  // seller_region_description - computed: true, optional: false, required: false
  public get sellerRegionDescription() {
    return this.getStringAttribute('seller_region_description');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataEquinixFabricServiceProfilesDataPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataPortsOutputReference {
    return new DataEquinixFabricServiceProfilesDataPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesDataProject {
}

export function dataEquinixFabricServiceProfilesDataProjectToTerraform(struct?: DataEquinixFabricServiceProfilesDataProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataProjectToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataProjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}

export class DataEquinixFabricServiceProfilesDataProjectList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataProjectOutputReference {
    return new DataEquinixFabricServiceProfilesDataProjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesDataVirtualDevicesLocation {
}

export function dataEquinixFabricServiceProfilesDataVirtualDevicesLocationToTerraform(struct?: DataEquinixFabricServiceProfilesDataVirtualDevicesLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataVirtualDevicesLocationToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataVirtualDevicesLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataVirtualDevicesLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataVirtualDevicesLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataVirtualDevicesLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ibx - computed: true, optional: false, required: false
  public get ibx() {
    return this.getStringAttribute('ibx');
  }

  // metro_code - computed: true, optional: false, required: false
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }

  // metro_name - computed: true, optional: false, required: false
  public get metroName() {
    return this.getStringAttribute('metro_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataEquinixFabricServiceProfilesDataVirtualDevicesLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataVirtualDevicesLocationOutputReference {
    return new DataEquinixFabricServiceProfilesDataVirtualDevicesLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesDataVirtualDevices {
}

export function dataEquinixFabricServiceProfilesDataVirtualDevicesToTerraform(struct?: DataEquinixFabricServiceProfilesDataVirtualDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataVirtualDevicesToHclTerraform(struct?: DataEquinixFabricServiceProfilesDataVirtualDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataVirtualDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesDataVirtualDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesDataVirtualDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_uuid - computed: true, optional: false, required: false
  public get interfaceUuid() {
    return this.getStringAttribute('interface_uuid');
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataEquinixFabricServiceProfilesDataVirtualDevicesLocationList(this, "location", true);
  public get location() {
    return this._location;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataEquinixFabricServiceProfilesDataVirtualDevicesList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataVirtualDevicesOutputReference {
    return new DataEquinixFabricServiceProfilesDataVirtualDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesData {
}

export function dataEquinixFabricServiceProfilesDataToTerraform(struct?: DataEquinixFabricServiceProfilesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricServiceProfilesDataToHclTerraform(struct?: DataEquinixFabricServiceProfilesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricServiceProfilesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_type_configs - computed: true, optional: false, required: false
  private _accessPointTypeConfigs = new DataEquinixFabricServiceProfilesDataAccessPointTypeConfigsList(this, "access_point_type_configs", false);
  public get accessPointTypeConfigs() {
    return this._accessPointTypeConfigs;
  }

  // account - computed: true, optional: false, required: false
  private _account = new DataEquinixFabricServiceProfilesDataAccountList(this, "account", true);
  public get account() {
    return this._account;
  }

  // allowed_emails - computed: true, optional: false, required: false
  public get allowedEmails() {
    return this.getListAttribute('allowed_emails');
  }

  // change_log - computed: true, optional: false, required: false
  private _changeLog = new DataEquinixFabricServiceProfilesDataChangeLogList(this, "change_log", true);
  public get changeLog() {
    return this._changeLog;
  }

  // custom_fields - computed: true, optional: false, required: false
  private _customFields = new DataEquinixFabricServiceProfilesDataCustomFieldsList(this, "custom_fields", false);
  public get customFields() {
    return this._customFields;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // marketing_info - computed: true, optional: false, required: false
  private _marketingInfo = new DataEquinixFabricServiceProfilesDataMarketingInfoList(this, "marketing_info", true);
  public get marketingInfo() {
    return this._marketingInfo;
  }

  // metros - computed: true, optional: false, required: false
  private _metros = new DataEquinixFabricServiceProfilesDataMetrosList(this, "metros", false);
  public get metros() {
    return this._metros;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notifications - computed: true, optional: false, required: false
  private _notifications = new DataEquinixFabricServiceProfilesDataNotificationsList(this, "notifications", false);
  public get notifications() {
    return this._notifications;
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataEquinixFabricServiceProfilesDataPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // project - computed: true, optional: false, required: false
  private _project = new DataEquinixFabricServiceProfilesDataProjectList(this, "project", true);
  public get project() {
    return this._project;
  }

  // self_profile - computed: true, optional: false, required: false
  public get selfProfile() {
    return this.getBooleanAttribute('self_profile');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // view_point - computed: true, optional: false, required: false
  public get viewPoint() {
    return this.getStringAttribute('view_point');
  }

  // virtual_devices - computed: true, optional: false, required: false
  private _virtualDevices = new DataEquinixFabricServiceProfilesDataVirtualDevicesList(this, "virtual_devices", false);
  public get virtualDevices() {
    return this._virtualDevices;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataEquinixFabricServiceProfilesDataList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricServiceProfilesDataOutputReference {
    return new DataEquinixFabricServiceProfilesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesFilter {
  /**
  * Operators to use on your filtered field with the values given. One of [=]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles#operator DataEquinixFabricServiceProfiles#operator}
  */
  readonly operator: string;
  /**
  * Property to apply operator and values to. One of [/name /uuid /state /metros/code /visibility /type /project/projectId]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles#property DataEquinixFabricServiceProfiles#property}
  */
  readonly property: string;
  /**
  * The values that you want to apply the property+operator combination to in order to filter your data search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles#values DataEquinixFabricServiceProfiles#values}
  */
  readonly values: string[];
}

export function dataEquinixFabricServiceProfilesFilterToTerraform(struct?: DataEquinixFabricServiceProfilesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    property: cdktf.stringToTerraform(struct!.property),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataEquinixFabricServiceProfilesFilterToHclTerraform(struct?: DataEquinixFabricServiceProfilesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricServiceProfilesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._property = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._property = value.property;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataEquinixFabricServiceProfilesFilterList extends cdktf.ComplexList {
  public internalValue? : DataEquinixFabricServiceProfilesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataEquinixFabricServiceProfilesFilterOutputReference {
    return new DataEquinixFabricServiceProfilesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricServiceProfilesPagination {
  /**
  * Number of elements to be requested per page. Number must be between 1 and 100. Default is 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles#limit DataEquinixFabricServiceProfiles#limit}
  */
  readonly limit?: number;
  /**
  * The page offset for the pagination request. Index of the first element. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles#offset DataEquinixFabricServiceProfiles#offset}
  */
  readonly offset?: number;
}

export function dataEquinixFabricServiceProfilesPaginationToTerraform(struct?: DataEquinixFabricServiceProfilesPaginationOutputReference | DataEquinixFabricServiceProfilesPagination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    offset: cdktf.numberToTerraform(struct!.offset),
  }
}


export function dataEquinixFabricServiceProfilesPaginationToHclTerraform(struct?: DataEquinixFabricServiceProfilesPaginationOutputReference | DataEquinixFabricServiceProfilesPagination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricServiceProfilesPaginationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataEquinixFabricServiceProfilesPagination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesPagination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit = undefined;
      this._offset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit = value.limit;
      this._offset = value.offset;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }
}
export interface DataEquinixFabricServiceProfilesSort {
  /**
  * The sorting direction. Can be one of: [DESC, ASC], Defaults to DESC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles#direction DataEquinixFabricServiceProfiles#direction}
  */
  readonly direction?: string;
  /**
  * The property name to use in sorting. One of [/name /uuid /state /location/metroCode /location/metroName /package/code /changeLog/createdDateTime /changeLog/updatedDateTime]. Defaults to /changeLog/updatedDateTime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles#property DataEquinixFabricServiceProfiles#property}
  */
  readonly property?: string;
}

export function dataEquinixFabricServiceProfilesSortToTerraform(struct?: DataEquinixFabricServiceProfilesSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    property: cdktf.stringToTerraform(struct!.property),
  }
}


export function dataEquinixFabricServiceProfilesSortToHclTerraform(struct?: DataEquinixFabricServiceProfilesSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricServiceProfilesSortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricServiceProfilesSort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricServiceProfilesSort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._property = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._property = value.property;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }
}

export class DataEquinixFabricServiceProfilesSortList extends cdktf.ComplexList {
  public internalValue? : DataEquinixFabricServiceProfilesSort[] | cdktf.IResolvable

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
  public get(index: number): DataEquinixFabricServiceProfilesSortOutputReference {
    return new DataEquinixFabricServiceProfilesSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles equinix_fabric_service_profiles}
*/
export class DataEquinixFabricServiceProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_service_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixFabricServiceProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixFabricServiceProfiles to import
  * @param importFromId The id of the existing DataEquinixFabricServiceProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixFabricServiceProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_service_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_service_profiles equinix_fabric_service_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixFabricServiceProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixFabricServiceProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_service_profiles',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._andFilters = config.andFilters;
    this._id = config.id;
    this._viewPoint = config.viewPoint;
    this._filter.internalValue = config.filter;
    this._pagination.internalValue = config.pagination;
    this._sort.internalValue = config.sort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // and_filters - computed: false, optional: true, required: false
  private _andFilters?: boolean | cdktf.IResolvable; 
  public get andFilters() {
    return this.getBooleanAttribute('and_filters');
  }
  public set andFilters(value: boolean | cdktf.IResolvable) {
    this._andFilters = value;
  }
  public resetAndFilters() {
    this._andFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andFiltersInput() {
    return this._andFilters;
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataEquinixFabricServiceProfilesDataList(this, "data", false);
  public get data() {
    return this._data;
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

  // view_point - computed: false, optional: true, required: false
  private _viewPoint?: string; 
  public get viewPoint() {
    return this.getStringAttribute('view_point');
  }
  public set viewPoint(value: string) {
    this._viewPoint = value;
  }
  public resetViewPoint() {
    this._viewPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewPointInput() {
    return this._viewPoint;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new DataEquinixFabricServiceProfilesFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataEquinixFabricServiceProfilesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // pagination - computed: false, optional: true, required: false
  private _pagination = new DataEquinixFabricServiceProfilesPaginationOutputReference(this, "pagination");
  public get pagination() {
    return this._pagination;
  }
  public putPagination(value: DataEquinixFabricServiceProfilesPagination) {
    this._pagination.internalValue = value;
  }
  public resetPagination() {
    this._pagination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationInput() {
    return this._pagination.internalValue;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new DataEquinixFabricServiceProfilesSortList(this, "sort", false);
  public get sort() {
    return this._sort;
  }
  public putSort(value: DataEquinixFabricServiceProfilesSort[] | cdktf.IResolvable) {
    this._sort.internalValue = value;
  }
  public resetSort() {
    this._sort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      and_filters: cdktf.booleanToTerraform(this._andFilters),
      id: cdktf.stringToTerraform(this._id),
      view_point: cdktf.stringToTerraform(this._viewPoint),
      filter: cdktf.listMapper(dataEquinixFabricServiceProfilesFilterToTerraform, true)(this._filter.internalValue),
      pagination: dataEquinixFabricServiceProfilesPaginationToTerraform(this._pagination.internalValue),
      sort: cdktf.listMapper(dataEquinixFabricServiceProfilesSortToTerraform, true)(this._sort.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      and_filters: {
        value: cdktf.booleanToHclTerraform(this._andFilters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_point: {
        value: cdktf.stringToHclTerraform(this._viewPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataEquinixFabricServiceProfilesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEquinixFabricServiceProfilesFilterList",
      },
      pagination: {
        value: dataEquinixFabricServiceProfilesPaginationToHclTerraform(this._pagination.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataEquinixFabricServiceProfilesPaginationList",
      },
      sort: {
        value: cdktf.listMapperHcl(dataEquinixFabricServiceProfilesSortToHclTerraform, true)(this._sort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEquinixFabricServiceProfilesSortList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
