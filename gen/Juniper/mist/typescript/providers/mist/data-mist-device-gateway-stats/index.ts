// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/device_gateway_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistDeviceGatewayStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Duration like 7d, 2w
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/device_gateway_stats#duration DataMistDeviceGatewayStats#duration}
  */
  readonly duration?: string;
  /**
  * End datetime, can be epoch or relative time like -1d, -2h; now if not specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/device_gateway_stats#end DataMistDeviceGatewayStats#end}
  */
  readonly end?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/device_gateway_stats#mac DataMistDeviceGatewayStats#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/device_gateway_stats#org_id DataMistDeviceGatewayStats#org_id}
  */
  readonly orgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/device_gateway_stats#site_id DataMistDeviceGatewayStats#site_id}
  */
  readonly siteId?: string;
  /**
  * Start datetime, can be epoch or relative time like -1d, -1w; -1d if not specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/device_gateway_stats#start DataMistDeviceGatewayStats#start}
  */
  readonly start?: number;
  /**
  * enum: `all`, `connected`, `disconnected`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/device_gateway_stats#status DataMistDeviceGatewayStats#status}
  */
  readonly status?: string;
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyModules {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyModulesToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyModulesToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyModulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyModules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyModules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // num_aps - computed: true, optional: false, required: false
  public get numAps() {
    return this.getNumberAttribute('num_aps');
  }

  // num_aps_with_switch_redundancy - computed: true, optional: false, required: false
  public get numApsWithSwitchRedundancy() {
    return this.getNumberAttribute('num_aps_with_switch_redundancy');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyModulesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyModulesOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyModulesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancy {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // modules - computed: true, optional: false, required: false
  private _modules = new DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyModulesMap(this, "modules");
  public get modules() {
    return this._modules;
  }

  // num_aps - computed: true, optional: false, required: false
  public get numAps() {
    return this.getNumberAttribute('num_aps');
  }

  // num_aps_with_switch_redundancy - computed: true, optional: false, required: false
  public get numApsWithSwitchRedundancy() {
    return this.getNumberAttribute('num_aps_with_switch_redundancy');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsArpTableStats {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsArpTableStatsToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsArpTableStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsArpTableStatsToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsArpTableStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsArpTableStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsArpTableStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsArpTableStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arp_table_count - computed: true, optional: false, required: false
  public get arpTableCount() {
    return this.getNumberAttribute('arp_table_count');
  }

  // max_entries_supported - computed: true, optional: false, required: false
  public get maxEntriesSupported() {
    return this.getNumberAttribute('max_entries_supported');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsBgpPeers {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsBgpPeersToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsBgpPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsBgpPeersToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsBgpPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsBgpPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsBgpPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsBgpPeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evpn_overlay - computed: true, optional: false, required: false
  public get evpnOverlay() {
    return this.getBooleanAttribute('evpn_overlay');
  }

  // for_overlay - computed: true, optional: false, required: false
  public get forOverlay() {
    return this.getBooleanAttribute('for_overlay');
  }

  // local_as - computed: true, optional: false, required: false
  public get localAs() {
    return this.getStringAttribute('local_as');
  }

  // neighbor - computed: true, optional: false, required: false
  public get neighbor() {
    return this.getStringAttribute('neighbor');
  }

  // neighbor_as - computed: true, optional: false, required: false
  public get neighborAs() {
    return this.getStringAttribute('neighbor_as');
  }

  // neighbor_mac - computed: true, optional: false, required: false
  public get neighborMac() {
    return this.getStringAttribute('neighbor_mac');
  }

  // node - computed: true, optional: false, required: false
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }

  // rx_pkts - computed: true, optional: false, required: false
  public get rxPkts() {
    return this.getNumberAttribute('rx_pkts');
  }

  // rx_routes - computed: true, optional: false, required: false
  public get rxRoutes() {
    return this.getNumberAttribute('rx_routes');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }

  // tx_pkts - computed: true, optional: false, required: false
  public get txPkts() {
    return this.getNumberAttribute('tx_pkts');
  }

  // tx_routes - computed: true, optional: false, required: false
  public get txRoutes() {
    return this.getNumberAttribute('tx_routes');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getBooleanAttribute('up');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getNumberAttribute('uptime');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsBgpPeersList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsBgpPeersOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsBgpPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigControlLinkInfo {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigControlLinkInfoToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigControlLinkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigControlLinkInfoToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigControlLinkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigControlLinkInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigControlLinkInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigControlLinkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigEthernetConnection {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigEthernetConnectionToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigEthernetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigEthernetConnectionToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigEthernetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigEthernetConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigEthernetConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigEthernetConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigEthernetConnectionList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigEthernetConnectionOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigEthernetConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigFabricLinkInfo {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigFabricLinkInfoToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigFabricLinkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigFabricLinkInfoToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigFabricLinkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigFabricLinkInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigFabricLinkInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigFabricLinkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_plane_notified_status - computed: true, optional: false, required: false
  public get dataPlaneNotifiedStatus() {
    return this.getStringAttribute('data_plane_notified_status');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getListAttribute('interface');
  }

  // internal_status - computed: true, optional: false, required: false
  public get internalStatus() {
    return this.getStringAttribute('internal_status');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigRedundancyGroupInformation {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigRedundancyGroupInformationToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigRedundancyGroupInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigRedundancyGroupInformationToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigRedundancyGroupInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigRedundancyGroupInformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigRedundancyGroupInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigRedundancyGroupInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // monitoring_failure - computed: true, optional: false, required: false
  public get monitoringFailure() {
    return this.getStringAttribute('monitoring_failure');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigRedundancyGroupInformationList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigRedundancyGroupInformationOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigRedundancyGroupInformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfig {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfig | undefined) {
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

  // control_link_info - computed: true, optional: false, required: false
  private _controlLinkInfo = new DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigControlLinkInfoOutputReference(this, "control_link_info");
  public get controlLinkInfo() {
    return this._controlLinkInfo;
  }

  // ethernet_connection - computed: true, optional: false, required: false
  private _ethernetConnection = new DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigEthernetConnectionList(this, "ethernet_connection", false);
  public get ethernetConnection() {
    return this._ethernetConnection;
  }

  // fabric_link_info - computed: true, optional: false, required: false
  private _fabricLinkInfo = new DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigFabricLinkInfoOutputReference(this, "fabric_link_info");
  public get fabricLinkInfo() {
    return this._fabricLinkInfo;
  }

  // last_status_change_reason - computed: true, optional: false, required: false
  public get lastStatusChangeReason() {
    return this.getStringAttribute('last_status_change_reason');
  }

  // operational - computed: true, optional: false, required: false
  public get operational() {
    return this.getStringAttribute('operational');
  }

  // primary_node_health - computed: true, optional: false, required: false
  public get primaryNodeHealth() {
    return this.getStringAttribute('primary_node_health');
  }

  // redundancy_group_information - computed: true, optional: false, required: false
  private _redundancyGroupInformation = new DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigRedundancyGroupInformationList(this, "redundancy_group_information", false);
  public get redundancyGroupInformation() {
    return this._redundancyGroupInformation;
  }

  // secondary_node_health - computed: true, optional: false, required: false
  public get secondaryNodeHealth() {
    return this.getStringAttribute('secondary_node_health');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsClusterStat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsClusterStatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsClusterStatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsClusterStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsClusterStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsClusterStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsCpu2Stat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsCpu2StatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsCpu2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsCpu2StatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsCpu2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsCpu2StatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsCpu2Stat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsCpu2Stat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle - computed: true, optional: false, required: false
  public get idle() {
    return this.getNumberAttribute('idle');
  }

  // interrupt - computed: true, optional: false, required: false
  public get interrupt() {
    return this.getNumberAttribute('interrupt');
  }

  // load_avg - computed: true, optional: false, required: false
  public get loadAvg() {
    return this.getNumberListAttribute('load_avg');
  }

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getNumberAttribute('system');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getNumberAttribute('user');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsCpuStat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsCpuStatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsCpuStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsCpuStatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsCpuStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsCpuStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsCpuStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsCpuStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle - computed: true, optional: false, required: false
  public get idle() {
    return this.getNumberAttribute('idle');
  }

  // interrupt - computed: true, optional: false, required: false
  public get interrupt() {
    return this.getNumberAttribute('interrupt');
  }

  // load_avg - computed: true, optional: false, required: false
  public get loadAvg() {
    return this.getNumberListAttribute('load_avg');
  }

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getNumberAttribute('system');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getNumberAttribute('user');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpd2Stat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsDhcpd2StatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpd2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsDhcpd2StatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpd2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpd2StatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpd2Stat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpd2Stat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // num_ips - computed: true, optional: false, required: false
  public get numIps() {
    return this.getNumberAttribute('num_ips');
  }

  // num_leased - computed: true, optional: false, required: false
  public get numLeased() {
    return this.getNumberAttribute('num_leased');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpd2StatMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpd2StatOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpd2StatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpdStat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsDhcpdStatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpdStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsDhcpdStatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpdStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpdStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpdStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpdStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // num_ips - computed: true, optional: false, required: false
  public get numIps() {
    return this.getNumberAttribute('num_ips');
  }

  // num_leased - computed: true, optional: false, required: false
  public get numLeased() {
    return this.getNumberAttribute('num_leased');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpdStatMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpdStatOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpdStatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsFwupdate {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsFwupdateToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsFwupdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsFwupdateToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsFwupdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsFwupdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsFwupdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsFwupdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_id - computed: true, optional: false, required: false
  public get statusId() {
    return this.getNumberAttribute('status_id');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }

  // will_retry - computed: true, optional: false, required: false
  public get willRetry() {
    return this.getBooleanAttribute('will_retry');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatServpInfo {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatServpInfoToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatServpInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatServpInfoToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatServpInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatServpInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatServpInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatServpInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getStringAttribute('asn');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }

  // org - computed: true, optional: false, required: false
  public get org() {
    return this.getStringAttribute('org');
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsIf2Stat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsIf2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsIf2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsIf2Stat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsIf2Stat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_mode - computed: true, optional: false, required: false
  public get addressMode() {
    return this.getStringAttribute('address_mode');
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getListAttribute('ips');
  }

  // nat_addresses - computed: true, optional: false, required: false
  public get natAddresses() {
    return this.getListAttribute('nat_addresses');
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // port_usage - computed: true, optional: false, required: false
  public get portUsage() {
    return this.getStringAttribute('port_usage');
  }

  // redundancy_state - computed: true, optional: false, required: false
  public get redundancyState() {
    return this.getStringAttribute('redundancy_state');
  }

  // rx_bytes - computed: true, optional: false, required: false
  public get rxBytes() {
    return this.getNumberAttribute('rx_bytes');
  }

  // rx_pkts - computed: true, optional: false, required: false
  public get rxPkts() {
    return this.getNumberAttribute('rx_pkts');
  }

  // servp_info - computed: true, optional: false, required: false
  private _servpInfo = new DataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatServpInfoOutputReference(this, "servp_info");
  public get servpInfo() {
    return this._servpInfo;
  }

  // tx_bytes - computed: true, optional: false, required: false
  public get txBytes() {
    return this.getNumberAttribute('tx_bytes');
  }

  // tx_pkts - computed: true, optional: false, required: false
  public get txPkts() {
    return this.getNumberAttribute('tx_pkts');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getBooleanAttribute('up');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // wan_name - computed: true, optional: false, required: false
  public get wanName() {
    return this.getStringAttribute('wan_name');
  }

  // wan_type - computed: true, optional: false, required: false
  public get wanType() {
    return this.getStringAttribute('wan_type');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsIfStatServpInfo {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsIfStatServpInfoToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsIfStatServpInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsIfStatServpInfoToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsIfStatServpInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsIfStatServpInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsIfStatServpInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsIfStatServpInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getStringAttribute('asn');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }

  // org - computed: true, optional: false, required: false
  public get org() {
    return this.getStringAttribute('org');
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsIfStat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsIfStatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsIfStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsIfStatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsIfStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsIfStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsIfStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsIfStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_mode - computed: true, optional: false, required: false
  public get addressMode() {
    return this.getStringAttribute('address_mode');
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getListAttribute('ips');
  }

  // nat_addresses - computed: true, optional: false, required: false
  public get natAddresses() {
    return this.getListAttribute('nat_addresses');
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // port_usage - computed: true, optional: false, required: false
  public get portUsage() {
    return this.getStringAttribute('port_usage');
  }

  // redundancy_state - computed: true, optional: false, required: false
  public get redundancyState() {
    return this.getStringAttribute('redundancy_state');
  }

  // rx_bytes - computed: true, optional: false, required: false
  public get rxBytes() {
    return this.getNumberAttribute('rx_bytes');
  }

  // rx_pkts - computed: true, optional: false, required: false
  public get rxPkts() {
    return this.getNumberAttribute('rx_pkts');
  }

  // servp_info - computed: true, optional: false, required: false
  private _servpInfo = new DataMistDeviceGatewayStatsDeviceGatewayStatsIfStatServpInfoOutputReference(this, "servp_info");
  public get servpInfo() {
    return this._servpInfo;
  }

  // tx_bytes - computed: true, optional: false, required: false
  public get txBytes() {
    return this.getNumberAttribute('tx_bytes');
  }

  // tx_pkts - computed: true, optional: false, required: false
  public get txPkts() {
    return this.getNumberAttribute('tx_pkts');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getBooleanAttribute('up');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // wan_name - computed: true, optional: false, required: false
  public get wanName() {
    return this.getStringAttribute('wan_name');
  }

  // wan_type - computed: true, optional: false, required: false
  public get wanType() {
    return this.getStringAttribute('wan_type');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsIfStatMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistDeviceGatewayStatsDeviceGatewayStatsIfStatOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsIfStatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsIp2Stat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsIp2StatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsIp2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsIp2StatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsIp2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsIp2StatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsIp2Stat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsIp2Stat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp_server - computed: true, optional: false, required: false
  public get dhcpServer() {
    return this.getStringAttribute('dhcp_server');
  }

  // dns - computed: true, optional: false, required: false
  public get dns() {
    return this.getListAttribute('dns');
  }

  // dns_suffix - computed: true, optional: false, required: false
  public get dnsSuffix() {
    return this.getListAttribute('dns_suffix');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // gateway6 - computed: true, optional: false, required: false
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ip6 - computed: true, optional: false, required: false
  public get ip6() {
    return this.getStringAttribute('ip6');
  }

  // ips - computed: true, optional: false, required: false
  private _ips = new cdktf.StringMap(this, "ips");
  public get ips() {
    return this._ips;
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // netmask6 - computed: true, optional: false, required: false
  public get netmask6() {
    return this.getStringAttribute('netmask6');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsIpStat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsIpStatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsIpStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsIpStatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsIpStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsIpStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsIpStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsIpStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp_server - computed: true, optional: false, required: false
  public get dhcpServer() {
    return this.getStringAttribute('dhcp_server');
  }

  // dns - computed: true, optional: false, required: false
  public get dns() {
    return this.getListAttribute('dns');
  }

  // dns_suffix - computed: true, optional: false, required: false
  public get dnsSuffix() {
    return this.getListAttribute('dns_suffix');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // gateway6 - computed: true, optional: false, required: false
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ip6 - computed: true, optional: false, required: false
  public get ip6() {
    return this.getStringAttribute('ip6');
  }

  // ips - computed: true, optional: false, required: false
  private _ips = new cdktf.StringMap(this, "ips");
  public get ips() {
    return this._ips;
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // netmask6 - computed: true, optional: false, required: false
  public get netmask6() {
    return this.getStringAttribute('netmask6');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsMemory2Stat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsMemory2StatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsMemory2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsMemory2StatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsMemory2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsMemory2StatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsMemory2Stat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsMemory2Stat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getNumberAttribute('usage');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsMemoryStat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsMemoryStatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsMemoryStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsMemoryStatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsMemoryStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsMemoryStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsMemoryStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsMemoryStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getNumberAttribute('usage');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatFans {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatFansToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatFans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatFansToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatFans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatFansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatFans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatFans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // airflow - computed: true, optional: false, required: false
  public get airflow() {
    return this.getStringAttribute('airflow');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatFansList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatFansOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatFansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPoe {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPoeToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPoe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPoeToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPoe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPoeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPoe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPoe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_power - computed: true, optional: false, required: false
  public get maxPower() {
    return this.getNumberAttribute('max_power');
  }

  // power_draw - computed: true, optional: false, required: false
  public get powerDraw() {
    return this.getNumberAttribute('power_draw');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPsus {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPsusToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPsus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPsusToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPsus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPsusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPsus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPsus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPsusList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPsusOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPsusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatTemperatures {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatTemperaturesToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatTemperatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatTemperaturesToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatTemperatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatTemperaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatTemperatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatTemperatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // celsius - computed: true, optional: false, required: false
  public get celsius() {
    return this.getNumberAttribute('celsius');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatTemperaturesList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatTemperaturesOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatTemperaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatVcLinks {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatVcLinksToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatVcLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatVcLinksToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatVcLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatVcLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatVcLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatVcLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // neighbor_module_idx - computed: true, optional: false, required: false
  public get neighborModuleIdx() {
    return this.getNumberAttribute('neighbor_module_idx');
  }

  // neighbor_port_id - computed: true, optional: false, required: false
  public get neighborPortId() {
    return this.getStringAttribute('neighbor_port_id');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatVcLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatVcLinksOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatVcLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsModule2Stat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsModule2Stat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsModule2Stat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_version - computed: true, optional: false, required: false
  public get backupVersion() {
    return this.getStringAttribute('backup_version');
  }

  // bios_version - computed: true, optional: false, required: false
  public get biosVersion() {
    return this.getStringAttribute('bios_version');
  }

  // cpld_version - computed: true, optional: false, required: false
  public get cpldVersion() {
    return this.getStringAttribute('cpld_version');
  }

  // fans - computed: true, optional: false, required: false
  private _fans = new DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatFansList(this, "fans", false);
  public get fans() {
    return this._fans;
  }

  // fpga_version - computed: true, optional: false, required: false
  public get fpgaVersion() {
    return this.getStringAttribute('fpga_version');
  }

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getNumberAttribute('last_seen');
  }

  // locating - computed: true, optional: false, required: false
  public get locating() {
    return this.getBooleanAttribute('locating');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // optics_cpld_version - computed: true, optional: false, required: false
  public get opticsCpldVersion() {
    return this.getStringAttribute('optics_cpld_version');
  }

  // pending_version - computed: true, optional: false, required: false
  public get pendingVersion() {
    return this.getStringAttribute('pending_version');
  }

  // poe - computed: true, optional: false, required: false
  private _poe = new DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPoeOutputReference(this, "poe");
  public get poe() {
    return this._poe;
  }

  // poe_version - computed: true, optional: false, required: false
  public get poeVersion() {
    return this.getStringAttribute('poe_version');
  }

  // power_cpld_version - computed: true, optional: false, required: false
  public get powerCpldVersion() {
    return this.getStringAttribute('power_cpld_version');
  }

  // psus - computed: true, optional: false, required: false
  private _psus = new DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatPsusList(this, "psus", false);
  public get psus() {
    return this._psus;
  }

  // re_fpga_version - computed: true, optional: false, required: false
  public get reFpgaVersion() {
    return this.getStringAttribute('re_fpga_version');
  }

  // recovery_version - computed: true, optional: false, required: false
  public get recoveryVersion() {
    return this.getStringAttribute('recovery_version');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // temperatures - computed: true, optional: false, required: false
  private _temperatures = new DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatTemperaturesList(this, "temperatures", false);
  public get temperatures() {
    return this._temperatures;
  }

  // tmc_fpga_version - computed: true, optional: false, required: false
  public get tmcFpgaVersion() {
    return this.getStringAttribute('tmc_fpga_version');
  }

  // uboot_version - computed: true, optional: false, required: false
  public get ubootVersion() {
    return this.getStringAttribute('uboot_version');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getNumberAttribute('uptime');
  }

  // vc_links - computed: true, optional: false, required: false
  private _vcLinks = new DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatVcLinksList(this, "vc_links", false);
  public get vcLinks() {
    return this._vcLinks;
  }

  // vc_mode - computed: true, optional: false, required: false
  public get vcMode() {
    return this.getStringAttribute('vc_mode');
  }

  // vc_role - computed: true, optional: false, required: false
  public get vcRole() {
    return this.getStringAttribute('vc_role');
  }

  // vc_state - computed: true, optional: false, required: false
  public get vcState() {
    return this.getStringAttribute('vc_state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatFans {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatFansToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatFans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatFansToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatFans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatFansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatFans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatFans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // airflow - computed: true, optional: false, required: false
  public get airflow() {
    return this.getStringAttribute('airflow');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatFansList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatFansOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatFansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPoe {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPoeToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPoe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPoeToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPoe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPoeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPoe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPoe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_power - computed: true, optional: false, required: false
  public get maxPower() {
    return this.getNumberAttribute('max_power');
  }

  // power_draw - computed: true, optional: false, required: false
  public get powerDraw() {
    return this.getNumberAttribute('power_draw');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPsus {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPsusToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPsus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPsusToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPsus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPsusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPsus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPsus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPsusList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPsusOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPsusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatTemperatures {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatTemperaturesToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatTemperatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatTemperaturesToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatTemperatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatTemperaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatTemperatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatTemperatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // celsius - computed: true, optional: false, required: false
  public get celsius() {
    return this.getNumberAttribute('celsius');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatTemperaturesList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatTemperaturesOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatTemperaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatVcLinks {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatVcLinksToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatVcLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatVcLinksToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatVcLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatVcLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatVcLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatVcLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // neighbor_module_idx - computed: true, optional: false, required: false
  public get neighborModuleIdx() {
    return this.getNumberAttribute('neighbor_module_idx');
  }

  // neighbor_port_id - computed: true, optional: false, required: false
  public get neighborPortId() {
    return this.getStringAttribute('neighbor_port_id');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatVcLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatVcLinksOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatVcLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_version - computed: true, optional: false, required: false
  public get backupVersion() {
    return this.getStringAttribute('backup_version');
  }

  // bios_version - computed: true, optional: false, required: false
  public get biosVersion() {
    return this.getStringAttribute('bios_version');
  }

  // cpld_version - computed: true, optional: false, required: false
  public get cpldVersion() {
    return this.getStringAttribute('cpld_version');
  }

  // fans - computed: true, optional: false, required: false
  private _fans = new DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatFansList(this, "fans", false);
  public get fans() {
    return this._fans;
  }

  // fpga_version - computed: true, optional: false, required: false
  public get fpgaVersion() {
    return this.getStringAttribute('fpga_version');
  }

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getNumberAttribute('last_seen');
  }

  // locating - computed: true, optional: false, required: false
  public get locating() {
    return this.getBooleanAttribute('locating');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // optics_cpld_version - computed: true, optional: false, required: false
  public get opticsCpldVersion() {
    return this.getStringAttribute('optics_cpld_version');
  }

  // pending_version - computed: true, optional: false, required: false
  public get pendingVersion() {
    return this.getStringAttribute('pending_version');
  }

  // poe - computed: true, optional: false, required: false
  private _poe = new DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPoeOutputReference(this, "poe");
  public get poe() {
    return this._poe;
  }

  // poe_version - computed: true, optional: false, required: false
  public get poeVersion() {
    return this.getStringAttribute('poe_version');
  }

  // power_cpld_version - computed: true, optional: false, required: false
  public get powerCpldVersion() {
    return this.getStringAttribute('power_cpld_version');
  }

  // psus - computed: true, optional: false, required: false
  private _psus = new DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatPsusList(this, "psus", false);
  public get psus() {
    return this._psus;
  }

  // re_fpga_version - computed: true, optional: false, required: false
  public get reFpgaVersion() {
    return this.getStringAttribute('re_fpga_version');
  }

  // recovery_version - computed: true, optional: false, required: false
  public get recoveryVersion() {
    return this.getStringAttribute('recovery_version');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // temperatures - computed: true, optional: false, required: false
  private _temperatures = new DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatTemperaturesList(this, "temperatures", false);
  public get temperatures() {
    return this._temperatures;
  }

  // tmc_fpga_version - computed: true, optional: false, required: false
  public get tmcFpgaVersion() {
    return this.getStringAttribute('tmc_fpga_version');
  }

  // uboot_version - computed: true, optional: false, required: false
  public get ubootVersion() {
    return this.getStringAttribute('uboot_version');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getNumberAttribute('uptime');
  }

  // vc_links - computed: true, optional: false, required: false
  private _vcLinks = new DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatVcLinksList(this, "vc_links", false);
  public get vcLinks() {
    return this._vcLinks;
  }

  // vc_mode - computed: true, optional: false, required: false
  public get vcMode() {
    return this.getStringAttribute('vc_mode');
  }

  // vc_role - computed: true, optional: false, required: false
  public get vcRole() {
    return this.getStringAttribute('vc_role');
  }

  // vc_state - computed: true, optional: false, required: false
  public get vcState() {
    return this.getStringAttribute('vc_state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsPorts {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsPortsToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsPortsToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // auth_state - computed: true, optional: false, required: false
  public get authState() {
    return this.getStringAttribute('auth_state');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // for_site - computed: true, optional: false, required: false
  public get forSite() {
    return this.getBooleanAttribute('for_site');
  }

  // full_duplex - computed: true, optional: false, required: false
  public get fullDuplex() {
    return this.getBooleanAttribute('full_duplex');
  }

  // jitter - computed: true, optional: false, required: false
  public get jitter() {
    return this.getNumberAttribute('jitter');
  }

  // latency - computed: true, optional: false, required: false
  public get latency() {
    return this.getNumberAttribute('latency');
  }

  // loss - computed: true, optional: false, required: false
  public get loss() {
    return this.getNumberAttribute('loss');
  }

  // lte_iccid - computed: true, optional: false, required: false
  public get lteIccid() {
    return this.getStringAttribute('lte_iccid');
  }

  // lte_imei - computed: true, optional: false, required: false
  public get lteImei() {
    return this.getStringAttribute('lte_imei');
  }

  // lte_imsi - computed: true, optional: false, required: false
  public get lteImsi() {
    return this.getStringAttribute('lte_imsi');
  }

  // mac_count - computed: true, optional: false, required: false
  public get macCount() {
    return this.getNumberAttribute('mac_count');
  }

  // mac_limit - computed: true, optional: false, required: false
  public get macLimit() {
    return this.getNumberAttribute('mac_limit');
  }

  // neighbor_mac - computed: true, optional: false, required: false
  public get neighborMac() {
    return this.getStringAttribute('neighbor_mac');
  }

  // neighbor_port_desc - computed: true, optional: false, required: false
  public get neighborPortDesc() {
    return this.getStringAttribute('neighbor_port_desc');
  }

  // neighbor_system_name - computed: true, optional: false, required: false
  public get neighborSystemName() {
    return this.getStringAttribute('neighbor_system_name');
  }

  // poe_disabled - computed: true, optional: false, required: false
  public get poeDisabled() {
    return this.getBooleanAttribute('poe_disabled');
  }

  // poe_mode - computed: true, optional: false, required: false
  public get poeMode() {
    return this.getStringAttribute('poe_mode');
  }

  // poe_on - computed: true, optional: false, required: false
  public get poeOn() {
    return this.getBooleanAttribute('poe_on');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // port_mac - computed: true, optional: false, required: false
  public get portMac() {
    return this.getStringAttribute('port_mac');
  }

  // port_usage - computed: true, optional: false, required: false
  public get portUsage() {
    return this.getStringAttribute('port_usage');
  }

  // power_draw - computed: true, optional: false, required: false
  public get powerDraw() {
    return this.getNumberAttribute('power_draw');
  }

  // rx_bcast_pkts - computed: true, optional: false, required: false
  public get rxBcastPkts() {
    return this.getNumberAttribute('rx_bcast_pkts');
  }

  // rx_bps - computed: true, optional: false, required: false
  public get rxBps() {
    return this.getNumberAttribute('rx_bps');
  }

  // rx_bytes - computed: true, optional: false, required: false
  public get rxBytes() {
    return this.getNumberAttribute('rx_bytes');
  }

  // rx_errors - computed: true, optional: false, required: false
  public get rxErrors() {
    return this.getNumberAttribute('rx_errors');
  }

  // rx_mcast_pkts - computed: true, optional: false, required: false
  public get rxMcastPkts() {
    return this.getNumberAttribute('rx_mcast_pkts');
  }

  // rx_pkts - computed: true, optional: false, required: false
  public get rxPkts() {
    return this.getNumberAttribute('rx_pkts');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getNumberAttribute('speed');
  }

  // stp_role - computed: true, optional: false, required: false
  public get stpRole() {
    return this.getStringAttribute('stp_role');
  }

  // stp_state - computed: true, optional: false, required: false
  public get stpState() {
    return this.getStringAttribute('stp_state');
  }

  // tx_bcast_pkts - computed: true, optional: false, required: false
  public get txBcastPkts() {
    return this.getNumberAttribute('tx_bcast_pkts');
  }

  // tx_bps - computed: true, optional: false, required: false
  public get txBps() {
    return this.getNumberAttribute('tx_bps');
  }

  // tx_bytes - computed: true, optional: false, required: false
  public get txBytes() {
    return this.getNumberAttribute('tx_bytes');
  }

  // tx_errors - computed: true, optional: false, required: false
  public get txErrors() {
    return this.getNumberAttribute('tx_errors');
  }

  // tx_mcast_pkts - computed: true, optional: false, required: false
  public get txMcastPkts() {
    return this.getNumberAttribute('tx_mcast_pkts');
  }

  // tx_pkts - computed: true, optional: false, required: false
  public get txPkts() {
    return this.getNumberAttribute('tx_pkts');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unconfigured - computed: true, optional: false, required: false
  public get unconfigured() {
    return this.getBooleanAttribute('unconfigured');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getBooleanAttribute('up');
  }

  // xcvr_model - computed: true, optional: false, required: false
  public get xcvrModel() {
    return this.getStringAttribute('xcvr_model');
  }

  // xcvr_part_number - computed: true, optional: false, required: false
  public get xcvrPartNumber() {
    return this.getStringAttribute('xcvr_part_number');
  }

  // xcvr_serial - computed: true, optional: false, required: false
  public get xcvrSerial() {
    return this.getStringAttribute('xcvr_serial');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsPortsOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsRouteSummaryStats {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsRouteSummaryStatsToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsRouteSummaryStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsRouteSummaryStatsToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsRouteSummaryStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsRouteSummaryStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsRouteSummaryStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsRouteSummaryStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fib_routes - computed: true, optional: false, required: false
  public get fibRoutes() {
    return this.getNumberAttribute('fib_routes');
  }

  // max_unicast_routes_supported - computed: true, optional: false, required: false
  public get maxUnicastRoutesSupported() {
    return this.getNumberAttribute('max_unicast_routes_supported');
  }

  // rib_routes - computed: true, optional: false, required: false
  public get ribRoutes() {
    return this.getNumberAttribute('rib_routes');
  }

  // total_routes - computed: true, optional: false, required: false
  public get totalRoutes() {
    return this.getNumberAttribute('total_routes');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsService2Stat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsService2StatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsService2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsService2StatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsService2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsService2StatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsService2Stat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsService2Stat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ash_version - computed: true, optional: false, required: false
  public get ashVersion() {
    return this.getStringAttribute('ash_version');
  }

  // cia_version - computed: true, optional: false, required: false
  public get ciaVersion() {
    return this.getStringAttribute('cia_version');
  }

  // ember_version - computed: true, optional: false, required: false
  public get emberVersion() {
    return this.getStringAttribute('ember_version');
  }

  // ipsec_client_version - computed: true, optional: false, required: false
  public get ipsecClientVersion() {
    return this.getStringAttribute('ipsec_client_version');
  }

  // mist_agent_version - computed: true, optional: false, required: false
  public get mistAgentVersion() {
    return this.getStringAttribute('mist_agent_version');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // testing_tools_version - computed: true, optional: false, required: false
  public get testingToolsVersion() {
    return this.getStringAttribute('testing_tools_version');
  }

  // wheeljack_version - computed: true, optional: false, required: false
  public get wheeljackVersion() {
    return this.getStringAttribute('wheeljack_version');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsService2StatMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistDeviceGatewayStatsDeviceGatewayStatsService2StatOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsService2StatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ash_version - computed: true, optional: false, required: false
  public get ashVersion() {
    return this.getStringAttribute('ash_version');
  }

  // cia_version - computed: true, optional: false, required: false
  public get ciaVersion() {
    return this.getStringAttribute('cia_version');
  }

  // ember_version - computed: true, optional: false, required: false
  public get emberVersion() {
    return this.getStringAttribute('ember_version');
  }

  // ipsec_client_version - computed: true, optional: false, required: false
  public get ipsecClientVersion() {
    return this.getStringAttribute('ipsec_client_version');
  }

  // mist_agent_version - computed: true, optional: false, required: false
  public get mistAgentVersion() {
    return this.getStringAttribute('mist_agent_version');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // testing_tools_version - computed: true, optional: false, required: false
  public get testingToolsVersion() {
    return this.getStringAttribute('testing_tools_version');
  }

  // wheeljack_version - computed: true, optional: false, required: false
  public get wheeljackVersion() {
    return this.getStringAttribute('wheeljack_version');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatus {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatusToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatusToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // appid_install_result - computed: true, optional: false, required: false
  public get appidInstallResult() {
    return this.getStringAttribute('appid_install_result');
  }

  // appid_install_timestamp - computed: true, optional: false, required: false
  public get appidInstallTimestamp() {
    return this.getStringAttribute('appid_install_timestamp');
  }

  // appid_status - computed: true, optional: false, required: false
  public get appidStatus() {
    return this.getStringAttribute('appid_status');
  }

  // appid_version - computed: true, optional: false, required: false
  public get appidVersion() {
    return this.getNumberAttribute('appid_version');
  }

  // ewf_status - computed: true, optional: false, required: false
  public get ewfStatus() {
    return this.getStringAttribute('ewf_status');
  }

  // idp_install_result - computed: true, optional: false, required: false
  public get idpInstallResult() {
    return this.getStringAttribute('idp_install_result');
  }

  // idp_install_timestamp - computed: true, optional: false, required: false
  public get idpInstallTimestamp() {
    return this.getStringAttribute('idp_install_timestamp');
  }

  // idp_policy - computed: true, optional: false, required: false
  public get idpPolicy() {
    return this.getStringAttribute('idp_policy');
  }

  // idp_status - computed: true, optional: false, required: false
  public get idpStatus() {
    return this.getStringAttribute('idp_status');
  }

  // idp_update_timestamp - computed: true, optional: false, required: false
  public get idpUpdateTimestamp() {
    return this.getStringAttribute('idp_update_timestamp');
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsSpu2Stat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsSpu2StatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsSpu2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsSpu2StatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsSpu2Stat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsSpu2StatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsSpu2Stat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsSpu2Stat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // spu_cpu - computed: true, optional: false, required: false
  public get spuCpu() {
    return this.getNumberAttribute('spu_cpu');
  }

  // spu_current_session - computed: true, optional: false, required: false
  public get spuCurrentSession() {
    return this.getNumberAttribute('spu_current_session');
  }

  // spu_max_session - computed: true, optional: false, required: false
  public get spuMaxSession() {
    return this.getNumberAttribute('spu_max_session');
  }

  // spu_memory - computed: true, optional: false, required: false
  public get spuMemory() {
    return this.getNumberAttribute('spu_memory');
  }

  // spu_pending_session - computed: true, optional: false, required: false
  public get spuPendingSession() {
    return this.getNumberAttribute('spu_pending_session');
  }

  // spu_valid_session - computed: true, optional: false, required: false
  public get spuValidSession() {
    return this.getNumberAttribute('spu_valid_session');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsSpu2StatList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsSpu2StatOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsSpu2StatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsSpuStat {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsSpuStatToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsSpuStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsSpuStatToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsSpuStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsSpuStatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsSpuStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsSpuStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // spu_cpu - computed: true, optional: false, required: false
  public get spuCpu() {
    return this.getNumberAttribute('spu_cpu');
  }

  // spu_current_session - computed: true, optional: false, required: false
  public get spuCurrentSession() {
    return this.getNumberAttribute('spu_current_session');
  }

  // spu_max_session - computed: true, optional: false, required: false
  public get spuMaxSession() {
    return this.getNumberAttribute('spu_max_session');
  }

  // spu_memory - computed: true, optional: false, required: false
  public get spuMemory() {
    return this.getNumberAttribute('spu_memory');
  }

  // spu_pending_session - computed: true, optional: false, required: false
  public get spuPendingSession() {
    return this.getNumberAttribute('spu_pending_session');
  }

  // spu_valid_session - computed: true, optional: false, required: false
  public get spuValidSession() {
    return this.getNumberAttribute('spu_valid_session');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsSpuStatList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsSpuStatOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsSpuStatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsTunnels {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsTunnelsToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsTunnelsToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsTunnelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsTunnels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsTunnels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_algo - computed: true, optional: false, required: false
  public get authAlgo() {
    return this.getStringAttribute('auth_algo');
  }

  // encrypt_algo - computed: true, optional: false, required: false
  public get encryptAlgo() {
    return this.getStringAttribute('encrypt_algo');
  }

  // ike_version - computed: true, optional: false, required: false
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // last_event - computed: true, optional: false, required: false
  public get lastEvent() {
    return this.getStringAttribute('last_event');
  }

  // last_flapped - computed: true, optional: false, required: false
  public get lastFlapped() {
    return this.getNumberAttribute('last_flapped');
  }

  // node - computed: true, optional: false, required: false
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }

  // peer_host - computed: true, optional: false, required: false
  public get peerHost() {
    return this.getStringAttribute('peer_host');
  }

  // peer_ip - computed: true, optional: false, required: false
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // rx_bytes - computed: true, optional: false, required: false
  public get rxBytes() {
    return this.getNumberAttribute('rx_bytes');
  }

  // rx_pkts - computed: true, optional: false, required: false
  public get rxPkts() {
    return this.getNumberAttribute('rx_pkts');
  }

  // tunnel_name - computed: true, optional: false, required: false
  public get tunnelName() {
    return this.getStringAttribute('tunnel_name');
  }

  // tx_bytes - computed: true, optional: false, required: false
  public get txBytes() {
    return this.getNumberAttribute('tx_bytes');
  }

  // tx_pkts - computed: true, optional: false, required: false
  public get txPkts() {
    return this.getNumberAttribute('tx_pkts');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getBooleanAttribute('up');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getNumberAttribute('uptime');
  }

  // wan_name - computed: true, optional: false, required: false
  public get wanName() {
    return this.getStringAttribute('wan_name');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsTunnelsList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsTunnelsOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsTunnelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStatsVpnPeers {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsVpnPeersToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsVpnPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsVpnPeersToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStatsVpnPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsVpnPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStatsVpnPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStatsVpnPeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getNumberAttribute('last_seen');
  }

  // latency - computed: true, optional: false, required: false
  public get latency() {
    return this.getNumberAttribute('latency');
  }

  // mos - computed: true, optional: false, required: false
  public get mos() {
    return this.getNumberAttribute('mos');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // peer_mac - computed: true, optional: false, required: false
  public get peerMac() {
    return this.getStringAttribute('peer_mac');
  }

  // peer_port_id - computed: true, optional: false, required: false
  public get peerPortId() {
    return this.getStringAttribute('peer_port_id');
  }

  // peer_router_name - computed: true, optional: false, required: false
  public get peerRouterName() {
    return this.getStringAttribute('peer_router_name');
  }

  // peer_site_id - computed: true, optional: false, required: false
  public get peerSiteId() {
    return this.getStringAttribute('peer_site_id');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // router_name - computed: true, optional: false, required: false
  public get routerName() {
    return this.getStringAttribute('router_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getBooleanAttribute('up');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getNumberAttribute('uptime');
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsVpnPeersList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsVpnPeersOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsVpnPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceGatewayStatsDeviceGatewayStats {
}

export function dataMistDeviceGatewayStatsDeviceGatewayStatsToTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceGatewayStatsDeviceGatewayStatsToHclTerraform(struct?: DataMistDeviceGatewayStatsDeviceGatewayStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceGatewayStatsDeviceGatewayStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceGatewayStatsDeviceGatewayStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_redundancy - computed: true, optional: false, required: false
  private _apRedundancy = new DataMistDeviceGatewayStatsDeviceGatewayStatsApRedundancyOutputReference(this, "ap_redundancy");
  public get apRedundancy() {
    return this._apRedundancy;
  }

  // arp_table_stats - computed: true, optional: false, required: false
  private _arpTableStats = new DataMistDeviceGatewayStatsDeviceGatewayStatsArpTableStatsOutputReference(this, "arp_table_stats");
  public get arpTableStats() {
    return this._arpTableStats;
  }

  // bgp_peers - computed: true, optional: false, required: false
  private _bgpPeers = new DataMistDeviceGatewayStatsDeviceGatewayStatsBgpPeersList(this, "bgp_peers", false);
  public get bgpPeers() {
    return this._bgpPeers;
  }

  // cert_expiry - computed: true, optional: false, required: false
  public get certExpiry() {
    return this.getNumberAttribute('cert_expiry');
  }

  // cluster_config - computed: true, optional: false, required: false
  private _clusterConfig = new DataMistDeviceGatewayStatsDeviceGatewayStatsClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }

  // cluster_stat - computed: true, optional: false, required: false
  private _clusterStat = new DataMistDeviceGatewayStatsDeviceGatewayStatsClusterStatOutputReference(this, "cluster_stat");
  public get clusterStat() {
    return this._clusterStat;
  }

  // conductor_name - computed: true, optional: false, required: false
  public get conductorName() {
    return this.getStringAttribute('conductor_name');
  }

  // config_status - computed: true, optional: false, required: false
  public get configStatus() {
    return this.getStringAttribute('config_status');
  }

  // cpu2_stat - computed: true, optional: false, required: false
  private _cpu2Stat = new DataMistDeviceGatewayStatsDeviceGatewayStatsCpu2StatOutputReference(this, "cpu2_stat");
  public get cpu2Stat() {
    return this._cpu2Stat;
  }

  // cpu_stat - computed: true, optional: false, required: false
  private _cpuStat = new DataMistDeviceGatewayStatsDeviceGatewayStatsCpuStatOutputReference(this, "cpu_stat");
  public get cpuStat() {
    return this._cpuStat;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }

  // deviceprofile_id - computed: true, optional: false, required: false
  public get deviceprofileId() {
    return this.getStringAttribute('deviceprofile_id');
  }

  // dhcpd2_stat - computed: true, optional: false, required: false
  private _dhcpd2Stat = new DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpd2StatMap(this, "dhcpd2_stat");
  public get dhcpd2Stat() {
    return this._dhcpd2Stat;
  }

  // dhcpd_stat - computed: true, optional: false, required: false
  private _dhcpdStat = new DataMistDeviceGatewayStatsDeviceGatewayStatsDhcpdStatMap(this, "dhcpd_stat");
  public get dhcpdStat() {
    return this._dhcpdStat;
  }

  // ext_ip - computed: true, optional: false, required: false
  public get extIp() {
    return this.getStringAttribute('ext_ip');
  }

  // fwupdate - computed: true, optional: false, required: false
  private _fwupdate = new DataMistDeviceGatewayStatsDeviceGatewayStatsFwupdateOutputReference(this, "fwupdate");
  public get fwupdate() {
    return this._fwupdate;
  }

  // has_pcap - computed: true, optional: false, required: false
  public get hasPcap() {
    return this.getBooleanAttribute('has_pcap');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // if2_stat - computed: true, optional: false, required: false
  private _if2Stat = new DataMistDeviceGatewayStatsDeviceGatewayStatsIf2StatMap(this, "if2_stat");
  public get if2Stat() {
    return this._if2Stat;
  }

  // if_stat - computed: true, optional: false, required: false
  private _ifStat = new DataMistDeviceGatewayStatsDeviceGatewayStatsIfStatMap(this, "if_stat");
  public get ifStat() {
    return this._ifStat;
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ip2_stat - computed: true, optional: false, required: false
  private _ip2Stat = new DataMistDeviceGatewayStatsDeviceGatewayStatsIp2StatOutputReference(this, "ip2_stat");
  public get ip2Stat() {
    return this._ip2Stat;
  }

  // ip_stat - computed: true, optional: false, required: false
  private _ipStat = new DataMistDeviceGatewayStatsDeviceGatewayStatsIpStatOutputReference(this, "ip_stat");
  public get ipStat() {
    return this._ipStat;
  }

  // is_ha - computed: true, optional: false, required: false
  public get isHa() {
    return this.getBooleanAttribute('is_ha');
  }

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getNumberAttribute('last_seen');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // map_id - computed: true, optional: false, required: false
  public get mapId() {
    return this.getStringAttribute('map_id');
  }

  // memory2_stat - computed: true, optional: false, required: false
  private _memory2Stat = new DataMistDeviceGatewayStatsDeviceGatewayStatsMemory2StatOutputReference(this, "memory2_stat");
  public get memory2Stat() {
    return this._memory2Stat;
  }

  // memory_stat - computed: true, optional: false, required: false
  private _memoryStat = new DataMistDeviceGatewayStatsDeviceGatewayStatsMemoryStatOutputReference(this, "memory_stat");
  public get memoryStat() {
    return this._memoryStat;
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getNumberAttribute('modified_time');
  }

  // module2_stat - computed: true, optional: false, required: false
  private _module2Stat = new DataMistDeviceGatewayStatsDeviceGatewayStatsModule2StatList(this, "module2_stat", false);
  public get module2Stat() {
    return this._module2Stat;
  }

  // module_stat - computed: true, optional: false, required: false
  private _moduleStat = new DataMistDeviceGatewayStatsDeviceGatewayStatsModuleStatList(this, "module_stat", false);
  public get moduleStat() {
    return this._moduleStat;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataMistDeviceGatewayStatsDeviceGatewayStatsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // route_summary_stats - computed: true, optional: false, required: false
  private _routeSummaryStats = new DataMistDeviceGatewayStatsDeviceGatewayStatsRouteSummaryStatsOutputReference(this, "route_summary_stats");
  public get routeSummaryStats() {
    return this._routeSummaryStats;
  }

  // router_name - computed: true, optional: false, required: false
  public get routerName() {
    return this.getStringAttribute('router_name');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // service2_stat - computed: true, optional: false, required: false
  private _service2Stat = new DataMistDeviceGatewayStatsDeviceGatewayStatsService2StatMap(this, "service2_stat");
  public get service2Stat() {
    return this._service2Stat;
  }

  // service_stat - computed: true, optional: false, required: false
  private _serviceStat = new DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatMap(this, "service_stat");
  public get serviceStat() {
    return this._serviceStat;
  }

  // service_status - computed: true, optional: false, required: false
  private _serviceStatus = new DataMistDeviceGatewayStatsDeviceGatewayStatsServiceStatusOutputReference(this, "service_status");
  public get serviceStatus() {
    return this._serviceStatus;
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // spu2_stat - computed: true, optional: false, required: false
  private _spu2Stat = new DataMistDeviceGatewayStatsDeviceGatewayStatsSpu2StatList(this, "spu2_stat", false);
  public get spu2Stat() {
    return this._spu2Stat;
  }

  // spu_stat - computed: true, optional: false, required: false
  private _spuStat = new DataMistDeviceGatewayStatsDeviceGatewayStatsSpuStatList(this, "spu_stat", false);
  public get spuStat() {
    return this._spuStat;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tunnels - computed: true, optional: false, required: false
  private _tunnels = new DataMistDeviceGatewayStatsDeviceGatewayStatsTunnelsList(this, "tunnels", false);
  public get tunnels() {
    return this._tunnels;
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getNumberAttribute('uptime');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpn_peers - computed: true, optional: false, required: false
  private _vpnPeers = new DataMistDeviceGatewayStatsDeviceGatewayStatsVpnPeersList(this, "vpn_peers", false);
  public get vpnPeers() {
    return this._vpnPeers;
  }
}

export class DataMistDeviceGatewayStatsDeviceGatewayStatsList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceGatewayStatsDeviceGatewayStatsOutputReference {
    return new DataMistDeviceGatewayStatsDeviceGatewayStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/device_gateway_stats mist_device_gateway_stats}
*/
export class DataMistDeviceGatewayStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_device_gateway_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistDeviceGatewayStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistDeviceGatewayStats to import
  * @param importFromId The id of the existing DataMistDeviceGatewayStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/device_gateway_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistDeviceGatewayStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_device_gateway_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/device_gateway_stats mist_device_gateway_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistDeviceGatewayStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMistDeviceGatewayStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_device_gateway_stats',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._duration = config.duration;
    this._end = config.end;
    this._mac = config.mac;
    this._orgId = config.orgId;
    this._siteId = config.siteId;
    this._start = config.start;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_gateway_stats - computed: true, optional: false, required: false
  private _deviceGatewayStats = new DataMistDeviceGatewayStatsDeviceGatewayStatsList(this, "device_gateway_stats", true);
  public get deviceGatewayStats() {
    return this._deviceGatewayStats;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duration: cdktf.stringToTerraform(this._duration),
      end: cdktf.numberToTerraform(this._end),
      mac: cdktf.stringToTerraform(this._mac),
      org_id: cdktf.stringToTerraform(this._orgId),
      site_id: cdktf.stringToTerraform(this._siteId),
      start: cdktf.numberToTerraform(this._start),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end: {
        value: cdktf.numberToHclTerraform(this._end),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start: {
        value: cdktf.numberToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
