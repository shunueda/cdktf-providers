// https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/device_ap_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistDeviceApStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Duration like 7d, 2w
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/device_ap_stats#duration DataMistDeviceApStats#duration}
  */
  readonly duration?: string;
  /**
  * End time (epoch timestamp in seconds, or relative string like "-1d", "-2h", "now")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/device_ap_stats#end DataMistDeviceApStats#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/device_ap_stats#mac DataMistDeviceApStats#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/device_ap_stats#org_id DataMistDeviceApStats#org_id}
  */
  readonly orgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/device_ap_stats#site_id DataMistDeviceApStats#site_id}
  */
  readonly siteId?: string;
  /**
  * Start time (epoch timestamp in seconds, or relative string like "-1d", "-1w")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/device_ap_stats#start DataMistDeviceApStats#start}
  */
  readonly start?: string;
  /**
  * enum: `all`, `connected`, `disconnected`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/device_ap_stats#status DataMistDeviceApStats#status}
  */
  readonly status?: string;
}
export interface DataMistDeviceApStatsDeviceApStatsAutoPlacementInfoProbabilitySurface {
}

export function dataMistDeviceApStatsDeviceApStatsAutoPlacementInfoProbabilitySurfaceToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsAutoPlacementInfoProbabilitySurface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsAutoPlacementInfoProbabilitySurfaceToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsAutoPlacementInfoProbabilitySurface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsAutoPlacementInfoProbabilitySurfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsAutoPlacementInfoProbabilitySurface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsAutoPlacementInfoProbabilitySurface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // radius - computed: true, optional: false, required: false
  public get radius() {
    return this.getNumberAttribute('radius');
  }

  // radius_m - computed: true, optional: false, required: false
  public get radiusM() {
    return this.getNumberAttribute('radius_m');
  }

  // x - computed: true, optional: false, required: false
  public get x() {
    return this.getNumberAttribute('x');
  }
}
export interface DataMistDeviceApStatsDeviceApStatsAutoPlacementInfo {
}

export function dataMistDeviceApStatsDeviceApStatsAutoPlacementInfoToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsAutoPlacementInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsAutoPlacementInfoToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsAutoPlacementInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsAutoPlacementInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsAutoPlacementInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsAutoPlacementInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_number - computed: true, optional: false, required: false
  public get clusterNumber() {
    return this.getNumberAttribute('cluster_number');
  }

  // orientation_stats - computed: true, optional: false, required: false
  public get orientationStats() {
    return this.getNumberAttribute('orientation_stats');
  }

  // probability_surface - computed: true, optional: false, required: false
  private _probabilitySurface = new DataMistDeviceApStatsDeviceApStatsAutoPlacementInfoProbabilitySurfaceOutputReference(this, "probability_surface");
  public get probabilitySurface() {
    return this._probabilitySurface;
  }
}
export interface DataMistDeviceApStatsDeviceApStatsAutoPlacement {
}

export function dataMistDeviceApStatsDeviceApStatsAutoPlacementToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsAutoPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsAutoPlacementToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsAutoPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsAutoPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsAutoPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsAutoPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // info - computed: true, optional: false, required: false
  private _info = new DataMistDeviceApStatsDeviceApStatsAutoPlacementInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }

  // recommended_anchor - computed: true, optional: false, required: false
  public get recommendedAnchor() {
    return this.getBooleanAttribute('recommended_anchor');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_detail - computed: true, optional: false, required: false
  public get statusDetail() {
    return this.getStringAttribute('status_detail');
  }

  // x - computed: true, optional: false, required: false
  public get x() {
    return this.getNumberAttribute('x');
  }

  // x_m - computed: true, optional: false, required: false
  public get xM() {
    return this.getNumberAttribute('x_m');
  }

  // y - computed: true, optional: false, required: false
  public get y() {
    return this.getNumberAttribute('y');
  }

  // y_m - computed: true, optional: false, required: false
  public get yM() {
    return this.getNumberAttribute('y_m');
  }
}
export interface DataMistDeviceApStatsDeviceApStatsAutoUpgradeStat {
}

export function dataMistDeviceApStatsDeviceApStatsAutoUpgradeStatToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsAutoUpgradeStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsAutoUpgradeStatToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsAutoUpgradeStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsAutoUpgradeStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsAutoUpgradeStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsAutoUpgradeStat | undefined) {
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
export interface DataMistDeviceApStatsDeviceApStatsBleStat {
}

export function dataMistDeviceApStatsDeviceApStatsBleStatToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsBleStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsBleStatToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsBleStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsBleStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsBleStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsBleStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // beacon_enabled - computed: true, optional: false, required: false
  public get beaconEnabled() {
    return this.getBooleanAttribute('beacon_enabled');
  }

  // beacon_rate - computed: true, optional: false, required: false
  public get beaconRate() {
    return this.getNumberAttribute('beacon_rate');
  }

  // eddystone_uid_enabled - computed: true, optional: false, required: false
  public get eddystoneUidEnabled() {
    return this.getBooleanAttribute('eddystone_uid_enabled');
  }

  // eddystone_uid_freq_msec - computed: true, optional: false, required: false
  public get eddystoneUidFreqMsec() {
    return this.getNumberAttribute('eddystone_uid_freq_msec');
  }

  // eddystone_uid_instance - computed: true, optional: false, required: false
  public get eddystoneUidInstance() {
    return this.getStringAttribute('eddystone_uid_instance');
  }

  // eddystone_uid_namespace - computed: true, optional: false, required: false
  public get eddystoneUidNamespace() {
    return this.getStringAttribute('eddystone_uid_namespace');
  }

  // eddystone_url_enabled - computed: true, optional: false, required: false
  public get eddystoneUrlEnabled() {
    return this.getBooleanAttribute('eddystone_url_enabled');
  }

  // eddystone_url_freq_msec - computed: true, optional: false, required: false
  public get eddystoneUrlFreqMsec() {
    return this.getNumberAttribute('eddystone_url_freq_msec');
  }

  // eddystone_url_url - computed: true, optional: false, required: false
  public get eddystoneUrlUrl() {
    return this.getStringAttribute('eddystone_url_url');
  }

  // ibeacon_enabled - computed: true, optional: false, required: false
  public get ibeaconEnabled() {
    return this.getBooleanAttribute('ibeacon_enabled');
  }

  // ibeacon_freq_msec - computed: true, optional: false, required: false
  public get ibeaconFreqMsec() {
    return this.getNumberAttribute('ibeacon_freq_msec');
  }

  // ibeacon_major - computed: true, optional: false, required: false
  public get ibeaconMajor() {
    return this.getNumberAttribute('ibeacon_major');
  }

  // ibeacon_minor - computed: true, optional: false, required: false
  public get ibeaconMinor() {
    return this.getNumberAttribute('ibeacon_minor');
  }

  // ibeacon_uuid - computed: true, optional: false, required: false
  public get ibeaconUuid() {
    return this.getStringAttribute('ibeacon_uuid');
  }

  // major - computed: true, optional: false, required: false
  public get major() {
    return this.getNumberAttribute('major');
  }

  // minors - computed: true, optional: false, required: false
  public get minors() {
    return this.getNumberListAttribute('minors');
  }

  // power - computed: true, optional: false, required: false
  public get power() {
    return this.getNumberAttribute('power');
  }

  // rx_bytes - computed: true, optional: false, required: false
  public get rxBytes() {
    return this.getNumberAttribute('rx_bytes');
  }

  // rx_pkts - computed: true, optional: false, required: false
  public get rxPkts() {
    return this.getNumberAttribute('rx_pkts');
  }

  // tx_bytes - computed: true, optional: false, required: false
  public get txBytes() {
    return this.getNumberAttribute('tx_bytes');
  }

  // tx_pkts - computed: true, optional: false, required: false
  public get txPkts() {
    return this.getNumberAttribute('tx_pkts');
  }

  // tx_resets - computed: true, optional: false, required: false
  public get txResets() {
    return this.getNumberAttribute('tx_resets');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface DataMistDeviceApStatsDeviceApStatsEnvStat {
}

export function dataMistDeviceApStatsDeviceApStatsEnvStatToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsEnvStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsEnvStatToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsEnvStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsEnvStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsEnvStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsEnvStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accel_x - computed: true, optional: false, required: false
  public get accelX() {
    return this.getNumberAttribute('accel_x');
  }

  // accel_y - computed: true, optional: false, required: false
  public get accelY() {
    return this.getNumberAttribute('accel_y');
  }

  // accel_z - computed: true, optional: false, required: false
  public get accelZ() {
    return this.getNumberAttribute('accel_z');
  }

  // ambient_temp - computed: true, optional: false, required: false
  public get ambientTemp() {
    return this.getNumberAttribute('ambient_temp');
  }

  // attitude - computed: true, optional: false, required: false
  public get attitude() {
    return this.getNumberAttribute('attitude');
  }

  // cpu_temp - computed: true, optional: false, required: false
  public get cpuTemp() {
    return this.getNumberAttribute('cpu_temp');
  }

  // humidity - computed: true, optional: false, required: false
  public get humidity() {
    return this.getNumberAttribute('humidity');
  }

  // magne_x - computed: true, optional: false, required: false
  public get magneX() {
    return this.getNumberAttribute('magne_x');
  }

  // magne_y - computed: true, optional: false, required: false
  public get magneY() {
    return this.getNumberAttribute('magne_y');
  }

  // magne_z - computed: true, optional: false, required: false
  public get magneZ() {
    return this.getNumberAttribute('magne_z');
  }

  // pressure - computed: true, optional: false, required: false
  public get pressure() {
    return this.getNumberAttribute('pressure');
  }

  // vcore_voltage - computed: true, optional: false, required: false
  public get vcoreVoltage() {
    return this.getNumberAttribute('vcore_voltage');
  }
}
export interface DataMistDeviceApStatsDeviceApStatsEslStat {
}

export function dataMistDeviceApStatsDeviceApStatsEslStatToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsEslStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsEslStatToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsEslStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsEslStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsEslStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsEslStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getNumberAttribute('channel');
  }

  // connected - computed: true, optional: false, required: false
  public get connected() {
    return this.getBooleanAttribute('connected');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getBooleanAttribute('up');
  }
}
export interface DataMistDeviceApStatsDeviceApStatsFwupdate {
}

export function dataMistDeviceApStatsDeviceApStatsFwupdateToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsFwupdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsFwupdateToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsFwupdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsFwupdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsFwupdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsFwupdate | undefined) {
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
export interface DataMistDeviceApStatsDeviceApStatsGpsStat {
}

export function dataMistDeviceApStatsDeviceApStatsGpsStatToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsGpsStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsGpsStatToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsGpsStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsGpsStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsGpsStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsGpsStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accuracy - computed: true, optional: false, required: false
  public get accuracy() {
    return this.getNumberAttribute('accuracy');
  }

  // altitude - computed: true, optional: false, required: false
  public get altitude() {
    return this.getNumberAttribute('altitude');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }

  // src - computed: true, optional: false, required: false
  public get src() {
    return this.getStringAttribute('src');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }
}
export interface DataMistDeviceApStatsDeviceApStatsIotStat {
}

export function dataMistDeviceApStatsDeviceApStatsIotStatToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsIotStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsIotStatToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsIotStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsIotStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsIotStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsIotStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataMistDeviceApStatsDeviceApStatsIotStatMap extends cdktf.ComplexMap {

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
  public get(key: string): DataMistDeviceApStatsDeviceApStatsIotStatOutputReference {
    return new DataMistDeviceApStatsDeviceApStatsIotStatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceApStatsDeviceApStatsIpConfig {
}

export function dataMistDeviceApStatsDeviceApStatsIpConfigToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsIpConfigToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // netmask6 - computed: true, optional: false, required: false
  public get netmask6() {
    return this.getStringAttribute('netmask6');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // type6 - computed: true, optional: false, required: false
  public get type6() {
    return this.getStringAttribute('type6');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
}
export interface DataMistDeviceApStatsDeviceApStatsIpStat {
}

export function dataMistDeviceApStatsDeviceApStatsIpStatToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsIpStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsIpStatToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsIpStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsIpStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsIpStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsIpStat | undefined) {
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
export interface DataMistDeviceApStatsDeviceApStatsL2TpStatSessions {
}

export function dataMistDeviceApStatsDeviceApStatsL2TpStatSessionsToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsL2TpStatSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsL2TpStatSessionsToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsL2TpStatSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsL2TpStatSessionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsL2TpStatSessions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsL2TpStatSessions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_sid - computed: true, optional: false, required: false
  public get localSid() {
    return this.getNumberAttribute('local_sid');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }

  // remote_sid - computed: true, optional: false, required: false
  public get remoteSid() {
    return this.getNumberAttribute('remote_sid');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataMistDeviceApStatsDeviceApStatsL2TpStatSessionsList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceApStatsDeviceApStatsL2TpStatSessionsOutputReference {
    return new DataMistDeviceApStatsDeviceApStatsL2TpStatSessionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistDeviceApStatsDeviceApStatsL2TpStat {
}

export function dataMistDeviceApStatsDeviceApStatsL2TpStatToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsL2TpStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsL2TpStatToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsL2TpStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsL2TpStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsL2TpStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsL2TpStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sessions - computed: true, optional: false, required: false
  private _sessions = new DataMistDeviceApStatsDeviceApStatsL2TpStatSessionsList(this, "sessions", false);
  public get sessions() {
    return this._sessions;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getNumberAttribute('uptime');
  }

  // wxtunnel_id - computed: true, optional: false, required: false
  public get wxtunnelId() {
    return this.getStringAttribute('wxtunnel_id');
  }
}

export class DataMistDeviceApStatsDeviceApStatsL2TpStatMap extends cdktf.ComplexMap {

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
  public get(key: string): DataMistDeviceApStatsDeviceApStatsL2TpStatOutputReference {
    return new DataMistDeviceApStatsDeviceApStatsL2TpStatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceApStatsDeviceApStatsLastTrouble {
}

export function dataMistDeviceApStatsDeviceApStatsLastTroubleToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsLastTrouble): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsLastTroubleToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsLastTrouble): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsLastTroubleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsLastTrouble | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsLastTrouble | undefined) {
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
export interface DataMistDeviceApStatsDeviceApStatsLed {
}

export function dataMistDeviceApStatsDeviceApStatsLedToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsLed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsLedToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsLed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsLedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsLed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsLed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // brightness - computed: true, optional: false, required: false
  public get brightness() {
    return this.getNumberAttribute('brightness');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataMistDeviceApStatsDeviceApStatsLldpStat {
}

export function dataMistDeviceApStatsDeviceApStatsLldpStatToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsLldpStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsLldpStatToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsLldpStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsLldpStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsLldpStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsLldpStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chassis_id - computed: true, optional: false, required: false
  public get chassisId() {
    return this.getStringAttribute('chassis_id');
  }

  // lldp_med_supported - computed: true, optional: false, required: false
  public get lldpMedSupported() {
    return this.getBooleanAttribute('lldp_med_supported');
  }

  // mgmt_addr - computed: true, optional: false, required: false
  public get mgmtAddr() {
    return this.getStringAttribute('mgmt_addr');
  }

  // mgmt_addrs - computed: true, optional: false, required: false
  public get mgmtAddrs() {
    return this.getListAttribute('mgmt_addrs');
  }

  // port_desc - computed: true, optional: false, required: false
  public get portDesc() {
    return this.getStringAttribute('port_desc');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // power_allocated - computed: true, optional: false, required: false
  public get powerAllocated() {
    return this.getNumberAttribute('power_allocated');
  }

  // power_avail - computed: true, optional: false, required: false
  public get powerAvail() {
    return this.getNumberAttribute('power_avail');
  }

  // power_budget - computed: true, optional: false, required: false
  public get powerBudget() {
    return this.getNumberAttribute('power_budget');
  }

  // power_constrained - computed: true, optional: false, required: false
  public get powerConstrained() {
    return this.getBooleanAttribute('power_constrained');
  }

  // power_draw - computed: true, optional: false, required: false
  public get powerDraw() {
    return this.getNumberAttribute('power_draw');
  }

  // power_needed - computed: true, optional: false, required: false
  public get powerNeeded() {
    return this.getNumberAttribute('power_needed');
  }

  // power_opmode - computed: true, optional: false, required: false
  public get powerOpmode() {
    return this.getStringAttribute('power_opmode');
  }

  // power_request_count - computed: true, optional: false, required: false
  public get powerRequestCount() {
    return this.getNumberAttribute('power_request_count');
  }

  // power_requested - computed: true, optional: false, required: false
  public get powerRequested() {
    return this.getNumberAttribute('power_requested');
  }

  // power_src - computed: true, optional: false, required: false
  public get powerSrc() {
    return this.getStringAttribute('power_src');
  }

  // power_srcs - computed: true, optional: false, required: false
  public get powerSrcs() {
    return this.getListAttribute('power_srcs');
  }

  // system_desc - computed: true, optional: false, required: false
  public get systemDesc() {
    return this.getStringAttribute('system_desc');
  }

  // system_name - computed: true, optional: false, required: false
  public get systemName() {
    return this.getStringAttribute('system_name');
  }
}
export interface DataMistDeviceApStatsDeviceApStatsLldpStats {
}

export function dataMistDeviceApStatsDeviceApStatsLldpStatsToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsLldpStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsLldpStatsToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsLldpStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsLldpStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsLldpStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsLldpStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chassis_id - computed: true, optional: false, required: false
  public get chassisId() {
    return this.getStringAttribute('chassis_id');
  }

  // lldp_med_supported - computed: true, optional: false, required: false
  public get lldpMedSupported() {
    return this.getBooleanAttribute('lldp_med_supported');
  }

  // mgmt_addr - computed: true, optional: false, required: false
  public get mgmtAddr() {
    return this.getStringAttribute('mgmt_addr');
  }

  // mgmt_addrs - computed: true, optional: false, required: false
  public get mgmtAddrs() {
    return this.getListAttribute('mgmt_addrs');
  }

  // port_desc - computed: true, optional: false, required: false
  public get portDesc() {
    return this.getStringAttribute('port_desc');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // power_allocated - computed: true, optional: false, required: false
  public get powerAllocated() {
    return this.getNumberAttribute('power_allocated');
  }

  // power_avail - computed: true, optional: false, required: false
  public get powerAvail() {
    return this.getNumberAttribute('power_avail');
  }

  // power_budget - computed: true, optional: false, required: false
  public get powerBudget() {
    return this.getNumberAttribute('power_budget');
  }

  // power_constrained - computed: true, optional: false, required: false
  public get powerConstrained() {
    return this.getBooleanAttribute('power_constrained');
  }

  // power_draw - computed: true, optional: false, required: false
  public get powerDraw() {
    return this.getNumberAttribute('power_draw');
  }

  // power_needed - computed: true, optional: false, required: false
  public get powerNeeded() {
    return this.getNumberAttribute('power_needed');
  }

  // power_opmode - computed: true, optional: false, required: false
  public get powerOpmode() {
    return this.getStringAttribute('power_opmode');
  }

  // power_request_count - computed: true, optional: false, required: false
  public get powerRequestCount() {
    return this.getNumberAttribute('power_request_count');
  }

  // power_requested - computed: true, optional: false, required: false
  public get powerRequested() {
    return this.getNumberAttribute('power_requested');
  }

  // power_src - computed: true, optional: false, required: false
  public get powerSrc() {
    return this.getStringAttribute('power_src');
  }

  // power_srcs - computed: true, optional: false, required: false
  public get powerSrcs() {
    return this.getListAttribute('power_srcs');
  }

  // system_desc - computed: true, optional: false, required: false
  public get systemDesc() {
    return this.getStringAttribute('system_desc');
  }

  // system_name - computed: true, optional: false, required: false
  public get systemName() {
    return this.getStringAttribute('system_name');
  }
}

export class DataMistDeviceApStatsDeviceApStatsLldpStatsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataMistDeviceApStatsDeviceApStatsLldpStatsOutputReference {
    return new DataMistDeviceApStatsDeviceApStatsLldpStatsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceApStatsDeviceApStatsMeshDownlinks {
}

export function dataMistDeviceApStatsDeviceApStatsMeshDownlinksToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsMeshDownlinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsMeshDownlinksToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsMeshDownlinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsMeshDownlinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsMeshDownlinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsMeshDownlinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // band - computed: true, optional: false, required: false
  public get band() {
    return this.getStringAttribute('band');
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getNumberAttribute('channel');
  }

  // idle_time - computed: true, optional: false, required: false
  public get idleTime() {
    return this.getNumberAttribute('idle_time');
  }

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getNumberAttribute('last_seen');
  }

  // proto - computed: true, optional: false, required: false
  public get proto() {
    return this.getStringAttribute('proto');
  }

  // rssi - computed: true, optional: false, required: false
  public get rssi() {
    return this.getNumberAttribute('rssi');
  }

  // rx_bps - computed: true, optional: false, required: false
  public get rxBps() {
    return this.getNumberAttribute('rx_bps');
  }

  // rx_bytes - computed: true, optional: false, required: false
  public get rxBytes() {
    return this.getNumberAttribute('rx_bytes');
  }

  // rx_packets - computed: true, optional: false, required: false
  public get rxPackets() {
    return this.getNumberAttribute('rx_packets');
  }

  // rx_rate - computed: true, optional: false, required: false
  public get rxRate() {
    return this.getNumberAttribute('rx_rate');
  }

  // rx_retries - computed: true, optional: false, required: false
  public get rxRetries() {
    return this.getNumberAttribute('rx_retries');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // snr - computed: true, optional: false, required: false
  public get snr() {
    return this.getNumberAttribute('snr');
  }

  // tx_bps - computed: true, optional: false, required: false
  public get txBps() {
    return this.getNumberAttribute('tx_bps');
  }

  // tx_bytes - computed: true, optional: false, required: false
  public get txBytes() {
    return this.getNumberAttribute('tx_bytes');
  }

  // tx_packets - computed: true, optional: false, required: false
  public get txPackets() {
    return this.getNumberAttribute('tx_packets');
  }

  // tx_rate - computed: true, optional: false, required: false
  public get txRate() {
    return this.getNumberAttribute('tx_rate');
  }

  // tx_retries - computed: true, optional: false, required: false
  public get txRetries() {
    return this.getNumberAttribute('tx_retries');
  }
}

export class DataMistDeviceApStatsDeviceApStatsMeshDownlinksMap extends cdktf.ComplexMap {

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
  public get(key: string): DataMistDeviceApStatsDeviceApStatsMeshDownlinksOutputReference {
    return new DataMistDeviceApStatsDeviceApStatsMeshDownlinksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceApStatsDeviceApStatsMeshUplink {
}

export function dataMistDeviceApStatsDeviceApStatsMeshUplinkToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsMeshUplink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsMeshUplinkToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsMeshUplink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsMeshUplinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsMeshUplink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsMeshUplink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // band - computed: true, optional: false, required: false
  public get band() {
    return this.getStringAttribute('band');
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getNumberAttribute('channel');
  }

  // idle_time - computed: true, optional: false, required: false
  public get idleTime() {
    return this.getNumberAttribute('idle_time');
  }

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getNumberAttribute('last_seen');
  }

  // proto - computed: true, optional: false, required: false
  public get proto() {
    return this.getStringAttribute('proto');
  }

  // rssi - computed: true, optional: false, required: false
  public get rssi() {
    return this.getNumberAttribute('rssi');
  }

  // rx_bps - computed: true, optional: false, required: false
  public get rxBps() {
    return this.getNumberAttribute('rx_bps');
  }

  // rx_bytes - computed: true, optional: false, required: false
  public get rxBytes() {
    return this.getNumberAttribute('rx_bytes');
  }

  // rx_packets - computed: true, optional: false, required: false
  public get rxPackets() {
    return this.getNumberAttribute('rx_packets');
  }

  // rx_rate - computed: true, optional: false, required: false
  public get rxRate() {
    return this.getNumberAttribute('rx_rate');
  }

  // rx_retries - computed: true, optional: false, required: false
  public get rxRetries() {
    return this.getNumberAttribute('rx_retries');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // snr - computed: true, optional: false, required: false
  public get snr() {
    return this.getNumberAttribute('snr');
  }

  // tx_bps - computed: true, optional: false, required: false
  public get txBps() {
    return this.getNumberAttribute('tx_bps');
  }

  // tx_bytes - computed: true, optional: false, required: false
  public get txBytes() {
    return this.getNumberAttribute('tx_bytes');
  }

  // tx_packets - computed: true, optional: false, required: false
  public get txPackets() {
    return this.getNumberAttribute('tx_packets');
  }

  // tx_rate - computed: true, optional: false, required: false
  public get txRate() {
    return this.getNumberAttribute('tx_rate');
  }

  // tx_retries - computed: true, optional: false, required: false
  public get txRetries() {
    return this.getNumberAttribute('tx_retries');
  }

  // uplink_ap_id - computed: true, optional: false, required: false
  public get uplinkApId() {
    return this.getStringAttribute('uplink_ap_id');
  }
}
export interface DataMistDeviceApStatsDeviceApStatsPortStat {
}

export function dataMistDeviceApStatsDeviceApStatsPortStatToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsPortStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsPortStatToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsPortStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsPortStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsPortStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsPortStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full_duplex - computed: true, optional: false, required: false
  public get fullDuplex() {
    return this.getBooleanAttribute('full_duplex');
  }

  // rx_bytes - computed: true, optional: false, required: false
  public get rxBytes() {
    return this.getNumberAttribute('rx_bytes');
  }

  // rx_errors - computed: true, optional: false, required: false
  public get rxErrors() {
    return this.getNumberAttribute('rx_errors');
  }

  // rx_peak_bps - computed: true, optional: false, required: false
  public get rxPeakBps() {
    return this.getNumberAttribute('rx_peak_bps');
  }

  // rx_pkts - computed: true, optional: false, required: false
  public get rxPkts() {
    return this.getNumberAttribute('rx_pkts');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getNumberAttribute('speed');
  }

  // tx_bytes - computed: true, optional: false, required: false
  public get txBytes() {
    return this.getNumberAttribute('tx_bytes');
  }

  // tx_peak_bps - computed: true, optional: false, required: false
  public get txPeakBps() {
    return this.getNumberAttribute('tx_peak_bps');
  }

  // tx_pkts - computed: true, optional: false, required: false
  public get txPkts() {
    return this.getNumberAttribute('tx_pkts');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getBooleanAttribute('up');
  }
}

export class DataMistDeviceApStatsDeviceApStatsPortStatMap extends cdktf.ComplexMap {

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
  public get(key: string): DataMistDeviceApStatsDeviceApStatsPortStatOutputReference {
    return new DataMistDeviceApStatsDeviceApStatsPortStatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistDeviceApStatsDeviceApStatsRadioStatBand24 {
}

export function dataMistDeviceApStatsDeviceApStatsRadioStatBand24ToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsRadioStatBand24): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsRadioStatBand24ToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsRadioStatBand24): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsRadioStatBand24OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsRadioStatBand24 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsRadioStatBand24 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getNumberAttribute('channel');
  }

  // dynamic_chaining_enabled - computed: true, optional: false, required: false
  public get dynamicChainingEnabled() {
    return this.getBooleanAttribute('dynamic_chaining_enabled');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // noise_floor - computed: true, optional: false, required: false
  public get noiseFloor() {
    return this.getNumberAttribute('noise_floor');
  }

  // num_clients - computed: true, optional: false, required: false
  public get numClients() {
    return this.getNumberAttribute('num_clients');
  }

  // num_wlans - computed: true, optional: false, required: false
  public get numWlans() {
    return this.getNumberAttribute('num_wlans');
  }

  // power - computed: true, optional: false, required: false
  public get power() {
    return this.getNumberAttribute('power');
  }

  // rx_bytes - computed: true, optional: false, required: false
  public get rxBytes() {
    return this.getNumberAttribute('rx_bytes');
  }

  // rx_pkts - computed: true, optional: false, required: false
  public get rxPkts() {
    return this.getNumberAttribute('rx_pkts');
  }

  // tx_bytes - computed: true, optional: false, required: false
  public get txBytes() {
    return this.getNumberAttribute('tx_bytes');
  }

  // tx_pkts - computed: true, optional: false, required: false
  public get txPkts() {
    return this.getNumberAttribute('tx_pkts');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }

  // util_all - computed: true, optional: false, required: false
  public get utilAll() {
    return this.getNumberAttribute('util_all');
  }

  // util_non_wifi - computed: true, optional: false, required: false
  public get utilNonWifi() {
    return this.getNumberAttribute('util_non_wifi');
  }

  // util_rx_in_bss - computed: true, optional: false, required: false
  public get utilRxInBss() {
    return this.getNumberAttribute('util_rx_in_bss');
  }

  // util_rx_other_bss - computed: true, optional: false, required: false
  public get utilRxOtherBss() {
    return this.getNumberAttribute('util_rx_other_bss');
  }

  // util_tx - computed: true, optional: false, required: false
  public get utilTx() {
    return this.getNumberAttribute('util_tx');
  }

  // util_undecodable_wifi - computed: true, optional: false, required: false
  public get utilUndecodableWifi() {
    return this.getNumberAttribute('util_undecodable_wifi');
  }

  // util_unknown_wifi - computed: true, optional: false, required: false
  public get utilUnknownWifi() {
    return this.getNumberAttribute('util_unknown_wifi');
  }
}
export interface DataMistDeviceApStatsDeviceApStatsRadioStatBand5 {
}

export function dataMistDeviceApStatsDeviceApStatsRadioStatBand5ToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsRadioStatBand5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsRadioStatBand5ToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsRadioStatBand5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsRadioStatBand5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsRadioStatBand5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsRadioStatBand5 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getNumberAttribute('channel');
  }

  // dynamic_chaining_enabled - computed: true, optional: false, required: false
  public get dynamicChainingEnabled() {
    return this.getBooleanAttribute('dynamic_chaining_enabled');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // noise_floor - computed: true, optional: false, required: false
  public get noiseFloor() {
    return this.getNumberAttribute('noise_floor');
  }

  // num_clients - computed: true, optional: false, required: false
  public get numClients() {
    return this.getNumberAttribute('num_clients');
  }

  // num_wlans - computed: true, optional: false, required: false
  public get numWlans() {
    return this.getNumberAttribute('num_wlans');
  }

  // power - computed: true, optional: false, required: false
  public get power() {
    return this.getNumberAttribute('power');
  }

  // rx_bytes - computed: true, optional: false, required: false
  public get rxBytes() {
    return this.getNumberAttribute('rx_bytes');
  }

  // rx_pkts - computed: true, optional: false, required: false
  public get rxPkts() {
    return this.getNumberAttribute('rx_pkts');
  }

  // tx_bytes - computed: true, optional: false, required: false
  public get txBytes() {
    return this.getNumberAttribute('tx_bytes');
  }

  // tx_pkts - computed: true, optional: false, required: false
  public get txPkts() {
    return this.getNumberAttribute('tx_pkts');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }

  // util_all - computed: true, optional: false, required: false
  public get utilAll() {
    return this.getNumberAttribute('util_all');
  }

  // util_non_wifi - computed: true, optional: false, required: false
  public get utilNonWifi() {
    return this.getNumberAttribute('util_non_wifi');
  }

  // util_rx_in_bss - computed: true, optional: false, required: false
  public get utilRxInBss() {
    return this.getNumberAttribute('util_rx_in_bss');
  }

  // util_rx_other_bss - computed: true, optional: false, required: false
  public get utilRxOtherBss() {
    return this.getNumberAttribute('util_rx_other_bss');
  }

  // util_tx - computed: true, optional: false, required: false
  public get utilTx() {
    return this.getNumberAttribute('util_tx');
  }

  // util_undecodable_wifi - computed: true, optional: false, required: false
  public get utilUndecodableWifi() {
    return this.getNumberAttribute('util_undecodable_wifi');
  }

  // util_unknown_wifi - computed: true, optional: false, required: false
  public get utilUnknownWifi() {
    return this.getNumberAttribute('util_unknown_wifi');
  }
}
export interface DataMistDeviceApStatsDeviceApStatsRadioStatBand6 {
}

export function dataMistDeviceApStatsDeviceApStatsRadioStatBand6ToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsRadioStatBand6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsRadioStatBand6ToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsRadioStatBand6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsRadioStatBand6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsRadioStatBand6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsRadioStatBand6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getNumberAttribute('channel');
  }

  // dynamic_chaining_enabled - computed: true, optional: false, required: false
  public get dynamicChainingEnabled() {
    return this.getBooleanAttribute('dynamic_chaining_enabled');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // noise_floor - computed: true, optional: false, required: false
  public get noiseFloor() {
    return this.getNumberAttribute('noise_floor');
  }

  // num_clients - computed: true, optional: false, required: false
  public get numClients() {
    return this.getNumberAttribute('num_clients');
  }

  // num_wlans - computed: true, optional: false, required: false
  public get numWlans() {
    return this.getNumberAttribute('num_wlans');
  }

  // power - computed: true, optional: false, required: false
  public get power() {
    return this.getNumberAttribute('power');
  }

  // rx_bytes - computed: true, optional: false, required: false
  public get rxBytes() {
    return this.getNumberAttribute('rx_bytes');
  }

  // rx_pkts - computed: true, optional: false, required: false
  public get rxPkts() {
    return this.getNumberAttribute('rx_pkts');
  }

  // tx_bytes - computed: true, optional: false, required: false
  public get txBytes() {
    return this.getNumberAttribute('tx_bytes');
  }

  // tx_pkts - computed: true, optional: false, required: false
  public get txPkts() {
    return this.getNumberAttribute('tx_pkts');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }

  // util_all - computed: true, optional: false, required: false
  public get utilAll() {
    return this.getNumberAttribute('util_all');
  }

  // util_non_wifi - computed: true, optional: false, required: false
  public get utilNonWifi() {
    return this.getNumberAttribute('util_non_wifi');
  }

  // util_rx_in_bss - computed: true, optional: false, required: false
  public get utilRxInBss() {
    return this.getNumberAttribute('util_rx_in_bss');
  }

  // util_rx_other_bss - computed: true, optional: false, required: false
  public get utilRxOtherBss() {
    return this.getNumberAttribute('util_rx_other_bss');
  }

  // util_tx - computed: true, optional: false, required: false
  public get utilTx() {
    return this.getNumberAttribute('util_tx');
  }

  // util_undecodable_wifi - computed: true, optional: false, required: false
  public get utilUndecodableWifi() {
    return this.getNumberAttribute('util_undecodable_wifi');
  }

  // util_unknown_wifi - computed: true, optional: false, required: false
  public get utilUnknownWifi() {
    return this.getNumberAttribute('util_unknown_wifi');
  }
}
export interface DataMistDeviceApStatsDeviceApStatsRadioStat {
}

export function dataMistDeviceApStatsDeviceApStatsRadioStatToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsRadioStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsRadioStatToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsRadioStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsRadioStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsRadioStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsRadioStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // band_24 - computed: true, optional: false, required: false
  private _band24 = new DataMistDeviceApStatsDeviceApStatsRadioStatBand24OutputReference(this, "band_24");
  public get band24() {
    return this._band24;
  }

  // band_5 - computed: true, optional: false, required: false
  private _band5 = new DataMistDeviceApStatsDeviceApStatsRadioStatBand5OutputReference(this, "band_5");
  public get band5() {
    return this._band5;
  }

  // band_6 - computed: true, optional: false, required: false
  private _band6 = new DataMistDeviceApStatsDeviceApStatsRadioStatBand6OutputReference(this, "band_6");
  public get band6() {
    return this._band6;
  }
}
export interface DataMistDeviceApStatsDeviceApStatsSwitchRedundancy {
}

export function dataMistDeviceApStatsDeviceApStatsSwitchRedundancyToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsSwitchRedundancy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsSwitchRedundancyToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsSwitchRedundancy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsSwitchRedundancyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsSwitchRedundancy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsSwitchRedundancy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // num_redundant_aps - computed: true, optional: false, required: false
  public get numRedundantAps() {
    return this.getNumberAttribute('num_redundant_aps');
  }
}
export interface DataMistDeviceApStatsDeviceApStatsUsbStat {
}

export function dataMistDeviceApStatsDeviceApStatsUsbStatToTerraform(struct?: DataMistDeviceApStatsDeviceApStatsUsbStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsUsbStatToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStatsUsbStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsUsbStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistDeviceApStatsDeviceApStatsUsbStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStatsUsbStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getNumberAttribute('channel');
  }

  // connected - computed: true, optional: false, required: false
  public get connected() {
    return this.getBooleanAttribute('connected');
  }

  // last_activity - computed: true, optional: false, required: false
  public get lastActivity() {
    return this.getNumberAttribute('last_activity');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getBooleanAttribute('up');
  }
}
export interface DataMistDeviceApStatsDeviceApStats {
}

export function dataMistDeviceApStatsDeviceApStatsToTerraform(struct?: DataMistDeviceApStatsDeviceApStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistDeviceApStatsDeviceApStatsToHclTerraform(struct?: DataMistDeviceApStatsDeviceApStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistDeviceApStatsDeviceApStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistDeviceApStatsDeviceApStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistDeviceApStatsDeviceApStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // antenna_select - computed: true, optional: false, required: false
  public get antennaSelect() {
    return this.getStringAttribute('antenna_select');
  }

  // auto_placement - computed: true, optional: false, required: false
  private _autoPlacement = new DataMistDeviceApStatsDeviceApStatsAutoPlacementOutputReference(this, "auto_placement");
  public get autoPlacement() {
    return this._autoPlacement;
  }

  // auto_upgrade_stat - computed: true, optional: false, required: false
  private _autoUpgradeStat = new DataMistDeviceApStatsDeviceApStatsAutoUpgradeStatOutputReference(this, "auto_upgrade_stat");
  public get autoUpgradeStat() {
    return this._autoUpgradeStat;
  }

  // ble_stat - computed: true, optional: false, required: false
  private _bleStat = new DataMistDeviceApStatsDeviceApStatsBleStatOutputReference(this, "ble_stat");
  public get bleStat() {
    return this._bleStat;
  }

  // cert_expiry - computed: true, optional: false, required: false
  public get certExpiry() {
    return this.getNumberAttribute('cert_expiry');
  }

  // config_reverted - computed: true, optional: false, required: false
  public get configReverted() {
    return this.getBooleanAttribute('config_reverted');
  }

  // cpu_system - computed: true, optional: false, required: false
  public get cpuSystem() {
    return this.getNumberAttribute('cpu_system');
  }

  // cpu_user - computed: true, optional: false, required: false
  public get cpuUser() {
    return this.getNumberAttribute('cpu_user');
  }

  // cpu_util - computed: true, optional: false, required: false
  public get cpuUtil() {
    return this.getNumberAttribute('cpu_util');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }

  // deviceprofile_id - computed: true, optional: false, required: false
  public get deviceprofileId() {
    return this.getStringAttribute('deviceprofile_id');
  }

  // env_stat - computed: true, optional: false, required: false
  private _envStat = new DataMistDeviceApStatsDeviceApStatsEnvStatOutputReference(this, "env_stat");
  public get envStat() {
    return this._envStat;
  }

  // esl_stat - computed: true, optional: false, required: false
  private _eslStat = new DataMistDeviceApStatsDeviceApStatsEslStatOutputReference(this, "esl_stat");
  public get eslStat() {
    return this._eslStat;
  }

  // expiring_certs - computed: true, optional: false, required: false
  private _expiringCerts = new cdktf.NumberMap(this, "expiring_certs");
  public get expiringCerts() {
    return this._expiringCerts;
  }

  // ext_ip - computed: true, optional: false, required: false
  public get extIp() {
    return this.getStringAttribute('ext_ip');
  }

  // fwupdate - computed: true, optional: false, required: false
  private _fwupdate = new DataMistDeviceApStatsDeviceApStatsFwupdateOutputReference(this, "fwupdate");
  public get fwupdate() {
    return this._fwupdate;
  }

  // gps_stat - computed: true, optional: false, required: false
  private _gpsStat = new DataMistDeviceApStatsDeviceApStatsGpsStatOutputReference(this, "gps_stat");
  public get gpsStat() {
    return this._gpsStat;
  }

  // hw_rev - computed: true, optional: false, required: false
  public get hwRev() {
    return this.getStringAttribute('hw_rev');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactive_wired_vlans - computed: true, optional: false, required: false
  public get inactiveWiredVlans() {
    return this.getNumberListAttribute('inactive_wired_vlans');
  }

  // iot_stat - computed: true, optional: false, required: false
  private _iotStat = new DataMistDeviceApStatsDeviceApStatsIotStatMap(this, "iot_stat");
  public get iotStat() {
    return this._iotStat;
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ip_config - computed: true, optional: false, required: false
  private _ipConfig = new DataMistDeviceApStatsDeviceApStatsIpConfigOutputReference(this, "ip_config");
  public get ipConfig() {
    return this._ipConfig;
  }

  // ip_stat - computed: true, optional: false, required: false
  private _ipStat = new DataMistDeviceApStatsDeviceApStatsIpStatOutputReference(this, "ip_stat");
  public get ipStat() {
    return this._ipStat;
  }

  // l2tp_stat - computed: true, optional: false, required: false
  private _l2TpStat = new DataMistDeviceApStatsDeviceApStatsL2TpStatMap(this, "l2tp_stat");
  public get l2TpStat() {
    return this._l2TpStat;
  }

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getNumberAttribute('last_seen');
  }

  // last_trouble - computed: true, optional: false, required: false
  private _lastTrouble = new DataMistDeviceApStatsDeviceApStatsLastTroubleOutputReference(this, "last_trouble");
  public get lastTrouble() {
    return this._lastTrouble;
  }

  // led - computed: true, optional: false, required: false
  private _led = new DataMistDeviceApStatsDeviceApStatsLedOutputReference(this, "led");
  public get led() {
    return this._led;
  }

  // lldp_stat - computed: true, optional: false, required: false
  private _lldpStat = new DataMistDeviceApStatsDeviceApStatsLldpStatOutputReference(this, "lldp_stat");
  public get lldpStat() {
    return this._lldpStat;
  }

  // lldp_stats - computed: true, optional: false, required: false
  private _lldpStats = new DataMistDeviceApStatsDeviceApStatsLldpStatsMap(this, "lldp_stats");
  public get lldpStats() {
    return this._lldpStats;
  }

  // locating - computed: true, optional: false, required: false
  public get locating() {
    return this.getBooleanAttribute('locating');
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // map_id - computed: true, optional: false, required: false
  public get mapId() {
    return this.getStringAttribute('map_id');
  }

  // mem_total_kb - computed: true, optional: false, required: false
  public get memTotalKb() {
    return this.getNumberAttribute('mem_total_kb');
  }

  // mem_used_kb - computed: true, optional: false, required: false
  public get memUsedKb() {
    return this.getNumberAttribute('mem_used_kb');
  }

  // mesh_downlinks - computed: true, optional: false, required: false
  private _meshDownlinks = new DataMistDeviceApStatsDeviceApStatsMeshDownlinksMap(this, "mesh_downlinks");
  public get meshDownlinks() {
    return this._meshDownlinks;
  }

  // mesh_uplink - computed: true, optional: false, required: false
  private _meshUplink = new DataMistDeviceApStatsDeviceApStatsMeshUplinkOutputReference(this, "mesh_uplink");
  public get meshUplink() {
    return this._meshUplink;
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getNumberAttribute('modified_time');
  }

  // mount - computed: true, optional: false, required: false
  public get mount() {
    return this.getStringAttribute('mount');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // num_clients - computed: true, optional: false, required: false
  public get numClients() {
    return this.getNumberAttribute('num_clients');
  }

  // num_wlans - computed: true, optional: false, required: false
  public get numWlans() {
    return this.getNumberAttribute('num_wlans');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // port_stat - computed: true, optional: false, required: false
  private _portStat = new DataMistDeviceApStatsDeviceApStatsPortStatMap(this, "port_stat");
  public get portStat() {
    return this._portStat;
  }

  // power_budget - computed: true, optional: false, required: false
  public get powerBudget() {
    return this.getNumberAttribute('power_budget');
  }

  // power_constrained - computed: true, optional: false, required: false
  public get powerConstrained() {
    return this.getBooleanAttribute('power_constrained');
  }

  // power_opmode - computed: true, optional: false, required: false
  public get powerOpmode() {
    return this.getStringAttribute('power_opmode');
  }

  // power_src - computed: true, optional: false, required: false
  public get powerSrc() {
    return this.getStringAttribute('power_src');
  }

  // radio_stat - computed: true, optional: false, required: false
  private _radioStat = new DataMistDeviceApStatsDeviceApStatsRadioStatOutputReference(this, "radio_stat");
  public get radioStat() {
    return this._radioStat;
  }

  // rx_bps - computed: true, optional: false, required: false
  public get rxBps() {
    return this.getNumberAttribute('rx_bps');
  }

  // rx_bytes - computed: true, optional: false, required: false
  public get rxBytes() {
    return this.getNumberAttribute('rx_bytes');
  }

  // rx_pkts - computed: true, optional: false, required: false
  public get rxPkts() {
    return this.getNumberAttribute('rx_pkts');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // switch_redundancy - computed: true, optional: false, required: false
  private _switchRedundancy = new DataMistDeviceApStatsDeviceApStatsSwitchRedundancyOutputReference(this, "switch_redundancy");
  public get switchRedundancy() {
    return this._switchRedundancy;
  }

  // tx_bps - computed: true, optional: false, required: false
  public get txBps() {
    return this.getNumberAttribute('tx_bps');
  }

  // tx_bytes - computed: true, optional: false, required: false
  public get txBytes() {
    return this.getNumberAttribute('tx_bytes');
  }

  // tx_pkts - computed: true, optional: false, required: false
  public get txPkts() {
    return this.getNumberAttribute('tx_pkts');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getNumberAttribute('uptime');
  }

  // usb_stat - computed: true, optional: false, required: false
  private _usbStat = new DataMistDeviceApStatsDeviceApStatsUsbStatOutputReference(this, "usb_stat");
  public get usbStat() {
    return this._usbStat;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // x - computed: true, optional: false, required: false
  public get x() {
    return this.getNumberAttribute('x');
  }

  // y - computed: true, optional: false, required: false
  public get y() {
    return this.getNumberAttribute('y');
  }
}

export class DataMistDeviceApStatsDeviceApStatsList extends cdktf.ComplexList {

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
  public get(index: number): DataMistDeviceApStatsDeviceApStatsOutputReference {
    return new DataMistDeviceApStatsDeviceApStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/device_ap_stats mist_device_ap_stats}
*/
export class DataMistDeviceApStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_device_ap_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistDeviceApStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistDeviceApStats to import
  * @param importFromId The id of the existing DataMistDeviceApStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/device_ap_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistDeviceApStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_device_ap_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/device_ap_stats mist_device_ap_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistDeviceApStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMistDeviceApStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_device_ap_stats',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
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

  // device_ap_stats - computed: true, optional: false, required: false
  private _deviceApStats = new DataMistDeviceApStatsDeviceApStatsList(this, "device_ap_stats", true);
  public get deviceApStats() {
    return this._deviceApStats;
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
