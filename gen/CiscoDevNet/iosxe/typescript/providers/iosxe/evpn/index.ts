// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EvpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Auto Anycast Gateway MAC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#anycast_gateway_mac_auto Evpn#anycast_gateway_mac_auto}
  */
  readonly anycastGatewayMacAuto?: boolean | cdktf.IResolvable;
  /**
  * Advertise Default Gateway MAC/IP routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#default_gateway_advertise Evpn#default_gateway_advertise}
  */
  readonly defaultGatewayAdvertise?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#delete_mode Evpn#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#device Evpn#device}
  */
  readonly device?: string;
  /**
  * Disable flooding suppression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#flooding_suppression_address_resolution_disable Evpn#flooding_suppression_address_resolution_disable}
  */
  readonly floodingSuppressionAddressResolutionDisable?: boolean | cdktf.IResolvable;
  /**
  * Number of IP moves within specified time interval
  *   - Range: `2`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#ip_duplication_limit Evpn#ip_duplication_limit}
  */
  readonly ipDuplicationLimit?: number;
  /**
  * IP duplication timer
  *   - Range: `10`-`36000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#ip_duplication_time Evpn#ip_duplication_time}
  */
  readonly ipDuplicationTime?: number;
  /**
  * Peer state transition logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#logging_peer_state Evpn#logging_peer_state}
  */
  readonly loggingPeerState?: boolean | cdktf.IResolvable;
  /**
  * Number of MAC moves within specified time interval
  *   - Range: `2`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#mac_duplication_limit Evpn#mac_duplication_limit}
  */
  readonly macDuplicationLimit?: number;
  /**
  * MAC duplication timer
  *   - Range: `10`-`36000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#mac_duplication_time Evpn#mac_duplication_time}
  */
  readonly macDuplicationTime?: number;
  /**
  * Enable and advertise L2 multicast capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#multicast_advertise Evpn#multicast_advertise}
  */
  readonly multicastAdvertise?: boolean | cdktf.IResolvable;
  /**
  * Ingress replication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#replication_type_ingress Evpn#replication_type_ingress}
  */
  readonly replicationTypeIngress?: boolean | cdktf.IResolvable;
  /**
  * mp2mp replication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#replication_type_mp2mp Evpn#replication_type_mp2mp}
  */
  readonly replicationTypeMp2Mp?: boolean | cdktf.IResolvable;
  /**
  * p2mp replication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#replication_type_p2mp Evpn#replication_type_p2mp}
  */
  readonly replicationTypeP2Mp?: boolean | cdktf.IResolvable;
  /**
  * Static replication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#replication_type_static Evpn#replication_type_static}
  */
  readonly replicationTypeStatic?: boolean | cdktf.IResolvable;
  /**
  * Set vni-based route-target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#route_target_auto_vni Evpn#route_target_auto_vni}
  */
  readonly routeTargetAutoVni?: boolean | cdktf.IResolvable;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#router_id_loopback Evpn#router_id_loopback}
  */
  readonly routerIdLoopback?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn iosxe_evpn}
*/
export class Evpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_evpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Evpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Evpn to import
  * @param importFromId The id of the existing Evpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Evpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_evpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/evpn iosxe_evpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EvpnConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EvpnConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_evpn',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anycastGatewayMacAuto = config.anycastGatewayMacAuto;
    this._defaultGatewayAdvertise = config.defaultGatewayAdvertise;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._floodingSuppressionAddressResolutionDisable = config.floodingSuppressionAddressResolutionDisable;
    this._ipDuplicationLimit = config.ipDuplicationLimit;
    this._ipDuplicationTime = config.ipDuplicationTime;
    this._loggingPeerState = config.loggingPeerState;
    this._macDuplicationLimit = config.macDuplicationLimit;
    this._macDuplicationTime = config.macDuplicationTime;
    this._multicastAdvertise = config.multicastAdvertise;
    this._replicationTypeIngress = config.replicationTypeIngress;
    this._replicationTypeMp2Mp = config.replicationTypeMp2Mp;
    this._replicationTypeP2Mp = config.replicationTypeP2Mp;
    this._replicationTypeStatic = config.replicationTypeStatic;
    this._routeTargetAutoVni = config.routeTargetAutoVni;
    this._routerIdLoopback = config.routerIdLoopback;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anycast_gateway_mac_auto - computed: false, optional: true, required: false
  private _anycastGatewayMacAuto?: boolean | cdktf.IResolvable; 
  public get anycastGatewayMacAuto() {
    return this.getBooleanAttribute('anycast_gateway_mac_auto');
  }
  public set anycastGatewayMacAuto(value: boolean | cdktf.IResolvable) {
    this._anycastGatewayMacAuto = value;
  }
  public resetAnycastGatewayMacAuto() {
    this._anycastGatewayMacAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastGatewayMacAutoInput() {
    return this._anycastGatewayMacAuto;
  }

  // default_gateway_advertise - computed: false, optional: true, required: false
  private _defaultGatewayAdvertise?: boolean | cdktf.IResolvable; 
  public get defaultGatewayAdvertise() {
    return this.getBooleanAttribute('default_gateway_advertise');
  }
  public set defaultGatewayAdvertise(value: boolean | cdktf.IResolvable) {
    this._defaultGatewayAdvertise = value;
  }
  public resetDefaultGatewayAdvertise() {
    this._defaultGatewayAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayAdvertiseInput() {
    return this._defaultGatewayAdvertise;
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

  // flooding_suppression_address_resolution_disable - computed: false, optional: true, required: false
  private _floodingSuppressionAddressResolutionDisable?: boolean | cdktf.IResolvable; 
  public get floodingSuppressionAddressResolutionDisable() {
    return this.getBooleanAttribute('flooding_suppression_address_resolution_disable');
  }
  public set floodingSuppressionAddressResolutionDisable(value: boolean | cdktf.IResolvable) {
    this._floodingSuppressionAddressResolutionDisable = value;
  }
  public resetFloodingSuppressionAddressResolutionDisable() {
    this._floodingSuppressionAddressResolutionDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodingSuppressionAddressResolutionDisableInput() {
    return this._floodingSuppressionAddressResolutionDisable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_duplication_limit - computed: false, optional: true, required: false
  private _ipDuplicationLimit?: number; 
  public get ipDuplicationLimit() {
    return this.getNumberAttribute('ip_duplication_limit');
  }
  public set ipDuplicationLimit(value: number) {
    this._ipDuplicationLimit = value;
  }
  public resetIpDuplicationLimit() {
    this._ipDuplicationLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDuplicationLimitInput() {
    return this._ipDuplicationLimit;
  }

  // ip_duplication_time - computed: false, optional: true, required: false
  private _ipDuplicationTime?: number; 
  public get ipDuplicationTime() {
    return this.getNumberAttribute('ip_duplication_time');
  }
  public set ipDuplicationTime(value: number) {
    this._ipDuplicationTime = value;
  }
  public resetIpDuplicationTime() {
    this._ipDuplicationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDuplicationTimeInput() {
    return this._ipDuplicationTime;
  }

  // logging_peer_state - computed: false, optional: true, required: false
  private _loggingPeerState?: boolean | cdktf.IResolvable; 
  public get loggingPeerState() {
    return this.getBooleanAttribute('logging_peer_state');
  }
  public set loggingPeerState(value: boolean | cdktf.IResolvable) {
    this._loggingPeerState = value;
  }
  public resetLoggingPeerState() {
    this._loggingPeerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingPeerStateInput() {
    return this._loggingPeerState;
  }

  // mac_duplication_limit - computed: false, optional: true, required: false
  private _macDuplicationLimit?: number; 
  public get macDuplicationLimit() {
    return this.getNumberAttribute('mac_duplication_limit');
  }
  public set macDuplicationLimit(value: number) {
    this._macDuplicationLimit = value;
  }
  public resetMacDuplicationLimit() {
    this._macDuplicationLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macDuplicationLimitInput() {
    return this._macDuplicationLimit;
  }

  // mac_duplication_time - computed: false, optional: true, required: false
  private _macDuplicationTime?: number; 
  public get macDuplicationTime() {
    return this.getNumberAttribute('mac_duplication_time');
  }
  public set macDuplicationTime(value: number) {
    this._macDuplicationTime = value;
  }
  public resetMacDuplicationTime() {
    this._macDuplicationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macDuplicationTimeInput() {
    return this._macDuplicationTime;
  }

  // multicast_advertise - computed: false, optional: true, required: false
  private _multicastAdvertise?: boolean | cdktf.IResolvable; 
  public get multicastAdvertise() {
    return this.getBooleanAttribute('multicast_advertise');
  }
  public set multicastAdvertise(value: boolean | cdktf.IResolvable) {
    this._multicastAdvertise = value;
  }
  public resetMulticastAdvertise() {
    this._multicastAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastAdvertiseInput() {
    return this._multicastAdvertise;
  }

  // replication_type_ingress - computed: false, optional: true, required: false
  private _replicationTypeIngress?: boolean | cdktf.IResolvable; 
  public get replicationTypeIngress() {
    return this.getBooleanAttribute('replication_type_ingress');
  }
  public set replicationTypeIngress(value: boolean | cdktf.IResolvable) {
    this._replicationTypeIngress = value;
  }
  public resetReplicationTypeIngress() {
    this._replicationTypeIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTypeIngressInput() {
    return this._replicationTypeIngress;
  }

  // replication_type_mp2mp - computed: false, optional: true, required: false
  private _replicationTypeMp2Mp?: boolean | cdktf.IResolvable; 
  public get replicationTypeMp2Mp() {
    return this.getBooleanAttribute('replication_type_mp2mp');
  }
  public set replicationTypeMp2Mp(value: boolean | cdktf.IResolvable) {
    this._replicationTypeMp2Mp = value;
  }
  public resetReplicationTypeMp2Mp() {
    this._replicationTypeMp2Mp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTypeMp2MpInput() {
    return this._replicationTypeMp2Mp;
  }

  // replication_type_p2mp - computed: false, optional: true, required: false
  private _replicationTypeP2Mp?: boolean | cdktf.IResolvable; 
  public get replicationTypeP2Mp() {
    return this.getBooleanAttribute('replication_type_p2mp');
  }
  public set replicationTypeP2Mp(value: boolean | cdktf.IResolvable) {
    this._replicationTypeP2Mp = value;
  }
  public resetReplicationTypeP2Mp() {
    this._replicationTypeP2Mp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTypeP2MpInput() {
    return this._replicationTypeP2Mp;
  }

  // replication_type_static - computed: false, optional: true, required: false
  private _replicationTypeStatic?: boolean | cdktf.IResolvable; 
  public get replicationTypeStatic() {
    return this.getBooleanAttribute('replication_type_static');
  }
  public set replicationTypeStatic(value: boolean | cdktf.IResolvable) {
    this._replicationTypeStatic = value;
  }
  public resetReplicationTypeStatic() {
    this._replicationTypeStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTypeStaticInput() {
    return this._replicationTypeStatic;
  }

  // route_target_auto_vni - computed: false, optional: true, required: false
  private _routeTargetAutoVni?: boolean | cdktf.IResolvable; 
  public get routeTargetAutoVni() {
    return this.getBooleanAttribute('route_target_auto_vni');
  }
  public set routeTargetAutoVni(value: boolean | cdktf.IResolvable) {
    this._routeTargetAutoVni = value;
  }
  public resetRouteTargetAutoVni() {
    this._routeTargetAutoVni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetAutoVniInput() {
    return this._routeTargetAutoVni;
  }

  // router_id_loopback - computed: false, optional: true, required: false
  private _routerIdLoopback?: number; 
  public get routerIdLoopback() {
    return this.getNumberAttribute('router_id_loopback');
  }
  public set routerIdLoopback(value: number) {
    this._routerIdLoopback = value;
  }
  public resetRouterIdLoopback() {
    this._routerIdLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdLoopbackInput() {
    return this._routerIdLoopback;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anycast_gateway_mac_auto: cdktf.booleanToTerraform(this._anycastGatewayMacAuto),
      default_gateway_advertise: cdktf.booleanToTerraform(this._defaultGatewayAdvertise),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      flooding_suppression_address_resolution_disable: cdktf.booleanToTerraform(this._floodingSuppressionAddressResolutionDisable),
      ip_duplication_limit: cdktf.numberToTerraform(this._ipDuplicationLimit),
      ip_duplication_time: cdktf.numberToTerraform(this._ipDuplicationTime),
      logging_peer_state: cdktf.booleanToTerraform(this._loggingPeerState),
      mac_duplication_limit: cdktf.numberToTerraform(this._macDuplicationLimit),
      mac_duplication_time: cdktf.numberToTerraform(this._macDuplicationTime),
      multicast_advertise: cdktf.booleanToTerraform(this._multicastAdvertise),
      replication_type_ingress: cdktf.booleanToTerraform(this._replicationTypeIngress),
      replication_type_mp2mp: cdktf.booleanToTerraform(this._replicationTypeMp2Mp),
      replication_type_p2mp: cdktf.booleanToTerraform(this._replicationTypeP2Mp),
      replication_type_static: cdktf.booleanToTerraform(this._replicationTypeStatic),
      route_target_auto_vni: cdktf.booleanToTerraform(this._routeTargetAutoVni),
      router_id_loopback: cdktf.numberToTerraform(this._routerIdLoopback),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anycast_gateway_mac_auto: {
        value: cdktf.booleanToHclTerraform(this._anycastGatewayMacAuto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_gateway_advertise: {
        value: cdktf.booleanToHclTerraform(this._defaultGatewayAdvertise),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      flooding_suppression_address_resolution_disable: {
        value: cdktf.booleanToHclTerraform(this._floodingSuppressionAddressResolutionDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_duplication_limit: {
        value: cdktf.numberToHclTerraform(this._ipDuplicationLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_duplication_time: {
        value: cdktf.numberToHclTerraform(this._ipDuplicationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logging_peer_state: {
        value: cdktf.booleanToHclTerraform(this._loggingPeerState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mac_duplication_limit: {
        value: cdktf.numberToHclTerraform(this._macDuplicationLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_duplication_time: {
        value: cdktf.numberToHclTerraform(this._macDuplicationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multicast_advertise: {
        value: cdktf.booleanToHclTerraform(this._multicastAdvertise),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_type_ingress: {
        value: cdktf.booleanToHclTerraform(this._replicationTypeIngress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_type_mp2mp: {
        value: cdktf.booleanToHclTerraform(this._replicationTypeMp2Mp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_type_p2mp: {
        value: cdktf.booleanToHclTerraform(this._replicationTypeP2Mp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_type_static: {
        value: cdktf.booleanToHclTerraform(this._replicationTypeStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_target_auto_vni: {
        value: cdktf.booleanToHclTerraform(this._routeTargetAutoVni),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      router_id_loopback: {
        value: cdktf.numberToHclTerraform(this._routerIdLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
