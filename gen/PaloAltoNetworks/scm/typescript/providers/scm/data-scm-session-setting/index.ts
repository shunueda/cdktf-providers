// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmSessionSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting#device DataScmSessionSetting#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting#folder DataScmSessionSetting#folder}
  */
  readonly folder?: string;
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting#id DataScmSessionSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting#snippet DataScmSessionSetting#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmSessionSettingSessionSettingsConfig {
}

export function dataScmSessionSettingSessionSettingsConfigToTerraform(struct?: DataScmSessionSettingSessionSettingsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSessionSettingSessionSettingsConfigToHclTerraform(struct?: DataScmSessionSettingSessionSettingsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSessionSettingSessionSettingsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSessionSettingSessionSettingsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSessionSettingSessionSettingsConfig | undefined) {
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
export interface DataScmSessionSettingSessionSettingsIcmpv6RateLimit {
}

export function dataScmSessionSettingSessionSettingsIcmpv6RateLimitToTerraform(struct?: DataScmSessionSettingSessionSettingsIcmpv6RateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSessionSettingSessionSettingsIcmpv6RateLimitToHclTerraform(struct?: DataScmSessionSettingSessionSettingsIcmpv6RateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSessionSettingSessionSettingsIcmpv6RateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSessionSettingSessionSettingsIcmpv6RateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSessionSettingSessionSettingsIcmpv6RateLimit | undefined) {
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
export interface DataScmSessionSettingSessionSettingsJumboFrame {
}

export function dataScmSessionSettingSessionSettingsJumboFrameToTerraform(struct?: DataScmSessionSettingSessionSettingsJumboFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSessionSettingSessionSettingsJumboFrameToHclTerraform(struct?: DataScmSessionSettingSessionSettingsJumboFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSessionSettingSessionSettingsJumboFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSessionSettingSessionSettingsJumboFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSessionSettingSessionSettingsJumboFrame | undefined) {
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
export interface DataScmSessionSettingSessionSettingsNat {
}

export function dataScmSessionSettingSessionSettingsNatToTerraform(struct?: DataScmSessionSettingSessionSettingsNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSessionSettingSessionSettingsNatToHclTerraform(struct?: DataScmSessionSettingSessionSettingsNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSessionSettingSessionSettingsNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSessionSettingSessionSettingsNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSessionSettingSessionSettingsNat | undefined) {
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
export interface DataScmSessionSettingSessionSettingsNat64 {
}

export function dataScmSessionSettingSessionSettingsNat64ToTerraform(struct?: DataScmSessionSettingSessionSettingsNat64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSessionSettingSessionSettingsNat64ToHclTerraform(struct?: DataScmSessionSettingSessionSettingsNat64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSessionSettingSessionSettingsNat64OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSessionSettingSessionSettingsNat64 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSessionSettingSessionSettingsNat64 | undefined) {
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
export interface DataScmSessionSettingSessionSettings {
}

export function dataScmSessionSettingSessionSettingsToTerraform(struct?: DataScmSessionSettingSessionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSessionSettingSessionSettingsToHclTerraform(struct?: DataScmSessionSettingSessionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSessionSettingSessionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSessionSettingSessionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSessionSettingSessionSettings | undefined) {
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
  private _config = new DataScmSessionSettingSessionSettingsConfigOutputReference(this, "config");
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
  private _icmpv6RateLimit = new DataScmSessionSettingSessionSettingsIcmpv6RateLimitOutputReference(this, "icmpv6_rate_limit");
  public get icmpv6RateLimit() {
    return this._icmpv6RateLimit;
  }

  // ipv6_firewalling - computed: true, optional: false, required: false
  public get ipv6Firewalling() {
    return this.getBooleanAttribute('ipv6_firewalling');
  }

  // jumbo_frame - computed: true, optional: false, required: false
  private _jumboFrame = new DataScmSessionSettingSessionSettingsJumboFrameOutputReference(this, "jumbo_frame");
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
  private _nat = new DataScmSessionSettingSessionSettingsNatOutputReference(this, "nat");
  public get nat() {
    return this._nat;
  }

  // nat64 - computed: true, optional: false, required: false
  private _nat64 = new DataScmSessionSettingSessionSettingsNat64OutputReference(this, "nat64");
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

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting scm_session_setting}
*/
export class DataScmSessionSetting extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_session_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmSessionSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmSessionSetting to import
  * @param importFromId The id of the existing DataScmSessionSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmSessionSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_session_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_setting scm_session_setting} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmSessionSettingConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmSessionSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_session_setting',
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
    this._id = config.id;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: false, optional: false, required: true
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
  private _sessionSettings = new DataScmSessionSettingSessionSettingsOutputReference(this, "session_settings");
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
