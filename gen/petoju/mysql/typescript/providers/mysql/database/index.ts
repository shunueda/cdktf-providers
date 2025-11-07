// https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/database#default_character_set Database#default_character_set}
  */
  readonly defaultCharacterSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/database#default_collation Database#default_collation}
  */
  readonly defaultCollation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/database#id Database#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/database#name Database#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/database mysql_database}
*/
export class Database extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mysql_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Database to import
  * @param importFromId The id of the existing Database that should be imported. Refer to the {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Database to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mysql_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/petoju/mysql/3.0.84/docs/resources/database mysql_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'mysql_database',
      terraformGeneratorMetadata: {
        providerName: 'mysql',
        providerVersion: '3.0.84'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultCharacterSet = config.defaultCharacterSet;
    this._defaultCollation = config.defaultCollation;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_character_set - computed: false, optional: true, required: false
  private _defaultCharacterSet?: string; 
  public get defaultCharacterSet() {
    return this.getStringAttribute('default_character_set');
  }
  public set defaultCharacterSet(value: string) {
    this._defaultCharacterSet = value;
  }
  public resetDefaultCharacterSet() {
    this._defaultCharacterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCharacterSetInput() {
    return this._defaultCharacterSet;
  }

  // default_collation - computed: false, optional: true, required: false
  private _defaultCollation?: string; 
  public get defaultCollation() {
    return this.getStringAttribute('default_collation');
  }
  public set defaultCollation(value: string) {
    this._defaultCollation = value;
  }
  public resetDefaultCollation() {
    this._defaultCollation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCollationInput() {
    return this._defaultCollation;
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
      default_character_set: cdktf.stringToTerraform(this._defaultCharacterSet),
      default_collation: cdktf.stringToTerraform(this._defaultCollation),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_character_set: {
        value: cdktf.stringToHclTerraform(this._defaultCharacterSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_collation: {
        value: cdktf.stringToHclTerraform(this._defaultCollation),
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
