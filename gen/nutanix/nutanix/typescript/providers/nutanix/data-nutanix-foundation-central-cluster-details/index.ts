// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixFoundationCentralClusterDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details#cluster_external_ip DataNutanixFoundationCentralClusterDetails#cluster_external_ip}
  */
  readonly clusterExternalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details#cluster_name DataNutanixFoundationCentralClusterDetails#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details#cluster_size DataNutanixFoundationCentralClusterDetails#cluster_size}
  */
  readonly clusterSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details#id DataNutanixFoundationCentralClusterDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details#imaged_cluster_uuid DataNutanixFoundationCentralClusterDetails#imaged_cluster_uuid}
  */
  readonly imagedClusterUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details#redundancy_factor DataNutanixFoundationCentralClusterDetails#redundancy_factor}
  */
  readonly redundancyFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details#storage_node_count DataNutanixFoundationCentralClusterDetails#storage_node_count}
  */
  readonly storageNodeCount?: number;
  /**
  * cluster_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details#cluster_status DataNutanixFoundationCentralClusterDetails#cluster_status}
  */
  readonly clusterStatus?: DataNutanixFoundationCentralClusterDetailsClusterStatus;
  /**
  * common_network_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details#common_network_settings DataNutanixFoundationCentralClusterDetails#common_network_settings}
  */
  readonly commonNetworkSettings?: DataNutanixFoundationCentralClusterDetailsCommonNetworkSettings;
}
export interface DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksNodes {
}

export function dataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksNodesToTerraform(struct?: DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksNodesToHclTerraform(struct?: DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksNodes | undefined) {
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

export class DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksNodesOutputReference {
    return new DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocks {
}

export function dataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksToTerraform(struct?: DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksToHclTerraform(struct?: DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocks | undefined) {
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
  private _nodes = new DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
}

export class DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksOutputReference {
    return new DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralClusterDetailsFoundationInitConfigClusters {
}

export function dataNutanixFoundationCentralClusterDetailsFoundationInitConfigClustersToTerraform(struct?: DataNutanixFoundationCentralClusterDetailsFoundationInitConfigClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralClusterDetailsFoundationInitConfigClustersToHclTerraform(struct?: DataNutanixFoundationCentralClusterDetailsFoundationInitConfigClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralClusterDetailsFoundationInitConfigClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralClusterDetailsFoundationInitConfigClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralClusterDetailsFoundationInitConfigClusters | undefined) {
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

export class DataNutanixFoundationCentralClusterDetailsFoundationInitConfigClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralClusterDetailsFoundationInitConfigClustersOutputReference {
    return new DataNutanixFoundationCentralClusterDetailsFoundationInitConfigClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralClusterDetailsFoundationInitConfigHypervisorIsos {
}

export function dataNutanixFoundationCentralClusterDetailsFoundationInitConfigHypervisorIsosToTerraform(struct?: DataNutanixFoundationCentralClusterDetailsFoundationInitConfigHypervisorIsos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralClusterDetailsFoundationInitConfigHypervisorIsosToHclTerraform(struct?: DataNutanixFoundationCentralClusterDetailsFoundationInitConfigHypervisorIsos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralClusterDetailsFoundationInitConfigHypervisorIsosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralClusterDetailsFoundationInitConfigHypervisorIsos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralClusterDetailsFoundationInitConfigHypervisorIsos | undefined) {
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

export class DataNutanixFoundationCentralClusterDetailsFoundationInitConfigHypervisorIsosList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralClusterDetailsFoundationInitConfigHypervisorIsosOutputReference {
    return new DataNutanixFoundationCentralClusterDetailsFoundationInitConfigHypervisorIsosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralClusterDetailsFoundationInitConfigNosPackageUrl {
}

export function dataNutanixFoundationCentralClusterDetailsFoundationInitConfigNosPackageUrlToTerraform(struct?: DataNutanixFoundationCentralClusterDetailsFoundationInitConfigNosPackageUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralClusterDetailsFoundationInitConfigNosPackageUrlToHclTerraform(struct?: DataNutanixFoundationCentralClusterDetailsFoundationInitConfigNosPackageUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralClusterDetailsFoundationInitConfigNosPackageUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralClusterDetailsFoundationInitConfigNosPackageUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralClusterDetailsFoundationInitConfigNosPackageUrl | undefined) {
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

export class DataNutanixFoundationCentralClusterDetailsFoundationInitConfigNosPackageUrlList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralClusterDetailsFoundationInitConfigNosPackageUrlOutputReference {
    return new DataNutanixFoundationCentralClusterDetailsFoundationInitConfigNosPackageUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralClusterDetailsFoundationInitConfig {
}

export function dataNutanixFoundationCentralClusterDetailsFoundationInitConfigToTerraform(struct?: DataNutanixFoundationCentralClusterDetailsFoundationInitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralClusterDetailsFoundationInitConfigToHclTerraform(struct?: DataNutanixFoundationCentralClusterDetailsFoundationInitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralClusterDetailsFoundationInitConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralClusterDetailsFoundationInitConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralClusterDetailsFoundationInitConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blocks - computed: true, optional: false, required: false
  private _blocks = new DataNutanixFoundationCentralClusterDetailsFoundationInitConfigBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataNutanixFoundationCentralClusterDetailsFoundationInitConfigClustersList(this, "clusters", false);
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
  private _hypervisorIsos = new DataNutanixFoundationCentralClusterDetailsFoundationInitConfigHypervisorIsosList(this, "hypervisor_isos", false);
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
  private _nosPackageUrl = new DataNutanixFoundationCentralClusterDetailsFoundationInitConfigNosPackageUrlList(this, "nos_package_url", false);
  public get nosPackageUrl() {
    return this._nosPackageUrl;
  }
}

export class DataNutanixFoundationCentralClusterDetailsFoundationInitConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralClusterDetailsFoundationInitConfigOutputReference {
    return new DataNutanixFoundationCentralClusterDetailsFoundationInitConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralClusterDetailsClusterStatusClusterProgressDetails {
}

export function dataNutanixFoundationCentralClusterDetailsClusterStatusClusterProgressDetailsToTerraform(struct?: DataNutanixFoundationCentralClusterDetailsClusterStatusClusterProgressDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralClusterDetailsClusterStatusClusterProgressDetailsToHclTerraform(struct?: DataNutanixFoundationCentralClusterDetailsClusterStatusClusterProgressDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralClusterDetailsClusterStatusClusterProgressDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralClusterDetailsClusterStatusClusterProgressDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralClusterDetailsClusterStatusClusterProgressDetails | undefined) {
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

export class DataNutanixFoundationCentralClusterDetailsClusterStatusClusterProgressDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralClusterDetailsClusterStatusClusterProgressDetailsOutputReference {
    return new DataNutanixFoundationCentralClusterDetailsClusterStatusClusterProgressDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralClusterDetailsClusterStatusNodeProgressDetails {
}

export function dataNutanixFoundationCentralClusterDetailsClusterStatusNodeProgressDetailsToTerraform(struct?: DataNutanixFoundationCentralClusterDetailsClusterStatusNodeProgressDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralClusterDetailsClusterStatusNodeProgressDetailsToHclTerraform(struct?: DataNutanixFoundationCentralClusterDetailsClusterStatusNodeProgressDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralClusterDetailsClusterStatusNodeProgressDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralClusterDetailsClusterStatusNodeProgressDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralClusterDetailsClusterStatusNodeProgressDetails | undefined) {
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

export class DataNutanixFoundationCentralClusterDetailsClusterStatusNodeProgressDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralClusterDetailsClusterStatusNodeProgressDetailsOutputReference {
    return new DataNutanixFoundationCentralClusterDetailsClusterStatusNodeProgressDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralClusterDetailsClusterStatus {
}

export function dataNutanixFoundationCentralClusterDetailsClusterStatusToTerraform(struct?: DataNutanixFoundationCentralClusterDetailsClusterStatusOutputReference | DataNutanixFoundationCentralClusterDetailsClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralClusterDetailsClusterStatusToHclTerraform(struct?: DataNutanixFoundationCentralClusterDetailsClusterStatusOutputReference | DataNutanixFoundationCentralClusterDetailsClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralClusterDetailsClusterStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNutanixFoundationCentralClusterDetailsClusterStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralClusterDetailsClusterStatus | undefined) {
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
  private _clusterProgressDetails = new DataNutanixFoundationCentralClusterDetailsClusterStatusClusterProgressDetailsList(this, "cluster_progress_details", false);
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
  private _nodeProgressDetails = new DataNutanixFoundationCentralClusterDetailsClusterStatusNodeProgressDetailsList(this, "node_progress_details", false);
  public get nodeProgressDetails() {
    return this._nodeProgressDetails;
  }
}
export interface DataNutanixFoundationCentralClusterDetailsCommonNetworkSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details#cvm_dns_servers DataNutanixFoundationCentralClusterDetails#cvm_dns_servers}
  */
  readonly cvmDnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details#cvm_ntp_servers DataNutanixFoundationCentralClusterDetails#cvm_ntp_servers}
  */
  readonly cvmNtpServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details#hypervisor_dns_servers DataNutanixFoundationCentralClusterDetails#hypervisor_dns_servers}
  */
  readonly hypervisorDnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details#hypervisor_ntp_servers DataNutanixFoundationCentralClusterDetails#hypervisor_ntp_servers}
  */
  readonly hypervisorNtpServers?: string[];
}

export function dataNutanixFoundationCentralClusterDetailsCommonNetworkSettingsToTerraform(struct?: DataNutanixFoundationCentralClusterDetailsCommonNetworkSettingsOutputReference | DataNutanixFoundationCentralClusterDetailsCommonNetworkSettings): any {
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


export function dataNutanixFoundationCentralClusterDetailsCommonNetworkSettingsToHclTerraform(struct?: DataNutanixFoundationCentralClusterDetailsCommonNetworkSettingsOutputReference | DataNutanixFoundationCentralClusterDetailsCommonNetworkSettings): any {
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

export class DataNutanixFoundationCentralClusterDetailsCommonNetworkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNutanixFoundationCentralClusterDetailsCommonNetworkSettings | undefined {
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

  public set internalValue(value: DataNutanixFoundationCentralClusterDetailsCommonNetworkSettings | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details nutanix_foundation_central_cluster_details}
*/
export class DataNutanixFoundationCentralClusterDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_foundation_central_cluster_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixFoundationCentralClusterDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixFoundationCentralClusterDetails to import
  * @param importFromId The id of the existing DataNutanixFoundationCentralClusterDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixFoundationCentralClusterDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_foundation_central_cluster_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/foundation_central_cluster_details nutanix_foundation_central_cluster_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixFoundationCentralClusterDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataNutanixFoundationCentralClusterDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_foundation_central_cluster_details',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterExternalIp = config.clusterExternalIp;
    this._clusterName = config.clusterName;
    this._clusterSize = config.clusterSize;
    this._id = config.id;
    this._imagedClusterUuid = config.imagedClusterUuid;
    this._redundancyFactor = config.redundancyFactor;
    this._storageNodeCount = config.storageNodeCount;
    this._clusterStatus.internalValue = config.clusterStatus;
    this._commonNetworkSettings.internalValue = config.commonNetworkSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // foundation_init_config - computed: true, optional: false, required: false
  private _foundationInitConfig = new DataNutanixFoundationCentralClusterDetailsFoundationInitConfigList(this, "foundation_init_config", false);
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

  // imaged_cluster_uuid - computed: false, optional: false, required: true
  private _imagedClusterUuid?: string; 
  public get imagedClusterUuid() {
    return this.getStringAttribute('imaged_cluster_uuid');
  }
  public set imagedClusterUuid(value: string) {
    this._imagedClusterUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imagedClusterUuidInput() {
    return this._imagedClusterUuid;
  }

  // imaged_node_uuid_list - computed: true, optional: false, required: false
  public get imagedNodeUuidList() {
    return this.getListAttribute('imaged_node_uuid_list');
  }

  // redundancy_factor - computed: false, optional: true, required: false
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

  // workflow_type - computed: true, optional: false, required: false
  public get workflowType() {
    return this.getStringAttribute('workflow_type');
  }

  // cluster_status - computed: false, optional: true, required: false
  private _clusterStatus = new DataNutanixFoundationCentralClusterDetailsClusterStatusOutputReference(this, "cluster_status");
  public get clusterStatus() {
    return this._clusterStatus;
  }
  public putClusterStatus(value: DataNutanixFoundationCentralClusterDetailsClusterStatus) {
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
  private _commonNetworkSettings = new DataNutanixFoundationCentralClusterDetailsCommonNetworkSettingsOutputReference(this, "common_network_settings");
  public get commonNetworkSettings() {
    return this._commonNetworkSettings;
  }
  public putCommonNetworkSettings(value: DataNutanixFoundationCentralClusterDetailsCommonNetworkSettings) {
    this._commonNetworkSettings.internalValue = value;
  }
  public resetCommonNetworkSettings() {
    this._commonNetworkSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNetworkSettingsInput() {
    return this._commonNetworkSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_external_ip: cdktf.stringToTerraform(this._clusterExternalIp),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_size: cdktf.numberToTerraform(this._clusterSize),
      id: cdktf.stringToTerraform(this._id),
      imaged_cluster_uuid: cdktf.stringToTerraform(this._imagedClusterUuid),
      redundancy_factor: cdktf.numberToTerraform(this._redundancyFactor),
      storage_node_count: cdktf.numberToTerraform(this._storageNodeCount),
      cluster_status: dataNutanixFoundationCentralClusterDetailsClusterStatusToTerraform(this._clusterStatus.internalValue),
      common_network_settings: dataNutanixFoundationCentralClusterDetailsCommonNetworkSettingsToTerraform(this._commonNetworkSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imaged_cluster_uuid: {
        value: cdktf.stringToHclTerraform(this._imagedClusterUuid),
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
      storage_node_count: {
        value: cdktf.numberToHclTerraform(this._storageNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_status: {
        value: dataNutanixFoundationCentralClusterDetailsClusterStatusToHclTerraform(this._clusterStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNutanixFoundationCentralClusterDetailsClusterStatusList",
      },
      common_network_settings: {
        value: dataNutanixFoundationCentralClusterDetailsCommonNetworkSettingsToHclTerraform(this._commonNetworkSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNutanixFoundationCentralClusterDetailsCommonNetworkSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
