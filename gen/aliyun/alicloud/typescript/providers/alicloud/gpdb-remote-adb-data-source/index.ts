// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GpdbRemoteAdbDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source#data_source_name GpdbRemoteAdbDataSource#data_source_name}
  */
  readonly dataSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source#id GpdbRemoteAdbDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source#local_database GpdbRemoteAdbDataSource#local_database}
  */
  readonly localDatabase: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source#local_db_instance_id GpdbRemoteAdbDataSource#local_db_instance_id}
  */
  readonly localDbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source#manager_user_name GpdbRemoteAdbDataSource#manager_user_name}
  */
  readonly managerUserName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source#manager_user_password GpdbRemoteAdbDataSource#manager_user_password}
  */
  readonly managerUserPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source#remote_database GpdbRemoteAdbDataSource#remote_database}
  */
  readonly remoteDatabase: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source#remote_db_instance_id GpdbRemoteAdbDataSource#remote_db_instance_id}
  */
  readonly remoteDbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source#user_name GpdbRemoteAdbDataSource#user_name}
  */
  readonly userName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source#user_password GpdbRemoteAdbDataSource#user_password}
  */
  readonly userPassword: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source#timeouts GpdbRemoteAdbDataSource#timeouts}
  */
  readonly timeouts?: GpdbRemoteAdbDataSourceTimeouts;
}
export interface GpdbRemoteAdbDataSourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source#create GpdbRemoteAdbDataSource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source#delete GpdbRemoteAdbDataSource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source#update GpdbRemoteAdbDataSource#update}
  */
  readonly update?: string;
}

export function gpdbRemoteAdbDataSourceTimeoutsToTerraform(struct?: GpdbRemoteAdbDataSourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function gpdbRemoteAdbDataSourceTimeoutsToHclTerraform(struct?: GpdbRemoteAdbDataSourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpdbRemoteAdbDataSourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GpdbRemoteAdbDataSourceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpdbRemoteAdbDataSourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source alicloud_gpdb_remote_adb_data_source}
*/
export class GpdbRemoteAdbDataSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_gpdb_remote_adb_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GpdbRemoteAdbDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GpdbRemoteAdbDataSource to import
  * @param importFromId The id of the existing GpdbRemoteAdbDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GpdbRemoteAdbDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_gpdb_remote_adb_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_remote_adb_data_source alicloud_gpdb_remote_adb_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GpdbRemoteAdbDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: GpdbRemoteAdbDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_gpdb_remote_adb_data_source',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataSourceName = config.dataSourceName;
    this._id = config.id;
    this._localDatabase = config.localDatabase;
    this._localDbInstanceId = config.localDbInstanceId;
    this._managerUserName = config.managerUserName;
    this._managerUserPassword = config.managerUserPassword;
    this._remoteDatabase = config.remoteDatabase;
    this._remoteDbInstanceId = config.remoteDbInstanceId;
    this._userName = config.userName;
    this._userPassword = config.userPassword;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_source_name - computed: false, optional: true, required: false
  private _dataSourceName?: string; 
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  public resetDataSourceName() {
    this._dataSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
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

  // local_database - computed: false, optional: false, required: true
  private _localDatabase?: string; 
  public get localDatabase() {
    return this.getStringAttribute('local_database');
  }
  public set localDatabase(value: string) {
    this._localDatabase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localDatabaseInput() {
    return this._localDatabase;
  }

  // local_db_instance_id - computed: false, optional: false, required: true
  private _localDbInstanceId?: string; 
  public get localDbInstanceId() {
    return this.getStringAttribute('local_db_instance_id');
  }
  public set localDbInstanceId(value: string) {
    this._localDbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localDbInstanceIdInput() {
    return this._localDbInstanceId;
  }

  // manager_user_name - computed: false, optional: false, required: true
  private _managerUserName?: string; 
  public get managerUserName() {
    return this.getStringAttribute('manager_user_name');
  }
  public set managerUserName(value: string) {
    this._managerUserName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managerUserNameInput() {
    return this._managerUserName;
  }

  // manager_user_password - computed: false, optional: false, required: true
  private _managerUserPassword?: string; 
  public get managerUserPassword() {
    return this.getStringAttribute('manager_user_password');
  }
  public set managerUserPassword(value: string) {
    this._managerUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managerUserPasswordInput() {
    return this._managerUserPassword;
  }

  // remote_adb_data_source_id - computed: true, optional: false, required: false
  public get remoteAdbDataSourceId() {
    return this.getNumberAttribute('remote_adb_data_source_id');
  }

  // remote_database - computed: false, optional: false, required: true
  private _remoteDatabase?: string; 
  public get remoteDatabase() {
    return this.getStringAttribute('remote_database');
  }
  public set remoteDatabase(value: string) {
    this._remoteDatabase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDatabaseInput() {
    return this._remoteDatabase;
  }

  // remote_db_instance_id - computed: false, optional: false, required: true
  private _remoteDbInstanceId?: string; 
  public get remoteDbInstanceId() {
    return this.getStringAttribute('remote_db_instance_id');
  }
  public set remoteDbInstanceId(value: string) {
    this._remoteDbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDbInstanceIdInput() {
    return this._remoteDbInstanceId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_password - computed: false, optional: false, required: true
  private _userPassword?: string; 
  public get userPassword() {
    return this.getStringAttribute('user_password');
  }
  public set userPassword(value: string) {
    this._userPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GpdbRemoteAdbDataSourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GpdbRemoteAdbDataSourceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_source_name: cdktf.stringToTerraform(this._dataSourceName),
      id: cdktf.stringToTerraform(this._id),
      local_database: cdktf.stringToTerraform(this._localDatabase),
      local_db_instance_id: cdktf.stringToTerraform(this._localDbInstanceId),
      manager_user_name: cdktf.stringToTerraform(this._managerUserName),
      manager_user_password: cdktf.stringToTerraform(this._managerUserPassword),
      remote_database: cdktf.stringToTerraform(this._remoteDatabase),
      remote_db_instance_id: cdktf.stringToTerraform(this._remoteDbInstanceId),
      user_name: cdktf.stringToTerraform(this._userName),
      user_password: cdktf.stringToTerraform(this._userPassword),
      timeouts: gpdbRemoteAdbDataSourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_source_name: {
        value: cdktf.stringToHclTerraform(this._dataSourceName),
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
      local_database: {
        value: cdktf.stringToHclTerraform(this._localDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_db_instance_id: {
        value: cdktf.stringToHclTerraform(this._localDbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager_user_name: {
        value: cdktf.stringToHclTerraform(this._managerUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager_user_password: {
        value: cdktf.stringToHclTerraform(this._managerUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_database: {
        value: cdktf.stringToHclTerraform(this._remoteDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_db_instance_id: {
        value: cdktf.stringToHclTerraform(this._remoteDbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_password: {
        value: cdktf.stringToHclTerraform(this._userPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: gpdbRemoteAdbDataSourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GpdbRemoteAdbDataSourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
