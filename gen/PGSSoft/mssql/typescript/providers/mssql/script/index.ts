// https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * SQL script executed when the resource does not exist in Terraform state. When not provided, `update_script` will be used to create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/script#create_script Script#create_script}
  */
  readonly createScript?: string;
  /**
  * ID of database. Can be retrieved using `mssql_database` or `SELECT DB_ID('<db_name>')`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/script#database_id Script#database_id}
  */
  readonly databaseId: string;
  /**
  * SQL script executed when the resource is being destroyed. When not provided, no action will be taken during resource destruction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/script#delete_script Script#delete_script}
  */
  readonly deleteScript?: string;
  /**
  * SQL script returning current state of the DB. It must return single-row result set where column names match the keys of `state` map and all values are strings that will be compared against `state` to determine if the resource state matches DB state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/script#read_script Script#read_script}
  */
  readonly readScript: string;
  /**
  * Desired state of the DB. It is arbitrary map of string values that will be compared against the values returned by the `read_script`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/script#state Script#state}
  */
  readonly state: { [key: string]: string };
  /**
  * SQL script executed when the desired state specified in `state` attribute does not match the state returned by `read_script`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/script#update_script Script#update_script}
  */
  readonly updateScript: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/script mssql_script}
*/
export class Script extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mssql_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Script resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Script to import
  * @param importFromId The id of the existing Script that should be imported. Refer to the {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Script to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mssql_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/script mssql_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScriptConfig
  */
  public constructor(scope: Construct, id: string, config: ScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'mssql_script',
      terraformGeneratorMetadata: {
        providerName: 'mssql',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createScript = config.createScript;
    this._databaseId = config.databaseId;
    this._deleteScript = config.deleteScript;
    this._readScript = config.readScript;
    this._state = config.state;
    this._updateScript = config.updateScript;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_script - computed: false, optional: true, required: false
  private _createScript?: string; 
  public get createScript() {
    return this.getStringAttribute('create_script');
  }
  public set createScript(value: string) {
    this._createScript = value;
  }
  public resetCreateScript() {
    this._createScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createScriptInput() {
    return this._createScript;
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // delete_script - computed: false, optional: true, required: false
  private _deleteScript?: string; 
  public get deleteScript() {
    return this.getStringAttribute('delete_script');
  }
  public set deleteScript(value: string) {
    this._deleteScript = value;
  }
  public resetDeleteScript() {
    this._deleteScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteScriptInput() {
    return this._deleteScript;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // read_script - computed: false, optional: false, required: true
  private _readScript?: string; 
  public get readScript() {
    return this.getStringAttribute('read_script');
  }
  public set readScript(value: string) {
    this._readScript = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readScriptInput() {
    return this._readScript;
  }

  // state - computed: false, optional: false, required: true
  private _state?: { [key: string]: string }; 
  public get state() {
    return this.getStringMapAttribute('state');
  }
  public set state(value: { [key: string]: string }) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // update_script - computed: false, optional: false, required: true
  private _updateScript?: string; 
  public get updateScript() {
    return this.getStringAttribute('update_script');
  }
  public set updateScript(value: string) {
    this._updateScript = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateScriptInput() {
    return this._updateScript;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_script: cdktf.stringToTerraform(this._createScript),
      database_id: cdktf.stringToTerraform(this._databaseId),
      delete_script: cdktf.stringToTerraform(this._deleteScript),
      read_script: cdktf.stringToTerraform(this._readScript),
      state: cdktf.hashMapper(cdktf.stringToTerraform)(this._state),
      update_script: cdktf.stringToTerraform(this._updateScript),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_script: {
        value: cdktf.stringToHclTerraform(this._createScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_script: {
        value: cdktf.stringToHclTerraform(this._deleteScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_script: {
        value: cdktf.stringToHclTerraform(this._readScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._state),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      update_script: {
        value: cdktf.stringToHclTerraform(this._updateScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
