// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insights
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiExadataInsightsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insights#compartment_id DataOciOpsiExadataInsights#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insights#compartment_id_in_subtree DataOciOpsiExadataInsights#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insights#enterprise_manager_bridge_id DataOciOpsiExadataInsights#enterprise_manager_bridge_id}
  */
  readonly enterpriseManagerBridgeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insights#exadata_type DataOciOpsiExadataInsights#exadata_type}
  */
  readonly exadataType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insights#id DataOciOpsiExadataInsights#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insights#state DataOciOpsiExadataInsights#state}
  */
  readonly state?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insights#status DataOciOpsiExadataInsights#status}
  */
  readonly status?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insights#filter DataOciOpsiExadataInsights#filter}
  */
  readonly filter?: DataOciOpsiExadataInsightsFilter[] | cdktf.IResolvable;
}
export interface DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails {
}

export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsToTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential_source_name - computed: true, optional: false, required: false
  public get credentialSourceName() {
    return this.getStringAttribute('credential_source_name');
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // named_credential_id - computed: true, optional: false, required: false
  public get namedCredentialId() {
    return this.getStringAttribute('named_credential_id');
  }

  // password_secret_id - computed: true, optional: false, required: false
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // wallet_secret_id - computed: true, optional: false, required: false
  public get walletSecretId() {
    return this.getStringAttribute('wallet_secret_id');
  }
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsOutputReference {
    return new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails {
}

export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsToTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsOutputReference {
    return new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails {
}

export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsToTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential_source_name - computed: true, optional: false, required: false
  public get credentialSourceName() {
    return this.getStringAttribute('credential_source_name');
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // named_credential_id - computed: true, optional: false, required: false
  public get namedCredentialId() {
    return this.getStringAttribute('named_credential_id');
  }

  // password_secret_id - computed: true, optional: false, required: false
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // wallet_secret_id - computed: true, optional: false, required: false
  public get walletSecretId() {
    return this.getStringAttribute('wallet_secret_id');
  }
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsOutputReference {
    return new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetails {
}

export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsToTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_credential_details - computed: true, optional: false, required: false
  private _connectionCredentialDetails = new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsList(this, "connection_credential_details", false);
  public get connectionCredentialDetails() {
    return this._connectionCredentialDetails;
  }

  // connection_details - computed: true, optional: false, required: false
  private _connectionDetails = new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsList(this, "connection_details", false);
  public get connectionDetails() {
    return this._connectionDetails;
  }

  // credential_details - computed: true, optional: false, required: false
  private _credentialDetails = new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsList(this, "credential_details", false);
  public get credentialDetails() {
    return this._credentialDetails;
  }

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // database_resource_type - computed: true, optional: false, required: false
  public get databaseResourceType() {
    return this.getStringAttribute('database_resource_type');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // entity_source - computed: true, optional: false, required: false
  public get entitySource() {
    return this.getStringAttribute('entity_source');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // is_advanced_features_enabled - computed: true, optional: false, required: false
  public get isAdvancedFeaturesEnabled() {
    return this.getBooleanAttribute('is_advanced_features_enabled');
  }

  // management_agent_id - computed: true, optional: false, required: false
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }

  // opsi_private_endpoint_id - computed: true, optional: false, required: false
  public get opsiPrivateEndpointId() {
    return this.getStringAttribute('opsi_private_endpoint_id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsOutputReference {
    return new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails {
}

export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsToTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential_source_name - computed: true, optional: false, required: false
  public get credentialSourceName() {
    return this.getStringAttribute('credential_source_name');
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // named_credential_id - computed: true, optional: false, required: false
  public get namedCredentialId() {
    return this.getStringAttribute('named_credential_id');
  }

  // password_secret_id - computed: true, optional: false, required: false
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // wallet_secret_id - computed: true, optional: false, required: false
  public get walletSecretId() {
    return this.getStringAttribute('wallet_secret_id');
  }
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference {
    return new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts {
}

export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsToTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsToHclTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_ip - computed: true, optional: false, required: false
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference {
    return new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails {
}

export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsToTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference {
    return new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails {
}

export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsToTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential_source_name - computed: true, optional: false, required: false
  public get credentialSourceName() {
    return this.getStringAttribute('credential_source_name');
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // named_credential_id - computed: true, optional: false, required: false
  public get namedCredentialId() {
    return this.getStringAttribute('named_credential_id');
  }

  // password_secret_id - computed: true, optional: false, required: false
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // wallet_secret_id - computed: true, optional: false, required: false
  public get walletSecretId() {
    return this.getStringAttribute('wallet_secret_id');
  }
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference {
    return new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetails {
}

export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsToTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_credential_details - computed: true, optional: false, required: false
  private _connectionCredentialDetails = new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList(this, "connection_credential_details", false);
  public get connectionCredentialDetails() {
    return this._connectionCredentialDetails;
  }

  // connection_details - computed: true, optional: false, required: false
  private _connectionDetails = new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList(this, "connection_details", false);
  public get connectionDetails() {
    return this._connectionDetails;
  }

  // credential_details - computed: true, optional: false, required: false
  private _credentialDetails = new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList(this, "credential_details", false);
  public get credentialDetails() {
    return this._credentialDetails;
  }

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // database_resource_type - computed: true, optional: false, required: false
  public get databaseResourceType() {
    return this.getStringAttribute('database_resource_type');
  }

  // dbm_private_endpoint_id - computed: true, optional: false, required: false
  public get dbmPrivateEndpointId() {
    return this.getStringAttribute('dbm_private_endpoint_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // entity_source - computed: true, optional: false, required: false
  public get entitySource() {
    return this.getStringAttribute('entity_source');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // management_agent_id - computed: true, optional: false, required: false
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }

  // opsi_private_endpoint_id - computed: true, optional: false, required: false
  public get opsiPrivateEndpointId() {
    return this.getStringAttribute('opsi_private_endpoint_id');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference {
    return new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetails {
}

export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsToTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // dbm_private_endpoint_id - computed: true, optional: false, required: false
  public get dbmPrivateEndpointId() {
    return this.getStringAttribute('dbm_private_endpoint_id');
  }

  // member_autonomous_details - computed: true, optional: false, required: false
  private _memberAutonomousDetails = new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberAutonomousDetailsList(this, "member_autonomous_details", false);
  public get memberAutonomousDetails() {
    return this._memberAutonomousDetails;
  }

  // member_database_details - computed: true, optional: false, required: false
  private _memberDatabaseDetails = new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsMemberDatabaseDetailsList(this, "member_database_details", false);
  public get memberDatabaseDetails() {
    return this._memberDatabaseDetails;
  }

  // opsi_private_endpoint_id - computed: true, optional: false, required: false
  public get opsiPrivateEndpointId() {
    return this.getStringAttribute('opsi_private_endpoint_id');
  }

  // vm_cluster_type - computed: true, optional: false, required: false
  public get vmClusterType() {
    return this.getStringAttribute('vm_cluster_type');
  }

  // vmcluster_id - computed: true, optional: false, required: false
  public get vmclusterId() {
    return this.getStringAttribute('vmcluster_id');
  }
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference {
    return new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItems {
}

export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsToTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsToHclTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // enterprise_manager_bridge_id - computed: true, optional: false, required: false
  public get enterpriseManagerBridgeId() {
    return this.getStringAttribute('enterprise_manager_bridge_id');
  }

  // enterprise_manager_entity_display_name - computed: true, optional: false, required: false
  public get enterpriseManagerEntityDisplayName() {
    return this.getStringAttribute('enterprise_manager_entity_display_name');
  }

  // enterprise_manager_entity_identifier - computed: true, optional: false, required: false
  public get enterpriseManagerEntityIdentifier() {
    return this.getStringAttribute('enterprise_manager_entity_identifier');
  }

  // enterprise_manager_entity_name - computed: true, optional: false, required: false
  public get enterpriseManagerEntityName() {
    return this.getStringAttribute('enterprise_manager_entity_name');
  }

  // enterprise_manager_entity_type - computed: true, optional: false, required: false
  public get enterpriseManagerEntityType() {
    return this.getStringAttribute('enterprise_manager_entity_type');
  }

  // enterprise_manager_identifier - computed: true, optional: false, required: false
  public get enterpriseManagerIdentifier() {
    return this.getStringAttribute('enterprise_manager_identifier');
  }

  // entity_source - computed: true, optional: false, required: false
  public get entitySource() {
    return this.getStringAttribute('entity_source');
  }

  // exadata_display_name - computed: true, optional: false, required: false
  public get exadataDisplayName() {
    return this.getStringAttribute('exadata_display_name');
  }

  // exadata_infra_id - computed: true, optional: false, required: false
  public get exadataInfraId() {
    return this.getStringAttribute('exadata_infra_id');
  }

  // exadata_infra_resource_type - computed: true, optional: false, required: false
  public get exadataInfraResourceType() {
    return this.getStringAttribute('exadata_infra_resource_type');
  }

  // exadata_name - computed: true, optional: false, required: false
  public get exadataName() {
    return this.getStringAttribute('exadata_name');
  }

  // exadata_rack_type - computed: true, optional: false, required: false
  public get exadataRackType() {
    return this.getStringAttribute('exadata_rack_type');
  }

  // exadata_shape - computed: true, optional: false, required: false
  public get exadataShape() {
    return this.getStringAttribute('exadata_shape');
  }

  // exadata_type - computed: true, optional: false, required: false
  public get exadataType() {
    return this.getStringAttribute('exadata_type');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_auto_sync_enabled - computed: true, optional: false, required: false
  public get isAutoSyncEnabled() {
    return this.getBooleanAttribute('is_auto_sync_enabled');
  }

  // is_virtualized_exadata - computed: true, optional: false, required: false
  public get isVirtualizedExadata() {
    return this.getBooleanAttribute('is_virtualized_exadata');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // member_vm_cluster_details - computed: true, optional: false, required: false
  private _memberVmClusterDetails = new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsMemberVmClusterDetailsList(this, "member_vm_cluster_details", false);
  public get memberVmClusterDetails() {
    return this._memberVmClusterDetails;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference {
    return new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightsExadataInsightSummaryCollection {
}

export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionToTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightsExadataInsightSummaryCollectionToHclTerraform(struct?: DataOciOpsiExadataInsightsExadataInsightSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightsExadataInsightSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightsExadataInsightSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference {
    return new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insights#name DataOciOpsiExadataInsights#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insights#regex DataOciOpsiExadataInsights#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insights#values DataOciOpsiExadataInsights#values}
  */
  readonly values: string[];
}

export function dataOciOpsiExadataInsightsFilterToTerraform(struct?: DataOciOpsiExadataInsightsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciOpsiExadataInsightsFilterToHclTerraform(struct?: DataOciOpsiExadataInsightsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataOciOpsiExadataInsightsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

export class DataOciOpsiExadataInsightsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOpsiExadataInsightsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOpsiExadataInsightsFilterOutputReference {
    return new DataOciOpsiExadataInsightsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insights oci_opsi_exadata_insights}
*/
export class DataOciOpsiExadataInsights extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_exadata_insights";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpsiExadataInsights resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpsiExadataInsights to import
  * @param importFromId The id of the existing DataOciOpsiExadataInsights that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insights#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpsiExadataInsights to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_exadata_insights", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insights oci_opsi_exadata_insights} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiExadataInsightsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiExadataInsightsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_exadata_insights',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._enterpriseManagerBridgeId = config.enterpriseManagerBridgeId;
    this._exadataType = config.exadataType;
    this._id = config.id;
    this._state = config.state;
    this._status = config.status;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compartment_id_in_subtree - computed: false, optional: true, required: false
  private _compartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }
  public set compartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._compartmentIdInSubtree = value;
  }
  public resetCompartmentIdInSubtree() {
    this._compartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInSubtreeInput() {
    return this._compartmentIdInSubtree;
  }

  // enterprise_manager_bridge_id - computed: false, optional: true, required: false
  private _enterpriseManagerBridgeId?: string; 
  public get enterpriseManagerBridgeId() {
    return this.getStringAttribute('enterprise_manager_bridge_id');
  }
  public set enterpriseManagerBridgeId(value: string) {
    this._enterpriseManagerBridgeId = value;
  }
  public resetEnterpriseManagerBridgeId() {
    this._enterpriseManagerBridgeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseManagerBridgeIdInput() {
    return this._enterpriseManagerBridgeId;
  }

  // exadata_insight_summary_collection - computed: true, optional: false, required: false
  private _exadataInsightSummaryCollection = new DataOciOpsiExadataInsightsExadataInsightSummaryCollectionList(this, "exadata_insight_summary_collection", false);
  public get exadataInsightSummaryCollection() {
    return this._exadataInsightSummaryCollection;
  }

  // exadata_type - computed: false, optional: true, required: false
  private _exadataType?: string[]; 
  public get exadataType() {
    return this.getListAttribute('exadata_type');
  }
  public set exadataType(value: string[]) {
    this._exadataType = value;
  }
  public resetExadataType() {
    this._exadataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exadataTypeInput() {
    return this._exadataType;
  }

  // id - computed: false, optional: true, required: false
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

  // state - computed: false, optional: true, required: false
  private _state?: string[]; 
  public get state() {
    return this.getListAttribute('state');
  }
  public set state(value: string[]) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string[]; 
  public get status() {
    return this.getListAttribute('status');
  }
  public set status(value: string[]) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOpsiExadataInsightsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOpsiExadataInsightsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      enterprise_manager_bridge_id: cdktf.stringToTerraform(this._enterpriseManagerBridgeId),
      exadata_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exadataType),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._state),
      status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._status),
      filter: cdktf.listMapper(dataOciOpsiExadataInsightsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._compartmentIdInSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enterprise_manager_bridge_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseManagerBridgeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exadata_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exadataType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._state),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._status),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOpsiExadataInsightsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOpsiExadataInsightsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
