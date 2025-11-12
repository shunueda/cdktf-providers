// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockstorageQuotasetV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#backup_gigabytes BlockstorageQuotasetV2#backup_gigabytes}
  */
  readonly backupGigabytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#backups BlockstorageQuotasetV2#backups}
  */
  readonly backups?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#gigabytes BlockstorageQuotasetV2#gigabytes}
  */
  readonly gigabytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#groups BlockstorageQuotasetV2#groups}
  */
  readonly groups?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#id BlockstorageQuotasetV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#per_volume_gigabytes BlockstorageQuotasetV2#per_volume_gigabytes}
  */
  readonly perVolumeGigabytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#project_id BlockstorageQuotasetV2#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#region BlockstorageQuotasetV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#snapshots BlockstorageQuotasetV2#snapshots}
  */
  readonly snapshots?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#volume_type_quota BlockstorageQuotasetV2#volume_type_quota}
  */
  readonly volumeTypeQuota?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#volumes BlockstorageQuotasetV2#volumes}
  */
  readonly volumes?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#timeouts BlockstorageQuotasetV2#timeouts}
  */
  readonly timeouts?: BlockstorageQuotasetV2Timeouts;
}
export interface BlockstorageQuotasetV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#create BlockstorageQuotasetV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#delete BlockstorageQuotasetV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#update BlockstorageQuotasetV2#update}
  */
  readonly update?: string;
}

export function blockstorageQuotasetV2TimeoutsToTerraform(struct?: BlockstorageQuotasetV2Timeouts | cdktf.IResolvable): any {
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


export function blockstorageQuotasetV2TimeoutsToHclTerraform(struct?: BlockstorageQuotasetV2Timeouts | cdktf.IResolvable): any {
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

export class BlockstorageQuotasetV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BlockstorageQuotasetV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BlockstorageQuotasetV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2 nhncloud_blockstorage_quotaset_v2}
*/
export class BlockstorageQuotasetV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_blockstorage_quotaset_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockstorageQuotasetV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockstorageQuotasetV2 to import
  * @param importFromId The id of the existing BlockstorageQuotasetV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockstorageQuotasetV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_blockstorage_quotaset_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/blockstorage_quotaset_v2 nhncloud_blockstorage_quotaset_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockstorageQuotasetV2Config
  */
  public constructor(scope: Construct, id: string, config: BlockstorageQuotasetV2Config) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_blockstorage_quotaset_v2',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupGigabytes = config.backupGigabytes;
    this._backups = config.backups;
    this._gigabytes = config.gigabytes;
    this._groups = config.groups;
    this._id = config.id;
    this._perVolumeGigabytes = config.perVolumeGigabytes;
    this._projectId = config.projectId;
    this._region = config.region;
    this._snapshots = config.snapshots;
    this._volumeTypeQuota = config.volumeTypeQuota;
    this._volumes = config.volumes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_gigabytes - computed: true, optional: true, required: false
  private _backupGigabytes?: number; 
  public get backupGigabytes() {
    return this.getNumberAttribute('backup_gigabytes');
  }
  public set backupGigabytes(value: number) {
    this._backupGigabytes = value;
  }
  public resetBackupGigabytes() {
    this._backupGigabytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupGigabytesInput() {
    return this._backupGigabytes;
  }

  // backups - computed: true, optional: true, required: false
  private _backups?: number; 
  public get backups() {
    return this.getNumberAttribute('backups');
  }
  public set backups(value: number) {
    this._backups = value;
  }
  public resetBackups() {
    this._backups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsInput() {
    return this._backups;
  }

  // gigabytes - computed: true, optional: true, required: false
  private _gigabytes?: number; 
  public get gigabytes() {
    return this.getNumberAttribute('gigabytes');
  }
  public set gigabytes(value: number) {
    this._gigabytes = value;
  }
  public resetGigabytes() {
    this._gigabytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gigabytesInput() {
    return this._gigabytes;
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: number; 
  public get groups() {
    return this.getNumberAttribute('groups');
  }
  public set groups(value: number) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // per_volume_gigabytes - computed: true, optional: true, required: false
  private _perVolumeGigabytes?: number; 
  public get perVolumeGigabytes() {
    return this.getNumberAttribute('per_volume_gigabytes');
  }
  public set perVolumeGigabytes(value: number) {
    this._perVolumeGigabytes = value;
  }
  public resetPerVolumeGigabytes() {
    this._perVolumeGigabytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perVolumeGigabytesInput() {
    return this._perVolumeGigabytes;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // snapshots - computed: true, optional: true, required: false
  private _snapshots?: number; 
  public get snapshots() {
    return this.getNumberAttribute('snapshots');
  }
  public set snapshots(value: number) {
    this._snapshots = value;
  }
  public resetSnapshots() {
    this._snapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsInput() {
    return this._snapshots;
  }

  // volume_type_quota - computed: false, optional: true, required: false
  private _volumeTypeQuota?: { [key: string]: string }; 
  public get volumeTypeQuota() {
    return this.getStringMapAttribute('volume_type_quota');
  }
  public set volumeTypeQuota(value: { [key: string]: string }) {
    this._volumeTypeQuota = value;
  }
  public resetVolumeTypeQuota() {
    this._volumeTypeQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeQuotaInput() {
    return this._volumeTypeQuota;
  }

  // volumes - computed: true, optional: true, required: false
  private _volumes?: number; 
  public get volumes() {
    return this.getNumberAttribute('volumes');
  }
  public set volumes(value: number) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BlockstorageQuotasetV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BlockstorageQuotasetV2Timeouts) {
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
      backup_gigabytes: cdktf.numberToTerraform(this._backupGigabytes),
      backups: cdktf.numberToTerraform(this._backups),
      gigabytes: cdktf.numberToTerraform(this._gigabytes),
      groups: cdktf.numberToTerraform(this._groups),
      id: cdktf.stringToTerraform(this._id),
      per_volume_gigabytes: cdktf.numberToTerraform(this._perVolumeGigabytes),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      snapshots: cdktf.numberToTerraform(this._snapshots),
      volume_type_quota: cdktf.hashMapper(cdktf.stringToTerraform)(this._volumeTypeQuota),
      volumes: cdktf.numberToTerraform(this._volumes),
      timeouts: blockstorageQuotasetV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_gigabytes: {
        value: cdktf.numberToHclTerraform(this._backupGigabytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backups: {
        value: cdktf.numberToHclTerraform(this._backups),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gigabytes: {
        value: cdktf.numberToHclTerraform(this._gigabytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      groups: {
        value: cdktf.numberToHclTerraform(this._groups),
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
      per_volume_gigabytes: {
        value: cdktf.numberToHclTerraform(this._perVolumeGigabytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshots: {
        value: cdktf.numberToHclTerraform(this._snapshots),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      volume_type_quota: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._volumeTypeQuota),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      volumes: {
        value: cdktf.numberToHclTerraform(this._volumes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: blockstorageQuotasetV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BlockstorageQuotasetV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
