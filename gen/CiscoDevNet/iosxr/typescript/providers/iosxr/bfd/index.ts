// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BfdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Coexistence for BoB and BLB
  *   - Choices: `inherit`, `logical`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#bundle_coexistence_bob_blb Bfd#bundle_coexistence_bob_blb}
  */
  readonly bundleCoexistenceBobBlb?: string;
  /**
  * Initial delay before bringing up session
  *   - Range: `1`-`518400000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#dampening_bundle_member_initial_wait Bfd#dampening_bundle_member_initial_wait}
  */
  readonly dampeningBundleMemberInitialWait?: number;
  /**
  * Apply immediate dampening and only when failure is L3 specific
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#dampening_bundle_member_l3_only_mode Bfd#dampening_bundle_member_l3_only_mode}
  */
  readonly dampeningBundleMemberL3OnlyMode?: boolean | cdktf.IResolvable;
  /**
  * Maximum delay before bringing up session
  *   - Range: `1`-`518400000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#dampening_bundle_member_maximum_wait Bfd#dampening_bundle_member_maximum_wait}
  */
  readonly dampeningBundleMemberMaximumWait?: number;
  /**
  * Secondary delay before bringing up session
  *   - Range: `1`-`518400000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#dampening_bundle_member_secondary_wait Bfd#dampening_bundle_member_secondary_wait}
  */
  readonly dampeningBundleMemberSecondaryWait?: number;
  /**
  * Disable BFD dampening
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#dampening_disable Bfd#dampening_disable}
  */
  readonly dampeningDisable?: boolean | cdktf.IResolvable;
  /**
  * Enable DOWN state session monitoring extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#dampening_extensions_down_monitoring Bfd#dampening_extensions_down_monitoring}
  */
  readonly dampeningExtensionsDownMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Initial delay before bringing up session
  *   - Range: `1`-`3600000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#dampening_initial_wait Bfd#dampening_initial_wait}
  */
  readonly dampeningInitialWait?: number;
  /**
  * Maximum delay before bringing up session
  *   - Range: `1`-`3600000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#dampening_maximum_wait Bfd#dampening_maximum_wait}
  */
  readonly dampeningMaximumWait?: number;
  /**
  * Secondary delay before bringing up session
  *   - Range: `1`-`3600000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#dampening_secondary_wait Bfd#dampening_secondary_wait}
  */
  readonly dampeningSecondaryWait?: number;
  /**
  * Stability threshold to enable dampening
  *   - Range: `60000`-`3600000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#dampening_threshold Bfd#dampening_threshold}
  */
  readonly dampeningThreshold?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#delete_mode Bfd#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#device Bfd#device}
  */
  readonly device?: string;
  /**
  * Disable BFD echo mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#echo_disable Bfd#echo_disable}
  */
  readonly echoDisable?: boolean | cdktf.IResolvable;
  /**
  * Set the preferred minimum interval for the BFD session
  *   - Range: `15`-`2000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#echo_ipv4_bundle_per_member_minimum_interval Bfd#echo_ipv4_bundle_per_member_minimum_interval}
  */
  readonly echoIpv4BundlePerMemberMinimumInterval?: number;
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#echo_ipv4_source Bfd#echo_ipv4_source}
  */
  readonly echoIpv4Source?: string;
  /**
  * Enable BFD echo latency detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#echo_latency_detect Bfd#echo_latency_detect}
  */
  readonly echoLatencyDetect?: boolean | cdktf.IResolvable;
  /**
  * Count of consecutive bad latency packets to take session down
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#echo_latency_detect_count Bfd#echo_latency_detect_count}
  */
  readonly echoLatencyDetectCount?: number;
  /**
  * Percentage of detection time to consider as bad latency
  *   - Range: `100`-`250`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#echo_latency_detect_percentage Bfd#echo_latency_detect_percentage}
  */
  readonly echoLatencyDetectPercentage?: number;
  /**
  * Ignore remote 'Required Min Echo RX Interval' setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#echo_startup_validate_force Bfd#echo_startup_validate_force}
  */
  readonly echoStartupValidateForce?: boolean | cdktf.IResolvable;
  /**
  * Configure BFD on an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#interfaces Bfd#interfaces}
  */
  readonly interfaces?: BfdInterfaces[] | cdktf.IResolvable;
  /**
  * Disable BFD checksum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#ipv6_checksum_disable Bfd#ipv6_checksum_disable}
  */
  readonly ipv6ChecksumDisable?: boolean | cdktf.IResolvable;
  /**
  * TTL Drop Threshold
  *   - Range: `0`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#multihop_ttl_drop_threshold Bfd#multihop_ttl_drop_threshold}
  */
  readonly multihopTtlDropThreshold?: number;
  /**
  * Specify a location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#multipath_locations Bfd#multipath_locations}
  */
  readonly multipathLocations?: BfdMultipathLocations[] | cdktf.IResolvable;
  /**
  * Configure BFD trap pre-mapped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#trap_singlehop_pre_mapped Bfd#trap_singlehop_pre_mapped}
  */
  readonly trapSinglehopPreMapped?: boolean | cdktf.IResolvable;
}
export interface BfdInterfaces {
  /**
  * Disable BFD for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#disable Bfd#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Disable BFD echo mode for this interface
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#echo_disable Bfd#echo_disable}
  */
  readonly echoDisable?: string;
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#echo_ipv4_source Bfd#echo_ipv4_source}
  */
  readonly echoIpv4Source?: string;
  /**
  * Select an interface to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#interface_name Bfd#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Disable BFD ipv6 checksum mode for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#ipv6_checksum_disable Bfd#ipv6_checksum_disable}
  */
  readonly ipv6ChecksumDisable?: boolean | cdktf.IResolvable;
  /**
  * Local address to be used by BFD for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#local_address Bfd#local_address}
  */
  readonly localAddress?: string;
  /**
  * BFD multiplier for this interface
  *   - Range: `2`-`50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#multiplier Bfd#multiplier}
  */
  readonly multiplier?: number;
  /**
  * BFD RX Interval for this interface in microseconds
  *   - Range: `3000`-`30000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#rx_interval Bfd#rx_interval}
  */
  readonly rxInterval?: number;
  /**
  * BFD TX Interval for this interface in microseconds
  *   - Range: `3000`-`30000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#tx_interval Bfd#tx_interval}
  */
  readonly txInterval?: number;
}

export function bfdInterfacesToTerraform(struct?: BfdInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    echo_disable: cdktf.stringToTerraform(struct!.echoDisable),
    echo_ipv4_source: cdktf.stringToTerraform(struct!.echoIpv4Source),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    ipv6_checksum_disable: cdktf.booleanToTerraform(struct!.ipv6ChecksumDisable),
    local_address: cdktf.stringToTerraform(struct!.localAddress),
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    rx_interval: cdktf.numberToTerraform(struct!.rxInterval),
    tx_interval: cdktf.numberToTerraform(struct!.txInterval),
  }
}


export function bfdInterfacesToHclTerraform(struct?: BfdInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    echo_disable: {
      value: cdktf.stringToHclTerraform(struct!.echoDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    echo_ipv4_source: {
      value: cdktf.stringToHclTerraform(struct!.echoIpv4Source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_checksum_disable: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6ChecksumDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_address: {
      value: cdktf.stringToHclTerraform(struct!.localAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_interval: {
      value: cdktf.numberToHclTerraform(struct!.rxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_interval: {
      value: cdktf.numberToHclTerraform(struct!.txInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BfdInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BfdInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._echoDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.echoDisable = this._echoDisable;
    }
    if (this._echoIpv4Source !== undefined) {
      hasAnyValues = true;
      internalValueResult.echoIpv4Source = this._echoIpv4Source;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._ipv6ChecksumDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6ChecksumDisable = this._ipv6ChecksumDisable;
    }
    if (this._localAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAddress = this._localAddress;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._rxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxInterval = this._rxInterval;
    }
    if (this._txInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.txInterval = this._txInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BfdInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._echoDisable = undefined;
      this._echoIpv4Source = undefined;
      this._interfaceName = undefined;
      this._ipv6ChecksumDisable = undefined;
      this._localAddress = undefined;
      this._multiplier = undefined;
      this._rxInterval = undefined;
      this._txInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._echoDisable = value.echoDisable;
      this._echoIpv4Source = value.echoIpv4Source;
      this._interfaceName = value.interfaceName;
      this._ipv6ChecksumDisable = value.ipv6ChecksumDisable;
      this._localAddress = value.localAddress;
      this._multiplier = value.multiplier;
      this._rxInterval = value.rxInterval;
      this._txInterval = value.txInterval;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // echo_disable - computed: false, optional: true, required: false
  private _echoDisable?: string; 
  public get echoDisable() {
    return this.getStringAttribute('echo_disable');
  }
  public set echoDisable(value: string) {
    this._echoDisable = value;
  }
  public resetEchoDisable() {
    this._echoDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoDisableInput() {
    return this._echoDisable;
  }

  // echo_ipv4_source - computed: false, optional: true, required: false
  private _echoIpv4Source?: string; 
  public get echoIpv4Source() {
    return this.getStringAttribute('echo_ipv4_source');
  }
  public set echoIpv4Source(value: string) {
    this._echoIpv4Source = value;
  }
  public resetEchoIpv4Source() {
    this._echoIpv4Source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoIpv4SourceInput() {
    return this._echoIpv4Source;
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // ipv6_checksum_disable - computed: false, optional: true, required: false
  private _ipv6ChecksumDisable?: boolean | cdktf.IResolvable; 
  public get ipv6ChecksumDisable() {
    return this.getBooleanAttribute('ipv6_checksum_disable');
  }
  public set ipv6ChecksumDisable(value: boolean | cdktf.IResolvable) {
    this._ipv6ChecksumDisable = value;
  }
  public resetIpv6ChecksumDisable() {
    this._ipv6ChecksumDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ChecksumDisableInput() {
    return this._ipv6ChecksumDisable;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress?: string; 
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }
  public set localAddress(value: string) {
    this._localAddress = value;
  }
  public resetLocalAddress() {
    this._localAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // rx_interval - computed: false, optional: true, required: false
  private _rxInterval?: number; 
  public get rxInterval() {
    return this.getNumberAttribute('rx_interval');
  }
  public set rxInterval(value: number) {
    this._rxInterval = value;
  }
  public resetRxInterval() {
    this._rxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxIntervalInput() {
    return this._rxInterval;
  }

  // tx_interval - computed: false, optional: true, required: false
  private _txInterval?: number; 
  public get txInterval() {
    return this.getNumberAttribute('tx_interval');
  }
  public set txInterval(value: number) {
    this._txInterval = value;
  }
  public resetTxInterval() {
    this._txInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txIntervalInput() {
    return this._txInterval;
  }
}

export class BfdInterfacesList extends cdktf.ComplexList {
  public internalValue? : BfdInterfaces[] | cdktf.IResolvable

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
  public get(index: number): BfdInterfacesOutputReference {
    return new BfdInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BfdMultipathLocations {
  /**
  * Fully qualified location specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#location_id Bfd#location_id}
  */
  readonly locationId: string;
}

export function bfdMultipathLocationsToTerraform(struct?: BfdMultipathLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_id: cdktf.stringToTerraform(struct!.locationId),
  }
}


export function bfdMultipathLocationsToHclTerraform(struct?: BfdMultipathLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_id: {
      value: cdktf.stringToHclTerraform(struct!.locationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BfdMultipathLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BfdMultipathLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationId = this._locationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BfdMultipathLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locationId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locationId = value.locationId;
    }
  }

  // location_id - computed: false, optional: false, required: true
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }
}

export class BfdMultipathLocationsList extends cdktf.ComplexList {
  public internalValue? : BfdMultipathLocations[] | cdktf.IResolvable

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
  public get(index: number): BfdMultipathLocationsOutputReference {
    return new BfdMultipathLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd iosxr_bfd}
*/
export class Bfd extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_bfd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bfd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bfd to import
  * @param importFromId The id of the existing Bfd that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bfd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_bfd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/bfd iosxr_bfd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BfdConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BfdConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_bfd',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bundleCoexistenceBobBlb = config.bundleCoexistenceBobBlb;
    this._dampeningBundleMemberInitialWait = config.dampeningBundleMemberInitialWait;
    this._dampeningBundleMemberL3OnlyMode = config.dampeningBundleMemberL3OnlyMode;
    this._dampeningBundleMemberMaximumWait = config.dampeningBundleMemberMaximumWait;
    this._dampeningBundleMemberSecondaryWait = config.dampeningBundleMemberSecondaryWait;
    this._dampeningDisable = config.dampeningDisable;
    this._dampeningExtensionsDownMonitoring = config.dampeningExtensionsDownMonitoring;
    this._dampeningInitialWait = config.dampeningInitialWait;
    this._dampeningMaximumWait = config.dampeningMaximumWait;
    this._dampeningSecondaryWait = config.dampeningSecondaryWait;
    this._dampeningThreshold = config.dampeningThreshold;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._echoDisable = config.echoDisable;
    this._echoIpv4BundlePerMemberMinimumInterval = config.echoIpv4BundlePerMemberMinimumInterval;
    this._echoIpv4Source = config.echoIpv4Source;
    this._echoLatencyDetect = config.echoLatencyDetect;
    this._echoLatencyDetectCount = config.echoLatencyDetectCount;
    this._echoLatencyDetectPercentage = config.echoLatencyDetectPercentage;
    this._echoStartupValidateForce = config.echoStartupValidateForce;
    this._interfaces.internalValue = config.interfaces;
    this._ipv6ChecksumDisable = config.ipv6ChecksumDisable;
    this._multihopTtlDropThreshold = config.multihopTtlDropThreshold;
    this._multipathLocations.internalValue = config.multipathLocations;
    this._trapSinglehopPreMapped = config.trapSinglehopPreMapped;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_coexistence_bob_blb - computed: false, optional: true, required: false
  private _bundleCoexistenceBobBlb?: string; 
  public get bundleCoexistenceBobBlb() {
    return this.getStringAttribute('bundle_coexistence_bob_blb');
  }
  public set bundleCoexistenceBobBlb(value: string) {
    this._bundleCoexistenceBobBlb = value;
  }
  public resetBundleCoexistenceBobBlb() {
    this._bundleCoexistenceBobBlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleCoexistenceBobBlbInput() {
    return this._bundleCoexistenceBobBlb;
  }

  // dampening_bundle_member_initial_wait - computed: false, optional: true, required: false
  private _dampeningBundleMemberInitialWait?: number; 
  public get dampeningBundleMemberInitialWait() {
    return this.getNumberAttribute('dampening_bundle_member_initial_wait');
  }
  public set dampeningBundleMemberInitialWait(value: number) {
    this._dampeningBundleMemberInitialWait = value;
  }
  public resetDampeningBundleMemberInitialWait() {
    this._dampeningBundleMemberInitialWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningBundleMemberInitialWaitInput() {
    return this._dampeningBundleMemberInitialWait;
  }

  // dampening_bundle_member_l3_only_mode - computed: false, optional: true, required: false
  private _dampeningBundleMemberL3OnlyMode?: boolean | cdktf.IResolvable; 
  public get dampeningBundleMemberL3OnlyMode() {
    return this.getBooleanAttribute('dampening_bundle_member_l3_only_mode');
  }
  public set dampeningBundleMemberL3OnlyMode(value: boolean | cdktf.IResolvable) {
    this._dampeningBundleMemberL3OnlyMode = value;
  }
  public resetDampeningBundleMemberL3OnlyMode() {
    this._dampeningBundleMemberL3OnlyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningBundleMemberL3OnlyModeInput() {
    return this._dampeningBundleMemberL3OnlyMode;
  }

  // dampening_bundle_member_maximum_wait - computed: false, optional: true, required: false
  private _dampeningBundleMemberMaximumWait?: number; 
  public get dampeningBundleMemberMaximumWait() {
    return this.getNumberAttribute('dampening_bundle_member_maximum_wait');
  }
  public set dampeningBundleMemberMaximumWait(value: number) {
    this._dampeningBundleMemberMaximumWait = value;
  }
  public resetDampeningBundleMemberMaximumWait() {
    this._dampeningBundleMemberMaximumWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningBundleMemberMaximumWaitInput() {
    return this._dampeningBundleMemberMaximumWait;
  }

  // dampening_bundle_member_secondary_wait - computed: false, optional: true, required: false
  private _dampeningBundleMemberSecondaryWait?: number; 
  public get dampeningBundleMemberSecondaryWait() {
    return this.getNumberAttribute('dampening_bundle_member_secondary_wait');
  }
  public set dampeningBundleMemberSecondaryWait(value: number) {
    this._dampeningBundleMemberSecondaryWait = value;
  }
  public resetDampeningBundleMemberSecondaryWait() {
    this._dampeningBundleMemberSecondaryWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningBundleMemberSecondaryWaitInput() {
    return this._dampeningBundleMemberSecondaryWait;
  }

  // dampening_disable - computed: false, optional: true, required: false
  private _dampeningDisable?: boolean | cdktf.IResolvable; 
  public get dampeningDisable() {
    return this.getBooleanAttribute('dampening_disable');
  }
  public set dampeningDisable(value: boolean | cdktf.IResolvable) {
    this._dampeningDisable = value;
  }
  public resetDampeningDisable() {
    this._dampeningDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningDisableInput() {
    return this._dampeningDisable;
  }

  // dampening_extensions_down_monitoring - computed: false, optional: true, required: false
  private _dampeningExtensionsDownMonitoring?: boolean | cdktf.IResolvable; 
  public get dampeningExtensionsDownMonitoring() {
    return this.getBooleanAttribute('dampening_extensions_down_monitoring');
  }
  public set dampeningExtensionsDownMonitoring(value: boolean | cdktf.IResolvable) {
    this._dampeningExtensionsDownMonitoring = value;
  }
  public resetDampeningExtensionsDownMonitoring() {
    this._dampeningExtensionsDownMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningExtensionsDownMonitoringInput() {
    return this._dampeningExtensionsDownMonitoring;
  }

  // dampening_initial_wait - computed: false, optional: true, required: false
  private _dampeningInitialWait?: number; 
  public get dampeningInitialWait() {
    return this.getNumberAttribute('dampening_initial_wait');
  }
  public set dampeningInitialWait(value: number) {
    this._dampeningInitialWait = value;
  }
  public resetDampeningInitialWait() {
    this._dampeningInitialWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningInitialWaitInput() {
    return this._dampeningInitialWait;
  }

  // dampening_maximum_wait - computed: false, optional: true, required: false
  private _dampeningMaximumWait?: number; 
  public get dampeningMaximumWait() {
    return this.getNumberAttribute('dampening_maximum_wait');
  }
  public set dampeningMaximumWait(value: number) {
    this._dampeningMaximumWait = value;
  }
  public resetDampeningMaximumWait() {
    this._dampeningMaximumWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningMaximumWaitInput() {
    return this._dampeningMaximumWait;
  }

  // dampening_secondary_wait - computed: false, optional: true, required: false
  private _dampeningSecondaryWait?: number; 
  public get dampeningSecondaryWait() {
    return this.getNumberAttribute('dampening_secondary_wait');
  }
  public set dampeningSecondaryWait(value: number) {
    this._dampeningSecondaryWait = value;
  }
  public resetDampeningSecondaryWait() {
    this._dampeningSecondaryWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningSecondaryWaitInput() {
    return this._dampeningSecondaryWait;
  }

  // dampening_threshold - computed: false, optional: true, required: false
  private _dampeningThreshold?: number; 
  public get dampeningThreshold() {
    return this.getNumberAttribute('dampening_threshold');
  }
  public set dampeningThreshold(value: number) {
    this._dampeningThreshold = value;
  }
  public resetDampeningThreshold() {
    this._dampeningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningThresholdInput() {
    return this._dampeningThreshold;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // echo_disable - computed: false, optional: true, required: false
  private _echoDisable?: boolean | cdktf.IResolvable; 
  public get echoDisable() {
    return this.getBooleanAttribute('echo_disable');
  }
  public set echoDisable(value: boolean | cdktf.IResolvable) {
    this._echoDisable = value;
  }
  public resetEchoDisable() {
    this._echoDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoDisableInput() {
    return this._echoDisable;
  }

  // echo_ipv4_bundle_per_member_minimum_interval - computed: false, optional: true, required: false
  private _echoIpv4BundlePerMemberMinimumInterval?: number; 
  public get echoIpv4BundlePerMemberMinimumInterval() {
    return this.getNumberAttribute('echo_ipv4_bundle_per_member_minimum_interval');
  }
  public set echoIpv4BundlePerMemberMinimumInterval(value: number) {
    this._echoIpv4BundlePerMemberMinimumInterval = value;
  }
  public resetEchoIpv4BundlePerMemberMinimumInterval() {
    this._echoIpv4BundlePerMemberMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoIpv4BundlePerMemberMinimumIntervalInput() {
    return this._echoIpv4BundlePerMemberMinimumInterval;
  }

  // echo_ipv4_source - computed: false, optional: true, required: false
  private _echoIpv4Source?: string; 
  public get echoIpv4Source() {
    return this.getStringAttribute('echo_ipv4_source');
  }
  public set echoIpv4Source(value: string) {
    this._echoIpv4Source = value;
  }
  public resetEchoIpv4Source() {
    this._echoIpv4Source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoIpv4SourceInput() {
    return this._echoIpv4Source;
  }

  // echo_latency_detect - computed: false, optional: true, required: false
  private _echoLatencyDetect?: boolean | cdktf.IResolvable; 
  public get echoLatencyDetect() {
    return this.getBooleanAttribute('echo_latency_detect');
  }
  public set echoLatencyDetect(value: boolean | cdktf.IResolvable) {
    this._echoLatencyDetect = value;
  }
  public resetEchoLatencyDetect() {
    this._echoLatencyDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoLatencyDetectInput() {
    return this._echoLatencyDetect;
  }

  // echo_latency_detect_count - computed: false, optional: true, required: false
  private _echoLatencyDetectCount?: number; 
  public get echoLatencyDetectCount() {
    return this.getNumberAttribute('echo_latency_detect_count');
  }
  public set echoLatencyDetectCount(value: number) {
    this._echoLatencyDetectCount = value;
  }
  public resetEchoLatencyDetectCount() {
    this._echoLatencyDetectCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoLatencyDetectCountInput() {
    return this._echoLatencyDetectCount;
  }

  // echo_latency_detect_percentage - computed: false, optional: true, required: false
  private _echoLatencyDetectPercentage?: number; 
  public get echoLatencyDetectPercentage() {
    return this.getNumberAttribute('echo_latency_detect_percentage');
  }
  public set echoLatencyDetectPercentage(value: number) {
    this._echoLatencyDetectPercentage = value;
  }
  public resetEchoLatencyDetectPercentage() {
    this._echoLatencyDetectPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoLatencyDetectPercentageInput() {
    return this._echoLatencyDetectPercentage;
  }

  // echo_startup_validate_force - computed: false, optional: true, required: false
  private _echoStartupValidateForce?: boolean | cdktf.IResolvable; 
  public get echoStartupValidateForce() {
    return this.getBooleanAttribute('echo_startup_validate_force');
  }
  public set echoStartupValidateForce(value: boolean | cdktf.IResolvable) {
    this._echoStartupValidateForce = value;
  }
  public resetEchoStartupValidateForce() {
    this._echoStartupValidateForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoStartupValidateForceInput() {
    return this._echoStartupValidateForce;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new BfdInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: BfdInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // ipv6_checksum_disable - computed: false, optional: true, required: false
  private _ipv6ChecksumDisable?: boolean | cdktf.IResolvable; 
  public get ipv6ChecksumDisable() {
    return this.getBooleanAttribute('ipv6_checksum_disable');
  }
  public set ipv6ChecksumDisable(value: boolean | cdktf.IResolvable) {
    this._ipv6ChecksumDisable = value;
  }
  public resetIpv6ChecksumDisable() {
    this._ipv6ChecksumDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ChecksumDisableInput() {
    return this._ipv6ChecksumDisable;
  }

  // multihop_ttl_drop_threshold - computed: false, optional: true, required: false
  private _multihopTtlDropThreshold?: number; 
  public get multihopTtlDropThreshold() {
    return this.getNumberAttribute('multihop_ttl_drop_threshold');
  }
  public set multihopTtlDropThreshold(value: number) {
    this._multihopTtlDropThreshold = value;
  }
  public resetMultihopTtlDropThreshold() {
    this._multihopTtlDropThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multihopTtlDropThresholdInput() {
    return this._multihopTtlDropThreshold;
  }

  // multipath_locations - computed: false, optional: true, required: false
  private _multipathLocations = new BfdMultipathLocationsList(this, "multipath_locations", false);
  public get multipathLocations() {
    return this._multipathLocations;
  }
  public putMultipathLocations(value: BfdMultipathLocations[] | cdktf.IResolvable) {
    this._multipathLocations.internalValue = value;
  }
  public resetMultipathLocations() {
    this._multipathLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathLocationsInput() {
    return this._multipathLocations.internalValue;
  }

  // trap_singlehop_pre_mapped - computed: false, optional: true, required: false
  private _trapSinglehopPreMapped?: boolean | cdktf.IResolvable; 
  public get trapSinglehopPreMapped() {
    return this.getBooleanAttribute('trap_singlehop_pre_mapped');
  }
  public set trapSinglehopPreMapped(value: boolean | cdktf.IResolvable) {
    this._trapSinglehopPreMapped = value;
  }
  public resetTrapSinglehopPreMapped() {
    this._trapSinglehopPreMapped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapSinglehopPreMappedInput() {
    return this._trapSinglehopPreMapped;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle_coexistence_bob_blb: cdktf.stringToTerraform(this._bundleCoexistenceBobBlb),
      dampening_bundle_member_initial_wait: cdktf.numberToTerraform(this._dampeningBundleMemberInitialWait),
      dampening_bundle_member_l3_only_mode: cdktf.booleanToTerraform(this._dampeningBundleMemberL3OnlyMode),
      dampening_bundle_member_maximum_wait: cdktf.numberToTerraform(this._dampeningBundleMemberMaximumWait),
      dampening_bundle_member_secondary_wait: cdktf.numberToTerraform(this._dampeningBundleMemberSecondaryWait),
      dampening_disable: cdktf.booleanToTerraform(this._dampeningDisable),
      dampening_extensions_down_monitoring: cdktf.booleanToTerraform(this._dampeningExtensionsDownMonitoring),
      dampening_initial_wait: cdktf.numberToTerraform(this._dampeningInitialWait),
      dampening_maximum_wait: cdktf.numberToTerraform(this._dampeningMaximumWait),
      dampening_secondary_wait: cdktf.numberToTerraform(this._dampeningSecondaryWait),
      dampening_threshold: cdktf.numberToTerraform(this._dampeningThreshold),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      echo_disable: cdktf.booleanToTerraform(this._echoDisable),
      echo_ipv4_bundle_per_member_minimum_interval: cdktf.numberToTerraform(this._echoIpv4BundlePerMemberMinimumInterval),
      echo_ipv4_source: cdktf.stringToTerraform(this._echoIpv4Source),
      echo_latency_detect: cdktf.booleanToTerraform(this._echoLatencyDetect),
      echo_latency_detect_count: cdktf.numberToTerraform(this._echoLatencyDetectCount),
      echo_latency_detect_percentage: cdktf.numberToTerraform(this._echoLatencyDetectPercentage),
      echo_startup_validate_force: cdktf.booleanToTerraform(this._echoStartupValidateForce),
      interfaces: cdktf.listMapper(bfdInterfacesToTerraform, false)(this._interfaces.internalValue),
      ipv6_checksum_disable: cdktf.booleanToTerraform(this._ipv6ChecksumDisable),
      multihop_ttl_drop_threshold: cdktf.numberToTerraform(this._multihopTtlDropThreshold),
      multipath_locations: cdktf.listMapper(bfdMultipathLocationsToTerraform, false)(this._multipathLocations.internalValue),
      trap_singlehop_pre_mapped: cdktf.booleanToTerraform(this._trapSinglehopPreMapped),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle_coexistence_bob_blb: {
        value: cdktf.stringToHclTerraform(this._bundleCoexistenceBobBlb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dampening_bundle_member_initial_wait: {
        value: cdktf.numberToHclTerraform(this._dampeningBundleMemberInitialWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dampening_bundle_member_l3_only_mode: {
        value: cdktf.booleanToHclTerraform(this._dampeningBundleMemberL3OnlyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dampening_bundle_member_maximum_wait: {
        value: cdktf.numberToHclTerraform(this._dampeningBundleMemberMaximumWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dampening_bundle_member_secondary_wait: {
        value: cdktf.numberToHclTerraform(this._dampeningBundleMemberSecondaryWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dampening_disable: {
        value: cdktf.booleanToHclTerraform(this._dampeningDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dampening_extensions_down_monitoring: {
        value: cdktf.booleanToHclTerraform(this._dampeningExtensionsDownMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dampening_initial_wait: {
        value: cdktf.numberToHclTerraform(this._dampeningInitialWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dampening_maximum_wait: {
        value: cdktf.numberToHclTerraform(this._dampeningMaximumWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dampening_secondary_wait: {
        value: cdktf.numberToHclTerraform(this._dampeningSecondaryWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dampening_threshold: {
        value: cdktf.numberToHclTerraform(this._dampeningThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      echo_disable: {
        value: cdktf.booleanToHclTerraform(this._echoDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      echo_ipv4_bundle_per_member_minimum_interval: {
        value: cdktf.numberToHclTerraform(this._echoIpv4BundlePerMemberMinimumInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      echo_ipv4_source: {
        value: cdktf.stringToHclTerraform(this._echoIpv4Source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      echo_latency_detect: {
        value: cdktf.booleanToHclTerraform(this._echoLatencyDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      echo_latency_detect_count: {
        value: cdktf.numberToHclTerraform(this._echoLatencyDetectCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      echo_latency_detect_percentage: {
        value: cdktf.numberToHclTerraform(this._echoLatencyDetectPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      echo_startup_validate_force: {
        value: cdktf.booleanToHclTerraform(this._echoStartupValidateForce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interfaces: {
        value: cdktf.listMapperHcl(bfdInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BfdInterfacesList",
      },
      ipv6_checksum_disable: {
        value: cdktf.booleanToHclTerraform(this._ipv6ChecksumDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multihop_ttl_drop_threshold: {
        value: cdktf.numberToHclTerraform(this._multihopTtlDropThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multipath_locations: {
        value: cdktf.listMapperHcl(bfdMultipathLocationsToHclTerraform, false)(this._multipathLocations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BfdMultipathLocationsList",
      },
      trap_singlehop_pre_mapped: {
        value: cdktf.booleanToHclTerraform(this._trapSinglehopPreMapped),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
