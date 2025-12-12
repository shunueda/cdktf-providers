// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/db_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/db_database#character_set DbDatabase#character_set}
  */
  readonly characterSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/db_database#character_set_name DbDatabase#character_set_name}
  */
  readonly characterSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/db_database#data_base_description DbDatabase#data_base_description}
  */
  readonly dataBaseDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/db_database#data_base_instance_id DbDatabase#data_base_instance_id}
  */
  readonly dataBaseInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/db_database#data_base_name DbDatabase#data_base_name}
  */
  readonly dataBaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/db_database#description DbDatabase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/db_database#id DbDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/db_database#instance_id DbDatabase#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/db_database#name DbDatabase#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/db_database alibabacloudstack_db_database}
*/
export class DbDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_db_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbDatabase to import
  * @param importFromId The id of the existing DbDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/db_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_db_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/db_database alibabacloudstack_db_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbDatabaseConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DbDatabaseConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_db_database',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._characterSet = config.characterSet;
    this._characterSetName = config.characterSetName;
    this._dataBaseDescription = config.dataBaseDescription;
    this._dataBaseInstanceId = config.dataBaseInstanceId;
    this._dataBaseName = config.dataBaseName;
    this._description = config.description;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // character_set - computed: true, optional: true, required: false
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  public resetCharacterSet() {
    this._characterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // character_set_name - computed: true, optional: true, required: false
  private _characterSetName?: string; 
  public get characterSetName() {
    return this.getStringAttribute('character_set_name');
  }
  public set characterSetName(value: string) {
    this._characterSetName = value;
  }
  public resetCharacterSetName() {
    this._characterSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetNameInput() {
    return this._characterSetName;
  }

  // data_base_description - computed: true, optional: true, required: false
  private _dataBaseDescription?: string; 
  public get dataBaseDescription() {
    return this.getStringAttribute('data_base_description');
  }
  public set dataBaseDescription(value: string) {
    this._dataBaseDescription = value;
  }
  public resetDataBaseDescription() {
    this._dataBaseDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBaseDescriptionInput() {
    return this._dataBaseDescription;
  }

  // data_base_instance_id - computed: true, optional: true, required: false
  private _dataBaseInstanceId?: string; 
  public get dataBaseInstanceId() {
    return this.getStringAttribute('data_base_instance_id');
  }
  public set dataBaseInstanceId(value: string) {
    this._dataBaseInstanceId = value;
  }
  public resetDataBaseInstanceId() {
    this._dataBaseInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBaseInstanceIdInput() {
    return this._dataBaseInstanceId;
  }

  // data_base_name - computed: true, optional: true, required: false
  private _dataBaseName?: string; 
  public get dataBaseName() {
    return this.getStringAttribute('data_base_name');
  }
  public set dataBaseName(value: string) {
    this._dataBaseName = value;
  }
  public resetDataBaseName() {
    this._dataBaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBaseNameInput() {
    return this._dataBaseName;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // name - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      character_set: cdktf.stringToTerraform(this._characterSet),
      character_set_name: cdktf.stringToTerraform(this._characterSetName),
      data_base_description: cdktf.stringToTerraform(this._dataBaseDescription),
      data_base_instance_id: cdktf.stringToTerraform(this._dataBaseInstanceId),
      data_base_name: cdktf.stringToTerraform(this._dataBaseName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      character_set: {
        value: cdktf.stringToHclTerraform(this._characterSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      character_set_name: {
        value: cdktf.stringToHclTerraform(this._characterSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_base_description: {
        value: cdktf.stringToHclTerraform(this._dataBaseDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_base_instance_id: {
        value: cdktf.stringToHclTerraform(this._dataBaseInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_base_name: {
        value: cdktf.stringToHclTerraform(this._dataBaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
