// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpamIpSpaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#asm_config IpamIpSpace#asm_config}
  */
  readonly asmConfig?: IpamIpSpaceAsmConfig;
  /**
  * The description for the IP space. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#comment IpamIpSpace#comment}
  */
  readonly comment?: string;
  /**
  * The compartment associated with the object. If no compartment is associated with the object, the value defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#compartment_id IpamIpSpace#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Controls who does the DDNS updates. Valid values are:
  *   * _client_: DHCP server updates DNS if requested by client.
  *   * _server_: DHCP server always updates DNS, overriding an update request from the client, unless the client requests no updates.
  *   * _ignore_: DHCP server always updates DNS, even if the client says not to.
  *   * _over_client_update_: Same as _server_. DHCP server always updates DNS, overriding an update request from the client, unless the client requests no updates.
  *   * _over_no_update_: DHCP server updates DNS even if the client requests that no updates be done. If the client requests to do the update, DHCP server allows it.
  *   Defaults to _client_.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_client_update IpamIpSpace#ddns_client_update}
  */
  readonly ddnsClientUpdate?: string;
  /**
  * The mode used for resolving conflicts while performing DDNS updates. Valid values are:
  * 
  *   * _check_with_dhcid_: It includes adding a DHCID record and checking that record via conflict detection as per RFC 4703.
  *   * _no_check_with_dhcid_: This will ignore conflict detection but add a DHCID record when creating/updating an entry.
  *   * _check_exists_with_dhcid_: This will check if there is an existing DHCID record but does not verify the value of the record matches the update. This will also update the DHCID record for the entry.
  *   * _no_check_without_dhcid_: This ignores conflict detection and will not add a DHCID record when creating/updating a DDNS entry.
  *   Defaults to _check_with_dhcid_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_conflict_resolution_mode IpamIpSpace#ddns_conflict_resolution_mode}
  */
  readonly ddnsConflictResolutionMode?: string;
  /**
  * The domain suffix for DDNS updates. FQDN, may be empty.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_domain IpamIpSpace#ddns_domain}
  */
  readonly ddnsDomain?: string;
  /**
  * Indicates if DDNS needs to generate a hostname when not supplied by the client.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_generate_name IpamIpSpace#ddns_generate_name}
  */
  readonly ddnsGenerateName?: boolean | cdktf.IResolvable;
  /**
  * The prefix used in the generation of an FQDN.  When generating a name, DHCP server will construct the name in the format: [ddns-generated-prefix]-[address-text].[ddns-qualifying-suffix]. where address-text is simply the lease IP address converted to a hyphenated string.  Defaults to \"myhost\".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_generated_prefix IpamIpSpace#ddns_generated_prefix}
  */
  readonly ddnsGeneratedPrefix?: string;
  /**
  * Determines if DDNS updates are enabled at the IP space level. Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_send_updates IpamIpSpace#ddns_send_updates}
  */
  readonly ddnsSendUpdates?: boolean | cdktf.IResolvable;
  /**
  * DDNS TTL value - to be calculated as a simple percentage of the lease's lifetime, using the parameter's value as the percentage. It is specified as a percentage (e.g. 25, 75). Defaults to unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_ttl_percent IpamIpSpace#ddns_ttl_percent}
  */
  readonly ddnsTtlPercent?: number;
  /**
  * Instructs the DHCP server to always update the DNS information when a lease is renewed even if its DNS information has not changed.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_update_on_renew IpamIpSpace#ddns_update_on_renew}
  */
  readonly ddnsUpdateOnRenew?: boolean | cdktf.IResolvable;
  /**
  * When true, DHCP server will apply conflict resolution, as described in RFC 4703, when attempting to fulfill the update request.  When false, DHCP server will simply attempt to update the DNS entries per the request, regardless of whether or not they conflict with existing entries owned by other DHCP4 clients.  Defaults to _true_. Can be set to true only when ddns_conflict_resolution_mode is check_with_dhcid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_use_conflict_resolution IpamIpSpace#ddns_use_conflict_resolution}
  */
  readonly ddnsUseConflictResolution?: boolean | cdktf.IResolvable;
  /**
  * Reserved for future use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#default_realms IpamIpSpace#default_realms}
  */
  readonly defaultRealms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#dhcp_config IpamIpSpace#dhcp_config}
  */
  readonly dhcpConfig?: IpamIpSpaceDhcpConfig;
  /**
  * The list of IPv4 DHCP options for IP space. May be either a specific option or a group of options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#dhcp_options IpamIpSpace#dhcp_options}
  */
  readonly dhcpOptions?: IpamIpSpaceDhcpOptions[] | cdktf.IResolvable;
  /**
  * The list of IPv6 DHCP options for IP space. May be either a specific option or a group of options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#dhcp_options_v6 IpamIpSpace#dhcp_options_v6}
  */
  readonly dhcpOptionsV6?: IpamIpSpaceDhcpOptionsV6[] | cdktf.IResolvable;
  /**
  * The configuration for header option filename field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#header_option_filename IpamIpSpace#header_option_filename}
  */
  readonly headerOptionFilename?: string;
  /**
  * The configuration for header option server address field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#header_option_server_address IpamIpSpace#header_option_server_address}
  */
  readonly headerOptionServerAddress?: string;
  /**
  * The configuration for header option server name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#header_option_server_name IpamIpSpace#header_option_server_name}
  */
  readonly headerOptionServerName?: string;
  /**
  * The character to replace non-matching characters with, when hostname rewrite is enabled.  Any single ASCII character or no character if the invalid characters should be removed without replacement.  Defaults to \"-\".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#hostname_rewrite_char IpamIpSpace#hostname_rewrite_char}
  */
  readonly hostnameRewriteChar?: string;
  /**
  * Indicates if client supplied hostnames will be rewritten prior to DDNS update by replacing every character that does not match _hostname_rewrite_regex_ by _hostname_rewrite_char_.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#hostname_rewrite_enabled IpamIpSpace#hostname_rewrite_enabled}
  */
  readonly hostnameRewriteEnabled?: boolean | cdktf.IResolvable;
  /**
  * The regex bracket expression to match valid characters.  Must begin with \"[\" and end with \"]\" and be a compilable POSIX regex.  Defaults to \"[^a-zA-Z0-9_.]\".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#hostname_rewrite_regex IpamIpSpace#hostname_rewrite_regex}
  */
  readonly hostnameRewriteRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#inheritance_sources IpamIpSpace#inheritance_sources}
  */
  readonly inheritanceSources?: IpamIpSpaceInheritanceSources;
  /**
  * The name of the IP space. Must contain 1 to 256 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#name IpamIpSpace#name}
  */
  readonly name: string;
  /**
  * The tags for the IP space in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#tags IpamIpSpace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#vendor_specific_option_option_space IpamIpSpace#vendor_specific_option_option_space}
  */
  readonly vendorSpecificOptionOptionSpace?: string;
}
export interface IpamIpSpaceAsmConfig {
  /**
  * ASM shows the number of addresses forecast to be used _forecast_period_ days in the future, if it is greater than _asm_threshold_ percent * _dhcp_total_ (see _dhcp_utilization_) then the subnet is flagged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#asm_threshold IpamIpSpace#asm_threshold}
  */
  readonly asmThreshold?: number;
  /**
  * Indicates if Automated Scope Management is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#enable IpamIpSpace#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Indicates if ASM should send notifications to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#enable_notification IpamIpSpace#enable_notification}
  */
  readonly enableNotification?: boolean | cdktf.IResolvable;
  /**
  * The forecast period in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#forecast_period IpamIpSpace#forecast_period}
  */
  readonly forecastPeriod?: number;
  /**
  * Indicates the growth in the number or percentage of IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#growth_factor IpamIpSpace#growth_factor}
  */
  readonly growthFactor?: number;
  /**
  * The type of factor to use: _percent_ or _count_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#growth_type IpamIpSpace#growth_type}
  */
  readonly growthType?: string;
  /**
  * The minimum amount of history needed before ASM can run on this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#history IpamIpSpace#history}
  */
  readonly history?: number;
  /**
  * The minimum size of range needed for ASM to run on this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#min_total IpamIpSpace#min_total}
  */
  readonly minTotal?: number;
  /**
  * The minimum percentage of addresses that must be available outside of the DHCP ranges and fixed addresses when making a suggested change..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#min_unused IpamIpSpace#min_unused}
  */
  readonly minUnused?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#reenable_date IpamIpSpace#reenable_date}
  */
  readonly reenableDate?: string;
}

export function ipamIpSpaceAsmConfigToTerraform(struct?: IpamIpSpaceAsmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asm_threshold: cdktf.numberToTerraform(struct!.asmThreshold),
    enable: cdktf.booleanToTerraform(struct!.enable),
    enable_notification: cdktf.booleanToTerraform(struct!.enableNotification),
    forecast_period: cdktf.numberToTerraform(struct!.forecastPeriod),
    growth_factor: cdktf.numberToTerraform(struct!.growthFactor),
    growth_type: cdktf.stringToTerraform(struct!.growthType),
    history: cdktf.numberToTerraform(struct!.history),
    min_total: cdktf.numberToTerraform(struct!.minTotal),
    min_unused: cdktf.numberToTerraform(struct!.minUnused),
    reenable_date: cdktf.stringToTerraform(struct!.reenableDate),
  }
}


export function ipamIpSpaceAsmConfigToHclTerraform(struct?: IpamIpSpaceAsmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asm_threshold: {
      value: cdktf.numberToHclTerraform(struct!.asmThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_notification: {
      value: cdktf.booleanToHclTerraform(struct!.enableNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forecast_period: {
      value: cdktf.numberToHclTerraform(struct!.forecastPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    growth_factor: {
      value: cdktf.numberToHclTerraform(struct!.growthFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    growth_type: {
      value: cdktf.stringToHclTerraform(struct!.growthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    history: {
      value: cdktf.numberToHclTerraform(struct!.history),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_total: {
      value: cdktf.numberToHclTerraform(struct!.minTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_unused: {
      value: cdktf.numberToHclTerraform(struct!.minUnused),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reenable_date: {
      value: cdktf.stringToHclTerraform(struct!.reenableDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceAsmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceAsmConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asmThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmThreshold = this._asmThreshold;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._enableNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNotification = this._enableNotification;
    }
    if (this._forecastPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.forecastPeriod = this._forecastPeriod;
    }
    if (this._growthFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.growthFactor = this._growthFactor;
    }
    if (this._growthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.growthType = this._growthType;
    }
    if (this._history !== undefined) {
      hasAnyValues = true;
      internalValueResult.history = this._history;
    }
    if (this._minTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTotal = this._minTotal;
    }
    if (this._minUnused !== undefined) {
      hasAnyValues = true;
      internalValueResult.minUnused = this._minUnused;
    }
    if (this._reenableDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.reenableDate = this._reenableDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceAsmConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asmThreshold = undefined;
      this._enable = undefined;
      this._enableNotification = undefined;
      this._forecastPeriod = undefined;
      this._growthFactor = undefined;
      this._growthType = undefined;
      this._history = undefined;
      this._minTotal = undefined;
      this._minUnused = undefined;
      this._reenableDate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asmThreshold = value.asmThreshold;
      this._enable = value.enable;
      this._enableNotification = value.enableNotification;
      this._forecastPeriod = value.forecastPeriod;
      this._growthFactor = value.growthFactor;
      this._growthType = value.growthType;
      this._history = value.history;
      this._minTotal = value.minTotal;
      this._minUnused = value.minUnused;
      this._reenableDate = value.reenableDate;
    }
  }

  // asm_threshold - computed: true, optional: true, required: false
  private _asmThreshold?: number; 
  public get asmThreshold() {
    return this.getNumberAttribute('asm_threshold');
  }
  public set asmThreshold(value: number) {
    this._asmThreshold = value;
  }
  public resetAsmThreshold() {
    this._asmThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmThresholdInput() {
    return this._asmThreshold;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_notification - computed: true, optional: true, required: false
  private _enableNotification?: boolean | cdktf.IResolvable; 
  public get enableNotification() {
    return this.getBooleanAttribute('enable_notification');
  }
  public set enableNotification(value: boolean | cdktf.IResolvable) {
    this._enableNotification = value;
  }
  public resetEnableNotification() {
    this._enableNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNotificationInput() {
    return this._enableNotification;
  }

  // forecast_period - computed: true, optional: true, required: false
  private _forecastPeriod?: number; 
  public get forecastPeriod() {
    return this.getNumberAttribute('forecast_period');
  }
  public set forecastPeriod(value: number) {
    this._forecastPeriod = value;
  }
  public resetForecastPeriod() {
    this._forecastPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastPeriodInput() {
    return this._forecastPeriod;
  }

  // growth_factor - computed: true, optional: true, required: false
  private _growthFactor?: number; 
  public get growthFactor() {
    return this.getNumberAttribute('growth_factor');
  }
  public set growthFactor(value: number) {
    this._growthFactor = value;
  }
  public resetGrowthFactor() {
    this._growthFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get growthFactorInput() {
    return this._growthFactor;
  }

  // growth_type - computed: true, optional: true, required: false
  private _growthType?: string; 
  public get growthType() {
    return this.getStringAttribute('growth_type');
  }
  public set growthType(value: string) {
    this._growthType = value;
  }
  public resetGrowthType() {
    this._growthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get growthTypeInput() {
    return this._growthType;
  }

  // history - computed: true, optional: true, required: false
  private _history?: number; 
  public get history() {
    return this.getNumberAttribute('history');
  }
  public set history(value: number) {
    this._history = value;
  }
  public resetHistory() {
    this._history = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history;
  }

  // min_total - computed: true, optional: true, required: false
  private _minTotal?: number; 
  public get minTotal() {
    return this.getNumberAttribute('min_total');
  }
  public set minTotal(value: number) {
    this._minTotal = value;
  }
  public resetMinTotal() {
    this._minTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTotalInput() {
    return this._minTotal;
  }

  // min_unused - computed: true, optional: true, required: false
  private _minUnused?: number; 
  public get minUnused() {
    return this.getNumberAttribute('min_unused');
  }
  public set minUnused(value: number) {
    this._minUnused = value;
  }
  public resetMinUnused() {
    this._minUnused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUnusedInput() {
    return this._minUnused;
  }

  // reenable_date - computed: true, optional: true, required: false
  private _reenableDate?: string; 
  public get reenableDate() {
    return this.getStringAttribute('reenable_date');
  }
  public set reenableDate(value: string) {
    this._reenableDate = value;
  }
  public resetReenableDate() {
    this._reenableDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reenableDateInput() {
    return this._reenableDate;
  }
}
export interface IpamIpSpaceDhcpConfigIgnoreListStruct {
  /**
  * Type of ignore matching: client to ignore by client identifier (client hex or client text) or hardware to ignore by hardware identifier (MAC address). It can have one of the following values:
  *   * _client_hex_
  *   * _client_text_
  *   * _hardware_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#type IpamIpSpace#type}
  */
  readonly type: string;
  /**
  * Value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#value IpamIpSpace#value}
  */
  readonly value: string;
}

export function ipamIpSpaceDhcpConfigIgnoreListStructToTerraform(struct?: IpamIpSpaceDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ipamIpSpaceDhcpConfigIgnoreListStructToHclTerraform(struct?: IpamIpSpaceDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceDhcpConfigIgnoreListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamIpSpaceDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IpamIpSpaceDhcpConfigIgnoreListStructList extends cdktf.ComplexList {
  public internalValue? : IpamIpSpaceDhcpConfigIgnoreListStruct[] | cdktf.IResolvable

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
  public get(index: number): IpamIpSpaceDhcpConfigIgnoreListStructOutputReference {
    return new IpamIpSpaceDhcpConfigIgnoreListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamIpSpaceDhcpConfig {
  /**
  * The abandoned reclaim time in seconds for IPV4 clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#abandoned_reclaim_time IpamIpSpace#abandoned_reclaim_time}
  */
  readonly abandonedReclaimTime?: number;
  /**
  * The abandoned reclaim time in seconds for IPV6 clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#abandoned_reclaim_time_v6 IpamIpSpace#abandoned_reclaim_time_v6}
  */
  readonly abandonedReclaimTimeV6?: number;
  /**
  * Disable to allow leases only for known IPv4 clients, those for which a fixed address is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#allow_unknown IpamIpSpace#allow_unknown}
  */
  readonly allowUnknown?: boolean | cdktf.IResolvable;
  /**
  * Disable to allow leases only for known IPV6 clients, those for which a fixed address is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#allow_unknown_v6 IpamIpSpace#allow_unknown_v6}
  */
  readonly allowUnknownV6?: boolean | cdktf.IResolvable;
  /**
  * Enable/disable to include/exclude the client id when responding to discover or request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#echo_client_id IpamIpSpace#echo_client_id}
  */
  readonly echoClientId?: boolean | cdktf.IResolvable;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#filters IpamIpSpace#filters}
  */
  readonly filters?: string[];
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#filters_large_selection IpamIpSpace#filters_large_selection}
  */
  readonly filtersLargeSelection?: string[];
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#filters_v6 IpamIpSpace#filters_v6}
  */
  readonly filtersV6?: string[];
  /**
  * Enable to ignore the client UID when issuing a DHCP lease. Use this option to prevent assigning two IP addresses for a client which does not have a UID during one phase of PXE boot but acquires one for the other phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ignore_client_uid IpamIpSpace#ignore_client_uid}
  */
  readonly ignoreClientUid?: boolean | cdktf.IResolvable;
  /**
  * The list of clients to ignore requests from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ignore_list IpamIpSpace#ignore_list}
  */
  readonly ignoreList?: IpamIpSpaceDhcpConfigIgnoreListStruct[] | cdktf.IResolvable;
  /**
  * The lease duration in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#lease_time IpamIpSpace#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * The lease duration in seconds for IPV6 clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#lease_time_v6 IpamIpSpace#lease_time_v6}
  */
  readonly leaseTimeV6?: number;
}

export function ipamIpSpaceDhcpConfigToTerraform(struct?: IpamIpSpaceDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abandoned_reclaim_time: cdktf.numberToTerraform(struct!.abandonedReclaimTime),
    abandoned_reclaim_time_v6: cdktf.numberToTerraform(struct!.abandonedReclaimTimeV6),
    allow_unknown: cdktf.booleanToTerraform(struct!.allowUnknown),
    allow_unknown_v6: cdktf.booleanToTerraform(struct!.allowUnknownV6),
    echo_client_id: cdktf.booleanToTerraform(struct!.echoClientId),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    filters_large_selection: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filtersLargeSelection),
    filters_v6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filtersV6),
    ignore_client_uid: cdktf.booleanToTerraform(struct!.ignoreClientUid),
    ignore_list: cdktf.listMapper(ipamIpSpaceDhcpConfigIgnoreListStructToTerraform, false)(struct!.ignoreList),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    lease_time_v6: cdktf.numberToTerraform(struct!.leaseTimeV6),
  }
}


export function ipamIpSpaceDhcpConfigToHclTerraform(struct?: IpamIpSpaceDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abandoned_reclaim_time: {
      value: cdktf.numberToHclTerraform(struct!.abandonedReclaimTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    abandoned_reclaim_time_v6: {
      value: cdktf.numberToHclTerraform(struct!.abandonedReclaimTimeV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_unknown: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_unknown_v6: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnknownV6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    echo_client_id: {
      value: cdktf.booleanToHclTerraform(struct!.echoClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filters_large_selection: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filtersLargeSelection),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filters_v6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filtersV6),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore_client_uid: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreClientUid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_list: {
      value: cdktf.listMapperHcl(ipamIpSpaceDhcpConfigIgnoreListStructToHclTerraform, false)(struct!.ignoreList),
      isBlock: true,
      type: "list",
      storageClassType: "IpamIpSpaceDhcpConfigIgnoreListStructList",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lease_time_v6: {
      value: cdktf.numberToHclTerraform(struct!.leaseTimeV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceDhcpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abandonedReclaimTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandonedReclaimTime = this._abandonedReclaimTime;
    }
    if (this._abandonedReclaimTimeV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandonedReclaimTimeV6 = this._abandonedReclaimTimeV6;
    }
    if (this._allowUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknown = this._allowUnknown;
    }
    if (this._allowUnknownV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknownV6 = this._allowUnknownV6;
    }
    if (this._echoClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.echoClientId = this._echoClientId;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._filtersLargeSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersLargeSelection = this._filtersLargeSelection;
    }
    if (this._filtersV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersV6 = this._filtersV6;
    }
    if (this._ignoreClientUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreClientUid = this._ignoreClientUid;
    }
    if (this._ignoreList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreList = this._ignoreList?.internalValue;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._leaseTimeV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTimeV6 = this._leaseTimeV6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceDhcpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abandonedReclaimTime = undefined;
      this._abandonedReclaimTimeV6 = undefined;
      this._allowUnknown = undefined;
      this._allowUnknownV6 = undefined;
      this._echoClientId = undefined;
      this._filters = undefined;
      this._filtersLargeSelection = undefined;
      this._filtersV6 = undefined;
      this._ignoreClientUid = undefined;
      this._ignoreList.internalValue = undefined;
      this._leaseTime = undefined;
      this._leaseTimeV6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abandonedReclaimTime = value.abandonedReclaimTime;
      this._abandonedReclaimTimeV6 = value.abandonedReclaimTimeV6;
      this._allowUnknown = value.allowUnknown;
      this._allowUnknownV6 = value.allowUnknownV6;
      this._echoClientId = value.echoClientId;
      this._filters = value.filters;
      this._filtersLargeSelection = value.filtersLargeSelection;
      this._filtersV6 = value.filtersV6;
      this._ignoreClientUid = value.ignoreClientUid;
      this._ignoreList.internalValue = value.ignoreList;
      this._leaseTime = value.leaseTime;
      this._leaseTimeV6 = value.leaseTimeV6;
    }
  }

  // abandoned_reclaim_time - computed: true, optional: true, required: false
  private _abandonedReclaimTime?: number; 
  public get abandonedReclaimTime() {
    return this.getNumberAttribute('abandoned_reclaim_time');
  }
  public set abandonedReclaimTime(value: number) {
    this._abandonedReclaimTime = value;
  }
  public resetAbandonedReclaimTime() {
    this._abandonedReclaimTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedReclaimTimeInput() {
    return this._abandonedReclaimTime;
  }

  // abandoned_reclaim_time_v6 - computed: true, optional: true, required: false
  private _abandonedReclaimTimeV6?: number; 
  public get abandonedReclaimTimeV6() {
    return this.getNumberAttribute('abandoned_reclaim_time_v6');
  }
  public set abandonedReclaimTimeV6(value: number) {
    this._abandonedReclaimTimeV6 = value;
  }
  public resetAbandonedReclaimTimeV6() {
    this._abandonedReclaimTimeV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedReclaimTimeV6Input() {
    return this._abandonedReclaimTimeV6;
  }

  // allow_unknown - computed: true, optional: true, required: false
  private _allowUnknown?: boolean | cdktf.IResolvable; 
  public get allowUnknown() {
    return this.getBooleanAttribute('allow_unknown');
  }
  public set allowUnknown(value: boolean | cdktf.IResolvable) {
    this._allowUnknown = value;
  }
  public resetAllowUnknown() {
    this._allowUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownInput() {
    return this._allowUnknown;
  }

  // allow_unknown_v6 - computed: true, optional: true, required: false
  private _allowUnknownV6?: boolean | cdktf.IResolvable; 
  public get allowUnknownV6() {
    return this.getBooleanAttribute('allow_unknown_v6');
  }
  public set allowUnknownV6(value: boolean | cdktf.IResolvable) {
    this._allowUnknownV6 = value;
  }
  public resetAllowUnknownV6() {
    this._allowUnknownV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownV6Input() {
    return this._allowUnknownV6;
  }

  // echo_client_id - computed: true, optional: true, required: false
  private _echoClientId?: boolean | cdktf.IResolvable; 
  public get echoClientId() {
    return this.getBooleanAttribute('echo_client_id');
  }
  public set echoClientId(value: boolean | cdktf.IResolvable) {
    this._echoClientId = value;
  }
  public resetEchoClientId() {
    this._echoClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoClientIdInput() {
    return this._echoClientId;
  }

  // filters - computed: true, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return this.getListAttribute('filters');
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // filters_large_selection - computed: true, optional: true, required: false
  private _filtersLargeSelection?: string[]; 
  public get filtersLargeSelection() {
    return this.getListAttribute('filters_large_selection');
  }
  public set filtersLargeSelection(value: string[]) {
    this._filtersLargeSelection = value;
  }
  public resetFiltersLargeSelection() {
    this._filtersLargeSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersLargeSelectionInput() {
    return this._filtersLargeSelection;
  }

  // filters_v6 - computed: true, optional: true, required: false
  private _filtersV6?: string[]; 
  public get filtersV6() {
    return this.getListAttribute('filters_v6');
  }
  public set filtersV6(value: string[]) {
    this._filtersV6 = value;
  }
  public resetFiltersV6() {
    this._filtersV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersV6Input() {
    return this._filtersV6;
  }

  // ignore_client_uid - computed: true, optional: true, required: false
  private _ignoreClientUid?: boolean | cdktf.IResolvable; 
  public get ignoreClientUid() {
    return this.getBooleanAttribute('ignore_client_uid');
  }
  public set ignoreClientUid(value: boolean | cdktf.IResolvable) {
    this._ignoreClientUid = value;
  }
  public resetIgnoreClientUid() {
    this._ignoreClientUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreClientUidInput() {
    return this._ignoreClientUid;
  }

  // ignore_list - computed: true, optional: true, required: false
  private _ignoreList = new IpamIpSpaceDhcpConfigIgnoreListStructList(this, "ignore_list", false);
  public get ignoreList() {
    return this._ignoreList;
  }
  public putIgnoreList(value: IpamIpSpaceDhcpConfigIgnoreListStruct[] | cdktf.IResolvable) {
    this._ignoreList.internalValue = value;
  }
  public resetIgnoreList() {
    this._ignoreList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreListInput() {
    return this._ignoreList.internalValue;
  }

  // lease_time - computed: true, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // lease_time_v6 - computed: true, optional: true, required: false
  private _leaseTimeV6?: number; 
  public get leaseTimeV6() {
    return this.getNumberAttribute('lease_time_v6');
  }
  public set leaseTimeV6(value: number) {
    this._leaseTimeV6 = value;
  }
  public resetLeaseTimeV6() {
    this._leaseTimeV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeV6Input() {
    return this._leaseTimeV6;
  }
}
export interface IpamIpSpaceDhcpOptions {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#group IpamIpSpace#group}
  */
  readonly group?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#option_code IpamIpSpace#option_code}
  */
  readonly optionCode?: string;
  /**
  * The option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#option_value IpamIpSpace#option_value}
  */
  readonly optionValue?: string;
  /**
  * The type of item. Valid values are:
  *   * _group_
  *   * _option_
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#type IpamIpSpace#type}
  */
  readonly type?: string;
}

export function ipamIpSpaceDhcpOptionsToTerraform(struct?: IpamIpSpaceDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    option_code: cdktf.stringToTerraform(struct!.optionCode),
    option_value: cdktf.stringToTerraform(struct!.optionValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipamIpSpaceDhcpOptionsToHclTerraform(struct?: IpamIpSpaceDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_code: {
      value: cdktf.stringToHclTerraform(struct!.optionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_value: {
      value: cdktf.stringToHclTerraform(struct!.optionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceDhcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamIpSpaceDhcpOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._optionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionCode = this._optionCode;
    }
    if (this._optionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionValue = this._optionValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceDhcpOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._optionCode = undefined;
      this._optionValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._optionCode = value.optionCode;
      this._optionValue = value.optionValue;
      this._type = value.type;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // option_code - computed: false, optional: true, required: false
  private _optionCode?: string; 
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }
  public set optionCode(value: string) {
    this._optionCode = value;
  }
  public resetOptionCode() {
    this._optionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionCodeInput() {
    return this._optionCode;
  }

  // option_value - computed: true, optional: true, required: false
  private _optionValue?: string; 
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }
  public set optionValue(value: string) {
    this._optionValue = value;
  }
  public resetOptionValue() {
    this._optionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValueInput() {
    return this._optionValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class IpamIpSpaceDhcpOptionsList extends cdktf.ComplexList {
  public internalValue? : IpamIpSpaceDhcpOptions[] | cdktf.IResolvable

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
  public get(index: number): IpamIpSpaceDhcpOptionsOutputReference {
    return new IpamIpSpaceDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamIpSpaceDhcpOptionsV6 {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#group IpamIpSpace#group}
  */
  readonly group?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#option_code IpamIpSpace#option_code}
  */
  readonly optionCode?: string;
  /**
  * The option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#option_value IpamIpSpace#option_value}
  */
  readonly optionValue?: string;
  /**
  * The type of item. Valid values are:
  *   * _group_
  *   * _option_
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#type IpamIpSpace#type}
  */
  readonly type?: string;
}

export function ipamIpSpaceDhcpOptionsV6ToTerraform(struct?: IpamIpSpaceDhcpOptionsV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    option_code: cdktf.stringToTerraform(struct!.optionCode),
    option_value: cdktf.stringToTerraform(struct!.optionValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipamIpSpaceDhcpOptionsV6ToHclTerraform(struct?: IpamIpSpaceDhcpOptionsV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_code: {
      value: cdktf.stringToHclTerraform(struct!.optionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_value: {
      value: cdktf.stringToHclTerraform(struct!.optionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceDhcpOptionsV6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamIpSpaceDhcpOptionsV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._optionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionCode = this._optionCode;
    }
    if (this._optionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionValue = this._optionValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceDhcpOptionsV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._optionCode = undefined;
      this._optionValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._optionCode = value.optionCode;
      this._optionValue = value.optionValue;
      this._type = value.type;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // option_code - computed: false, optional: true, required: false
  private _optionCode?: string; 
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }
  public set optionCode(value: string) {
    this._optionCode = value;
  }
  public resetOptionCode() {
    this._optionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionCodeInput() {
    return this._optionCode;
  }

  // option_value - computed: true, optional: true, required: false
  private _optionValue?: string; 
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }
  public set optionValue(value: string) {
    this._optionValue = value;
  }
  public resetOptionValue() {
    this._optionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValueInput() {
    return this._optionValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class IpamIpSpaceDhcpOptionsV6List extends cdktf.ComplexList {
  public internalValue? : IpamIpSpaceDhcpOptionsV6[] | cdktf.IResolvable

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
  public get(index: number): IpamIpSpaceDhcpOptionsV6OutputReference {
    return new IpamIpSpaceDhcpOptionsV6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlockValue {
}

export function ipamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlockValueToTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlockValueToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // enable_notification - computed: true, optional: false, required: false
  public get enableNotification() {
    return this.getBooleanAttribute('enable_notification');
  }

  // reenable_date - computed: true, optional: false, required: false
  public get reenableDate() {
    return this.getStringAttribute('reenable_date');
  }
}
export interface IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlockToTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlockToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlockValue {
}

export function ipamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlockValueToTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlockValueToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // growth_factor - computed: true, optional: false, required: false
  public get growthFactor() {
    return this.getNumberAttribute('growth_factor');
  }

  // growth_type - computed: true, optional: false, required: false
  public get growthType() {
    return this.getStringAttribute('growth_type');
  }
}
export interface IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlockToTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlockToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface IpamIpSpaceInheritanceSourcesAsmConfigAsmThreshold {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesAsmConfigAsmThresholdToTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigAsmThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesAsmConfigAsmThresholdToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigAsmThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesAsmConfigAsmThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesAsmConfigAsmThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesAsmConfigAsmThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesAsmConfigForecastPeriod {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesAsmConfigForecastPeriodToTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigForecastPeriod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesAsmConfigForecastPeriodToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigForecastPeriod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesAsmConfigForecastPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesAsmConfigForecastPeriod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesAsmConfigForecastPeriod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesAsmConfigHistory {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesAsmConfigHistoryToTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigHistory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesAsmConfigHistoryToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigHistory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesAsmConfigHistoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesAsmConfigHistory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesAsmConfigHistory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesAsmConfigMinTotal {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesAsmConfigMinTotalToTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigMinTotal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesAsmConfigMinTotalToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigMinTotal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesAsmConfigMinTotalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesAsmConfigMinTotal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesAsmConfigMinTotal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesAsmConfigMinUnused {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesAsmConfigMinUnusedToTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigMinUnused | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesAsmConfigMinUnusedToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfigMinUnused | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesAsmConfigMinUnusedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesAsmConfigMinUnused | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesAsmConfigMinUnused | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesAsmConfig {
  /**
  * The block of ASM fields: _enable_, _enable_notification_, _reenable_date_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#asm_enable_block IpamIpSpace#asm_enable_block}
  */
  readonly asmEnableBlock?: IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlock;
  /**
  * The block of ASM fields: _growth_factor_, _growth_type_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#asm_growth_block IpamIpSpace#asm_growth_block}
  */
  readonly asmGrowthBlock?: IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlock;
  /**
  * ASM shows the number of addresses forecast to be used _forecast_period_ days in the future, if it is greater than _asm_threshold_percent_ * _dhcp_total_ (see _dhcp_utilization_) then the subnet is flagged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#asm_threshold IpamIpSpace#asm_threshold}
  */
  readonly asmThreshold?: IpamIpSpaceInheritanceSourcesAsmConfigAsmThreshold;
  /**
  * The forecast period in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#forecast_period IpamIpSpace#forecast_period}
  */
  readonly forecastPeriod?: IpamIpSpaceInheritanceSourcesAsmConfigForecastPeriod;
  /**
  * The minimum amount of history needed before ASM can run on this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#history IpamIpSpace#history}
  */
  readonly history?: IpamIpSpaceInheritanceSourcesAsmConfigHistory;
  /**
  * The minimum size of range needed for ASM to run on this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#min_total IpamIpSpace#min_total}
  */
  readonly minTotal?: IpamIpSpaceInheritanceSourcesAsmConfigMinTotal;
  /**
  * The minimum percentage of addresses that must be available outside of the DHCP ranges and fixed addresses when making a suggested change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#min_unused IpamIpSpace#min_unused}
  */
  readonly minUnused?: IpamIpSpaceInheritanceSourcesAsmConfigMinUnused;
}

export function ipamIpSpaceInheritanceSourcesAsmConfigToTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asm_enable_block: ipamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlockToTerraform(struct!.asmEnableBlock),
    asm_growth_block: ipamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlockToTerraform(struct!.asmGrowthBlock),
    asm_threshold: ipamIpSpaceInheritanceSourcesAsmConfigAsmThresholdToTerraform(struct!.asmThreshold),
    forecast_period: ipamIpSpaceInheritanceSourcesAsmConfigForecastPeriodToTerraform(struct!.forecastPeriod),
    history: ipamIpSpaceInheritanceSourcesAsmConfigHistoryToTerraform(struct!.history),
    min_total: ipamIpSpaceInheritanceSourcesAsmConfigMinTotalToTerraform(struct!.minTotal),
    min_unused: ipamIpSpaceInheritanceSourcesAsmConfigMinUnusedToTerraform(struct!.minUnused),
  }
}


export function ipamIpSpaceInheritanceSourcesAsmConfigToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesAsmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asm_enable_block: {
      value: ipamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlockToHclTerraform(struct!.asmEnableBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlock",
    },
    asm_growth_block: {
      value: ipamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlockToHclTerraform(struct!.asmGrowthBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlock",
    },
    asm_threshold: {
      value: ipamIpSpaceInheritanceSourcesAsmConfigAsmThresholdToHclTerraform(struct!.asmThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesAsmConfigAsmThreshold",
    },
    forecast_period: {
      value: ipamIpSpaceInheritanceSourcesAsmConfigForecastPeriodToHclTerraform(struct!.forecastPeriod),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesAsmConfigForecastPeriod",
    },
    history: {
      value: ipamIpSpaceInheritanceSourcesAsmConfigHistoryToHclTerraform(struct!.history),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesAsmConfigHistory",
    },
    min_total: {
      value: ipamIpSpaceInheritanceSourcesAsmConfigMinTotalToHclTerraform(struct!.minTotal),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesAsmConfigMinTotal",
    },
    min_unused: {
      value: ipamIpSpaceInheritanceSourcesAsmConfigMinUnusedToHclTerraform(struct!.minUnused),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesAsmConfigMinUnused",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesAsmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesAsmConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asmEnableBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmEnableBlock = this._asmEnableBlock?.internalValue;
    }
    if (this._asmGrowthBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmGrowthBlock = this._asmGrowthBlock?.internalValue;
    }
    if (this._asmThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmThreshold = this._asmThreshold?.internalValue;
    }
    if (this._forecastPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forecastPeriod = this._forecastPeriod?.internalValue;
    }
    if (this._history?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.history = this._history?.internalValue;
    }
    if (this._minTotal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTotal = this._minTotal?.internalValue;
    }
    if (this._minUnused?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minUnused = this._minUnused?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesAsmConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asmEnableBlock.internalValue = undefined;
      this._asmGrowthBlock.internalValue = undefined;
      this._asmThreshold.internalValue = undefined;
      this._forecastPeriod.internalValue = undefined;
      this._history.internalValue = undefined;
      this._minTotal.internalValue = undefined;
      this._minUnused.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asmEnableBlock.internalValue = value.asmEnableBlock;
      this._asmGrowthBlock.internalValue = value.asmGrowthBlock;
      this._asmThreshold.internalValue = value.asmThreshold;
      this._forecastPeriod.internalValue = value.forecastPeriod;
      this._history.internalValue = value.history;
      this._minTotal.internalValue = value.minTotal;
      this._minUnused.internalValue = value.minUnused;
    }
  }

  // asm_enable_block - computed: true, optional: true, required: false
  private _asmEnableBlock = new IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlockOutputReference(this, "asm_enable_block");
  public get asmEnableBlock() {
    return this._asmEnableBlock;
  }
  public putAsmEnableBlock(value: IpamIpSpaceInheritanceSourcesAsmConfigAsmEnableBlock) {
    this._asmEnableBlock.internalValue = value;
  }
  public resetAsmEnableBlock() {
    this._asmEnableBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmEnableBlockInput() {
    return this._asmEnableBlock.internalValue;
  }

  // asm_growth_block - computed: true, optional: true, required: false
  private _asmGrowthBlock = new IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlockOutputReference(this, "asm_growth_block");
  public get asmGrowthBlock() {
    return this._asmGrowthBlock;
  }
  public putAsmGrowthBlock(value: IpamIpSpaceInheritanceSourcesAsmConfigAsmGrowthBlock) {
    this._asmGrowthBlock.internalValue = value;
  }
  public resetAsmGrowthBlock() {
    this._asmGrowthBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmGrowthBlockInput() {
    return this._asmGrowthBlock.internalValue;
  }

  // asm_threshold - computed: true, optional: true, required: false
  private _asmThreshold = new IpamIpSpaceInheritanceSourcesAsmConfigAsmThresholdOutputReference(this, "asm_threshold");
  public get asmThreshold() {
    return this._asmThreshold;
  }
  public putAsmThreshold(value: IpamIpSpaceInheritanceSourcesAsmConfigAsmThreshold) {
    this._asmThreshold.internalValue = value;
  }
  public resetAsmThreshold() {
    this._asmThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmThresholdInput() {
    return this._asmThreshold.internalValue;
  }

  // forecast_period - computed: true, optional: true, required: false
  private _forecastPeriod = new IpamIpSpaceInheritanceSourcesAsmConfigForecastPeriodOutputReference(this, "forecast_period");
  public get forecastPeriod() {
    return this._forecastPeriod;
  }
  public putForecastPeriod(value: IpamIpSpaceInheritanceSourcesAsmConfigForecastPeriod) {
    this._forecastPeriod.internalValue = value;
  }
  public resetForecastPeriod() {
    this._forecastPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastPeriodInput() {
    return this._forecastPeriod.internalValue;
  }

  // history - computed: true, optional: true, required: false
  private _history = new IpamIpSpaceInheritanceSourcesAsmConfigHistoryOutputReference(this, "history");
  public get history() {
    return this._history;
  }
  public putHistory(value: IpamIpSpaceInheritanceSourcesAsmConfigHistory) {
    this._history.internalValue = value;
  }
  public resetHistory() {
    this._history.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history.internalValue;
  }

  // min_total - computed: true, optional: true, required: false
  private _minTotal = new IpamIpSpaceInheritanceSourcesAsmConfigMinTotalOutputReference(this, "min_total");
  public get minTotal() {
    return this._minTotal;
  }
  public putMinTotal(value: IpamIpSpaceInheritanceSourcesAsmConfigMinTotal) {
    this._minTotal.internalValue = value;
  }
  public resetMinTotal() {
    this._minTotal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTotalInput() {
    return this._minTotal.internalValue;
  }

  // min_unused - computed: true, optional: true, required: false
  private _minUnused = new IpamIpSpaceInheritanceSourcesAsmConfigMinUnusedOutputReference(this, "min_unused");
  public get minUnused() {
    return this._minUnused;
  }
  public putMinUnused(value: IpamIpSpaceInheritanceSourcesAsmConfigMinUnused) {
    this._minUnused.internalValue = value;
  }
  public resetMinUnused() {
    this._minUnused.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUnusedInput() {
    return this._minUnused.internalValue;
  }
}
export interface IpamIpSpaceInheritanceSourcesDdnsClientUpdate {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDdnsClientUpdateToTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDdnsClientUpdateToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDdnsClientUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDdnsConflictResolutionMode {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDdnsConflictResolutionModeToTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDdnsConflictResolutionModeToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDdnsConflictResolutionModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDdnsEnabled {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDdnsEnabledToTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDdnsEnabledToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDdnsEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDdnsEnabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDdnsEnabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDdnsHostnameBlockValue {
}

export function ipamIpSpaceInheritanceSourcesDdnsHostnameBlockValueToTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsHostnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamIpSpaceInheritanceSourcesDdnsHostnameBlockValueToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsHostnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamIpSpaceInheritanceSourcesDdnsHostnameBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDdnsHostnameBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDdnsHostnameBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ddns_generate_name - computed: true, optional: false, required: false
  public get ddnsGenerateName() {
    return this.getBooleanAttribute('ddns_generate_name');
  }

  // ddns_generated_prefix - computed: true, optional: false, required: false
  public get ddnsGeneratedPrefix() {
    return this.getStringAttribute('ddns_generated_prefix');
  }
}
export interface IpamIpSpaceInheritanceSourcesDdnsHostnameBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDdnsHostnameBlockToTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDdnsHostnameBlockToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDdnsHostnameBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new IpamIpSpaceInheritanceSourcesDdnsHostnameBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface IpamIpSpaceInheritanceSourcesDdnsTtlPercent {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDdnsTtlPercentToTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDdnsTtlPercentToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDdnsTtlPercentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDdnsUpdateBlockValue {
}

export function ipamIpSpaceInheritanceSourcesDdnsUpdateBlockValueToTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsUpdateBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamIpSpaceInheritanceSourcesDdnsUpdateBlockValueToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsUpdateBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamIpSpaceInheritanceSourcesDdnsUpdateBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDdnsUpdateBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDdnsUpdateBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ddns_domain - computed: true, optional: false, required: false
  public get ddnsDomain() {
    return this.getStringAttribute('ddns_domain');
  }

  // ddns_send_updates - computed: true, optional: false, required: false
  public get ddnsSendUpdates() {
    return this.getBooleanAttribute('ddns_send_updates');
  }
}
export interface IpamIpSpaceInheritanceSourcesDdnsUpdateBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDdnsUpdateBlockToTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsUpdateBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDdnsUpdateBlockToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsUpdateBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDdnsUpdateBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDdnsUpdateBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDdnsUpdateBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new IpamIpSpaceInheritanceSourcesDdnsUpdateBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface IpamIpSpaceInheritanceSourcesDdnsUpdateOnRenew {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDdnsUpdateOnRenewToTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDdnsUpdateOnRenewToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDdnsUpdateOnRenewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDdnsUseConflictResolution {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDdnsUseConflictResolutionToTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDdnsUseConflictResolutionToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDdnsUseConflictResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTime {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknown {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownV6ToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownV6ToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfigAuthoritativeDhcp {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigAuthoritativeDhcpToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigAuthoritativeDhcpToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigAuthoritativeDhcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfigEchoClientId {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigEchoClientIdToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigEchoClientIdToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigEchoClientIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfigFilters {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigFiltersToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigFiltersToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfigFiltersV6 {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigFiltersV6ToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigFiltersV6ToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigFiltersV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTime {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreClientUid {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigIgnoreClientUidToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigIgnoreClientUidToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreClientUidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListValue {
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigIgnoreListValueToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigIgnoreListValueToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListValueList extends cdktf.ComplexList {

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
  public get(index: number): IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListValueOutputReference {
    return new IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListStruct {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigIgnoreListStructToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigIgnoreListStructToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTime {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeV6ToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeV6ToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpConfig {
  /**
  * The inheritance configuration for _abandoned_reclaim_time_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#abandoned_reclaim_time IpamIpSpace#abandoned_reclaim_time}
  */
  readonly abandonedReclaimTime?: IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTime;
  /**
  * The inheritance configuration for _abandoned_reclaim_time_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#abandoned_reclaim_time_v6 IpamIpSpace#abandoned_reclaim_time_v6}
  */
  readonly abandonedReclaimTimeV6?: IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6;
  /**
  * The inheritance configuration for _allow_unknown_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#allow_unknown IpamIpSpace#allow_unknown}
  */
  readonly allowUnknown?: IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknown;
  /**
  * The inheritance configuration for _allow_unknown_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#allow_unknown_v6 IpamIpSpace#allow_unknown_v6}
  */
  readonly allowUnknownV6?: IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownV6;
  /**
  * The inheritance configuration for authoritative_dhcp field to set DHCP server as authoritative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#authoritative_dhcp IpamIpSpace#authoritative_dhcp}
  */
  readonly authoritativeDhcp?: IpamIpSpaceInheritanceSourcesDhcpConfigAuthoritativeDhcp;
  /**
  * The inheritance configuration for _echo_client_id_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#echo_client_id IpamIpSpace#echo_client_id}
  */
  readonly echoClientId?: IpamIpSpaceInheritanceSourcesDhcpConfigEchoClientId;
  /**
  * The inheritance configuration for filters field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#filters IpamIpSpace#filters}
  */
  readonly filters?: IpamIpSpaceInheritanceSourcesDhcpConfigFilters;
  /**
  * The inheritance configuration for _filters_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#filters_v6 IpamIpSpace#filters_v6}
  */
  readonly filtersV6?: IpamIpSpaceInheritanceSourcesDhcpConfigFiltersV6;
  /**
  * The inheritance configuration for hold_reclaimed_time in seconds from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#hold_reclaimed_time IpamIpSpace#hold_reclaimed_time}
  */
  readonly holdReclaimedTime?: IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTime;
  /**
  * The inheritance configuration for hold_reclaimed_time_v6 in seconds from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#hold_reclaimed_time_v6 IpamIpSpace#hold_reclaimed_time_v6}
  */
  readonly holdReclaimedTimeV6?: IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeV6;
  /**
  * The inheritance configuration for _ignore_client_uid_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ignore_client_uid IpamIpSpace#ignore_client_uid}
  */
  readonly ignoreClientUid?: IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreClientUid;
  /**
  * The inheritance configuration for _ignore_list_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ignore_list IpamIpSpace#ignore_list}
  */
  readonly ignoreList?: IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListStruct;
  /**
  * The inheritance configuration for _lease_time_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#lease_time IpamIpSpace#lease_time}
  */
  readonly leaseTime?: IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTime;
  /**
  * The inheritance configuration for _lease_time_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#lease_time_v6 IpamIpSpace#lease_time_v6}
  */
  readonly leaseTimeV6?: IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeV6;
}

export function ipamIpSpaceInheritanceSourcesDhcpConfigToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abandoned_reclaim_time: ipamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeToTerraform(struct!.abandonedReclaimTime),
    abandoned_reclaim_time_v6: ipamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToTerraform(struct!.abandonedReclaimTimeV6),
    allow_unknown: ipamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownToTerraform(struct!.allowUnknown),
    allow_unknown_v6: ipamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownV6ToTerraform(struct!.allowUnknownV6),
    authoritative_dhcp: ipamIpSpaceInheritanceSourcesDhcpConfigAuthoritativeDhcpToTerraform(struct!.authoritativeDhcp),
    echo_client_id: ipamIpSpaceInheritanceSourcesDhcpConfigEchoClientIdToTerraform(struct!.echoClientId),
    filters: ipamIpSpaceInheritanceSourcesDhcpConfigFiltersToTerraform(struct!.filters),
    filters_v6: ipamIpSpaceInheritanceSourcesDhcpConfigFiltersV6ToTerraform(struct!.filtersV6),
    hold_reclaimed_time: ipamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeToTerraform(struct!.holdReclaimedTime),
    hold_reclaimed_time_v6: ipamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToTerraform(struct!.holdReclaimedTimeV6),
    ignore_client_uid: ipamIpSpaceInheritanceSourcesDhcpConfigIgnoreClientUidToTerraform(struct!.ignoreClientUid),
    ignore_list: ipamIpSpaceInheritanceSourcesDhcpConfigIgnoreListStructToTerraform(struct!.ignoreList),
    lease_time: ipamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeToTerraform(struct!.leaseTime),
    lease_time_v6: ipamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeV6ToTerraform(struct!.leaseTimeV6),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpConfigToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abandoned_reclaim_time: {
      value: ipamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeToHclTerraform(struct!.abandonedReclaimTime),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTime",
    },
    abandoned_reclaim_time_v6: {
      value: ipamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToHclTerraform(struct!.abandonedReclaimTimeV6),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6",
    },
    allow_unknown: {
      value: ipamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownToHclTerraform(struct!.allowUnknown),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknown",
    },
    allow_unknown_v6: {
      value: ipamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownV6ToHclTerraform(struct!.allowUnknownV6),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownV6",
    },
    authoritative_dhcp: {
      value: ipamIpSpaceInheritanceSourcesDhcpConfigAuthoritativeDhcpToHclTerraform(struct!.authoritativeDhcp),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpConfigAuthoritativeDhcp",
    },
    echo_client_id: {
      value: ipamIpSpaceInheritanceSourcesDhcpConfigEchoClientIdToHclTerraform(struct!.echoClientId),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpConfigEchoClientId",
    },
    filters: {
      value: ipamIpSpaceInheritanceSourcesDhcpConfigFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpConfigFilters",
    },
    filters_v6: {
      value: ipamIpSpaceInheritanceSourcesDhcpConfigFiltersV6ToHclTerraform(struct!.filtersV6),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpConfigFiltersV6",
    },
    hold_reclaimed_time: {
      value: ipamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeToHclTerraform(struct!.holdReclaimedTime),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTime",
    },
    hold_reclaimed_time_v6: {
      value: ipamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToHclTerraform(struct!.holdReclaimedTimeV6),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeV6",
    },
    ignore_client_uid: {
      value: ipamIpSpaceInheritanceSourcesDhcpConfigIgnoreClientUidToHclTerraform(struct!.ignoreClientUid),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreClientUid",
    },
    ignore_list: {
      value: ipamIpSpaceInheritanceSourcesDhcpConfigIgnoreListStructToHclTerraform(struct!.ignoreList),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListStruct",
    },
    lease_time: {
      value: ipamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeToHclTerraform(struct!.leaseTime),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTime",
    },
    lease_time_v6: {
      value: ipamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeV6ToHclTerraform(struct!.leaseTimeV6),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeV6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abandonedReclaimTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandonedReclaimTime = this._abandonedReclaimTime?.internalValue;
    }
    if (this._abandonedReclaimTimeV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandonedReclaimTimeV6 = this._abandonedReclaimTimeV6?.internalValue;
    }
    if (this._allowUnknown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknown = this._allowUnknown?.internalValue;
    }
    if (this._allowUnknownV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknownV6 = this._allowUnknownV6?.internalValue;
    }
    if (this._authoritativeDhcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authoritativeDhcp = this._authoritativeDhcp?.internalValue;
    }
    if (this._echoClientId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.echoClientId = this._echoClientId?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._filtersV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersV6 = this._filtersV6?.internalValue;
    }
    if (this._holdReclaimedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdReclaimedTime = this._holdReclaimedTime?.internalValue;
    }
    if (this._holdReclaimedTimeV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdReclaimedTimeV6 = this._holdReclaimedTimeV6?.internalValue;
    }
    if (this._ignoreClientUid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreClientUid = this._ignoreClientUid?.internalValue;
    }
    if (this._ignoreList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreList = this._ignoreList?.internalValue;
    }
    if (this._leaseTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime?.internalValue;
    }
    if (this._leaseTimeV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTimeV6 = this._leaseTimeV6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abandonedReclaimTime.internalValue = undefined;
      this._abandonedReclaimTimeV6.internalValue = undefined;
      this._allowUnknown.internalValue = undefined;
      this._allowUnknownV6.internalValue = undefined;
      this._authoritativeDhcp.internalValue = undefined;
      this._echoClientId.internalValue = undefined;
      this._filters.internalValue = undefined;
      this._filtersV6.internalValue = undefined;
      this._holdReclaimedTime.internalValue = undefined;
      this._holdReclaimedTimeV6.internalValue = undefined;
      this._ignoreClientUid.internalValue = undefined;
      this._ignoreList.internalValue = undefined;
      this._leaseTime.internalValue = undefined;
      this._leaseTimeV6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abandonedReclaimTime.internalValue = value.abandonedReclaimTime;
      this._abandonedReclaimTimeV6.internalValue = value.abandonedReclaimTimeV6;
      this._allowUnknown.internalValue = value.allowUnknown;
      this._allowUnknownV6.internalValue = value.allowUnknownV6;
      this._authoritativeDhcp.internalValue = value.authoritativeDhcp;
      this._echoClientId.internalValue = value.echoClientId;
      this._filters.internalValue = value.filters;
      this._filtersV6.internalValue = value.filtersV6;
      this._holdReclaimedTime.internalValue = value.holdReclaimedTime;
      this._holdReclaimedTimeV6.internalValue = value.holdReclaimedTimeV6;
      this._ignoreClientUid.internalValue = value.ignoreClientUid;
      this._ignoreList.internalValue = value.ignoreList;
      this._leaseTime.internalValue = value.leaseTime;
      this._leaseTimeV6.internalValue = value.leaseTimeV6;
    }
  }

  // abandoned_reclaim_time - computed: true, optional: true, required: false
  private _abandonedReclaimTime = new IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeOutputReference(this, "abandoned_reclaim_time");
  public get abandonedReclaimTime() {
    return this._abandonedReclaimTime;
  }
  public putAbandonedReclaimTime(value: IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTime) {
    this._abandonedReclaimTime.internalValue = value;
  }
  public resetAbandonedReclaimTime() {
    this._abandonedReclaimTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedReclaimTimeInput() {
    return this._abandonedReclaimTime.internalValue;
  }

  // abandoned_reclaim_time_v6 - computed: true, optional: true, required: false
  private _abandonedReclaimTimeV6 = new IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6OutputReference(this, "abandoned_reclaim_time_v6");
  public get abandonedReclaimTimeV6() {
    return this._abandonedReclaimTimeV6;
  }
  public putAbandonedReclaimTimeV6(value: IpamIpSpaceInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6) {
    this._abandonedReclaimTimeV6.internalValue = value;
  }
  public resetAbandonedReclaimTimeV6() {
    this._abandonedReclaimTimeV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedReclaimTimeV6Input() {
    return this._abandonedReclaimTimeV6.internalValue;
  }

  // allow_unknown - computed: true, optional: true, required: false
  private _allowUnknown = new IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownOutputReference(this, "allow_unknown");
  public get allowUnknown() {
    return this._allowUnknown;
  }
  public putAllowUnknown(value: IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknown) {
    this._allowUnknown.internalValue = value;
  }
  public resetAllowUnknown() {
    this._allowUnknown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownInput() {
    return this._allowUnknown.internalValue;
  }

  // allow_unknown_v6 - computed: true, optional: true, required: false
  private _allowUnknownV6 = new IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownV6OutputReference(this, "allow_unknown_v6");
  public get allowUnknownV6() {
    return this._allowUnknownV6;
  }
  public putAllowUnknownV6(value: IpamIpSpaceInheritanceSourcesDhcpConfigAllowUnknownV6) {
    this._allowUnknownV6.internalValue = value;
  }
  public resetAllowUnknownV6() {
    this._allowUnknownV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownV6Input() {
    return this._allowUnknownV6.internalValue;
  }

  // authoritative_dhcp - computed: true, optional: true, required: false
  private _authoritativeDhcp = new IpamIpSpaceInheritanceSourcesDhcpConfigAuthoritativeDhcpOutputReference(this, "authoritative_dhcp");
  public get authoritativeDhcp() {
    return this._authoritativeDhcp;
  }
  public putAuthoritativeDhcp(value: IpamIpSpaceInheritanceSourcesDhcpConfigAuthoritativeDhcp) {
    this._authoritativeDhcp.internalValue = value;
  }
  public resetAuthoritativeDhcp() {
    this._authoritativeDhcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeDhcpInput() {
    return this._authoritativeDhcp.internalValue;
  }

  // echo_client_id - computed: true, optional: true, required: false
  private _echoClientId = new IpamIpSpaceInheritanceSourcesDhcpConfigEchoClientIdOutputReference(this, "echo_client_id");
  public get echoClientId() {
    return this._echoClientId;
  }
  public putEchoClientId(value: IpamIpSpaceInheritanceSourcesDhcpConfigEchoClientId) {
    this._echoClientId.internalValue = value;
  }
  public resetEchoClientId() {
    this._echoClientId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoClientIdInput() {
    return this._echoClientId.internalValue;
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new IpamIpSpaceInheritanceSourcesDhcpConfigFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: IpamIpSpaceInheritanceSourcesDhcpConfigFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // filters_v6 - computed: true, optional: true, required: false
  private _filtersV6 = new IpamIpSpaceInheritanceSourcesDhcpConfigFiltersV6OutputReference(this, "filters_v6");
  public get filtersV6() {
    return this._filtersV6;
  }
  public putFiltersV6(value: IpamIpSpaceInheritanceSourcesDhcpConfigFiltersV6) {
    this._filtersV6.internalValue = value;
  }
  public resetFiltersV6() {
    this._filtersV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersV6Input() {
    return this._filtersV6.internalValue;
  }

  // hold_reclaimed_time - computed: true, optional: true, required: false
  private _holdReclaimedTime = new IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeOutputReference(this, "hold_reclaimed_time");
  public get holdReclaimedTime() {
    return this._holdReclaimedTime;
  }
  public putHoldReclaimedTime(value: IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTime) {
    this._holdReclaimedTime.internalValue = value;
  }
  public resetHoldReclaimedTime() {
    this._holdReclaimedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdReclaimedTimeInput() {
    return this._holdReclaimedTime.internalValue;
  }

  // hold_reclaimed_time_v6 - computed: true, optional: true, required: false
  private _holdReclaimedTimeV6 = new IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeV6OutputReference(this, "hold_reclaimed_time_v6");
  public get holdReclaimedTimeV6() {
    return this._holdReclaimedTimeV6;
  }
  public putHoldReclaimedTimeV6(value: IpamIpSpaceInheritanceSourcesDhcpConfigHoldReclaimedTimeV6) {
    this._holdReclaimedTimeV6.internalValue = value;
  }
  public resetHoldReclaimedTimeV6() {
    this._holdReclaimedTimeV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdReclaimedTimeV6Input() {
    return this._holdReclaimedTimeV6.internalValue;
  }

  // ignore_client_uid - computed: true, optional: true, required: false
  private _ignoreClientUid = new IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreClientUidOutputReference(this, "ignore_client_uid");
  public get ignoreClientUid() {
    return this._ignoreClientUid;
  }
  public putIgnoreClientUid(value: IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreClientUid) {
    this._ignoreClientUid.internalValue = value;
  }
  public resetIgnoreClientUid() {
    this._ignoreClientUid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreClientUidInput() {
    return this._ignoreClientUid.internalValue;
  }

  // ignore_list - computed: true, optional: true, required: false
  private _ignoreList = new IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListStructOutputReference(this, "ignore_list");
  public get ignoreList() {
    return this._ignoreList;
  }
  public putIgnoreList(value: IpamIpSpaceInheritanceSourcesDhcpConfigIgnoreListStruct) {
    this._ignoreList.internalValue = value;
  }
  public resetIgnoreList() {
    this._ignoreList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreListInput() {
    return this._ignoreList.internalValue;
  }

  // lease_time - computed: true, optional: true, required: false
  private _leaseTime = new IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeOutputReference(this, "lease_time");
  public get leaseTime() {
    return this._leaseTime;
  }
  public putLeaseTime(value: IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTime) {
    this._leaseTime.internalValue = value;
  }
  public resetLeaseTime() {
    this._leaseTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime.internalValue;
  }

  // lease_time_v6 - computed: true, optional: true, required: false
  private _leaseTimeV6 = new IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeV6OutputReference(this, "lease_time_v6");
  public get leaseTimeV6() {
    return this._leaseTimeV6;
  }
  public putLeaseTimeV6(value: IpamIpSpaceInheritanceSourcesDhcpConfigLeaseTimeV6) {
    this._leaseTimeV6.internalValue = value;
  }
  public resetLeaseTimeV6() {
    this._leaseTimeV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeV6Input() {
    return this._leaseTimeV6.internalValue;
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpOptionsValueValueOption {
}

export function ipamIpSpaceInheritanceSourcesDhcpOptionsValueValueOptionToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptionsValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpOptionsValueValueOptionToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptionsValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamIpSpaceInheritanceSourcesDhcpOptionsValueValueOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpOptionsValueValueOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpOptionsValueValueOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // option_code - computed: true, optional: false, required: false
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }

  // option_value - computed: true, optional: false, required: false
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpOptionsValueValue {
}

export function ipamIpSpaceInheritanceSourcesDhcpOptionsValueValueToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpOptionsValueValueToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamIpSpaceInheritanceSourcesDhcpOptionsValueValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpOptionsValueValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpOptionsValueValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option - computed: true, optional: false, required: false
  private _option = new IpamIpSpaceInheritanceSourcesDhcpOptionsValueValueOptionOutputReference(this, "option");
  public get option() {
    return this._option;
  }

  // overriding_group - computed: true, optional: false, required: false
  public get overridingGroup() {
    return this.getStringAttribute('overriding_group');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpOptionsValue {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpOptionsValueToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpOptionsValueToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpOptionsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new IpamIpSpaceInheritanceSourcesDhcpOptionsValueValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class IpamIpSpaceInheritanceSourcesDhcpOptionsValueList extends cdktf.ComplexList {
  public internalValue? : IpamIpSpaceInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable

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
  public get(index: number): IpamIpSpaceInheritanceSourcesDhcpOptionsValueOutputReference {
    return new IpamIpSpaceInheritanceSourcesDhcpOptionsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpOptions {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
  /**
  * The inherited DHCP option values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#value IpamIpSpace#value}
  */
  readonly value?: IpamIpSpaceInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable;
}

export function ipamIpSpaceInheritanceSourcesDhcpOptionsToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.listMapper(ipamIpSpaceInheritanceSourcesDhcpOptionsValueToTerraform, false)(struct!.value),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpOptionsToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(ipamIpSpaceInheritanceSourcesDhcpOptionsValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpOptionsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value.internalValue = value.value;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // value - computed: true, optional: true, required: false
  private _value = new IpamIpSpaceInheritanceSourcesDhcpOptionsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: IpamIpSpaceInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValueOption {
}

export function ipamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValueOptionToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValueOptionToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValueOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValueOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValueOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // option_code - computed: true, optional: false, required: false
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }

  // option_value - computed: true, optional: false, required: false
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValue {
}

export function ipamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValueToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValueToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option - computed: true, optional: false, required: false
  private _option = new IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValueOptionOutputReference(this, "option");
  public get option() {
    return this._option;
  }

  // overriding_group - computed: true, optional: false, required: false
  public get overridingGroup() {
    return this.getStringAttribute('overriding_group');
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpOptionsV6Value {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesDhcpOptionsV6ValueToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptionsV6Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpOptionsV6ValueToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptionsV6Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpOptionsV6Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpOptionsV6Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueList extends cdktf.ComplexList {
  public internalValue? : IpamIpSpaceInheritanceSourcesDhcpOptionsV6Value[] | cdktf.IResolvable

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
  public get(index: number): IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueOutputReference {
    return new IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamIpSpaceInheritanceSourcesDhcpOptionsV6 {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
  /**
  * The inherited DHCP option values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#value IpamIpSpace#value}
  */
  readonly value?: IpamIpSpaceInheritanceSourcesDhcpOptionsV6Value[] | cdktf.IResolvable;
}

export function ipamIpSpaceInheritanceSourcesDhcpOptionsV6ToTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptionsV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.listMapper(ipamIpSpaceInheritanceSourcesDhcpOptionsV6ValueToTerraform, false)(struct!.value),
  }
}


export function ipamIpSpaceInheritanceSourcesDhcpOptionsV6ToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesDhcpOptionsV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(ipamIpSpaceInheritanceSourcesDhcpOptionsV6ValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesDhcpOptionsV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesDhcpOptionsV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesDhcpOptionsV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value.internalValue = value.value;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // value - computed: true, optional: true, required: false
  private _value = new IpamIpSpaceInheritanceSourcesDhcpOptionsV6ValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: IpamIpSpaceInheritanceSourcesDhcpOptionsV6Value[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface IpamIpSpaceInheritanceSourcesHeaderOptionFilename {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesHeaderOptionFilenameToTerraform(struct?: IpamIpSpaceInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesHeaderOptionFilenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesHeaderOptionServerAddress {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesHeaderOptionServerAddressToTerraform(struct?: IpamIpSpaceInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesHeaderOptionServerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesHeaderOptionServerName {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesHeaderOptionServerNameToTerraform(struct?: IpamIpSpaceInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesHeaderOptionServerNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSourcesHostnameRewriteBlockValue {
}

export function ipamIpSpaceInheritanceSourcesHostnameRewriteBlockValueToTerraform(struct?: IpamIpSpaceInheritanceSourcesHostnameRewriteBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamIpSpaceInheritanceSourcesHostnameRewriteBlockValueToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesHostnameRewriteBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamIpSpaceInheritanceSourcesHostnameRewriteBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesHostnameRewriteBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesHostnameRewriteBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname_rewrite_char - computed: true, optional: false, required: false
  public get hostnameRewriteChar() {
    return this.getStringAttribute('hostname_rewrite_char');
  }

  // hostname_rewrite_enabled - computed: true, optional: false, required: false
  public get hostnameRewriteEnabled() {
    return this.getBooleanAttribute('hostname_rewrite_enabled');
  }

  // hostname_rewrite_regex - computed: true, optional: false, required: false
  public get hostnameRewriteRegex() {
    return this.getStringAttribute('hostname_rewrite_regex');
  }
}
export interface IpamIpSpaceInheritanceSourcesHostnameRewriteBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesHostnameRewriteBlockToTerraform(struct?: IpamIpSpaceInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesHostnameRewriteBlockToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesHostnameRewriteBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new IpamIpSpaceInheritanceSourcesHostnameRewriteBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface IpamIpSpaceInheritanceSourcesVendorSpecificOptionOptionSpace {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#action IpamIpSpace#action}
  */
  readonly action?: string;
}

export function ipamIpSpaceInheritanceSourcesVendorSpecificOptionOptionSpaceToTerraform(struct?: IpamIpSpaceInheritanceSourcesVendorSpecificOptionOptionSpace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamIpSpaceInheritanceSourcesVendorSpecificOptionOptionSpaceToHclTerraform(struct?: IpamIpSpaceInheritanceSourcesVendorSpecificOptionOptionSpace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesVendorSpecificOptionOptionSpaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSourcesVendorSpecificOptionOptionSpace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSourcesVendorSpecificOptionOptionSpace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface IpamIpSpaceInheritanceSources {
  /**
  * The inheritance configuration for _asm_config_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#asm_config IpamIpSpace#asm_config}
  */
  readonly asmConfig?: IpamIpSpaceInheritanceSourcesAsmConfig;
  /**
  * The inheritance configuration for _ddns_client_update_ field from _IPSpace_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_client_update IpamIpSpace#ddns_client_update}
  */
  readonly ddnsClientUpdate?: IpamIpSpaceInheritanceSourcesDdnsClientUpdate;
  /**
  * The inheritance configuration for _ddns_conflict_resolution_mode_ field from _IPSpace_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_conflict_resolution_mode IpamIpSpace#ddns_conflict_resolution_mode}
  */
  readonly ddnsConflictResolutionMode?: IpamIpSpaceInheritanceSourcesDdnsConflictResolutionMode;
  /**
  * The inheritance configuration for _ddns_enabled_ field. Only action allowed is 'inherit'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_enabled IpamIpSpace#ddns_enabled}
  */
  readonly ddnsEnabled?: IpamIpSpaceInheritanceSourcesDdnsEnabled;
  /**
  * The inheritance configuration for _ddns_generate_name_ and _ddns_generated_prefix_ fields from _IPSpace_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_hostname_block IpamIpSpace#ddns_hostname_block}
  */
  readonly ddnsHostnameBlock?: IpamIpSpaceInheritanceSourcesDdnsHostnameBlock;
  /**
  * The inheritance configuration for _ddns_ttl_percent_ field from _IPSpace_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_ttl_percent IpamIpSpace#ddns_ttl_percent}
  */
  readonly ddnsTtlPercent?: IpamIpSpaceInheritanceSourcesDdnsTtlPercent;
  /**
  * The inheritance configuration for _ddns_send_updates_ and _ddns_domain_ fields from _IPSpace_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_update_block IpamIpSpace#ddns_update_block}
  */
  readonly ddnsUpdateBlock?: IpamIpSpaceInheritanceSourcesDdnsUpdateBlock;
  /**
  * The inheritance configuration for _ddns_update_on_renew_ field from _IPSpace_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_update_on_renew IpamIpSpace#ddns_update_on_renew}
  */
  readonly ddnsUpdateOnRenew?: IpamIpSpaceInheritanceSourcesDdnsUpdateOnRenew;
  /**
  * The inheritance configuration for _ddns_use_conflict_resolution_ field from _IPSpace_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#ddns_use_conflict_resolution IpamIpSpace#ddns_use_conflict_resolution}
  */
  readonly ddnsUseConflictResolution?: IpamIpSpaceInheritanceSourcesDdnsUseConflictResolution;
  /**
  * The inheritance configuration for _dhcp_config_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#dhcp_config IpamIpSpace#dhcp_config}
  */
  readonly dhcpConfig?: IpamIpSpaceInheritanceSourcesDhcpConfig;
  /**
  * The inheritance configuration for _dhcp_options_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#dhcp_options IpamIpSpace#dhcp_options}
  */
  readonly dhcpOptions?: IpamIpSpaceInheritanceSourcesDhcpOptions;
  /**
  * The inheritance configuration for _dhcp_options_v6_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#dhcp_options_v6 IpamIpSpace#dhcp_options_v6}
  */
  readonly dhcpOptionsV6?: IpamIpSpaceInheritanceSourcesDhcpOptionsV6;
  /**
  * The inheritance configuration for _header_option_filename_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#header_option_filename IpamIpSpace#header_option_filename}
  */
  readonly headerOptionFilename?: IpamIpSpaceInheritanceSourcesHeaderOptionFilename;
  /**
  * The inheritance configuration for _header_option_server_address_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#header_option_server_address IpamIpSpace#header_option_server_address}
  */
  readonly headerOptionServerAddress?: IpamIpSpaceInheritanceSourcesHeaderOptionServerAddress;
  /**
  * The inheritance configuration for _header_option_server_name_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#header_option_server_name IpamIpSpace#header_option_server_name}
  */
  readonly headerOptionServerName?: IpamIpSpaceInheritanceSourcesHeaderOptionServerName;
  /**
  * The inheritance configuration for _hostname_rewrite_enabled_, _hostname_rewrite_regex_, and _hostname_rewrite_char_ fields from _IPSpace_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#hostname_rewrite_block IpamIpSpace#hostname_rewrite_block}
  */
  readonly hostnameRewriteBlock?: IpamIpSpaceInheritanceSourcesHostnameRewriteBlock;
  /**
  * The inheritance configuration for _vendor_specific_option_option_space_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#vendor_specific_option_option_space IpamIpSpace#vendor_specific_option_option_space}
  */
  readonly vendorSpecificOptionOptionSpace?: IpamIpSpaceInheritanceSourcesVendorSpecificOptionOptionSpace;
}

export function ipamIpSpaceInheritanceSourcesToTerraform(struct?: IpamIpSpaceInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asm_config: ipamIpSpaceInheritanceSourcesAsmConfigToTerraform(struct!.asmConfig),
    ddns_client_update: ipamIpSpaceInheritanceSourcesDdnsClientUpdateToTerraform(struct!.ddnsClientUpdate),
    ddns_conflict_resolution_mode: ipamIpSpaceInheritanceSourcesDdnsConflictResolutionModeToTerraform(struct!.ddnsConflictResolutionMode),
    ddns_enabled: ipamIpSpaceInheritanceSourcesDdnsEnabledToTerraform(struct!.ddnsEnabled),
    ddns_hostname_block: ipamIpSpaceInheritanceSourcesDdnsHostnameBlockToTerraform(struct!.ddnsHostnameBlock),
    ddns_ttl_percent: ipamIpSpaceInheritanceSourcesDdnsTtlPercentToTerraform(struct!.ddnsTtlPercent),
    ddns_update_block: ipamIpSpaceInheritanceSourcesDdnsUpdateBlockToTerraform(struct!.ddnsUpdateBlock),
    ddns_update_on_renew: ipamIpSpaceInheritanceSourcesDdnsUpdateOnRenewToTerraform(struct!.ddnsUpdateOnRenew),
    ddns_use_conflict_resolution: ipamIpSpaceInheritanceSourcesDdnsUseConflictResolutionToTerraform(struct!.ddnsUseConflictResolution),
    dhcp_config: ipamIpSpaceInheritanceSourcesDhcpConfigToTerraform(struct!.dhcpConfig),
    dhcp_options: ipamIpSpaceInheritanceSourcesDhcpOptionsToTerraform(struct!.dhcpOptions),
    dhcp_options_v6: ipamIpSpaceInheritanceSourcesDhcpOptionsV6ToTerraform(struct!.dhcpOptionsV6),
    header_option_filename: ipamIpSpaceInheritanceSourcesHeaderOptionFilenameToTerraform(struct!.headerOptionFilename),
    header_option_server_address: ipamIpSpaceInheritanceSourcesHeaderOptionServerAddressToTerraform(struct!.headerOptionServerAddress),
    header_option_server_name: ipamIpSpaceInheritanceSourcesHeaderOptionServerNameToTerraform(struct!.headerOptionServerName),
    hostname_rewrite_block: ipamIpSpaceInheritanceSourcesHostnameRewriteBlockToTerraform(struct!.hostnameRewriteBlock),
    vendor_specific_option_option_space: ipamIpSpaceInheritanceSourcesVendorSpecificOptionOptionSpaceToTerraform(struct!.vendorSpecificOptionOptionSpace),
  }
}


export function ipamIpSpaceInheritanceSourcesToHclTerraform(struct?: IpamIpSpaceInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asm_config: {
      value: ipamIpSpaceInheritanceSourcesAsmConfigToHclTerraform(struct!.asmConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesAsmConfig",
    },
    ddns_client_update: {
      value: ipamIpSpaceInheritanceSourcesDdnsClientUpdateToHclTerraform(struct!.ddnsClientUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDdnsClientUpdate",
    },
    ddns_conflict_resolution_mode: {
      value: ipamIpSpaceInheritanceSourcesDdnsConflictResolutionModeToHclTerraform(struct!.ddnsConflictResolutionMode),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDdnsConflictResolutionMode",
    },
    ddns_enabled: {
      value: ipamIpSpaceInheritanceSourcesDdnsEnabledToHclTerraform(struct!.ddnsEnabled),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDdnsEnabled",
    },
    ddns_hostname_block: {
      value: ipamIpSpaceInheritanceSourcesDdnsHostnameBlockToHclTerraform(struct!.ddnsHostnameBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDdnsHostnameBlock",
    },
    ddns_ttl_percent: {
      value: ipamIpSpaceInheritanceSourcesDdnsTtlPercentToHclTerraform(struct!.ddnsTtlPercent),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDdnsTtlPercent",
    },
    ddns_update_block: {
      value: ipamIpSpaceInheritanceSourcesDdnsUpdateBlockToHclTerraform(struct!.ddnsUpdateBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDdnsUpdateBlock",
    },
    ddns_update_on_renew: {
      value: ipamIpSpaceInheritanceSourcesDdnsUpdateOnRenewToHclTerraform(struct!.ddnsUpdateOnRenew),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDdnsUpdateOnRenew",
    },
    ddns_use_conflict_resolution: {
      value: ipamIpSpaceInheritanceSourcesDdnsUseConflictResolutionToHclTerraform(struct!.ddnsUseConflictResolution),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDdnsUseConflictResolution",
    },
    dhcp_config: {
      value: ipamIpSpaceInheritanceSourcesDhcpConfigToHclTerraform(struct!.dhcpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpConfig",
    },
    dhcp_options: {
      value: ipamIpSpaceInheritanceSourcesDhcpOptionsToHclTerraform(struct!.dhcpOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpOptions",
    },
    dhcp_options_v6: {
      value: ipamIpSpaceInheritanceSourcesDhcpOptionsV6ToHclTerraform(struct!.dhcpOptionsV6),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesDhcpOptionsV6",
    },
    header_option_filename: {
      value: ipamIpSpaceInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct!.headerOptionFilename),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesHeaderOptionFilename",
    },
    header_option_server_address: {
      value: ipamIpSpaceInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct!.headerOptionServerAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesHeaderOptionServerAddress",
    },
    header_option_server_name: {
      value: ipamIpSpaceInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct!.headerOptionServerName),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesHeaderOptionServerName",
    },
    hostname_rewrite_block: {
      value: ipamIpSpaceInheritanceSourcesHostnameRewriteBlockToHclTerraform(struct!.hostnameRewriteBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesHostnameRewriteBlock",
    },
    vendor_specific_option_option_space: {
      value: ipamIpSpaceInheritanceSourcesVendorSpecificOptionOptionSpaceToHclTerraform(struct!.vendorSpecificOptionOptionSpace),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpSpaceInheritanceSourcesVendorSpecificOptionOptionSpace",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceInheritanceSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmConfig = this._asmConfig?.internalValue;
    }
    if (this._ddnsClientUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsClientUpdate = this._ddnsClientUpdate?.internalValue;
    }
    if (this._ddnsConflictResolutionMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsConflictResolutionMode = this._ddnsConflictResolutionMode?.internalValue;
    }
    if (this._ddnsEnabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsEnabled = this._ddnsEnabled?.internalValue;
    }
    if (this._ddnsHostnameBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsHostnameBlock = this._ddnsHostnameBlock?.internalValue;
    }
    if (this._ddnsTtlPercent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsTtlPercent = this._ddnsTtlPercent?.internalValue;
    }
    if (this._ddnsUpdateBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUpdateBlock = this._ddnsUpdateBlock?.internalValue;
    }
    if (this._ddnsUpdateOnRenew?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUpdateOnRenew = this._ddnsUpdateOnRenew?.internalValue;
    }
    if (this._ddnsUseConflictResolution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUseConflictResolution = this._ddnsUseConflictResolution?.internalValue;
    }
    if (this._dhcpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpConfig = this._dhcpConfig?.internalValue;
    }
    if (this._dhcpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptions = this._dhcpOptions?.internalValue;
    }
    if (this._dhcpOptionsV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptionsV6 = this._dhcpOptionsV6?.internalValue;
    }
    if (this._headerOptionFilename?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionFilename = this._headerOptionFilename?.internalValue;
    }
    if (this._headerOptionServerAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionServerAddress = this._headerOptionServerAddress?.internalValue;
    }
    if (this._headerOptionServerName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionServerName = this._headerOptionServerName?.internalValue;
    }
    if (this._hostnameRewriteBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameRewriteBlock = this._hostnameRewriteBlock?.internalValue;
    }
    if (this._vendorSpecificOptionOptionSpace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorSpecificOptionOptionSpace = this._vendorSpecificOptionOptionSpace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceInheritanceSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asmConfig.internalValue = undefined;
      this._ddnsClientUpdate.internalValue = undefined;
      this._ddnsConflictResolutionMode.internalValue = undefined;
      this._ddnsEnabled.internalValue = undefined;
      this._ddnsHostnameBlock.internalValue = undefined;
      this._ddnsTtlPercent.internalValue = undefined;
      this._ddnsUpdateBlock.internalValue = undefined;
      this._ddnsUpdateOnRenew.internalValue = undefined;
      this._ddnsUseConflictResolution.internalValue = undefined;
      this._dhcpConfig.internalValue = undefined;
      this._dhcpOptions.internalValue = undefined;
      this._dhcpOptionsV6.internalValue = undefined;
      this._headerOptionFilename.internalValue = undefined;
      this._headerOptionServerAddress.internalValue = undefined;
      this._headerOptionServerName.internalValue = undefined;
      this._hostnameRewriteBlock.internalValue = undefined;
      this._vendorSpecificOptionOptionSpace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asmConfig.internalValue = value.asmConfig;
      this._ddnsClientUpdate.internalValue = value.ddnsClientUpdate;
      this._ddnsConflictResolutionMode.internalValue = value.ddnsConflictResolutionMode;
      this._ddnsEnabled.internalValue = value.ddnsEnabled;
      this._ddnsHostnameBlock.internalValue = value.ddnsHostnameBlock;
      this._ddnsTtlPercent.internalValue = value.ddnsTtlPercent;
      this._ddnsUpdateBlock.internalValue = value.ddnsUpdateBlock;
      this._ddnsUpdateOnRenew.internalValue = value.ddnsUpdateOnRenew;
      this._ddnsUseConflictResolution.internalValue = value.ddnsUseConflictResolution;
      this._dhcpConfig.internalValue = value.dhcpConfig;
      this._dhcpOptions.internalValue = value.dhcpOptions;
      this._dhcpOptionsV6.internalValue = value.dhcpOptionsV6;
      this._headerOptionFilename.internalValue = value.headerOptionFilename;
      this._headerOptionServerAddress.internalValue = value.headerOptionServerAddress;
      this._headerOptionServerName.internalValue = value.headerOptionServerName;
      this._hostnameRewriteBlock.internalValue = value.hostnameRewriteBlock;
      this._vendorSpecificOptionOptionSpace.internalValue = value.vendorSpecificOptionOptionSpace;
    }
  }

  // asm_config - computed: true, optional: true, required: false
  private _asmConfig = new IpamIpSpaceInheritanceSourcesAsmConfigOutputReference(this, "asm_config");
  public get asmConfig() {
    return this._asmConfig;
  }
  public putAsmConfig(value: IpamIpSpaceInheritanceSourcesAsmConfig) {
    this._asmConfig.internalValue = value;
  }
  public resetAsmConfig() {
    this._asmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmConfigInput() {
    return this._asmConfig.internalValue;
  }

  // ddns_client_update - computed: true, optional: true, required: false
  private _ddnsClientUpdate = new IpamIpSpaceInheritanceSourcesDdnsClientUpdateOutputReference(this, "ddns_client_update");
  public get ddnsClientUpdate() {
    return this._ddnsClientUpdate;
  }
  public putDdnsClientUpdate(value: IpamIpSpaceInheritanceSourcesDdnsClientUpdate) {
    this._ddnsClientUpdate.internalValue = value;
  }
  public resetDdnsClientUpdate() {
    this._ddnsClientUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsClientUpdateInput() {
    return this._ddnsClientUpdate.internalValue;
  }

  // ddns_conflict_resolution_mode - computed: true, optional: true, required: false
  private _ddnsConflictResolutionMode = new IpamIpSpaceInheritanceSourcesDdnsConflictResolutionModeOutputReference(this, "ddns_conflict_resolution_mode");
  public get ddnsConflictResolutionMode() {
    return this._ddnsConflictResolutionMode;
  }
  public putDdnsConflictResolutionMode(value: IpamIpSpaceInheritanceSourcesDdnsConflictResolutionMode) {
    this._ddnsConflictResolutionMode.internalValue = value;
  }
  public resetDdnsConflictResolutionMode() {
    this._ddnsConflictResolutionMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsConflictResolutionModeInput() {
    return this._ddnsConflictResolutionMode.internalValue;
  }

  // ddns_enabled - computed: true, optional: true, required: false
  private _ddnsEnabled = new IpamIpSpaceInheritanceSourcesDdnsEnabledOutputReference(this, "ddns_enabled");
  public get ddnsEnabled() {
    return this._ddnsEnabled;
  }
  public putDdnsEnabled(value: IpamIpSpaceInheritanceSourcesDdnsEnabled) {
    this._ddnsEnabled.internalValue = value;
  }
  public resetDdnsEnabled() {
    this._ddnsEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsEnabledInput() {
    return this._ddnsEnabled.internalValue;
  }

  // ddns_hostname_block - computed: true, optional: true, required: false
  private _ddnsHostnameBlock = new IpamIpSpaceInheritanceSourcesDdnsHostnameBlockOutputReference(this, "ddns_hostname_block");
  public get ddnsHostnameBlock() {
    return this._ddnsHostnameBlock;
  }
  public putDdnsHostnameBlock(value: IpamIpSpaceInheritanceSourcesDdnsHostnameBlock) {
    this._ddnsHostnameBlock.internalValue = value;
  }
  public resetDdnsHostnameBlock() {
    this._ddnsHostnameBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsHostnameBlockInput() {
    return this._ddnsHostnameBlock.internalValue;
  }

  // ddns_ttl_percent - computed: true, optional: true, required: false
  private _ddnsTtlPercent = new IpamIpSpaceInheritanceSourcesDdnsTtlPercentOutputReference(this, "ddns_ttl_percent");
  public get ddnsTtlPercent() {
    return this._ddnsTtlPercent;
  }
  public putDdnsTtlPercent(value: IpamIpSpaceInheritanceSourcesDdnsTtlPercent) {
    this._ddnsTtlPercent.internalValue = value;
  }
  public resetDdnsTtlPercent() {
    this._ddnsTtlPercent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlPercentInput() {
    return this._ddnsTtlPercent.internalValue;
  }

  // ddns_update_block - computed: true, optional: true, required: false
  private _ddnsUpdateBlock = new IpamIpSpaceInheritanceSourcesDdnsUpdateBlockOutputReference(this, "ddns_update_block");
  public get ddnsUpdateBlock() {
    return this._ddnsUpdateBlock;
  }
  public putDdnsUpdateBlock(value: IpamIpSpaceInheritanceSourcesDdnsUpdateBlock) {
    this._ddnsUpdateBlock.internalValue = value;
  }
  public resetDdnsUpdateBlock() {
    this._ddnsUpdateBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateBlockInput() {
    return this._ddnsUpdateBlock.internalValue;
  }

  // ddns_update_on_renew - computed: true, optional: true, required: false
  private _ddnsUpdateOnRenew = new IpamIpSpaceInheritanceSourcesDdnsUpdateOnRenewOutputReference(this, "ddns_update_on_renew");
  public get ddnsUpdateOnRenew() {
    return this._ddnsUpdateOnRenew;
  }
  public putDdnsUpdateOnRenew(value: IpamIpSpaceInheritanceSourcesDdnsUpdateOnRenew) {
    this._ddnsUpdateOnRenew.internalValue = value;
  }
  public resetDdnsUpdateOnRenew() {
    this._ddnsUpdateOnRenew.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateOnRenewInput() {
    return this._ddnsUpdateOnRenew.internalValue;
  }

  // ddns_use_conflict_resolution - computed: true, optional: true, required: false
  private _ddnsUseConflictResolution = new IpamIpSpaceInheritanceSourcesDdnsUseConflictResolutionOutputReference(this, "ddns_use_conflict_resolution");
  public get ddnsUseConflictResolution() {
    return this._ddnsUseConflictResolution;
  }
  public putDdnsUseConflictResolution(value: IpamIpSpaceInheritanceSourcesDdnsUseConflictResolution) {
    this._ddnsUseConflictResolution.internalValue = value;
  }
  public resetDdnsUseConflictResolution() {
    this._ddnsUseConflictResolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUseConflictResolutionInput() {
    return this._ddnsUseConflictResolution.internalValue;
  }

  // dhcp_config - computed: true, optional: true, required: false
  private _dhcpConfig = new IpamIpSpaceInheritanceSourcesDhcpConfigOutputReference(this, "dhcp_config");
  public get dhcpConfig() {
    return this._dhcpConfig;
  }
  public putDhcpConfig(value: IpamIpSpaceInheritanceSourcesDhcpConfig) {
    this._dhcpConfig.internalValue = value;
  }
  public resetDhcpConfig() {
    this._dhcpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpConfigInput() {
    return this._dhcpConfig.internalValue;
  }

  // dhcp_options - computed: true, optional: true, required: false
  private _dhcpOptions = new IpamIpSpaceInheritanceSourcesDhcpOptionsOutputReference(this, "dhcp_options");
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: IpamIpSpaceInheritanceSourcesDhcpOptions) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // dhcp_options_v6 - computed: true, optional: true, required: false
  private _dhcpOptionsV6 = new IpamIpSpaceInheritanceSourcesDhcpOptionsV6OutputReference(this, "dhcp_options_v6");
  public get dhcpOptionsV6() {
    return this._dhcpOptionsV6;
  }
  public putDhcpOptionsV6(value: IpamIpSpaceInheritanceSourcesDhcpOptionsV6) {
    this._dhcpOptionsV6.internalValue = value;
  }
  public resetDhcpOptionsV6() {
    this._dhcpOptionsV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsV6Input() {
    return this._dhcpOptionsV6.internalValue;
  }

  // header_option_filename - computed: true, optional: true, required: false
  private _headerOptionFilename = new IpamIpSpaceInheritanceSourcesHeaderOptionFilenameOutputReference(this, "header_option_filename");
  public get headerOptionFilename() {
    return this._headerOptionFilename;
  }
  public putHeaderOptionFilename(value: IpamIpSpaceInheritanceSourcesHeaderOptionFilename) {
    this._headerOptionFilename.internalValue = value;
  }
  public resetHeaderOptionFilename() {
    this._headerOptionFilename.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionFilenameInput() {
    return this._headerOptionFilename.internalValue;
  }

  // header_option_server_address - computed: true, optional: true, required: false
  private _headerOptionServerAddress = new IpamIpSpaceInheritanceSourcesHeaderOptionServerAddressOutputReference(this, "header_option_server_address");
  public get headerOptionServerAddress() {
    return this._headerOptionServerAddress;
  }
  public putHeaderOptionServerAddress(value: IpamIpSpaceInheritanceSourcesHeaderOptionServerAddress) {
    this._headerOptionServerAddress.internalValue = value;
  }
  public resetHeaderOptionServerAddress() {
    this._headerOptionServerAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerAddressInput() {
    return this._headerOptionServerAddress.internalValue;
  }

  // header_option_server_name - computed: true, optional: true, required: false
  private _headerOptionServerName = new IpamIpSpaceInheritanceSourcesHeaderOptionServerNameOutputReference(this, "header_option_server_name");
  public get headerOptionServerName() {
    return this._headerOptionServerName;
  }
  public putHeaderOptionServerName(value: IpamIpSpaceInheritanceSourcesHeaderOptionServerName) {
    this._headerOptionServerName.internalValue = value;
  }
  public resetHeaderOptionServerName() {
    this._headerOptionServerName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerNameInput() {
    return this._headerOptionServerName.internalValue;
  }

  // hostname_rewrite_block - computed: true, optional: true, required: false
  private _hostnameRewriteBlock = new IpamIpSpaceInheritanceSourcesHostnameRewriteBlockOutputReference(this, "hostname_rewrite_block");
  public get hostnameRewriteBlock() {
    return this._hostnameRewriteBlock;
  }
  public putHostnameRewriteBlock(value: IpamIpSpaceInheritanceSourcesHostnameRewriteBlock) {
    this._hostnameRewriteBlock.internalValue = value;
  }
  public resetHostnameRewriteBlock() {
    this._hostnameRewriteBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteBlockInput() {
    return this._hostnameRewriteBlock.internalValue;
  }

  // vendor_specific_option_option_space - computed: true, optional: true, required: false
  private _vendorSpecificOptionOptionSpace = new IpamIpSpaceInheritanceSourcesVendorSpecificOptionOptionSpaceOutputReference(this, "vendor_specific_option_option_space");
  public get vendorSpecificOptionOptionSpace() {
    return this._vendorSpecificOptionOptionSpace;
  }
  public putVendorSpecificOptionOptionSpace(value: IpamIpSpaceInheritanceSourcesVendorSpecificOptionOptionSpace) {
    this._vendorSpecificOptionOptionSpace.internalValue = value;
  }
  public resetVendorSpecificOptionOptionSpace() {
    this._vendorSpecificOptionOptionSpace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorSpecificOptionOptionSpaceInput() {
    return this._vendorSpecificOptionOptionSpace.internalValue;
  }
}
export interface IpamIpSpaceThreshold {
  /**
  * Indicates whether the utilization threshold for IP addresses is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#enabled IpamIpSpace#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The high threshold value for the percentage of used IP addresses relative to the total IP addresses available in the scope of the object. Thresholds are inclusive in the comparison test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#high IpamIpSpace#high}
  */
  readonly high: number;
  /**
  * The low threshold value for the percentage of used IP addresses relative to the total IP addresses available in the scope of the object. Thresholds are inclusive in the comparison test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#low IpamIpSpace#low}
  */
  readonly low: number;
}

export function ipamIpSpaceThresholdToTerraform(struct?: IpamIpSpaceThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    high: cdktf.numberToTerraform(struct!.high),
    low: cdktf.numberToTerraform(struct!.low),
  }
}


export function ipamIpSpaceThresholdToHclTerraform(struct?: IpamIpSpaceThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    high: {
      value: cdktf.numberToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low: {
      value: cdktf.numberToHclTerraform(struct!.low),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._high = undefined;
      this._low = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._high = value.high;
      this._low = value.low;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // high - computed: true, optional: false, required: true
  private _high?: number; 
  public get high() {
    return this.getNumberAttribute('high');
  }
  public set high(value: number) {
    this._high = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: true, optional: false, required: true
  private _low?: number; 
  public get low() {
    return this.getNumberAttribute('low');
  }
  public set low(value: number) {
    this._low = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
  }
}
export interface IpamIpSpaceUtilization {
}

export function ipamIpSpaceUtilizationToTerraform(struct?: IpamIpSpaceUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamIpSpaceUtilizationToHclTerraform(struct?: IpamIpSpaceUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamIpSpaceUtilizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceUtilization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceUtilization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abandon_utilization - computed: true, optional: false, required: false
  public get abandonUtilization() {
    return this.getNumberAttribute('abandon_utilization');
  }

  // abandoned - computed: true, optional: false, required: false
  public get abandoned() {
    return this.getStringAttribute('abandoned');
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getStringAttribute('dynamic');
  }

  // free - computed: true, optional: false, required: false
  public get free() {
    return this.getStringAttribute('free');
  }

  // static - computed: true, optional: false, required: false
  public get static() {
    return this.getStringAttribute('static');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getStringAttribute('total');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getStringAttribute('used');
  }

  // utilization - computed: true, optional: false, required: false
  public get utilization() {
    return this.getNumberAttribute('utilization');
  }
}
export interface IpamIpSpaceUtilizationV6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#abandoned IpamIpSpace#abandoned}
  */
  readonly abandoned?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#dynamic IpamIpSpace#dynamic}
  */
  readonly dynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#static IpamIpSpace#static}
  */
  readonly static?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#total IpamIpSpace#total}
  */
  readonly total?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#used IpamIpSpace#used}
  */
  readonly used?: string;
}

export function ipamIpSpaceUtilizationV6ToTerraform(struct?: IpamIpSpaceUtilizationV6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abandoned: cdktf.stringToTerraform(struct!.abandoned),
    dynamic: cdktf.stringToTerraform(struct!.dynamic),
    static: cdktf.stringToTerraform(struct!.static),
    total: cdktf.stringToTerraform(struct!.total),
    used: cdktf.stringToTerraform(struct!.used),
  }
}


export function ipamIpSpaceUtilizationV6ToHclTerraform(struct?: IpamIpSpaceUtilizationV6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abandoned: {
      value: cdktf.stringToHclTerraform(struct!.abandoned),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic: {
      value: cdktf.stringToHclTerraform(struct!.dynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static: {
      value: cdktf.stringToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total: {
      value: cdktf.stringToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    used: {
      value: cdktf.stringToHclTerraform(struct!.used),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpSpaceUtilizationV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpSpaceUtilizationV6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abandoned !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandoned = this._abandoned;
    }
    if (this._dynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._used !== undefined) {
      hasAnyValues = true;
      internalValueResult.used = this._used;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpSpaceUtilizationV6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abandoned = undefined;
      this._dynamic = undefined;
      this._static = undefined;
      this._total = undefined;
      this._used = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abandoned = value.abandoned;
      this._dynamic = value.dynamic;
      this._static = value.static;
      this._total = value.total;
      this._used = value.used;
    }
  }

  // abandoned - computed: true, optional: true, required: false
  private _abandoned?: string; 
  public get abandoned() {
    return this.getStringAttribute('abandoned');
  }
  public set abandoned(value: string) {
    this._abandoned = value;
  }
  public resetAbandoned() {
    this._abandoned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedInput() {
    return this._abandoned;
  }

  // dynamic - computed: true, optional: true, required: false
  private _dynamic?: string; 
  public get dynamic() {
    return this.getStringAttribute('dynamic');
  }
  public set dynamic(value: string) {
    this._dynamic = value;
  }
  public resetDynamic() {
    this._dynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic;
  }

  // static - computed: true, optional: true, required: false
  private _static?: string; 
  public get static() {
    return this.getStringAttribute('static');
  }
  public set static(value: string) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // total - computed: true, optional: true, required: false
  private _total?: string; 
  public get total() {
    return this.getStringAttribute('total');
  }
  public set total(value: string) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // used - computed: true, optional: true, required: false
  private _used?: string; 
  public get used() {
    return this.getStringAttribute('used');
  }
  public set used(value: string) {
    this._used = value;
  }
  public resetUsed() {
    this._used = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedInput() {
    return this._used;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space bloxone_ipam_ip_space}
*/
export class IpamIpSpace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_ipam_ip_space";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpamIpSpace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpamIpSpace to import
  * @param importFromId The id of the existing IpamIpSpace that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpamIpSpace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_ipam_ip_space", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_ip_space bloxone_ipam_ip_space} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpamIpSpaceConfig
  */
  public constructor(scope: Construct, id: string, config: IpamIpSpaceConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_ipam_ip_space',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3',
        providerVersionConstraint: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asmConfig.internalValue = config.asmConfig;
    this._comment = config.comment;
    this._compartmentId = config.compartmentId;
    this._ddnsClientUpdate = config.ddnsClientUpdate;
    this._ddnsConflictResolutionMode = config.ddnsConflictResolutionMode;
    this._ddnsDomain = config.ddnsDomain;
    this._ddnsGenerateName = config.ddnsGenerateName;
    this._ddnsGeneratedPrefix = config.ddnsGeneratedPrefix;
    this._ddnsSendUpdates = config.ddnsSendUpdates;
    this._ddnsTtlPercent = config.ddnsTtlPercent;
    this._ddnsUpdateOnRenew = config.ddnsUpdateOnRenew;
    this._ddnsUseConflictResolution = config.ddnsUseConflictResolution;
    this._defaultRealms = config.defaultRealms;
    this._dhcpConfig.internalValue = config.dhcpConfig;
    this._dhcpOptions.internalValue = config.dhcpOptions;
    this._dhcpOptionsV6.internalValue = config.dhcpOptionsV6;
    this._headerOptionFilename = config.headerOptionFilename;
    this._headerOptionServerAddress = config.headerOptionServerAddress;
    this._headerOptionServerName = config.headerOptionServerName;
    this._hostnameRewriteChar = config.hostnameRewriteChar;
    this._hostnameRewriteEnabled = config.hostnameRewriteEnabled;
    this._hostnameRewriteRegex = config.hostnameRewriteRegex;
    this._inheritanceSources.internalValue = config.inheritanceSources;
    this._name = config.name;
    this._tags = config.tags;
    this._vendorSpecificOptionOptionSpace = config.vendorSpecificOptionOptionSpace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asm_config - computed: true, optional: true, required: false
  private _asmConfig = new IpamIpSpaceAsmConfigOutputReference(this, "asm_config");
  public get asmConfig() {
    return this._asmConfig;
  }
  public putAsmConfig(value: IpamIpSpaceAsmConfig) {
    this._asmConfig.internalValue = value;
  }
  public resetAsmConfig() {
    this._asmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmConfigInput() {
    return this._asmConfig.internalValue;
  }

  // asm_scope_flag - computed: true, optional: false, required: false
  public get asmScopeFlag() {
    return this.getNumberAttribute('asm_scope_flag');
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // ddns_client_update - computed: true, optional: true, required: false
  private _ddnsClientUpdate?: string; 
  public get ddnsClientUpdate() {
    return this.getStringAttribute('ddns_client_update');
  }
  public set ddnsClientUpdate(value: string) {
    this._ddnsClientUpdate = value;
  }
  public resetDdnsClientUpdate() {
    this._ddnsClientUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsClientUpdateInput() {
    return this._ddnsClientUpdate;
  }

  // ddns_conflict_resolution_mode - computed: true, optional: true, required: false
  private _ddnsConflictResolutionMode?: string; 
  public get ddnsConflictResolutionMode() {
    return this.getStringAttribute('ddns_conflict_resolution_mode');
  }
  public set ddnsConflictResolutionMode(value: string) {
    this._ddnsConflictResolutionMode = value;
  }
  public resetDdnsConflictResolutionMode() {
    this._ddnsConflictResolutionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsConflictResolutionModeInput() {
    return this._ddnsConflictResolutionMode;
  }

  // ddns_domain - computed: true, optional: true, required: false
  private _ddnsDomain?: string; 
  public get ddnsDomain() {
    return this.getStringAttribute('ddns_domain');
  }
  public set ddnsDomain(value: string) {
    this._ddnsDomain = value;
  }
  public resetDdnsDomain() {
    this._ddnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsDomainInput() {
    return this._ddnsDomain;
  }

  // ddns_generate_name - computed: true, optional: true, required: false
  private _ddnsGenerateName?: boolean | cdktf.IResolvable; 
  public get ddnsGenerateName() {
    return this.getBooleanAttribute('ddns_generate_name');
  }
  public set ddnsGenerateName(value: boolean | cdktf.IResolvable) {
    this._ddnsGenerateName = value;
  }
  public resetDdnsGenerateName() {
    this._ddnsGenerateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsGenerateNameInput() {
    return this._ddnsGenerateName;
  }

  // ddns_generated_prefix - computed: true, optional: true, required: false
  private _ddnsGeneratedPrefix?: string; 
  public get ddnsGeneratedPrefix() {
    return this.getStringAttribute('ddns_generated_prefix');
  }
  public set ddnsGeneratedPrefix(value: string) {
    this._ddnsGeneratedPrefix = value;
  }
  public resetDdnsGeneratedPrefix() {
    this._ddnsGeneratedPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsGeneratedPrefixInput() {
    return this._ddnsGeneratedPrefix;
  }

  // ddns_send_updates - computed: true, optional: true, required: false
  private _ddnsSendUpdates?: boolean | cdktf.IResolvable; 
  public get ddnsSendUpdates() {
    return this.getBooleanAttribute('ddns_send_updates');
  }
  public set ddnsSendUpdates(value: boolean | cdktf.IResolvable) {
    this._ddnsSendUpdates = value;
  }
  public resetDdnsSendUpdates() {
    this._ddnsSendUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsSendUpdatesInput() {
    return this._ddnsSendUpdates;
  }

  // ddns_ttl_percent - computed: false, optional: true, required: false
  private _ddnsTtlPercent?: number; 
  public get ddnsTtlPercent() {
    return this.getNumberAttribute('ddns_ttl_percent');
  }
  public set ddnsTtlPercent(value: number) {
    this._ddnsTtlPercent = value;
  }
  public resetDdnsTtlPercent() {
    this._ddnsTtlPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlPercentInput() {
    return this._ddnsTtlPercent;
  }

  // ddns_update_on_renew - computed: true, optional: true, required: false
  private _ddnsUpdateOnRenew?: boolean | cdktf.IResolvable; 
  public get ddnsUpdateOnRenew() {
    return this.getBooleanAttribute('ddns_update_on_renew');
  }
  public set ddnsUpdateOnRenew(value: boolean | cdktf.IResolvable) {
    this._ddnsUpdateOnRenew = value;
  }
  public resetDdnsUpdateOnRenew() {
    this._ddnsUpdateOnRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateOnRenewInput() {
    return this._ddnsUpdateOnRenew;
  }

  // ddns_use_conflict_resolution - computed: true, optional: true, required: false
  private _ddnsUseConflictResolution?: boolean | cdktf.IResolvable; 
  public get ddnsUseConflictResolution() {
    return this.getBooleanAttribute('ddns_use_conflict_resolution');
  }
  public set ddnsUseConflictResolution(value: boolean | cdktf.IResolvable) {
    this._ddnsUseConflictResolution = value;
  }
  public resetDdnsUseConflictResolution() {
    this._ddnsUseConflictResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUseConflictResolutionInput() {
    return this._ddnsUseConflictResolution;
  }

  // default_realms - computed: true, optional: true, required: false
  private _defaultRealms?: string[]; 
  public get defaultRealms() {
    return this.getListAttribute('default_realms');
  }
  public set defaultRealms(value: string[]) {
    this._defaultRealms = value;
  }
  public resetDefaultRealms() {
    this._defaultRealms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRealmsInput() {
    return this._defaultRealms;
  }

  // dhcp_config - computed: true, optional: true, required: false
  private _dhcpConfig = new IpamIpSpaceDhcpConfigOutputReference(this, "dhcp_config");
  public get dhcpConfig() {
    return this._dhcpConfig;
  }
  public putDhcpConfig(value: IpamIpSpaceDhcpConfig) {
    this._dhcpConfig.internalValue = value;
  }
  public resetDhcpConfig() {
    this._dhcpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpConfigInput() {
    return this._dhcpConfig.internalValue;
  }

  // dhcp_options - computed: false, optional: true, required: false
  private _dhcpOptions = new IpamIpSpaceDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: IpamIpSpaceDhcpOptions[] | cdktf.IResolvable) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // dhcp_options_v6 - computed: false, optional: true, required: false
  private _dhcpOptionsV6 = new IpamIpSpaceDhcpOptionsV6List(this, "dhcp_options_v6", false);
  public get dhcpOptionsV6() {
    return this._dhcpOptionsV6;
  }
  public putDhcpOptionsV6(value: IpamIpSpaceDhcpOptionsV6[] | cdktf.IResolvable) {
    this._dhcpOptionsV6.internalValue = value;
  }
  public resetDhcpOptionsV6() {
    this._dhcpOptionsV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsV6Input() {
    return this._dhcpOptionsV6.internalValue;
  }

  // header_option_filename - computed: true, optional: true, required: false
  private _headerOptionFilename?: string; 
  public get headerOptionFilename() {
    return this.getStringAttribute('header_option_filename');
  }
  public set headerOptionFilename(value: string) {
    this._headerOptionFilename = value;
  }
  public resetHeaderOptionFilename() {
    this._headerOptionFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionFilenameInput() {
    return this._headerOptionFilename;
  }

  // header_option_server_address - computed: true, optional: true, required: false
  private _headerOptionServerAddress?: string; 
  public get headerOptionServerAddress() {
    return this.getStringAttribute('header_option_server_address');
  }
  public set headerOptionServerAddress(value: string) {
    this._headerOptionServerAddress = value;
  }
  public resetHeaderOptionServerAddress() {
    this._headerOptionServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerAddressInput() {
    return this._headerOptionServerAddress;
  }

  // header_option_server_name - computed: true, optional: true, required: false
  private _headerOptionServerName?: string; 
  public get headerOptionServerName() {
    return this.getStringAttribute('header_option_server_name');
  }
  public set headerOptionServerName(value: string) {
    this._headerOptionServerName = value;
  }
  public resetHeaderOptionServerName() {
    this._headerOptionServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerNameInput() {
    return this._headerOptionServerName;
  }

  // hostname_rewrite_char - computed: true, optional: true, required: false
  private _hostnameRewriteChar?: string; 
  public get hostnameRewriteChar() {
    return this.getStringAttribute('hostname_rewrite_char');
  }
  public set hostnameRewriteChar(value: string) {
    this._hostnameRewriteChar = value;
  }
  public resetHostnameRewriteChar() {
    this._hostnameRewriteChar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteCharInput() {
    return this._hostnameRewriteChar;
  }

  // hostname_rewrite_enabled - computed: true, optional: true, required: false
  private _hostnameRewriteEnabled?: boolean | cdktf.IResolvable; 
  public get hostnameRewriteEnabled() {
    return this.getBooleanAttribute('hostname_rewrite_enabled');
  }
  public set hostnameRewriteEnabled(value: boolean | cdktf.IResolvable) {
    this._hostnameRewriteEnabled = value;
  }
  public resetHostnameRewriteEnabled() {
    this._hostnameRewriteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteEnabledInput() {
    return this._hostnameRewriteEnabled;
  }

  // hostname_rewrite_regex - computed: true, optional: true, required: false
  private _hostnameRewriteRegex?: string; 
  public get hostnameRewriteRegex() {
    return this.getStringAttribute('hostname_rewrite_regex');
  }
  public set hostnameRewriteRegex(value: string) {
    this._hostnameRewriteRegex = value;
  }
  public resetHostnameRewriteRegex() {
    this._hostnameRewriteRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteRegexInput() {
    return this._hostnameRewriteRegex;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inheritance_sources - computed: true, optional: true, required: false
  private _inheritanceSources = new IpamIpSpaceInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: IpamIpSpaceInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
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

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // threshold - computed: true, optional: false, required: false
  private _threshold = new IpamIpSpaceThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // utilization - computed: true, optional: false, required: false
  private _utilization = new IpamIpSpaceUtilizationOutputReference(this, "utilization");
  public get utilization() {
    return this._utilization;
  }

  // utilization_v6 - computed: true, optional: false, required: false
  private _utilizationV6 = new IpamIpSpaceUtilizationV6OutputReference(this, "utilization_v6");
  public get utilizationV6() {
    return this._utilizationV6;
  }

  // vendor_specific_option_option_space - computed: false, optional: true, required: false
  private _vendorSpecificOptionOptionSpace?: string; 
  public get vendorSpecificOptionOptionSpace() {
    return this.getStringAttribute('vendor_specific_option_option_space');
  }
  public set vendorSpecificOptionOptionSpace(value: string) {
    this._vendorSpecificOptionOptionSpace = value;
  }
  public resetVendorSpecificOptionOptionSpace() {
    this._vendorSpecificOptionOptionSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorSpecificOptionOptionSpaceInput() {
    return this._vendorSpecificOptionOptionSpace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asm_config: ipamIpSpaceAsmConfigToTerraform(this._asmConfig.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      ddns_client_update: cdktf.stringToTerraform(this._ddnsClientUpdate),
      ddns_conflict_resolution_mode: cdktf.stringToTerraform(this._ddnsConflictResolutionMode),
      ddns_domain: cdktf.stringToTerraform(this._ddnsDomain),
      ddns_generate_name: cdktf.booleanToTerraform(this._ddnsGenerateName),
      ddns_generated_prefix: cdktf.stringToTerraform(this._ddnsGeneratedPrefix),
      ddns_send_updates: cdktf.booleanToTerraform(this._ddnsSendUpdates),
      ddns_ttl_percent: cdktf.numberToTerraform(this._ddnsTtlPercent),
      ddns_update_on_renew: cdktf.booleanToTerraform(this._ddnsUpdateOnRenew),
      ddns_use_conflict_resolution: cdktf.booleanToTerraform(this._ddnsUseConflictResolution),
      default_realms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultRealms),
      dhcp_config: ipamIpSpaceDhcpConfigToTerraform(this._dhcpConfig.internalValue),
      dhcp_options: cdktf.listMapper(ipamIpSpaceDhcpOptionsToTerraform, false)(this._dhcpOptions.internalValue),
      dhcp_options_v6: cdktf.listMapper(ipamIpSpaceDhcpOptionsV6ToTerraform, false)(this._dhcpOptionsV6.internalValue),
      header_option_filename: cdktf.stringToTerraform(this._headerOptionFilename),
      header_option_server_address: cdktf.stringToTerraform(this._headerOptionServerAddress),
      header_option_server_name: cdktf.stringToTerraform(this._headerOptionServerName),
      hostname_rewrite_char: cdktf.stringToTerraform(this._hostnameRewriteChar),
      hostname_rewrite_enabled: cdktf.booleanToTerraform(this._hostnameRewriteEnabled),
      hostname_rewrite_regex: cdktf.stringToTerraform(this._hostnameRewriteRegex),
      inheritance_sources: ipamIpSpaceInheritanceSourcesToTerraform(this._inheritanceSources.internalValue),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vendor_specific_option_option_space: cdktf.stringToTerraform(this._vendorSpecificOptionOptionSpace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asm_config: {
        value: ipamIpSpaceAsmConfigToHclTerraform(this._asmConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamIpSpaceAsmConfig",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_client_update: {
        value: cdktf.stringToHclTerraform(this._ddnsClientUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_conflict_resolution_mode: {
        value: cdktf.stringToHclTerraform(this._ddnsConflictResolutionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_domain: {
        value: cdktf.stringToHclTerraform(this._ddnsDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_generate_name: {
        value: cdktf.booleanToHclTerraform(this._ddnsGenerateName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_generated_prefix: {
        value: cdktf.stringToHclTerraform(this._ddnsGeneratedPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_send_updates: {
        value: cdktf.booleanToHclTerraform(this._ddnsSendUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_ttl_percent: {
        value: cdktf.numberToHclTerraform(this._ddnsTtlPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddns_update_on_renew: {
        value: cdktf.booleanToHclTerraform(this._ddnsUpdateOnRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_use_conflict_resolution: {
        value: cdktf.booleanToHclTerraform(this._ddnsUseConflictResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_realms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultRealms),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dhcp_config: {
        value: ipamIpSpaceDhcpConfigToHclTerraform(this._dhcpConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamIpSpaceDhcpConfig",
      },
      dhcp_options: {
        value: cdktf.listMapperHcl(ipamIpSpaceDhcpOptionsToHclTerraform, false)(this._dhcpOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamIpSpaceDhcpOptionsList",
      },
      dhcp_options_v6: {
        value: cdktf.listMapperHcl(ipamIpSpaceDhcpOptionsV6ToHclTerraform, false)(this._dhcpOptionsV6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamIpSpaceDhcpOptionsV6List",
      },
      header_option_filename: {
        value: cdktf.stringToHclTerraform(this._headerOptionFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_option_server_address: {
        value: cdktf.stringToHclTerraform(this._headerOptionServerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_option_server_name: {
        value: cdktf.stringToHclTerraform(this._headerOptionServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname_rewrite_char: {
        value: cdktf.stringToHclTerraform(this._hostnameRewriteChar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname_rewrite_enabled: {
        value: cdktf.booleanToHclTerraform(this._hostnameRewriteEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname_rewrite_regex: {
        value: cdktf.stringToHclTerraform(this._hostnameRewriteRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inheritance_sources: {
        value: ipamIpSpaceInheritanceSourcesToHclTerraform(this._inheritanceSources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamIpSpaceInheritanceSources",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vendor_specific_option_option_space: {
        value: cdktf.stringToHclTerraform(this._vendorSpecificOptionOptionSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
