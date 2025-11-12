// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/local_db_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryLocalDbIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the name of the attribute for which the index is to be maintained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/local_db_index#attribute DataPingdirectoryLocalDbIndex#attribute}
  */
  readonly attribute: string;
  /**
  * Name of the parent Backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/local_db_index#backend_name DataPingdirectoryLocalDbIndex#backend_name}
  */
  readonly backendName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/local_db_index pingdirectory_local_db_index}
*/
export class DataPingdirectoryLocalDbIndex extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_local_db_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryLocalDbIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryLocalDbIndex to import
  * @param importFromId The id of the existing DataPingdirectoryLocalDbIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/local_db_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryLocalDbIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_local_db_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/local_db_index pingdirectory_local_db_index} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryLocalDbIndexConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryLocalDbIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_local_db_index',
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
    this._attribute = config.attribute;
    this._backendName = config.backendName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

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

  // equality_index_filter - computed: true, optional: false, required: false
  public get equalityIndexFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('equality_index_filter'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_entry_limit - computed: true, optional: false, required: false
  public get indexEntryLimit() {
    return this.getNumberAttribute('index_entry_limit');
  }

  // index_type - computed: true, optional: false, required: false
  public get indexType() {
    return cdktf.Fn.tolist(this.getListAttribute('index_type'));
  }

  // maintain_equality_index_without_filter - computed: true, optional: false, required: false
  public get maintainEqualityIndexWithoutFilter() {
    return this.getBooleanAttribute('maintain_equality_index_without_filter');
  }

  // maintain_match_count_for_keys_exceeding_entry_limit - computed: true, optional: false, required: false
  public get maintainMatchCountForKeysExceedingEntryLimit() {
    return this.getBooleanAttribute('maintain_match_count_for_keys_exceeding_entry_limit');
  }

  // prime_index - computed: true, optional: false, required: false
  public get primeIndex() {
    return this.getBooleanAttribute('prime_index');
  }

  // prime_internal_nodes_only - computed: true, optional: false, required: false
  public get primeInternalNodesOnly() {
    return this.getBooleanAttribute('prime_internal_nodes_only');
  }

  // substring_index_entry_limit - computed: true, optional: false, required: false
  public get substringIndexEntryLimit() {
    return this.getNumberAttribute('substring_index_entry_limit');
  }

  // substring_length - computed: true, optional: false, required: false
  public get substringLength() {
    return this.getNumberAttribute('substring_length');
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
      attribute: cdktf.stringToTerraform(this._attribute),
      backend_name: cdktf.stringToTerraform(this._backendName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute: {
        value: cdktf.stringToHclTerraform(this._attribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_name: {
        value: cdktf.stringToHclTerraform(this._backendName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
