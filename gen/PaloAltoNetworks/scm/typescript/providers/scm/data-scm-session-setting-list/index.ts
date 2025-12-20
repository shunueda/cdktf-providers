// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmSessionSettingListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting_list#device DataScmSessionSettingList#device}
  */
  readonly device?: string;
  /**
  * The folder of the item. Default: Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting_list#folder DataScmSessionSettingList#folder}
  */
  readonly folder?: string;
  /**
  * The max number of items to return. Default: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting_list#limit DataScmSessionSettingList#limit}
  */
  readonly limit?: number;
  /**
  * The name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting_list#name DataScmSessionSettingList#name}
  */
  readonly name?: string;
  /**
  * The offset of the first item to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting_list#offset DataScmSessionSettingList#offset}
  */
  readonly offset?: number;
  /**
  * The snippet of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting_list#snippet DataScmSessionSettingList#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmSessionSettingListDataSessionSettingsConfig {
}

export function dataScmSessionSettingListDataSessionSettingsConfigToTerraform(struct?: DataScmSessionSettingListDataSessionSettingsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSessionSettingListDataSessionSettingsConfigToHclTerraform(struct?: DataScmSessionSettingListDataSessionSettingsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSessionSettingListDataSessionSettingsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSessionSettingListDataSessionSettingsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSessionSettingListDataSessionSettingsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rematch - computed: true, optional: false, required: false
  public get rematch() {
    return this.getBooleanAttribute('rematch');
  }
}
export interface DataScmSessionSettingListDataSessionSettingsIcmpv6RateLimit {
}

export function dataScmSessionSettingListDataSessionSettingsIcmpv6RateLimitToTerraform(struct?: DataScmSessionSettingListDataSessionSettingsIcmpv6RateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSessionSettingListDataSessionSettingsIcmpv6RateLimitToHclTerraform(struct?: DataScmSessionSettingListDataSessionSettingsIcmpv6RateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSessionSettingListDataSessionSettingsIcmpv6RateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSessionSettingListDataSessionSettingsIcmpv6RateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSessionSettingListDataSessionSettingsIcmpv6RateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_size - computed: true, optional: false, required: false
  public get bucketSize() {
    return this.getNumberAttribute('bucket_size');
  }

  // packet_rate - computed: true, optional: false, required: false
  public get packetRate() {
    return this.getNumberAttribute('packet_rate');
  }
}
export interface DataScmSessionSettingListDataSessionSettingsJumboFrame {
}

export function dataScmSessionSettingListDataSessionSettingsJumboFrameToTerraform(struct?: DataScmSessionSettingListDataSessionSettingsJumboFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSessionSettingListDataSessionSettingsJumboFrameToHclTerraform(struct?: DataScmSessionSettingListDataSessionSettingsJumboFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSessionSettingListDataSessionSettingsJumboFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSessionSettingListDataSessionSettingsJumboFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSessionSettingListDataSessionSettingsJumboFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
}
export interface DataScmSessionSettingListDataSessionSettingsNat {
}

export function dataScmSessionSettingListDataSessionSettingsNatToTerraform(struct?: DataScmSessionSettingListDataSessionSettingsNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSessionSettingListDataSessionSettingsNatToHclTerraform(struct?: DataScmSessionSettingListDataSessionSettingsNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSessionSettingListDataSessionSettingsNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSessionSettingListDataSessionSettingsNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSessionSettingListDataSessionSettingsNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dipp_oversub - computed: true, optional: false, required: false
  public get dippOversub() {
    return this.getStringAttribute('dipp_oversub');
  }
}
export interface DataScmSessionSettingListDataSessionSettingsNat64 {
}

export function dataScmSessionSettingListDataSessionSettingsNat64ToTerraform(struct?: DataScmSessionSettingListDataSessionSettingsNat64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSessionSettingListDataSessionSettingsNat64ToHclTerraform(struct?: DataScmSessionSettingListDataSessionSettingsNat64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSessionSettingListDataSessionSettingsNat64OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSessionSettingListDataSessionSettingsNat64 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSessionSettingListDataSessionSettingsNat64 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6_min_network_mtu - computed: true, optional: false, required: false
  public get ipv6MinNetworkMtu() {
    return this.getNumberAttribute('ipv6_min_network_mtu');
  }
}
export interface DataScmSessionSettingListDataSessionSettings {
}

export function dataScmSessionSettingListDataSessionSettingsToTerraform(struct?: DataScmSessionSettingListDataSessionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSessionSettingListDataSessionSettingsToHclTerraform(struct?: DataScmSessionSettingListDataSessionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSessionSettingListDataSessionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSessionSettingListDataSessionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSessionSettingListDataSessionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerated_aging_enable - computed: true, optional: false, required: false
  public get acceleratedAgingEnable() {
    return this.getBooleanAttribute('accelerated_aging_enable');
  }

  // accelerated_aging_scaling_factor - computed: true, optional: false, required: false
  public get acceleratedAgingScalingFactor() {
    return this.getNumberAttribute('accelerated_aging_scaling_factor');
  }

  // accelerated_aging_threshold - computed: true, optional: false, required: false
  public get acceleratedAgingThreshold() {
    return this.getNumberAttribute('accelerated_aging_threshold');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataScmSessionSettingListDataSessionSettingsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // dhcp_bcast_session_on - computed: true, optional: false, required: false
  public get dhcpBcastSessionOn() {
    return this.getBooleanAttribute('dhcp_bcast_session_on');
  }

  // erspan - computed: true, optional: false, required: false
  public get erspan() {
    return this.getBooleanAttribute('erspan');
  }

  // icmp_unreachable_rate - computed: true, optional: false, required: false
  public get icmpUnreachableRate() {
    return this.getNumberAttribute('icmp_unreachable_rate');
  }

  // icmpv6_rate_limit - computed: true, optional: false, required: false
  private _icmpv6RateLimit = new DataScmSessionSettingListDataSessionSettingsIcmpv6RateLimitOutputReference(this, "icmpv6_rate_limit");
  public get icmpv6RateLimit() {
    return this._icmpv6RateLimit;
  }

  // ipv6_firewalling - computed: true, optional: false, required: false
  public get ipv6Firewalling() {
    return this.getBooleanAttribute('ipv6_firewalling');
  }

  // jumbo_frame - computed: true, optional: false, required: false
  private _jumboFrame = new DataScmSessionSettingListDataSessionSettingsJumboFrameOutputReference(this, "jumbo_frame");
  public get jumboFrame() {
    return this._jumboFrame;
  }

  // max_pending_mcast_pkts_per_session - computed: true, optional: false, required: false
  public get maxPendingMcastPktsPerSession() {
    return this.getNumberAttribute('max_pending_mcast_pkts_per_session');
  }

  // multicast_route_setup_buffering - computed: true, optional: false, required: false
  public get multicastRouteSetupBuffering() {
    return this.getBooleanAttribute('multicast_route_setup_buffering');
  }

  // nat - computed: true, optional: false, required: false
  private _nat = new DataScmSessionSettingListDataSessionSettingsNatOutputReference(this, "nat");
  public get nat() {
    return this._nat;
  }

  // nat64 - computed: true, optional: false, required: false
  private _nat64 = new DataScmSessionSettingListDataSessionSettingsNat64OutputReference(this, "nat64");
  public get nat64() {
    return this._nat64;
  }

  // packet_buffer_protection_activate - computed: true, optional: false, required: false
  public get packetBufferProtectionActivate() {
    return this.getNumberAttribute('packet_buffer_protection_activate');
  }

  // packet_buffer_protection_alert - computed: true, optional: false, required: false
  public get packetBufferProtectionAlert() {
    return this.getNumberAttribute('packet_buffer_protection_alert');
  }

  // packet_buffer_protection_block_countdown - computed: true, optional: false, required: false
  public get packetBufferProtectionBlockCountdown() {
    return this.getNumberAttribute('packet_buffer_protection_block_countdown');
  }

  // packet_buffer_protection_block_duration_time - computed: true, optional: false, required: false
  public get packetBufferProtectionBlockDurationTime() {
    return this.getNumberAttribute('packet_buffer_protection_block_duration_time');
  }

  // packet_buffer_protection_block_hold_time - computed: true, optional: false, required: false
  public get packetBufferProtectionBlockHoldTime() {
    return this.getNumberAttribute('packet_buffer_protection_block_hold_time');
  }

  // packet_buffer_protection_enable - computed: true, optional: false, required: false
  public get packetBufferProtectionEnable() {
    return this.getBooleanAttribute('packet_buffer_protection_enable');
  }

  // packet_buffer_protection_latency_activate - computed: true, optional: false, required: false
  public get packetBufferProtectionLatencyActivate() {
    return this.getNumberAttribute('packet_buffer_protection_latency_activate');
  }

  // packet_buffer_protection_latency_alert - computed: true, optional: false, required: false
  public get packetBufferProtectionLatencyAlert() {
    return this.getNumberAttribute('packet_buffer_protection_latency_alert');
  }

  // packet_buffer_protection_latency_block_countdown - computed: true, optional: false, required: false
  public get packetBufferProtectionLatencyBlockCountdown() {
    return this.getNumberAttribute('packet_buffer_protection_latency_block_countdown');
  }

  // packet_buffer_protection_latency_max_tolerate - computed: true, optional: false, required: false
  public get packetBufferProtectionLatencyMaxTolerate() {
    return this.getNumberAttribute('packet_buffer_protection_latency_max_tolerate');
  }

  // packet_buffer_protection_monitor_only - computed: true, optional: false, required: false
  public get packetBufferProtectionMonitorOnly() {
    return this.getBooleanAttribute('packet_buffer_protection_monitor_only');
  }

  // packet_buffer_protection_use_latency - computed: true, optional: false, required: false
  public get packetBufferProtectionUseLatency() {
    return this.getBooleanAttribute('packet_buffer_protection_use_latency');
  }
}
export interface DataScmSessionSettingListData {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting_list#device DataScmSessionSettingList#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting_list#folder DataScmSessionSettingList#folder}
  */
  readonly folder?: string;
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting_list#id DataScmSessionSettingList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting_list#snippet DataScmSessionSettingList#snippet}
  */
  readonly snippet?: string;
}

export function dataScmSessionSettingListDataToTerraform(struct?: DataScmSessionSettingListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    folder: cdktf.stringToTerraform(struct!.folder),
    id: cdktf.stringToTerraform(struct!.id),
    snippet: cdktf.stringToTerraform(struct!.snippet),
  }
}


export function dataScmSessionSettingListDataToHclTerraform(struct?: DataScmSessionSettingListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snippet: {
      value: cdktf.stringToHclTerraform(struct!.snippet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataScmSessionSettingListDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmSessionSettingListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._snippet !== undefined) {
      hasAnyValues = true;
      internalValueResult.snippet = this._snippet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSessionSettingListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._folder = undefined;
      this._id = undefined;
      this._snippet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._folder = value.folder;
      this._id = value.id;
      this._snippet = value.snippet;
    }
  }

  // device - computed: true, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // session_settings - computed: true, optional: false, required: false
  private _sessionSettings = new DataScmSessionSettingListDataSessionSettingsOutputReference(this, "session_settings");
  public get sessionSettings() {
    return this._sessionSettings;
  }

  // snippet - computed: true, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }
}

export class DataScmSessionSettingListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmSessionSettingListData[] | cdktf.IResolvable

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
  public get(index: number): DataScmSessionSettingListDataOutputReference {
    return new DataScmSessionSettingListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting_list scm_session_setting_list}
*/
export class DataScmSessionSettingList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_session_setting_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmSessionSettingList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmSessionSettingList to import
  * @param importFromId The id of the existing DataScmSessionSettingList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmSessionSettingList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_session_setting_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting_list scm_session_setting_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmSessionSettingListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataScmSessionSettingListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_session_setting_list',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataScmSessionSettingListDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
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
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
