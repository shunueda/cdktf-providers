// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverMigrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#id SqlserverMigration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the migration task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#migrate_name SqlserverMigration#migrate_name}
  */
  readonly migrateName: string;
  /**
  * Migration type (1 structure migration 2 data migration 3 incremental synchronization).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#migrate_type SqlserverMigration#migrate_type}
  */
  readonly migrateType: number;
  /**
  * Type of migration source 1 TencentDB for SQLServer 2 Cloud server self-built SQLServer database 4 SQLServer backup and restore 5 SQLServer backup and restore (COS mode).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#source_type SqlserverMigration#source_type}
  */
  readonly sourceType: number;
  /**
  * migrate_db_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#migrate_db_set SqlserverMigration#migrate_db_set}
  */
  readonly migrateDbSet?: SqlserverMigrationMigrateDbSet[] | cdktf.IResolvable;
  /**
  * rename_restore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#rename_restore SqlserverMigration#rename_restore}
  */
  readonly renameRestore?: SqlserverMigrationRenameRestore[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#source SqlserverMigration#source}
  */
  readonly source: SqlserverMigrationSource;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#target SqlserverMigration#target}
  */
  readonly target: SqlserverMigrationTarget;
}
export interface SqlserverMigrationMigrateDbSet {
  /**
  * Name of the migration database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#db_name SqlserverMigration#db_name}
  */
  readonly dbName?: string;
}

export function sqlserverMigrationMigrateDbSetToTerraform(struct?: SqlserverMigrationMigrateDbSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_name: cdktf.stringToTerraform(struct!.dbName),
  }
}


export function sqlserverMigrationMigrateDbSetToHclTerraform(struct?: SqlserverMigrationMigrateDbSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlserverMigrationMigrateDbSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SqlserverMigrationMigrateDbSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverMigrationMigrateDbSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbName = value.dbName;
    }
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }
}

export class SqlserverMigrationMigrateDbSetList extends cdktf.ComplexList {
  public internalValue? : SqlserverMigrationMigrateDbSet[] | cdktf.IResolvable

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
  public get(index: number): SqlserverMigrationMigrateDbSetOutputReference {
    return new SqlserverMigrationMigrateDbSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlserverMigrationRenameRestore {
  /**
  * When the new name of the library is used for offline migration, if it is not filled in, it will be named according to OldName. OldName and NewName cannot be filled in at the same time. OldName and NewName must be filled in and cannot be duplicate when used for cloning database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#new_name SqlserverMigration#new_name}
  */
  readonly newName?: string;
  /**
  * The name of the library. If oldName does not exist, a failure is returned.It can be left blank when used for offline migration tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#old_name SqlserverMigration#old_name}
  */
  readonly oldName?: string;
}

export function sqlserverMigrationRenameRestoreToTerraform(struct?: SqlserverMigrationRenameRestore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_name: cdktf.stringToTerraform(struct!.newName),
    old_name: cdktf.stringToTerraform(struct!.oldName),
  }
}


export function sqlserverMigrationRenameRestoreToHclTerraform(struct?: SqlserverMigrationRenameRestore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_name: {
      value: cdktf.stringToHclTerraform(struct!.newName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_name: {
      value: cdktf.stringToHclTerraform(struct!.oldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlserverMigrationRenameRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SqlserverMigrationRenameRestore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newName = this._newName;
    }
    if (this._oldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldName = this._oldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverMigrationRenameRestore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newName = undefined;
      this._oldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newName = value.newName;
      this._oldName = value.oldName;
    }
  }

  // new_name - computed: false, optional: true, required: false
  private _newName?: string; 
  public get newName() {
    return this.getStringAttribute('new_name');
  }
  public set newName(value: string) {
    this._newName = value;
  }
  public resetNewName() {
    this._newName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNameInput() {
    return this._newName;
  }

  // old_name - computed: false, optional: true, required: false
  private _oldName?: string; 
  public get oldName() {
    return this.getStringAttribute('old_name');
  }
  public set oldName(value: string) {
    this._oldName = value;
  }
  public resetOldName() {
    this._oldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldNameInput() {
    return this._oldName;
  }
}

export class SqlserverMigrationRenameRestoreList extends cdktf.ComplexList {
  public internalValue? : SqlserverMigrationRenameRestore[] | cdktf.IResolvable

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
  public get(index: number): SqlserverMigrationRenameRestoreOutputReference {
    return new SqlserverMigrationRenameRestoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlserverMigrationSource {
  /**
  * ID of the migration source Cvm, used when MigrateType=2 (cloud server self-built SQL Server database).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#cvm_id SqlserverMigration#cvm_id}
  */
  readonly cvmId?: string;
  /**
  * The ID of the migration source instance, which is used when MigrateType=1 (TencentDB for SQLServers). The format is mssql-si2823jyl.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#instance_id SqlserverMigration#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Migrate the intranet IP of the self-built database of the source Cvm, and use it when MigrateType=2 (self-built SQL Server database of the cloud server).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#ip SqlserverMigration#ip}
  */
  readonly ip?: string;
  /**
  * Password, MigrateType=1 or MigrateType=2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#password SqlserverMigration#password}
  */
  readonly password?: string;
  /**
  * The port number of the self-built database of the migration source Cvm, which is used when MigrateType=2 (self-built SQL Server database of the cloud server).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#port SqlserverMigration#port}
  */
  readonly port?: number;
  /**
  * The subnet ID under the Vpc of the source Cvm is used when MigrateType=2 (ECS self-built SQL Server database). The format is as follows subnet-h9extioi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#subnet_id SqlserverMigration#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The source backup address for offline migration. MigrateType=4 or MigrateType=5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#url SqlserverMigration#url}
  */
  readonly url?: string[];
  /**
  * The source backup password for offline migration, MigrateType=4 or MigrateType=5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#url_password SqlserverMigration#url_password}
  */
  readonly urlPassword?: string;
  /**
  * User name, MigrateType=1 or MigrateType=2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#user_name SqlserverMigration#user_name}
  */
  readonly userName?: string;
  /**
  * The Vpc network ID of the migration source Cvm is used when MigrateType=2 (cloud server self-built SQL Server database). The format is as follows vpc-6ys9ont9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#vpc_id SqlserverMigration#vpc_id}
  */
  readonly vpcId?: string;
}

export function sqlserverMigrationSourceToTerraform(struct?: SqlserverMigrationSourceOutputReference | SqlserverMigrationSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cvm_id: cdktf.stringToTerraform(struct!.cvmId),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    ip: cdktf.stringToTerraform(struct!.ip),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    url: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.url),
    url_password: cdktf.stringToTerraform(struct!.urlPassword),
    user_name: cdktf.stringToTerraform(struct!.userName),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function sqlserverMigrationSourceToHclTerraform(struct?: SqlserverMigrationSourceOutputReference | SqlserverMigrationSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cvm_id: {
      value: cdktf.stringToHclTerraform(struct!.cvmId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.url),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    url_password: {
      value: cdktf.stringToHclTerraform(struct!.urlPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlserverMigrationSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlserverMigrationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cvmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmId = this._cvmId;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._urlPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPassword = this._urlPassword;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverMigrationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cvmId = undefined;
      this._instanceId = undefined;
      this._ip = undefined;
      this._password = undefined;
      this._port = undefined;
      this._subnetId = undefined;
      this._url = undefined;
      this._urlPassword = undefined;
      this._userName = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cvmId = value.cvmId;
      this._instanceId = value.instanceId;
      this._ip = value.ip;
      this._password = value.password;
      this._port = value.port;
      this._subnetId = value.subnetId;
      this._url = value.url;
      this._urlPassword = value.urlPassword;
      this._userName = value.userName;
      this._vpcId = value.vpcId;
    }
  }

  // cvm_id - computed: false, optional: true, required: false
  private _cvmId?: string; 
  public get cvmId() {
    return this.getStringAttribute('cvm_id');
  }
  public set cvmId(value: string) {
    this._cvmId = value;
  }
  public resetCvmId() {
    this._cvmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmIdInput() {
    return this._cvmId;
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

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string[]; 
  public get url() {
    return cdktf.Fn.tolist(this.getListAttribute('url'));
  }
  public set url(value: string[]) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // url_password - computed: false, optional: true, required: false
  private _urlPassword?: string; 
  public get urlPassword() {
    return this.getStringAttribute('url_password');
  }
  public set urlPassword(value: string) {
    this._urlPassword = value;
  }
  public resetUrlPassword() {
    this._urlPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPasswordInput() {
    return this._urlPassword;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface SqlserverMigrationTarget {
  /**
  * The ID of the migration target instance, in the format mssql-si2823jyl.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#instance_id SqlserverMigration#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Password of the migration target instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#password SqlserverMigration#password}
  */
  readonly password?: string;
  /**
  * User name of the migration target instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#user_name SqlserverMigration#user_name}
  */
  readonly userName?: string;
}

export function sqlserverMigrationTargetToTerraform(struct?: SqlserverMigrationTargetOutputReference | SqlserverMigrationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    password: cdktf.stringToTerraform(struct!.password),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function sqlserverMigrationTargetToHclTerraform(struct?: SqlserverMigrationTargetOutputReference | SqlserverMigrationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlserverMigrationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlserverMigrationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverMigrationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceId = undefined;
      this._password = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceId = value.instanceId;
      this._password = value.password;
      this._userName = value.userName;
    }
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration tencentcloud_sqlserver_migration}
*/
export class SqlserverMigration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_migration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverMigration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverMigration to import
  * @param importFromId The id of the existing SqlserverMigration that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverMigration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_migration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/sqlserver_migration tencentcloud_sqlserver_migration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverMigrationConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverMigrationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_migration',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._migrateName = config.migrateName;
    this._migrateType = config.migrateType;
    this._sourceType = config.sourceType;
    this._migrateDbSet.internalValue = config.migrateDbSet;
    this._renameRestore.internalValue = config.renameRestore;
    this._source.internalValue = config.source;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // migrate_name - computed: false, optional: false, required: true
  private _migrateName?: string; 
  public get migrateName() {
    return this.getStringAttribute('migrate_name');
  }
  public set migrateName(value: string) {
    this._migrateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateNameInput() {
    return this._migrateName;
  }

  // migrate_type - computed: false, optional: false, required: true
  private _migrateType?: number; 
  public get migrateType() {
    return this.getNumberAttribute('migrate_type');
  }
  public set migrateType(value: number) {
    this._migrateType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateTypeInput() {
    return this._migrateType;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: number; 
  public get sourceType() {
    return this.getNumberAttribute('source_type');
  }
  public set sourceType(value: number) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // migrate_db_set - computed: false, optional: true, required: false
  private _migrateDbSet = new SqlserverMigrationMigrateDbSetList(this, "migrate_db_set", false);
  public get migrateDbSet() {
    return this._migrateDbSet;
  }
  public putMigrateDbSet(value: SqlserverMigrationMigrateDbSet[] | cdktf.IResolvable) {
    this._migrateDbSet.internalValue = value;
  }
  public resetMigrateDbSet() {
    this._migrateDbSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateDbSetInput() {
    return this._migrateDbSet.internalValue;
  }

  // rename_restore - computed: false, optional: true, required: false
  private _renameRestore = new SqlserverMigrationRenameRestoreList(this, "rename_restore", false);
  public get renameRestore() {
    return this._renameRestore;
  }
  public putRenameRestore(value: SqlserverMigrationRenameRestore[] | cdktf.IResolvable) {
    this._renameRestore.internalValue = value;
  }
  public resetRenameRestore() {
    this._renameRestore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameRestoreInput() {
    return this._renameRestore.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new SqlserverMigrationSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SqlserverMigrationSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new SqlserverMigrationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: SqlserverMigrationTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      migrate_name: cdktf.stringToTerraform(this._migrateName),
      migrate_type: cdktf.numberToTerraform(this._migrateType),
      source_type: cdktf.numberToTerraform(this._sourceType),
      migrate_db_set: cdktf.listMapper(sqlserverMigrationMigrateDbSetToTerraform, true)(this._migrateDbSet.internalValue),
      rename_restore: cdktf.listMapper(sqlserverMigrationRenameRestoreToTerraform, true)(this._renameRestore.internalValue),
      source: sqlserverMigrationSourceToTerraform(this._source.internalValue),
      target: sqlserverMigrationTargetToTerraform(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migrate_name: {
        value: cdktf.stringToHclTerraform(this._migrateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migrate_type: {
        value: cdktf.numberToHclTerraform(this._migrateType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_type: {
        value: cdktf.numberToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      migrate_db_set: {
        value: cdktf.listMapperHcl(sqlserverMigrationMigrateDbSetToHclTerraform, true)(this._migrateDbSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlserverMigrationMigrateDbSetList",
      },
      rename_restore: {
        value: cdktf.listMapperHcl(sqlserverMigrationRenameRestoreToHclTerraform, true)(this._renameRestore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlserverMigrationRenameRestoreList",
      },
      source: {
        value: sqlserverMigrationSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlserverMigrationSourceList",
      },
      target: {
        value: sqlserverMigrationTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlserverMigrationTargetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
