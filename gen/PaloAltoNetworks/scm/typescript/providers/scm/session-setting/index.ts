// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SessionSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#device SessionSetting#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#folder SessionSetting#folder}
  */
  readonly folder?: string;
  /**
  * Session settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#session_settings SessionSetting#session_settings}
  */
  readonly sessionSettings?: SessionSettingSessionSettings;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#snippet SessionSetting#snippet}
  */
  readonly snippet?: string;
}
export interface SessionSettingSessionSettingsConfig {
  /**
  * Rematch all sessions on config policy change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#rematch SessionSetting#rematch}
  */
  readonly rematch?: boolean | cdktf.IResolvable;
}

export function sessionSettingSessionSettingsConfigToTerraform(struct?: SessionSettingSessionSettingsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rematch: cdktf.booleanToTerraform(struct!.rematch),
  }
}


export function sessionSettingSessionSettingsConfigToHclTerraform(struct?: SessionSettingSessionSettingsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rematch: {
      value: cdktf.booleanToHclTerraform(struct!.rematch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionSettingSessionSettingsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SessionSettingSessionSettingsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rematch !== undefined) {
      hasAnyValues = true;
      internalValueResult.rematch = this._rematch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionSettingSessionSettingsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rematch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rematch = value.rematch;
    }
  }

  // rematch - computed: true, optional: true, required: false
  private _rematch?: boolean | cdktf.IResolvable; 
  public get rematch() {
    return this.getBooleanAttribute('rematch');
  }
  public set rematch(value: boolean | cdktf.IResolvable) {
    this._rematch = value;
  }
  public resetRematch() {
    this._rematch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rematchInput() {
    return this._rematch;
  }
}
export interface SessionSettingSessionSettingsIcmpv6RateLimit {
  /**
  * ICMPv6 token bucket size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#bucket_size SessionSetting#bucket_size}
  */
  readonly bucketSize?: number;
  /**
  * ICMPv6 error packet pate (per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#packet_rate SessionSetting#packet_rate}
  */
  readonly packetRate?: number;
}

export function sessionSettingSessionSettingsIcmpv6RateLimitToTerraform(struct?: SessionSettingSessionSettingsIcmpv6RateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_size: cdktf.numberToTerraform(struct!.bucketSize),
    packet_rate: cdktf.numberToTerraform(struct!.packetRate),
  }
}


export function sessionSettingSessionSettingsIcmpv6RateLimitToHclTerraform(struct?: SessionSettingSessionSettingsIcmpv6RateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_size: {
      value: cdktf.numberToHclTerraform(struct!.bucketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.packetRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionSettingSessionSettingsIcmpv6RateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SessionSettingSessionSettingsIcmpv6RateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketSize = this._bucketSize;
    }
    if (this._packetRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRate = this._packetRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionSettingSessionSettingsIcmpv6RateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketSize = undefined;
      this._packetRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketSize = value.bucketSize;
      this._packetRate = value.packetRate;
    }
  }

  // bucket_size - computed: true, optional: true, required: false
  private _bucketSize?: number; 
  public get bucketSize() {
    return this.getNumberAttribute('bucket_size');
  }
  public set bucketSize(value: number) {
    this._bucketSize = value;
  }
  public resetBucketSize() {
    this._bucketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketSizeInput() {
    return this._bucketSize;
  }

  // packet_rate - computed: true, optional: true, required: false
  private _packetRate?: number; 
  public get packetRate() {
    return this.getNumberAttribute('packet_rate');
  }
  public set packetRate(value: number) {
    this._packetRate = value;
  }
  public resetPacketRate() {
    this._packetRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateInput() {
    return this._packetRate;
  }
}
export interface SessionSettingSessionSettingsJumboFrame {
  /**
  * Global MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#mtu SessionSetting#mtu}
  */
  readonly mtu?: number;
}

export function sessionSettingSessionSettingsJumboFrameToTerraform(struct?: SessionSettingSessionSettingsJumboFrame | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mtu: cdktf.numberToTerraform(struct!.mtu),
  }
}


export function sessionSettingSessionSettingsJumboFrameToHclTerraform(struct?: SessionSettingSessionSettingsJumboFrame | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionSettingSessionSettingsJumboFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SessionSettingSessionSettingsJumboFrame | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionSettingSessionSettingsJumboFrame | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mtu = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mtu = value.mtu;
    }
  }

  // mtu - computed: true, optional: true, required: false
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
}
export interface SessionSettingSessionSettingsNat {
  /**
  * NAT oversubscription rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#dipp_oversub SessionSetting#dipp_oversub}
  */
  readonly dippOversub?: string;
}

export function sessionSettingSessionSettingsNatToTerraform(struct?: SessionSettingSessionSettingsNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dipp_oversub: cdktf.stringToTerraform(struct!.dippOversub),
  }
}


export function sessionSettingSessionSettingsNatToHclTerraform(struct?: SessionSettingSessionSettingsNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dipp_oversub: {
      value: cdktf.stringToHclTerraform(struct!.dippOversub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionSettingSessionSettingsNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SessionSettingSessionSettingsNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dippOversub !== undefined) {
      hasAnyValues = true;
      internalValueResult.dippOversub = this._dippOversub;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionSettingSessionSettingsNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dippOversub = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dippOversub = value.dippOversub;
    }
  }

  // dipp_oversub - computed: true, optional: true, required: false
  private _dippOversub?: string; 
  public get dippOversub() {
    return this.getStringAttribute('dipp_oversub');
  }
  public set dippOversub(value: string) {
    this._dippOversub = value;
  }
  public resetDippOversub() {
    this._dippOversub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dippOversubInput() {
    return this._dippOversub;
  }
}
export interface SessionSettingSessionSettingsNat64 {
  /**
  * NAT64 IPv6 minimum network MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#ipv6_min_network_mtu SessionSetting#ipv6_min_network_mtu}
  */
  readonly ipv6MinNetworkMtu?: number;
}

export function sessionSettingSessionSettingsNat64ToTerraform(struct?: SessionSettingSessionSettingsNat64 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_min_network_mtu: cdktf.numberToTerraform(struct!.ipv6MinNetworkMtu),
  }
}


export function sessionSettingSessionSettingsNat64ToHclTerraform(struct?: SessionSettingSessionSettingsNat64 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_min_network_mtu: {
      value: cdktf.numberToHclTerraform(struct!.ipv6MinNetworkMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionSettingSessionSettingsNat64OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SessionSettingSessionSettingsNat64 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6MinNetworkMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6MinNetworkMtu = this._ipv6MinNetworkMtu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionSettingSessionSettingsNat64 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6MinNetworkMtu = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6MinNetworkMtu = value.ipv6MinNetworkMtu;
    }
  }

  // ipv6_min_network_mtu - computed: true, optional: true, required: false
  private _ipv6MinNetworkMtu?: number; 
  public get ipv6MinNetworkMtu() {
    return this.getNumberAttribute('ipv6_min_network_mtu');
  }
  public set ipv6MinNetworkMtu(value: number) {
    this._ipv6MinNetworkMtu = value;
  }
  public resetIpv6MinNetworkMtu() {
    this._ipv6MinNetworkMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MinNetworkMtuInput() {
    return this._ipv6MinNetworkMtu;
  }
}
export interface SessionSettingSessionSettings {
  /**
  * Enable accelerated aging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#accelerated_aging_enable SessionSetting#accelerated_aging_enable}
  */
  readonly acceleratedAgingEnable?: boolean | cdktf.IResolvable;
  /**
  * Accelerated aging scaling factor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#accelerated_aging_scaling_factor SessionSetting#accelerated_aging_scaling_factor}
  */
  readonly acceleratedAgingScalingFactor?: number;
  /**
  * Accelerated aging threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#accelerated_aging_threshold SessionSetting#accelerated_aging_threshold}
  */
  readonly acceleratedAgingThreshold?: number;
  /**
  * Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#config SessionSetting#config}
  */
  readonly config?: SessionSettingSessionSettingsConfig;
  /**
  * Enable DHCP broadcast session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#dhcp_bcast_session_on SessionSetting#dhcp_bcast_session_on}
  */
  readonly dhcpBcastSessionOn?: boolean | cdktf.IResolvable;
  /**
  * Enable ERSPAN support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#erspan SessionSetting#erspan}
  */
  readonly erspan?: boolean | cdktf.IResolvable;
  /**
  * ICMP unreachable packet rate (per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#icmp_unreachable_rate SessionSetting#icmp_unreachable_rate}
  */
  readonly icmpUnreachableRate?: number;
  /**
  * ICMPv6 rate limiting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#icmpv6_rate_limit SessionSetting#icmpv6_rate_limit}
  */
  readonly icmpv6RateLimit?: SessionSettingSessionSettingsIcmpv6RateLimit;
  /**
  * Enable IPv6 firewalling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#ipv6_firewalling SessionSetting#ipv6_firewalling}
  */
  readonly ipv6Firewalling?: boolean | cdktf.IResolvable;
  /**
  * Enable jumbo frame support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#jumbo_frame SessionSetting#jumbo_frame}
  */
  readonly jumboFrame?: SessionSettingSessionSettingsJumboFrame;
  /**
  * Multicast route setup buffer size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#max_pending_mcast_pkts_per_session SessionSetting#max_pending_mcast_pkts_per_session}
  */
  readonly maxPendingMcastPktsPerSession?: number;
  /**
  * Multicast route setup buffering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#multicast_route_setup_buffering SessionSetting#multicast_route_setup_buffering}
  */
  readonly multicastRouteSetupBuffering?: boolean | cdktf.IResolvable;
  /**
  * Nat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#nat SessionSetting#nat}
  */
  readonly nat?: SessionSettingSessionSettingsNat;
  /**
  * Nat64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#nat64 SessionSetting#nat64}
  */
  readonly nat64?: SessionSettingSessionSettingsNat64;
  /**
  * Activate (%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#packet_buffer_protection_activate SessionSetting#packet_buffer_protection_activate}
  */
  readonly packetBufferProtectionActivate?: number;
  /**
  * Alert (%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#packet_buffer_protection_alert SessionSetting#packet_buffer_protection_alert}
  */
  readonly packetBufferProtectionAlert?: number;
  /**
  * Block countdown threshold (%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#packet_buffer_protection_block_countdown SessionSetting#packet_buffer_protection_block_countdown}
  */
  readonly packetBufferProtectionBlockCountdown?: number;
  /**
  * Block duration (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#packet_buffer_protection_block_duration_time SessionSetting#packet_buffer_protection_block_duration_time}
  */
  readonly packetBufferProtectionBlockDurationTime?: number;
  /**
  * Block hold time (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#packet_buffer_protection_block_hold_time SessionSetting#packet_buffer_protection_block_hold_time}
  */
  readonly packetBufferProtectionBlockHoldTime?: number;
  /**
  * Enable packet buffer protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#packet_buffer_protection_enable SessionSetting#packet_buffer_protection_enable}
  */
  readonly packetBufferProtectionEnable?: boolean | cdktf.IResolvable;
  /**
  * Latency activate (milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#packet_buffer_protection_latency_activate SessionSetting#packet_buffer_protection_latency_activate}
  */
  readonly packetBufferProtectionLatencyActivate?: number;
  /**
  * Latency alert (milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#packet_buffer_protection_latency_alert SessionSetting#packet_buffer_protection_latency_alert}
  */
  readonly packetBufferProtectionLatencyAlert?: number;
  /**
  * Block countdown threshold (milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#packet_buffer_protection_latency_block_countdown SessionSetting#packet_buffer_protection_latency_block_countdown}
  */
  readonly packetBufferProtectionLatencyBlockCountdown?: number;
  /**
  * Latency max tolerate (milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#packet_buffer_protection_latency_max_tolerate SessionSetting#packet_buffer_protection_latency_max_tolerate}
  */
  readonly packetBufferProtectionLatencyMaxTolerate?: number;
  /**
  * Packet buffer protection monitor only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#packet_buffer_protection_monitor_only SessionSetting#packet_buffer_protection_monitor_only}
  */
  readonly packetBufferProtectionMonitorOnly?: boolean | cdktf.IResolvable;
  /**
  * Enabled latency-based activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#packet_buffer_protection_use_latency SessionSetting#packet_buffer_protection_use_latency}
  */
  readonly packetBufferProtectionUseLatency?: boolean | cdktf.IResolvable;
}

export function sessionSettingSessionSettingsToTerraform(struct?: SessionSettingSessionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerated_aging_enable: cdktf.booleanToTerraform(struct!.acceleratedAgingEnable),
    accelerated_aging_scaling_factor: cdktf.numberToTerraform(struct!.acceleratedAgingScalingFactor),
    accelerated_aging_threshold: cdktf.numberToTerraform(struct!.acceleratedAgingThreshold),
    config: sessionSettingSessionSettingsConfigToTerraform(struct!.config),
    dhcp_bcast_session_on: cdktf.booleanToTerraform(struct!.dhcpBcastSessionOn),
    erspan: cdktf.booleanToTerraform(struct!.erspan),
    icmp_unreachable_rate: cdktf.numberToTerraform(struct!.icmpUnreachableRate),
    icmpv6_rate_limit: sessionSettingSessionSettingsIcmpv6RateLimitToTerraform(struct!.icmpv6RateLimit),
    ipv6_firewalling: cdktf.booleanToTerraform(struct!.ipv6Firewalling),
    jumbo_frame: sessionSettingSessionSettingsJumboFrameToTerraform(struct!.jumboFrame),
    max_pending_mcast_pkts_per_session: cdktf.numberToTerraform(struct!.maxPendingMcastPktsPerSession),
    multicast_route_setup_buffering: cdktf.booleanToTerraform(struct!.multicastRouteSetupBuffering),
    nat: sessionSettingSessionSettingsNatToTerraform(struct!.nat),
    nat64: sessionSettingSessionSettingsNat64ToTerraform(struct!.nat64),
    packet_buffer_protection_activate: cdktf.numberToTerraform(struct!.packetBufferProtectionActivate),
    packet_buffer_protection_alert: cdktf.numberToTerraform(struct!.packetBufferProtectionAlert),
    packet_buffer_protection_block_countdown: cdktf.numberToTerraform(struct!.packetBufferProtectionBlockCountdown),
    packet_buffer_protection_block_duration_time: cdktf.numberToTerraform(struct!.packetBufferProtectionBlockDurationTime),
    packet_buffer_protection_block_hold_time: cdktf.numberToTerraform(struct!.packetBufferProtectionBlockHoldTime),
    packet_buffer_protection_enable: cdktf.booleanToTerraform(struct!.packetBufferProtectionEnable),
    packet_buffer_protection_latency_activate: cdktf.numberToTerraform(struct!.packetBufferProtectionLatencyActivate),
    packet_buffer_protection_latency_alert: cdktf.numberToTerraform(struct!.packetBufferProtectionLatencyAlert),
    packet_buffer_protection_latency_block_countdown: cdktf.numberToTerraform(struct!.packetBufferProtectionLatencyBlockCountdown),
    packet_buffer_protection_latency_max_tolerate: cdktf.numberToTerraform(struct!.packetBufferProtectionLatencyMaxTolerate),
    packet_buffer_protection_monitor_only: cdktf.booleanToTerraform(struct!.packetBufferProtectionMonitorOnly),
    packet_buffer_protection_use_latency: cdktf.booleanToTerraform(struct!.packetBufferProtectionUseLatency),
  }
}


export function sessionSettingSessionSettingsToHclTerraform(struct?: SessionSettingSessionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerated_aging_enable: {
      value: cdktf.booleanToHclTerraform(struct!.acceleratedAgingEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    accelerated_aging_scaling_factor: {
      value: cdktf.numberToHclTerraform(struct!.acceleratedAgingScalingFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerated_aging_threshold: {
      value: cdktf.numberToHclTerraform(struct!.acceleratedAgingThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config: {
      value: sessionSettingSessionSettingsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "SessionSettingSessionSettingsConfig",
    },
    dhcp_bcast_session_on: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpBcastSessionOn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    erspan: {
      value: cdktf.booleanToHclTerraform(struct!.erspan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    icmp_unreachable_rate: {
      value: cdktf.numberToHclTerraform(struct!.icmpUnreachableRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_rate_limit: {
      value: sessionSettingSessionSettingsIcmpv6RateLimitToHclTerraform(struct!.icmpv6RateLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "SessionSettingSessionSettingsIcmpv6RateLimit",
    },
    ipv6_firewalling: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6Firewalling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jumbo_frame: {
      value: sessionSettingSessionSettingsJumboFrameToHclTerraform(struct!.jumboFrame),
      isBlock: true,
      type: "struct",
      storageClassType: "SessionSettingSessionSettingsJumboFrame",
    },
    max_pending_mcast_pkts_per_session: {
      value: cdktf.numberToHclTerraform(struct!.maxPendingMcastPktsPerSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multicast_route_setup_buffering: {
      value: cdktf.booleanToHclTerraform(struct!.multicastRouteSetupBuffering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nat: {
      value: sessionSettingSessionSettingsNatToHclTerraform(struct!.nat),
      isBlock: true,
      type: "struct",
      storageClassType: "SessionSettingSessionSettingsNat",
    },
    nat64: {
      value: sessionSettingSessionSettingsNat64ToHclTerraform(struct!.nat64),
      isBlock: true,
      type: "struct",
      storageClassType: "SessionSettingSessionSettingsNat64",
    },
    packet_buffer_protection_activate: {
      value: cdktf.numberToHclTerraform(struct!.packetBufferProtectionActivate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_buffer_protection_alert: {
      value: cdktf.numberToHclTerraform(struct!.packetBufferProtectionAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_buffer_protection_block_countdown: {
      value: cdktf.numberToHclTerraform(struct!.packetBufferProtectionBlockCountdown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_buffer_protection_block_duration_time: {
      value: cdktf.numberToHclTerraform(struct!.packetBufferProtectionBlockDurationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_buffer_protection_block_hold_time: {
      value: cdktf.numberToHclTerraform(struct!.packetBufferProtectionBlockHoldTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_buffer_protection_enable: {
      value: cdktf.booleanToHclTerraform(struct!.packetBufferProtectionEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    packet_buffer_protection_latency_activate: {
      value: cdktf.numberToHclTerraform(struct!.packetBufferProtectionLatencyActivate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_buffer_protection_latency_alert: {
      value: cdktf.numberToHclTerraform(struct!.packetBufferProtectionLatencyAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_buffer_protection_latency_block_countdown: {
      value: cdktf.numberToHclTerraform(struct!.packetBufferProtectionLatencyBlockCountdown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_buffer_protection_latency_max_tolerate: {
      value: cdktf.numberToHclTerraform(struct!.packetBufferProtectionLatencyMaxTolerate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_buffer_protection_monitor_only: {
      value: cdktf.booleanToHclTerraform(struct!.packetBufferProtectionMonitorOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    packet_buffer_protection_use_latency: {
      value: cdktf.booleanToHclTerraform(struct!.packetBufferProtectionUseLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionSettingSessionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SessionSettingSessionSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratedAgingEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratedAgingEnable = this._acceleratedAgingEnable;
    }
    if (this._acceleratedAgingScalingFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratedAgingScalingFactor = this._acceleratedAgingScalingFactor;
    }
    if (this._acceleratedAgingThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratedAgingThreshold = this._acceleratedAgingThreshold;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._dhcpBcastSessionOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpBcastSessionOn = this._dhcpBcastSessionOn;
    }
    if (this._erspan !== undefined) {
      hasAnyValues = true;
      internalValueResult.erspan = this._erspan;
    }
    if (this._icmpUnreachableRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpUnreachableRate = this._icmpUnreachableRate;
    }
    if (this._icmpv6RateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6RateLimit = this._icmpv6RateLimit?.internalValue;
    }
    if (this._ipv6Firewalling !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Firewalling = this._ipv6Firewalling;
    }
    if (this._jumboFrame?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboFrame = this._jumboFrame?.internalValue;
    }
    if (this._maxPendingMcastPktsPerSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingMcastPktsPerSession = this._maxPendingMcastPktsPerSession;
    }
    if (this._multicastRouteSetupBuffering !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastRouteSetupBuffering = this._multicastRouteSetupBuffering;
    }
    if (this._nat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat?.internalValue;
    }
    if (this._nat64?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64 = this._nat64?.internalValue;
    }
    if (this._packetBufferProtectionActivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBufferProtectionActivate = this._packetBufferProtectionActivate;
    }
    if (this._packetBufferProtectionAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBufferProtectionAlert = this._packetBufferProtectionAlert;
    }
    if (this._packetBufferProtectionBlockCountdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBufferProtectionBlockCountdown = this._packetBufferProtectionBlockCountdown;
    }
    if (this._packetBufferProtectionBlockDurationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBufferProtectionBlockDurationTime = this._packetBufferProtectionBlockDurationTime;
    }
    if (this._packetBufferProtectionBlockHoldTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBufferProtectionBlockHoldTime = this._packetBufferProtectionBlockHoldTime;
    }
    if (this._packetBufferProtectionEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBufferProtectionEnable = this._packetBufferProtectionEnable;
    }
    if (this._packetBufferProtectionLatencyActivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBufferProtectionLatencyActivate = this._packetBufferProtectionLatencyActivate;
    }
    if (this._packetBufferProtectionLatencyAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBufferProtectionLatencyAlert = this._packetBufferProtectionLatencyAlert;
    }
    if (this._packetBufferProtectionLatencyBlockCountdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBufferProtectionLatencyBlockCountdown = this._packetBufferProtectionLatencyBlockCountdown;
    }
    if (this._packetBufferProtectionLatencyMaxTolerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBufferProtectionLatencyMaxTolerate = this._packetBufferProtectionLatencyMaxTolerate;
    }
    if (this._packetBufferProtectionMonitorOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBufferProtectionMonitorOnly = this._packetBufferProtectionMonitorOnly;
    }
    if (this._packetBufferProtectionUseLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBufferProtectionUseLatency = this._packetBufferProtectionUseLatency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionSettingSessionSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratedAgingEnable = undefined;
      this._acceleratedAgingScalingFactor = undefined;
      this._acceleratedAgingThreshold = undefined;
      this._config.internalValue = undefined;
      this._dhcpBcastSessionOn = undefined;
      this._erspan = undefined;
      this._icmpUnreachableRate = undefined;
      this._icmpv6RateLimit.internalValue = undefined;
      this._ipv6Firewalling = undefined;
      this._jumboFrame.internalValue = undefined;
      this._maxPendingMcastPktsPerSession = undefined;
      this._multicastRouteSetupBuffering = undefined;
      this._nat.internalValue = undefined;
      this._nat64.internalValue = undefined;
      this._packetBufferProtectionActivate = undefined;
      this._packetBufferProtectionAlert = undefined;
      this._packetBufferProtectionBlockCountdown = undefined;
      this._packetBufferProtectionBlockDurationTime = undefined;
      this._packetBufferProtectionBlockHoldTime = undefined;
      this._packetBufferProtectionEnable = undefined;
      this._packetBufferProtectionLatencyActivate = undefined;
      this._packetBufferProtectionLatencyAlert = undefined;
      this._packetBufferProtectionLatencyBlockCountdown = undefined;
      this._packetBufferProtectionLatencyMaxTolerate = undefined;
      this._packetBufferProtectionMonitorOnly = undefined;
      this._packetBufferProtectionUseLatency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratedAgingEnable = value.acceleratedAgingEnable;
      this._acceleratedAgingScalingFactor = value.acceleratedAgingScalingFactor;
      this._acceleratedAgingThreshold = value.acceleratedAgingThreshold;
      this._config.internalValue = value.config;
      this._dhcpBcastSessionOn = value.dhcpBcastSessionOn;
      this._erspan = value.erspan;
      this._icmpUnreachableRate = value.icmpUnreachableRate;
      this._icmpv6RateLimit.internalValue = value.icmpv6RateLimit;
      this._ipv6Firewalling = value.ipv6Firewalling;
      this._jumboFrame.internalValue = value.jumboFrame;
      this._maxPendingMcastPktsPerSession = value.maxPendingMcastPktsPerSession;
      this._multicastRouteSetupBuffering = value.multicastRouteSetupBuffering;
      this._nat.internalValue = value.nat;
      this._nat64.internalValue = value.nat64;
      this._packetBufferProtectionActivate = value.packetBufferProtectionActivate;
      this._packetBufferProtectionAlert = value.packetBufferProtectionAlert;
      this._packetBufferProtectionBlockCountdown = value.packetBufferProtectionBlockCountdown;
      this._packetBufferProtectionBlockDurationTime = value.packetBufferProtectionBlockDurationTime;
      this._packetBufferProtectionBlockHoldTime = value.packetBufferProtectionBlockHoldTime;
      this._packetBufferProtectionEnable = value.packetBufferProtectionEnable;
      this._packetBufferProtectionLatencyActivate = value.packetBufferProtectionLatencyActivate;
      this._packetBufferProtectionLatencyAlert = value.packetBufferProtectionLatencyAlert;
      this._packetBufferProtectionLatencyBlockCountdown = value.packetBufferProtectionLatencyBlockCountdown;
      this._packetBufferProtectionLatencyMaxTolerate = value.packetBufferProtectionLatencyMaxTolerate;
      this._packetBufferProtectionMonitorOnly = value.packetBufferProtectionMonitorOnly;
      this._packetBufferProtectionUseLatency = value.packetBufferProtectionUseLatency;
    }
  }

  // accelerated_aging_enable - computed: true, optional: true, required: false
  private _acceleratedAgingEnable?: boolean | cdktf.IResolvable; 
  public get acceleratedAgingEnable() {
    return this.getBooleanAttribute('accelerated_aging_enable');
  }
  public set acceleratedAgingEnable(value: boolean | cdktf.IResolvable) {
    this._acceleratedAgingEnable = value;
  }
  public resetAcceleratedAgingEnable() {
    this._acceleratedAgingEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedAgingEnableInput() {
    return this._acceleratedAgingEnable;
  }

  // accelerated_aging_scaling_factor - computed: true, optional: true, required: false
  private _acceleratedAgingScalingFactor?: number; 
  public get acceleratedAgingScalingFactor() {
    return this.getNumberAttribute('accelerated_aging_scaling_factor');
  }
  public set acceleratedAgingScalingFactor(value: number) {
    this._acceleratedAgingScalingFactor = value;
  }
  public resetAcceleratedAgingScalingFactor() {
    this._acceleratedAgingScalingFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedAgingScalingFactorInput() {
    return this._acceleratedAgingScalingFactor;
  }

  // accelerated_aging_threshold - computed: true, optional: true, required: false
  private _acceleratedAgingThreshold?: number; 
  public get acceleratedAgingThreshold() {
    return this.getNumberAttribute('accelerated_aging_threshold');
  }
  public set acceleratedAgingThreshold(value: number) {
    this._acceleratedAgingThreshold = value;
  }
  public resetAcceleratedAgingThreshold() {
    this._acceleratedAgingThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedAgingThresholdInput() {
    return this._acceleratedAgingThreshold;
  }

  // config - computed: false, optional: true, required: false
  private _config = new SessionSettingSessionSettingsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: SessionSettingSessionSettingsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // dhcp_bcast_session_on - computed: true, optional: true, required: false
  private _dhcpBcastSessionOn?: boolean | cdktf.IResolvable; 
  public get dhcpBcastSessionOn() {
    return this.getBooleanAttribute('dhcp_bcast_session_on');
  }
  public set dhcpBcastSessionOn(value: boolean | cdktf.IResolvable) {
    this._dhcpBcastSessionOn = value;
  }
  public resetDhcpBcastSessionOn() {
    this._dhcpBcastSessionOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpBcastSessionOnInput() {
    return this._dhcpBcastSessionOn;
  }

  // erspan - computed: true, optional: true, required: false
  private _erspan?: boolean | cdktf.IResolvable; 
  public get erspan() {
    return this.getBooleanAttribute('erspan');
  }
  public set erspan(value: boolean | cdktf.IResolvable) {
    this._erspan = value;
  }
  public resetErspan() {
    this._erspan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erspanInput() {
    return this._erspan;
  }

  // icmp_unreachable_rate - computed: true, optional: true, required: false
  private _icmpUnreachableRate?: number; 
  public get icmpUnreachableRate() {
    return this.getNumberAttribute('icmp_unreachable_rate');
  }
  public set icmpUnreachableRate(value: number) {
    this._icmpUnreachableRate = value;
  }
  public resetIcmpUnreachableRate() {
    this._icmpUnreachableRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpUnreachableRateInput() {
    return this._icmpUnreachableRate;
  }

  // icmpv6_rate_limit - computed: false, optional: true, required: false
  private _icmpv6RateLimit = new SessionSettingSessionSettingsIcmpv6RateLimitOutputReference(this, "icmpv6_rate_limit");
  public get icmpv6RateLimit() {
    return this._icmpv6RateLimit;
  }
  public putIcmpv6RateLimit(value: SessionSettingSessionSettingsIcmpv6RateLimit) {
    this._icmpv6RateLimit.internalValue = value;
  }
  public resetIcmpv6RateLimit() {
    this._icmpv6RateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6RateLimitInput() {
    return this._icmpv6RateLimit.internalValue;
  }

  // ipv6_firewalling - computed: true, optional: true, required: false
  private _ipv6Firewalling?: boolean | cdktf.IResolvable; 
  public get ipv6Firewalling() {
    return this.getBooleanAttribute('ipv6_firewalling');
  }
  public set ipv6Firewalling(value: boolean | cdktf.IResolvable) {
    this._ipv6Firewalling = value;
  }
  public resetIpv6Firewalling() {
    this._ipv6Firewalling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FirewallingInput() {
    return this._ipv6Firewalling;
  }

  // jumbo_frame - computed: false, optional: true, required: false
  private _jumboFrame = new SessionSettingSessionSettingsJumboFrameOutputReference(this, "jumbo_frame");
  public get jumboFrame() {
    return this._jumboFrame;
  }
  public putJumboFrame(value: SessionSettingSessionSettingsJumboFrame) {
    this._jumboFrame.internalValue = value;
  }
  public resetJumboFrame() {
    this._jumboFrame.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboFrameInput() {
    return this._jumboFrame.internalValue;
  }

  // max_pending_mcast_pkts_per_session - computed: true, optional: true, required: false
  private _maxPendingMcastPktsPerSession?: number; 
  public get maxPendingMcastPktsPerSession() {
    return this.getNumberAttribute('max_pending_mcast_pkts_per_session');
  }
  public set maxPendingMcastPktsPerSession(value: number) {
    this._maxPendingMcastPktsPerSession = value;
  }
  public resetMaxPendingMcastPktsPerSession() {
    this._maxPendingMcastPktsPerSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingMcastPktsPerSessionInput() {
    return this._maxPendingMcastPktsPerSession;
  }

  // multicast_route_setup_buffering - computed: true, optional: true, required: false
  private _multicastRouteSetupBuffering?: boolean | cdktf.IResolvable; 
  public get multicastRouteSetupBuffering() {
    return this.getBooleanAttribute('multicast_route_setup_buffering');
  }
  public set multicastRouteSetupBuffering(value: boolean | cdktf.IResolvable) {
    this._multicastRouteSetupBuffering = value;
  }
  public resetMulticastRouteSetupBuffering() {
    this._multicastRouteSetupBuffering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastRouteSetupBufferingInput() {
    return this._multicastRouteSetupBuffering;
  }

  // nat - computed: false, optional: true, required: false
  private _nat = new SessionSettingSessionSettingsNatOutputReference(this, "nat");
  public get nat() {
    return this._nat;
  }
  public putNat(value: SessionSettingSessionSettingsNat) {
    this._nat.internalValue = value;
  }
  public resetNat() {
    this._nat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat.internalValue;
  }

  // nat64 - computed: false, optional: true, required: false
  private _nat64 = new SessionSettingSessionSettingsNat64OutputReference(this, "nat64");
  public get nat64() {
    return this._nat64;
  }
  public putNat64(value: SessionSettingSessionSettingsNat64) {
    this._nat64.internalValue = value;
  }
  public resetNat64() {
    this._nat64.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64Input() {
    return this._nat64.internalValue;
  }

  // packet_buffer_protection_activate - computed: true, optional: true, required: false
  private _packetBufferProtectionActivate?: number; 
  public get packetBufferProtectionActivate() {
    return this.getNumberAttribute('packet_buffer_protection_activate');
  }
  public set packetBufferProtectionActivate(value: number) {
    this._packetBufferProtectionActivate = value;
  }
  public resetPacketBufferProtectionActivate() {
    this._packetBufferProtectionActivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBufferProtectionActivateInput() {
    return this._packetBufferProtectionActivate;
  }

  // packet_buffer_protection_alert - computed: true, optional: true, required: false
  private _packetBufferProtectionAlert?: number; 
  public get packetBufferProtectionAlert() {
    return this.getNumberAttribute('packet_buffer_protection_alert');
  }
  public set packetBufferProtectionAlert(value: number) {
    this._packetBufferProtectionAlert = value;
  }
  public resetPacketBufferProtectionAlert() {
    this._packetBufferProtectionAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBufferProtectionAlertInput() {
    return this._packetBufferProtectionAlert;
  }

  // packet_buffer_protection_block_countdown - computed: true, optional: true, required: false
  private _packetBufferProtectionBlockCountdown?: number; 
  public get packetBufferProtectionBlockCountdown() {
    return this.getNumberAttribute('packet_buffer_protection_block_countdown');
  }
  public set packetBufferProtectionBlockCountdown(value: number) {
    this._packetBufferProtectionBlockCountdown = value;
  }
  public resetPacketBufferProtectionBlockCountdown() {
    this._packetBufferProtectionBlockCountdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBufferProtectionBlockCountdownInput() {
    return this._packetBufferProtectionBlockCountdown;
  }

  // packet_buffer_protection_block_duration_time - computed: true, optional: true, required: false
  private _packetBufferProtectionBlockDurationTime?: number; 
  public get packetBufferProtectionBlockDurationTime() {
    return this.getNumberAttribute('packet_buffer_protection_block_duration_time');
  }
  public set packetBufferProtectionBlockDurationTime(value: number) {
    this._packetBufferProtectionBlockDurationTime = value;
  }
  public resetPacketBufferProtectionBlockDurationTime() {
    this._packetBufferProtectionBlockDurationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBufferProtectionBlockDurationTimeInput() {
    return this._packetBufferProtectionBlockDurationTime;
  }

  // packet_buffer_protection_block_hold_time - computed: true, optional: true, required: false
  private _packetBufferProtectionBlockHoldTime?: number; 
  public get packetBufferProtectionBlockHoldTime() {
    return this.getNumberAttribute('packet_buffer_protection_block_hold_time');
  }
  public set packetBufferProtectionBlockHoldTime(value: number) {
    this._packetBufferProtectionBlockHoldTime = value;
  }
  public resetPacketBufferProtectionBlockHoldTime() {
    this._packetBufferProtectionBlockHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBufferProtectionBlockHoldTimeInput() {
    return this._packetBufferProtectionBlockHoldTime;
  }

  // packet_buffer_protection_enable - computed: true, optional: true, required: false
  private _packetBufferProtectionEnable?: boolean | cdktf.IResolvable; 
  public get packetBufferProtectionEnable() {
    return this.getBooleanAttribute('packet_buffer_protection_enable');
  }
  public set packetBufferProtectionEnable(value: boolean | cdktf.IResolvable) {
    this._packetBufferProtectionEnable = value;
  }
  public resetPacketBufferProtectionEnable() {
    this._packetBufferProtectionEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBufferProtectionEnableInput() {
    return this._packetBufferProtectionEnable;
  }

  // packet_buffer_protection_latency_activate - computed: true, optional: true, required: false
  private _packetBufferProtectionLatencyActivate?: number; 
  public get packetBufferProtectionLatencyActivate() {
    return this.getNumberAttribute('packet_buffer_protection_latency_activate');
  }
  public set packetBufferProtectionLatencyActivate(value: number) {
    this._packetBufferProtectionLatencyActivate = value;
  }
  public resetPacketBufferProtectionLatencyActivate() {
    this._packetBufferProtectionLatencyActivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBufferProtectionLatencyActivateInput() {
    return this._packetBufferProtectionLatencyActivate;
  }

  // packet_buffer_protection_latency_alert - computed: true, optional: true, required: false
  private _packetBufferProtectionLatencyAlert?: number; 
  public get packetBufferProtectionLatencyAlert() {
    return this.getNumberAttribute('packet_buffer_protection_latency_alert');
  }
  public set packetBufferProtectionLatencyAlert(value: number) {
    this._packetBufferProtectionLatencyAlert = value;
  }
  public resetPacketBufferProtectionLatencyAlert() {
    this._packetBufferProtectionLatencyAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBufferProtectionLatencyAlertInput() {
    return this._packetBufferProtectionLatencyAlert;
  }

  // packet_buffer_protection_latency_block_countdown - computed: true, optional: true, required: false
  private _packetBufferProtectionLatencyBlockCountdown?: number; 
  public get packetBufferProtectionLatencyBlockCountdown() {
    return this.getNumberAttribute('packet_buffer_protection_latency_block_countdown');
  }
  public set packetBufferProtectionLatencyBlockCountdown(value: number) {
    this._packetBufferProtectionLatencyBlockCountdown = value;
  }
  public resetPacketBufferProtectionLatencyBlockCountdown() {
    this._packetBufferProtectionLatencyBlockCountdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBufferProtectionLatencyBlockCountdownInput() {
    return this._packetBufferProtectionLatencyBlockCountdown;
  }

  // packet_buffer_protection_latency_max_tolerate - computed: true, optional: true, required: false
  private _packetBufferProtectionLatencyMaxTolerate?: number; 
  public get packetBufferProtectionLatencyMaxTolerate() {
    return this.getNumberAttribute('packet_buffer_protection_latency_max_tolerate');
  }
  public set packetBufferProtectionLatencyMaxTolerate(value: number) {
    this._packetBufferProtectionLatencyMaxTolerate = value;
  }
  public resetPacketBufferProtectionLatencyMaxTolerate() {
    this._packetBufferProtectionLatencyMaxTolerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBufferProtectionLatencyMaxTolerateInput() {
    return this._packetBufferProtectionLatencyMaxTolerate;
  }

  // packet_buffer_protection_monitor_only - computed: true, optional: true, required: false
  private _packetBufferProtectionMonitorOnly?: boolean | cdktf.IResolvable; 
  public get packetBufferProtectionMonitorOnly() {
    return this.getBooleanAttribute('packet_buffer_protection_monitor_only');
  }
  public set packetBufferProtectionMonitorOnly(value: boolean | cdktf.IResolvable) {
    this._packetBufferProtectionMonitorOnly = value;
  }
  public resetPacketBufferProtectionMonitorOnly() {
    this._packetBufferProtectionMonitorOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBufferProtectionMonitorOnlyInput() {
    return this._packetBufferProtectionMonitorOnly;
  }

  // packet_buffer_protection_use_latency - computed: true, optional: true, required: false
  private _packetBufferProtectionUseLatency?: boolean | cdktf.IResolvable; 
  public get packetBufferProtectionUseLatency() {
    return this.getBooleanAttribute('packet_buffer_protection_use_latency');
  }
  public set packetBufferProtectionUseLatency(value: boolean | cdktf.IResolvable) {
    this._packetBufferProtectionUseLatency = value;
  }
  public resetPacketBufferProtectionUseLatency() {
    this._packetBufferProtectionUseLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBufferProtectionUseLatencyInput() {
    return this._packetBufferProtectionUseLatency;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting scm_session_setting}
*/
export class SessionSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_session_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SessionSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SessionSetting to import
  * @param importFromId The id of the existing SessionSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SessionSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_session_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_setting scm_session_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SessionSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SessionSettingConfig = {}) {
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
    this._sessionSettings.internalValue = config.sessionSettings;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // session_settings - computed: false, optional: true, required: false
  private _sessionSettings = new SessionSettingSessionSettingsOutputReference(this, "session_settings");
  public get sessionSettings() {
    return this._sessionSettings;
  }
  public putSessionSettings(value: SessionSettingSessionSettings) {
    this._sessionSettings.internalValue = value;
  }
  public resetSessionSettings() {
    this._sessionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSettingsInput() {
    return this._sessionSettings.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      session_settings: sessionSettingSessionSettingsToTerraform(this._sessionSettings.internalValue),
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
      session_settings: {
        value: sessionSettingSessionSettingsToHclTerraform(this._sessionSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SessionSettingSessionSettings",
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
