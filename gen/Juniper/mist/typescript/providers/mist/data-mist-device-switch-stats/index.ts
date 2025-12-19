// https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/device_switch_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistDeviceSwitchStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Duration like 7d, 2w
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/device_switch_stats#duration DataMistDeviceSwitchStats#duration}
  */
  readonly duration?: string;
  /**
  * End time (epoch timestamp in seconds, or relative string like "-1d", "-2h", "now")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/device_switch_stats#end DataMistDeviceSwitchStats#end}
  */
  readonly end?: string;
  /**
  * If `evpn_unused`==`true`, find EVPN eligible switches which don’t belong to any EVPN Topology yet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/device_switch_stats#evpn_unused DataMistDeviceSwitchStats#evpn_unused}
  */
  readonly evpnUnused?: string;
  /**
  * EVPN Topology ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/device_switch_stats#evpntopo_id DataMistDeviceSwitchStats#evpntopo_id}
  */
  readonly evpntopoId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/device_switch_stats#mac DataMistDeviceSwitchStats#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/device_switch_stats#org_id DataMistDeviceSwitchStats#org_id}
  */
  readonly orgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/device_switch_stats#site_id DataMistDeviceSwitchStats#site_id}
  */
  readonly siteId?: string;
  /**
  * Start time (epoch timestamp in seconds, or relative string like "-1d", "-1w")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/device_switch_stats#start DataMistDeviceSwitchStats#start}
  */
  readonly start?: string;
  /**
  * enum: `all`, `connected`, `disconnected`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/device_switch_stats#status DataMistDeviceSwitchStats#status}
  */
  readonly status?: string;
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyModules {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyModulesToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyModulesToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyModulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyModules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyModules | undefined) {
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

export class DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyModulesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyModulesOutputReference {
    return new DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyModulesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancy {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // modules - computed: true, optional: false, required: false
  private _modules = new DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyModulesMap(this, "modules");
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
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsArpTableStats {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsArpTableStatsToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsArpTableStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsArpTableStatsToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsArpTableStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsArpTableStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsArpTableStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsArpTableStats | undefined) {
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
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsAutoUpgradeStat {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsAutoUpgradeStatToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsAutoUpgradeStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsAutoUpgradeStatToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsAutoUpgradeStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsAutoUpgradeStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsAutoUpgradeStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsAutoUpgradeStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lastcheck - computed: true, optional: false, required: false
  public get lastcheck() {
    return this.getNumberAttribute('lastcheck');
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsClients {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsClientsToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsClientsToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_mac - computed: true, optional: false, required: false
  public get deviceMac() {
    return this.getStringAttribute('device_mac');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsClientsList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceSwitchStatsDeviceSwitchStatsClientsOutputReference {
    return new DataMistDeviceSwitchStatsDeviceSwitchStatsClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsClientsStatsTotal {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsClientsStatsTotalToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsClientsStatsTotal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsClientsStatsTotalToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsClientsStatsTotal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsClientsStatsTotalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsClientsStatsTotal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsClientsStatsTotal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // num_aps - computed: true, optional: false, required: false
  public get numAps() {
    return this.getNumberListAttribute('num_aps');
  }

  // num_wired_clients - computed: true, optional: false, required: false
  public get numWiredClients() {
    return this.getNumberAttribute('num_wired_clients');
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsClientsStats {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsClientsStatsToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsClientsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsClientsStatsToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsClientsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsClientsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsClientsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsClientsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // total - computed: true, optional: false, required: false
  private _total = new DataMistDeviceSwitchStatsDeviceSwitchStatsClientsStatsTotalOutputReference(this, "total");
  public get total() {
    return this._total;
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsCpuStat {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsCpuStatToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsCpuStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsCpuStatToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsCpuStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsCpuStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsCpuStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsCpuStat | undefined) {
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

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getNumberAttribute('usage');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getNumberAttribute('user');
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsDhcpdStat {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsDhcpdStatToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsDhcpdStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsDhcpdStatToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsDhcpdStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsDhcpdStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsDhcpdStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsDhcpdStat | undefined) {
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

export class DataMistDeviceSwitchStatsDeviceSwitchStatsDhcpdStatMap extends cdktf.ComplexMap {

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
  public get(key: string): DataMistDeviceSwitchStatsDeviceSwitchStatsDhcpdStatOutputReference {
    return new DataMistDeviceSwitchStatsDeviceSwitchStatsDhcpdStatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsFwupdate {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsFwupdateToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsFwupdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsFwupdateToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsFwupdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsFwupdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsFwupdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsFwupdate | undefined) {
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
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsIfStatServpInfo {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsIfStatServpInfoToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsIfStatServpInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsIfStatServpInfoToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsIfStatServpInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsIfStatServpInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsIfStatServpInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsIfStatServpInfo | undefined) {
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
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsIfStat {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsIfStatToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsIfStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsIfStatToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsIfStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsIfStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsIfStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsIfStat | undefined) {
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
  private _servpInfo = new DataMistDeviceSwitchStatsDeviceSwitchStatsIfStatServpInfoOutputReference(this, "servp_info");
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

export class DataMistDeviceSwitchStatsDeviceSwitchStatsIfStatMap extends cdktf.ComplexMap {

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
  public get(key: string): DataMistDeviceSwitchStatsDeviceSwitchStatsIfStatOutputReference {
    return new DataMistDeviceSwitchStatsDeviceSwitchStatsIfStatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsIpStat {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsIpStatToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsIpStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsIpStatToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsIpStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsIpStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsIpStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsIpStat | undefined) {
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
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsLastTrouble {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsLastTroubleToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsLastTrouble): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsLastTroubleToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsLastTrouble): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsLastTroubleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsLastTrouble | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsLastTrouble | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsMacTableStats {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsMacTableStatsToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsMacTableStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsMacTableStatsToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsMacTableStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsMacTableStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsMacTableStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsMacTableStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mac_table_count - computed: true, optional: false, required: false
  public get macTableCount() {
    return this.getNumberAttribute('mac_table_count');
  }

  // max_mac_entries_supported - computed: true, optional: false, required: false
  public get maxMacEntriesSupported() {
    return this.getNumberAttribute('max_mac_entries_supported');
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsMemoryStat {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsMemoryStatToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsMemoryStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsMemoryStatToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsMemoryStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsMemoryStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsMemoryStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsMemoryStat | undefined) {
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
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatCpuStat {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatCpuStatToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatCpuStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatCpuStatToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatCpuStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatCpuStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatCpuStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatCpuStat | undefined) {
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

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getNumberAttribute('usage');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getNumberAttribute('user');
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatErrors {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatErrorsToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatErrorsToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feature - computed: true, optional: false, required: false
  public get feature() {
    return this.getStringAttribute('feature');
  }

  // minimum_version - computed: true, optional: false, required: false
  public get minimumVersion() {
    return this.getStringAttribute('minimum_version');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // since - computed: true, optional: false, required: false
  public get since() {
    return this.getNumberAttribute('since');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatErrorsOutputReference {
    return new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatFans {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatFansToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatFans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatFansToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatFans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatFansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatFans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatFans | undefined) {
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

  // rpm - computed: true, optional: false, required: false
  public get rpm() {
    return this.getNumberAttribute('rpm');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatFansList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatFansOutputReference {
    return new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatFansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatMemoryStat {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatMemoryStatToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatMemoryStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatMemoryStatToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatMemoryStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatMemoryStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatMemoryStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatMemoryStat | undefined) {
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
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsPortGroups {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsPortGroupsToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsPortGroupsToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsPortGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsPortGroupsOutputReference {
    return new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPics {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // model_number - computed: true, optional: false, required: false
  public get modelNumber() {
    return this.getStringAttribute('model_number');
  }

  // port_groups - computed: true, optional: false, required: false
  private _portGroups = new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsOutputReference {
    return new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPoe {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPoeToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPoe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPoeToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPoe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPoeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPoe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPoe | undefined) {
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPsus {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPsusToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPsus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPsusToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPsus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPsusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPsus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPsus | undefined) {
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

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPsusList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPsusOutputReference {
    return new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPsusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatTemperatures {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatTemperaturesToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatTemperatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatTemperaturesToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatTemperatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatTemperaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatTemperatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatTemperatures | undefined) {
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

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatTemperaturesList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatTemperaturesOutputReference {
    return new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatTemperaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatVcLinks {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatVcLinksToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatVcLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatVcLinksToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatVcLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatVcLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatVcLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatVcLinks | undefined) {
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

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatVcLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatVcLinksOutputReference {
    return new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatVcLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStat {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStat | undefined) {
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

  // boot_partition - computed: true, optional: false, required: false
  public get bootPartition() {
    return this.getStringAttribute('boot_partition');
  }

  // cpld_version - computed: true, optional: false, required: false
  public get cpldVersion() {
    return this.getStringAttribute('cpld_version');
  }

  // cpu_stat - computed: true, optional: false, required: false
  private _cpuStat = new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatCpuStatOutputReference(this, "cpu_stat");
  public get cpuStat() {
    return this._cpuStat;
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // fans - computed: true, optional: false, required: false
  private _fans = new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatFansList(this, "fans", false);
  public get fans() {
    return this._fans;
  }

  // fpc_idx - computed: true, optional: false, required: false
  public get fpcIdx() {
    return this.getNumberAttribute('fpc_idx');
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

  // memory_stat - computed: true, optional: false, required: false
  private _memoryStat = new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatMemoryStatOutputReference(this, "memory_stat");
  public get memoryStat() {
    return this._memoryStat;
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

  // pics - computed: true, optional: false, required: false
  private _pics = new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPicsList(this, "pics", false);
  public get pics() {
    return this._pics;
  }

  // poe - computed: true, optional: false, required: false
  private _poe = new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPoeOutputReference(this, "poe");
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
  private _psus = new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatPsusList(this, "psus", false);
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
  private _temperatures = new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatTemperaturesList(this, "temperatures", false);
  public get temperatures() {
    return this._temperatures;
  }

  // tmc_fpga_version - computed: true, optional: false, required: false
  public get tmcFpgaVersion() {
    return this.getStringAttribute('tmc_fpga_version');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
  private _vcLinks = new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatVcLinksList(this, "vc_links", false);
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

export class DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatOutputReference {
    return new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsPorts {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsPortsToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsPortsToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsPorts | undefined) {
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

  // last_flapped - computed: true, optional: false, required: false
  public get lastFlapped() {
    return this.getNumberAttribute('last_flapped');
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

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
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

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
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

  // poe_priority - computed: true, optional: false, required: false
  public get poePriority() {
    return this.getStringAttribute('poe_priority');
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

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
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

export class DataMistDeviceSwitchStatsDeviceSwitchStatsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceSwitchStatsDeviceSwitchStatsPortsOutputReference {
    return new DataMistDeviceSwitchStatsDeviceSwitchStatsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsRouteSummaryStats {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsRouteSummaryStatsToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsRouteSummaryStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsRouteSummaryStatsToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsRouteSummaryStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsRouteSummaryStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsRouteSummaryStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsRouteSummaryStats | undefined) {
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
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsServiceStat {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsServiceStatToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsServiceStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsServiceStatToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsServiceStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsServiceStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsServiceStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsServiceStat | undefined) {
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

export class DataMistDeviceSwitchStatsDeviceSwitchStatsServiceStatMap extends cdktf.ComplexMap {

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
  public get(key: string): DataMistDeviceSwitchStatsDeviceSwitchStatsServiceStatOutputReference {
    return new DataMistDeviceSwitchStatsDeviceSwitchStatsServiceStatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStatsVcSetupInfo {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsVcSetupInfoToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsVcSetupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsVcSetupInfoToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStatsVcSetupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsVcSetupInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStatsVcSetupInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStatsVcSetupInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_type - computed: true, optional: false, required: false
  public get configType() {
    return this.getStringAttribute('config_type');
  }

  // current_stats - computed: true, optional: false, required: false
  public get currentStats() {
    return this.getStringAttribute('current_stats');
  }

  // err_missing_dev_id_fpc - computed: true, optional: false, required: false
  public get errMissingDevIdFpc() {
    return this.getBooleanAttribute('err_missing_dev_id_fpc');
  }

  // last_update - computed: true, optional: false, required: false
  public get lastUpdate() {
    return this.getNumberAttribute('last_update');
  }

  // request_time - computed: true, optional: false, required: false
  public get requestTime() {
    return this.getNumberAttribute('request_time');
  }

  // request_type - computed: true, optional: false, required: false
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
}
export interface DataMistDeviceSwitchStatsDeviceSwitchStats {
}

export function dataMistDeviceSwitchStatsDeviceSwitchStatsToTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceSwitchStatsDeviceSwitchStatsToHclTerraform(struct?: DataMistDeviceSwitchStatsDeviceSwitchStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceSwitchStatsDeviceSwitchStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceSwitchStatsDeviceSwitchStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_redundancy - computed: true, optional: false, required: false
  private _apRedundancy = new DataMistDeviceSwitchStatsDeviceSwitchStatsApRedundancyOutputReference(this, "ap_redundancy");
  public get apRedundancy() {
    return this._apRedundancy;
  }

  // arp_table_stats - computed: true, optional: false, required: false
  private _arpTableStats = new DataMistDeviceSwitchStatsDeviceSwitchStatsArpTableStatsOutputReference(this, "arp_table_stats");
  public get arpTableStats() {
    return this._arpTableStats;
  }

  // auto_upgrade_stat - computed: true, optional: false, required: false
  private _autoUpgradeStat = new DataMistDeviceSwitchStatsDeviceSwitchStatsAutoUpgradeStatOutputReference(this, "auto_upgrade_stat");
  public get autoUpgradeStat() {
    return this._autoUpgradeStat;
  }

  // cert_expiry - computed: true, optional: false, required: false
  public get certExpiry() {
    return this.getNumberAttribute('cert_expiry');
  }

  // clients - computed: true, optional: false, required: false
  private _clients = new DataMistDeviceSwitchStatsDeviceSwitchStatsClientsList(this, "clients", false);
  public get clients() {
    return this._clients;
  }

  // clients_stats - computed: true, optional: false, required: false
  private _clientsStats = new DataMistDeviceSwitchStatsDeviceSwitchStatsClientsStatsOutputReference(this, "clients_stats");
  public get clientsStats() {
    return this._clientsStats;
  }

  // config_status - computed: true, optional: false, required: false
  public get configStatus() {
    return this.getStringAttribute('config_status');
  }

  // config_timestamp - computed: true, optional: false, required: false
  public get configTimestamp() {
    return this.getNumberAttribute('config_timestamp');
  }

  // config_version - computed: true, optional: false, required: false
  public get configVersion() {
    return this.getNumberAttribute('config_version');
  }

  // cpu_stat - computed: true, optional: false, required: false
  private _cpuStat = new DataMistDeviceSwitchStatsDeviceSwitchStatsCpuStatOutputReference(this, "cpu_stat");
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

  // dhcpd_stat - computed: true, optional: false, required: false
  private _dhcpdStat = new DataMistDeviceSwitchStatsDeviceSwitchStatsDhcpdStatMap(this, "dhcpd_stat");
  public get dhcpdStat() {
    return this._dhcpdStat;
  }

  // evpntopo_id - computed: true, optional: false, required: false
  public get evpntopoId() {
    return this.getStringAttribute('evpntopo_id');
  }

  // ext_ip - computed: true, optional: false, required: false
  public get extIp() {
    return this.getStringAttribute('ext_ip');
  }

  // fw_versions_outofsync - computed: true, optional: false, required: false
  public get fwVersionsOutofsync() {
    return this.getBooleanAttribute('fw_versions_outofsync');
  }

  // fwupdate - computed: true, optional: false, required: false
  private _fwupdate = new DataMistDeviceSwitchStatsDeviceSwitchStatsFwupdateOutputReference(this, "fwupdate");
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

  // hw_rev - computed: true, optional: false, required: false
  public get hwRev() {
    return this.getStringAttribute('hw_rev');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // if_stat - computed: true, optional: false, required: false
  private _ifStat = new DataMistDeviceSwitchStatsDeviceSwitchStatsIfStatMap(this, "if_stat");
  public get ifStat() {
    return this._ifStat;
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ip_stat - computed: true, optional: false, required: false
  private _ipStat = new DataMistDeviceSwitchStatsDeviceSwitchStatsIpStatOutputReference(this, "ip_stat");
  public get ipStat() {
    return this._ipStat;
  }

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getNumberAttribute('last_seen');
  }

  // last_trouble - computed: true, optional: false, required: false
  private _lastTrouble = new DataMistDeviceSwitchStatsDeviceSwitchStatsLastTroubleOutputReference(this, "last_trouble");
  public get lastTrouble() {
    return this._lastTrouble;
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // mac_table_stats - computed: true, optional: false, required: false
  private _macTableStats = new DataMistDeviceSwitchStatsDeviceSwitchStatsMacTableStatsOutputReference(this, "mac_table_stats");
  public get macTableStats() {
    return this._macTableStats;
  }

  // map_id - computed: true, optional: false, required: false
  public get mapId() {
    return this.getStringAttribute('map_id');
  }

  // memory_stat - computed: true, optional: false, required: false
  private _memoryStat = new DataMistDeviceSwitchStatsDeviceSwitchStatsMemoryStatOutputReference(this, "memory_stat");
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

  // module_stat - computed: true, optional: false, required: false
  private _moduleStat = new DataMistDeviceSwitchStatsDeviceSwitchStatsModuleStatList(this, "module_stat", false);
  public get moduleStat() {
    return this._moduleStat;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataMistDeviceSwitchStatsDeviceSwitchStatsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // route_summary_stats - computed: true, optional: false, required: false
  private _routeSummaryStats = new DataMistDeviceSwitchStatsDeviceSwitchStatsRouteSummaryStatsOutputReference(this, "route_summary_stats");
  public get routeSummaryStats() {
    return this._routeSummaryStats;
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // service_stat - computed: true, optional: false, required: false
  private _serviceStat = new DataMistDeviceSwitchStatsDeviceSwitchStatsServiceStatMap(this, "service_stat");
  public get serviceStat() {
    return this._serviceStat;
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag_id - computed: true, optional: false, required: false
  public get tagId() {
    return this.getNumberAttribute('tag_id');
  }

  // tag_uuid - computed: true, optional: false, required: false
  public get tagUuid() {
    return this.getStringAttribute('tag_uuid');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getNumberAttribute('uptime');
  }

  // vc_mac - computed: true, optional: false, required: false
  public get vcMac() {
    return this.getStringAttribute('vc_mac');
  }

  // vc_setup_info - computed: true, optional: false, required: false
  private _vcSetupInfo = new DataMistDeviceSwitchStatsDeviceSwitchStatsVcSetupInfoOutputReference(this, "vc_setup_info");
  public get vcSetupInfo() {
    return this._vcSetupInfo;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataMistDeviceSwitchStatsDeviceSwitchStatsList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceSwitchStatsDeviceSwitchStatsOutputReference {
    return new DataMistDeviceSwitchStatsDeviceSwitchStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/device_switch_stats mist_device_switch_stats}
*/
export class DataMistDeviceSwitchStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_device_switch_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistDeviceSwitchStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistDeviceSwitchStats to import
  * @param importFromId The id of the existing DataMistDeviceSwitchStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/device_switch_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistDeviceSwitchStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_device_switch_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/data-sources/device_switch_stats mist_device_switch_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistDeviceSwitchStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMistDeviceSwitchStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_device_switch_stats',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.3',
        providerVersionConstraint: '0.6.3'
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
    this._evpnUnused = config.evpnUnused;
    this._evpntopoId = config.evpntopoId;
    this._mac = config.mac;
    this._orgId = config.orgId;
    this._siteId = config.siteId;
    this._start = config.start;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_switch_stats - computed: true, optional: false, required: false
  private _deviceSwitchStats = new DataMistDeviceSwitchStatsDeviceSwitchStatsList(this, "device_switch_stats", true);
  public get deviceSwitchStats() {
    return this._deviceSwitchStats;
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
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // evpn_unused - computed: false, optional: true, required: false
  private _evpnUnused?: string; 
  public get evpnUnused() {
    return this.getStringAttribute('evpn_unused');
  }
  public set evpnUnused(value: string) {
    this._evpnUnused = value;
  }
  public resetEvpnUnused() {
    this._evpnUnused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnUnusedInput() {
    return this._evpnUnused;
  }

  // evpntopo_id - computed: false, optional: true, required: false
  private _evpntopoId?: string; 
  public get evpntopoId() {
    return this.getStringAttribute('evpntopo_id');
  }
  public set evpntopoId(value: string) {
    this._evpntopoId = value;
  }
  public resetEvpntopoId() {
    this._evpntopoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpntopoIdInput() {
    return this._evpntopoId;
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
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
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
      end: cdktf.stringToTerraform(this._end),
      evpn_unused: cdktf.stringToTerraform(this._evpnUnused),
      evpntopo_id: cdktf.stringToTerraform(this._evpntopoId),
      mac: cdktf.stringToTerraform(this._mac),
      org_id: cdktf.stringToTerraform(this._orgId),
      site_id: cdktf.stringToTerraform(this._siteId),
      start: cdktf.stringToTerraform(this._start),
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
        value: cdktf.stringToHclTerraform(this._end),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evpn_unused: {
        value: cdktf.stringToHclTerraform(this._evpnUnused),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evpntopo_id: {
        value: cdktf.stringToHclTerraform(this._evpntopoId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
