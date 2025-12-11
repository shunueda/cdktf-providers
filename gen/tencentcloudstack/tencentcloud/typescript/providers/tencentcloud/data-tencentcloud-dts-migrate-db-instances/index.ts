// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDtsMigrateDbInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The owning account of the resource is null or self(resources in the self account), other(resources in the other account).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances#account_mode DataTencentcloudDtsMigrateDbInstances#account_mode}
  */
  readonly accountMode?: string;
  /**
  * Database type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances#database_type DataTencentcloudDtsMigrateDbInstances#database_type}
  */
  readonly databaseType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances#id DataTencentcloudDtsMigrateDbInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Database instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances#instance_id DataTencentcloudDtsMigrateDbInstances#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Database instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances#instance_name DataTencentcloudDtsMigrateDbInstances#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances#limit DataTencentcloudDtsMigrateDbInstances#limit}
  */
  readonly limit?: number;
  /**
  * Whether the instance is the migration source or destination,src(for source), dst(for destination).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances#migrate_role DataTencentcloudDtsMigrateDbInstances#migrate_role}
  */
  readonly migrateRole?: string;
  /**
  * Offset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances#offset DataTencentcloudDtsMigrateDbInstances#offset}
  */
  readonly offset?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances#result_output_file DataTencentcloudDtsMigrateDbInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * temporary secret id, used across account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances#tmp_secret_id DataTencentcloudDtsMigrateDbInstances#tmp_secret_id}
  */
  readonly tmpSecretId?: string;
  /**
  * temporary secret key, used across account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances#tmp_secret_key DataTencentcloudDtsMigrateDbInstances#tmp_secret_key}
  */
  readonly tmpSecretKey?: string;
  /**
  * temporary token, used across account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances#tmp_token DataTencentcloudDtsMigrateDbInstances#tmp_token}
  */
  readonly tmpToken?: string;
}
export interface DataTencentcloudDtsMigrateDbInstancesInstances {
}

export function dataTencentcloudDtsMigrateDbInstancesInstancesToTerraform(struct?: DataTencentcloudDtsMigrateDbInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDtsMigrateDbInstancesInstancesToHclTerraform(struct?: DataTencentcloudDtsMigrateDbInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDtsMigrateDbInstancesInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudDtsMigrateDbInstancesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDtsMigrateDbInstancesInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hint - computed: true, optional: false, required: false
  public get hint() {
    return this.getStringAttribute('hint');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // usable - computed: true, optional: false, required: false
  public get usable() {
    return this.getNumberAttribute('usable');
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vport - computed: true, optional: false, required: false
  public get vport() {
    return this.getNumberAttribute('vport');
  }
}

export class DataTencentcloudDtsMigrateDbInstancesInstancesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudDtsMigrateDbInstancesInstancesOutputReference {
    return new DataTencentcloudDtsMigrateDbInstancesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances tencentcloud_dts_migrate_db_instances}
*/
export class DataTencentcloudDtsMigrateDbInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dts_migrate_db_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDtsMigrateDbInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDtsMigrateDbInstances to import
  * @param importFromId The id of the existing DataTencentcloudDtsMigrateDbInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDtsMigrateDbInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dts_migrate_db_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dts_migrate_db_instances tencentcloud_dts_migrate_db_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDtsMigrateDbInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDtsMigrateDbInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dts_migrate_db_instances',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountMode = config.accountMode;
    this._databaseType = config.databaseType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceName = config.instanceName;
    this._limit = config.limit;
    this._migrateRole = config.migrateRole;
    this._offset = config.offset;
    this._resultOutputFile = config.resultOutputFile;
    this._tmpSecretId = config.tmpSecretId;
    this._tmpSecretKey = config.tmpSecretKey;
    this._tmpToken = config.tmpToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_mode - computed: false, optional: true, required: false
  private _accountMode?: string; 
  public get accountMode() {
    return this.getStringAttribute('account_mode');
  }
  public set accountMode(value: string) {
    this._accountMode = value;
  }
  public resetAccountMode() {
    this._accountMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountModeInput() {
    return this._accountMode;
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

  // instance_id - computed: false, optional: true, required: false
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataTencentcloudDtsMigrateDbInstancesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // migrate_role - computed: false, optional: true, required: false
  private _migrateRole?: string; 
  public get migrateRole() {
    return this.getStringAttribute('migrate_role');
  }
  public set migrateRole(value: string) {
    this._migrateRole = value;
  }
  public resetMigrateRole() {
    this._migrateRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateRoleInput() {
    return this._migrateRole;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // tmp_secret_id - computed: false, optional: true, required: false
  private _tmpSecretId?: string; 
  public get tmpSecretId() {
    return this.getStringAttribute('tmp_secret_id');
  }
  public set tmpSecretId(value: string) {
    this._tmpSecretId = value;
  }
  public resetTmpSecretId() {
    this._tmpSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpSecretIdInput() {
    return this._tmpSecretId;
  }

  // tmp_secret_key - computed: false, optional: true, required: false
  private _tmpSecretKey?: string; 
  public get tmpSecretKey() {
    return this.getStringAttribute('tmp_secret_key');
  }
  public set tmpSecretKey(value: string) {
    this._tmpSecretKey = value;
  }
  public resetTmpSecretKey() {
    this._tmpSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpSecretKeyInput() {
    return this._tmpSecretKey;
  }

  // tmp_token - computed: false, optional: true, required: false
  private _tmpToken?: string; 
  public get tmpToken() {
    return this.getStringAttribute('tmp_token');
  }
  public set tmpToken(value: string) {
    this._tmpToken = value;
  }
  public resetTmpToken() {
    this._tmpToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpTokenInput() {
    return this._tmpToken;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_mode: cdktf.stringToTerraform(this._accountMode),
      database_type: cdktf.stringToTerraform(this._databaseType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      limit: cdktf.numberToTerraform(this._limit),
      migrate_role: cdktf.stringToTerraform(this._migrateRole),
      offset: cdktf.numberToTerraform(this._offset),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      tmp_secret_id: cdktf.stringToTerraform(this._tmpSecretId),
      tmp_secret_key: cdktf.stringToTerraform(this._tmpSecretKey),
      tmp_token: cdktf.stringToTerraform(this._tmpToken),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_mode: {
        value: cdktf.stringToHclTerraform(this._accountMode),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      migrate_role: {
        value: cdktf.stringToHclTerraform(this._migrateRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tmp_secret_id: {
        value: cdktf.stringToHclTerraform(this._tmpSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tmp_secret_key: {
        value: cdktf.stringToHclTerraform(this._tmpSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tmp_token: {
        value: cdktf.stringToHclTerraform(this._tmpToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
