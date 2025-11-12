// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/route#description Route#description}
  */
  readonly description?: string;
  /**
  * Hardware ID where to apply this route. It is typically used for Null routes. If not set, Netris will automatically decide where to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/route#hwids Route#hwids}
  */
  readonly hwids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/route#id Route#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Traffic destined to the Prefix will be routed towards the Next-Hop. Note that static routes will be injected only on units that have the Next-Hop as a connected network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/route#nexthop Route#nexthop}
  */
  readonly nexthop: string;
  /**
  * Route destination to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/route#prefix Route#prefix}
  */
  readonly prefix: string;
  /**
  * The site ID where the current route belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/route#siteid Route#siteid}
  */
  readonly siteid: number;
  /**
  * Administrative state of the route. Possible values: `enabled` or `disabled`. Default value is `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/route#state Route#state}
  */
  readonly state?: string;
  /**
  * ID of VPC. If not specified, the route will be created in the VPC marked as a default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/route#vpcid Route#vpcid}
  */
  readonly vpcid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/route netris_route}
*/
export class Route extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Route resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route to import
  * @param importFromId The id of the existing Route that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/route netris_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouteConfig
  */
  public constructor(scope: Construct, id: string, config: RouteConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_route',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6',
        providerVersionConstraint: '3.6.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._hwids = config.hwids;
    this._id = config.id;
    this._nexthop = config.nexthop;
    this._prefix = config.prefix;
    this._siteid = config.siteid;
    this._state = config.state;
    this._vpcid = config.vpcid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hwids - computed: false, optional: true, required: false
  private _hwids?: number[]; 
  public get hwids() {
    return this.getNumberListAttribute('hwids');
  }
  public set hwids(value: number[]) {
    this._hwids = value;
  }
  public resetHwids() {
    this._hwids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwidsInput() {
    return this._hwids;
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

  // nexthop - computed: false, optional: false, required: true
  private _nexthop?: string; 
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }
  public set nexthop(value: string) {
    this._nexthop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop;
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

  // siteid - computed: false, optional: false, required: true
  private _siteid?: number; 
  public get siteid() {
    return this.getNumberAttribute('siteid');
  }
  public set siteid(value: number) {
    this._siteid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteidInput() {
    return this._siteid;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // vpcid - computed: false, optional: true, required: false
  private _vpcid?: number; 
  public get vpcid() {
    return this.getNumberAttribute('vpcid');
  }
  public set vpcid(value: number) {
    this._vpcid = value;
  }
  public resetVpcid() {
    this._vpcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcidInput() {
    return this._vpcid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      hwids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._hwids),
      id: cdktf.stringToTerraform(this._id),
      nexthop: cdktf.stringToTerraform(this._nexthop),
      prefix: cdktf.stringToTerraform(this._prefix),
      siteid: cdktf.numberToTerraform(this._siteid),
      state: cdktf.stringToTerraform(this._state),
      vpcid: cdktf.numberToTerraform(this._vpcid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hwids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._hwids),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthop: {
        value: cdktf.stringToHclTerraform(this._nexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      siteid: {
        value: cdktf.numberToHclTerraform(this._siteid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpcid: {
        value: cdktf.numberToHclTerraform(this._vpcid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
