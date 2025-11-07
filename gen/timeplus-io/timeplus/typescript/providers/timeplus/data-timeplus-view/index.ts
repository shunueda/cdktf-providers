// https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/data-sources/view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTimeplusViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * The view name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/data-sources/view#name DataTimeplusView#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/data-sources/view timeplus_view}
*/
export class DataTimeplusView extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "timeplus_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTimeplusView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTimeplusView to import
  * @param importFromId The id of the existing DataTimeplusView that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/data-sources/view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTimeplusView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "timeplus_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/data-sources/view timeplus_view} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTimeplusViewConfig
  */
  public constructor(scope: Construct, id: string, config: DataTimeplusViewConfig) {
    super(scope, id, {
      terraformResourceType: 'timeplus_view',
      terraformGeneratorMetadata: {
        providerName: 'timeplus',
        providerVersion: '0.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
