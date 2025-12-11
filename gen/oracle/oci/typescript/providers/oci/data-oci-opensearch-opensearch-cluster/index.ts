// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpensearchOpensearchClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster#opensearch_cluster_id DataOciOpensearchOpensearchCluster#opensearch_cluster_id}
  */
  readonly opensearchClusterId: string;
}
export interface DataOciOpensearchOpensearchClusterCertificateConfig {
}

export function dataOciOpensearchOpensearchClusterCertificateConfigToTerraform(struct?: DataOciOpensearchOpensearchClusterCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClusterCertificateConfigToHclTerraform(struct?: DataOciOpensearchOpensearchClusterCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClusterCertificateConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClusterCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClusterCertificateConfig | undefined) {
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

export class DataOciOpensearchOpensearchClusterCertificateConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClusterCertificateConfigOutputReference {
    return new DataOciOpensearchOpensearchClusterCertificateConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClusterMaintenanceDetails {
}

export function dataOciOpensearchOpensearchClusterMaintenanceDetailsToTerraform(struct?: DataOciOpensearchOpensearchClusterMaintenanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClusterMaintenanceDetailsToHclTerraform(struct?: DataOciOpensearchOpensearchClusterMaintenanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClusterMaintenanceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClusterMaintenanceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClusterMaintenanceDetails | undefined) {
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

export class DataOciOpensearchOpensearchClusterMaintenanceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClusterMaintenanceDetailsOutputReference {
    return new DataOciOpensearchOpensearchClusterMaintenanceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClusterOutboundClusterConfigOutboundClusters {
}

export function dataOciOpensearchOpensearchClusterOutboundClusterConfigOutboundClustersToTerraform(struct?: DataOciOpensearchOpensearchClusterOutboundClusterConfigOutboundClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClusterOutboundClusterConfigOutboundClustersToHclTerraform(struct?: DataOciOpensearchOpensearchClusterOutboundClusterConfigOutboundClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClusterOutboundClusterConfigOutboundClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClusterOutboundClusterConfigOutboundClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClusterOutboundClusterConfigOutboundClusters | undefined) {
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

export class DataOciOpensearchOpensearchClusterOutboundClusterConfigOutboundClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClusterOutboundClusterConfigOutboundClustersOutputReference {
    return new DataOciOpensearchOpensearchClusterOutboundClusterConfigOutboundClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClusterOutboundClusterConfig {
}

export function dataOciOpensearchOpensearchClusterOutboundClusterConfigToTerraform(struct?: DataOciOpensearchOpensearchClusterOutboundClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClusterOutboundClusterConfigToHclTerraform(struct?: DataOciOpensearchOpensearchClusterOutboundClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClusterOutboundClusterConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClusterOutboundClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClusterOutboundClusterConfig | undefined) {
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
  private _outboundClusters = new DataOciOpensearchOpensearchClusterOutboundClusterConfigOutboundClustersList(this, "outbound_clusters", false);
  public get outboundClusters() {
    return this._outboundClusters;
  }
}

export class DataOciOpensearchOpensearchClusterOutboundClusterConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClusterOutboundClusterConfigOutputReference {
    return new DataOciOpensearchOpensearchClusterOutboundClusterConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClusterReverseConnectionEndpoints {
}

export function dataOciOpensearchOpensearchClusterReverseConnectionEndpointsToTerraform(struct?: DataOciOpensearchOpensearchClusterReverseConnectionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClusterReverseConnectionEndpointsToHclTerraform(struct?: DataOciOpensearchOpensearchClusterReverseConnectionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClusterReverseConnectionEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClusterReverseConnectionEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClusterReverseConnectionEndpoints | undefined) {
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

export class DataOciOpensearchOpensearchClusterReverseConnectionEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClusterReverseConnectionEndpointsOutputReference {
    return new DataOciOpensearchOpensearchClusterReverseConnectionEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpensearchOpensearchClusterSecuritySamlConfig {
}

export function dataOciOpensearchOpensearchClusterSecuritySamlConfigToTerraform(struct?: DataOciOpensearchOpensearchClusterSecuritySamlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClusterSecuritySamlConfigToHclTerraform(struct?: DataOciOpensearchOpensearchClusterSecuritySamlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClusterSecuritySamlConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpensearchOpensearchClusterSecuritySamlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClusterSecuritySamlConfig | undefined) {
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

export class DataOciOpensearchOpensearchClusterSecuritySamlConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpensearchOpensearchClusterSecuritySamlConfigOutputReference {
    return new DataOciOpensearchOpensearchClusterSecuritySamlConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster}
*/
export class DataOciOpensearchOpensearchCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opensearch_opensearch_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpensearchOpensearchCluster to import
  * @param importFromId The id of the existing DataOciOpensearchOpensearchCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpensearchOpensearchCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opensearch_opensearch_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpensearchOpensearchClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpensearchOpensearchClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opensearch_opensearch_cluster',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._opensearchClusterId = config.opensearchClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domains - computed: true, optional: false, required: false
  public get availabilityDomains() {
    return this.getListAttribute('availability_domains');
  }

  // certificate_config - computed: true, optional: false, required: false
  private _certificateConfig = new DataOciOpensearchOpensearchClusterCertificateConfigList(this, "certificate_config", false);
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
  private _maintenanceDetails = new DataOciOpensearchOpensearchClusterMaintenanceDetailsList(this, "maintenance_details", false);
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

  // opensearch_cluster_id - computed: false, optional: false, required: true
  private _opensearchClusterId?: string; 
  public get opensearchClusterId() {
    return this.getStringAttribute('opensearch_cluster_id');
  }
  public set opensearchClusterId(value: string) {
    this._opensearchClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchClusterIdInput() {
    return this._opensearchClusterId;
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
  private _outboundClusterConfig = new DataOciOpensearchOpensearchClusterOutboundClusterConfigList(this, "outbound_cluster_config", false);
  public get outboundClusterConfig() {
    return this._outboundClusterConfig;
  }

  // reverse_connection_endpoint_customer_ips - computed: true, optional: false, required: false
  public get reverseConnectionEndpointCustomerIps() {
    return this.getListAttribute('reverse_connection_endpoint_customer_ips');
  }

  // reverse_connection_endpoints - computed: true, optional: false, required: false
  private _reverseConnectionEndpoints = new DataOciOpensearchOpensearchClusterReverseConnectionEndpointsList(this, "reverse_connection_endpoints", false);
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
  private _securitySamlConfig = new DataOciOpensearchOpensearchClusterSecuritySamlConfigList(this, "security_saml_config", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      opensearch_cluster_id: cdktf.stringToTerraform(this._opensearchClusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      opensearch_cluster_id: {
        value: cdktf.stringToHclTerraform(this._opensearchClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
