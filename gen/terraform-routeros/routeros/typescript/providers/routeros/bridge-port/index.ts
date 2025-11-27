// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BridgePortConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#___path___ BridgePort#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#___skip___ BridgePort#___skip___}
  */
  readonly skip?: string;
  /**
  * When enabled, prevents a port moving from discarding into forwarding state if no BPDUs are received from the neighboring bridge. The port will change into a forwarding state only when a BPDU is received. This property only has an effect when protocol-mode is set to rstp or mstp and edge is set to no.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#auto_isolate BridgePort#auto_isolate}
  */
  readonly autoIsolate?: boolean | cdktf.IResolvable;
  /**
  * This property has no effect when protocol-mode is set to none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#bpdu_guard BridgePort#bpdu_guard}
  */
  readonly bpduGuard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#bridge BridgePort#bridge}
  */
  readonly bridge: string;
  /**
  * When enabled, bridge floods broadcast traffic to all bridge egress ports. When disabled, drops broadcast traffic on egress ports. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#broadcast_flood BridgePort#broadcast_flood}
  */
  readonly broadcastFlood?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#comment BridgePort#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#disabled BridgePort#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Set port as edge port or non-edge port, or enable edge discovery. Edge ports are connected to a LAN that has no other bridges attached. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#edge BridgePort#edge}
  */
  readonly edge?: string;
  /**
  * Enables IGMP Fast leave feature on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#fast_leave BridgePort#fast_leave}
  */
  readonly fastLeave?: boolean | cdktf.IResolvable;
  /**
  * Specifies allowed ingress frame types on a bridge port. This property only has effect when vlan-filtering is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#frame_types BridgePort#frame_types}
  */
  readonly frameTypes?: string;
  /**
  * Use split horizon bridging to prevent bridging loops. Set the same value for group of ports, to prevent them from sending data to ports with the same horizon value. Split horizon is a software feature that disables hardware offloading. This value is integer '0'..'429496729' or 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#horizon BridgePort#horizon}
  */
  readonly horizon?: string;
  /**
  * Enable or disable Hardware Offloading of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#hw BridgePort#hw}
  */
  readonly hw?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#id BridgePort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enables or disables VLAN ingress filtering, which checks if the ingress port is a member of the received VLAN ID in the bridge VLAN table. Should be used with frame-types to specify if the ingress traffic should be tagged or untagged. This property only has effect when vlan-filtering is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#ingress_filtering BridgePort#ingress_filtering}
  */
  readonly ingressFiltering?: boolean | cdktf.IResolvable;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#interface BridgePort#interface}
  */
  readonly interface: string;
  /**
  * Path cost to the interface for MSTI0 inside a region. This property only has effect when protocol-mode is set to mstp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#internal_path_cost BridgePort#internal_path_cost}
  */
  readonly internalPathCost?: number;
  /**
  * Changes MAC learning behaviour on a bridge port 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#learn BridgePort#learn}
  */
  readonly learn?: string;
  /**
  * Changes the state of a bridge port whether IGMP membership reports are going to be forwarded to this port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#multicast_router BridgePort#multicast_router}
  */
  readonly multicastRouter?: string;
  /**
  * MVRP applicant options (available since RouterOS 7.15): - non-participant - port does not send any MRP messages; - normal-participant - port participates normally in MRP exchanges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#mvrp_applicant_state BridgePort#mvrp_applicant_state}
  */
  readonly mvrpApplicantState?: string;
  /**
  * MVRP registrar options (available since RouterOS 7.15): - fixed - port ignores all MRP messages, and remains Registered (IN) in all configured vlans. - normal - port receives MRP messages and handles them according to the standard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#mvrp_registrar_state BridgePort#mvrp_registrar_state}
  */
  readonly mvrpRegistrarState?: string;
  /**
  * Path cost to the interface, used by STP to determine the "best" path, used by MSTP todetermine "best" path between regions. This property has no effect when protocol-mode is set to none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#path_cost BridgePort#path_cost}
  */
  readonly pathCost?: string;
  /**
  * Specifies if a bridge port is connected to a bridge using a point-to-point link for faster convergence in case of failure. This property has no effect when protocol-mode is set to none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#point_to_point BridgePort#point_to_point}
  */
  readonly pointToPoint?: string;
  /**
  * The priority of the interface, used by STP to determine the root port, used by MSTP to determine root port between regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#priority BridgePort#priority}
  */
  readonly priority?: string;
  /**
  * ort VLAN ID (pvid) specifies which VLAN the untagged ingress traffic is assigned to. This property only has effect when vlan-filtering is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#pvid BridgePort#pvid}
  */
  readonly pvid?: number;
  /**
  * Enable the restricted role on a port, used by STP to forbid a port becoming a root port. This property only has effect when protocol-mode is set to mstp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#restricted_role BridgePort#restricted_role}
  */
  readonly restrictedRole?: boolean | cdktf.IResolvable;
  /**
  * Disable topology change notification (TCN) sending on a port, used by STP to forbid network topology changes to propagate. This property only has effect when protocol-mode is set to mstp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#restricted_tcn BridgePort#restricted_tcn}
  */
  readonly restrictedTcn?: boolean | cdktf.IResolvable;
  /**
  * Forces all packets to be treated as untagged packets. Packets on ingress port will be tagged with another VLAN tag regardless if a VLAN tag already exists, packets will be tagged with a VLAN ID that matches the pvid value and will use EtherType that is specified in ether-type. This property only has effect when vlan-filtering is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#tag_stacking BridgePort#tag_stacking}
  */
  readonly tagStacking?: boolean | cdktf.IResolvable;
  /**
  * When enabled, it allows to forward DHCP packets towards DHCP server through this port. Mainly used to limit unauthorized servers to provide malicious information for users. This property only has effect when dhcp-snooping is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#trusted BridgePort#trusted}
  */
  readonly trusted?: boolean | cdktf.IResolvable;
  /**
  * When enabled, bridge floods unknown multicast traffic to all bridge egress ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#unknown_multicast_flood BridgePort#unknown_multicast_flood}
  */
  readonly unknownMulticastFlood?: boolean | cdktf.IResolvable;
  /**
  * When enabled, bridge floods unknown unicast traffic to all bridge egress ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#unknown_unicast_flood BridgePort#unknown_unicast_flood}
  */
  readonly unknownUnicastFlood?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port routeros_bridge_port}
*/
export class BridgePort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_bridge_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BridgePort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BridgePort to import
  * @param importFromId The id of the existing BridgePort that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BridgePort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_bridge_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/bridge_port routeros_bridge_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BridgePortConfig
  */
  public constructor(scope: Construct, id: string, config: BridgePortConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_bridge_port',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._skip = config.skip;
    this._autoIsolate = config.autoIsolate;
    this._bpduGuard = config.bpduGuard;
    this._bridge = config.bridge;
    this._broadcastFlood = config.broadcastFlood;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._edge = config.edge;
    this._fastLeave = config.fastLeave;
    this._frameTypes = config.frameTypes;
    this._horizon = config.horizon;
    this._hw = config.hw;
    this._id = config.id;
    this._ingressFiltering = config.ingressFiltering;
    this._interface = config.interface;
    this._internalPathCost = config.internalPathCost;
    this._learn = config.learn;
    this._multicastRouter = config.multicastRouter;
    this._mvrpApplicantState = config.mvrpApplicantState;
    this._mvrpRegistrarState = config.mvrpRegistrarState;
    this._pathCost = config.pathCost;
    this._pointToPoint = config.pointToPoint;
    this._priority = config.priority;
    this._pvid = config.pvid;
    this._restrictedRole = config.restrictedRole;
    this._restrictedTcn = config.restrictedTcn;
    this._tagStacking = config.tagStacking;
    this._trusted = config.trusted;
    this._unknownMulticastFlood = config.unknownMulticastFlood;
    this._unknownUnicastFlood = config.unknownUnicastFlood;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // auto_isolate - computed: false, optional: true, required: false
  private _autoIsolate?: boolean | cdktf.IResolvable; 
  public get autoIsolate() {
    return this.getBooleanAttribute('auto_isolate');
  }
  public set autoIsolate(value: boolean | cdktf.IResolvable) {
    this._autoIsolate = value;
  }
  public resetAutoIsolate() {
    this._autoIsolate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIsolateInput() {
    return this._autoIsolate;
  }

  // bpdu_guard - computed: false, optional: true, required: false
  private _bpduGuard?: boolean | cdktf.IResolvable; 
  public get bpduGuard() {
    return this.getBooleanAttribute('bpdu_guard');
  }
  public set bpduGuard(value: boolean | cdktf.IResolvable) {
    this._bpduGuard = value;
  }
  public resetBpduGuard() {
    this._bpduGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduGuardInput() {
    return this._bpduGuard;
  }

  // bridge - computed: false, optional: false, required: true
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // broadcast_flood - computed: false, optional: true, required: false
  private _broadcastFlood?: boolean | cdktf.IResolvable; 
  public get broadcastFlood() {
    return this.getBooleanAttribute('broadcast_flood');
  }
  public set broadcastFlood(value: boolean | cdktf.IResolvable) {
    this._broadcastFlood = value;
  }
  public resetBroadcastFlood() {
    this._broadcastFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastFloodInput() {
    return this._broadcastFlood;
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

  // designated_bridge - computed: true, optional: false, required: false
  public get designatedBridge() {
    return this.getStringAttribute('designated_bridge');
  }

  // designated_bridge_id - computed: true, optional: false, required: false
  public get designatedBridgeId() {
    return this.getStringAttribute('designated_bridge_id');
  }

  // designated_cost - computed: true, optional: false, required: false
  public get designatedCost() {
    return this.getStringAttribute('designated_cost');
  }

  // designated_port_id - computed: true, optional: false, required: false
  public get designatedPortId() {
    return this.getStringAttribute('designated_port_id');
  }

  // designated_port_number - computed: true, optional: false, required: false
  public get designatedPortNumber() {
    return this.getNumberAttribute('designated_port_number');
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

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // edge - computed: false, optional: true, required: false
  private _edge?: string; 
  public get edge() {
    return this.getStringAttribute('edge');
  }
  public set edge(value: string) {
    this._edge = value;
  }
  public resetEdge() {
    this._edge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeInput() {
    return this._edge;
  }

  // edge_port - computed: true, optional: false, required: false
  public get edgePort() {
    return this.getBooleanAttribute('edge_port');
  }

  // edge_port_discovery - computed: true, optional: false, required: false
  public get edgePortDiscovery() {
    return this.getBooleanAttribute('edge_port_discovery');
  }

  // external_fdb_status - computed: true, optional: false, required: false
  public get externalFdbStatus() {
    return this.getBooleanAttribute('external_fdb_status');
  }

  // fast_leave - computed: false, optional: true, required: false
  private _fastLeave?: boolean | cdktf.IResolvable; 
  public get fastLeave() {
    return this.getBooleanAttribute('fast_leave');
  }
  public set fastLeave(value: boolean | cdktf.IResolvable) {
    this._fastLeave = value;
  }
  public resetFastLeave() {
    this._fastLeave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastLeaveInput() {
    return this._fastLeave;
  }

  // forwarding - computed: true, optional: false, required: false
  public get forwarding() {
    return this.getBooleanAttribute('forwarding');
  }

  // frame_types - computed: false, optional: true, required: false
  private _frameTypes?: string; 
  public get frameTypes() {
    return this.getStringAttribute('frame_types');
  }
  public set frameTypes(value: string) {
    this._frameTypes = value;
  }
  public resetFrameTypes() {
    this._frameTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameTypesInput() {
    return this._frameTypes;
  }

  // horizon - computed: false, optional: true, required: false
  private _horizon?: string; 
  public get horizon() {
    return this.getStringAttribute('horizon');
  }
  public set horizon(value: string) {
    this._horizon = value;
  }
  public resetHorizon() {
    this._horizon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizonInput() {
    return this._horizon;
  }

  // hw - computed: true, optional: true, required: false
  private _hw?: boolean | cdktf.IResolvable; 
  public get hw() {
    return this.getBooleanAttribute('hw');
  }
  public set hw(value: boolean | cdktf.IResolvable) {
    this._hw = value;
  }
  public resetHw() {
    this._hw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwInput() {
    return this._hw;
  }

  // hw_offload - computed: true, optional: false, required: false
  public get hwOffload() {
    return this.getBooleanAttribute('hw_offload');
  }

  // hw_offload_group - computed: true, optional: false, required: false
  public get hwOffloadGroup() {
    return this.getStringAttribute('hw_offload_group');
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

  // inactive - computed: true, optional: false, required: false
  public get inactive() {
    return this.getBooleanAttribute('inactive');
  }

  // ingress_filtering - computed: true, optional: true, required: false
  private _ingressFiltering?: boolean | cdktf.IResolvable; 
  public get ingressFiltering() {
    return this.getBooleanAttribute('ingress_filtering');
  }
  public set ingressFiltering(value: boolean | cdktf.IResolvable) {
    this._ingressFiltering = value;
  }
  public resetIngressFiltering() {
    this._ingressFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressFilteringInput() {
    return this._ingressFiltering;
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // internal_path_cost - computed: false, optional: true, required: false
  private _internalPathCost?: number; 
  public get internalPathCost() {
    return this.getNumberAttribute('internal_path_cost');
  }
  public set internalPathCost(value: number) {
    this._internalPathCost = value;
  }
  public resetInternalPathCost() {
    this._internalPathCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalPathCostInput() {
    return this._internalPathCost;
  }

  // last_topology_change - computed: true, optional: false, required: false
  public get lastTopologyChange() {
    return this.getStringAttribute('last_topology_change');
  }

  // learn - computed: false, optional: true, required: false
  private _learn?: string; 
  public get learn() {
    return this.getStringAttribute('learn');
  }
  public set learn(value: string) {
    this._learn = value;
  }
  public resetLearn() {
    this._learn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnInput() {
    return this._learn;
  }

  // learning - computed: true, optional: false, required: false
  public get learning() {
    return this.getBooleanAttribute('learning');
  }

  // multicast_router - computed: false, optional: true, required: false
  private _multicastRouter?: string; 
  public get multicastRouter() {
    return this.getStringAttribute('multicast_router');
  }
  public set multicastRouter(value: string) {
    this._multicastRouter = value;
  }
  public resetMulticastRouter() {
    this._multicastRouter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastRouterInput() {
    return this._multicastRouter;
  }

  // mvrp_applicant_state - computed: false, optional: true, required: false
  private _mvrpApplicantState?: string; 
  public get mvrpApplicantState() {
    return this.getStringAttribute('mvrp_applicant_state');
  }
  public set mvrpApplicantState(value: string) {
    this._mvrpApplicantState = value;
  }
  public resetMvrpApplicantState() {
    this._mvrpApplicantState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mvrpApplicantStateInput() {
    return this._mvrpApplicantState;
  }

  // mvrp_registrar_state - computed: false, optional: true, required: false
  private _mvrpRegistrarState?: string; 
  public get mvrpRegistrarState() {
    return this.getStringAttribute('mvrp_registrar_state');
  }
  public set mvrpRegistrarState(value: string) {
    this._mvrpRegistrarState = value;
  }
  public resetMvrpRegistrarState() {
    this._mvrpRegistrarState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mvrpRegistrarStateInput() {
    return this._mvrpRegistrarState;
  }

  // nextid - computed: true, optional: false, required: false
  public get nextid() {
    return this.getStringAttribute('nextid');
  }

  // path_cost - computed: false, optional: true, required: false
  private _pathCost?: string; 
  public get pathCost() {
    return this.getStringAttribute('path_cost');
  }
  public set pathCost(value: string) {
    this._pathCost = value;
  }
  public resetPathCost() {
    this._pathCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathCostInput() {
    return this._pathCost;
  }

  // point_to_point - computed: false, optional: true, required: false
  private _pointToPoint?: string; 
  public get pointToPoint() {
    return this.getStringAttribute('point_to_point');
  }
  public set pointToPoint(value: string) {
    this._pointToPoint = value;
  }
  public resetPointToPoint() {
    this._pointToPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointToPointInput() {
    return this._pointToPoint;
  }

  // point_to_point_port - computed: true, optional: false, required: false
  public get pointToPointPort() {
    return this.getBooleanAttribute('point_to_point_port');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // pvid - computed: false, optional: true, required: false
  private _pvid?: number; 
  public get pvid() {
    return this.getNumberAttribute('pvid');
  }
  public set pvid(value: number) {
    this._pvid = value;
  }
  public resetPvid() {
    this._pvid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvidInput() {
    return this._pvid;
  }

  // restricted_role - computed: false, optional: true, required: false
  private _restrictedRole?: boolean | cdktf.IResolvable; 
  public get restrictedRole() {
    return this.getBooleanAttribute('restricted_role');
  }
  public set restrictedRole(value: boolean | cdktf.IResolvable) {
    this._restrictedRole = value;
  }
  public resetRestrictedRole() {
    this._restrictedRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedRoleInput() {
    return this._restrictedRole;
  }

  // restricted_tcn - computed: false, optional: true, required: false
  private _restrictedTcn?: boolean | cdktf.IResolvable; 
  public get restrictedTcn() {
    return this.getBooleanAttribute('restricted_tcn');
  }
  public set restrictedTcn(value: boolean | cdktf.IResolvable) {
    this._restrictedTcn = value;
  }
  public resetRestrictedTcn() {
    this._restrictedTcn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedTcnInput() {
    return this._restrictedTcn;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // root_path_cost - computed: true, optional: false, required: false
  public get rootPathCost() {
    return this.getNumberAttribute('root_path_cost');
  }

  // sending_rstp - computed: true, optional: false, required: false
  public get sendingRstp() {
    return this.getStringAttribute('sending_rstp');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag_stacking - computed: false, optional: true, required: false
  private _tagStacking?: boolean | cdktf.IResolvable; 
  public get tagStacking() {
    return this.getBooleanAttribute('tag_stacking');
  }
  public set tagStacking(value: boolean | cdktf.IResolvable) {
    this._tagStacking = value;
  }
  public resetTagStacking() {
    this._tagStacking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagStackingInput() {
    return this._tagStacking;
  }

  // trusted - computed: false, optional: true, required: false
  private _trusted?: boolean | cdktf.IResolvable; 
  public get trusted() {
    return this.getBooleanAttribute('trusted');
  }
  public set trusted(value: boolean | cdktf.IResolvable) {
    this._trusted = value;
  }
  public resetTrusted() {
    this._trusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedInput() {
    return this._trusted;
  }

  // unknown_multicast_flood - computed: false, optional: true, required: false
  private _unknownMulticastFlood?: boolean | cdktf.IResolvable; 
  public get unknownMulticastFlood() {
    return this.getBooleanAttribute('unknown_multicast_flood');
  }
  public set unknownMulticastFlood(value: boolean | cdktf.IResolvable) {
    this._unknownMulticastFlood = value;
  }
  public resetUnknownMulticastFlood() {
    this._unknownMulticastFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownMulticastFloodInput() {
    return this._unknownMulticastFlood;
  }

  // unknown_unicast_flood - computed: false, optional: true, required: false
  private _unknownUnicastFlood?: boolean | cdktf.IResolvable; 
  public get unknownUnicastFlood() {
    return this.getBooleanAttribute('unknown_unicast_flood');
  }
  public set unknownUnicastFlood(value: boolean | cdktf.IResolvable) {
    this._unknownUnicastFlood = value;
  }
  public resetUnknownUnicastFlood() {
    this._unknownUnicastFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownUnicastFloodInput() {
    return this._unknownUnicastFlood;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      auto_isolate: cdktf.booleanToTerraform(this._autoIsolate),
      bpdu_guard: cdktf.booleanToTerraform(this._bpduGuard),
      bridge: cdktf.stringToTerraform(this._bridge),
      broadcast_flood: cdktf.booleanToTerraform(this._broadcastFlood),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      edge: cdktf.stringToTerraform(this._edge),
      fast_leave: cdktf.booleanToTerraform(this._fastLeave),
      frame_types: cdktf.stringToTerraform(this._frameTypes),
      horizon: cdktf.stringToTerraform(this._horizon),
      hw: cdktf.booleanToTerraform(this._hw),
      id: cdktf.stringToTerraform(this._id),
      ingress_filtering: cdktf.booleanToTerraform(this._ingressFiltering),
      interface: cdktf.stringToTerraform(this._interface),
      internal_path_cost: cdktf.numberToTerraform(this._internalPathCost),
      learn: cdktf.stringToTerraform(this._learn),
      multicast_router: cdktf.stringToTerraform(this._multicastRouter),
      mvrp_applicant_state: cdktf.stringToTerraform(this._mvrpApplicantState),
      mvrp_registrar_state: cdktf.stringToTerraform(this._mvrpRegistrarState),
      path_cost: cdktf.stringToTerraform(this._pathCost),
      point_to_point: cdktf.stringToTerraform(this._pointToPoint),
      priority: cdktf.stringToTerraform(this._priority),
      pvid: cdktf.numberToTerraform(this._pvid),
      restricted_role: cdktf.booleanToTerraform(this._restrictedRole),
      restricted_tcn: cdktf.booleanToTerraform(this._restrictedTcn),
      tag_stacking: cdktf.booleanToTerraform(this._tagStacking),
      trusted: cdktf.booleanToTerraform(this._trusted),
      unknown_multicast_flood: cdktf.booleanToTerraform(this._unknownMulticastFlood),
      unknown_unicast_flood: cdktf.booleanToTerraform(this._unknownUnicastFlood),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_isolate: {
        value: cdktf.booleanToHclTerraform(this._autoIsolate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bpdu_guard: {
        value: cdktf.booleanToHclTerraform(this._bpduGuard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bridge: {
        value: cdktf.stringToHclTerraform(this._bridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      broadcast_flood: {
        value: cdktf.booleanToHclTerraform(this._broadcastFlood),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edge: {
        value: cdktf.stringToHclTerraform(this._edge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_leave: {
        value: cdktf.booleanToHclTerraform(this._fastLeave),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frame_types: {
        value: cdktf.stringToHclTerraform(this._frameTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      horizon: {
        value: cdktf.stringToHclTerraform(this._horizon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hw: {
        value: cdktf.booleanToHclTerraform(this._hw),
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
      ingress_filtering: {
        value: cdktf.booleanToHclTerraform(this._ingressFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_path_cost: {
        value: cdktf.numberToHclTerraform(this._internalPathCost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      learn: {
        value: cdktf.stringToHclTerraform(this._learn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_router: {
        value: cdktf.stringToHclTerraform(this._multicastRouter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mvrp_applicant_state: {
        value: cdktf.stringToHclTerraform(this._mvrpApplicantState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mvrp_registrar_state: {
        value: cdktf.stringToHclTerraform(this._mvrpRegistrarState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_cost: {
        value: cdktf.stringToHclTerraform(this._pathCost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      point_to_point: {
        value: cdktf.stringToHclTerraform(this._pointToPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pvid: {
        value: cdktf.numberToHclTerraform(this._pvid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restricted_role: {
        value: cdktf.booleanToHclTerraform(this._restrictedRole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restricted_tcn: {
        value: cdktf.booleanToHclTerraform(this._restrictedTcn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_stacking: {
        value: cdktf.booleanToHclTerraform(this._tagStacking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trusted: {
        value: cdktf.booleanToHclTerraform(this._trusted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unknown_multicast_flood: {
        value: cdktf.booleanToHclTerraform(this._unknownMulticastFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unknown_unicast_flood: {
        value: cdktf.booleanToHclTerraform(this._unknownUnicastFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
