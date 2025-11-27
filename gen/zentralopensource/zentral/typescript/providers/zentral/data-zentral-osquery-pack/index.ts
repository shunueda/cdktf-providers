// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_pack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZentralOsqueryPackConfig extends cdktf.TerraformMetaArguments {
  /**
  * `ID` of the pack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_pack#id DataZentralOsqueryPack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Name of the pack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_pack#name DataZentralOsqueryPack#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_pack zentral_osquery_pack}
*/
export class DataZentralOsqueryPack extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_osquery_pack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZentralOsqueryPack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZentralOsqueryPack to import
  * @param importFromId The id of the existing DataZentralOsqueryPack that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_pack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZentralOsqueryPack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_osquery_pack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_pack zentral_osquery_pack} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZentralOsqueryPackConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZentralOsqueryPackConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zentral_osquery_pack',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.65',
        providerVersionConstraint: '0.1.65'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // discovery_queries - computed: true, optional: false, required: false
  public get discoveryQueries() {
    return this.getListAttribute('discovery_queries');
  }

  // event_routing_key - computed: true, optional: false, required: false
  public get eventRoutingKey() {
    return this.getStringAttribute('event_routing_key');
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // shard - computed: true, optional: false, required: false
  public get shard() {
    return this.getNumberAttribute('shard');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
