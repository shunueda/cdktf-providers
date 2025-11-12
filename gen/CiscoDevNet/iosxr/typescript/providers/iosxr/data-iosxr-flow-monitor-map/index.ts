// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/flow_monitor_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrFlowMonitorMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/flow_monitor_map#device DataIosxrFlowMonitorMap#device}
  */
  readonly device?: string;
  /**
  * Monitor map name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/flow_monitor_map#name DataIosxrFlowMonitorMap#name}
  */
  readonly name: string;
}
export interface DataIosxrFlowMonitorMapExporters {
}

export function dataIosxrFlowMonitorMapExportersToTerraform(struct?: DataIosxrFlowMonitorMapExporters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrFlowMonitorMapExportersToHclTerraform(struct?: DataIosxrFlowMonitorMapExporters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrFlowMonitorMapExportersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrFlowMonitorMapExporters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrFlowMonitorMapExporters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxrFlowMonitorMapExportersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrFlowMonitorMapExportersOutputReference {
    return new DataIosxrFlowMonitorMapExportersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/flow_monitor_map iosxr_flow_monitor_map}
*/
export class DataIosxrFlowMonitorMap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_flow_monitor_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrFlowMonitorMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrFlowMonitorMap to import
  * @param importFromId The id of the existing DataIosxrFlowMonitorMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/flow_monitor_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrFlowMonitorMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_flow_monitor_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/flow_monitor_map iosxr_flow_monitor_map} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrFlowMonitorMapConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrFlowMonitorMapConfig) {
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
    this._device = config.device;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_entries - computed: true, optional: false, required: false
  public get cacheEntries() {
    return this.getNumberAttribute('cache_entries');
  }

  // cache_immediate - computed: true, optional: false, required: false
  public get cacheImmediate() {
    return this.getBooleanAttribute('cache_immediate');
  }

  // cache_permanent - computed: true, optional: false, required: false
  public get cachePermanent() {
    return this.getBooleanAttribute('cache_permanent');
  }

  // cache_timeout_active - computed: true, optional: false, required: false
  public get cacheTimeoutActive() {
    return this.getNumberAttribute('cache_timeout_active');
  }

  // cache_timeout_inactive - computed: true, optional: false, required: false
  public get cacheTimeoutInactive() {
    return this.getNumberAttribute('cache_timeout_inactive');
  }

  // cache_timeout_rate_limit - computed: true, optional: false, required: false
  public get cacheTimeoutRateLimit() {
    return this.getNumberAttribute('cache_timeout_rate_limit');
  }

  // cache_timeout_update - computed: true, optional: false, required: false
  public get cacheTimeoutUpdate() {
    return this.getNumberAttribute('cache_timeout_update');
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

  // exporters - computed: true, optional: false, required: false
  private _exporters = new DataIosxrFlowMonitorMapExportersList(this, "exporters", false);
  public get exporters() {
    return this._exporters;
  }

  // hw_cache_timeout_inactive - computed: true, optional: false, required: false
  public get hwCacheTimeoutInactive() {
    return this.getNumberAttribute('hw_cache_timeout_inactive');
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

  // option_bgpattr - computed: true, optional: false, required: false
  public get optionBgpattr() {
    return this.getBooleanAttribute('option_bgpattr');
  }

  // option_filtered - computed: true, optional: false, required: false
  public get optionFiltered() {
    return this.getBooleanAttribute('option_filtered');
  }

  // option_outbundlemember - computed: true, optional: false, required: false
  public get optionOutbundlemember() {
    return this.getBooleanAttribute('option_outbundlemember');
  }

  // option_outphysint - computed: true, optional: false, required: false
  public get optionOutphysint() {
    return this.getBooleanAttribute('option_outphysint');
  }

  // record_datalink_record - computed: true, optional: false, required: false
  public get recordDatalinkRecord() {
    return this.getBooleanAttribute('record_datalink_record');
  }

  // record_default_mdi - computed: true, optional: false, required: false
  public get recordDefaultMdi() {
    return this.getBooleanAttribute('record_default_mdi');
  }

  // record_default_rtp - computed: true, optional: false, required: false
  public get recordDefaultRtp() {
    return this.getBooleanAttribute('record_default_rtp');
  }

  // record_ipv4 - computed: true, optional: false, required: false
  public get recordIpv4() {
    return this.getBooleanAttribute('record_ipv4');
  }

  // record_ipv4_as - computed: true, optional: false, required: false
  public get recordIpv4As() {
    return this.getBooleanAttribute('record_ipv4_as');
  }

  // record_ipv4_as_tos - computed: true, optional: false, required: false
  public get recordIpv4AsTos() {
    return this.getBooleanAttribute('record_ipv4_as_tos');
  }

  // record_ipv4_bgp_nexthop_tos - computed: true, optional: false, required: false
  public get recordIpv4BgpNexthopTos() {
    return this.getBooleanAttribute('record_ipv4_bgp_nexthop_tos');
  }

  // record_ipv4_destination - computed: true, optional: false, required: false
  public get recordIpv4Destination() {
    return this.getBooleanAttribute('record_ipv4_destination');
  }

  // record_ipv4_destination_prefix - computed: true, optional: false, required: false
  public get recordIpv4DestinationPrefix() {
    return this.getBooleanAttribute('record_ipv4_destination_prefix');
  }

  // record_ipv4_destination_prefix_tos - computed: true, optional: false, required: false
  public get recordIpv4DestinationPrefixTos() {
    return this.getBooleanAttribute('record_ipv4_destination_prefix_tos');
  }

  // record_ipv4_destination_tos - computed: true, optional: false, required: false
  public get recordIpv4DestinationTos() {
    return this.getBooleanAttribute('record_ipv4_destination_tos');
  }

  // record_ipv4_extended - computed: true, optional: false, required: false
  public get recordIpv4Extended() {
    return this.getBooleanAttribute('record_ipv4_extended');
  }

  // record_ipv4_gtp - computed: true, optional: false, required: false
  public get recordIpv4Gtp() {
    return this.getBooleanAttribute('record_ipv4_gtp');
  }

  // record_ipv4_l2_l3 - computed: true, optional: false, required: false
  public get recordIpv4L2L3() {
    return this.getBooleanAttribute('record_ipv4_l2_l3');
  }

  // record_ipv4_peer_as - computed: true, optional: false, required: false
  public get recordIpv4PeerAs() {
    return this.getBooleanAttribute('record_ipv4_peer_as');
  }

  // record_ipv4_prefix - computed: true, optional: false, required: false
  public get recordIpv4Prefix() {
    return this.getBooleanAttribute('record_ipv4_prefix');
  }

  // record_ipv4_prefix_port - computed: true, optional: false, required: false
  public get recordIpv4PrefixPort() {
    return this.getBooleanAttribute('record_ipv4_prefix_port');
  }

  // record_ipv4_prefix_tos - computed: true, optional: false, required: false
  public get recordIpv4PrefixTos() {
    return this.getBooleanAttribute('record_ipv4_prefix_tos');
  }

  // record_ipv4_protocol_port - computed: true, optional: false, required: false
  public get recordIpv4ProtocolPort() {
    return this.getBooleanAttribute('record_ipv4_protocol_port');
  }

  // record_ipv4_protocol_port_tos - computed: true, optional: false, required: false
  public get recordIpv4ProtocolPortTos() {
    return this.getBooleanAttribute('record_ipv4_protocol_port_tos');
  }

  // record_ipv4_source_prefix - computed: true, optional: false, required: false
  public get recordIpv4SourcePrefix() {
    return this.getBooleanAttribute('record_ipv4_source_prefix');
  }

  // record_ipv4_source_prefix_tos - computed: true, optional: false, required: false
  public get recordIpv4SourcePrefixTos() {
    return this.getBooleanAttribute('record_ipv4_source_prefix_tos');
  }

  // record_ipv6 - computed: true, optional: false, required: false
  public get recordIpv6() {
    return this.getBooleanAttribute('record_ipv6');
  }

  // record_ipv6_destination - computed: true, optional: false, required: false
  public get recordIpv6Destination() {
    return this.getBooleanAttribute('record_ipv6_destination');
  }

  // record_ipv6_extended - computed: true, optional: false, required: false
  public get recordIpv6Extended() {
    return this.getBooleanAttribute('record_ipv6_extended');
  }

  // record_ipv6_gtp - computed: true, optional: false, required: false
  public get recordIpv6Gtp() {
    return this.getBooleanAttribute('record_ipv6_gtp');
  }

  // record_ipv6_l2_l3 - computed: true, optional: false, required: false
  public get recordIpv6L2L3() {
    return this.getBooleanAttribute('record_ipv6_l2_l3');
  }

  // record_ipv6_peer_as - computed: true, optional: false, required: false
  public get recordIpv6PeerAs() {
    return this.getBooleanAttribute('record_ipv6_peer_as');
  }

  // record_ipv6_srv6 - computed: true, optional: false, required: false
  public get recordIpv6Srv6() {
    return this.getBooleanAttribute('record_ipv6_srv6');
  }

  // record_map_t - computed: true, optional: false, required: false
  public get recordMapT() {
    return this.getBooleanAttribute('record_map_t');
  }

  // record_mpls - computed: true, optional: false, required: false
  public get recordMpls() {
    return this.getBooleanAttribute('record_mpls');
  }

  // record_mpls_ipv4_fields - computed: true, optional: false, required: false
  public get recordMplsIpv4Fields() {
    return this.getBooleanAttribute('record_mpls_ipv4_fields');
  }

  // record_mpls_ipv4_ipv6_fields - computed: true, optional: false, required: false
  public get recordMplsIpv4Ipv6Fields() {
    return this.getBooleanAttribute('record_mpls_ipv4_ipv6_fields');
  }

  // record_mpls_ipv6_fields - computed: true, optional: false, required: false
  public get recordMplsIpv6Fields() {
    return this.getBooleanAttribute('record_mpls_ipv6_fields');
  }

  // record_mpls_labels - computed: true, optional: false, required: false
  public get recordMplsLabels() {
    return this.getNumberAttribute('record_mpls_labels');
  }

  // record_sflow - computed: true, optional: false, required: false
  public get recordSflow() {
    return this.getBooleanAttribute('record_sflow');
  }

  // sflow_options - computed: true, optional: false, required: false
  public get sflowOptions() {
    return this.getBooleanAttribute('sflow_options');
  }

  // sflow_options_extended_gateway - computed: true, optional: false, required: false
  public get sflowOptionsExtendedGateway() {
    return this.getBooleanAttribute('sflow_options_extended_gateway');
  }

  // sflow_options_extended_ipv4_tunnel_egress - computed: true, optional: false, required: false
  public get sflowOptionsExtendedIpv4TunnelEgress() {
    return this.getBooleanAttribute('sflow_options_extended_ipv4_tunnel_egress');
  }

  // sflow_options_extended_ipv6_tunnel_egress - computed: true, optional: false, required: false
  public get sflowOptionsExtendedIpv6TunnelEgress() {
    return this.getBooleanAttribute('sflow_options_extended_ipv6_tunnel_egress');
  }

  // sflow_options_extended_router - computed: true, optional: false, required: false
  public get sflowOptionsExtendedRouter() {
    return this.getBooleanAttribute('sflow_options_extended_router');
  }

  // sflow_options_if_counters_polling_interval - computed: true, optional: false, required: false
  public get sflowOptionsIfCountersPollingInterval() {
    return this.getNumberAttribute('sflow_options_if_counters_polling_interval');
  }

  // sflow_options_input_ifindex - computed: true, optional: false, required: false
  public get sflowOptionsInputIfindex() {
    return this.getStringAttribute('sflow_options_input_ifindex');
  }

  // sflow_options_output_ifindex - computed: true, optional: false, required: false
  public get sflowOptionsOutputIfindex() {
    return this.getStringAttribute('sflow_options_output_ifindex');
  }

  // sflow_options_sample_header_size - computed: true, optional: false, required: false
  public get sflowOptionsSampleHeaderSize() {
    return this.getNumberAttribute('sflow_options_sample_header_size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
