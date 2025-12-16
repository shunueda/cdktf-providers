// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mongodb_instance_backup_download_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbInstanceBackupDownloadTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the backup file to be downloaded can be obtained through the DescribeDBBackups interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mongodb_instance_backup_download_task#backup_name MongodbInstanceBackupDownloadTask#backup_name}
  */
  readonly backupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mongodb_instance_backup_download_task#id MongodbInstanceBackupDownloadTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID, the format is: cmgo-9d0p6umb.Same as the instance ID displayed in the cloud database console page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mongodb_instance_backup_download_task#instance_id MongodbInstanceBackupDownloadTask#instance_id}
  */
  readonly instanceId: string;
  /**
  * backup_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mongodb_instance_backup_download_task#backup_sets MongodbInstanceBackupDownloadTask#backup_sets}
  */
  readonly backupSets: MongodbInstanceBackupDownloadTaskBackupSets[] | cdktf.IResolvable;
}
export interface MongodbInstanceBackupDownloadTaskBackupSets {
  /**
  * Replication Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mongodb_instance_backup_download_task#replica_set_id MongodbInstanceBackupDownloadTask#replica_set_id}
  */
  readonly replicaSetId: string;
}

export function mongodbInstanceBackupDownloadTaskBackupSetsToTerraform(struct?: MongodbInstanceBackupDownloadTaskBackupSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replica_set_id: cdktf.stringToTerraform(struct!.replicaSetId),
  }
}


export function mongodbInstanceBackupDownloadTaskBackupSetsToHclTerraform(struct?: MongodbInstanceBackupDownloadTaskBackupSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replica_set_id: {
      value: cdktf.stringToHclTerraform(struct!.replicaSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbInstanceBackupDownloadTaskBackupSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MongodbInstanceBackupDownloadTaskBackupSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicaSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaSetId = this._replicaSetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbInstanceBackupDownloadTaskBackupSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicaSetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicaSetId = value.replicaSetId;
    }
  }

  // replica_set_id - computed: false, optional: false, required: true
  private _replicaSetId?: string; 
  public get replicaSetId() {
    return this.getStringAttribute('replica_set_id');
  }
  public set replicaSetId(value: string) {
    this._replicaSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSetIdInput() {
    return this._replicaSetId;
  }
}

export class MongodbInstanceBackupDownloadTaskBackupSetsList extends cdktf.ComplexList {
  public internalValue? : MongodbInstanceBackupDownloadTaskBackupSets[] | cdktf.IResolvable

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
  public get(index: number): MongodbInstanceBackupDownloadTaskBackupSetsOutputReference {
    return new MongodbInstanceBackupDownloadTaskBackupSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mongodb_instance_backup_download_task tencentcloud_mongodb_instance_backup_download_task}
*/
export class MongodbInstanceBackupDownloadTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mongodb_instance_backup_download_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbInstanceBackupDownloadTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbInstanceBackupDownloadTask to import
  * @param importFromId The id of the existing MongodbInstanceBackupDownloadTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mongodb_instance_backup_download_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbInstanceBackupDownloadTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mongodb_instance_backup_download_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mongodb_instance_backup_download_task tencentcloud_mongodb_instance_backup_download_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbInstanceBackupDownloadTaskConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbInstanceBackupDownloadTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mongodb_instance_backup_download_task',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
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
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._backupSets.internalValue = config.backupSets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_name - computed: false, optional: false, required: true
  private _backupName?: string; 
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
  public set backupName(value: string) {
    this._backupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNameInput() {
    return this._backupName;
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

  // backup_sets - computed: false, optional: false, required: true
  private _backupSets = new MongodbInstanceBackupDownloadTaskBackupSetsList(this, "backup_sets", false);
  public get backupSets() {
    return this._backupSets;
  }
  public putBackupSets(value: MongodbInstanceBackupDownloadTaskBackupSets[] | cdktf.IResolvable) {
    this._backupSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSetsInput() {
    return this._backupSets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_name: cdktf.stringToTerraform(this._backupName),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      backup_sets: cdktf.listMapper(mongodbInstanceBackupDownloadTaskBackupSetsToTerraform, true)(this._backupSets.internalValue),
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
      backup_sets: {
        value: cdktf.listMapperHcl(mongodbInstanceBackupDownloadTaskBackupSetsToHclTerraform, true)(this._backupSets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MongodbInstanceBackupDownloadTaskBackupSetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
