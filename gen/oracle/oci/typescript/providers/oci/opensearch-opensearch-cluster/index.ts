// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpensearchOpensearchClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#configure_outbound_cluster_trigger OpensearchOpensearchCluster#configure_outbound_cluster_trigger}
  */
  readonly configureOutboundClusterTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}
  */
  readonly dataNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}
  */
  readonly dataNodeHostBareMetalShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}
  */
  readonly dataNodeHostMemoryGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}
  */
  readonly dataNodeHostOcpuCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#data_node_host_shape OpensearchOpensearchCluster#data_node_host_shape}
  */
  readonly dataNodeHostShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}
  */
  readonly dataNodeHostType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}
  */
  readonly dataNodeStorageGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#inbound_cluster_ids OpensearchOpensearchCluster#inbound_cluster_ids}
  */
  readonly inboundClusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}
  */
  readonly masterNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}
  */
  readonly masterNodeHostBareMetalShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}
  */
  readonly masterNodeHostMemoryGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}
  */
  readonly masterNodeHostOcpuCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#master_node_host_shape OpensearchOpensearchCluster#master_node_host_shape}
  */
  readonly masterNodeHostShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}
  */
  readonly masterNodeHostType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#nsg_id OpensearchOpensearchCluster#nsg_id}
  */
  readonly nsgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}
  */
  readonly opendashboardNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}
  */
  readonly opendashboardNodeHostMemoryGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}
  */
  readonly opendashboardNodeHostOcpuCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_shape OpensearchOpensearchCluster#opendashboard_node_host_shape}
  */
  readonly opendashboardNodeHostShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#reverse_connection_endpoint_customer_ips OpensearchOpensearchCluster#reverse_connection_endpoint_customer_ips}
  */
  readonly reverseConnectionEndpointCustomerIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#search_node_count OpensearchOpensearchCluster#search_node_count}
  */
  readonly searchNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#search_node_host_memory_gb OpensearchOpensearchCluster#search_node_host_memory_gb}
  */
  readonly searchNodeHostMemoryGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#search_node_host_ocpu_count OpensearchOpensearchCluster#search_node_host_ocpu_count}
  */
  readonly searchNodeHostOcpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#search_node_host_shape OpensearchOpensearchCluster#search_node_host_shape}
  */
  readonly searchNodeHostShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#search_node_host_type OpensearchOpensearchCluster#search_node_host_type}
  */
  readonly searchNodeHostType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#search_node_storage_gb OpensearchOpensearchCluster#search_node_storage_gb}
  */
  readonly searchNodeStorageGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#security_attributes OpensearchOpensearchCluster#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}
  */
  readonly securityMasterUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}
  */
  readonly securityMasterUserPasswordHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}
  */
  readonly softwareVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}
  */
  readonly subnetCompartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#system_tags OpensearchOpensearchCluster#system_tags}
  */
  readonly systemTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#upgrade_major_version_trigger OpensearchOpensearchCluster#upgrade_major_version_trigger}
  */
  readonly upgradeMajorVersionTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}
  */
  readonly vcnCompartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}
  */
  readonly vcnId: string;
  /**
  * certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#certificate_config OpensearchOpensearchCluster#certificate_config}
  */
  readonly certificateConfig?: OpensearchOpensearchClusterCertificateConfig;
  /**
  * maintenance_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#maintenance_details OpensearchOpensearchCluster#maintenance_details}
  */
  readonly maintenanceDetails?: OpensearchOpensearchClusterMaintenanceDetails;
  /**
  * outbound_cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#outbound_cluster_config OpensearchOpensearchCluster#outbound_cluster_config}
  */
  readonly outboundClusterConfig?: OpensearchOpensearchClusterOutboundClusterConfig;
  /**
  * security_saml_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#security_saml_config OpensearchOpensearchCluster#security_saml_config}
  */
  readonly securitySamlConfig?: OpensearchOpensearchClusterSecuritySamlConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#timeouts OpensearchOpensearchCluster#timeouts}
  */
  readonly timeouts?: OpensearchOpensearchClusterTimeouts;
}
export interface OpensearchOpensearchClusterReverseConnectionEndpoints {
}

export function opensearchOpensearchClusterReverseConnectionEndpointsToTerraform(struct?: OpensearchOpensearchClusterReverseConnectionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function opensearchOpensearchClusterReverseConnectionEndpointsToHclTerraform(struct?: OpensearchOpensearchClusterReverseConnectionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OpensearchOpensearchClusterReverseConnectionEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpensearchOpensearchClusterReverseConnectionEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchClusterReverseConnectionEndpoints | undefined) {
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

export class OpensearchOpensearchClusterReverseConnectionEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): OpensearchOpensearchClusterReverseConnectionEndpointsOutputReference {
    return new OpensearchOpensearchClusterReverseConnectionEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchOpensearchClusterCertificateConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#cluster_certificate_mode OpensearchOpensearchCluster#cluster_certificate_mode}
  */
  readonly clusterCertificateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#dashboard_certificate_mode OpensearchOpensearchCluster#dashboard_certificate_mode}
  */
  readonly dashboardCertificateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#open_search_api_certificate_id OpensearchOpensearchCluster#open_search_api_certificate_id}
  */
  readonly openSearchApiCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#open_search_dashboard_certificate_id OpensearchOpensearchCluster#open_search_dashboard_certificate_id}
  */
  readonly openSearchDashboardCertificateId?: string;
}

export function opensearchOpensearchClusterCertificateConfigToTerraform(struct?: OpensearchOpensearchClusterCertificateConfigOutputReference | OpensearchOpensearchClusterCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_certificate_mode: cdktf.stringToTerraform(struct!.clusterCertificateMode),
    dashboard_certificate_mode: cdktf.stringToTerraform(struct!.dashboardCertificateMode),
    open_search_api_certificate_id: cdktf.stringToTerraform(struct!.openSearchApiCertificateId),
    open_search_dashboard_certificate_id: cdktf.stringToTerraform(struct!.openSearchDashboardCertificateId),
  }
}


export function opensearchOpensearchClusterCertificateConfigToHclTerraform(struct?: OpensearchOpensearchClusterCertificateConfigOutputReference | OpensearchOpensearchClusterCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_certificate_mode: {
      value: cdktf.stringToHclTerraform(struct!.clusterCertificateMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dashboard_certificate_mode: {
      value: cdktf.stringToHclTerraform(struct!.dashboardCertificateMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_search_api_certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.openSearchApiCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_search_dashboard_certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.openSearchDashboardCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchClusterCertificateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchClusterCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterCertificateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCertificateMode = this._clusterCertificateMode;
    }
    if (this._dashboardCertificateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardCertificateMode = this._dashboardCertificateMode;
    }
    if (this._openSearchApiCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSearchApiCertificateId = this._openSearchApiCertificateId;
    }
    if (this._openSearchDashboardCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSearchDashboardCertificateId = this._openSearchDashboardCertificateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchClusterCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterCertificateMode = undefined;
      this._dashboardCertificateMode = undefined;
      this._openSearchApiCertificateId = undefined;
      this._openSearchDashboardCertificateId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterCertificateMode = value.clusterCertificateMode;
      this._dashboardCertificateMode = value.dashboardCertificateMode;
      this._openSearchApiCertificateId = value.openSearchApiCertificateId;
      this._openSearchDashboardCertificateId = value.openSearchDashboardCertificateId;
    }
  }

  // cluster_certificate_mode - computed: true, optional: true, required: false
  private _clusterCertificateMode?: string; 
  public get clusterCertificateMode() {
    return this.getStringAttribute('cluster_certificate_mode');
  }
  public set clusterCertificateMode(value: string) {
    this._clusterCertificateMode = value;
  }
  public resetClusterCertificateMode() {
    this._clusterCertificateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCertificateModeInput() {
    return this._clusterCertificateMode;
  }

  // dashboard_certificate_mode - computed: true, optional: true, required: false
  private _dashboardCertificateMode?: string; 
  public get dashboardCertificateMode() {
    return this.getStringAttribute('dashboard_certificate_mode');
  }
  public set dashboardCertificateMode(value: string) {
    this._dashboardCertificateMode = value;
  }
  public resetDashboardCertificateMode() {
    this._dashboardCertificateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardCertificateModeInput() {
    return this._dashboardCertificateMode;
  }

  // open_search_api_certificate_id - computed: true, optional: true, required: false
  private _openSearchApiCertificateId?: string; 
  public get openSearchApiCertificateId() {
    return this.getStringAttribute('open_search_api_certificate_id');
  }
  public set openSearchApiCertificateId(value: string) {
    this._openSearchApiCertificateId = value;
  }
  public resetOpenSearchApiCertificateId() {
    this._openSearchApiCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSearchApiCertificateIdInput() {
    return this._openSearchApiCertificateId;
  }

  // open_search_dashboard_certificate_id - computed: true, optional: true, required: false
  private _openSearchDashboardCertificateId?: string; 
  public get openSearchDashboardCertificateId() {
    return this.getStringAttribute('open_search_dashboard_certificate_id');
  }
  public set openSearchDashboardCertificateId(value: string) {
    this._openSearchDashboardCertificateId = value;
  }
  public resetOpenSearchDashboardCertificateId() {
    this._openSearchDashboardCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSearchDashboardCertificateIdInput() {
    return this._openSearchDashboardCertificateId;
  }
}
export interface OpensearchOpensearchClusterMaintenanceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#notification_email_ids OpensearchOpensearchCluster#notification_email_ids}
  */
  readonly notificationEmailIds?: string[];
}

export function opensearchOpensearchClusterMaintenanceDetailsToTerraform(struct?: OpensearchOpensearchClusterMaintenanceDetailsOutputReference | OpensearchOpensearchClusterMaintenanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_email_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationEmailIds),
  }
}


export function opensearchOpensearchClusterMaintenanceDetailsToHclTerraform(struct?: OpensearchOpensearchClusterMaintenanceDetailsOutputReference | OpensearchOpensearchClusterMaintenanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_email_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationEmailIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchClusterMaintenanceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchClusterMaintenanceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationEmailIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationEmailIds = this._notificationEmailIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchClusterMaintenanceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notificationEmailIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notificationEmailIds = value.notificationEmailIds;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // notification_email_ids - computed: true, optional: true, required: false
  private _notificationEmailIds?: string[]; 
  public get notificationEmailIds() {
    return this.getListAttribute('notification_email_ids');
  }
  public set notificationEmailIds(value: string[]) {
    this._notificationEmailIds = value;
  }
  public resetNotificationEmailIds() {
    this._notificationEmailIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailIdsInput() {
    return this._notificationEmailIds;
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
export interface OpensearchOpensearchClusterOutboundClusterConfigOutboundClusters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#is_skip_unavailable OpensearchOpensearchCluster#is_skip_unavailable}
  */
  readonly isSkipUnavailable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#mode OpensearchOpensearchCluster#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#ping_schedule OpensearchOpensearchCluster#ping_schedule}
  */
  readonly pingSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#seed_cluster_id OpensearchOpensearchCluster#seed_cluster_id}
  */
  readonly seedClusterId: string;
}

export function opensearchOpensearchClusterOutboundClusterConfigOutboundClustersToTerraform(struct?: OpensearchOpensearchClusterOutboundClusterConfigOutboundClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_skip_unavailable: cdktf.booleanToTerraform(struct!.isSkipUnavailable),
    mode: cdktf.stringToTerraform(struct!.mode),
    ping_schedule: cdktf.stringToTerraform(struct!.pingSchedule),
    seed_cluster_id: cdktf.stringToTerraform(struct!.seedClusterId),
  }
}


export function opensearchOpensearchClusterOutboundClusterConfigOutboundClustersToHclTerraform(struct?: OpensearchOpensearchClusterOutboundClusterConfigOutboundClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_skip_unavailable: {
      value: cdktf.booleanToHclTerraform(struct!.isSkipUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ping_schedule: {
      value: cdktf.stringToHclTerraform(struct!.pingSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seed_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.seedClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchClusterOutboundClusterConfigOutboundClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpensearchOpensearchClusterOutboundClusterConfigOutboundClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isSkipUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSkipUnavailable = this._isSkipUnavailable;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._pingSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingSchedule = this._pingSchedule;
    }
    if (this._seedClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedClusterId = this._seedClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchClusterOutboundClusterConfigOutboundClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._isSkipUnavailable = undefined;
      this._mode = undefined;
      this._pingSchedule = undefined;
      this._seedClusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._isSkipUnavailable = value.isSkipUnavailable;
      this._mode = value.mode;
      this._pingSchedule = value.pingSchedule;
      this._seedClusterId = value.seedClusterId;
    }
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // is_skip_unavailable - computed: true, optional: true, required: false
  private _isSkipUnavailable?: boolean | cdktf.IResolvable; 
  public get isSkipUnavailable() {
    return this.getBooleanAttribute('is_skip_unavailable');
  }
  public set isSkipUnavailable(value: boolean | cdktf.IResolvable) {
    this._isSkipUnavailable = value;
  }
  public resetIsSkipUnavailable() {
    this._isSkipUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSkipUnavailableInput() {
    return this._isSkipUnavailable;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // ping_schedule - computed: true, optional: true, required: false
  private _pingSchedule?: string; 
  public get pingSchedule() {
    return this.getStringAttribute('ping_schedule');
  }
  public set pingSchedule(value: string) {
    this._pingSchedule = value;
  }
  public resetPingSchedule() {
    this._pingSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingScheduleInput() {
    return this._pingSchedule;
  }

  // seed_cluster_id - computed: false, optional: false, required: true
  private _seedClusterId?: string; 
  public get seedClusterId() {
    return this.getStringAttribute('seed_cluster_id');
  }
  public set seedClusterId(value: string) {
    this._seedClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seedClusterIdInput() {
    return this._seedClusterId;
  }
}

export class OpensearchOpensearchClusterOutboundClusterConfigOutboundClustersList extends cdktf.ComplexList {
  public internalValue? : OpensearchOpensearchClusterOutboundClusterConfigOutboundClusters[] | cdktf.IResolvable

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
  public get(index: number): OpensearchOpensearchClusterOutboundClusterConfigOutboundClustersOutputReference {
    return new OpensearchOpensearchClusterOutboundClusterConfigOutboundClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchOpensearchClusterOutboundClusterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#is_enabled OpensearchOpensearchCluster#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * outbound_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#outbound_clusters OpensearchOpensearchCluster#outbound_clusters}
  */
  readonly outboundClusters: OpensearchOpensearchClusterOutboundClusterConfigOutboundClusters[] | cdktf.IResolvable;
}

export function opensearchOpensearchClusterOutboundClusterConfigToTerraform(struct?: OpensearchOpensearchClusterOutboundClusterConfigOutputReference | OpensearchOpensearchClusterOutboundClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    outbound_clusters: cdktf.listMapper(opensearchOpensearchClusterOutboundClusterConfigOutboundClustersToTerraform, true)(struct!.outboundClusters),
  }
}


export function opensearchOpensearchClusterOutboundClusterConfigToHclTerraform(struct?: OpensearchOpensearchClusterOutboundClusterConfigOutputReference | OpensearchOpensearchClusterOutboundClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outbound_clusters: {
      value: cdktf.listMapperHcl(opensearchOpensearchClusterOutboundClusterConfigOutboundClustersToHclTerraform, true)(struct!.outboundClusters),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchClusterOutboundClusterConfigOutboundClustersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchClusterOutboundClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchClusterOutboundClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._outboundClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundClusters = this._outboundClusters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchClusterOutboundClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._outboundClusters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._outboundClusters.internalValue = value.outboundClusters;
    }
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // outbound_clusters - computed: false, optional: false, required: true
  private _outboundClusters = new OpensearchOpensearchClusterOutboundClusterConfigOutboundClustersList(this, "outbound_clusters", false);
  public get outboundClusters() {
    return this._outboundClusters;
  }
  public putOutboundClusters(value: OpensearchOpensearchClusterOutboundClusterConfigOutboundClusters[] | cdktf.IResolvable) {
    this._outboundClusters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundClustersInput() {
    return this._outboundClusters.internalValue;
  }
}
export interface OpensearchOpensearchClusterSecuritySamlConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#admin_backend_role OpensearchOpensearchCluster#admin_backend_role}
  */
  readonly adminBackendRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#idp_entity_id OpensearchOpensearchCluster#idp_entity_id}
  */
  readonly idpEntityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#idp_metadata_content OpensearchOpensearchCluster#idp_metadata_content}
  */
  readonly idpMetadataContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#is_enabled OpensearchOpensearchCluster#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#opendashboard_url OpensearchOpensearchCluster#opendashboard_url}
  */
  readonly opendashboardUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#roles_key OpensearchOpensearchCluster#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#subject_key OpensearchOpensearchCluster#subject_key}
  */
  readonly subjectKey?: string;
}

export function opensearchOpensearchClusterSecuritySamlConfigToTerraform(struct?: OpensearchOpensearchClusterSecuritySamlConfigOutputReference | OpensearchOpensearchClusterSecuritySamlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_backend_role: cdktf.stringToTerraform(struct!.adminBackendRole),
    idp_entity_id: cdktf.stringToTerraform(struct!.idpEntityId),
    idp_metadata_content: cdktf.stringToTerraform(struct!.idpMetadataContent),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    opendashboard_url: cdktf.stringToTerraform(struct!.opendashboardUrl),
    roles_key: cdktf.stringToTerraform(struct!.rolesKey),
    subject_key: cdktf.stringToTerraform(struct!.subjectKey),
  }
}


export function opensearchOpensearchClusterSecuritySamlConfigToHclTerraform(struct?: OpensearchOpensearchClusterSecuritySamlConfigOutputReference | OpensearchOpensearchClusterSecuritySamlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_backend_role: {
      value: cdktf.stringToHclTerraform(struct!.adminBackendRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.idpEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_metadata_content: {
      value: cdktf.stringToHclTerraform(struct!.idpMetadataContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    opendashboard_url: {
      value: cdktf.stringToHclTerraform(struct!.opendashboardUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles_key: {
      value: cdktf.stringToHclTerraform(struct!.rolesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_key: {
      value: cdktf.stringToHclTerraform(struct!.subjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchClusterSecuritySamlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchClusterSecuritySamlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminBackendRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminBackendRole = this._adminBackendRole;
    }
    if (this._idpEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpEntityId = this._idpEntityId;
    }
    if (this._idpMetadataContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpMetadataContent = this._idpMetadataContent;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._opendashboardUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.opendashboardUrl = this._opendashboardUrl;
    }
    if (this._rolesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesKey = this._rolesKey;
    }
    if (this._subjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKey = this._subjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchClusterSecuritySamlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminBackendRole = undefined;
      this._idpEntityId = undefined;
      this._idpMetadataContent = undefined;
      this._isEnabled = undefined;
      this._opendashboardUrl = undefined;
      this._rolesKey = undefined;
      this._subjectKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminBackendRole = value.adminBackendRole;
      this._idpEntityId = value.idpEntityId;
      this._idpMetadataContent = value.idpMetadataContent;
      this._isEnabled = value.isEnabled;
      this._opendashboardUrl = value.opendashboardUrl;
      this._rolesKey = value.rolesKey;
      this._subjectKey = value.subjectKey;
    }
  }

  // admin_backend_role - computed: true, optional: true, required: false
  private _adminBackendRole?: string; 
  public get adminBackendRole() {
    return this.getStringAttribute('admin_backend_role');
  }
  public set adminBackendRole(value: string) {
    this._adminBackendRole = value;
  }
  public resetAdminBackendRole() {
    this._adminBackendRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminBackendRoleInput() {
    return this._adminBackendRole;
  }

  // idp_entity_id - computed: false, optional: false, required: true
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEntityIdInput() {
    return this._idpEntityId;
  }

  // idp_metadata_content - computed: false, optional: false, required: true
  private _idpMetadataContent?: string; 
  public get idpMetadataContent() {
    return this.getStringAttribute('idp_metadata_content');
  }
  public set idpMetadataContent(value: string) {
    this._idpMetadataContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataContentInput() {
    return this._idpMetadataContent;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // opendashboard_url - computed: true, optional: true, required: false
  private _opendashboardUrl?: string; 
  public get opendashboardUrl() {
    return this.getStringAttribute('opendashboard_url');
  }
  public set opendashboardUrl(value: string) {
    this._opendashboardUrl = value;
  }
  public resetOpendashboardUrl() {
    this._opendashboardUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opendashboardUrlInput() {
    return this._opendashboardUrl;
  }

  // roles_key - computed: true, optional: true, required: false
  private _rolesKey?: string; 
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }
  public set rolesKey(value: string) {
    this._rolesKey = value;
  }
  public resetRolesKey() {
    this._rolesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesKeyInput() {
    return this._rolesKey;
  }

  // subject_key - computed: true, optional: true, required: false
  private _subjectKey?: string; 
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
  public set subjectKey(value: string) {
    this._subjectKey = value;
  }
  public resetSubjectKey() {
    this._subjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeyInput() {
    return this._subjectKey;
  }
}
export interface OpensearchOpensearchClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#create OpensearchOpensearchCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#delete OpensearchOpensearchCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#update OpensearchOpensearchCluster#update}
  */
  readonly update?: string;
}

export function opensearchOpensearchClusterTimeoutsToTerraform(struct?: OpensearchOpensearchClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function opensearchOpensearchClusterTimeoutsToHclTerraform(struct?: OpensearchOpensearchClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchOpensearchClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster}
*/
export class OpensearchOpensearchCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opensearch_opensearch_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchOpensearchCluster to import
  * @param importFromId The id of the existing OpensearchOpensearchCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchOpensearchCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opensearch_opensearch_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchOpensearchClusterConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchOpensearchClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opensearch_opensearch_cluster',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
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
    this._configureOutboundClusterTrigger = config.configureOutboundClusterTrigger;
    this._dataNodeCount = config.dataNodeCount;
    this._dataNodeHostBareMetalShape = config.dataNodeHostBareMetalShape;
    this._dataNodeHostMemoryGb = config.dataNodeHostMemoryGb;
    this._dataNodeHostOcpuCount = config.dataNodeHostOcpuCount;
    this._dataNodeHostShape = config.dataNodeHostShape;
    this._dataNodeHostType = config.dataNodeHostType;
    this._dataNodeStorageGb = config.dataNodeStorageGb;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._inboundClusterIds = config.inboundClusterIds;
    this._masterNodeCount = config.masterNodeCount;
    this._masterNodeHostBareMetalShape = config.masterNodeHostBareMetalShape;
    this._masterNodeHostMemoryGb = config.masterNodeHostMemoryGb;
    this._masterNodeHostOcpuCount = config.masterNodeHostOcpuCount;
    this._masterNodeHostShape = config.masterNodeHostShape;
    this._masterNodeHostType = config.masterNodeHostType;
    this._nsgId = config.nsgId;
    this._opendashboardNodeCount = config.opendashboardNodeCount;
    this._opendashboardNodeHostMemoryGb = config.opendashboardNodeHostMemoryGb;
    this._opendashboardNodeHostOcpuCount = config.opendashboardNodeHostOcpuCount;
    this._opendashboardNodeHostShape = config.opendashboardNodeHostShape;
    this._reverseConnectionEndpointCustomerIps = config.reverseConnectionEndpointCustomerIps;
    this._searchNodeCount = config.searchNodeCount;
    this._searchNodeHostMemoryGb = config.searchNodeHostMemoryGb;
    this._searchNodeHostOcpuCount = config.searchNodeHostOcpuCount;
    this._searchNodeHostShape = config.searchNodeHostShape;
    this._searchNodeHostType = config.searchNodeHostType;
    this._searchNodeStorageGb = config.searchNodeStorageGb;
    this._securityAttributes = config.securityAttributes;
    this._securityMasterUserName = config.securityMasterUserName;
    this._securityMasterUserPasswordHash = config.securityMasterUserPasswordHash;
    this._securityMode = config.securityMode;
    this._softwareVersion = config.softwareVersion;
    this._subnetCompartmentId = config.subnetCompartmentId;
    this._subnetId = config.subnetId;
    this._systemTags = config.systemTags;
    this._upgradeMajorVersionTrigger = config.upgradeMajorVersionTrigger;
    this._vcnCompartmentId = config.vcnCompartmentId;
    this._vcnId = config.vcnId;
    this._certificateConfig.internalValue = config.certificateConfig;
    this._maintenanceDetails.internalValue = config.maintenanceDetails;
    this._outboundClusterConfig.internalValue = config.outboundClusterConfig;
    this._securitySamlConfig.internalValue = config.securitySamlConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domains - computed: true, optional: false, required: false
  public get availabilityDomains() {
    return this.getListAttribute('availability_domains');
  }

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

  // configure_outbound_cluster_trigger - computed: false, optional: true, required: false
  private _configureOutboundClusterTrigger?: number; 
  public get configureOutboundClusterTrigger() {
    return this.getNumberAttribute('configure_outbound_cluster_trigger');
  }
  public set configureOutboundClusterTrigger(value: number) {
    this._configureOutboundClusterTrigger = value;
  }
  public resetConfigureOutboundClusterTrigger() {
    this._configureOutboundClusterTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureOutboundClusterTriggerInput() {
    return this._configureOutboundClusterTrigger;
  }

  // data_node_count - computed: false, optional: false, required: true
  private _dataNodeCount?: number; 
  public get dataNodeCount() {
    return this.getNumberAttribute('data_node_count');
  }
  public set dataNodeCount(value: number) {
    this._dataNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeCountInput() {
    return this._dataNodeCount;
  }

  // data_node_host_bare_metal_shape - computed: true, optional: true, required: false
  private _dataNodeHostBareMetalShape?: string; 
  public get dataNodeHostBareMetalShape() {
    return this.getStringAttribute('data_node_host_bare_metal_shape');
  }
  public set dataNodeHostBareMetalShape(value: string) {
    this._dataNodeHostBareMetalShape = value;
  }
  public resetDataNodeHostBareMetalShape() {
    this._dataNodeHostBareMetalShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeHostBareMetalShapeInput() {
    return this._dataNodeHostBareMetalShape;
  }

  // data_node_host_memory_gb - computed: false, optional: false, required: true
  private _dataNodeHostMemoryGb?: number; 
  public get dataNodeHostMemoryGb() {
    return this.getNumberAttribute('data_node_host_memory_gb');
  }
  public set dataNodeHostMemoryGb(value: number) {
    this._dataNodeHostMemoryGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeHostMemoryGbInput() {
    return this._dataNodeHostMemoryGb;
  }

  // data_node_host_ocpu_count - computed: false, optional: false, required: true
  private _dataNodeHostOcpuCount?: number; 
  public get dataNodeHostOcpuCount() {
    return this.getNumberAttribute('data_node_host_ocpu_count');
  }
  public set dataNodeHostOcpuCount(value: number) {
    this._dataNodeHostOcpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeHostOcpuCountInput() {
    return this._dataNodeHostOcpuCount;
  }

  // data_node_host_shape - computed: true, optional: true, required: false
  private _dataNodeHostShape?: string; 
  public get dataNodeHostShape() {
    return this.getStringAttribute('data_node_host_shape');
  }
  public set dataNodeHostShape(value: string) {
    this._dataNodeHostShape = value;
  }
  public resetDataNodeHostShape() {
    this._dataNodeHostShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeHostShapeInput() {
    return this._dataNodeHostShape;
  }

  // data_node_host_type - computed: false, optional: false, required: true
  private _dataNodeHostType?: string; 
  public get dataNodeHostType() {
    return this.getStringAttribute('data_node_host_type');
  }
  public set dataNodeHostType(value: string) {
    this._dataNodeHostType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeHostTypeInput() {
    return this._dataNodeHostType;
  }

  // data_node_storage_gb - computed: false, optional: false, required: true
  private _dataNodeStorageGb?: number; 
  public get dataNodeStorageGb() {
    return this.getNumberAttribute('data_node_storage_gb');
  }
  public set dataNodeStorageGb(value: number) {
    this._dataNodeStorageGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeStorageGbInput() {
    return this._dataNodeStorageGb;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // inbound_cluster_ids - computed: true, optional: true, required: false
  private _inboundClusterIds?: string[]; 
  public get inboundClusterIds() {
    return this.getListAttribute('inbound_cluster_ids');
  }
  public set inboundClusterIds(value: string[]) {
    this._inboundClusterIds = value;
  }
  public resetInboundClusterIds() {
    this._inboundClusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundClusterIdsInput() {
    return this._inboundClusterIds;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // master_node_count - computed: false, optional: false, required: true
  private _masterNodeCount?: number; 
  public get masterNodeCount() {
    return this.getNumberAttribute('master_node_count');
  }
  public set masterNodeCount(value: number) {
    this._masterNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeCountInput() {
    return this._masterNodeCount;
  }

  // master_node_host_bare_metal_shape - computed: true, optional: true, required: false
  private _masterNodeHostBareMetalShape?: string; 
  public get masterNodeHostBareMetalShape() {
    return this.getStringAttribute('master_node_host_bare_metal_shape');
  }
  public set masterNodeHostBareMetalShape(value: string) {
    this._masterNodeHostBareMetalShape = value;
  }
  public resetMasterNodeHostBareMetalShape() {
    this._masterNodeHostBareMetalShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeHostBareMetalShapeInput() {
    return this._masterNodeHostBareMetalShape;
  }

  // master_node_host_memory_gb - computed: false, optional: false, required: true
  private _masterNodeHostMemoryGb?: number; 
  public get masterNodeHostMemoryGb() {
    return this.getNumberAttribute('master_node_host_memory_gb');
  }
  public set masterNodeHostMemoryGb(value: number) {
    this._masterNodeHostMemoryGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeHostMemoryGbInput() {
    return this._masterNodeHostMemoryGb;
  }

  // master_node_host_ocpu_count - computed: false, optional: false, required: true
  private _masterNodeHostOcpuCount?: number; 
  public get masterNodeHostOcpuCount() {
    return this.getNumberAttribute('master_node_host_ocpu_count');
  }
  public set masterNodeHostOcpuCount(value: number) {
    this._masterNodeHostOcpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeHostOcpuCountInput() {
    return this._masterNodeHostOcpuCount;
  }

  // master_node_host_shape - computed: true, optional: true, required: false
  private _masterNodeHostShape?: string; 
  public get masterNodeHostShape() {
    return this.getStringAttribute('master_node_host_shape');
  }
  public set masterNodeHostShape(value: string) {
    this._masterNodeHostShape = value;
  }
  public resetMasterNodeHostShape() {
    this._masterNodeHostShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeHostShapeInput() {
    return this._masterNodeHostShape;
  }

  // master_node_host_type - computed: false, optional: false, required: true
  private _masterNodeHostType?: string; 
  public get masterNodeHostType() {
    return this.getStringAttribute('master_node_host_type');
  }
  public set masterNodeHostType(value: string) {
    this._masterNodeHostType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeHostTypeInput() {
    return this._masterNodeHostType;
  }

  // nsg_id - computed: true, optional: true, required: false
  private _nsgId?: string; 
  public get nsgId() {
    return this.getStringAttribute('nsg_id');
  }
  public set nsgId(value: string) {
    this._nsgId = value;
  }
  public resetNsgId() {
    this._nsgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdInput() {
    return this._nsgId;
  }

  // opendashboard_fqdn - computed: true, optional: false, required: false
  public get opendashboardFqdn() {
    return this.getStringAttribute('opendashboard_fqdn');
  }

  // opendashboard_node_count - computed: false, optional: false, required: true
  private _opendashboardNodeCount?: number; 
  public get opendashboardNodeCount() {
    return this.getNumberAttribute('opendashboard_node_count');
  }
  public set opendashboardNodeCount(value: number) {
    this._opendashboardNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opendashboardNodeCountInput() {
    return this._opendashboardNodeCount;
  }

  // opendashboard_node_host_memory_gb - computed: false, optional: false, required: true
  private _opendashboardNodeHostMemoryGb?: number; 
  public get opendashboardNodeHostMemoryGb() {
    return this.getNumberAttribute('opendashboard_node_host_memory_gb');
  }
  public set opendashboardNodeHostMemoryGb(value: number) {
    this._opendashboardNodeHostMemoryGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opendashboardNodeHostMemoryGbInput() {
    return this._opendashboardNodeHostMemoryGb;
  }

  // opendashboard_node_host_ocpu_count - computed: false, optional: false, required: true
  private _opendashboardNodeHostOcpuCount?: number; 
  public get opendashboardNodeHostOcpuCount() {
    return this.getNumberAttribute('opendashboard_node_host_ocpu_count');
  }
  public set opendashboardNodeHostOcpuCount(value: number) {
    this._opendashboardNodeHostOcpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opendashboardNodeHostOcpuCountInput() {
    return this._opendashboardNodeHostOcpuCount;
  }

  // opendashboard_node_host_shape - computed: true, optional: true, required: false
  private _opendashboardNodeHostShape?: string; 
  public get opendashboardNodeHostShape() {
    return this.getStringAttribute('opendashboard_node_host_shape');
  }
  public set opendashboardNodeHostShape(value: string) {
    this._opendashboardNodeHostShape = value;
  }
  public resetOpendashboardNodeHostShape() {
    this._opendashboardNodeHostShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opendashboardNodeHostShapeInput() {
    return this._opendashboardNodeHostShape;
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

  // reverse_connection_endpoint_customer_ips - computed: true, optional: true, required: false
  private _reverseConnectionEndpointCustomerIps?: string[]; 
  public get reverseConnectionEndpointCustomerIps() {
    return this.getListAttribute('reverse_connection_endpoint_customer_ips');
  }
  public set reverseConnectionEndpointCustomerIps(value: string[]) {
    this._reverseConnectionEndpointCustomerIps = value;
  }
  public resetReverseConnectionEndpointCustomerIps() {
    this._reverseConnectionEndpointCustomerIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseConnectionEndpointCustomerIpsInput() {
    return this._reverseConnectionEndpointCustomerIps;
  }

  // reverse_connection_endpoints - computed: true, optional: false, required: false
  private _reverseConnectionEndpoints = new OpensearchOpensearchClusterReverseConnectionEndpointsList(this, "reverse_connection_endpoints", false);
  public get reverseConnectionEndpoints() {
    return this._reverseConnectionEndpoints;
  }

  // search_node_count - computed: true, optional: true, required: false
  private _searchNodeCount?: number; 
  public get searchNodeCount() {
    return this.getNumberAttribute('search_node_count');
  }
  public set searchNodeCount(value: number) {
    this._searchNodeCount = value;
  }
  public resetSearchNodeCount() {
    this._searchNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchNodeCountInput() {
    return this._searchNodeCount;
  }

  // search_node_host_memory_gb - computed: true, optional: true, required: false
  private _searchNodeHostMemoryGb?: number; 
  public get searchNodeHostMemoryGb() {
    return this.getNumberAttribute('search_node_host_memory_gb');
  }
  public set searchNodeHostMemoryGb(value: number) {
    this._searchNodeHostMemoryGb = value;
  }
  public resetSearchNodeHostMemoryGb() {
    this._searchNodeHostMemoryGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchNodeHostMemoryGbInput() {
    return this._searchNodeHostMemoryGb;
  }

  // search_node_host_ocpu_count - computed: true, optional: true, required: false
  private _searchNodeHostOcpuCount?: number; 
  public get searchNodeHostOcpuCount() {
    return this.getNumberAttribute('search_node_host_ocpu_count');
  }
  public set searchNodeHostOcpuCount(value: number) {
    this._searchNodeHostOcpuCount = value;
  }
  public resetSearchNodeHostOcpuCount() {
    this._searchNodeHostOcpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchNodeHostOcpuCountInput() {
    return this._searchNodeHostOcpuCount;
  }

  // search_node_host_shape - computed: true, optional: true, required: false
  private _searchNodeHostShape?: string; 
  public get searchNodeHostShape() {
    return this.getStringAttribute('search_node_host_shape');
  }
  public set searchNodeHostShape(value: string) {
    this._searchNodeHostShape = value;
  }
  public resetSearchNodeHostShape() {
    this._searchNodeHostShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchNodeHostShapeInput() {
    return this._searchNodeHostShape;
  }

  // search_node_host_type - computed: true, optional: true, required: false
  private _searchNodeHostType?: string; 
  public get searchNodeHostType() {
    return this.getStringAttribute('search_node_host_type');
  }
  public set searchNodeHostType(value: string) {
    this._searchNodeHostType = value;
  }
  public resetSearchNodeHostType() {
    this._searchNodeHostType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchNodeHostTypeInput() {
    return this._searchNodeHostType;
  }

  // search_node_storage_gb - computed: true, optional: true, required: false
  private _searchNodeStorageGb?: number; 
  public get searchNodeStorageGb() {
    return this.getNumberAttribute('search_node_storage_gb');
  }
  public set searchNodeStorageGb(value: number) {
    this._searchNodeStorageGb = value;
  }
  public resetSearchNodeStorageGb() {
    this._searchNodeStorageGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchNodeStorageGbInput() {
    return this._searchNodeStorageGb;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // security_master_user_name - computed: true, optional: true, required: false
  private _securityMasterUserName?: string; 
  public get securityMasterUserName() {
    return this.getStringAttribute('security_master_user_name');
  }
  public set securityMasterUserName(value: string) {
    this._securityMasterUserName = value;
  }
  public resetSecurityMasterUserName() {
    this._securityMasterUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityMasterUserNameInput() {
    return this._securityMasterUserName;
  }

  // security_master_user_password_hash - computed: true, optional: true, required: false
  private _securityMasterUserPasswordHash?: string; 
  public get securityMasterUserPasswordHash() {
    return this.getStringAttribute('security_master_user_password_hash');
  }
  public set securityMasterUserPasswordHash(value: string) {
    this._securityMasterUserPasswordHash = value;
  }
  public resetSecurityMasterUserPasswordHash() {
    this._securityMasterUserPasswordHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityMasterUserPasswordHashInput() {
    return this._securityMasterUserPasswordHash;
  }

  // security_mode - computed: true, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // software_version - computed: false, optional: false, required: true
  private _softwareVersion?: string; 
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }
  public set softwareVersion(value: string) {
    this._softwareVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInput() {
    return this._softwareVersion;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_compartment_id - computed: false, optional: false, required: true
  private _subnetCompartmentId?: string; 
  public get subnetCompartmentId() {
    return this.getStringAttribute('subnet_compartment_id');
  }
  public set subnetCompartmentId(value: string) {
    this._subnetCompartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCompartmentIdInput() {
    return this._subnetCompartmentId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // system_tags - computed: true, optional: true, required: false
  private _systemTags?: { [key: string]: string }; 
  public get systemTags() {
    return this.getStringMapAttribute('system_tags');
  }
  public set systemTags(value: { [key: string]: string }) {
    this._systemTags = value;
  }
  public resetSystemTags() {
    this._systemTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTagsInput() {
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

  // upgrade_major_version_trigger - computed: true, optional: true, required: false
  private _upgradeMajorVersionTrigger?: number; 
  public get upgradeMajorVersionTrigger() {
    return this.getNumberAttribute('upgrade_major_version_trigger');
  }
  public set upgradeMajorVersionTrigger(value: number) {
    this._upgradeMajorVersionTrigger = value;
  }
  public resetUpgradeMajorVersionTrigger() {
    this._upgradeMajorVersionTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeMajorVersionTriggerInput() {
    return this._upgradeMajorVersionTrigger;
  }

  // vcn_compartment_id - computed: false, optional: false, required: true
  private _vcnCompartmentId?: string; 
  public get vcnCompartmentId() {
    return this.getStringAttribute('vcn_compartment_id');
  }
  public set vcnCompartmentId(value: string) {
    this._vcnCompartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnCompartmentIdInput() {
    return this._vcnCompartmentId;
  }

  // vcn_id - computed: false, optional: false, required: true
  private _vcnId?: string; 
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnIdInput() {
    return this._vcnId;
  }

  // certificate_config - computed: false, optional: true, required: false
  private _certificateConfig = new OpensearchOpensearchClusterCertificateConfigOutputReference(this, "certificate_config");
  public get certificateConfig() {
    return this._certificateConfig;
  }
  public putCertificateConfig(value: OpensearchOpensearchClusterCertificateConfig) {
    this._certificateConfig.internalValue = value;
  }
  public resetCertificateConfig() {
    this._certificateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateConfigInput() {
    return this._certificateConfig.internalValue;
  }

  // maintenance_details - computed: false, optional: true, required: false
  private _maintenanceDetails = new OpensearchOpensearchClusterMaintenanceDetailsOutputReference(this, "maintenance_details");
  public get maintenanceDetails() {
    return this._maintenanceDetails;
  }
  public putMaintenanceDetails(value: OpensearchOpensearchClusterMaintenanceDetails) {
    this._maintenanceDetails.internalValue = value;
  }
  public resetMaintenanceDetails() {
    this._maintenanceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceDetailsInput() {
    return this._maintenanceDetails.internalValue;
  }

  // outbound_cluster_config - computed: false, optional: true, required: false
  private _outboundClusterConfig = new OpensearchOpensearchClusterOutboundClusterConfigOutputReference(this, "outbound_cluster_config");
  public get outboundClusterConfig() {
    return this._outboundClusterConfig;
  }
  public putOutboundClusterConfig(value: OpensearchOpensearchClusterOutboundClusterConfig) {
    this._outboundClusterConfig.internalValue = value;
  }
  public resetOutboundClusterConfig() {
    this._outboundClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundClusterConfigInput() {
    return this._outboundClusterConfig.internalValue;
  }

  // security_saml_config - computed: false, optional: true, required: false
  private _securitySamlConfig = new OpensearchOpensearchClusterSecuritySamlConfigOutputReference(this, "security_saml_config");
  public get securitySamlConfig() {
    return this._securitySamlConfig;
  }
  public putSecuritySamlConfig(value: OpensearchOpensearchClusterSecuritySamlConfig) {
    this._securitySamlConfig.internalValue = value;
  }
  public resetSecuritySamlConfig() {
    this._securitySamlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySamlConfigInput() {
    return this._securitySamlConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpensearchOpensearchClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpensearchOpensearchClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      configure_outbound_cluster_trigger: cdktf.numberToTerraform(this._configureOutboundClusterTrigger),
      data_node_count: cdktf.numberToTerraform(this._dataNodeCount),
      data_node_host_bare_metal_shape: cdktf.stringToTerraform(this._dataNodeHostBareMetalShape),
      data_node_host_memory_gb: cdktf.numberToTerraform(this._dataNodeHostMemoryGb),
      data_node_host_ocpu_count: cdktf.numberToTerraform(this._dataNodeHostOcpuCount),
      data_node_host_shape: cdktf.stringToTerraform(this._dataNodeHostShape),
      data_node_host_type: cdktf.stringToTerraform(this._dataNodeHostType),
      data_node_storage_gb: cdktf.numberToTerraform(this._dataNodeStorageGb),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      inbound_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inboundClusterIds),
      master_node_count: cdktf.numberToTerraform(this._masterNodeCount),
      master_node_host_bare_metal_shape: cdktf.stringToTerraform(this._masterNodeHostBareMetalShape),
      master_node_host_memory_gb: cdktf.numberToTerraform(this._masterNodeHostMemoryGb),
      master_node_host_ocpu_count: cdktf.numberToTerraform(this._masterNodeHostOcpuCount),
      master_node_host_shape: cdktf.stringToTerraform(this._masterNodeHostShape),
      master_node_host_type: cdktf.stringToTerraform(this._masterNodeHostType),
      nsg_id: cdktf.stringToTerraform(this._nsgId),
      opendashboard_node_count: cdktf.numberToTerraform(this._opendashboardNodeCount),
      opendashboard_node_host_memory_gb: cdktf.numberToTerraform(this._opendashboardNodeHostMemoryGb),
      opendashboard_node_host_ocpu_count: cdktf.numberToTerraform(this._opendashboardNodeHostOcpuCount),
      opendashboard_node_host_shape: cdktf.stringToTerraform(this._opendashboardNodeHostShape),
      reverse_connection_endpoint_customer_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._reverseConnectionEndpointCustomerIps),
      search_node_count: cdktf.numberToTerraform(this._searchNodeCount),
      search_node_host_memory_gb: cdktf.numberToTerraform(this._searchNodeHostMemoryGb),
      search_node_host_ocpu_count: cdktf.numberToTerraform(this._searchNodeHostOcpuCount),
      search_node_host_shape: cdktf.stringToTerraform(this._searchNodeHostShape),
      search_node_host_type: cdktf.stringToTerraform(this._searchNodeHostType),
      search_node_storage_gb: cdktf.numberToTerraform(this._searchNodeStorageGb),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      security_master_user_name: cdktf.stringToTerraform(this._securityMasterUserName),
      security_master_user_password_hash: cdktf.stringToTerraform(this._securityMasterUserPasswordHash),
      security_mode: cdktf.stringToTerraform(this._securityMode),
      software_version: cdktf.stringToTerraform(this._softwareVersion),
      subnet_compartment_id: cdktf.stringToTerraform(this._subnetCompartmentId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      system_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._systemTags),
      upgrade_major_version_trigger: cdktf.numberToTerraform(this._upgradeMajorVersionTrigger),
      vcn_compartment_id: cdktf.stringToTerraform(this._vcnCompartmentId),
      vcn_id: cdktf.stringToTerraform(this._vcnId),
      certificate_config: opensearchOpensearchClusterCertificateConfigToTerraform(this._certificateConfig.internalValue),
      maintenance_details: opensearchOpensearchClusterMaintenanceDetailsToTerraform(this._maintenanceDetails.internalValue),
      outbound_cluster_config: opensearchOpensearchClusterOutboundClusterConfigToTerraform(this._outboundClusterConfig.internalValue),
      security_saml_config: opensearchOpensearchClusterSecuritySamlConfigToTerraform(this._securitySamlConfig.internalValue),
      timeouts: opensearchOpensearchClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
      configure_outbound_cluster_trigger: {
        value: cdktf.numberToHclTerraform(this._configureOutboundClusterTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_node_count: {
        value: cdktf.numberToHclTerraform(this._dataNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_node_host_bare_metal_shape: {
        value: cdktf.stringToHclTerraform(this._dataNodeHostBareMetalShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_node_host_memory_gb: {
        value: cdktf.numberToHclTerraform(this._dataNodeHostMemoryGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_node_host_ocpu_count: {
        value: cdktf.numberToHclTerraform(this._dataNodeHostOcpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_node_host_shape: {
        value: cdktf.stringToHclTerraform(this._dataNodeHostShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_node_host_type: {
        value: cdktf.stringToHclTerraform(this._dataNodeHostType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_node_storage_gb: {
        value: cdktf.numberToHclTerraform(this._dataNodeStorageGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound_cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inboundClusterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      master_node_count: {
        value: cdktf.numberToHclTerraform(this._masterNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_node_host_bare_metal_shape: {
        value: cdktf.stringToHclTerraform(this._masterNodeHostBareMetalShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_node_host_memory_gb: {
        value: cdktf.numberToHclTerraform(this._masterNodeHostMemoryGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_node_host_ocpu_count: {
        value: cdktf.numberToHclTerraform(this._masterNodeHostOcpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_node_host_shape: {
        value: cdktf.stringToHclTerraform(this._masterNodeHostShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_node_host_type: {
        value: cdktf.stringToHclTerraform(this._masterNodeHostType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsg_id: {
        value: cdktf.stringToHclTerraform(this._nsgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opendashboard_node_count: {
        value: cdktf.numberToHclTerraform(this._opendashboardNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      opendashboard_node_host_memory_gb: {
        value: cdktf.numberToHclTerraform(this._opendashboardNodeHostMemoryGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      opendashboard_node_host_ocpu_count: {
        value: cdktf.numberToHclTerraform(this._opendashboardNodeHostOcpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      opendashboard_node_host_shape: {
        value: cdktf.stringToHclTerraform(this._opendashboardNodeHostShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverse_connection_endpoint_customer_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._reverseConnectionEndpointCustomerIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      search_node_count: {
        value: cdktf.numberToHclTerraform(this._searchNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_node_host_memory_gb: {
        value: cdktf.numberToHclTerraform(this._searchNodeHostMemoryGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_node_host_ocpu_count: {
        value: cdktf.numberToHclTerraform(this._searchNodeHostOcpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_node_host_shape: {
        value: cdktf.stringToHclTerraform(this._searchNodeHostShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_node_host_type: {
        value: cdktf.stringToHclTerraform(this._searchNodeHostType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_node_storage_gb: {
        value: cdktf.numberToHclTerraform(this._searchNodeStorageGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      security_master_user_name: {
        value: cdktf.stringToHclTerraform(this._securityMasterUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_master_user_password_hash: {
        value: cdktf.stringToHclTerraform(this._securityMasterUserPasswordHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_mode: {
        value: cdktf.stringToHclTerraform(this._securityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_version: {
        value: cdktf.stringToHclTerraform(this._softwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_compartment_id: {
        value: cdktf.stringToHclTerraform(this._subnetCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._systemTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      upgrade_major_version_trigger: {
        value: cdktf.numberToHclTerraform(this._upgradeMajorVersionTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vcn_compartment_id: {
        value: cdktf.stringToHclTerraform(this._vcnCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcn_id: {
        value: cdktf.stringToHclTerraform(this._vcnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_config: {
        value: opensearchOpensearchClusterCertificateConfigToHclTerraform(this._certificateConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpensearchOpensearchClusterCertificateConfigList",
      },
      maintenance_details: {
        value: opensearchOpensearchClusterMaintenanceDetailsToHclTerraform(this._maintenanceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpensearchOpensearchClusterMaintenanceDetailsList",
      },
      outbound_cluster_config: {
        value: opensearchOpensearchClusterOutboundClusterConfigToHclTerraform(this._outboundClusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpensearchOpensearchClusterOutboundClusterConfigList",
      },
      security_saml_config: {
        value: opensearchOpensearchClusterSecuritySamlConfigToHclTerraform(this._securitySamlConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpensearchOpensearchClusterSecuritySamlConfigList",
      },
      timeouts: {
        value: opensearchOpensearchClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchOpensearchClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
