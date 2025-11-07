import * as cdktf from 'cdktf';
import { PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisList,
PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsList,
PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceList,
PathTraceItemNetworkElementsInfoAccuracyListStructList,
PathTraceItemNetworkElementsInfoDetailedStatusList,
PathTraceItemNetworkElementsInfoDeviceStatisticsList,
PathTraceItemNetworkElementsInfoEgressInterfaceList,
PathTraceItemNetworkElementsInfoFlexConnectList,
PathTraceItemDetailedStatusList,
PathTraceItemNetworkElementsList } from './structs0'
export interface PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo {
}

export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfo | undefined) {
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

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfo {
}

export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfo | undefined) {
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
  private _vxlanInfo = new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoVxlanInfoList(this, "vxlan_info", false);
  public get vxlanInfo() {
    return this._vxlanInfo;
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatistics {
}

export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatisticsToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatistics | undefined) {
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

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatisticsOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterface {
}

export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_analysis - computed: true, optional: false, required: false
  private _aclAnalysis = new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceAclAnalysisList(this, "acl_analysis", false);
  public get aclAnalysis() {
    return this._aclAnalysis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_statistics - computed: true, optional: false, required: false
  private _interfaceStatistics = new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceInterfaceStatisticsList(this, "interface_statistics", false);
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
  private _pathOverlayInfo = new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfacePathOverlayInfoList(this, "path_overlay_info", false);
  public get pathOverlayInfo() {
    return this._pathOverlayInfo;
  }

  // qos_statistics - computed: true, optional: false, required: false
  private _qosStatistics = new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceQosStatisticsList(this, "qos_statistics", false);
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

export class PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoIngressInterface {
}

export function pathTraceItemNetworkElementsInfoIngressInterfaceToTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoIngressInterfaceToHclTerraform(struct?: PathTraceItemNetworkElementsInfoIngressInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoIngressInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoIngressInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // physical_interface - computed: true, optional: false, required: false
  private _physicalInterface = new PathTraceItemNetworkElementsInfoIngressInterfacePhysicalInterfaceList(this, "physical_interface", false);
  public get physicalInterface() {
    return this._physicalInterface;
  }

  // virtual_interface - computed: true, optional: false, required: false
  private _virtualInterface = new PathTraceItemNetworkElementsInfoIngressInterfaceVirtualInterfaceList(this, "virtual_interface", false);
  public get virtualInterface() {
    return this._virtualInterface;
  }
}

export class PathTraceItemNetworkElementsInfoIngressInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoIngressInterfaceOutputReference {
    return new PathTraceItemNetworkElementsInfoIngressInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfoPerfMonitorStatistics {
}

export function pathTraceItemNetworkElementsInfoPerfMonitorStatisticsToTerraform(struct?: PathTraceItemNetworkElementsInfoPerfMonitorStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoPerfMonitorStatisticsToHclTerraform(struct?: PathTraceItemNetworkElementsInfoPerfMonitorStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoPerfMonitorStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfoPerfMonitorStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfoPerfMonitorStatistics | undefined) {
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

export class PathTraceItemNetworkElementsInfoPerfMonitorStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoPerfMonitorStatisticsOutputReference {
    return new PathTraceItemNetworkElementsInfoPerfMonitorStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemNetworkElementsInfo {
}

export function pathTraceItemNetworkElementsInfoToTerraform(struct?: PathTraceItemNetworkElementsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemNetworkElementsInfoToHclTerraform(struct?: PathTraceItemNetworkElementsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemNetworkElementsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemNetworkElementsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemNetworkElementsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accuracy_list - computed: true, optional: false, required: false
  private _accuracyList = new PathTraceItemNetworkElementsInfoAccuracyListStructList(this, "accuracy_list", false);
  public get accuracyList() {
    return this._accuracyList;
  }

  // detailed_status - computed: true, optional: false, required: false
  private _detailedStatus = new PathTraceItemNetworkElementsInfoDetailedStatusList(this, "detailed_status", false);
  public get detailedStatus() {
    return this._detailedStatus;
  }

  // device_statistics - computed: true, optional: false, required: false
  private _deviceStatistics = new PathTraceItemNetworkElementsInfoDeviceStatisticsList(this, "device_statistics", false);
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
  private _egressInterface = new PathTraceItemNetworkElementsInfoEgressInterfaceList(this, "egress_interface", false);
  public get egressInterface() {
    return this._egressInterface;
  }

  // flex_connect - computed: true, optional: false, required: false
  private _flexConnect = new PathTraceItemNetworkElementsInfoFlexConnectList(this, "flex_connect", false);
  public get flexConnect() {
    return this._flexConnect;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_interface - computed: true, optional: false, required: false
  private _ingressInterface = new PathTraceItemNetworkElementsInfoIngressInterfaceList(this, "ingress_interface", false);
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
  private _perfMonitorStatistics = new PathTraceItemNetworkElementsInfoPerfMonitorStatisticsList(this, "perf_monitor_statistics", false);
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

export class PathTraceItemNetworkElementsInfoList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemNetworkElementsInfoOutputReference {
    return new PathTraceItemNetworkElementsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItemRequest {
}

export function pathTraceItemRequestToTerraform(struct?: PathTraceItemRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemRequestToHclTerraform(struct?: PathTraceItemRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItemRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItemRequest | undefined) {
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

export class PathTraceItemRequestList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemRequestOutputReference {
    return new PathTraceItemRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceItem {
}

export function pathTraceItemToTerraform(struct?: PathTraceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pathTraceItemToHclTerraform(struct?: PathTraceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PathTraceItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detailed_status - computed: true, optional: false, required: false
  private _detailedStatus = new PathTraceItemDetailedStatusList(this, "detailed_status", false);
  public get detailedStatus() {
    return this._detailedStatus;
  }

  // last_update - computed: true, optional: false, required: false
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }

  // network_elements - computed: true, optional: false, required: false
  private _networkElements = new PathTraceItemNetworkElementsList(this, "network_elements", false);
  public get networkElements() {
    return this._networkElements;
  }

  // network_elements_info - computed: true, optional: false, required: false
  private _networkElementsInfo = new PathTraceItemNetworkElementsInfoList(this, "network_elements_info", false);
  public get networkElementsInfo() {
    return this._networkElementsInfo;
  }

  // properties - computed: true, optional: false, required: false
  public get properties() {
    return this.getListAttribute('properties');
  }

  // request - computed: true, optional: false, required: false
  private _request = new PathTraceItemRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
}

export class PathTraceItemList extends cdktf.ComplexList {

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
  public get(index: number): PathTraceItemOutputReference {
    return new PathTraceItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathTraceParameters {
  /**
  * Control path tracing
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/path_trace#control_path PathTrace#control_path}
  */
  readonly controlPath?: string;
  /**
  * Destination IP address
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/path_trace#dest_ip PathTrace#dest_ip}
  */
  readonly destIp?: string;
  /**
  * Destination Port
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/path_trace#dest_port PathTrace#dest_port}
  */
  readonly destPort?: string;
  /**
  * flowAnalysisId path parameter. Flow analysis request id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/path_trace#flow_analysis_id PathTrace#flow_analysis_id}
  */
  readonly flowAnalysisId: string;
  /**
  * Subset of {INTERFACE-STATS, QOS-STATS, DEVICE-STATS, PERFORMANCE-STATS, ACL-TRACE}
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/path_trace#inclusions PathTrace#inclusions}
  */
  readonly inclusions?: string[];
  /**
  * Periodic refresh of path for every 30 sec
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/path_trace#periodic_refresh PathTrace#periodic_refresh}
  */
  readonly periodicRefresh?: string;
  /**
  * Protocol
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/path_trace#protocol PathTrace#protocol}
  */
  readonly protocol?: string;
  /**
  * Source IP address
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/path_trace#source_ip PathTrace#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Source Port
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/path_trace#source_port PathTrace#source_port}
  */
  readonly sourcePort?: string;
}

export function pathTraceParametersToTerraform(struct?: PathTraceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_path: cdktf.stringToTerraform(struct!.controlPath),
    dest_ip: cdktf.stringToTerraform(struct!.destIp),
    dest_port: cdktf.stringToTerraform(struct!.destPort),
    flow_analysis_id: cdktf.stringToTerraform(struct!.flowAnalysisId),
    inclusions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inclusions),
    periodic_refresh: cdktf.stringToTerraform(struct!.periodicRefresh),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}


export function pathTraceParametersToHclTerraform(struct?: PathTraceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_path: {
      value: cdktf.stringToHclTerraform(struct!.controlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_ip: {
      value: cdktf.stringToHclTerraform(struct!.destIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_port: {
      value: cdktf.stringToHclTerraform(struct!.destPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_analysis_id: {
      value: cdktf.stringToHclTerraform(struct!.flowAnalysisId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inclusions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    periodic_refresh: {
      value: cdktf.stringToHclTerraform(struct!.periodicRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathTraceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PathTraceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPath = this._controlPath;
    }
    if (this._destIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIp = this._destIp;
    }
    if (this._destPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPort = this._destPort;
    }
    if (this._flowAnalysisId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowAnalysisId = this._flowAnalysisId;
    }
    if (this._inclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusions = this._inclusions;
    }
    if (this._periodicRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodicRefresh = this._periodicRefresh;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathTraceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlPath = undefined;
      this._destIp = undefined;
      this._destPort = undefined;
      this._flowAnalysisId = undefined;
      this._inclusions = undefined;
      this._periodicRefresh = undefined;
      this._protocol = undefined;
      this._sourceIp = undefined;
      this._sourcePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlPath = value.controlPath;
      this._destIp = value.destIp;
      this._destPort = value.destPort;
      this._flowAnalysisId = value.flowAnalysisId;
      this._inclusions = value.inclusions;
      this._periodicRefresh = value.periodicRefresh;
      this._protocol = value.protocol;
      this._sourceIp = value.sourceIp;
      this._sourcePort = value.sourcePort;
    }
  }

  // control_path - computed: true, optional: true, required: false
  private _controlPath?: string; 
  public get controlPath() {
    return this.getStringAttribute('control_path');
  }
  public set controlPath(value: string) {
    this._controlPath = value;
  }
  public resetControlPath() {
    this._controlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPathInput() {
    return this._controlPath;
  }

  // dest_ip - computed: true, optional: true, required: false
  private _destIp?: string; 
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }
  public set destIp(value: string) {
    this._destIp = value;
  }
  public resetDestIp() {
    this._destIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpInput() {
    return this._destIp;
  }

  // dest_port - computed: true, optional: true, required: false
  private _destPort?: string; 
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }
  public set destPort(value: string) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
  }

  // flow_analysis_id - computed: false, optional: false, required: true
  private _flowAnalysisId?: string; 
  public get flowAnalysisId() {
    return this.getStringAttribute('flow_analysis_id');
  }
  public set flowAnalysisId(value: string) {
    this._flowAnalysisId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowAnalysisIdInput() {
    return this._flowAnalysisId;
  }

  // inclusions - computed: true, optional: true, required: false
  private _inclusions?: string[]; 
  public get inclusions() {
    return this.getListAttribute('inclusions');
  }
  public set inclusions(value: string[]) {
    this._inclusions = value;
  }
  public resetInclusions() {
    this._inclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionsInput() {
    return this._inclusions;
  }

  // periodic_refresh - computed: true, optional: true, required: false
  private _periodicRefresh?: string; 
  public get periodicRefresh() {
    return this.getStringAttribute('periodic_refresh');
  }
  public set periodicRefresh(value: string) {
    this._periodicRefresh = value;
  }
  public resetPeriodicRefresh() {
    this._periodicRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicRefreshInput() {
    return this._periodicRefresh;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_port - computed: true, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}

export class PathTraceParametersList extends cdktf.ComplexList {
  public internalValue? : PathTraceParameters[] | cdktf.IResolvable

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
  public get(index: number): PathTraceParametersOutputReference {
    return new PathTraceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
