// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FoundationCentralImageClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#aos_package_sha256sum FoundationCentralImageCluster#aos_package_sha256sum}
  */
  readonly aosPackageSha256Sum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#aos_package_url FoundationCentralImageCluster#aos_package_url}
  */
  readonly aosPackageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#cluster_external_ip FoundationCentralImageCluster#cluster_external_ip}
  */
  readonly clusterExternalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#cluster_name FoundationCentralImageCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#cluster_size FoundationCentralImageCluster#cluster_size}
  */
  readonly clusterSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#fc_api_key_uuid FoundationCentralImageCluster#fc_api_key_uuid}
  */
  readonly fcApiKeyUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#id FoundationCentralImageCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#image_cluster_uuid FoundationCentralImageCluster#image_cluster_uuid}
  */
  readonly imageClusterUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#redundancy_factor FoundationCentralImageCluster#redundancy_factor}
  */
  readonly redundancyFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#server_configuration_data FoundationCentralImageCluster#server_configuration_data}
  */
  readonly serverConfigurationData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#skip_cluster_creation FoundationCentralImageCluster#skip_cluster_creation}
  */
  readonly skipClusterCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#storage_node_count FoundationCentralImageCluster#storage_node_count}
  */
  readonly storageNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#timezone FoundationCentralImageCluster#timezone}
  */
  readonly timezone?: string;
  /**
  * cluster_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#cluster_status FoundationCentralImageCluster#cluster_status}
  */
  readonly clusterStatus?: FoundationCentralImageClusterClusterStatus;
  /**
  * common_network_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#common_network_settings FoundationCentralImageCluster#common_network_settings}
  */
  readonly commonNetworkSettings?: FoundationCentralImageClusterCommonNetworkSettings;
  /**
  * hypervisor_iso_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#hypervisor_iso_details FoundationCentralImageCluster#hypervisor_iso_details}
  */
  readonly hypervisorIsoDetails?: FoundationCentralImageClusterHypervisorIsoDetails;
  /**
  * hypervisor_isos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#hypervisor_isos FoundationCentralImageCluster#hypervisor_isos}
  */
  readonly hypervisorIsos?: FoundationCentralImageClusterHypervisorIsos;
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#node_list FoundationCentralImageCluster#node_list}
  */
  readonly nodeList?: FoundationCentralImageClusterNodeListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#timeouts FoundationCentralImageCluster#timeouts}
  */
  readonly timeouts?: FoundationCentralImageClusterTimeouts;
}
export interface FoundationCentralImageClusterFoundationInitConfigBlocksNodes {
}

export function foundationCentralImageClusterFoundationInitConfigBlocksNodesToTerraform(struct?: FoundationCentralImageClusterFoundationInitConfigBlocksNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function foundationCentralImageClusterFoundationInitConfigBlocksNodesToHclTerraform(struct?: FoundationCentralImageClusterFoundationInitConfigBlocksNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FoundationCentralImageClusterFoundationInitConfigBlocksNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationCentralImageClusterFoundationInitConfigBlocksNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationCentralImageClusterFoundationInitConfigBlocksNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cvm_ip - computed: true, optional: false, required: false
  public get cvmIp() {
    return this.getStringAttribute('cvm_ip');
  }

  // cvm_vlan_id - computed: true, optional: false, required: false
  public get cvmVlanId() {
    return this.getNumberAttribute('cvm_vlan_id');
  }

  // fc_imaged_node_uuid - computed: true, optional: false, required: false
  public get fcImagedNodeUuid() {
    return this.getStringAttribute('fc_imaged_node_uuid');
  }

  // hardware_attributes_override - computed: true, optional: false, required: false
  private _hardwareAttributesOverride = new cdktf.StringMap(this, "hardware_attributes_override");
  public get hardwareAttributesOverride() {
    return this._hardwareAttributesOverride;
  }

  // hypervisor - computed: true, optional: false, required: false
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }

  // hypervisor_hostname - computed: true, optional: false, required: false
  public get hypervisorHostname() {
    return this.getStringAttribute('hypervisor_hostname');
  }

  // hypervisor_ip - computed: true, optional: false, required: false
  public get hypervisorIp() {
    return this.getStringAttribute('hypervisor_ip');
  }

  // image_now - computed: true, optional: false, required: false
  public get imageNow() {
    return this.getBooleanAttribute('image_now');
  }

  // ipmi_ip - computed: true, optional: false, required: false
  public get ipmiIp() {
    return this.getStringAttribute('ipmi_ip');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // node_position - computed: true, optional: false, required: false
  public get nodePosition() {
    return this.getStringAttribute('node_position');
  }

  // node_serial - computed: true, optional: false, required: false
  public get nodeSerial() {
    return this.getStringAttribute('node_serial');
  }
}

export class FoundationCentralImageClusterFoundationInitConfigBlocksNodesList extends cdktf.ComplexList {

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
  public get(index: number): FoundationCentralImageClusterFoundationInitConfigBlocksNodesOutputReference {
    return new FoundationCentralImageClusterFoundationInitConfigBlocksNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FoundationCentralImageClusterFoundationInitConfigBlocks {
}

export function foundationCentralImageClusterFoundationInitConfigBlocksToTerraform(struct?: FoundationCentralImageClusterFoundationInitConfigBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function foundationCentralImageClusterFoundationInitConfigBlocksToHclTerraform(struct?: FoundationCentralImageClusterFoundationInitConfigBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FoundationCentralImageClusterFoundationInitConfigBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationCentralImageClusterFoundationInitConfigBlocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationCentralImageClusterFoundationInitConfigBlocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new FoundationCentralImageClusterFoundationInitConfigBlocksNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
}

export class FoundationCentralImageClusterFoundationInitConfigBlocksList extends cdktf.ComplexList {

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
  public get(index: number): FoundationCentralImageClusterFoundationInitConfigBlocksOutputReference {
    return new FoundationCentralImageClusterFoundationInitConfigBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FoundationCentralImageClusterFoundationInitConfigClusters {
}

export function foundationCentralImageClusterFoundationInitConfigClustersToTerraform(struct?: FoundationCentralImageClusterFoundationInitConfigClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function foundationCentralImageClusterFoundationInitConfigClustersToHclTerraform(struct?: FoundationCentralImageClusterFoundationInitConfigClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FoundationCentralImageClusterFoundationInitConfigClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationCentralImageClusterFoundationInitConfigClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationCentralImageClusterFoundationInitConfigClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_external_ip - computed: true, optional: false, required: false
  public get clusterExternalIp() {
    return this.getStringAttribute('cluster_external_ip');
  }

  // cluster_init_now - computed: true, optional: false, required: false
  public get clusterInitNow() {
    return this.getBooleanAttribute('cluster_init_now');
  }

  // cluster_init_successful - computed: true, optional: false, required: false
  public get clusterInitSuccessful() {
    return this.getBooleanAttribute('cluster_init_successful');
  }

  // cluster_members - computed: true, optional: false, required: false
  public get clusterMembers() {
    return this.getListAttribute('cluster_members');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cvm_dns_servers - computed: true, optional: false, required: false
  public get cvmDnsServers() {
    return this.getStringAttribute('cvm_dns_servers');
  }

  // cvm_ntp_servers - computed: true, optional: false, required: false
  public get cvmNtpServers() {
    return this.getStringAttribute('cvm_ntp_servers');
  }

  // redundancy_factor - computed: true, optional: false, required: false
  public get redundancyFactor() {
    return this.getNumberAttribute('redundancy_factor');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export class FoundationCentralImageClusterFoundationInitConfigClustersList extends cdktf.ComplexList {

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
  public get(index: number): FoundationCentralImageClusterFoundationInitConfigClustersOutputReference {
    return new FoundationCentralImageClusterFoundationInitConfigClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FoundationCentralImageClusterFoundationInitConfigHypervisorIsos {
}

export function foundationCentralImageClusterFoundationInitConfigHypervisorIsosToTerraform(struct?: FoundationCentralImageClusterFoundationInitConfigHypervisorIsos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function foundationCentralImageClusterFoundationInitConfigHypervisorIsosToHclTerraform(struct?: FoundationCentralImageClusterFoundationInitConfigHypervisorIsos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FoundationCentralImageClusterFoundationInitConfigHypervisorIsosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationCentralImageClusterFoundationInitConfigHypervisorIsos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationCentralImageClusterFoundationInitConfigHypervisorIsos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hypervisor_type - computed: true, optional: false, required: false
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }

  // sha256sum - computed: true, optional: false, required: false
  public get sha256Sum() {
    return this.getStringAttribute('sha256sum');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class FoundationCentralImageClusterFoundationInitConfigHypervisorIsosList extends cdktf.ComplexList {

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
  public get(index: number): FoundationCentralImageClusterFoundationInitConfigHypervisorIsosOutputReference {
    return new FoundationCentralImageClusterFoundationInitConfigHypervisorIsosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FoundationCentralImageClusterFoundationInitConfigNosPackageUrl {
}

export function foundationCentralImageClusterFoundationInitConfigNosPackageUrlToTerraform(struct?: FoundationCentralImageClusterFoundationInitConfigNosPackageUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function foundationCentralImageClusterFoundationInitConfigNosPackageUrlToHclTerraform(struct?: FoundationCentralImageClusterFoundationInitConfigNosPackageUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FoundationCentralImageClusterFoundationInitConfigNosPackageUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationCentralImageClusterFoundationInitConfigNosPackageUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationCentralImageClusterFoundationInitConfigNosPackageUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sha256sum - computed: true, optional: false, required: false
  public get sha256Sum() {
    return this.getStringAttribute('sha256sum');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class FoundationCentralImageClusterFoundationInitConfigNosPackageUrlList extends cdktf.ComplexList {

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
  public get(index: number): FoundationCentralImageClusterFoundationInitConfigNosPackageUrlOutputReference {
    return new FoundationCentralImageClusterFoundationInitConfigNosPackageUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FoundationCentralImageClusterFoundationInitConfig {
}

export function foundationCentralImageClusterFoundationInitConfigToTerraform(struct?: FoundationCentralImageClusterFoundationInitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function foundationCentralImageClusterFoundationInitConfigToHclTerraform(struct?: FoundationCentralImageClusterFoundationInitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FoundationCentralImageClusterFoundationInitConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationCentralImageClusterFoundationInitConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationCentralImageClusterFoundationInitConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blocks - computed: true, optional: false, required: false
  private _blocks = new FoundationCentralImageClusterFoundationInitConfigBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }

  // clusters - computed: true, optional: false, required: false
  private _clusters = new FoundationCentralImageClusterFoundationInitConfigClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }

  // cvm_gateway - computed: true, optional: false, required: false
  public get cvmGateway() {
    return this.getStringAttribute('cvm_gateway');
  }

  // cvm_netmask - computed: true, optional: false, required: false
  public get cvmNetmask() {
    return this.getStringAttribute('cvm_netmask');
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getStringAttribute('dns_servers');
  }

  // hyperv_product_key - computed: true, optional: false, required: false
  public get hypervProductKey() {
    return this.getStringAttribute('hyperv_product_key');
  }

  // hyperv_sku - computed: true, optional: false, required: false
  public get hypervSku() {
    return this.getStringAttribute('hyperv_sku');
  }

  // hypervisor_gateway - computed: true, optional: false, required: false
  public get hypervisorGateway() {
    return this.getStringAttribute('hypervisor_gateway');
  }

  // hypervisor_iso_url - computed: true, optional: false, required: false
  private _hypervisorIsoUrl = new cdktf.StringMap(this, "hypervisor_iso_url");
  public get hypervisorIsoUrl() {
    return this._hypervisorIsoUrl;
  }

  // hypervisor_isos - computed: true, optional: false, required: false
  private _hypervisorIsos = new FoundationCentralImageClusterFoundationInitConfigHypervisorIsosList(this, "hypervisor_isos", false);
  public get hypervisorIsos() {
    return this._hypervisorIsos;
  }

  // hypervisor_netmask - computed: true, optional: false, required: false
  public get hypervisorNetmask() {
    return this.getStringAttribute('hypervisor_netmask');
  }

  // ipmi_gateway - computed: true, optional: false, required: false
  public get ipmiGateway() {
    return this.getStringAttribute('ipmi_gateway');
  }

  // ipmi_netmask - computed: true, optional: false, required: false
  public get ipmiNetmask() {
    return this.getStringAttribute('ipmi_netmask');
  }

  // nos_package_url - computed: true, optional: false, required: false
  private _nosPackageUrl = new FoundationCentralImageClusterFoundationInitConfigNosPackageUrlList(this, "nos_package_url", false);
  public get nosPackageUrl() {
    return this._nosPackageUrl;
  }
}

export class FoundationCentralImageClusterFoundationInitConfigList extends cdktf.ComplexList {

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
  public get(index: number): FoundationCentralImageClusterFoundationInitConfigOutputReference {
    return new FoundationCentralImageClusterFoundationInitConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FoundationCentralImageClusterClusterStatusClusterProgressDetails {
}

export function foundationCentralImageClusterClusterStatusClusterProgressDetailsToTerraform(struct?: FoundationCentralImageClusterClusterStatusClusterProgressDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function foundationCentralImageClusterClusterStatusClusterProgressDetailsToHclTerraform(struct?: FoundationCentralImageClusterClusterStatusClusterProgressDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FoundationCentralImageClusterClusterStatusClusterProgressDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationCentralImageClusterClusterStatusClusterProgressDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationCentralImageClusterClusterStatusClusterProgressDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // message_list - computed: true, optional: false, required: false
  public get messageList() {
    return this.getListAttribute('message_list');
  }

  // percent_complete - computed: true, optional: false, required: false
  public get percentComplete() {
    return this.getNumberAttribute('percent_complete');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class FoundationCentralImageClusterClusterStatusClusterProgressDetailsList extends cdktf.ComplexList {

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
  public get(index: number): FoundationCentralImageClusterClusterStatusClusterProgressDetailsOutputReference {
    return new FoundationCentralImageClusterClusterStatusClusterProgressDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FoundationCentralImageClusterClusterStatusNodeProgressDetails {
}

export function foundationCentralImageClusterClusterStatusNodeProgressDetailsToTerraform(struct?: FoundationCentralImageClusterClusterStatusNodeProgressDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function foundationCentralImageClusterClusterStatusNodeProgressDetailsToHclTerraform(struct?: FoundationCentralImageClusterClusterStatusNodeProgressDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FoundationCentralImageClusterClusterStatusNodeProgressDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationCentralImageClusterClusterStatusNodeProgressDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationCentralImageClusterClusterStatusNodeProgressDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // imaged_node_uuid - computed: true, optional: false, required: false
  public get imagedNodeUuid() {
    return this.getStringAttribute('imaged_node_uuid');
  }

  // imaging_stopped - computed: true, optional: false, required: false
  public get imagingStopped() {
    return this.getBooleanAttribute('imaging_stopped');
  }

  // intent_picked_up - computed: true, optional: false, required: false
  public get intentPickedUp() {
    return this.getBooleanAttribute('intent_picked_up');
  }

  // message_list - computed: true, optional: false, required: false
  public get messageList() {
    return this.getListAttribute('message_list');
  }

  // percent_complete - computed: true, optional: false, required: false
  public get percentComplete() {
    return this.getNumberAttribute('percent_complete');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class FoundationCentralImageClusterClusterStatusNodeProgressDetailsList extends cdktf.ComplexList {

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
  public get(index: number): FoundationCentralImageClusterClusterStatusNodeProgressDetailsOutputReference {
    return new FoundationCentralImageClusterClusterStatusNodeProgressDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FoundationCentralImageClusterClusterStatus {
}

export function foundationCentralImageClusterClusterStatusToTerraform(struct?: FoundationCentralImageClusterClusterStatusOutputReference | FoundationCentralImageClusterClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function foundationCentralImageClusterClusterStatusToHclTerraform(struct?: FoundationCentralImageClusterClusterStatusOutputReference | FoundationCentralImageClusterClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FoundationCentralImageClusterClusterStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FoundationCentralImageClusterClusterStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationCentralImageClusterClusterStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregate_percent_complete - computed: true, optional: false, required: false
  public get aggregatePercentComplete() {
    return this.getNumberAttribute('aggregate_percent_complete');
  }

  // cluster_creation_started - computed: true, optional: false, required: false
  public get clusterCreationStarted() {
    return this.getBooleanAttribute('cluster_creation_started');
  }

  // cluster_progress_details - computed: true, optional: false, required: false
  private _clusterProgressDetails = new FoundationCentralImageClusterClusterStatusClusterProgressDetailsList(this, "cluster_progress_details", false);
  public get clusterProgressDetails() {
    return this._clusterProgressDetails;
  }

  // current_foundation_ip - computed: true, optional: false, required: false
  public get currentFoundationIp() {
    return this.getStringAttribute('current_foundation_ip');
  }

  // foundation_session_id - computed: true, optional: false, required: false
  public get foundationSessionId() {
    return this.getStringAttribute('foundation_session_id');
  }

  // imaging_stopped - computed: true, optional: false, required: false
  public get imagingStopped() {
    return this.getBooleanAttribute('imaging_stopped');
  }

  // intent_picked_up - computed: true, optional: false, required: false
  public get intentPickedUp() {
    return this.getBooleanAttribute('intent_picked_up');
  }

  // node_progress_details - computed: true, optional: false, required: false
  private _nodeProgressDetails = new FoundationCentralImageClusterClusterStatusNodeProgressDetailsList(this, "node_progress_details", false);
  public get nodeProgressDetails() {
    return this._nodeProgressDetails;
  }
}
export interface FoundationCentralImageClusterCommonNetworkSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#cvm_dns_servers FoundationCentralImageCluster#cvm_dns_servers}
  */
  readonly cvmDnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#cvm_ntp_servers FoundationCentralImageCluster#cvm_ntp_servers}
  */
  readonly cvmNtpServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#hypervisor_dns_servers FoundationCentralImageCluster#hypervisor_dns_servers}
  */
  readonly hypervisorDnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#hypervisor_ntp_servers FoundationCentralImageCluster#hypervisor_ntp_servers}
  */
  readonly hypervisorNtpServers?: string[];
}

export function foundationCentralImageClusterCommonNetworkSettingsToTerraform(struct?: FoundationCentralImageClusterCommonNetworkSettingsOutputReference | FoundationCentralImageClusterCommonNetworkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cvm_dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cvmDnsServers),
    cvm_ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cvmNtpServers),
    hypervisor_dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hypervisorDnsServers),
    hypervisor_ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hypervisorNtpServers),
  }
}


export function foundationCentralImageClusterCommonNetworkSettingsToHclTerraform(struct?: FoundationCentralImageClusterCommonNetworkSettingsOutputReference | FoundationCentralImageClusterCommonNetworkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cvm_dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cvmDnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cvm_ntp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cvmNtpServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hypervisor_dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hypervisorDnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hypervisor_ntp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hypervisorNtpServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationCentralImageClusterCommonNetworkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FoundationCentralImageClusterCommonNetworkSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cvmDnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmDnsServers = this._cvmDnsServers;
    }
    if (this._cvmNtpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmNtpServers = this._cvmNtpServers;
    }
    if (this._hypervisorDnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorDnsServers = this._hypervisorDnsServers;
    }
    if (this._hypervisorNtpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorNtpServers = this._hypervisorNtpServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationCentralImageClusterCommonNetworkSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cvmDnsServers = undefined;
      this._cvmNtpServers = undefined;
      this._hypervisorDnsServers = undefined;
      this._hypervisorNtpServers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cvmDnsServers = value.cvmDnsServers;
      this._cvmNtpServers = value.cvmNtpServers;
      this._hypervisorDnsServers = value.hypervisorDnsServers;
      this._hypervisorNtpServers = value.hypervisorNtpServers;
    }
  }

  // cvm_dns_servers - computed: true, optional: true, required: false
  private _cvmDnsServers?: string[]; 
  public get cvmDnsServers() {
    return this.getListAttribute('cvm_dns_servers');
  }
  public set cvmDnsServers(value: string[]) {
    this._cvmDnsServers = value;
  }
  public resetCvmDnsServers() {
    this._cvmDnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmDnsServersInput() {
    return this._cvmDnsServers;
  }

  // cvm_ntp_servers - computed: true, optional: true, required: false
  private _cvmNtpServers?: string[]; 
  public get cvmNtpServers() {
    return this.getListAttribute('cvm_ntp_servers');
  }
  public set cvmNtpServers(value: string[]) {
    this._cvmNtpServers = value;
  }
  public resetCvmNtpServers() {
    this._cvmNtpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmNtpServersInput() {
    return this._cvmNtpServers;
  }

  // hypervisor_dns_servers - computed: true, optional: true, required: false
  private _hypervisorDnsServers?: string[]; 
  public get hypervisorDnsServers() {
    return this.getListAttribute('hypervisor_dns_servers');
  }
  public set hypervisorDnsServers(value: string[]) {
    this._hypervisorDnsServers = value;
  }
  public resetHypervisorDnsServers() {
    this._hypervisorDnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorDnsServersInput() {
    return this._hypervisorDnsServers;
  }

  // hypervisor_ntp_servers - computed: true, optional: true, required: false
  private _hypervisorNtpServers?: string[]; 
  public get hypervisorNtpServers() {
    return this.getListAttribute('hypervisor_ntp_servers');
  }
  public set hypervisorNtpServers(value: string[]) {
    this._hypervisorNtpServers = value;
  }
  public resetHypervisorNtpServers() {
    this._hypervisorNtpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorNtpServersInput() {
    return this._hypervisorNtpServers;
  }
}
export interface FoundationCentralImageClusterHypervisorIsoDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#hyperv_product_key FoundationCentralImageCluster#hyperv_product_key}
  */
  readonly hypervProductKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#hyperv_sku FoundationCentralImageCluster#hyperv_sku}
  */
  readonly hypervSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#sha256sum FoundationCentralImageCluster#sha256sum}
  */
  readonly sha256Sum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#url FoundationCentralImageCluster#url}
  */
  readonly url?: string;
}

export function foundationCentralImageClusterHypervisorIsoDetailsToTerraform(struct?: FoundationCentralImageClusterHypervisorIsoDetailsOutputReference | FoundationCentralImageClusterHypervisorIsoDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hyperv_product_key: cdktf.stringToTerraform(struct!.hypervProductKey),
    hyperv_sku: cdktf.stringToTerraform(struct!.hypervSku),
    sha256sum: cdktf.stringToTerraform(struct!.sha256Sum),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function foundationCentralImageClusterHypervisorIsoDetailsToHclTerraform(struct?: FoundationCentralImageClusterHypervisorIsoDetailsOutputReference | FoundationCentralImageClusterHypervisorIsoDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hyperv_product_key: {
      value: cdktf.stringToHclTerraform(struct!.hypervProductKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hyperv_sku: {
      value: cdktf.stringToHclTerraform(struct!.hypervSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha256sum: {
      value: cdktf.stringToHclTerraform(struct!.sha256Sum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationCentralImageClusterHypervisorIsoDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FoundationCentralImageClusterHypervisorIsoDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hypervProductKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervProductKey = this._hypervProductKey;
    }
    if (this._hypervSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervSku = this._hypervSku;
    }
    if (this._sha256Sum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Sum = this._sha256Sum;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationCentralImageClusterHypervisorIsoDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hypervProductKey = undefined;
      this._hypervSku = undefined;
      this._sha256Sum = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hypervProductKey = value.hypervProductKey;
      this._hypervSku = value.hypervSku;
      this._sha256Sum = value.sha256Sum;
      this._url = value.url;
    }
  }

  // hyperv_product_key - computed: true, optional: true, required: false
  private _hypervProductKey?: string; 
  public get hypervProductKey() {
    return this.getStringAttribute('hyperv_product_key');
  }
  public set hypervProductKey(value: string) {
    this._hypervProductKey = value;
  }
  public resetHypervProductKey() {
    this._hypervProductKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervProductKeyInput() {
    return this._hypervProductKey;
  }

  // hyperv_sku - computed: true, optional: true, required: false
  private _hypervSku?: string; 
  public get hypervSku() {
    return this.getStringAttribute('hyperv_sku');
  }
  public set hypervSku(value: string) {
    this._hypervSku = value;
  }
  public resetHypervSku() {
    this._hypervSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervSkuInput() {
    return this._hypervSku;
  }

  // sha256sum - computed: true, optional: true, required: false
  private _sha256Sum?: string; 
  public get sha256Sum() {
    return this.getStringAttribute('sha256sum');
  }
  public set sha256Sum(value: string) {
    this._sha256Sum = value;
  }
  public resetSha256Sum() {
    this._sha256Sum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256SumInput() {
    return this._sha256Sum;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface FoundationCentralImageClusterHypervisorIsos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#hyperv_product_key FoundationCentralImageCluster#hyperv_product_key}
  */
  readonly hypervProductKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#hyperv_sku FoundationCentralImageCluster#hyperv_sku}
  */
  readonly hypervSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#hypervisor_type FoundationCentralImageCluster#hypervisor_type}
  */
  readonly hypervisorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#sha256sum FoundationCentralImageCluster#sha256sum}
  */
  readonly sha256Sum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#url FoundationCentralImageCluster#url}
  */
  readonly url?: string;
}

export function foundationCentralImageClusterHypervisorIsosToTerraform(struct?: FoundationCentralImageClusterHypervisorIsosOutputReference | FoundationCentralImageClusterHypervisorIsos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hyperv_product_key: cdktf.stringToTerraform(struct!.hypervProductKey),
    hyperv_sku: cdktf.stringToTerraform(struct!.hypervSku),
    hypervisor_type: cdktf.stringToTerraform(struct!.hypervisorType),
    sha256sum: cdktf.stringToTerraform(struct!.sha256Sum),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function foundationCentralImageClusterHypervisorIsosToHclTerraform(struct?: FoundationCentralImageClusterHypervisorIsosOutputReference | FoundationCentralImageClusterHypervisorIsos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hyperv_product_key: {
      value: cdktf.stringToHclTerraform(struct!.hypervProductKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hyperv_sku: {
      value: cdktf.stringToHclTerraform(struct!.hypervSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_type: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha256sum: {
      value: cdktf.stringToHclTerraform(struct!.sha256Sum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationCentralImageClusterHypervisorIsosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FoundationCentralImageClusterHypervisorIsos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hypervProductKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervProductKey = this._hypervProductKey;
    }
    if (this._hypervSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervSku = this._hypervSku;
    }
    if (this._hypervisorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorType = this._hypervisorType;
    }
    if (this._sha256Sum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Sum = this._sha256Sum;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationCentralImageClusterHypervisorIsos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hypervProductKey = undefined;
      this._hypervSku = undefined;
      this._hypervisorType = undefined;
      this._sha256Sum = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hypervProductKey = value.hypervProductKey;
      this._hypervSku = value.hypervSku;
      this._hypervisorType = value.hypervisorType;
      this._sha256Sum = value.sha256Sum;
      this._url = value.url;
    }
  }

  // hyperv_product_key - computed: false, optional: true, required: false
  private _hypervProductKey?: string; 
  public get hypervProductKey() {
    return this.getStringAttribute('hyperv_product_key');
  }
  public set hypervProductKey(value: string) {
    this._hypervProductKey = value;
  }
  public resetHypervProductKey() {
    this._hypervProductKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervProductKeyInput() {
    return this._hypervProductKey;
  }

  // hyperv_sku - computed: false, optional: true, required: false
  private _hypervSku?: string; 
  public get hypervSku() {
    return this.getStringAttribute('hyperv_sku');
  }
  public set hypervSku(value: string) {
    this._hypervSku = value;
  }
  public resetHypervSku() {
    this._hypervSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervSkuInput() {
    return this._hypervSku;
  }

  // hypervisor_type - computed: false, optional: true, required: false
  private _hypervisorType?: string; 
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }
  public set hypervisorType(value: string) {
    this._hypervisorType = value;
  }
  public resetHypervisorType() {
    this._hypervisorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorTypeInput() {
    return this._hypervisorType;
  }

  // sha256sum - computed: false, optional: true, required: false
  private _sha256Sum?: string; 
  public get sha256Sum() {
    return this.getStringAttribute('sha256sum');
  }
  public set sha256Sum(value: string) {
    this._sha256Sum = value;
  }
  public resetSha256Sum() {
    this._sha256Sum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256SumInput() {
    return this._sha256Sum;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface FoundationCentralImageClusterNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#cvm_gateway FoundationCentralImageCluster#cvm_gateway}
  */
  readonly cvmGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#cvm_ip FoundationCentralImageCluster#cvm_ip}
  */
  readonly cvmIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#cvm_netmask FoundationCentralImageCluster#cvm_netmask}
  */
  readonly cvmNetmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#cvm_ram_gb FoundationCentralImageCluster#cvm_ram_gb}
  */
  readonly cvmRamGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#cvm_vlan_id FoundationCentralImageCluster#cvm_vlan_id}
  */
  readonly cvmVlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#hardware_attributes_override FoundationCentralImageCluster#hardware_attributes_override}
  */
  readonly hardwareAttributesOverride?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#hypervisor_gateway FoundationCentralImageCluster#hypervisor_gateway}
  */
  readonly hypervisorGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#hypervisor_hostname FoundationCentralImageCluster#hypervisor_hostname}
  */
  readonly hypervisorHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#hypervisor_ip FoundationCentralImageCluster#hypervisor_ip}
  */
  readonly hypervisorIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#hypervisor_netmask FoundationCentralImageCluster#hypervisor_netmask}
  */
  readonly hypervisorNetmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#hypervisor_type FoundationCentralImageCluster#hypervisor_type}
  */
  readonly hypervisorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#image_now FoundationCentralImageCluster#image_now}
  */
  readonly imageNow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#imaged_node_uuid FoundationCentralImageCluster#imaged_node_uuid}
  */
  readonly imagedNodeUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#ipmi_gateway FoundationCentralImageCluster#ipmi_gateway}
  */
  readonly ipmiGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#ipmi_ip FoundationCentralImageCluster#ipmi_ip}
  */
  readonly ipmiIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#ipmi_netmask FoundationCentralImageCluster#ipmi_netmask}
  */
  readonly ipmiNetmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#rdma_passthrough FoundationCentralImageCluster#rdma_passthrough}
  */
  readonly rdmaPassthrough?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#server_configuration_data FoundationCentralImageCluster#server_configuration_data}
  */
  readonly serverConfigurationData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#use_existing_network_settings FoundationCentralImageCluster#use_existing_network_settings}
  */
  readonly useExistingNetworkSettings?: boolean | cdktf.IResolvable;
}

export function foundationCentralImageClusterNodeListStructToTerraform(struct?: FoundationCentralImageClusterNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cvm_gateway: cdktf.stringToTerraform(struct!.cvmGateway),
    cvm_ip: cdktf.stringToTerraform(struct!.cvmIp),
    cvm_netmask: cdktf.stringToTerraform(struct!.cvmNetmask),
    cvm_ram_gb: cdktf.numberToTerraform(struct!.cvmRamGb),
    cvm_vlan_id: cdktf.numberToTerraform(struct!.cvmVlanId),
    hardware_attributes_override: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hardwareAttributesOverride),
    hypervisor_gateway: cdktf.stringToTerraform(struct!.hypervisorGateway),
    hypervisor_hostname: cdktf.stringToTerraform(struct!.hypervisorHostname),
    hypervisor_ip: cdktf.stringToTerraform(struct!.hypervisorIp),
    hypervisor_netmask: cdktf.stringToTerraform(struct!.hypervisorNetmask),
    hypervisor_type: cdktf.stringToTerraform(struct!.hypervisorType),
    image_now: cdktf.booleanToTerraform(struct!.imageNow),
    imaged_node_uuid: cdktf.stringToTerraform(struct!.imagedNodeUuid),
    ipmi_gateway: cdktf.stringToTerraform(struct!.ipmiGateway),
    ipmi_ip: cdktf.stringToTerraform(struct!.ipmiIp),
    ipmi_netmask: cdktf.stringToTerraform(struct!.ipmiNetmask),
    rdma_passthrough: cdktf.booleanToTerraform(struct!.rdmaPassthrough),
    server_configuration_data: cdktf.stringToTerraform(struct!.serverConfigurationData),
    use_existing_network_settings: cdktf.booleanToTerraform(struct!.useExistingNetworkSettings),
  }
}


export function foundationCentralImageClusterNodeListStructToHclTerraform(struct?: FoundationCentralImageClusterNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cvm_gateway: {
      value: cdktf.stringToHclTerraform(struct!.cvmGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cvm_ip: {
      value: cdktf.stringToHclTerraform(struct!.cvmIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cvm_netmask: {
      value: cdktf.stringToHclTerraform(struct!.cvmNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cvm_ram_gb: {
      value: cdktf.numberToHclTerraform(struct!.cvmRamGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cvm_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.cvmVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hardware_attributes_override: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hardwareAttributesOverride),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hypervisor_gateway: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_hostname: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_ip: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_netmask: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_type: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_now: {
      value: cdktf.booleanToHclTerraform(struct!.imageNow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    imaged_node_uuid: {
      value: cdktf.stringToHclTerraform(struct!.imagedNodeUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipmi_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipmiGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipmi_ip: {
      value: cdktf.stringToHclTerraform(struct!.ipmiIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipmi_netmask: {
      value: cdktf.stringToHclTerraform(struct!.ipmiNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdma_passthrough: {
      value: cdktf.booleanToHclTerraform(struct!.rdmaPassthrough),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_configuration_data: {
      value: cdktf.stringToHclTerraform(struct!.serverConfigurationData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_existing_network_settings: {
      value: cdktf.booleanToHclTerraform(struct!.useExistingNetworkSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationCentralImageClusterNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationCentralImageClusterNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cvmGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmGateway = this._cvmGateway;
    }
    if (this._cvmIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmIp = this._cvmIp;
    }
    if (this._cvmNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmNetmask = this._cvmNetmask;
    }
    if (this._cvmRamGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmRamGb = this._cvmRamGb;
    }
    if (this._cvmVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmVlanId = this._cvmVlanId;
    }
    if (this._hardwareAttributesOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareAttributesOverride = this._hardwareAttributesOverride;
    }
    if (this._hypervisorGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorGateway = this._hypervisorGateway;
    }
    if (this._hypervisorHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorHostname = this._hypervisorHostname;
    }
    if (this._hypervisorIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorIp = this._hypervisorIp;
    }
    if (this._hypervisorNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorNetmask = this._hypervisorNetmask;
    }
    if (this._hypervisorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorType = this._hypervisorType;
    }
    if (this._imageNow !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageNow = this._imageNow;
    }
    if (this._imagedNodeUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagedNodeUuid = this._imagedNodeUuid;
    }
    if (this._ipmiGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiGateway = this._ipmiGateway;
    }
    if (this._ipmiIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiIp = this._ipmiIp;
    }
    if (this._ipmiNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiNetmask = this._ipmiNetmask;
    }
    if (this._rdmaPassthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdmaPassthrough = this._rdmaPassthrough;
    }
    if (this._serverConfigurationData !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConfigurationData = this._serverConfigurationData;
    }
    if (this._useExistingNetworkSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.useExistingNetworkSettings = this._useExistingNetworkSettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationCentralImageClusterNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cvmGateway = undefined;
      this._cvmIp = undefined;
      this._cvmNetmask = undefined;
      this._cvmRamGb = undefined;
      this._cvmVlanId = undefined;
      this._hardwareAttributesOverride = undefined;
      this._hypervisorGateway = undefined;
      this._hypervisorHostname = undefined;
      this._hypervisorIp = undefined;
      this._hypervisorNetmask = undefined;
      this._hypervisorType = undefined;
      this._imageNow = undefined;
      this._imagedNodeUuid = undefined;
      this._ipmiGateway = undefined;
      this._ipmiIp = undefined;
      this._ipmiNetmask = undefined;
      this._rdmaPassthrough = undefined;
      this._serverConfigurationData = undefined;
      this._useExistingNetworkSettings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cvmGateway = value.cvmGateway;
      this._cvmIp = value.cvmIp;
      this._cvmNetmask = value.cvmNetmask;
      this._cvmRamGb = value.cvmRamGb;
      this._cvmVlanId = value.cvmVlanId;
      this._hardwareAttributesOverride = value.hardwareAttributesOverride;
      this._hypervisorGateway = value.hypervisorGateway;
      this._hypervisorHostname = value.hypervisorHostname;
      this._hypervisorIp = value.hypervisorIp;
      this._hypervisorNetmask = value.hypervisorNetmask;
      this._hypervisorType = value.hypervisorType;
      this._imageNow = value.imageNow;
      this._imagedNodeUuid = value.imagedNodeUuid;
      this._ipmiGateway = value.ipmiGateway;
      this._ipmiIp = value.ipmiIp;
      this._ipmiNetmask = value.ipmiNetmask;
      this._rdmaPassthrough = value.rdmaPassthrough;
      this._serverConfigurationData = value.serverConfigurationData;
      this._useExistingNetworkSettings = value.useExistingNetworkSettings;
    }
  }

  // cvm_gateway - computed: true, optional: true, required: false
  private _cvmGateway?: string; 
  public get cvmGateway() {
    return this.getStringAttribute('cvm_gateway');
  }
  public set cvmGateway(value: string) {
    this._cvmGateway = value;
  }
  public resetCvmGateway() {
    this._cvmGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmGatewayInput() {
    return this._cvmGateway;
  }

  // cvm_ip - computed: true, optional: true, required: false
  private _cvmIp?: string; 
  public get cvmIp() {
    return this.getStringAttribute('cvm_ip');
  }
  public set cvmIp(value: string) {
    this._cvmIp = value;
  }
  public resetCvmIp() {
    this._cvmIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmIpInput() {
    return this._cvmIp;
  }

  // cvm_netmask - computed: false, optional: true, required: false
  private _cvmNetmask?: string; 
  public get cvmNetmask() {
    return this.getStringAttribute('cvm_netmask');
  }
  public set cvmNetmask(value: string) {
    this._cvmNetmask = value;
  }
  public resetCvmNetmask() {
    this._cvmNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmNetmaskInput() {
    return this._cvmNetmask;
  }

  // cvm_ram_gb - computed: false, optional: true, required: false
  private _cvmRamGb?: number; 
  public get cvmRamGb() {
    return this.getNumberAttribute('cvm_ram_gb');
  }
  public set cvmRamGb(value: number) {
    this._cvmRamGb = value;
  }
  public resetCvmRamGb() {
    this._cvmRamGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmRamGbInput() {
    return this._cvmRamGb;
  }

  // cvm_vlan_id - computed: true, optional: true, required: false
  private _cvmVlanId?: number; 
  public get cvmVlanId() {
    return this.getNumberAttribute('cvm_vlan_id');
  }
  public set cvmVlanId(value: number) {
    this._cvmVlanId = value;
  }
  public resetCvmVlanId() {
    this._cvmVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmVlanIdInput() {
    return this._cvmVlanId;
  }

  // hardware_attributes_override - computed: true, optional: true, required: false
  private _hardwareAttributesOverride?: { [key: string]: string }; 
  public get hardwareAttributesOverride() {
    return this.getStringMapAttribute('hardware_attributes_override');
  }
  public set hardwareAttributesOverride(value: { [key: string]: string }) {
    this._hardwareAttributesOverride = value;
  }
  public resetHardwareAttributesOverride() {
    this._hardwareAttributesOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareAttributesOverrideInput() {
    return this._hardwareAttributesOverride;
  }

  // hypervisor_gateway - computed: true, optional: true, required: false
  private _hypervisorGateway?: string; 
  public get hypervisorGateway() {
    return this.getStringAttribute('hypervisor_gateway');
  }
  public set hypervisorGateway(value: string) {
    this._hypervisorGateway = value;
  }
  public resetHypervisorGateway() {
    this._hypervisorGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorGatewayInput() {
    return this._hypervisorGateway;
  }

  // hypervisor_hostname - computed: true, optional: true, required: false
  private _hypervisorHostname?: string; 
  public get hypervisorHostname() {
    return this.getStringAttribute('hypervisor_hostname');
  }
  public set hypervisorHostname(value: string) {
    this._hypervisorHostname = value;
  }
  public resetHypervisorHostname() {
    this._hypervisorHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorHostnameInput() {
    return this._hypervisorHostname;
  }

  // hypervisor_ip - computed: true, optional: true, required: false
  private _hypervisorIp?: string; 
  public get hypervisorIp() {
    return this.getStringAttribute('hypervisor_ip');
  }
  public set hypervisorIp(value: string) {
    this._hypervisorIp = value;
  }
  public resetHypervisorIp() {
    this._hypervisorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorIpInput() {
    return this._hypervisorIp;
  }

  // hypervisor_netmask - computed: true, optional: true, required: false
  private _hypervisorNetmask?: string; 
  public get hypervisorNetmask() {
    return this.getStringAttribute('hypervisor_netmask');
  }
  public set hypervisorNetmask(value: string) {
    this._hypervisorNetmask = value;
  }
  public resetHypervisorNetmask() {
    this._hypervisorNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorNetmaskInput() {
    return this._hypervisorNetmask;
  }

  // hypervisor_type - computed: false, optional: true, required: false
  private _hypervisorType?: string; 
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }
  public set hypervisorType(value: string) {
    this._hypervisorType = value;
  }
  public resetHypervisorType() {
    this._hypervisorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorTypeInput() {
    return this._hypervisorType;
  }

  // image_now - computed: true, optional: true, required: false
  private _imageNow?: boolean | cdktf.IResolvable; 
  public get imageNow() {
    return this.getBooleanAttribute('image_now');
  }
  public set imageNow(value: boolean | cdktf.IResolvable) {
    this._imageNow = value;
  }
  public resetImageNow() {
    this._imageNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNowInput() {
    return this._imageNow;
  }

  // imaged_node_uuid - computed: true, optional: true, required: false
  private _imagedNodeUuid?: string; 
  public get imagedNodeUuid() {
    return this.getStringAttribute('imaged_node_uuid');
  }
  public set imagedNodeUuid(value: string) {
    this._imagedNodeUuid = value;
  }
  public resetImagedNodeUuid() {
    this._imagedNodeUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagedNodeUuidInput() {
    return this._imagedNodeUuid;
  }

  // ipmi_gateway - computed: true, optional: true, required: false
  private _ipmiGateway?: string; 
  public get ipmiGateway() {
    return this.getStringAttribute('ipmi_gateway');
  }
  public set ipmiGateway(value: string) {
    this._ipmiGateway = value;
  }
  public resetIpmiGateway() {
    this._ipmiGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiGatewayInput() {
    return this._ipmiGateway;
  }

  // ipmi_ip - computed: true, optional: true, required: false
  private _ipmiIp?: string; 
  public get ipmiIp() {
    return this.getStringAttribute('ipmi_ip');
  }
  public set ipmiIp(value: string) {
    this._ipmiIp = value;
  }
  public resetIpmiIp() {
    this._ipmiIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiIpInput() {
    return this._ipmiIp;
  }

  // ipmi_netmask - computed: false, optional: true, required: false
  private _ipmiNetmask?: string; 
  public get ipmiNetmask() {
    return this.getStringAttribute('ipmi_netmask');
  }
  public set ipmiNetmask(value: string) {
    this._ipmiNetmask = value;
  }
  public resetIpmiNetmask() {
    this._ipmiNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiNetmaskInput() {
    return this._ipmiNetmask;
  }

  // rdma_passthrough - computed: false, optional: true, required: false
  private _rdmaPassthrough?: boolean | cdktf.IResolvable; 
  public get rdmaPassthrough() {
    return this.getBooleanAttribute('rdma_passthrough');
  }
  public set rdmaPassthrough(value: boolean | cdktf.IResolvable) {
    this._rdmaPassthrough = value;
  }
  public resetRdmaPassthrough() {
    this._rdmaPassthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdmaPassthroughInput() {
    return this._rdmaPassthrough;
  }

  // server_configuration_data - computed: false, optional: true, required: false
  private _serverConfigurationData?: string; 
  public get serverConfigurationData() {
    return this.getStringAttribute('server_configuration_data');
  }
  public set serverConfigurationData(value: string) {
    this._serverConfigurationData = value;
  }
  public resetServerConfigurationData() {
    this._serverConfigurationData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConfigurationDataInput() {
    return this._serverConfigurationData;
  }

  // use_existing_network_settings - computed: false, optional: true, required: false
  private _useExistingNetworkSettings?: boolean | cdktf.IResolvable; 
  public get useExistingNetworkSettings() {
    return this.getBooleanAttribute('use_existing_network_settings');
  }
  public set useExistingNetworkSettings(value: boolean | cdktf.IResolvable) {
    this._useExistingNetworkSettings = value;
  }
  public resetUseExistingNetworkSettings() {
    this._useExistingNetworkSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useExistingNetworkSettingsInput() {
    return this._useExistingNetworkSettings;
  }
}

export class FoundationCentralImageClusterNodeListStructList extends cdktf.ComplexList {
  public internalValue? : FoundationCentralImageClusterNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): FoundationCentralImageClusterNodeListStructOutputReference {
    return new FoundationCentralImageClusterNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FoundationCentralImageClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#create FoundationCentralImageCluster#create}
  */
  readonly create?: string;
}

export function foundationCentralImageClusterTimeoutsToTerraform(struct?: FoundationCentralImageClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function foundationCentralImageClusterTimeoutsToHclTerraform(struct?: FoundationCentralImageClusterTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationCentralImageClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FoundationCentralImageClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationCentralImageClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster nutanix_foundation_central_image_cluster}
*/
export class FoundationCentralImageCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_foundation_central_image_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FoundationCentralImageCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FoundationCentralImageCluster to import
  * @param importFromId The id of the existing FoundationCentralImageCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FoundationCentralImageCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_foundation_central_image_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_central_image_cluster nutanix_foundation_central_image_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FoundationCentralImageClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FoundationCentralImageClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_foundation_central_image_cluster',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aosPackageSha256Sum = config.aosPackageSha256Sum;
    this._aosPackageUrl = config.aosPackageUrl;
    this._clusterExternalIp = config.clusterExternalIp;
    this._clusterName = config.clusterName;
    this._clusterSize = config.clusterSize;
    this._fcApiKeyUuid = config.fcApiKeyUuid;
    this._id = config.id;
    this._imageClusterUuid = config.imageClusterUuid;
    this._redundancyFactor = config.redundancyFactor;
    this._serverConfigurationData = config.serverConfigurationData;
    this._skipClusterCreation = config.skipClusterCreation;
    this._storageNodeCount = config.storageNodeCount;
    this._timezone = config.timezone;
    this._clusterStatus.internalValue = config.clusterStatus;
    this._commonNetworkSettings.internalValue = config.commonNetworkSettings;
    this._hypervisorIsoDetails.internalValue = config.hypervisorIsoDetails;
    this._hypervisorIsos.internalValue = config.hypervisorIsos;
    this._nodeList.internalValue = config.nodeList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aos_package_sha256sum - computed: true, optional: true, required: false
  private _aosPackageSha256Sum?: string; 
  public get aosPackageSha256Sum() {
    return this.getStringAttribute('aos_package_sha256sum');
  }
  public set aosPackageSha256Sum(value: string) {
    this._aosPackageSha256Sum = value;
  }
  public resetAosPackageSha256Sum() {
    this._aosPackageSha256Sum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aosPackageSha256SumInput() {
    return this._aosPackageSha256Sum;
  }

  // aos_package_url - computed: true, optional: true, required: false
  private _aosPackageUrl?: string; 
  public get aosPackageUrl() {
    return this.getStringAttribute('aos_package_url');
  }
  public set aosPackageUrl(value: string) {
    this._aosPackageUrl = value;
  }
  public resetAosPackageUrl() {
    this._aosPackageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aosPackageUrlInput() {
    return this._aosPackageUrl;
  }

  // archived - computed: true, optional: false, required: false
  public get archived() {
    return this.getBooleanAttribute('archived');
  }

  // cluster_external_ip - computed: true, optional: true, required: false
  private _clusterExternalIp?: string; 
  public get clusterExternalIp() {
    return this.getStringAttribute('cluster_external_ip');
  }
  public set clusterExternalIp(value: string) {
    this._clusterExternalIp = value;
  }
  public resetClusterExternalIp() {
    this._clusterExternalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterExternalIpInput() {
    return this._clusterExternalIp;
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_size - computed: true, optional: true, required: false
  private _clusterSize?: number; 
  public get clusterSize() {
    return this.getNumberAttribute('cluster_size');
  }
  public set clusterSize(value: number) {
    this._clusterSize = value;
  }
  public resetClusterSize() {
    this._clusterSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSizeInput() {
    return this._clusterSize;
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // current_time - computed: true, optional: false, required: false
  public get currentTime() {
    return this.getStringAttribute('current_time');
  }

  // destroyed - computed: true, optional: false, required: false
  public get destroyed() {
    return this.getBooleanAttribute('destroyed');
  }

  // fc_api_key_uuid - computed: false, optional: true, required: false
  private _fcApiKeyUuid?: string; 
  public get fcApiKeyUuid() {
    return this.getStringAttribute('fc_api_key_uuid');
  }
  public set fcApiKeyUuid(value: string) {
    this._fcApiKeyUuid = value;
  }
  public resetFcApiKeyUuid() {
    this._fcApiKeyUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcApiKeyUuidInput() {
    return this._fcApiKeyUuid;
  }

  // foundation_init_config - computed: true, optional: false, required: false
  private _foundationInitConfig = new FoundationCentralImageClusterFoundationInitConfigList(this, "foundation_init_config", false);
  public get foundationInitConfig() {
    return this._foundationInitConfig;
  }

  // foundation_init_node_uuid - computed: true, optional: false, required: false
  public get foundationInitNodeUuid() {
    return this.getStringAttribute('foundation_init_node_uuid');
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

  // image_cluster_uuid - computed: true, optional: true, required: false
  private _imageClusterUuid?: string; 
  public get imageClusterUuid() {
    return this.getStringAttribute('image_cluster_uuid');
  }
  public set imageClusterUuid(value: string) {
    this._imageClusterUuid = value;
  }
  public resetImageClusterUuid() {
    this._imageClusterUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageClusterUuidInput() {
    return this._imageClusterUuid;
  }

  // imaged_cluster_uuid - computed: true, optional: false, required: false
  public get imagedClusterUuid() {
    return this.getStringAttribute('imaged_cluster_uuid');
  }

  // imaged_node_uuid_list - computed: true, optional: false, required: false
  public get imagedNodeUuidList() {
    return this.getListAttribute('imaged_node_uuid_list');
  }

  // redundancy_factor - computed: true, optional: true, required: false
  private _redundancyFactor?: number; 
  public get redundancyFactor() {
    return this.getNumberAttribute('redundancy_factor');
  }
  public set redundancyFactor(value: number) {
    this._redundancyFactor = value;
  }
  public resetRedundancyFactor() {
    this._redundancyFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyFactorInput() {
    return this._redundancyFactor;
  }

  // server_configuration_data - computed: false, optional: true, required: false
  private _serverConfigurationData?: string; 
  public get serverConfigurationData() {
    return this.getStringAttribute('server_configuration_data');
  }
  public set serverConfigurationData(value: string) {
    this._serverConfigurationData = value;
  }
  public resetServerConfigurationData() {
    this._serverConfigurationData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConfigurationDataInput() {
    return this._serverConfigurationData;
  }

  // skip_cluster_creation - computed: false, optional: true, required: false
  private _skipClusterCreation?: boolean | cdktf.IResolvable; 
  public get skipClusterCreation() {
    return this.getBooleanAttribute('skip_cluster_creation');
  }
  public set skipClusterCreation(value: boolean | cdktf.IResolvable) {
    this._skipClusterCreation = value;
  }
  public resetSkipClusterCreation() {
    this._skipClusterCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipClusterCreationInput() {
    return this._skipClusterCreation;
  }

  // storage_node_count - computed: true, optional: true, required: false
  private _storageNodeCount?: number; 
  public get storageNodeCount() {
    return this.getNumberAttribute('storage_node_count');
  }
  public set storageNodeCount(value: number) {
    this._storageNodeCount = value;
  }
  public resetStorageNodeCount() {
    this._storageNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNodeCountInput() {
    return this._storageNodeCount;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // workflow_type - computed: true, optional: false, required: false
  public get workflowType() {
    return this.getStringAttribute('workflow_type');
  }

  // cluster_status - computed: false, optional: true, required: false
  private _clusterStatus = new FoundationCentralImageClusterClusterStatusOutputReference(this, "cluster_status");
  public get clusterStatus() {
    return this._clusterStatus;
  }
  public putClusterStatus(value: FoundationCentralImageClusterClusterStatus) {
    this._clusterStatus.internalValue = value;
  }
  public resetClusterStatus() {
    this._clusterStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStatusInput() {
    return this._clusterStatus.internalValue;
  }

  // common_network_settings - computed: false, optional: true, required: false
  private _commonNetworkSettings = new FoundationCentralImageClusterCommonNetworkSettingsOutputReference(this, "common_network_settings");
  public get commonNetworkSettings() {
    return this._commonNetworkSettings;
  }
  public putCommonNetworkSettings(value: FoundationCentralImageClusterCommonNetworkSettings) {
    this._commonNetworkSettings.internalValue = value;
  }
  public resetCommonNetworkSettings() {
    this._commonNetworkSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNetworkSettingsInput() {
    return this._commonNetworkSettings.internalValue;
  }

  // hypervisor_iso_details - computed: false, optional: true, required: false
  private _hypervisorIsoDetails = new FoundationCentralImageClusterHypervisorIsoDetailsOutputReference(this, "hypervisor_iso_details");
  public get hypervisorIsoDetails() {
    return this._hypervisorIsoDetails;
  }
  public putHypervisorIsoDetails(value: FoundationCentralImageClusterHypervisorIsoDetails) {
    this._hypervisorIsoDetails.internalValue = value;
  }
  public resetHypervisorIsoDetails() {
    this._hypervisorIsoDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorIsoDetailsInput() {
    return this._hypervisorIsoDetails.internalValue;
  }

  // hypervisor_isos - computed: false, optional: true, required: false
  private _hypervisorIsos = new FoundationCentralImageClusterHypervisorIsosOutputReference(this, "hypervisor_isos");
  public get hypervisorIsos() {
    return this._hypervisorIsos;
  }
  public putHypervisorIsos(value: FoundationCentralImageClusterHypervisorIsos) {
    this._hypervisorIsos.internalValue = value;
  }
  public resetHypervisorIsos() {
    this._hypervisorIsos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorIsosInput() {
    return this._hypervisorIsos.internalValue;
  }

  // node_list - computed: false, optional: true, required: false
  private _nodeList = new FoundationCentralImageClusterNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: FoundationCentralImageClusterNodeListStruct[] | cdktf.IResolvable) {
    this._nodeList.internalValue = value;
  }
  public resetNodeList() {
    this._nodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FoundationCentralImageClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FoundationCentralImageClusterTimeouts) {
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
      aos_package_sha256sum: cdktf.stringToTerraform(this._aosPackageSha256Sum),
      aos_package_url: cdktf.stringToTerraform(this._aosPackageUrl),
      cluster_external_ip: cdktf.stringToTerraform(this._clusterExternalIp),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_size: cdktf.numberToTerraform(this._clusterSize),
      fc_api_key_uuid: cdktf.stringToTerraform(this._fcApiKeyUuid),
      id: cdktf.stringToTerraform(this._id),
      image_cluster_uuid: cdktf.stringToTerraform(this._imageClusterUuid),
      redundancy_factor: cdktf.numberToTerraform(this._redundancyFactor),
      server_configuration_data: cdktf.stringToTerraform(this._serverConfigurationData),
      skip_cluster_creation: cdktf.booleanToTerraform(this._skipClusterCreation),
      storage_node_count: cdktf.numberToTerraform(this._storageNodeCount),
      timezone: cdktf.stringToTerraform(this._timezone),
      cluster_status: foundationCentralImageClusterClusterStatusToTerraform(this._clusterStatus.internalValue),
      common_network_settings: foundationCentralImageClusterCommonNetworkSettingsToTerraform(this._commonNetworkSettings.internalValue),
      hypervisor_iso_details: foundationCentralImageClusterHypervisorIsoDetailsToTerraform(this._hypervisorIsoDetails.internalValue),
      hypervisor_isos: foundationCentralImageClusterHypervisorIsosToTerraform(this._hypervisorIsos.internalValue),
      node_list: cdktf.listMapper(foundationCentralImageClusterNodeListStructToTerraform, true)(this._nodeList.internalValue),
      timeouts: foundationCentralImageClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aos_package_sha256sum: {
        value: cdktf.stringToHclTerraform(this._aosPackageSha256Sum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aos_package_url: {
        value: cdktf.stringToHclTerraform(this._aosPackageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_external_ip: {
        value: cdktf.stringToHclTerraform(this._clusterExternalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_size: {
        value: cdktf.numberToHclTerraform(this._clusterSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fc_api_key_uuid: {
        value: cdktf.stringToHclTerraform(this._fcApiKeyUuid),
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
      image_cluster_uuid: {
        value: cdktf.stringToHclTerraform(this._imageClusterUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redundancy_factor: {
        value: cdktf.numberToHclTerraform(this._redundancyFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_configuration_data: {
        value: cdktf.stringToHclTerraform(this._serverConfigurationData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_cluster_creation: {
        value: cdktf.booleanToHclTerraform(this._skipClusterCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_node_count: {
        value: cdktf.numberToHclTerraform(this._storageNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_status: {
        value: foundationCentralImageClusterClusterStatusToHclTerraform(this._clusterStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FoundationCentralImageClusterClusterStatusList",
      },
      common_network_settings: {
        value: foundationCentralImageClusterCommonNetworkSettingsToHclTerraform(this._commonNetworkSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FoundationCentralImageClusterCommonNetworkSettingsList",
      },
      hypervisor_iso_details: {
        value: foundationCentralImageClusterHypervisorIsoDetailsToHclTerraform(this._hypervisorIsoDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FoundationCentralImageClusterHypervisorIsoDetailsList",
      },
      hypervisor_isos: {
        value: foundationCentralImageClusterHypervisorIsosToHclTerraform(this._hypervisorIsos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FoundationCentralImageClusterHypervisorIsosList",
      },
      node_list: {
        value: cdktf.listMapperHcl(foundationCentralImageClusterNodeListStructToHclTerraform, true)(this._nodeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FoundationCentralImageClusterNodeListStructList",
      },
      timeouts: {
        value: foundationCentralImageClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FoundationCentralImageClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
