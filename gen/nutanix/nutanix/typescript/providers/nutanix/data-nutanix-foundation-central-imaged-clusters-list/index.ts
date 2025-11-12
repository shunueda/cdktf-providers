// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_clusters_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixFoundationCentralImagedClustersListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_clusters_list#id DataNutanixFoundationCentralImagedClustersList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_clusters_list#length DataNutanixFoundationCentralImagedClustersList#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_clusters_list#offset DataNutanixFoundationCentralImagedClustersList#offset}
  */
  readonly offset?: number;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_clusters_list#filters DataNutanixFoundationCentralImagedClustersList#filters}
  */
  readonly filters?: DataNutanixFoundationCentralImagedClustersListFilters;
}
export interface DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusClusterProgressDetails {
}

export function dataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusClusterProgressDetailsToTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusClusterProgressDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusClusterProgressDetailsToHclTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusClusterProgressDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusClusterProgressDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusClusterProgressDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusClusterProgressDetails | undefined) {
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

export class DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusClusterProgressDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusClusterProgressDetailsOutputReference {
    return new DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusClusterProgressDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusNodeProgressDetails {
}

export function dataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusNodeProgressDetailsToTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusNodeProgressDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusNodeProgressDetailsToHclTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusNodeProgressDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusNodeProgressDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusNodeProgressDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusNodeProgressDetails | undefined) {
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

export class DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusNodeProgressDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusNodeProgressDetailsOutputReference {
    return new DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusNodeProgressDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatus {
}

export function dataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusToTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusToHclTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatus | undefined) {
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
  private _clusterProgressDetails = new DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusClusterProgressDetailsList(this, "cluster_progress_details", false);
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
  private _nodeProgressDetails = new DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusNodeProgressDetailsList(this, "node_progress_details", false);
  public get nodeProgressDetails() {
    return this._nodeProgressDetails;
  }
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusOutputReference {
    return new DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralImagedClustersListImagedClustersCommonNetworkSettings {
}

export function dataNutanixFoundationCentralImagedClustersListImagedClustersCommonNetworkSettingsToTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersCommonNetworkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralImagedClustersListImagedClustersCommonNetworkSettingsToHclTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersCommonNetworkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersCommonNetworkSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralImagedClustersListImagedClustersCommonNetworkSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedClustersListImagedClustersCommonNetworkSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cvm_dns_servers - computed: true, optional: false, required: false
  public get cvmDnsServers() {
    return this.getListAttribute('cvm_dns_servers');
  }

  // cvm_ntp_servers - computed: true, optional: false, required: false
  public get cvmNtpServers() {
    return this.getListAttribute('cvm_ntp_servers');
  }

  // hypervisor_dns_servers - computed: true, optional: false, required: false
  public get hypervisorDnsServers() {
    return this.getListAttribute('hypervisor_dns_servers');
  }

  // hypervisor_ntp_servers - computed: true, optional: false, required: false
  public get hypervisorNtpServers() {
    return this.getListAttribute('hypervisor_ntp_servers');
  }
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersCommonNetworkSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralImagedClustersListImagedClustersCommonNetworkSettingsOutputReference {
    return new DataNutanixFoundationCentralImagedClustersListImagedClustersCommonNetworkSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksNodes {
}

export function dataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksNodesToTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksNodesToHclTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksNodes | undefined) {
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

export class DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksNodesOutputReference {
    return new DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocks {
}

export function dataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksToTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksToHclTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocks | undefined) {
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
  private _nodes = new DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksOutputReference {
    return new DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigClusters {
}

export function dataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigClustersToTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigClustersToHclTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigClusters | undefined) {
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

export class DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigClustersOutputReference {
    return new DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigHypervisorIsos {
}

export function dataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigHypervisorIsosToTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigHypervisorIsos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigHypervisorIsosToHclTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigHypervisorIsos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigHypervisorIsosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigHypervisorIsos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigHypervisorIsos | undefined) {
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

export class DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigHypervisorIsosList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigHypervisorIsosOutputReference {
    return new DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigHypervisorIsosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigNosPackageUrl {
}

export function dataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigNosPackageUrlToTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigNosPackageUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigNosPackageUrlToHclTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigNosPackageUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigNosPackageUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigNosPackageUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigNosPackageUrl | undefined) {
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

export class DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigNosPackageUrlList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigNosPackageUrlOutputReference {
    return new DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigNosPackageUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfig {
}

export function dataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigToTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigToHclTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blocks - computed: true, optional: false, required: false
  private _blocks = new DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigClustersList(this, "clusters", false);
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
  private _hypervisorIsos = new DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigHypervisorIsosList(this, "hypervisor_isos", false);
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
  private _nosPackageUrl = new DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigNosPackageUrlList(this, "nos_package_url", false);
  public get nosPackageUrl() {
    return this._nosPackageUrl;
  }
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigOutputReference {
    return new DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralImagedClustersListImagedClusters {
}

export function dataNutanixFoundationCentralImagedClustersListImagedClustersToTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralImagedClustersListImagedClustersToHclTerraform(struct?: DataNutanixFoundationCentralImagedClustersListImagedClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralImagedClustersListImagedClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedClustersListImagedClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archived - computed: true, optional: false, required: false
  public get archived() {
    return this.getBooleanAttribute('archived');
  }

  // cluster_external_ip - computed: true, optional: false, required: false
  public get clusterExternalIp() {
    return this.getStringAttribute('cluster_external_ip');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_size - computed: true, optional: false, required: false
  public get clusterSize() {
    return this.getNumberAttribute('cluster_size');
  }

  // cluster_status - computed: true, optional: false, required: false
  private _clusterStatus = new DataNutanixFoundationCentralImagedClustersListImagedClustersClusterStatusList(this, "cluster_status", false);
  public get clusterStatus() {
    return this._clusterStatus;
  }

  // common_network_settings - computed: true, optional: false, required: false
  private _commonNetworkSettings = new DataNutanixFoundationCentralImagedClustersListImagedClustersCommonNetworkSettingsList(this, "common_network_settings", false);
  public get commonNetworkSettings() {
    return this._commonNetworkSettings;
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
  private _foundationInitConfig = new DataNutanixFoundationCentralImagedClustersListImagedClustersFoundationInitConfigList(this, "foundation_init_config", false);
  public get foundationInitConfig() {
    return this._foundationInitConfig;
  }

  // foundation_init_node_uuid - computed: true, optional: false, required: false
  public get foundationInitNodeUuid() {
    return this.getStringAttribute('foundation_init_node_uuid');
  }

  // imaged_cluster_uuid - computed: true, optional: false, required: false
  public get imagedClusterUuid() {
    return this.getStringAttribute('imaged_cluster_uuid');
  }

  // imaged_node_uuid_list - computed: true, optional: false, required: false
  public get imagedNodeUuidList() {
    return this.getListAttribute('imaged_node_uuid_list');
  }

  // redundancy_factor - computed: true, optional: false, required: false
  public get redundancyFactor() {
    return this.getNumberAttribute('redundancy_factor');
  }

  // storage_node_count - computed: true, optional: false, required: false
  public get storageNodeCount() {
    return this.getNumberAttribute('storage_node_count');
  }

  // workflow_type - computed: true, optional: false, required: false
  public get workflowType() {
    return this.getStringAttribute('workflow_type');
  }
}

export class DataNutanixFoundationCentralImagedClustersListImagedClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralImagedClustersListImagedClustersOutputReference {
    return new DataNutanixFoundationCentralImagedClustersListImagedClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralImagedClustersListMetadata {
}

export function dataNutanixFoundationCentralImagedClustersListMetadataToTerraform(struct?: DataNutanixFoundationCentralImagedClustersListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationCentralImagedClustersListMetadataToHclTerraform(struct?: DataNutanixFoundationCentralImagedClustersListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationCentralImagedClustersListMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationCentralImagedClustersListMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedClustersListMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getNumberAttribute('offset');
  }

  // total_matches - computed: true, optional: false, required: false
  public get totalMatches() {
    return this.getNumberAttribute('total_matches');
  }
}

export class DataNutanixFoundationCentralImagedClustersListMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationCentralImagedClustersListMetadataOutputReference {
    return new DataNutanixFoundationCentralImagedClustersListMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFoundationCentralImagedClustersListFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_clusters_list#archived DataNutanixFoundationCentralImagedClustersList#archived}
  */
  readonly archived?: boolean | cdktf.IResolvable;
}

export function dataNutanixFoundationCentralImagedClustersListFiltersToTerraform(struct?: DataNutanixFoundationCentralImagedClustersListFiltersOutputReference | DataNutanixFoundationCentralImagedClustersListFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archived: cdktf.booleanToTerraform(struct!.archived),
  }
}


export function dataNutanixFoundationCentralImagedClustersListFiltersToHclTerraform(struct?: DataNutanixFoundationCentralImagedClustersListFiltersOutputReference | DataNutanixFoundationCentralImagedClustersListFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archived: {
      value: cdktf.booleanToHclTerraform(struct!.archived),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNutanixFoundationCentralImagedClustersListFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNutanixFoundationCentralImagedClustersListFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archived !== undefined) {
      hasAnyValues = true;
      internalValueResult.archived = this._archived;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationCentralImagedClustersListFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archived = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archived = value.archived;
    }
  }

  // archived - computed: false, optional: true, required: false
  private _archived?: boolean | cdktf.IResolvable; 
  public get archived() {
    return this.getBooleanAttribute('archived');
  }
  public set archived(value: boolean | cdktf.IResolvable) {
    this._archived = value;
  }
  public resetArchived() {
    this._archived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedInput() {
    return this._archived;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_clusters_list nutanix_foundation_central_imaged_clusters_list}
*/
export class DataNutanixFoundationCentralImagedClustersList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_foundation_central_imaged_clusters_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixFoundationCentralImagedClustersList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixFoundationCentralImagedClustersList to import
  * @param importFromId The id of the existing DataNutanixFoundationCentralImagedClustersList that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_clusters_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixFoundationCentralImagedClustersList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_foundation_central_imaged_clusters_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_clusters_list nutanix_foundation_central_imaged_clusters_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixFoundationCentralImagedClustersListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixFoundationCentralImagedClustersListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_foundation_central_imaged_clusters_list',
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
    this._id = config.id;
    this._length = config.length;
    this._offset = config.offset;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // imaged_clusters - computed: true, optional: false, required: false
  private _imagedClusters = new DataNutanixFoundationCentralImagedClustersListImagedClustersList(this, "imaged_clusters", false);
  public get imagedClusters() {
    return this._imagedClusters;
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataNutanixFoundationCentralImagedClustersListMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataNutanixFoundationCentralImagedClustersListFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataNutanixFoundationCentralImagedClustersListFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      length: cdktf.numberToTerraform(this._length),
      offset: cdktf.numberToTerraform(this._offset),
      filters: dataNutanixFoundationCentralImagedClustersListFiltersToTerraform(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      length: {
        value: cdktf.numberToHclTerraform(this._length),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filters: {
        value: dataNutanixFoundationCentralImagedClustersListFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNutanixFoundationCentralImagedClustersListFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
