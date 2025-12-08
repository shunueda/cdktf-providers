// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#___path___ IpRoute#___path___}
  */
  readonly path?: string;
  /**
  * It's a blackhole route. If you need to cancel route marking, then simply delete the parameter from the configuration of the TF. The value of the parameter (true or false) has no effect on the MT processing logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#blackhole IpRoute#blackhole}
  */
  readonly blackhole?: boolean | cdktf.IResolvable;
  /**
  * Currently used check-gateway option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#check_gateway IpRoute#check_gateway}
  */
  readonly checkGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#comment IpRoute#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#disabled IpRoute#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Value used in route selection. Routes with smaller distance value are given preference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#distance IpRoute#distance}
  */
  readonly distance?: number;
  /**
  * IP prefix of route, specifies destination addresses that this route can be used for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#dst_address IpRoute#dst_address}
  */
  readonly dstAddress?: string;
  /**
  * Array of IP addresses or interface names. Specifies which host or interface packets should be sent to (IP | interface | IP%interface | IP@table[, IP | string, [..]]).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#gateway IpRoute#gateway}
  */
  readonly gateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#id IpRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Which of the local IP addresses to use for locally originated packets that are sent via this route. Value of this property has no effect on forwarded packets. If value of this property is set to IP address that is not local address of this router then the route will be inactive (in ROS v6, ROS v7 allows IP spoofing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#pref_src IpRoute#pref_src}
  */
  readonly prefSrc?: string;
  /**
  * Routing table this route belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#routing_table IpRoute#routing_table}
  */
  readonly routingTable?: string;
  /**
  * Used in nexthop resolution. Route can resolve nexthop only through routes that have scope less than or equal to the target-scope of this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#scope IpRoute#scope}
  */
  readonly scope?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#suppress_hw_offload IpRoute#suppress_hw_offload}
  */
  readonly suppressHwOffload?: boolean | cdktf.IResolvable;
  /**
  * Used in nexthop resolution. This is the maximum value of scope for a route through which a nexthop of this route can be resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#target_scope IpRoute#target_scope}
  */
  readonly targetScope?: number;
  /**
  * VRF interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#vrf_interface IpRoute#vrf_interface}
  */
  readonly vrfInterface?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route routeros_ip_route}
*/
export class IpRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpRoute to import
  * @param importFromId The id of the existing IpRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_route routeros_ip_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpRouteConfig
  */
  public constructor(scope: Construct, id: string, config: IpRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_route',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
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
    this._blackhole = config.blackhole;
    this._checkGateway = config.checkGateway;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._distance = config.distance;
    this._dstAddress = config.dstAddress;
    this._gateway = config.gateway;
    this._id = config.id;
    this._prefSrc = config.prefSrc;
    this._routingTable = config.routingTable;
    this._scope = config.scope;
    this._suppressHwOffload = config.suppressHwOffload;
    this._targetScope = config.targetScope;
    this._vrfInterface = config.vrfInterface;
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

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // blackhole - computed: false, optional: true, required: false
  private _blackhole?: boolean | cdktf.IResolvable; 
  public get blackhole() {
    return this.getBooleanAttribute('blackhole');
  }
  public set blackhole(value: boolean | cdktf.IResolvable) {
    this._blackhole = value;
  }
  public resetBlackhole() {
    this._blackhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackholeInput() {
    return this._blackhole;
  }

  // check_gateway - computed: false, optional: true, required: false
  private _checkGateway?: string; 
  public get checkGateway() {
    return this.getStringAttribute('check_gateway');
  }
  public set checkGateway(value: string) {
    this._checkGateway = value;
  }
  public resetCheckGateway() {
    this._checkGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkGatewayInput() {
    return this._checkGateway;
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

  // connect - computed: true, optional: false, required: false
  public get connect() {
    return this.getBooleanAttribute('connect');
  }

  // dhcp - computed: true, optional: false, required: false
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
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

  // distance - computed: false, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // dst_address - computed: false, optional: true, required: false
  private _dstAddress?: string; 
  public get dstAddress() {
    return this.getStringAttribute('dst_address');
  }
  public set dstAddress(value: string) {
    this._dstAddress = value;
  }
  public resetDstAddress() {
    this._dstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressInput() {
    return this._dstAddress;
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // ecmp - computed: true, optional: false, required: false
  public get ecmp() {
    return this.getBooleanAttribute('ecmp');
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // hw_offloaded - computed: true, optional: false, required: false
  public get hwOffloaded() {
    return this.getBooleanAttribute('hw_offloaded');
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

  // immediate_gw - computed: true, optional: false, required: false
  public get immediateGw() {
    return this.getStringAttribute('immediate_gw');
  }

  // inactive - computed: true, optional: false, required: false
  public get inactive() {
    return this.getBooleanAttribute('inactive');
  }

  // local_address - computed: true, optional: false, required: false
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }

  // pref_src - computed: false, optional: true, required: false
  private _prefSrc?: string; 
  public get prefSrc() {
    return this.getStringAttribute('pref_src');
  }
  public set prefSrc(value: string) {
    this._prefSrc = value;
  }
  public resetPrefSrc() {
    this._prefSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefSrcInput() {
    return this._prefSrc;
  }

  // routing_table - computed: false, optional: true, required: false
  private _routingTable?: string; 
  public get routingTable() {
    return this.getStringAttribute('routing_table');
  }
  public set routingTable(value: string) {
    this._routingTable = value;
  }
  public resetRoutingTable() {
    this._routingTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTableInput() {
    return this._routingTable;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: number; 
  public get scope() {
    return this.getNumberAttribute('scope');
  }
  public set scope(value: number) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // static - computed: true, optional: false, required: false
  public get static() {
    return this.getBooleanAttribute('static');
  }

  // suppress_hw_offload - computed: false, optional: true, required: false
  private _suppressHwOffload?: boolean | cdktf.IResolvable; 
  public get suppressHwOffload() {
    return this.getBooleanAttribute('suppress_hw_offload');
  }
  public set suppressHwOffload(value: boolean | cdktf.IResolvable) {
    this._suppressHwOffload = value;
  }
  public resetSuppressHwOffload() {
    this._suppressHwOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressHwOffloadInput() {
    return this._suppressHwOffload;
  }

  // target_scope - computed: false, optional: true, required: false
  private _targetScope?: number; 
  public get targetScope() {
    return this.getNumberAttribute('target_scope');
  }
  public set targetScope(value: number) {
    this._targetScope = value;
  }
  public resetTargetScope() {
    this._targetScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetScopeInput() {
    return this._targetScope;
  }

  // vrf_interface - computed: true, optional: true, required: false
  private _vrfInterface?: string; 
  public get vrfInterface() {
    return this.getStringAttribute('vrf_interface');
  }
  public set vrfInterface(value: string) {
    this._vrfInterface = value;
  }
  public resetVrfInterface() {
    this._vrfInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInterfaceInput() {
    return this._vrfInterface;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      blackhole: cdktf.booleanToTerraform(this._blackhole),
      check_gateway: cdktf.stringToTerraform(this._checkGateway),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      distance: cdktf.numberToTerraform(this._distance),
      dst_address: cdktf.stringToTerraform(this._dstAddress),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      pref_src: cdktf.stringToTerraform(this._prefSrc),
      routing_table: cdktf.stringToTerraform(this._routingTable),
      scope: cdktf.numberToTerraform(this._scope),
      suppress_hw_offload: cdktf.booleanToTerraform(this._suppressHwOffload),
      target_scope: cdktf.numberToTerraform(this._targetScope),
      vrf_interface: cdktf.stringToTerraform(this._vrfInterface),
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
      blackhole: {
        value: cdktf.booleanToHclTerraform(this._blackhole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_gateway: {
        value: cdktf.stringToHclTerraform(this._checkGateway),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      distance: {
        value: cdktf.numberToHclTerraform(this._distance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_address: {
        value: cdktf.stringToHclTerraform(this._dstAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      pref_src: {
        value: cdktf.stringToHclTerraform(this._prefSrc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_table: {
        value: cdktf.stringToHclTerraform(this._routingTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.numberToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      suppress_hw_offload: {
        value: cdktf.booleanToHclTerraform(this._suppressHwOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_scope: {
        value: cdktf.numberToHclTerraform(this._targetScope),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf_interface: {
        value: cdktf.stringToHclTerraform(this._vrfInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
