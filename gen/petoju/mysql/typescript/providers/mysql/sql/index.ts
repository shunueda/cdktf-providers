// https://registry.terraform.io/providers/petoju/mysql/3.0.87/docs/resources/sql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.87/docs/resources/sql#create_sql Sql#create_sql}
  */
  readonly createSql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.87/docs/resources/sql#delete_sql Sql#delete_sql}
  */
  readonly deleteSql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.87/docs/resources/sql#id Sql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.87/docs/resources/sql#name Sql#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/petoju/mysql/3.0.87/docs/resources/sql mysql_sql}
*/
export class Sql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mysql_sql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sql to import
  * @param importFromId The id of the existing Sql that should be imported. Refer to the {@link https://registry.terraform.io/providers/petoju/mysql/3.0.87/docs/resources/sql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mysql_sql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/petoju/mysql/3.0.87/docs/resources/sql mysql_sql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlConfig
  */
  public constructor(scope: Construct, id: string, config: SqlConfig) {
    super(scope, id, {
      terraformResourceType: 'mysql_sql',
      terraformGeneratorMetadata: {
        providerName: 'mysql',
        providerVersion: '3.0.87',
        providerVersionConstraint: '3.0.87'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createSql = config.createSql;
    this._deleteSql = config.deleteSql;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_sql - computed: false, optional: false, required: true
  private _createSql?: string; 
  public get createSql() {
    return this.getStringAttribute('create_sql');
  }
  public set createSql(value: string) {
    this._createSql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createSqlInput() {
    return this._createSql;
  }

  // delete_sql - computed: false, optional: false, required: true
  private _deleteSql?: string; 
  public get deleteSql() {
    return this.getStringAttribute('delete_sql');
  }
  public set deleteSql(value: string) {
    this._deleteSql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSqlInput() {
    return this._deleteSql;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_sql: cdktf.stringToTerraform(this._createSql),
      delete_sql: cdktf.stringToTerraform(this._deleteSql),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_sql: {
        value: cdktf.stringToHclTerraform(this._createSql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_sql: {
        value: cdktf.stringToHclTerraform(this._deleteSql),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
