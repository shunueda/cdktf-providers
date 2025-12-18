// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciContainerengineClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_cluster#cluster_id DataOciContainerengineCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_cluster#should_include_oidc_config_file DataOciContainerengineCluster#should_include_oidc_config_file}
  */
  readonly shouldIncludeOidcConfigFile?: boolean | cdktf.IResolvable;
}
export interface DataOciContainerengineClusterClusterPodNetworkOptions {
}

export function dataOciContainerengineClusterClusterPodNetworkOptionsToTerraform(struct?: DataOciContainerengineClusterClusterPodNetworkOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterClusterPodNetworkOptionsToHclTerraform(struct?: DataOciContainerengineClusterClusterPodNetworkOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterClusterPodNetworkOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterClusterPodNetworkOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cni_type - computed: true, optional: false, required: false
  public get cniType() {
    return this.getStringAttribute('cni_type');
  }
}

export class DataOciContainerengineClusterClusterPodNetworkOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference {
    return new DataOciContainerengineClusterClusterPodNetworkOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerengineClusterEndpointConfig {
}

export function dataOciContainerengineClusterEndpointConfigToTerraform(struct?: DataOciContainerengineClusterEndpointConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterEndpointConfigToHclTerraform(struct?: DataOciContainerengineClusterEndpointConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterEndpointConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterEndpointConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterEndpointConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_public_ip_enabled - computed: true, optional: false, required: false
  public get isPublicIpEnabled() {
    return this.getBooleanAttribute('is_public_ip_enabled');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciContainerengineClusterEndpointConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterEndpointConfigOutputReference {
    return new DataOciContainerengineClusterEndpointConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerengineClusterEndpoints {
}

export function dataOciContainerengineClusterEndpointsToTerraform(struct?: DataOciContainerengineClusterEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterEndpointsToHclTerraform(struct?: DataOciContainerengineClusterEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6endpoint - computed: true, optional: false, required: false
  public get ipv6Endpoint() {
    return this.getStringAttribute('ipv6endpoint');
  }

  // kubernetes - computed: true, optional: false, required: false
  public get kubernetes() {
    return this.getStringAttribute('kubernetes');
  }

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getStringAttribute('public_endpoint');
  }

  // vcn_hostname_endpoint - computed: true, optional: false, required: false
  public get vcnHostnameEndpoint() {
    return this.getStringAttribute('vcn_hostname_endpoint');
  }
}

export class DataOciContainerengineClusterEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterEndpointsOutputReference {
    return new DataOciContainerengineClusterEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerengineClusterImagePolicyConfigKeyDetails {
}

export function dataOciContainerengineClusterImagePolicyConfigKeyDetailsToTerraform(struct?: DataOciContainerengineClusterImagePolicyConfigKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterImagePolicyConfigKeyDetailsToHclTerraform(struct?: DataOciContainerengineClusterImagePolicyConfigKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterImagePolicyConfigKeyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterImagePolicyConfigKeyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}

export class DataOciContainerengineClusterImagePolicyConfigKeyDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference {
    return new DataOciContainerengineClusterImagePolicyConfigKeyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerengineClusterImagePolicyConfig {
}

export function dataOciContainerengineClusterImagePolicyConfigToTerraform(struct?: DataOciContainerengineClusterImagePolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterImagePolicyConfigToHclTerraform(struct?: DataOciContainerengineClusterImagePolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterImagePolicyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterImagePolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterImagePolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_policy_enabled - computed: true, optional: false, required: false
  public get isPolicyEnabled() {
    return this.getBooleanAttribute('is_policy_enabled');
  }

  // key_details - computed: true, optional: false, required: false
  private _keyDetails = new DataOciContainerengineClusterImagePolicyConfigKeyDetailsList(this, "key_details", false);
  public get keyDetails() {
    return this._keyDetails;
  }
}

export class DataOciContainerengineClusterImagePolicyConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterImagePolicyConfigOutputReference {
    return new DataOciContainerengineClusterImagePolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerengineClusterMetadata {
}

export function dataOciContainerengineClusterMetadataToTerraform(struct?: DataOciContainerengineClusterMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterMetadataToHclTerraform(struct?: DataOciContainerengineClusterMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by_user_id - computed: true, optional: false, required: false
  public get createdByUserId() {
    return this.getStringAttribute('created_by_user_id');
  }

  // created_by_work_request_id - computed: true, optional: false, required: false
  public get createdByWorkRequestId() {
    return this.getStringAttribute('created_by_work_request_id');
  }

  // deleted_by_user_id - computed: true, optional: false, required: false
  public get deletedByUserId() {
    return this.getStringAttribute('deleted_by_user_id');
  }

  // deleted_by_work_request_id - computed: true, optional: false, required: false
  public get deletedByWorkRequestId() {
    return this.getStringAttribute('deleted_by_work_request_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_credential_expiration - computed: true, optional: false, required: false
  public get timeCredentialExpiration() {
    return this.getStringAttribute('time_credential_expiration');
  }

  // time_deleted - computed: true, optional: false, required: false
  public get timeDeleted() {
    return this.getStringAttribute('time_deleted');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // updated_by_user_id - computed: true, optional: false, required: false
  public get updatedByUserId() {
    return this.getStringAttribute('updated_by_user_id');
  }

  // updated_by_work_request_id - computed: true, optional: false, required: false
  public get updatedByWorkRequestId() {
    return this.getStringAttribute('updated_by_work_request_id');
  }
}

export class DataOciContainerengineClusterMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterMetadataOutputReference {
    return new DataOciContainerengineClusterMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerengineClusterOptionsAddOns {
}

export function dataOciContainerengineClusterOptionsAddOnsToTerraform(struct?: DataOciContainerengineClusterOptionsAddOns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterOptionsAddOnsToHclTerraform(struct?: DataOciContainerengineClusterOptionsAddOns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterOptionsAddOnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterOptionsAddOns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterOptionsAddOns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_kubernetes_dashboard_enabled - computed: true, optional: false, required: false
  public get isKubernetesDashboardEnabled() {
    return this.getBooleanAttribute('is_kubernetes_dashboard_enabled');
  }

  // is_tiller_enabled - computed: true, optional: false, required: false
  public get isTillerEnabled() {
    return this.getBooleanAttribute('is_tiller_enabled');
  }
}

export class DataOciContainerengineClusterOptionsAddOnsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterOptionsAddOnsOutputReference {
    return new DataOciContainerengineClusterOptionsAddOnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerengineClusterOptionsAdmissionControllerOptions {
}

export function dataOciContainerengineClusterOptionsAdmissionControllerOptionsToTerraform(struct?: DataOciContainerengineClusterOptionsAdmissionControllerOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterOptionsAdmissionControllerOptionsToHclTerraform(struct?: DataOciContainerengineClusterOptionsAdmissionControllerOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterOptionsAdmissionControllerOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterOptionsAdmissionControllerOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_pod_security_policy_enabled - computed: true, optional: false, required: false
  public get isPodSecurityPolicyEnabled() {
    return this.getBooleanAttribute('is_pod_security_policy_enabled');
  }
}

export class DataOciContainerengineClusterOptionsAdmissionControllerOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference {
    return new DataOciContainerengineClusterOptionsAdmissionControllerOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerengineClusterOptionsKubernetesNetworkConfig {
}

export function dataOciContainerengineClusterOptionsKubernetesNetworkConfigToTerraform(struct?: DataOciContainerengineClusterOptionsKubernetesNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterOptionsKubernetesNetworkConfigToHclTerraform(struct?: DataOciContainerengineClusterOptionsKubernetesNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterOptionsKubernetesNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterOptionsKubernetesNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pods_cidr - computed: true, optional: false, required: false
  public get podsCidr() {
    return this.getStringAttribute('pods_cidr');
  }

  // services_cidr - computed: true, optional: false, required: false
  public get servicesCidr() {
    return this.getStringAttribute('services_cidr');
  }
}

export class DataOciContainerengineClusterOptionsKubernetesNetworkConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference {
    return new DataOciContainerengineClusterOptionsKubernetesNetworkConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerengineClusterOptionsOpenIdConnectDiscovery {
}

export function dataOciContainerengineClusterOptionsOpenIdConnectDiscoveryToTerraform(struct?: DataOciContainerengineClusterOptionsOpenIdConnectDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterOptionsOpenIdConnectDiscoveryToHclTerraform(struct?: DataOciContainerengineClusterOptionsOpenIdConnectDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterOptionsOpenIdConnectDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterOptionsOpenIdConnectDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_open_id_connect_discovery_enabled - computed: true, optional: false, required: false
  public get isOpenIdConnectDiscoveryEnabled() {
    return this.getBooleanAttribute('is_open_id_connect_discovery_enabled');
  }
}

export class DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference {
    return new DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims {
}

export function dataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsToTerraform(struct?: DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsToHclTerraform(struct?: DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference {
    return new DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig {
}

export function dataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigToTerraform(struct?: DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigToHclTerraform(struct?: DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // configuration_file - computed: true, optional: false, required: false
  public get configurationFile() {
    return this.getStringAttribute('configuration_file');
  }

  // groups_claim - computed: true, optional: false, required: false
  public get groupsClaim() {
    return this.getStringAttribute('groups_claim');
  }

  // groups_prefix - computed: true, optional: false, required: false
  public get groupsPrefix() {
    return this.getStringAttribute('groups_prefix');
  }

  // is_open_id_connect_auth_enabled - computed: true, optional: false, required: false
  public get isOpenIdConnectAuthEnabled() {
    return this.getBooleanAttribute('is_open_id_connect_auth_enabled');
  }

  // issuer_url - computed: true, optional: false, required: false
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }

  // required_claims - computed: true, optional: false, required: false
  private _requiredClaims = new DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList(this, "required_claims", false);
  public get requiredClaims() {
    return this._requiredClaims;
  }

  // signing_algorithms - computed: true, optional: false, required: false
  public get signingAlgorithms() {
    return this.getListAttribute('signing_algorithms');
  }

  // username_claim - computed: true, optional: false, required: false
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }

  // username_prefix - computed: true, optional: false, required: false
  public get usernamePrefix() {
    return this.getStringAttribute('username_prefix');
  }
}

export class DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference {
    return new DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerengineClusterOptionsPersistentVolumeConfig {
}

export function dataOciContainerengineClusterOptionsPersistentVolumeConfigToTerraform(struct?: DataOciContainerengineClusterOptionsPersistentVolumeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterOptionsPersistentVolumeConfigToHclTerraform(struct?: DataOciContainerengineClusterOptionsPersistentVolumeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterOptionsPersistentVolumeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterOptionsPersistentVolumeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }
}

export class DataOciContainerengineClusterOptionsPersistentVolumeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference {
    return new DataOciContainerengineClusterOptionsPersistentVolumeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerengineClusterOptionsServiceLbConfig {
}

export function dataOciContainerengineClusterOptionsServiceLbConfigToTerraform(struct?: DataOciContainerengineClusterOptionsServiceLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterOptionsServiceLbConfigToHclTerraform(struct?: DataOciContainerengineClusterOptionsServiceLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterOptionsServiceLbConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterOptionsServiceLbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterOptionsServiceLbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend_nsg_ids - computed: true, optional: false, required: false
  public get backendNsgIds() {
    return this.getListAttribute('backend_nsg_ids');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }
}

export class DataOciContainerengineClusterOptionsServiceLbConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterOptionsServiceLbConfigOutputReference {
    return new DataOciContainerengineClusterOptionsServiceLbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerengineClusterOptions {
}

export function dataOciContainerengineClusterOptionsToTerraform(struct?: DataOciContainerengineClusterOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterOptionsToHclTerraform(struct?: DataOciContainerengineClusterOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_ons - computed: true, optional: false, required: false
  private _addOns = new DataOciContainerengineClusterOptionsAddOnsList(this, "add_ons", false);
  public get addOns() {
    return this._addOns;
  }

  // admission_controller_options - computed: true, optional: false, required: false
  private _admissionControllerOptions = new DataOciContainerengineClusterOptionsAdmissionControllerOptionsList(this, "admission_controller_options", false);
  public get admissionControllerOptions() {
    return this._admissionControllerOptions;
  }

  // ip_families - computed: true, optional: false, required: false
  public get ipFamilies() {
    return this.getListAttribute('ip_families');
  }

  // kubernetes_network_config - computed: true, optional: false, required: false
  private _kubernetesNetworkConfig = new DataOciContainerengineClusterOptionsKubernetesNetworkConfigList(this, "kubernetes_network_config", false);
  public get kubernetesNetworkConfig() {
    return this._kubernetesNetworkConfig;
  }

  // open_id_connect_discovery - computed: true, optional: false, required: false
  private _openIdConnectDiscovery = new DataOciContainerengineClusterOptionsOpenIdConnectDiscoveryList(this, "open_id_connect_discovery", false);
  public get openIdConnectDiscovery() {
    return this._openIdConnectDiscovery;
  }

  // open_id_connect_token_authentication_config - computed: true, optional: false, required: false
  private _openIdConnectTokenAuthenticationConfig = new DataOciContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList(this, "open_id_connect_token_authentication_config", false);
  public get openIdConnectTokenAuthenticationConfig() {
    return this._openIdConnectTokenAuthenticationConfig;
  }

  // persistent_volume_config - computed: true, optional: false, required: false
  private _persistentVolumeConfig = new DataOciContainerengineClusterOptionsPersistentVolumeConfigList(this, "persistent_volume_config", false);
  public get persistentVolumeConfig() {
    return this._persistentVolumeConfig;
  }

  // service_lb_config - computed: true, optional: false, required: false
  private _serviceLbConfig = new DataOciContainerengineClusterOptionsServiceLbConfigList(this, "service_lb_config", false);
  public get serviceLbConfig() {
    return this._serviceLbConfig;
  }

  // service_lb_subnet_ids - computed: true, optional: false, required: false
  public get serviceLbSubnetIds() {
    return this.getListAttribute('service_lb_subnet_ids');
  }
}

export class DataOciContainerengineClusterOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterOptionsOutputReference {
    return new DataOciContainerengineClusterOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_cluster oci_containerengine_cluster}
*/
export class DataOciContainerengineCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_containerengine_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciContainerengineCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciContainerengineCluster to import
  * @param importFromId The id of the existing DataOciContainerengineCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciContainerengineCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_containerengine_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_cluster oci_containerengine_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciContainerengineClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciContainerengineClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_cluster',
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
    this._clusterId = config.clusterId;
    this._shouldIncludeOidcConfigFile = config.shouldIncludeOidcConfigFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_kubernetes_upgrades - computed: true, optional: false, required: false
  public get availableKubernetesUpgrades() {
    return this.getListAttribute('available_kubernetes_upgrades');
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_pod_network_options - computed: true, optional: false, required: false
  private _clusterPodNetworkOptions = new DataOciContainerengineClusterClusterPodNetworkOptionsList(this, "cluster_pod_network_options", false);
  public get clusterPodNetworkOptions() {
    return this._clusterPodNetworkOptions;
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

  // endpoint_config - computed: true, optional: false, required: false
  private _endpointConfig = new DataOciContainerengineClusterEndpointConfigList(this, "endpoint_config", false);
  public get endpointConfig() {
    return this._endpointConfig;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataOciContainerengineClusterEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
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

  // image_policy_config - computed: true, optional: false, required: false
  private _imagePolicyConfig = new DataOciContainerengineClusterImagePolicyConfigList(this, "image_policy_config", false);
  public get imagePolicyConfig() {
    return this._imagePolicyConfig;
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataOciContainerengineClusterMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // open_id_connect_discovery_endpoint - computed: true, optional: false, required: false
  public get openIdConnectDiscoveryEndpoint() {
    return this.getStringAttribute('open_id_connect_discovery_endpoint');
  }

  // open_id_connect_discovery_key - computed: true, optional: false, required: false
  public get openIdConnectDiscoveryKey() {
    return this.getStringAttribute('open_id_connect_discovery_key');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataOciContainerengineClusterOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }

  // should_include_oidc_config_file - computed: false, optional: true, required: false
  private _shouldIncludeOidcConfigFile?: boolean | cdktf.IResolvable; 
  public get shouldIncludeOidcConfigFile() {
    return this.getBooleanAttribute('should_include_oidc_config_file');
  }
  public set shouldIncludeOidcConfigFile(value: boolean | cdktf.IResolvable) {
    this._shouldIncludeOidcConfigFile = value;
  }
  public resetShouldIncludeOidcConfigFile() {
    this._shouldIncludeOidcConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldIncludeOidcConfigFileInput() {
    return this._shouldIncludeOidcConfigFile;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      should_include_oidc_config_file: cdktf.booleanToTerraform(this._shouldIncludeOidcConfigFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_include_oidc_config_file: {
        value: cdktf.booleanToHclTerraform(this._shouldIncludeOidcConfigFile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
