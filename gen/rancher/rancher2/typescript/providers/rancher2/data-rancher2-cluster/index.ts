// https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRancher2ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default pod security admission configuration template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/cluster#default_pod_security_admission_configuration_template_name DataRancher2Cluster#default_pod_security_admission_configuration_template_name}
  */
  readonly defaultPodSecurityAdmissionConfigurationTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/cluster#id DataRancher2Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/cluster#name DataRancher2Cluster#name}
  */
  readonly name: string;
}
export interface DataRancher2ClusterAksConfig {
}

export function dataRancher2ClusterAksConfigToTerraform(struct?: DataRancher2ClusterAksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterAksConfigToHclTerraform(struct?: DataRancher2ClusterAksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterAksConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterAksConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterAksConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aad_server_app_secret - computed: true, optional: false, required: false
  public get aadServerAppSecret() {
    return this.getStringAttribute('aad_server_app_secret');
  }

  // aad_tenant_id - computed: true, optional: false, required: false
  public get aadTenantId() {
    return this.getStringAttribute('aad_tenant_id');
  }

  // add_client_app_id - computed: true, optional: false, required: false
  public get addClientAppId() {
    return this.getStringAttribute('add_client_app_id');
  }

  // add_server_app_id - computed: true, optional: false, required: false
  public get addServerAppId() {
    return this.getStringAttribute('add_server_app_id');
  }

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // agent_dns_prefix - computed: true, optional: false, required: false
  public get agentDnsPrefix() {
    return this.getStringAttribute('agent_dns_prefix');
  }

  // agent_os_disk_size - computed: true, optional: false, required: false
  public get agentOsDiskSize() {
    return this.getNumberAttribute('agent_os_disk_size');
  }

  // agent_pool_name - computed: true, optional: false, required: false
  public get agentPoolName() {
    return this.getStringAttribute('agent_pool_name');
  }

  // agent_storage_profile - computed: true, optional: false, required: false
  public get agentStorageProfile() {
    return this.getStringAttribute('agent_storage_profile');
  }

  // agent_vm_size - computed: true, optional: false, required: false
  public get agentVmSize() {
    return this.getStringAttribute('agent_vm_size');
  }

  // auth_base_url - computed: true, optional: false, required: false
  public get authBaseUrl() {
    return this.getStringAttribute('auth_base_url');
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // dns_service_ip - computed: true, optional: false, required: false
  public get dnsServiceIp() {
    return this.getStringAttribute('dns_service_ip');
  }

  // docker_bridge_cidr - computed: true, optional: false, required: false
  public get dockerBridgeCidr() {
    return this.getStringAttribute('docker_bridge_cidr');
  }

  // enable_http_application_routing - computed: true, optional: false, required: false
  public get enableHttpApplicationRouting() {
    return this.getBooleanAttribute('enable_http_application_routing');
  }

  // enable_monitoring - computed: true, optional: false, required: false
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring');
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // load_balancer_sku - computed: true, optional: false, required: false
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // log_analytics_workspace - computed: true, optional: false, required: false
  public get logAnalyticsWorkspace() {
    return this.getStringAttribute('log_analytics_workspace');
  }

  // log_analytics_workspace_resource_group - computed: true, optional: false, required: false
  public get logAnalyticsWorkspaceResourceGroup() {
    return this.getStringAttribute('log_analytics_workspace_resource_group');
  }

  // master_dns_prefix - computed: true, optional: false, required: false
  public get masterDnsPrefix() {
    return this.getStringAttribute('master_dns_prefix');
  }

  // max_pods - computed: true, optional: false, required: false
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }

  // network_plugin - computed: true, optional: false, required: false
  public get networkPlugin() {
    return this.getStringAttribute('network_plugin');
  }

  // network_policy - computed: true, optional: false, required: false
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }

  // pod_cidr - computed: true, optional: false, required: false
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // service_cidr - computed: true, optional: false, required: false
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }

  // ssh_public_key_contents - computed: true, optional: false, required: false
  public get sshPublicKeyContents() {
    return this.getStringAttribute('ssh_public_key_contents');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tag - computed: true, optional: false, required: false
  private _tag = new cdktf.StringMap(this, "tag");
  public get tag() {
    return this._tag;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // virtual_network - computed: true, optional: false, required: false
  public get virtualNetwork() {
    return this.getStringAttribute('virtual_network');
  }

  // virtual_network_resource_group - computed: true, optional: false, required: false
  public get virtualNetworkResourceGroup() {
    return this.getStringAttribute('virtual_network_resource_group');
  }
}

export class DataRancher2ClusterAksConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterAksConfigOutputReference {
    return new DataRancher2ClusterAksConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterAksConfigV2NodePools {
}

export function dataRancher2ClusterAksConfigV2NodePoolsToTerraform(struct?: DataRancher2ClusterAksConfigV2NodePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterAksConfigV2NodePoolsToHclTerraform(struct?: DataRancher2ClusterAksConfigV2NodePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterAksConfigV2NodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterAksConfigV2NodePools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterAksConfigV2NodePools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // enable_auto_scaling - computed: true, optional: false, required: false
  public get enableAutoScaling() {
    return this.getBooleanAttribute('enable_auto_scaling');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // max_count - computed: true, optional: false, required: false
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }

  // max_pods - computed: true, optional: false, required: false
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }

  // min_count - computed: true, optional: false, required: false
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // orchestrator_version - computed: true, optional: false, required: false
  public get orchestratorVersion() {
    return this.getStringAttribute('orchestrator_version');
  }

  // os_disk_size_gb - computed: true, optional: false, required: false
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }

  // os_disk_type - computed: true, optional: false, required: false
  public get osDiskType() {
    return this.getStringAttribute('os_disk_type');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // taints - computed: true, optional: false, required: false
  public get taints() {
    return this.getListAttribute('taints');
  }

  // vm_size - computed: true, optional: false, required: false
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
}

export class DataRancher2ClusterAksConfigV2NodePoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterAksConfigV2NodePoolsOutputReference {
    return new DataRancher2ClusterAksConfigV2NodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterAksConfigV2 {
}

export function dataRancher2ClusterAksConfigV2ToTerraform(struct?: DataRancher2ClusterAksConfigV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterAksConfigV2ToHclTerraform(struct?: DataRancher2ClusterAksConfigV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterAksConfigV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterAksConfigV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterAksConfigV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_base_url - computed: true, optional: false, required: false
  public get authBaseUrl() {
    return this.getStringAttribute('auth_base_url');
  }

  // authorized_ip_ranges - computed: true, optional: false, required: false
  public get authorizedIpRanges() {
    return this.getListAttribute('authorized_ip_ranges');
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // cloud_credential_id - computed: true, optional: false, required: false
  public get cloudCredentialId() {
    return this.getStringAttribute('cloud_credential_id');
  }

  // dns_prefix - computed: true, optional: false, required: false
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }

  // http_application_routing - computed: true, optional: false, required: false
  public get httpApplicationRouting() {
    return this.getBooleanAttribute('http_application_routing');
  }

  // imported - computed: true, optional: false, required: false
  public get imported() {
    return this.getBooleanAttribute('imported');
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // linux_admin_username - computed: true, optional: false, required: false
  public get linuxAdminUsername() {
    return this.getStringAttribute('linux_admin_username');
  }

  // linux_ssh_public_key - computed: true, optional: false, required: false
  public get linuxSshPublicKey() {
    return this.getStringAttribute('linux_ssh_public_key');
  }

  // load_balancer_sku - computed: true, optional: false, required: false
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }

  // log_analytics_workspace_group - computed: true, optional: false, required: false
  public get logAnalyticsWorkspaceGroup() {
    return this.getStringAttribute('log_analytics_workspace_group');
  }

  // log_analytics_workspace_name - computed: true, optional: false, required: false
  public get logAnalyticsWorkspaceName() {
    return this.getStringAttribute('log_analytics_workspace_name');
  }

  // monitoring - computed: true, optional: false, required: false
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_dns_service_ip - computed: true, optional: false, required: false
  public get networkDnsServiceIp() {
    return this.getStringAttribute('network_dns_service_ip');
  }

  // network_docker_bridge_cidr - computed: true, optional: false, required: false
  public get networkDockerBridgeCidr() {
    return this.getStringAttribute('network_docker_bridge_cidr');
  }

  // network_plugin - computed: true, optional: false, required: false
  public get networkPlugin() {
    return this.getStringAttribute('network_plugin');
  }

  // network_pod_cidr - computed: true, optional: false, required: false
  public get networkPodCidr() {
    return this.getStringAttribute('network_pod_cidr');
  }

  // network_policy - computed: true, optional: false, required: false
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }

  // network_service_cidr - computed: true, optional: false, required: false
  public get networkServiceCidr() {
    return this.getStringAttribute('network_service_cidr');
  }

  // node_pools - computed: true, optional: false, required: false
  private _nodePools = new DataRancher2ClusterAksConfigV2NodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }

  // node_resource_group - computed: true, optional: false, required: false
  public get nodeResourceGroup() {
    return this.getStringAttribute('node_resource_group');
  }

  // outbound_type - computed: true, optional: false, required: false
  public get outboundType() {
    return this.getStringAttribute('outbound_type');
  }

  // private_cluster - computed: true, optional: false, required: false
  public get privateCluster() {
    return this.getBooleanAttribute('private_cluster');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // resource_location - computed: true, optional: false, required: false
  public get resourceLocation() {
    return this.getStringAttribute('resource_location');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // virtual_network - computed: true, optional: false, required: false
  public get virtualNetwork() {
    return this.getStringAttribute('virtual_network');
  }

  // virtual_network_resource_group - computed: true, optional: false, required: false
  public get virtualNetworkResourceGroup() {
    return this.getStringAttribute('virtual_network_resource_group');
  }
}

export class DataRancher2ClusterAksConfigV2List extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterAksConfigV2OutputReference {
    return new DataRancher2ClusterAksConfigV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterClusterAuthEndpoint {
}

export function dataRancher2ClusterClusterAuthEndpointToTerraform(struct?: DataRancher2ClusterClusterAuthEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterClusterAuthEndpointToHclTerraform(struct?: DataRancher2ClusterClusterAuthEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterClusterAuthEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterClusterAuthEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterClusterAuthEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs - computed: true, optional: false, required: false
  public get caCerts() {
    return this.getStringAttribute('ca_certs');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
}

export class DataRancher2ClusterClusterAuthEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterClusterAuthEndpointOutputReference {
    return new DataRancher2ClusterClusterAuthEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterClusterRegistrationToken {
}

export function dataRancher2ClusterClusterRegistrationTokenToTerraform(struct?: DataRancher2ClusterClusterRegistrationToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterClusterRegistrationTokenToHclTerraform(struct?: DataRancher2ClusterClusterRegistrationToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterClusterRegistrationTokenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterClusterRegistrationToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterClusterRegistrationToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insecure_command - computed: true, optional: false, required: false
  public get insecureCommand() {
    return this.getStringAttribute('insecure_command');
  }

  // insecure_node_command - computed: true, optional: false, required: false
  public get insecureNodeCommand() {
    return this.getStringAttribute('insecure_node_command');
  }

  // insecure_windows_node_command - computed: true, optional: false, required: false
  public get insecureWindowsNodeCommand() {
    return this.getStringAttribute('insecure_windows_node_command');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // manifest_url - computed: true, optional: false, required: false
  public get manifestUrl() {
    return this.getStringAttribute('manifest_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_command - computed: true, optional: false, required: false
  public get nodeCommand() {
    return this.getStringAttribute('node_command');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // windows_node_command - computed: true, optional: false, required: false
  public get windowsNodeCommand() {
    return this.getStringAttribute('windows_node_command');
  }
}

export class DataRancher2ClusterClusterRegistrationTokenList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterClusterRegistrationTokenOutputReference {
    return new DataRancher2ClusterClusterRegistrationTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterClusterTemplateAnswers {
}

export function dataRancher2ClusterClusterTemplateAnswersToTerraform(struct?: DataRancher2ClusterClusterTemplateAnswers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterClusterTemplateAnswersToHclTerraform(struct?: DataRancher2ClusterClusterTemplateAnswers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterClusterTemplateAnswersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterClusterTemplateAnswers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterClusterTemplateAnswers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // values - computed: true, optional: false, required: false
  private _values = new cdktf.StringMap(this, "values");
  public get values() {
    return this._values;
  }
}

export class DataRancher2ClusterClusterTemplateAnswersList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterClusterTemplateAnswersOutputReference {
    return new DataRancher2ClusterClusterTemplateAnswersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterClusterTemplateQuestions {
}

export function dataRancher2ClusterClusterTemplateQuestionsToTerraform(struct?: DataRancher2ClusterClusterTemplateQuestions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterClusterTemplateQuestionsToHclTerraform(struct?: DataRancher2ClusterClusterTemplateQuestions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterClusterTemplateQuestionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterClusterTemplateQuestions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterClusterTemplateQuestions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // variable - computed: true, optional: false, required: false
  public get variable() {
    return this.getStringAttribute('variable');
  }
}

export class DataRancher2ClusterClusterTemplateQuestionsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterClusterTemplateQuestionsOutputReference {
    return new DataRancher2ClusterClusterTemplateQuestionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterEksConfig {
}

export function dataRancher2ClusterEksConfigToTerraform(struct?: DataRancher2ClusterEksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterEksConfigToHclTerraform(struct?: DataRancher2ClusterEksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterEksConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterEksConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterEksConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // ami - computed: true, optional: false, required: false
  public get ami() {
    return this.getStringAttribute('ami');
  }

  // associate_worker_node_public_ip - computed: true, optional: false, required: false
  public get associateWorkerNodePublicIp() {
    return this.getBooleanAttribute('associate_worker_node_public_ip');
  }

  // desired_nodes - computed: true, optional: false, required: false
  public get desiredNodes() {
    return this.getNumberAttribute('desired_nodes');
  }

  // ebs_encryption - computed: true, optional: false, required: false
  public get ebsEncryption() {
    return this.getBooleanAttribute('ebs_encryption');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // key_pair_name - computed: true, optional: false, required: false
  public get keyPairName() {
    return this.getStringAttribute('key_pair_name');
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // maximum_nodes - computed: true, optional: false, required: false
  public get maximumNodes() {
    return this.getNumberAttribute('maximum_nodes');
  }

  // minimum_nodes - computed: true, optional: false, required: false
  public get minimumNodes() {
    return this.getNumberAttribute('minimum_nodes');
  }

  // node_volume_size - computed: true, optional: false, required: false
  public get nodeVolumeSize() {
    return this.getNumberAttribute('node_volume_size');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // service_role - computed: true, optional: false, required: false
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }

  // session_token - computed: true, optional: false, required: false
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // user_data - computed: true, optional: false, required: false
  public get userData() {
    return this.getStringAttribute('user_data');
  }

  // virtual_network - computed: true, optional: false, required: false
  public get virtualNetwork() {
    return this.getStringAttribute('virtual_network');
  }
}

export class DataRancher2ClusterEksConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterEksConfigOutputReference {
    return new DataRancher2ClusterEksConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterEksConfigV2NodeGroupsLaunchTemplate {
}

export function dataRancher2ClusterEksConfigV2NodeGroupsLaunchTemplateToTerraform(struct?: DataRancher2ClusterEksConfigV2NodeGroupsLaunchTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterEksConfigV2NodeGroupsLaunchTemplateToHclTerraform(struct?: DataRancher2ClusterEksConfigV2NodeGroupsLaunchTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterEksConfigV2NodeGroupsLaunchTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterEksConfigV2NodeGroupsLaunchTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterEksConfigV2NodeGroupsLaunchTemplate | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataRancher2ClusterEksConfigV2NodeGroupsLaunchTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterEksConfigV2NodeGroupsLaunchTemplateOutputReference {
    return new DataRancher2ClusterEksConfigV2NodeGroupsLaunchTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterEksConfigV2NodeGroups {
}

export function dataRancher2ClusterEksConfigV2NodeGroupsToTerraform(struct?: DataRancher2ClusterEksConfigV2NodeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterEksConfigV2NodeGroupsToHclTerraform(struct?: DataRancher2ClusterEksConfigV2NodeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterEksConfigV2NodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterEksConfigV2NodeGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterEksConfigV2NodeGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // desired_size - computed: true, optional: false, required: false
  public get desiredSize() {
    return this.getNumberAttribute('desired_size');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // ec2_ssh_key - computed: true, optional: false, required: false
  public get ec2SshKey() {
    return this.getStringAttribute('ec2_ssh_key');
  }

  // gpu - computed: true, optional: false, required: false
  public get gpu() {
    return this.getBooleanAttribute('gpu');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // launch_template - computed: true, optional: false, required: false
  private _launchTemplate = new DataRancher2ClusterEksConfigV2NodeGroupsLaunchTemplateList(this, "launch_template", false);
  public get launchTemplate() {
    return this._launchTemplate;
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_role - computed: true, optional: false, required: false
  public get nodeRole() {
    return this.getStringAttribute('node_role');
  }

  // request_spot_instances - computed: true, optional: false, required: false
  public get requestSpotInstances() {
    return this.getBooleanAttribute('request_spot_instances');
  }

  // resource_tags - computed: true, optional: false, required: false
  private _resourceTags = new cdktf.StringMap(this, "resource_tags");
  public get resourceTags() {
    return this._resourceTags;
  }

  // spot_instance_types - computed: true, optional: false, required: false
  public get spotInstanceTypes() {
    return this.getListAttribute('spot_instance_types');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // user_data - computed: true, optional: false, required: false
  public get userData() {
    return this.getStringAttribute('user_data');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataRancher2ClusterEksConfigV2NodeGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterEksConfigV2NodeGroupsOutputReference {
    return new DataRancher2ClusterEksConfigV2NodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterEksConfigV2 {
}

export function dataRancher2ClusterEksConfigV2ToTerraform(struct?: DataRancher2ClusterEksConfigV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterEksConfigV2ToHclTerraform(struct?: DataRancher2ClusterEksConfigV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterEksConfigV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterEksConfigV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterEksConfigV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_credential_id - computed: true, optional: false, required: false
  public get cloudCredentialId() {
    return this.getStringAttribute('cloud_credential_id');
  }

  // imported - computed: true, optional: false, required: false
  public get imported() {
    return this.getBooleanAttribute('imported');
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // logging_types - computed: true, optional: false, required: false
  public get loggingTypes() {
    return this.getListAttribute('logging_types');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_groups - computed: true, optional: false, required: false
  private _nodeGroups = new DataRancher2ClusterEksConfigV2NodeGroupsList(this, "node_groups", false);
  public get nodeGroups() {
    return this._nodeGroups;
  }

  // private_access - computed: true, optional: false, required: false
  public get privateAccess() {
    return this.getBooleanAttribute('private_access');
  }

  // public_access - computed: true, optional: false, required: false
  public get publicAccess() {
    return this.getBooleanAttribute('public_access');
  }

  // public_access_sources - computed: true, optional: false, required: false
  public get publicAccessSources() {
    return this.getListAttribute('public_access_sources');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secrets_encryption - computed: true, optional: false, required: false
  public get secretsEncryption() {
    return this.getBooleanAttribute('secrets_encryption');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // service_role - computed: true, optional: false, required: false
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataRancher2ClusterEksConfigV2List extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterEksConfigV2OutputReference {
    return new DataRancher2ClusterEksConfigV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterGkeConfig {
}

export function dataRancher2ClusterGkeConfigToTerraform(struct?: DataRancher2ClusterGkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterGkeConfigToHclTerraform(struct?: DataRancher2ClusterGkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterGkeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterGkeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterGkeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_ipv4_cidr - computed: true, optional: false, required: false
  public get clusterIpv4Cidr() {
    return this.getStringAttribute('cluster_ipv4_cidr');
  }

  // credential - computed: true, optional: false, required: false
  public get credential() {
    return this.getStringAttribute('credential');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // enable_alpha_feature - computed: true, optional: false, required: false
  public get enableAlphaFeature() {
    return this.getBooleanAttribute('enable_alpha_feature');
  }

  // enable_auto_repair - computed: true, optional: false, required: false
  public get enableAutoRepair() {
    return this.getBooleanAttribute('enable_auto_repair');
  }

  // enable_auto_upgrade - computed: true, optional: false, required: false
  public get enableAutoUpgrade() {
    return this.getBooleanAttribute('enable_auto_upgrade');
  }

  // enable_horizontal_pod_autoscaling - computed: true, optional: false, required: false
  public get enableHorizontalPodAutoscaling() {
    return this.getBooleanAttribute('enable_horizontal_pod_autoscaling');
  }

  // enable_http_load_balancing - computed: true, optional: false, required: false
  public get enableHttpLoadBalancing() {
    return this.getBooleanAttribute('enable_http_load_balancing');
  }

  // enable_kubernetes_dashboard - computed: true, optional: false, required: false
  public get enableKubernetesDashboard() {
    return this.getBooleanAttribute('enable_kubernetes_dashboard');
  }

  // enable_legacy_abac - computed: true, optional: false, required: false
  public get enableLegacyAbac() {
    return this.getBooleanAttribute('enable_legacy_abac');
  }

  // enable_master_authorized_network - computed: true, optional: false, required: false
  public get enableMasterAuthorizedNetwork() {
    return this.getBooleanAttribute('enable_master_authorized_network');
  }

  // enable_network_policy_config - computed: true, optional: false, required: false
  public get enableNetworkPolicyConfig() {
    return this.getBooleanAttribute('enable_network_policy_config');
  }

  // enable_nodepool_autoscaling - computed: true, optional: false, required: false
  public get enableNodepoolAutoscaling() {
    return this.getBooleanAttribute('enable_nodepool_autoscaling');
  }

  // enable_private_endpoint - computed: true, optional: false, required: false
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint');
  }

  // enable_private_nodes - computed: true, optional: false, required: false
  public get enablePrivateNodes() {
    return this.getBooleanAttribute('enable_private_nodes');
  }

  // enable_stackdriver_logging - computed: true, optional: false, required: false
  public get enableStackdriverLogging() {
    return this.getBooleanAttribute('enable_stackdriver_logging');
  }

  // enable_stackdriver_monitoring - computed: true, optional: false, required: false
  public get enableStackdriverMonitoring() {
    return this.getBooleanAttribute('enable_stackdriver_monitoring');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // ip_policy_cluster_ipv4_cidr_block - computed: true, optional: false, required: false
  public get ipPolicyClusterIpv4CidrBlock() {
    return this.getStringAttribute('ip_policy_cluster_ipv4_cidr_block');
  }

  // ip_policy_cluster_secondary_range_name - computed: true, optional: false, required: false
  public get ipPolicyClusterSecondaryRangeName() {
    return this.getStringAttribute('ip_policy_cluster_secondary_range_name');
  }

  // ip_policy_create_subnetwork - computed: true, optional: false, required: false
  public get ipPolicyCreateSubnetwork() {
    return this.getBooleanAttribute('ip_policy_create_subnetwork');
  }

  // ip_policy_node_ipv4_cidr_block - computed: true, optional: false, required: false
  public get ipPolicyNodeIpv4CidrBlock() {
    return this.getStringAttribute('ip_policy_node_ipv4_cidr_block');
  }

  // ip_policy_services_ipv4_cidr_block - computed: true, optional: false, required: false
  public get ipPolicyServicesIpv4CidrBlock() {
    return this.getStringAttribute('ip_policy_services_ipv4_cidr_block');
  }

  // ip_policy_services_secondary_range_name - computed: true, optional: false, required: false
  public get ipPolicyServicesSecondaryRangeName() {
    return this.getStringAttribute('ip_policy_services_secondary_range_name');
  }

  // ip_policy_subnetwork_name - computed: true, optional: false, required: false
  public get ipPolicySubnetworkName() {
    return this.getStringAttribute('ip_policy_subnetwork_name');
  }

  // issue_client_certificate - computed: true, optional: false, required: false
  public get issueClientCertificate() {
    return this.getBooleanAttribute('issue_client_certificate');
  }

  // kubernetes_dashboard - computed: true, optional: false, required: false
  public get kubernetesDashboard() {
    return this.getBooleanAttribute('kubernetes_dashboard');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // local_ssd_count - computed: true, optional: false, required: false
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.getListAttribute('locations');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // maintenance_window - computed: true, optional: false, required: false
  public get maintenanceWindow() {
    return this.getStringAttribute('maintenance_window');
  }

  // master_authorized_network_cidr_blocks - computed: true, optional: false, required: false
  public get masterAuthorizedNetworkCidrBlocks() {
    return this.getListAttribute('master_authorized_network_cidr_blocks');
  }

  // master_ipv4_cidr_block - computed: true, optional: false, required: false
  public get masterIpv4CidrBlock() {
    return this.getStringAttribute('master_ipv4_cidr_block');
  }

  // master_version - computed: true, optional: false, required: false
  public get masterVersion() {
    return this.getStringAttribute('master_version');
  }

  // max_node_count - computed: true, optional: false, required: false
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }

  // min_node_count - computed: true, optional: false, required: false
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // node_pool - computed: true, optional: false, required: false
  public get nodePool() {
    return this.getStringAttribute('node_pool');
  }

  // node_version - computed: true, optional: false, required: false
  public get nodeVersion() {
    return this.getStringAttribute('node_version');
  }

  // oauth_scopes - computed: true, optional: false, required: false
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }

  // preemptible - computed: true, optional: false, required: false
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_labels - computed: true, optional: false, required: false
  private _resourceLabels = new cdktf.StringMap(this, "resource_labels");
  public get resourceLabels() {
    return this._resourceLabels;
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // sub_network - computed: true, optional: false, required: false
  public get subNetwork() {
    return this.getStringAttribute('sub_network');
  }

  // taints - computed: true, optional: false, required: false
  public get taints() {
    return this.getListAttribute('taints');
  }

  // use_ip_aliases - computed: true, optional: false, required: false
  public get useIpAliases() {
    return this.getBooleanAttribute('use_ip_aliases');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataRancher2ClusterGkeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterGkeConfigOutputReference {
    return new DataRancher2ClusterGkeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterGkeConfigV2ClusterAddons {
}

export function dataRancher2ClusterGkeConfigV2ClusterAddonsToTerraform(struct?: DataRancher2ClusterGkeConfigV2ClusterAddons): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterGkeConfigV2ClusterAddonsToHclTerraform(struct?: DataRancher2ClusterGkeConfigV2ClusterAddons): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterGkeConfigV2ClusterAddonsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterGkeConfigV2ClusterAddons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterGkeConfigV2ClusterAddons | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // horizontal_pod_autoscaling - computed: true, optional: false, required: false
  public get horizontalPodAutoscaling() {
    return this.getBooleanAttribute('horizontal_pod_autoscaling');
  }

  // http_load_balancing - computed: true, optional: false, required: false
  public get httpLoadBalancing() {
    return this.getBooleanAttribute('http_load_balancing');
  }

  // network_policy_config - computed: true, optional: false, required: false
  public get networkPolicyConfig() {
    return this.getBooleanAttribute('network_policy_config');
  }
}

export class DataRancher2ClusterGkeConfigV2ClusterAddonsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterGkeConfigV2ClusterAddonsOutputReference {
    return new DataRancher2ClusterGkeConfigV2ClusterAddonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterGkeConfigV2IpAllocationPolicy {
}

export function dataRancher2ClusterGkeConfigV2IpAllocationPolicyToTerraform(struct?: DataRancher2ClusterGkeConfigV2IpAllocationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterGkeConfigV2IpAllocationPolicyToHclTerraform(struct?: DataRancher2ClusterGkeConfigV2IpAllocationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterGkeConfigV2IpAllocationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterGkeConfigV2IpAllocationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterGkeConfigV2IpAllocationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_ipv4_cidr_block - computed: true, optional: false, required: false
  public get clusterIpv4CidrBlock() {
    return this.getStringAttribute('cluster_ipv4_cidr_block');
  }

  // cluster_secondary_range_name - computed: true, optional: false, required: false
  public get clusterSecondaryRangeName() {
    return this.getStringAttribute('cluster_secondary_range_name');
  }

  // create_subnetwork - computed: true, optional: false, required: false
  public get createSubnetwork() {
    return this.getBooleanAttribute('create_subnetwork');
  }

  // node_ipv4_cidr_block - computed: true, optional: false, required: false
  public get nodeIpv4CidrBlock() {
    return this.getStringAttribute('node_ipv4_cidr_block');
  }

  // services_ipv4_cidr_block - computed: true, optional: false, required: false
  public get servicesIpv4CidrBlock() {
    return this.getStringAttribute('services_ipv4_cidr_block');
  }

  // services_secondary_range_name - computed: true, optional: false, required: false
  public get servicesSecondaryRangeName() {
    return this.getStringAttribute('services_secondary_range_name');
  }

  // subnetwork_name - computed: true, optional: false, required: false
  public get subnetworkName() {
    return this.getStringAttribute('subnetwork_name');
  }

  // use_ip_aliases - computed: true, optional: false, required: false
  public get useIpAliases() {
    return this.getBooleanAttribute('use_ip_aliases');
  }
}

export class DataRancher2ClusterGkeConfigV2IpAllocationPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterGkeConfigV2IpAllocationPolicyOutputReference {
    return new DataRancher2ClusterGkeConfigV2IpAllocationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigCidrBlocks {
}

export function dataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigCidrBlocksToTerraform(struct?: DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigCidrBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigCidrBlocksToHclTerraform(struct?: DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigCidrBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigCidrBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigCidrBlocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigCidrBlocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
}

export class DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigCidrBlocksList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigCidrBlocksOutputReference {
    return new DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigCidrBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfig {
}

export function dataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigToTerraform(struct?: DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigToHclTerraform(struct?: DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_blocks - computed: true, optional: false, required: false
  private _cidrBlocks = new DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigCidrBlocksList(this, "cidr_blocks", false);
  public get cidrBlocks() {
    return this._cidrBlocks;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigOutputReference {
    return new DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterGkeConfigV2NodePoolsAutoscaling {
}

export function dataRancher2ClusterGkeConfigV2NodePoolsAutoscalingToTerraform(struct?: DataRancher2ClusterGkeConfigV2NodePoolsAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterGkeConfigV2NodePoolsAutoscalingToHclTerraform(struct?: DataRancher2ClusterGkeConfigV2NodePoolsAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterGkeConfigV2NodePoolsAutoscalingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterGkeConfigV2NodePoolsAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterGkeConfigV2NodePoolsAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // max_node_count - computed: true, optional: false, required: false
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }

  // min_node_count - computed: true, optional: false, required: false
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
}

export class DataRancher2ClusterGkeConfigV2NodePoolsAutoscalingList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterGkeConfigV2NodePoolsAutoscalingOutputReference {
    return new DataRancher2ClusterGkeConfigV2NodePoolsAutoscalingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterGkeConfigV2NodePoolsConfigTaints {
}

export function dataRancher2ClusterGkeConfigV2NodePoolsConfigTaintsToTerraform(struct?: DataRancher2ClusterGkeConfigV2NodePoolsConfigTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterGkeConfigV2NodePoolsConfigTaintsToHclTerraform(struct?: DataRancher2ClusterGkeConfigV2NodePoolsConfigTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterGkeConfigV2NodePoolsConfigTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterGkeConfigV2NodePoolsConfigTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterGkeConfigV2NodePoolsConfigTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
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

export class DataRancher2ClusterGkeConfigV2NodePoolsConfigTaintsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterGkeConfigV2NodePoolsConfigTaintsOutputReference {
    return new DataRancher2ClusterGkeConfigV2NodePoolsConfigTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterGkeConfigV2NodePoolsConfig {
}

export function dataRancher2ClusterGkeConfigV2NodePoolsConfigToTerraform(struct?: DataRancher2ClusterGkeConfigV2NodePoolsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterGkeConfigV2NodePoolsConfigToHclTerraform(struct?: DataRancher2ClusterGkeConfigV2NodePoolsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterGkeConfigV2NodePoolsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterGkeConfigV2NodePoolsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterGkeConfigV2NodePoolsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // local_ssd_count - computed: true, optional: false, required: false
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // oauth_scopes - computed: true, optional: false, required: false
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }

  // preemptible - computed: true, optional: false, required: false
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // taints - computed: true, optional: false, required: false
  private _taints = new DataRancher2ClusterGkeConfigV2NodePoolsConfigTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
}

export class DataRancher2ClusterGkeConfigV2NodePoolsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterGkeConfigV2NodePoolsConfigOutputReference {
    return new DataRancher2ClusterGkeConfigV2NodePoolsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterGkeConfigV2NodePoolsManagement {
}

export function dataRancher2ClusterGkeConfigV2NodePoolsManagementToTerraform(struct?: DataRancher2ClusterGkeConfigV2NodePoolsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterGkeConfigV2NodePoolsManagementToHclTerraform(struct?: DataRancher2ClusterGkeConfigV2NodePoolsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterGkeConfigV2NodePoolsManagementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterGkeConfigV2NodePoolsManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterGkeConfigV2NodePoolsManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_repair - computed: true, optional: false, required: false
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }

  // auto_upgrade - computed: true, optional: false, required: false
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
}

export class DataRancher2ClusterGkeConfigV2NodePoolsManagementList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterGkeConfigV2NodePoolsManagementOutputReference {
    return new DataRancher2ClusterGkeConfigV2NodePoolsManagementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterGkeConfigV2NodePools {
}

export function dataRancher2ClusterGkeConfigV2NodePoolsToTerraform(struct?: DataRancher2ClusterGkeConfigV2NodePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterGkeConfigV2NodePoolsToHclTerraform(struct?: DataRancher2ClusterGkeConfigV2NodePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterGkeConfigV2NodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterGkeConfigV2NodePools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterGkeConfigV2NodePools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling - computed: true, optional: false, required: false
  private _autoscaling = new DataRancher2ClusterGkeConfigV2NodePoolsAutoscalingList(this, "autoscaling", false);
  public get autoscaling() {
    return this._autoscaling;
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataRancher2ClusterGkeConfigV2NodePoolsConfigList(this, "config", false);
  public get config() {
    return this._config;
  }

  // initial_node_count - computed: true, optional: false, required: false
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }

  // management - computed: true, optional: false, required: false
  private _management = new DataRancher2ClusterGkeConfigV2NodePoolsManagementList(this, "management", false);
  public get management() {
    return this._management;
  }

  // max_pods_constraint - computed: true, optional: false, required: false
  public get maxPodsConstraint() {
    return this.getNumberAttribute('max_pods_constraint');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataRancher2ClusterGkeConfigV2NodePoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterGkeConfigV2NodePoolsOutputReference {
    return new DataRancher2ClusterGkeConfigV2NodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterGkeConfigV2PrivateClusterConfig {
}

export function dataRancher2ClusterGkeConfigV2PrivateClusterConfigToTerraform(struct?: DataRancher2ClusterGkeConfigV2PrivateClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterGkeConfigV2PrivateClusterConfigToHclTerraform(struct?: DataRancher2ClusterGkeConfigV2PrivateClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterGkeConfigV2PrivateClusterConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterGkeConfigV2PrivateClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterGkeConfigV2PrivateClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_private_endpoint - computed: true, optional: false, required: false
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint');
  }

  // enable_private_nodes - computed: true, optional: false, required: false
  public get enablePrivateNodes() {
    return this.getBooleanAttribute('enable_private_nodes');
  }

  // master_ipv4_cidr_block - computed: true, optional: false, required: false
  public get masterIpv4CidrBlock() {
    return this.getStringAttribute('master_ipv4_cidr_block');
  }
}

export class DataRancher2ClusterGkeConfigV2PrivateClusterConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterGkeConfigV2PrivateClusterConfigOutputReference {
    return new DataRancher2ClusterGkeConfigV2PrivateClusterConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterGkeConfigV2 {
}

export function dataRancher2ClusterGkeConfigV2ToTerraform(struct?: DataRancher2ClusterGkeConfigV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterGkeConfigV2ToHclTerraform(struct?: DataRancher2ClusterGkeConfigV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterGkeConfigV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterGkeConfigV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterGkeConfigV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_addons - computed: true, optional: false, required: false
  private _clusterAddons = new DataRancher2ClusterGkeConfigV2ClusterAddonsList(this, "cluster_addons", false);
  public get clusterAddons() {
    return this._clusterAddons;
  }

  // cluster_ipv4_cidr_block - computed: true, optional: false, required: false
  public get clusterIpv4CidrBlock() {
    return this.getStringAttribute('cluster_ipv4_cidr_block');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_kubernetes_alpha - computed: true, optional: false, required: false
  public get enableKubernetesAlpha() {
    return this.getBooleanAttribute('enable_kubernetes_alpha');
  }

  // google_credential_secret - computed: true, optional: false, required: false
  public get googleCredentialSecret() {
    return this.getStringAttribute('google_credential_secret');
  }

  // imported - computed: true, optional: false, required: false
  public get imported() {
    return this.getBooleanAttribute('imported');
  }

  // ip_allocation_policy - computed: true, optional: false, required: false
  private _ipAllocationPolicy = new DataRancher2ClusterGkeConfigV2IpAllocationPolicyList(this, "ip_allocation_policy", false);
  public get ipAllocationPolicy() {
    return this._ipAllocationPolicy;
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.getListAttribute('locations');
  }

  // logging_service - computed: true, optional: false, required: false
  public get loggingService() {
    return this.getStringAttribute('logging_service');
  }

  // maintenance_window - computed: true, optional: false, required: false
  public get maintenanceWindow() {
    return this.getStringAttribute('maintenance_window');
  }

  // master_authorized_networks_config - computed: true, optional: false, required: false
  private _masterAuthorizedNetworksConfig = new DataRancher2ClusterGkeConfigV2MasterAuthorizedNetworksConfigList(this, "master_authorized_networks_config", false);
  public get masterAuthorizedNetworksConfig() {
    return this._masterAuthorizedNetworksConfig;
  }

  // monitoring_service - computed: true, optional: false, required: false
  public get monitoringService() {
    return this.getStringAttribute('monitoring_service');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_policy_enabled - computed: true, optional: false, required: false
  public get networkPolicyEnabled() {
    return this.getBooleanAttribute('network_policy_enabled');
  }

  // node_pools - computed: true, optional: false, required: false
  private _nodePools = new DataRancher2ClusterGkeConfigV2NodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }

  // private_cluster_config - computed: true, optional: false, required: false
  private _privateClusterConfig = new DataRancher2ClusterGkeConfigV2PrivateClusterConfigList(this, "private_cluster_config", false);
  public get privateClusterConfig() {
    return this._privateClusterConfig;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // subnetwork - computed: true, optional: false, required: false
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataRancher2ClusterGkeConfigV2List extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterGkeConfigV2OutputReference {
    return new DataRancher2ClusterGkeConfigV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterImportedConfig {
}

export function dataRancher2ClusterImportedConfigToTerraform(struct?: DataRancher2ClusterImportedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterImportedConfigToHclTerraform(struct?: DataRancher2ClusterImportedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterImportedConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterImportedConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterImportedConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private_registry_url - computed: true, optional: false, required: false
  public get privateRegistryUrl() {
    return this.getStringAttribute('private_registry_url');
  }
}

export class DataRancher2ClusterImportedConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterImportedConfigOutputReference {
    return new DataRancher2ClusterImportedConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterK3SConfigUpgradeStrategy {
}

export function dataRancher2ClusterK3SConfigUpgradeStrategyToTerraform(struct?: DataRancher2ClusterK3SConfigUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterK3SConfigUpgradeStrategyToHclTerraform(struct?: DataRancher2ClusterK3SConfigUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterK3SConfigUpgradeStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterK3SConfigUpgradeStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterK3SConfigUpgradeStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drain_server_nodes - computed: true, optional: false, required: false
  public get drainServerNodes() {
    return this.getBooleanAttribute('drain_server_nodes');
  }

  // drain_worker_nodes - computed: true, optional: false, required: false
  public get drainWorkerNodes() {
    return this.getBooleanAttribute('drain_worker_nodes');
  }

  // server_concurrency - computed: true, optional: false, required: false
  public get serverConcurrency() {
    return this.getNumberAttribute('server_concurrency');
  }

  // worker_concurrency - computed: true, optional: false, required: false
  public get workerConcurrency() {
    return this.getNumberAttribute('worker_concurrency');
  }
}

export class DataRancher2ClusterK3SConfigUpgradeStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterK3SConfigUpgradeStrategyOutputReference {
    return new DataRancher2ClusterK3SConfigUpgradeStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterK3SConfig {
}

export function dataRancher2ClusterK3SConfigToTerraform(struct?: DataRancher2ClusterK3SConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterK3SConfigToHclTerraform(struct?: DataRancher2ClusterK3SConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterK3SConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterK3SConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterK3SConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // upgrade_strategy - computed: true, optional: false, required: false
  private _upgradeStrategy = new DataRancher2ClusterK3SConfigUpgradeStrategyList(this, "upgrade_strategy", false);
  public get upgradeStrategy() {
    return this._upgradeStrategy;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataRancher2ClusterK3SConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterK3SConfigOutputReference {
    return new DataRancher2ClusterK3SConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterOkeConfig {
}

export function dataRancher2ClusterOkeConfigToTerraform(struct?: DataRancher2ClusterOkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterOkeConfigToHclTerraform(struct?: DataRancher2ClusterOkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterOkeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterOkeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterOkeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // control_plane_subnet_name - computed: true, optional: false, required: false
  public get controlPlaneSubnetName() {
    return this.getStringAttribute('control_plane_subnet_name');
  }

  // custom_boot_volume_size - computed: true, optional: false, required: false
  public get customBootVolumeSize() {
    return this.getNumberAttribute('custom_boot_volume_size');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_kubernetes_dashboard - computed: true, optional: false, required: false
  public get enableKubernetesDashboard() {
    return this.getBooleanAttribute('enable_kubernetes_dashboard');
  }

  // enable_private_control_plane - computed: true, optional: false, required: false
  public get enablePrivateControlPlane() {
    return this.getBooleanAttribute('enable_private_control_plane');
  }

  // enable_private_nodes - computed: true, optional: false, required: false
  public get enablePrivateNodes() {
    return this.getBooleanAttribute('enable_private_nodes');
  }

  // eviction_grace_duration - computed: true, optional: false, required: false
  public get evictionGraceDuration() {
    return this.getStringAttribute('eviction_grace_duration');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // flex_memory_in_gbs - computed: true, optional: false, required: false
  public get flexMemoryInGbs() {
    return this.getNumberAttribute('flex_memory_in_gbs');
  }

  // flex_ocpus - computed: true, optional: false, required: false
  public get flexOcpus() {
    return this.getNumberAttribute('flex_ocpus');
  }

  // force_delete_after_grace_duration - computed: true, optional: false, required: false
  public get forceDeleteAfterGraceDuration() {
    return this.getBooleanAttribute('force_delete_after_grace_duration');
  }

  // image_verification_kms_key_id - computed: true, optional: false, required: false
  public get imageVerificationKmsKeyId() {
    return this.getStringAttribute('image_verification_kms_key_id');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // limit_node_count - computed: true, optional: false, required: false
  public get limitNodeCount() {
    return this.getNumberAttribute('limit_node_count');
  }

  // load_balancer_subnet_name_1 - computed: true, optional: false, required: false
  public get loadBalancerSubnetName1() {
    return this.getStringAttribute('load_balancer_subnet_name_1');
  }

  // load_balancer_subnet_name_2 - computed: true, optional: false, required: false
  public get loadBalancerSubnetName2() {
    return this.getStringAttribute('load_balancer_subnet_name_2');
  }

  // node_image - computed: true, optional: false, required: false
  public get nodeImage() {
    return this.getStringAttribute('node_image');
  }

  // node_pool_dns_domain_name - computed: true, optional: false, required: false
  public get nodePoolDnsDomainName() {
    return this.getStringAttribute('node_pool_dns_domain_name');
  }

  // node_pool_subnet_name - computed: true, optional: false, required: false
  public get nodePoolSubnetName() {
    return this.getStringAttribute('node_pool_subnet_name');
  }

  // node_public_key_contents - computed: true, optional: false, required: false
  public get nodePublicKeyContents() {
    return this.getStringAttribute('node_public_key_contents');
  }

  // node_shape - computed: true, optional: false, required: false
  public get nodeShape() {
    return this.getStringAttribute('node_shape');
  }

  // node_user_data_contents - computed: true, optional: false, required: false
  public get nodeUserDataContents() {
    return this.getStringAttribute('node_user_data_contents');
  }

  // pod_cidr - computed: true, optional: false, required: false
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }

  // pod_network - computed: true, optional: false, required: false
  public get podNetwork() {
    return this.getStringAttribute('pod_network');
  }

  // pod_subnet_name - computed: true, optional: false, required: false
  public get podSubnetName() {
    return this.getStringAttribute('pod_subnet_name');
  }

  // private_key_contents - computed: true, optional: false, required: false
  public get privateKeyContents() {
    return this.getStringAttribute('private_key_contents');
  }

  // private_key_passphrase - computed: true, optional: false, required: false
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }

  // quantity_of_node_subnets - computed: true, optional: false, required: false
  public get quantityOfNodeSubnets() {
    return this.getNumberAttribute('quantity_of_node_subnets');
  }

  // quantity_per_subnet - computed: true, optional: false, required: false
  public get quantityPerSubnet() {
    return this.getNumberAttribute('quantity_per_subnet');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // service_cidr - computed: true, optional: false, required: false
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }

  // service_dns_domain_name - computed: true, optional: false, required: false
  public get serviceDnsDomainName() {
    return this.getStringAttribute('service_dns_domain_name');
  }

  // skip_vcn_delete - computed: true, optional: false, required: false
  public get skipVcnDelete() {
    return this.getBooleanAttribute('skip_vcn_delete');
  }

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }

  // user_ocid - computed: true, optional: false, required: false
  public get userOcid() {
    return this.getStringAttribute('user_ocid');
  }

  // vcn_compartment_id - computed: true, optional: false, required: false
  public get vcnCompartmentId() {
    return this.getStringAttribute('vcn_compartment_id');
  }

  // vcn_name - computed: true, optional: false, required: false
  public get vcnName() {
    return this.getStringAttribute('vcn_name');
  }

  // worker_node_ingress_cidr - computed: true, optional: false, required: false
  public get workerNodeIngressCidr() {
    return this.getStringAttribute('worker_node_ingress_cidr');
  }
}

export class DataRancher2ClusterOkeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterOkeConfigOutputReference {
    return new DataRancher2ClusterOkeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRke2ConfigUpgradeStrategy {
}

export function dataRancher2ClusterRke2ConfigUpgradeStrategyToTerraform(struct?: DataRancher2ClusterRke2ConfigUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRke2ConfigUpgradeStrategyToHclTerraform(struct?: DataRancher2ClusterRke2ConfigUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRke2ConfigUpgradeStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRke2ConfigUpgradeStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRke2ConfigUpgradeStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drain_server_nodes - computed: true, optional: false, required: false
  public get drainServerNodes() {
    return this.getBooleanAttribute('drain_server_nodes');
  }

  // drain_worker_nodes - computed: true, optional: false, required: false
  public get drainWorkerNodes() {
    return this.getBooleanAttribute('drain_worker_nodes');
  }

  // server_concurrency - computed: true, optional: false, required: false
  public get serverConcurrency() {
    return this.getNumberAttribute('server_concurrency');
  }

  // worker_concurrency - computed: true, optional: false, required: false
  public get workerConcurrency() {
    return this.getNumberAttribute('worker_concurrency');
  }
}

export class DataRancher2ClusterRke2ConfigUpgradeStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRke2ConfigUpgradeStrategyOutputReference {
    return new DataRancher2ClusterRke2ConfigUpgradeStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRke2Config {
}

export function dataRancher2ClusterRke2ConfigToTerraform(struct?: DataRancher2ClusterRke2Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRke2ConfigToHclTerraform(struct?: DataRancher2ClusterRke2Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRke2ConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRke2Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRke2Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // upgrade_strategy - computed: true, optional: false, required: false
  private _upgradeStrategy = new DataRancher2ClusterRke2ConfigUpgradeStrategyList(this, "upgrade_strategy", false);
  public get upgradeStrategy() {
    return this._upgradeStrategy;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataRancher2ClusterRke2ConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRke2ConfigOutputReference {
    return new DataRancher2ClusterRke2ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigAuthentication {
}

export function dataRancher2ClusterRkeConfigAuthenticationToTerraform(struct?: DataRancher2ClusterRkeConfigAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigAuthenticationToHclTerraform(struct?: DataRancher2ClusterRkeConfigAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sans - computed: true, optional: false, required: false
  public get sans() {
    return this.getListAttribute('sans');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataRancher2ClusterRkeConfigAuthenticationList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigAuthenticationOutputReference {
    return new DataRancher2ClusterRkeConfigAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigAuthorization {
}

export function dataRancher2ClusterRkeConfigAuthorizationToTerraform(struct?: DataRancher2ClusterRkeConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigAuthorizationToHclTerraform(struct?: DataRancher2ClusterRkeConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigAuthorizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktf.StringMap(this, "options");
  public get options() {
    return this._options;
  }
}

export class DataRancher2ClusterRkeConfigAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigAuthorizationOutputReference {
    return new DataRancher2ClusterRkeConfigAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigBastionHost {
}

export function dataRancher2ClusterRkeConfigBastionHostToTerraform(struct?: DataRancher2ClusterRkeConfigBastionHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigBastionHostToHclTerraform(struct?: DataRancher2ClusterRkeConfigBastionHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigBastionHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigBastionHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigBastionHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // ssh_agent_auth - computed: true, optional: false, required: false
  public get sshAgentAuth() {
    return this.getBooleanAttribute('ssh_agent_auth');
  }

  // ssh_key - computed: true, optional: false, required: false
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }

  // ssh_key_path - computed: true, optional: false, required: false
  public get sshKeyPath() {
    return this.getStringAttribute('ssh_key_path');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataRancher2ClusterRkeConfigBastionHostList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigBastionHostOutputReference {
    return new DataRancher2ClusterRkeConfigBastionHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderGlobal {
}

export function dataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderGlobalToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderGlobalToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderGlobalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_security_group_ingress - computed: true, optional: false, required: false
  public get disableSecurityGroupIngress() {
    return this.getBooleanAttribute('disable_security_group_ingress');
  }

  // disable_strict_zone_check - computed: true, optional: false, required: false
  public get disableStrictZoneCheck() {
    return this.getBooleanAttribute('disable_strict_zone_check');
  }

  // elb_security_group - computed: true, optional: false, required: false
  public get elbSecurityGroup() {
    return this.getStringAttribute('elb_security_group');
  }

  // kubernetes_cluster_id - computed: true, optional: false, required: false
  public get kubernetesClusterId() {
    return this.getStringAttribute('kubernetes_cluster_id');
  }

  // kubernetes_cluster_tag - computed: true, optional: false, required: false
  public get kubernetesClusterTag() {
    return this.getStringAttribute('kubernetes_cluster_tag');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // route_table_id - computed: true, optional: false, required: false
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vpc - computed: true, optional: false, required: false
  public get vpc() {
    return this.getStringAttribute('vpc');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderGlobalList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderGlobalOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderGlobalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderServiceOverride {
}

export function dataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderServiceOverrideToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderServiceOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderServiceOverrideToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderServiceOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderServiceOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderServiceOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderServiceOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // signing_method - computed: true, optional: false, required: false
  public get signingMethod() {
    return this.getStringAttribute('signing_method');
  }

  // signing_name - computed: true, optional: false, required: false
  public get signingName() {
    return this.getStringAttribute('signing_name');
  }

  // signing_region - computed: true, optional: false, required: false
  public get signingRegion() {
    return this.getStringAttribute('signing_region');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderServiceOverrideList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderServiceOverrideOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderServiceOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderAwsCloudProvider {
}

export function dataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderAwsCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderAwsCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderAwsCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderAwsCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // global - computed: true, optional: false, required: false
  private _global = new DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderGlobalList(this, "global", false);
  public get global() {
    return this._global;
  }

  // service_override - computed: true, optional: false, required: false
  private _serviceOverride = new DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderServiceOverrideList(this, "service_override", false);
  public get serviceOverride() {
    return this._serviceOverride;
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderAzureCloudProvider {
}

export function dataRancher2ClusterRkeConfigCloudProviderAzureCloudProviderToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderAzureCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderAzureCloudProviderToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderAzureCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderAzureCloudProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderAzureCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderAzureCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aad_client_cert_password - computed: true, optional: false, required: false
  public get aadClientCertPassword() {
    return this.getStringAttribute('aad_client_cert_password');
  }

  // aad_client_cert_path - computed: true, optional: false, required: false
  public get aadClientCertPath() {
    return this.getStringAttribute('aad_client_cert_path');
  }

  // aad_client_id - computed: true, optional: false, required: false
  public get aadClientId() {
    return this.getStringAttribute('aad_client_id');
  }

  // aad_client_secret - computed: true, optional: false, required: false
  public get aadClientSecret() {
    return this.getStringAttribute('aad_client_secret');
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // cloud_provider_backoff - computed: true, optional: false, required: false
  public get cloudProviderBackoff() {
    return this.getBooleanAttribute('cloud_provider_backoff');
  }

  // cloud_provider_backoff_duration - computed: true, optional: false, required: false
  public get cloudProviderBackoffDuration() {
    return this.getNumberAttribute('cloud_provider_backoff_duration');
  }

  // cloud_provider_backoff_exponent - computed: true, optional: false, required: false
  public get cloudProviderBackoffExponent() {
    return this.getNumberAttribute('cloud_provider_backoff_exponent');
  }

  // cloud_provider_backoff_jitter - computed: true, optional: false, required: false
  public get cloudProviderBackoffJitter() {
    return this.getNumberAttribute('cloud_provider_backoff_jitter');
  }

  // cloud_provider_backoff_retries - computed: true, optional: false, required: false
  public get cloudProviderBackoffRetries() {
    return this.getNumberAttribute('cloud_provider_backoff_retries');
  }

  // cloud_provider_rate_limit - computed: true, optional: false, required: false
  public get cloudProviderRateLimit() {
    return this.getBooleanAttribute('cloud_provider_rate_limit');
  }

  // cloud_provider_rate_limit_bucket - computed: true, optional: false, required: false
  public get cloudProviderRateLimitBucket() {
    return this.getNumberAttribute('cloud_provider_rate_limit_bucket');
  }

  // cloud_provider_rate_limit_qps - computed: true, optional: false, required: false
  public get cloudProviderRateLimitQps() {
    return this.getNumberAttribute('cloud_provider_rate_limit_qps');
  }

  // load_balancer_sku - computed: true, optional: false, required: false
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // maximum_load_balancer_rule_count - computed: true, optional: false, required: false
  public get maximumLoadBalancerRuleCount() {
    return this.getNumberAttribute('maximum_load_balancer_rule_count');
  }

  // primary_availability_set_name - computed: true, optional: false, required: false
  public get primaryAvailabilitySetName() {
    return this.getStringAttribute('primary_availability_set_name');
  }

  // primary_scale_set_name - computed: true, optional: false, required: false
  public get primaryScaleSetName() {
    return this.getStringAttribute('primary_scale_set_name');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // route_table_name - computed: true, optional: false, required: false
  public get routeTableName() {
    return this.getStringAttribute('route_table_name');
  }

  // security_group_name - computed: true, optional: false, required: false
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }

  // subnet_name - computed: true, optional: false, required: false
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // use_instance_metadata - computed: true, optional: false, required: false
  public get useInstanceMetadata() {
    return this.getBooleanAttribute('use_instance_metadata');
  }

  // use_managed_identity_extension - computed: true, optional: false, required: false
  public get useManagedIdentityExtension() {
    return this.getBooleanAttribute('use_managed_identity_extension');
  }

  // vm_type - computed: true, optional: false, required: false
  public get vmType() {
    return this.getStringAttribute('vm_type');
  }

  // vnet_name - computed: true, optional: false, required: false
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }

  // vnet_resource_group - computed: true, optional: false, required: false
  public get vnetResourceGroup() {
    return this.getStringAttribute('vnet_resource_group');
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderAzureCloudProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderAzureCloudProviderOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderAzureCloudProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderBlockStorage {
}

export function dataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderBlockStorageToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderBlockStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderBlockStorageToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderBlockStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderBlockStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderBlockStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderBlockStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bs_version - computed: true, optional: false, required: false
  public get bsVersion() {
    return this.getStringAttribute('bs_version');
  }

  // ignore_volume_az - computed: true, optional: false, required: false
  public get ignoreVolumeAz() {
    return this.getBooleanAttribute('ignore_volume_az');
  }

  // trust_device_path - computed: true, optional: false, required: false
  public get trustDevicePath() {
    return this.getBooleanAttribute('trust_device_path');
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderBlockStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderBlockStorageOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderBlockStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderGlobal {
}

export function dataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderGlobalToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderGlobalToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderGlobalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_url - computed: true, optional: false, required: false
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }

  // ca_file - computed: true, optional: false, required: false
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // tenant_name - computed: true, optional: false, required: false
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }

  // trust_id - computed: true, optional: false, required: false
  public get trustId() {
    return this.getStringAttribute('trust_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderGlobalList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderGlobalOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderGlobalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer {
}

export function dataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_monitor - computed: true, optional: false, required: false
  public get createMonitor() {
    return this.getBooleanAttribute('create_monitor');
  }

  // floating_network_id - computed: true, optional: false, required: false
  public get floatingNetworkId() {
    return this.getStringAttribute('floating_network_id');
  }

  // lb_method - computed: true, optional: false, required: false
  public get lbMethod() {
    return this.getStringAttribute('lb_method');
  }

  // lb_provider - computed: true, optional: false, required: false
  public get lbProvider() {
    return this.getStringAttribute('lb_provider');
  }

  // lb_version - computed: true, optional: false, required: false
  public get lbVersion() {
    return this.getStringAttribute('lb_version');
  }

  // manage_security_groups - computed: true, optional: false, required: false
  public get manageSecurityGroups() {
    return this.getBooleanAttribute('manage_security_groups');
  }

  // monitor_delay - computed: true, optional: false, required: false
  public get monitorDelay() {
    return this.getStringAttribute('monitor_delay');
  }

  // monitor_max_retries - computed: true, optional: false, required: false
  public get monitorMaxRetries() {
    return this.getNumberAttribute('monitor_max_retries');
  }

  // monitor_timeout - computed: true, optional: false, required: false
  public get monitorTimeout() {
    return this.getStringAttribute('monitor_timeout');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // use_octavia - computed: true, optional: false, required: false
  public get useOctavia() {
    return this.getBooleanAttribute('use_octavia');
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderMetadata {
}

export function dataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderMetadataToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderMetadataToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // request_timeout - computed: true, optional: false, required: false
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }

  // search_order - computed: true, optional: false, required: false
  public get searchOrder() {
    return this.getStringAttribute('search_order');
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderMetadataOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderRoute {
}

export function dataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderRouteToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderRouteToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderRouteOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProvider {
}

export function dataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_storage - computed: true, optional: false, required: false
  private _blockStorage = new DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderBlockStorageList(this, "block_storage", false);
  public get blockStorage() {
    return this._blockStorage;
  }

  // global - computed: true, optional: false, required: false
  private _global = new DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderGlobalList(this, "global", false);
  public get global() {
    return this._global;
  }

  // load_balancer - computed: true, optional: false, required: false
  private _loadBalancer = new DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerList(this, "load_balancer", false);
  public get loadBalancer() {
    return this._loadBalancer;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // route - computed: true, optional: false, required: false
  private _route = new DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderRouteList(this, "route", false);
  public get route() {
    return this._route;
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderDisk {
}

export function dataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderDiskToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderDiskToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scsi_controller_type - computed: true, optional: false, required: false
  public get scsiControllerType() {
    return this.getStringAttribute('scsi_controller_type');
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderDiskOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderGlobal {
}

export function dataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderGlobalToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderGlobalToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderGlobalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datacenters - computed: true, optional: false, required: false
  public get datacenters() {
    return this.getStringAttribute('datacenters');
  }

  // graceful_shutdown_timeout - computed: true, optional: false, required: false
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }

  // insecure_flag - computed: true, optional: false, required: false
  public get insecureFlag() {
    return this.getBooleanAttribute('insecure_flag');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // soap_roundtrip_count - computed: true, optional: false, required: false
  public get soapRoundtripCount() {
    return this.getNumberAttribute('soap_roundtrip_count');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderGlobalList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderGlobalOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderGlobalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderNetwork {
}

export function dataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderNetworkToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderNetworkToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_network - computed: true, optional: false, required: false
  public get publicNetwork() {
    return this.getStringAttribute('public_network');
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderNetworkOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderVirtualCenter {
}

export function dataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderVirtualCenterToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderVirtualCenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderVirtualCenterToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderVirtualCenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderVirtualCenterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderVirtualCenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderVirtualCenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datacenters - computed: true, optional: false, required: false
  public get datacenters() {
    return this.getStringAttribute('datacenters');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // soap_roundtrip_count - computed: true, optional: false, required: false
  public get soapRoundtripCount() {
    return this.getNumberAttribute('soap_roundtrip_count');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderVirtualCenterList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderVirtualCenterOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderVirtualCenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderWorkspace {
}

export function dataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderWorkspaceToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderWorkspaceToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderWorkspaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datacenter - computed: true, optional: false, required: false
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }

  // default_datastore - computed: true, optional: false, required: false
  public get defaultDatastore() {
    return this.getStringAttribute('default_datastore');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // resourcepool_path - computed: true, optional: false, required: false
  public get resourcepoolPath() {
    return this.getStringAttribute('resourcepool_path');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderWorkspaceList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderWorkspaceOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderWorkspaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProvider {
}

export function dataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk - computed: true, optional: false, required: false
  private _disk = new DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }

  // global - computed: true, optional: false, required: false
  private _global = new DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderGlobalList(this, "global", false);
  public get global() {
    return this._global;
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // virtual_center - computed: true, optional: false, required: false
  private _virtualCenter = new DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderVirtualCenterList(this, "virtual_center", false);
  public get virtualCenter() {
    return this._virtualCenter;
  }

  // workspace - computed: true, optional: false, required: false
  private _workspace = new DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderWorkspaceList(this, "workspace", false);
  public get workspace() {
    return this._workspace;
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigCloudProvider {
}

export function dataRancher2ClusterRkeConfigCloudProviderToTerraform(struct?: DataRancher2ClusterRkeConfigCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigCloudProviderToHclTerraform(struct?: DataRancher2ClusterRkeConfigCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigCloudProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_cloud_provider - computed: true, optional: false, required: false
  private _awsCloudProvider = new DataRancher2ClusterRkeConfigCloudProviderAwsCloudProviderList(this, "aws_cloud_provider", false);
  public get awsCloudProvider() {
    return this._awsCloudProvider;
  }

  // azure_cloud_provider - computed: true, optional: false, required: false
  private _azureCloudProvider = new DataRancher2ClusterRkeConfigCloudProviderAzureCloudProviderList(this, "azure_cloud_provider", false);
  public get azureCloudProvider() {
    return this._azureCloudProvider;
  }

  // custom_cloud_provider - computed: true, optional: false, required: false
  public get customCloudProvider() {
    return this.getStringAttribute('custom_cloud_provider');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // openstack_cloud_provider - computed: true, optional: false, required: false
  private _openstackCloudProvider = new DataRancher2ClusterRkeConfigCloudProviderOpenstackCloudProviderList(this, "openstack_cloud_provider", false);
  public get openstackCloudProvider() {
    return this._openstackCloudProvider;
  }

  // vsphere_cloud_provider - computed: true, optional: false, required: false
  private _vsphereCloudProvider = new DataRancher2ClusterRkeConfigCloudProviderVsphereCloudProviderList(this, "vsphere_cloud_provider", false);
  public get vsphereCloudProvider() {
    return this._vsphereCloudProvider;
  }
}

export class DataRancher2ClusterRkeConfigCloudProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigCloudProviderOutputReference {
    return new DataRancher2ClusterRkeConfigCloudProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigDnsLinearAutoscalerParams {
}

export function dataRancher2ClusterRkeConfigDnsLinearAutoscalerParamsToTerraform(struct?: DataRancher2ClusterRkeConfigDnsLinearAutoscalerParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigDnsLinearAutoscalerParamsToHclTerraform(struct?: DataRancher2ClusterRkeConfigDnsLinearAutoscalerParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigDnsLinearAutoscalerParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigDnsLinearAutoscalerParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigDnsLinearAutoscalerParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cores_per_replica - computed: true, optional: false, required: false
  public get coresPerReplica() {
    return this.getNumberAttribute('cores_per_replica');
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }

  // nodes_per_replica - computed: true, optional: false, required: false
  public get nodesPerReplica() {
    return this.getNumberAttribute('nodes_per_replica');
  }

  // prevent_single_point_failure - computed: true, optional: false, required: false
  public get preventSinglePointFailure() {
    return this.getBooleanAttribute('prevent_single_point_failure');
  }
}

export class DataRancher2ClusterRkeConfigDnsLinearAutoscalerParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigDnsLinearAutoscalerParamsOutputReference {
    return new DataRancher2ClusterRkeConfigDnsLinearAutoscalerParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigDnsNodelocal {
}

export function dataRancher2ClusterRkeConfigDnsNodelocalToTerraform(struct?: DataRancher2ClusterRkeConfigDnsNodelocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigDnsNodelocalToHclTerraform(struct?: DataRancher2ClusterRkeConfigDnsNodelocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigDnsNodelocalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigDnsNodelocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigDnsNodelocal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // node_selector - computed: true, optional: false, required: false
  private _nodeSelector = new cdktf.StringMap(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
}

export class DataRancher2ClusterRkeConfigDnsNodelocalList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigDnsNodelocalOutputReference {
    return new DataRancher2ClusterRkeConfigDnsNodelocalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigDnsTolerations {
}

export function dataRancher2ClusterRkeConfigDnsTolerationsToTerraform(struct?: DataRancher2ClusterRkeConfigDnsTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigDnsTolerationsToHclTerraform(struct?: DataRancher2ClusterRkeConfigDnsTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigDnsTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigDnsTolerations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigDnsTolerations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataRancher2ClusterRkeConfigDnsTolerationsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigDnsTolerationsOutputReference {
    return new DataRancher2ClusterRkeConfigDnsTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigDnsUpdateStrategyRollingUpdate {
}

export function dataRancher2ClusterRkeConfigDnsUpdateStrategyRollingUpdateToTerraform(struct?: DataRancher2ClusterRkeConfigDnsUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigDnsUpdateStrategyRollingUpdateToHclTerraform(struct?: DataRancher2ClusterRkeConfigDnsUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigDnsUpdateStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigDnsUpdateStrategyRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigDnsUpdateStrategyRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
}

export class DataRancher2ClusterRkeConfigDnsUpdateStrategyRollingUpdateList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigDnsUpdateStrategyRollingUpdateOutputReference {
    return new DataRancher2ClusterRkeConfigDnsUpdateStrategyRollingUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigDnsUpdateStrategy {
}

export function dataRancher2ClusterRkeConfigDnsUpdateStrategyToTerraform(struct?: DataRancher2ClusterRkeConfigDnsUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigDnsUpdateStrategyToHclTerraform(struct?: DataRancher2ClusterRkeConfigDnsUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigDnsUpdateStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigDnsUpdateStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigDnsUpdateStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rolling_update - computed: true, optional: false, required: false
  private _rollingUpdate = new DataRancher2ClusterRkeConfigDnsUpdateStrategyRollingUpdateList(this, "rolling_update", false);
  public get rollingUpdate() {
    return this._rollingUpdate;
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataRancher2ClusterRkeConfigDnsUpdateStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigDnsUpdateStrategyOutputReference {
    return new DataRancher2ClusterRkeConfigDnsUpdateStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigDns {
}

export function dataRancher2ClusterRkeConfigDnsToTerraform(struct?: DataRancher2ClusterRkeConfigDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigDnsToHclTerraform(struct?: DataRancher2ClusterRkeConfigDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // linear_autoscaler_params - computed: true, optional: false, required: false
  private _linearAutoscalerParams = new DataRancher2ClusterRkeConfigDnsLinearAutoscalerParamsList(this, "linear_autoscaler_params", false);
  public get linearAutoscalerParams() {
    return this._linearAutoscalerParams;
  }

  // node_selector - computed: true, optional: false, required: false
  private _nodeSelector = new cdktf.StringMap(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }

  // nodelocal - computed: true, optional: false, required: false
  private _nodelocal = new DataRancher2ClusterRkeConfigDnsNodelocalList(this, "nodelocal", false);
  public get nodelocal() {
    return this._nodelocal;
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktf.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // reverse_cidrs - computed: true, optional: false, required: false
  public get reverseCidrs() {
    return this.getListAttribute('reverse_cidrs');
  }

  // tolerations - computed: true, optional: false, required: false
  private _tolerations = new DataRancher2ClusterRkeConfigDnsTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }

  // update_strategy - computed: true, optional: false, required: false
  private _updateStrategy = new DataRancher2ClusterRkeConfigDnsUpdateStrategyList(this, "update_strategy", false);
  public get updateStrategy() {
    return this._updateStrategy;
  }

  // upstream_nameservers - computed: true, optional: false, required: false
  public get upstreamNameservers() {
    return this.getListAttribute('upstream_nameservers');
  }
}

export class DataRancher2ClusterRkeConfigDnsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigDnsOutputReference {
    return new DataRancher2ClusterRkeConfigDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigIngressTolerations {
}

export function dataRancher2ClusterRkeConfigIngressTolerationsToTerraform(struct?: DataRancher2ClusterRkeConfigIngressTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigIngressTolerationsToHclTerraform(struct?: DataRancher2ClusterRkeConfigIngressTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigIngressTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigIngressTolerations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigIngressTolerations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataRancher2ClusterRkeConfigIngressTolerationsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigIngressTolerationsOutputReference {
    return new DataRancher2ClusterRkeConfigIngressTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigIngressUpdateStrategyRollingUpdate {
}

export function dataRancher2ClusterRkeConfigIngressUpdateStrategyRollingUpdateToTerraform(struct?: DataRancher2ClusterRkeConfigIngressUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigIngressUpdateStrategyRollingUpdateToHclTerraform(struct?: DataRancher2ClusterRkeConfigIngressUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigIngressUpdateStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigIngressUpdateStrategyRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigIngressUpdateStrategyRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
}

export class DataRancher2ClusterRkeConfigIngressUpdateStrategyRollingUpdateList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigIngressUpdateStrategyRollingUpdateOutputReference {
    return new DataRancher2ClusterRkeConfigIngressUpdateStrategyRollingUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigIngressUpdateStrategy {
}

export function dataRancher2ClusterRkeConfigIngressUpdateStrategyToTerraform(struct?: DataRancher2ClusterRkeConfigIngressUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigIngressUpdateStrategyToHclTerraform(struct?: DataRancher2ClusterRkeConfigIngressUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigIngressUpdateStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigIngressUpdateStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigIngressUpdateStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rolling_update - computed: true, optional: false, required: false
  private _rollingUpdate = new DataRancher2ClusterRkeConfigIngressUpdateStrategyRollingUpdateList(this, "rolling_update", false);
  public get rollingUpdate() {
    return this._rollingUpdate;
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataRancher2ClusterRkeConfigIngressUpdateStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigIngressUpdateStrategyOutputReference {
    return new DataRancher2ClusterRkeConfigIngressUpdateStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigIngress {
}

export function dataRancher2ClusterRkeConfigIngressToTerraform(struct?: DataRancher2ClusterRkeConfigIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigIngressToHclTerraform(struct?: DataRancher2ClusterRkeConfigIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigIngress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_backend - computed: true, optional: false, required: false
  public get defaultBackend() {
    return this.getBooleanAttribute('default_backend');
  }

  // dns_policy - computed: true, optional: false, required: false
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new cdktf.StringMap(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }

  // http_port - computed: true, optional: false, required: false
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }

  // https_port - computed: true, optional: false, required: false
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }

  // network_mode - computed: true, optional: false, required: false
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }

  // node_selector - computed: true, optional: false, required: false
  private _nodeSelector = new cdktf.StringMap(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktf.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // tolerations - computed: true, optional: false, required: false
  private _tolerations = new DataRancher2ClusterRkeConfigIngressTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }

  // update_strategy - computed: true, optional: false, required: false
  private _updateStrategy = new DataRancher2ClusterRkeConfigIngressUpdateStrategyList(this, "update_strategy", false);
  public get updateStrategy() {
    return this._updateStrategy;
  }
}

export class DataRancher2ClusterRkeConfigIngressList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigIngressOutputReference {
    return new DataRancher2ClusterRkeConfigIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigMonitoringTolerations {
}

export function dataRancher2ClusterRkeConfigMonitoringTolerationsToTerraform(struct?: DataRancher2ClusterRkeConfigMonitoringTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigMonitoringTolerationsToHclTerraform(struct?: DataRancher2ClusterRkeConfigMonitoringTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigMonitoringTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigMonitoringTolerations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigMonitoringTolerations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataRancher2ClusterRkeConfigMonitoringTolerationsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigMonitoringTolerationsOutputReference {
    return new DataRancher2ClusterRkeConfigMonitoringTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigMonitoringUpdateStrategyRollingUpdate {
}

export function dataRancher2ClusterRkeConfigMonitoringUpdateStrategyRollingUpdateToTerraform(struct?: DataRancher2ClusterRkeConfigMonitoringUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigMonitoringUpdateStrategyRollingUpdateToHclTerraform(struct?: DataRancher2ClusterRkeConfigMonitoringUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigMonitoringUpdateStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigMonitoringUpdateStrategyRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigMonitoringUpdateStrategyRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
}

export class DataRancher2ClusterRkeConfigMonitoringUpdateStrategyRollingUpdateList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigMonitoringUpdateStrategyRollingUpdateOutputReference {
    return new DataRancher2ClusterRkeConfigMonitoringUpdateStrategyRollingUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigMonitoringUpdateStrategy {
}

export function dataRancher2ClusterRkeConfigMonitoringUpdateStrategyToTerraform(struct?: DataRancher2ClusterRkeConfigMonitoringUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigMonitoringUpdateStrategyToHclTerraform(struct?: DataRancher2ClusterRkeConfigMonitoringUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigMonitoringUpdateStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigMonitoringUpdateStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigMonitoringUpdateStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rolling_update - computed: true, optional: false, required: false
  private _rollingUpdate = new DataRancher2ClusterRkeConfigMonitoringUpdateStrategyRollingUpdateList(this, "rolling_update", false);
  public get rollingUpdate() {
    return this._rollingUpdate;
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataRancher2ClusterRkeConfigMonitoringUpdateStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigMonitoringUpdateStrategyOutputReference {
    return new DataRancher2ClusterRkeConfigMonitoringUpdateStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigMonitoring {
}

export function dataRancher2ClusterRkeConfigMonitoringToTerraform(struct?: DataRancher2ClusterRkeConfigMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigMonitoringToHclTerraform(struct?: DataRancher2ClusterRkeConfigMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigMonitoringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_selector - computed: true, optional: false, required: false
  private _nodeSelector = new cdktf.StringMap(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktf.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }

  // tolerations - computed: true, optional: false, required: false
  private _tolerations = new DataRancher2ClusterRkeConfigMonitoringTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }

  // update_strategy - computed: true, optional: false, required: false
  private _updateStrategy = new DataRancher2ClusterRkeConfigMonitoringUpdateStrategyList(this, "update_strategy", false);
  public get updateStrategy() {
    return this._updateStrategy;
  }
}

export class DataRancher2ClusterRkeConfigMonitoringList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigMonitoringOutputReference {
    return new DataRancher2ClusterRkeConfigMonitoringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigNetworkAciNetworkProvider {
}

export function dataRancher2ClusterRkeConfigNetworkAciNetworkProviderToTerraform(struct?: DataRancher2ClusterRkeConfigNetworkAciNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigNetworkAciNetworkProviderToHclTerraform(struct?: DataRancher2ClusterRkeConfigNetworkAciNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigNetworkAciNetworkProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigNetworkAciNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigNetworkAciNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aep - computed: true, optional: false, required: false
  public get aep() {
    return this.getStringAttribute('aep');
  }

  // apic_hosts - computed: true, optional: false, required: false
  public get apicHosts() {
    return this.getListAttribute('apic_hosts');
  }

  // apic_refresh_ticker_adjust - computed: true, optional: false, required: false
  public get apicRefreshTickerAdjust() {
    return this.getStringAttribute('apic_refresh_ticker_adjust');
  }

  // apic_refresh_time - computed: true, optional: false, required: false
  public get apicRefreshTime() {
    return this.getStringAttribute('apic_refresh_time');
  }

  // apic_subscription_delay - computed: true, optional: false, required: false
  public get apicSubscriptionDelay() {
    return this.getStringAttribute('apic_subscription_delay');
  }

  // apic_user_crt - computed: true, optional: false, required: false
  public get apicUserCrt() {
    return this.getStringAttribute('apic_user_crt');
  }

  // apic_user_key - computed: true, optional: false, required: false
  public get apicUserKey() {
    return this.getStringAttribute('apic_user_key');
  }

  // apic_user_name - computed: true, optional: false, required: false
  public get apicUserName() {
    return this.getStringAttribute('apic_user_name');
  }

  // capic - computed: true, optional: false, required: false
  public get capic() {
    return this.getStringAttribute('capic');
  }

  // controller_log_level - computed: true, optional: false, required: false
  public get controllerLogLevel() {
    return this.getStringAttribute('controller_log_level');
  }

  // disable_periodic_snat_global_info_sync - computed: true, optional: false, required: false
  public get disablePeriodicSnatGlobalInfoSync() {
    return this.getStringAttribute('disable_periodic_snat_global_info_sync');
  }

  // disable_wait_for_network - computed: true, optional: false, required: false
  public get disableWaitForNetwork() {
    return this.getStringAttribute('disable_wait_for_network');
  }

  // drop_log_enable - computed: true, optional: false, required: false
  public get dropLogEnable() {
    return this.getStringAttribute('drop_log_enable');
  }

  // duration_wait_for_network - computed: true, optional: false, required: false
  public get durationWaitForNetwork() {
    return this.getStringAttribute('duration_wait_for_network');
  }

  // enable_endpoint_slice - computed: true, optional: false, required: false
  public get enableEndpointSlice() {
    return this.getStringAttribute('enable_endpoint_slice');
  }

  // encap_type - computed: true, optional: false, required: false
  public get encapType() {
    return this.getStringAttribute('encap_type');
  }

  // ep_registry - computed: true, optional: false, required: false
  public get epRegistry() {
    return this.getStringAttribute('ep_registry');
  }

  // extern_dynamic - computed: true, optional: false, required: false
  public get externDynamic() {
    return this.getStringAttribute('extern_dynamic');
  }

  // extern_static - computed: true, optional: false, required: false
  public get externStatic() {
    return this.getStringAttribute('extern_static');
  }

  // gbp_pod_subnet - computed: true, optional: false, required: false
  public get gbpPodSubnet() {
    return this.getStringAttribute('gbp_pod_subnet');
  }

  // host_agent_log_level - computed: true, optional: false, required: false
  public get hostAgentLogLevel() {
    return this.getStringAttribute('host_agent_log_level');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // image_pull_secret - computed: true, optional: false, required: false
  public get imagePullSecret() {
    return this.getStringAttribute('image_pull_secret');
  }

  // infra_vlan - computed: true, optional: false, required: false
  public get infraVlan() {
    return this.getStringAttribute('infra_vlan');
  }

  // install_istio - computed: true, optional: false, required: false
  public get installIstio() {
    return this.getStringAttribute('install_istio');
  }

  // istio_profile - computed: true, optional: false, required: false
  public get istioProfile() {
    return this.getStringAttribute('istio_profile');
  }

  // kafka_brokers - computed: true, optional: false, required: false
  public get kafkaBrokers() {
    return this.getListAttribute('kafka_brokers');
  }

  // kafka_client_crt - computed: true, optional: false, required: false
  public get kafkaClientCrt() {
    return this.getStringAttribute('kafka_client_crt');
  }

  // kafka_client_key - computed: true, optional: false, required: false
  public get kafkaClientKey() {
    return this.getStringAttribute('kafka_client_key');
  }

  // kube_api_vlan - computed: true, optional: false, required: false
  public get kubeApiVlan() {
    return this.getStringAttribute('kube_api_vlan');
  }

  // l3out - computed: true, optional: false, required: false
  public get l3Out() {
    return this.getStringAttribute('l3out');
  }

  // l3out_external_networks - computed: true, optional: false, required: false
  public get l3OutExternalNetworks() {
    return this.getListAttribute('l3out_external_networks');
  }

  // max_nodes_svc_graph - computed: true, optional: false, required: false
  public get maxNodesSvcGraph() {
    return this.getStringAttribute('max_nodes_svc_graph');
  }

  // mcast_range_end - computed: true, optional: false, required: false
  public get mcastRangeEnd() {
    return this.getStringAttribute('mcast_range_end');
  }

  // mcast_range_start - computed: true, optional: false, required: false
  public get mcastRangeStart() {
    return this.getStringAttribute('mcast_range_start');
  }

  // mtu_head_room - computed: true, optional: false, required: false
  public get mtuHeadRoom() {
    return this.getStringAttribute('mtu_head_room');
  }

  // multus_disable - computed: true, optional: false, required: false
  public get multusDisable() {
    return this.getStringAttribute('multus_disable');
  }

  // no_priority_class - computed: true, optional: false, required: false
  public get noPriorityClass() {
    return this.getStringAttribute('no_priority_class');
  }

  // node_pod_if_enable - computed: true, optional: false, required: false
  public get nodePodIfEnable() {
    return this.getStringAttribute('node_pod_if_enable');
  }

  // node_subnet - computed: true, optional: false, required: false
  public get nodeSubnet() {
    return this.getStringAttribute('node_subnet');
  }

  // node_svc_subnet - computed: true, optional: false, required: false
  public get nodeSvcSubnet() {
    return this.getStringAttribute('node_svc_subnet');
  }

  // opflex_client_ssl - computed: true, optional: false, required: false
  public get opflexClientSsl() {
    return this.getStringAttribute('opflex_client_ssl');
  }

  // opflex_device_delete_timeout - computed: true, optional: false, required: false
  public get opflexDeviceDeleteTimeout() {
    return this.getStringAttribute('opflex_device_delete_timeout');
  }

  // opflex_log_level - computed: true, optional: false, required: false
  public get opflexLogLevel() {
    return this.getStringAttribute('opflex_log_level');
  }

  // opflex_mode - computed: true, optional: false, required: false
  public get opflexMode() {
    return this.getStringAttribute('opflex_mode');
  }

  // opflex_server_port - computed: true, optional: false, required: false
  public get opflexServerPort() {
    return this.getStringAttribute('opflex_server_port');
  }

  // overlay_vrf_name - computed: true, optional: false, required: false
  public get overlayVrfName() {
    return this.getStringAttribute('overlay_vrf_name');
  }

  // ovs_memory_limit - computed: true, optional: false, required: false
  public get ovsMemoryLimit() {
    return this.getStringAttribute('ovs_memory_limit');
  }

  // pbr_tracking_non_snat - computed: true, optional: false, required: false
  public get pbrTrackingNonSnat() {
    return this.getStringAttribute('pbr_tracking_non_snat');
  }

  // pod_subnet_chunk_size - computed: true, optional: false, required: false
  public get podSubnetChunkSize() {
    return this.getStringAttribute('pod_subnet_chunk_size');
  }

  // run_gbp_container - computed: true, optional: false, required: false
  public get runGbpContainer() {
    return this.getStringAttribute('run_gbp_container');
  }

  // run_opflex_server_container - computed: true, optional: false, required: false
  public get runOpflexServerContainer() {
    return this.getStringAttribute('run_opflex_server_container');
  }

  // service_monitor_interval - computed: true, optional: false, required: false
  public get serviceMonitorInterval() {
    return this.getStringAttribute('service_monitor_interval');
  }

  // service_vlan - computed: true, optional: false, required: false
  public get serviceVlan() {
    return this.getStringAttribute('service_vlan');
  }

  // snat_contract_scope - computed: true, optional: false, required: false
  public get snatContractScope() {
    return this.getStringAttribute('snat_contract_scope');
  }

  // snat_namespace - computed: true, optional: false, required: false
  public get snatNamespace() {
    return this.getStringAttribute('snat_namespace');
  }

  // snat_port_range_end - computed: true, optional: false, required: false
  public get snatPortRangeEnd() {
    return this.getStringAttribute('snat_port_range_end');
  }

  // snat_port_range_start - computed: true, optional: false, required: false
  public get snatPortRangeStart() {
    return this.getStringAttribute('snat_port_range_start');
  }

  // snat_ports_per_node - computed: true, optional: false, required: false
  public get snatPortsPerNode() {
    return this.getStringAttribute('snat_ports_per_node');
  }

  // sriov_enable - computed: true, optional: false, required: false
  public get sriovEnable() {
    return this.getStringAttribute('sriov_enable');
  }

  // subnet_domain_name - computed: true, optional: false, required: false
  public get subnetDomainName() {
    return this.getStringAttribute('subnet_domain_name');
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // use_aci_anywhere_crd - computed: true, optional: false, required: false
  public get useAciAnywhereCrd() {
    return this.getStringAttribute('use_aci_anywhere_crd');
  }

  // use_aci_cni_priority_class - computed: true, optional: false, required: false
  public get useAciCniPriorityClass() {
    return this.getStringAttribute('use_aci_cni_priority_class');
  }

  // use_cluster_role - computed: true, optional: false, required: false
  public get useClusterRole() {
    return this.getStringAttribute('use_cluster_role');
  }

  // use_host_netns_volume - computed: true, optional: false, required: false
  public get useHostNetnsVolume() {
    return this.getStringAttribute('use_host_netns_volume');
  }

  // use_opflex_server_volume - computed: true, optional: false, required: false
  public get useOpflexServerVolume() {
    return this.getStringAttribute('use_opflex_server_volume');
  }

  // use_privileged_container - computed: true, optional: false, required: false
  public get usePrivilegedContainer() {
    return this.getStringAttribute('use_privileged_container');
  }

  // vmm_controller - computed: true, optional: false, required: false
  public get vmmController() {
    return this.getStringAttribute('vmm_controller');
  }

  // vmm_domain - computed: true, optional: false, required: false
  public get vmmDomain() {
    return this.getStringAttribute('vmm_domain');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }

  // vrf_tenant - computed: true, optional: false, required: false
  public get vrfTenant() {
    return this.getStringAttribute('vrf_tenant');
  }
}

export class DataRancher2ClusterRkeConfigNetworkAciNetworkProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigNetworkAciNetworkProviderOutputReference {
    return new DataRancher2ClusterRkeConfigNetworkAciNetworkProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigNetworkCalicoNetworkProvider {
}

export function dataRancher2ClusterRkeConfigNetworkCalicoNetworkProviderToTerraform(struct?: DataRancher2ClusterRkeConfigNetworkCalicoNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigNetworkCalicoNetworkProviderToHclTerraform(struct?: DataRancher2ClusterRkeConfigNetworkCalicoNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigNetworkCalicoNetworkProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigNetworkCalicoNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigNetworkCalicoNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
}

export class DataRancher2ClusterRkeConfigNetworkCalicoNetworkProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigNetworkCalicoNetworkProviderOutputReference {
    return new DataRancher2ClusterRkeConfigNetworkCalicoNetworkProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigNetworkCanalNetworkProvider {
}

export function dataRancher2ClusterRkeConfigNetworkCanalNetworkProviderToTerraform(struct?: DataRancher2ClusterRkeConfigNetworkCanalNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigNetworkCanalNetworkProviderToHclTerraform(struct?: DataRancher2ClusterRkeConfigNetworkCanalNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigNetworkCanalNetworkProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigNetworkCanalNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigNetworkCanalNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iface - computed: true, optional: false, required: false
  public get iface() {
    return this.getStringAttribute('iface');
  }
}

export class DataRancher2ClusterRkeConfigNetworkCanalNetworkProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigNetworkCanalNetworkProviderOutputReference {
    return new DataRancher2ClusterRkeConfigNetworkCanalNetworkProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigNetworkFlannelNetworkProvider {
}

export function dataRancher2ClusterRkeConfigNetworkFlannelNetworkProviderToTerraform(struct?: DataRancher2ClusterRkeConfigNetworkFlannelNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigNetworkFlannelNetworkProviderToHclTerraform(struct?: DataRancher2ClusterRkeConfigNetworkFlannelNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigNetworkFlannelNetworkProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigNetworkFlannelNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigNetworkFlannelNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iface - computed: true, optional: false, required: false
  public get iface() {
    return this.getStringAttribute('iface');
  }
}

export class DataRancher2ClusterRkeConfigNetworkFlannelNetworkProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigNetworkFlannelNetworkProviderOutputReference {
    return new DataRancher2ClusterRkeConfigNetworkFlannelNetworkProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigNetworkTolerations {
}

export function dataRancher2ClusterRkeConfigNetworkTolerationsToTerraform(struct?: DataRancher2ClusterRkeConfigNetworkTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigNetworkTolerationsToHclTerraform(struct?: DataRancher2ClusterRkeConfigNetworkTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigNetworkTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigNetworkTolerations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigNetworkTolerations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataRancher2ClusterRkeConfigNetworkTolerationsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigNetworkTolerationsOutputReference {
    return new DataRancher2ClusterRkeConfigNetworkTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigNetworkWeaveNetworkProvider {
}

export function dataRancher2ClusterRkeConfigNetworkWeaveNetworkProviderToTerraform(struct?: DataRancher2ClusterRkeConfigNetworkWeaveNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigNetworkWeaveNetworkProviderToHclTerraform(struct?: DataRancher2ClusterRkeConfigNetworkWeaveNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigNetworkWeaveNetworkProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigNetworkWeaveNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigNetworkWeaveNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }
}

export class DataRancher2ClusterRkeConfigNetworkWeaveNetworkProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigNetworkWeaveNetworkProviderOutputReference {
    return new DataRancher2ClusterRkeConfigNetworkWeaveNetworkProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigNetwork {
}

export function dataRancher2ClusterRkeConfigNetworkToTerraform(struct?: DataRancher2ClusterRkeConfigNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigNetworkToHclTerraform(struct?: DataRancher2ClusterRkeConfigNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aci_network_provider - computed: true, optional: false, required: false
  private _aciNetworkProvider = new DataRancher2ClusterRkeConfigNetworkAciNetworkProviderList(this, "aci_network_provider", false);
  public get aciNetworkProvider() {
    return this._aciNetworkProvider;
  }

  // calico_network_provider - computed: true, optional: false, required: false
  private _calicoNetworkProvider = new DataRancher2ClusterRkeConfigNetworkCalicoNetworkProviderList(this, "calico_network_provider", false);
  public get calicoNetworkProvider() {
    return this._calicoNetworkProvider;
  }

  // canal_network_provider - computed: true, optional: false, required: false
  private _canalNetworkProvider = new DataRancher2ClusterRkeConfigNetworkCanalNetworkProviderList(this, "canal_network_provider", false);
  public get canalNetworkProvider() {
    return this._canalNetworkProvider;
  }

  // flannel_network_provider - computed: true, optional: false, required: false
  private _flannelNetworkProvider = new DataRancher2ClusterRkeConfigNetworkFlannelNetworkProviderList(this, "flannel_network_provider", false);
  public get flannelNetworkProvider() {
    return this._flannelNetworkProvider;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktf.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // plugin - computed: true, optional: false, required: false
  public get plugin() {
    return this.getStringAttribute('plugin');
  }

  // tolerations - computed: true, optional: false, required: false
  private _tolerations = new DataRancher2ClusterRkeConfigNetworkTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }

  // weave_network_provider - computed: true, optional: false, required: false
  private _weaveNetworkProvider = new DataRancher2ClusterRkeConfigNetworkWeaveNetworkProviderList(this, "weave_network_provider", false);
  public get weaveNetworkProvider() {
    return this._weaveNetworkProvider;
  }
}

export class DataRancher2ClusterRkeConfigNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigNetworkOutputReference {
    return new DataRancher2ClusterRkeConfigNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigNodes {
}

export function dataRancher2ClusterRkeConfigNodesToTerraform(struct?: DataRancher2ClusterRkeConfigNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigNodesToHclTerraform(struct?: DataRancher2ClusterRkeConfigNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // docker_socket - computed: true, optional: false, required: false
  public get dockerSocket() {
    return this.getStringAttribute('docker_socket');
  }

  // hostname_override - computed: true, optional: false, required: false
  public get hostnameOverride() {
    return this.getStringAttribute('hostname_override');
  }

  // internal_address - computed: true, optional: false, required: false
  public get internalAddress() {
    return this.getStringAttribute('internal_address');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getListAttribute('role');
  }

  // ssh_agent_auth - computed: true, optional: false, required: false
  public get sshAgentAuth() {
    return this.getBooleanAttribute('ssh_agent_auth');
  }

  // ssh_key - computed: true, optional: false, required: false
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }

  // ssh_key_path - computed: true, optional: false, required: false
  public get sshKeyPath() {
    return this.getStringAttribute('ssh_key_path');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataRancher2ClusterRkeConfigNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigNodesOutputReference {
    return new DataRancher2ClusterRkeConfigNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigPrivateRegistriesEcrCredentialPlugin {
}

export function dataRancher2ClusterRkeConfigPrivateRegistriesEcrCredentialPluginToTerraform(struct?: DataRancher2ClusterRkeConfigPrivateRegistriesEcrCredentialPlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigPrivateRegistriesEcrCredentialPluginToHclTerraform(struct?: DataRancher2ClusterRkeConfigPrivateRegistriesEcrCredentialPlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigPrivateRegistriesEcrCredentialPluginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigPrivateRegistriesEcrCredentialPlugin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigPrivateRegistriesEcrCredentialPlugin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_access_key_id - computed: true, optional: false, required: false
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }

  // aws_secret_access_key - computed: true, optional: false, required: false
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }

  // aws_session_token - computed: true, optional: false, required: false
  public get awsSessionToken() {
    return this.getStringAttribute('aws_session_token');
  }
}

export class DataRancher2ClusterRkeConfigPrivateRegistriesEcrCredentialPluginList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigPrivateRegistriesEcrCredentialPluginOutputReference {
    return new DataRancher2ClusterRkeConfigPrivateRegistriesEcrCredentialPluginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigPrivateRegistries {
}

export function dataRancher2ClusterRkeConfigPrivateRegistriesToTerraform(struct?: DataRancher2ClusterRkeConfigPrivateRegistries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigPrivateRegistriesToHclTerraform(struct?: DataRancher2ClusterRkeConfigPrivateRegistries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigPrivateRegistriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigPrivateRegistries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigPrivateRegistries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ecr_credential_plugin - computed: true, optional: false, required: false
  private _ecrCredentialPlugin = new DataRancher2ClusterRkeConfigPrivateRegistriesEcrCredentialPluginList(this, "ecr_credential_plugin", false);
  public get ecrCredentialPlugin() {
    return this._ecrCredentialPlugin;
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataRancher2ClusterRkeConfigPrivateRegistriesList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigPrivateRegistriesOutputReference {
    return new DataRancher2ClusterRkeConfigPrivateRegistriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigServicesEtcdBackupConfigS3BackupConfig {
}

export function dataRancher2ClusterRkeConfigServicesEtcdBackupConfigS3BackupConfigToTerraform(struct?: DataRancher2ClusterRkeConfigServicesEtcdBackupConfigS3BackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigServicesEtcdBackupConfigS3BackupConfigToHclTerraform(struct?: DataRancher2ClusterRkeConfigServicesEtcdBackupConfigS3BackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigServicesEtcdBackupConfigS3BackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigServicesEtcdBackupConfigS3BackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigServicesEtcdBackupConfigS3BackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // custom_ca - computed: true, optional: false, required: false
  public get customCa() {
    return this.getStringAttribute('custom_ca');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
}

export class DataRancher2ClusterRkeConfigServicesEtcdBackupConfigS3BackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigServicesEtcdBackupConfigS3BackupConfigOutputReference {
    return new DataRancher2ClusterRkeConfigServicesEtcdBackupConfigS3BackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigServicesEtcdBackupConfig {
}

export function dataRancher2ClusterRkeConfigServicesEtcdBackupConfigToTerraform(struct?: DataRancher2ClusterRkeConfigServicesEtcdBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigServicesEtcdBackupConfigToHclTerraform(struct?: DataRancher2ClusterRkeConfigServicesEtcdBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigServicesEtcdBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigServicesEtcdBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigServicesEtcdBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // interval_hours - computed: true, optional: false, required: false
  public get intervalHours() {
    return this.getNumberAttribute('interval_hours');
  }

  // retention - computed: true, optional: false, required: false
  public get retention() {
    return this.getNumberAttribute('retention');
  }

  // s3_backup_config - computed: true, optional: false, required: false
  private _s3BackupConfig = new DataRancher2ClusterRkeConfigServicesEtcdBackupConfigS3BackupConfigList(this, "s3_backup_config", false);
  public get s3BackupConfig() {
    return this._s3BackupConfig;
  }

  // safe_timestamp - computed: true, optional: false, required: false
  public get safeTimestamp() {
    return this.getBooleanAttribute('safe_timestamp');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}

export class DataRancher2ClusterRkeConfigServicesEtcdBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigServicesEtcdBackupConfigOutputReference {
    return new DataRancher2ClusterRkeConfigServicesEtcdBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigServicesEtcd {
}

export function dataRancher2ClusterRkeConfigServicesEtcdToTerraform(struct?: DataRancher2ClusterRkeConfigServicesEtcd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigServicesEtcdToHclTerraform(struct?: DataRancher2ClusterRkeConfigServicesEtcd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigServicesEtcdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigServicesEtcd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigServicesEtcd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_config - computed: true, optional: false, required: false
  private _backupConfig = new DataRancher2ClusterRkeConfigServicesEtcdBackupConfigList(this, "backup_config", false);
  public get backupConfig() {
    return this._backupConfig;
  }

  // ca_cert - computed: true, optional: false, required: false
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // creation - computed: true, optional: false, required: false
  public get creation() {
    return this.getStringAttribute('creation');
  }

  // external_urls - computed: true, optional: false, required: false
  public get externalUrls() {
    return this.getListAttribute('external_urls');
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new cdktf.StringMap(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: false, required: false
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }

  // extra_env - computed: true, optional: false, required: false
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // retention - computed: true, optional: false, required: false
  public get retention() {
    return this.getStringAttribute('retention');
  }

  // snapshot - computed: true, optional: false, required: false
  public get snapshot() {
    return this.getBooleanAttribute('snapshot');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }
}

export class DataRancher2ClusterRkeConfigServicesEtcdList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigServicesEtcdOutputReference {
    return new DataRancher2ClusterRkeConfigServicesEtcdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationPlugins {
}

export function dataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationPluginsToTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationPlugins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationPluginsToHclTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationPlugins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationPluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationPlugins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationPlugins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.getStringAttribute('configuration');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationPluginsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationPluginsOutputReference {
    return new DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfiguration {
}

export function dataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationToTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationToHclTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // plugins - computed: true, optional: false, required: false
  private _plugins = new DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationPluginsList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
  }
}

export class DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationOutputReference {
    return new DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigServicesKubeApiAuditLogConfiguration {
}

export function dataRancher2ClusterRkeConfigServicesKubeApiAuditLogConfigurationToTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeApiAuditLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigServicesKubeApiAuditLogConfigurationToHclTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeApiAuditLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigServicesKubeApiAuditLogConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigServicesKubeApiAuditLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigServicesKubeApiAuditLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }

  // max_backup - computed: true, optional: false, required: false
  public get maxBackup() {
    return this.getNumberAttribute('max_backup');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }
}

export class DataRancher2ClusterRkeConfigServicesKubeApiAuditLogConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigServicesKubeApiAuditLogConfigurationOutputReference {
    return new DataRancher2ClusterRkeConfigServicesKubeApiAuditLogConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigServicesKubeApiAuditLog {
}

export function dataRancher2ClusterRkeConfigServicesKubeApiAuditLogToTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeApiAuditLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigServicesKubeApiAuditLogToHclTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeApiAuditLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigServicesKubeApiAuditLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigServicesKubeApiAuditLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigServicesKubeApiAuditLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataRancher2ClusterRkeConfigServicesKubeApiAuditLogConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataRancher2ClusterRkeConfigServicesKubeApiAuditLogList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigServicesKubeApiAuditLogOutputReference {
    return new DataRancher2ClusterRkeConfigServicesKubeApiAuditLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigServicesKubeApiEventRateLimit {
}

export function dataRancher2ClusterRkeConfigServicesKubeApiEventRateLimitToTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeApiEventRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigServicesKubeApiEventRateLimitToHclTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeApiEventRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigServicesKubeApiEventRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigServicesKubeApiEventRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigServicesKubeApiEventRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.getStringAttribute('configuration');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataRancher2ClusterRkeConfigServicesKubeApiEventRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigServicesKubeApiEventRateLimitOutputReference {
    return new DataRancher2ClusterRkeConfigServicesKubeApiEventRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigServicesKubeApiSecretsEncryptionConfig {
}

export function dataRancher2ClusterRkeConfigServicesKubeApiSecretsEncryptionConfigToTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeApiSecretsEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigServicesKubeApiSecretsEncryptionConfigToHclTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeApiSecretsEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigServicesKubeApiSecretsEncryptionConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigServicesKubeApiSecretsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigServicesKubeApiSecretsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_config - computed: true, optional: false, required: false
  public get customConfig() {
    return this.getStringAttribute('custom_config');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataRancher2ClusterRkeConfigServicesKubeApiSecretsEncryptionConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigServicesKubeApiSecretsEncryptionConfigOutputReference {
    return new DataRancher2ClusterRkeConfigServicesKubeApiSecretsEncryptionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigServicesKubeApi {
}

export function dataRancher2ClusterRkeConfigServicesKubeApiToTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigServicesKubeApiToHclTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigServicesKubeApiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigServicesKubeApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigServicesKubeApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admission_configuration - computed: true, optional: false, required: false
  private _admissionConfiguration = new DataRancher2ClusterRkeConfigServicesKubeApiAdmissionConfigurationList(this, "admission_configuration", false);
  public get admissionConfiguration() {
    return this._admissionConfiguration;
  }

  // always_pull_images - computed: true, optional: false, required: false
  public get alwaysPullImages() {
    return this.getBooleanAttribute('always_pull_images');
  }

  // audit_log - computed: true, optional: false, required: false
  private _auditLog = new DataRancher2ClusterRkeConfigServicesKubeApiAuditLogList(this, "audit_log", false);
  public get auditLog() {
    return this._auditLog;
  }

  // event_rate_limit - computed: true, optional: false, required: false
  private _eventRateLimit = new DataRancher2ClusterRkeConfigServicesKubeApiEventRateLimitList(this, "event_rate_limit", false);
  public get eventRateLimit() {
    return this._eventRateLimit;
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new cdktf.StringMap(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: false, required: false
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }

  // extra_env - computed: true, optional: false, required: false
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // secrets_encryption_config - computed: true, optional: false, required: false
  private _secretsEncryptionConfig = new DataRancher2ClusterRkeConfigServicesKubeApiSecretsEncryptionConfigList(this, "secrets_encryption_config", false);
  public get secretsEncryptionConfig() {
    return this._secretsEncryptionConfig;
  }

  // service_cluster_ip_range - computed: true, optional: false, required: false
  public get serviceClusterIpRange() {
    return this.getStringAttribute('service_cluster_ip_range');
  }

  // service_node_port_range - computed: true, optional: false, required: false
  public get serviceNodePortRange() {
    return this.getStringAttribute('service_node_port_range');
  }
}

export class DataRancher2ClusterRkeConfigServicesKubeApiList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigServicesKubeApiOutputReference {
    return new DataRancher2ClusterRkeConfigServicesKubeApiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigServicesKubeController {
}

export function dataRancher2ClusterRkeConfigServicesKubeControllerToTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigServicesKubeControllerToHclTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigServicesKubeControllerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigServicesKubeController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigServicesKubeController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_cidr - computed: true, optional: false, required: false
  public get clusterCidr() {
    return this.getStringAttribute('cluster_cidr');
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new cdktf.StringMap(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: false, required: false
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }

  // extra_env - computed: true, optional: false, required: false
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // service_cluster_ip_range - computed: true, optional: false, required: false
  public get serviceClusterIpRange() {
    return this.getStringAttribute('service_cluster_ip_range');
  }
}

export class DataRancher2ClusterRkeConfigServicesKubeControllerList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigServicesKubeControllerOutputReference {
    return new DataRancher2ClusterRkeConfigServicesKubeControllerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigServicesKubelet {
}

export function dataRancher2ClusterRkeConfigServicesKubeletToTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigServicesKubeletToHclTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigServicesKubeletOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigServicesKubelet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigServicesKubelet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_dns_server - computed: true, optional: false, required: false
  public get clusterDnsServer() {
    return this.getStringAttribute('cluster_dns_server');
  }

  // cluster_domain - computed: true, optional: false, required: false
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new cdktf.StringMap(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: false, required: false
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }

  // extra_env - computed: true, optional: false, required: false
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }

  // fail_swap_on - computed: true, optional: false, required: false
  public get failSwapOn() {
    return this.getBooleanAttribute('fail_swap_on');
  }

  // generate_serving_certificate - computed: true, optional: false, required: false
  public get generateServingCertificate() {
    return this.getBooleanAttribute('generate_serving_certificate');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // infra_container_image - computed: true, optional: false, required: false
  public get infraContainerImage() {
    return this.getStringAttribute('infra_container_image');
  }
}

export class DataRancher2ClusterRkeConfigServicesKubeletList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigServicesKubeletOutputReference {
    return new DataRancher2ClusterRkeConfigServicesKubeletOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigServicesKubeproxy {
}

export function dataRancher2ClusterRkeConfigServicesKubeproxyToTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeproxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigServicesKubeproxyToHclTerraform(struct?: DataRancher2ClusterRkeConfigServicesKubeproxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigServicesKubeproxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigServicesKubeproxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigServicesKubeproxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new cdktf.StringMap(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: false, required: false
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }

  // extra_env - computed: true, optional: false, required: false
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }
}

export class DataRancher2ClusterRkeConfigServicesKubeproxyList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigServicesKubeproxyOutputReference {
    return new DataRancher2ClusterRkeConfigServicesKubeproxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigServicesScheduler {
}

export function dataRancher2ClusterRkeConfigServicesSchedulerToTerraform(struct?: DataRancher2ClusterRkeConfigServicesScheduler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigServicesSchedulerToHclTerraform(struct?: DataRancher2ClusterRkeConfigServicesScheduler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigServicesSchedulerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigServicesScheduler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigServicesScheduler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new cdktf.StringMap(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: false, required: false
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }

  // extra_env - computed: true, optional: false, required: false
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }
}

export class DataRancher2ClusterRkeConfigServicesSchedulerList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigServicesSchedulerOutputReference {
    return new DataRancher2ClusterRkeConfigServicesSchedulerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigServices {
}

export function dataRancher2ClusterRkeConfigServicesToTerraform(struct?: DataRancher2ClusterRkeConfigServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigServicesToHclTerraform(struct?: DataRancher2ClusterRkeConfigServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // etcd - computed: true, optional: false, required: false
  private _etcd = new DataRancher2ClusterRkeConfigServicesEtcdList(this, "etcd", false);
  public get etcd() {
    return this._etcd;
  }

  // kube_api - computed: true, optional: false, required: false
  private _kubeApi = new DataRancher2ClusterRkeConfigServicesKubeApiList(this, "kube_api", false);
  public get kubeApi() {
    return this._kubeApi;
  }

  // kube_controller - computed: true, optional: false, required: false
  private _kubeController = new DataRancher2ClusterRkeConfigServicesKubeControllerList(this, "kube_controller", false);
  public get kubeController() {
    return this._kubeController;
  }

  // kubelet - computed: true, optional: false, required: false
  private _kubelet = new DataRancher2ClusterRkeConfigServicesKubeletList(this, "kubelet", false);
  public get kubelet() {
    return this._kubelet;
  }

  // kubeproxy - computed: true, optional: false, required: false
  private _kubeproxy = new DataRancher2ClusterRkeConfigServicesKubeproxyList(this, "kubeproxy", false);
  public get kubeproxy() {
    return this._kubeproxy;
  }

  // scheduler - computed: true, optional: false, required: false
  private _scheduler = new DataRancher2ClusterRkeConfigServicesSchedulerList(this, "scheduler", false);
  public get scheduler() {
    return this._scheduler;
  }
}

export class DataRancher2ClusterRkeConfigServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigServicesOutputReference {
    return new DataRancher2ClusterRkeConfigServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigUpgradeStrategyDrainInput {
}

export function dataRancher2ClusterRkeConfigUpgradeStrategyDrainInputToTerraform(struct?: DataRancher2ClusterRkeConfigUpgradeStrategyDrainInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigUpgradeStrategyDrainInputToHclTerraform(struct?: DataRancher2ClusterRkeConfigUpgradeStrategyDrainInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigUpgradeStrategyDrainInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigUpgradeStrategyDrainInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigUpgradeStrategyDrainInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_local_data - computed: true, optional: false, required: false
  public get deleteLocalData() {
    return this.getBooleanAttribute('delete_local_data');
  }

  // force - computed: true, optional: false, required: false
  public get force() {
    return this.getBooleanAttribute('force');
  }

  // grace_period - computed: true, optional: false, required: false
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }

  // ignore_daemon_sets - computed: true, optional: false, required: false
  public get ignoreDaemonSets() {
    return this.getBooleanAttribute('ignore_daemon_sets');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}

export class DataRancher2ClusterRkeConfigUpgradeStrategyDrainInputList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigUpgradeStrategyDrainInputOutputReference {
    return new DataRancher2ClusterRkeConfigUpgradeStrategyDrainInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfigUpgradeStrategy {
}

export function dataRancher2ClusterRkeConfigUpgradeStrategyToTerraform(struct?: DataRancher2ClusterRkeConfigUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigUpgradeStrategyToHclTerraform(struct?: DataRancher2ClusterRkeConfigUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigUpgradeStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfigUpgradeStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfigUpgradeStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drain - computed: true, optional: false, required: false
  public get drain() {
    return this.getBooleanAttribute('drain');
  }

  // drain_input - computed: true, optional: false, required: false
  private _drainInput = new DataRancher2ClusterRkeConfigUpgradeStrategyDrainInputList(this, "drain_input", false);
  public get drainInput() {
    return this._drainInput;
  }

  // max_unavailable_controlplane - computed: true, optional: false, required: false
  public get maxUnavailableControlplane() {
    return this.getStringAttribute('max_unavailable_controlplane');
  }

  // max_unavailable_worker - computed: true, optional: false, required: false
  public get maxUnavailableWorker() {
    return this.getStringAttribute('max_unavailable_worker');
  }
}

export class DataRancher2ClusterRkeConfigUpgradeStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigUpgradeStrategyOutputReference {
    return new DataRancher2ClusterRkeConfigUpgradeStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterRkeConfig {
}

export function dataRancher2ClusterRkeConfigToTerraform(struct?: DataRancher2ClusterRkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterRkeConfigToHclTerraform(struct?: DataRancher2ClusterRkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterRkeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterRkeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterRkeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addon_job_timeout - computed: true, optional: false, required: false
  public get addonJobTimeout() {
    return this.getNumberAttribute('addon_job_timeout');
  }

  // addons - computed: true, optional: false, required: false
  public get addons() {
    return this.getStringAttribute('addons');
  }

  // addons_include - computed: true, optional: false, required: false
  public get addonsInclude() {
    return this.getListAttribute('addons_include');
  }

  // authentication - computed: true, optional: false, required: false
  private _authentication = new DataRancher2ClusterRkeConfigAuthenticationList(this, "authentication", false);
  public get authentication() {
    return this._authentication;
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataRancher2ClusterRkeConfigAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // bastion_host - computed: true, optional: false, required: false
  private _bastionHost = new DataRancher2ClusterRkeConfigBastionHostList(this, "bastion_host", false);
  public get bastionHost() {
    return this._bastionHost;
  }

  // cloud_provider - computed: true, optional: false, required: false
  private _cloudProvider = new DataRancher2ClusterRkeConfigCloudProviderList(this, "cloud_provider", false);
  public get cloudProvider() {
    return this._cloudProvider;
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataRancher2ClusterRkeConfigDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }

  // enable_cri_dockerd - computed: true, optional: false, required: false
  public get enableCriDockerd() {
    return this.getBooleanAttribute('enable_cri_dockerd');
  }

  // ignore_docker_version - computed: true, optional: false, required: false
  public get ignoreDockerVersion() {
    return this.getBooleanAttribute('ignore_docker_version');
  }

  // ingress - computed: true, optional: false, required: false
  private _ingress = new DataRancher2ClusterRkeConfigIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // monitoring - computed: true, optional: false, required: false
  private _monitoring = new DataRancher2ClusterRkeConfigMonitoringList(this, "monitoring", false);
  public get monitoring() {
    return this._monitoring;
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataRancher2ClusterRkeConfigNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataRancher2ClusterRkeConfigNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // prefix_path - computed: true, optional: false, required: false
  public get prefixPath() {
    return this.getStringAttribute('prefix_path');
  }

  // private_registries - computed: true, optional: false, required: false
  private _privateRegistries = new DataRancher2ClusterRkeConfigPrivateRegistriesList(this, "private_registries", false);
  public get privateRegistries() {
    return this._privateRegistries;
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataRancher2ClusterRkeConfigServicesList(this, "services", false);
  public get services() {
    return this._services;
  }

  // ssh_agent_auth - computed: true, optional: false, required: false
  public get sshAgentAuth() {
    return this.getBooleanAttribute('ssh_agent_auth');
  }

  // ssh_cert_path - computed: true, optional: false, required: false
  public get sshCertPath() {
    return this.getStringAttribute('ssh_cert_path');
  }

  // ssh_key_path - computed: true, optional: false, required: false
  public get sshKeyPath() {
    return this.getStringAttribute('ssh_key_path');
  }

  // upgrade_strategy - computed: true, optional: false, required: false
  private _upgradeStrategy = new DataRancher2ClusterRkeConfigUpgradeStrategyList(this, "upgrade_strategy", false);
  public get upgradeStrategy() {
    return this._upgradeStrategy;
  }

  // win_prefix_path - computed: true, optional: false, required: false
  public get winPrefixPath() {
    return this.getStringAttribute('win_prefix_path');
  }
}

export class DataRancher2ClusterRkeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterRkeConfigOutputReference {
    return new DataRancher2ClusterRkeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/cluster rancher2_cluster}
*/
export class DataRancher2Cluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRancher2Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRancher2Cluster to import
  * @param importFromId The id of the existing DataRancher2Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRancher2Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/cluster rancher2_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRancher2ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataRancher2ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_cluster',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '7.9.0',
        providerVersionConstraint: '7.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultPodSecurityAdmissionConfigurationTemplateName = config.defaultPodSecurityAdmissionConfigurationTemplateName;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_env_vars - computed: true, optional: false, required: false
  public get agentEnvVars() {
    return this.getListAttribute('agent_env_vars');
  }

  // aks_config - computed: true, optional: false, required: false
  private _aksConfig = new DataRancher2ClusterAksConfigList(this, "aks_config", false);
  public get aksConfig() {
    return this._aksConfig;
  }

  // aks_config_v2 - computed: true, optional: false, required: false
  private _aksConfigV2 = new DataRancher2ClusterAksConfigV2List(this, "aks_config_v2", false);
  public get aksConfigV2() {
    return this._aksConfigV2;
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // ca_cert - computed: true, optional: false, required: false
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }

  // cluster_auth_endpoint - computed: true, optional: false, required: false
  private _clusterAuthEndpoint = new DataRancher2ClusterClusterAuthEndpointList(this, "cluster_auth_endpoint", false);
  public get clusterAuthEndpoint() {
    return this._clusterAuthEndpoint;
  }

  // cluster_registration_token - computed: true, optional: false, required: false
  private _clusterRegistrationToken = new DataRancher2ClusterClusterRegistrationTokenList(this, "cluster_registration_token", false);
  public get clusterRegistrationToken() {
    return this._clusterRegistrationToken;
  }

  // cluster_template_answers - computed: true, optional: false, required: false
  private _clusterTemplateAnswers = new DataRancher2ClusterClusterTemplateAnswersList(this, "cluster_template_answers", false);
  public get clusterTemplateAnswers() {
    return this._clusterTemplateAnswers;
  }

  // cluster_template_id - computed: true, optional: false, required: false
  public get clusterTemplateId() {
    return this.getStringAttribute('cluster_template_id');
  }

  // cluster_template_questions - computed: true, optional: false, required: false
  private _clusterTemplateQuestions = new DataRancher2ClusterClusterTemplateQuestionsList(this, "cluster_template_questions", false);
  public get clusterTemplateQuestions() {
    return this._clusterTemplateQuestions;
  }

  // cluster_template_revision_id - computed: true, optional: false, required: false
  public get clusterTemplateRevisionId() {
    return this.getStringAttribute('cluster_template_revision_id');
  }

  // default_pod_security_admission_configuration_template_name - computed: true, optional: true, required: false
  private _defaultPodSecurityAdmissionConfigurationTemplateName?: string; 
  public get defaultPodSecurityAdmissionConfigurationTemplateName() {
    return this.getStringAttribute('default_pod_security_admission_configuration_template_name');
  }
  public set defaultPodSecurityAdmissionConfigurationTemplateName(value: string) {
    this._defaultPodSecurityAdmissionConfigurationTemplateName = value;
  }
  public resetDefaultPodSecurityAdmissionConfigurationTemplateName() {
    this._defaultPodSecurityAdmissionConfigurationTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPodSecurityAdmissionConfigurationTemplateNameInput() {
    return this._defaultPodSecurityAdmissionConfigurationTemplateName;
  }

  // default_project_id - computed: true, optional: false, required: false
  public get defaultProjectId() {
    return this.getStringAttribute('default_project_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // eks_config - computed: true, optional: false, required: false
  private _eksConfig = new DataRancher2ClusterEksConfigList(this, "eks_config", false);
  public get eksConfig() {
    return this._eksConfig;
  }

  // eks_config_v2 - computed: true, optional: false, required: false
  private _eksConfigV2 = new DataRancher2ClusterEksConfigV2List(this, "eks_config_v2", false);
  public get eksConfigV2() {
    return this._eksConfigV2;
  }

  // enable_network_policy - computed: true, optional: false, required: false
  public get enableNetworkPolicy() {
    return this.getBooleanAttribute('enable_network_policy');
  }

  // fleet_workspace_name - computed: true, optional: false, required: false
  public get fleetWorkspaceName() {
    return this.getStringAttribute('fleet_workspace_name');
  }

  // gke_config - computed: true, optional: false, required: false
  private _gkeConfig = new DataRancher2ClusterGkeConfigList(this, "gke_config", false);
  public get gkeConfig() {
    return this._gkeConfig;
  }

  // gke_config_v2 - computed: true, optional: false, required: false
  private _gkeConfigV2 = new DataRancher2ClusterGkeConfigV2List(this, "gke_config_v2", false);
  public get gkeConfigV2() {
    return this._gkeConfigV2;
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

  // imported_config - computed: true, optional: false, required: false
  private _importedConfig = new DataRancher2ClusterImportedConfigList(this, "imported_config", false);
  public get importedConfig() {
    return this._importedConfig;
  }

  // k3s_config - computed: true, optional: false, required: false
  private _k3SConfig = new DataRancher2ClusterK3SConfigList(this, "k3s_config", false);
  public get k3SConfig() {
    return this._k3SConfig;
  }

  // kube_config - computed: true, optional: false, required: false
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
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

  // oke_config - computed: true, optional: false, required: false
  private _okeConfig = new DataRancher2ClusterOkeConfigList(this, "oke_config", false);
  public get okeConfig() {
    return this._okeConfig;
  }

  // rke2_config - computed: true, optional: false, required: false
  private _rke2Config = new DataRancher2ClusterRke2ConfigList(this, "rke2_config", false);
  public get rke2Config() {
    return this._rke2Config;
  }

  // rke_config - computed: true, optional: false, required: false
  private _rkeConfig = new DataRancher2ClusterRkeConfigList(this, "rke_config", false);
  public get rkeConfig() {
    return this._rkeConfig;
  }

  // system_project_id - computed: true, optional: false, required: false
  public get systemProjectId() {
    return this.getStringAttribute('system_project_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_pod_security_admission_configuration_template_name: cdktf.stringToTerraform(this._defaultPodSecurityAdmissionConfigurationTemplateName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_pod_security_admission_configuration_template_name: {
        value: cdktf.stringToHclTerraform(this._defaultPodSecurityAdmissionConfigurationTemplateName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
