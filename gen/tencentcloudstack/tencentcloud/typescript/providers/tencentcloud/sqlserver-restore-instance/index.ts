// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/sqlserver_restore_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverRestoreInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backup file ID, which can be obtained through the Id field in the returned value of the DescribeBackups API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/sqlserver_restore_instance#backup_id SqlserverRestoreInstance#backup_id}
  */
  readonly backupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/sqlserver_restore_instance#id SqlserverRestoreInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/sqlserver_restore_instance#instance_id SqlserverRestoreInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * rename_restore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/sqlserver_restore_instance#rename_restore SqlserverRestoreInstance#rename_restore}
  */
  readonly renameRestore: SqlserverRestoreInstanceRenameRestore[] | cdktf.IResolvable;
}
export interface SqlserverRestoreInstanceEncryption {
}

export function sqlserverRestoreInstanceEncryptionToTerraform(struct?: SqlserverRestoreInstanceEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sqlserverRestoreInstanceEncryptionToHclTerraform(struct?: SqlserverRestoreInstanceEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SqlserverRestoreInstanceEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlserverRestoreInstanceEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverRestoreInstanceEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class SqlserverRestoreInstanceEncryptionList extends cdktf.ComplexList {

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
  public get(index: number): SqlserverRestoreInstanceEncryptionOutputReference {
    return new SqlserverRestoreInstanceEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlserverRestoreInstanceRenameRestore {
  /**
  * New database name. In offline migration, OldName will be used if NewName is left empty (OldName and NewName cannot be both empty). In database cloning, OldName and NewName must be both specified and cannot have the same value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/sqlserver_restore_instance#new_name SqlserverRestoreInstance#new_name}
  */
  readonly newName: string;
  /**
  * Database name. If the OldName database does not exist, a failure will be returned.It can be left empty in offline migration tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/sqlserver_restore_instance#old_name SqlserverRestoreInstance#old_name}
  */
  readonly oldName: string;
}

export function sqlserverRestoreInstanceRenameRestoreToTerraform(struct?: SqlserverRestoreInstanceRenameRestore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_name: cdktf.stringToTerraform(struct!.newName),
    old_name: cdktf.stringToTerraform(struct!.oldName),
  }
}


export function sqlserverRestoreInstanceRenameRestoreToHclTerraform(struct?: SqlserverRestoreInstanceRenameRestore | cdktf.IResolvable): any {
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

export class SqlserverRestoreInstanceRenameRestoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlserverRestoreInstanceRenameRestore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SqlserverRestoreInstanceRenameRestore | cdktf.IResolvable | undefined) {
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

  // new_name - computed: false, optional: false, required: true
  private _newName?: string; 
  public get newName() {
    return this.getStringAttribute('new_name');
  }
  public set newName(value: string) {
    this._newName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newNameInput() {
    return this._newName;
  }

  // old_name - computed: false, optional: false, required: true
  private _oldName?: string; 
  public get oldName() {
    return this.getStringAttribute('old_name');
  }
  public set oldName(value: string) {
    this._oldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oldNameInput() {
    return this._oldName;
  }
}

export class SqlserverRestoreInstanceRenameRestoreList extends cdktf.ComplexList {
  public internalValue? : SqlserverRestoreInstanceRenameRestore[] | cdktf.IResolvable

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
  public get(index: number): SqlserverRestoreInstanceRenameRestoreOutputReference {
    return new SqlserverRestoreInstanceRenameRestoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/sqlserver_restore_instance tencentcloud_sqlserver_restore_instance}
*/
export class SqlserverRestoreInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_restore_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverRestoreInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverRestoreInstance to import
  * @param importFromId The id of the existing SqlserverRestoreInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/sqlserver_restore_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverRestoreInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_restore_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/sqlserver_restore_instance tencentcloud_sqlserver_restore_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverRestoreInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverRestoreInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_restore_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupId = config.backupId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._renameRestore.internalValue = config.renameRestore;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_id - computed: false, optional: false, required: true
  private _backupId?: number; 
  public get backupId() {
    return this.getNumberAttribute('backup_id');
  }
  public set backupId(value: number) {
    this._backupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new SqlserverRestoreInstanceEncryptionList(this, "encryption", false);
  public get encryption() {
    return this._encryption;
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

  // rename_restore - computed: false, optional: false, required: true
  private _renameRestore = new SqlserverRestoreInstanceRenameRestoreList(this, "rename_restore", false);
  public get renameRestore() {
    return this._renameRestore;
  }
  public putRenameRestore(value: SqlserverRestoreInstanceRenameRestore[] | cdktf.IResolvable) {
    this._renameRestore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renameRestoreInput() {
    return this._renameRestore.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_id: cdktf.numberToTerraform(this._backupId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      rename_restore: cdktf.listMapper(sqlserverRestoreInstanceRenameRestoreToTerraform, true)(this._renameRestore.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_id: {
        value: cdktf.numberToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      rename_restore: {
        value: cdktf.listMapperHcl(sqlserverRestoreInstanceRenameRestoreToHclTerraform, true)(this._renameRestore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlserverRestoreInstanceRenameRestoreList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
