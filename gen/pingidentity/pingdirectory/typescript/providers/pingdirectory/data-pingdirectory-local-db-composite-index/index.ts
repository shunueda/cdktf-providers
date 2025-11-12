// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/local_db_composite_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryLocalDbCompositeIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parent Backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/local_db_composite_index#backend_name DataPingdirectoryLocalDbCompositeIndex#backend_name}
  */
  readonly backendName: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/local_db_composite_index#name DataPingdirectoryLocalDbCompositeIndex#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/local_db_composite_index pingdirectory_local_db_composite_index}
*/
export class DataPingdirectoryLocalDbCompositeIndex extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_local_db_composite_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryLocalDbCompositeIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryLocalDbCompositeIndex to import
  * @param importFromId The id of the existing DataPingdirectoryLocalDbCompositeIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/local_db_composite_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryLocalDbCompositeIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_local_db_composite_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/local_db_composite_index pingdirectory_local_db_composite_index} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryLocalDbCompositeIndexConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryLocalDbCompositeIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_local_db_composite_index',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backendName = config.backendName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_name - computed: false, optional: false, required: true
  private _backendName?: string; 
  public get backendName() {
    return this.getStringAttribute('backend_name');
  }
  public set backendName(value: string) {
    this._backendName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendNameInput() {
    return this._backendName;
  }

  // cache_mode - computed: true, optional: false, required: false
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_base_dn_pattern - computed: true, optional: false, required: false
  public get indexBaseDnPattern() {
    return this.getStringAttribute('index_base_dn_pattern');
  }

  // index_entry_limit - computed: true, optional: false, required: false
  public get indexEntryLimit() {
    return this.getNumberAttribute('index_entry_limit');
  }

  // index_filter_pattern - computed: true, optional: false, required: false
  public get indexFilterPattern() {
    return this.getStringAttribute('index_filter_pattern');
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

  // prime_index - computed: true, optional: false, required: false
  public get primeIndex() {
    return this.getBooleanAttribute('prime_index');
  }

  // prime_internal_nodes_only - computed: true, optional: false, required: false
  public get primeInternalNodesOnly() {
    return this.getBooleanAttribute('prime_internal_nodes_only');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_name: cdktf.stringToTerraform(this._backendName),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend_name: {
        value: cdktf.stringToHclTerraform(this._backendName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
