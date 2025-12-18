// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insight
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiExadataInsightConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insight#exadata_insight_id DataOciOpsiExadataInsight#exadata_insight_id}
  */
  readonly exadataInsightId: string;
}
export interface DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails {
}

export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsToTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails | undefined) {
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

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsOutputReference {
    return new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails {
}

export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsToTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails | undefined) {
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

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsOutputReference {
    return new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails {
}

export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsToTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails | undefined) {
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

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsOutputReference {
    return new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetails {
}

export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsToTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetails | undefined) {
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
  private _connectionCredentialDetails = new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsList(this, "connection_credential_details", false);
  public get connectionCredentialDetails() {
    return this._connectionCredentialDetails;
  }

  // connection_details - computed: true, optional: false, required: false
  private _connectionDetails = new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsList(this, "connection_details", false);
  public get connectionDetails() {
    return this._connectionDetails;
  }

  // credential_details - computed: true, optional: false, required: false
  private _credentialDetails = new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsList(this, "credential_details", false);
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

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsOutputReference {
    return new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails {
}

export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsToTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails | undefined) {
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

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference {
    return new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts {
}

export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsToTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsToHclTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts | undefined) {
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

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference {
    return new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails {
}

export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsToTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails | undefined) {
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
  private _hosts = new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList(this, "hosts", false);
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

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference {
    return new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails {
}

export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsToTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails | undefined) {
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

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference {
    return new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails {
}

export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsToTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails | undefined) {
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
  private _connectionCredentialDetails = new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList(this, "connection_credential_details", false);
  public get connectionCredentialDetails() {
    return this._connectionCredentialDetails;
  }

  // connection_details - computed: true, optional: false, required: false
  private _connectionDetails = new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList(this, "connection_details", false);
  public get connectionDetails() {
    return this._connectionDetails;
  }

  // credential_details - computed: true, optional: false, required: false
  private _credentialDetails = new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList(this, "credential_details", false);
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

export class DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference {
    return new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiExadataInsightMemberVmClusterDetails {
}

export function dataOciOpsiExadataInsightMemberVmClusterDetailsToTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiExadataInsightMemberVmClusterDetailsToHclTerraform(struct?: DataOciOpsiExadataInsightMemberVmClusterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiExadataInsightMemberVmClusterDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiExadataInsightMemberVmClusterDetails | undefined) {
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
  private _memberAutonomousDetails = new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsList(this, "member_autonomous_details", false);
  public get memberAutonomousDetails() {
    return this._memberAutonomousDetails;
  }

  // member_database_details - computed: true, optional: false, required: false
  private _memberDatabaseDetails = new DataOciOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList(this, "member_database_details", false);
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

export class DataOciOpsiExadataInsightMemberVmClusterDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference {
    return new DataOciOpsiExadataInsightMemberVmClusterDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insight oci_opsi_exadata_insight}
*/
export class DataOciOpsiExadataInsight extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_exadata_insight";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpsiExadataInsight resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpsiExadataInsight to import
  * @param importFromId The id of the existing DataOciOpsiExadataInsight that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insight#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpsiExadataInsight to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_exadata_insight", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_exadata_insight oci_opsi_exadata_insight} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiExadataInsightConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiExadataInsightConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_exadata_insight',
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
    this._exadataInsightId = config.exadataInsightId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // exadata_insight_id - computed: false, optional: false, required: true
  private _exadataInsightId?: string; 
  public get exadataInsightId() {
    return this.getStringAttribute('exadata_insight_id');
  }
  public set exadataInsightId(value: string) {
    this._exadataInsightId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exadataInsightIdInput() {
    return this._exadataInsightId;
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
  private _memberVmClusterDetails = new DataOciOpsiExadataInsightMemberVmClusterDetailsList(this, "member_vm_cluster_details", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exadata_insight_id: cdktf.stringToTerraform(this._exadataInsightId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exadata_insight_id: {
        value: cdktf.stringToHclTerraform(this._exadataInsightId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
