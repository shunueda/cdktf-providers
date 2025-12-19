// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SflowPollingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Polling CPU usage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#cpu_usage SflowPolling#cpu_usage}
  */
  readonly cpuUsage?: number;
  /**
  * Polling HTTP counters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#http_counter SflowPolling#http_counter}
  */
  readonly httpCounter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#id SflowPolling#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#uuid SflowPolling#uuid}
  */
  readonly uuid?: string;
  /**
  * a10_proprietary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#a10_proprietary SflowPolling#a10_proprietary}
  */
  readonly a10Proprietary?: SflowPollingA10Proprietary;
  /**
  * acos_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#acos_info SflowPolling#acos_info}
  */
  readonly acosInfo?: SflowPollingAcosInfo;
  /**
  * ddos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#ddos SflowPolling#ddos}
  */
  readonly ddos?: SflowPollingDdos;
  /**
  * eth_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#eth_list SflowPolling#eth_list}
  */
  readonly ethList?: SflowPollingEthListStruct[] | cdktf.IResolvable;
  /**
  * ethernet_ext_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#ethernet_ext_list SflowPolling#ethernet_ext_list}
  */
  readonly ethernetExtList?: SflowPollingEthernetExtListStruct[] | cdktf.IResolvable;
  /**
  * ethernet_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#ethernet_list SflowPolling#ethernet_list}
  */
  readonly ethernetList?: SflowPollingEthernetListStruct[] | cdktf.IResolvable;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#http SflowPolling#http}
  */
  readonly http?: SflowPollingHttp;
  /**
  * system_health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#system_health SflowPolling#system_health}
  */
  readonly systemHealth?: SflowPollingSystemHealth;
  /**
  * ve_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#ve_list SflowPolling#ve_list}
  */
  readonly veList?: SflowPollingVeListStruct[] | cdktf.IResolvable;
}
export interface SflowPollingA10Proprietary {
  /**
  * Export deprecated counters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#export_deprecated_counters SflowPolling#export_deprecated_counters}
  */
  readonly exportDeprecatedCounters?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#uuid SflowPolling#uuid}
  */
  readonly uuid?: string;
}

export function sflowPollingA10ProprietaryToTerraform(struct?: SflowPollingA10ProprietaryOutputReference | SflowPollingA10Proprietary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_deprecated_counters: cdktf.numberToTerraform(struct!.exportDeprecatedCounters),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function sflowPollingA10ProprietaryToHclTerraform(struct?: SflowPollingA10ProprietaryOutputReference | SflowPollingA10Proprietary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_deprecated_counters: {
      value: cdktf.numberToHclTerraform(struct!.exportDeprecatedCounters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SflowPollingA10ProprietaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SflowPollingA10Proprietary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportDeprecatedCounters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportDeprecatedCounters = this._exportDeprecatedCounters;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SflowPollingA10Proprietary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exportDeprecatedCounters = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exportDeprecatedCounters = value.exportDeprecatedCounters;
      this._uuid = value.uuid;
    }
  }

  // export_deprecated_counters - computed: false, optional: true, required: false
  private _exportDeprecatedCounters?: number; 
  public get exportDeprecatedCounters() {
    return this.getNumberAttribute('export_deprecated_counters');
  }
  public set exportDeprecatedCounters(value: number) {
    this._exportDeprecatedCounters = value;
  }
  public resetExportDeprecatedCounters() {
    this._exportDeprecatedCounters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportDeprecatedCountersInput() {
    return this._exportDeprecatedCounters;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface SflowPollingAcosInfo {
  /**
  * 'enable': Enable polling ACOS Information; 'disable': Disable polling ACOS Information;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#toggle SflowPolling#toggle}
  */
  readonly toggle?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#uuid SflowPolling#uuid}
  */
  readonly uuid?: string;
}

export function sflowPollingAcosInfoToTerraform(struct?: SflowPollingAcosInfoOutputReference | SflowPollingAcosInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    toggle: cdktf.stringToTerraform(struct!.toggle),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function sflowPollingAcosInfoToHclTerraform(struct?: SflowPollingAcosInfoOutputReference | SflowPollingAcosInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    toggle: {
      value: cdktf.stringToHclTerraform(struct!.toggle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SflowPollingAcosInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SflowPollingAcosInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.toggle = this._toggle;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SflowPollingAcosInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toggle = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toggle = value.toggle;
      this._uuid = value.uuid;
    }
  }

  // toggle - computed: false, optional: true, required: false
  private _toggle?: string; 
  public get toggle() {
    return this.getStringAttribute('toggle');
  }
  public set toggle(value: string) {
    this._toggle = value;
  }
  public resetToggle() {
    this._toggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toggleInput() {
    return this._toggle;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface SflowPollingDdos {
  /**
  * Enable polling for auto discovered sni
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#auto_discovered_sni SflowPolling#auto_discovered_sni}
  */
  readonly autoDiscoveredSni?: number;
  /**
  * Enable polling for dns cache per instance and per zone statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#dns_cache_zone_stats SflowPolling#dns_cache_zone_stats}
  */
  readonly dnsCacheZoneStats?: number;
  /**
  * Enable polling for dynamic entry statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#dyn_entry_stats SflowPolling#dyn_entry_stats}
  */
  readonly dynEntryStats?: number;
  /**
  * Enable Polling for system wide anomaly statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#enable_anomaly_stats SflowPolling#enable_anomaly_stats}
  */
  readonly enableAnomalyStats?: number;
  /**
  * 'enable': Enable sflow polling for DDOS statistics; 'disable': Disable sflow polling for DDOS statistics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#toggle SflowPolling#toggle}
  */
  readonly toggle?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#uuid SflowPolling#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable polling for zone session information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#zone_session SflowPolling#zone_session}
  */
  readonly zoneSession?: number;
}

export function sflowPollingDdosToTerraform(struct?: SflowPollingDdosOutputReference | SflowPollingDdos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_discovered_sni: cdktf.numberToTerraform(struct!.autoDiscoveredSni),
    dns_cache_zone_stats: cdktf.numberToTerraform(struct!.dnsCacheZoneStats),
    dyn_entry_stats: cdktf.numberToTerraform(struct!.dynEntryStats),
    enable_anomaly_stats: cdktf.numberToTerraform(struct!.enableAnomalyStats),
    toggle: cdktf.stringToTerraform(struct!.toggle),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_session: cdktf.numberToTerraform(struct!.zoneSession),
  }
}


export function sflowPollingDdosToHclTerraform(struct?: SflowPollingDdosOutputReference | SflowPollingDdos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_discovered_sni: {
      value: cdktf.numberToHclTerraform(struct!.autoDiscoveredSni),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_cache_zone_stats: {
      value: cdktf.numberToHclTerraform(struct!.dnsCacheZoneStats),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dyn_entry_stats: {
      value: cdktf.numberToHclTerraform(struct!.dynEntryStats),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_anomaly_stats: {
      value: cdktf.numberToHclTerraform(struct!.enableAnomalyStats),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    toggle: {
      value: cdktf.stringToHclTerraform(struct!.toggle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_session: {
      value: cdktf.numberToHclTerraform(struct!.zoneSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SflowPollingDdosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SflowPollingDdos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDiscoveredSni !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDiscoveredSni = this._autoDiscoveredSni;
    }
    if (this._dnsCacheZoneStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCacheZoneStats = this._dnsCacheZoneStats;
    }
    if (this._dynEntryStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynEntryStats = this._dynEntryStats;
    }
    if (this._enableAnomalyStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAnomalyStats = this._enableAnomalyStats;
    }
    if (this._toggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.toggle = this._toggle;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSession = this._zoneSession;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SflowPollingDdos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoDiscoveredSni = undefined;
      this._dnsCacheZoneStats = undefined;
      this._dynEntryStats = undefined;
      this._enableAnomalyStats = undefined;
      this._toggle = undefined;
      this._uuid = undefined;
      this._zoneSession = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoDiscoveredSni = value.autoDiscoveredSni;
      this._dnsCacheZoneStats = value.dnsCacheZoneStats;
      this._dynEntryStats = value.dynEntryStats;
      this._enableAnomalyStats = value.enableAnomalyStats;
      this._toggle = value.toggle;
      this._uuid = value.uuid;
      this._zoneSession = value.zoneSession;
    }
  }

  // auto_discovered_sni - computed: false, optional: true, required: false
  private _autoDiscoveredSni?: number; 
  public get autoDiscoveredSni() {
    return this.getNumberAttribute('auto_discovered_sni');
  }
  public set autoDiscoveredSni(value: number) {
    this._autoDiscoveredSni = value;
  }
  public resetAutoDiscoveredSni() {
    this._autoDiscoveredSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoveredSniInput() {
    return this._autoDiscoveredSni;
  }

  // dns_cache_zone_stats - computed: false, optional: true, required: false
  private _dnsCacheZoneStats?: number; 
  public get dnsCacheZoneStats() {
    return this.getNumberAttribute('dns_cache_zone_stats');
  }
  public set dnsCacheZoneStats(value: number) {
    this._dnsCacheZoneStats = value;
  }
  public resetDnsCacheZoneStats() {
    this._dnsCacheZoneStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheZoneStatsInput() {
    return this._dnsCacheZoneStats;
  }

  // dyn_entry_stats - computed: false, optional: true, required: false
  private _dynEntryStats?: number; 
  public get dynEntryStats() {
    return this.getNumberAttribute('dyn_entry_stats');
  }
  public set dynEntryStats(value: number) {
    this._dynEntryStats = value;
  }
  public resetDynEntryStats() {
    this._dynEntryStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynEntryStatsInput() {
    return this._dynEntryStats;
  }

  // enable_anomaly_stats - computed: false, optional: true, required: false
  private _enableAnomalyStats?: number; 
  public get enableAnomalyStats() {
    return this.getNumberAttribute('enable_anomaly_stats');
  }
  public set enableAnomalyStats(value: number) {
    this._enableAnomalyStats = value;
  }
  public resetEnableAnomalyStats() {
    this._enableAnomalyStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAnomalyStatsInput() {
    return this._enableAnomalyStats;
  }

  // toggle - computed: false, optional: true, required: false
  private _toggle?: string; 
  public get toggle() {
    return this.getStringAttribute('toggle');
  }
  public set toggle(value: string) {
    this._toggle = value;
  }
  public resetToggle() {
    this._toggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toggleInput() {
    return this._toggle;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // zone_session - computed: false, optional: true, required: false
  private _zoneSession?: number; 
  public get zoneSession() {
    return this.getNumberAttribute('zone_session');
  }
  public set zoneSession(value: number) {
    this._zoneSession = value;
  }
  public resetZoneSession() {
    this._zoneSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSessionInput() {
    return this._zoneSession;
  }
}
export interface SflowPollingEthListStruct {
  /**
  * Ethernet interface to sample
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#eth_end SflowPolling#eth_end}
  */
  readonly ethEnd?: number;
  /**
  * Ethernet interface to sample
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#eth_start SflowPolling#eth_start}
  */
  readonly ethStart?: number;
}

export function sflowPollingEthListStructToTerraform(struct?: SflowPollingEthListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eth_end: cdktf.numberToTerraform(struct!.ethEnd),
    eth_start: cdktf.numberToTerraform(struct!.ethStart),
  }
}


export function sflowPollingEthListStructToHclTerraform(struct?: SflowPollingEthListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eth_end: {
      value: cdktf.numberToHclTerraform(struct!.ethEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eth_start: {
      value: cdktf.numberToHclTerraform(struct!.ethStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SflowPollingEthListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SflowPollingEthListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethEnd = this._ethEnd;
    }
    if (this._ethStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethStart = this._ethStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SflowPollingEthListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethEnd = undefined;
      this._ethStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethEnd = value.ethEnd;
      this._ethStart = value.ethStart;
    }
  }

  // eth_end - computed: false, optional: true, required: false
  private _ethEnd?: number; 
  public get ethEnd() {
    return this.getNumberAttribute('eth_end');
  }
  public set ethEnd(value: number) {
    this._ethEnd = value;
  }
  public resetEthEnd() {
    this._ethEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethEndInput() {
    return this._ethEnd;
  }

  // eth_start - computed: false, optional: true, required: false
  private _ethStart?: number; 
  public get ethStart() {
    return this.getNumberAttribute('eth_start');
  }
  public set ethStart(value: number) {
    this._ethStart = value;
  }
  public resetEthStart() {
    this._ethStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethStartInput() {
    return this._ethStart;
  }
}

export class SflowPollingEthListStructList extends cdktf.ComplexList {
  public internalValue? : SflowPollingEthListStruct[] | cdktf.IResolvable

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
  public get(index: number): SflowPollingEthListStructOutputReference {
    return new SflowPollingEthListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SflowPollingEthernetExtListStruct {
  /**
  * Ethernet interface to poll
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#start SflowPolling#start}
  */
  readonly start: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#uuid SflowPolling#uuid}
  */
  readonly uuid?: string;
}

export function sflowPollingEthernetExtListStructToTerraform(struct?: SflowPollingEthernetExtListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start: cdktf.numberToTerraform(struct!.start),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function sflowPollingEthernetExtListStructToHclTerraform(struct?: SflowPollingEthernetExtListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SflowPollingEthernetExtListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SflowPollingEthernetExtListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SflowPollingEthernetExtListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._start = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._start = value.start;
      this._uuid = value.uuid;
    }
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class SflowPollingEthernetExtListStructList extends cdktf.ComplexList {
  public internalValue? : SflowPollingEthernetExtListStruct[] | cdktf.IResolvable

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
  public get(index: number): SflowPollingEthernetExtListStructOutputReference {
    return new SflowPollingEthernetExtListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SflowPollingEthernetListStruct {
  /**
  * Ethernet interface to poll
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#start SflowPolling#start}
  */
  readonly start: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#uuid SflowPolling#uuid}
  */
  readonly uuid?: string;
}

export function sflowPollingEthernetListStructToTerraform(struct?: SflowPollingEthernetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start: cdktf.numberToTerraform(struct!.start),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function sflowPollingEthernetListStructToHclTerraform(struct?: SflowPollingEthernetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SflowPollingEthernetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SflowPollingEthernetListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SflowPollingEthernetListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._start = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._start = value.start;
      this._uuid = value.uuid;
    }
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class SflowPollingEthernetListStructList extends cdktf.ComplexList {
  public internalValue? : SflowPollingEthernetListStruct[] | cdktf.IResolvable

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
  public get(index: number): SflowPollingEthernetListStructOutputReference {
    return new SflowPollingEthernetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SflowPollingHttp {
  /**
  * 'enable': Enable polling HTTP counters; 'disable': Disable polling HTTP counters;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#toggle SflowPolling#toggle}
  */
  readonly toggle?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#uuid SflowPolling#uuid}
  */
  readonly uuid?: string;
}

export function sflowPollingHttpToTerraform(struct?: SflowPollingHttpOutputReference | SflowPollingHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    toggle: cdktf.stringToTerraform(struct!.toggle),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function sflowPollingHttpToHclTerraform(struct?: SflowPollingHttpOutputReference | SflowPollingHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    toggle: {
      value: cdktf.stringToHclTerraform(struct!.toggle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SflowPollingHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SflowPollingHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.toggle = this._toggle;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SflowPollingHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toggle = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toggle = value.toggle;
      this._uuid = value.uuid;
    }
  }

  // toggle - computed: false, optional: true, required: false
  private _toggle?: string; 
  public get toggle() {
    return this.getStringAttribute('toggle');
  }
  public set toggle(value: string) {
    this._toggle = value;
  }
  public resetToggle() {
    this._toggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toggleInput() {
    return this._toggle;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface SflowPollingSystemHealth {
  /**
  * 'enable': Enable polling license statistics; 'disable': Disable polling license statistics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#license_statistics SflowPolling#license_statistics}
  */
  readonly licenseStatistics?: string;
  /**
  * 'enable': Enable polling control cpu; 'disable': Disable polling control cpu usage;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#per_control_cpu_usage SflowPolling#per_control_cpu_usage}
  */
  readonly perControlCpuUsage?: string;
  /**
  * 'enable': Enable polling data cpu; 'disable': Disable polling data cpu usage;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#per_data_cpu_usage SflowPolling#per_data_cpu_usage}
  */
  readonly perDataCpuUsage?: string;
  /**
  * 'enable': Enable polling system health information; 'disable': Disable polling system health information;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#system_health_usage SflowPolling#system_health_usage}
  */
  readonly systemHealthUsage?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#uuid SflowPolling#uuid}
  */
  readonly uuid?: string;
}

export function sflowPollingSystemHealthToTerraform(struct?: SflowPollingSystemHealthOutputReference | SflowPollingSystemHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_statistics: cdktf.stringToTerraform(struct!.licenseStatistics),
    per_control_cpu_usage: cdktf.stringToTerraform(struct!.perControlCpuUsage),
    per_data_cpu_usage: cdktf.stringToTerraform(struct!.perDataCpuUsage),
    system_health_usage: cdktf.stringToTerraform(struct!.systemHealthUsage),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function sflowPollingSystemHealthToHclTerraform(struct?: SflowPollingSystemHealthOutputReference | SflowPollingSystemHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license_statistics: {
      value: cdktf.stringToHclTerraform(struct!.licenseStatistics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_control_cpu_usage: {
      value: cdktf.stringToHclTerraform(struct!.perControlCpuUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_data_cpu_usage: {
      value: cdktf.stringToHclTerraform(struct!.perDataCpuUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_health_usage: {
      value: cdktf.stringToHclTerraform(struct!.systemHealthUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SflowPollingSystemHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SflowPollingSystemHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseStatistics = this._licenseStatistics;
    }
    if (this._perControlCpuUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.perControlCpuUsage = this._perControlCpuUsage;
    }
    if (this._perDataCpuUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.perDataCpuUsage = this._perDataCpuUsage;
    }
    if (this._systemHealthUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemHealthUsage = this._systemHealthUsage;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SflowPollingSystemHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._licenseStatistics = undefined;
      this._perControlCpuUsage = undefined;
      this._perDataCpuUsage = undefined;
      this._systemHealthUsage = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._licenseStatistics = value.licenseStatistics;
      this._perControlCpuUsage = value.perControlCpuUsage;
      this._perDataCpuUsage = value.perDataCpuUsage;
      this._systemHealthUsage = value.systemHealthUsage;
      this._uuid = value.uuid;
    }
  }

  // license_statistics - computed: false, optional: true, required: false
  private _licenseStatistics?: string; 
  public get licenseStatistics() {
    return this.getStringAttribute('license_statistics');
  }
  public set licenseStatistics(value: string) {
    this._licenseStatistics = value;
  }
  public resetLicenseStatistics() {
    this._licenseStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseStatisticsInput() {
    return this._licenseStatistics;
  }

  // per_control_cpu_usage - computed: false, optional: true, required: false
  private _perControlCpuUsage?: string; 
  public get perControlCpuUsage() {
    return this.getStringAttribute('per_control_cpu_usage');
  }
  public set perControlCpuUsage(value: string) {
    this._perControlCpuUsage = value;
  }
  public resetPerControlCpuUsage() {
    this._perControlCpuUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perControlCpuUsageInput() {
    return this._perControlCpuUsage;
  }

  // per_data_cpu_usage - computed: false, optional: true, required: false
  private _perDataCpuUsage?: string; 
  public get perDataCpuUsage() {
    return this.getStringAttribute('per_data_cpu_usage');
  }
  public set perDataCpuUsage(value: string) {
    this._perDataCpuUsage = value;
  }
  public resetPerDataCpuUsage() {
    this._perDataCpuUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perDataCpuUsageInput() {
    return this._perDataCpuUsage;
  }

  // system_health_usage - computed: false, optional: true, required: false
  private _systemHealthUsage?: string; 
  public get systemHealthUsage() {
    return this.getStringAttribute('system_health_usage');
  }
  public set systemHealthUsage(value: string) {
    this._systemHealthUsage = value;
  }
  public resetSystemHealthUsage() {
    this._systemHealthUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemHealthUsageInput() {
    return this._systemHealthUsage;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface SflowPollingVeListStruct {
  /**
  * VE interface to sample
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#ve_end SflowPolling#ve_end}
  */
  readonly veEnd?: number;
  /**
  * VE interface to sample
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#ve_start SflowPolling#ve_start}
  */
  readonly veStart?: number;
}

export function sflowPollingVeListStructToTerraform(struct?: SflowPollingVeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve_end: cdktf.numberToTerraform(struct!.veEnd),
    ve_start: cdktf.numberToTerraform(struct!.veStart),
  }
}


export function sflowPollingVeListStructToHclTerraform(struct?: SflowPollingVeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ve_end: {
      value: cdktf.numberToHclTerraform(struct!.veEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ve_start: {
      value: cdktf.numberToHclTerraform(struct!.veStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SflowPollingVeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SflowPollingVeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._veEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.veEnd = this._veEnd;
    }
    if (this._veStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.veStart = this._veStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SflowPollingVeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._veEnd = undefined;
      this._veStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._veEnd = value.veEnd;
      this._veStart = value.veStart;
    }
  }

  // ve_end - computed: false, optional: true, required: false
  private _veEnd?: number; 
  public get veEnd() {
    return this.getNumberAttribute('ve_end');
  }
  public set veEnd(value: number) {
    this._veEnd = value;
  }
  public resetVeEnd() {
    this._veEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veEndInput() {
    return this._veEnd;
  }

  // ve_start - computed: false, optional: true, required: false
  private _veStart?: number; 
  public get veStart() {
    return this.getNumberAttribute('ve_start');
  }
  public set veStart(value: number) {
    this._veStart = value;
  }
  public resetVeStart() {
    this._veStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veStartInput() {
    return this._veStart;
  }
}

export class SflowPollingVeListStructList extends cdktf.ComplexList {
  public internalValue? : SflowPollingVeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SflowPollingVeListStructOutputReference {
    return new SflowPollingVeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling thunder_sflow_polling}
*/
export class SflowPolling extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sflow_polling";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SflowPolling resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SflowPolling to import
  * @param importFromId The id of the existing SflowPolling that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SflowPolling to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sflow_polling", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling thunder_sflow_polling} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SflowPollingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SflowPollingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sflow_polling',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpuUsage = config.cpuUsage;
    this._httpCounter = config.httpCounter;
    this._id = config.id;
    this._uuid = config.uuid;
    this._a10Proprietary.internalValue = config.a10Proprietary;
    this._acosInfo.internalValue = config.acosInfo;
    this._ddos.internalValue = config.ddos;
    this._ethList.internalValue = config.ethList;
    this._ethernetExtList.internalValue = config.ethernetExtList;
    this._ethernetList.internalValue = config.ethernetList;
    this._http.internalValue = config.http;
    this._systemHealth.internalValue = config.systemHealth;
    this._veList.internalValue = config.veList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_usage - computed: false, optional: true, required: false
  private _cpuUsage?: number; 
  public get cpuUsage() {
    return this.getNumberAttribute('cpu_usage');
  }
  public set cpuUsage(value: number) {
    this._cpuUsage = value;
  }
  public resetCpuUsage() {
    this._cpuUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageInput() {
    return this._cpuUsage;
  }

  // http_counter - computed: false, optional: true, required: false
  private _httpCounter?: number; 
  public get httpCounter() {
    return this.getNumberAttribute('http_counter');
  }
  public set httpCounter(value: number) {
    this._httpCounter = value;
  }
  public resetHttpCounter() {
    this._httpCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCounterInput() {
    return this._httpCounter;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // a10_proprietary - computed: false, optional: true, required: false
  private _a10Proprietary = new SflowPollingA10ProprietaryOutputReference(this, "a10_proprietary");
  public get a10Proprietary() {
    return this._a10Proprietary;
  }
  public putA10Proprietary(value: SflowPollingA10Proprietary) {
    this._a10Proprietary.internalValue = value;
  }
  public resetA10Proprietary() {
    this._a10Proprietary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a10ProprietaryInput() {
    return this._a10Proprietary.internalValue;
  }

  // acos_info - computed: false, optional: true, required: false
  private _acosInfo = new SflowPollingAcosInfoOutputReference(this, "acos_info");
  public get acosInfo() {
    return this._acosInfo;
  }
  public putAcosInfo(value: SflowPollingAcosInfo) {
    this._acosInfo.internalValue = value;
  }
  public resetAcosInfo() {
    this._acosInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acosInfoInput() {
    return this._acosInfo.internalValue;
  }

  // ddos - computed: false, optional: true, required: false
  private _ddos = new SflowPollingDdosOutputReference(this, "ddos");
  public get ddos() {
    return this._ddos;
  }
  public putDdos(value: SflowPollingDdos) {
    this._ddos.internalValue = value;
  }
  public resetDdos() {
    this._ddos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosInput() {
    return this._ddos.internalValue;
  }

  // eth_list - computed: false, optional: true, required: false
  private _ethList = new SflowPollingEthListStructList(this, "eth_list", false);
  public get ethList() {
    return this._ethList;
  }
  public putEthList(value: SflowPollingEthListStruct[] | cdktf.IResolvable) {
    this._ethList.internalValue = value;
  }
  public resetEthList() {
    this._ethList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethListInput() {
    return this._ethList.internalValue;
  }

  // ethernet_ext_list - computed: false, optional: true, required: false
  private _ethernetExtList = new SflowPollingEthernetExtListStructList(this, "ethernet_ext_list", false);
  public get ethernetExtList() {
    return this._ethernetExtList;
  }
  public putEthernetExtList(value: SflowPollingEthernetExtListStruct[] | cdktf.IResolvable) {
    this._ethernetExtList.internalValue = value;
  }
  public resetEthernetExtList() {
    this._ethernetExtList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetExtListInput() {
    return this._ethernetExtList.internalValue;
  }

  // ethernet_list - computed: false, optional: true, required: false
  private _ethernetList = new SflowPollingEthernetListStructList(this, "ethernet_list", false);
  public get ethernetList() {
    return this._ethernetList;
  }
  public putEthernetList(value: SflowPollingEthernetListStruct[] | cdktf.IResolvable) {
    this._ethernetList.internalValue = value;
  }
  public resetEthernetList() {
    this._ethernetList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetListInput() {
    return this._ethernetList.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new SflowPollingHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: SflowPollingHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // system_health - computed: false, optional: true, required: false
  private _systemHealth = new SflowPollingSystemHealthOutputReference(this, "system_health");
  public get systemHealth() {
    return this._systemHealth;
  }
  public putSystemHealth(value: SflowPollingSystemHealth) {
    this._systemHealth.internalValue = value;
  }
  public resetSystemHealth() {
    this._systemHealth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemHealthInput() {
    return this._systemHealth.internalValue;
  }

  // ve_list - computed: false, optional: true, required: false
  private _veList = new SflowPollingVeListStructList(this, "ve_list", false);
  public get veList() {
    return this._veList;
  }
  public putVeList(value: SflowPollingVeListStruct[] | cdktf.IResolvable) {
    this._veList.internalValue = value;
  }
  public resetVeList() {
    this._veList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veListInput() {
    return this._veList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_usage: cdktf.numberToTerraform(this._cpuUsage),
      http_counter: cdktf.numberToTerraform(this._httpCounter),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      a10_proprietary: sflowPollingA10ProprietaryToTerraform(this._a10Proprietary.internalValue),
      acos_info: sflowPollingAcosInfoToTerraform(this._acosInfo.internalValue),
      ddos: sflowPollingDdosToTerraform(this._ddos.internalValue),
      eth_list: cdktf.listMapper(sflowPollingEthListStructToTerraform, true)(this._ethList.internalValue),
      ethernet_ext_list: cdktf.listMapper(sflowPollingEthernetExtListStructToTerraform, true)(this._ethernetExtList.internalValue),
      ethernet_list: cdktf.listMapper(sflowPollingEthernetListStructToTerraform, true)(this._ethernetList.internalValue),
      http: sflowPollingHttpToTerraform(this._http.internalValue),
      system_health: sflowPollingSystemHealthToTerraform(this._systemHealth.internalValue),
      ve_list: cdktf.listMapper(sflowPollingVeListStructToTerraform, true)(this._veList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_usage: {
        value: cdktf.numberToHclTerraform(this._cpuUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_counter: {
        value: cdktf.numberToHclTerraform(this._httpCounter),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      a10_proprietary: {
        value: sflowPollingA10ProprietaryToHclTerraform(this._a10Proprietary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SflowPollingA10ProprietaryList",
      },
      acos_info: {
        value: sflowPollingAcosInfoToHclTerraform(this._acosInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SflowPollingAcosInfoList",
      },
      ddos: {
        value: sflowPollingDdosToHclTerraform(this._ddos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SflowPollingDdosList",
      },
      eth_list: {
        value: cdktf.listMapperHcl(sflowPollingEthListStructToHclTerraform, true)(this._ethList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SflowPollingEthListStructList",
      },
      ethernet_ext_list: {
        value: cdktf.listMapperHcl(sflowPollingEthernetExtListStructToHclTerraform, true)(this._ethernetExtList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SflowPollingEthernetExtListStructList",
      },
      ethernet_list: {
        value: cdktf.listMapperHcl(sflowPollingEthernetListStructToHclTerraform, true)(this._ethernetList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SflowPollingEthernetListStructList",
      },
      http: {
        value: sflowPollingHttpToHclTerraform(this._http.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SflowPollingHttpList",
      },
      system_health: {
        value: sflowPollingSystemHealthToHclTerraform(this._systemHealth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SflowPollingSystemHealthList",
      },
      ve_list: {
        value: cdktf.listMapperHcl(sflowPollingVeListStructToHclTerraform, true)(this._veList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SflowPollingVeListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
