// https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfacePhysicalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#active_mac_address InterfacePhysical#active_mac_address}
  */
  readonly activeMacAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#forward_traffic_cx InterfacePhysical#forward_traffic_cx}
  */
  readonly forwardTrafficCx?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#forward_traffic_sfr InterfacePhysical#forward_traffic_sfr}
  */
  readonly forwardTrafficSfr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#hardware_id InterfacePhysical#hardware_id}
  */
  readonly hardwareId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#id InterfacePhysical#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#interface_desc InterfacePhysical#interface_desc}
  */
  readonly interfaceDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#last_updated InterfacePhysical#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#management_only InterfacePhysical#management_only}
  */
  readonly managementOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#mtu InterfacePhysical#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#name InterfacePhysical#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#security_level InterfacePhysical#security_level}
  */
  readonly securityLevel: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#shutdown InterfacePhysical#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#stand_by_mac_address InterfacePhysical#stand_by_mac_address}
  */
  readonly standByMacAddress?: string;
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#ip_address InterfacePhysical#ip_address}
  */
  readonly ipAddress?: InterfacePhysicalIpAddress;
  /**
  * ipv6_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#ipv6_info InterfacePhysical#ipv6_info}
  */
  readonly ipv6Info?: InterfacePhysicalIpv6Info;
}
export interface InterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#data_size_in_bytes InterfacePhysical#data_size_in_bytes}
  */
  readonly dataSizeInBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#frequency_in_seconds InterfacePhysical#frequency_in_seconds}
  */
  readonly frequencyInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#num_packets InterfacePhysical#num_packets}
  */
  readonly numPackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#sla_id InterfacePhysical#sla_id}
  */
  readonly slaId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#threshold_in_milliseconds InterfacePhysical#threshold_in_milliseconds}
  */
  readonly thresholdInMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#timeout_in_milliseconds InterfacePhysical#timeout_in_milliseconds}
  */
  readonly timeoutInMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#tos InterfacePhysical#tos}
  */
  readonly tos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#tracked_ip InterfacePhysical#tracked_ip}
  */
  readonly trackedIp?: string;
}

export function interfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsToTerraform(struct?: InterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_size_in_bytes: cdktf.numberToTerraform(struct!.dataSizeInBytes),
    frequency_in_seconds: cdktf.numberToTerraform(struct!.frequencyInSeconds),
    num_packets: cdktf.numberToTerraform(struct!.numPackets),
    sla_id: cdktf.numberToTerraform(struct!.slaId),
    threshold_in_milliseconds: cdktf.numberToTerraform(struct!.thresholdInMilliseconds),
    timeout_in_milliseconds: cdktf.numberToTerraform(struct!.timeoutInMilliseconds),
    tos: cdktf.numberToTerraform(struct!.tos),
    tracked_ip: cdktf.stringToTerraform(struct!.trackedIp),
  }
}


export function interfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsToHclTerraform(struct?: InterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_size_in_bytes: {
      value: cdktf.numberToHclTerraform(struct!.dataSizeInBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.frequencyInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_packets: {
      value: cdktf.numberToHclTerraform(struct!.numPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sla_id: {
      value: cdktf.numberToHclTerraform(struct!.slaId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_in_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.thresholdInMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tos: {
      value: cdktf.numberToHclTerraform(struct!.tos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracked_ip: {
      value: cdktf.stringToHclTerraform(struct!.trackedIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSizeInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSizeInBytes = this._dataSizeInBytes;
    }
    if (this._frequencyInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyInSeconds = this._frequencyInSeconds;
    }
    if (this._numPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPackets = this._numPackets;
    }
    if (this._slaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaId = this._slaId;
    }
    if (this._thresholdInMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdInMilliseconds = this._thresholdInMilliseconds;
    }
    if (this._timeoutInMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMilliseconds = this._timeoutInMilliseconds;
    }
    if (this._tos !== undefined) {
      hasAnyValues = true;
      internalValueResult.tos = this._tos;
    }
    if (this._trackedIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackedIp = this._trackedIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSizeInBytes = undefined;
      this._frequencyInSeconds = undefined;
      this._numPackets = undefined;
      this._slaId = undefined;
      this._thresholdInMilliseconds = undefined;
      this._timeoutInMilliseconds = undefined;
      this._tos = undefined;
      this._trackedIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSizeInBytes = value.dataSizeInBytes;
      this._frequencyInSeconds = value.frequencyInSeconds;
      this._numPackets = value.numPackets;
      this._slaId = value.slaId;
      this._thresholdInMilliseconds = value.thresholdInMilliseconds;
      this._timeoutInMilliseconds = value.timeoutInMilliseconds;
      this._tos = value.tos;
      this._trackedIp = value.trackedIp;
    }
  }

  // data_size_in_bytes - computed: false, optional: true, required: false
  private _dataSizeInBytes?: number; 
  public get dataSizeInBytes() {
    return this.getNumberAttribute('data_size_in_bytes');
  }
  public set dataSizeInBytes(value: number) {
    this._dataSizeInBytes = value;
  }
  public resetDataSizeInBytes() {
    this._dataSizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSizeInBytesInput() {
    return this._dataSizeInBytes;
  }

  // frequency_in_seconds - computed: false, optional: true, required: false
  private _frequencyInSeconds?: number; 
  public get frequencyInSeconds() {
    return this.getNumberAttribute('frequency_in_seconds');
  }
  public set frequencyInSeconds(value: number) {
    this._frequencyInSeconds = value;
  }
  public resetFrequencyInSeconds() {
    this._frequencyInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInSecondsInput() {
    return this._frequencyInSeconds;
  }

  // num_packets - computed: false, optional: true, required: false
  private _numPackets?: number; 
  public get numPackets() {
    return this.getNumberAttribute('num_packets');
  }
  public set numPackets(value: number) {
    this._numPackets = value;
  }
  public resetNumPackets() {
    this._numPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPacketsInput() {
    return this._numPackets;
  }

  // sla_id - computed: false, optional: true, required: false
  private _slaId?: number; 
  public get slaId() {
    return this.getNumberAttribute('sla_id');
  }
  public set slaId(value: number) {
    this._slaId = value;
  }
  public resetSlaId() {
    this._slaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaIdInput() {
    return this._slaId;
  }

  // threshold_in_milliseconds - computed: false, optional: true, required: false
  private _thresholdInMilliseconds?: number; 
  public get thresholdInMilliseconds() {
    return this.getNumberAttribute('threshold_in_milliseconds');
  }
  public set thresholdInMilliseconds(value: number) {
    this._thresholdInMilliseconds = value;
  }
  public resetThresholdInMilliseconds() {
    this._thresholdInMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInMillisecondsInput() {
    return this._thresholdInMilliseconds;
  }

  // timeout_in_milliseconds - computed: false, optional: true, required: false
  private _timeoutInMilliseconds?: number; 
  public get timeoutInMilliseconds() {
    return this.getNumberAttribute('timeout_in_milliseconds');
  }
  public set timeoutInMilliseconds(value: number) {
    this._timeoutInMilliseconds = value;
  }
  public resetTimeoutInMilliseconds() {
    this._timeoutInMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMillisecondsInput() {
    return this._timeoutInMilliseconds;
  }

  // tos - computed: false, optional: true, required: false
  private _tos?: number; 
  public get tos() {
    return this.getNumberAttribute('tos');
  }
  public set tos(value: number) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // tracked_ip - computed: false, optional: true, required: false
  private _trackedIp?: string; 
  public get trackedIp() {
    return this.getStringAttribute('tracked_ip');
  }
  public set trackedIp(value: string) {
    this._trackedIp = value;
  }
  public resetTrackedIp() {
    this._trackedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackedIpInput() {
    return this._trackedIp;
  }
}

export class InterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsList extends cdktf.ComplexList {
  public internalValue? : InterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettings[] | cdktf.IResolvable

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
  public get(index: number): InterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsOutputReference {
    return new InterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfacePhysicalIpAddressDhcpDhcpClient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#metric InterfacePhysical#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#primary_track_id InterfacePhysical#primary_track_id}
  */
  readonly primaryTrackId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#set_default_route InterfacePhysical#set_default_route}
  */
  readonly setDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#sla_tracking_settings InterfacePhysical#sla_tracking_settings}
  */
  readonly slaTrackingSettings?: InterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettings[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#tracking_enabled InterfacePhysical#tracking_enabled}
  */
  readonly trackingEnabled?: boolean | cdktf.IResolvable;
}

export function interfacePhysicalIpAddressDhcpDhcpClientToTerraform(struct?: InterfacePhysicalIpAddressDhcpDhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    primary_track_id: cdktf.numberToTerraform(struct!.primaryTrackId),
    set_default_route: cdktf.booleanToTerraform(struct!.setDefaultRoute),
    sla_tracking_settings: cdktf.listMapper(interfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsToTerraform, false)(struct!.slaTrackingSettings),
    tracking_enabled: cdktf.booleanToTerraform(struct!.trackingEnabled),
  }
}


export function interfacePhysicalIpAddressDhcpDhcpClientToHclTerraform(struct?: InterfacePhysicalIpAddressDhcpDhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_track_id: {
      value: cdktf.numberToHclTerraform(struct!.primaryTrackId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.setDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sla_tracking_settings: {
      value: cdktf.listMapperHcl(interfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsToHclTerraform, false)(struct!.slaTrackingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "InterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsList",
    },
    tracking_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.trackingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalIpAddressDhcpDhcpClientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfacePhysicalIpAddressDhcpDhcpClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._primaryTrackId !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTrackId = this._primaryTrackId;
    }
    if (this._setDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDefaultRoute = this._setDefaultRoute;
    }
    if (this._slaTrackingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaTrackingSettings = this._slaTrackingSettings?.internalValue;
    }
    if (this._trackingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingEnabled = this._trackingEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalIpAddressDhcpDhcpClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._primaryTrackId = undefined;
      this._setDefaultRoute = undefined;
      this._slaTrackingSettings.internalValue = undefined;
      this._trackingEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._primaryTrackId = value.primaryTrackId;
      this._setDefaultRoute = value.setDefaultRoute;
      this._slaTrackingSettings.internalValue = value.slaTrackingSettings;
      this._trackingEnabled = value.trackingEnabled;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // primary_track_id - computed: false, optional: true, required: false
  private _primaryTrackId?: number; 
  public get primaryTrackId() {
    return this.getNumberAttribute('primary_track_id');
  }
  public set primaryTrackId(value: number) {
    this._primaryTrackId = value;
  }
  public resetPrimaryTrackId() {
    this._primaryTrackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTrackIdInput() {
    return this._primaryTrackId;
  }

  // set_default_route - computed: false, optional: true, required: false
  private _setDefaultRoute?: boolean | cdktf.IResolvable; 
  public get setDefaultRoute() {
    return this.getBooleanAttribute('set_default_route');
  }
  public set setDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._setDefaultRoute = value;
  }
  public resetSetDefaultRoute() {
    this._setDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDefaultRouteInput() {
    return this._setDefaultRoute;
  }

  // sla_tracking_settings - computed: false, optional: true, required: false
  private _slaTrackingSettings = new InterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettingsList(this, "sla_tracking_settings", false);
  public get slaTrackingSettings() {
    return this._slaTrackingSettings;
  }
  public putSlaTrackingSettings(value: InterfacePhysicalIpAddressDhcpDhcpClientSlaTrackingSettings[] | cdktf.IResolvable) {
    this._slaTrackingSettings.internalValue = value;
  }
  public resetSlaTrackingSettings() {
    this._slaTrackingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaTrackingSettingsInput() {
    return this._slaTrackingSettings.internalValue;
  }

  // tracking_enabled - computed: false, optional: true, required: false
  private _trackingEnabled?: boolean | cdktf.IResolvable; 
  public get trackingEnabled() {
    return this.getBooleanAttribute('tracking_enabled');
  }
  public set trackingEnabled(value: boolean | cdktf.IResolvable) {
    this._trackingEnabled = value;
  }
  public resetTrackingEnabled() {
    this._trackingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingEnabledInput() {
    return this._trackingEnabled;
  }
}

export class InterfacePhysicalIpAddressDhcpDhcpClientList extends cdktf.ComplexList {
  public internalValue? : InterfacePhysicalIpAddressDhcpDhcpClient[] | cdktf.IResolvable

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
  public get(index: number): InterfacePhysicalIpAddressDhcpDhcpClientOutputReference {
    return new InterfacePhysicalIpAddressDhcpDhcpClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfacePhysicalIpAddressDhcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#dhcp_broadcast InterfacePhysical#dhcp_broadcast}
  */
  readonly dhcpBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#dhcp_client InterfacePhysical#dhcp_client}
  */
  readonly dhcpClient?: InterfacePhysicalIpAddressDhcpDhcpClient[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#dhcp_option_using_mac InterfacePhysical#dhcp_option_using_mac}
  */
  readonly dhcpOptionUsingMac?: boolean | cdktf.IResolvable;
}

export function interfacePhysicalIpAddressDhcpToTerraform(struct?: InterfacePhysicalIpAddressDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_broadcast: cdktf.booleanToTerraform(struct!.dhcpBroadcast),
    dhcp_client: cdktf.listMapper(interfacePhysicalIpAddressDhcpDhcpClientToTerraform, false)(struct!.dhcpClient),
    dhcp_option_using_mac: cdktf.booleanToTerraform(struct!.dhcpOptionUsingMac),
  }
}


export function interfacePhysicalIpAddressDhcpToHclTerraform(struct?: InterfacePhysicalIpAddressDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp_client: {
      value: cdktf.listMapperHcl(interfacePhysicalIpAddressDhcpDhcpClientToHclTerraform, false)(struct!.dhcpClient),
      isBlock: true,
      type: "list",
      storageClassType: "InterfacePhysicalIpAddressDhcpDhcpClientList",
    },
    dhcp_option_using_mac: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpOptionUsingMac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalIpAddressDhcpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfacePhysicalIpAddressDhcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpBroadcast = this._dhcpBroadcast;
    }
    if (this._dhcpClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient?.internalValue;
    }
    if (this._dhcpOptionUsingMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptionUsingMac = this._dhcpOptionUsingMac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalIpAddressDhcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpBroadcast = undefined;
      this._dhcpClient.internalValue = undefined;
      this._dhcpOptionUsingMac = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpBroadcast = value.dhcpBroadcast;
      this._dhcpClient.internalValue = value.dhcpClient;
      this._dhcpOptionUsingMac = value.dhcpOptionUsingMac;
    }
  }

  // dhcp_broadcast - computed: false, optional: true, required: false
  private _dhcpBroadcast?: boolean | cdktf.IResolvable; 
  public get dhcpBroadcast() {
    return this.getBooleanAttribute('dhcp_broadcast');
  }
  public set dhcpBroadcast(value: boolean | cdktf.IResolvable) {
    this._dhcpBroadcast = value;
  }
  public resetDhcpBroadcast() {
    this._dhcpBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpBroadcastInput() {
    return this._dhcpBroadcast;
  }

  // dhcp_client - computed: false, optional: true, required: false
  private _dhcpClient = new InterfacePhysicalIpAddressDhcpDhcpClientList(this, "dhcp_client", false);
  public get dhcpClient() {
    return this._dhcpClient;
  }
  public putDhcpClient(value: InterfacePhysicalIpAddressDhcpDhcpClient[] | cdktf.IResolvable) {
    this._dhcpClient.internalValue = value;
  }
  public resetDhcpClient() {
    this._dhcpClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient.internalValue;
  }

  // dhcp_option_using_mac - computed: false, optional: true, required: false
  private _dhcpOptionUsingMac?: boolean | cdktf.IResolvable; 
  public get dhcpOptionUsingMac() {
    return this.getBooleanAttribute('dhcp_option_using_mac');
  }
  public set dhcpOptionUsingMac(value: boolean | cdktf.IResolvable) {
    this._dhcpOptionUsingMac = value;
  }
  public resetDhcpOptionUsingMac() {
    this._dhcpOptionUsingMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionUsingMacInput() {
    return this._dhcpOptionUsingMac;
  }
}

export class InterfacePhysicalIpAddressDhcpList extends cdktf.ComplexList {
  public internalValue? : InterfacePhysicalIpAddressDhcp[] | cdktf.IResolvable

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
  public get(index: number): InterfacePhysicalIpAddressDhcpOutputReference {
    return new InterfacePhysicalIpAddressDhcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfacePhysicalIpAddressStatic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#ip InterfacePhysical#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#net_mask InterfacePhysical#net_mask}
  */
  readonly netMask?: string;
}

export function interfacePhysicalIpAddressStaticToTerraform(struct?: InterfacePhysicalIpAddressStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    net_mask: cdktf.stringToTerraform(struct!.netMask),
  }
}


export function interfacePhysicalIpAddressStaticToHclTerraform(struct?: InterfacePhysicalIpAddressStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_mask: {
      value: cdktf.stringToHclTerraform(struct!.netMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalIpAddressStaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfacePhysicalIpAddressStatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._netMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netMask = this._netMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalIpAddressStatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._netMask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._netMask = value.netMask;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // net_mask - computed: false, optional: true, required: false
  private _netMask?: string; 
  public get netMask() {
    return this.getStringAttribute('net_mask');
  }
  public set netMask(value: string) {
    this._netMask = value;
  }
  public resetNetMask() {
    this._netMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netMaskInput() {
    return this._netMask;
  }
}

export class InterfacePhysicalIpAddressStaticList extends cdktf.ComplexList {
  public internalValue? : InterfacePhysicalIpAddressStatic[] | cdktf.IResolvable

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
  public get(index: number): InterfacePhysicalIpAddressStaticOutputReference {
    return new InterfacePhysicalIpAddressStaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfacePhysicalIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#dhcp InterfacePhysical#dhcp}
  */
  readonly dhcp?: InterfacePhysicalIpAddressDhcp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#static InterfacePhysical#static}
  */
  readonly static?: InterfacePhysicalIpAddressStatic[] | cdktf.IResolvable;
}

export function interfacePhysicalIpAddressToTerraform(struct?: InterfacePhysicalIpAddressOutputReference | InterfacePhysicalIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.listMapper(interfacePhysicalIpAddressDhcpToTerraform, false)(struct!.dhcp),
    static: cdktf.listMapper(interfacePhysicalIpAddressStaticToTerraform, false)(struct!.static),
  }
}


export function interfacePhysicalIpAddressToHclTerraform(struct?: InterfacePhysicalIpAddressOutputReference | InterfacePhysicalIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.listMapperHcl(interfacePhysicalIpAddressDhcpToHclTerraform, false)(struct!.dhcp),
      isBlock: true,
      type: "list",
      storageClassType: "InterfacePhysicalIpAddressDhcpList",
    },
    static: {
      value: cdktf.listMapperHcl(interfacePhysicalIpAddressStaticToHclTerraform, false)(struct!.static),
      isBlock: true,
      type: "list",
      storageClassType: "InterfacePhysicalIpAddressStaticList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfacePhysicalIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp?.internalValue;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcp.internalValue = undefined;
      this._static.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcp.internalValue = value.dhcp;
      this._static.internalValue = value.static;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp = new InterfacePhysicalIpAddressDhcpList(this, "dhcp", false);
  public get dhcp() {
    return this._dhcp;
  }
  public putDhcp(value: InterfacePhysicalIpAddressDhcp[] | cdktf.IResolvable) {
    this._dhcp.internalValue = value;
  }
  public resetDhcp() {
    this._dhcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new InterfacePhysicalIpAddressStaticList(this, "static", false);
  public get static() {
    return this._static;
  }
  public putStatic(value: InterfacePhysicalIpAddressStatic[] | cdktf.IResolvable) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }
}
export interface InterfacePhysicalIpv6InfoIpv6Addresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#address InterfacePhysical#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#prefix_length InterfacePhysical#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#standby InterfacePhysical#standby}
  */
  readonly standby?: string;
}

export function interfacePhysicalIpv6InfoIpv6AddressesToTerraform(struct?: InterfacePhysicalIpv6InfoIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    standby: cdktf.stringToTerraform(struct!.standby),
  }
}


export function interfacePhysicalIpv6InfoIpv6AddressesToHclTerraform(struct?: InterfacePhysicalIpv6InfoIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standby: {
      value: cdktf.stringToHclTerraform(struct!.standby),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalIpv6InfoIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfacePhysicalIpv6InfoIpv6Addresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._standby !== undefined) {
      hasAnyValues = true;
      internalValueResult.standby = this._standby;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalIpv6InfoIpv6Addresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._prefixLength = undefined;
      this._standby = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._prefixLength = value.prefixLength;
      this._standby = value.standby;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // standby - computed: false, optional: true, required: false
  private _standby?: string; 
  public get standby() {
    return this.getStringAttribute('standby');
  }
  public set standby(value: string) {
    this._standby = value;
  }
  public resetStandby() {
    this._standby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyInput() {
    return this._standby;
  }
}

export class InterfacePhysicalIpv6InfoIpv6AddressesList extends cdktf.ComplexList {
  public internalValue? : InterfacePhysicalIpv6InfoIpv6Addresses[] | cdktf.IResolvable

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
  public get(index: number): InterfacePhysicalIpv6InfoIpv6AddressesOutputReference {
    return new InterfacePhysicalIpv6InfoIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfacePhysicalIpv6InfoLinkLocalAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#address InterfacePhysical#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#standby InterfacePhysical#standby}
  */
  readonly standby?: string;
}

export function interfacePhysicalIpv6InfoLinkLocalAddressToTerraform(struct?: InterfacePhysicalIpv6InfoLinkLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    standby: cdktf.stringToTerraform(struct!.standby),
  }
}


export function interfacePhysicalIpv6InfoLinkLocalAddressToHclTerraform(struct?: InterfacePhysicalIpv6InfoLinkLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standby: {
      value: cdktf.stringToHclTerraform(struct!.standby),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalIpv6InfoLinkLocalAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfacePhysicalIpv6InfoLinkLocalAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._standby !== undefined) {
      hasAnyValues = true;
      internalValueResult.standby = this._standby;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalIpv6InfoLinkLocalAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._standby = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._standby = value.standby;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // standby - computed: false, optional: true, required: false
  private _standby?: string; 
  public get standby() {
    return this.getStringAttribute('standby');
  }
  public set standby(value: string) {
    this._standby = value;
  }
  public resetStandby() {
    this._standby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyInput() {
    return this._standby;
  }
}

export class InterfacePhysicalIpv6InfoLinkLocalAddressList extends cdktf.ComplexList {
  public internalValue? : InterfacePhysicalIpv6InfoLinkLocalAddress[] | cdktf.IResolvable

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
  public get(index: number): InterfacePhysicalIpv6InfoLinkLocalAddressOutputReference {
    return new InterfacePhysicalIpv6InfoLinkLocalAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfacePhysicalIpv6InfoNDiscoveryPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#default_prefix InterfacePhysical#default_prefix}
  */
  readonly defaultPrefix?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#has_duration InterfacePhysical#has_duration}
  */
  readonly hasDuration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#no_advertise InterfacePhysical#no_advertise}
  */
  readonly noAdvertise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#off_link InterfacePhysical#off_link}
  */
  readonly offLink?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#preferred_lifetime InterfacePhysical#preferred_lifetime}
  */
  readonly preferredLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#valid_lifetime InterfacePhysical#valid_lifetime}
  */
  readonly validLifetime?: number;
}

export function interfacePhysicalIpv6InfoNDiscoveryPrefixListStructToTerraform(struct?: InterfacePhysicalIpv6InfoNDiscoveryPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_prefix: cdktf.booleanToTerraform(struct!.defaultPrefix),
    has_duration: cdktf.booleanToTerraform(struct!.hasDuration),
    no_advertise: cdktf.booleanToTerraform(struct!.noAdvertise),
    off_link: cdktf.booleanToTerraform(struct!.offLink),
    preferred_lifetime: cdktf.numberToTerraform(struct!.preferredLifetime),
    valid_lifetime: cdktf.numberToTerraform(struct!.validLifetime),
  }
}


export function interfacePhysicalIpv6InfoNDiscoveryPrefixListStructToHclTerraform(struct?: InterfacePhysicalIpv6InfoNDiscoveryPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.defaultPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    has_duration: {
      value: cdktf.booleanToHclTerraform(struct!.hasDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_advertise: {
      value: cdktf.booleanToHclTerraform(struct!.noAdvertise),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    off_link: {
      value: cdktf.booleanToHclTerraform(struct!.offLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preferred_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.preferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    valid_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.validLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalIpv6InfoNDiscoveryPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfacePhysicalIpv6InfoNDiscoveryPrefixListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPrefix = this._defaultPrefix;
    }
    if (this._hasDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasDuration = this._hasDuration;
    }
    if (this._noAdvertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAdvertise = this._noAdvertise;
    }
    if (this._offLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.offLink = this._offLink;
    }
    if (this._preferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifetime = this._preferredLifetime;
    }
    if (this._validLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifetime = this._validLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalIpv6InfoNDiscoveryPrefixListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultPrefix = undefined;
      this._hasDuration = undefined;
      this._noAdvertise = undefined;
      this._offLink = undefined;
      this._preferredLifetime = undefined;
      this._validLifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultPrefix = value.defaultPrefix;
      this._hasDuration = value.hasDuration;
      this._noAdvertise = value.noAdvertise;
      this._offLink = value.offLink;
      this._preferredLifetime = value.preferredLifetime;
      this._validLifetime = value.validLifetime;
    }
  }

  // default_prefix - computed: false, optional: true, required: false
  private _defaultPrefix?: boolean | cdktf.IResolvable; 
  public get defaultPrefix() {
    return this.getBooleanAttribute('default_prefix');
  }
  public set defaultPrefix(value: boolean | cdktf.IResolvable) {
    this._defaultPrefix = value;
  }
  public resetDefaultPrefix() {
    this._defaultPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPrefixInput() {
    return this._defaultPrefix;
  }

  // has_duration - computed: false, optional: true, required: false
  private _hasDuration?: boolean | cdktf.IResolvable; 
  public get hasDuration() {
    return this.getBooleanAttribute('has_duration');
  }
  public set hasDuration(value: boolean | cdktf.IResolvable) {
    this._hasDuration = value;
  }
  public resetHasDuration() {
    this._hasDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasDurationInput() {
    return this._hasDuration;
  }

  // no_advertise - computed: false, optional: true, required: false
  private _noAdvertise?: boolean | cdktf.IResolvable; 
  public get noAdvertise() {
    return this.getBooleanAttribute('no_advertise');
  }
  public set noAdvertise(value: boolean | cdktf.IResolvable) {
    this._noAdvertise = value;
  }
  public resetNoAdvertise() {
    this._noAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAdvertiseInput() {
    return this._noAdvertise;
  }

  // off_link - computed: false, optional: true, required: false
  private _offLink?: boolean | cdktf.IResolvable; 
  public get offLink() {
    return this.getBooleanAttribute('off_link');
  }
  public set offLink(value: boolean | cdktf.IResolvable) {
    this._offLink = value;
  }
  public resetOffLink() {
    this._offLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offLinkInput() {
    return this._offLink;
  }

  // preferred_lifetime - computed: false, optional: true, required: false
  private _preferredLifetime?: number; 
  public get preferredLifetime() {
    return this.getNumberAttribute('preferred_lifetime');
  }
  public set preferredLifetime(value: number) {
    this._preferredLifetime = value;
  }
  public resetPreferredLifetime() {
    this._preferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifetimeInput() {
    return this._preferredLifetime;
  }

  // valid_lifetime - computed: false, optional: true, required: false
  private _validLifetime?: number; 
  public get validLifetime() {
    return this.getNumberAttribute('valid_lifetime');
  }
  public set validLifetime(value: number) {
    this._validLifetime = value;
  }
  public resetValidLifetime() {
    this._validLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifetimeInput() {
    return this._validLifetime;
  }
}

export class InterfacePhysicalIpv6InfoNDiscoveryPrefixListStructList extends cdktf.ComplexList {
  public internalValue? : InterfacePhysicalIpv6InfoNDiscoveryPrefixListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfacePhysicalIpv6InfoNDiscoveryPrefixListStructOutputReference {
    return new InterfacePhysicalIpv6InfoNDiscoveryPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfacePhysicalIpv6Info {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#auto_config InterfacePhysical#auto_config}
  */
  readonly autoConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#dad_attempts InterfacePhysical#dad_attempts}
  */
  readonly dadAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#enabled InterfacePhysical#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#enforce_eui64 InterfacePhysical#enforce_eui64}
  */
  readonly enforceEui64?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#ipv6_addresses InterfacePhysical#ipv6_addresses}
  */
  readonly ipv6Addresses?: InterfacePhysicalIpv6InfoIpv6Addresses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#link_local_address InterfacePhysical#link_local_address}
  */
  readonly linkLocalAddress?: InterfacePhysicalIpv6InfoLinkLocalAddress[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#managed_address_config InterfacePhysical#managed_address_config}
  */
  readonly managedAddressConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#n_discovery_prefix_list InterfacePhysical#n_discovery_prefix_list}
  */
  readonly nDiscoveryPrefixList?: InterfacePhysicalIpv6InfoNDiscoveryPrefixListStruct[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#ns_interval InterfacePhysical#ns_interval}
  */
  readonly nsInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#other_stateful_config InterfacePhysical#other_stateful_config}
  */
  readonly otherStatefulConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#reachable_time InterfacePhysical#reachable_time}
  */
  readonly reachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#router_advert_interval InterfacePhysical#router_advert_interval}
  */
  readonly routerAdvertInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#router_advert_interval_unit InterfacePhysical#router_advert_interval_unit}
  */
  readonly routerAdvertIntervalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#router_advert_lifetime InterfacePhysical#router_advert_lifetime}
  */
  readonly routerAdvertLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#suppress_router_advert InterfacePhysical#suppress_router_advert}
  */
  readonly suppressRouterAdvert?: boolean | cdktf.IResolvable;
}

export function interfacePhysicalIpv6InfoToTerraform(struct?: InterfacePhysicalIpv6InfoOutputReference | InterfacePhysicalIpv6Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_config: cdktf.booleanToTerraform(struct!.autoConfig),
    dad_attempts: cdktf.numberToTerraform(struct!.dadAttempts),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    enforce_eui64: cdktf.booleanToTerraform(struct!.enforceEui64),
    ipv6_addresses: cdktf.listMapper(interfacePhysicalIpv6InfoIpv6AddressesToTerraform, false)(struct!.ipv6Addresses),
    link_local_address: cdktf.listMapper(interfacePhysicalIpv6InfoLinkLocalAddressToTerraform, false)(struct!.linkLocalAddress),
    managed_address_config: cdktf.booleanToTerraform(struct!.managedAddressConfig),
    n_discovery_prefix_list: cdktf.listMapper(interfacePhysicalIpv6InfoNDiscoveryPrefixListStructToTerraform, false)(struct!.nDiscoveryPrefixList),
    ns_interval: cdktf.numberToTerraform(struct!.nsInterval),
    other_stateful_config: cdktf.booleanToTerraform(struct!.otherStatefulConfig),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
    router_advert_interval: cdktf.numberToTerraform(struct!.routerAdvertInterval),
    router_advert_interval_unit: cdktf.stringToTerraform(struct!.routerAdvertIntervalUnit),
    router_advert_lifetime: cdktf.numberToTerraform(struct!.routerAdvertLifetime),
    suppress_router_advert: cdktf.booleanToTerraform(struct!.suppressRouterAdvert),
  }
}


export function interfacePhysicalIpv6InfoToHclTerraform(struct?: InterfacePhysicalIpv6InfoOutputReference | InterfacePhysicalIpv6Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_config: {
      value: cdktf.booleanToHclTerraform(struct!.autoConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dad_attempts: {
      value: cdktf.numberToHclTerraform(struct!.dadAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_eui64: {
      value: cdktf.booleanToHclTerraform(struct!.enforceEui64),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_addresses: {
      value: cdktf.listMapperHcl(interfacePhysicalIpv6InfoIpv6AddressesToHclTerraform, false)(struct!.ipv6Addresses),
      isBlock: true,
      type: "list",
      storageClassType: "InterfacePhysicalIpv6InfoIpv6AddressesList",
    },
    link_local_address: {
      value: cdktf.listMapperHcl(interfacePhysicalIpv6InfoLinkLocalAddressToHclTerraform, false)(struct!.linkLocalAddress),
      isBlock: true,
      type: "list",
      storageClassType: "InterfacePhysicalIpv6InfoLinkLocalAddressList",
    },
    managed_address_config: {
      value: cdktf.booleanToHclTerraform(struct!.managedAddressConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    n_discovery_prefix_list: {
      value: cdktf.listMapperHcl(interfacePhysicalIpv6InfoNDiscoveryPrefixListStructToHclTerraform, false)(struct!.nDiscoveryPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfacePhysicalIpv6InfoNDiscoveryPrefixListStructList",
    },
    ns_interval: {
      value: cdktf.numberToHclTerraform(struct!.nsInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_stateful_config: {
      value: cdktf.booleanToHclTerraform(struct!.otherStatefulConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reachable_time: {
      value: cdktf.numberToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    router_advert_interval: {
      value: cdktf.numberToHclTerraform(struct!.routerAdvertInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    router_advert_interval_unit: {
      value: cdktf.stringToHclTerraform(struct!.routerAdvertIntervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_advert_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.routerAdvertLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suppress_router_advert: {
      value: cdktf.booleanToHclTerraform(struct!.suppressRouterAdvert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfacePhysicalIpv6InfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfacePhysicalIpv6Info | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoConfig = this._autoConfig;
    }
    if (this._dadAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dadAttempts = this._dadAttempts;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._enforceEui64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceEui64 = this._enforceEui64;
    }
    if (this._ipv6Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addresses = this._ipv6Addresses?.internalValue;
    }
    if (this._linkLocalAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkLocalAddress = this._linkLocalAddress?.internalValue;
    }
    if (this._managedAddressConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedAddressConfig = this._managedAddressConfig;
    }
    if (this._nDiscoveryPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nDiscoveryPrefixList = this._nDiscoveryPrefixList?.internalValue;
    }
    if (this._nsInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsInterval = this._nsInterval;
    }
    if (this._otherStatefulConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherStatefulConfig = this._otherStatefulConfig;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    if (this._routerAdvertInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerAdvertInterval = this._routerAdvertInterval;
    }
    if (this._routerAdvertIntervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerAdvertIntervalUnit = this._routerAdvertIntervalUnit;
    }
    if (this._routerAdvertLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerAdvertLifetime = this._routerAdvertLifetime;
    }
    if (this._suppressRouterAdvert !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressRouterAdvert = this._suppressRouterAdvert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfacePhysicalIpv6Info | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoConfig = undefined;
      this._dadAttempts = undefined;
      this._enabled = undefined;
      this._enforceEui64 = undefined;
      this._ipv6Addresses.internalValue = undefined;
      this._linkLocalAddress.internalValue = undefined;
      this._managedAddressConfig = undefined;
      this._nDiscoveryPrefixList.internalValue = undefined;
      this._nsInterval = undefined;
      this._otherStatefulConfig = undefined;
      this._reachableTime = undefined;
      this._routerAdvertInterval = undefined;
      this._routerAdvertIntervalUnit = undefined;
      this._routerAdvertLifetime = undefined;
      this._suppressRouterAdvert = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoConfig = value.autoConfig;
      this._dadAttempts = value.dadAttempts;
      this._enabled = value.enabled;
      this._enforceEui64 = value.enforceEui64;
      this._ipv6Addresses.internalValue = value.ipv6Addresses;
      this._linkLocalAddress.internalValue = value.linkLocalAddress;
      this._managedAddressConfig = value.managedAddressConfig;
      this._nDiscoveryPrefixList.internalValue = value.nDiscoveryPrefixList;
      this._nsInterval = value.nsInterval;
      this._otherStatefulConfig = value.otherStatefulConfig;
      this._reachableTime = value.reachableTime;
      this._routerAdvertInterval = value.routerAdvertInterval;
      this._routerAdvertIntervalUnit = value.routerAdvertIntervalUnit;
      this._routerAdvertLifetime = value.routerAdvertLifetime;
      this._suppressRouterAdvert = value.suppressRouterAdvert;
    }
  }

  // auto_config - computed: false, optional: true, required: false
  private _autoConfig?: boolean | cdktf.IResolvable; 
  public get autoConfig() {
    return this.getBooleanAttribute('auto_config');
  }
  public set autoConfig(value: boolean | cdktf.IResolvable) {
    this._autoConfig = value;
  }
  public resetAutoConfig() {
    this._autoConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigInput() {
    return this._autoConfig;
  }

  // dad_attempts - computed: false, optional: true, required: false
  private _dadAttempts?: number; 
  public get dadAttempts() {
    return this.getNumberAttribute('dad_attempts');
  }
  public set dadAttempts(value: number) {
    this._dadAttempts = value;
  }
  public resetDadAttempts() {
    this._dadAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dadAttemptsInput() {
    return this._dadAttempts;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enforce_eui64 - computed: false, optional: true, required: false
  private _enforceEui64?: boolean | cdktf.IResolvable; 
  public get enforceEui64() {
    return this.getBooleanAttribute('enforce_eui64');
  }
  public set enforceEui64(value: boolean | cdktf.IResolvable) {
    this._enforceEui64 = value;
  }
  public resetEnforceEui64() {
    this._enforceEui64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceEui64Input() {
    return this._enforceEui64;
  }

  // ipv6_addresses - computed: false, optional: true, required: false
  private _ipv6Addresses = new InterfacePhysicalIpv6InfoIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }
  public putIpv6Addresses(value: InterfacePhysicalIpv6InfoIpv6Addresses[] | cdktf.IResolvable) {
    this._ipv6Addresses.internalValue = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses.internalValue;
  }

  // link_local_address - computed: false, optional: true, required: false
  private _linkLocalAddress = new InterfacePhysicalIpv6InfoLinkLocalAddressList(this, "link_local_address", false);
  public get linkLocalAddress() {
    return this._linkLocalAddress;
  }
  public putLinkLocalAddress(value: InterfacePhysicalIpv6InfoLinkLocalAddress[] | cdktf.IResolvable) {
    this._linkLocalAddress.internalValue = value;
  }
  public resetLinkLocalAddress() {
    this._linkLocalAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLocalAddressInput() {
    return this._linkLocalAddress.internalValue;
  }

  // managed_address_config - computed: false, optional: true, required: false
  private _managedAddressConfig?: boolean | cdktf.IResolvable; 
  public get managedAddressConfig() {
    return this.getBooleanAttribute('managed_address_config');
  }
  public set managedAddressConfig(value: boolean | cdktf.IResolvable) {
    this._managedAddressConfig = value;
  }
  public resetManagedAddressConfig() {
    this._managedAddressConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedAddressConfigInput() {
    return this._managedAddressConfig;
  }

  // n_discovery_prefix_list - computed: false, optional: true, required: false
  private _nDiscoveryPrefixList = new InterfacePhysicalIpv6InfoNDiscoveryPrefixListStructList(this, "n_discovery_prefix_list", false);
  public get nDiscoveryPrefixList() {
    return this._nDiscoveryPrefixList;
  }
  public putNDiscoveryPrefixList(value: InterfacePhysicalIpv6InfoNDiscoveryPrefixListStruct[] | cdktf.IResolvable) {
    this._nDiscoveryPrefixList.internalValue = value;
  }
  public resetNDiscoveryPrefixList() {
    this._nDiscoveryPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nDiscoveryPrefixListInput() {
    return this._nDiscoveryPrefixList.internalValue;
  }

  // ns_interval - computed: false, optional: true, required: false
  private _nsInterval?: number; 
  public get nsInterval() {
    return this.getNumberAttribute('ns_interval');
  }
  public set nsInterval(value: number) {
    this._nsInterval = value;
  }
  public resetNsInterval() {
    this._nsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsIntervalInput() {
    return this._nsInterval;
  }

  // other_stateful_config - computed: false, optional: true, required: false
  private _otherStatefulConfig?: boolean | cdktf.IResolvable; 
  public get otherStatefulConfig() {
    return this.getBooleanAttribute('other_stateful_config');
  }
  public set otherStatefulConfig(value: boolean | cdktf.IResolvable) {
    this._otherStatefulConfig = value;
  }
  public resetOtherStatefulConfig() {
    this._otherStatefulConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherStatefulConfigInput() {
    return this._otherStatefulConfig;
  }

  // reachable_time - computed: false, optional: true, required: false
  private _reachableTime?: number; 
  public get reachableTime() {
    return this.getNumberAttribute('reachable_time');
  }
  public set reachableTime(value: number) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }

  // router_advert_interval - computed: false, optional: true, required: false
  private _routerAdvertInterval?: number; 
  public get routerAdvertInterval() {
    return this.getNumberAttribute('router_advert_interval');
  }
  public set routerAdvertInterval(value: number) {
    this._routerAdvertInterval = value;
  }
  public resetRouterAdvertInterval() {
    this._routerAdvertInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAdvertIntervalInput() {
    return this._routerAdvertInterval;
  }

  // router_advert_interval_unit - computed: false, optional: true, required: false
  private _routerAdvertIntervalUnit?: string; 
  public get routerAdvertIntervalUnit() {
    return this.getStringAttribute('router_advert_interval_unit');
  }
  public set routerAdvertIntervalUnit(value: string) {
    this._routerAdvertIntervalUnit = value;
  }
  public resetRouterAdvertIntervalUnit() {
    this._routerAdvertIntervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAdvertIntervalUnitInput() {
    return this._routerAdvertIntervalUnit;
  }

  // router_advert_lifetime - computed: false, optional: true, required: false
  private _routerAdvertLifetime?: number; 
  public get routerAdvertLifetime() {
    return this.getNumberAttribute('router_advert_lifetime');
  }
  public set routerAdvertLifetime(value: number) {
    this._routerAdvertLifetime = value;
  }
  public resetRouterAdvertLifetime() {
    this._routerAdvertLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAdvertLifetimeInput() {
    return this._routerAdvertLifetime;
  }

  // suppress_router_advert - computed: false, optional: true, required: false
  private _suppressRouterAdvert?: boolean | cdktf.IResolvable; 
  public get suppressRouterAdvert() {
    return this.getBooleanAttribute('suppress_router_advert');
  }
  public set suppressRouterAdvert(value: boolean | cdktf.IResolvable) {
    this._suppressRouterAdvert = value;
  }
  public resetSuppressRouterAdvert() {
    this._suppressRouterAdvert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressRouterAdvertInput() {
    return this._suppressRouterAdvert;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical ciscoasa_interface_physical}
*/
export class InterfacePhysical extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscoasa_interface_physical";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfacePhysical resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfacePhysical to import
  * @param importFromId The id of the existing InterfacePhysical that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfacePhysical to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscoasa_interface_physical", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/interface_physical ciscoasa_interface_physical} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfacePhysicalConfig
  */
  public constructor(scope: Construct, id: string, config: InterfacePhysicalConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscoasa_interface_physical',
      terraformGeneratorMetadata: {
        providerName: 'ciscoasa',
        providerVersion: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeMacAddress = config.activeMacAddress;
    this._forwardTrafficCx = config.forwardTrafficCx;
    this._forwardTrafficSfr = config.forwardTrafficSfr;
    this._hardwareId = config.hardwareId;
    this._id = config.id;
    this._interfaceDesc = config.interfaceDesc;
    this._lastUpdated = config.lastUpdated;
    this._managementOnly = config.managementOnly;
    this._mtu = config.mtu;
    this._name = config.name;
    this._securityLevel = config.securityLevel;
    this._shutdown = config.shutdown;
    this._standByMacAddress = config.standByMacAddress;
    this._ipAddress.internalValue = config.ipAddress;
    this._ipv6Info.internalValue = config.ipv6Info;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_mac_address - computed: false, optional: true, required: false
  private _activeMacAddress?: string; 
  public get activeMacAddress() {
    return this.getStringAttribute('active_mac_address');
  }
  public set activeMacAddress(value: string) {
    this._activeMacAddress = value;
  }
  public resetActiveMacAddress() {
    this._activeMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeMacAddressInput() {
    return this._activeMacAddress;
  }

  // forward_traffic_cx - computed: false, optional: true, required: false
  private _forwardTrafficCx?: boolean | cdktf.IResolvable; 
  public get forwardTrafficCx() {
    return this.getBooleanAttribute('forward_traffic_cx');
  }
  public set forwardTrafficCx(value: boolean | cdktf.IResolvable) {
    this._forwardTrafficCx = value;
  }
  public resetForwardTrafficCx() {
    this._forwardTrafficCx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTrafficCxInput() {
    return this._forwardTrafficCx;
  }

  // forward_traffic_sfr - computed: false, optional: true, required: false
  private _forwardTrafficSfr?: boolean | cdktf.IResolvable; 
  public get forwardTrafficSfr() {
    return this.getBooleanAttribute('forward_traffic_sfr');
  }
  public set forwardTrafficSfr(value: boolean | cdktf.IResolvable) {
    this._forwardTrafficSfr = value;
  }
  public resetForwardTrafficSfr() {
    this._forwardTrafficSfr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTrafficSfrInput() {
    return this._forwardTrafficSfr;
  }

  // hardware_id - computed: false, optional: false, required: true
  private _hardwareId?: string; 
  public get hardwareId() {
    return this.getStringAttribute('hardware_id');
  }
  public set hardwareId(value: string) {
    this._hardwareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareIdInput() {
    return this._hardwareId;
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

  // interface_desc - computed: false, optional: true, required: false
  private _interfaceDesc?: string; 
  public get interfaceDesc() {
    return this.getStringAttribute('interface_desc');
  }
  public set interfaceDesc(value: string) {
    this._interfaceDesc = value;
  }
  public resetInterfaceDesc() {
    this._interfaceDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescInput() {
    return this._interfaceDesc;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // management_only - computed: false, optional: true, required: false
  private _managementOnly?: boolean | cdktf.IResolvable; 
  public get managementOnly() {
    return this.getBooleanAttribute('management_only');
  }
  public set managementOnly(value: boolean | cdktf.IResolvable) {
    this._managementOnly = value;
  }
  public resetManagementOnly() {
    this._managementOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementOnlyInput() {
    return this._managementOnly;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // security_level - computed: false, optional: false, required: true
  private _securityLevel?: number; 
  public get securityLevel() {
    return this.getNumberAttribute('security_level');
  }
  public set securityLevel(value: number) {
    this._securityLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // stand_by_mac_address - computed: false, optional: true, required: false
  private _standByMacAddress?: string; 
  public get standByMacAddress() {
    return this.getStringAttribute('stand_by_mac_address');
  }
  public set standByMacAddress(value: string) {
    this._standByMacAddress = value;
  }
  public resetStandByMacAddress() {
    this._standByMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standByMacAddressInput() {
    return this._standByMacAddress;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new InterfacePhysicalIpAddressOutputReference(this, "ip_address");
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: InterfacePhysicalIpAddress) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }

  // ipv6_info - computed: false, optional: true, required: false
  private _ipv6Info = new InterfacePhysicalIpv6InfoOutputReference(this, "ipv6_info");
  public get ipv6Info() {
    return this._ipv6Info;
  }
  public putIpv6Info(value: InterfacePhysicalIpv6Info) {
    this._ipv6Info.internalValue = value;
  }
  public resetIpv6Info() {
    this._ipv6Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6InfoInput() {
    return this._ipv6Info.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_mac_address: cdktf.stringToTerraform(this._activeMacAddress),
      forward_traffic_cx: cdktf.booleanToTerraform(this._forwardTrafficCx),
      forward_traffic_sfr: cdktf.booleanToTerraform(this._forwardTrafficSfr),
      hardware_id: cdktf.stringToTerraform(this._hardwareId),
      id: cdktf.stringToTerraform(this._id),
      interface_desc: cdktf.stringToTerraform(this._interfaceDesc),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      management_only: cdktf.booleanToTerraform(this._managementOnly),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      security_level: cdktf.numberToTerraform(this._securityLevel),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      stand_by_mac_address: cdktf.stringToTerraform(this._standByMacAddress),
      ip_address: interfacePhysicalIpAddressToTerraform(this._ipAddress.internalValue),
      ipv6_info: interfacePhysicalIpv6InfoToTerraform(this._ipv6Info.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_mac_address: {
        value: cdktf.stringToHclTerraform(this._activeMacAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_traffic_cx: {
        value: cdktf.booleanToHclTerraform(this._forwardTrafficCx),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_traffic_sfr: {
        value: cdktf.booleanToHclTerraform(this._forwardTrafficSfr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hardware_id: {
        value: cdktf.stringToHclTerraform(this._hardwareId),
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
      interface_desc: {
        value: cdktf.stringToHclTerraform(this._interfaceDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_only: {
        value: cdktf.booleanToHclTerraform(this._managementOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_level: {
        value: cdktf.numberToHclTerraform(this._securityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stand_by_mac_address: {
        value: cdktf.stringToHclTerraform(this._standByMacAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: interfacePhysicalIpAddressToHclTerraform(this._ipAddress.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InterfacePhysicalIpAddressList",
      },
      ipv6_info: {
        value: interfacePhysicalIpv6InfoToHclTerraform(this._ipv6Info.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InterfacePhysicalIpv6InfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
