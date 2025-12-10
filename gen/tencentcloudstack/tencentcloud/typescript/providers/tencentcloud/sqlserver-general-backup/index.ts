// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_general_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverGeneralBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backup name. If this parameter is left empty, a backup name in the format of [Instance ID]_[Backup start timestamp] will be automatically generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_general_backup#backup_name SqlserverGeneralBackup#backup_name}
  */
  readonly backupName?: string;
  /**
  * List of names of databases to be backed up (required only for multi-database backup).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_general_backup#db_names SqlserverGeneralBackup#db_names}
  */
  readonly dbNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_general_backup#id SqlserverGeneralBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID in the format of mssql-i1z41iwd.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_general_backup#instance_id SqlserverGeneralBackup#instance_id}
  */
  readonly instanceId: string;
  /**
  * Backup policy (0: instance backup, 1: multi-database backup).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_general_backup#strategy SqlserverGeneralBackup#strategy}
  */
  readonly strategy?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_general_backup tencentcloud_sqlserver_general_backup}
*/
export class SqlserverGeneralBackup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_general_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverGeneralBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverGeneralBackup to import
  * @param importFromId The id of the existing SqlserverGeneralBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_general_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverGeneralBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_general_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_general_backup tencentcloud_sqlserver_general_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverGeneralBackupConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverGeneralBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_general_backup',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupName = config.backupName;
    this._dbNames = config.dbNames;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._strategy = config.strategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_name - computed: true, optional: true, required: false
  private _backupName?: string; 
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
  public set backupName(value: string) {
    this._backupName = value;
  }
  public resetBackupName() {
    this._backupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNameInput() {
    return this._backupName;
  }

  // db_names - computed: false, optional: true, required: false
  private _dbNames?: string[]; 
  public get dbNames() {
    return cdktf.Fn.tolist(this.getListAttribute('db_names'));
  }
  public set dbNames(value: string[]) {
    this._dbNames = value;
  }
  public resetDbNames() {
    this._dbNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNamesInput() {
    return this._dbNames;
  }

  // flow_id - computed: true, optional: false, required: false
  public get flowId() {
    return this.getStringAttribute('flow_id');
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

  // strategy - computed: true, optional: true, required: false
  private _strategy?: number; 
  public get strategy() {
    return this.getNumberAttribute('strategy');
  }
  public set strategy(value: number) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_name: cdktf.stringToTerraform(this._backupName),
      db_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbNames),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      strategy: cdktf.numberToTerraform(this._strategy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_name: {
        value: cdktf.stringToHclTerraform(this._backupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      strategy: {
        value: cdktf.numberToHclTerraform(this._strategy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
