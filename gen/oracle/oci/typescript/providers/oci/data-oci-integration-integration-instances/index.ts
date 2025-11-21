// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/integration_integration_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIntegrationIntegrationInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/integration_integration_instances#compartment_id DataOciIntegrationIntegrationInstances#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/integration_integration_instances#display_name DataOciIntegrationIntegrationInstances#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/integration_integration_instances#id DataOciIntegrationIntegrationInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/integration_integration_instances#state DataOciIntegrationIntegrationInstances#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/integration_integration_instances#filter DataOciIntegrationIntegrationInstances#filter}
  */
  readonly filter?: DataOciIntegrationIntegrationInstancesFilter[] | cdktf.IResolvable;
}
export interface DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints {
}

export function dataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsToTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsToHclTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // certificate_secret_id - computed: true, optional: false, required: false
  public get certificateSecretId() {
    return this.getStringAttribute('certificate_secret_id');
  }

  // certificate_secret_version - computed: true, optional: false, required: false
  public get certificateSecretVersion() {
    return this.getNumberAttribute('certificate_secret_version');
  }

  // dns_type - computed: true, optional: false, required: false
  public get dnsType() {
    return this.getStringAttribute('dns_type');
  }

  // dns_zone_name - computed: true, optional: false, required: false
  public get dnsZoneName() {
    return this.getStringAttribute('dns_zone_name');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // managed_type - computed: true, optional: false, required: false
  public get managedType() {
    return this.getStringAttribute('managed_type');
  }
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference {
    return new DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments {
}

export function dataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsToTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsToHclTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_implicit - computed: true, optional: false, required: false
  public get isImplicit() {
    return this.getBooleanAttribute('is_implicit');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_instance_url - computed: true, optional: false, required: false
  public get targetInstanceUrl() {
    return this.getStringAttribute('target_instance_url');
  }

  // target_role - computed: true, optional: false, required: false
  public get targetRole() {
    return this.getStringAttribute('target_role');
  }

  // target_service_type - computed: true, optional: false, required: false
  public get targetServiceType() {
    return this.getStringAttribute('target_service_type');
  }
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference {
    return new DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint {
}

export function dataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointToTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointToHclTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // certificate_secret_id - computed: true, optional: false, required: false
  public get certificateSecretId() {
    return this.getStringAttribute('certificate_secret_id');
  }

  // certificate_secret_version - computed: true, optional: false, required: false
  public get certificateSecretVersion() {
    return this.getNumberAttribute('certificate_secret_version');
  }

  // dns_type - computed: true, optional: false, required: false
  public get dnsType() {
    return this.getStringAttribute('dns_type');
  }

  // dns_zone_name - computed: true, optional: false, required: false
  public get dnsZoneName() {
    return this.getStringAttribute('dns_zone_name');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // managed_type - computed: true, optional: false, required: false
  public get managedType() {
    return this.getStringAttribute('managed_type');
  }
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference {
    return new DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails {
}

export function dataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsToTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsToHclTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // time_role_changed - computed: true, optional: false, required: false
  public get timeRoleChanged() {
    return this.getStringAttribute('time_role_changed');
  }
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference {
    return new DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails {
}

export function dataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsToTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsToHclTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cross_region_integration_instance_details - computed: true, optional: false, required: false
  private _crossRegionIntegrationInstanceDetails = new DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList(this, "cross_region_integration_instance_details", false);
  public get crossRegionIntegrationInstanceDetails() {
    return this._crossRegionIntegrationInstanceDetails;
  }

  // regional_instance_url - computed: true, optional: false, required: false
  public get regionalInstanceUrl() {
    return this.getStringAttribute('regional_instance_url');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference {
    return new DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo {
}

export function dataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoToTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoToHclTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idcs_app_display_name - computed: true, optional: false, required: false
  public get idcsAppDisplayName() {
    return this.getStringAttribute('idcs_app_display_name');
  }

  // idcs_app_id - computed: true, optional: false, required: false
  public get idcsAppId() {
    return this.getStringAttribute('idcs_app_id');
  }

  // idcs_app_location_url - computed: true, optional: false, required: false
  public get idcsAppLocationUrl() {
    return this.getStringAttribute('idcs_app_location_url');
  }

  // idcs_app_name - computed: true, optional: false, required: false
  public get idcsAppName() {
    return this.getStringAttribute('idcs_app_name');
  }

  // instance_primary_audience_url - computed: true, optional: false, required: false
  public get instancePrimaryAudienceUrl() {
    return this.getStringAttribute('instance_primary_audience_url');
  }
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference {
    return new DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns {
}

export function dataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsToTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsToHclTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowlisted_ips - computed: true, optional: false, required: false
  public get allowlistedIps() {
    return this.getListAttribute('allowlisted_ips');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference {
    return new DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails {
}

export function dataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsToTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsToHclTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowlisted_http_ips - computed: true, optional: false, required: false
  public get allowlistedHttpIps() {
    return this.getListAttribute('allowlisted_http_ips');
  }

  // allowlisted_http_vcns - computed: true, optional: false, required: false
  private _allowlistedHttpVcns = new DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList(this, "allowlisted_http_vcns", false);
  public get allowlistedHttpVcns() {
    return this._allowlistedHttpVcns;
  }

  // is_integration_vcn_allowlisted - computed: true, optional: false, required: false
  public get isIntegrationVcnAllowlisted() {
    return this.getBooleanAttribute('is_integration_vcn_allowlisted');
  }

  // network_endpoint_type - computed: true, optional: false, required: false
  public get networkEndpointType() {
    return this.getStringAttribute('network_endpoint_type');
  }
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference {
    return new DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection {
}

export function dataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionToTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionToHclTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // outbound_connection_type - computed: true, optional: false, required: false
  public get outboundConnectionType() {
    return this.getStringAttribute('outbound_connection_type');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference {
    return new DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIntegrationIntegrationInstancesIntegrationInstances {
}

export function dataOciIntegrationIntegrationInstancesIntegrationInstancesToTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIntegrationIntegrationInstancesIntegrationInstancesToHclTerraform(struct?: DataOciIntegrationIntegrationInstancesIntegrationInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIntegrationIntegrationInstancesIntegrationInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIntegrationIntegrationInstancesIntegrationInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alternate_custom_endpoints - computed: true, optional: false, required: false
  private _alternateCustomEndpoints = new DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList(this, "alternate_custom_endpoints", false);
  public get alternateCustomEndpoints() {
    return this._alternateCustomEndpoints;
  }

  // attachments - computed: true, optional: false, required: false
  private _attachments = new DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // consumption_model - computed: true, optional: false, required: false
  public get consumptionModel() {
    return this.getStringAttribute('consumption_model');
  }

  // custom_endpoint - computed: true, optional: false, required: false
  private _customEndpoint = new DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList(this, "custom_endpoint", false);
  public get customEndpoint() {
    return this._customEndpoint;
  }

  // data_retention_period - computed: true, optional: false, required: false
  public get dataRetentionPeriod() {
    return this.getStringAttribute('data_retention_period');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // disaster_recovery_details - computed: true, optional: false, required: false
  private _disasterRecoveryDetails = new DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList(this, "disaster_recovery_details", false);
  public get disasterRecoveryDetails() {
    return this._disasterRecoveryDetails;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // enable_process_automation_trigger - computed: true, optional: false, required: false
  public get enableProcessAutomationTrigger() {
    return this.getNumberAttribute('enable_process_automation_trigger');
  }

  // extend_data_retention_trigger - computed: true, optional: false, required: false
  public get extendDataRetentionTrigger() {
    return this.getNumberAttribute('extend_data_retention_trigger');
  }

  // failover_trigger - computed: true, optional: false, required: false
  public get failoverTrigger() {
    return this.getNumberAttribute('failover_trigger');
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

  // idcs_at - computed: true, optional: false, required: false
  public get idcsAt() {
    return this.getStringAttribute('idcs_at');
  }

  // idcs_info - computed: true, optional: false, required: false
  private _idcsInfo = new DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList(this, "idcs_info", false);
  public get idcsInfo() {
    return this._idcsInfo;
  }

  // instance_design_time_url - computed: true, optional: false, required: false
  public get instanceDesignTimeUrl() {
    return this.getStringAttribute('instance_design_time_url');
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }

  // integration_instance_type - computed: true, optional: false, required: false
  public get integrationInstanceType() {
    return this.getStringAttribute('integration_instance_type');
  }

  // is_byol - computed: true, optional: false, required: false
  public get isByol() {
    return this.getBooleanAttribute('is_byol');
  }

  // is_disaster_recovery_enabled - computed: true, optional: false, required: false
  public get isDisasterRecoveryEnabled() {
    return this.getBooleanAttribute('is_disaster_recovery_enabled');
  }

  // is_file_server_enabled - computed: true, optional: false, required: false
  public get isFileServerEnabled() {
    return this.getBooleanAttribute('is_file_server_enabled');
  }

  // is_visual_builder_enabled - computed: true, optional: false, required: false
  public get isVisualBuilderEnabled() {
    return this.getBooleanAttribute('is_visual_builder_enabled');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // message_packs - computed: true, optional: false, required: false
  public get messagePacks() {
    return this.getNumberAttribute('message_packs');
  }

  // network_endpoint_details - computed: true, optional: false, required: false
  private _networkEndpointDetails = new DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList(this, "network_endpoint_details", false);
  public get networkEndpointDetails() {
    return this._networkEndpointDetails;
  }

  // private_endpoint_outbound_connection - computed: true, optional: false, required: false
  private _privateEndpointOutboundConnection = new DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList(this, "private_endpoint_outbound_connection", false);
  public get privateEndpointOutboundConnection() {
    return this._privateEndpointOutboundConnection;
  }

  // security_attributes - computed: true, optional: false, required: false
  private _securityAttributes = new cdktf.StringMap(this, "security_attributes");
  public get securityAttributes() {
    return this._securityAttributes;
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
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

export class DataOciIntegrationIntegrationInstancesIntegrationInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference {
    return new DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIntegrationIntegrationInstancesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/integration_integration_instances#name DataOciIntegrationIntegrationInstances#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/integration_integration_instances#regex DataOciIntegrationIntegrationInstances#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/integration_integration_instances#values DataOciIntegrationIntegrationInstances#values}
  */
  readonly values: string[];
}

export function dataOciIntegrationIntegrationInstancesFilterToTerraform(struct?: DataOciIntegrationIntegrationInstancesFilter | cdktf.IResolvable): any {
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


export function dataOciIntegrationIntegrationInstancesFilterToHclTerraform(struct?: DataOciIntegrationIntegrationInstancesFilter | cdktf.IResolvable): any {
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

export class DataOciIntegrationIntegrationInstancesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIntegrationIntegrationInstancesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciIntegrationIntegrationInstancesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciIntegrationIntegrationInstancesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciIntegrationIntegrationInstancesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciIntegrationIntegrationInstancesFilterOutputReference {
    return new DataOciIntegrationIntegrationInstancesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/integration_integration_instances oci_integration_integration_instances}
*/
export class DataOciIntegrationIntegrationInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_integration_integration_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIntegrationIntegrationInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIntegrationIntegrationInstances to import
  * @param importFromId The id of the existing DataOciIntegrationIntegrationInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/integration_integration_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIntegrationIntegrationInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_integration_integration_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/integration_integration_instances oci_integration_integration_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIntegrationIntegrationInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIntegrationIntegrationInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_integration_integration_instances',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // integration_instances - computed: true, optional: false, required: false
  private _integrationInstances = new DataOciIntegrationIntegrationInstancesIntegrationInstancesList(this, "integration_instances", false);
  public get integrationInstances() {
    return this._integrationInstances;
  }

  // state - computed: false, optional: true, required: false
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciIntegrationIntegrationInstancesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciIntegrationIntegrationInstancesFilter[] | cdktf.IResolvable) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciIntegrationIntegrationInstancesFilterToTerraform, true)(this._filter.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciIntegrationIntegrationInstancesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciIntegrationIntegrationInstancesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
