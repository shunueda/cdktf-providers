// https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZerotierControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#___path___ ZerotierController#___path___}
  */
  readonly path?: string;
  /**
  * An option to allow receiving broadcast packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#broadcast ZerotierController#broadcast}
  */
  readonly broadcast?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#comment ZerotierController#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#disabled ZerotierController#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#id ZerotierController#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ZeroTier instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#instance ZerotierController#instance}
  */
  readonly instance: string;
  /**
  * An option to assign every member a `/80` address within a `/40` network with using NDP emulation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#ip6_6plane ZerotierController#ip6_6plane}
  */
  readonly ip66Plane?: boolean | cdktf.IResolvable;
  /**
  * The IPv6 range of the ZeroTier network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#ip6_range ZerotierController#ip6_range}
  */
  readonly ip6Range?: string;
  /**
  * An option to assign every member a `/128` address within a `/88` network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#ip6_rfc4193 ZerotierController#ip6_rfc4193}
  */
  readonly ip6Rfc4193?: boolean | cdktf.IResolvable;
  /**
  * The IP range of the ZeroTier network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#ip_range ZerotierController#ip_range}
  */
  readonly ipRange?: string;
  /**
  * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#mtu ZerotierController#mtu}
  */
  readonly mtu?: number;
  /**
  * An option to limit the maximum recipients of a multicast packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#multicast_limit ZerotierController#multicast_limit}
  */
  readonly multicastLimit?: number;
  /**
  * Name of the ZeroTier controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#name ZerotierController#name}
  */
  readonly name: string;
  /**
  * The ZeroTier network identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#network ZerotierController#network}
  */
  readonly network: string;
  /**
  * The ZeroTier network access control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#private ZerotierController#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * The routes list that will be pushed to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#routes ZerotierController#routes}
  */
  readonly routes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller routeros_zerotier_controller}
*/
export class ZerotierController extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_zerotier_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZerotierController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZerotierController to import
  * @param importFromId The id of the existing ZerotierController that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZerotierController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_zerotier_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/zerotier_controller routeros_zerotier_controller} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZerotierControllerConfig
  */
  public constructor(scope: Construct, id: string, config: ZerotierControllerConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_zerotier_controller',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.90.0'
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
    this._broadcast = config.broadcast;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._instance = config.instance;
    this._ip66Plane = config.ip66Plane;
    this._ip6Range = config.ip6Range;
    this._ip6Rfc4193 = config.ip6Rfc4193;
    this._ipRange = config.ipRange;
    this._mtu = config.mtu;
    this._multicastLimit = config.multicastLimit;
    this._name = config.name;
    this._network = config.network;
    this._private = config.private;
    this._routes = config.routes;
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

  // broadcast - computed: false, optional: true, required: false
  private _broadcast?: boolean | cdktf.IResolvable; 
  public get broadcast() {
    return this.getBooleanAttribute('broadcast');
  }
  public set broadcast(value: boolean | cdktf.IResolvable) {
    this._broadcast = value;
  }
  public resetBroadcast() {
    this._broadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast;
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // ip6_6plane - computed: false, optional: true, required: false
  private _ip66Plane?: boolean | cdktf.IResolvable; 
  public get ip66Plane() {
    return this.getBooleanAttribute('ip6_6plane');
  }
  public set ip66Plane(value: boolean | cdktf.IResolvable) {
    this._ip66Plane = value;
  }
  public resetIp66Plane() {
    this._ip66Plane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip66PlaneInput() {
    return this._ip66Plane;
  }

  // ip6_range - computed: false, optional: true, required: false
  private _ip6Range?: string; 
  public get ip6Range() {
    return this.getStringAttribute('ip6_range');
  }
  public set ip6Range(value: string) {
    this._ip6Range = value;
  }
  public resetIp6Range() {
    this._ip6Range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6RangeInput() {
    return this._ip6Range;
  }

  // ip6_rfc4193 - computed: false, optional: true, required: false
  private _ip6Rfc4193?: boolean | cdktf.IResolvable; 
  public get ip6Rfc4193() {
    return this.getBooleanAttribute('ip6_rfc4193');
  }
  public set ip6Rfc4193(value: boolean | cdktf.IResolvable) {
    this._ip6Rfc4193 = value;
  }
  public resetIp6Rfc4193() {
    this._ip6Rfc4193 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Rfc4193Input() {
    return this._ip6Rfc4193;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  public resetIpRange() {
    this._ipRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
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

  // multicast_limit - computed: false, optional: true, required: false
  private _multicastLimit?: number; 
  public get multicastLimit() {
    return this.getNumberAttribute('multicast_limit');
  }
  public set multicastLimit(value: number) {
    this._multicastLimit = value;
  }
  public resetMulticastLimit() {
    this._multicastLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastLimitInput() {
    return this._multicastLimit;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // private - computed: false, optional: true, required: false
  private _private?: boolean | cdktf.IResolvable; 
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean | cdktf.IResolvable) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // routes - computed: false, optional: true, required: false
  private _routes?: string[]; 
  public get routes() {
    return cdktf.Fn.tolist(this.getListAttribute('routes'));
  }
  public set routes(value: string[]) {
    this._routes = value;
  }
  public resetRoutes() {
    this._routes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      broadcast: cdktf.booleanToTerraform(this._broadcast),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      ip6_6plane: cdktf.booleanToTerraform(this._ip66Plane),
      ip6_range: cdktf.stringToTerraform(this._ip6Range),
      ip6_rfc4193: cdktf.booleanToTerraform(this._ip6Rfc4193),
      ip_range: cdktf.stringToTerraform(this._ipRange),
      mtu: cdktf.numberToTerraform(this._mtu),
      multicast_limit: cdktf.numberToTerraform(this._multicastLimit),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      private: cdktf.booleanToTerraform(this._private),
      routes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routes),
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
      broadcast: {
        value: cdktf.booleanToHclTerraform(this._broadcast),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_6plane: {
        value: cdktf.booleanToHclTerraform(this._ip66Plane),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip6_range: {
        value: cdktf.stringToHclTerraform(this._ip6Range),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_rfc4193: {
        value: cdktf.booleanToHclTerraform(this._ip6Rfc4193),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_range: {
        value: cdktf.stringToHclTerraform(this._ipRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multicast_limit: {
        value: cdktf.numberToHclTerraform(this._multicastLimit),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private: {
        value: cdktf.booleanToHclTerraform(this._private),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
