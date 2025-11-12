// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudRouterConnectionGoogleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID for the billing account that should be billed. Can also be set with the PF_ACCOUNT_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#account_uuid CloudRouterConnectionGoogle#account_uuid}
  */
  readonly accountUuid: string;
  /**
  * BGP session ID generated when the cloud-side connection is provisioned by PacketFabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#bgp_settings_uuid CloudRouterConnectionGoogle#bgp_settings_uuid}
  */
  readonly bgpSettingsUuid?: string;
  /**
  * Circuit ID of the target cloud router. This starts with "PF-L3-CUST-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#circuit_id CloudRouterConnectionGoogle#circuit_id}
  */
  readonly circuitId: string;
  /**
  * A brief description of this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#description CloudRouterConnectionGoogle#description}
  */
  readonly description: string;
  /**
  * The Google pairing key to use for this connection. This is provided when you create the VLAN attachment from the Google Cloud console. Required if not using cloud_settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#google_pairing_key CloudRouterConnectionGoogle#google_pairing_key}
  */
  readonly googlePairingKey?: string;
  /**
  * The name you used for your VLAN attachment in Google.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#google_vlan_attachment_name CloudRouterConnectionGoogle#google_vlan_attachment_name}
  */
  readonly googleVlanAttachmentName?: string;
  /**
  * Label value linked to an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#labels CloudRouterConnectionGoogle#labels}
  */
  readonly labels?: string[];
  /**
  * Set this to true if you intend to use DNAT on this connection. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#maybe_dnat CloudRouterConnectionGoogle#maybe_dnat}
  */
  readonly maybeDnat?: boolean | cdktf.IResolvable;
  /**
  * Set this to true if you intend to use NAT on this connection. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#maybe_nat CloudRouterConnectionGoogle#maybe_nat}
  */
  readonly maybeNat?: boolean | cdktf.IResolvable;
  /**
  * Purchase order number or identifier of a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#po_number CloudRouterConnectionGoogle#po_number}
  */
  readonly poNumber?: string;
  /**
  * The POP in which you want to provision the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#pop CloudRouterConnectionGoogle#pop}
  */
  readonly pop: string;
  /**
  * UUID of the published quote line with which this connection should be associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#published_quote_line_uuid CloudRouterConnectionGoogle#published_quote_line_uuid}
  */
  readonly publishedQuoteLineUuid?: string;
  /**
  * The desired speed of the new connection.
  * 
  * 	Enum: ["50Mbps" "100Mbps" "200Mbps" "300Mbps" "400Mbps" "500Mbps" "1Gbps" "2Gbps" "5Gbps" "10Gbps"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#speed CloudRouterConnectionGoogle#speed}
  */
  readonly speed: string;
  /**
  * Subscription term of the Cloud Router Connection
  * 
  * 	Enum: ["1", "12", "24", "36"] Defaults: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#subscription_term CloudRouterConnectionGoogle#subscription_term}
  */
  readonly subscriptionTerm?: number;
  /**
  * cloud_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#cloud_settings CloudRouterConnectionGoogle#cloud_settings}
  */
  readonly cloudSettings?: CloudRouterConnectionGoogleCloudSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#timeouts CloudRouterConnectionGoogle#timeouts}
  */
  readonly timeouts?: CloudRouterConnectionGoogleTimeouts;
}
export interface CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappings {
  /**
  * Post-translation prefix must be equal to or included within the conditional IP prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#conditional_prefix CloudRouterConnectionGoogle#conditional_prefix}
  */
  readonly conditionalPrefix?: string;
  /**
  * Post-translation IP prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#private_prefix CloudRouterConnectionGoogle#private_prefix}
  */
  readonly privatePrefix: string;
  /**
  * Pre-translation IP prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#public_prefix CloudRouterConnectionGoogle#public_prefix}
  */
  readonly publicPrefix: string;
}

export function cloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappingsToTerraform(struct?: CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_prefix: cdktf.stringToTerraform(struct!.conditionalPrefix),
    private_prefix: cdktf.stringToTerraform(struct!.privatePrefix),
    public_prefix: cdktf.stringToTerraform(struct!.publicPrefix),
  }
}


export function cloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappingsToHclTerraform(struct?: CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_prefix: {
      value: cdktf.stringToHclTerraform(struct!.conditionalPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_prefix: {
      value: cdktf.stringToHclTerraform(struct!.privatePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_prefix: {
      value: cdktf.stringToHclTerraform(struct!.publicPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionalPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalPrefix = this._conditionalPrefix;
    }
    if (this._privatePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatePrefix = this._privatePrefix;
    }
    if (this._publicPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicPrefix = this._publicPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionalPrefix = undefined;
      this._privatePrefix = undefined;
      this._publicPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionalPrefix = value.conditionalPrefix;
      this._privatePrefix = value.privatePrefix;
      this._publicPrefix = value.publicPrefix;
    }
  }

  // conditional_prefix - computed: false, optional: true, required: false
  private _conditionalPrefix?: string; 
  public get conditionalPrefix() {
    return this.getStringAttribute('conditional_prefix');
  }
  public set conditionalPrefix(value: string) {
    this._conditionalPrefix = value;
  }
  public resetConditionalPrefix() {
    this._conditionalPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalPrefixInput() {
    return this._conditionalPrefix;
  }

  // private_prefix - computed: false, optional: false, required: true
  private _privatePrefix?: string; 
  public get privatePrefix() {
    return this.getStringAttribute('private_prefix');
  }
  public set privatePrefix(value: string) {
    this._privatePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePrefixInput() {
    return this._privatePrefix;
  }

  // public_prefix - computed: false, optional: false, required: true
  private _publicPrefix?: string; 
  public get publicPrefix() {
    return this.getStringAttribute('public_prefix');
  }
  public set publicPrefix(value: string) {
    this._publicPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPrefixInput() {
    return this._publicPrefix;
  }
}

export class CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappingsList extends cdktf.ComplexList {
  public internalValue? : CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappings[] | cdktf.IResolvable

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
  public get(index: number): CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappingsOutputReference {
    return new CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRouterConnectionGoogleCloudSettingsBgpSettingsNat {
  /**
  * If using NAT overload, the direction of the NAT connection (input=ingress, output=egress). 
  * 		Enum: output, input. Defaults: output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#direction CloudRouterConnectionGoogle#direction}
  */
  readonly direction?: string;
  /**
  * The NAT type of the NAT connection, source NAT (overload) or destination NAT (inline_dnat). 
  * 		Enum: overload, inline_dnat. Defaults: overload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#nat_type CloudRouterConnectionGoogle#nat_type}
  */
  readonly natType?: string;
  /**
  * If using NAT overload, all prefixes that are NATed on this connection will be translated to the pool prefix address.
  * 
  * 	Example: 10.0.0.0/32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#pool_prefixes CloudRouterConnectionGoogle#pool_prefixes}
  */
  readonly poolPrefixes?: string[];
  /**
  * If using NAT overload, this is the prefixes from the cloud that you want to associate with the NAT pool.
  * 
  * 	Example: 10.0.0.0/24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#pre_nat_sources CloudRouterConnectionGoogle#pre_nat_sources}
  */
  readonly preNatSources?: string[];
  /**
  * dnat_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#dnat_mappings CloudRouterConnectionGoogle#dnat_mappings}
  */
  readonly dnatMappings?: CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappings[] | cdktf.IResolvable;
}

export function cloudRouterConnectionGoogleCloudSettingsBgpSettingsNatToTerraform(struct?: CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatOutputReference | CloudRouterConnectionGoogleCloudSettingsBgpSettingsNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    nat_type: cdktf.stringToTerraform(struct!.natType),
    pool_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolPrefixes),
    pre_nat_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preNatSources),
    dnat_mappings: cdktf.listMapper(cloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappingsToTerraform, true)(struct!.dnatMappings),
  }
}


export function cloudRouterConnectionGoogleCloudSettingsBgpSettingsNatToHclTerraform(struct?: CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatOutputReference | CloudRouterConnectionGoogleCloudSettingsBgpSettingsNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_type: {
      value: cdktf.stringToHclTerraform(struct!.natType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.poolPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pre_nat_sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preNatSources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dnat_mappings: {
      value: cdktf.listMapperHcl(cloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappingsToHclTerraform, true)(struct!.dnatMappings),
      isBlock: true,
      type: "set",
      storageClassType: "CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRouterConnectionGoogleCloudSettingsBgpSettingsNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._natType !== undefined) {
      hasAnyValues = true;
      internalValueResult.natType = this._natType;
    }
    if (this._poolPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolPrefixes = this._poolPrefixes;
    }
    if (this._preNatSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.preNatSources = this._preNatSources;
    }
    if (this._dnatMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnatMappings = this._dnatMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterConnectionGoogleCloudSettingsBgpSettingsNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._natType = undefined;
      this._poolPrefixes = undefined;
      this._preNatSources = undefined;
      this._dnatMappings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._natType = value.natType;
      this._poolPrefixes = value.poolPrefixes;
      this._preNatSources = value.preNatSources;
      this._dnatMappings.internalValue = value.dnatMappings;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // nat_type - computed: false, optional: true, required: false
  private _natType?: string; 
  public get natType() {
    return this.getStringAttribute('nat_type');
  }
  public set natType(value: string) {
    this._natType = value;
  }
  public resetNatType() {
    this._natType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTypeInput() {
    return this._natType;
  }

  // pool_prefixes - computed: false, optional: true, required: false
  private _poolPrefixes?: string[]; 
  public get poolPrefixes() {
    return this.getListAttribute('pool_prefixes');
  }
  public set poolPrefixes(value: string[]) {
    this._poolPrefixes = value;
  }
  public resetPoolPrefixes() {
    this._poolPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolPrefixesInput() {
    return this._poolPrefixes;
  }

  // pre_nat_sources - computed: false, optional: true, required: false
  private _preNatSources?: string[]; 
  public get preNatSources() {
    return this.getListAttribute('pre_nat_sources');
  }
  public set preNatSources(value: string[]) {
    this._preNatSources = value;
  }
  public resetPreNatSources() {
    this._preNatSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preNatSourcesInput() {
    return this._preNatSources;
  }

  // dnat_mappings - computed: false, optional: true, required: false
  private _dnatMappings = new CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappingsList(this, "dnat_mappings", true);
  public get dnatMappings() {
    return this._dnatMappings;
  }
  public putDnatMappings(value: CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatDnatMappings[] | cdktf.IResolvable) {
    this._dnatMappings.internalValue = value;
  }
  public resetDnatMappings() {
    this._dnatMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnatMappingsInput() {
    return this._dnatMappings.internalValue;
  }
}
export interface CloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixes {
  /**
  * The BGP prepend value of this prefix. It is used when type = out.
  * 
  * 	Available range is 1 through 5. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#as_prepend CloudRouterConnectionGoogle#as_prepend}
  */
  readonly asPrepend?: number;
  /**
  * The local_preference of this prefix. It is used when type = in.
  * 
  * 	Available range is 1 through 4294967295. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#local_preference CloudRouterConnectionGoogle#local_preference}
  */
  readonly localPreference?: number;
  /**
  * The match type of this prefix.
  * 
  * 	Enum: `"exact"` `"orlonger"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#match_type CloudRouterConnectionGoogle#match_type}
  */
  readonly matchType?: string;
  /**
  * The MED of this prefix. It is used when type = out.
  * 
  * 	Available range is 1 through 4294967295. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#med CloudRouterConnectionGoogle#med}
  */
  readonly med?: number;
  /**
  * The actual IP Prefix of this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#prefix CloudRouterConnectionGoogle#prefix}
  */
  readonly prefix: string;
  /**
  * Whether this prefix is in (Allowed Prefixes from Cloud) or out (Allowed Prefixes to Cloud).
  * 		Enum: in, out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#type CloudRouterConnectionGoogle#type}
  */
  readonly type: string;
}

export function cloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixesToTerraform(struct?: CloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_prepend: cdktf.numberToTerraform(struct!.asPrepend),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    med: cdktf.numberToTerraform(struct!.med),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixesToHclTerraform(struct?: CloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_prepend: {
      value: cdktf.numberToHclTerraform(struct!.asPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    med: {
      value: cdktf.numberToHclTerraform(struct!.med),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
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

export class CloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPrepend = this._asPrepend;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._med !== undefined) {
      hasAnyValues = true;
      internalValueResult.med = this._med;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asPrepend = undefined;
      this._localPreference = undefined;
      this._matchType = undefined;
      this._med = undefined;
      this._prefix = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asPrepend = value.asPrepend;
      this._localPreference = value.localPreference;
      this._matchType = value.matchType;
      this._med = value.med;
      this._prefix = value.prefix;
      this._type = value.type;
    }
  }

  // as_prepend - computed: false, optional: true, required: false
  private _asPrepend?: number; 
  public get asPrepend() {
    return this.getNumberAttribute('as_prepend');
  }
  public set asPrepend(value: number) {
    this._asPrepend = value;
  }
  public resetAsPrepend() {
    this._asPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPrependInput() {
    return this._asPrepend;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // med - computed: false, optional: true, required: false
  private _med?: number; 
  public get med() {
    return this.getNumberAttribute('med');
  }
  public set med(value: number) {
    this._med = value;
  }
  public resetMed() {
    this._med = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medInput() {
    return this._med;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
}

export class CloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixesList extends cdktf.ComplexList {
  public internalValue? : CloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixes[] | cdktf.IResolvable

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
  public get(index: number): CloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixesOutputReference {
    return new CloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRouterConnectionGoogleCloudSettingsBgpSettings {
  /**
  * The BGP prepend value for this instance. It is used when type = out.
  * 
  * 	Available range is 1 through 5. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#as_prepend CloudRouterConnectionGoogle#as_prepend}
  */
  readonly asPrepend?: number;
  /**
  * If you are using BFD, this is the interval (in milliseconds) at which to send test packets to peers.
  * 
  * 	Available range is 3 through 30000. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#bfd_interval CloudRouterConnectionGoogle#bfd_interval}
  */
  readonly bfdInterval?: number;
  /**
  * If you are using BFD, this is the number of consecutive packets that can be lost before BFD considers a peer down and shuts down BGP.
  * 
  * 	Available range is 2 through 16. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#bfd_multiplier CloudRouterConnectionGoogle#bfd_multiplier}
  */
  readonly bfdMultiplier?: number;
  /**
  * Whether this BGP session is disabled. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#disabled CloudRouterConnectionGoogle#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The Keepalive Interval. Must be between 20 and 60. Defaults: 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#google_keepalive_interval CloudRouterConnectionGoogle#google_keepalive_interval}
  */
  readonly googleKeepaliveInterval?: number;
  /**
  * The local preference for this instance. When the same route is received in multiple locations, those with a higher local preference value are preferred by the cloud router. It is used when type = in.
  * 
  * 	Available range is 1 through 4294967295. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#local_preference CloudRouterConnectionGoogle#local_preference}
  */
  readonly localPreference?: number;
  /**
  * The MD5 value of the authenticated BGP sessions. Required for AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#md5 CloudRouterConnectionGoogle#md5}
  */
  readonly md5?: string;
  /**
  * The Multi-Exit Discriminator of this instance. When the same route is advertised in multiple locations, those with a lower MED are preferred by the peer AS. It is used when type = out.
  * 
  * 	Available range is 1 through 4294967295. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#med CloudRouterConnectionGoogle#med}
  */
  readonly med?: number;
  /**
  * Whether to use exact match or longer for all prefixes. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#orlonger CloudRouterConnectionGoogle#orlonger}
  */
  readonly orlonger?: boolean | cdktf.IResolvable;
  /**
  * The Google ASN of this connection. Must be 16550, between 64512 and 65534, or between 4200000000 and 4294967294.Defaults: 16550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#remote_asn CloudRouterConnectionGoogle#remote_asn}
  */
  readonly remoteAsn?: number;
  /**
  * nat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#nat CloudRouterConnectionGoogle#nat}
  */
  readonly nat?: CloudRouterConnectionGoogleCloudSettingsBgpSettingsNat;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#prefixes CloudRouterConnectionGoogle#prefixes}
  */
  readonly prefixes: CloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixes[] | cdktf.IResolvable;
}

export function cloudRouterConnectionGoogleCloudSettingsBgpSettingsToTerraform(struct?: CloudRouterConnectionGoogleCloudSettingsBgpSettingsOutputReference | CloudRouterConnectionGoogleCloudSettingsBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_prepend: cdktf.numberToTerraform(struct!.asPrepend),
    bfd_interval: cdktf.numberToTerraform(struct!.bfdInterval),
    bfd_multiplier: cdktf.numberToTerraform(struct!.bfdMultiplier),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    google_keepalive_interval: cdktf.numberToTerraform(struct!.googleKeepaliveInterval),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    md5: cdktf.stringToTerraform(struct!.md5),
    med: cdktf.numberToTerraform(struct!.med),
    orlonger: cdktf.booleanToTerraform(struct!.orlonger),
    remote_asn: cdktf.numberToTerraform(struct!.remoteAsn),
    nat: cloudRouterConnectionGoogleCloudSettingsBgpSettingsNatToTerraform(struct!.nat),
    prefixes: cdktf.listMapper(cloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixesToTerraform, true)(struct!.prefixes),
  }
}


export function cloudRouterConnectionGoogleCloudSettingsBgpSettingsToHclTerraform(struct?: CloudRouterConnectionGoogleCloudSettingsBgpSettingsOutputReference | CloudRouterConnectionGoogleCloudSettingsBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_prepend: {
      value: cdktf.numberToHclTerraform(struct!.asPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_interval: {
      value: cdktf.numberToHclTerraform(struct!.bfdInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.bfdMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    google_keepalive_interval: {
      value: cdktf.numberToHclTerraform(struct!.googleKeepaliveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md5: {
      value: cdktf.stringToHclTerraform(struct!.md5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    med: {
      value: cdktf.numberToHclTerraform(struct!.med),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    orlonger: {
      value: cdktf.booleanToHclTerraform(struct!.orlonger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_asn: {
      value: cdktf.numberToHclTerraform(struct!.remoteAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat: {
      value: cloudRouterConnectionGoogleCloudSettingsBgpSettingsNatToHclTerraform(struct!.nat),
      isBlock: true,
      type: "set",
      storageClassType: "CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "set",
      storageClassType: "CloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterConnectionGoogleCloudSettingsBgpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRouterConnectionGoogleCloudSettingsBgpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPrepend = this._asPrepend;
    }
    if (this._bfdInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdInterval = this._bfdInterval;
    }
    if (this._bfdMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdMultiplier = this._bfdMultiplier;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._googleKeepaliveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleKeepaliveInterval = this._googleKeepaliveInterval;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._md5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5;
    }
    if (this._med !== undefined) {
      hasAnyValues = true;
      internalValueResult.med = this._med;
    }
    if (this._orlonger !== undefined) {
      hasAnyValues = true;
      internalValueResult.orlonger = this._orlonger;
    }
    if (this._remoteAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAsn = this._remoteAsn;
    }
    if (this._nat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterConnectionGoogleCloudSettingsBgpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asPrepend = undefined;
      this._bfdInterval = undefined;
      this._bfdMultiplier = undefined;
      this._disabled = undefined;
      this._googleKeepaliveInterval = undefined;
      this._localPreference = undefined;
      this._md5 = undefined;
      this._med = undefined;
      this._orlonger = undefined;
      this._remoteAsn = undefined;
      this._nat.internalValue = undefined;
      this._prefixes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asPrepend = value.asPrepend;
      this._bfdInterval = value.bfdInterval;
      this._bfdMultiplier = value.bfdMultiplier;
      this._disabled = value.disabled;
      this._googleKeepaliveInterval = value.googleKeepaliveInterval;
      this._localPreference = value.localPreference;
      this._md5 = value.md5;
      this._med = value.med;
      this._orlonger = value.orlonger;
      this._remoteAsn = value.remoteAsn;
      this._nat.internalValue = value.nat;
      this._prefixes.internalValue = value.prefixes;
    }
  }

  // as_prepend - computed: false, optional: true, required: false
  private _asPrepend?: number; 
  public get asPrepend() {
    return this.getNumberAttribute('as_prepend');
  }
  public set asPrepend(value: number) {
    this._asPrepend = value;
  }
  public resetAsPrepend() {
    this._asPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPrependInput() {
    return this._asPrepend;
  }

  // bfd_interval - computed: false, optional: true, required: false
  private _bfdInterval?: number; 
  public get bfdInterval() {
    return this.getNumberAttribute('bfd_interval');
  }
  public set bfdInterval(value: number) {
    this._bfdInterval = value;
  }
  public resetBfdInterval() {
    this._bfdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIntervalInput() {
    return this._bfdInterval;
  }

  // bfd_multiplier - computed: false, optional: true, required: false
  private _bfdMultiplier?: number; 
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }
  public set bfdMultiplier(value: number) {
    this._bfdMultiplier = value;
  }
  public resetBfdMultiplier() {
    this._bfdMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMultiplierInput() {
    return this._bfdMultiplier;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // google_keepalive_interval - computed: false, optional: true, required: false
  private _googleKeepaliveInterval?: number; 
  public get googleKeepaliveInterval() {
    return this.getNumberAttribute('google_keepalive_interval');
  }
  public set googleKeepaliveInterval(value: number) {
    this._googleKeepaliveInterval = value;
  }
  public resetGoogleKeepaliveInterval() {
    this._googleKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleKeepaliveIntervalInput() {
    return this._googleKeepaliveInterval;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // md5 - computed: false, optional: true, required: false
  private _md5?: string; 
  public get md5() {
    return this.getStringAttribute('md5');
  }
  public set md5(value: string) {
    this._md5 = value;
  }
  public resetMd5() {
    this._md5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5;
  }

  // med - computed: false, optional: true, required: false
  private _med?: number; 
  public get med() {
    return this.getNumberAttribute('med');
  }
  public set med(value: number) {
    this._med = value;
  }
  public resetMed() {
    this._med = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medInput() {
    return this._med;
  }

  // orlonger - computed: false, optional: true, required: false
  private _orlonger?: boolean | cdktf.IResolvable; 
  public get orlonger() {
    return this.getBooleanAttribute('orlonger');
  }
  public set orlonger(value: boolean | cdktf.IResolvable) {
    this._orlonger = value;
  }
  public resetOrlonger() {
    this._orlonger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orlongerInput() {
    return this._orlonger;
  }

  // remote_asn - computed: false, optional: true, required: false
  private _remoteAsn?: number; 
  public get remoteAsn() {
    return this.getNumberAttribute('remote_asn');
  }
  public set remoteAsn(value: number) {
    this._remoteAsn = value;
  }
  public resetRemoteAsn() {
    this._remoteAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsnInput() {
    return this._remoteAsn;
  }

  // nat - computed: false, optional: true, required: false
  private _nat = new CloudRouterConnectionGoogleCloudSettingsBgpSettingsNatOutputReference(this, "nat");
  public get nat() {
    return this._nat;
  }
  public putNat(value: CloudRouterConnectionGoogleCloudSettingsBgpSettingsNat) {
    this._nat.internalValue = value;
  }
  public resetNat() {
    this._nat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat.internalValue;
  }

  // prefixes - computed: false, optional: false, required: true
  private _prefixes = new CloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixesList(this, "prefixes", true);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: CloudRouterConnectionGoogleCloudSettingsBgpSettingsPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }
}
export interface CloudRouterConnectionGoogleCloudSettings {
  /**
  * The UUID of the credentials to be used with this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#credentials_uuid CloudRouterConnectionGoogle#credentials_uuid}
  */
  readonly credentialsUuid: string;
  /**
  * The Google Cloud Router Attachment name. No whitespace allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#google_cloud_router_name CloudRouterConnectionGoogle#google_cloud_router_name}
  */
  readonly googleCloudRouterName: string;
  /**
  * The Google Edge Availability Domain. Must be 1 (primary) or 2 (secondary).
  * 
  * 	Enum: ["1", "2"] Defaults: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#google_edge_availability_domain CloudRouterConnectionGoogle#google_edge_availability_domain}
  */
  readonly googleEdgeAvailabilityDomain?: number;
  /**
  * The Google pairing key to use for this connection. This is provided when you create the VLAN attachment from the Google Cloud console. Required if not using cloud_settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#google_pairing_key CloudRouterConnectionGoogle#google_pairing_key}
  */
  readonly googlePairingKey?: string;
  /**
  * The Google Project Id to be used. If not present the project id of the credentials will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#google_project_id CloudRouterConnectionGoogle#google_project_id}
  */
  readonly googleProjectId?: string;
  /**
  * The Google region that should be used.
  * 
  * 	Enum: ["asia-east1", "asia-east2", "asia-northeast1", "asia-northeast2", "asia-northeast3", "asia-south1", "asia-southeast1", "asia-southeast2", "australia-southeast1", "europe-north1", "europe-west1", "europe-west2", "europe-west3", "europe-west4", "europe-west6", "northamerica-northeast1", "southamerica-east1", "us-central1", "us-east1", "us-east4", "us-west1", "us-west2", "us-west3", "us-west4"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#google_region CloudRouterConnectionGoogle#google_region}
  */
  readonly googleRegion: string;
  /**
  * The Google Interconnect Attachment name. No whitespace allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#google_vlan_attachment_name CloudRouterConnectionGoogle#google_vlan_attachment_name}
  */
  readonly googleVlanAttachmentName: string;
  /**
  * The Google VPC name. Required if a new router needs to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#google_vpc_name CloudRouterConnectionGoogle#google_vpc_name}
  */
  readonly googleVpcName?: string;
  /**
  * Maximum Transmission Unit this port supports (size of the largest supported PDU).
  * 
  * 	Enum: ["1500", "1440"] Defaults: 1500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#mtu CloudRouterConnectionGoogle#mtu}
  */
  readonly mtu?: number;
  /**
  * bgp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#bgp_settings CloudRouterConnectionGoogle#bgp_settings}
  */
  readonly bgpSettings: CloudRouterConnectionGoogleCloudSettingsBgpSettings;
}

export function cloudRouterConnectionGoogleCloudSettingsToTerraform(struct?: CloudRouterConnectionGoogleCloudSettingsOutputReference | CloudRouterConnectionGoogleCloudSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_uuid: cdktf.stringToTerraform(struct!.credentialsUuid),
    google_cloud_router_name: cdktf.stringToTerraform(struct!.googleCloudRouterName),
    google_edge_availability_domain: cdktf.numberToTerraform(struct!.googleEdgeAvailabilityDomain),
    google_pairing_key: cdktf.stringToTerraform(struct!.googlePairingKey),
    google_project_id: cdktf.stringToTerraform(struct!.googleProjectId),
    google_region: cdktf.stringToTerraform(struct!.googleRegion),
    google_vlan_attachment_name: cdktf.stringToTerraform(struct!.googleVlanAttachmentName),
    google_vpc_name: cdktf.stringToTerraform(struct!.googleVpcName),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    bgp_settings: cloudRouterConnectionGoogleCloudSettingsBgpSettingsToTerraform(struct!.bgpSettings),
  }
}


export function cloudRouterConnectionGoogleCloudSettingsToHclTerraform(struct?: CloudRouterConnectionGoogleCloudSettingsOutputReference | CloudRouterConnectionGoogleCloudSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_uuid: {
      value: cdktf.stringToHclTerraform(struct!.credentialsUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_cloud_router_name: {
      value: cdktf.stringToHclTerraform(struct!.googleCloudRouterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_edge_availability_domain: {
      value: cdktf.numberToHclTerraform(struct!.googleEdgeAvailabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    google_pairing_key: {
      value: cdktf.stringToHclTerraform(struct!.googlePairingKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_project_id: {
      value: cdktf.stringToHclTerraform(struct!.googleProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_region: {
      value: cdktf.stringToHclTerraform(struct!.googleRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_vlan_attachment_name: {
      value: cdktf.stringToHclTerraform(struct!.googleVlanAttachmentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_vpc_name: {
      value: cdktf.stringToHclTerraform(struct!.googleVpcName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgp_settings: {
      value: cloudRouterConnectionGoogleCloudSettingsBgpSettingsToHclTerraform(struct!.bgpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRouterConnectionGoogleCloudSettingsBgpSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterConnectionGoogleCloudSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRouterConnectionGoogleCloudSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsUuid = this._credentialsUuid;
    }
    if (this._googleCloudRouterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudRouterName = this._googleCloudRouterName;
    }
    if (this._googleEdgeAvailabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleEdgeAvailabilityDomain = this._googleEdgeAvailabilityDomain;
    }
    if (this._googlePairingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.googlePairingKey = this._googlePairingKey;
    }
    if (this._googleProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleProjectId = this._googleProjectId;
    }
    if (this._googleRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleRegion = this._googleRegion;
    }
    if (this._googleVlanAttachmentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleVlanAttachmentName = this._googleVlanAttachmentName;
    }
    if (this._googleVpcName !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleVpcName = this._googleVpcName;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._bgpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpSettings = this._bgpSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterConnectionGoogleCloudSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialsUuid = undefined;
      this._googleCloudRouterName = undefined;
      this._googleEdgeAvailabilityDomain = undefined;
      this._googlePairingKey = undefined;
      this._googleProjectId = undefined;
      this._googleRegion = undefined;
      this._googleVlanAttachmentName = undefined;
      this._googleVpcName = undefined;
      this._mtu = undefined;
      this._bgpSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialsUuid = value.credentialsUuid;
      this._googleCloudRouterName = value.googleCloudRouterName;
      this._googleEdgeAvailabilityDomain = value.googleEdgeAvailabilityDomain;
      this._googlePairingKey = value.googlePairingKey;
      this._googleProjectId = value.googleProjectId;
      this._googleRegion = value.googleRegion;
      this._googleVlanAttachmentName = value.googleVlanAttachmentName;
      this._googleVpcName = value.googleVpcName;
      this._mtu = value.mtu;
      this._bgpSettings.internalValue = value.bgpSettings;
    }
  }

  // credentials_uuid - computed: false, optional: false, required: true
  private _credentialsUuid?: string; 
  public get credentialsUuid() {
    return this.getStringAttribute('credentials_uuid');
  }
  public set credentialsUuid(value: string) {
    this._credentialsUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsUuidInput() {
    return this._credentialsUuid;
  }

  // google_cloud_router_name - computed: false, optional: false, required: true
  private _googleCloudRouterName?: string; 
  public get googleCloudRouterName() {
    return this.getStringAttribute('google_cloud_router_name');
  }
  public set googleCloudRouterName(value: string) {
    this._googleCloudRouterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudRouterNameInput() {
    return this._googleCloudRouterName;
  }

  // google_edge_availability_domain - computed: false, optional: true, required: false
  private _googleEdgeAvailabilityDomain?: number; 
  public get googleEdgeAvailabilityDomain() {
    return this.getNumberAttribute('google_edge_availability_domain');
  }
  public set googleEdgeAvailabilityDomain(value: number) {
    this._googleEdgeAvailabilityDomain = value;
  }
  public resetGoogleEdgeAvailabilityDomain() {
    this._googleEdgeAvailabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleEdgeAvailabilityDomainInput() {
    return this._googleEdgeAvailabilityDomain;
  }

  // google_pairing_key - computed: true, optional: true, required: false
  private _googlePairingKey?: string; 
  public get googlePairingKey() {
    return this.getStringAttribute('google_pairing_key');
  }
  public set googlePairingKey(value: string) {
    this._googlePairingKey = value;
  }
  public resetGooglePairingKey() {
    this._googlePairingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googlePairingKeyInput() {
    return this._googlePairingKey;
  }

  // google_project_id - computed: false, optional: true, required: false
  private _googleProjectId?: string; 
  public get googleProjectId() {
    return this.getStringAttribute('google_project_id');
  }
  public set googleProjectId(value: string) {
    this._googleProjectId = value;
  }
  public resetGoogleProjectId() {
    this._googleProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleProjectIdInput() {
    return this._googleProjectId;
  }

  // google_region - computed: false, optional: false, required: true
  private _googleRegion?: string; 
  public get googleRegion() {
    return this.getStringAttribute('google_region');
  }
  public set googleRegion(value: string) {
    this._googleRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleRegionInput() {
    return this._googleRegion;
  }

  // google_vlan_attachment_name - computed: false, optional: false, required: true
  private _googleVlanAttachmentName?: string; 
  public get googleVlanAttachmentName() {
    return this.getStringAttribute('google_vlan_attachment_name');
  }
  public set googleVlanAttachmentName(value: string) {
    this._googleVlanAttachmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleVlanAttachmentNameInput() {
    return this._googleVlanAttachmentName;
  }

  // google_vpc_name - computed: false, optional: true, required: false
  private _googleVpcName?: string; 
  public get googleVpcName() {
    return this.getStringAttribute('google_vpc_name');
  }
  public set googleVpcName(value: string) {
    this._googleVpcName = value;
  }
  public resetGoogleVpcName() {
    this._googleVpcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleVpcNameInput() {
    return this._googleVpcName;
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

  // bgp_settings - computed: false, optional: false, required: true
  private _bgpSettings = new CloudRouterConnectionGoogleCloudSettingsBgpSettingsOutputReference(this, "bgp_settings");
  public get bgpSettings() {
    return this._bgpSettings;
  }
  public putBgpSettings(value: CloudRouterConnectionGoogleCloudSettingsBgpSettings) {
    this._bgpSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSettingsInput() {
    return this._bgpSettings.internalValue;
  }
}
export interface CloudRouterConnectionGoogleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#create CloudRouterConnectionGoogle#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#delete CloudRouterConnectionGoogle#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#read CloudRouterConnectionGoogle#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#update CloudRouterConnectionGoogle#update}
  */
  readonly update?: string;
}

export function cloudRouterConnectionGoogleTimeoutsToTerraform(struct?: CloudRouterConnectionGoogleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudRouterConnectionGoogleTimeoutsToHclTerraform(struct?: CloudRouterConnectionGoogleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterConnectionGoogleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudRouterConnectionGoogleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterConnectionGoogleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google packetfabric_cloud_router_connection_google}
*/
export class CloudRouterConnectionGoogle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cloud_router_connection_google";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudRouterConnectionGoogle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudRouterConnectionGoogle to import
  * @param importFromId The id of the existing CloudRouterConnectionGoogle that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudRouterConnectionGoogle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cloud_router_connection_google", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_google packetfabric_cloud_router_connection_google} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudRouterConnectionGoogleConfig
  */
  public constructor(scope: Construct, id: string, config: CloudRouterConnectionGoogleConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cloud_router_connection_google',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3',
        providerVersionConstraint: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountUuid = config.accountUuid;
    this._bgpSettingsUuid = config.bgpSettingsUuid;
    this._circuitId = config.circuitId;
    this._description = config.description;
    this._googlePairingKey = config.googlePairingKey;
    this._googleVlanAttachmentName = config.googleVlanAttachmentName;
    this._labels = config.labels;
    this._maybeDnat = config.maybeDnat;
    this._maybeNat = config.maybeNat;
    this._poNumber = config.poNumber;
    this._pop = config.pop;
    this._publishedQuoteLineUuid = config.publishedQuoteLineUuid;
    this._speed = config.speed;
    this._subscriptionTerm = config.subscriptionTerm;
    this._cloudSettings.internalValue = config.cloudSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_uuid - computed: false, optional: false, required: true
  private _accountUuid?: string; 
  public get accountUuid() {
    return this.getStringAttribute('account_uuid');
  }
  public set accountUuid(value: string) {
    this._accountUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUuidInput() {
    return this._accountUuid;
  }

  // bgp_settings_uuid - computed: true, optional: true, required: false
  private _bgpSettingsUuid?: string; 
  public get bgpSettingsUuid() {
    return this.getStringAttribute('bgp_settings_uuid');
  }
  public set bgpSettingsUuid(value: string) {
    this._bgpSettingsUuid = value;
  }
  public resetBgpSettingsUuid() {
    this._bgpSettingsUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSettingsUuidInput() {
    return this._bgpSettingsUuid;
  }

  // circuit_id - computed: false, optional: false, required: true
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // etl - computed: true, optional: false, required: false
  public get etl() {
    return this.getNumberAttribute('etl');
  }

  // google_pairing_key - computed: false, optional: true, required: false
  private _googlePairingKey?: string; 
  public get googlePairingKey() {
    return this.getStringAttribute('google_pairing_key');
  }
  public set googlePairingKey(value: string) {
    this._googlePairingKey = value;
  }
  public resetGooglePairingKey() {
    this._googlePairingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googlePairingKeyInput() {
    return this._googlePairingKey;
  }

  // google_vlan_attachment_name - computed: false, optional: true, required: false
  private _googleVlanAttachmentName?: string; 
  public get googleVlanAttachmentName() {
    return this.getStringAttribute('google_vlan_attachment_name');
  }
  public set googleVlanAttachmentName(value: string) {
    this._googleVlanAttachmentName = value;
  }
  public resetGoogleVlanAttachmentName() {
    this._googleVlanAttachmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleVlanAttachmentNameInput() {
    return this._googleVlanAttachmentName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // maybe_dnat - computed: false, optional: true, required: false
  private _maybeDnat?: boolean | cdktf.IResolvable; 
  public get maybeDnat() {
    return this.getBooleanAttribute('maybe_dnat');
  }
  public set maybeDnat(value: boolean | cdktf.IResolvable) {
    this._maybeDnat = value;
  }
  public resetMaybeDnat() {
    this._maybeDnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maybeDnatInput() {
    return this._maybeDnat;
  }

  // maybe_nat - computed: false, optional: true, required: false
  private _maybeNat?: boolean | cdktf.IResolvable; 
  public get maybeNat() {
    return this.getBooleanAttribute('maybe_nat');
  }
  public set maybeNat(value: boolean | cdktf.IResolvable) {
    this._maybeNat = value;
  }
  public resetMaybeNat() {
    this._maybeNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maybeNatInput() {
    return this._maybeNat;
  }

  // po_number - computed: false, optional: true, required: false
  private _poNumber?: string; 
  public get poNumber() {
    return this.getStringAttribute('po_number');
  }
  public set poNumber(value: string) {
    this._poNumber = value;
  }
  public resetPoNumber() {
    this._poNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poNumberInput() {
    return this._poNumber;
  }

  // pop - computed: false, optional: false, required: true
  private _pop?: string; 
  public get pop() {
    return this.getStringAttribute('pop');
  }
  public set pop(value: string) {
    this._pop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get popInput() {
    return this._pop;
  }

  // published_quote_line_uuid - computed: false, optional: true, required: false
  private _publishedQuoteLineUuid?: string; 
  public get publishedQuoteLineUuid() {
    return this.getStringAttribute('published_quote_line_uuid');
  }
  public set publishedQuoteLineUuid(value: string) {
    this._publishedQuoteLineUuid = value;
  }
  public resetPublishedQuoteLineUuid() {
    this._publishedQuoteLineUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedQuoteLineUuidInput() {
    return this._publishedQuoteLineUuid;
  }

  // speed - computed: false, optional: false, required: true
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // subscription_term - computed: false, optional: true, required: false
  private _subscriptionTerm?: number; 
  public get subscriptionTerm() {
    return this.getNumberAttribute('subscription_term');
  }
  public set subscriptionTerm(value: number) {
    this._subscriptionTerm = value;
  }
  public resetSubscriptionTerm() {
    this._subscriptionTerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTermInput() {
    return this._subscriptionTerm;
  }

  // cloud_settings - computed: false, optional: true, required: false
  private _cloudSettings = new CloudRouterConnectionGoogleCloudSettingsOutputReference(this, "cloud_settings");
  public get cloudSettings() {
    return this._cloudSettings;
  }
  public putCloudSettings(value: CloudRouterConnectionGoogleCloudSettings) {
    this._cloudSettings.internalValue = value;
  }
  public resetCloudSettings() {
    this._cloudSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSettingsInput() {
    return this._cloudSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudRouterConnectionGoogleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudRouterConnectionGoogleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_uuid: cdktf.stringToTerraform(this._accountUuid),
      bgp_settings_uuid: cdktf.stringToTerraform(this._bgpSettingsUuid),
      circuit_id: cdktf.stringToTerraform(this._circuitId),
      description: cdktf.stringToTerraform(this._description),
      google_pairing_key: cdktf.stringToTerraform(this._googlePairingKey),
      google_vlan_attachment_name: cdktf.stringToTerraform(this._googleVlanAttachmentName),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      maybe_dnat: cdktf.booleanToTerraform(this._maybeDnat),
      maybe_nat: cdktf.booleanToTerraform(this._maybeNat),
      po_number: cdktf.stringToTerraform(this._poNumber),
      pop: cdktf.stringToTerraform(this._pop),
      published_quote_line_uuid: cdktf.stringToTerraform(this._publishedQuoteLineUuid),
      speed: cdktf.stringToTerraform(this._speed),
      subscription_term: cdktf.numberToTerraform(this._subscriptionTerm),
      cloud_settings: cloudRouterConnectionGoogleCloudSettingsToTerraform(this._cloudSettings.internalValue),
      timeouts: cloudRouterConnectionGoogleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_uuid: {
        value: cdktf.stringToHclTerraform(this._accountUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_settings_uuid: {
        value: cdktf.stringToHclTerraform(this._bgpSettingsUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      circuit_id: {
        value: cdktf.stringToHclTerraform(this._circuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_pairing_key: {
        value: cdktf.stringToHclTerraform(this._googlePairingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_vlan_attachment_name: {
        value: cdktf.stringToHclTerraform(this._googleVlanAttachmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      maybe_dnat: {
        value: cdktf.booleanToHclTerraform(this._maybeDnat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maybe_nat: {
        value: cdktf.booleanToHclTerraform(this._maybeNat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      po_number: {
        value: cdktf.stringToHclTerraform(this._poNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pop: {
        value: cdktf.stringToHclTerraform(this._pop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      published_quote_line_uuid: {
        value: cdktf.stringToHclTerraform(this._publishedQuoteLineUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_term: {
        value: cdktf.numberToHclTerraform(this._subscriptionTerm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cloud_settings: {
        value: cloudRouterConnectionGoogleCloudSettingsToHclTerraform(this._cloudSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRouterConnectionGoogleCloudSettingsList",
      },
      timeouts: {
        value: cloudRouterConnectionGoogleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudRouterConnectionGoogleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
