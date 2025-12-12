// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_database#character_set_name PolardbDatabase#character_set_name}
  */
  readonly characterSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_database#data_base_description PolardbDatabase#data_base_description}
  */
  readonly dataBaseDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_database#data_base_instance_id PolardbDatabase#data_base_instance_id}
  */
  readonly dataBaseInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_database#data_base_name PolardbDatabase#data_base_name}
  */
  readonly dataBaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_database#engine PolardbDatabase#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_database#id PolardbDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_database alibabacloudstack_polardb_database}
*/
export class PolardbDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardb_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbDatabase to import
  * @param importFromId The id of the existing PolardbDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardb_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/polardb_database alibabacloudstack_polardb_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardb_database',
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
    this._characterSetName = config.characterSetName;
    this._dataBaseDescription = config.dataBaseDescription;
    this._dataBaseInstanceId = config.dataBaseInstanceId;
    this._dataBaseName = config.dataBaseName;
    this._engine = config.engine;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // character_set_name - computed: false, optional: false, required: true
  private _characterSetName?: string; 
  public get characterSetName() {
    return this.getStringAttribute('character_set_name');
  }
  public set characterSetName(value: string) {
    this._characterSetName = value;
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

  // data_base_instance_id - computed: false, optional: false, required: true
  private _dataBaseInstanceId?: string; 
  public get dataBaseInstanceId() {
    return this.getStringAttribute('data_base_instance_id');
  }
  public set dataBaseInstanceId(value: string) {
    this._dataBaseInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBaseInstanceIdInput() {
    return this._dataBaseInstanceId;
  }

  // data_base_name - computed: false, optional: false, required: true
  private _dataBaseName?: string; 
  public get dataBaseName() {
    return this.getStringAttribute('data_base_name');
  }
  public set dataBaseName(value: string) {
    this._dataBaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBaseNameInput() {
    return this._dataBaseName;
  }

  // engine - computed: true, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      character_set_name: cdktf.stringToTerraform(this._characterSetName),
      data_base_description: cdktf.stringToTerraform(this._dataBaseDescription),
      data_base_instance_id: cdktf.stringToTerraform(this._dataBaseInstanceId),
      data_base_name: cdktf.stringToTerraform(this._dataBaseName),
      engine: cdktf.stringToTerraform(this._engine),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
