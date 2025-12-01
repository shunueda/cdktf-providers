// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingOspfInterfaceTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#___path___ RoutingOspfInterfaceTemplate#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#___unset___ RoutingOspfInterfaceTemplate#___unset___}
  */
  readonly unset?: string;
  /**
  * The OSPF area to which the matching interface will be associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#area RoutingOspfInterfaceTemplate#area}
  */
  readonly area: string;
  /**
  * Specifies authentication method for OSPF protocol messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#auth RoutingOspfInterfaceTemplate#auth}
  */
  readonly auth?: string;
  /**
  * The key id is used to calculate message digest (used when MD5 or SHA authentication is enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#auth_id RoutingOspfInterfaceTemplate#auth_id}
  */
  readonly authId?: number;
  /**
  * The authentication key to be used, should match on all the neighbors of the network segment (available since RouterOS 7.x).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#auth_key RoutingOspfInterfaceTemplate#auth_key}
  */
  readonly authKey?: string;
  /**
  * The authentication key to be used, should match on all the neighbors of the network segment (for versions before RouterOS 7.x).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#authentication_key RoutingOspfInterfaceTemplate#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#comment RoutingOspfInterfaceTemplate#comment}
  */
  readonly comment?: string;
  /**
  * Interface cost expressed as link state metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#cost RoutingOspfInterfaceTemplate#cost}
  */
  readonly cost?: number;
  /**
  * Specifies the interval after which a neighbor is declared dead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#dead_interval RoutingOspfInterfaceTemplate#dead_interval}
  */
  readonly deadInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#disabled RoutingOspfInterfaceTemplate#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The interval between HELLO packets that the router sends out this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#hello_interval RoutingOspfInterfaceTemplate#hello_interval}
  */
  readonly helloInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#id RoutingOspfInterfaceTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface cost expressed as link state metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#instance_id RoutingOspfInterfaceTemplate#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Interfaces to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#interfaces RoutingOspfInterfaceTemplate#interfaces}
  */
  readonly interfaces?: string[];
  /**
  * The network prefixes associated with the area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#networks RoutingOspfInterfaceTemplate#networks}
  */
  readonly networks?: string[];
  /**
  * If enabled, then do not send or receive OSPF traffic on the matching interfaces. <em>The correct value of this attribute may not be displayed in Winbox. Please check the parameters in the console!</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#passive RoutingOspfInterfaceTemplate#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Name of the address list containing networks that should be advertised to the v3 interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#prefix_list RoutingOspfInterfaceTemplate#prefix_list}
  */
  readonly prefixList?: string;
  /**
  * Router's priority. Used to determine the designated router in a broadcast network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#priority RoutingOspfInterfaceTemplate#priority}
  */
  readonly priority?: number;
  /**
  * Time interval the lost link state advertisement will be resent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#retransmit_interval RoutingOspfInterfaceTemplate#retransmit_interval}
  */
  readonly retransmitInterval?: string;
  /**
  * Link-state transmit delay is the estimated time it takes to transmit a link-state update packet on the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#transmit_delay RoutingOspfInterfaceTemplate#transmit_delay}
  */
  readonly transmitDelay?: string;
  /**
  * The OSPF network type on this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#type RoutingOspfInterfaceTemplate#type}
  */
  readonly type?: string;
  /**
  * Whether to use the BFD protocol for faster connection state detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#use_bfd RoutingOspfInterfaceTemplate#use_bfd}
  */
  readonly useBfd?: boolean | cdktf.IResolvable;
  /**
  * Specifies the router-id of the neighbor which should be connected over the virtual link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#vlink_neighbor_id RoutingOspfInterfaceTemplate#vlink_neighbor_id}
  */
  readonly vlinkNeighborId?: string;
  /**
  * A non-backbone area the two routers have in common over which the virtual link will be established.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#vlink_transit_area RoutingOspfInterfaceTemplate#vlink_transit_area}
  */
  readonly vlinkTransitArea?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template routeros_routing_ospf_interface_template}
*/
export class RoutingOspfInterfaceTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_routing_ospf_interface_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingOspfInterfaceTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingOspfInterfaceTemplate to import
  * @param importFromId The id of the existing RoutingOspfInterfaceTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingOspfInterfaceTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_routing_ospf_interface_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_interface_template routeros_routing_ospf_interface_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingOspfInterfaceTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingOspfInterfaceTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_routing_ospf_interface_template',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
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
    this._unset = config.unset;
    this._area = config.area;
    this._auth = config.auth;
    this._authId = config.authId;
    this._authKey = config.authKey;
    this._authenticationKey = config.authenticationKey;
    this._comment = config.comment;
    this._cost = config.cost;
    this._deadInterval = config.deadInterval;
    this._disabled = config.disabled;
    this._helloInterval = config.helloInterval;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._interfaces = config.interfaces;
    this._networks = config.networks;
    this._passive = config.passive;
    this._prefixList = config.prefixList;
    this._priority = config.priority;
    this._retransmitInterval = config.retransmitInterval;
    this._transmitDelay = config.transmitDelay;
    this._type = config.type;
    this._useBfd = config.useBfd;
    this._vlinkNeighborId = config.vlinkNeighborId;
    this._vlinkTransitArea = config.vlinkTransitArea;
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

  // ___unset___ - computed: false, optional: true, required: false
  private _unset?: string; 
  public get unset() {
    return this.getStringAttribute('___unset___');
  }
  public set unset(value: string) {
    this._unset = value;
  }
  public resetUnset() {
    this._unset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsetInput() {
    return this._unset;
  }

  // area - computed: false, optional: false, required: true
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // auth_id - computed: false, optional: true, required: false
  private _authId?: number; 
  public get authId() {
    return this.getNumberAttribute('auth_id');
  }
  public set authId(value: number) {
    this._authId = value;
  }
  public resetAuthId() {
    this._authId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authIdInput() {
    return this._authId;
  }

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
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

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: string; 
  public get deadInterval() {
    return this.getStringAttribute('dead_interval');
  }
  public set deadInterval(value: string) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
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

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: string; 
  public get helloInterval() {
    return this.getStringAttribute('hello_interval');
  }
  public set helloInterval(value: string) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string[]; 
  public get interfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('interfaces'));
  }
  public set interfaces(value: string[]) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return cdktf.Fn.tolist(this.getListAttribute('networks'));
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // passive - computed: false, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: string; 
  public get retransmitInterval() {
    return this.getStringAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: string) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: string; 
  public get transmitDelay() {
    return this.getStringAttribute('transmit_delay');
  }
  public set transmitDelay(value: string) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
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

  // use_bfd - computed: false, optional: true, required: false
  private _useBfd?: boolean | cdktf.IResolvable; 
  public get useBfd() {
    return this.getBooleanAttribute('use_bfd');
  }
  public set useBfd(value: boolean | cdktf.IResolvable) {
    this._useBfd = value;
  }
  public resetUseBfd() {
    this._useBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBfdInput() {
    return this._useBfd;
  }

  // vlink_neighbor_id - computed: false, optional: true, required: false
  private _vlinkNeighborId?: string; 
  public get vlinkNeighborId() {
    return this.getStringAttribute('vlink_neighbor_id');
  }
  public set vlinkNeighborId(value: string) {
    this._vlinkNeighborId = value;
  }
  public resetVlinkNeighborId() {
    this._vlinkNeighborId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlinkNeighborIdInput() {
    return this._vlinkNeighborId;
  }

  // vlink_transit_area - computed: false, optional: true, required: false
  private _vlinkTransitArea?: string; 
  public get vlinkTransitArea() {
    return this.getStringAttribute('vlink_transit_area');
  }
  public set vlinkTransitArea(value: string) {
    this._vlinkTransitArea = value;
  }
  public resetVlinkTransitArea() {
    this._vlinkTransitArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlinkTransitAreaInput() {
    return this._vlinkTransitArea;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___unset___: cdktf.stringToTerraform(this._unset),
      area: cdktf.stringToTerraform(this._area),
      auth: cdktf.stringToTerraform(this._auth),
      auth_id: cdktf.numberToTerraform(this._authId),
      auth_key: cdktf.stringToTerraform(this._authKey),
      authentication_key: cdktf.stringToTerraform(this._authenticationKey),
      comment: cdktf.stringToTerraform(this._comment),
      cost: cdktf.numberToTerraform(this._cost),
      dead_interval: cdktf.stringToTerraform(this._deadInterval),
      disabled: cdktf.booleanToTerraform(this._disabled),
      hello_interval: cdktf.stringToTerraform(this._helloInterval),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfaces),
      networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networks),
      passive: cdktf.booleanToTerraform(this._passive),
      prefix_list: cdktf.stringToTerraform(this._prefixList),
      priority: cdktf.numberToTerraform(this._priority),
      retransmit_interval: cdktf.stringToTerraform(this._retransmitInterval),
      transmit_delay: cdktf.stringToTerraform(this._transmitDelay),
      type: cdktf.stringToTerraform(this._type),
      use_bfd: cdktf.booleanToTerraform(this._useBfd),
      vlink_neighbor_id: cdktf.stringToTerraform(this._vlinkNeighborId),
      vlink_transit_area: cdktf.stringToTerraform(this._vlinkTransitArea),
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
      ___unset___: {
        value: cdktf.stringToHclTerraform(this._unset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      area: {
        value: cdktf.stringToHclTerraform(this._area),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth: {
        value: cdktf.stringToHclTerraform(this._auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_id: {
        value: cdktf.numberToHclTerraform(this._authId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_key: {
        value: cdktf.stringToHclTerraform(this._authKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_key: {
        value: cdktf.stringToHclTerraform(this._authenticationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost: {
        value: cdktf.numberToHclTerraform(this._cost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dead_interval: {
        value: cdktf.stringToHclTerraform(this._deadInterval),
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
      hello_interval: {
        value: cdktf.stringToHclTerraform(this._helloInterval),
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
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interfaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      passive: {
        value: cdktf.booleanToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prefix_list: {
        value: cdktf.stringToHclTerraform(this._prefixList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retransmit_interval: {
        value: cdktf.stringToHclTerraform(this._retransmitInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transmit_delay: {
        value: cdktf.stringToHclTerraform(this._transmitDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_bfd: {
        value: cdktf.booleanToHclTerraform(this._useBfd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlink_neighbor_id: {
        value: cdktf.stringToHclTerraform(this._vlinkNeighborId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlink_transit_area: {
        value: cdktf.stringToHclTerraform(this._vlinkTransitArea),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
