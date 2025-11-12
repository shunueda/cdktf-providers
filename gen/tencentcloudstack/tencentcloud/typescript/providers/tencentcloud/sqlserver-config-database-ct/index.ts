// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_config_database_ct
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverConfigDatabaseCtConfig extends cdktf.TerraformMetaArguments {
  /**
  * Retention period (in days) of change tracking information when CT is enabled. Value range: 3-30. Default value: 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_config_database_ct#change_retention_day SqlserverConfigDatabaseCt#change_retention_day}
  */
  readonly changeRetentionDay?: number;
  /**
  * database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_config_database_ct#db_name SqlserverConfigDatabaseCt#db_name}
  */
  readonly dbName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_config_database_ct#id SqlserverConfigDatabaseCt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_config_database_ct#instance_id SqlserverConfigDatabaseCt#instance_id}
  */
  readonly instanceId: string;
  /**
  * Enable or disable CT. Valid values: enable, disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_config_database_ct#modify_type SqlserverConfigDatabaseCt#modify_type}
  */
  readonly modifyType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_config_database_ct tencentcloud_sqlserver_config_database_ct}
*/
export class SqlserverConfigDatabaseCt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_config_database_ct";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverConfigDatabaseCt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverConfigDatabaseCt to import
  * @param importFromId The id of the existing SqlserverConfigDatabaseCt that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_config_database_ct#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverConfigDatabaseCt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_config_database_ct", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_config_database_ct tencentcloud_sqlserver_config_database_ct} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverConfigDatabaseCtConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverConfigDatabaseCtConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_config_database_ct',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._changeRetentionDay = config.changeRetentionDay;
    this._dbName = config.dbName;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._modifyType = config.modifyType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_retention_day - computed: true, optional: true, required: false
  private _changeRetentionDay?: number; 
  public get changeRetentionDay() {
    return this.getNumberAttribute('change_retention_day');
  }
  public set changeRetentionDay(value: number) {
    this._changeRetentionDay = value;
  }
  public resetChangeRetentionDay() {
    this._changeRetentionDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeRetentionDayInput() {
    return this._changeRetentionDay;
  }

  // db_name - computed: false, optional: false, required: true
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // modify_type - computed: false, optional: false, required: true
  private _modifyType?: string; 
  public get modifyType() {
    return this.getStringAttribute('modify_type');
  }
  public set modifyType(value: string) {
    this._modifyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTypeInput() {
    return this._modifyType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      change_retention_day: cdktf.numberToTerraform(this._changeRetentionDay),
      db_name: cdktf.stringToTerraform(this._dbName),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      modify_type: cdktf.stringToTerraform(this._modifyType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      change_retention_day: {
        value: cdktf.numberToHclTerraform(this._changeRetentionDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_name: {
        value: cdktf.stringToHclTerraform(this._dbName),
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
      modify_type: {
        value: cdktf.stringToHclTerraform(this._modifyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
