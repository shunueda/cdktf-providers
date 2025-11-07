// https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/data-sources/sources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCriblioSourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The consumer group to which this instance belongs. Defaults to 'default'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/data-sources/sources#group_id DataCriblioSources#group_id}
  */
  readonly groupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/data-sources/sources criblio_sources}
*/
export class DataCriblioSources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_sources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCriblioSources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCriblioSources to import
  * @param importFromId The id of the existing DataCriblioSources that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/data-sources/sources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCriblioSources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_sources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/data-sources/sources criblio_sources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCriblioSourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataCriblioSourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_sources',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // items - computed: true, optional: false, required: false
  private _items = new cdktf.StringMapList(this, "items", false);
  public get items() {
    return this._items;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
