// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpamAddressBlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * The address field in form 'a.b.c.d'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#address IpamAddressBlock#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#asm_config IpamAddressBlock#asm_config}
  */
  readonly asmConfig?: IpamAddressBlockAsmConfig;
  /**
  * The CIDR of the address block. This is required, if _address_ does not specify it in its input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#cidr IpamAddressBlock#cidr}
  */
  readonly cidr: number;
  /**
  * The description for the address block. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#comment IpamAddressBlock#comment}
  */
  readonly comment?: string;
  /**
  * The compartment associated with the object. If no compartment is associated with the object, the value defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#compartment_id IpamAddressBlock#compartment_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_client_update IpamAddressBlock#ddns_client_update}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_conflict_resolution_mode IpamAddressBlock#ddns_conflict_resolution_mode}
  */
  readonly ddnsConflictResolutionMode?: string;
  /**
  * The domain suffix for DDNS updates. FQDN, may be empty.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_domain IpamAddressBlock#ddns_domain}
  */
  readonly ddnsDomain?: string;
  /**
  * Indicates if DDNS needs to generate a hostname when not supplied by the client.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_generate_name IpamAddressBlock#ddns_generate_name}
  */
  readonly ddnsGenerateName?: boolean | cdktf.IResolvable;
  /**
  * The prefix used in the generation of an FQDN.  When generating a name, DHCP server will construct the name in the format: [ddns-generated-prefix]-[address-text].[ddns-qualifying-suffix]. where address-text is simply the lease IP address converted to a hyphenated string.  Defaults to "myhost".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_generated_prefix IpamAddressBlock#ddns_generated_prefix}
  */
  readonly ddnsGeneratedPrefix?: string;
  /**
  * Determines if DDNS updates are enabled at the address block level. Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_send_updates IpamAddressBlock#ddns_send_updates}
  */
  readonly ddnsSendUpdates?: boolean | cdktf.IResolvable;
  /**
  * DDNS TTL value - to be calculated as a simple percentage of the lease's lifetime, using the parameter's value as the percentage. It is specified as a percentage (e.g. 25, 75). Defaults to unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_ttl_percent IpamAddressBlock#ddns_ttl_percent}
  */
  readonly ddnsTtlPercent?: number;
  /**
  * Instructs the DHCP server to always update the DNS information when a lease is renewed even if its DNS information has not changed.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_update_on_renew IpamAddressBlock#ddns_update_on_renew}
  */
  readonly ddnsUpdateOnRenew?: boolean | cdktf.IResolvable;
  /**
  * When true, DHCP server will apply conflict resolution, as described in RFC 4703, when attempting to fulfill the update request.  When false, DHCP server will simply attempt to update the DNS entries per the request, regardless of whether or not they conflict with existing entries owned by other DHCP4 clients.  Defaults to _true_. Can be set to true only when ddns_conflict_resolution_mode is check_with_dhcid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_use_conflict_resolution IpamAddressBlock#ddns_use_conflict_resolution}
  */
  readonly ddnsUseConflictResolution?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#dhcp_config IpamAddressBlock#dhcp_config}
  */
  readonly dhcpConfig?: IpamAddressBlockDhcpConfig;
  /**
  * The list of DHCP options for the address block. May be either a specific option or a group of options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#dhcp_options IpamAddressBlock#dhcp_options}
  */
  readonly dhcpOptions?: IpamAddressBlockDhcpOptions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#dhcp_utilization IpamAddressBlock#dhcp_utilization}
  */
  readonly dhcpUtilization?: IpamAddressBlockDhcpUtilization;
  /**
  * The discovery attributes for this address block in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#discovery_attrs IpamAddressBlock#discovery_attrs}
  */
  readonly discoveryAttrs?: { [key: string]: string };
  /**
  * The discovery metadata for this address block in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#discovery_metadata IpamAddressBlock#discovery_metadata}
  */
  readonly discoveryMetadata?: { [key: string]: string };
  /**
  * The external keys (source key) for this address block in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#external_keys IpamAddressBlock#external_keys}
  */
  readonly externalKeys?: { [key: string]: string };
  /**
  * Federated realms to which this address block belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#federated_realms IpamAddressBlock#federated_realms}
  */
  readonly federatedRealms?: string[];
  /**
  * The configuration for header option filename field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#header_option_filename IpamAddressBlock#header_option_filename}
  */
  readonly headerOptionFilename?: string;
  /**
  * The configuration for header option server address field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#header_option_server_address IpamAddressBlock#header_option_server_address}
  */
  readonly headerOptionServerAddress?: string;
  /**
  * The configuration for header option server name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#header_option_server_name IpamAddressBlock#header_option_server_name}
  */
  readonly headerOptionServerName?: string;
  /**
  * The character to replace non-matching characters with, when hostname rewrite is enabled.  Any single ASCII character or no character if the invalid characters should be removed without replacement.  Defaults to "-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#hostname_rewrite_char IpamAddressBlock#hostname_rewrite_char}
  */
  readonly hostnameRewriteChar?: string;
  /**
  * Indicates if client supplied hostnames will be rewritten prior to DDNS update by replacing every character that does not match _hostname_rewrite_regex_ by _hostname_rewrite_char_.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#hostname_rewrite_enabled IpamAddressBlock#hostname_rewrite_enabled}
  */
  readonly hostnameRewriteEnabled?: boolean | cdktf.IResolvable;
  /**
  * The regex bracket expression to match valid characters.  Must begin with "[" and end with "]" and be a compilable POSIX regex.  Defaults to "[^a-zA-Z0-9_.]".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#hostname_rewrite_regex IpamAddressBlock#hostname_rewrite_regex}
  */
  readonly hostnameRewriteRegex?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#inheritance_parent IpamAddressBlock#inheritance_parent}
  */
  readonly inheritanceParent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#inheritance_sources IpamAddressBlock#inheritance_sources}
  */
  readonly inheritanceSources?: IpamAddressBlockInheritanceSources;
  /**
  * The name of the address block. May contain 1 to 256 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#name IpamAddressBlock#name}
  */
  readonly name?: string;
  /**
  * The resource identifier for the address block where the next available address block should be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#next_available_id IpamAddressBlock#next_available_id}
  */
  readonly nextAvailableId?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#space IpamAddressBlock#space}
  */
  readonly space: string;
  /**
  * The tags for the address block in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#tags IpamAddressBlock#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface IpamAddressBlockAsmConfig {
  /**
  * ASM shows the number of addresses forecast to be used _forecast_period_ days in the future, if it is greater than _asm_threshold_ percent * _dhcp_total_ (see _dhcp_utilization_) then the subnet is flagged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#asm_threshold IpamAddressBlock#asm_threshold}
  */
  readonly asmThreshold?: number;
  /**
  * Indicates if Automated Scope Management is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#enable IpamAddressBlock#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Indicates if ASM should send notifications to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#enable_notification IpamAddressBlock#enable_notification}
  */
  readonly enableNotification?: boolean | cdktf.IResolvable;
  /**
  * The forecast period in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#forecast_period IpamAddressBlock#forecast_period}
  */
  readonly forecastPeriod?: number;
  /**
  * Indicates the growth in the number or percentage of IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#growth_factor IpamAddressBlock#growth_factor}
  */
  readonly growthFactor?: number;
  /**
  * The type of factor to use: _percent_ or _count_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#growth_type IpamAddressBlock#growth_type}
  */
  readonly growthType?: string;
  /**
  * The minimum amount of history needed before ASM can run on this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#history IpamAddressBlock#history}
  */
  readonly history?: number;
  /**
  * The minimum size of range needed for ASM to run on this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#min_total IpamAddressBlock#min_total}
  */
  readonly minTotal?: number;
  /**
  * The minimum percentage of addresses that must be available outside of the DHCP ranges and fixed addresses when making a suggested change..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#min_unused IpamAddressBlock#min_unused}
  */
  readonly minUnused?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#reenable_date IpamAddressBlock#reenable_date}
  */
  readonly reenableDate?: string;
}

export function ipamAddressBlockAsmConfigToTerraform(struct?: IpamAddressBlockAsmConfig | cdktf.IResolvable): any {
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


export function ipamAddressBlockAsmConfigToHclTerraform(struct?: IpamAddressBlockAsmConfig | cdktf.IResolvable): any {
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

export class IpamAddressBlockAsmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockAsmConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockAsmConfig | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockDhcpConfigIgnoreListStruct {
  /**
  * Type of ignore matching: client to ignore by client identifier (client hex or client text) or hardware to ignore by hardware identifier (MAC address). It can have one of the following values:
  *   * _client_hex_
  *   * _client_text_
  *   * _hardware_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#type IpamAddressBlock#type}
  */
  readonly type: string;
  /**
  * Value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#value IpamAddressBlock#value}
  */
  readonly value: string;
}

export function ipamAddressBlockDhcpConfigIgnoreListStructToTerraform(struct?: IpamAddressBlockDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ipamAddressBlockDhcpConfigIgnoreListStructToHclTerraform(struct?: IpamAddressBlockDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
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

export class IpamAddressBlockDhcpConfigIgnoreListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamAddressBlockDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined) {
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

export class IpamAddressBlockDhcpConfigIgnoreListStructList extends cdktf.ComplexList {
  public internalValue? : IpamAddressBlockDhcpConfigIgnoreListStruct[] | cdktf.IResolvable

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
  public get(index: number): IpamAddressBlockDhcpConfigIgnoreListStructOutputReference {
    return new IpamAddressBlockDhcpConfigIgnoreListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamAddressBlockDhcpConfig {
  /**
  * Disable to allow leases only for known IPv4 clients, those for which a fixed address is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#allow_unknown IpamAddressBlock#allow_unknown}
  */
  readonly allowUnknown?: boolean | cdktf.IResolvable;
  /**
  * Disable to allow leases only for known IPV6 clients, those for which a fixed address is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#allow_unknown_v6 IpamAddressBlock#allow_unknown_v6}
  */
  readonly allowUnknownV6?: boolean | cdktf.IResolvable;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#filters IpamAddressBlock#filters}
  */
  readonly filters?: string[];
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#filters_large_selection IpamAddressBlock#filters_large_selection}
  */
  readonly filtersLargeSelection?: string[];
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#filters_v6 IpamAddressBlock#filters_v6}
  */
  readonly filtersV6?: string[];
  /**
  * Enable to ignore the client UID when issuing a DHCP lease. Use this option to prevent assigning two IP addresses for a client which does not have a UID during one phase of PXE boot but acquires one for the other phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ignore_client_uid IpamAddressBlock#ignore_client_uid}
  */
  readonly ignoreClientUid?: boolean | cdktf.IResolvable;
  /**
  * The list of clients to ignore requests from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ignore_list IpamAddressBlock#ignore_list}
  */
  readonly ignoreList?: IpamAddressBlockDhcpConfigIgnoreListStruct[] | cdktf.IResolvable;
  /**
  * The lease duration in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#lease_time IpamAddressBlock#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * The lease duration in seconds for IPV6 clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#lease_time_v6 IpamAddressBlock#lease_time_v6}
  */
  readonly leaseTimeV6?: number;
}

export function ipamAddressBlockDhcpConfigToTerraform(struct?: IpamAddressBlockDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_unknown: cdktf.booleanToTerraform(struct!.allowUnknown),
    allow_unknown_v6: cdktf.booleanToTerraform(struct!.allowUnknownV6),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    filters_large_selection: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filtersLargeSelection),
    filters_v6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filtersV6),
    ignore_client_uid: cdktf.booleanToTerraform(struct!.ignoreClientUid),
    ignore_list: cdktf.listMapper(ipamAddressBlockDhcpConfigIgnoreListStructToTerraform, false)(struct!.ignoreList),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    lease_time_v6: cdktf.numberToTerraform(struct!.leaseTimeV6),
  }
}


export function ipamAddressBlockDhcpConfigToHclTerraform(struct?: IpamAddressBlockDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: cdktf.listMapperHcl(ipamAddressBlockDhcpConfigIgnoreListStructToHclTerraform, false)(struct!.ignoreList),
      isBlock: true,
      type: "list",
      storageClassType: "IpamAddressBlockDhcpConfigIgnoreListStructList",
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

export class IpamAddressBlockDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockDhcpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknown = this._allowUnknown;
    }
    if (this._allowUnknownV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknownV6 = this._allowUnknownV6;
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

  public set internalValue(value: IpamAddressBlockDhcpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowUnknown = undefined;
      this._allowUnknownV6 = undefined;
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
      this._allowUnknown = value.allowUnknown;
      this._allowUnknownV6 = value.allowUnknownV6;
      this._filters = value.filters;
      this._filtersLargeSelection = value.filtersLargeSelection;
      this._filtersV6 = value.filtersV6;
      this._ignoreClientUid = value.ignoreClientUid;
      this._ignoreList.internalValue = value.ignoreList;
      this._leaseTime = value.leaseTime;
      this._leaseTimeV6 = value.leaseTimeV6;
    }
  }

  // abandoned_reclaim_time - computed: true, optional: false, required: false
  public get abandonedReclaimTime() {
    return this.getNumberAttribute('abandoned_reclaim_time');
  }

  // abandoned_reclaim_time_v6 - computed: true, optional: false, required: false
  public get abandonedReclaimTimeV6() {
    return this.getNumberAttribute('abandoned_reclaim_time_v6');
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

  // echo_client_id - computed: true, optional: false, required: false
  public get echoClientId() {
    return this.getBooleanAttribute('echo_client_id');
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
  private _ignoreList = new IpamAddressBlockDhcpConfigIgnoreListStructList(this, "ignore_list", false);
  public get ignoreList() {
    return this._ignoreList;
  }
  public putIgnoreList(value: IpamAddressBlockDhcpConfigIgnoreListStruct[] | cdktf.IResolvable) {
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
export interface IpamAddressBlockDhcpOptions {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#group IpamAddressBlock#group}
  */
  readonly group?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#option_code IpamAddressBlock#option_code}
  */
  readonly optionCode?: string;
  /**
  * The option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#option_value IpamAddressBlock#option_value}
  */
  readonly optionValue?: string;
  /**
  * The type of item. Valid values are:
  *   * _group_
  *   * _option_
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#type IpamAddressBlock#type}
  */
  readonly type?: string;
}

export function ipamAddressBlockDhcpOptionsToTerraform(struct?: IpamAddressBlockDhcpOptions | cdktf.IResolvable): any {
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


export function ipamAddressBlockDhcpOptionsToHclTerraform(struct?: IpamAddressBlockDhcpOptions | cdktf.IResolvable): any {
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

export class IpamAddressBlockDhcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamAddressBlockDhcpOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockDhcpOptions | cdktf.IResolvable | undefined) {
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

export class IpamAddressBlockDhcpOptionsList extends cdktf.ComplexList {
  public internalValue? : IpamAddressBlockDhcpOptions[] | cdktf.IResolvable

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
  public get(index: number): IpamAddressBlockDhcpOptionsOutputReference {
    return new IpamAddressBlockDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamAddressBlockDhcpUtilization {
}

export function ipamAddressBlockDhcpUtilizationToTerraform(struct?: IpamAddressBlockDhcpUtilization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamAddressBlockDhcpUtilizationToHclTerraform(struct?: IpamAddressBlockDhcpUtilization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamAddressBlockDhcpUtilizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockDhcpUtilization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamAddressBlockDhcpUtilization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // dhcp_free - computed: true, optional: false, required: false
  public get dhcpFree() {
    return this.getStringAttribute('dhcp_free');
  }

  // dhcp_total - computed: true, optional: false, required: false
  public get dhcpTotal() {
    return this.getStringAttribute('dhcp_total');
  }

  // dhcp_used - computed: true, optional: false, required: false
  public get dhcpUsed() {
    return this.getStringAttribute('dhcp_used');
  }

  // dhcp_utilization - computed: true, optional: false, required: false
  public get dhcpUtilization() {
    return this.getNumberAttribute('dhcp_utilization');
  }
}
export interface IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValue {
}

export function ipamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValueToTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValueToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValue | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlockToTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlockToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlock | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlock | cdktf.IResolvable | undefined) {
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
  private _value = new IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValue {
}

export function ipamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValueToTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValueToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValue | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockToTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlock | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlock | cdktf.IResolvable | undefined) {
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
  private _value = new IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface IpamAddressBlockInheritanceSourcesAsmConfigAsmThreshold {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesAsmConfigAsmThresholdToTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigAsmThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesAsmConfigAsmThresholdToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigAsmThreshold | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesAsmConfigAsmThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesAsmConfigAsmThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesAsmConfigAsmThreshold | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesAsmConfigForecastPeriod {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesAsmConfigForecastPeriodToTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigForecastPeriod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesAsmConfigForecastPeriodToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigForecastPeriod | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesAsmConfigForecastPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesAsmConfigForecastPeriod | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesAsmConfigForecastPeriod | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesAsmConfigHistory {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesAsmConfigHistoryToTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigHistory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesAsmConfigHistoryToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigHistory | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesAsmConfigHistoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesAsmConfigHistory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesAsmConfigHistory | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesAsmConfigMinTotal {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesAsmConfigMinTotalToTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigMinTotal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesAsmConfigMinTotalToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigMinTotal | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesAsmConfigMinTotalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesAsmConfigMinTotal | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesAsmConfigMinTotal | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesAsmConfigMinUnused {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesAsmConfigMinUnusedToTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigMinUnused | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesAsmConfigMinUnusedToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfigMinUnused | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesAsmConfigMinUnusedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesAsmConfigMinUnused | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesAsmConfigMinUnused | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesAsmConfig {
  /**
  * The block of ASM fields: _enable_, _enable_notification_, _reenable_date_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#asm_enable_block IpamAddressBlock#asm_enable_block}
  */
  readonly asmEnableBlock?: IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlock;
  /**
  * The block of ASM fields: _growth_factor_, _growth_type_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#asm_growth_block IpamAddressBlock#asm_growth_block}
  */
  readonly asmGrowthBlock?: IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlock;
  /**
  * ASM shows the number of addresses forecast to be used _forecast_period_ days in the future, if it is greater than _asm_threshold_percent_ * _dhcp_total_ (see _dhcp_utilization_) then the subnet is flagged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#asm_threshold IpamAddressBlock#asm_threshold}
  */
  readonly asmThreshold?: IpamAddressBlockInheritanceSourcesAsmConfigAsmThreshold;
  /**
  * The forecast period in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#forecast_period IpamAddressBlock#forecast_period}
  */
  readonly forecastPeriod?: IpamAddressBlockInheritanceSourcesAsmConfigForecastPeriod;
  /**
  * The minimum amount of history needed before ASM can run on this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#history IpamAddressBlock#history}
  */
  readonly history?: IpamAddressBlockInheritanceSourcesAsmConfigHistory;
  /**
  * The minimum size of range needed for ASM to run on this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#min_total IpamAddressBlock#min_total}
  */
  readonly minTotal?: IpamAddressBlockInheritanceSourcesAsmConfigMinTotal;
  /**
  * The minimum percentage of addresses that must be available outside of the DHCP ranges and fixed addresses when making a suggested change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#min_unused IpamAddressBlock#min_unused}
  */
  readonly minUnused?: IpamAddressBlockInheritanceSourcesAsmConfigMinUnused;
}

export function ipamAddressBlockInheritanceSourcesAsmConfigToTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asm_enable_block: ipamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlockToTerraform(struct!.asmEnableBlock),
    asm_growth_block: ipamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockToTerraform(struct!.asmGrowthBlock),
    asm_threshold: ipamAddressBlockInheritanceSourcesAsmConfigAsmThresholdToTerraform(struct!.asmThreshold),
    forecast_period: ipamAddressBlockInheritanceSourcesAsmConfigForecastPeriodToTerraform(struct!.forecastPeriod),
    history: ipamAddressBlockInheritanceSourcesAsmConfigHistoryToTerraform(struct!.history),
    min_total: ipamAddressBlockInheritanceSourcesAsmConfigMinTotalToTerraform(struct!.minTotal),
    min_unused: ipamAddressBlockInheritanceSourcesAsmConfigMinUnusedToTerraform(struct!.minUnused),
  }
}


export function ipamAddressBlockInheritanceSourcesAsmConfigToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesAsmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asm_enable_block: {
      value: ipamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlockToHclTerraform(struct!.asmEnableBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlock",
    },
    asm_growth_block: {
      value: ipamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockToHclTerraform(struct!.asmGrowthBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlock",
    },
    asm_threshold: {
      value: ipamAddressBlockInheritanceSourcesAsmConfigAsmThresholdToHclTerraform(struct!.asmThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesAsmConfigAsmThreshold",
    },
    forecast_period: {
      value: ipamAddressBlockInheritanceSourcesAsmConfigForecastPeriodToHclTerraform(struct!.forecastPeriod),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesAsmConfigForecastPeriod",
    },
    history: {
      value: ipamAddressBlockInheritanceSourcesAsmConfigHistoryToHclTerraform(struct!.history),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesAsmConfigHistory",
    },
    min_total: {
      value: ipamAddressBlockInheritanceSourcesAsmConfigMinTotalToHclTerraform(struct!.minTotal),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesAsmConfigMinTotal",
    },
    min_unused: {
      value: ipamAddressBlockInheritanceSourcesAsmConfigMinUnusedToHclTerraform(struct!.minUnused),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesAsmConfigMinUnused",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamAddressBlockInheritanceSourcesAsmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesAsmConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesAsmConfig | cdktf.IResolvable | undefined) {
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
  private _asmEnableBlock = new IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlockOutputReference(this, "asm_enable_block");
  public get asmEnableBlock() {
    return this._asmEnableBlock;
  }
  public putAsmEnableBlock(value: IpamAddressBlockInheritanceSourcesAsmConfigAsmEnableBlock) {
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
  private _asmGrowthBlock = new IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockOutputReference(this, "asm_growth_block");
  public get asmGrowthBlock() {
    return this._asmGrowthBlock;
  }
  public putAsmGrowthBlock(value: IpamAddressBlockInheritanceSourcesAsmConfigAsmGrowthBlock) {
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
  private _asmThreshold = new IpamAddressBlockInheritanceSourcesAsmConfigAsmThresholdOutputReference(this, "asm_threshold");
  public get asmThreshold() {
    return this._asmThreshold;
  }
  public putAsmThreshold(value: IpamAddressBlockInheritanceSourcesAsmConfigAsmThreshold) {
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
  private _forecastPeriod = new IpamAddressBlockInheritanceSourcesAsmConfigForecastPeriodOutputReference(this, "forecast_period");
  public get forecastPeriod() {
    return this._forecastPeriod;
  }
  public putForecastPeriod(value: IpamAddressBlockInheritanceSourcesAsmConfigForecastPeriod) {
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
  private _history = new IpamAddressBlockInheritanceSourcesAsmConfigHistoryOutputReference(this, "history");
  public get history() {
    return this._history;
  }
  public putHistory(value: IpamAddressBlockInheritanceSourcesAsmConfigHistory) {
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
  private _minTotal = new IpamAddressBlockInheritanceSourcesAsmConfigMinTotalOutputReference(this, "min_total");
  public get minTotal() {
    return this._minTotal;
  }
  public putMinTotal(value: IpamAddressBlockInheritanceSourcesAsmConfigMinTotal) {
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
  private _minUnused = new IpamAddressBlockInheritanceSourcesAsmConfigMinUnusedOutputReference(this, "min_unused");
  public get minUnused() {
    return this._minUnused;
  }
  public putMinUnused(value: IpamAddressBlockInheritanceSourcesAsmConfigMinUnused) {
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
export interface IpamAddressBlockInheritanceSourcesDdnsClientUpdate {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDdnsClientUpdateToTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDdnsClientUpdateToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDdnsClientUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDdnsConflictResolutionMode {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDdnsConflictResolutionModeToTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDdnsConflictResolutionModeToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDdnsConflictResolutionModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDdnsEnabled {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDdnsEnabledToTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDdnsEnabledToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsEnabled | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDdnsEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDdnsEnabled | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDdnsEnabled | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDdnsHostnameBlockValue {
}

export function ipamAddressBlockInheritanceSourcesDdnsHostnameBlockValueToTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsHostnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamAddressBlockInheritanceSourcesDdnsHostnameBlockValueToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsHostnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamAddressBlockInheritanceSourcesDdnsHostnameBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDdnsHostnameBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDdnsHostnameBlockValue | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDdnsHostnameBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDdnsHostnameBlockToTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDdnsHostnameBlockToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDdnsHostnameBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable | undefined) {
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
  private _value = new IpamAddressBlockInheritanceSourcesDdnsHostnameBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface IpamAddressBlockInheritanceSourcesDdnsTtlPercent {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDdnsTtlPercentToTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDdnsTtlPercentToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDdnsTtlPercentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDdnsUpdateBlockValue {
}

export function ipamAddressBlockInheritanceSourcesDdnsUpdateBlockValueToTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsUpdateBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamAddressBlockInheritanceSourcesDdnsUpdateBlockValueToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsUpdateBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamAddressBlockInheritanceSourcesDdnsUpdateBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDdnsUpdateBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDdnsUpdateBlockValue | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDdnsUpdateBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDdnsUpdateBlockToTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsUpdateBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDdnsUpdateBlockToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsUpdateBlock | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDdnsUpdateBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDdnsUpdateBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDdnsUpdateBlock | cdktf.IResolvable | undefined) {
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
  private _value = new IpamAddressBlockInheritanceSourcesDdnsUpdateBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface IpamAddressBlockInheritanceSourcesDdnsUpdateOnRenew {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDdnsUpdateOnRenewToTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDdnsUpdateOnRenewToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDdnsUpdateOnRenewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDdnsUseConflictResolution {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDdnsUseConflictResolutionToTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDdnsUseConflictResolutionToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDdnsUseConflictResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTime {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknown {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownV6ToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownV6ToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpConfigAuthoritativeDhcp {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigAuthoritativeDhcpToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigAuthoritativeDhcpToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDhcpConfigAuthoritativeDhcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpConfigEchoClientId {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigEchoClientIdToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigEchoClientIdToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDhcpConfigEchoClientIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpConfigFilters {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigFiltersToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigFiltersToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDhcpConfigFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpConfigFiltersV6 {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigFiltersV6ToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigFiltersV6ToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDhcpConfigFiltersV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTime {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreClientUid {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigIgnoreClientUidToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigIgnoreClientUidToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreClientUidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListValue {
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigIgnoreListValueToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigIgnoreListValueToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListValue | undefined) {
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

export class IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListValueList extends cdktf.ComplexList {

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
  public get(index: number): IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListValueOutputReference {
    return new IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListStruct {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigIgnoreListStructToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigIgnoreListStructToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined) {
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
  private _value = new IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTime {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeV6ToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeV6ToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpConfig {
  /**
  * The inheritance configuration for _abandoned_reclaim_time_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#abandoned_reclaim_time IpamAddressBlock#abandoned_reclaim_time}
  */
  readonly abandonedReclaimTime?: IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTime;
  /**
  * The inheritance configuration for _abandoned_reclaim_time_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#abandoned_reclaim_time_v6 IpamAddressBlock#abandoned_reclaim_time_v6}
  */
  readonly abandonedReclaimTimeV6?: IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6;
  /**
  * The inheritance configuration for _allow_unknown_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#allow_unknown IpamAddressBlock#allow_unknown}
  */
  readonly allowUnknown?: IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknown;
  /**
  * The inheritance configuration for _allow_unknown_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#allow_unknown_v6 IpamAddressBlock#allow_unknown_v6}
  */
  readonly allowUnknownV6?: IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownV6;
  /**
  * The inheritance configuration for authoritative_dhcp field to set DHCP server as authoritative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#authoritative_dhcp IpamAddressBlock#authoritative_dhcp}
  */
  readonly authoritativeDhcp?: IpamAddressBlockInheritanceSourcesDhcpConfigAuthoritativeDhcp;
  /**
  * The inheritance configuration for _echo_client_id_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#echo_client_id IpamAddressBlock#echo_client_id}
  */
  readonly echoClientId?: IpamAddressBlockInheritanceSourcesDhcpConfigEchoClientId;
  /**
  * The inheritance configuration for filters field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#filters IpamAddressBlock#filters}
  */
  readonly filters?: IpamAddressBlockInheritanceSourcesDhcpConfigFilters;
  /**
  * The inheritance configuration for _filters_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#filters_v6 IpamAddressBlock#filters_v6}
  */
  readonly filtersV6?: IpamAddressBlockInheritanceSourcesDhcpConfigFiltersV6;
  /**
  * The inheritance configuration for hold_reclaimed_time in seconds from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#hold_reclaimed_time IpamAddressBlock#hold_reclaimed_time}
  */
  readonly holdReclaimedTime?: IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTime;
  /**
  * The inheritance configuration for hold_reclaimed_time_v6 in seconds from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#hold_reclaimed_time_v6 IpamAddressBlock#hold_reclaimed_time_v6}
  */
  readonly holdReclaimedTimeV6?: IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeV6;
  /**
  * The inheritance configuration for _ignore_client_uid_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ignore_client_uid IpamAddressBlock#ignore_client_uid}
  */
  readonly ignoreClientUid?: IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreClientUid;
  /**
  * The inheritance configuration for _ignore_list_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ignore_list IpamAddressBlock#ignore_list}
  */
  readonly ignoreList?: IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListStruct;
  /**
  * The inheritance configuration for _lease_time_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#lease_time IpamAddressBlock#lease_time}
  */
  readonly leaseTime?: IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTime;
  /**
  * The inheritance configuration for _lease_time_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#lease_time_v6 IpamAddressBlock#lease_time_v6}
  */
  readonly leaseTimeV6?: IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeV6;
}

export function ipamAddressBlockInheritanceSourcesDhcpConfigToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abandoned_reclaim_time: ipamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeToTerraform(struct!.abandonedReclaimTime),
    abandoned_reclaim_time_v6: ipamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToTerraform(struct!.abandonedReclaimTimeV6),
    allow_unknown: ipamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownToTerraform(struct!.allowUnknown),
    allow_unknown_v6: ipamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownV6ToTerraform(struct!.allowUnknownV6),
    authoritative_dhcp: ipamAddressBlockInheritanceSourcesDhcpConfigAuthoritativeDhcpToTerraform(struct!.authoritativeDhcp),
    echo_client_id: ipamAddressBlockInheritanceSourcesDhcpConfigEchoClientIdToTerraform(struct!.echoClientId),
    filters: ipamAddressBlockInheritanceSourcesDhcpConfigFiltersToTerraform(struct!.filters),
    filters_v6: ipamAddressBlockInheritanceSourcesDhcpConfigFiltersV6ToTerraform(struct!.filtersV6),
    hold_reclaimed_time: ipamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeToTerraform(struct!.holdReclaimedTime),
    hold_reclaimed_time_v6: ipamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToTerraform(struct!.holdReclaimedTimeV6),
    ignore_client_uid: ipamAddressBlockInheritanceSourcesDhcpConfigIgnoreClientUidToTerraform(struct!.ignoreClientUid),
    ignore_list: ipamAddressBlockInheritanceSourcesDhcpConfigIgnoreListStructToTerraform(struct!.ignoreList),
    lease_time: ipamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeToTerraform(struct!.leaseTime),
    lease_time_v6: ipamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeV6ToTerraform(struct!.leaseTimeV6),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpConfigToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abandoned_reclaim_time: {
      value: ipamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeToHclTerraform(struct!.abandonedReclaimTime),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTime",
    },
    abandoned_reclaim_time_v6: {
      value: ipamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToHclTerraform(struct!.abandonedReclaimTimeV6),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6",
    },
    allow_unknown: {
      value: ipamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownToHclTerraform(struct!.allowUnknown),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknown",
    },
    allow_unknown_v6: {
      value: ipamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownV6ToHclTerraform(struct!.allowUnknownV6),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownV6",
    },
    authoritative_dhcp: {
      value: ipamAddressBlockInheritanceSourcesDhcpConfigAuthoritativeDhcpToHclTerraform(struct!.authoritativeDhcp),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpConfigAuthoritativeDhcp",
    },
    echo_client_id: {
      value: ipamAddressBlockInheritanceSourcesDhcpConfigEchoClientIdToHclTerraform(struct!.echoClientId),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpConfigEchoClientId",
    },
    filters: {
      value: ipamAddressBlockInheritanceSourcesDhcpConfigFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpConfigFilters",
    },
    filters_v6: {
      value: ipamAddressBlockInheritanceSourcesDhcpConfigFiltersV6ToHclTerraform(struct!.filtersV6),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpConfigFiltersV6",
    },
    hold_reclaimed_time: {
      value: ipamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeToHclTerraform(struct!.holdReclaimedTime),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTime",
    },
    hold_reclaimed_time_v6: {
      value: ipamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToHclTerraform(struct!.holdReclaimedTimeV6),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeV6",
    },
    ignore_client_uid: {
      value: ipamAddressBlockInheritanceSourcesDhcpConfigIgnoreClientUidToHclTerraform(struct!.ignoreClientUid),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreClientUid",
    },
    ignore_list: {
      value: ipamAddressBlockInheritanceSourcesDhcpConfigIgnoreListStructToHclTerraform(struct!.ignoreList),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListStruct",
    },
    lease_time: {
      value: ipamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeToHclTerraform(struct!.leaseTime),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTime",
    },
    lease_time_v6: {
      value: ipamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeV6ToHclTerraform(struct!.leaseTimeV6),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeV6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamAddressBlockInheritanceSourcesDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpConfig | cdktf.IResolvable | undefined) {
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
  private _abandonedReclaimTime = new IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeOutputReference(this, "abandoned_reclaim_time");
  public get abandonedReclaimTime() {
    return this._abandonedReclaimTime;
  }
  public putAbandonedReclaimTime(value: IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTime) {
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
  private _abandonedReclaimTimeV6 = new IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6OutputReference(this, "abandoned_reclaim_time_v6");
  public get abandonedReclaimTimeV6() {
    return this._abandonedReclaimTimeV6;
  }
  public putAbandonedReclaimTimeV6(value: IpamAddressBlockInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6) {
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
  private _allowUnknown = new IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownOutputReference(this, "allow_unknown");
  public get allowUnknown() {
    return this._allowUnknown;
  }
  public putAllowUnknown(value: IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknown) {
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
  private _allowUnknownV6 = new IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownV6OutputReference(this, "allow_unknown_v6");
  public get allowUnknownV6() {
    return this._allowUnknownV6;
  }
  public putAllowUnknownV6(value: IpamAddressBlockInheritanceSourcesDhcpConfigAllowUnknownV6) {
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
  private _authoritativeDhcp = new IpamAddressBlockInheritanceSourcesDhcpConfigAuthoritativeDhcpOutputReference(this, "authoritative_dhcp");
  public get authoritativeDhcp() {
    return this._authoritativeDhcp;
  }
  public putAuthoritativeDhcp(value: IpamAddressBlockInheritanceSourcesDhcpConfigAuthoritativeDhcp) {
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
  private _echoClientId = new IpamAddressBlockInheritanceSourcesDhcpConfigEchoClientIdOutputReference(this, "echo_client_id");
  public get echoClientId() {
    return this._echoClientId;
  }
  public putEchoClientId(value: IpamAddressBlockInheritanceSourcesDhcpConfigEchoClientId) {
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
  private _filters = new IpamAddressBlockInheritanceSourcesDhcpConfigFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: IpamAddressBlockInheritanceSourcesDhcpConfigFilters) {
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
  private _filtersV6 = new IpamAddressBlockInheritanceSourcesDhcpConfigFiltersV6OutputReference(this, "filters_v6");
  public get filtersV6() {
    return this._filtersV6;
  }
  public putFiltersV6(value: IpamAddressBlockInheritanceSourcesDhcpConfigFiltersV6) {
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
  private _holdReclaimedTime = new IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeOutputReference(this, "hold_reclaimed_time");
  public get holdReclaimedTime() {
    return this._holdReclaimedTime;
  }
  public putHoldReclaimedTime(value: IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTime) {
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
  private _holdReclaimedTimeV6 = new IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeV6OutputReference(this, "hold_reclaimed_time_v6");
  public get holdReclaimedTimeV6() {
    return this._holdReclaimedTimeV6;
  }
  public putHoldReclaimedTimeV6(value: IpamAddressBlockInheritanceSourcesDhcpConfigHoldReclaimedTimeV6) {
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
  private _ignoreClientUid = new IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreClientUidOutputReference(this, "ignore_client_uid");
  public get ignoreClientUid() {
    return this._ignoreClientUid;
  }
  public putIgnoreClientUid(value: IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreClientUid) {
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
  private _ignoreList = new IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListStructOutputReference(this, "ignore_list");
  public get ignoreList() {
    return this._ignoreList;
  }
  public putIgnoreList(value: IpamAddressBlockInheritanceSourcesDhcpConfigIgnoreListStruct) {
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
  private _leaseTime = new IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeOutputReference(this, "lease_time");
  public get leaseTime() {
    return this._leaseTime;
  }
  public putLeaseTime(value: IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTime) {
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
  private _leaseTimeV6 = new IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeV6OutputReference(this, "lease_time_v6");
  public get leaseTimeV6() {
    return this._leaseTimeV6;
  }
  public putLeaseTimeV6(value: IpamAddressBlockInheritanceSourcesDhcpConfigLeaseTimeV6) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpOptionsValueValueOption {
}

export function ipamAddressBlockInheritanceSourcesDhcpOptionsValueValueOptionToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpOptionsValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpOptionsValueValueOptionToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpOptionsValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamAddressBlockInheritanceSourcesDhcpOptionsValueValueOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpOptionsValueValueOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpOptionsValueValueOption | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesDhcpOptionsValueValue {
}

export function ipamAddressBlockInheritanceSourcesDhcpOptionsValueValueToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpOptionsValueValueToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamAddressBlockInheritanceSourcesDhcpOptionsValueValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpOptionsValueValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpOptionsValueValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option - computed: true, optional: false, required: false
  private _option = new IpamAddressBlockInheritanceSourcesDhcpOptionsValueValueOptionOutputReference(this, "option");
  public get option() {
    return this._option;
  }

  // overriding_group - computed: true, optional: false, required: false
  public get overridingGroup() {
    return this.getStringAttribute('overriding_group');
  }
}
export interface IpamAddressBlockInheritanceSourcesDhcpOptionsValue {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesDhcpOptionsValueToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpOptionsValueToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesDhcpOptionsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined) {
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
  private _value = new IpamAddressBlockInheritanceSourcesDhcpOptionsValueValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class IpamAddressBlockInheritanceSourcesDhcpOptionsValueList extends cdktf.ComplexList {
  public internalValue? : IpamAddressBlockInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable

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
  public get(index: number): IpamAddressBlockInheritanceSourcesDhcpOptionsValueOutputReference {
    return new IpamAddressBlockInheritanceSourcesDhcpOptionsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamAddressBlockInheritanceSourcesDhcpOptions {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
  /**
  * The inherited DHCP option values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#value IpamAddressBlock#value}
  */
  readonly value?: IpamAddressBlockInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable;
}

export function ipamAddressBlockInheritanceSourcesDhcpOptionsToTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.listMapper(ipamAddressBlockInheritanceSourcesDhcpOptionsValueToTerraform, false)(struct!.value),
  }
}


export function ipamAddressBlockInheritanceSourcesDhcpOptionsToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesDhcpOptions | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(ipamAddressBlockInheritanceSourcesDhcpOptionsValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpOptionsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamAddressBlockInheritanceSourcesDhcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesDhcpOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesDhcpOptions | cdktf.IResolvable | undefined) {
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
  private _value = new IpamAddressBlockInheritanceSourcesDhcpOptionsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: IpamAddressBlockInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable) {
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
export interface IpamAddressBlockInheritanceSourcesHeaderOptionFilename {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesHeaderOptionFilenameToTerraform(struct?: IpamAddressBlockInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesHeaderOptionFilenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesHeaderOptionServerAddress {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesHeaderOptionServerAddressToTerraform(struct?: IpamAddressBlockInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesHeaderOptionServerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesHeaderOptionServerName {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesHeaderOptionServerNameToTerraform(struct?: IpamAddressBlockInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesHeaderOptionServerNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesHostnameRewriteBlockValue {
}

export function ipamAddressBlockInheritanceSourcesHostnameRewriteBlockValueToTerraform(struct?: IpamAddressBlockInheritanceSourcesHostnameRewriteBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamAddressBlockInheritanceSourcesHostnameRewriteBlockValueToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesHostnameRewriteBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamAddressBlockInheritanceSourcesHostnameRewriteBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesHostnameRewriteBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamAddressBlockInheritanceSourcesHostnameRewriteBlockValue | undefined) {
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
export interface IpamAddressBlockInheritanceSourcesHostnameRewriteBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#action IpamAddressBlock#action}
  */
  readonly action?: string;
}

export function ipamAddressBlockInheritanceSourcesHostnameRewriteBlockToTerraform(struct?: IpamAddressBlockInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function ipamAddressBlockInheritanceSourcesHostnameRewriteBlockToHclTerraform(struct?: IpamAddressBlockInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable): any {
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

export class IpamAddressBlockInheritanceSourcesHostnameRewriteBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamAddressBlockInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable | undefined) {
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
  private _value = new IpamAddressBlockInheritanceSourcesHostnameRewriteBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface IpamAddressBlockInheritanceSources {
  /**
  * The inheritance configuration for _asm_config_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#asm_config IpamAddressBlock#asm_config}
  */
  readonly asmConfig?: IpamAddressBlockInheritanceSourcesAsmConfig;
  /**
  * The inheritance configuration for _ddns_client_update_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_client_update IpamAddressBlock#ddns_client_update}
  */
  readonly ddnsClientUpdate?: IpamAddressBlockInheritanceSourcesDdnsClientUpdate;
  /**
  * The inheritance configuration for _ddns_conflict_resolution_mode_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_conflict_resolution_mode IpamAddressBlock#ddns_conflict_resolution_mode}
  */
  readonly ddnsConflictResolutionMode?: IpamAddressBlockInheritanceSourcesDdnsConflictResolutionMode;
  /**
  * The inheritance configuration for _ddns_enabled_ field. Only action allowed is 'inherit'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_enabled IpamAddressBlock#ddns_enabled}
  */
  readonly ddnsEnabled?: IpamAddressBlockInheritanceSourcesDdnsEnabled;
  /**
  * The inheritance configuration for _ddns_generate_name_ and _ddns_generated_prefix_ fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_hostname_block IpamAddressBlock#ddns_hostname_block}
  */
  readonly ddnsHostnameBlock?: IpamAddressBlockInheritanceSourcesDdnsHostnameBlock;
  /**
  * The inheritance configuration for _ddns_ttl_percent_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_ttl_percent IpamAddressBlock#ddns_ttl_percent}
  */
  readonly ddnsTtlPercent?: IpamAddressBlockInheritanceSourcesDdnsTtlPercent;
  /**
  * The inheritance configuration for _ddns_send_updates_ and _ddns_domain_ fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_update_block IpamAddressBlock#ddns_update_block}
  */
  readonly ddnsUpdateBlock?: IpamAddressBlockInheritanceSourcesDdnsUpdateBlock;
  /**
  * The inheritance configuration for _ddns_update_on_renew_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_update_on_renew IpamAddressBlock#ddns_update_on_renew}
  */
  readonly ddnsUpdateOnRenew?: IpamAddressBlockInheritanceSourcesDdnsUpdateOnRenew;
  /**
  * The inheritance configuration for _ddns_use_conflict_resolution_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#ddns_use_conflict_resolution IpamAddressBlock#ddns_use_conflict_resolution}
  */
  readonly ddnsUseConflictResolution?: IpamAddressBlockInheritanceSourcesDdnsUseConflictResolution;
  /**
  * The inheritance configuration for _dhcp_config_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#dhcp_config IpamAddressBlock#dhcp_config}
  */
  readonly dhcpConfig?: IpamAddressBlockInheritanceSourcesDhcpConfig;
  /**
  * The inheritance configuration for _dhcp_options_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#dhcp_options IpamAddressBlock#dhcp_options}
  */
  readonly dhcpOptions?: IpamAddressBlockInheritanceSourcesDhcpOptions;
  /**
  * The inheritance configuration for _header_option_filename_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#header_option_filename IpamAddressBlock#header_option_filename}
  */
  readonly headerOptionFilename?: IpamAddressBlockInheritanceSourcesHeaderOptionFilename;
  /**
  * The inheritance configuration for _header_option_server_address_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#header_option_server_address IpamAddressBlock#header_option_server_address}
  */
  readonly headerOptionServerAddress?: IpamAddressBlockInheritanceSourcesHeaderOptionServerAddress;
  /**
  * The inheritance configuration for _header_option_server_name_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#header_option_server_name IpamAddressBlock#header_option_server_name}
  */
  readonly headerOptionServerName?: IpamAddressBlockInheritanceSourcesHeaderOptionServerName;
  /**
  * The inheritance configuration for _hostname_rewrite_enabled_, _hostname_rewrite_regex_, and _hostname_rewrite_char_ fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#hostname_rewrite_block IpamAddressBlock#hostname_rewrite_block}
  */
  readonly hostnameRewriteBlock?: IpamAddressBlockInheritanceSourcesHostnameRewriteBlock;
}

export function ipamAddressBlockInheritanceSourcesToTerraform(struct?: IpamAddressBlockInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asm_config: ipamAddressBlockInheritanceSourcesAsmConfigToTerraform(struct!.asmConfig),
    ddns_client_update: ipamAddressBlockInheritanceSourcesDdnsClientUpdateToTerraform(struct!.ddnsClientUpdate),
    ddns_conflict_resolution_mode: ipamAddressBlockInheritanceSourcesDdnsConflictResolutionModeToTerraform(struct!.ddnsConflictResolutionMode),
    ddns_enabled: ipamAddressBlockInheritanceSourcesDdnsEnabledToTerraform(struct!.ddnsEnabled),
    ddns_hostname_block: ipamAddressBlockInheritanceSourcesDdnsHostnameBlockToTerraform(struct!.ddnsHostnameBlock),
    ddns_ttl_percent: ipamAddressBlockInheritanceSourcesDdnsTtlPercentToTerraform(struct!.ddnsTtlPercent),
    ddns_update_block: ipamAddressBlockInheritanceSourcesDdnsUpdateBlockToTerraform(struct!.ddnsUpdateBlock),
    ddns_update_on_renew: ipamAddressBlockInheritanceSourcesDdnsUpdateOnRenewToTerraform(struct!.ddnsUpdateOnRenew),
    ddns_use_conflict_resolution: ipamAddressBlockInheritanceSourcesDdnsUseConflictResolutionToTerraform(struct!.ddnsUseConflictResolution),
    dhcp_config: ipamAddressBlockInheritanceSourcesDhcpConfigToTerraform(struct!.dhcpConfig),
    dhcp_options: ipamAddressBlockInheritanceSourcesDhcpOptionsToTerraform(struct!.dhcpOptions),
    header_option_filename: ipamAddressBlockInheritanceSourcesHeaderOptionFilenameToTerraform(struct!.headerOptionFilename),
    header_option_server_address: ipamAddressBlockInheritanceSourcesHeaderOptionServerAddressToTerraform(struct!.headerOptionServerAddress),
    header_option_server_name: ipamAddressBlockInheritanceSourcesHeaderOptionServerNameToTerraform(struct!.headerOptionServerName),
    hostname_rewrite_block: ipamAddressBlockInheritanceSourcesHostnameRewriteBlockToTerraform(struct!.hostnameRewriteBlock),
  }
}


export function ipamAddressBlockInheritanceSourcesToHclTerraform(struct?: IpamAddressBlockInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asm_config: {
      value: ipamAddressBlockInheritanceSourcesAsmConfigToHclTerraform(struct!.asmConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesAsmConfig",
    },
    ddns_client_update: {
      value: ipamAddressBlockInheritanceSourcesDdnsClientUpdateToHclTerraform(struct!.ddnsClientUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDdnsClientUpdate",
    },
    ddns_conflict_resolution_mode: {
      value: ipamAddressBlockInheritanceSourcesDdnsConflictResolutionModeToHclTerraform(struct!.ddnsConflictResolutionMode),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDdnsConflictResolutionMode",
    },
    ddns_enabled: {
      value: ipamAddressBlockInheritanceSourcesDdnsEnabledToHclTerraform(struct!.ddnsEnabled),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDdnsEnabled",
    },
    ddns_hostname_block: {
      value: ipamAddressBlockInheritanceSourcesDdnsHostnameBlockToHclTerraform(struct!.ddnsHostnameBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDdnsHostnameBlock",
    },
    ddns_ttl_percent: {
      value: ipamAddressBlockInheritanceSourcesDdnsTtlPercentToHclTerraform(struct!.ddnsTtlPercent),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDdnsTtlPercent",
    },
    ddns_update_block: {
      value: ipamAddressBlockInheritanceSourcesDdnsUpdateBlockToHclTerraform(struct!.ddnsUpdateBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDdnsUpdateBlock",
    },
    ddns_update_on_renew: {
      value: ipamAddressBlockInheritanceSourcesDdnsUpdateOnRenewToHclTerraform(struct!.ddnsUpdateOnRenew),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDdnsUpdateOnRenew",
    },
    ddns_use_conflict_resolution: {
      value: ipamAddressBlockInheritanceSourcesDdnsUseConflictResolutionToHclTerraform(struct!.ddnsUseConflictResolution),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDdnsUseConflictResolution",
    },
    dhcp_config: {
      value: ipamAddressBlockInheritanceSourcesDhcpConfigToHclTerraform(struct!.dhcpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpConfig",
    },
    dhcp_options: {
      value: ipamAddressBlockInheritanceSourcesDhcpOptionsToHclTerraform(struct!.dhcpOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesDhcpOptions",
    },
    header_option_filename: {
      value: ipamAddressBlockInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct!.headerOptionFilename),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesHeaderOptionFilename",
    },
    header_option_server_address: {
      value: ipamAddressBlockInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct!.headerOptionServerAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesHeaderOptionServerAddress",
    },
    header_option_server_name: {
      value: ipamAddressBlockInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct!.headerOptionServerName),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesHeaderOptionServerName",
    },
    hostname_rewrite_block: {
      value: ipamAddressBlockInheritanceSourcesHostnameRewriteBlockToHclTerraform(struct!.hostnameRewriteBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamAddressBlockInheritanceSourcesHostnameRewriteBlock",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamAddressBlockInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockInheritanceSources | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamAddressBlockInheritanceSources | cdktf.IResolvable | undefined) {
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
      this._headerOptionFilename.internalValue = undefined;
      this._headerOptionServerAddress.internalValue = undefined;
      this._headerOptionServerName.internalValue = undefined;
      this._hostnameRewriteBlock.internalValue = undefined;
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
      this._headerOptionFilename.internalValue = value.headerOptionFilename;
      this._headerOptionServerAddress.internalValue = value.headerOptionServerAddress;
      this._headerOptionServerName.internalValue = value.headerOptionServerName;
      this._hostnameRewriteBlock.internalValue = value.hostnameRewriteBlock;
    }
  }

  // asm_config - computed: true, optional: true, required: false
  private _asmConfig = new IpamAddressBlockInheritanceSourcesAsmConfigOutputReference(this, "asm_config");
  public get asmConfig() {
    return this._asmConfig;
  }
  public putAsmConfig(value: IpamAddressBlockInheritanceSourcesAsmConfig) {
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
  private _ddnsClientUpdate = new IpamAddressBlockInheritanceSourcesDdnsClientUpdateOutputReference(this, "ddns_client_update");
  public get ddnsClientUpdate() {
    return this._ddnsClientUpdate;
  }
  public putDdnsClientUpdate(value: IpamAddressBlockInheritanceSourcesDdnsClientUpdate) {
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
  private _ddnsConflictResolutionMode = new IpamAddressBlockInheritanceSourcesDdnsConflictResolutionModeOutputReference(this, "ddns_conflict_resolution_mode");
  public get ddnsConflictResolutionMode() {
    return this._ddnsConflictResolutionMode;
  }
  public putDdnsConflictResolutionMode(value: IpamAddressBlockInheritanceSourcesDdnsConflictResolutionMode) {
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
  private _ddnsEnabled = new IpamAddressBlockInheritanceSourcesDdnsEnabledOutputReference(this, "ddns_enabled");
  public get ddnsEnabled() {
    return this._ddnsEnabled;
  }
  public putDdnsEnabled(value: IpamAddressBlockInheritanceSourcesDdnsEnabled) {
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
  private _ddnsHostnameBlock = new IpamAddressBlockInheritanceSourcesDdnsHostnameBlockOutputReference(this, "ddns_hostname_block");
  public get ddnsHostnameBlock() {
    return this._ddnsHostnameBlock;
  }
  public putDdnsHostnameBlock(value: IpamAddressBlockInheritanceSourcesDdnsHostnameBlock) {
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
  private _ddnsTtlPercent = new IpamAddressBlockInheritanceSourcesDdnsTtlPercentOutputReference(this, "ddns_ttl_percent");
  public get ddnsTtlPercent() {
    return this._ddnsTtlPercent;
  }
  public putDdnsTtlPercent(value: IpamAddressBlockInheritanceSourcesDdnsTtlPercent) {
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
  private _ddnsUpdateBlock = new IpamAddressBlockInheritanceSourcesDdnsUpdateBlockOutputReference(this, "ddns_update_block");
  public get ddnsUpdateBlock() {
    return this._ddnsUpdateBlock;
  }
  public putDdnsUpdateBlock(value: IpamAddressBlockInheritanceSourcesDdnsUpdateBlock) {
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
  private _ddnsUpdateOnRenew = new IpamAddressBlockInheritanceSourcesDdnsUpdateOnRenewOutputReference(this, "ddns_update_on_renew");
  public get ddnsUpdateOnRenew() {
    return this._ddnsUpdateOnRenew;
  }
  public putDdnsUpdateOnRenew(value: IpamAddressBlockInheritanceSourcesDdnsUpdateOnRenew) {
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
  private _ddnsUseConflictResolution = new IpamAddressBlockInheritanceSourcesDdnsUseConflictResolutionOutputReference(this, "ddns_use_conflict_resolution");
  public get ddnsUseConflictResolution() {
    return this._ddnsUseConflictResolution;
  }
  public putDdnsUseConflictResolution(value: IpamAddressBlockInheritanceSourcesDdnsUseConflictResolution) {
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
  private _dhcpConfig = new IpamAddressBlockInheritanceSourcesDhcpConfigOutputReference(this, "dhcp_config");
  public get dhcpConfig() {
    return this._dhcpConfig;
  }
  public putDhcpConfig(value: IpamAddressBlockInheritanceSourcesDhcpConfig) {
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
  private _dhcpOptions = new IpamAddressBlockInheritanceSourcesDhcpOptionsOutputReference(this, "dhcp_options");
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: IpamAddressBlockInheritanceSourcesDhcpOptions) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // header_option_filename - computed: true, optional: true, required: false
  private _headerOptionFilename = new IpamAddressBlockInheritanceSourcesHeaderOptionFilenameOutputReference(this, "header_option_filename");
  public get headerOptionFilename() {
    return this._headerOptionFilename;
  }
  public putHeaderOptionFilename(value: IpamAddressBlockInheritanceSourcesHeaderOptionFilename) {
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
  private _headerOptionServerAddress = new IpamAddressBlockInheritanceSourcesHeaderOptionServerAddressOutputReference(this, "header_option_server_address");
  public get headerOptionServerAddress() {
    return this._headerOptionServerAddress;
  }
  public putHeaderOptionServerAddress(value: IpamAddressBlockInheritanceSourcesHeaderOptionServerAddress) {
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
  private _headerOptionServerName = new IpamAddressBlockInheritanceSourcesHeaderOptionServerNameOutputReference(this, "header_option_server_name");
  public get headerOptionServerName() {
    return this._headerOptionServerName;
  }
  public putHeaderOptionServerName(value: IpamAddressBlockInheritanceSourcesHeaderOptionServerName) {
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
  private _hostnameRewriteBlock = new IpamAddressBlockInheritanceSourcesHostnameRewriteBlockOutputReference(this, "hostname_rewrite_block");
  public get hostnameRewriteBlock() {
    return this._hostnameRewriteBlock;
  }
  public putHostnameRewriteBlock(value: IpamAddressBlockInheritanceSourcesHostnameRewriteBlock) {
    this._hostnameRewriteBlock.internalValue = value;
  }
  public resetHostnameRewriteBlock() {
    this._hostnameRewriteBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteBlockInput() {
    return this._hostnameRewriteBlock.internalValue;
  }
}
export interface IpamAddressBlockThreshold {
  /**
  * Indicates whether the utilization threshold for IP addresses is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#enabled IpamAddressBlock#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The high threshold value for the percentage of used IP addresses relative to the total IP addresses available in the scope of the object. Thresholds are inclusive in the comparison test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#high IpamAddressBlock#high}
  */
  readonly high: number;
  /**
  * The low threshold value for the percentage of used IP addresses relative to the total IP addresses available in the scope of the object. Thresholds are inclusive in the comparison test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#low IpamAddressBlock#low}
  */
  readonly low: number;
}

export function ipamAddressBlockThresholdToTerraform(struct?: IpamAddressBlockThreshold): any {
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


export function ipamAddressBlockThresholdToHclTerraform(struct?: IpamAddressBlockThreshold): any {
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

export class IpamAddressBlockThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockThreshold | undefined {
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

  public set internalValue(value: IpamAddressBlockThreshold | undefined) {
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
export interface IpamAddressBlockUtilization {
}

export function ipamAddressBlockUtilizationToTerraform(struct?: IpamAddressBlockUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamAddressBlockUtilizationToHclTerraform(struct?: IpamAddressBlockUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamAddressBlockUtilizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockUtilization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamAddressBlockUtilization | undefined) {
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
export interface IpamAddressBlockUtilizationV6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#abandoned IpamAddressBlock#abandoned}
  */
  readonly abandoned?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#dynamic IpamAddressBlock#dynamic}
  */
  readonly dynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#static IpamAddressBlock#static}
  */
  readonly static?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#total IpamAddressBlock#total}
  */
  readonly total?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#used IpamAddressBlock#used}
  */
  readonly used?: string;
}

export function ipamAddressBlockUtilizationV6ToTerraform(struct?: IpamAddressBlockUtilizationV6): any {
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


export function ipamAddressBlockUtilizationV6ToHclTerraform(struct?: IpamAddressBlockUtilizationV6): any {
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

export class IpamAddressBlockUtilizationV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamAddressBlockUtilizationV6 | undefined {
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

  public set internalValue(value: IpamAddressBlockUtilizationV6 | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block bloxone_ipam_address_block}
*/
export class IpamAddressBlock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_ipam_address_block";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpamAddressBlock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpamAddressBlock to import
  * @param importFromId The id of the existing IpamAddressBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpamAddressBlock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_ipam_address_block", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_address_block bloxone_ipam_address_block} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpamAddressBlockConfig
  */
  public constructor(scope: Construct, id: string, config: IpamAddressBlockConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_ipam_address_block',
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
    this._address = config.address;
    this._asmConfig.internalValue = config.asmConfig;
    this._cidr = config.cidr;
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
    this._dhcpConfig.internalValue = config.dhcpConfig;
    this._dhcpOptions.internalValue = config.dhcpOptions;
    this._dhcpUtilization.internalValue = config.dhcpUtilization;
    this._discoveryAttrs = config.discoveryAttrs;
    this._discoveryMetadata = config.discoveryMetadata;
    this._externalKeys = config.externalKeys;
    this._federatedRealms = config.federatedRealms;
    this._headerOptionFilename = config.headerOptionFilename;
    this._headerOptionServerAddress = config.headerOptionServerAddress;
    this._headerOptionServerName = config.headerOptionServerName;
    this._hostnameRewriteChar = config.hostnameRewriteChar;
    this._hostnameRewriteEnabled = config.hostnameRewriteEnabled;
    this._hostnameRewriteRegex = config.hostnameRewriteRegex;
    this._inheritanceParent = config.inheritanceParent;
    this._inheritanceSources.internalValue = config.inheritanceSources;
    this._name = config.name;
    this._nextAvailableId = config.nextAvailableId;
    this._space = config.space;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: true, required: false
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

  // asm_config - computed: true, optional: true, required: false
  private _asmConfig = new IpamAddressBlockAsmConfigOutputReference(this, "asm_config");
  public get asmConfig() {
    return this._asmConfig;
  }
  public putAsmConfig(value: IpamAddressBlockAsmConfig) {
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

  // cidr - computed: false, optional: false, required: true
  private _cidr?: number; 
  public get cidr() {
    return this.getNumberAttribute('cidr');
  }
  public set cidr(value: number) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
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

  // delegation - computed: true, optional: false, required: false
  public get delegation() {
    return this.getStringAttribute('delegation');
  }

  // dhcp_config - computed: true, optional: true, required: false
  private _dhcpConfig = new IpamAddressBlockDhcpConfigOutputReference(this, "dhcp_config");
  public get dhcpConfig() {
    return this._dhcpConfig;
  }
  public putDhcpConfig(value: IpamAddressBlockDhcpConfig) {
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
  private _dhcpOptions = new IpamAddressBlockDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: IpamAddressBlockDhcpOptions[] | cdktf.IResolvable) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // dhcp_utilization - computed: true, optional: true, required: false
  private _dhcpUtilization = new IpamAddressBlockDhcpUtilizationOutputReference(this, "dhcp_utilization");
  public get dhcpUtilization() {
    return this._dhcpUtilization;
  }
  public putDhcpUtilization(value: IpamAddressBlockDhcpUtilization) {
    this._dhcpUtilization.internalValue = value;
  }
  public resetDhcpUtilization() {
    this._dhcpUtilization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpUtilizationInput() {
    return this._dhcpUtilization.internalValue;
  }

  // discovery_attrs - computed: true, optional: true, required: false
  private _discoveryAttrs?: { [key: string]: string }; 
  public get discoveryAttrs() {
    return this.getStringMapAttribute('discovery_attrs');
  }
  public set discoveryAttrs(value: { [key: string]: string }) {
    this._discoveryAttrs = value;
  }
  public resetDiscoveryAttrs() {
    this._discoveryAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryAttrsInput() {
    return this._discoveryAttrs;
  }

  // discovery_metadata - computed: true, optional: true, required: false
  private _discoveryMetadata?: { [key: string]: string }; 
  public get discoveryMetadata() {
    return this.getStringMapAttribute('discovery_metadata');
  }
  public set discoveryMetadata(value: { [key: string]: string }) {
    this._discoveryMetadata = value;
  }
  public resetDiscoveryMetadata() {
    this._discoveryMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryMetadataInput() {
    return this._discoveryMetadata;
  }

  // external_keys - computed: false, optional: true, required: false
  private _externalKeys?: { [key: string]: string }; 
  public get externalKeys() {
    return this.getStringMapAttribute('external_keys');
  }
  public set externalKeys(value: { [key: string]: string }) {
    this._externalKeys = value;
  }
  public resetExternalKeys() {
    this._externalKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalKeysInput() {
    return this._externalKeys;
  }

  // federated_realms - computed: true, optional: true, required: false
  private _federatedRealms?: string[]; 
  public get federatedRealms() {
    return this.getListAttribute('federated_realms');
  }
  public set federatedRealms(value: string[]) {
    this._federatedRealms = value;
  }
  public resetFederatedRealms() {
    this._federatedRealms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedRealmsInput() {
    return this._federatedRealms;
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

  // inheritance_parent - computed: true, optional: true, required: false
  private _inheritanceParent?: string; 
  public get inheritanceParent() {
    return this.getStringAttribute('inheritance_parent');
  }
  public set inheritanceParent(value: string) {
    this._inheritanceParent = value;
  }
  public resetInheritanceParent() {
    this._inheritanceParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceParentInput() {
    return this._inheritanceParent;
  }

  // inheritance_sources - computed: true, optional: true, required: false
  private _inheritanceSources = new IpamAddressBlockInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: IpamAddressBlockInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
  }

  // name - computed: true, optional: true, required: false
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

  // next_available_id - computed: false, optional: true, required: false
  private _nextAvailableId?: string; 
  public get nextAvailableId() {
    return this.getStringAttribute('next_available_id');
  }
  public set nextAvailableId(value: string) {
    this._nextAvailableId = value;
  }
  public resetNextAvailableId() {
    this._nextAvailableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextAvailableIdInput() {
    return this._nextAvailableId;
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // space - computed: false, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
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
  private _threshold = new IpamAddressBlockThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getListAttribute('usage');
  }

  // utilization - computed: true, optional: false, required: false
  private _utilization = new IpamAddressBlockUtilizationOutputReference(this, "utilization");
  public get utilization() {
    return this._utilization;
  }

  // utilization_v6 - computed: true, optional: false, required: false
  private _utilizationV6 = new IpamAddressBlockUtilizationV6OutputReference(this, "utilization_v6");
  public get utilizationV6() {
    return this._utilizationV6;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      asm_config: ipamAddressBlockAsmConfigToTerraform(this._asmConfig.internalValue),
      cidr: cdktf.numberToTerraform(this._cidr),
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
      dhcp_config: ipamAddressBlockDhcpConfigToTerraform(this._dhcpConfig.internalValue),
      dhcp_options: cdktf.listMapper(ipamAddressBlockDhcpOptionsToTerraform, false)(this._dhcpOptions.internalValue),
      dhcp_utilization: ipamAddressBlockDhcpUtilizationToTerraform(this._dhcpUtilization.internalValue),
      discovery_attrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._discoveryAttrs),
      discovery_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._discoveryMetadata),
      external_keys: cdktf.hashMapper(cdktf.stringToTerraform)(this._externalKeys),
      federated_realms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._federatedRealms),
      header_option_filename: cdktf.stringToTerraform(this._headerOptionFilename),
      header_option_server_address: cdktf.stringToTerraform(this._headerOptionServerAddress),
      header_option_server_name: cdktf.stringToTerraform(this._headerOptionServerName),
      hostname_rewrite_char: cdktf.stringToTerraform(this._hostnameRewriteChar),
      hostname_rewrite_enabled: cdktf.booleanToTerraform(this._hostnameRewriteEnabled),
      hostname_rewrite_regex: cdktf.stringToTerraform(this._hostnameRewriteRegex),
      inheritance_parent: cdktf.stringToTerraform(this._inheritanceParent),
      inheritance_sources: ipamAddressBlockInheritanceSourcesToTerraform(this._inheritanceSources.internalValue),
      name: cdktf.stringToTerraform(this._name),
      next_available_id: cdktf.stringToTerraform(this._nextAvailableId),
      space: cdktf.stringToTerraform(this._space),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asm_config: {
        value: ipamAddressBlockAsmConfigToHclTerraform(this._asmConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamAddressBlockAsmConfig",
      },
      cidr: {
        value: cdktf.numberToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      dhcp_config: {
        value: ipamAddressBlockDhcpConfigToHclTerraform(this._dhcpConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamAddressBlockDhcpConfig",
      },
      dhcp_options: {
        value: cdktf.listMapperHcl(ipamAddressBlockDhcpOptionsToHclTerraform, false)(this._dhcpOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamAddressBlockDhcpOptionsList",
      },
      dhcp_utilization: {
        value: ipamAddressBlockDhcpUtilizationToHclTerraform(this._dhcpUtilization.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamAddressBlockDhcpUtilization",
      },
      discovery_attrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._discoveryAttrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      discovery_metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._discoveryMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      external_keys: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._externalKeys),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      federated_realms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._federatedRealms),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      inheritance_parent: {
        value: cdktf.stringToHclTerraform(this._inheritanceParent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inheritance_sources: {
        value: ipamAddressBlockInheritanceSourcesToHclTerraform(this._inheritanceSources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamAddressBlockInheritanceSources",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_available_id: {
        value: cdktf.stringToHclTerraform(this._nextAvailableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space: {
        value: cdktf.stringToHclTerraform(this._space),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
