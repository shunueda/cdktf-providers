// https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * The comment of the IP Pool to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/pool#comment Pool#comment}
  */
  readonly comment?: string;
  /**
  * The name of IP pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/pool#name Pool#name}
  */
  readonly name: string;
  /**
  * The IP pool to pick next address from if current is exhausted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/pool#next_pool Pool#next_pool}
  */
  readonly nextPool?: string;
  /**
  * The IP range(s) of the pool. Multiple ranges can be specified, separated by commas: `172.16.0.6-172.16.0.12,172.16.0.50-172.16.0.60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/pool#ranges Pool#ranges}
  */
  readonly ranges: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/pool mikrotik_pool}
*/
export class Pool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mikrotik_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pool to import
  * @param importFromId The id of the existing Pool that should be imported. Refer to the {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mikrotik_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/pool mikrotik_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PoolConfig
  */
  public constructor(scope: Construct, id: string, config: PoolConfig) {
    super(scope, id, {
      terraformResourceType: 'mikrotik_pool',
      terraformGeneratorMetadata: {
        providerName: 'mikrotik',
        providerVersion: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._name = config.name;
    this._nextPool = config.nextPool;
    this._ranges = config.ranges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
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

  // next_pool - computed: true, optional: true, required: false
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
  private _ranges?: string; 
  public get ranges() {
    return this.getStringAttribute('ranges');
  }
  public set ranges(value: string) {
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
      comment: cdktf.stringToTerraform(this._comment),
      name: cdktf.stringToTerraform(this._name),
      next_pool: cdktf.stringToTerraform(this._nextPool),
      ranges: cdktf.stringToTerraform(this._ranges),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
        value: cdktf.stringToHclTerraform(this._ranges),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
