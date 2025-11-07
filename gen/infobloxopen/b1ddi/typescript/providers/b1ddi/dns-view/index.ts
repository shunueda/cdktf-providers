// https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Comment for view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#comment DnsView#comment}
  */
  readonly comment?: string;
  /**
  * Optional. _true_ to use custom root nameservers instead of the default ones.
  * 
  * The _custom_root_ns_ is validated when enabled.
  * 
  * Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#custom_root_ns_enabled DnsView#custom_root_ns_enabled}
  */
  readonly customRootNsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. _true_ to disable object. A disabled object is effectively non-existent when generating configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#disabled DnsView#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. _true_ to perform DNSSEC validation.
  * Ignored if _dnssec_enabled_ is _false_.
  * 
  * Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#dnssec_enable_validation DnsView#dnssec_enable_validation}
  */
  readonly dnssecEnableValidation?: boolean | cdktf.IResolvable;
  /**
  * Optional. Master toggle for all DNSSEC processing.
  * Other _dnssec_*_ configuration is unused if this is disabled.
  * 
  * Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#dnssec_enabled DnsView#dnssec_enabled}
  */
  readonly dnssecEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. _true_ to reject expired DNSSEC keys.
  * Ignored if either _dnssec_enabled_ or _dnssec_enable_validation_ is _false_.
  * 
  * Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#dnssec_validate_expiry DnsView#dnssec_validate_expiry}
  */
  readonly dnssecValidateExpiry?: boolean | cdktf.IResolvable;
  /**
  * Optional. _true_ to enable EDNS client subnet for recursive queries.
  * Other _ecs_*_ fields are ignored if this field is not enabled.
  * 
  * Defaults to _false-.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#ecs_enabled DnsView#ecs_enabled}
  */
  readonly ecsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. _true_ to enable ECS options in outbound queries. This functionality has additional overhead so it is disabled by default.
  * 
  * Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#ecs_forwarding DnsView#ecs_forwarding}
  */
  readonly ecsForwarding?: boolean | cdktf.IResolvable;
  /**
  * Optional. Maximum scope length for v4 ECS.
  * 
  * Unsigned integer, min 1 max 24
  * 
  * Defaults to 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#ecs_prefix_v4 DnsView#ecs_prefix_v4}
  */
  readonly ecsPrefixV4?: number;
  /**
  * Optional. Maximum scope length for v6 ECS.
  * 
  * Unsigned integer, min 1 max 56
  * 
  * Defaults to 56.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#ecs_prefix_v6 DnsView#ecs_prefix_v6}
  */
  readonly ecsPrefixV6?: number;
  /**
  * Optional. _edns_udp_size_ represents the edns UDP size.
  * The size a querying DNS server advertises to the DNS server it’s sending a query to.
  * 
  * Defaults to 1232 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#edns_udp_size DnsView#edns_udp_size}
  */
  readonly ednsUdpSize?: number;
  /**
  * Optional. _true_ to only forward.
  * 
  * Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#forwarders_only DnsView#forwarders_only}
  */
  readonly forwardersOnly?: boolean | cdktf.IResolvable;
  /**
  * _gss_tsig_enabled_ enables/disables GSS-TSIG signed dynamic updates.
  * 
  * Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#gss_tsig_enabled DnsView#gss_tsig_enabled}
  */
  readonly gssTsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#id DnsView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#ip_spaces DnsView#ip_spaces}
  */
  readonly ipSpaces?: string[];
  /**
  * Optional. Unused in the current on-prem DNS server implementation.
  * 
  * Unsigned integer, min 0 max 3600 (1h).
  * 
  * Defaults to 600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#lame_ttl DnsView#lame_ttl}
  */
  readonly lameTtl?: number;
  /**
  * Optional. If _true_ only recursive queries from matching clients access the view.
  * 
  * Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#match_recursive_only DnsView#match_recursive_only}
  */
  readonly matchRecursiveOnly?: boolean | cdktf.IResolvable;
  /**
  * Optional. Seconds to cache positive responses.
  * 
  * Unsigned integer, min 1 max 604800 (7d).
  * 
  * Defaults to 604800 (7d).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#max_cache_ttl DnsView#max_cache_ttl}
  */
  readonly maxCacheTtl?: number;
  /**
  * Optional. Seconds to cache negative responses.
  * 
  * Unsigned integer, min 1 max 604800 (7d).
  * 
  * Defaults to 10800 (3h).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#max_negative_ttl DnsView#max_negative_ttl}
  */
  readonly maxNegativeTtl?: number;
  /**
  * Optional. _max_udp_size_ represents maximum UDP payload size.
  * The maximum number of bytes a responding DNS server will send to a UDP datagram.
  * 
  * Defaults to 1232 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#max_udp_size DnsView#max_udp_size}
  */
  readonly maxUdpSize?: number;
  /**
  * Optional. When enabled, the DNS server will only add records to the authority and additional data sections when they are required.
  * 
  * Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#minimal_responses DnsView#minimal_responses}
  */
  readonly minimalResponses?: boolean | cdktf.IResolvable;
  /**
  * Name of view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#name DnsView#name}
  */
  readonly name: string;
  /**
  * _notify_ all external secondary DNS servers.
  * 
  * Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#notify DnsView#notify}
  */
  readonly notify?: boolean | cdktf.IResolvable;
  /**
  * Optional. _true_ to allow recursive DNS queries.
  * 
  * Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#recursion_enabled DnsView#recursion_enabled}
  */
  readonly recursionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Tagging specifics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#tags DnsView#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Optional. Use default forwarders to resolve queries for subzones.
  * 
  * Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#use_forwarders_for_subzones DnsView#use_forwarders_for_subzones}
  */
  readonly useForwardersForSubzones?: boolean | cdktf.IResolvable;
  /**
  * custom_root_ns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#custom_root_ns DnsView#custom_root_ns}
  */
  readonly customRootNs?: DnsViewCustomRootNs[] | cdktf.IResolvable;
  /**
  * dnssec_trust_anchors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#dnssec_trust_anchors DnsView#dnssec_trust_anchors}
  */
  readonly dnssecTrustAnchors?: DnsViewDnssecTrustAnchors[] | cdktf.IResolvable;
  /**
  * ecs_zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#ecs_zones DnsView#ecs_zones}
  */
  readonly ecsZones?: DnsViewEcsZones[] | cdktf.IResolvable;
  /**
  * forwarders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#forwarders DnsView#forwarders}
  */
  readonly forwarders?: DnsViewForwarders[] | cdktf.IResolvable;
  /**
  * inheritance_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#inheritance_sources DnsView#inheritance_sources}
  */
  readonly inheritanceSources?: DnsViewInheritanceSources;
  /**
  * match_clients_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#match_clients_acl DnsView#match_clients_acl}
  */
  readonly matchClientsAcl?: DnsViewMatchClientsAcl[] | cdktf.IResolvable;
  /**
  * match_destinations_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#match_destinations_acl DnsView#match_destinations_acl}
  */
  readonly matchDestinationsAcl?: DnsViewMatchDestinationsAcl[] | cdktf.IResolvable;
  /**
  * query_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#query_acl DnsView#query_acl}
  */
  readonly queryAcl?: DnsViewQueryAcl[] | cdktf.IResolvable;
  /**
  * recursion_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#recursion_acl DnsView#recursion_acl}
  */
  readonly recursionAcl?: DnsViewRecursionAcl[] | cdktf.IResolvable;
  /**
  * transfer_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#transfer_acl DnsView#transfer_acl}
  */
  readonly transferAcl?: DnsViewTransferAcl[] | cdktf.IResolvable;
  /**
  * update_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#update_acl DnsView#update_acl}
  */
  readonly updateAcl?: DnsViewUpdateAcl[] | cdktf.IResolvable;
  /**
  * zone_authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#zone_authority DnsView#zone_authority}
  */
  readonly zoneAuthority?: DnsViewZoneAuthority;
}
export interface DnsViewDnssecRootKeys {
}

export function dnsViewDnssecRootKeysToTerraform(struct?: DnsViewDnssecRootKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewDnssecRootKeysToHclTerraform(struct?: DnsViewDnssecRootKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewDnssecRootKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewDnssecRootKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewDnssecRootKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getNumberAttribute('algorithm');
  }

  // protocol_zone - computed: true, optional: false, required: false
  public get protocolZone() {
    return this.getStringAttribute('protocol_zone');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // sep - computed: true, optional: false, required: false
  public get sep() {
    return this.getBooleanAttribute('sep');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DnsViewDnssecRootKeysList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewDnssecRootKeysOutputReference {
    return new DnsViewDnssecRootKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewCustomRootNs {
  /**
  * IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#address DnsView#address}
  */
  readonly address: string;
  /**
  * FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#fqdn DnsView#fqdn}
  */
  readonly fqdn: string;
}

export function dnsViewCustomRootNsToTerraform(struct?: DnsViewCustomRootNs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dnsViewCustomRootNsToHclTerraform(struct?: DnsViewCustomRootNs | cdktf.IResolvable): any {
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
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewCustomRootNsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewCustomRootNs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewCustomRootNs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._fqdn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._fqdn = value.fqdn;
    }
  }

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

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }
}

export class DnsViewCustomRootNsList extends cdktf.ComplexList {
  public internalValue? : DnsViewCustomRootNs[] | cdktf.IResolvable

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
  public get(index: number): DnsViewCustomRootNsOutputReference {
    return new DnsViewCustomRootNsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewDnssecTrustAnchors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#algorithm DnsView#algorithm}
  */
  readonly algorithm: number;
  /**
  * DNSSEC key data. Non-empty, valid base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#public_key DnsView#public_key}
  */
  readonly publicKey: string;
  /**
  * Optional. Secure Entry Point flag.
  * 
  * Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#sep DnsView#sep}
  */
  readonly sep?: boolean | cdktf.IResolvable;
  /**
  * Zone FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#zone DnsView#zone}
  */
  readonly zone: string;
}

export function dnsViewDnssecTrustAnchorsToTerraform(struct?: DnsViewDnssecTrustAnchors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.numberToTerraform(struct!.algorithm),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    sep: cdktf.booleanToTerraform(struct!.sep),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dnsViewDnssecTrustAnchorsToHclTerraform(struct?: DnsViewDnssecTrustAnchors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.numberToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sep: {
      value: cdktf.booleanToHclTerraform(struct!.sep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewDnssecTrustAnchorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewDnssecTrustAnchors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._sep !== undefined) {
      hasAnyValues = true;
      internalValueResult.sep = this._sep;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewDnssecTrustAnchors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._publicKey = undefined;
      this._sep = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._publicKey = value.publicKey;
      this._sep = value.sep;
      this._zone = value.zone;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: number; 
  public get algorithm() {
    return this.getNumberAttribute('algorithm');
  }
  public set algorithm(value: number) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // protocol_zone - computed: true, optional: false, required: false
  public get protocolZone() {
    return this.getStringAttribute('protocol_zone');
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // sep - computed: false, optional: true, required: false
  private _sep?: boolean | cdktf.IResolvable; 
  public get sep() {
    return this.getBooleanAttribute('sep');
  }
  public set sep(value: boolean | cdktf.IResolvable) {
    this._sep = value;
  }
  public resetSep() {
    this._sep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sepInput() {
    return this._sep;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class DnsViewDnssecTrustAnchorsList extends cdktf.ComplexList {
  public internalValue? : DnsViewDnssecTrustAnchors[] | cdktf.IResolvable

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
  public get(index: number): DnsViewDnssecTrustAnchorsOutputReference {
    return new DnsViewDnssecTrustAnchorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewEcsZones {
  /**
  * Access control for zone.
  * 
  * Allowed values:
  * * _allow_,
  * * _deny_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#access DnsView#access}
  */
  readonly access: string;
  /**
  * Zone FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#fqdn DnsView#fqdn}
  */
  readonly fqdn: string;
}

export function dnsViewEcsZonesToTerraform(struct?: DnsViewEcsZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dnsViewEcsZonesToHclTerraform(struct?: DnsViewEcsZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewEcsZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewEcsZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewEcsZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._fqdn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._fqdn = value.fqdn;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }
}

export class DnsViewEcsZonesList extends cdktf.ComplexList {
  public internalValue? : DnsViewEcsZones[] | cdktf.IResolvable

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
  public get(index: number): DnsViewEcsZonesOutputReference {
    return new DnsViewEcsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewForwarders {
  /**
  * Server IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#address DnsView#address}
  */
  readonly address: string;
  /**
  * Server FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#fqdn DnsView#fqdn}
  */
  readonly fqdn: string;
}

export function dnsViewForwardersToTerraform(struct?: DnsViewForwarders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dnsViewForwardersToHclTerraform(struct?: DnsViewForwarders | cdktf.IResolvable): any {
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
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewForwardersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewForwarders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewForwarders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._fqdn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._fqdn = value.fqdn;
    }
  }

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

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }
}

export class DnsViewForwardersList extends cdktf.ComplexList {
  public internalValue? : DnsViewForwarders[] | cdktf.IResolvable

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
  public get(index: number): DnsViewForwardersOutputReference {
    return new DnsViewForwardersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesCustomRootNsBlockValueCustomRootNs {
}

export function dnsViewInheritanceSourcesCustomRootNsBlockValueCustomRootNsToTerraform(struct?: DnsViewInheritanceSourcesCustomRootNsBlockValueCustomRootNs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesCustomRootNsBlockValueCustomRootNsToHclTerraform(struct?: DnsViewInheritanceSourcesCustomRootNsBlockValueCustomRootNs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesCustomRootNsBlockValueCustomRootNsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesCustomRootNsBlockValueCustomRootNs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesCustomRootNsBlockValueCustomRootNs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }
}

export class DnsViewInheritanceSourcesCustomRootNsBlockValueCustomRootNsList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesCustomRootNsBlockValueCustomRootNsOutputReference {
    return new DnsViewInheritanceSourcesCustomRootNsBlockValueCustomRootNsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesCustomRootNsBlockValue {
}

export function dnsViewInheritanceSourcesCustomRootNsBlockValueToTerraform(struct?: DnsViewInheritanceSourcesCustomRootNsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesCustomRootNsBlockValueToHclTerraform(struct?: DnsViewInheritanceSourcesCustomRootNsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesCustomRootNsBlockValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesCustomRootNsBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesCustomRootNsBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_root_ns - computed: true, optional: false, required: false
  private _customRootNs = new DnsViewInheritanceSourcesCustomRootNsBlockValueCustomRootNsList(this, "custom_root_ns", false);
  public get customRootNs() {
    return this._customRootNs;
  }

  // custom_root_ns_enabled - computed: true, optional: false, required: false
  public get customRootNsEnabled() {
    return this.getBooleanAttribute('custom_root_ns_enabled');
  }
}

export class DnsViewInheritanceSourcesCustomRootNsBlockValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesCustomRootNsBlockValueOutputReference {
    return new DnsViewInheritanceSourcesCustomRootNsBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesCustomRootNsBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesCustomRootNsBlockToTerraform(struct?: DnsViewInheritanceSourcesCustomRootNsBlockOutputReference | DnsViewInheritanceSourcesCustomRootNsBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesCustomRootNsBlockToHclTerraform(struct?: DnsViewInheritanceSourcesCustomRootNsBlockOutputReference | DnsViewInheritanceSourcesCustomRootNsBlock): any {
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

export class DnsViewInheritanceSourcesCustomRootNsBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesCustomRootNsBlock | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesCustomRootNsBlock | undefined) {
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
  private _value = new DnsViewInheritanceSourcesCustomRootNsBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsViewInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors {
}

export function dnsViewInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsToTerraform(struct?: DnsViewInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsToHclTerraform(struct?: DnsViewInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getNumberAttribute('algorithm');
  }

  // protocol_zone - computed: true, optional: false, required: false
  public get protocolZone() {
    return this.getStringAttribute('protocol_zone');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // sep - computed: true, optional: false, required: false
  public get sep() {
    return this.getBooleanAttribute('sep');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DnsViewInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsOutputReference {
    return new DnsViewInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesDnssecValidationBlockValue {
}

export function dnsViewInheritanceSourcesDnssecValidationBlockValueToTerraform(struct?: DnsViewInheritanceSourcesDnssecValidationBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesDnssecValidationBlockValueToHclTerraform(struct?: DnsViewInheritanceSourcesDnssecValidationBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesDnssecValidationBlockValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesDnssecValidationBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesDnssecValidationBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dnssec_enable_validation - computed: true, optional: false, required: false
  public get dnssecEnableValidation() {
    return this.getBooleanAttribute('dnssec_enable_validation');
  }

  // dnssec_enabled - computed: true, optional: false, required: false
  public get dnssecEnabled() {
    return this.getBooleanAttribute('dnssec_enabled');
  }

  // dnssec_trust_anchors - computed: true, optional: false, required: false
  private _dnssecTrustAnchors = new DnsViewInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsList(this, "dnssec_trust_anchors", false);
  public get dnssecTrustAnchors() {
    return this._dnssecTrustAnchors;
  }

  // dnssec_validate_expiry - computed: true, optional: false, required: false
  public get dnssecValidateExpiry() {
    return this.getBooleanAttribute('dnssec_validate_expiry');
  }
}

export class DnsViewInheritanceSourcesDnssecValidationBlockValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesDnssecValidationBlockValueOutputReference {
    return new DnsViewInheritanceSourcesDnssecValidationBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesDnssecValidationBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesDnssecValidationBlockToTerraform(struct?: DnsViewInheritanceSourcesDnssecValidationBlockOutputReference | DnsViewInheritanceSourcesDnssecValidationBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesDnssecValidationBlockToHclTerraform(struct?: DnsViewInheritanceSourcesDnssecValidationBlockOutputReference | DnsViewInheritanceSourcesDnssecValidationBlock): any {
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

export class DnsViewInheritanceSourcesDnssecValidationBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesDnssecValidationBlock | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesDnssecValidationBlock | undefined) {
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
  private _value = new DnsViewInheritanceSourcesDnssecValidationBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsViewInheritanceSourcesEcsBlockValueEcsZones {
}

export function dnsViewInheritanceSourcesEcsBlockValueEcsZonesToTerraform(struct?: DnsViewInheritanceSourcesEcsBlockValueEcsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesEcsBlockValueEcsZonesToHclTerraform(struct?: DnsViewInheritanceSourcesEcsBlockValueEcsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesEcsBlockValueEcsZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesEcsBlockValueEcsZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesEcsBlockValueEcsZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }
}

export class DnsViewInheritanceSourcesEcsBlockValueEcsZonesList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesEcsBlockValueEcsZonesOutputReference {
    return new DnsViewInheritanceSourcesEcsBlockValueEcsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesEcsBlockValue {
}

export function dnsViewInheritanceSourcesEcsBlockValueToTerraform(struct?: DnsViewInheritanceSourcesEcsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesEcsBlockValueToHclTerraform(struct?: DnsViewInheritanceSourcesEcsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesEcsBlockValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesEcsBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesEcsBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ecs_enabled - computed: true, optional: false, required: false
  public get ecsEnabled() {
    return this.getBooleanAttribute('ecs_enabled');
  }

  // ecs_forwarding - computed: true, optional: false, required: false
  public get ecsForwarding() {
    return this.getBooleanAttribute('ecs_forwarding');
  }

  // ecs_prefix_v4 - computed: true, optional: false, required: false
  public get ecsPrefixV4() {
    return this.getNumberAttribute('ecs_prefix_v4');
  }

  // ecs_prefix_v6 - computed: true, optional: false, required: false
  public get ecsPrefixV6() {
    return this.getNumberAttribute('ecs_prefix_v6');
  }

  // ecs_zones - computed: true, optional: false, required: false
  private _ecsZones = new DnsViewInheritanceSourcesEcsBlockValueEcsZonesList(this, "ecs_zones", false);
  public get ecsZones() {
    return this._ecsZones;
  }
}

export class DnsViewInheritanceSourcesEcsBlockValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesEcsBlockValueOutputReference {
    return new DnsViewInheritanceSourcesEcsBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesEcsBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesEcsBlockToTerraform(struct?: DnsViewInheritanceSourcesEcsBlockOutputReference | DnsViewInheritanceSourcesEcsBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesEcsBlockToHclTerraform(struct?: DnsViewInheritanceSourcesEcsBlockOutputReference | DnsViewInheritanceSourcesEcsBlock): any {
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

export class DnsViewInheritanceSourcesEcsBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesEcsBlock | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesEcsBlock | undefined) {
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
  private _value = new DnsViewInheritanceSourcesEcsBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsViewInheritanceSourcesEdnsUdpSize {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesEdnsUdpSizeToTerraform(struct?: DnsViewInheritanceSourcesEdnsUdpSizeOutputReference | DnsViewInheritanceSourcesEdnsUdpSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesEdnsUdpSizeToHclTerraform(struct?: DnsViewInheritanceSourcesEdnsUdpSizeOutputReference | DnsViewInheritanceSourcesEdnsUdpSize): any {
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

export class DnsViewInheritanceSourcesEdnsUdpSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesEdnsUdpSize | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesEdnsUdpSize | undefined) {
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
export interface DnsViewInheritanceSourcesForwardersBlockValueForwarders {
}

export function dnsViewInheritanceSourcesForwardersBlockValueForwardersToTerraform(struct?: DnsViewInheritanceSourcesForwardersBlockValueForwarders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesForwardersBlockValueForwardersToHclTerraform(struct?: DnsViewInheritanceSourcesForwardersBlockValueForwarders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesForwardersBlockValueForwardersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesForwardersBlockValueForwarders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesForwardersBlockValueForwarders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }
}

export class DnsViewInheritanceSourcesForwardersBlockValueForwardersList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesForwardersBlockValueForwardersOutputReference {
    return new DnsViewInheritanceSourcesForwardersBlockValueForwardersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesForwardersBlockValue {
}

export function dnsViewInheritanceSourcesForwardersBlockValueToTerraform(struct?: DnsViewInheritanceSourcesForwardersBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesForwardersBlockValueToHclTerraform(struct?: DnsViewInheritanceSourcesForwardersBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesForwardersBlockValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesForwardersBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesForwardersBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forwarders - computed: true, optional: false, required: false
  private _forwarders = new DnsViewInheritanceSourcesForwardersBlockValueForwardersList(this, "forwarders", false);
  public get forwarders() {
    return this._forwarders;
  }

  // forwarders_only - computed: true, optional: false, required: false
  public get forwardersOnly() {
    return this.getBooleanAttribute('forwarders_only');
  }
}

export class DnsViewInheritanceSourcesForwardersBlockValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesForwardersBlockValueOutputReference {
    return new DnsViewInheritanceSourcesForwardersBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesForwardersBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesForwardersBlockToTerraform(struct?: DnsViewInheritanceSourcesForwardersBlockOutputReference | DnsViewInheritanceSourcesForwardersBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesForwardersBlockToHclTerraform(struct?: DnsViewInheritanceSourcesForwardersBlockOutputReference | DnsViewInheritanceSourcesForwardersBlock): any {
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

export class DnsViewInheritanceSourcesForwardersBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesForwardersBlock | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesForwardersBlock | undefined) {
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
  private _value = new DnsViewInheritanceSourcesForwardersBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsViewInheritanceSourcesGssTsigEnabled {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesGssTsigEnabledToTerraform(struct?: DnsViewInheritanceSourcesGssTsigEnabledOutputReference | DnsViewInheritanceSourcesGssTsigEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesGssTsigEnabledToHclTerraform(struct?: DnsViewInheritanceSourcesGssTsigEnabledOutputReference | DnsViewInheritanceSourcesGssTsigEnabled): any {
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

export class DnsViewInheritanceSourcesGssTsigEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesGssTsigEnabled | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesGssTsigEnabled | undefined) {
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
export interface DnsViewInheritanceSourcesLameTtl {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesLameTtlToTerraform(struct?: DnsViewInheritanceSourcesLameTtlOutputReference | DnsViewInheritanceSourcesLameTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesLameTtlToHclTerraform(struct?: DnsViewInheritanceSourcesLameTtlOutputReference | DnsViewInheritanceSourcesLameTtl): any {
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

export class DnsViewInheritanceSourcesLameTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesLameTtl | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesLameTtl | undefined) {
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
export interface DnsViewInheritanceSourcesMatchRecursiveOnly {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesMatchRecursiveOnlyToTerraform(struct?: DnsViewInheritanceSourcesMatchRecursiveOnlyOutputReference | DnsViewInheritanceSourcesMatchRecursiveOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesMatchRecursiveOnlyToHclTerraform(struct?: DnsViewInheritanceSourcesMatchRecursiveOnlyOutputReference | DnsViewInheritanceSourcesMatchRecursiveOnly): any {
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

export class DnsViewInheritanceSourcesMatchRecursiveOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesMatchRecursiveOnly | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesMatchRecursiveOnly | undefined) {
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
export interface DnsViewInheritanceSourcesMaxCacheTtl {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesMaxCacheTtlToTerraform(struct?: DnsViewInheritanceSourcesMaxCacheTtlOutputReference | DnsViewInheritanceSourcesMaxCacheTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesMaxCacheTtlToHclTerraform(struct?: DnsViewInheritanceSourcesMaxCacheTtlOutputReference | DnsViewInheritanceSourcesMaxCacheTtl): any {
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

export class DnsViewInheritanceSourcesMaxCacheTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesMaxCacheTtl | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesMaxCacheTtl | undefined) {
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
export interface DnsViewInheritanceSourcesMaxNegativeTtl {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesMaxNegativeTtlToTerraform(struct?: DnsViewInheritanceSourcesMaxNegativeTtlOutputReference | DnsViewInheritanceSourcesMaxNegativeTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesMaxNegativeTtlToHclTerraform(struct?: DnsViewInheritanceSourcesMaxNegativeTtlOutputReference | DnsViewInheritanceSourcesMaxNegativeTtl): any {
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

export class DnsViewInheritanceSourcesMaxNegativeTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesMaxNegativeTtl | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesMaxNegativeTtl | undefined) {
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
export interface DnsViewInheritanceSourcesMaxUdpSize {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesMaxUdpSizeToTerraform(struct?: DnsViewInheritanceSourcesMaxUdpSizeOutputReference | DnsViewInheritanceSourcesMaxUdpSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesMaxUdpSizeToHclTerraform(struct?: DnsViewInheritanceSourcesMaxUdpSizeOutputReference | DnsViewInheritanceSourcesMaxUdpSize): any {
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

export class DnsViewInheritanceSourcesMaxUdpSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesMaxUdpSize | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesMaxUdpSize | undefined) {
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
export interface DnsViewInheritanceSourcesMinimalResponses {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesMinimalResponsesToTerraform(struct?: DnsViewInheritanceSourcesMinimalResponsesOutputReference | DnsViewInheritanceSourcesMinimalResponses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesMinimalResponsesToHclTerraform(struct?: DnsViewInheritanceSourcesMinimalResponsesOutputReference | DnsViewInheritanceSourcesMinimalResponses): any {
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

export class DnsViewInheritanceSourcesMinimalResponsesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesMinimalResponses | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesMinimalResponses | undefined) {
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
export interface DnsViewInheritanceSourcesNotify {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesNotifyToTerraform(struct?: DnsViewInheritanceSourcesNotifyOutputReference | DnsViewInheritanceSourcesNotify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesNotifyToHclTerraform(struct?: DnsViewInheritanceSourcesNotifyOutputReference | DnsViewInheritanceSourcesNotify): any {
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

export class DnsViewInheritanceSourcesNotifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesNotify | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesNotify | undefined) {
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
export interface DnsViewInheritanceSourcesQueryAclValueTsigKey {
}

export function dnsViewInheritanceSourcesQueryAclValueTsigKeyToTerraform(struct?: DnsViewInheritanceSourcesQueryAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesQueryAclValueTsigKeyToHclTerraform(struct?: DnsViewInheritanceSourcesQueryAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesQueryAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesQueryAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesQueryAclValueTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DnsViewInheritanceSourcesQueryAclValueTsigKeyList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesQueryAclValueTsigKeyOutputReference {
    return new DnsViewInheritanceSourcesQueryAclValueTsigKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesQueryAclValue {
}

export function dnsViewInheritanceSourcesQueryAclValueToTerraform(struct?: DnsViewInheritanceSourcesQueryAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesQueryAclValueToHclTerraform(struct?: DnsViewInheritanceSourcesQueryAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesQueryAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesQueryAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesQueryAclValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DnsViewInheritanceSourcesQueryAclValueTsigKeyList(this, "tsig_key", false);
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DnsViewInheritanceSourcesQueryAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesQueryAclValueOutputReference {
    return new DnsViewInheritanceSourcesQueryAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesQueryAcl {
  /**
  * Optional. Inheritance setting for a field.
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesQueryAclToTerraform(struct?: DnsViewInheritanceSourcesQueryAclOutputReference | DnsViewInheritanceSourcesQueryAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesQueryAclToHclTerraform(struct?: DnsViewInheritanceSourcesQueryAclOutputReference | DnsViewInheritanceSourcesQueryAcl): any {
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

export class DnsViewInheritanceSourcesQueryAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesQueryAcl | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesQueryAcl | undefined) {
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
  private _value = new DnsViewInheritanceSourcesQueryAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsViewInheritanceSourcesRecursionAclValueTsigKey {
}

export function dnsViewInheritanceSourcesRecursionAclValueTsigKeyToTerraform(struct?: DnsViewInheritanceSourcesRecursionAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesRecursionAclValueTsigKeyToHclTerraform(struct?: DnsViewInheritanceSourcesRecursionAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesRecursionAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesRecursionAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesRecursionAclValueTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DnsViewInheritanceSourcesRecursionAclValueTsigKeyList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesRecursionAclValueTsigKeyOutputReference {
    return new DnsViewInheritanceSourcesRecursionAclValueTsigKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesRecursionAclValue {
}

export function dnsViewInheritanceSourcesRecursionAclValueToTerraform(struct?: DnsViewInheritanceSourcesRecursionAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesRecursionAclValueToHclTerraform(struct?: DnsViewInheritanceSourcesRecursionAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesRecursionAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesRecursionAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesRecursionAclValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DnsViewInheritanceSourcesRecursionAclValueTsigKeyList(this, "tsig_key", false);
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DnsViewInheritanceSourcesRecursionAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesRecursionAclValueOutputReference {
    return new DnsViewInheritanceSourcesRecursionAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesRecursionAcl {
  /**
  * Optional. Inheritance setting for a field.
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesRecursionAclToTerraform(struct?: DnsViewInheritanceSourcesRecursionAclOutputReference | DnsViewInheritanceSourcesRecursionAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesRecursionAclToHclTerraform(struct?: DnsViewInheritanceSourcesRecursionAclOutputReference | DnsViewInheritanceSourcesRecursionAcl): any {
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

export class DnsViewInheritanceSourcesRecursionAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesRecursionAcl | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesRecursionAcl | undefined) {
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
  private _value = new DnsViewInheritanceSourcesRecursionAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsViewInheritanceSourcesRecursionEnabled {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesRecursionEnabledToTerraform(struct?: DnsViewInheritanceSourcesRecursionEnabledOutputReference | DnsViewInheritanceSourcesRecursionEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesRecursionEnabledToHclTerraform(struct?: DnsViewInheritanceSourcesRecursionEnabledOutputReference | DnsViewInheritanceSourcesRecursionEnabled): any {
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

export class DnsViewInheritanceSourcesRecursionEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesRecursionEnabled | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesRecursionEnabled | undefined) {
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
export interface DnsViewInheritanceSourcesTransferAclValueTsigKey {
}

export function dnsViewInheritanceSourcesTransferAclValueTsigKeyToTerraform(struct?: DnsViewInheritanceSourcesTransferAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesTransferAclValueTsigKeyToHclTerraform(struct?: DnsViewInheritanceSourcesTransferAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesTransferAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesTransferAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesTransferAclValueTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DnsViewInheritanceSourcesTransferAclValueTsigKeyList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesTransferAclValueTsigKeyOutputReference {
    return new DnsViewInheritanceSourcesTransferAclValueTsigKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesTransferAclValue {
}

export function dnsViewInheritanceSourcesTransferAclValueToTerraform(struct?: DnsViewInheritanceSourcesTransferAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesTransferAclValueToHclTerraform(struct?: DnsViewInheritanceSourcesTransferAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesTransferAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesTransferAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesTransferAclValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DnsViewInheritanceSourcesTransferAclValueTsigKeyList(this, "tsig_key", false);
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DnsViewInheritanceSourcesTransferAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesTransferAclValueOutputReference {
    return new DnsViewInheritanceSourcesTransferAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesTransferAcl {
  /**
  * Optional. Inheritance setting for a field.
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesTransferAclToTerraform(struct?: DnsViewInheritanceSourcesTransferAclOutputReference | DnsViewInheritanceSourcesTransferAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesTransferAclToHclTerraform(struct?: DnsViewInheritanceSourcesTransferAclOutputReference | DnsViewInheritanceSourcesTransferAcl): any {
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

export class DnsViewInheritanceSourcesTransferAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesTransferAcl | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesTransferAcl | undefined) {
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
  private _value = new DnsViewInheritanceSourcesTransferAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsViewInheritanceSourcesUpdateAclValueTsigKey {
}

export function dnsViewInheritanceSourcesUpdateAclValueTsigKeyToTerraform(struct?: DnsViewInheritanceSourcesUpdateAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesUpdateAclValueTsigKeyToHclTerraform(struct?: DnsViewInheritanceSourcesUpdateAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesUpdateAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesUpdateAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesUpdateAclValueTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DnsViewInheritanceSourcesUpdateAclValueTsigKeyList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesUpdateAclValueTsigKeyOutputReference {
    return new DnsViewInheritanceSourcesUpdateAclValueTsigKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesUpdateAclValue {
}

export function dnsViewInheritanceSourcesUpdateAclValueToTerraform(struct?: DnsViewInheritanceSourcesUpdateAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesUpdateAclValueToHclTerraform(struct?: DnsViewInheritanceSourcesUpdateAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesUpdateAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesUpdateAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesUpdateAclValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DnsViewInheritanceSourcesUpdateAclValueTsigKeyList(this, "tsig_key", false);
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DnsViewInheritanceSourcesUpdateAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesUpdateAclValueOutputReference {
    return new DnsViewInheritanceSourcesUpdateAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesUpdateAcl {
  /**
  * Optional. Inheritance setting for a field.
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesUpdateAclToTerraform(struct?: DnsViewInheritanceSourcesUpdateAclOutputReference | DnsViewInheritanceSourcesUpdateAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesUpdateAclToHclTerraform(struct?: DnsViewInheritanceSourcesUpdateAclOutputReference | DnsViewInheritanceSourcesUpdateAcl): any {
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

export class DnsViewInheritanceSourcesUpdateAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesUpdateAcl | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesUpdateAcl | undefined) {
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
  private _value = new DnsViewInheritanceSourcesUpdateAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsViewInheritanceSourcesUseForwardersForSubzones {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesUseForwardersForSubzonesToTerraform(struct?: DnsViewInheritanceSourcesUseForwardersForSubzonesOutputReference | DnsViewInheritanceSourcesUseForwardersForSubzones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesUseForwardersForSubzonesToHclTerraform(struct?: DnsViewInheritanceSourcesUseForwardersForSubzonesOutputReference | DnsViewInheritanceSourcesUseForwardersForSubzones): any {
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

export class DnsViewInheritanceSourcesUseForwardersForSubzonesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesUseForwardersForSubzones | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesUseForwardersForSubzones | undefined) {
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
export interface DnsViewInheritanceSourcesZoneAuthorityDefaultTtl {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesZoneAuthorityDefaultTtlToTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityDefaultTtlOutputReference | DnsViewInheritanceSourcesZoneAuthorityDefaultTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesZoneAuthorityDefaultTtlToHclTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityDefaultTtlOutputReference | DnsViewInheritanceSourcesZoneAuthorityDefaultTtl): any {
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

export class DnsViewInheritanceSourcesZoneAuthorityDefaultTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesZoneAuthorityDefaultTtl | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesZoneAuthorityDefaultTtl | undefined) {
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
export interface DnsViewInheritanceSourcesZoneAuthorityExpire {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesZoneAuthorityExpireToTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityExpireOutputReference | DnsViewInheritanceSourcesZoneAuthorityExpire): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesZoneAuthorityExpireToHclTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityExpireOutputReference | DnsViewInheritanceSourcesZoneAuthorityExpire): any {
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

export class DnsViewInheritanceSourcesZoneAuthorityExpireOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesZoneAuthorityExpire | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesZoneAuthorityExpire | undefined) {
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
export interface DnsViewInheritanceSourcesZoneAuthorityMnameBlockValue {
}

export function dnsViewInheritanceSourcesZoneAuthorityMnameBlockValueToTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityMnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsViewInheritanceSourcesZoneAuthorityMnameBlockValueToHclTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityMnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsViewInheritanceSourcesZoneAuthorityMnameBlockValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewInheritanceSourcesZoneAuthorityMnameBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesZoneAuthorityMnameBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mname - computed: true, optional: false, required: false
  public get mname() {
    return this.getStringAttribute('mname');
  }

  // protocol_mname - computed: true, optional: false, required: false
  public get protocolMname() {
    return this.getStringAttribute('protocol_mname');
  }

  // use_default_mname - computed: true, optional: false, required: false
  public get useDefaultMname() {
    return this.getBooleanAttribute('use_default_mname');
  }
}

export class DnsViewInheritanceSourcesZoneAuthorityMnameBlockValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsViewInheritanceSourcesZoneAuthorityMnameBlockValueOutputReference {
    return new DnsViewInheritanceSourcesZoneAuthorityMnameBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewInheritanceSourcesZoneAuthorityMnameBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesZoneAuthorityMnameBlockToTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityMnameBlockOutputReference | DnsViewInheritanceSourcesZoneAuthorityMnameBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesZoneAuthorityMnameBlockToHclTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityMnameBlockOutputReference | DnsViewInheritanceSourcesZoneAuthorityMnameBlock): any {
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

export class DnsViewInheritanceSourcesZoneAuthorityMnameBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesZoneAuthorityMnameBlock | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesZoneAuthorityMnameBlock | undefined) {
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
  private _value = new DnsViewInheritanceSourcesZoneAuthorityMnameBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsViewInheritanceSourcesZoneAuthorityNegativeTtl {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesZoneAuthorityNegativeTtlToTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityNegativeTtlOutputReference | DnsViewInheritanceSourcesZoneAuthorityNegativeTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesZoneAuthorityNegativeTtlToHclTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityNegativeTtlOutputReference | DnsViewInheritanceSourcesZoneAuthorityNegativeTtl): any {
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

export class DnsViewInheritanceSourcesZoneAuthorityNegativeTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesZoneAuthorityNegativeTtl | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesZoneAuthorityNegativeTtl | undefined) {
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
export interface DnsViewInheritanceSourcesZoneAuthorityProtocolRname {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesZoneAuthorityProtocolRnameToTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityProtocolRnameOutputReference | DnsViewInheritanceSourcesZoneAuthorityProtocolRname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesZoneAuthorityProtocolRnameToHclTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityProtocolRnameOutputReference | DnsViewInheritanceSourcesZoneAuthorityProtocolRname): any {
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

export class DnsViewInheritanceSourcesZoneAuthorityProtocolRnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesZoneAuthorityProtocolRname | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesZoneAuthorityProtocolRname | undefined) {
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
export interface DnsViewInheritanceSourcesZoneAuthorityRefresh {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesZoneAuthorityRefreshToTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityRefreshOutputReference | DnsViewInheritanceSourcesZoneAuthorityRefresh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesZoneAuthorityRefreshToHclTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityRefreshOutputReference | DnsViewInheritanceSourcesZoneAuthorityRefresh): any {
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

export class DnsViewInheritanceSourcesZoneAuthorityRefreshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesZoneAuthorityRefresh | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesZoneAuthorityRefresh | undefined) {
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
export interface DnsViewInheritanceSourcesZoneAuthorityRetry {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesZoneAuthorityRetryToTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityRetryOutputReference | DnsViewInheritanceSourcesZoneAuthorityRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesZoneAuthorityRetryToHclTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityRetryOutputReference | DnsViewInheritanceSourcesZoneAuthorityRetry): any {
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

export class DnsViewInheritanceSourcesZoneAuthorityRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesZoneAuthorityRetry | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesZoneAuthorityRetry | undefined) {
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
export interface DnsViewInheritanceSourcesZoneAuthorityRname {
  /**
  * The inheritance setting for a field.
  * 
  * Valid values are:
  * * _inherit_: Use the inherited value.
  * * _override_: Use the value set in the object.
  * 
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#action DnsView#action}
  */
  readonly action?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#source DnsView#source}
  */
  readonly source?: string;
}

export function dnsViewInheritanceSourcesZoneAuthorityRnameToTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityRnameOutputReference | DnsViewInheritanceSourcesZoneAuthorityRname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsViewInheritanceSourcesZoneAuthorityRnameToHclTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityRnameOutputReference | DnsViewInheritanceSourcesZoneAuthorityRname): any {
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

export class DnsViewInheritanceSourcesZoneAuthorityRnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesZoneAuthorityRname | undefined {
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

  public set internalValue(value: DnsViewInheritanceSourcesZoneAuthorityRname | undefined) {
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
export interface DnsViewInheritanceSourcesZoneAuthority {
  /**
  * default_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#default_ttl DnsView#default_ttl}
  */
  readonly defaultTtl?: DnsViewInheritanceSourcesZoneAuthorityDefaultTtl;
  /**
  * expire block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#expire DnsView#expire}
  */
  readonly expire?: DnsViewInheritanceSourcesZoneAuthorityExpire;
  /**
  * mname_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#mname_block DnsView#mname_block}
  */
  readonly mnameBlock?: DnsViewInheritanceSourcesZoneAuthorityMnameBlock;
  /**
  * negative_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#negative_ttl DnsView#negative_ttl}
  */
  readonly negativeTtl?: DnsViewInheritanceSourcesZoneAuthorityNegativeTtl;
  /**
  * protocol_rname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#protocol_rname DnsView#protocol_rname}
  */
  readonly protocolRname?: DnsViewInheritanceSourcesZoneAuthorityProtocolRname;
  /**
  * refresh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#refresh DnsView#refresh}
  */
  readonly refresh?: DnsViewInheritanceSourcesZoneAuthorityRefresh;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#retry DnsView#retry}
  */
  readonly retry?: DnsViewInheritanceSourcesZoneAuthorityRetry;
  /**
  * rname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#rname DnsView#rname}
  */
  readonly rname?: DnsViewInheritanceSourcesZoneAuthorityRname;
}

export function dnsViewInheritanceSourcesZoneAuthorityToTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityOutputReference | DnsViewInheritanceSourcesZoneAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ttl: dnsViewInheritanceSourcesZoneAuthorityDefaultTtlToTerraform(struct!.defaultTtl),
    expire: dnsViewInheritanceSourcesZoneAuthorityExpireToTerraform(struct!.expire),
    mname_block: dnsViewInheritanceSourcesZoneAuthorityMnameBlockToTerraform(struct!.mnameBlock),
    negative_ttl: dnsViewInheritanceSourcesZoneAuthorityNegativeTtlToTerraform(struct!.negativeTtl),
    protocol_rname: dnsViewInheritanceSourcesZoneAuthorityProtocolRnameToTerraform(struct!.protocolRname),
    refresh: dnsViewInheritanceSourcesZoneAuthorityRefreshToTerraform(struct!.refresh),
    retry: dnsViewInheritanceSourcesZoneAuthorityRetryToTerraform(struct!.retry),
    rname: dnsViewInheritanceSourcesZoneAuthorityRnameToTerraform(struct!.rname),
  }
}


export function dnsViewInheritanceSourcesZoneAuthorityToHclTerraform(struct?: DnsViewInheritanceSourcesZoneAuthorityOutputReference | DnsViewInheritanceSourcesZoneAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ttl: {
      value: dnsViewInheritanceSourcesZoneAuthorityDefaultTtlToHclTerraform(struct!.defaultTtl),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesZoneAuthorityDefaultTtlList",
    },
    expire: {
      value: dnsViewInheritanceSourcesZoneAuthorityExpireToHclTerraform(struct!.expire),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesZoneAuthorityExpireList",
    },
    mname_block: {
      value: dnsViewInheritanceSourcesZoneAuthorityMnameBlockToHclTerraform(struct!.mnameBlock),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesZoneAuthorityMnameBlockList",
    },
    negative_ttl: {
      value: dnsViewInheritanceSourcesZoneAuthorityNegativeTtlToHclTerraform(struct!.negativeTtl),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesZoneAuthorityNegativeTtlList",
    },
    protocol_rname: {
      value: dnsViewInheritanceSourcesZoneAuthorityProtocolRnameToHclTerraform(struct!.protocolRname),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesZoneAuthorityProtocolRnameList",
    },
    refresh: {
      value: dnsViewInheritanceSourcesZoneAuthorityRefreshToHclTerraform(struct!.refresh),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesZoneAuthorityRefreshList",
    },
    retry: {
      value: dnsViewInheritanceSourcesZoneAuthorityRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesZoneAuthorityRetryList",
    },
    rname: {
      value: dnsViewInheritanceSourcesZoneAuthorityRnameToHclTerraform(struct!.rname),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesZoneAuthorityRnameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewInheritanceSourcesZoneAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSourcesZoneAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl?.internalValue;
    }
    if (this._expire?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expire = this._expire?.internalValue;
    }
    if (this._mnameBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mnameBlock = this._mnameBlock?.internalValue;
    }
    if (this._negativeTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeTtl = this._negativeTtl?.internalValue;
    }
    if (this._protocolRname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolRname = this._protocolRname?.internalValue;
    }
    if (this._refresh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refresh = this._refresh?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    if (this._rname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rname = this._rname?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSourcesZoneAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTtl.internalValue = undefined;
      this._expire.internalValue = undefined;
      this._mnameBlock.internalValue = undefined;
      this._negativeTtl.internalValue = undefined;
      this._protocolRname.internalValue = undefined;
      this._refresh.internalValue = undefined;
      this._retry.internalValue = undefined;
      this._rname.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTtl.internalValue = value.defaultTtl;
      this._expire.internalValue = value.expire;
      this._mnameBlock.internalValue = value.mnameBlock;
      this._negativeTtl.internalValue = value.negativeTtl;
      this._protocolRname.internalValue = value.protocolRname;
      this._refresh.internalValue = value.refresh;
      this._retry.internalValue = value.retry;
      this._rname.internalValue = value.rname;
    }
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl = new DnsViewInheritanceSourcesZoneAuthorityDefaultTtlOutputReference(this, "default_ttl");
  public get defaultTtl() {
    return this._defaultTtl;
  }
  public putDefaultTtl(value: DnsViewInheritanceSourcesZoneAuthorityDefaultTtl) {
    this._defaultTtl.internalValue = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl.internalValue;
  }

  // expire - computed: false, optional: true, required: false
  private _expire = new DnsViewInheritanceSourcesZoneAuthorityExpireOutputReference(this, "expire");
  public get expire() {
    return this._expire;
  }
  public putExpire(value: DnsViewInheritanceSourcesZoneAuthorityExpire) {
    this._expire.internalValue = value;
  }
  public resetExpire() {
    this._expire.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire.internalValue;
  }

  // mname_block - computed: false, optional: true, required: false
  private _mnameBlock = new DnsViewInheritanceSourcesZoneAuthorityMnameBlockOutputReference(this, "mname_block");
  public get mnameBlock() {
    return this._mnameBlock;
  }
  public putMnameBlock(value: DnsViewInheritanceSourcesZoneAuthorityMnameBlock) {
    this._mnameBlock.internalValue = value;
  }
  public resetMnameBlock() {
    this._mnameBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mnameBlockInput() {
    return this._mnameBlock.internalValue;
  }

  // negative_ttl - computed: false, optional: true, required: false
  private _negativeTtl = new DnsViewInheritanceSourcesZoneAuthorityNegativeTtlOutputReference(this, "negative_ttl");
  public get negativeTtl() {
    return this._negativeTtl;
  }
  public putNegativeTtl(value: DnsViewInheritanceSourcesZoneAuthorityNegativeTtl) {
    this._negativeTtl.internalValue = value;
  }
  public resetNegativeTtl() {
    this._negativeTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeTtlInput() {
    return this._negativeTtl.internalValue;
  }

  // protocol_rname - computed: false, optional: true, required: false
  private _protocolRname = new DnsViewInheritanceSourcesZoneAuthorityProtocolRnameOutputReference(this, "protocol_rname");
  public get protocolRname() {
    return this._protocolRname;
  }
  public putProtocolRname(value: DnsViewInheritanceSourcesZoneAuthorityProtocolRname) {
    this._protocolRname.internalValue = value;
  }
  public resetProtocolRname() {
    this._protocolRname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolRnameInput() {
    return this._protocolRname.internalValue;
  }

  // refresh - computed: false, optional: true, required: false
  private _refresh = new DnsViewInheritanceSourcesZoneAuthorityRefreshOutputReference(this, "refresh");
  public get refresh() {
    return this._refresh;
  }
  public putRefresh(value: DnsViewInheritanceSourcesZoneAuthorityRefresh) {
    this._refresh.internalValue = value;
  }
  public resetRefresh() {
    this._refresh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh.internalValue;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new DnsViewInheritanceSourcesZoneAuthorityRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: DnsViewInheritanceSourcesZoneAuthorityRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // rname - computed: false, optional: true, required: false
  private _rname = new DnsViewInheritanceSourcesZoneAuthorityRnameOutputReference(this, "rname");
  public get rname() {
    return this._rname;
  }
  public putRname(value: DnsViewInheritanceSourcesZoneAuthorityRname) {
    this._rname.internalValue = value;
  }
  public resetRname() {
    this._rname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rnameInput() {
    return this._rname.internalValue;
  }
}
export interface DnsViewInheritanceSources {
  /**
  * custom_root_ns_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#custom_root_ns_block DnsView#custom_root_ns_block}
  */
  readonly customRootNsBlock?: DnsViewInheritanceSourcesCustomRootNsBlock;
  /**
  * dnssec_validation_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#dnssec_validation_block DnsView#dnssec_validation_block}
  */
  readonly dnssecValidationBlock?: DnsViewInheritanceSourcesDnssecValidationBlock;
  /**
  * ecs_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#ecs_block DnsView#ecs_block}
  */
  readonly ecsBlock?: DnsViewInheritanceSourcesEcsBlock;
  /**
  * edns_udp_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#edns_udp_size DnsView#edns_udp_size}
  */
  readonly ednsUdpSize?: DnsViewInheritanceSourcesEdnsUdpSize;
  /**
  * forwarders_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#forwarders_block DnsView#forwarders_block}
  */
  readonly forwardersBlock?: DnsViewInheritanceSourcesForwardersBlock;
  /**
  * gss_tsig_enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#gss_tsig_enabled DnsView#gss_tsig_enabled}
  */
  readonly gssTsigEnabled?: DnsViewInheritanceSourcesGssTsigEnabled;
  /**
  * lame_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#lame_ttl DnsView#lame_ttl}
  */
  readonly lameTtl?: DnsViewInheritanceSourcesLameTtl;
  /**
  * match_recursive_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#match_recursive_only DnsView#match_recursive_only}
  */
  readonly matchRecursiveOnly?: DnsViewInheritanceSourcesMatchRecursiveOnly;
  /**
  * max_cache_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#max_cache_ttl DnsView#max_cache_ttl}
  */
  readonly maxCacheTtl?: DnsViewInheritanceSourcesMaxCacheTtl;
  /**
  * max_negative_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#max_negative_ttl DnsView#max_negative_ttl}
  */
  readonly maxNegativeTtl?: DnsViewInheritanceSourcesMaxNegativeTtl;
  /**
  * max_udp_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#max_udp_size DnsView#max_udp_size}
  */
  readonly maxUdpSize?: DnsViewInheritanceSourcesMaxUdpSize;
  /**
  * minimal_responses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#minimal_responses DnsView#minimal_responses}
  */
  readonly minimalResponses?: DnsViewInheritanceSourcesMinimalResponses;
  /**
  * notify block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#notify DnsView#notify}
  */
  readonly notify?: DnsViewInheritanceSourcesNotify;
  /**
  * query_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#query_acl DnsView#query_acl}
  */
  readonly queryAcl?: DnsViewInheritanceSourcesQueryAcl;
  /**
  * recursion_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#recursion_acl DnsView#recursion_acl}
  */
  readonly recursionAcl?: DnsViewInheritanceSourcesRecursionAcl;
  /**
  * recursion_enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#recursion_enabled DnsView#recursion_enabled}
  */
  readonly recursionEnabled?: DnsViewInheritanceSourcesRecursionEnabled;
  /**
  * transfer_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#transfer_acl DnsView#transfer_acl}
  */
  readonly transferAcl?: DnsViewInheritanceSourcesTransferAcl;
  /**
  * update_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#update_acl DnsView#update_acl}
  */
  readonly updateAcl?: DnsViewInheritanceSourcesUpdateAcl;
  /**
  * use_forwarders_for_subzones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#use_forwarders_for_subzones DnsView#use_forwarders_for_subzones}
  */
  readonly useForwardersForSubzones?: DnsViewInheritanceSourcesUseForwardersForSubzones;
  /**
  * zone_authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#zone_authority DnsView#zone_authority}
  */
  readonly zoneAuthority?: DnsViewInheritanceSourcesZoneAuthority;
}

export function dnsViewInheritanceSourcesToTerraform(struct?: DnsViewInheritanceSourcesOutputReference | DnsViewInheritanceSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_root_ns_block: dnsViewInheritanceSourcesCustomRootNsBlockToTerraform(struct!.customRootNsBlock),
    dnssec_validation_block: dnsViewInheritanceSourcesDnssecValidationBlockToTerraform(struct!.dnssecValidationBlock),
    ecs_block: dnsViewInheritanceSourcesEcsBlockToTerraform(struct!.ecsBlock),
    edns_udp_size: dnsViewInheritanceSourcesEdnsUdpSizeToTerraform(struct!.ednsUdpSize),
    forwarders_block: dnsViewInheritanceSourcesForwardersBlockToTerraform(struct!.forwardersBlock),
    gss_tsig_enabled: dnsViewInheritanceSourcesGssTsigEnabledToTerraform(struct!.gssTsigEnabled),
    lame_ttl: dnsViewInheritanceSourcesLameTtlToTerraform(struct!.lameTtl),
    match_recursive_only: dnsViewInheritanceSourcesMatchRecursiveOnlyToTerraform(struct!.matchRecursiveOnly),
    max_cache_ttl: dnsViewInheritanceSourcesMaxCacheTtlToTerraform(struct!.maxCacheTtl),
    max_negative_ttl: dnsViewInheritanceSourcesMaxNegativeTtlToTerraform(struct!.maxNegativeTtl),
    max_udp_size: dnsViewInheritanceSourcesMaxUdpSizeToTerraform(struct!.maxUdpSize),
    minimal_responses: dnsViewInheritanceSourcesMinimalResponsesToTerraform(struct!.minimalResponses),
    notify: dnsViewInheritanceSourcesNotifyToTerraform(struct!.notify),
    query_acl: dnsViewInheritanceSourcesQueryAclToTerraform(struct!.queryAcl),
    recursion_acl: dnsViewInheritanceSourcesRecursionAclToTerraform(struct!.recursionAcl),
    recursion_enabled: dnsViewInheritanceSourcesRecursionEnabledToTerraform(struct!.recursionEnabled),
    transfer_acl: dnsViewInheritanceSourcesTransferAclToTerraform(struct!.transferAcl),
    update_acl: dnsViewInheritanceSourcesUpdateAclToTerraform(struct!.updateAcl),
    use_forwarders_for_subzones: dnsViewInheritanceSourcesUseForwardersForSubzonesToTerraform(struct!.useForwardersForSubzones),
    zone_authority: dnsViewInheritanceSourcesZoneAuthorityToTerraform(struct!.zoneAuthority),
  }
}


export function dnsViewInheritanceSourcesToHclTerraform(struct?: DnsViewInheritanceSourcesOutputReference | DnsViewInheritanceSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_root_ns_block: {
      value: dnsViewInheritanceSourcesCustomRootNsBlockToHclTerraform(struct!.customRootNsBlock),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesCustomRootNsBlockList",
    },
    dnssec_validation_block: {
      value: dnsViewInheritanceSourcesDnssecValidationBlockToHclTerraform(struct!.dnssecValidationBlock),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesDnssecValidationBlockList",
    },
    ecs_block: {
      value: dnsViewInheritanceSourcesEcsBlockToHclTerraform(struct!.ecsBlock),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesEcsBlockList",
    },
    edns_udp_size: {
      value: dnsViewInheritanceSourcesEdnsUdpSizeToHclTerraform(struct!.ednsUdpSize),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesEdnsUdpSizeList",
    },
    forwarders_block: {
      value: dnsViewInheritanceSourcesForwardersBlockToHclTerraform(struct!.forwardersBlock),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesForwardersBlockList",
    },
    gss_tsig_enabled: {
      value: dnsViewInheritanceSourcesGssTsigEnabledToHclTerraform(struct!.gssTsigEnabled),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesGssTsigEnabledList",
    },
    lame_ttl: {
      value: dnsViewInheritanceSourcesLameTtlToHclTerraform(struct!.lameTtl),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesLameTtlList",
    },
    match_recursive_only: {
      value: dnsViewInheritanceSourcesMatchRecursiveOnlyToHclTerraform(struct!.matchRecursiveOnly),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesMatchRecursiveOnlyList",
    },
    max_cache_ttl: {
      value: dnsViewInheritanceSourcesMaxCacheTtlToHclTerraform(struct!.maxCacheTtl),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesMaxCacheTtlList",
    },
    max_negative_ttl: {
      value: dnsViewInheritanceSourcesMaxNegativeTtlToHclTerraform(struct!.maxNegativeTtl),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesMaxNegativeTtlList",
    },
    max_udp_size: {
      value: dnsViewInheritanceSourcesMaxUdpSizeToHclTerraform(struct!.maxUdpSize),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesMaxUdpSizeList",
    },
    minimal_responses: {
      value: dnsViewInheritanceSourcesMinimalResponsesToHclTerraform(struct!.minimalResponses),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesMinimalResponsesList",
    },
    notify: {
      value: dnsViewInheritanceSourcesNotifyToHclTerraform(struct!.notify),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesNotifyList",
    },
    query_acl: {
      value: dnsViewInheritanceSourcesQueryAclToHclTerraform(struct!.queryAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesQueryAclList",
    },
    recursion_acl: {
      value: dnsViewInheritanceSourcesRecursionAclToHclTerraform(struct!.recursionAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesRecursionAclList",
    },
    recursion_enabled: {
      value: dnsViewInheritanceSourcesRecursionEnabledToHclTerraform(struct!.recursionEnabled),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesRecursionEnabledList",
    },
    transfer_acl: {
      value: dnsViewInheritanceSourcesTransferAclToHclTerraform(struct!.transferAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesTransferAclList",
    },
    update_acl: {
      value: dnsViewInheritanceSourcesUpdateAclToHclTerraform(struct!.updateAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesUpdateAclList",
    },
    use_forwarders_for_subzones: {
      value: dnsViewInheritanceSourcesUseForwardersForSubzonesToHclTerraform(struct!.useForwardersForSubzones),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesUseForwardersForSubzonesList",
    },
    zone_authority: {
      value: dnsViewInheritanceSourcesZoneAuthorityToHclTerraform(struct!.zoneAuthority),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewInheritanceSourcesZoneAuthorityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewInheritanceSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRootNsBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRootNsBlock = this._customRootNsBlock?.internalValue;
    }
    if (this._dnssecValidationBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecValidationBlock = this._dnssecValidationBlock?.internalValue;
    }
    if (this._ecsBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsBlock = this._ecsBlock?.internalValue;
    }
    if (this._ednsUdpSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ednsUdpSize = this._ednsUdpSize?.internalValue;
    }
    if (this._forwardersBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardersBlock = this._forwardersBlock?.internalValue;
    }
    if (this._gssTsigEnabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssTsigEnabled = this._gssTsigEnabled?.internalValue;
    }
    if (this._lameTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lameTtl = this._lameTtl?.internalValue;
    }
    if (this._matchRecursiveOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRecursiveOnly = this._matchRecursiveOnly?.internalValue;
    }
    if (this._maxCacheTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCacheTtl = this._maxCacheTtl?.internalValue;
    }
    if (this._maxNegativeTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNegativeTtl = this._maxNegativeTtl?.internalValue;
    }
    if (this._maxUdpSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUdpSize = this._maxUdpSize?.internalValue;
    }
    if (this._minimalResponses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimalResponses = this._minimalResponses?.internalValue;
    }
    if (this._notify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify?.internalValue;
    }
    if (this._queryAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryAcl = this._queryAcl?.internalValue;
    }
    if (this._recursionAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursionAcl = this._recursionAcl?.internalValue;
    }
    if (this._recursionEnabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursionEnabled = this._recursionEnabled?.internalValue;
    }
    if (this._transferAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferAcl = this._transferAcl?.internalValue;
    }
    if (this._updateAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateAcl = this._updateAcl?.internalValue;
    }
    if (this._useForwardersForSubzones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useForwardersForSubzones = this._useForwardersForSubzones?.internalValue;
    }
    if (this._zoneAuthority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneAuthority = this._zoneAuthority?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewInheritanceSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRootNsBlock.internalValue = undefined;
      this._dnssecValidationBlock.internalValue = undefined;
      this._ecsBlock.internalValue = undefined;
      this._ednsUdpSize.internalValue = undefined;
      this._forwardersBlock.internalValue = undefined;
      this._gssTsigEnabled.internalValue = undefined;
      this._lameTtl.internalValue = undefined;
      this._matchRecursiveOnly.internalValue = undefined;
      this._maxCacheTtl.internalValue = undefined;
      this._maxNegativeTtl.internalValue = undefined;
      this._maxUdpSize.internalValue = undefined;
      this._minimalResponses.internalValue = undefined;
      this._notify.internalValue = undefined;
      this._queryAcl.internalValue = undefined;
      this._recursionAcl.internalValue = undefined;
      this._recursionEnabled.internalValue = undefined;
      this._transferAcl.internalValue = undefined;
      this._updateAcl.internalValue = undefined;
      this._useForwardersForSubzones.internalValue = undefined;
      this._zoneAuthority.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRootNsBlock.internalValue = value.customRootNsBlock;
      this._dnssecValidationBlock.internalValue = value.dnssecValidationBlock;
      this._ecsBlock.internalValue = value.ecsBlock;
      this._ednsUdpSize.internalValue = value.ednsUdpSize;
      this._forwardersBlock.internalValue = value.forwardersBlock;
      this._gssTsigEnabled.internalValue = value.gssTsigEnabled;
      this._lameTtl.internalValue = value.lameTtl;
      this._matchRecursiveOnly.internalValue = value.matchRecursiveOnly;
      this._maxCacheTtl.internalValue = value.maxCacheTtl;
      this._maxNegativeTtl.internalValue = value.maxNegativeTtl;
      this._maxUdpSize.internalValue = value.maxUdpSize;
      this._minimalResponses.internalValue = value.minimalResponses;
      this._notify.internalValue = value.notify;
      this._queryAcl.internalValue = value.queryAcl;
      this._recursionAcl.internalValue = value.recursionAcl;
      this._recursionEnabled.internalValue = value.recursionEnabled;
      this._transferAcl.internalValue = value.transferAcl;
      this._updateAcl.internalValue = value.updateAcl;
      this._useForwardersForSubzones.internalValue = value.useForwardersForSubzones;
      this._zoneAuthority.internalValue = value.zoneAuthority;
    }
  }

  // custom_root_ns_block - computed: false, optional: true, required: false
  private _customRootNsBlock = new DnsViewInheritanceSourcesCustomRootNsBlockOutputReference(this, "custom_root_ns_block");
  public get customRootNsBlock() {
    return this._customRootNsBlock;
  }
  public putCustomRootNsBlock(value: DnsViewInheritanceSourcesCustomRootNsBlock) {
    this._customRootNsBlock.internalValue = value;
  }
  public resetCustomRootNsBlock() {
    this._customRootNsBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRootNsBlockInput() {
    return this._customRootNsBlock.internalValue;
  }

  // dnssec_validation_block - computed: false, optional: true, required: false
  private _dnssecValidationBlock = new DnsViewInheritanceSourcesDnssecValidationBlockOutputReference(this, "dnssec_validation_block");
  public get dnssecValidationBlock() {
    return this._dnssecValidationBlock;
  }
  public putDnssecValidationBlock(value: DnsViewInheritanceSourcesDnssecValidationBlock) {
    this._dnssecValidationBlock.internalValue = value;
  }
  public resetDnssecValidationBlock() {
    this._dnssecValidationBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecValidationBlockInput() {
    return this._dnssecValidationBlock.internalValue;
  }

  // ecs_block - computed: false, optional: true, required: false
  private _ecsBlock = new DnsViewInheritanceSourcesEcsBlockOutputReference(this, "ecs_block");
  public get ecsBlock() {
    return this._ecsBlock;
  }
  public putEcsBlock(value: DnsViewInheritanceSourcesEcsBlock) {
    this._ecsBlock.internalValue = value;
  }
  public resetEcsBlock() {
    this._ecsBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsBlockInput() {
    return this._ecsBlock.internalValue;
  }

  // edns_udp_size - computed: false, optional: true, required: false
  private _ednsUdpSize = new DnsViewInheritanceSourcesEdnsUdpSizeOutputReference(this, "edns_udp_size");
  public get ednsUdpSize() {
    return this._ednsUdpSize;
  }
  public putEdnsUdpSize(value: DnsViewInheritanceSourcesEdnsUdpSize) {
    this._ednsUdpSize.internalValue = value;
  }
  public resetEdnsUdpSize() {
    this._ednsUdpSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsUdpSizeInput() {
    return this._ednsUdpSize.internalValue;
  }

  // forwarders_block - computed: false, optional: true, required: false
  private _forwardersBlock = new DnsViewInheritanceSourcesForwardersBlockOutputReference(this, "forwarders_block");
  public get forwardersBlock() {
    return this._forwardersBlock;
  }
  public putForwardersBlock(value: DnsViewInheritanceSourcesForwardersBlock) {
    this._forwardersBlock.internalValue = value;
  }
  public resetForwardersBlock() {
    this._forwardersBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersBlockInput() {
    return this._forwardersBlock.internalValue;
  }

  // gss_tsig_enabled - computed: false, optional: true, required: false
  private _gssTsigEnabled = new DnsViewInheritanceSourcesGssTsigEnabledOutputReference(this, "gss_tsig_enabled");
  public get gssTsigEnabled() {
    return this._gssTsigEnabled;
  }
  public putGssTsigEnabled(value: DnsViewInheritanceSourcesGssTsigEnabled) {
    this._gssTsigEnabled.internalValue = value;
  }
  public resetGssTsigEnabled() {
    this._gssTsigEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigEnabledInput() {
    return this._gssTsigEnabled.internalValue;
  }

  // lame_ttl - computed: false, optional: true, required: false
  private _lameTtl = new DnsViewInheritanceSourcesLameTtlOutputReference(this, "lame_ttl");
  public get lameTtl() {
    return this._lameTtl;
  }
  public putLameTtl(value: DnsViewInheritanceSourcesLameTtl) {
    this._lameTtl.internalValue = value;
  }
  public resetLameTtl() {
    this._lameTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lameTtlInput() {
    return this._lameTtl.internalValue;
  }

  // match_recursive_only - computed: false, optional: true, required: false
  private _matchRecursiveOnly = new DnsViewInheritanceSourcesMatchRecursiveOnlyOutputReference(this, "match_recursive_only");
  public get matchRecursiveOnly() {
    return this._matchRecursiveOnly;
  }
  public putMatchRecursiveOnly(value: DnsViewInheritanceSourcesMatchRecursiveOnly) {
    this._matchRecursiveOnly.internalValue = value;
  }
  public resetMatchRecursiveOnly() {
    this._matchRecursiveOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRecursiveOnlyInput() {
    return this._matchRecursiveOnly.internalValue;
  }

  // max_cache_ttl - computed: false, optional: true, required: false
  private _maxCacheTtl = new DnsViewInheritanceSourcesMaxCacheTtlOutputReference(this, "max_cache_ttl");
  public get maxCacheTtl() {
    return this._maxCacheTtl;
  }
  public putMaxCacheTtl(value: DnsViewInheritanceSourcesMaxCacheTtl) {
    this._maxCacheTtl.internalValue = value;
  }
  public resetMaxCacheTtl() {
    this._maxCacheTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheTtlInput() {
    return this._maxCacheTtl.internalValue;
  }

  // max_negative_ttl - computed: false, optional: true, required: false
  private _maxNegativeTtl = new DnsViewInheritanceSourcesMaxNegativeTtlOutputReference(this, "max_negative_ttl");
  public get maxNegativeTtl() {
    return this._maxNegativeTtl;
  }
  public putMaxNegativeTtl(value: DnsViewInheritanceSourcesMaxNegativeTtl) {
    this._maxNegativeTtl.internalValue = value;
  }
  public resetMaxNegativeTtl() {
    this._maxNegativeTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNegativeTtlInput() {
    return this._maxNegativeTtl.internalValue;
  }

  // max_udp_size - computed: false, optional: true, required: false
  private _maxUdpSize = new DnsViewInheritanceSourcesMaxUdpSizeOutputReference(this, "max_udp_size");
  public get maxUdpSize() {
    return this._maxUdpSize;
  }
  public putMaxUdpSize(value: DnsViewInheritanceSourcesMaxUdpSize) {
    this._maxUdpSize.internalValue = value;
  }
  public resetMaxUdpSize() {
    this._maxUdpSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUdpSizeInput() {
    return this._maxUdpSize.internalValue;
  }

  // minimal_responses - computed: false, optional: true, required: false
  private _minimalResponses = new DnsViewInheritanceSourcesMinimalResponsesOutputReference(this, "minimal_responses");
  public get minimalResponses() {
    return this._minimalResponses;
  }
  public putMinimalResponses(value: DnsViewInheritanceSourcesMinimalResponses) {
    this._minimalResponses.internalValue = value;
  }
  public resetMinimalResponses() {
    this._minimalResponses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalResponsesInput() {
    return this._minimalResponses.internalValue;
  }

  // notify - computed: false, optional: true, required: false
  private _notify = new DnsViewInheritanceSourcesNotifyOutputReference(this, "notify");
  public get notify() {
    return this._notify;
  }
  public putNotify(value: DnsViewInheritanceSourcesNotify) {
    this._notify.internalValue = value;
  }
  public resetNotify() {
    this._notify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify.internalValue;
  }

  // query_acl - computed: false, optional: true, required: false
  private _queryAcl = new DnsViewInheritanceSourcesQueryAclOutputReference(this, "query_acl");
  public get queryAcl() {
    return this._queryAcl;
  }
  public putQueryAcl(value: DnsViewInheritanceSourcesQueryAcl) {
    this._queryAcl.internalValue = value;
  }
  public resetQueryAcl() {
    this._queryAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAclInput() {
    return this._queryAcl.internalValue;
  }

  // recursion_acl - computed: false, optional: true, required: false
  private _recursionAcl = new DnsViewInheritanceSourcesRecursionAclOutputReference(this, "recursion_acl");
  public get recursionAcl() {
    return this._recursionAcl;
  }
  public putRecursionAcl(value: DnsViewInheritanceSourcesRecursionAcl) {
    this._recursionAcl.internalValue = value;
  }
  public resetRecursionAcl() {
    this._recursionAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionAclInput() {
    return this._recursionAcl.internalValue;
  }

  // recursion_enabled - computed: false, optional: true, required: false
  private _recursionEnabled = new DnsViewInheritanceSourcesRecursionEnabledOutputReference(this, "recursion_enabled");
  public get recursionEnabled() {
    return this._recursionEnabled;
  }
  public putRecursionEnabled(value: DnsViewInheritanceSourcesRecursionEnabled) {
    this._recursionEnabled.internalValue = value;
  }
  public resetRecursionEnabled() {
    this._recursionEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionEnabledInput() {
    return this._recursionEnabled.internalValue;
  }

  // transfer_acl - computed: false, optional: true, required: false
  private _transferAcl = new DnsViewInheritanceSourcesTransferAclOutputReference(this, "transfer_acl");
  public get transferAcl() {
    return this._transferAcl;
  }
  public putTransferAcl(value: DnsViewInheritanceSourcesTransferAcl) {
    this._transferAcl.internalValue = value;
  }
  public resetTransferAcl() {
    this._transferAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferAclInput() {
    return this._transferAcl.internalValue;
  }

  // update_acl - computed: false, optional: true, required: false
  private _updateAcl = new DnsViewInheritanceSourcesUpdateAclOutputReference(this, "update_acl");
  public get updateAcl() {
    return this._updateAcl;
  }
  public putUpdateAcl(value: DnsViewInheritanceSourcesUpdateAcl) {
    this._updateAcl.internalValue = value;
  }
  public resetUpdateAcl() {
    this._updateAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAclInput() {
    return this._updateAcl.internalValue;
  }

  // use_forwarders_for_subzones - computed: false, optional: true, required: false
  private _useForwardersForSubzones = new DnsViewInheritanceSourcesUseForwardersForSubzonesOutputReference(this, "use_forwarders_for_subzones");
  public get useForwardersForSubzones() {
    return this._useForwardersForSubzones;
  }
  public putUseForwardersForSubzones(value: DnsViewInheritanceSourcesUseForwardersForSubzones) {
    this._useForwardersForSubzones.internalValue = value;
  }
  public resetUseForwardersForSubzones() {
    this._useForwardersForSubzones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useForwardersForSubzonesInput() {
    return this._useForwardersForSubzones.internalValue;
  }

  // zone_authority - computed: false, optional: true, required: false
  private _zoneAuthority = new DnsViewInheritanceSourcesZoneAuthorityOutputReference(this, "zone_authority");
  public get zoneAuthority() {
    return this._zoneAuthority;
  }
  public putZoneAuthority(value: DnsViewInheritanceSourcesZoneAuthority) {
    this._zoneAuthority.internalValue = value;
  }
  public resetZoneAuthority() {
    this._zoneAuthority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAuthorityInput() {
    return this._zoneAuthority.internalValue;
  }
}
export interface DnsViewMatchClientsAclTsigKey {
  /**
  * TSIG key algorithm.
  * 
  * Possible values:
  *  * _hmac_sha256_,
  *  * _hmac_sha1_,
  *  * _hmac_sha224_,
  *  * _hmac_sha384_,
  *  * _hmac_sha512_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#algorithm DnsView#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Comment for TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#comment DnsView#comment}
  */
  readonly comment?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#key DnsView#key}
  */
  readonly key: string;
  /**
  * TSIG key name, FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#name DnsView#name}
  */
  readonly name?: string;
  /**
  * TSIG key secret, base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#secret DnsView#secret}
  */
  readonly secret?: string;
}

export function dnsViewMatchClientsAclTsigKeyToTerraform(struct?: DnsViewMatchClientsAclTsigKeyOutputReference | DnsViewMatchClientsAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    comment: cdktf.stringToTerraform(struct!.comment),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dnsViewMatchClientsAclTsigKeyToHclTerraform(struct?: DnsViewMatchClientsAclTsigKeyOutputReference | DnsViewMatchClientsAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewMatchClientsAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewMatchClientsAclTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewMatchClientsAclTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._comment = undefined;
      this._key = undefined;
      this._name = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._comment = value.comment;
      this._key = value.key;
      this._name = value.name;
      this._secret = value.secret;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DnsViewMatchClientsAcl {
  /**
  * Access permission for _element_.
  * 
  * Allowed values:
  *  * _allow_,
  *  * _deny_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#access DnsView#access}
  */
  readonly access: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#acl DnsView#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.
  * 
  * Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#address DnsView#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  * Allowed values:
  *  * _any_,
  *  * _ip_,
  *  * _acl_,
  *  * _tsig_key_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#element DnsView#element}
  */
  readonly element: string;
  /**
  * tsig_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#tsig_key DnsView#tsig_key}
  */
  readonly tsigKey?: DnsViewMatchClientsAclTsigKey;
}

export function dnsViewMatchClientsAclToTerraform(struct?: DnsViewMatchClientsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dnsViewMatchClientsAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsViewMatchClientsAclToHclTerraform(struct?: DnsViewMatchClientsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element: {
      value: cdktf.stringToHclTerraform(struct!.element),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key: {
      value: dnsViewMatchClientsAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewMatchClientsAclTsigKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewMatchClientsAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewMatchClientsAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._element !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewMatchClientsAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._acl = undefined;
      this._address = undefined;
      this._element = undefined;
      this._tsigKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._acl = value.acl;
      this._address = value.address;
      this._element = value.element;
      this._tsigKey.internalValue = value.tsigKey;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
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

  // element - computed: false, optional: false, required: true
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsViewMatchClientsAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsViewMatchClientsAclTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }
}

export class DnsViewMatchClientsAclList extends cdktf.ComplexList {
  public internalValue? : DnsViewMatchClientsAcl[] | cdktf.IResolvable

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
  public get(index: number): DnsViewMatchClientsAclOutputReference {
    return new DnsViewMatchClientsAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewMatchDestinationsAclTsigKey {
  /**
  * TSIG key algorithm.
  * 
  * Possible values:
  *  * _hmac_sha256_,
  *  * _hmac_sha1_,
  *  * _hmac_sha224_,
  *  * _hmac_sha384_,
  *  * _hmac_sha512_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#algorithm DnsView#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Comment for TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#comment DnsView#comment}
  */
  readonly comment?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#key DnsView#key}
  */
  readonly key: string;
  /**
  * TSIG key name, FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#name DnsView#name}
  */
  readonly name?: string;
  /**
  * TSIG key secret, base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#secret DnsView#secret}
  */
  readonly secret?: string;
}

export function dnsViewMatchDestinationsAclTsigKeyToTerraform(struct?: DnsViewMatchDestinationsAclTsigKeyOutputReference | DnsViewMatchDestinationsAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    comment: cdktf.stringToTerraform(struct!.comment),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dnsViewMatchDestinationsAclTsigKeyToHclTerraform(struct?: DnsViewMatchDestinationsAclTsigKeyOutputReference | DnsViewMatchDestinationsAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewMatchDestinationsAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewMatchDestinationsAclTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewMatchDestinationsAclTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._comment = undefined;
      this._key = undefined;
      this._name = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._comment = value.comment;
      this._key = value.key;
      this._name = value.name;
      this._secret = value.secret;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DnsViewMatchDestinationsAcl {
  /**
  * Access permission for _element_.
  * 
  * Allowed values:
  *  * _allow_,
  *  * _deny_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#access DnsView#access}
  */
  readonly access: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#acl DnsView#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.
  * 
  * Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#address DnsView#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  * Allowed values:
  *  * _any_,
  *  * _ip_,
  *  * _acl_,
  *  * _tsig_key_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#element DnsView#element}
  */
  readonly element: string;
  /**
  * tsig_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#tsig_key DnsView#tsig_key}
  */
  readonly tsigKey?: DnsViewMatchDestinationsAclTsigKey;
}

export function dnsViewMatchDestinationsAclToTerraform(struct?: DnsViewMatchDestinationsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dnsViewMatchDestinationsAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsViewMatchDestinationsAclToHclTerraform(struct?: DnsViewMatchDestinationsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element: {
      value: cdktf.stringToHclTerraform(struct!.element),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key: {
      value: dnsViewMatchDestinationsAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewMatchDestinationsAclTsigKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewMatchDestinationsAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewMatchDestinationsAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._element !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewMatchDestinationsAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._acl = undefined;
      this._address = undefined;
      this._element = undefined;
      this._tsigKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._acl = value.acl;
      this._address = value.address;
      this._element = value.element;
      this._tsigKey.internalValue = value.tsigKey;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
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

  // element - computed: false, optional: false, required: true
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsViewMatchDestinationsAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsViewMatchDestinationsAclTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }
}

export class DnsViewMatchDestinationsAclList extends cdktf.ComplexList {
  public internalValue? : DnsViewMatchDestinationsAcl[] | cdktf.IResolvable

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
  public get(index: number): DnsViewMatchDestinationsAclOutputReference {
    return new DnsViewMatchDestinationsAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewQueryAclTsigKey {
  /**
  * TSIG key algorithm.
  * 
  * Possible values:
  *  * _hmac_sha256_,
  *  * _hmac_sha1_,
  *  * _hmac_sha224_,
  *  * _hmac_sha384_,
  *  * _hmac_sha512_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#algorithm DnsView#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Comment for TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#comment DnsView#comment}
  */
  readonly comment?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#key DnsView#key}
  */
  readonly key: string;
  /**
  * TSIG key name, FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#name DnsView#name}
  */
  readonly name?: string;
  /**
  * TSIG key secret, base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#secret DnsView#secret}
  */
  readonly secret?: string;
}

export function dnsViewQueryAclTsigKeyToTerraform(struct?: DnsViewQueryAclTsigKeyOutputReference | DnsViewQueryAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    comment: cdktf.stringToTerraform(struct!.comment),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dnsViewQueryAclTsigKeyToHclTerraform(struct?: DnsViewQueryAclTsigKeyOutputReference | DnsViewQueryAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewQueryAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewQueryAclTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewQueryAclTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._comment = undefined;
      this._key = undefined;
      this._name = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._comment = value.comment;
      this._key = value.key;
      this._name = value.name;
      this._secret = value.secret;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DnsViewQueryAcl {
  /**
  * Access permission for _element_.
  * 
  * Allowed values:
  *  * _allow_,
  *  * _deny_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#access DnsView#access}
  */
  readonly access: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#acl DnsView#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.
  * 
  * Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#address DnsView#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  * Allowed values:
  *  * _any_,
  *  * _ip_,
  *  * _acl_,
  *  * _tsig_key_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#element DnsView#element}
  */
  readonly element: string;
  /**
  * tsig_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#tsig_key DnsView#tsig_key}
  */
  readonly tsigKey?: DnsViewQueryAclTsigKey;
}

export function dnsViewQueryAclToTerraform(struct?: DnsViewQueryAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dnsViewQueryAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsViewQueryAclToHclTerraform(struct?: DnsViewQueryAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element: {
      value: cdktf.stringToHclTerraform(struct!.element),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key: {
      value: dnsViewQueryAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewQueryAclTsigKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewQueryAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewQueryAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._element !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewQueryAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._acl = undefined;
      this._address = undefined;
      this._element = undefined;
      this._tsigKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._acl = value.acl;
      this._address = value.address;
      this._element = value.element;
      this._tsigKey.internalValue = value.tsigKey;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
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

  // element - computed: false, optional: false, required: true
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsViewQueryAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsViewQueryAclTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }
}

export class DnsViewQueryAclList extends cdktf.ComplexList {
  public internalValue? : DnsViewQueryAcl[] | cdktf.IResolvable

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
  public get(index: number): DnsViewQueryAclOutputReference {
    return new DnsViewQueryAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewRecursionAclTsigKey {
  /**
  * TSIG key algorithm.
  * 
  * Possible values:
  *  * _hmac_sha256_,
  *  * _hmac_sha1_,
  *  * _hmac_sha224_,
  *  * _hmac_sha384_,
  *  * _hmac_sha512_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#algorithm DnsView#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Comment for TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#comment DnsView#comment}
  */
  readonly comment?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#key DnsView#key}
  */
  readonly key: string;
  /**
  * TSIG key name, FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#name DnsView#name}
  */
  readonly name?: string;
  /**
  * TSIG key secret, base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#secret DnsView#secret}
  */
  readonly secret?: string;
}

export function dnsViewRecursionAclTsigKeyToTerraform(struct?: DnsViewRecursionAclTsigKeyOutputReference | DnsViewRecursionAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    comment: cdktf.stringToTerraform(struct!.comment),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dnsViewRecursionAclTsigKeyToHclTerraform(struct?: DnsViewRecursionAclTsigKeyOutputReference | DnsViewRecursionAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewRecursionAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewRecursionAclTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewRecursionAclTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._comment = undefined;
      this._key = undefined;
      this._name = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._comment = value.comment;
      this._key = value.key;
      this._name = value.name;
      this._secret = value.secret;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DnsViewRecursionAcl {
  /**
  * Access permission for _element_.
  * 
  * Allowed values:
  *  * _allow_,
  *  * _deny_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#access DnsView#access}
  */
  readonly access: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#acl DnsView#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.
  * 
  * Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#address DnsView#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  * Allowed values:
  *  * _any_,
  *  * _ip_,
  *  * _acl_,
  *  * _tsig_key_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#element DnsView#element}
  */
  readonly element: string;
  /**
  * tsig_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#tsig_key DnsView#tsig_key}
  */
  readonly tsigKey?: DnsViewRecursionAclTsigKey;
}

export function dnsViewRecursionAclToTerraform(struct?: DnsViewRecursionAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dnsViewRecursionAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsViewRecursionAclToHclTerraform(struct?: DnsViewRecursionAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element: {
      value: cdktf.stringToHclTerraform(struct!.element),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key: {
      value: dnsViewRecursionAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewRecursionAclTsigKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewRecursionAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewRecursionAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._element !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewRecursionAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._acl = undefined;
      this._address = undefined;
      this._element = undefined;
      this._tsigKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._acl = value.acl;
      this._address = value.address;
      this._element = value.element;
      this._tsigKey.internalValue = value.tsigKey;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
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

  // element - computed: false, optional: false, required: true
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsViewRecursionAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsViewRecursionAclTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }
}

export class DnsViewRecursionAclList extends cdktf.ComplexList {
  public internalValue? : DnsViewRecursionAcl[] | cdktf.IResolvable

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
  public get(index: number): DnsViewRecursionAclOutputReference {
    return new DnsViewRecursionAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewTransferAclTsigKey {
  /**
  * TSIG key algorithm.
  * 
  * Possible values:
  *  * _hmac_sha256_,
  *  * _hmac_sha1_,
  *  * _hmac_sha224_,
  *  * _hmac_sha384_,
  *  * _hmac_sha512_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#algorithm DnsView#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Comment for TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#comment DnsView#comment}
  */
  readonly comment?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#key DnsView#key}
  */
  readonly key: string;
  /**
  * TSIG key name, FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#name DnsView#name}
  */
  readonly name?: string;
  /**
  * TSIG key secret, base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#secret DnsView#secret}
  */
  readonly secret?: string;
}

export function dnsViewTransferAclTsigKeyToTerraform(struct?: DnsViewTransferAclTsigKeyOutputReference | DnsViewTransferAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    comment: cdktf.stringToTerraform(struct!.comment),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dnsViewTransferAclTsigKeyToHclTerraform(struct?: DnsViewTransferAclTsigKeyOutputReference | DnsViewTransferAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewTransferAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewTransferAclTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewTransferAclTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._comment = undefined;
      this._key = undefined;
      this._name = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._comment = value.comment;
      this._key = value.key;
      this._name = value.name;
      this._secret = value.secret;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DnsViewTransferAcl {
  /**
  * Access permission for _element_.
  * 
  * Allowed values:
  *  * _allow_,
  *  * _deny_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#access DnsView#access}
  */
  readonly access: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#acl DnsView#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.
  * 
  * Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#address DnsView#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  * Allowed values:
  *  * _any_,
  *  * _ip_,
  *  * _acl_,
  *  * _tsig_key_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#element DnsView#element}
  */
  readonly element: string;
  /**
  * tsig_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#tsig_key DnsView#tsig_key}
  */
  readonly tsigKey?: DnsViewTransferAclTsigKey;
}

export function dnsViewTransferAclToTerraform(struct?: DnsViewTransferAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dnsViewTransferAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsViewTransferAclToHclTerraform(struct?: DnsViewTransferAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element: {
      value: cdktf.stringToHclTerraform(struct!.element),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key: {
      value: dnsViewTransferAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewTransferAclTsigKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewTransferAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewTransferAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._element !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewTransferAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._acl = undefined;
      this._address = undefined;
      this._element = undefined;
      this._tsigKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._acl = value.acl;
      this._address = value.address;
      this._element = value.element;
      this._tsigKey.internalValue = value.tsigKey;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
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

  // element - computed: false, optional: false, required: true
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsViewTransferAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsViewTransferAclTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }
}

export class DnsViewTransferAclList extends cdktf.ComplexList {
  public internalValue? : DnsViewTransferAcl[] | cdktf.IResolvable

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
  public get(index: number): DnsViewTransferAclOutputReference {
    return new DnsViewTransferAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewUpdateAclTsigKey {
  /**
  * TSIG key algorithm.
  * 
  * Possible values:
  *  * _hmac_sha256_,
  *  * _hmac_sha1_,
  *  * _hmac_sha224_,
  *  * _hmac_sha384_,
  *  * _hmac_sha512_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#algorithm DnsView#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Comment for TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#comment DnsView#comment}
  */
  readonly comment?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#key DnsView#key}
  */
  readonly key: string;
  /**
  * TSIG key name, FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#name DnsView#name}
  */
  readonly name?: string;
  /**
  * TSIG key secret, base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#secret DnsView#secret}
  */
  readonly secret?: string;
}

export function dnsViewUpdateAclTsigKeyToTerraform(struct?: DnsViewUpdateAclTsigKeyOutputReference | DnsViewUpdateAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    comment: cdktf.stringToTerraform(struct!.comment),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dnsViewUpdateAclTsigKeyToHclTerraform(struct?: DnsViewUpdateAclTsigKeyOutputReference | DnsViewUpdateAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewUpdateAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewUpdateAclTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewUpdateAclTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._comment = undefined;
      this._key = undefined;
      this._name = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._comment = value.comment;
      this._key = value.key;
      this._name = value.name;
      this._secret = value.secret;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DnsViewUpdateAcl {
  /**
  * Access permission for _element_.
  * 
  * Allowed values:
  *  * _allow_,
  *  * _deny_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#access DnsView#access}
  */
  readonly access: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#acl DnsView#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.
  * 
  * Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#address DnsView#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  * Allowed values:
  *  * _any_,
  *  * _ip_,
  *  * _acl_,
  *  * _tsig_key_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#element DnsView#element}
  */
  readonly element: string;
  /**
  * tsig_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#tsig_key DnsView#tsig_key}
  */
  readonly tsigKey?: DnsViewUpdateAclTsigKey;
}

export function dnsViewUpdateAclToTerraform(struct?: DnsViewUpdateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dnsViewUpdateAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsViewUpdateAclToHclTerraform(struct?: DnsViewUpdateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element: {
      value: cdktf.stringToHclTerraform(struct!.element),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key: {
      value: dnsViewUpdateAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "list",
      storageClassType: "DnsViewUpdateAclTsigKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewUpdateAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsViewUpdateAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._element !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewUpdateAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._acl = undefined;
      this._address = undefined;
      this._element = undefined;
      this._tsigKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._acl = value.acl;
      this._address = value.address;
      this._element = value.element;
      this._tsigKey.internalValue = value.tsigKey;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
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

  // element - computed: false, optional: false, required: true
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsViewUpdateAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsViewUpdateAclTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }
}

export class DnsViewUpdateAclList extends cdktf.ComplexList {
  public internalValue? : DnsViewUpdateAcl[] | cdktf.IResolvable

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
  public get(index: number): DnsViewUpdateAclOutputReference {
    return new DnsViewUpdateAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsViewZoneAuthority {
  /**
  * Optional. ZoneAuthority default ttl for resource records in zone (value in seconds).
  * 
  * Defaults to 28800.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#default_ttl DnsView#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Optional. ZoneAuthority expire time in seconds.
  * 
  * Defaults to 2419200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#expire DnsView#expire}
  */
  readonly expire?: number;
  /**
  * Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#mname DnsView#mname}
  */
  readonly mname?: string;
  /**
  * Optional. ZoneAuthority negative caching (minimum) ttl in seconds.
  * 
  * Defaults to 900.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#negative_ttl DnsView#negative_ttl}
  */
  readonly negativeTtl?: number;
  /**
  * Optional. ZoneAuthority refresh.
  * 
  * Defaults to 10800.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#refresh DnsView#refresh}
  */
  readonly refresh?: number;
  /**
  * Optional. ZoneAuthority retry.
  * 
  * Defaults to 3600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#retry DnsView#retry}
  */
  readonly retry?: number;
  /**
  * Optional. ZoneAuthority rname.
  * 
  * Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#rname DnsView#rname}
  */
  readonly rname?: string;
  /**
  * Optional. Use default value for master name server.
  * 
  * Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#use_default_mname DnsView#use_default_mname}
  */
  readonly useDefaultMname?: boolean | cdktf.IResolvable;
}

export function dnsViewZoneAuthorityToTerraform(struct?: DnsViewZoneAuthorityOutputReference | DnsViewZoneAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    expire: cdktf.numberToTerraform(struct!.expire),
    mname: cdktf.stringToTerraform(struct!.mname),
    negative_ttl: cdktf.numberToTerraform(struct!.negativeTtl),
    refresh: cdktf.numberToTerraform(struct!.refresh),
    retry: cdktf.numberToTerraform(struct!.retry),
    rname: cdktf.stringToTerraform(struct!.rname),
    use_default_mname: cdktf.booleanToTerraform(struct!.useDefaultMname),
  }
}


export function dnsViewZoneAuthorityToHclTerraform(struct?: DnsViewZoneAuthorityOutputReference | DnsViewZoneAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ttl: {
      value: cdktf.numberToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expire: {
      value: cdktf.numberToHclTerraform(struct!.expire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mname: {
      value: cdktf.stringToHclTerraform(struct!.mname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negative_ttl: {
      value: cdktf.numberToHclTerraform(struct!.negativeTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh: {
      value: cdktf.numberToHclTerraform(struct!.refresh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rname: {
      value: cdktf.stringToHclTerraform(struct!.rname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_default_mname: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultMname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsViewZoneAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsViewZoneAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._expire !== undefined) {
      hasAnyValues = true;
      internalValueResult.expire = this._expire;
    }
    if (this._mname !== undefined) {
      hasAnyValues = true;
      internalValueResult.mname = this._mname;
    }
    if (this._negativeTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeTtl = this._negativeTtl;
    }
    if (this._refresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.refresh = this._refresh;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._rname !== undefined) {
      hasAnyValues = true;
      internalValueResult.rname = this._rname;
    }
    if (this._useDefaultMname !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultMname = this._useDefaultMname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsViewZoneAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTtl = undefined;
      this._expire = undefined;
      this._mname = undefined;
      this._negativeTtl = undefined;
      this._refresh = undefined;
      this._retry = undefined;
      this._rname = undefined;
      this._useDefaultMname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTtl = value.defaultTtl;
      this._expire = value.expire;
      this._mname = value.mname;
      this._negativeTtl = value.negativeTtl;
      this._refresh = value.refresh;
      this._retry = value.retry;
      this._rname = value.rname;
      this._useDefaultMname = value.useDefaultMname;
    }
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // expire - computed: false, optional: true, required: false
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // mname - computed: false, optional: true, required: false
  private _mname?: string; 
  public get mname() {
    return this.getStringAttribute('mname');
  }
  public set mname(value: string) {
    this._mname = value;
  }
  public resetMname() {
    this._mname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mnameInput() {
    return this._mname;
  }

  // negative_ttl - computed: false, optional: true, required: false
  private _negativeTtl?: number; 
  public get negativeTtl() {
    return this.getNumberAttribute('negative_ttl');
  }
  public set negativeTtl(value: number) {
    this._negativeTtl = value;
  }
  public resetNegativeTtl() {
    this._negativeTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeTtlInput() {
    return this._negativeTtl;
  }

  // protocol_mname - computed: true, optional: false, required: false
  public get protocolMname() {
    return this.getStringAttribute('protocol_mname');
  }

  // protocol_rname - computed: true, optional: false, required: false
  public get protocolRname() {
    return this.getStringAttribute('protocol_rname');
  }

  // refresh - computed: false, optional: true, required: false
  private _refresh?: number; 
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }
  public set refresh(value: number) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // rname - computed: false, optional: true, required: false
  private _rname?: string; 
  public get rname() {
    return this.getStringAttribute('rname');
  }
  public set rname(value: string) {
    this._rname = value;
  }
  public resetRname() {
    this._rname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rnameInput() {
    return this._rname;
  }

  // use_default_mname - computed: false, optional: true, required: false
  private _useDefaultMname?: boolean | cdktf.IResolvable; 
  public get useDefaultMname() {
    return this.getBooleanAttribute('use_default_mname');
  }
  public set useDefaultMname(value: boolean | cdktf.IResolvable) {
    this._useDefaultMname = value;
  }
  public resetUseDefaultMname() {
    this._useDefaultMname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultMnameInput() {
    return this._useDefaultMname;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view b1ddi_dns_view}
*/
export class DnsView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "b1ddi_dns_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsView to import
  * @param importFromId The id of the existing DnsView that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "b1ddi_dns_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/resources/dns_view b1ddi_dns_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsViewConfig
  */
  public constructor(scope: Construct, id: string, config: DnsViewConfig) {
    super(scope, id, {
      terraformResourceType: 'b1ddi_dns_view',
      terraformGeneratorMetadata: {
        providerName: 'b1ddi',
        providerVersion: '0.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._customRootNsEnabled = config.customRootNsEnabled;
    this._disabled = config.disabled;
    this._dnssecEnableValidation = config.dnssecEnableValidation;
    this._dnssecEnabled = config.dnssecEnabled;
    this._dnssecValidateExpiry = config.dnssecValidateExpiry;
    this._ecsEnabled = config.ecsEnabled;
    this._ecsForwarding = config.ecsForwarding;
    this._ecsPrefixV4 = config.ecsPrefixV4;
    this._ecsPrefixV6 = config.ecsPrefixV6;
    this._ednsUdpSize = config.ednsUdpSize;
    this._forwardersOnly = config.forwardersOnly;
    this._gssTsigEnabled = config.gssTsigEnabled;
    this._id = config.id;
    this._ipSpaces = config.ipSpaces;
    this._lameTtl = config.lameTtl;
    this._matchRecursiveOnly = config.matchRecursiveOnly;
    this._maxCacheTtl = config.maxCacheTtl;
    this._maxNegativeTtl = config.maxNegativeTtl;
    this._maxUdpSize = config.maxUdpSize;
    this._minimalResponses = config.minimalResponses;
    this._name = config.name;
    this._notify = config.notify;
    this._recursionEnabled = config.recursionEnabled;
    this._tags = config.tags;
    this._useForwardersForSubzones = config.useForwardersForSubzones;
    this._customRootNs.internalValue = config.customRootNs;
    this._dnssecTrustAnchors.internalValue = config.dnssecTrustAnchors;
    this._ecsZones.internalValue = config.ecsZones;
    this._forwarders.internalValue = config.forwarders;
    this._inheritanceSources.internalValue = config.inheritanceSources;
    this._matchClientsAcl.internalValue = config.matchClientsAcl;
    this._matchDestinationsAcl.internalValue = config.matchDestinationsAcl;
    this._queryAcl.internalValue = config.queryAcl;
    this._recursionAcl.internalValue = config.recursionAcl;
    this._transferAcl.internalValue = config.transferAcl;
    this._updateAcl.internalValue = config.updateAcl;
    this._zoneAuthority.internalValue = config.zoneAuthority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // custom_root_ns_enabled - computed: false, optional: true, required: false
  private _customRootNsEnabled?: boolean | cdktf.IResolvable; 
  public get customRootNsEnabled() {
    return this.getBooleanAttribute('custom_root_ns_enabled');
  }
  public set customRootNsEnabled(value: boolean | cdktf.IResolvable) {
    this._customRootNsEnabled = value;
  }
  public resetCustomRootNsEnabled() {
    this._customRootNsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRootNsEnabledInput() {
    return this._customRootNsEnabled;
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

  // dnssec_enable_validation - computed: false, optional: true, required: false
  private _dnssecEnableValidation?: boolean | cdktf.IResolvable; 
  public get dnssecEnableValidation() {
    return this.getBooleanAttribute('dnssec_enable_validation');
  }
  public set dnssecEnableValidation(value: boolean | cdktf.IResolvable) {
    this._dnssecEnableValidation = value;
  }
  public resetDnssecEnableValidation() {
    this._dnssecEnableValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecEnableValidationInput() {
    return this._dnssecEnableValidation;
  }

  // dnssec_enabled - computed: false, optional: true, required: false
  private _dnssecEnabled?: boolean | cdktf.IResolvable; 
  public get dnssecEnabled() {
    return this.getBooleanAttribute('dnssec_enabled');
  }
  public set dnssecEnabled(value: boolean | cdktf.IResolvable) {
    this._dnssecEnabled = value;
  }
  public resetDnssecEnabled() {
    this._dnssecEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecEnabledInput() {
    return this._dnssecEnabled;
  }

  // dnssec_root_keys - computed: true, optional: false, required: false
  private _dnssecRootKeys = new DnsViewDnssecRootKeysList(this, "dnssec_root_keys", false);
  public get dnssecRootKeys() {
    return this._dnssecRootKeys;
  }

  // dnssec_validate_expiry - computed: false, optional: true, required: false
  private _dnssecValidateExpiry?: boolean | cdktf.IResolvable; 
  public get dnssecValidateExpiry() {
    return this.getBooleanAttribute('dnssec_validate_expiry');
  }
  public set dnssecValidateExpiry(value: boolean | cdktf.IResolvable) {
    this._dnssecValidateExpiry = value;
  }
  public resetDnssecValidateExpiry() {
    this._dnssecValidateExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecValidateExpiryInput() {
    return this._dnssecValidateExpiry;
  }

  // ecs_enabled - computed: true, optional: true, required: false
  private _ecsEnabled?: boolean | cdktf.IResolvable; 
  public get ecsEnabled() {
    return this.getBooleanAttribute('ecs_enabled');
  }
  public set ecsEnabled(value: boolean | cdktf.IResolvable) {
    this._ecsEnabled = value;
  }
  public resetEcsEnabled() {
    this._ecsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsEnabledInput() {
    return this._ecsEnabled;
  }

  // ecs_forwarding - computed: true, optional: true, required: false
  private _ecsForwarding?: boolean | cdktf.IResolvable; 
  public get ecsForwarding() {
    return this.getBooleanAttribute('ecs_forwarding');
  }
  public set ecsForwarding(value: boolean | cdktf.IResolvable) {
    this._ecsForwarding = value;
  }
  public resetEcsForwarding() {
    this._ecsForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsForwardingInput() {
    return this._ecsForwarding;
  }

  // ecs_prefix_v4 - computed: true, optional: true, required: false
  private _ecsPrefixV4?: number; 
  public get ecsPrefixV4() {
    return this.getNumberAttribute('ecs_prefix_v4');
  }
  public set ecsPrefixV4(value: number) {
    this._ecsPrefixV4 = value;
  }
  public resetEcsPrefixV4() {
    this._ecsPrefixV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsPrefixV4Input() {
    return this._ecsPrefixV4;
  }

  // ecs_prefix_v6 - computed: true, optional: true, required: false
  private _ecsPrefixV6?: number; 
  public get ecsPrefixV6() {
    return this.getNumberAttribute('ecs_prefix_v6');
  }
  public set ecsPrefixV6(value: number) {
    this._ecsPrefixV6 = value;
  }
  public resetEcsPrefixV6() {
    this._ecsPrefixV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsPrefixV6Input() {
    return this._ecsPrefixV6;
  }

  // edns_udp_size - computed: true, optional: true, required: false
  private _ednsUdpSize?: number; 
  public get ednsUdpSize() {
    return this.getNumberAttribute('edns_udp_size');
  }
  public set ednsUdpSize(value: number) {
    this._ednsUdpSize = value;
  }
  public resetEdnsUdpSize() {
    this._ednsUdpSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsUdpSizeInput() {
    return this._ednsUdpSize;
  }

  // forwarders_only - computed: false, optional: true, required: false
  private _forwardersOnly?: boolean | cdktf.IResolvable; 
  public get forwardersOnly() {
    return this.getBooleanAttribute('forwarders_only');
  }
  public set forwardersOnly(value: boolean | cdktf.IResolvable) {
    this._forwardersOnly = value;
  }
  public resetForwardersOnly() {
    this._forwardersOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersOnlyInput() {
    return this._forwardersOnly;
  }

  // gss_tsig_enabled - computed: false, optional: true, required: false
  private _gssTsigEnabled?: boolean | cdktf.IResolvable; 
  public get gssTsigEnabled() {
    return this.getBooleanAttribute('gss_tsig_enabled');
  }
  public set gssTsigEnabled(value: boolean | cdktf.IResolvable) {
    this._gssTsigEnabled = value;
  }
  public resetGssTsigEnabled() {
    this._gssTsigEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigEnabledInput() {
    return this._gssTsigEnabled;
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

  // ip_spaces - computed: false, optional: true, required: false
  private _ipSpaces?: string[]; 
  public get ipSpaces() {
    return this.getListAttribute('ip_spaces');
  }
  public set ipSpaces(value: string[]) {
    this._ipSpaces = value;
  }
  public resetIpSpaces() {
    this._ipSpaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSpacesInput() {
    return this._ipSpaces;
  }

  // lame_ttl - computed: true, optional: true, required: false
  private _lameTtl?: number; 
  public get lameTtl() {
    return this.getNumberAttribute('lame_ttl');
  }
  public set lameTtl(value: number) {
    this._lameTtl = value;
  }
  public resetLameTtl() {
    this._lameTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lameTtlInput() {
    return this._lameTtl;
  }

  // match_recursive_only - computed: false, optional: true, required: false
  private _matchRecursiveOnly?: boolean | cdktf.IResolvable; 
  public get matchRecursiveOnly() {
    return this.getBooleanAttribute('match_recursive_only');
  }
  public set matchRecursiveOnly(value: boolean | cdktf.IResolvable) {
    this._matchRecursiveOnly = value;
  }
  public resetMatchRecursiveOnly() {
    this._matchRecursiveOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRecursiveOnlyInput() {
    return this._matchRecursiveOnly;
  }

  // max_cache_ttl - computed: false, optional: true, required: false
  private _maxCacheTtl?: number; 
  public get maxCacheTtl() {
    return this.getNumberAttribute('max_cache_ttl');
  }
  public set maxCacheTtl(value: number) {
    this._maxCacheTtl = value;
  }
  public resetMaxCacheTtl() {
    this._maxCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheTtlInput() {
    return this._maxCacheTtl;
  }

  // max_negative_ttl - computed: false, optional: true, required: false
  private _maxNegativeTtl?: number; 
  public get maxNegativeTtl() {
    return this.getNumberAttribute('max_negative_ttl');
  }
  public set maxNegativeTtl(value: number) {
    this._maxNegativeTtl = value;
  }
  public resetMaxNegativeTtl() {
    this._maxNegativeTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNegativeTtlInput() {
    return this._maxNegativeTtl;
  }

  // max_udp_size - computed: false, optional: true, required: false
  private _maxUdpSize?: number; 
  public get maxUdpSize() {
    return this.getNumberAttribute('max_udp_size');
  }
  public set maxUdpSize(value: number) {
    this._maxUdpSize = value;
  }
  public resetMaxUdpSize() {
    this._maxUdpSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUdpSizeInput() {
    return this._maxUdpSize;
  }

  // minimal_responses - computed: false, optional: true, required: false
  private _minimalResponses?: boolean | cdktf.IResolvable; 
  public get minimalResponses() {
    return this.getBooleanAttribute('minimal_responses');
  }
  public set minimalResponses(value: boolean | cdktf.IResolvable) {
    this._minimalResponses = value;
  }
  public resetMinimalResponses() {
    this._minimalResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalResponsesInput() {
    return this._minimalResponses;
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

  // notify - computed: false, optional: true, required: false
  private _notify?: boolean | cdktf.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktf.IResolvable) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }

  // recursion_enabled - computed: false, optional: true, required: false
  private _recursionEnabled?: boolean | cdktf.IResolvable; 
  public get recursionEnabled() {
    return this.getBooleanAttribute('recursion_enabled');
  }
  public set recursionEnabled(value: boolean | cdktf.IResolvable) {
    this._recursionEnabled = value;
  }
  public resetRecursionEnabled() {
    this._recursionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionEnabledInput() {
    return this._recursionEnabled;
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

  // use_forwarders_for_subzones - computed: false, optional: true, required: false
  private _useForwardersForSubzones?: boolean | cdktf.IResolvable; 
  public get useForwardersForSubzones() {
    return this.getBooleanAttribute('use_forwarders_for_subzones');
  }
  public set useForwardersForSubzones(value: boolean | cdktf.IResolvable) {
    this._useForwardersForSubzones = value;
  }
  public resetUseForwardersForSubzones() {
    this._useForwardersForSubzones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useForwardersForSubzonesInput() {
    return this._useForwardersForSubzones;
  }

  // custom_root_ns - computed: false, optional: true, required: false
  private _customRootNs = new DnsViewCustomRootNsList(this, "custom_root_ns", false);
  public get customRootNs() {
    return this._customRootNs;
  }
  public putCustomRootNs(value: DnsViewCustomRootNs[] | cdktf.IResolvable) {
    this._customRootNs.internalValue = value;
  }
  public resetCustomRootNs() {
    this._customRootNs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRootNsInput() {
    return this._customRootNs.internalValue;
  }

  // dnssec_trust_anchors - computed: false, optional: true, required: false
  private _dnssecTrustAnchors = new DnsViewDnssecTrustAnchorsList(this, "dnssec_trust_anchors", false);
  public get dnssecTrustAnchors() {
    return this._dnssecTrustAnchors;
  }
  public putDnssecTrustAnchors(value: DnsViewDnssecTrustAnchors[] | cdktf.IResolvable) {
    this._dnssecTrustAnchors.internalValue = value;
  }
  public resetDnssecTrustAnchors() {
    this._dnssecTrustAnchors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecTrustAnchorsInput() {
    return this._dnssecTrustAnchors.internalValue;
  }

  // ecs_zones - computed: false, optional: true, required: false
  private _ecsZones = new DnsViewEcsZonesList(this, "ecs_zones", false);
  public get ecsZones() {
    return this._ecsZones;
  }
  public putEcsZones(value: DnsViewEcsZones[] | cdktf.IResolvable) {
    this._ecsZones.internalValue = value;
  }
  public resetEcsZones() {
    this._ecsZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsZonesInput() {
    return this._ecsZones.internalValue;
  }

  // forwarders - computed: false, optional: true, required: false
  private _forwarders = new DnsViewForwardersList(this, "forwarders", false);
  public get forwarders() {
    return this._forwarders;
  }
  public putForwarders(value: DnsViewForwarders[] | cdktf.IResolvable) {
    this._forwarders.internalValue = value;
  }
  public resetForwarders() {
    this._forwarders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersInput() {
    return this._forwarders.internalValue;
  }

  // inheritance_sources - computed: false, optional: true, required: false
  private _inheritanceSources = new DnsViewInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: DnsViewInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
  }

  // match_clients_acl - computed: false, optional: true, required: false
  private _matchClientsAcl = new DnsViewMatchClientsAclList(this, "match_clients_acl", false);
  public get matchClientsAcl() {
    return this._matchClientsAcl;
  }
  public putMatchClientsAcl(value: DnsViewMatchClientsAcl[] | cdktf.IResolvable) {
    this._matchClientsAcl.internalValue = value;
  }
  public resetMatchClientsAcl() {
    this._matchClientsAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchClientsAclInput() {
    return this._matchClientsAcl.internalValue;
  }

  // match_destinations_acl - computed: false, optional: true, required: false
  private _matchDestinationsAcl = new DnsViewMatchDestinationsAclList(this, "match_destinations_acl", false);
  public get matchDestinationsAcl() {
    return this._matchDestinationsAcl;
  }
  public putMatchDestinationsAcl(value: DnsViewMatchDestinationsAcl[] | cdktf.IResolvable) {
    this._matchDestinationsAcl.internalValue = value;
  }
  public resetMatchDestinationsAcl() {
    this._matchDestinationsAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDestinationsAclInput() {
    return this._matchDestinationsAcl.internalValue;
  }

  // query_acl - computed: false, optional: true, required: false
  private _queryAcl = new DnsViewQueryAclList(this, "query_acl", false);
  public get queryAcl() {
    return this._queryAcl;
  }
  public putQueryAcl(value: DnsViewQueryAcl[] | cdktf.IResolvable) {
    this._queryAcl.internalValue = value;
  }
  public resetQueryAcl() {
    this._queryAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAclInput() {
    return this._queryAcl.internalValue;
  }

  // recursion_acl - computed: false, optional: true, required: false
  private _recursionAcl = new DnsViewRecursionAclList(this, "recursion_acl", false);
  public get recursionAcl() {
    return this._recursionAcl;
  }
  public putRecursionAcl(value: DnsViewRecursionAcl[] | cdktf.IResolvable) {
    this._recursionAcl.internalValue = value;
  }
  public resetRecursionAcl() {
    this._recursionAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionAclInput() {
    return this._recursionAcl.internalValue;
  }

  // transfer_acl - computed: false, optional: true, required: false
  private _transferAcl = new DnsViewTransferAclList(this, "transfer_acl", false);
  public get transferAcl() {
    return this._transferAcl;
  }
  public putTransferAcl(value: DnsViewTransferAcl[] | cdktf.IResolvable) {
    this._transferAcl.internalValue = value;
  }
  public resetTransferAcl() {
    this._transferAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferAclInput() {
    return this._transferAcl.internalValue;
  }

  // update_acl - computed: false, optional: true, required: false
  private _updateAcl = new DnsViewUpdateAclList(this, "update_acl", false);
  public get updateAcl() {
    return this._updateAcl;
  }
  public putUpdateAcl(value: DnsViewUpdateAcl[] | cdktf.IResolvable) {
    this._updateAcl.internalValue = value;
  }
  public resetUpdateAcl() {
    this._updateAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAclInput() {
    return this._updateAcl.internalValue;
  }

  // zone_authority - computed: false, optional: true, required: false
  private _zoneAuthority = new DnsViewZoneAuthorityOutputReference(this, "zone_authority");
  public get zoneAuthority() {
    return this._zoneAuthority;
  }
  public putZoneAuthority(value: DnsViewZoneAuthority) {
    this._zoneAuthority.internalValue = value;
  }
  public resetZoneAuthority() {
    this._zoneAuthority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAuthorityInput() {
    return this._zoneAuthority.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      custom_root_ns_enabled: cdktf.booleanToTerraform(this._customRootNsEnabled),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dnssec_enable_validation: cdktf.booleanToTerraform(this._dnssecEnableValidation),
      dnssec_enabled: cdktf.booleanToTerraform(this._dnssecEnabled),
      dnssec_validate_expiry: cdktf.booleanToTerraform(this._dnssecValidateExpiry),
      ecs_enabled: cdktf.booleanToTerraform(this._ecsEnabled),
      ecs_forwarding: cdktf.booleanToTerraform(this._ecsForwarding),
      ecs_prefix_v4: cdktf.numberToTerraform(this._ecsPrefixV4),
      ecs_prefix_v6: cdktf.numberToTerraform(this._ecsPrefixV6),
      edns_udp_size: cdktf.numberToTerraform(this._ednsUdpSize),
      forwarders_only: cdktf.booleanToTerraform(this._forwardersOnly),
      gss_tsig_enabled: cdktf.booleanToTerraform(this._gssTsigEnabled),
      id: cdktf.stringToTerraform(this._id),
      ip_spaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipSpaces),
      lame_ttl: cdktf.numberToTerraform(this._lameTtl),
      match_recursive_only: cdktf.booleanToTerraform(this._matchRecursiveOnly),
      max_cache_ttl: cdktf.numberToTerraform(this._maxCacheTtl),
      max_negative_ttl: cdktf.numberToTerraform(this._maxNegativeTtl),
      max_udp_size: cdktf.numberToTerraform(this._maxUdpSize),
      minimal_responses: cdktf.booleanToTerraform(this._minimalResponses),
      name: cdktf.stringToTerraform(this._name),
      notify: cdktf.booleanToTerraform(this._notify),
      recursion_enabled: cdktf.booleanToTerraform(this._recursionEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      use_forwarders_for_subzones: cdktf.booleanToTerraform(this._useForwardersForSubzones),
      custom_root_ns: cdktf.listMapper(dnsViewCustomRootNsToTerraform, true)(this._customRootNs.internalValue),
      dnssec_trust_anchors: cdktf.listMapper(dnsViewDnssecTrustAnchorsToTerraform, true)(this._dnssecTrustAnchors.internalValue),
      ecs_zones: cdktf.listMapper(dnsViewEcsZonesToTerraform, true)(this._ecsZones.internalValue),
      forwarders: cdktf.listMapper(dnsViewForwardersToTerraform, true)(this._forwarders.internalValue),
      inheritance_sources: dnsViewInheritanceSourcesToTerraform(this._inheritanceSources.internalValue),
      match_clients_acl: cdktf.listMapper(dnsViewMatchClientsAclToTerraform, true)(this._matchClientsAcl.internalValue),
      match_destinations_acl: cdktf.listMapper(dnsViewMatchDestinationsAclToTerraform, true)(this._matchDestinationsAcl.internalValue),
      query_acl: cdktf.listMapper(dnsViewQueryAclToTerraform, true)(this._queryAcl.internalValue),
      recursion_acl: cdktf.listMapper(dnsViewRecursionAclToTerraform, true)(this._recursionAcl.internalValue),
      transfer_acl: cdktf.listMapper(dnsViewTransferAclToTerraform, true)(this._transferAcl.internalValue),
      update_acl: cdktf.listMapper(dnsViewUpdateAclToTerraform, true)(this._updateAcl.internalValue),
      zone_authority: dnsViewZoneAuthorityToTerraform(this._zoneAuthority.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_root_ns_enabled: {
        value: cdktf.booleanToHclTerraform(this._customRootNsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dnssec_enable_validation: {
        value: cdktf.booleanToHclTerraform(this._dnssecEnableValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dnssec_enabled: {
        value: cdktf.booleanToHclTerraform(this._dnssecEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dnssec_validate_expiry: {
        value: cdktf.booleanToHclTerraform(this._dnssecValidateExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ecs_enabled: {
        value: cdktf.booleanToHclTerraform(this._ecsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ecs_forwarding: {
        value: cdktf.booleanToHclTerraform(this._ecsForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ecs_prefix_v4: {
        value: cdktf.numberToHclTerraform(this._ecsPrefixV4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ecs_prefix_v6: {
        value: cdktf.numberToHclTerraform(this._ecsPrefixV6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      edns_udp_size: {
        value: cdktf.numberToHclTerraform(this._ednsUdpSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forwarders_only: {
        value: cdktf.booleanToHclTerraform(this._forwardersOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gss_tsig_enabled: {
        value: cdktf.booleanToHclTerraform(this._gssTsigEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_spaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipSpaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      lame_ttl: {
        value: cdktf.numberToHclTerraform(this._lameTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_recursive_only: {
        value: cdktf.booleanToHclTerraform(this._matchRecursiveOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_cache_ttl: {
        value: cdktf.numberToHclTerraform(this._maxCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_negative_ttl: {
        value: cdktf.numberToHclTerraform(this._maxNegativeTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_udp_size: {
        value: cdktf.numberToHclTerraform(this._maxUdpSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimal_responses: {
        value: cdktf.booleanToHclTerraform(this._minimalResponses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify: {
        value: cdktf.booleanToHclTerraform(this._notify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recursion_enabled: {
        value: cdktf.booleanToHclTerraform(this._recursionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      use_forwarders_for_subzones: {
        value: cdktf.booleanToHclTerraform(this._useForwardersForSubzones),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_root_ns: {
        value: cdktf.listMapperHcl(dnsViewCustomRootNsToHclTerraform, true)(this._customRootNs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsViewCustomRootNsList",
      },
      dnssec_trust_anchors: {
        value: cdktf.listMapperHcl(dnsViewDnssecTrustAnchorsToHclTerraform, true)(this._dnssecTrustAnchors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsViewDnssecTrustAnchorsList",
      },
      ecs_zones: {
        value: cdktf.listMapperHcl(dnsViewEcsZonesToHclTerraform, true)(this._ecsZones.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsViewEcsZonesList",
      },
      forwarders: {
        value: cdktf.listMapperHcl(dnsViewForwardersToHclTerraform, true)(this._forwarders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsViewForwardersList",
      },
      inheritance_sources: {
        value: dnsViewInheritanceSourcesToHclTerraform(this._inheritanceSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsViewInheritanceSourcesList",
      },
      match_clients_acl: {
        value: cdktf.listMapperHcl(dnsViewMatchClientsAclToHclTerraform, true)(this._matchClientsAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsViewMatchClientsAclList",
      },
      match_destinations_acl: {
        value: cdktf.listMapperHcl(dnsViewMatchDestinationsAclToHclTerraform, true)(this._matchDestinationsAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsViewMatchDestinationsAclList",
      },
      query_acl: {
        value: cdktf.listMapperHcl(dnsViewQueryAclToHclTerraform, true)(this._queryAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsViewQueryAclList",
      },
      recursion_acl: {
        value: cdktf.listMapperHcl(dnsViewRecursionAclToHclTerraform, true)(this._recursionAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsViewRecursionAclList",
      },
      transfer_acl: {
        value: cdktf.listMapperHcl(dnsViewTransferAclToHclTerraform, true)(this._transferAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsViewTransferAclList",
      },
      update_acl: {
        value: cdktf.listMapperHcl(dnsViewUpdateAclToHclTerraform, true)(this._updateAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsViewUpdateAclList",
      },
      zone_authority: {
        value: dnsViewZoneAuthorityToHclTerraform(this._zoneAuthority.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsViewZoneAuthorityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
