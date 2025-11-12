// https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AddressBlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * The address field in form “a.b.c.d/n” where the “/n” may be omitted. In this case, the CIDR value must be defined in the _cidr_ field. When reading, the _address_ field is always in the form “a.b.c.d”.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#address AddressBlock#address}
  */
  readonly address: string;
  /**
  * The CIDR of the address block. This is required, if _address_ does not specify it in its input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#cidr AddressBlock#cidr}
  */
  readonly cidr?: number;
  /**
  * The description for the address block. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#comment AddressBlock#comment}
  */
  readonly comment?: string;
  /**
  * Controls who does the DDNS updates.
  * 
  * Valid values are:
  * * _client_: DHCP server updates DNS if requested by client.
  * * _server_: DHCP server always updates DNS, overriding an update request from the client, unless the client requests no updates.
  * * _ignore_: DHCP server always updates DNS, even if the client says not to.
  * * _over_client_update_: Same as _server_. DHCP server always updates DNS, overriding an update request from the client, unless the client requests no updates.
  * * _over_no_update_: DHCP server updates DNS even if the client requests that no updates be done. If the client requests to do the update, DHCP server allows it.
  * 
  * Defaults to _client_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#ddns_client_update AddressBlock#ddns_client_update}
  */
  readonly ddnsClientUpdate?: string;
  /**
  * The domain suffix for DDNS updates. FQDN, may be empty.
  * 
  * Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#ddns_domain AddressBlock#ddns_domain}
  */
  readonly ddnsDomain?: string;
  /**
  * Indicates if DDNS needs to generate a hostname when not supplied by the client.
  * 
  * Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#ddns_generate_name AddressBlock#ddns_generate_name}
  */
  readonly ddnsGenerateName?: boolean | cdktf.IResolvable;
  /**
  * The prefix used in the generation of an FQDN.
  * 
  * When generating a name, DHCP server will construct the name in the format: [ddns-generated-prefix]-[address-text].[ddns-qualifying-suffix].
  * where address-text is simply the lease IP address converted to a hyphenated string.
  * 
  * Defaults to "myhost".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#ddns_generated_prefix AddressBlock#ddns_generated_prefix}
  */
  readonly ddnsGeneratedPrefix?: string;
  /**
  * Determines if DDNS updates are enabled at the address block level.
  * Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#ddns_send_updates AddressBlock#ddns_send_updates}
  */
  readonly ddnsSendUpdates?: boolean | cdktf.IResolvable;
  /**
  * Instructs the DHCP server to always update the DNS information when a lease is renewed even if its DNS information has not changed.
  * 
  * Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#ddns_update_on_renew AddressBlock#ddns_update_on_renew}
  */
  readonly ddnsUpdateOnRenew?: boolean | cdktf.IResolvable;
  /**
  * When true, DHCP server will apply conflict resolution, as described in RFC 4703, when attempting to fulfill the update request.
  * 
  * When false, DHCP server will simply attempt to update the DNS entries per the request, regardless of whether or not they conflict with existing entries owned by other DHCP4 clients.
  * 
  * Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#ddns_use_conflict_resolution AddressBlock#ddns_use_conflict_resolution}
  */
  readonly ddnsUseConflictResolution?: boolean | cdktf.IResolvable;
  /**
  * The configuration for header option filename field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#header_option_filename AddressBlock#header_option_filename}
  */
  readonly headerOptionFilename?: string;
  /**
  * The configuration for header option server address field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#header_option_server_address AddressBlock#header_option_server_address}
  */
  readonly headerOptionServerAddress?: string;
  /**
  * The configuration for header option server name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#header_option_server_name AddressBlock#header_option_server_name}
  */
  readonly headerOptionServerName?: string;
  /**
  * The character to replace non-matching characters with, when hostname rewrite is enabled.
  * 
  * Any single ASCII character.
  * 
  * Defaults to "_".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#hostname_rewrite_char AddressBlock#hostname_rewrite_char}
  */
  readonly hostnameRewriteChar?: string;
  /**
  * Indicates if client supplied hostnames will be rewritten prior to DDNS update by replacing every character that does not match _hostname_rewrite_regex_ by _hostname_rewrite_char_.
  * 
  * Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#hostname_rewrite_enabled AddressBlock#hostname_rewrite_enabled}
  */
  readonly hostnameRewriteEnabled?: boolean | cdktf.IResolvable;
  /**
  * The regex bracket expression to match valid characters.
  * 
  * Must begin with "[" and end with "]" and be a compilable POSIX regex.
  * 
  * Defaults to "[^a-zA-Z0-9_.]".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#hostname_rewrite_regex AddressBlock#hostname_rewrite_regex}
  */
  readonly hostnameRewriteRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#id AddressBlock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#inheritance_parent AddressBlock#inheritance_parent}
  */
  readonly inheritanceParent?: string;
  /**
  * The name of the address block. May contain 1 to 256 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#name AddressBlock#name}
  */
  readonly name?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#parent AddressBlock#parent}
  */
  readonly parent?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#space AddressBlock#space}
  */
  readonly space: string;
  /**
  * The tags for the address block in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#tags AddressBlock#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * asm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#asm_config AddressBlock#asm_config}
  */
  readonly asmConfig?: AddressBlockAsmConfig;
  /**
  * dhcp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#dhcp_config AddressBlock#dhcp_config}
  */
  readonly dhcpConfig?: AddressBlockDhcpConfig;
  /**
  * dhcp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#dhcp_options AddressBlock#dhcp_options}
  */
  readonly dhcpOptions?: AddressBlockDhcpOptions[] | cdktf.IResolvable;
  /**
  * inheritance_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#inheritance_sources AddressBlock#inheritance_sources}
  */
  readonly inheritanceSources?: AddressBlockInheritanceSources;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#threshold AddressBlock#threshold}
  */
  readonly threshold?: AddressBlockThreshold;
}
export interface AddressBlockDhcpUtilization {
}

export function addressBlockDhcpUtilizationToTerraform(struct?: AddressBlockDhcpUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function addressBlockDhcpUtilizationToHclTerraform(struct?: AddressBlockDhcpUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AddressBlockDhcpUtilizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AddressBlockDhcpUtilization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockDhcpUtilization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

export class AddressBlockDhcpUtilizationList extends cdktf.ComplexList {

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
  public get(index: number): AddressBlockDhcpUtilizationOutputReference {
    return new AddressBlockDhcpUtilizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AddressBlockUtilization {
}

export function addressBlockUtilizationToTerraform(struct?: AddressBlockUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function addressBlockUtilizationToHclTerraform(struct?: AddressBlockUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AddressBlockUtilizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AddressBlockUtilization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockUtilization | undefined) {
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

export class AddressBlockUtilizationList extends cdktf.ComplexList {

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
  public get(index: number): AddressBlockUtilizationOutputReference {
    return new AddressBlockUtilizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AddressBlockAsmConfig {
  /**
  * ASM shows the number of addresses forecast to be used _forecast_period_ days in the future, if it is greater than _asm_threshold_ percent * _dhcp_total_ (see _dhcp_utilization_) then the subnet is flagged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#asm_threshold AddressBlock#asm_threshold}
  */
  readonly asmThreshold?: number;
  /**
  * Indicates if Automated Scope Management is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#enable AddressBlock#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Indicates if ASM should send notifications to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#enable_notification AddressBlock#enable_notification}
  */
  readonly enableNotification?: boolean | cdktf.IResolvable;
  /**
  * The forecast period in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#forecast_period AddressBlock#forecast_period}
  */
  readonly forecastPeriod?: number;
  /**
  * Indicates the growth in the number or percentage of IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#growth_factor AddressBlock#growth_factor}
  */
  readonly growthFactor?: number;
  /**
  * The type of factor to use: _percent_ or _count_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#growth_type AddressBlock#growth_type}
  */
  readonly growthType?: string;
  /**
  * The minimum amount of history needed before ASM can run on this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#history AddressBlock#history}
  */
  readonly history?: number;
  /**
  * The minimum size of range needed for ASM to run on this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#min_total AddressBlock#min_total}
  */
  readonly minTotal?: number;
  /**
  * The minimum percentage of addresses that must be available outside of the DHCP ranges and fixed addresses
  * when making a suggested change..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#min_unused AddressBlock#min_unused}
  */
  readonly minUnused?: number;
  /**
  * Reenable date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#reenable_date AddressBlock#reenable_date}
  */
  readonly reenableDate?: string;
}

export function addressBlockAsmConfigToTerraform(struct?: AddressBlockAsmConfigOutputReference | AddressBlockAsmConfig): any {
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


export function addressBlockAsmConfigToHclTerraform(struct?: AddressBlockAsmConfigOutputReference | AddressBlockAsmConfig): any {
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

export class AddressBlockAsmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockAsmConfig | undefined {
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

  public set internalValue(value: AddressBlockAsmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AddressBlockDhcpConfigIgnoreListStruct {
  /**
  * Type of ignore matching: client to ignore by client identifier (client hex or client text) or hardware to ignore by hardware identifier (MAC address). It can have one of the following values:
  *  * _client_hex_,
  *  * _client_text_,
  *  * _hardware_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#type AddressBlock#type}
  */
  readonly type: string;
  /**
  * Value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#value AddressBlock#value}
  */
  readonly value: string;
}

export function addressBlockDhcpConfigIgnoreListStructToTerraform(struct?: AddressBlockDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function addressBlockDhcpConfigIgnoreListStructToHclTerraform(struct?: AddressBlockDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
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

export class AddressBlockDhcpConfigIgnoreListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AddressBlockDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AddressBlockDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined) {
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

  // type - computed: false, optional: false, required: true
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

  // value - computed: false, optional: false, required: true
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

export class AddressBlockDhcpConfigIgnoreListStructList extends cdktf.ComplexList {
  public internalValue? : AddressBlockDhcpConfigIgnoreListStruct[] | cdktf.IResolvable

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
  public get(index: number): AddressBlockDhcpConfigIgnoreListStructOutputReference {
    return new AddressBlockDhcpConfigIgnoreListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AddressBlockDhcpConfig {
  /**
  * Disable to allow leases only for known clients, those for which a fixed address is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#allow_unknown AddressBlock#allow_unknown}
  */
  readonly allowUnknown?: boolean | cdktf.IResolvable;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#filters AddressBlock#filters}
  */
  readonly filters?: string[];
  /**
  * The lease duration in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#lease_time AddressBlock#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * ignore_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#ignore_list AddressBlock#ignore_list}
  */
  readonly ignoreList?: AddressBlockDhcpConfigIgnoreListStruct[] | cdktf.IResolvable;
}

export function addressBlockDhcpConfigToTerraform(struct?: AddressBlockDhcpConfigOutputReference | AddressBlockDhcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_unknown: cdktf.booleanToTerraform(struct!.allowUnknown),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    ignore_list: cdktf.listMapper(addressBlockDhcpConfigIgnoreListStructToTerraform, true)(struct!.ignoreList),
  }
}


export function addressBlockDhcpConfigToHclTerraform(struct?: AddressBlockDhcpConfigOutputReference | AddressBlockDhcpConfig): any {
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
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_list: {
      value: cdktf.listMapperHcl(addressBlockDhcpConfigIgnoreListStructToHclTerraform, true)(struct!.ignoreList),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockDhcpConfigIgnoreListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockDhcpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknown = this._allowUnknown;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._ignoreList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreList = this._ignoreList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockDhcpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowUnknown = undefined;
      this._filters = undefined;
      this._leaseTime = undefined;
      this._ignoreList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowUnknown = value.allowUnknown;
      this._filters = value.filters;
      this._leaseTime = value.leaseTime;
      this._ignoreList.internalValue = value.ignoreList;
    }
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

  // lease_time - computed: false, optional: true, required: false
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

  // ignore_list - computed: false, optional: true, required: false
  private _ignoreList = new AddressBlockDhcpConfigIgnoreListStructList(this, "ignore_list", false);
  public get ignoreList() {
    return this._ignoreList;
  }
  public putIgnoreList(value: AddressBlockDhcpConfigIgnoreListStruct[] | cdktf.IResolvable) {
    this._ignoreList.internalValue = value;
  }
  public resetIgnoreList() {
    this._ignoreList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreListInput() {
    return this._ignoreList.internalValue;
  }
}
export interface AddressBlockDhcpOptions {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#group AddressBlock#group}
  */
  readonly group?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#option_code AddressBlock#option_code}
  */
  readonly optionCode?: string;
  /**
  * The option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#option_value AddressBlock#option_value}
  */
  readonly optionValue?: string;
  /**
  * The type of item.
  * 
  * Valid values are:
  * * _group_
  * * _option_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#type AddressBlock#type}
  */
  readonly type?: string;
}

export function addressBlockDhcpOptionsToTerraform(struct?: AddressBlockDhcpOptions | cdktf.IResolvable): any {
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


export function addressBlockDhcpOptionsToHclTerraform(struct?: AddressBlockDhcpOptions | cdktf.IResolvable): any {
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

export class AddressBlockDhcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AddressBlockDhcpOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AddressBlockDhcpOptions | cdktf.IResolvable | undefined) {
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

  // option_value - computed: false, optional: true, required: false
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

export class AddressBlockDhcpOptionsList extends cdktf.ComplexList {
  public internalValue? : AddressBlockDhcpOptions[] | cdktf.IResolvable

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
  public get(index: number): AddressBlockDhcpOptionsOutputReference {
    return new AddressBlockDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValue {
}

export function addressBlockInheritanceSourcesAsmConfigAsmEnableBlockValueToTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function addressBlockInheritanceSourcesAsmConfigAsmEnableBlockValueToHclTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValue | undefined) {
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

export class AddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValueList extends cdktf.ComplexList {

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
  public get(index: number): AddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValueOutputReference {
    return new AddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AddressBlockInheritanceSourcesAsmConfigAsmEnableBlock {
  /**
  * The inheritance setting.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesAsmConfigAsmEnableBlockToTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigAsmEnableBlockOutputReference | AddressBlockInheritanceSourcesAsmConfigAsmEnableBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesAsmConfigAsmEnableBlockToHclTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigAsmEnableBlockOutputReference | AddressBlockInheritanceSourcesAsmConfigAsmEnableBlock): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesAsmConfigAsmEnableBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesAsmConfigAsmEnableBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesAsmConfigAsmEnableBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  private _value = new AddressBlockInheritanceSourcesAsmConfigAsmEnableBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValue {
}

export function addressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValueToTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function addressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValueToHclTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValue | undefined) {
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

export class AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValueList extends cdktf.ComplexList {

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
  public get(index: number): AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValueOutputReference {
    return new AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlock {
  /**
  * The inheritance setting.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesAsmConfigAsmGrowthBlockToTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockOutputReference | AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesAsmConfigAsmGrowthBlockToHclTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockOutputReference | AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlock): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  private _value = new AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface AddressBlockInheritanceSourcesAsmConfigAsmThreshold {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesAsmConfigAsmThresholdToTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigAsmThresholdOutputReference | AddressBlockInheritanceSourcesAsmConfigAsmThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesAsmConfigAsmThresholdToHclTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigAsmThresholdOutputReference | AddressBlockInheritanceSourcesAsmConfigAsmThreshold): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesAsmConfigAsmThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesAsmConfigAsmThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesAsmConfigAsmThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface AddressBlockInheritanceSourcesAsmConfigForecastPeriod {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesAsmConfigForecastPeriodToTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigForecastPeriodOutputReference | AddressBlockInheritanceSourcesAsmConfigForecastPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesAsmConfigForecastPeriodToHclTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigForecastPeriodOutputReference | AddressBlockInheritanceSourcesAsmConfigForecastPeriod): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesAsmConfigForecastPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesAsmConfigForecastPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesAsmConfigForecastPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface AddressBlockInheritanceSourcesAsmConfigHistory {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesAsmConfigHistoryToTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigHistoryOutputReference | AddressBlockInheritanceSourcesAsmConfigHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesAsmConfigHistoryToHclTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigHistoryOutputReference | AddressBlockInheritanceSourcesAsmConfigHistory): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesAsmConfigHistoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesAsmConfigHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesAsmConfigHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface AddressBlockInheritanceSourcesAsmConfigMinTotal {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesAsmConfigMinTotalToTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigMinTotalOutputReference | AddressBlockInheritanceSourcesAsmConfigMinTotal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesAsmConfigMinTotalToHclTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigMinTotalOutputReference | AddressBlockInheritanceSourcesAsmConfigMinTotal): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesAsmConfigMinTotalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesAsmConfigMinTotal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesAsmConfigMinTotal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface AddressBlockInheritanceSourcesAsmConfigMinUnused {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesAsmConfigMinUnusedToTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigMinUnusedOutputReference | AddressBlockInheritanceSourcesAsmConfigMinUnused): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesAsmConfigMinUnusedToHclTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigMinUnusedOutputReference | AddressBlockInheritanceSourcesAsmConfigMinUnused): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesAsmConfigMinUnusedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesAsmConfigMinUnused | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesAsmConfigMinUnused | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface AddressBlockInheritanceSourcesAsmConfig {
  /**
  * asm_enable_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#asm_enable_block AddressBlock#asm_enable_block}
  */
  readonly asmEnableBlock?: AddressBlockInheritanceSourcesAsmConfigAsmEnableBlock;
  /**
  * asm_growth_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#asm_growth_block AddressBlock#asm_growth_block}
  */
  readonly asmGrowthBlock?: AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlock;
  /**
  * asm_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#asm_threshold AddressBlock#asm_threshold}
  */
  readonly asmThreshold?: AddressBlockInheritanceSourcesAsmConfigAsmThreshold;
  /**
  * forecast_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#forecast_period AddressBlock#forecast_period}
  */
  readonly forecastPeriod?: AddressBlockInheritanceSourcesAsmConfigForecastPeriod;
  /**
  * history block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#history AddressBlock#history}
  */
  readonly history?: AddressBlockInheritanceSourcesAsmConfigHistory;
  /**
  * min_total block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#min_total AddressBlock#min_total}
  */
  readonly minTotal?: AddressBlockInheritanceSourcesAsmConfigMinTotal;
  /**
  * min_unused block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#min_unused AddressBlock#min_unused}
  */
  readonly minUnused?: AddressBlockInheritanceSourcesAsmConfigMinUnused;
}

export function addressBlockInheritanceSourcesAsmConfigToTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigOutputReference | AddressBlockInheritanceSourcesAsmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asm_enable_block: addressBlockInheritanceSourcesAsmConfigAsmEnableBlockToTerraform(struct!.asmEnableBlock),
    asm_growth_block: addressBlockInheritanceSourcesAsmConfigAsmGrowthBlockToTerraform(struct!.asmGrowthBlock),
    asm_threshold: addressBlockInheritanceSourcesAsmConfigAsmThresholdToTerraform(struct!.asmThreshold),
    forecast_period: addressBlockInheritanceSourcesAsmConfigForecastPeriodToTerraform(struct!.forecastPeriod),
    history: addressBlockInheritanceSourcesAsmConfigHistoryToTerraform(struct!.history),
    min_total: addressBlockInheritanceSourcesAsmConfigMinTotalToTerraform(struct!.minTotal),
    min_unused: addressBlockInheritanceSourcesAsmConfigMinUnusedToTerraform(struct!.minUnused),
  }
}


export function addressBlockInheritanceSourcesAsmConfigToHclTerraform(struct?: AddressBlockInheritanceSourcesAsmConfigOutputReference | AddressBlockInheritanceSourcesAsmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asm_enable_block: {
      value: addressBlockInheritanceSourcesAsmConfigAsmEnableBlockToHclTerraform(struct!.asmEnableBlock),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesAsmConfigAsmEnableBlockList",
    },
    asm_growth_block: {
      value: addressBlockInheritanceSourcesAsmConfigAsmGrowthBlockToHclTerraform(struct!.asmGrowthBlock),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockList",
    },
    asm_threshold: {
      value: addressBlockInheritanceSourcesAsmConfigAsmThresholdToHclTerraform(struct!.asmThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesAsmConfigAsmThresholdList",
    },
    forecast_period: {
      value: addressBlockInheritanceSourcesAsmConfigForecastPeriodToHclTerraform(struct!.forecastPeriod),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesAsmConfigForecastPeriodList",
    },
    history: {
      value: addressBlockInheritanceSourcesAsmConfigHistoryToHclTerraform(struct!.history),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesAsmConfigHistoryList",
    },
    min_total: {
      value: addressBlockInheritanceSourcesAsmConfigMinTotalToHclTerraform(struct!.minTotal),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesAsmConfigMinTotalList",
    },
    min_unused: {
      value: addressBlockInheritanceSourcesAsmConfigMinUnusedToHclTerraform(struct!.minUnused),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesAsmConfigMinUnusedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesAsmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesAsmConfig | undefined {
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

  public set internalValue(value: AddressBlockInheritanceSourcesAsmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asmEnableBlock.internalValue = undefined;
      this._asmGrowthBlock.internalValue = undefined;
      this._asmThreshold.internalValue = undefined;
      this._forecastPeriod.internalValue = undefined;
      this._history.internalValue = undefined;
      this._minTotal.internalValue = undefined;
      this._minUnused.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asmEnableBlock.internalValue = value.asmEnableBlock;
      this._asmGrowthBlock.internalValue = value.asmGrowthBlock;
      this._asmThreshold.internalValue = value.asmThreshold;
      this._forecastPeriod.internalValue = value.forecastPeriod;
      this._history.internalValue = value.history;
      this._minTotal.internalValue = value.minTotal;
      this._minUnused.internalValue = value.minUnused;
    }
  }

  // asm_enable_block - computed: false, optional: true, required: false
  private _asmEnableBlock = new AddressBlockInheritanceSourcesAsmConfigAsmEnableBlockOutputReference(this, "asm_enable_block");
  public get asmEnableBlock() {
    return this._asmEnableBlock;
  }
  public putAsmEnableBlock(value: AddressBlockInheritanceSourcesAsmConfigAsmEnableBlock) {
    this._asmEnableBlock.internalValue = value;
  }
  public resetAsmEnableBlock() {
    this._asmEnableBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmEnableBlockInput() {
    return this._asmEnableBlock.internalValue;
  }

  // asm_growth_block - computed: false, optional: true, required: false
  private _asmGrowthBlock = new AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlockOutputReference(this, "asm_growth_block");
  public get asmGrowthBlock() {
    return this._asmGrowthBlock;
  }
  public putAsmGrowthBlock(value: AddressBlockInheritanceSourcesAsmConfigAsmGrowthBlock) {
    this._asmGrowthBlock.internalValue = value;
  }
  public resetAsmGrowthBlock() {
    this._asmGrowthBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmGrowthBlockInput() {
    return this._asmGrowthBlock.internalValue;
  }

  // asm_threshold - computed: false, optional: true, required: false
  private _asmThreshold = new AddressBlockInheritanceSourcesAsmConfigAsmThresholdOutputReference(this, "asm_threshold");
  public get asmThreshold() {
    return this._asmThreshold;
  }
  public putAsmThreshold(value: AddressBlockInheritanceSourcesAsmConfigAsmThreshold) {
    this._asmThreshold.internalValue = value;
  }
  public resetAsmThreshold() {
    this._asmThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmThresholdInput() {
    return this._asmThreshold.internalValue;
  }

  // forecast_period - computed: false, optional: true, required: false
  private _forecastPeriod = new AddressBlockInheritanceSourcesAsmConfigForecastPeriodOutputReference(this, "forecast_period");
  public get forecastPeriod() {
    return this._forecastPeriod;
  }
  public putForecastPeriod(value: AddressBlockInheritanceSourcesAsmConfigForecastPeriod) {
    this._forecastPeriod.internalValue = value;
  }
  public resetForecastPeriod() {
    this._forecastPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastPeriodInput() {
    return this._forecastPeriod.internalValue;
  }

  // history - computed: false, optional: true, required: false
  private _history = new AddressBlockInheritanceSourcesAsmConfigHistoryOutputReference(this, "history");
  public get history() {
    return this._history;
  }
  public putHistory(value: AddressBlockInheritanceSourcesAsmConfigHistory) {
    this._history.internalValue = value;
  }
  public resetHistory() {
    this._history.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history.internalValue;
  }

  // min_total - computed: false, optional: true, required: false
  private _minTotal = new AddressBlockInheritanceSourcesAsmConfigMinTotalOutputReference(this, "min_total");
  public get minTotal() {
    return this._minTotal;
  }
  public putMinTotal(value: AddressBlockInheritanceSourcesAsmConfigMinTotal) {
    this._minTotal.internalValue = value;
  }
  public resetMinTotal() {
    this._minTotal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTotalInput() {
    return this._minTotal.internalValue;
  }

  // min_unused - computed: false, optional: true, required: false
  private _minUnused = new AddressBlockInheritanceSourcesAsmConfigMinUnusedOutputReference(this, "min_unused");
  public get minUnused() {
    return this._minUnused;
  }
  public putMinUnused(value: AddressBlockInheritanceSourcesAsmConfigMinUnused) {
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
export interface AddressBlockInheritanceSourcesDdnsClientUpdate {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesDdnsClientUpdateToTerraform(struct?: AddressBlockInheritanceSourcesDdnsClientUpdateOutputReference | AddressBlockInheritanceSourcesDdnsClientUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesDdnsClientUpdateToHclTerraform(struct?: AddressBlockInheritanceSourcesDdnsClientUpdateOutputReference | AddressBlockInheritanceSourcesDdnsClientUpdate): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesDdnsClientUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesDdnsClientUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDdnsClientUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface AddressBlockInheritanceSourcesDdnsEnabled {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesDdnsEnabledToTerraform(struct?: AddressBlockInheritanceSourcesDdnsEnabledOutputReference | AddressBlockInheritanceSourcesDdnsEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesDdnsEnabledToHclTerraform(struct?: AddressBlockInheritanceSourcesDdnsEnabledOutputReference | AddressBlockInheritanceSourcesDdnsEnabled): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesDdnsEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesDdnsEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDdnsEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface AddressBlockInheritanceSourcesDdnsHostnameBlockValue {
}

export function addressBlockInheritanceSourcesDdnsHostnameBlockValueToTerraform(struct?: AddressBlockInheritanceSourcesDdnsHostnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function addressBlockInheritanceSourcesDdnsHostnameBlockValueToHclTerraform(struct?: AddressBlockInheritanceSourcesDdnsHostnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AddressBlockInheritanceSourcesDdnsHostnameBlockValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AddressBlockInheritanceSourcesDdnsHostnameBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDdnsHostnameBlockValue | undefined) {
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

export class AddressBlockInheritanceSourcesDdnsHostnameBlockValueList extends cdktf.ComplexList {

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
  public get(index: number): AddressBlockInheritanceSourcesDdnsHostnameBlockValueOutputReference {
    return new AddressBlockInheritanceSourcesDdnsHostnameBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AddressBlockInheritanceSourcesDdnsHostnameBlock {
  /**
  * The inheritance setting.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesDdnsHostnameBlockToTerraform(struct?: AddressBlockInheritanceSourcesDdnsHostnameBlockOutputReference | AddressBlockInheritanceSourcesDdnsHostnameBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesDdnsHostnameBlockToHclTerraform(struct?: AddressBlockInheritanceSourcesDdnsHostnameBlockOutputReference | AddressBlockInheritanceSourcesDdnsHostnameBlock): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesDdnsHostnameBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesDdnsHostnameBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDdnsHostnameBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  private _value = new AddressBlockInheritanceSourcesDdnsHostnameBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface AddressBlockInheritanceSourcesDdnsUpdateBlockValue {
}

export function addressBlockInheritanceSourcesDdnsUpdateBlockValueToTerraform(struct?: AddressBlockInheritanceSourcesDdnsUpdateBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function addressBlockInheritanceSourcesDdnsUpdateBlockValueToHclTerraform(struct?: AddressBlockInheritanceSourcesDdnsUpdateBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AddressBlockInheritanceSourcesDdnsUpdateBlockValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AddressBlockInheritanceSourcesDdnsUpdateBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDdnsUpdateBlockValue | undefined) {
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

export class AddressBlockInheritanceSourcesDdnsUpdateBlockValueList extends cdktf.ComplexList {

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
  public get(index: number): AddressBlockInheritanceSourcesDdnsUpdateBlockValueOutputReference {
    return new AddressBlockInheritanceSourcesDdnsUpdateBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AddressBlockInheritanceSourcesDdnsUpdateBlock {
  /**
  * The inheritance setting.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesDdnsUpdateBlockToTerraform(struct?: AddressBlockInheritanceSourcesDdnsUpdateBlockOutputReference | AddressBlockInheritanceSourcesDdnsUpdateBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesDdnsUpdateBlockToHclTerraform(struct?: AddressBlockInheritanceSourcesDdnsUpdateBlockOutputReference | AddressBlockInheritanceSourcesDdnsUpdateBlock): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesDdnsUpdateBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesDdnsUpdateBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDdnsUpdateBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  private _value = new AddressBlockInheritanceSourcesDdnsUpdateBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface AddressBlockInheritanceSourcesDdnsUpdateOnRenew {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesDdnsUpdateOnRenewToTerraform(struct?: AddressBlockInheritanceSourcesDdnsUpdateOnRenewOutputReference | AddressBlockInheritanceSourcesDdnsUpdateOnRenew): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesDdnsUpdateOnRenewToHclTerraform(struct?: AddressBlockInheritanceSourcesDdnsUpdateOnRenewOutputReference | AddressBlockInheritanceSourcesDdnsUpdateOnRenew): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesDdnsUpdateOnRenewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesDdnsUpdateOnRenew | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDdnsUpdateOnRenew | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface AddressBlockInheritanceSourcesDdnsUseConflictResolution {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesDdnsUseConflictResolutionToTerraform(struct?: AddressBlockInheritanceSourcesDdnsUseConflictResolutionOutputReference | AddressBlockInheritanceSourcesDdnsUseConflictResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesDdnsUseConflictResolutionToHclTerraform(struct?: AddressBlockInheritanceSourcesDdnsUseConflictResolutionOutputReference | AddressBlockInheritanceSourcesDdnsUseConflictResolution): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesDdnsUseConflictResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesDdnsUseConflictResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDdnsUseConflictResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface AddressBlockInheritanceSourcesDhcpConfigAllowUnknown {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesDhcpConfigAllowUnknownToTerraform(struct?: AddressBlockInheritanceSourcesDhcpConfigAllowUnknownOutputReference | AddressBlockInheritanceSourcesDhcpConfigAllowUnknown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesDhcpConfigAllowUnknownToHclTerraform(struct?: AddressBlockInheritanceSourcesDhcpConfigAllowUnknownOutputReference | AddressBlockInheritanceSourcesDhcpConfigAllowUnknown): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesDhcpConfigAllowUnknownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesDhcpConfigAllowUnknown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDhcpConfigAllowUnknown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface AddressBlockInheritanceSourcesDhcpConfigFilters {
  /**
  * The inheritance setting.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#value AddressBlock#value}
  */
  readonly value?: string[];
}

export function addressBlockInheritanceSourcesDhcpConfigFiltersToTerraform(struct?: AddressBlockInheritanceSourcesDhcpConfigFiltersOutputReference | AddressBlockInheritanceSourcesDhcpConfigFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function addressBlockInheritanceSourcesDhcpConfigFiltersToHclTerraform(struct?: AddressBlockInheritanceSourcesDhcpConfigFiltersOutputReference | AddressBlockInheritanceSourcesDhcpConfigFilters): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesDhcpConfigFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesDhcpConfigFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDhcpConfigFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AddressBlockInheritanceSourcesDhcpConfigIgnoreListValue {
}

export function addressBlockInheritanceSourcesDhcpConfigIgnoreListValueToTerraform(struct?: AddressBlockInheritanceSourcesDhcpConfigIgnoreListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function addressBlockInheritanceSourcesDhcpConfigIgnoreListValueToHclTerraform(struct?: AddressBlockInheritanceSourcesDhcpConfigIgnoreListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AddressBlockInheritanceSourcesDhcpConfigIgnoreListValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AddressBlockInheritanceSourcesDhcpConfigIgnoreListValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDhcpConfigIgnoreListValue | undefined) {
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

export class AddressBlockInheritanceSourcesDhcpConfigIgnoreListValueList extends cdktf.ComplexList {

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
  public get(index: number): AddressBlockInheritanceSourcesDhcpConfigIgnoreListValueOutputReference {
    return new AddressBlockInheritanceSourcesDhcpConfigIgnoreListValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AddressBlockInheritanceSourcesDhcpConfigIgnoreListStruct {
  /**
  * The inheritance setting.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesDhcpConfigIgnoreListStructToTerraform(struct?: AddressBlockInheritanceSourcesDhcpConfigIgnoreListStructOutputReference | AddressBlockInheritanceSourcesDhcpConfigIgnoreListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesDhcpConfigIgnoreListStructToHclTerraform(struct?: AddressBlockInheritanceSourcesDhcpConfigIgnoreListStructOutputReference | AddressBlockInheritanceSourcesDhcpConfigIgnoreListStruct): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesDhcpConfigIgnoreListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesDhcpConfigIgnoreListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDhcpConfigIgnoreListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  private _value = new AddressBlockInheritanceSourcesDhcpConfigIgnoreListValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface AddressBlockInheritanceSourcesDhcpConfigLeaseTime {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesDhcpConfigLeaseTimeToTerraform(struct?: AddressBlockInheritanceSourcesDhcpConfigLeaseTimeOutputReference | AddressBlockInheritanceSourcesDhcpConfigLeaseTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesDhcpConfigLeaseTimeToHclTerraform(struct?: AddressBlockInheritanceSourcesDhcpConfigLeaseTimeOutputReference | AddressBlockInheritanceSourcesDhcpConfigLeaseTime): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesDhcpConfigLeaseTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesDhcpConfigLeaseTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDhcpConfigLeaseTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface AddressBlockInheritanceSourcesDhcpConfig {
  /**
  * allow_unknown block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#allow_unknown AddressBlock#allow_unknown}
  */
  readonly allowUnknown?: AddressBlockInheritanceSourcesDhcpConfigAllowUnknown;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#filters AddressBlock#filters}
  */
  readonly filters?: AddressBlockInheritanceSourcesDhcpConfigFilters;
  /**
  * ignore_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#ignore_list AddressBlock#ignore_list}
  */
  readonly ignoreList?: AddressBlockInheritanceSourcesDhcpConfigIgnoreListStruct;
  /**
  * lease_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#lease_time AddressBlock#lease_time}
  */
  readonly leaseTime?: AddressBlockInheritanceSourcesDhcpConfigLeaseTime;
}

export function addressBlockInheritanceSourcesDhcpConfigToTerraform(struct?: AddressBlockInheritanceSourcesDhcpConfigOutputReference | AddressBlockInheritanceSourcesDhcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_unknown: addressBlockInheritanceSourcesDhcpConfigAllowUnknownToTerraform(struct!.allowUnknown),
    filters: addressBlockInheritanceSourcesDhcpConfigFiltersToTerraform(struct!.filters),
    ignore_list: addressBlockInheritanceSourcesDhcpConfigIgnoreListStructToTerraform(struct!.ignoreList),
    lease_time: addressBlockInheritanceSourcesDhcpConfigLeaseTimeToTerraform(struct!.leaseTime),
  }
}


export function addressBlockInheritanceSourcesDhcpConfigToHclTerraform(struct?: AddressBlockInheritanceSourcesDhcpConfigOutputReference | AddressBlockInheritanceSourcesDhcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_unknown: {
      value: addressBlockInheritanceSourcesDhcpConfigAllowUnknownToHclTerraform(struct!.allowUnknown),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesDhcpConfigAllowUnknownList",
    },
    filters: {
      value: addressBlockInheritanceSourcesDhcpConfigFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesDhcpConfigFiltersList",
    },
    ignore_list: {
      value: addressBlockInheritanceSourcesDhcpConfigIgnoreListStructToHclTerraform(struct!.ignoreList),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesDhcpConfigIgnoreListStructList",
    },
    lease_time: {
      value: addressBlockInheritanceSourcesDhcpConfigLeaseTimeToHclTerraform(struct!.leaseTime),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesDhcpConfigLeaseTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesDhcpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowUnknown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknown = this._allowUnknown?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._ignoreList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreList = this._ignoreList?.internalValue;
    }
    if (this._leaseTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDhcpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowUnknown.internalValue = undefined;
      this._filters.internalValue = undefined;
      this._ignoreList.internalValue = undefined;
      this._leaseTime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowUnknown.internalValue = value.allowUnknown;
      this._filters.internalValue = value.filters;
      this._ignoreList.internalValue = value.ignoreList;
      this._leaseTime.internalValue = value.leaseTime;
    }
  }

  // allow_unknown - computed: false, optional: true, required: false
  private _allowUnknown = new AddressBlockInheritanceSourcesDhcpConfigAllowUnknownOutputReference(this, "allow_unknown");
  public get allowUnknown() {
    return this._allowUnknown;
  }
  public putAllowUnknown(value: AddressBlockInheritanceSourcesDhcpConfigAllowUnknown) {
    this._allowUnknown.internalValue = value;
  }
  public resetAllowUnknown() {
    this._allowUnknown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownInput() {
    return this._allowUnknown.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new AddressBlockInheritanceSourcesDhcpConfigFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: AddressBlockInheritanceSourcesDhcpConfigFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // ignore_list - computed: false, optional: true, required: false
  private _ignoreList = new AddressBlockInheritanceSourcesDhcpConfigIgnoreListStructOutputReference(this, "ignore_list");
  public get ignoreList() {
    return this._ignoreList;
  }
  public putIgnoreList(value: AddressBlockInheritanceSourcesDhcpConfigIgnoreListStruct) {
    this._ignoreList.internalValue = value;
  }
  public resetIgnoreList() {
    this._ignoreList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreListInput() {
    return this._ignoreList.internalValue;
  }

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime = new AddressBlockInheritanceSourcesDhcpConfigLeaseTimeOutputReference(this, "lease_time");
  public get leaseTime() {
    return this._leaseTime;
  }
  public putLeaseTime(value: AddressBlockInheritanceSourcesDhcpConfigLeaseTime) {
    this._leaseTime.internalValue = value;
  }
  public resetLeaseTime() {
    this._leaseTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime.internalValue;
  }
}
export interface AddressBlockInheritanceSourcesDhcpOptionsValueValue {
}

export function addressBlockInheritanceSourcesDhcpOptionsValueValueToTerraform(struct?: AddressBlockInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function addressBlockInheritanceSourcesDhcpOptionsValueValueToHclTerraform(struct?: AddressBlockInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AddressBlockInheritanceSourcesDhcpOptionsValueValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AddressBlockInheritanceSourcesDhcpOptionsValueValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDhcpOptionsValueValue | undefined) {
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

export class AddressBlockInheritanceSourcesDhcpOptionsValueValueList extends cdktf.ComplexList {

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
  public get(index: number): AddressBlockInheritanceSourcesDhcpOptionsValueValueOutputReference {
    return new AddressBlockInheritanceSourcesDhcpOptionsValueValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AddressBlockInheritanceSourcesDhcpOptionsValue {
  /**
  * The inheritance setting.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _block_: Don't use the inherited value.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesDhcpOptionsValueToTerraform(struct?: AddressBlockInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesDhcpOptionsValueToHclTerraform(struct?: AddressBlockInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesDhcpOptionsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AddressBlockInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  private _value = new AddressBlockInheritanceSourcesDhcpOptionsValueValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class AddressBlockInheritanceSourcesDhcpOptionsValueList extends cdktf.ComplexList {
  public internalValue? : AddressBlockInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable

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
  public get(index: number): AddressBlockInheritanceSourcesDhcpOptionsValueOutputReference {
    return new AddressBlockInheritanceSourcesDhcpOptionsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AddressBlockInheritanceSourcesDhcpOptions {
  /**
  * The inheritance setting.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _block_: Don't use the inherited value.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#value AddressBlock#value}
  */
  readonly value?: AddressBlockInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable;
}

export function addressBlockInheritanceSourcesDhcpOptionsToTerraform(struct?: AddressBlockInheritanceSourcesDhcpOptionsOutputReference | AddressBlockInheritanceSourcesDhcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.listMapper(addressBlockInheritanceSourcesDhcpOptionsValueToTerraform, true)(struct!.value),
  }
}


export function addressBlockInheritanceSourcesDhcpOptionsToHclTerraform(struct?: AddressBlockInheritanceSourcesDhcpOptionsOutputReference | AddressBlockInheritanceSourcesDhcpOptions): any {
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
      value: cdktf.listMapperHcl(addressBlockInheritanceSourcesDhcpOptionsValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesDhcpOptionsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesDhcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesDhcpOptions | undefined {
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

  public set internalValue(value: AddressBlockInheritanceSourcesDhcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._value.internalValue = value.value;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value = new AddressBlockInheritanceSourcesDhcpOptionsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: AddressBlockInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable) {
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
export interface AddressBlockInheritanceSourcesHeaderOptionFilename {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesHeaderOptionFilenameToTerraform(struct?: AddressBlockInheritanceSourcesHeaderOptionFilenameOutputReference | AddressBlockInheritanceSourcesHeaderOptionFilename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct?: AddressBlockInheritanceSourcesHeaderOptionFilenameOutputReference | AddressBlockInheritanceSourcesHeaderOptionFilename): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesHeaderOptionFilenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesHeaderOptionFilename | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesHeaderOptionFilename | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface AddressBlockInheritanceSourcesHeaderOptionServerAddress {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesHeaderOptionServerAddressToTerraform(struct?: AddressBlockInheritanceSourcesHeaderOptionServerAddressOutputReference | AddressBlockInheritanceSourcesHeaderOptionServerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct?: AddressBlockInheritanceSourcesHeaderOptionServerAddressOutputReference | AddressBlockInheritanceSourcesHeaderOptionServerAddress): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesHeaderOptionServerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesHeaderOptionServerAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesHeaderOptionServerAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface AddressBlockInheritanceSourcesHeaderOptionServerName {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesHeaderOptionServerNameToTerraform(struct?: AddressBlockInheritanceSourcesHeaderOptionServerNameOutputReference | AddressBlockInheritanceSourcesHeaderOptionServerName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct?: AddressBlockInheritanceSourcesHeaderOptionServerNameOutputReference | AddressBlockInheritanceSourcesHeaderOptionServerName): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesHeaderOptionServerNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesHeaderOptionServerName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesHeaderOptionServerName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface AddressBlockInheritanceSourcesHostnameRewriteBlockValue {
}

export function addressBlockInheritanceSourcesHostnameRewriteBlockValueToTerraform(struct?: AddressBlockInheritanceSourcesHostnameRewriteBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function addressBlockInheritanceSourcesHostnameRewriteBlockValueToHclTerraform(struct?: AddressBlockInheritanceSourcesHostnameRewriteBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AddressBlockInheritanceSourcesHostnameRewriteBlockValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AddressBlockInheritanceSourcesHostnameRewriteBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesHostnameRewriteBlockValue | undefined) {
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

export class AddressBlockInheritanceSourcesHostnameRewriteBlockValueList extends cdktf.ComplexList {

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
  public get(index: number): AddressBlockInheritanceSourcesHostnameRewriteBlockValueOutputReference {
    return new AddressBlockInheritanceSourcesHostnameRewriteBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AddressBlockInheritanceSourcesHostnameRewriteBlock {
  /**
  * The inheritance setting.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#action AddressBlock#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#source AddressBlock#source}
  */
  readonly source?: string;
}

export function addressBlockInheritanceSourcesHostnameRewriteBlockToTerraform(struct?: AddressBlockInheritanceSourcesHostnameRewriteBlockOutputReference | AddressBlockInheritanceSourcesHostnameRewriteBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function addressBlockInheritanceSourcesHostnameRewriteBlockToHclTerraform(struct?: AddressBlockInheritanceSourcesHostnameRewriteBlockOutputReference | AddressBlockInheritanceSourcesHostnameRewriteBlock): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesHostnameRewriteBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSourcesHostnameRewriteBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressBlockInheritanceSourcesHostnameRewriteBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  private _value = new AddressBlockInheritanceSourcesHostnameRewriteBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface AddressBlockInheritanceSources {
  /**
  * asm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#asm_config AddressBlock#asm_config}
  */
  readonly asmConfig?: AddressBlockInheritanceSourcesAsmConfig;
  /**
  * ddns_client_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#ddns_client_update AddressBlock#ddns_client_update}
  */
  readonly ddnsClientUpdate?: AddressBlockInheritanceSourcesDdnsClientUpdate;
  /**
  * ddns_enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#ddns_enabled AddressBlock#ddns_enabled}
  */
  readonly ddnsEnabled?: AddressBlockInheritanceSourcesDdnsEnabled;
  /**
  * ddns_hostname_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#ddns_hostname_block AddressBlock#ddns_hostname_block}
  */
  readonly ddnsHostnameBlock?: AddressBlockInheritanceSourcesDdnsHostnameBlock;
  /**
  * ddns_update_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#ddns_update_block AddressBlock#ddns_update_block}
  */
  readonly ddnsUpdateBlock?: AddressBlockInheritanceSourcesDdnsUpdateBlock;
  /**
  * ddns_update_on_renew block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#ddns_update_on_renew AddressBlock#ddns_update_on_renew}
  */
  readonly ddnsUpdateOnRenew?: AddressBlockInheritanceSourcesDdnsUpdateOnRenew;
  /**
  * ddns_use_conflict_resolution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#ddns_use_conflict_resolution AddressBlock#ddns_use_conflict_resolution}
  */
  readonly ddnsUseConflictResolution?: AddressBlockInheritanceSourcesDdnsUseConflictResolution;
  /**
  * dhcp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#dhcp_config AddressBlock#dhcp_config}
  */
  readonly dhcpConfig?: AddressBlockInheritanceSourcesDhcpConfig;
  /**
  * dhcp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#dhcp_options AddressBlock#dhcp_options}
  */
  readonly dhcpOptions?: AddressBlockInheritanceSourcesDhcpOptions;
  /**
  * header_option_filename block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#header_option_filename AddressBlock#header_option_filename}
  */
  readonly headerOptionFilename?: AddressBlockInheritanceSourcesHeaderOptionFilename;
  /**
  * header_option_server_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#header_option_server_address AddressBlock#header_option_server_address}
  */
  readonly headerOptionServerAddress?: AddressBlockInheritanceSourcesHeaderOptionServerAddress;
  /**
  * header_option_server_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#header_option_server_name AddressBlock#header_option_server_name}
  */
  readonly headerOptionServerName?: AddressBlockInheritanceSourcesHeaderOptionServerName;
  /**
  * hostname_rewrite_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#hostname_rewrite_block AddressBlock#hostname_rewrite_block}
  */
  readonly hostnameRewriteBlock?: AddressBlockInheritanceSourcesHostnameRewriteBlock;
}

export function addressBlockInheritanceSourcesToTerraform(struct?: AddressBlockInheritanceSourcesOutputReference | AddressBlockInheritanceSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asm_config: addressBlockInheritanceSourcesAsmConfigToTerraform(struct!.asmConfig),
    ddns_client_update: addressBlockInheritanceSourcesDdnsClientUpdateToTerraform(struct!.ddnsClientUpdate),
    ddns_enabled: addressBlockInheritanceSourcesDdnsEnabledToTerraform(struct!.ddnsEnabled),
    ddns_hostname_block: addressBlockInheritanceSourcesDdnsHostnameBlockToTerraform(struct!.ddnsHostnameBlock),
    ddns_update_block: addressBlockInheritanceSourcesDdnsUpdateBlockToTerraform(struct!.ddnsUpdateBlock),
    ddns_update_on_renew: addressBlockInheritanceSourcesDdnsUpdateOnRenewToTerraform(struct!.ddnsUpdateOnRenew),
    ddns_use_conflict_resolution: addressBlockInheritanceSourcesDdnsUseConflictResolutionToTerraform(struct!.ddnsUseConflictResolution),
    dhcp_config: addressBlockInheritanceSourcesDhcpConfigToTerraform(struct!.dhcpConfig),
    dhcp_options: addressBlockInheritanceSourcesDhcpOptionsToTerraform(struct!.dhcpOptions),
    header_option_filename: addressBlockInheritanceSourcesHeaderOptionFilenameToTerraform(struct!.headerOptionFilename),
    header_option_server_address: addressBlockInheritanceSourcesHeaderOptionServerAddressToTerraform(struct!.headerOptionServerAddress),
    header_option_server_name: addressBlockInheritanceSourcesHeaderOptionServerNameToTerraform(struct!.headerOptionServerName),
    hostname_rewrite_block: addressBlockInheritanceSourcesHostnameRewriteBlockToTerraform(struct!.hostnameRewriteBlock),
  }
}


export function addressBlockInheritanceSourcesToHclTerraform(struct?: AddressBlockInheritanceSourcesOutputReference | AddressBlockInheritanceSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asm_config: {
      value: addressBlockInheritanceSourcesAsmConfigToHclTerraform(struct!.asmConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesAsmConfigList",
    },
    ddns_client_update: {
      value: addressBlockInheritanceSourcesDdnsClientUpdateToHclTerraform(struct!.ddnsClientUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesDdnsClientUpdateList",
    },
    ddns_enabled: {
      value: addressBlockInheritanceSourcesDdnsEnabledToHclTerraform(struct!.ddnsEnabled),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesDdnsEnabledList",
    },
    ddns_hostname_block: {
      value: addressBlockInheritanceSourcesDdnsHostnameBlockToHclTerraform(struct!.ddnsHostnameBlock),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesDdnsHostnameBlockList",
    },
    ddns_update_block: {
      value: addressBlockInheritanceSourcesDdnsUpdateBlockToHclTerraform(struct!.ddnsUpdateBlock),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesDdnsUpdateBlockList",
    },
    ddns_update_on_renew: {
      value: addressBlockInheritanceSourcesDdnsUpdateOnRenewToHclTerraform(struct!.ddnsUpdateOnRenew),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesDdnsUpdateOnRenewList",
    },
    ddns_use_conflict_resolution: {
      value: addressBlockInheritanceSourcesDdnsUseConflictResolutionToHclTerraform(struct!.ddnsUseConflictResolution),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesDdnsUseConflictResolutionList",
    },
    dhcp_config: {
      value: addressBlockInheritanceSourcesDhcpConfigToHclTerraform(struct!.dhcpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesDhcpConfigList",
    },
    dhcp_options: {
      value: addressBlockInheritanceSourcesDhcpOptionsToHclTerraform(struct!.dhcpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesDhcpOptionsList",
    },
    header_option_filename: {
      value: addressBlockInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct!.headerOptionFilename),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesHeaderOptionFilenameList",
    },
    header_option_server_address: {
      value: addressBlockInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct!.headerOptionServerAddress),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesHeaderOptionServerAddressList",
    },
    header_option_server_name: {
      value: addressBlockInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct!.headerOptionServerName),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesHeaderOptionServerNameList",
    },
    hostname_rewrite_block: {
      value: addressBlockInheritanceSourcesHostnameRewriteBlockToHclTerraform(struct!.hostnameRewriteBlock),
      isBlock: true,
      type: "list",
      storageClassType: "AddressBlockInheritanceSourcesHostnameRewriteBlockList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressBlockInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockInheritanceSources | undefined {
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
    if (this._ddnsEnabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsEnabled = this._ddnsEnabled?.internalValue;
    }
    if (this._ddnsHostnameBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsHostnameBlock = this._ddnsHostnameBlock?.internalValue;
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

  public set internalValue(value: AddressBlockInheritanceSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asmConfig.internalValue = undefined;
      this._ddnsClientUpdate.internalValue = undefined;
      this._ddnsEnabled.internalValue = undefined;
      this._ddnsHostnameBlock.internalValue = undefined;
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
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asmConfig.internalValue = value.asmConfig;
      this._ddnsClientUpdate.internalValue = value.ddnsClientUpdate;
      this._ddnsEnabled.internalValue = value.ddnsEnabled;
      this._ddnsHostnameBlock.internalValue = value.ddnsHostnameBlock;
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

  // asm_config - computed: false, optional: true, required: false
  private _asmConfig = new AddressBlockInheritanceSourcesAsmConfigOutputReference(this, "asm_config");
  public get asmConfig() {
    return this._asmConfig;
  }
  public putAsmConfig(value: AddressBlockInheritanceSourcesAsmConfig) {
    this._asmConfig.internalValue = value;
  }
  public resetAsmConfig() {
    this._asmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmConfigInput() {
    return this._asmConfig.internalValue;
  }

  // ddns_client_update - computed: false, optional: true, required: false
  private _ddnsClientUpdate = new AddressBlockInheritanceSourcesDdnsClientUpdateOutputReference(this, "ddns_client_update");
  public get ddnsClientUpdate() {
    return this._ddnsClientUpdate;
  }
  public putDdnsClientUpdate(value: AddressBlockInheritanceSourcesDdnsClientUpdate) {
    this._ddnsClientUpdate.internalValue = value;
  }
  public resetDdnsClientUpdate() {
    this._ddnsClientUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsClientUpdateInput() {
    return this._ddnsClientUpdate.internalValue;
  }

  // ddns_enabled - computed: false, optional: true, required: false
  private _ddnsEnabled = new AddressBlockInheritanceSourcesDdnsEnabledOutputReference(this, "ddns_enabled");
  public get ddnsEnabled() {
    return this._ddnsEnabled;
  }
  public putDdnsEnabled(value: AddressBlockInheritanceSourcesDdnsEnabled) {
    this._ddnsEnabled.internalValue = value;
  }
  public resetDdnsEnabled() {
    this._ddnsEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsEnabledInput() {
    return this._ddnsEnabled.internalValue;
  }

  // ddns_hostname_block - computed: false, optional: true, required: false
  private _ddnsHostnameBlock = new AddressBlockInheritanceSourcesDdnsHostnameBlockOutputReference(this, "ddns_hostname_block");
  public get ddnsHostnameBlock() {
    return this._ddnsHostnameBlock;
  }
  public putDdnsHostnameBlock(value: AddressBlockInheritanceSourcesDdnsHostnameBlock) {
    this._ddnsHostnameBlock.internalValue = value;
  }
  public resetDdnsHostnameBlock() {
    this._ddnsHostnameBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsHostnameBlockInput() {
    return this._ddnsHostnameBlock.internalValue;
  }

  // ddns_update_block - computed: false, optional: true, required: false
  private _ddnsUpdateBlock = new AddressBlockInheritanceSourcesDdnsUpdateBlockOutputReference(this, "ddns_update_block");
  public get ddnsUpdateBlock() {
    return this._ddnsUpdateBlock;
  }
  public putDdnsUpdateBlock(value: AddressBlockInheritanceSourcesDdnsUpdateBlock) {
    this._ddnsUpdateBlock.internalValue = value;
  }
  public resetDdnsUpdateBlock() {
    this._ddnsUpdateBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateBlockInput() {
    return this._ddnsUpdateBlock.internalValue;
  }

  // ddns_update_on_renew - computed: false, optional: true, required: false
  private _ddnsUpdateOnRenew = new AddressBlockInheritanceSourcesDdnsUpdateOnRenewOutputReference(this, "ddns_update_on_renew");
  public get ddnsUpdateOnRenew() {
    return this._ddnsUpdateOnRenew;
  }
  public putDdnsUpdateOnRenew(value: AddressBlockInheritanceSourcesDdnsUpdateOnRenew) {
    this._ddnsUpdateOnRenew.internalValue = value;
  }
  public resetDdnsUpdateOnRenew() {
    this._ddnsUpdateOnRenew.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateOnRenewInput() {
    return this._ddnsUpdateOnRenew.internalValue;
  }

  // ddns_use_conflict_resolution - computed: false, optional: true, required: false
  private _ddnsUseConflictResolution = new AddressBlockInheritanceSourcesDdnsUseConflictResolutionOutputReference(this, "ddns_use_conflict_resolution");
  public get ddnsUseConflictResolution() {
    return this._ddnsUseConflictResolution;
  }
  public putDdnsUseConflictResolution(value: AddressBlockInheritanceSourcesDdnsUseConflictResolution) {
    this._ddnsUseConflictResolution.internalValue = value;
  }
  public resetDdnsUseConflictResolution() {
    this._ddnsUseConflictResolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUseConflictResolutionInput() {
    return this._ddnsUseConflictResolution.internalValue;
  }

  // dhcp_config - computed: false, optional: true, required: false
  private _dhcpConfig = new AddressBlockInheritanceSourcesDhcpConfigOutputReference(this, "dhcp_config");
  public get dhcpConfig() {
    return this._dhcpConfig;
  }
  public putDhcpConfig(value: AddressBlockInheritanceSourcesDhcpConfig) {
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
  private _dhcpOptions = new AddressBlockInheritanceSourcesDhcpOptionsOutputReference(this, "dhcp_options");
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: AddressBlockInheritanceSourcesDhcpOptions) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // header_option_filename - computed: false, optional: true, required: false
  private _headerOptionFilename = new AddressBlockInheritanceSourcesHeaderOptionFilenameOutputReference(this, "header_option_filename");
  public get headerOptionFilename() {
    return this._headerOptionFilename;
  }
  public putHeaderOptionFilename(value: AddressBlockInheritanceSourcesHeaderOptionFilename) {
    this._headerOptionFilename.internalValue = value;
  }
  public resetHeaderOptionFilename() {
    this._headerOptionFilename.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionFilenameInput() {
    return this._headerOptionFilename.internalValue;
  }

  // header_option_server_address - computed: false, optional: true, required: false
  private _headerOptionServerAddress = new AddressBlockInheritanceSourcesHeaderOptionServerAddressOutputReference(this, "header_option_server_address");
  public get headerOptionServerAddress() {
    return this._headerOptionServerAddress;
  }
  public putHeaderOptionServerAddress(value: AddressBlockInheritanceSourcesHeaderOptionServerAddress) {
    this._headerOptionServerAddress.internalValue = value;
  }
  public resetHeaderOptionServerAddress() {
    this._headerOptionServerAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerAddressInput() {
    return this._headerOptionServerAddress.internalValue;
  }

  // header_option_server_name - computed: false, optional: true, required: false
  private _headerOptionServerName = new AddressBlockInheritanceSourcesHeaderOptionServerNameOutputReference(this, "header_option_server_name");
  public get headerOptionServerName() {
    return this._headerOptionServerName;
  }
  public putHeaderOptionServerName(value: AddressBlockInheritanceSourcesHeaderOptionServerName) {
    this._headerOptionServerName.internalValue = value;
  }
  public resetHeaderOptionServerName() {
    this._headerOptionServerName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerNameInput() {
    return this._headerOptionServerName.internalValue;
  }

  // hostname_rewrite_block - computed: false, optional: true, required: false
  private _hostnameRewriteBlock = new AddressBlockInheritanceSourcesHostnameRewriteBlockOutputReference(this, "hostname_rewrite_block");
  public get hostnameRewriteBlock() {
    return this._hostnameRewriteBlock;
  }
  public putHostnameRewriteBlock(value: AddressBlockInheritanceSourcesHostnameRewriteBlock) {
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
export interface AddressBlockThreshold {
  /**
  * Indicates whether the utilization threshold for IP addresses is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#enabled AddressBlock#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The high threshold value for the percentage of used IP addresses relative to the total IP addresses available in the scope of the object. Thresholds are inclusive in the comparison test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#high AddressBlock#high}
  */
  readonly high: number;
  /**
  * The low threshold value for the percentage of used IP addresses relative to the total IP addresses available in the scope of the object. Thresholds are inclusive in the comparison test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#low AddressBlock#low}
  */
  readonly low: number;
}

export function addressBlockThresholdToTerraform(struct?: AddressBlockThresholdOutputReference | AddressBlockThreshold): any {
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


export function addressBlockThresholdToHclTerraform(struct?: AddressBlockThresholdOutputReference | AddressBlockThreshold): any {
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

export class AddressBlockThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AddressBlockThreshold | undefined {
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

  public set internalValue(value: AddressBlockThreshold | undefined) {
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

  // enabled - computed: false, optional: false, required: true
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

  // high - computed: false, optional: false, required: true
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

  // low - computed: false, optional: false, required: true
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

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block b1ddi_address_block}
*/
export class AddressBlock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "b1ddi_address_block";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AddressBlock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AddressBlock to import
  * @param importFromId The id of the existing AddressBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AddressBlock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "b1ddi_address_block", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/address_block b1ddi_address_block} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AddressBlockConfig
  */
  public constructor(scope: Construct, id: string, config: AddressBlockConfig) {
    super(scope, id, {
      terraformResourceType: 'b1ddi_address_block',
      terraformGeneratorMetadata: {
        providerName: 'b1ddi',
        providerVersion: '0.1.5',
        providerVersionConstraint: '0.1.5'
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
    this._cidr = config.cidr;
    this._comment = config.comment;
    this._ddnsClientUpdate = config.ddnsClientUpdate;
    this._ddnsDomain = config.ddnsDomain;
    this._ddnsGenerateName = config.ddnsGenerateName;
    this._ddnsGeneratedPrefix = config.ddnsGeneratedPrefix;
    this._ddnsSendUpdates = config.ddnsSendUpdates;
    this._ddnsUpdateOnRenew = config.ddnsUpdateOnRenew;
    this._ddnsUseConflictResolution = config.ddnsUseConflictResolution;
    this._headerOptionFilename = config.headerOptionFilename;
    this._headerOptionServerAddress = config.headerOptionServerAddress;
    this._headerOptionServerName = config.headerOptionServerName;
    this._hostnameRewriteChar = config.hostnameRewriteChar;
    this._hostnameRewriteEnabled = config.hostnameRewriteEnabled;
    this._hostnameRewriteRegex = config.hostnameRewriteRegex;
    this._id = config.id;
    this._inheritanceParent = config.inheritanceParent;
    this._name = config.name;
    this._parent = config.parent;
    this._space = config.space;
    this._tags = config.tags;
    this._asmConfig.internalValue = config.asmConfig;
    this._dhcpConfig.internalValue = config.dhcpConfig;
    this._dhcpOptions.internalValue = config.dhcpOptions;
    this._inheritanceSources.internalValue = config.inheritanceSources;
    this._threshold.internalValue = config.threshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // asm_scope_flag - computed: true, optional: false, required: false
  public get asmScopeFlag() {
    return this.getNumberAttribute('asm_scope_flag');
  }

  // cidr - computed: true, optional: true, required: false
  private _cidr?: number; 
  public get cidr() {
    return this.getNumberAttribute('cidr');
  }
  public set cidr(value: number) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // comment - computed: false, optional: true, required: false
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

  // ddns_domain - computed: false, optional: true, required: false
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

  // ddns_generate_name - computed: false, optional: true, required: false
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

  // ddns_send_updates - computed: false, optional: true, required: false
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

  // ddns_update_on_renew - computed: false, optional: true, required: false
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

  // ddns_use_conflict_resolution - computed: false, optional: true, required: false
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

  // dhcp_utilization - computed: true, optional: false, required: false
  private _dhcpUtilization = new AddressBlockDhcpUtilizationList(this, "dhcp_utilization", false);
  public get dhcpUtilization() {
    return this._dhcpUtilization;
  }

  // header_option_filename - computed: false, optional: true, required: false
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

  // header_option_server_address - computed: false, optional: true, required: false
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

  // header_option_server_name - computed: false, optional: true, required: false
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

  // hostname_rewrite_enabled - computed: false, optional: true, required: false
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

  // inheritance_parent - computed: false, optional: true, required: false
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

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
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

  // tags - computed: false, optional: true, required: false
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // utilization - computed: true, optional: false, required: false
  private _utilization = new AddressBlockUtilizationList(this, "utilization", false);
  public get utilization() {
    return this._utilization;
  }

  // asm_config - computed: false, optional: true, required: false
  private _asmConfig = new AddressBlockAsmConfigOutputReference(this, "asm_config");
  public get asmConfig() {
    return this._asmConfig;
  }
  public putAsmConfig(value: AddressBlockAsmConfig) {
    this._asmConfig.internalValue = value;
  }
  public resetAsmConfig() {
    this._asmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmConfigInput() {
    return this._asmConfig.internalValue;
  }

  // dhcp_config - computed: false, optional: true, required: false
  private _dhcpConfig = new AddressBlockDhcpConfigOutputReference(this, "dhcp_config");
  public get dhcpConfig() {
    return this._dhcpConfig;
  }
  public putDhcpConfig(value: AddressBlockDhcpConfig) {
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
  private _dhcpOptions = new AddressBlockDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: AddressBlockDhcpOptions[] | cdktf.IResolvable) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // inheritance_sources - computed: false, optional: true, required: false
  private _inheritanceSources = new AddressBlockInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: AddressBlockInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new AddressBlockThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: AddressBlockThreshold) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      cidr: cdktf.numberToTerraform(this._cidr),
      comment: cdktf.stringToTerraform(this._comment),
      ddns_client_update: cdktf.stringToTerraform(this._ddnsClientUpdate),
      ddns_domain: cdktf.stringToTerraform(this._ddnsDomain),
      ddns_generate_name: cdktf.booleanToTerraform(this._ddnsGenerateName),
      ddns_generated_prefix: cdktf.stringToTerraform(this._ddnsGeneratedPrefix),
      ddns_send_updates: cdktf.booleanToTerraform(this._ddnsSendUpdates),
      ddns_update_on_renew: cdktf.booleanToTerraform(this._ddnsUpdateOnRenew),
      ddns_use_conflict_resolution: cdktf.booleanToTerraform(this._ddnsUseConflictResolution),
      header_option_filename: cdktf.stringToTerraform(this._headerOptionFilename),
      header_option_server_address: cdktf.stringToTerraform(this._headerOptionServerAddress),
      header_option_server_name: cdktf.stringToTerraform(this._headerOptionServerName),
      hostname_rewrite_char: cdktf.stringToTerraform(this._hostnameRewriteChar),
      hostname_rewrite_enabled: cdktf.booleanToTerraform(this._hostnameRewriteEnabled),
      hostname_rewrite_regex: cdktf.stringToTerraform(this._hostnameRewriteRegex),
      id: cdktf.stringToTerraform(this._id),
      inheritance_parent: cdktf.stringToTerraform(this._inheritanceParent),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      space: cdktf.stringToTerraform(this._space),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      asm_config: addressBlockAsmConfigToTerraform(this._asmConfig.internalValue),
      dhcp_config: addressBlockDhcpConfigToTerraform(this._dhcpConfig.internalValue),
      dhcp_options: cdktf.listMapper(addressBlockDhcpOptionsToTerraform, true)(this._dhcpOptions.internalValue),
      inheritance_sources: addressBlockInheritanceSourcesToTerraform(this._inheritanceSources.internalValue),
      threshold: addressBlockThresholdToTerraform(this._threshold.internalValue),
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
      ddns_client_update: {
        value: cdktf.stringToHclTerraform(this._ddnsClientUpdate),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
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
      asm_config: {
        value: addressBlockAsmConfigToHclTerraform(this._asmConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AddressBlockAsmConfigList",
      },
      dhcp_config: {
        value: addressBlockDhcpConfigToHclTerraform(this._dhcpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AddressBlockDhcpConfigList",
      },
      dhcp_options: {
        value: cdktf.listMapperHcl(addressBlockDhcpOptionsToHclTerraform, true)(this._dhcpOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AddressBlockDhcpOptionsList",
      },
      inheritance_sources: {
        value: addressBlockInheritanceSourcesToHclTerraform(this._inheritanceSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AddressBlockInheritanceSourcesList",
      },
      threshold: {
        value: addressBlockThresholdToHclTerraform(this._threshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AddressBlockThresholdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
