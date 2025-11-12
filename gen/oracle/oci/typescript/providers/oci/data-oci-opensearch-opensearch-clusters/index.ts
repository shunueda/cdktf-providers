// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opensearch_opensearch_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpensearchOpensearchClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opensearch_opensearch_clusters#compartment_id DataOciOpensearchOpensearchClusters#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opensearch_opensearch_clusters#display_name DataOciOpensearchOpensearchClusters#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opensearch_opensearch_clusters#id DataOciOpensearchOpensearchClusters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opensearch_opensearch_clusters#state DataOciOpensearchOpensearchClusters#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opensearch_opensearch_clusters#filter DataOciOpensearchOpensearchClusters#filter}
  */
  readonly filter?: DataOciOpensearchOpensearchClustersFilter[] | cdktf.IResolvable;
}
export interface DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsCertificateConfig {
}

export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsCertificateConfigToTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsCertificateConfigToHclTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsCertificateConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_certificate_mode - computed: true, optional: false, required: false
  public get clusterCertificateMode() {
    return this.getStringAttribute('cluster_certificate_mode');
  }

  // dashboard_certificate_mode - computed: true, optional: false, required: false
  public get dashboardCertificateMode() {
    return this.getStringAttribute('dashboard_certificate_mode');
  }

  // open_search_api_certificate_id - computed: true, optional: false, required: false
  public get openSearchApiCertificateId() {
    return this.getStringAttribute('open_search_api_certificate_id');
  }

  // open_search_dashboard_certificate_id - computed: true, optional: false, required: false
  public get openSearchDashboardCertificateId() {
    return this.getStringAttribute('open_search_dashboard_certificate_id');
  }
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsCertificateConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsCertificateConfigOutputReference {
    return new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsCertificateConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsMaintenanceDetails {
}

export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsMaintenanceDetailsToTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsMaintenanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsMaintenanceDetailsToHclTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsMaintenanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsMaintenanceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsMaintenanceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsMaintenanceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // notification_email_ids - computed: true, optional: false, required: false
  public get notificationEmailIds() {
    return this.getListAttribute('notification_email_ids');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsMaintenanceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsMaintenanceDetailsOutputReference {
    return new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsMaintenanceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigOutboundClusters {
}

export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigOutboundClustersToTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigOutboundClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigOutboundClustersToHclTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigOutboundClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigOutboundClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigOutboundClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigOutboundClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // is_skip_unavailable - computed: true, optional: false, required: false
  public get isSkipUnavailable() {
    return this.getBooleanAttribute('is_skip_unavailable');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // ping_schedule - computed: true, optional: false, required: false
  public get pingSchedule() {
    return this.getStringAttribute('ping_schedule');
  }

  // seed_cluster_id - computed: true, optional: false, required: false
  public get seedClusterId() {
    return this.getStringAttribute('seed_cluster_id');
  }
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigOutboundClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigOutboundClustersOutputReference {
    return new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigOutboundClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfig {
}

export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigToTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigToHclTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // outbound_clusters - computed: true, optional: false, required: false
  private _outboundClusters = new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigOutboundClustersList(this, "outbound_clusters", false);
  public get outboundClusters() {
    return this._outboundClusters;
  }
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigOutputReference {
    return new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsReverseConnectionEndpoints {
}

export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsReverseConnectionEndpointsToTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsReverseConnectionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsReverseConnectionEndpointsToHclTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsReverseConnectionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsReverseConnectionEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsReverseConnectionEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsReverseConnectionEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_ip - computed: true, optional: false, required: false
  public get customerIp() {
    return this.getStringAttribute('customer_ip');
  }

  // nat_ip - computed: true, optional: false, required: false
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsReverseConnectionEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsReverseConnectionEndpointsOutputReference {
    return new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsReverseConnectionEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsSecuritySamlConfig {
}

export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsSecuritySamlConfigToTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsSecuritySamlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsSecuritySamlConfigToHclTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsSecuritySamlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsSecuritySamlConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsSecuritySamlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsSecuritySamlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_backend_role - computed: true, optional: false, required: false
  public get adminBackendRole() {
    return this.getStringAttribute('admin_backend_role');
  }

  // idp_entity_id - computed: true, optional: false, required: false
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }

  // idp_metadata_content - computed: true, optional: false, required: false
  public get idpMetadataContent() {
    return this.getStringAttribute('idp_metadata_content');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // opendashboard_url - computed: true, optional: false, required: false
  public get opendashboardUrl() {
    return this.getStringAttribute('opendashboard_url');
  }

  // roles_key - computed: true, optional: false, required: false
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }

  // subject_key - computed: true, optional: false, required: false
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsSecuritySamlConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsSecuritySamlConfigOutputReference {
    return new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsSecuritySamlConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems {
}

export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsToTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsToHclTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domains - computed: true, optional: false, required: false
  public get availabilityDomains() {
    return this.getListAttribute('availability_domains');
  }

  // certificate_config - computed: true, optional: false, required: false
  private _certificateConfig = new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsCertificateConfigList(this, "certificate_config", false);
  public get certificateConfig() {
    return this._certificateConfig;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // configure_outbound_cluster_trigger - computed: true, optional: false, required: false
  public get configureOutboundClusterTrigger() {
    return this.getNumberAttribute('configure_outbound_cluster_trigger');
  }

  // data_node_count - computed: true, optional: false, required: false
  public get dataNodeCount() {
    return this.getNumberAttribute('data_node_count');
  }

  // data_node_host_bare_metal_shape - computed: true, optional: false, required: false
  public get dataNodeHostBareMetalShape() {
    return this.getStringAttribute('data_node_host_bare_metal_shape');
  }

  // data_node_host_memory_gb - computed: true, optional: false, required: false
  public get dataNodeHostMemoryGb() {
    return this.getNumberAttribute('data_node_host_memory_gb');
  }

  // data_node_host_ocpu_count - computed: true, optional: false, required: false
  public get dataNodeHostOcpuCount() {
    return this.getNumberAttribute('data_node_host_ocpu_count');
  }

  // data_node_host_shape - computed: true, optional: false, required: false
  public get dataNodeHostShape() {
    return this.getStringAttribute('data_node_host_shape');
  }

  // data_node_host_type - computed: true, optional: false, required: false
  public get dataNodeHostType() {
    return this.getStringAttribute('data_node_host_type');
  }

  // data_node_storage_gb - computed: true, optional: false, required: false
  public get dataNodeStorageGb() {
    return this.getNumberAttribute('data_node_storage_gb');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // inbound_cluster_ids - computed: true, optional: false, required: false
  public get inboundClusterIds() {
    return this.getListAttribute('inbound_cluster_ids');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_details - computed: true, optional: false, required: false
  private _maintenanceDetails = new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsMaintenanceDetailsList(this, "maintenance_details", false);
  public get maintenanceDetails() {
    return this._maintenanceDetails;
  }

  // master_node_count - computed: true, optional: false, required: false
  public get masterNodeCount() {
    return this.getNumberAttribute('master_node_count');
  }

  // master_node_host_bare_metal_shape - computed: true, optional: false, required: false
  public get masterNodeHostBareMetalShape() {
    return this.getStringAttribute('master_node_host_bare_metal_shape');
  }

  // master_node_host_memory_gb - computed: true, optional: false, required: false
  public get masterNodeHostMemoryGb() {
    return this.getNumberAttribute('master_node_host_memory_gb');
  }

  // master_node_host_ocpu_count - computed: true, optional: false, required: false
  public get masterNodeHostOcpuCount() {
    return this.getNumberAttribute('master_node_host_ocpu_count');
  }

  // master_node_host_shape - computed: true, optional: false, required: false
  public get masterNodeHostShape() {
    return this.getStringAttribute('master_node_host_shape');
  }

  // master_node_host_type - computed: true, optional: false, required: false
  public get masterNodeHostType() {
    return this.getStringAttribute('master_node_host_type');
  }

  // nsg_id - computed: true, optional: false, required: false
  public get nsgId() {
    return this.getStringAttribute('nsg_id');
  }

  // opendashboard_fqdn - computed: true, optional: false, required: false
  public get opendashboardFqdn() {
    return this.getStringAttribute('opendashboard_fqdn');
  }

  // opendashboard_node_count - computed: true, optional: false, required: false
  public get opendashboardNodeCount() {
    return this.getNumberAttribute('opendashboard_node_count');
  }

  // opendashboard_node_host_memory_gb - computed: true, optional: false, required: false
  public get opendashboardNodeHostMemoryGb() {
    return this.getNumberAttribute('opendashboard_node_host_memory_gb');
  }

  // opendashboard_node_host_ocpu_count - computed: true, optional: false, required: false
  public get opendashboardNodeHostOcpuCount() {
    return this.getNumberAttribute('opendashboard_node_host_ocpu_count');
  }

  // opendashboard_node_host_shape - computed: true, optional: false, required: false
  public get opendashboardNodeHostShape() {
    return this.getStringAttribute('opendashboard_node_host_shape');
  }

  // opendashboard_private_ip - computed: true, optional: false, required: false
  public get opendashboardPrivateIp() {
    return this.getStringAttribute('opendashboard_private_ip');
  }

  // opensearch_fqdn - computed: true, optional: false, required: false
  public get opensearchFqdn() {
    return this.getStringAttribute('opensearch_fqdn');
  }

  // opensearch_private_ip - computed: true, optional: false, required: false
  public get opensearchPrivateIp() {
    return this.getStringAttribute('opensearch_private_ip');
  }

  // outbound_cluster_config - computed: true, optional: false, required: false
  private _outboundClusterConfig = new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutboundClusterConfigList(this, "outbound_cluster_config", false);
  public get outboundClusterConfig() {
    return this._outboundClusterConfig;
  }

  // reverse_connection_endpoint_customer_ips - computed: true, optional: false, required: false
  public get reverseConnectionEndpointCustomerIps() {
    return this.getListAttribute('reverse_connection_endpoint_customer_ips');
  }

  // reverse_connection_endpoints - computed: true, optional: false, required: false
  private _reverseConnectionEndpoints = new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsReverseConnectionEndpointsList(this, "reverse_connection_endpoints", false);
  public get reverseConnectionEndpoints() {
    return this._reverseConnectionEndpoints;
  }

  // search_node_count - computed: true, optional: false, required: false
  public get searchNodeCount() {
    return this.getNumberAttribute('search_node_count');
  }

  // search_node_host_memory_gb - computed: true, optional: false, required: false
  public get searchNodeHostMemoryGb() {
    return this.getNumberAttribute('search_node_host_memory_gb');
  }

  // search_node_host_ocpu_count - computed: true, optional: false, required: false
  public get searchNodeHostOcpuCount() {
    return this.getNumberAttribute('search_node_host_ocpu_count');
  }

  // search_node_host_shape - computed: true, optional: false, required: false
  public get searchNodeHostShape() {
    return this.getStringAttribute('search_node_host_shape');
  }

  // search_node_host_type - computed: true, optional: false, required: false
  public get searchNodeHostType() {
    return this.getStringAttribute('search_node_host_type');
  }

  // search_node_storage_gb - computed: true, optional: false, required: false
  public get searchNodeStorageGb() {
    return this.getNumberAttribute('search_node_storage_gb');
  }

  // security_attributes - computed: true, optional: false, required: false
  private _securityAttributes = new cdktf.StringMap(this, "security_attributes");
  public get securityAttributes() {
    return this._securityAttributes;
  }

  // security_master_user_name - computed: true, optional: false, required: false
  public get securityMasterUserName() {
    return this.getStringAttribute('security_master_user_name');
  }

  // security_master_user_password_hash - computed: true, optional: false, required: false
  public get securityMasterUserPasswordHash() {
    return this.getStringAttribute('security_master_user_password_hash');
  }

  // security_mode - computed: true, optional: false, required: false
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }

  // security_saml_config - computed: true, optional: false, required: false
  private _securitySamlConfig = new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsSecuritySamlConfigList(this, "security_saml_config", false);
  public get securitySamlConfig() {
    return this._securitySamlConfig;
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_compartment_id - computed: true, optional: false, required: false
  public get subnetCompartmentId() {
    return this.getStringAttribute('subnet_compartment_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
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

  // time_deleted - computed: true, optional: false, required: false
  public get timeDeleted() {
    return this.getStringAttribute('time_deleted');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // total_storage_gb - computed: true, optional: false, required: false
  public get totalStorageGb() {
    return this.getNumberAttribute('total_storage_gb');
  }

  // upgrade_major_version_trigger - computed: true, optional: false, required: false
  public get upgradeMajorVersionTrigger() {
    return this.getNumberAttribute('upgrade_major_version_trigger');
  }

  // vcn_compartment_id - computed: true, optional: false, required: false
  public get vcnCompartmentId() {
    return this.getStringAttribute('vcn_compartment_id');
  }

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference {
    return new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClustersOpensearchClusterCollection {
}

export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionToTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClustersOpensearchClusterCollectionToHclTerraform(struct?: DataOciOpensearchOpensearchClustersOpensearchClusterCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClustersOpensearchClusterCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClustersOpensearchClusterCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference {
    return new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClustersFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opensearch_opensearch_clusters#name DataOciOpensearchOpensearchClusters#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opensearch_opensearch_clusters#regex DataOciOpensearchOpensearchClusters#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opensearch_opensearch_clusters#values DataOciOpensearchOpensearchClusters#values}
  */
  readonly values: string[];
}

export function dataOciOpensearchOpensearchClustersFilterToTerraform(struct?: DataOciOpensearchOpensearchClustersFilter | cdktf.IResolvable): any {
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


export function dataOciOpensearchOpensearchClustersFilterToHclTerraform(struct?: DataOciOpensearchOpensearchClustersFilter | cdktf.IResolvable): any {
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

export class DataOciOpensearchOpensearchClustersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClustersFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOpensearchOpensearchClustersFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOpensearchOpensearchClustersFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOpensearchOpensearchClustersFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOpensearchOpensearchClustersFilterOutputReference {
    return new DataOciOpensearchOpensearchClustersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opensearch_opensearch_clusters oci_opensearch_opensearch_clusters}
*/
export class DataOciOpensearchOpensearchClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opensearch_opensearch_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpensearchOpensearchClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpensearchOpensearchClusters to import
  * @param importFromId The id of the existing DataOciOpensearchOpensearchClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opensearch_opensearch_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpensearchOpensearchClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opensearch_opensearch_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opensearch_opensearch_clusters oci_opensearch_opensearch_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpensearchOpensearchClustersConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpensearchOpensearchClustersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opensearch_opensearch_clusters',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
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

  // opensearch_cluster_collection - computed: true, optional: false, required: false
  private _opensearchClusterCollection = new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList(this, "opensearch_cluster_collection", false);
  public get opensearchClusterCollection() {
    return this._opensearchClusterCollection;
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
  private _filter = new DataOciOpensearchOpensearchClustersFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOpensearchOpensearchClustersFilter[] | cdktf.IResolvable) {
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
      filter: cdktf.listMapper(dataOciOpensearchOpensearchClustersFilterToTerraform, true)(this._filter.internalValue),
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
        value: cdktf.listMapperHcl(dataOciOpensearchOpensearchClustersFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOpensearchOpensearchClustersFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
