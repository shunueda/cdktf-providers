import * as cdktf from 'cdktf';
import { DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisList,
DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsList,
DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceList,
DataDnacenterPathTraceItemNetworkElementsInfoAccuracyListStructList,
DataDnacenterPathTraceItemNetworkElementsInfoDetailedStatusList,
DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsList,
DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceList,
DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectList,
DataDnacenterPathTraceItemDetailedStatusList,
DataDnacenterPathTraceItemNetworkElementsList } from './structs0'
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // vnid - computed: true, optional: false, required: false
  public get vnid() {
    return this.getStringAttribute('vnid');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_plane - computed: true, optional: false, required: false
  public get controlPlane() {
    return this.getStringAttribute('control_plane');
  }

  // data_packet_encapsulation - computed: true, optional: false, required: false
  public get dataPacketEncapsulation() {
    return this.getStringAttribute('data_packet_encapsulation');
  }

  // dest_ip - computed: true, optional: false, required: false
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // vxlan_info - computed: true, optional: false, required: false
  private _vxlanInfo = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // class_map_name - computed: true, optional: false, required: false
  public get classMapName() {
    return this.getStringAttribute('class_map_name');
  }

  // drop_rate - computed: true, optional: false, required: false
  public get dropRate() {
    return this.getNumberAttribute('drop_rate');
  }

  // num_bytes - computed: true, optional: false, required: false
  public get numBytes() {
    return this.getNumberAttribute('num_bytes');
  }

  // num_packets - computed: true, optional: false, required: false
  public get numPackets() {
    return this.getNumberAttribute('num_packets');
  }

  // offered_rate - computed: true, optional: false, required: false
  public get offeredRate() {
    return this.getNumberAttribute('offered_rate');
  }

  // queue_bandwidthbps - computed: true, optional: false, required: false
  public get queueBandwidthbps() {
    return this.getStringAttribute('queue_bandwidthbps');
  }

  // queue_depth - computed: true, optional: false, required: false
  public get queueDepth() {
    return this.getNumberAttribute('queue_depth');
  }

  // queue_no_buffer_drops - computed: true, optional: false, required: false
  public get queueNoBufferDrops() {
    return this.getNumberAttribute('queue_no_buffer_drops');
  }

  // queue_total_drops - computed: true, optional: false, required: false
  public get queueTotalDrops() {
    return this.getNumberAttribute('queue_total_drops');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterface {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
  public get interfaceStatistics() {
    return this._interfaceStatistics;
  }

  // interface_stats_collection - computed: true, optional: false, required: false
  public get interfaceStatsCollection() {
    return this.getStringAttribute('interface_stats_collection');
  }

  // interface_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get interfaceStatsCollectionFailureReason() {
    return this.getStringAttribute('interface_stats_collection_failure_reason');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path_overlay_info - computed: true, optional: false, required: false
  private _pathOverlayInfo = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatisticsList(this, "qos_statistics", false);
  public get qosStatistics() {
    return this._qosStatistics;
  }

  // qos_stats_collection - computed: true, optional: false, required: false
  public get qosStatsCollection() {
    return this.getStringAttribute('qos_stats_collection');
  }

  // qos_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get qosStatsCollectionFailureReason() {
    return this.getStringAttribute('qos_stats_collection_failure_reason');
  }

  // used_vlan - computed: true, optional: false, required: false
  public get usedVlan() {
    return this.getStringAttribute('used_vlan');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoIngressInterface {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoIngressInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // physical_interface - computed: true, optional: false, required: false
  private _physicalInterface = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceList(this, "physical_interface", false);
  public get physicalInterface() {
    return this._physicalInterface;
  }

  // virtual_interface - computed: true, optional: false, required: false
  private _virtualInterface = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceList(this, "virtual_interface", false);
  public get virtualInterface() {
    return this._virtualInterface;
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfoPerfMonitorStatistics {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoPerfMonitorStatisticsToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoPerfMonitorStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoPerfMonitorStatisticsToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfoPerfMonitorStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoPerfMonitorStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfoPerfMonitorStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfoPerfMonitorStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // byte_rate - computed: true, optional: false, required: false
  public get byteRate() {
    return this.getNumberAttribute('byte_rate');
  }

  // dest_ip_address - computed: true, optional: false, required: false
  public get destIpAddress() {
    return this.getStringAttribute('dest_ip_address');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // input_interface - computed: true, optional: false, required: false
  public get inputInterface() {
    return this.getStringAttribute('input_interface');
  }

  // ipv4_dsc_p - computed: true, optional: false, required: false
  public get ipv4DscP() {
    return this.getStringAttribute('ipv4_dsc_p');
  }

  // ipv4_ttl - computed: true, optional: false, required: false
  public get ipv4Ttl() {
    return this.getNumberAttribute('ipv4_ttl');
  }

  // output_interface - computed: true, optional: false, required: false
  public get outputInterface() {
    return this.getStringAttribute('output_interface');
  }

  // packet_bytes - computed: true, optional: false, required: false
  public get packetBytes() {
    return this.getNumberAttribute('packet_bytes');
  }

  // packet_count - computed: true, optional: false, required: false
  public get packetCount() {
    return this.getNumberAttribute('packet_count');
  }

  // packet_loss - computed: true, optional: false, required: false
  public get packetLoss() {
    return this.getNumberAttribute('packet_loss');
  }

  // packet_loss_percentage - computed: true, optional: false, required: false
  public get packetLossPercentage() {
    return this.getNumberAttribute('packet_loss_percentage');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // refreshed_at - computed: true, optional: false, required: false
  public get refreshedAt() {
    return this.getNumberAttribute('refreshed_at');
  }

  // rtp_jitter_max - computed: true, optional: false, required: false
  public get rtpJitterMax() {
    return this.getNumberAttribute('rtp_jitter_max');
  }

  // rtp_jitter_mean - computed: true, optional: false, required: false
  public get rtpJitterMean() {
    return this.getNumberAttribute('rtp_jitter_mean');
  }

  // rtp_jitter_min - computed: true, optional: false, required: false
  public get rtpJitterMin() {
    return this.getNumberAttribute('rtp_jitter_min');
  }

  // source_ip_address - computed: true, optional: false, required: false
  public get sourceIpAddress() {
    return this.getStringAttribute('source_ip_address');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoPerfMonitorStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoPerfMonitorStatisticsOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoPerfMonitorStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemNetworkElementsInfo {
}

export function dataDnacenterPathTraceItemNetworkElementsInfoToTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemNetworkElementsInfoToHclTerraform(struct?: DataDnacenterPathTraceItemNetworkElementsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemNetworkElementsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemNetworkElementsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemNetworkElementsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accuracy_list - computed: true, optional: false, required: false
  private _accuracyList = new DataDnacenterPathTraceItemNetworkElementsInfoAccuracyListStructList(this, "accuracy_list", false);
  public get accuracyList() {
    return this._accuracyList;
  }

  // detailed_status - computed: true, optional: false, required: false
  private _detailedStatus = new DataDnacenterPathTraceItemNetworkElementsInfoDetailedStatusList(this, "detailed_status", false);
  public get detailedStatus() {
    return this._detailedStatus;
  }

  // device_statistics - computed: true, optional: false, required: false
  private _deviceStatistics = new DataDnacenterPathTraceItemNetworkElementsInfoDeviceStatisticsList(this, "device_statistics", false);
  public get deviceStatistics() {
    return this._deviceStatistics;
  }

  // device_stats_collection - computed: true, optional: false, required: false
  public get deviceStatsCollection() {
    return this.getStringAttribute('device_stats_collection');
  }

  // device_stats_collection_failure_reason - computed: true, optional: false, required: false
  public get deviceStatsCollectionFailureReason() {
    return this.getStringAttribute('device_stats_collection_failure_reason');
  }

  // egress_interface - computed: true, optional: false, required: false
  private _egressInterface = new DataDnacenterPathTraceItemNetworkElementsInfoEgressInterfaceList(this, "egress_interface", false);
  public get egressInterface() {
    return this._egressInterface;
  }

  // flex_connect - computed: true, optional: false, required: false
  private _flexConnect = new DataDnacenterPathTraceItemNetworkElementsInfoFlexConnectList(this, "flex_connect", false);
  public get flexConnect() {
    return this._flexConnect;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_interface - computed: true, optional: false, required: false
  private _ingressInterface = new DataDnacenterPathTraceItemNetworkElementsInfoIngressInterfaceList(this, "ingress_interface", false);
  public get ingressInterface() {
    return this._ingressInterface;
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // link_information_source - computed: true, optional: false, required: false
  public get linkInformationSource() {
    return this.getStringAttribute('link_information_source');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // perf_mon_collection - computed: true, optional: false, required: false
  public get perfMonCollection() {
    return this.getStringAttribute('perf_mon_collection');
  }

  // perf_mon_collection_failure_reason - computed: true, optional: false, required: false
  public get perfMonCollectionFailureReason() {
    return this.getStringAttribute('perf_mon_collection_failure_reason');
  }

  // perf_monitor_statistics - computed: true, optional: false, required: false
  private _perfMonitorStatistics = new DataDnacenterPathTraceItemNetworkElementsInfoPerfMonitorStatisticsList(this, "perf_monitor_statistics", false);
  public get perfMonitorStatistics() {
    return this._perfMonitorStatistics;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // ssid - computed: true, optional: false, required: false
  public get ssid() {
    return this.getStringAttribute('ssid');
  }

  // tunnels - computed: true, optional: false, required: false
  public get tunnels() {
    return this.getListAttribute('tunnels');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // wlan_id - computed: true, optional: false, required: false
  public get wlanId() {
    return this.getStringAttribute('wlan_id');
  }
}

export class DataDnacenterPathTraceItemNetworkElementsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemNetworkElementsInfoOutputReference {
    return new DataDnacenterPathTraceItemNetworkElementsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItemRequest {
}

export function dataDnacenterPathTraceItemRequestToTerraform(struct?: DataDnacenterPathTraceItemRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemRequestToHclTerraform(struct?: DataDnacenterPathTraceItemRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItemRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItemRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_path - computed: true, optional: false, required: false
  public get controlPath() {
    return this.getStringAttribute('control_path');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // dest_ip - computed: true, optional: false, required: false
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inclusions - computed: true, optional: false, required: false
  public get inclusions() {
    return this.getListAttribute('inclusions');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }

  // periodic_refresh - computed: true, optional: false, required: false
  public get periodicRefresh() {
    return this.getStringAttribute('periodic_refresh');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataDnacenterPathTraceItemRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemRequestOutputReference {
    return new DataDnacenterPathTraceItemRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItem {
}

export function dataDnacenterPathTraceItemToTerraform(struct?: DataDnacenterPathTraceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemToHclTerraform(struct?: DataDnacenterPathTraceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detailed_status - computed: true, optional: false, required: false
  private _detailedStatus = new DataDnacenterPathTraceItemDetailedStatusList(this, "detailed_status", false);
  public get detailedStatus() {
    return this._detailedStatus;
  }

  // last_update - computed: true, optional: false, required: false
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }

  // network_elements - computed: true, optional: false, required: false
  private _networkElements = new DataDnacenterPathTraceItemNetworkElementsList(this, "network_elements", false);
  public get networkElements() {
    return this._networkElements;
  }

  // network_elements_info - computed: true, optional: false, required: false
  private _networkElementsInfo = new DataDnacenterPathTraceItemNetworkElementsInfoList(this, "network_elements_info", false);
  public get networkElementsInfo() {
    return this._networkElementsInfo;
  }

  // properties - computed: true, optional: false, required: false
  public get properties() {
    return this.getListAttribute('properties');
  }

  // request - computed: true, optional: false, required: false
  private _request = new DataDnacenterPathTraceItemRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
}

export class DataDnacenterPathTraceItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemOutputReference {
    return new DataDnacenterPathTraceItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterPathTraceItems {
}

export function dataDnacenterPathTraceItemsToTerraform(struct?: DataDnacenterPathTraceItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPathTraceItemsToHclTerraform(struct?: DataDnacenterPathTraceItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPathTraceItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPathTraceItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPathTraceItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_path - computed: true, optional: false, required: false
  public get controlPath() {
    return this.getStringAttribute('control_path');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // dest_ip - computed: true, optional: false, required: false
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inclusions - computed: true, optional: false, required: false
  public get inclusions() {
    return this.getListAttribute('inclusions');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }

  // periodic_refresh - computed: true, optional: false, required: false
  public get periodicRefresh() {
    return this.getStringAttribute('periodic_refresh');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataDnacenterPathTraceItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPathTraceItemsOutputReference {
    return new DataDnacenterPathTraceItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
