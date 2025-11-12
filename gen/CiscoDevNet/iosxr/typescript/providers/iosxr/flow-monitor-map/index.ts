// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowMonitorMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the number of entries in the flow cache
  *   - Range: `4096`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#cache_entries FlowMonitorMap#cache_entries}
  */
  readonly cacheEntries?: number;
  /**
  * Immediate removal of entries from flow cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#cache_immediate FlowMonitorMap#cache_immediate}
  */
  readonly cacheImmediate?: boolean | cdktf.IResolvable;
  /**
  * Disable removal of entries from flow cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#cache_permanent FlowMonitorMap#cache_permanent}
  */
  readonly cachePermanent?: boolean | cdktf.IResolvable;
  /**
  * Specify the active flow timeout
  *   - Range: `1`-`604800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#cache_timeout_active FlowMonitorMap#cache_timeout_active}
  */
  readonly cacheTimeoutActive?: number;
  /**
  * Specify the inactive flow timeout
  *   - Range: `0`-`604800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#cache_timeout_inactive FlowMonitorMap#cache_timeout_inactive}
  */
  readonly cacheTimeoutInactive?: number;
  /**
  * Maximum number of entries to age each second
  *   - Range: `1`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#cache_timeout_rate_limit FlowMonitorMap#cache_timeout_rate_limit}
  */
  readonly cacheTimeoutRateLimit?: number;
  /**
  * Specify the update timeout
  *   - Range: `1`-`604800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#cache_timeout_update FlowMonitorMap#cache_timeout_update}
  */
  readonly cacheTimeoutUpdate?: number;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#device FlowMonitorMap#device}
  */
  readonly device?: string;
  /**
  * Specify flow exporter map name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#exporters FlowMonitorMap#exporters}
  */
  readonly exporters?: FlowMonitorMapExporters[] | cdktf.IResolvable;
  /**
  * Specify the inactive timeout
  *   - Range: `50`-`1800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#hw_cache_timeout_inactive FlowMonitorMap#hw_cache_timeout_inactive}
  */
  readonly hwCacheTimeoutInactive?: number;
  /**
  * Monitor map name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#name FlowMonitorMap#name}
  */
  readonly name: string;
  /**
  * export bgp attributes AS_PATH and STD_COMMUNITY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#option_bgpattr FlowMonitorMap#option_bgpattr}
  */
  readonly optionBgpattr?: boolean | cdktf.IResolvable;
  /**
  * Enable filtering of records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#option_filtered FlowMonitorMap#option_filtered}
  */
  readonly optionFiltered?: boolean | cdktf.IResolvable;
  /**
  * export output physical interfaces of bundle interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#option_outbundlemember FlowMonitorMap#option_outbundlemember}
  */
  readonly optionOutbundlemember?: boolean | cdktf.IResolvable;
  /**
  * export output interfaces as physical interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#option_outphysint FlowMonitorMap#option_outphysint}
  */
  readonly optionOutphysint?: boolean | cdktf.IResolvable;
  /**
  * Layer2 traffic based flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_datalink_record FlowMonitorMap#record_datalink_record}
  */
  readonly recordDatalinkRecord?: boolean | cdktf.IResolvable;
  /**
  * Default MDI record format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_default_mdi FlowMonitorMap#record_default_mdi}
  */
  readonly recordDefaultMdi?: boolean | cdktf.IResolvable;
  /**
  * Default RTP record format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_default_rtp FlowMonitorMap#record_default_rtp}
  */
  readonly recordDefaultRtp?: boolean | cdktf.IResolvable;
  /**
  * IPv4 raw record format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4 FlowMonitorMap#record_ipv4}
  */
  readonly recordIpv4?: boolean | cdktf.IResolvable;
  /**
  * Autonomous System based aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_as FlowMonitorMap#record_ipv4_as}
  */
  readonly recordIpv4As?: boolean | cdktf.IResolvable;
  /**
  * AS-TOS based aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_as_tos FlowMonitorMap#record_ipv4_as_tos}
  */
  readonly recordIpv4AsTos?: boolean | cdktf.IResolvable;
  /**
  * BGP, nexthop and tos based aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_bgp_nexthop_tos FlowMonitorMap#record_ipv4_bgp_nexthop_tos}
  */
  readonly recordIpv4BgpNexthopTos?: boolean | cdktf.IResolvable;
  /**
  * IPv4 Destination Based NetFlow Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_destination FlowMonitorMap#record_ipv4_destination}
  */
  readonly recordIpv4Destination?: boolean | cdktf.IResolvable;
  /**
  * Destination prefix based aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_destination_prefix FlowMonitorMap#record_ipv4_destination_prefix}
  */
  readonly recordIpv4DestinationPrefix?: boolean | cdktf.IResolvable;
  /**
  * Destination, prefix and tos based aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_destination_prefix_tos FlowMonitorMap#record_ipv4_destination_prefix_tos}
  */
  readonly recordIpv4DestinationPrefixTos?: boolean | cdktf.IResolvable;
  /**
  * IPv4 Destination Based NetFlow Accounting TOS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_destination_tos FlowMonitorMap#record_ipv4_destination_tos}
  */
  readonly recordIpv4DestinationTos?: boolean | cdktf.IResolvable;
  /**
  * IPv4 record with extended details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_extended FlowMonitorMap#record_ipv4_extended}
  */
  readonly recordIpv4Extended?: boolean | cdktf.IResolvable;
  /**
  * IPV4 gtp record format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_gtp FlowMonitorMap#record_ipv4_gtp}
  */
  readonly recordIpv4Gtp?: boolean | cdktf.IResolvable;
  /**
  * IPv4 record with Layer2 details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_l2_l3 FlowMonitorMap#record_ipv4_l2_l3}
  */
  readonly recordIpv4L2L3?: boolean | cdktf.IResolvable;
  /**
  * Record peer AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_peer_as FlowMonitorMap#record_ipv4_peer_as}
  */
  readonly recordIpv4PeerAs?: boolean | cdktf.IResolvable;
  /**
  * Prefix based aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_prefix FlowMonitorMap#record_ipv4_prefix}
  */
  readonly recordIpv4Prefix?: boolean | cdktf.IResolvable;
  /**
  * Prefix port based aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_prefix_port FlowMonitorMap#record_ipv4_prefix_port}
  */
  readonly recordIpv4PrefixPort?: boolean | cdktf.IResolvable;
  /**
  * Prefix TOS based aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_prefix_tos FlowMonitorMap#record_ipv4_prefix_tos}
  */
  readonly recordIpv4PrefixTos?: boolean | cdktf.IResolvable;
  /**
  * Protocol-Port based aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_protocol_port FlowMonitorMap#record_ipv4_protocol_port}
  */
  readonly recordIpv4ProtocolPort?: boolean | cdktf.IResolvable;
  /**
  * Protocol, port and tos based aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_protocol_port_tos FlowMonitorMap#record_ipv4_protocol_port_tos}
  */
  readonly recordIpv4ProtocolPortTos?: boolean | cdktf.IResolvable;
  /**
  * source prefix based aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_source_prefix FlowMonitorMap#record_ipv4_source_prefix}
  */
  readonly recordIpv4SourcePrefix?: boolean | cdktf.IResolvable;
  /**
  * Source, Prefix and TOS based aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv4_source_prefix_tos FlowMonitorMap#record_ipv4_source_prefix_tos}
  */
  readonly recordIpv4SourcePrefixTos?: boolean | cdktf.IResolvable;
  /**
  * IPv6 raw record format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv6 FlowMonitorMap#record_ipv6}
  */
  readonly recordIpv6?: boolean | cdktf.IResolvable;
  /**
  * IPv6 Destination Based NetFlow Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv6_destination FlowMonitorMap#record_ipv6_destination}
  */
  readonly recordIpv6Destination?: boolean | cdktf.IResolvable;
  /**
  * IPv6 record with extended details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv6_extended FlowMonitorMap#record_ipv6_extended}
  */
  readonly recordIpv6Extended?: boolean | cdktf.IResolvable;
  /**
  * IPV6 gtp record format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv6_gtp FlowMonitorMap#record_ipv6_gtp}
  */
  readonly recordIpv6Gtp?: boolean | cdktf.IResolvable;
  /**
  * IPv6 record with Layer2 details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv6_l2_l3 FlowMonitorMap#record_ipv6_l2_l3}
  */
  readonly recordIpv6L2L3?: boolean | cdktf.IResolvable;
  /**
  * Record peer AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv6_peer_as FlowMonitorMap#record_ipv6_peer_as}
  */
  readonly recordIpv6PeerAs?: boolean | cdktf.IResolvable;
  /**
  * SRv6 record format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_ipv6_srv6 FlowMonitorMap#record_ipv6_srv6}
  */
  readonly recordIpv6Srv6?: boolean | cdktf.IResolvable;
  /**
  * map-t translation based Netflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_map_t FlowMonitorMap#record_map_t}
  */
  readonly recordMapT?: boolean | cdktf.IResolvable;
  /**
  * MPLS record format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_mpls FlowMonitorMap#record_mpls}
  */
  readonly recordMpls?: boolean | cdktf.IResolvable;
  /**
  * MPLS with IPv4 fields format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_mpls_ipv4_fields FlowMonitorMap#record_mpls_ipv4_fields}
  */
  readonly recordMplsIpv4Fields?: boolean | cdktf.IResolvable;
  /**
  * MPLS with IPv4 and IPv6 fields format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_mpls_ipv4_ipv6_fields FlowMonitorMap#record_mpls_ipv4_ipv6_fields}
  */
  readonly recordMplsIpv4Ipv6Fields?: boolean | cdktf.IResolvable;
  /**
  * MPLS with IPv6 fields format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_mpls_ipv6_fields FlowMonitorMap#record_mpls_ipv6_fields}
  */
  readonly recordMplsIpv6Fields?: boolean | cdktf.IResolvable;
  /**
  * Labels to be used for Hashing
  *   - Range: `1`-`6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_mpls_labels FlowMonitorMap#record_mpls_labels}
  */
  readonly recordMplsLabels?: number;
  /**
  * sFlow based flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#record_sflow FlowMonitorMap#record_sflow}
  */
  readonly recordSflow?: boolean | cdktf.IResolvable;
  /**
  * submode to configure sFlow related options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#sflow_options FlowMonitorMap#sflow_options}
  */
  readonly sflowOptions?: boolean | cdktf.IResolvable;
  /**
  * Enable extended-gateway flow data type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#sflow_options_extended_gateway FlowMonitorMap#sflow_options_extended_gateway}
  */
  readonly sflowOptionsExtendedGateway?: boolean | cdktf.IResolvable;
  /**
  * Enable extended-ipv4-tunnel-egress flow data type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#sflow_options_extended_ipv4_tunnel_egress FlowMonitorMap#sflow_options_extended_ipv4_tunnel_egress}
  */
  readonly sflowOptionsExtendedIpv4TunnelEgress?: boolean | cdktf.IResolvable;
  /**
  * Enable extended-ipv6-tunnel-egress flow data type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#sflow_options_extended_ipv6_tunnel_egress FlowMonitorMap#sflow_options_extended_ipv6_tunnel_egress}
  */
  readonly sflowOptionsExtendedIpv6TunnelEgress?: boolean | cdktf.IResolvable;
  /**
  * Enable extended-router flow data type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#sflow_options_extended_router FlowMonitorMap#sflow_options_extended_router}
  */
  readonly sflowOptionsExtendedRouter?: boolean | cdktf.IResolvable;
  /**
  * Enable if-counters counter sampling rate
  *   - Range: `5`-`1800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#sflow_options_if_counters_polling_interval FlowMonitorMap#sflow_options_if_counters_polling_interval}
  */
  readonly sflowOptionsIfCountersPollingInterval?: number;
  /**
  * Specify ifindex related options
  *   - Choices: `physical`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#sflow_options_input_ifindex FlowMonitorMap#sflow_options_input_ifindex}
  */
  readonly sflowOptionsInputIfindex?: string;
  /**
  * Specify ifindex related options
  *   - Choices: `physical`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#sflow_options_output_ifindex FlowMonitorMap#sflow_options_output_ifindex}
  */
  readonly sflowOptionsOutputIfindex?: string;
  /**
  * Specify maximum sample-header size to be exported
  *   - Range: `128`-`343`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#sflow_options_sample_header_size FlowMonitorMap#sflow_options_sample_header_size}
  */
  readonly sflowOptionsSampleHeaderSize?: number;
}
export interface FlowMonitorMapExporters {
  /**
  * Specify flow exporter map name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#name FlowMonitorMap#name}
  */
  readonly name: string;
}

export function flowMonitorMapExportersToTerraform(struct?: FlowMonitorMapExporters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function flowMonitorMapExportersToHclTerraform(struct?: FlowMonitorMapExporters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowMonitorMapExportersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlowMonitorMapExporters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowMonitorMapExporters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class FlowMonitorMapExportersList extends cdktf.ComplexList {
  public internalValue? : FlowMonitorMapExporters[] | cdktf.IResolvable

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
  public get(index: number): FlowMonitorMapExportersOutputReference {
    return new FlowMonitorMapExportersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map iosxr_flow_monitor_map}
*/
export class FlowMonitorMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_flow_monitor_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowMonitorMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowMonitorMap to import
  * @param importFromId The id of the existing FlowMonitorMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowMonitorMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_flow_monitor_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_monitor_map iosxr_flow_monitor_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowMonitorMapConfig
  */
  public constructor(scope: Construct, id: string, config: FlowMonitorMapConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_flow_monitor_map',
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
    this._cacheEntries = config.cacheEntries;
    this._cacheImmediate = config.cacheImmediate;
    this._cachePermanent = config.cachePermanent;
    this._cacheTimeoutActive = config.cacheTimeoutActive;
    this._cacheTimeoutInactive = config.cacheTimeoutInactive;
    this._cacheTimeoutRateLimit = config.cacheTimeoutRateLimit;
    this._cacheTimeoutUpdate = config.cacheTimeoutUpdate;
    this._device = config.device;
    this._exporters.internalValue = config.exporters;
    this._hwCacheTimeoutInactive = config.hwCacheTimeoutInactive;
    this._name = config.name;
    this._optionBgpattr = config.optionBgpattr;
    this._optionFiltered = config.optionFiltered;
    this._optionOutbundlemember = config.optionOutbundlemember;
    this._optionOutphysint = config.optionOutphysint;
    this._recordDatalinkRecord = config.recordDatalinkRecord;
    this._recordDefaultMdi = config.recordDefaultMdi;
    this._recordDefaultRtp = config.recordDefaultRtp;
    this._recordIpv4 = config.recordIpv4;
    this._recordIpv4As = config.recordIpv4As;
    this._recordIpv4AsTos = config.recordIpv4AsTos;
    this._recordIpv4BgpNexthopTos = config.recordIpv4BgpNexthopTos;
    this._recordIpv4Destination = config.recordIpv4Destination;
    this._recordIpv4DestinationPrefix = config.recordIpv4DestinationPrefix;
    this._recordIpv4DestinationPrefixTos = config.recordIpv4DestinationPrefixTos;
    this._recordIpv4DestinationTos = config.recordIpv4DestinationTos;
    this._recordIpv4Extended = config.recordIpv4Extended;
    this._recordIpv4Gtp = config.recordIpv4Gtp;
    this._recordIpv4L2L3 = config.recordIpv4L2L3;
    this._recordIpv4PeerAs = config.recordIpv4PeerAs;
    this._recordIpv4Prefix = config.recordIpv4Prefix;
    this._recordIpv4PrefixPort = config.recordIpv4PrefixPort;
    this._recordIpv4PrefixTos = config.recordIpv4PrefixTos;
    this._recordIpv4ProtocolPort = config.recordIpv4ProtocolPort;
    this._recordIpv4ProtocolPortTos = config.recordIpv4ProtocolPortTos;
    this._recordIpv4SourcePrefix = config.recordIpv4SourcePrefix;
    this._recordIpv4SourcePrefixTos = config.recordIpv4SourcePrefixTos;
    this._recordIpv6 = config.recordIpv6;
    this._recordIpv6Destination = config.recordIpv6Destination;
    this._recordIpv6Extended = config.recordIpv6Extended;
    this._recordIpv6Gtp = config.recordIpv6Gtp;
    this._recordIpv6L2L3 = config.recordIpv6L2L3;
    this._recordIpv6PeerAs = config.recordIpv6PeerAs;
    this._recordIpv6Srv6 = config.recordIpv6Srv6;
    this._recordMapT = config.recordMapT;
    this._recordMpls = config.recordMpls;
    this._recordMplsIpv4Fields = config.recordMplsIpv4Fields;
    this._recordMplsIpv4Ipv6Fields = config.recordMplsIpv4Ipv6Fields;
    this._recordMplsIpv6Fields = config.recordMplsIpv6Fields;
    this._recordMplsLabels = config.recordMplsLabels;
    this._recordSflow = config.recordSflow;
    this._sflowOptions = config.sflowOptions;
    this._sflowOptionsExtendedGateway = config.sflowOptionsExtendedGateway;
    this._sflowOptionsExtendedIpv4TunnelEgress = config.sflowOptionsExtendedIpv4TunnelEgress;
    this._sflowOptionsExtendedIpv6TunnelEgress = config.sflowOptionsExtendedIpv6TunnelEgress;
    this._sflowOptionsExtendedRouter = config.sflowOptionsExtendedRouter;
    this._sflowOptionsIfCountersPollingInterval = config.sflowOptionsIfCountersPollingInterval;
    this._sflowOptionsInputIfindex = config.sflowOptionsInputIfindex;
    this._sflowOptionsOutputIfindex = config.sflowOptionsOutputIfindex;
    this._sflowOptionsSampleHeaderSize = config.sflowOptionsSampleHeaderSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_entries - computed: false, optional: true, required: false
  private _cacheEntries?: number; 
  public get cacheEntries() {
    return this.getNumberAttribute('cache_entries');
  }
  public set cacheEntries(value: number) {
    this._cacheEntries = value;
  }
  public resetCacheEntries() {
    this._cacheEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEntriesInput() {
    return this._cacheEntries;
  }

  // cache_immediate - computed: false, optional: true, required: false
  private _cacheImmediate?: boolean | cdktf.IResolvable; 
  public get cacheImmediate() {
    return this.getBooleanAttribute('cache_immediate');
  }
  public set cacheImmediate(value: boolean | cdktf.IResolvable) {
    this._cacheImmediate = value;
  }
  public resetCacheImmediate() {
    this._cacheImmediate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheImmediateInput() {
    return this._cacheImmediate;
  }

  // cache_permanent - computed: false, optional: true, required: false
  private _cachePermanent?: boolean | cdktf.IResolvable; 
  public get cachePermanent() {
    return this.getBooleanAttribute('cache_permanent');
  }
  public set cachePermanent(value: boolean | cdktf.IResolvable) {
    this._cachePermanent = value;
  }
  public resetCachePermanent() {
    this._cachePermanent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePermanentInput() {
    return this._cachePermanent;
  }

  // cache_timeout_active - computed: false, optional: true, required: false
  private _cacheTimeoutActive?: number; 
  public get cacheTimeoutActive() {
    return this.getNumberAttribute('cache_timeout_active');
  }
  public set cacheTimeoutActive(value: number) {
    this._cacheTimeoutActive = value;
  }
  public resetCacheTimeoutActive() {
    this._cacheTimeoutActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeoutActiveInput() {
    return this._cacheTimeoutActive;
  }

  // cache_timeout_inactive - computed: false, optional: true, required: false
  private _cacheTimeoutInactive?: number; 
  public get cacheTimeoutInactive() {
    return this.getNumberAttribute('cache_timeout_inactive');
  }
  public set cacheTimeoutInactive(value: number) {
    this._cacheTimeoutInactive = value;
  }
  public resetCacheTimeoutInactive() {
    this._cacheTimeoutInactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeoutInactiveInput() {
    return this._cacheTimeoutInactive;
  }

  // cache_timeout_rate_limit - computed: false, optional: true, required: false
  private _cacheTimeoutRateLimit?: number; 
  public get cacheTimeoutRateLimit() {
    return this.getNumberAttribute('cache_timeout_rate_limit');
  }
  public set cacheTimeoutRateLimit(value: number) {
    this._cacheTimeoutRateLimit = value;
  }
  public resetCacheTimeoutRateLimit() {
    this._cacheTimeoutRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeoutRateLimitInput() {
    return this._cacheTimeoutRateLimit;
  }

  // cache_timeout_update - computed: false, optional: true, required: false
  private _cacheTimeoutUpdate?: number; 
  public get cacheTimeoutUpdate() {
    return this.getNumberAttribute('cache_timeout_update');
  }
  public set cacheTimeoutUpdate(value: number) {
    this._cacheTimeoutUpdate = value;
  }
  public resetCacheTimeoutUpdate() {
    this._cacheTimeoutUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeoutUpdateInput() {
    return this._cacheTimeoutUpdate;
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

  // exporters - computed: false, optional: true, required: false
  private _exporters = new FlowMonitorMapExportersList(this, "exporters", false);
  public get exporters() {
    return this._exporters;
  }
  public putExporters(value: FlowMonitorMapExporters[] | cdktf.IResolvable) {
    this._exporters.internalValue = value;
  }
  public resetExporters() {
    this._exporters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportersInput() {
    return this._exporters.internalValue;
  }

  // hw_cache_timeout_inactive - computed: false, optional: true, required: false
  private _hwCacheTimeoutInactive?: number; 
  public get hwCacheTimeoutInactive() {
    return this.getNumberAttribute('hw_cache_timeout_inactive');
  }
  public set hwCacheTimeoutInactive(value: number) {
    this._hwCacheTimeoutInactive = value;
  }
  public resetHwCacheTimeoutInactive() {
    this._hwCacheTimeoutInactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwCacheTimeoutInactiveInput() {
    return this._hwCacheTimeoutInactive;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // option_bgpattr - computed: false, optional: true, required: false
  private _optionBgpattr?: boolean | cdktf.IResolvable; 
  public get optionBgpattr() {
    return this.getBooleanAttribute('option_bgpattr');
  }
  public set optionBgpattr(value: boolean | cdktf.IResolvable) {
    this._optionBgpattr = value;
  }
  public resetOptionBgpattr() {
    this._optionBgpattr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionBgpattrInput() {
    return this._optionBgpattr;
  }

  // option_filtered - computed: false, optional: true, required: false
  private _optionFiltered?: boolean | cdktf.IResolvable; 
  public get optionFiltered() {
    return this.getBooleanAttribute('option_filtered');
  }
  public set optionFiltered(value: boolean | cdktf.IResolvable) {
    this._optionFiltered = value;
  }
  public resetOptionFiltered() {
    this._optionFiltered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionFilteredInput() {
    return this._optionFiltered;
  }

  // option_outbundlemember - computed: false, optional: true, required: false
  private _optionOutbundlemember?: boolean | cdktf.IResolvable; 
  public get optionOutbundlemember() {
    return this.getBooleanAttribute('option_outbundlemember');
  }
  public set optionOutbundlemember(value: boolean | cdktf.IResolvable) {
    this._optionOutbundlemember = value;
  }
  public resetOptionOutbundlemember() {
    this._optionOutbundlemember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionOutbundlememberInput() {
    return this._optionOutbundlemember;
  }

  // option_outphysint - computed: false, optional: true, required: false
  private _optionOutphysint?: boolean | cdktf.IResolvable; 
  public get optionOutphysint() {
    return this.getBooleanAttribute('option_outphysint');
  }
  public set optionOutphysint(value: boolean | cdktf.IResolvable) {
    this._optionOutphysint = value;
  }
  public resetOptionOutphysint() {
    this._optionOutphysint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionOutphysintInput() {
    return this._optionOutphysint;
  }

  // record_datalink_record - computed: false, optional: true, required: false
  private _recordDatalinkRecord?: boolean | cdktf.IResolvable; 
  public get recordDatalinkRecord() {
    return this.getBooleanAttribute('record_datalink_record');
  }
  public set recordDatalinkRecord(value: boolean | cdktf.IResolvable) {
    this._recordDatalinkRecord = value;
  }
  public resetRecordDatalinkRecord() {
    this._recordDatalinkRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDatalinkRecordInput() {
    return this._recordDatalinkRecord;
  }

  // record_default_mdi - computed: false, optional: true, required: false
  private _recordDefaultMdi?: boolean | cdktf.IResolvable; 
  public get recordDefaultMdi() {
    return this.getBooleanAttribute('record_default_mdi');
  }
  public set recordDefaultMdi(value: boolean | cdktf.IResolvable) {
    this._recordDefaultMdi = value;
  }
  public resetRecordDefaultMdi() {
    this._recordDefaultMdi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDefaultMdiInput() {
    return this._recordDefaultMdi;
  }

  // record_default_rtp - computed: false, optional: true, required: false
  private _recordDefaultRtp?: boolean | cdktf.IResolvable; 
  public get recordDefaultRtp() {
    return this.getBooleanAttribute('record_default_rtp');
  }
  public set recordDefaultRtp(value: boolean | cdktf.IResolvable) {
    this._recordDefaultRtp = value;
  }
  public resetRecordDefaultRtp() {
    this._recordDefaultRtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDefaultRtpInput() {
    return this._recordDefaultRtp;
  }

  // record_ipv4 - computed: false, optional: true, required: false
  private _recordIpv4?: boolean | cdktf.IResolvable; 
  public get recordIpv4() {
    return this.getBooleanAttribute('record_ipv4');
  }
  public set recordIpv4(value: boolean | cdktf.IResolvable) {
    this._recordIpv4 = value;
  }
  public resetRecordIpv4() {
    this._recordIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4Input() {
    return this._recordIpv4;
  }

  // record_ipv4_as - computed: false, optional: true, required: false
  private _recordIpv4As?: boolean | cdktf.IResolvable; 
  public get recordIpv4As() {
    return this.getBooleanAttribute('record_ipv4_as');
  }
  public set recordIpv4As(value: boolean | cdktf.IResolvable) {
    this._recordIpv4As = value;
  }
  public resetRecordIpv4As() {
    this._recordIpv4As = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4AsInput() {
    return this._recordIpv4As;
  }

  // record_ipv4_as_tos - computed: false, optional: true, required: false
  private _recordIpv4AsTos?: boolean | cdktf.IResolvable; 
  public get recordIpv4AsTos() {
    return this.getBooleanAttribute('record_ipv4_as_tos');
  }
  public set recordIpv4AsTos(value: boolean | cdktf.IResolvable) {
    this._recordIpv4AsTos = value;
  }
  public resetRecordIpv4AsTos() {
    this._recordIpv4AsTos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4AsTosInput() {
    return this._recordIpv4AsTos;
  }

  // record_ipv4_bgp_nexthop_tos - computed: false, optional: true, required: false
  private _recordIpv4BgpNexthopTos?: boolean | cdktf.IResolvable; 
  public get recordIpv4BgpNexthopTos() {
    return this.getBooleanAttribute('record_ipv4_bgp_nexthop_tos');
  }
  public set recordIpv4BgpNexthopTos(value: boolean | cdktf.IResolvable) {
    this._recordIpv4BgpNexthopTos = value;
  }
  public resetRecordIpv4BgpNexthopTos() {
    this._recordIpv4BgpNexthopTos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4BgpNexthopTosInput() {
    return this._recordIpv4BgpNexthopTos;
  }

  // record_ipv4_destination - computed: false, optional: true, required: false
  private _recordIpv4Destination?: boolean | cdktf.IResolvable; 
  public get recordIpv4Destination() {
    return this.getBooleanAttribute('record_ipv4_destination');
  }
  public set recordIpv4Destination(value: boolean | cdktf.IResolvable) {
    this._recordIpv4Destination = value;
  }
  public resetRecordIpv4Destination() {
    this._recordIpv4Destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4DestinationInput() {
    return this._recordIpv4Destination;
  }

  // record_ipv4_destination_prefix - computed: false, optional: true, required: false
  private _recordIpv4DestinationPrefix?: boolean | cdktf.IResolvable; 
  public get recordIpv4DestinationPrefix() {
    return this.getBooleanAttribute('record_ipv4_destination_prefix');
  }
  public set recordIpv4DestinationPrefix(value: boolean | cdktf.IResolvable) {
    this._recordIpv4DestinationPrefix = value;
  }
  public resetRecordIpv4DestinationPrefix() {
    this._recordIpv4DestinationPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4DestinationPrefixInput() {
    return this._recordIpv4DestinationPrefix;
  }

  // record_ipv4_destination_prefix_tos - computed: false, optional: true, required: false
  private _recordIpv4DestinationPrefixTos?: boolean | cdktf.IResolvable; 
  public get recordIpv4DestinationPrefixTos() {
    return this.getBooleanAttribute('record_ipv4_destination_prefix_tos');
  }
  public set recordIpv4DestinationPrefixTos(value: boolean | cdktf.IResolvable) {
    this._recordIpv4DestinationPrefixTos = value;
  }
  public resetRecordIpv4DestinationPrefixTos() {
    this._recordIpv4DestinationPrefixTos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4DestinationPrefixTosInput() {
    return this._recordIpv4DestinationPrefixTos;
  }

  // record_ipv4_destination_tos - computed: false, optional: true, required: false
  private _recordIpv4DestinationTos?: boolean | cdktf.IResolvable; 
  public get recordIpv4DestinationTos() {
    return this.getBooleanAttribute('record_ipv4_destination_tos');
  }
  public set recordIpv4DestinationTos(value: boolean | cdktf.IResolvable) {
    this._recordIpv4DestinationTos = value;
  }
  public resetRecordIpv4DestinationTos() {
    this._recordIpv4DestinationTos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4DestinationTosInput() {
    return this._recordIpv4DestinationTos;
  }

  // record_ipv4_extended - computed: false, optional: true, required: false
  private _recordIpv4Extended?: boolean | cdktf.IResolvable; 
  public get recordIpv4Extended() {
    return this.getBooleanAttribute('record_ipv4_extended');
  }
  public set recordIpv4Extended(value: boolean | cdktf.IResolvable) {
    this._recordIpv4Extended = value;
  }
  public resetRecordIpv4Extended() {
    this._recordIpv4Extended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4ExtendedInput() {
    return this._recordIpv4Extended;
  }

  // record_ipv4_gtp - computed: false, optional: true, required: false
  private _recordIpv4Gtp?: boolean | cdktf.IResolvable; 
  public get recordIpv4Gtp() {
    return this.getBooleanAttribute('record_ipv4_gtp');
  }
  public set recordIpv4Gtp(value: boolean | cdktf.IResolvable) {
    this._recordIpv4Gtp = value;
  }
  public resetRecordIpv4Gtp() {
    this._recordIpv4Gtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4GtpInput() {
    return this._recordIpv4Gtp;
  }

  // record_ipv4_l2_l3 - computed: false, optional: true, required: false
  private _recordIpv4L2L3?: boolean | cdktf.IResolvable; 
  public get recordIpv4L2L3() {
    return this.getBooleanAttribute('record_ipv4_l2_l3');
  }
  public set recordIpv4L2L3(value: boolean | cdktf.IResolvable) {
    this._recordIpv4L2L3 = value;
  }
  public resetRecordIpv4L2L3() {
    this._recordIpv4L2L3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4L2L3Input() {
    return this._recordIpv4L2L3;
  }

  // record_ipv4_peer_as - computed: false, optional: true, required: false
  private _recordIpv4PeerAs?: boolean | cdktf.IResolvable; 
  public get recordIpv4PeerAs() {
    return this.getBooleanAttribute('record_ipv4_peer_as');
  }
  public set recordIpv4PeerAs(value: boolean | cdktf.IResolvable) {
    this._recordIpv4PeerAs = value;
  }
  public resetRecordIpv4PeerAs() {
    this._recordIpv4PeerAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4PeerAsInput() {
    return this._recordIpv4PeerAs;
  }

  // record_ipv4_prefix - computed: false, optional: true, required: false
  private _recordIpv4Prefix?: boolean | cdktf.IResolvable; 
  public get recordIpv4Prefix() {
    return this.getBooleanAttribute('record_ipv4_prefix');
  }
  public set recordIpv4Prefix(value: boolean | cdktf.IResolvable) {
    this._recordIpv4Prefix = value;
  }
  public resetRecordIpv4Prefix() {
    this._recordIpv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4PrefixInput() {
    return this._recordIpv4Prefix;
  }

  // record_ipv4_prefix_port - computed: false, optional: true, required: false
  private _recordIpv4PrefixPort?: boolean | cdktf.IResolvable; 
  public get recordIpv4PrefixPort() {
    return this.getBooleanAttribute('record_ipv4_prefix_port');
  }
  public set recordIpv4PrefixPort(value: boolean | cdktf.IResolvable) {
    this._recordIpv4PrefixPort = value;
  }
  public resetRecordIpv4PrefixPort() {
    this._recordIpv4PrefixPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4PrefixPortInput() {
    return this._recordIpv4PrefixPort;
  }

  // record_ipv4_prefix_tos - computed: false, optional: true, required: false
  private _recordIpv4PrefixTos?: boolean | cdktf.IResolvable; 
  public get recordIpv4PrefixTos() {
    return this.getBooleanAttribute('record_ipv4_prefix_tos');
  }
  public set recordIpv4PrefixTos(value: boolean | cdktf.IResolvable) {
    this._recordIpv4PrefixTos = value;
  }
  public resetRecordIpv4PrefixTos() {
    this._recordIpv4PrefixTos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4PrefixTosInput() {
    return this._recordIpv4PrefixTos;
  }

  // record_ipv4_protocol_port - computed: false, optional: true, required: false
  private _recordIpv4ProtocolPort?: boolean | cdktf.IResolvable; 
  public get recordIpv4ProtocolPort() {
    return this.getBooleanAttribute('record_ipv4_protocol_port');
  }
  public set recordIpv4ProtocolPort(value: boolean | cdktf.IResolvable) {
    this._recordIpv4ProtocolPort = value;
  }
  public resetRecordIpv4ProtocolPort() {
    this._recordIpv4ProtocolPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4ProtocolPortInput() {
    return this._recordIpv4ProtocolPort;
  }

  // record_ipv4_protocol_port_tos - computed: false, optional: true, required: false
  private _recordIpv4ProtocolPortTos?: boolean | cdktf.IResolvable; 
  public get recordIpv4ProtocolPortTos() {
    return this.getBooleanAttribute('record_ipv4_protocol_port_tos');
  }
  public set recordIpv4ProtocolPortTos(value: boolean | cdktf.IResolvable) {
    this._recordIpv4ProtocolPortTos = value;
  }
  public resetRecordIpv4ProtocolPortTos() {
    this._recordIpv4ProtocolPortTos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4ProtocolPortTosInput() {
    return this._recordIpv4ProtocolPortTos;
  }

  // record_ipv4_source_prefix - computed: false, optional: true, required: false
  private _recordIpv4SourcePrefix?: boolean | cdktf.IResolvable; 
  public get recordIpv4SourcePrefix() {
    return this.getBooleanAttribute('record_ipv4_source_prefix');
  }
  public set recordIpv4SourcePrefix(value: boolean | cdktf.IResolvable) {
    this._recordIpv4SourcePrefix = value;
  }
  public resetRecordIpv4SourcePrefix() {
    this._recordIpv4SourcePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4SourcePrefixInput() {
    return this._recordIpv4SourcePrefix;
  }

  // record_ipv4_source_prefix_tos - computed: false, optional: true, required: false
  private _recordIpv4SourcePrefixTos?: boolean | cdktf.IResolvable; 
  public get recordIpv4SourcePrefixTos() {
    return this.getBooleanAttribute('record_ipv4_source_prefix_tos');
  }
  public set recordIpv4SourcePrefixTos(value: boolean | cdktf.IResolvable) {
    this._recordIpv4SourcePrefixTos = value;
  }
  public resetRecordIpv4SourcePrefixTos() {
    this._recordIpv4SourcePrefixTos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv4SourcePrefixTosInput() {
    return this._recordIpv4SourcePrefixTos;
  }

  // record_ipv6 - computed: false, optional: true, required: false
  private _recordIpv6?: boolean | cdktf.IResolvable; 
  public get recordIpv6() {
    return this.getBooleanAttribute('record_ipv6');
  }
  public set recordIpv6(value: boolean | cdktf.IResolvable) {
    this._recordIpv6 = value;
  }
  public resetRecordIpv6() {
    this._recordIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv6Input() {
    return this._recordIpv6;
  }

  // record_ipv6_destination - computed: false, optional: true, required: false
  private _recordIpv6Destination?: boolean | cdktf.IResolvable; 
  public get recordIpv6Destination() {
    return this.getBooleanAttribute('record_ipv6_destination');
  }
  public set recordIpv6Destination(value: boolean | cdktf.IResolvable) {
    this._recordIpv6Destination = value;
  }
  public resetRecordIpv6Destination() {
    this._recordIpv6Destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv6DestinationInput() {
    return this._recordIpv6Destination;
  }

  // record_ipv6_extended - computed: false, optional: true, required: false
  private _recordIpv6Extended?: boolean | cdktf.IResolvable; 
  public get recordIpv6Extended() {
    return this.getBooleanAttribute('record_ipv6_extended');
  }
  public set recordIpv6Extended(value: boolean | cdktf.IResolvable) {
    this._recordIpv6Extended = value;
  }
  public resetRecordIpv6Extended() {
    this._recordIpv6Extended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv6ExtendedInput() {
    return this._recordIpv6Extended;
  }

  // record_ipv6_gtp - computed: false, optional: true, required: false
  private _recordIpv6Gtp?: boolean | cdktf.IResolvable; 
  public get recordIpv6Gtp() {
    return this.getBooleanAttribute('record_ipv6_gtp');
  }
  public set recordIpv6Gtp(value: boolean | cdktf.IResolvable) {
    this._recordIpv6Gtp = value;
  }
  public resetRecordIpv6Gtp() {
    this._recordIpv6Gtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv6GtpInput() {
    return this._recordIpv6Gtp;
  }

  // record_ipv6_l2_l3 - computed: false, optional: true, required: false
  private _recordIpv6L2L3?: boolean | cdktf.IResolvable; 
  public get recordIpv6L2L3() {
    return this.getBooleanAttribute('record_ipv6_l2_l3');
  }
  public set recordIpv6L2L3(value: boolean | cdktf.IResolvable) {
    this._recordIpv6L2L3 = value;
  }
  public resetRecordIpv6L2L3() {
    this._recordIpv6L2L3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv6L2L3Input() {
    return this._recordIpv6L2L3;
  }

  // record_ipv6_peer_as - computed: false, optional: true, required: false
  private _recordIpv6PeerAs?: boolean | cdktf.IResolvable; 
  public get recordIpv6PeerAs() {
    return this.getBooleanAttribute('record_ipv6_peer_as');
  }
  public set recordIpv6PeerAs(value: boolean | cdktf.IResolvable) {
    this._recordIpv6PeerAs = value;
  }
  public resetRecordIpv6PeerAs() {
    this._recordIpv6PeerAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv6PeerAsInput() {
    return this._recordIpv6PeerAs;
  }

  // record_ipv6_srv6 - computed: false, optional: true, required: false
  private _recordIpv6Srv6?: boolean | cdktf.IResolvable; 
  public get recordIpv6Srv6() {
    return this.getBooleanAttribute('record_ipv6_srv6');
  }
  public set recordIpv6Srv6(value: boolean | cdktf.IResolvable) {
    this._recordIpv6Srv6 = value;
  }
  public resetRecordIpv6Srv6() {
    this._recordIpv6Srv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIpv6Srv6Input() {
    return this._recordIpv6Srv6;
  }

  // record_map_t - computed: false, optional: true, required: false
  private _recordMapT?: boolean | cdktf.IResolvable; 
  public get recordMapT() {
    return this.getBooleanAttribute('record_map_t');
  }
  public set recordMapT(value: boolean | cdktf.IResolvable) {
    this._recordMapT = value;
  }
  public resetRecordMapT() {
    this._recordMapT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordMapTInput() {
    return this._recordMapT;
  }

  // record_mpls - computed: false, optional: true, required: false
  private _recordMpls?: boolean | cdktf.IResolvable; 
  public get recordMpls() {
    return this.getBooleanAttribute('record_mpls');
  }
  public set recordMpls(value: boolean | cdktf.IResolvable) {
    this._recordMpls = value;
  }
  public resetRecordMpls() {
    this._recordMpls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordMplsInput() {
    return this._recordMpls;
  }

  // record_mpls_ipv4_fields - computed: false, optional: true, required: false
  private _recordMplsIpv4Fields?: boolean | cdktf.IResolvable; 
  public get recordMplsIpv4Fields() {
    return this.getBooleanAttribute('record_mpls_ipv4_fields');
  }
  public set recordMplsIpv4Fields(value: boolean | cdktf.IResolvable) {
    this._recordMplsIpv4Fields = value;
  }
  public resetRecordMplsIpv4Fields() {
    this._recordMplsIpv4Fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordMplsIpv4FieldsInput() {
    return this._recordMplsIpv4Fields;
  }

  // record_mpls_ipv4_ipv6_fields - computed: false, optional: true, required: false
  private _recordMplsIpv4Ipv6Fields?: boolean | cdktf.IResolvable; 
  public get recordMplsIpv4Ipv6Fields() {
    return this.getBooleanAttribute('record_mpls_ipv4_ipv6_fields');
  }
  public set recordMplsIpv4Ipv6Fields(value: boolean | cdktf.IResolvable) {
    this._recordMplsIpv4Ipv6Fields = value;
  }
  public resetRecordMplsIpv4Ipv6Fields() {
    this._recordMplsIpv4Ipv6Fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordMplsIpv4Ipv6FieldsInput() {
    return this._recordMplsIpv4Ipv6Fields;
  }

  // record_mpls_ipv6_fields - computed: false, optional: true, required: false
  private _recordMplsIpv6Fields?: boolean | cdktf.IResolvable; 
  public get recordMplsIpv6Fields() {
    return this.getBooleanAttribute('record_mpls_ipv6_fields');
  }
  public set recordMplsIpv6Fields(value: boolean | cdktf.IResolvable) {
    this._recordMplsIpv6Fields = value;
  }
  public resetRecordMplsIpv6Fields() {
    this._recordMplsIpv6Fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordMplsIpv6FieldsInput() {
    return this._recordMplsIpv6Fields;
  }

  // record_mpls_labels - computed: false, optional: true, required: false
  private _recordMplsLabels?: number; 
  public get recordMplsLabels() {
    return this.getNumberAttribute('record_mpls_labels');
  }
  public set recordMplsLabels(value: number) {
    this._recordMplsLabels = value;
  }
  public resetRecordMplsLabels() {
    this._recordMplsLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordMplsLabelsInput() {
    return this._recordMplsLabels;
  }

  // record_sflow - computed: false, optional: true, required: false
  private _recordSflow?: boolean | cdktf.IResolvable; 
  public get recordSflow() {
    return this.getBooleanAttribute('record_sflow');
  }
  public set recordSflow(value: boolean | cdktf.IResolvable) {
    this._recordSflow = value;
  }
  public resetRecordSflow() {
    this._recordSflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSflowInput() {
    return this._recordSflow;
  }

  // sflow_options - computed: false, optional: true, required: false
  private _sflowOptions?: boolean | cdktf.IResolvable; 
  public get sflowOptions() {
    return this.getBooleanAttribute('sflow_options');
  }
  public set sflowOptions(value: boolean | cdktf.IResolvable) {
    this._sflowOptions = value;
  }
  public resetSflowOptions() {
    this._sflowOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowOptionsInput() {
    return this._sflowOptions;
  }

  // sflow_options_extended_gateway - computed: false, optional: true, required: false
  private _sflowOptionsExtendedGateway?: boolean | cdktf.IResolvable; 
  public get sflowOptionsExtendedGateway() {
    return this.getBooleanAttribute('sflow_options_extended_gateway');
  }
  public set sflowOptionsExtendedGateway(value: boolean | cdktf.IResolvable) {
    this._sflowOptionsExtendedGateway = value;
  }
  public resetSflowOptionsExtendedGateway() {
    this._sflowOptionsExtendedGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowOptionsExtendedGatewayInput() {
    return this._sflowOptionsExtendedGateway;
  }

  // sflow_options_extended_ipv4_tunnel_egress - computed: false, optional: true, required: false
  private _sflowOptionsExtendedIpv4TunnelEgress?: boolean | cdktf.IResolvable; 
  public get sflowOptionsExtendedIpv4TunnelEgress() {
    return this.getBooleanAttribute('sflow_options_extended_ipv4_tunnel_egress');
  }
  public set sflowOptionsExtendedIpv4TunnelEgress(value: boolean | cdktf.IResolvable) {
    this._sflowOptionsExtendedIpv4TunnelEgress = value;
  }
  public resetSflowOptionsExtendedIpv4TunnelEgress() {
    this._sflowOptionsExtendedIpv4TunnelEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowOptionsExtendedIpv4TunnelEgressInput() {
    return this._sflowOptionsExtendedIpv4TunnelEgress;
  }

  // sflow_options_extended_ipv6_tunnel_egress - computed: false, optional: true, required: false
  private _sflowOptionsExtendedIpv6TunnelEgress?: boolean | cdktf.IResolvable; 
  public get sflowOptionsExtendedIpv6TunnelEgress() {
    return this.getBooleanAttribute('sflow_options_extended_ipv6_tunnel_egress');
  }
  public set sflowOptionsExtendedIpv6TunnelEgress(value: boolean | cdktf.IResolvable) {
    this._sflowOptionsExtendedIpv6TunnelEgress = value;
  }
  public resetSflowOptionsExtendedIpv6TunnelEgress() {
    this._sflowOptionsExtendedIpv6TunnelEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowOptionsExtendedIpv6TunnelEgressInput() {
    return this._sflowOptionsExtendedIpv6TunnelEgress;
  }

  // sflow_options_extended_router - computed: false, optional: true, required: false
  private _sflowOptionsExtendedRouter?: boolean | cdktf.IResolvable; 
  public get sflowOptionsExtendedRouter() {
    return this.getBooleanAttribute('sflow_options_extended_router');
  }
  public set sflowOptionsExtendedRouter(value: boolean | cdktf.IResolvable) {
    this._sflowOptionsExtendedRouter = value;
  }
  public resetSflowOptionsExtendedRouter() {
    this._sflowOptionsExtendedRouter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowOptionsExtendedRouterInput() {
    return this._sflowOptionsExtendedRouter;
  }

  // sflow_options_if_counters_polling_interval - computed: false, optional: true, required: false
  private _sflowOptionsIfCountersPollingInterval?: number; 
  public get sflowOptionsIfCountersPollingInterval() {
    return this.getNumberAttribute('sflow_options_if_counters_polling_interval');
  }
  public set sflowOptionsIfCountersPollingInterval(value: number) {
    this._sflowOptionsIfCountersPollingInterval = value;
  }
  public resetSflowOptionsIfCountersPollingInterval() {
    this._sflowOptionsIfCountersPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowOptionsIfCountersPollingIntervalInput() {
    return this._sflowOptionsIfCountersPollingInterval;
  }

  // sflow_options_input_ifindex - computed: false, optional: true, required: false
  private _sflowOptionsInputIfindex?: string; 
  public get sflowOptionsInputIfindex() {
    return this.getStringAttribute('sflow_options_input_ifindex');
  }
  public set sflowOptionsInputIfindex(value: string) {
    this._sflowOptionsInputIfindex = value;
  }
  public resetSflowOptionsInputIfindex() {
    this._sflowOptionsInputIfindex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowOptionsInputIfindexInput() {
    return this._sflowOptionsInputIfindex;
  }

  // sflow_options_output_ifindex - computed: false, optional: true, required: false
  private _sflowOptionsOutputIfindex?: string; 
  public get sflowOptionsOutputIfindex() {
    return this.getStringAttribute('sflow_options_output_ifindex');
  }
  public set sflowOptionsOutputIfindex(value: string) {
    this._sflowOptionsOutputIfindex = value;
  }
  public resetSflowOptionsOutputIfindex() {
    this._sflowOptionsOutputIfindex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowOptionsOutputIfindexInput() {
    return this._sflowOptionsOutputIfindex;
  }

  // sflow_options_sample_header_size - computed: false, optional: true, required: false
  private _sflowOptionsSampleHeaderSize?: number; 
  public get sflowOptionsSampleHeaderSize() {
    return this.getNumberAttribute('sflow_options_sample_header_size');
  }
  public set sflowOptionsSampleHeaderSize(value: number) {
    this._sflowOptionsSampleHeaderSize = value;
  }
  public resetSflowOptionsSampleHeaderSize() {
    this._sflowOptionsSampleHeaderSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowOptionsSampleHeaderSizeInput() {
    return this._sflowOptionsSampleHeaderSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_entries: cdktf.numberToTerraform(this._cacheEntries),
      cache_immediate: cdktf.booleanToTerraform(this._cacheImmediate),
      cache_permanent: cdktf.booleanToTerraform(this._cachePermanent),
      cache_timeout_active: cdktf.numberToTerraform(this._cacheTimeoutActive),
      cache_timeout_inactive: cdktf.numberToTerraform(this._cacheTimeoutInactive),
      cache_timeout_rate_limit: cdktf.numberToTerraform(this._cacheTimeoutRateLimit),
      cache_timeout_update: cdktf.numberToTerraform(this._cacheTimeoutUpdate),
      device: cdktf.stringToTerraform(this._device),
      exporters: cdktf.listMapper(flowMonitorMapExportersToTerraform, false)(this._exporters.internalValue),
      hw_cache_timeout_inactive: cdktf.numberToTerraform(this._hwCacheTimeoutInactive),
      name: cdktf.stringToTerraform(this._name),
      option_bgpattr: cdktf.booleanToTerraform(this._optionBgpattr),
      option_filtered: cdktf.booleanToTerraform(this._optionFiltered),
      option_outbundlemember: cdktf.booleanToTerraform(this._optionOutbundlemember),
      option_outphysint: cdktf.booleanToTerraform(this._optionOutphysint),
      record_datalink_record: cdktf.booleanToTerraform(this._recordDatalinkRecord),
      record_default_mdi: cdktf.booleanToTerraform(this._recordDefaultMdi),
      record_default_rtp: cdktf.booleanToTerraform(this._recordDefaultRtp),
      record_ipv4: cdktf.booleanToTerraform(this._recordIpv4),
      record_ipv4_as: cdktf.booleanToTerraform(this._recordIpv4As),
      record_ipv4_as_tos: cdktf.booleanToTerraform(this._recordIpv4AsTos),
      record_ipv4_bgp_nexthop_tos: cdktf.booleanToTerraform(this._recordIpv4BgpNexthopTos),
      record_ipv4_destination: cdktf.booleanToTerraform(this._recordIpv4Destination),
      record_ipv4_destination_prefix: cdktf.booleanToTerraform(this._recordIpv4DestinationPrefix),
      record_ipv4_destination_prefix_tos: cdktf.booleanToTerraform(this._recordIpv4DestinationPrefixTos),
      record_ipv4_destination_tos: cdktf.booleanToTerraform(this._recordIpv4DestinationTos),
      record_ipv4_extended: cdktf.booleanToTerraform(this._recordIpv4Extended),
      record_ipv4_gtp: cdktf.booleanToTerraform(this._recordIpv4Gtp),
      record_ipv4_l2_l3: cdktf.booleanToTerraform(this._recordIpv4L2L3),
      record_ipv4_peer_as: cdktf.booleanToTerraform(this._recordIpv4PeerAs),
      record_ipv4_prefix: cdktf.booleanToTerraform(this._recordIpv4Prefix),
      record_ipv4_prefix_port: cdktf.booleanToTerraform(this._recordIpv4PrefixPort),
      record_ipv4_prefix_tos: cdktf.booleanToTerraform(this._recordIpv4PrefixTos),
      record_ipv4_protocol_port: cdktf.booleanToTerraform(this._recordIpv4ProtocolPort),
      record_ipv4_protocol_port_tos: cdktf.booleanToTerraform(this._recordIpv4ProtocolPortTos),
      record_ipv4_source_prefix: cdktf.booleanToTerraform(this._recordIpv4SourcePrefix),
      record_ipv4_source_prefix_tos: cdktf.booleanToTerraform(this._recordIpv4SourcePrefixTos),
      record_ipv6: cdktf.booleanToTerraform(this._recordIpv6),
      record_ipv6_destination: cdktf.booleanToTerraform(this._recordIpv6Destination),
      record_ipv6_extended: cdktf.booleanToTerraform(this._recordIpv6Extended),
      record_ipv6_gtp: cdktf.booleanToTerraform(this._recordIpv6Gtp),
      record_ipv6_l2_l3: cdktf.booleanToTerraform(this._recordIpv6L2L3),
      record_ipv6_peer_as: cdktf.booleanToTerraform(this._recordIpv6PeerAs),
      record_ipv6_srv6: cdktf.booleanToTerraform(this._recordIpv6Srv6),
      record_map_t: cdktf.booleanToTerraform(this._recordMapT),
      record_mpls: cdktf.booleanToTerraform(this._recordMpls),
      record_mpls_ipv4_fields: cdktf.booleanToTerraform(this._recordMplsIpv4Fields),
      record_mpls_ipv4_ipv6_fields: cdktf.booleanToTerraform(this._recordMplsIpv4Ipv6Fields),
      record_mpls_ipv6_fields: cdktf.booleanToTerraform(this._recordMplsIpv6Fields),
      record_mpls_labels: cdktf.numberToTerraform(this._recordMplsLabels),
      record_sflow: cdktf.booleanToTerraform(this._recordSflow),
      sflow_options: cdktf.booleanToTerraform(this._sflowOptions),
      sflow_options_extended_gateway: cdktf.booleanToTerraform(this._sflowOptionsExtendedGateway),
      sflow_options_extended_ipv4_tunnel_egress: cdktf.booleanToTerraform(this._sflowOptionsExtendedIpv4TunnelEgress),
      sflow_options_extended_ipv6_tunnel_egress: cdktf.booleanToTerraform(this._sflowOptionsExtendedIpv6TunnelEgress),
      sflow_options_extended_router: cdktf.booleanToTerraform(this._sflowOptionsExtendedRouter),
      sflow_options_if_counters_polling_interval: cdktf.numberToTerraform(this._sflowOptionsIfCountersPollingInterval),
      sflow_options_input_ifindex: cdktf.stringToTerraform(this._sflowOptionsInputIfindex),
      sflow_options_output_ifindex: cdktf.stringToTerraform(this._sflowOptionsOutputIfindex),
      sflow_options_sample_header_size: cdktf.numberToTerraform(this._sflowOptionsSampleHeaderSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_entries: {
        value: cdktf.numberToHclTerraform(this._cacheEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_immediate: {
        value: cdktf.booleanToHclTerraform(this._cacheImmediate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_permanent: {
        value: cdktf.booleanToHclTerraform(this._cachePermanent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_timeout_active: {
        value: cdktf.numberToHclTerraform(this._cacheTimeoutActive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_timeout_inactive: {
        value: cdktf.numberToHclTerraform(this._cacheTimeoutInactive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_timeout_rate_limit: {
        value: cdktf.numberToHclTerraform(this._cacheTimeoutRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_timeout_update: {
        value: cdktf.numberToHclTerraform(this._cacheTimeoutUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exporters: {
        value: cdktf.listMapperHcl(flowMonitorMapExportersToHclTerraform, false)(this._exporters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlowMonitorMapExportersList",
      },
      hw_cache_timeout_inactive: {
        value: cdktf.numberToHclTerraform(this._hwCacheTimeoutInactive),
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
      option_bgpattr: {
        value: cdktf.booleanToHclTerraform(this._optionBgpattr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      option_filtered: {
        value: cdktf.booleanToHclTerraform(this._optionFiltered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      option_outbundlemember: {
        value: cdktf.booleanToHclTerraform(this._optionOutbundlemember),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      option_outphysint: {
        value: cdktf.booleanToHclTerraform(this._optionOutphysint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_datalink_record: {
        value: cdktf.booleanToHclTerraform(this._recordDatalinkRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_default_mdi: {
        value: cdktf.booleanToHclTerraform(this._recordDefaultMdi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_default_rtp: {
        value: cdktf.booleanToHclTerraform(this._recordDefaultRtp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_as: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4As),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_as_tos: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4AsTos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_bgp_nexthop_tos: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4BgpNexthopTos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_destination: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4Destination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_destination_prefix: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4DestinationPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_destination_prefix_tos: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4DestinationPrefixTos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_destination_tos: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4DestinationTos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_extended: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4Extended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_gtp: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4Gtp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_l2_l3: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4L2L3),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_peer_as: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4PeerAs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_prefix: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_prefix_port: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4PrefixPort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_prefix_tos: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4PrefixTos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_protocol_port: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4ProtocolPort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_protocol_port_tos: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4ProtocolPortTos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_source_prefix: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4SourcePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv4_source_prefix_tos: {
        value: cdktf.booleanToHclTerraform(this._recordIpv4SourcePrefixTos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv6: {
        value: cdktf.booleanToHclTerraform(this._recordIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv6_destination: {
        value: cdktf.booleanToHclTerraform(this._recordIpv6Destination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv6_extended: {
        value: cdktf.booleanToHclTerraform(this._recordIpv6Extended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv6_gtp: {
        value: cdktf.booleanToHclTerraform(this._recordIpv6Gtp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv6_l2_l3: {
        value: cdktf.booleanToHclTerraform(this._recordIpv6L2L3),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv6_peer_as: {
        value: cdktf.booleanToHclTerraform(this._recordIpv6PeerAs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_ipv6_srv6: {
        value: cdktf.booleanToHclTerraform(this._recordIpv6Srv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_map_t: {
        value: cdktf.booleanToHclTerraform(this._recordMapT),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_mpls: {
        value: cdktf.booleanToHclTerraform(this._recordMpls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_mpls_ipv4_fields: {
        value: cdktf.booleanToHclTerraform(this._recordMplsIpv4Fields),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_mpls_ipv4_ipv6_fields: {
        value: cdktf.booleanToHclTerraform(this._recordMplsIpv4Ipv6Fields),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_mpls_ipv6_fields: {
        value: cdktf.booleanToHclTerraform(this._recordMplsIpv6Fields),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_mpls_labels: {
        value: cdktf.numberToHclTerraform(this._recordMplsLabels),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_sflow: {
        value: cdktf.booleanToHclTerraform(this._recordSflow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sflow_options: {
        value: cdktf.booleanToHclTerraform(this._sflowOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sflow_options_extended_gateway: {
        value: cdktf.booleanToHclTerraform(this._sflowOptionsExtendedGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sflow_options_extended_ipv4_tunnel_egress: {
        value: cdktf.booleanToHclTerraform(this._sflowOptionsExtendedIpv4TunnelEgress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sflow_options_extended_ipv6_tunnel_egress: {
        value: cdktf.booleanToHclTerraform(this._sflowOptionsExtendedIpv6TunnelEgress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sflow_options_extended_router: {
        value: cdktf.booleanToHclTerraform(this._sflowOptionsExtendedRouter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sflow_options_if_counters_polling_interval: {
        value: cdktf.numberToHclTerraform(this._sflowOptionsIfCountersPollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sflow_options_input_ifindex: {
        value: cdktf.stringToHclTerraform(this._sflowOptionsInputIfindex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sflow_options_output_ifindex: {
        value: cdktf.stringToHclTerraform(this._sflowOptionsOutputIfindex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sflow_options_sample_header_size: {
        value: cdktf.numberToHclTerraform(this._sflowOptionsSampleHeaderSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
