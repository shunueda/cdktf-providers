// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_block_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BmBlockStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Baremetal server IDs to which you want to assign the block storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_block_storage#bm_server_ids BmBlockStorage#bm_server_ids}
  */
  readonly bmServerIds?: string[];
  /**
  * Encrypt the volume to be created and create it. When encryption is applied, performance degradation of around 10% occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_block_storage#encrypted BmBlockStorage#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_block_storage#id BmBlockStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The block storage name to create. (3 to 28 characters with -)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_block_storage#name BmBlockStorage#name}
  */
  readonly name: string;
  /**
  * You can use by selecting SSD or HDD based storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_block_storage#product_name BmBlockStorage#product_name}
  */
  readonly productName?: string;
  /**
  * schedule for snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_block_storage#snap_shot_schedule BmBlockStorage#snap_shot_schedule}
  */
  readonly snapShotSchedule?: { [key: string]: string };
  /**
  * snapshot capacity rate(100 ~ 500)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_block_storage#snapshot_capacity_rate BmBlockStorage#snapshot_capacity_rate}
  */
  readonly snapshotCapacityRate?: number;
  /**
  * Use an additional 100-300% of the Block Storage capacity you created. If auto-creation is set, snapshots are created and saved automatically according to the specified cycle. You can restore using the saved snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_block_storage#snapshot_policy BmBlockStorage#snapshot_policy}
  */
  readonly snapshotPolicy?: boolean | cdktf.IResolvable;
  /**
  * The storage size(GB) of the block storage to create. (10 to  16384 GB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_block_storage#storage_size_gb BmBlockStorage#storage_size_gb}
  */
  readonly storageSizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_block_storage#tags BmBlockStorage#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_block_storage samsungcloudplatform_bm_block_storage}
*/
export class BmBlockStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_bm_block_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BmBlockStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BmBlockStorage to import
  * @param importFromId The id of the existing BmBlockStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_block_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BmBlockStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_bm_block_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_block_storage samsungcloudplatform_bm_block_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BmBlockStorageConfig
  */
  public constructor(scope: Construct, id: string, config: BmBlockStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_bm_block_storage',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bmServerIds = config.bmServerIds;
    this._encrypted = config.encrypted;
    this._id = config.id;
    this._name = config.name;
    this._productName = config.productName;
    this._snapShotSchedule = config.snapShotSchedule;
    this._snapshotCapacityRate = config.snapshotCapacityRate;
    this._snapshotPolicy = config.snapshotPolicy;
    this._storageSizeGb = config.storageSizeGb;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bm_server_ids - computed: false, optional: true, required: false
  private _bmServerIds?: string[]; 
  public get bmServerIds() {
    return this.getListAttribute('bm_server_ids');
  }
  public set bmServerIds(value: string[]) {
    this._bmServerIds = value;
  }
  public resetBmServerIds() {
    this._bmServerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmServerIdsInput() {
    return this._bmServerIds;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // product_name - computed: false, optional: true, required: false
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // snap_shot_schedule - computed: false, optional: true, required: false
  private _snapShotSchedule?: { [key: string]: string }; 
  public get snapShotSchedule() {
    return this.getStringMapAttribute('snap_shot_schedule');
  }
  public set snapShotSchedule(value: { [key: string]: string }) {
    this._snapShotSchedule = value;
  }
  public resetSnapShotSchedule() {
    this._snapShotSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapShotScheduleInput() {
    return this._snapShotSchedule;
  }

  // snapshot_capacity_rate - computed: false, optional: true, required: false
  private _snapshotCapacityRate?: number; 
  public get snapshotCapacityRate() {
    return this.getNumberAttribute('snapshot_capacity_rate');
  }
  public set snapshotCapacityRate(value: number) {
    this._snapshotCapacityRate = value;
  }
  public resetSnapshotCapacityRate() {
    this._snapshotCapacityRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotCapacityRateInput() {
    return this._snapshotCapacityRate;
  }

  // snapshot_policy - computed: false, optional: true, required: false
  private _snapshotPolicy?: boolean | cdktf.IResolvable; 
  public get snapshotPolicy() {
    return this.getBooleanAttribute('snapshot_policy');
  }
  public set snapshotPolicy(value: boolean | cdktf.IResolvable) {
    this._snapshotPolicy = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy;
  }

  // storage_size_gb - computed: false, optional: false, required: true
  private _storageSizeGb?: number; 
  public get storageSizeGb() {
    return this.getNumberAttribute('storage_size_gb');
  }
  public set storageSizeGb(value: number) {
    this._storageSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeGbInput() {
    return this._storageSizeGb;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bm_server_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bmServerIds),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      product_name: cdktf.stringToTerraform(this._productName),
      snap_shot_schedule: cdktf.hashMapper(cdktf.stringToTerraform)(this._snapShotSchedule),
      snapshot_capacity_rate: cdktf.numberToTerraform(this._snapshotCapacityRate),
      snapshot_policy: cdktf.booleanToTerraform(this._snapshotPolicy),
      storage_size_gb: cdktf.numberToTerraform(this._storageSizeGb),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bm_server_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bmServerIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snap_shot_schedule: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._snapShotSchedule),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      snapshot_capacity_rate: {
        value: cdktf.numberToHclTerraform(this._snapshotCapacityRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_policy: {
        value: cdktf.booleanToHclTerraform(this._snapshotPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_size_gb: {
        value: cdktf.numberToHclTerraform(this._storageSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
