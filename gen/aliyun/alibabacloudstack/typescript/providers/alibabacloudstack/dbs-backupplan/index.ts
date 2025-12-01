// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dbs_backupplan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbsBackupplanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dbs_backupplan#backup_method DbsBackupplan#backup_method}
  */
  readonly backupMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dbs_backupplan#backup_plan_name DbsBackupplan#backup_plan_name}
  */
  readonly backupPlanName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dbs_backupplan#database_region DbsBackupplan#database_region}
  */
  readonly databaseRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dbs_backupplan#database_type DbsBackupplan#database_type}
  */
  readonly databaseType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dbs_backupplan#from_app DbsBackupplan#from_app}
  */
  readonly fromApp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dbs_backupplan#id DbsBackupplan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dbs_backupplan#instance_class DbsBackupplan#instance_class}
  */
  readonly instanceClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dbs_backupplan#instance_type DbsBackupplan#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dbs_backupplan#storage_region DbsBackupplan#storage_region}
  */
  readonly storageRegion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dbs_backupplan alibabacloudstack_dbs_backupplan}
*/
export class DbsBackupplan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_dbs_backupplan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbsBackupplan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbsBackupplan to import
  * @param importFromId The id of the existing DbsBackupplan that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dbs_backupplan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbsBackupplan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_dbs_backupplan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dbs_backupplan alibabacloudstack_dbs_backupplan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbsBackupplanConfig
  */
  public constructor(scope: Construct, id: string, config: DbsBackupplanConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_dbs_backupplan',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupMethod = config.backupMethod;
    this._backupPlanName = config.backupPlanName;
    this._databaseRegion = config.databaseRegion;
    this._databaseType = config.databaseType;
    this._fromApp = config.fromApp;
    this._id = config.id;
    this._instanceClass = config.instanceClass;
    this._instanceType = config.instanceType;
    this._storageRegion = config.storageRegion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_method - computed: false, optional: false, required: true
  private _backupMethod?: string; 
  public get backupMethod() {
    return this.getStringAttribute('backup_method');
  }
  public set backupMethod(value: string) {
    this._backupMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMethodInput() {
    return this._backupMethod;
  }

  // backup_plan_id - computed: true, optional: false, required: false
  public get backupPlanId() {
    return this.getStringAttribute('backup_plan_id');
  }

  // backup_plan_name - computed: true, optional: true, required: false
  private _backupPlanName?: string; 
  public get backupPlanName() {
    return this.getStringAttribute('backup_plan_name');
  }
  public set backupPlanName(value: string) {
    this._backupPlanName = value;
  }
  public resetBackupPlanName() {
    this._backupPlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanNameInput() {
    return this._backupPlanName;
  }

  // database_region - computed: false, optional: true, required: false
  private _databaseRegion?: string; 
  public get databaseRegion() {
    return this.getStringAttribute('database_region');
  }
  public set databaseRegion(value: string) {
    this._databaseRegion = value;
  }
  public resetDatabaseRegion() {
    this._databaseRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRegionInput() {
    return this._databaseRegion;
  }

  // database_type - computed: false, optional: false, required: true
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // from_app - computed: false, optional: true, required: false
  private _fromApp?: string; 
  public get fromApp() {
    return this.getStringAttribute('from_app');
  }
  public set fromApp(value: string) {
    this._fromApp = value;
  }
  public resetFromApp() {
    this._fromApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromAppInput() {
    return this._fromApp;
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

  // instance_class - computed: false, optional: false, required: true
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // storage_region - computed: false, optional: true, required: false
  private _storageRegion?: string; 
  public get storageRegion() {
    return this.getStringAttribute('storage_region');
  }
  public set storageRegion(value: string) {
    this._storageRegion = value;
  }
  public resetStorageRegion() {
    this._storageRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRegionInput() {
    return this._storageRegion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_method: cdktf.stringToTerraform(this._backupMethod),
      backup_plan_name: cdktf.stringToTerraform(this._backupPlanName),
      database_region: cdktf.stringToTerraform(this._databaseRegion),
      database_type: cdktf.stringToTerraform(this._databaseType),
      from_app: cdktf.stringToTerraform(this._fromApp),
      id: cdktf.stringToTerraform(this._id),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      storage_region: cdktf.stringToTerraform(this._storageRegion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_method: {
        value: cdktf.stringToHclTerraform(this._backupMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_plan_name: {
        value: cdktf.stringToHclTerraform(this._backupPlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_region: {
        value: cdktf.stringToHclTerraform(this._databaseRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_app: {
        value: cdktf.stringToHclTerraform(this._fromApp),
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
      instance_class: {
        value: cdktf.stringToHclTerraform(this._instanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_region: {
        value: cdktf.stringToHclTerraform(this._storageRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
