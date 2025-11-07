// https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_pool#___path___ IpPool#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_pool#___skip___ IpPool#___skip___}
  */
  readonly skip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_pool#comment IpPool#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_pool#id IpPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Changing the name of this resource will force it to be recreated.
  * 	> The links of other configuration properties to this resource may be lost!
  * 	> Changing the name of the resource outside of a Terraform will result in a loss of control integrity for that resource!
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_pool#name IpPool#name}
  */
  readonly name: string;
  /**
  * When address is acquired from pool that has no free addresses, and next-pool property is set to another pool, then next IP address will be acquired from next-pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_pool#next_pool IpPool#next_pool}
  */
  readonly nextPool?: string;
  /**
  * IP address list of non-overlapping IP address ranges in form of: ["from1-to1", "from2-to2", ..., "fromN-toN"]. For example, ["10.0.0.1-10.0.0.27", "10.0.0.32-10.0.0.47"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_pool#ranges IpPool#ranges}
  */
  readonly ranges: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_pool routeros_ip_pool}
*/
export class IpPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpPool to import
  * @param importFromId The id of the existing IpPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_pool routeros_ip_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpPoolConfig
  */
  public constructor(scope: Construct, id: string, config: IpPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_pool',
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
    this._skip = config.skip;
    this._comment = config.comment;
    this._id = config.id;
    this._name = config.name;
    this._nextPool = config.nextPool;
    this._ranges = config.ranges;
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

  // next_pool - computed: false, optional: true, required: false
  private _nextPool?: string; 
  public get nextPool() {
    return this.getStringAttribute('next_pool');
  }
  public set nextPool(value: string) {
    this._nextPool = value;
  }
  public resetNextPool() {
    this._nextPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextPoolInput() {
    return this._nextPool;
  }

  // ranges - computed: false, optional: false, required: true
  private _ranges?: string[]; 
  public get ranges() {
    return this.getListAttribute('ranges');
  }
  public set ranges(value: string[]) {
    this._ranges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      next_pool: cdktf.stringToTerraform(this._nextPool),
      ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ranges),
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
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_pool: {
        value: cdktf.stringToHclTerraform(this._nextPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ranges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
