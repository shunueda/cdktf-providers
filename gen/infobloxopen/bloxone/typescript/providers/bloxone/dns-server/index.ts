// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * _add_edns_option_in_outgoing_query_ adds client IP, MAC address and view name into outgoing recursive query. Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#add_edns_option_in_outgoing_query DnsServer#add_edns_option_in_outgoing_query}
  */
  readonly addEdnsOptionInOutgoingQuery?: boolean | cdktf.IResolvable;
  /**
  * Optional. Controls manual/automatic views ordering.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#auto_sort_views DnsServer#auto_sort_views}
  */
  readonly autoSortViews?: boolean | cdktf.IResolvable;
  /**
  * Optional. Comment for configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#comment DnsServer#comment}
  */
  readonly comment?: string;
  /**
  * Optional. List of custom root nameservers. The order does not matter.  Error if empty while _custom_root_ns_enabled_ is _true_. Error if there are duplicate items in the list.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#custom_root_ns DnsServer#custom_root_ns}
  */
  readonly customRootNs?: DnsServerCustomRootNs[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to use custom root nameservers instead of the default ones.  The _custom_root_ns_ is validated when enabled.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#custom_root_ns_enabled DnsServer#custom_root_ns_enabled}
  */
  readonly customRootNsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. _true_ to perform DNSSEC validation. Ignored if _dnssec_enabled_ is _false_.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#dnssec_enable_validation DnsServer#dnssec_enable_validation}
  */
  readonly dnssecEnableValidation?: boolean | cdktf.IResolvable;
  /**
  * Optional. Master toggle for all DNSSEC processing. Other _dnssec_*_ configuration is unused if this is disabled.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#dnssec_enabled DnsServer#dnssec_enabled}
  */
  readonly dnssecEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. DNSSEC trust anchors.  Error if there are list items with duplicate (_zone_, _sep_, _algorithm_) combinations.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#dnssec_trust_anchors DnsServer#dnssec_trust_anchors}
  */
  readonly dnssecTrustAnchors?: DnsServerDnssecTrustAnchors[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to reject expired DNSSEC keys. Ignored if either _dnssec_enabled_ or _dnssec_enable_validation_ is _false_.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#dnssec_validate_expiry DnsServer#dnssec_validate_expiry}
  */
  readonly dnssecValidateExpiry?: boolean | cdktf.IResolvable;
  /**
  * Optional. _true_ to enable EDNS client subnet for recursive queries. Other _ecs_*_ fields are ignored if this field is not enabled.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#ecs_enabled DnsServer#ecs_enabled}
  */
  readonly ecsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. _true_ to enable ECS options in outbound queries. This functionality has additional overhead so it is disabled by default.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#ecs_forwarding DnsServer#ecs_forwarding}
  */
  readonly ecsForwarding?: boolean | cdktf.IResolvable;
  /**
  * Optional. Maximum scope length for v4 ECS.  Unsigned integer, min 1 max 24  Defaults to 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#ecs_prefix_v4 DnsServer#ecs_prefix_v4}
  */
  readonly ecsPrefixV4?: number;
  /**
  * Optional. Maximum scope length for v6 ECS.  Unsigned integer, min 1 max 56  Defaults to 56.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#ecs_prefix_v6 DnsServer#ecs_prefix_v6}
  */
  readonly ecsPrefixV6?: number;
  /**
  * Optional. List of zones where ECS queries may be sent.  Error if empty while _ecs_enabled_ is _true_. Error if there are duplicate FQDNs in the list.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#ecs_zones DnsServer#ecs_zones}
  */
  readonly ecsZones?: DnsServerEcsZones[] | cdktf.IResolvable;
  /**
  * Optional. Specifies a list of client addresses for which AAAA filtering is to be applied.  Defaults to _empty_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#filter_aaaa_acl DnsServer#filter_aaaa_acl}
  */
  readonly filterAaaaAcl?: DnsServerFilterAaaaAcl[] | cdktf.IResolvable;
  /**
  * _filter_aaaa_on_v4_ allows named to omit some IPv6 addresses when responding to IPv4 clients.  Allowed values: * _yes_, * _no_, * _break_dnssec_.  Defaults to _no_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#filter_aaaa_on_v4 DnsServer#filter_aaaa_on_v4}
  */
  readonly filterAaaaOnV4?: string;
  /**
  * Optional. List of forwarders.  Error if empty while _forwarders_only_ or _use_root_forwarders_for_local_resolution_with_b1td_ is _true_. Error if there are items in the list with duplicate addresses.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#forwarders DnsServer#forwarders}
  */
  readonly forwarders?: DnsServerForwarders[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to only forward.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#forwarders_only DnsServer#forwarders_only}
  */
  readonly forwardersOnly?: boolean | cdktf.IResolvable;
  /**
  * _gss_tsig_enabled_ enables/disables GSS-TSIG signed dynamic updates.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#gss_tsig_enabled DnsServer#gss_tsig_enabled}
  */
  readonly gssTsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#inheritance_sources DnsServer#inheritance_sources}
  */
  readonly inheritanceSources?: DnsServerInheritanceSources;
  /**
  * _kerberos_keys_ contains a list of keys for GSS-TSIG signed dynamic updates.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#kerberos_keys DnsServer#kerberos_keys}
  */
  readonly kerberosKeys?: DnsServerKerberosKeys[] | cdktf.IResolvable;
  /**
  * Optional. Unused in the current on-prem DNS server implementation.  Unsigned integer, min 0 max 3600 (1h).  Defaults to 600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#lame_ttl DnsServer#lame_ttl}
  */
  readonly lameTtl?: number;
  /**
  * Optional. Control DNS query/response logging functionality.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#log_query_response DnsServer#log_query_response}
  */
  readonly logQueryResponse?: boolean | cdktf.IResolvable;
  /**
  * Optional. If _true_ only recursive queries from matching clients access the view.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#match_recursive_only DnsServer#match_recursive_only}
  */
  readonly matchRecursiveOnly?: boolean | cdktf.IResolvable;
  /**
  * Optional. Seconds to cache positive responses.  Unsigned integer, min 1 max 604800 (7d).  Defaults to 604800 (7d).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#max_cache_ttl DnsServer#max_cache_ttl}
  */
  readonly maxCacheTtl?: number;
  /**
  * Optional. Seconds to cache negative responses.  Unsigned integer, min 1 max 604800 (7d).  Defaults to 10800 (3h).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#max_negative_ttl DnsServer#max_negative_ttl}
  */
  readonly maxNegativeTtl?: number;
  /**
  * Optional. When enabled, the DNS server will only add records to the authority and additional data sections when they are required.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#minimal_responses DnsServer#minimal_responses}
  */
  readonly minimalResponses?: boolean | cdktf.IResolvable;
  /**
  * Name of configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#name DnsServer#name}
  */
  readonly name: string;
  /**
  * _notify_ all external secondary DNS servers.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#notify DnsServer#notify}
  */
  readonly notify?: boolean | cdktf.IResolvable;
  /**
  * Optional. Clients must match this ACL to make authoritative queries. Also used for recursive queries if that ACL is unset.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#query_acl DnsServer#query_acl}
  */
  readonly queryAcl?: DnsServerQueryAcl[] | cdktf.IResolvable;
  /**
  * Optional. Source port for outbound DNS queries. When set to 0 the port is unspecified and the implementation may randomize it using any available ports.  Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#query_port DnsServer#query_port}
  */
  readonly queryPort?: number;
  /**
  * Optional. Clients must match this ACL to make recursive queries. If this ACL is empty, then the _query_acl_ field will be used instead.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#recursion_acl DnsServer#recursion_acl}
  */
  readonly recursionAcl?: DnsServerRecursionAcl[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to allow recursive DNS queries.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#recursion_enabled DnsServer#recursion_enabled}
  */
  readonly recursionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. Defines the number of simultaneous recursive lookups the server will perform on behalf of its clients.  Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#recursive_clients DnsServer#recursive_clients}
  */
  readonly recursiveClients?: number;
  /**
  * Optional. Seconds before a recursive query times out.  Unsigned integer, min 10 max 30.  Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#resolver_query_timeout DnsServer#resolver_query_timeout}
  */
  readonly resolverQueryTimeout?: number;
  /**
  * Optional. Maximum concurrent inbound AXFRs. When set to 0 a host-dependent default will be used.  Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#secondary_axfr_query_limit DnsServer#secondary_axfr_query_limit}
  */
  readonly secondaryAxfrQueryLimit?: number;
  /**
  * Optional. Maximum concurrent outbound SOA queries. When set to 0 a host-dependent default will be used.  Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#secondary_soa_query_limit DnsServer#secondary_soa_query_limit}
  */
  readonly secondarySoaQueryLimit?: number;
  /**
  * Optional. Specifies a sorted network list for A/AAAA records in DNS query response.  Defaults to _empty_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#sort_list DnsServer#sort_list}
  */
  readonly sortList?: DnsServerSortListStruct[] | cdktf.IResolvable;
  /**
  * _synthesize_address_records_from_https_ enables/disables creation of A/AAAA records from HTTPS RR Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#synthesize_address_records_from_https DnsServer#synthesize_address_records_from_https}
  */
  readonly synthesizeAddressRecordsFromHttps?: boolean | cdktf.IResolvable;
  /**
  * Tagging specifics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#tags DnsServer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Optional. Clients must match this ACL to receive zone transfers.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#transfer_acl DnsServer#transfer_acl}
  */
  readonly transferAcl?: DnsServerTransferAcl[] | cdktf.IResolvable;
  /**
  * Optional. Specifies which hosts are allowed to issue Dynamic DNS updates for authoritative zones of _primary_type_ _cloud_.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#update_acl DnsServer#update_acl}
  */
  readonly updateAcl?: DnsServerUpdateAcl[] | cdktf.IResolvable;
  /**
  * Optional. Use default forwarders to resolve queries for subzones.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#use_forwarders_for_subzones DnsServer#use_forwarders_for_subzones}
  */
  readonly useForwardersForSubzones?: boolean | cdktf.IResolvable;
  /**
  * _use_root_forwarders_for_local_resolution_with_b1td_ allows DNS recursive queries sent to root forwarders for local resolution when deployed alongside BloxOne Thread Defense. Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#use_root_forwarders_for_local_resolution_with_b1td DnsServer#use_root_forwarders_for_local_resolution_with_b1td}
  */
  readonly useRootForwardersForLocalResolutionWithB1Td?: boolean | cdktf.IResolvable;
}
export interface DnsServerCustomRootNs {
  /**
  * IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#address DnsServer#address}
  */
  readonly address: string;
  /**
  * FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#fqdn DnsServer#fqdn}
  */
  readonly fqdn: string;
}

export function dnsServerCustomRootNsToTerraform(struct?: DnsServerCustomRootNs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dnsServerCustomRootNsToHclTerraform(struct?: DnsServerCustomRootNs | cdktf.IResolvable): any {
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

export class DnsServerCustomRootNsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerCustomRootNs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerCustomRootNs | cdktf.IResolvable | undefined) {
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

export class DnsServerCustomRootNsList extends cdktf.ComplexList {
  public internalValue? : DnsServerCustomRootNs[] | cdktf.IResolvable

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
  public get(index: number): DnsServerCustomRootNsOutputReference {
    return new DnsServerCustomRootNsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerDnssecRootKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#algorithm DnsServer#algorithm}
  */
  readonly algorithm: number;
  /**
  * DNSSEC key data. Non-empty, valid base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#public_key DnsServer#public_key}
  */
  readonly publicKey: string;
  /**
  * Optional. Secure Entry Point flag.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#sep DnsServer#sep}
  */
  readonly sep?: boolean | cdktf.IResolvable;
  /**
  * Zone FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#zone DnsServer#zone}
  */
  readonly zone: string;
}

export function dnsServerDnssecRootKeysToTerraform(struct?: DnsServerDnssecRootKeys): any {
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


export function dnsServerDnssecRootKeysToHclTerraform(struct?: DnsServerDnssecRootKeys): any {
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

export class DnsServerDnssecRootKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerDnssecRootKeys | undefined {
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

  public set internalValue(value: DnsServerDnssecRootKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._publicKey = undefined;
      this._sep = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._publicKey = value.publicKey;
      this._sep = value.sep;
      this._zone = value.zone;
    }
  }

  // algorithm - computed: true, optional: false, required: true
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

  // public_key - computed: true, optional: false, required: true
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

  // sep - computed: true, optional: true, required: false
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

  // zone - computed: true, optional: false, required: true
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

export class DnsServerDnssecRootKeysList extends cdktf.ComplexList {
  public internalValue? : DnsServerDnssecRootKeys[] | cdktf.IResolvable

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
  public get(index: number): DnsServerDnssecRootKeysOutputReference {
    return new DnsServerDnssecRootKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerDnssecTrustAnchors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#algorithm DnsServer#algorithm}
  */
  readonly algorithm: number;
  /**
  * DNSSEC key data. Non-empty, valid base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#public_key DnsServer#public_key}
  */
  readonly publicKey: string;
  /**
  * Optional. Secure Entry Point flag.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#sep DnsServer#sep}
  */
  readonly sep?: boolean | cdktf.IResolvable;
  /**
  * Zone FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#zone DnsServer#zone}
  */
  readonly zone: string;
}

export function dnsServerDnssecTrustAnchorsToTerraform(struct?: DnsServerDnssecTrustAnchors | cdktf.IResolvable): any {
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


export function dnsServerDnssecTrustAnchorsToHclTerraform(struct?: DnsServerDnssecTrustAnchors | cdktf.IResolvable): any {
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

export class DnsServerDnssecTrustAnchorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerDnssecTrustAnchors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerDnssecTrustAnchors | cdktf.IResolvable | undefined) {
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

export class DnsServerDnssecTrustAnchorsList extends cdktf.ComplexList {
  public internalValue? : DnsServerDnssecTrustAnchors[] | cdktf.IResolvable

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
  public get(index: number): DnsServerDnssecTrustAnchorsOutputReference {
    return new DnsServerDnssecTrustAnchorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerEcsZones {
  /**
  * Access control for zone. Allowed values:
  *  * _allow_
  *  * _deny_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#access DnsServer#access}
  */
  readonly access: string;
  /**
  * Zone FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#fqdn DnsServer#fqdn}
  */
  readonly fqdn: string;
}

export function dnsServerEcsZonesToTerraform(struct?: DnsServerEcsZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dnsServerEcsZonesToHclTerraform(struct?: DnsServerEcsZones | cdktf.IResolvable): any {
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

export class DnsServerEcsZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerEcsZones | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerEcsZones | cdktf.IResolvable | undefined) {
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

export class DnsServerEcsZonesList extends cdktf.ComplexList {
  public internalValue? : DnsServerEcsZones[] | cdktf.IResolvable

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
  public get(index: number): DnsServerEcsZonesOutputReference {
    return new DnsServerEcsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerFilterAaaaAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#key DnsServer#key}
  */
  readonly key?: string;
}

export function dnsServerFilterAaaaAclTsigKeyToTerraform(struct?: DnsServerFilterAaaaAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dnsServerFilterAaaaAclTsigKeyToHclTerraform(struct?: DnsServerFilterAaaaAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsServerFilterAaaaAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerFilterAaaaAclTsigKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerFilterAaaaAclTsigKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DnsServerFilterAaaaAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#access DnsServer#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#acl DnsServer#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#address DnsServer#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  *   Allowed values:
  *   * _any_
  *   * _ip_
  *   * _acl_
  *   * _tsig_key_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#element DnsServer#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#tsig_key DnsServer#tsig_key}
  */
  readonly tsigKey?: DnsServerFilterAaaaAclTsigKey;
}

export function dnsServerFilterAaaaAclToTerraform(struct?: DnsServerFilterAaaaAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dnsServerFilterAaaaAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsServerFilterAaaaAclToHclTerraform(struct?: DnsServerFilterAaaaAcl | cdktf.IResolvable): any {
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
      value: dnsServerFilterAaaaAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerFilterAaaaAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsServerFilterAaaaAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerFilterAaaaAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerFilterAaaaAcl | cdktf.IResolvable | undefined) {
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

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
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

  // element - computed: true, optional: true, required: false
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  public resetElement() {
    this._element = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsServerFilterAaaaAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsServerFilterAaaaAclTsigKey) {
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

export class DnsServerFilterAaaaAclList extends cdktf.ComplexList {
  public internalValue? : DnsServerFilterAaaaAcl[] | cdktf.IResolvable

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
  public get(index: number): DnsServerFilterAaaaAclOutputReference {
    return new DnsServerFilterAaaaAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerForwarders {
  /**
  * Server IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#address DnsServer#address}
  */
  readonly address: string;
  /**
  * Server FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#fqdn DnsServer#fqdn}
  */
  readonly fqdn: string;
}

export function dnsServerForwardersToTerraform(struct?: DnsServerForwarders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dnsServerForwardersToHclTerraform(struct?: DnsServerForwarders | cdktf.IResolvable): any {
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

export class DnsServerForwardersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerForwarders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerForwarders | cdktf.IResolvable | undefined) {
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

  // address - computed: true, optional: false, required: true
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

  // fqdn - computed: true, optional: false, required: true
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

export class DnsServerForwardersList extends cdktf.ComplexList {
  public internalValue? : DnsServerForwarders[] | cdktf.IResolvable

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
  public get(index: number): DnsServerForwardersOutputReference {
    return new DnsServerForwardersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerInheritanceSourcesAddEdnsOptionInOutgoingQuery {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesAddEdnsOptionInOutgoingQueryToTerraform(struct?: DnsServerInheritanceSourcesAddEdnsOptionInOutgoingQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesAddEdnsOptionInOutgoingQueryToHclTerraform(struct?: DnsServerInheritanceSourcesAddEdnsOptionInOutgoingQuery | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesAddEdnsOptionInOutgoingQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesAddEdnsOptionInOutgoingQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesAddEdnsOptionInOutgoingQuery | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesCustomRootNsBlockValueCustomRootNs {
}

export function dnsServerInheritanceSourcesCustomRootNsBlockValueCustomRootNsToTerraform(struct?: DnsServerInheritanceSourcesCustomRootNsBlockValueCustomRootNs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesCustomRootNsBlockValueCustomRootNsToHclTerraform(struct?: DnsServerInheritanceSourcesCustomRootNsBlockValueCustomRootNs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesCustomRootNsBlockValueCustomRootNsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerInheritanceSourcesCustomRootNsBlockValueCustomRootNs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesCustomRootNsBlockValueCustomRootNs | undefined) {
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

export class DnsServerInheritanceSourcesCustomRootNsBlockValueCustomRootNsList extends cdktf.ComplexList {

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
  public get(index: number): DnsServerInheritanceSourcesCustomRootNsBlockValueCustomRootNsOutputReference {
    return new DnsServerInheritanceSourcesCustomRootNsBlockValueCustomRootNsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerInheritanceSourcesCustomRootNsBlockValue {
}

export function dnsServerInheritanceSourcesCustomRootNsBlockValueToTerraform(struct?: DnsServerInheritanceSourcesCustomRootNsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesCustomRootNsBlockValueToHclTerraform(struct?: DnsServerInheritanceSourcesCustomRootNsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesCustomRootNsBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesCustomRootNsBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesCustomRootNsBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_root_ns - computed: true, optional: false, required: false
  private _customRootNs = new DnsServerInheritanceSourcesCustomRootNsBlockValueCustomRootNsList(this, "custom_root_ns", false);
  public get customRootNs() {
    return this._customRootNs;
  }

  // custom_root_ns_enabled - computed: true, optional: false, required: false
  public get customRootNsEnabled() {
    return this.getBooleanAttribute('custom_root_ns_enabled');
  }
}
export interface DnsServerInheritanceSourcesCustomRootNsBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesCustomRootNsBlockToTerraform(struct?: DnsServerInheritanceSourcesCustomRootNsBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesCustomRootNsBlockToHclTerraform(struct?: DnsServerInheritanceSourcesCustomRootNsBlock | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesCustomRootNsBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesCustomRootNsBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesCustomRootNsBlock | cdktf.IResolvable | undefined) {
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
  private _value = new DnsServerInheritanceSourcesCustomRootNsBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DnsServerInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors {
}

export function dnsServerInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsToTerraform(struct?: DnsServerInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsToHclTerraform(struct?: DnsServerInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors | undefined) {
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

export class DnsServerInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsList extends cdktf.ComplexList {

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
  public get(index: number): DnsServerInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsOutputReference {
    return new DnsServerInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerInheritanceSourcesDnssecValidationBlockValue {
}

export function dnsServerInheritanceSourcesDnssecValidationBlockValueToTerraform(struct?: DnsServerInheritanceSourcesDnssecValidationBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesDnssecValidationBlockValueToHclTerraform(struct?: DnsServerInheritanceSourcesDnssecValidationBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesDnssecValidationBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesDnssecValidationBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesDnssecValidationBlockValue | undefined) {
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
  private _dnssecTrustAnchors = new DnsServerInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsList(this, "dnssec_trust_anchors", false);
  public get dnssecTrustAnchors() {
    return this._dnssecTrustAnchors;
  }

  // dnssec_validate_expiry - computed: true, optional: false, required: false
  public get dnssecValidateExpiry() {
    return this.getBooleanAttribute('dnssec_validate_expiry');
  }
}
export interface DnsServerInheritanceSourcesDnssecValidationBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesDnssecValidationBlockToTerraform(struct?: DnsServerInheritanceSourcesDnssecValidationBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesDnssecValidationBlockToHclTerraform(struct?: DnsServerInheritanceSourcesDnssecValidationBlock | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesDnssecValidationBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesDnssecValidationBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesDnssecValidationBlock | cdktf.IResolvable | undefined) {
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
  private _value = new DnsServerInheritanceSourcesDnssecValidationBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DnsServerInheritanceSourcesEcsBlockValueEcsZones {
}

export function dnsServerInheritanceSourcesEcsBlockValueEcsZonesToTerraform(struct?: DnsServerInheritanceSourcesEcsBlockValueEcsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesEcsBlockValueEcsZonesToHclTerraform(struct?: DnsServerInheritanceSourcesEcsBlockValueEcsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesEcsBlockValueEcsZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerInheritanceSourcesEcsBlockValueEcsZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesEcsBlockValueEcsZones | undefined) {
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

export class DnsServerInheritanceSourcesEcsBlockValueEcsZonesList extends cdktf.ComplexList {

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
  public get(index: number): DnsServerInheritanceSourcesEcsBlockValueEcsZonesOutputReference {
    return new DnsServerInheritanceSourcesEcsBlockValueEcsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerInheritanceSourcesEcsBlockValue {
}

export function dnsServerInheritanceSourcesEcsBlockValueToTerraform(struct?: DnsServerInheritanceSourcesEcsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesEcsBlockValueToHclTerraform(struct?: DnsServerInheritanceSourcesEcsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesEcsBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesEcsBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesEcsBlockValue | undefined) {
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
  private _ecsZones = new DnsServerInheritanceSourcesEcsBlockValueEcsZonesList(this, "ecs_zones", false);
  public get ecsZones() {
    return this._ecsZones;
  }
}
export interface DnsServerInheritanceSourcesEcsBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesEcsBlockToTerraform(struct?: DnsServerInheritanceSourcesEcsBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesEcsBlockToHclTerraform(struct?: DnsServerInheritanceSourcesEcsBlock | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesEcsBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesEcsBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesEcsBlock | cdktf.IResolvable | undefined) {
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
  private _value = new DnsServerInheritanceSourcesEcsBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DnsServerInheritanceSourcesFilterAaaaAclValueTsigKey {
}

export function dnsServerInheritanceSourcesFilterAaaaAclValueTsigKeyToTerraform(struct?: DnsServerInheritanceSourcesFilterAaaaAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesFilterAaaaAclValueTsigKeyToHclTerraform(struct?: DnsServerInheritanceSourcesFilterAaaaAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesFilterAaaaAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesFilterAaaaAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesFilterAaaaAclValueTsigKey | undefined) {
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
export interface DnsServerInheritanceSourcesFilterAaaaAclValue {
}

export function dnsServerInheritanceSourcesFilterAaaaAclValueToTerraform(struct?: DnsServerInheritanceSourcesFilterAaaaAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesFilterAaaaAclValueToHclTerraform(struct?: DnsServerInheritanceSourcesFilterAaaaAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesFilterAaaaAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerInheritanceSourcesFilterAaaaAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesFilterAaaaAclValue | undefined) {
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
  private _tsigKey = new DnsServerInheritanceSourcesFilterAaaaAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DnsServerInheritanceSourcesFilterAaaaAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsServerInheritanceSourcesFilterAaaaAclValueOutputReference {
    return new DnsServerInheritanceSourcesFilterAaaaAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerInheritanceSourcesFilterAaaaAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesFilterAaaaAclToTerraform(struct?: DnsServerInheritanceSourcesFilterAaaaAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesFilterAaaaAclToHclTerraform(struct?: DnsServerInheritanceSourcesFilterAaaaAcl | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesFilterAaaaAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesFilterAaaaAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesFilterAaaaAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DnsServerInheritanceSourcesFilterAaaaAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsServerInheritanceSourcesFilterAaaaOnV4 {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesFilterAaaaOnV4ToTerraform(struct?: DnsServerInheritanceSourcesFilterAaaaOnV4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesFilterAaaaOnV4ToHclTerraform(struct?: DnsServerInheritanceSourcesFilterAaaaOnV4 | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesFilterAaaaOnV4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesFilterAaaaOnV4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesFilterAaaaOnV4 | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesForwardersBlockValueForwarders {
}

export function dnsServerInheritanceSourcesForwardersBlockValueForwardersToTerraform(struct?: DnsServerInheritanceSourcesForwardersBlockValueForwarders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesForwardersBlockValueForwardersToHclTerraform(struct?: DnsServerInheritanceSourcesForwardersBlockValueForwarders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesForwardersBlockValueForwardersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerInheritanceSourcesForwardersBlockValueForwarders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesForwardersBlockValueForwarders | undefined) {
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

export class DnsServerInheritanceSourcesForwardersBlockValueForwardersList extends cdktf.ComplexList {

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
  public get(index: number): DnsServerInheritanceSourcesForwardersBlockValueForwardersOutputReference {
    return new DnsServerInheritanceSourcesForwardersBlockValueForwardersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerInheritanceSourcesForwardersBlockValue {
}

export function dnsServerInheritanceSourcesForwardersBlockValueToTerraform(struct?: DnsServerInheritanceSourcesForwardersBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesForwardersBlockValueToHclTerraform(struct?: DnsServerInheritanceSourcesForwardersBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesForwardersBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesForwardersBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesForwardersBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forwarders - computed: true, optional: false, required: false
  private _forwarders = new DnsServerInheritanceSourcesForwardersBlockValueForwardersList(this, "forwarders", false);
  public get forwarders() {
    return this._forwarders;
  }

  // forwarders_only - computed: true, optional: false, required: false
  public get forwardersOnly() {
    return this.getBooleanAttribute('forwarders_only');
  }

  // use_root_forwarders_for_local_resolution_with_b1td - computed: true, optional: false, required: false
  public get useRootForwardersForLocalResolutionWithB1Td() {
    return this.getBooleanAttribute('use_root_forwarders_for_local_resolution_with_b1td');
  }
}
export interface DnsServerInheritanceSourcesForwardersBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesForwardersBlockToTerraform(struct?: DnsServerInheritanceSourcesForwardersBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesForwardersBlockToHclTerraform(struct?: DnsServerInheritanceSourcesForwardersBlock | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesForwardersBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesForwardersBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesForwardersBlock | cdktf.IResolvable | undefined) {
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
  private _value = new DnsServerInheritanceSourcesForwardersBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DnsServerInheritanceSourcesGssTsigEnabled {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesGssTsigEnabledToTerraform(struct?: DnsServerInheritanceSourcesGssTsigEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesGssTsigEnabledToHclTerraform(struct?: DnsServerInheritanceSourcesGssTsigEnabled | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesGssTsigEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesGssTsigEnabled | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesGssTsigEnabled | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesKerberosKeysValue {
}

export function dnsServerInheritanceSourcesKerberosKeysValueToTerraform(struct?: DnsServerInheritanceSourcesKerberosKeysValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesKerberosKeysValueToHclTerraform(struct?: DnsServerInheritanceSourcesKerberosKeysValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesKerberosKeysValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerInheritanceSourcesKerberosKeysValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesKerberosKeysValue | undefined) {
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

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }

  // uploaded_at - computed: true, optional: false, required: false
  public get uploadedAt() {
    return this.getStringAttribute('uploaded_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DnsServerInheritanceSourcesKerberosKeysValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsServerInheritanceSourcesKerberosKeysValueOutputReference {
    return new DnsServerInheritanceSourcesKerberosKeysValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerInheritanceSourcesKerberosKeys {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesKerberosKeysToTerraform(struct?: DnsServerInheritanceSourcesKerberosKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesKerberosKeysToHclTerraform(struct?: DnsServerInheritanceSourcesKerberosKeys | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesKerberosKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesKerberosKeys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesKerberosKeys | cdktf.IResolvable | undefined) {
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
  private _value = new DnsServerInheritanceSourcesKerberosKeysValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsServerInheritanceSourcesLameTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesLameTtlToTerraform(struct?: DnsServerInheritanceSourcesLameTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesLameTtlToHclTerraform(struct?: DnsServerInheritanceSourcesLameTtl | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesLameTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesLameTtl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesLameTtl | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesLogQueryResponse {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesLogQueryResponseToTerraform(struct?: DnsServerInheritanceSourcesLogQueryResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesLogQueryResponseToHclTerraform(struct?: DnsServerInheritanceSourcesLogQueryResponse | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesLogQueryResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesLogQueryResponse | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesLogQueryResponse | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesMatchRecursiveOnly {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesMatchRecursiveOnlyToTerraform(struct?: DnsServerInheritanceSourcesMatchRecursiveOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesMatchRecursiveOnlyToHclTerraform(struct?: DnsServerInheritanceSourcesMatchRecursiveOnly | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesMatchRecursiveOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesMatchRecursiveOnly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesMatchRecursiveOnly | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesMaxCacheTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesMaxCacheTtlToTerraform(struct?: DnsServerInheritanceSourcesMaxCacheTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesMaxCacheTtlToHclTerraform(struct?: DnsServerInheritanceSourcesMaxCacheTtl | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesMaxCacheTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesMaxCacheTtl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesMaxCacheTtl | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesMaxNegativeTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesMaxNegativeTtlToTerraform(struct?: DnsServerInheritanceSourcesMaxNegativeTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesMaxNegativeTtlToHclTerraform(struct?: DnsServerInheritanceSourcesMaxNegativeTtl | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesMaxNegativeTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesMaxNegativeTtl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesMaxNegativeTtl | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesMinimalResponses {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesMinimalResponsesToTerraform(struct?: DnsServerInheritanceSourcesMinimalResponses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesMinimalResponsesToHclTerraform(struct?: DnsServerInheritanceSourcesMinimalResponses | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesMinimalResponsesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesMinimalResponses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesMinimalResponses | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesNotify {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesNotifyToTerraform(struct?: DnsServerInheritanceSourcesNotify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesNotifyToHclTerraform(struct?: DnsServerInheritanceSourcesNotify | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesNotifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesNotify | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesNotify | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesQueryAclValueTsigKey {
}

export function dnsServerInheritanceSourcesQueryAclValueTsigKeyToTerraform(struct?: DnsServerInheritanceSourcesQueryAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesQueryAclValueTsigKeyToHclTerraform(struct?: DnsServerInheritanceSourcesQueryAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesQueryAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesQueryAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesQueryAclValueTsigKey | undefined) {
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
export interface DnsServerInheritanceSourcesQueryAclValue {
}

export function dnsServerInheritanceSourcesQueryAclValueToTerraform(struct?: DnsServerInheritanceSourcesQueryAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesQueryAclValueToHclTerraform(struct?: DnsServerInheritanceSourcesQueryAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesQueryAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerInheritanceSourcesQueryAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesQueryAclValue | undefined) {
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
  private _tsigKey = new DnsServerInheritanceSourcesQueryAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DnsServerInheritanceSourcesQueryAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsServerInheritanceSourcesQueryAclValueOutputReference {
    return new DnsServerInheritanceSourcesQueryAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerInheritanceSourcesQueryAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesQueryAclToTerraform(struct?: DnsServerInheritanceSourcesQueryAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesQueryAclToHclTerraform(struct?: DnsServerInheritanceSourcesQueryAcl | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesQueryAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesQueryAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesQueryAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DnsServerInheritanceSourcesQueryAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsServerInheritanceSourcesQueryPort {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesQueryPortToTerraform(struct?: DnsServerInheritanceSourcesQueryPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesQueryPortToHclTerraform(struct?: DnsServerInheritanceSourcesQueryPort | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesQueryPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesQueryPort | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesQueryPort | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesRecursionAclValueTsigKey {
}

export function dnsServerInheritanceSourcesRecursionAclValueTsigKeyToTerraform(struct?: DnsServerInheritanceSourcesRecursionAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesRecursionAclValueTsigKeyToHclTerraform(struct?: DnsServerInheritanceSourcesRecursionAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesRecursionAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesRecursionAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesRecursionAclValueTsigKey | undefined) {
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
export interface DnsServerInheritanceSourcesRecursionAclValue {
}

export function dnsServerInheritanceSourcesRecursionAclValueToTerraform(struct?: DnsServerInheritanceSourcesRecursionAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesRecursionAclValueToHclTerraform(struct?: DnsServerInheritanceSourcesRecursionAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesRecursionAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerInheritanceSourcesRecursionAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesRecursionAclValue | undefined) {
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
  private _tsigKey = new DnsServerInheritanceSourcesRecursionAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DnsServerInheritanceSourcesRecursionAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsServerInheritanceSourcesRecursionAclValueOutputReference {
    return new DnsServerInheritanceSourcesRecursionAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerInheritanceSourcesRecursionAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesRecursionAclToTerraform(struct?: DnsServerInheritanceSourcesRecursionAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesRecursionAclToHclTerraform(struct?: DnsServerInheritanceSourcesRecursionAcl | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesRecursionAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesRecursionAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesRecursionAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DnsServerInheritanceSourcesRecursionAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsServerInheritanceSourcesRecursionEnabled {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesRecursionEnabledToTerraform(struct?: DnsServerInheritanceSourcesRecursionEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesRecursionEnabledToHclTerraform(struct?: DnsServerInheritanceSourcesRecursionEnabled | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesRecursionEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesRecursionEnabled | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesRecursionEnabled | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesRecursiveClients {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesRecursiveClientsToTerraform(struct?: DnsServerInheritanceSourcesRecursiveClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesRecursiveClientsToHclTerraform(struct?: DnsServerInheritanceSourcesRecursiveClients | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesRecursiveClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesRecursiveClients | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesRecursiveClients | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesResolverQueryTimeout {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesResolverQueryTimeoutToTerraform(struct?: DnsServerInheritanceSourcesResolverQueryTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesResolverQueryTimeoutToHclTerraform(struct?: DnsServerInheritanceSourcesResolverQueryTimeout | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesResolverQueryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesResolverQueryTimeout | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesResolverQueryTimeout | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesSecondaryAxfrQueryLimit {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesSecondaryAxfrQueryLimitToTerraform(struct?: DnsServerInheritanceSourcesSecondaryAxfrQueryLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesSecondaryAxfrQueryLimitToHclTerraform(struct?: DnsServerInheritanceSourcesSecondaryAxfrQueryLimit | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesSecondaryAxfrQueryLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesSecondaryAxfrQueryLimit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesSecondaryAxfrQueryLimit | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesSecondarySoaQueryLimit {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesSecondarySoaQueryLimitToTerraform(struct?: DnsServerInheritanceSourcesSecondarySoaQueryLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesSecondarySoaQueryLimitToHclTerraform(struct?: DnsServerInheritanceSourcesSecondarySoaQueryLimit | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesSecondarySoaQueryLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesSecondarySoaQueryLimit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesSecondarySoaQueryLimit | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesSortListValue {
}

export function dnsServerInheritanceSourcesSortListValueToTerraform(struct?: DnsServerInheritanceSourcesSortListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesSortListValueToHclTerraform(struct?: DnsServerInheritanceSourcesSortListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesSortListValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerInheritanceSourcesSortListValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesSortListValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // prioritized_networks - computed: true, optional: false, required: false
  public get prioritizedNetworks() {
    return this.getListAttribute('prioritized_networks');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}

export class DnsServerInheritanceSourcesSortListValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsServerInheritanceSourcesSortListValueOutputReference {
    return new DnsServerInheritanceSourcesSortListValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerInheritanceSourcesSortListStruct {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesSortListStructToTerraform(struct?: DnsServerInheritanceSourcesSortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesSortListStructToHclTerraform(struct?: DnsServerInheritanceSourcesSortListStruct | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesSortListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesSortListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesSortListStruct | cdktf.IResolvable | undefined) {
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
  private _value = new DnsServerInheritanceSourcesSortListValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsServerInheritanceSourcesSynthesizeAddressRecordsFromHttps {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesSynthesizeAddressRecordsFromHttpsToTerraform(struct?: DnsServerInheritanceSourcesSynthesizeAddressRecordsFromHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesSynthesizeAddressRecordsFromHttpsToHclTerraform(struct?: DnsServerInheritanceSourcesSynthesizeAddressRecordsFromHttps | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesSynthesizeAddressRecordsFromHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesSynthesizeAddressRecordsFromHttps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesSynthesizeAddressRecordsFromHttps | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSourcesTransferAclValueTsigKey {
}

export function dnsServerInheritanceSourcesTransferAclValueTsigKeyToTerraform(struct?: DnsServerInheritanceSourcesTransferAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesTransferAclValueTsigKeyToHclTerraform(struct?: DnsServerInheritanceSourcesTransferAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesTransferAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesTransferAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesTransferAclValueTsigKey | undefined) {
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
export interface DnsServerInheritanceSourcesTransferAclValue {
}

export function dnsServerInheritanceSourcesTransferAclValueToTerraform(struct?: DnsServerInheritanceSourcesTransferAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesTransferAclValueToHclTerraform(struct?: DnsServerInheritanceSourcesTransferAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesTransferAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerInheritanceSourcesTransferAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesTransferAclValue | undefined) {
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
  private _tsigKey = new DnsServerInheritanceSourcesTransferAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DnsServerInheritanceSourcesTransferAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsServerInheritanceSourcesTransferAclValueOutputReference {
    return new DnsServerInheritanceSourcesTransferAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerInheritanceSourcesTransferAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesTransferAclToTerraform(struct?: DnsServerInheritanceSourcesTransferAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesTransferAclToHclTerraform(struct?: DnsServerInheritanceSourcesTransferAcl | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesTransferAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesTransferAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesTransferAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DnsServerInheritanceSourcesTransferAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsServerInheritanceSourcesUpdateAclValueTsigKey {
}

export function dnsServerInheritanceSourcesUpdateAclValueTsigKeyToTerraform(struct?: DnsServerInheritanceSourcesUpdateAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesUpdateAclValueTsigKeyToHclTerraform(struct?: DnsServerInheritanceSourcesUpdateAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesUpdateAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesUpdateAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesUpdateAclValueTsigKey | undefined) {
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
export interface DnsServerInheritanceSourcesUpdateAclValue {
}

export function dnsServerInheritanceSourcesUpdateAclValueToTerraform(struct?: DnsServerInheritanceSourcesUpdateAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerInheritanceSourcesUpdateAclValueToHclTerraform(struct?: DnsServerInheritanceSourcesUpdateAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerInheritanceSourcesUpdateAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerInheritanceSourcesUpdateAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSourcesUpdateAclValue | undefined) {
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
  private _tsigKey = new DnsServerInheritanceSourcesUpdateAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DnsServerInheritanceSourcesUpdateAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsServerInheritanceSourcesUpdateAclValueOutputReference {
    return new DnsServerInheritanceSourcesUpdateAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerInheritanceSourcesUpdateAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesUpdateAclToTerraform(struct?: DnsServerInheritanceSourcesUpdateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesUpdateAclToHclTerraform(struct?: DnsServerInheritanceSourcesUpdateAcl | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesUpdateAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesUpdateAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesUpdateAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DnsServerInheritanceSourcesUpdateAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsServerInheritanceSourcesUseForwardersForSubzones {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#action DnsServer#action}
  */
  readonly action?: string;
}

export function dnsServerInheritanceSourcesUseForwardersForSubzonesToTerraform(struct?: DnsServerInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsServerInheritanceSourcesUseForwardersForSubzonesToHclTerraform(struct?: DnsServerInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable): any {
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

export class DnsServerInheritanceSourcesUseForwardersForSubzonesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable | undefined) {
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
export interface DnsServerInheritanceSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#add_edns_option_in_outgoing_query DnsServer#add_edns_option_in_outgoing_query}
  */
  readonly addEdnsOptionInOutgoingQuery?: DnsServerInheritanceSourcesAddEdnsOptionInOutgoingQuery;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#custom_root_ns_block DnsServer#custom_root_ns_block}
  */
  readonly customRootNsBlock?: DnsServerInheritanceSourcesCustomRootNsBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#dnssec_validation_block DnsServer#dnssec_validation_block}
  */
  readonly dnssecValidationBlock?: DnsServerInheritanceSourcesDnssecValidationBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#ecs_block DnsServer#ecs_block}
  */
  readonly ecsBlock?: DnsServerInheritanceSourcesEcsBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#filter_aaaa_acl DnsServer#filter_aaaa_acl}
  */
  readonly filterAaaaAcl?: DnsServerInheritanceSourcesFilterAaaaAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#filter_aaaa_on_v4 DnsServer#filter_aaaa_on_v4}
  */
  readonly filterAaaaOnV4?: DnsServerInheritanceSourcesFilterAaaaOnV4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#forwarders_block DnsServer#forwarders_block}
  */
  readonly forwardersBlock?: DnsServerInheritanceSourcesForwardersBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#gss_tsig_enabled DnsServer#gss_tsig_enabled}
  */
  readonly gssTsigEnabled?: DnsServerInheritanceSourcesGssTsigEnabled;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#kerberos_keys DnsServer#kerberos_keys}
  */
  readonly kerberosKeys?: DnsServerInheritanceSourcesKerberosKeys;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#lame_ttl DnsServer#lame_ttl}
  */
  readonly lameTtl?: DnsServerInheritanceSourcesLameTtl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#log_query_response DnsServer#log_query_response}
  */
  readonly logQueryResponse?: DnsServerInheritanceSourcesLogQueryResponse;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#match_recursive_only DnsServer#match_recursive_only}
  */
  readonly matchRecursiveOnly?: DnsServerInheritanceSourcesMatchRecursiveOnly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#max_cache_ttl DnsServer#max_cache_ttl}
  */
  readonly maxCacheTtl?: DnsServerInheritanceSourcesMaxCacheTtl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#max_negative_ttl DnsServer#max_negative_ttl}
  */
  readonly maxNegativeTtl?: DnsServerInheritanceSourcesMaxNegativeTtl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#minimal_responses DnsServer#minimal_responses}
  */
  readonly minimalResponses?: DnsServerInheritanceSourcesMinimalResponses;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#notify DnsServer#notify}
  */
  readonly notify?: DnsServerInheritanceSourcesNotify;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#query_acl DnsServer#query_acl}
  */
  readonly queryAcl?: DnsServerInheritanceSourcesQueryAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#query_port DnsServer#query_port}
  */
  readonly queryPort?: DnsServerInheritanceSourcesQueryPort;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#recursion_acl DnsServer#recursion_acl}
  */
  readonly recursionAcl?: DnsServerInheritanceSourcesRecursionAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#recursion_enabled DnsServer#recursion_enabled}
  */
  readonly recursionEnabled?: DnsServerInheritanceSourcesRecursionEnabled;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#recursive_clients DnsServer#recursive_clients}
  */
  readonly recursiveClients?: DnsServerInheritanceSourcesRecursiveClients;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#resolver_query_timeout DnsServer#resolver_query_timeout}
  */
  readonly resolverQueryTimeout?: DnsServerInheritanceSourcesResolverQueryTimeout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#secondary_axfr_query_limit DnsServer#secondary_axfr_query_limit}
  */
  readonly secondaryAxfrQueryLimit?: DnsServerInheritanceSourcesSecondaryAxfrQueryLimit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#secondary_soa_query_limit DnsServer#secondary_soa_query_limit}
  */
  readonly secondarySoaQueryLimit?: DnsServerInheritanceSourcesSecondarySoaQueryLimit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#sort_list DnsServer#sort_list}
  */
  readonly sortList?: DnsServerInheritanceSourcesSortListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#synthesize_address_records_from_https DnsServer#synthesize_address_records_from_https}
  */
  readonly synthesizeAddressRecordsFromHttps?: DnsServerInheritanceSourcesSynthesizeAddressRecordsFromHttps;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#transfer_acl DnsServer#transfer_acl}
  */
  readonly transferAcl?: DnsServerInheritanceSourcesTransferAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#update_acl DnsServer#update_acl}
  */
  readonly updateAcl?: DnsServerInheritanceSourcesUpdateAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#use_forwarders_for_subzones DnsServer#use_forwarders_for_subzones}
  */
  readonly useForwardersForSubzones?: DnsServerInheritanceSourcesUseForwardersForSubzones;
}

export function dnsServerInheritanceSourcesToTerraform(struct?: DnsServerInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_edns_option_in_outgoing_query: dnsServerInheritanceSourcesAddEdnsOptionInOutgoingQueryToTerraform(struct!.addEdnsOptionInOutgoingQuery),
    custom_root_ns_block: dnsServerInheritanceSourcesCustomRootNsBlockToTerraform(struct!.customRootNsBlock),
    dnssec_validation_block: dnsServerInheritanceSourcesDnssecValidationBlockToTerraform(struct!.dnssecValidationBlock),
    ecs_block: dnsServerInheritanceSourcesEcsBlockToTerraform(struct!.ecsBlock),
    filter_aaaa_acl: dnsServerInheritanceSourcesFilterAaaaAclToTerraform(struct!.filterAaaaAcl),
    filter_aaaa_on_v4: dnsServerInheritanceSourcesFilterAaaaOnV4ToTerraform(struct!.filterAaaaOnV4),
    forwarders_block: dnsServerInheritanceSourcesForwardersBlockToTerraform(struct!.forwardersBlock),
    gss_tsig_enabled: dnsServerInheritanceSourcesGssTsigEnabledToTerraform(struct!.gssTsigEnabled),
    kerberos_keys: dnsServerInheritanceSourcesKerberosKeysToTerraform(struct!.kerberosKeys),
    lame_ttl: dnsServerInheritanceSourcesLameTtlToTerraform(struct!.lameTtl),
    log_query_response: dnsServerInheritanceSourcesLogQueryResponseToTerraform(struct!.logQueryResponse),
    match_recursive_only: dnsServerInheritanceSourcesMatchRecursiveOnlyToTerraform(struct!.matchRecursiveOnly),
    max_cache_ttl: dnsServerInheritanceSourcesMaxCacheTtlToTerraform(struct!.maxCacheTtl),
    max_negative_ttl: dnsServerInheritanceSourcesMaxNegativeTtlToTerraform(struct!.maxNegativeTtl),
    minimal_responses: dnsServerInheritanceSourcesMinimalResponsesToTerraform(struct!.minimalResponses),
    notify: dnsServerInheritanceSourcesNotifyToTerraform(struct!.notify),
    query_acl: dnsServerInheritanceSourcesQueryAclToTerraform(struct!.queryAcl),
    query_port: dnsServerInheritanceSourcesQueryPortToTerraform(struct!.queryPort),
    recursion_acl: dnsServerInheritanceSourcesRecursionAclToTerraform(struct!.recursionAcl),
    recursion_enabled: dnsServerInheritanceSourcesRecursionEnabledToTerraform(struct!.recursionEnabled),
    recursive_clients: dnsServerInheritanceSourcesRecursiveClientsToTerraform(struct!.recursiveClients),
    resolver_query_timeout: dnsServerInheritanceSourcesResolverQueryTimeoutToTerraform(struct!.resolverQueryTimeout),
    secondary_axfr_query_limit: dnsServerInheritanceSourcesSecondaryAxfrQueryLimitToTerraform(struct!.secondaryAxfrQueryLimit),
    secondary_soa_query_limit: dnsServerInheritanceSourcesSecondarySoaQueryLimitToTerraform(struct!.secondarySoaQueryLimit),
    sort_list: dnsServerInheritanceSourcesSortListStructToTerraform(struct!.sortList),
    synthesize_address_records_from_https: dnsServerInheritanceSourcesSynthesizeAddressRecordsFromHttpsToTerraform(struct!.synthesizeAddressRecordsFromHttps),
    transfer_acl: dnsServerInheritanceSourcesTransferAclToTerraform(struct!.transferAcl),
    update_acl: dnsServerInheritanceSourcesUpdateAclToTerraform(struct!.updateAcl),
    use_forwarders_for_subzones: dnsServerInheritanceSourcesUseForwardersForSubzonesToTerraform(struct!.useForwardersForSubzones),
  }
}


export function dnsServerInheritanceSourcesToHclTerraform(struct?: DnsServerInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_edns_option_in_outgoing_query: {
      value: dnsServerInheritanceSourcesAddEdnsOptionInOutgoingQueryToHclTerraform(struct!.addEdnsOptionInOutgoingQuery),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesAddEdnsOptionInOutgoingQuery",
    },
    custom_root_ns_block: {
      value: dnsServerInheritanceSourcesCustomRootNsBlockToHclTerraform(struct!.customRootNsBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesCustomRootNsBlock",
    },
    dnssec_validation_block: {
      value: dnsServerInheritanceSourcesDnssecValidationBlockToHclTerraform(struct!.dnssecValidationBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesDnssecValidationBlock",
    },
    ecs_block: {
      value: dnsServerInheritanceSourcesEcsBlockToHclTerraform(struct!.ecsBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesEcsBlock",
    },
    filter_aaaa_acl: {
      value: dnsServerInheritanceSourcesFilterAaaaAclToHclTerraform(struct!.filterAaaaAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesFilterAaaaAcl",
    },
    filter_aaaa_on_v4: {
      value: dnsServerInheritanceSourcesFilterAaaaOnV4ToHclTerraform(struct!.filterAaaaOnV4),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesFilterAaaaOnV4",
    },
    forwarders_block: {
      value: dnsServerInheritanceSourcesForwardersBlockToHclTerraform(struct!.forwardersBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesForwardersBlock",
    },
    gss_tsig_enabled: {
      value: dnsServerInheritanceSourcesGssTsigEnabledToHclTerraform(struct!.gssTsigEnabled),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesGssTsigEnabled",
    },
    kerberos_keys: {
      value: dnsServerInheritanceSourcesKerberosKeysToHclTerraform(struct!.kerberosKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesKerberosKeys",
    },
    lame_ttl: {
      value: dnsServerInheritanceSourcesLameTtlToHclTerraform(struct!.lameTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesLameTtl",
    },
    log_query_response: {
      value: dnsServerInheritanceSourcesLogQueryResponseToHclTerraform(struct!.logQueryResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesLogQueryResponse",
    },
    match_recursive_only: {
      value: dnsServerInheritanceSourcesMatchRecursiveOnlyToHclTerraform(struct!.matchRecursiveOnly),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesMatchRecursiveOnly",
    },
    max_cache_ttl: {
      value: dnsServerInheritanceSourcesMaxCacheTtlToHclTerraform(struct!.maxCacheTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesMaxCacheTtl",
    },
    max_negative_ttl: {
      value: dnsServerInheritanceSourcesMaxNegativeTtlToHclTerraform(struct!.maxNegativeTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesMaxNegativeTtl",
    },
    minimal_responses: {
      value: dnsServerInheritanceSourcesMinimalResponsesToHclTerraform(struct!.minimalResponses),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesMinimalResponses",
    },
    notify: {
      value: dnsServerInheritanceSourcesNotifyToHclTerraform(struct!.notify),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesNotify",
    },
    query_acl: {
      value: dnsServerInheritanceSourcesQueryAclToHclTerraform(struct!.queryAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesQueryAcl",
    },
    query_port: {
      value: dnsServerInheritanceSourcesQueryPortToHclTerraform(struct!.queryPort),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesQueryPort",
    },
    recursion_acl: {
      value: dnsServerInheritanceSourcesRecursionAclToHclTerraform(struct!.recursionAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesRecursionAcl",
    },
    recursion_enabled: {
      value: dnsServerInheritanceSourcesRecursionEnabledToHclTerraform(struct!.recursionEnabled),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesRecursionEnabled",
    },
    recursive_clients: {
      value: dnsServerInheritanceSourcesRecursiveClientsToHclTerraform(struct!.recursiveClients),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesRecursiveClients",
    },
    resolver_query_timeout: {
      value: dnsServerInheritanceSourcesResolverQueryTimeoutToHclTerraform(struct!.resolverQueryTimeout),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesResolverQueryTimeout",
    },
    secondary_axfr_query_limit: {
      value: dnsServerInheritanceSourcesSecondaryAxfrQueryLimitToHclTerraform(struct!.secondaryAxfrQueryLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesSecondaryAxfrQueryLimit",
    },
    secondary_soa_query_limit: {
      value: dnsServerInheritanceSourcesSecondarySoaQueryLimitToHclTerraform(struct!.secondarySoaQueryLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesSecondarySoaQueryLimit",
    },
    sort_list: {
      value: dnsServerInheritanceSourcesSortListStructToHclTerraform(struct!.sortList),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesSortListStruct",
    },
    synthesize_address_records_from_https: {
      value: dnsServerInheritanceSourcesSynthesizeAddressRecordsFromHttpsToHclTerraform(struct!.synthesizeAddressRecordsFromHttps),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesSynthesizeAddressRecordsFromHttps",
    },
    transfer_acl: {
      value: dnsServerInheritanceSourcesTransferAclToHclTerraform(struct!.transferAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesTransferAcl",
    },
    update_acl: {
      value: dnsServerInheritanceSourcesUpdateAclToHclTerraform(struct!.updateAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesUpdateAcl",
    },
    use_forwarders_for_subzones: {
      value: dnsServerInheritanceSourcesUseForwardersForSubzonesToHclTerraform(struct!.useForwardersForSubzones),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerInheritanceSourcesUseForwardersForSubzones",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsServerInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerInheritanceSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addEdnsOptionInOutgoingQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addEdnsOptionInOutgoingQuery = this._addEdnsOptionInOutgoingQuery?.internalValue;
    }
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
    if (this._filterAaaaAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAaaaAcl = this._filterAaaaAcl?.internalValue;
    }
    if (this._filterAaaaOnV4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAaaaOnV4 = this._filterAaaaOnV4?.internalValue;
    }
    if (this._forwardersBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardersBlock = this._forwardersBlock?.internalValue;
    }
    if (this._gssTsigEnabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssTsigEnabled = this._gssTsigEnabled?.internalValue;
    }
    if (this._kerberosKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKeys = this._kerberosKeys?.internalValue;
    }
    if (this._lameTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lameTtl = this._lameTtl?.internalValue;
    }
    if (this._logQueryResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQueryResponse = this._logQueryResponse?.internalValue;
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
    if (this._queryPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPort = this._queryPort?.internalValue;
    }
    if (this._recursionAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursionAcl = this._recursionAcl?.internalValue;
    }
    if (this._recursionEnabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursionEnabled = this._recursionEnabled?.internalValue;
    }
    if (this._recursiveClients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveClients = this._recursiveClients?.internalValue;
    }
    if (this._resolverQueryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolverQueryTimeout = this._resolverQueryTimeout?.internalValue;
    }
    if (this._secondaryAxfrQueryLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryAxfrQueryLimit = this._secondaryAxfrQueryLimit?.internalValue;
    }
    if (this._secondarySoaQueryLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondarySoaQueryLimit = this._secondarySoaQueryLimit?.internalValue;
    }
    if (this._sortList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortList = this._sortList?.internalValue;
    }
    if (this._synthesizeAddressRecordsFromHttps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synthesizeAddressRecordsFromHttps = this._synthesizeAddressRecordsFromHttps?.internalValue;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerInheritanceSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addEdnsOptionInOutgoingQuery.internalValue = undefined;
      this._customRootNsBlock.internalValue = undefined;
      this._dnssecValidationBlock.internalValue = undefined;
      this._ecsBlock.internalValue = undefined;
      this._filterAaaaAcl.internalValue = undefined;
      this._filterAaaaOnV4.internalValue = undefined;
      this._forwardersBlock.internalValue = undefined;
      this._gssTsigEnabled.internalValue = undefined;
      this._kerberosKeys.internalValue = undefined;
      this._lameTtl.internalValue = undefined;
      this._logQueryResponse.internalValue = undefined;
      this._matchRecursiveOnly.internalValue = undefined;
      this._maxCacheTtl.internalValue = undefined;
      this._maxNegativeTtl.internalValue = undefined;
      this._minimalResponses.internalValue = undefined;
      this._notify.internalValue = undefined;
      this._queryAcl.internalValue = undefined;
      this._queryPort.internalValue = undefined;
      this._recursionAcl.internalValue = undefined;
      this._recursionEnabled.internalValue = undefined;
      this._recursiveClients.internalValue = undefined;
      this._resolverQueryTimeout.internalValue = undefined;
      this._secondaryAxfrQueryLimit.internalValue = undefined;
      this._secondarySoaQueryLimit.internalValue = undefined;
      this._sortList.internalValue = undefined;
      this._synthesizeAddressRecordsFromHttps.internalValue = undefined;
      this._transferAcl.internalValue = undefined;
      this._updateAcl.internalValue = undefined;
      this._useForwardersForSubzones.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addEdnsOptionInOutgoingQuery.internalValue = value.addEdnsOptionInOutgoingQuery;
      this._customRootNsBlock.internalValue = value.customRootNsBlock;
      this._dnssecValidationBlock.internalValue = value.dnssecValidationBlock;
      this._ecsBlock.internalValue = value.ecsBlock;
      this._filterAaaaAcl.internalValue = value.filterAaaaAcl;
      this._filterAaaaOnV4.internalValue = value.filterAaaaOnV4;
      this._forwardersBlock.internalValue = value.forwardersBlock;
      this._gssTsigEnabled.internalValue = value.gssTsigEnabled;
      this._kerberosKeys.internalValue = value.kerberosKeys;
      this._lameTtl.internalValue = value.lameTtl;
      this._logQueryResponse.internalValue = value.logQueryResponse;
      this._matchRecursiveOnly.internalValue = value.matchRecursiveOnly;
      this._maxCacheTtl.internalValue = value.maxCacheTtl;
      this._maxNegativeTtl.internalValue = value.maxNegativeTtl;
      this._minimalResponses.internalValue = value.minimalResponses;
      this._notify.internalValue = value.notify;
      this._queryAcl.internalValue = value.queryAcl;
      this._queryPort.internalValue = value.queryPort;
      this._recursionAcl.internalValue = value.recursionAcl;
      this._recursionEnabled.internalValue = value.recursionEnabled;
      this._recursiveClients.internalValue = value.recursiveClients;
      this._resolverQueryTimeout.internalValue = value.resolverQueryTimeout;
      this._secondaryAxfrQueryLimit.internalValue = value.secondaryAxfrQueryLimit;
      this._secondarySoaQueryLimit.internalValue = value.secondarySoaQueryLimit;
      this._sortList.internalValue = value.sortList;
      this._synthesizeAddressRecordsFromHttps.internalValue = value.synthesizeAddressRecordsFromHttps;
      this._transferAcl.internalValue = value.transferAcl;
      this._updateAcl.internalValue = value.updateAcl;
      this._useForwardersForSubzones.internalValue = value.useForwardersForSubzones;
    }
  }

  // add_edns_option_in_outgoing_query - computed: true, optional: true, required: false
  private _addEdnsOptionInOutgoingQuery = new DnsServerInheritanceSourcesAddEdnsOptionInOutgoingQueryOutputReference(this, "add_edns_option_in_outgoing_query");
  public get addEdnsOptionInOutgoingQuery() {
    return this._addEdnsOptionInOutgoingQuery;
  }
  public putAddEdnsOptionInOutgoingQuery(value: DnsServerInheritanceSourcesAddEdnsOptionInOutgoingQuery) {
    this._addEdnsOptionInOutgoingQuery.internalValue = value;
  }
  public resetAddEdnsOptionInOutgoingQuery() {
    this._addEdnsOptionInOutgoingQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addEdnsOptionInOutgoingQueryInput() {
    return this._addEdnsOptionInOutgoingQuery.internalValue;
  }

  // custom_root_ns_block - computed: true, optional: true, required: false
  private _customRootNsBlock = new DnsServerInheritanceSourcesCustomRootNsBlockOutputReference(this, "custom_root_ns_block");
  public get customRootNsBlock() {
    return this._customRootNsBlock;
  }
  public putCustomRootNsBlock(value: DnsServerInheritanceSourcesCustomRootNsBlock) {
    this._customRootNsBlock.internalValue = value;
  }
  public resetCustomRootNsBlock() {
    this._customRootNsBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRootNsBlockInput() {
    return this._customRootNsBlock.internalValue;
  }

  // dnssec_validation_block - computed: true, optional: true, required: false
  private _dnssecValidationBlock = new DnsServerInheritanceSourcesDnssecValidationBlockOutputReference(this, "dnssec_validation_block");
  public get dnssecValidationBlock() {
    return this._dnssecValidationBlock;
  }
  public putDnssecValidationBlock(value: DnsServerInheritanceSourcesDnssecValidationBlock) {
    this._dnssecValidationBlock.internalValue = value;
  }
  public resetDnssecValidationBlock() {
    this._dnssecValidationBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecValidationBlockInput() {
    return this._dnssecValidationBlock.internalValue;
  }

  // ecs_block - computed: true, optional: true, required: false
  private _ecsBlock = new DnsServerInheritanceSourcesEcsBlockOutputReference(this, "ecs_block");
  public get ecsBlock() {
    return this._ecsBlock;
  }
  public putEcsBlock(value: DnsServerInheritanceSourcesEcsBlock) {
    this._ecsBlock.internalValue = value;
  }
  public resetEcsBlock() {
    this._ecsBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsBlockInput() {
    return this._ecsBlock.internalValue;
  }

  // filter_aaaa_acl - computed: true, optional: true, required: false
  private _filterAaaaAcl = new DnsServerInheritanceSourcesFilterAaaaAclOutputReference(this, "filter_aaaa_acl");
  public get filterAaaaAcl() {
    return this._filterAaaaAcl;
  }
  public putFilterAaaaAcl(value: DnsServerInheritanceSourcesFilterAaaaAcl) {
    this._filterAaaaAcl.internalValue = value;
  }
  public resetFilterAaaaAcl() {
    this._filterAaaaAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAaaaAclInput() {
    return this._filterAaaaAcl.internalValue;
  }

  // filter_aaaa_on_v4 - computed: true, optional: true, required: false
  private _filterAaaaOnV4 = new DnsServerInheritanceSourcesFilterAaaaOnV4OutputReference(this, "filter_aaaa_on_v4");
  public get filterAaaaOnV4() {
    return this._filterAaaaOnV4;
  }
  public putFilterAaaaOnV4(value: DnsServerInheritanceSourcesFilterAaaaOnV4) {
    this._filterAaaaOnV4.internalValue = value;
  }
  public resetFilterAaaaOnV4() {
    this._filterAaaaOnV4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAaaaOnV4Input() {
    return this._filterAaaaOnV4.internalValue;
  }

  // forwarders_block - computed: true, optional: true, required: false
  private _forwardersBlock = new DnsServerInheritanceSourcesForwardersBlockOutputReference(this, "forwarders_block");
  public get forwardersBlock() {
    return this._forwardersBlock;
  }
  public putForwardersBlock(value: DnsServerInheritanceSourcesForwardersBlock) {
    this._forwardersBlock.internalValue = value;
  }
  public resetForwardersBlock() {
    this._forwardersBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersBlockInput() {
    return this._forwardersBlock.internalValue;
  }

  // gss_tsig_enabled - computed: true, optional: true, required: false
  private _gssTsigEnabled = new DnsServerInheritanceSourcesGssTsigEnabledOutputReference(this, "gss_tsig_enabled");
  public get gssTsigEnabled() {
    return this._gssTsigEnabled;
  }
  public putGssTsigEnabled(value: DnsServerInheritanceSourcesGssTsigEnabled) {
    this._gssTsigEnabled.internalValue = value;
  }
  public resetGssTsigEnabled() {
    this._gssTsigEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigEnabledInput() {
    return this._gssTsigEnabled.internalValue;
  }

  // kerberos_keys - computed: true, optional: true, required: false
  private _kerberosKeys = new DnsServerInheritanceSourcesKerberosKeysOutputReference(this, "kerberos_keys");
  public get kerberosKeys() {
    return this._kerberosKeys;
  }
  public putKerberosKeys(value: DnsServerInheritanceSourcesKerberosKeys) {
    this._kerberosKeys.internalValue = value;
  }
  public resetKerberosKeys() {
    this._kerberosKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeysInput() {
    return this._kerberosKeys.internalValue;
  }

  // lame_ttl - computed: true, optional: true, required: false
  private _lameTtl = new DnsServerInheritanceSourcesLameTtlOutputReference(this, "lame_ttl");
  public get lameTtl() {
    return this._lameTtl;
  }
  public putLameTtl(value: DnsServerInheritanceSourcesLameTtl) {
    this._lameTtl.internalValue = value;
  }
  public resetLameTtl() {
    this._lameTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lameTtlInput() {
    return this._lameTtl.internalValue;
  }

  // log_query_response - computed: true, optional: true, required: false
  private _logQueryResponse = new DnsServerInheritanceSourcesLogQueryResponseOutputReference(this, "log_query_response");
  public get logQueryResponse() {
    return this._logQueryResponse;
  }
  public putLogQueryResponse(value: DnsServerInheritanceSourcesLogQueryResponse) {
    this._logQueryResponse.internalValue = value;
  }
  public resetLogQueryResponse() {
    this._logQueryResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueryResponseInput() {
    return this._logQueryResponse.internalValue;
  }

  // match_recursive_only - computed: true, optional: true, required: false
  private _matchRecursiveOnly = new DnsServerInheritanceSourcesMatchRecursiveOnlyOutputReference(this, "match_recursive_only");
  public get matchRecursiveOnly() {
    return this._matchRecursiveOnly;
  }
  public putMatchRecursiveOnly(value: DnsServerInheritanceSourcesMatchRecursiveOnly) {
    this._matchRecursiveOnly.internalValue = value;
  }
  public resetMatchRecursiveOnly() {
    this._matchRecursiveOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRecursiveOnlyInput() {
    return this._matchRecursiveOnly.internalValue;
  }

  // max_cache_ttl - computed: true, optional: true, required: false
  private _maxCacheTtl = new DnsServerInheritanceSourcesMaxCacheTtlOutputReference(this, "max_cache_ttl");
  public get maxCacheTtl() {
    return this._maxCacheTtl;
  }
  public putMaxCacheTtl(value: DnsServerInheritanceSourcesMaxCacheTtl) {
    this._maxCacheTtl.internalValue = value;
  }
  public resetMaxCacheTtl() {
    this._maxCacheTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheTtlInput() {
    return this._maxCacheTtl.internalValue;
  }

  // max_negative_ttl - computed: true, optional: true, required: false
  private _maxNegativeTtl = new DnsServerInheritanceSourcesMaxNegativeTtlOutputReference(this, "max_negative_ttl");
  public get maxNegativeTtl() {
    return this._maxNegativeTtl;
  }
  public putMaxNegativeTtl(value: DnsServerInheritanceSourcesMaxNegativeTtl) {
    this._maxNegativeTtl.internalValue = value;
  }
  public resetMaxNegativeTtl() {
    this._maxNegativeTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNegativeTtlInput() {
    return this._maxNegativeTtl.internalValue;
  }

  // minimal_responses - computed: true, optional: true, required: false
  private _minimalResponses = new DnsServerInheritanceSourcesMinimalResponsesOutputReference(this, "minimal_responses");
  public get minimalResponses() {
    return this._minimalResponses;
  }
  public putMinimalResponses(value: DnsServerInheritanceSourcesMinimalResponses) {
    this._minimalResponses.internalValue = value;
  }
  public resetMinimalResponses() {
    this._minimalResponses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalResponsesInput() {
    return this._minimalResponses.internalValue;
  }

  // notify - computed: true, optional: true, required: false
  private _notify = new DnsServerInheritanceSourcesNotifyOutputReference(this, "notify");
  public get notify() {
    return this._notify;
  }
  public putNotify(value: DnsServerInheritanceSourcesNotify) {
    this._notify.internalValue = value;
  }
  public resetNotify() {
    this._notify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify.internalValue;
  }

  // query_acl - computed: true, optional: true, required: false
  private _queryAcl = new DnsServerInheritanceSourcesQueryAclOutputReference(this, "query_acl");
  public get queryAcl() {
    return this._queryAcl;
  }
  public putQueryAcl(value: DnsServerInheritanceSourcesQueryAcl) {
    this._queryAcl.internalValue = value;
  }
  public resetQueryAcl() {
    this._queryAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAclInput() {
    return this._queryAcl.internalValue;
  }

  // query_port - computed: true, optional: true, required: false
  private _queryPort = new DnsServerInheritanceSourcesQueryPortOutputReference(this, "query_port");
  public get queryPort() {
    return this._queryPort;
  }
  public putQueryPort(value: DnsServerInheritanceSourcesQueryPort) {
    this._queryPort.internalValue = value;
  }
  public resetQueryPort() {
    this._queryPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPortInput() {
    return this._queryPort.internalValue;
  }

  // recursion_acl - computed: true, optional: true, required: false
  private _recursionAcl = new DnsServerInheritanceSourcesRecursionAclOutputReference(this, "recursion_acl");
  public get recursionAcl() {
    return this._recursionAcl;
  }
  public putRecursionAcl(value: DnsServerInheritanceSourcesRecursionAcl) {
    this._recursionAcl.internalValue = value;
  }
  public resetRecursionAcl() {
    this._recursionAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionAclInput() {
    return this._recursionAcl.internalValue;
  }

  // recursion_enabled - computed: true, optional: true, required: false
  private _recursionEnabled = new DnsServerInheritanceSourcesRecursionEnabledOutputReference(this, "recursion_enabled");
  public get recursionEnabled() {
    return this._recursionEnabled;
  }
  public putRecursionEnabled(value: DnsServerInheritanceSourcesRecursionEnabled) {
    this._recursionEnabled.internalValue = value;
  }
  public resetRecursionEnabled() {
    this._recursionEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionEnabledInput() {
    return this._recursionEnabled.internalValue;
  }

  // recursive_clients - computed: true, optional: true, required: false
  private _recursiveClients = new DnsServerInheritanceSourcesRecursiveClientsOutputReference(this, "recursive_clients");
  public get recursiveClients() {
    return this._recursiveClients;
  }
  public putRecursiveClients(value: DnsServerInheritanceSourcesRecursiveClients) {
    this._recursiveClients.internalValue = value;
  }
  public resetRecursiveClients() {
    this._recursiveClients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveClientsInput() {
    return this._recursiveClients.internalValue;
  }

  // resolver_query_timeout - computed: true, optional: true, required: false
  private _resolverQueryTimeout = new DnsServerInheritanceSourcesResolverQueryTimeoutOutputReference(this, "resolver_query_timeout");
  public get resolverQueryTimeout() {
    return this._resolverQueryTimeout;
  }
  public putResolverQueryTimeout(value: DnsServerInheritanceSourcesResolverQueryTimeout) {
    this._resolverQueryTimeout.internalValue = value;
  }
  public resetResolverQueryTimeout() {
    this._resolverQueryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverQueryTimeoutInput() {
    return this._resolverQueryTimeout.internalValue;
  }

  // secondary_axfr_query_limit - computed: true, optional: true, required: false
  private _secondaryAxfrQueryLimit = new DnsServerInheritanceSourcesSecondaryAxfrQueryLimitOutputReference(this, "secondary_axfr_query_limit");
  public get secondaryAxfrQueryLimit() {
    return this._secondaryAxfrQueryLimit;
  }
  public putSecondaryAxfrQueryLimit(value: DnsServerInheritanceSourcesSecondaryAxfrQueryLimit) {
    this._secondaryAxfrQueryLimit.internalValue = value;
  }
  public resetSecondaryAxfrQueryLimit() {
    this._secondaryAxfrQueryLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAxfrQueryLimitInput() {
    return this._secondaryAxfrQueryLimit.internalValue;
  }

  // secondary_soa_query_limit - computed: true, optional: true, required: false
  private _secondarySoaQueryLimit = new DnsServerInheritanceSourcesSecondarySoaQueryLimitOutputReference(this, "secondary_soa_query_limit");
  public get secondarySoaQueryLimit() {
    return this._secondarySoaQueryLimit;
  }
  public putSecondarySoaQueryLimit(value: DnsServerInheritanceSourcesSecondarySoaQueryLimit) {
    this._secondarySoaQueryLimit.internalValue = value;
  }
  public resetSecondarySoaQueryLimit() {
    this._secondarySoaQueryLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySoaQueryLimitInput() {
    return this._secondarySoaQueryLimit.internalValue;
  }

  // sort_list - computed: true, optional: true, required: false
  private _sortList = new DnsServerInheritanceSourcesSortListStructOutputReference(this, "sort_list");
  public get sortList() {
    return this._sortList;
  }
  public putSortList(value: DnsServerInheritanceSourcesSortListStruct) {
    this._sortList.internalValue = value;
  }
  public resetSortList() {
    this._sortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortListInput() {
    return this._sortList.internalValue;
  }

  // synthesize_address_records_from_https - computed: true, optional: true, required: false
  private _synthesizeAddressRecordsFromHttps = new DnsServerInheritanceSourcesSynthesizeAddressRecordsFromHttpsOutputReference(this, "synthesize_address_records_from_https");
  public get synthesizeAddressRecordsFromHttps() {
    return this._synthesizeAddressRecordsFromHttps;
  }
  public putSynthesizeAddressRecordsFromHttps(value: DnsServerInheritanceSourcesSynthesizeAddressRecordsFromHttps) {
    this._synthesizeAddressRecordsFromHttps.internalValue = value;
  }
  public resetSynthesizeAddressRecordsFromHttps() {
    this._synthesizeAddressRecordsFromHttps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synthesizeAddressRecordsFromHttpsInput() {
    return this._synthesizeAddressRecordsFromHttps.internalValue;
  }

  // transfer_acl - computed: true, optional: true, required: false
  private _transferAcl = new DnsServerInheritanceSourcesTransferAclOutputReference(this, "transfer_acl");
  public get transferAcl() {
    return this._transferAcl;
  }
  public putTransferAcl(value: DnsServerInheritanceSourcesTransferAcl) {
    this._transferAcl.internalValue = value;
  }
  public resetTransferAcl() {
    this._transferAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferAclInput() {
    return this._transferAcl.internalValue;
  }

  // update_acl - computed: true, optional: true, required: false
  private _updateAcl = new DnsServerInheritanceSourcesUpdateAclOutputReference(this, "update_acl");
  public get updateAcl() {
    return this._updateAcl;
  }
  public putUpdateAcl(value: DnsServerInheritanceSourcesUpdateAcl) {
    this._updateAcl.internalValue = value;
  }
  public resetUpdateAcl() {
    this._updateAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAclInput() {
    return this._updateAcl.internalValue;
  }

  // use_forwarders_for_subzones - computed: true, optional: true, required: false
  private _useForwardersForSubzones = new DnsServerInheritanceSourcesUseForwardersForSubzonesOutputReference(this, "use_forwarders_for_subzones");
  public get useForwardersForSubzones() {
    return this._useForwardersForSubzones;
  }
  public putUseForwardersForSubzones(value: DnsServerInheritanceSourcesUseForwardersForSubzones) {
    this._useForwardersForSubzones.internalValue = value;
  }
  public resetUseForwardersForSubzones() {
    this._useForwardersForSubzones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useForwardersForSubzonesInput() {
    return this._useForwardersForSubzones.internalValue;
  }
}
export interface DnsServerKerberosKeys {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#key DnsServer#key}
  */
  readonly key: string;
}

export function dnsServerKerberosKeysToTerraform(struct?: DnsServerKerberosKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dnsServerKerberosKeysToHclTerraform(struct?: DnsServerKerberosKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsServerKerberosKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerKerberosKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerKerberosKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
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

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }

  // uploaded_at - computed: true, optional: false, required: false
  public get uploadedAt() {
    return this.getStringAttribute('uploaded_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DnsServerKerberosKeysList extends cdktf.ComplexList {
  public internalValue? : DnsServerKerberosKeys[] | cdktf.IResolvable

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
  public get(index: number): DnsServerKerberosKeysOutputReference {
    return new DnsServerKerberosKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerQueryAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#key DnsServer#key}
  */
  readonly key?: string;
}

export function dnsServerQueryAclTsigKeyToTerraform(struct?: DnsServerQueryAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dnsServerQueryAclTsigKeyToHclTerraform(struct?: DnsServerQueryAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsServerQueryAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerQueryAclTsigKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerQueryAclTsigKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DnsServerQueryAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#access DnsServer#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#acl DnsServer#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#address DnsServer#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  *   Allowed values:
  *   * _any_
  *   * _ip_
  *   * _acl_
  *   * _tsig_key_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#element DnsServer#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#tsig_key DnsServer#tsig_key}
  */
  readonly tsigKey?: DnsServerQueryAclTsigKey;
}

export function dnsServerQueryAclToTerraform(struct?: DnsServerQueryAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dnsServerQueryAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsServerQueryAclToHclTerraform(struct?: DnsServerQueryAcl | cdktf.IResolvable): any {
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
      value: dnsServerQueryAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerQueryAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsServerQueryAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerQueryAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerQueryAcl | cdktf.IResolvable | undefined) {
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

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
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

  // element - computed: true, optional: true, required: false
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  public resetElement() {
    this._element = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsServerQueryAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsServerQueryAclTsigKey) {
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

export class DnsServerQueryAclList extends cdktf.ComplexList {
  public internalValue? : DnsServerQueryAcl[] | cdktf.IResolvable

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
  public get(index: number): DnsServerQueryAclOutputReference {
    return new DnsServerQueryAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerRecursionAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#key DnsServer#key}
  */
  readonly key?: string;
}

export function dnsServerRecursionAclTsigKeyToTerraform(struct?: DnsServerRecursionAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dnsServerRecursionAclTsigKeyToHclTerraform(struct?: DnsServerRecursionAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsServerRecursionAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerRecursionAclTsigKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerRecursionAclTsigKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DnsServerRecursionAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#access DnsServer#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#acl DnsServer#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#address DnsServer#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  *   Allowed values:
  *   * _any_
  *   * _ip_
  *   * _acl_
  *   * _tsig_key_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#element DnsServer#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#tsig_key DnsServer#tsig_key}
  */
  readonly tsigKey?: DnsServerRecursionAclTsigKey;
}

export function dnsServerRecursionAclToTerraform(struct?: DnsServerRecursionAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dnsServerRecursionAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsServerRecursionAclToHclTerraform(struct?: DnsServerRecursionAcl | cdktf.IResolvable): any {
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
      value: dnsServerRecursionAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerRecursionAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsServerRecursionAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerRecursionAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerRecursionAcl | cdktf.IResolvable | undefined) {
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

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
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

  // element - computed: true, optional: true, required: false
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  public resetElement() {
    this._element = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsServerRecursionAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsServerRecursionAclTsigKey) {
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

export class DnsServerRecursionAclList extends cdktf.ComplexList {
  public internalValue? : DnsServerRecursionAcl[] | cdktf.IResolvable

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
  public get(index: number): DnsServerRecursionAclOutputReference {
    return new DnsServerRecursionAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerSortListStruct {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#acl DnsServer#acl}
  */
  readonly acl?: string;
  /**
  * Type of element.
  * 
  *   Allowed values:
  *   * _any_
  *   * _ip_
  *   * _acl_
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#element DnsServer#element}
  */
  readonly element: string;
  /**
  * Optional. The prioritized networks. If empty, the value of _source_ or networks from _acl_ is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#prioritized_networks DnsServer#prioritized_networks}
  */
  readonly prioritizedNetworks?: string[];
  /**
  * Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#source DnsServer#source}
  */
  readonly source?: string;
}

export function dnsServerSortListStructToTerraform(struct?: DnsServerSortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.stringToTerraform(struct!.acl),
    element: cdktf.stringToTerraform(struct!.element),
    prioritized_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prioritizedNetworks),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsServerSortListStructToHclTerraform(struct?: DnsServerSortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
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
    prioritized_networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prioritizedNetworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DnsServerSortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerSortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._element !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element;
    }
    if (this._prioritizedNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.prioritizedNetworks = this._prioritizedNetworks;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerSortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._element = undefined;
      this._prioritizedNetworks = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._element = value.element;
      this._prioritizedNetworks = value.prioritizedNetworks;
      this._source = value.source;
    }
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

  // prioritized_networks - computed: false, optional: true, required: false
  private _prioritizedNetworks?: string[]; 
  public get prioritizedNetworks() {
    return this.getListAttribute('prioritized_networks');
  }
  public set prioritizedNetworks(value: string[]) {
    this._prioritizedNetworks = value;
  }
  public resetPrioritizedNetworks() {
    this._prioritizedNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritizedNetworksInput() {
    return this._prioritizedNetworks;
  }

  // source - computed: true, optional: true, required: false
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
}

export class DnsServerSortListStructList extends cdktf.ComplexList {
  public internalValue? : DnsServerSortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DnsServerSortListStructOutputReference {
    return new DnsServerSortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerTransferAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#key DnsServer#key}
  */
  readonly key?: string;
}

export function dnsServerTransferAclTsigKeyToTerraform(struct?: DnsServerTransferAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dnsServerTransferAclTsigKeyToHclTerraform(struct?: DnsServerTransferAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsServerTransferAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerTransferAclTsigKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerTransferAclTsigKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DnsServerTransferAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#access DnsServer#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#acl DnsServer#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#address DnsServer#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  *   Allowed values:
  *   * _any_
  *   * _ip_
  *   * _acl_
  *   * _tsig_key_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#element DnsServer#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#tsig_key DnsServer#tsig_key}
  */
  readonly tsigKey?: DnsServerTransferAclTsigKey;
}

export function dnsServerTransferAclToTerraform(struct?: DnsServerTransferAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dnsServerTransferAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsServerTransferAclToHclTerraform(struct?: DnsServerTransferAcl | cdktf.IResolvable): any {
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
      value: dnsServerTransferAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerTransferAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsServerTransferAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerTransferAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerTransferAcl | cdktf.IResolvable | undefined) {
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

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
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

  // element - computed: true, optional: true, required: false
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  public resetElement() {
    this._element = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsServerTransferAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsServerTransferAclTsigKey) {
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

export class DnsServerTransferAclList extends cdktf.ComplexList {
  public internalValue? : DnsServerTransferAcl[] | cdktf.IResolvable

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
  public get(index: number): DnsServerTransferAclOutputReference {
    return new DnsServerTransferAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerUpdateAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#key DnsServer#key}
  */
  readonly key?: string;
}

export function dnsServerUpdateAclTsigKeyToTerraform(struct?: DnsServerUpdateAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dnsServerUpdateAclTsigKeyToHclTerraform(struct?: DnsServerUpdateAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsServerUpdateAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsServerUpdateAclTsigKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerUpdateAclTsigKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DnsServerUpdateAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#access DnsServer#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#acl DnsServer#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#address DnsServer#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  *   Allowed values:
  *   * _any_
  *   * _ip_
  *   * _acl_
  *   * _tsig_key_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#element DnsServer#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#tsig_key DnsServer#tsig_key}
  */
  readonly tsigKey?: DnsServerUpdateAclTsigKey;
}

export function dnsServerUpdateAclToTerraform(struct?: DnsServerUpdateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dnsServerUpdateAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsServerUpdateAclToHclTerraform(struct?: DnsServerUpdateAcl | cdktf.IResolvable): any {
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
      value: dnsServerUpdateAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsServerUpdateAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsServerUpdateAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerUpdateAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsServerUpdateAcl | cdktf.IResolvable | undefined) {
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

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
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

  // element - computed: true, optional: true, required: false
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  public resetElement() {
    this._element = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsServerUpdateAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsServerUpdateAclTsigKey) {
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

export class DnsServerUpdateAclList extends cdktf.ComplexList {
  public internalValue? : DnsServerUpdateAcl[] | cdktf.IResolvable

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
  public get(index: number): DnsServerUpdateAclOutputReference {
    return new DnsServerUpdateAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsServerViews {
}

export function dnsServerViewsToTerraform(struct?: DnsServerViews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsServerViewsToHclTerraform(struct?: DnsServerViews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsServerViewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerViews | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerViews | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }
}

export class DnsServerViewsList extends cdktf.ComplexList {

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
  public get(index: number): DnsServerViewsOutputReference {
    return new DnsServerViewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server bloxone_dns_server}
*/
export class DnsServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dns_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsServer to import
  * @param importFromId The id of the existing DnsServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dns_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_server bloxone_dns_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsServerConfig
  */
  public constructor(scope: Construct, id: string, config: DnsServerConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dns_server',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addEdnsOptionInOutgoingQuery = config.addEdnsOptionInOutgoingQuery;
    this._autoSortViews = config.autoSortViews;
    this._comment = config.comment;
    this._customRootNs.internalValue = config.customRootNs;
    this._customRootNsEnabled = config.customRootNsEnabled;
    this._dnssecEnableValidation = config.dnssecEnableValidation;
    this._dnssecEnabled = config.dnssecEnabled;
    this._dnssecTrustAnchors.internalValue = config.dnssecTrustAnchors;
    this._dnssecValidateExpiry = config.dnssecValidateExpiry;
    this._ecsEnabled = config.ecsEnabled;
    this._ecsForwarding = config.ecsForwarding;
    this._ecsPrefixV4 = config.ecsPrefixV4;
    this._ecsPrefixV6 = config.ecsPrefixV6;
    this._ecsZones.internalValue = config.ecsZones;
    this._filterAaaaAcl.internalValue = config.filterAaaaAcl;
    this._filterAaaaOnV4 = config.filterAaaaOnV4;
    this._forwarders.internalValue = config.forwarders;
    this._forwardersOnly = config.forwardersOnly;
    this._gssTsigEnabled = config.gssTsigEnabled;
    this._inheritanceSources.internalValue = config.inheritanceSources;
    this._kerberosKeys.internalValue = config.kerberosKeys;
    this._lameTtl = config.lameTtl;
    this._logQueryResponse = config.logQueryResponse;
    this._matchRecursiveOnly = config.matchRecursiveOnly;
    this._maxCacheTtl = config.maxCacheTtl;
    this._maxNegativeTtl = config.maxNegativeTtl;
    this._minimalResponses = config.minimalResponses;
    this._name = config.name;
    this._notify = config.notify;
    this._queryAcl.internalValue = config.queryAcl;
    this._queryPort = config.queryPort;
    this._recursionAcl.internalValue = config.recursionAcl;
    this._recursionEnabled = config.recursionEnabled;
    this._recursiveClients = config.recursiveClients;
    this._resolverQueryTimeout = config.resolverQueryTimeout;
    this._secondaryAxfrQueryLimit = config.secondaryAxfrQueryLimit;
    this._secondarySoaQueryLimit = config.secondarySoaQueryLimit;
    this._sortList.internalValue = config.sortList;
    this._synthesizeAddressRecordsFromHttps = config.synthesizeAddressRecordsFromHttps;
    this._tags = config.tags;
    this._transferAcl.internalValue = config.transferAcl;
    this._updateAcl.internalValue = config.updateAcl;
    this._useForwardersForSubzones = config.useForwardersForSubzones;
    this._useRootForwardersForLocalResolutionWithB1Td = config.useRootForwardersForLocalResolutionWithB1Td;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_edns_option_in_outgoing_query - computed: true, optional: true, required: false
  private _addEdnsOptionInOutgoingQuery?: boolean | cdktf.IResolvable; 
  public get addEdnsOptionInOutgoingQuery() {
    return this.getBooleanAttribute('add_edns_option_in_outgoing_query');
  }
  public set addEdnsOptionInOutgoingQuery(value: boolean | cdktf.IResolvable) {
    this._addEdnsOptionInOutgoingQuery = value;
  }
  public resetAddEdnsOptionInOutgoingQuery() {
    this._addEdnsOptionInOutgoingQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addEdnsOptionInOutgoingQueryInput() {
    return this._addEdnsOptionInOutgoingQuery;
  }

  // auto_sort_views - computed: true, optional: true, required: false
  private _autoSortViews?: boolean | cdktf.IResolvable; 
  public get autoSortViews() {
    return this.getBooleanAttribute('auto_sort_views');
  }
  public set autoSortViews(value: boolean | cdktf.IResolvable) {
    this._autoSortViews = value;
  }
  public resetAutoSortViews() {
    this._autoSortViews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSortViewsInput() {
    return this._autoSortViews;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_root_ns - computed: false, optional: true, required: false
  private _customRootNs = new DnsServerCustomRootNsList(this, "custom_root_ns", false);
  public get customRootNs() {
    return this._customRootNs;
  }
  public putCustomRootNs(value: DnsServerCustomRootNs[] | cdktf.IResolvable) {
    this._customRootNs.internalValue = value;
  }
  public resetCustomRootNs() {
    this._customRootNs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRootNsInput() {
    return this._customRootNs.internalValue;
  }

  // custom_root_ns_enabled - computed: true, optional: true, required: false
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

  // dnssec_enable_validation - computed: true, optional: true, required: false
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

  // dnssec_enabled - computed: true, optional: true, required: false
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
  private _dnssecRootKeys = new DnsServerDnssecRootKeysList(this, "dnssec_root_keys", false);
  public get dnssecRootKeys() {
    return this._dnssecRootKeys;
  }

  // dnssec_trust_anchors - computed: false, optional: true, required: false
  private _dnssecTrustAnchors = new DnsServerDnssecTrustAnchorsList(this, "dnssec_trust_anchors", false);
  public get dnssecTrustAnchors() {
    return this._dnssecTrustAnchors;
  }
  public putDnssecTrustAnchors(value: DnsServerDnssecTrustAnchors[] | cdktf.IResolvable) {
    this._dnssecTrustAnchors.internalValue = value;
  }
  public resetDnssecTrustAnchors() {
    this._dnssecTrustAnchors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecTrustAnchorsInput() {
    return this._dnssecTrustAnchors.internalValue;
  }

  // dnssec_validate_expiry - computed: true, optional: true, required: false
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

  // ecs_zones - computed: false, optional: true, required: false
  private _ecsZones = new DnsServerEcsZonesList(this, "ecs_zones", false);
  public get ecsZones() {
    return this._ecsZones;
  }
  public putEcsZones(value: DnsServerEcsZones[] | cdktf.IResolvable) {
    this._ecsZones.internalValue = value;
  }
  public resetEcsZones() {
    this._ecsZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsZonesInput() {
    return this._ecsZones.internalValue;
  }

  // filter_aaaa_acl - computed: false, optional: true, required: false
  private _filterAaaaAcl = new DnsServerFilterAaaaAclList(this, "filter_aaaa_acl", false);
  public get filterAaaaAcl() {
    return this._filterAaaaAcl;
  }
  public putFilterAaaaAcl(value: DnsServerFilterAaaaAcl[] | cdktf.IResolvable) {
    this._filterAaaaAcl.internalValue = value;
  }
  public resetFilterAaaaAcl() {
    this._filterAaaaAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAaaaAclInput() {
    return this._filterAaaaAcl.internalValue;
  }

  // filter_aaaa_on_v4 - computed: true, optional: true, required: false
  private _filterAaaaOnV4?: string; 
  public get filterAaaaOnV4() {
    return this.getStringAttribute('filter_aaaa_on_v4');
  }
  public set filterAaaaOnV4(value: string) {
    this._filterAaaaOnV4 = value;
  }
  public resetFilterAaaaOnV4() {
    this._filterAaaaOnV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAaaaOnV4Input() {
    return this._filterAaaaOnV4;
  }

  // forwarders - computed: true, optional: true, required: false
  private _forwarders = new DnsServerForwardersList(this, "forwarders", false);
  public get forwarders() {
    return this._forwarders;
  }
  public putForwarders(value: DnsServerForwarders[] | cdktf.IResolvable) {
    this._forwarders.internalValue = value;
  }
  public resetForwarders() {
    this._forwarders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersInput() {
    return this._forwarders.internalValue;
  }

  // forwarders_only - computed: true, optional: true, required: false
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

  // gss_tsig_enabled - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inheritance_sources - computed: true, optional: true, required: false
  private _inheritanceSources = new DnsServerInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: DnsServerInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
  }

  // kerberos_keys - computed: false, optional: true, required: false
  private _kerberosKeys = new DnsServerKerberosKeysList(this, "kerberos_keys", false);
  public get kerberosKeys() {
    return this._kerberosKeys;
  }
  public putKerberosKeys(value: DnsServerKerberosKeys[] | cdktf.IResolvable) {
    this._kerberosKeys.internalValue = value;
  }
  public resetKerberosKeys() {
    this._kerberosKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeysInput() {
    return this._kerberosKeys.internalValue;
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

  // log_query_response - computed: true, optional: true, required: false
  private _logQueryResponse?: boolean | cdktf.IResolvable; 
  public get logQueryResponse() {
    return this.getBooleanAttribute('log_query_response');
  }
  public set logQueryResponse(value: boolean | cdktf.IResolvable) {
    this._logQueryResponse = value;
  }
  public resetLogQueryResponse() {
    this._logQueryResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueryResponseInput() {
    return this._logQueryResponse;
  }

  // match_recursive_only - computed: true, optional: true, required: false
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

  // max_cache_ttl - computed: true, optional: true, required: false
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

  // max_negative_ttl - computed: true, optional: true, required: false
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

  // minimal_responses - computed: true, optional: true, required: false
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

  // notify - computed: true, optional: true, required: false
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

  // query_acl - computed: false, optional: true, required: false
  private _queryAcl = new DnsServerQueryAclList(this, "query_acl", false);
  public get queryAcl() {
    return this._queryAcl;
  }
  public putQueryAcl(value: DnsServerQueryAcl[] | cdktf.IResolvable) {
    this._queryAcl.internalValue = value;
  }
  public resetQueryAcl() {
    this._queryAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAclInput() {
    return this._queryAcl.internalValue;
  }

  // query_port - computed: false, optional: true, required: false
  private _queryPort?: number; 
  public get queryPort() {
    return this.getNumberAttribute('query_port');
  }
  public set queryPort(value: number) {
    this._queryPort = value;
  }
  public resetQueryPort() {
    this._queryPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPortInput() {
    return this._queryPort;
  }

  // recursion_acl - computed: false, optional: true, required: false
  private _recursionAcl = new DnsServerRecursionAclList(this, "recursion_acl", false);
  public get recursionAcl() {
    return this._recursionAcl;
  }
  public putRecursionAcl(value: DnsServerRecursionAcl[] | cdktf.IResolvable) {
    this._recursionAcl.internalValue = value;
  }
  public resetRecursionAcl() {
    this._recursionAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionAclInput() {
    return this._recursionAcl.internalValue;
  }

  // recursion_enabled - computed: true, optional: true, required: false
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

  // recursive_clients - computed: true, optional: true, required: false
  private _recursiveClients?: number; 
  public get recursiveClients() {
    return this.getNumberAttribute('recursive_clients');
  }
  public set recursiveClients(value: number) {
    this._recursiveClients = value;
  }
  public resetRecursiveClients() {
    this._recursiveClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveClientsInput() {
    return this._recursiveClients;
  }

  // resolver_query_timeout - computed: true, optional: true, required: false
  private _resolverQueryTimeout?: number; 
  public get resolverQueryTimeout() {
    return this.getNumberAttribute('resolver_query_timeout');
  }
  public set resolverQueryTimeout(value: number) {
    this._resolverQueryTimeout = value;
  }
  public resetResolverQueryTimeout() {
    this._resolverQueryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverQueryTimeoutInput() {
    return this._resolverQueryTimeout;
  }

  // secondary_axfr_query_limit - computed: false, optional: true, required: false
  private _secondaryAxfrQueryLimit?: number; 
  public get secondaryAxfrQueryLimit() {
    return this.getNumberAttribute('secondary_axfr_query_limit');
  }
  public set secondaryAxfrQueryLimit(value: number) {
    this._secondaryAxfrQueryLimit = value;
  }
  public resetSecondaryAxfrQueryLimit() {
    this._secondaryAxfrQueryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAxfrQueryLimitInput() {
    return this._secondaryAxfrQueryLimit;
  }

  // secondary_soa_query_limit - computed: false, optional: true, required: false
  private _secondarySoaQueryLimit?: number; 
  public get secondarySoaQueryLimit() {
    return this.getNumberAttribute('secondary_soa_query_limit');
  }
  public set secondarySoaQueryLimit(value: number) {
    this._secondarySoaQueryLimit = value;
  }
  public resetSecondarySoaQueryLimit() {
    this._secondarySoaQueryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySoaQueryLimitInput() {
    return this._secondarySoaQueryLimit;
  }

  // sort_list - computed: false, optional: true, required: false
  private _sortList = new DnsServerSortListStructList(this, "sort_list", false);
  public get sortList() {
    return this._sortList;
  }
  public putSortList(value: DnsServerSortListStruct[] | cdktf.IResolvable) {
    this._sortList.internalValue = value;
  }
  public resetSortList() {
    this._sortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortListInput() {
    return this._sortList.internalValue;
  }

  // synthesize_address_records_from_https - computed: true, optional: true, required: false
  private _synthesizeAddressRecordsFromHttps?: boolean | cdktf.IResolvable; 
  public get synthesizeAddressRecordsFromHttps() {
    return this.getBooleanAttribute('synthesize_address_records_from_https');
  }
  public set synthesizeAddressRecordsFromHttps(value: boolean | cdktf.IResolvable) {
    this._synthesizeAddressRecordsFromHttps = value;
  }
  public resetSynthesizeAddressRecordsFromHttps() {
    this._synthesizeAddressRecordsFromHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synthesizeAddressRecordsFromHttpsInput() {
    return this._synthesizeAddressRecordsFromHttps;
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

  // transfer_acl - computed: false, optional: true, required: false
  private _transferAcl = new DnsServerTransferAclList(this, "transfer_acl", false);
  public get transferAcl() {
    return this._transferAcl;
  }
  public putTransferAcl(value: DnsServerTransferAcl[] | cdktf.IResolvable) {
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
  private _updateAcl = new DnsServerUpdateAclList(this, "update_acl", false);
  public get updateAcl() {
    return this._updateAcl;
  }
  public putUpdateAcl(value: DnsServerUpdateAcl[] | cdktf.IResolvable) {
    this._updateAcl.internalValue = value;
  }
  public resetUpdateAcl() {
    this._updateAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAclInput() {
    return this._updateAcl.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // use_forwarders_for_subzones - computed: true, optional: true, required: false
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

  // use_root_forwarders_for_local_resolution_with_b1td - computed: true, optional: true, required: false
  private _useRootForwardersForLocalResolutionWithB1Td?: boolean | cdktf.IResolvable; 
  public get useRootForwardersForLocalResolutionWithB1Td() {
    return this.getBooleanAttribute('use_root_forwarders_for_local_resolution_with_b1td');
  }
  public set useRootForwardersForLocalResolutionWithB1Td(value: boolean | cdktf.IResolvable) {
    this._useRootForwardersForLocalResolutionWithB1Td = value;
  }
  public resetUseRootForwardersForLocalResolutionWithB1Td() {
    this._useRootForwardersForLocalResolutionWithB1Td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRootForwardersForLocalResolutionWithB1TdInput() {
    return this._useRootForwardersForLocalResolutionWithB1Td;
  }

  // views - computed: true, optional: false, required: false
  private _views = new DnsServerViewsList(this, "views", false);
  public get views() {
    return this._views;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_edns_option_in_outgoing_query: cdktf.booleanToTerraform(this._addEdnsOptionInOutgoingQuery),
      auto_sort_views: cdktf.booleanToTerraform(this._autoSortViews),
      comment: cdktf.stringToTerraform(this._comment),
      custom_root_ns: cdktf.listMapper(dnsServerCustomRootNsToTerraform, false)(this._customRootNs.internalValue),
      custom_root_ns_enabled: cdktf.booleanToTerraform(this._customRootNsEnabled),
      dnssec_enable_validation: cdktf.booleanToTerraform(this._dnssecEnableValidation),
      dnssec_enabled: cdktf.booleanToTerraform(this._dnssecEnabled),
      dnssec_trust_anchors: cdktf.listMapper(dnsServerDnssecTrustAnchorsToTerraform, false)(this._dnssecTrustAnchors.internalValue),
      dnssec_validate_expiry: cdktf.booleanToTerraform(this._dnssecValidateExpiry),
      ecs_enabled: cdktf.booleanToTerraform(this._ecsEnabled),
      ecs_forwarding: cdktf.booleanToTerraform(this._ecsForwarding),
      ecs_prefix_v4: cdktf.numberToTerraform(this._ecsPrefixV4),
      ecs_prefix_v6: cdktf.numberToTerraform(this._ecsPrefixV6),
      ecs_zones: cdktf.listMapper(dnsServerEcsZonesToTerraform, false)(this._ecsZones.internalValue),
      filter_aaaa_acl: cdktf.listMapper(dnsServerFilterAaaaAclToTerraform, false)(this._filterAaaaAcl.internalValue),
      filter_aaaa_on_v4: cdktf.stringToTerraform(this._filterAaaaOnV4),
      forwarders: cdktf.listMapper(dnsServerForwardersToTerraform, false)(this._forwarders.internalValue),
      forwarders_only: cdktf.booleanToTerraform(this._forwardersOnly),
      gss_tsig_enabled: cdktf.booleanToTerraform(this._gssTsigEnabled),
      inheritance_sources: dnsServerInheritanceSourcesToTerraform(this._inheritanceSources.internalValue),
      kerberos_keys: cdktf.listMapper(dnsServerKerberosKeysToTerraform, false)(this._kerberosKeys.internalValue),
      lame_ttl: cdktf.numberToTerraform(this._lameTtl),
      log_query_response: cdktf.booleanToTerraform(this._logQueryResponse),
      match_recursive_only: cdktf.booleanToTerraform(this._matchRecursiveOnly),
      max_cache_ttl: cdktf.numberToTerraform(this._maxCacheTtl),
      max_negative_ttl: cdktf.numberToTerraform(this._maxNegativeTtl),
      minimal_responses: cdktf.booleanToTerraform(this._minimalResponses),
      name: cdktf.stringToTerraform(this._name),
      notify: cdktf.booleanToTerraform(this._notify),
      query_acl: cdktf.listMapper(dnsServerQueryAclToTerraform, false)(this._queryAcl.internalValue),
      query_port: cdktf.numberToTerraform(this._queryPort),
      recursion_acl: cdktf.listMapper(dnsServerRecursionAclToTerraform, false)(this._recursionAcl.internalValue),
      recursion_enabled: cdktf.booleanToTerraform(this._recursionEnabled),
      recursive_clients: cdktf.numberToTerraform(this._recursiveClients),
      resolver_query_timeout: cdktf.numberToTerraform(this._resolverQueryTimeout),
      secondary_axfr_query_limit: cdktf.numberToTerraform(this._secondaryAxfrQueryLimit),
      secondary_soa_query_limit: cdktf.numberToTerraform(this._secondarySoaQueryLimit),
      sort_list: cdktf.listMapper(dnsServerSortListStructToTerraform, false)(this._sortList.internalValue),
      synthesize_address_records_from_https: cdktf.booleanToTerraform(this._synthesizeAddressRecordsFromHttps),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transfer_acl: cdktf.listMapper(dnsServerTransferAclToTerraform, false)(this._transferAcl.internalValue),
      update_acl: cdktf.listMapper(dnsServerUpdateAclToTerraform, false)(this._updateAcl.internalValue),
      use_forwarders_for_subzones: cdktf.booleanToTerraform(this._useForwardersForSubzones),
      use_root_forwarders_for_local_resolution_with_b1td: cdktf.booleanToTerraform(this._useRootForwardersForLocalResolutionWithB1Td),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_edns_option_in_outgoing_query: {
        value: cdktf.booleanToHclTerraform(this._addEdnsOptionInOutgoingQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_sort_views: {
        value: cdktf.booleanToHclTerraform(this._autoSortViews),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_root_ns: {
        value: cdktf.listMapperHcl(dnsServerCustomRootNsToHclTerraform, false)(this._customRootNs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsServerCustomRootNsList",
      },
      custom_root_ns_enabled: {
        value: cdktf.booleanToHclTerraform(this._customRootNsEnabled),
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
      dnssec_trust_anchors: {
        value: cdktf.listMapperHcl(dnsServerDnssecTrustAnchorsToHclTerraform, false)(this._dnssecTrustAnchors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsServerDnssecTrustAnchorsList",
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
      ecs_zones: {
        value: cdktf.listMapperHcl(dnsServerEcsZonesToHclTerraform, false)(this._ecsZones.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsServerEcsZonesList",
      },
      filter_aaaa_acl: {
        value: cdktf.listMapperHcl(dnsServerFilterAaaaAclToHclTerraform, false)(this._filterAaaaAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsServerFilterAaaaAclList",
      },
      filter_aaaa_on_v4: {
        value: cdktf.stringToHclTerraform(this._filterAaaaOnV4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarders: {
        value: cdktf.listMapperHcl(dnsServerForwardersToHclTerraform, false)(this._forwarders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsServerForwardersList",
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
      inheritance_sources: {
        value: dnsServerInheritanceSourcesToHclTerraform(this._inheritanceSources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsServerInheritanceSources",
      },
      kerberos_keys: {
        value: cdktf.listMapperHcl(dnsServerKerberosKeysToHclTerraform, false)(this._kerberosKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsServerKerberosKeysList",
      },
      lame_ttl: {
        value: cdktf.numberToHclTerraform(this._lameTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_query_response: {
        value: cdktf.booleanToHclTerraform(this._logQueryResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      query_acl: {
        value: cdktf.listMapperHcl(dnsServerQueryAclToHclTerraform, false)(this._queryAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsServerQueryAclList",
      },
      query_port: {
        value: cdktf.numberToHclTerraform(this._queryPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recursion_acl: {
        value: cdktf.listMapperHcl(dnsServerRecursionAclToHclTerraform, false)(this._recursionAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsServerRecursionAclList",
      },
      recursion_enabled: {
        value: cdktf.booleanToHclTerraform(this._recursionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recursive_clients: {
        value: cdktf.numberToHclTerraform(this._recursiveClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resolver_query_timeout: {
        value: cdktf.numberToHclTerraform(this._resolverQueryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_axfr_query_limit: {
        value: cdktf.numberToHclTerraform(this._secondaryAxfrQueryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_soa_query_limit: {
        value: cdktf.numberToHclTerraform(this._secondarySoaQueryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort_list: {
        value: cdktf.listMapperHcl(dnsServerSortListStructToHclTerraform, false)(this._sortList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsServerSortListStructList",
      },
      synthesize_address_records_from_https: {
        value: cdktf.booleanToHclTerraform(this._synthesizeAddressRecordsFromHttps),
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
      transfer_acl: {
        value: cdktf.listMapperHcl(dnsServerTransferAclToHclTerraform, false)(this._transferAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsServerTransferAclList",
      },
      update_acl: {
        value: cdktf.listMapperHcl(dnsServerUpdateAclToHclTerraform, false)(this._updateAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsServerUpdateAclList",
      },
      use_forwarders_for_subzones: {
        value: cdktf.booleanToHclTerraform(this._useForwardersForSubzones),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_root_forwarders_for_local_resolution_with_b1td: {
        value: cdktf.booleanToHclTerraform(this._useRootForwardersForLocalResolutionWithB1Td),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
