// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_area_range
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingOspfAreaRangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_area_range#___path___ RoutingOspfAreaRange#___path___}
  */
  readonly path?: string;
  /**
  * Whether to create a summary LSA and advertise it to the adjacent areas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_area_range#advertise RoutingOspfAreaRange#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * The OSPF area associated with this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_area_range#area RoutingOspfAreaRange#area}
  */
  readonly area: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_area_range#comment RoutingOspfAreaRange#comment}
  */
  readonly comment?: string;
  /**
  * The cost of the summary LSA this range will createdefault - use the largest cost of all routes used (i.e. routes that fall within this range).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_area_range#cost RoutingOspfAreaRange#cost}
  */
  readonly cost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_area_range#disabled RoutingOspfAreaRange#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_area_range#id RoutingOspfAreaRange#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The network prefix of this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_area_range#prefix RoutingOspfAreaRange#prefix}
  */
  readonly prefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_area_range routeros_routing_ospf_area_range}
*/
export class RoutingOspfAreaRange extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_routing_ospf_area_range";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingOspfAreaRange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingOspfAreaRange to import
  * @param importFromId The id of the existing RoutingOspfAreaRange that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_area_range#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingOspfAreaRange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_routing_ospf_area_range", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_ospf_area_range routeros_routing_ospf_area_range} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingOspfAreaRangeConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingOspfAreaRangeConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_routing_ospf_area_range',
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
    this._advertise = config.advertise;
    this._area = config.area;
    this._comment = config.comment;
    this._cost = config.cost;
    this._disabled = config.disabled;
    this._id = config.id;
    this._prefix = config.prefix;
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

  // advertise - computed: false, optional: true, required: false
  private _advertise?: boolean | cdktf.IResolvable; 
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }
  public set advertise(value: boolean | cdktf.IResolvable) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      advertise: cdktf.booleanToTerraform(this._advertise),
      area: cdktf.stringToTerraform(this._area),
      comment: cdktf.stringToTerraform(this._comment),
      cost: cdktf.numberToTerraform(this._cost),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      prefix: cdktf.stringToTerraform(this._prefix),
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
      advertise: {
        value: cdktf.booleanToHclTerraform(this._advertise),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      area: {
        value: cdktf.stringToHclTerraform(this._area),
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
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
