// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackEcsDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#availability_zone ApsarastackEcsDisk#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#category ApsarastackEcsDisk#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#delete_auto_snapshot ApsarastackEcsDisk#delete_auto_snapshot}
  */
  readonly deleteAutoSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#delete_with_instance ApsarastackEcsDisk#delete_with_instance}
  */
  readonly deleteWithInstance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#description ApsarastackEcsDisk#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#disk_name ApsarastackEcsDisk#disk_name}
  */
  readonly diskName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#enable_auto_snapshot ApsarastackEcsDisk#enable_auto_snapshot}
  */
  readonly enableAutoSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#encrypt_algorithm ApsarastackEcsDisk#encrypt_algorithm}
  */
  readonly encryptAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#encrypted ApsarastackEcsDisk#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#id ApsarastackEcsDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#kms_key_id ApsarastackEcsDisk#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#name ApsarastackEcsDisk#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#size ApsarastackEcsDisk#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#snapshot_id ApsarastackEcsDisk#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#tags ApsarastackEcsDisk#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#zone_id ApsarastackEcsDisk#zone_id}
  */
  readonly zoneId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk apsarastack_ecs_disk}
*/
export class ApsarastackEcsDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_ecs_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackEcsDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackEcsDisk to import
  * @param importFromId The id of the existing ApsarastackEcsDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackEcsDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_ecs_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ecs_disk apsarastack_ecs_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackEcsDiskConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApsarastackEcsDiskConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_ecs_disk',
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
    this._availabilityZone = config.availabilityZone;
    this._category = config.category;
    this._deleteAutoSnapshot = config.deleteAutoSnapshot;
    this._deleteWithInstance = config.deleteWithInstance;
    this._description = config.description;
    this._diskName = config.diskName;
    this._enableAutoSnapshot = config.enableAutoSnapshot;
    this._encryptAlgorithm = config.encryptAlgorithm;
    this._encrypted = config.encrypted;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._size = config.size;
    this._snapshotId = config.snapshotId;
    this._tags = config.tags;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_snapshot_policy_id - computed: true, optional: false, required: false
  public get autoSnapshotPolicyId() {
    return this.getStringAttribute('auto_snapshot_policy_id');
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // delete_auto_snapshot - computed: false, optional: true, required: false
  private _deleteAutoSnapshot?: boolean | cdktf.IResolvable; 
  public get deleteAutoSnapshot() {
    return this.getBooleanAttribute('delete_auto_snapshot');
  }
  public set deleteAutoSnapshot(value: boolean | cdktf.IResolvable) {
    this._deleteAutoSnapshot = value;
  }
  public resetDeleteAutoSnapshot() {
    this._deleteAutoSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAutoSnapshotInput() {
    return this._deleteAutoSnapshot;
  }

  // delete_with_instance - computed: false, optional: true, required: false
  private _deleteWithInstance?: boolean | cdktf.IResolvable; 
  public get deleteWithInstance() {
    return this.getBooleanAttribute('delete_with_instance');
  }
  public set deleteWithInstance(value: boolean | cdktf.IResolvable) {
    this._deleteWithInstance = value;
  }
  public resetDeleteWithInstance() {
    this._deleteWithInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteWithInstanceInput() {
    return this._deleteWithInstance;
  }

  // description - computed: false, optional: true, required: false
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

  // disk_name - computed: true, optional: true, required: false
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  public resetDiskName() {
    this._diskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // enable_auto_snapshot - computed: false, optional: true, required: false
  private _enableAutoSnapshot?: boolean | cdktf.IResolvable; 
  public get enableAutoSnapshot() {
    return this.getBooleanAttribute('enable_auto_snapshot');
  }
  public set enableAutoSnapshot(value: boolean | cdktf.IResolvable) {
    this._enableAutoSnapshot = value;
  }
  public resetEnableAutoSnapshot() {
    this._enableAutoSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoSnapshotInput() {
    return this._enableAutoSnapshot;
  }

  // enable_automated_snapshot_policy - computed: true, optional: false, required: false
  public get enableAutomatedSnapshotPolicy() {
    return this.getBooleanAttribute('enable_automated_snapshot_policy');
  }

  // encrypt_algorithm - computed: false, optional: true, required: false
  private _encryptAlgorithm?: string; 
  public get encryptAlgorithm() {
    return this.getStringAttribute('encrypt_algorithm');
  }
  public set encryptAlgorithm(value: string) {
    this._encryptAlgorithm = value;
  }
  public resetEncryptAlgorithm() {
    this._encryptAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAlgorithmInput() {
    return this._encryptAlgorithm;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
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

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
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

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      category: cdktf.stringToTerraform(this._category),
      delete_auto_snapshot: cdktf.booleanToTerraform(this._deleteAutoSnapshot),
      delete_with_instance: cdktf.booleanToTerraform(this._deleteWithInstance),
      description: cdktf.stringToTerraform(this._description),
      disk_name: cdktf.stringToTerraform(this._diskName),
      enable_auto_snapshot: cdktf.booleanToTerraform(this._enableAutoSnapshot),
      encrypt_algorithm: cdktf.stringToTerraform(this._encryptAlgorithm),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      size: cdktf.numberToTerraform(this._size),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_auto_snapshot: {
        value: cdktf.booleanToHclTerraform(this._deleteAutoSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_with_instance: {
        value: cdktf.booleanToHclTerraform(this._deleteWithInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_name: {
        value: cdktf.stringToHclTerraform(this._diskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_auto_snapshot: {
        value: cdktf.booleanToHclTerraform(this._enableAutoSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_algorithm: {
        value: cdktf.stringToHclTerraform(this._encryptAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypted: {
        value: cdktf.booleanToHclTerraform(this._encrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
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
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
