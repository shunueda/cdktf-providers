// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EbsDiskReplicaGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#description EbsDiskReplicaGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#destination_region_id EbsDiskReplicaGroup#destination_region_id}
  */
  readonly destinationRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#destination_zone_id EbsDiskReplicaGroup#destination_zone_id}
  */
  readonly destinationZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#disk_replica_group_name EbsDiskReplicaGroup#disk_replica_group_name}
  */
  readonly diskReplicaGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#group_name EbsDiskReplicaGroup#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#id EbsDiskReplicaGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#one_shot EbsDiskReplicaGroup#one_shot}
  */
  readonly oneShot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#pair_ids EbsDiskReplicaGroup#pair_ids}
  */
  readonly pairIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#resource_group_id EbsDiskReplicaGroup#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#reverse_replicate EbsDiskReplicaGroup#reverse_replicate}
  */
  readonly reverseReplicate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#rpo EbsDiskReplicaGroup#rpo}
  */
  readonly rpo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#source_region_id EbsDiskReplicaGroup#source_region_id}
  */
  readonly sourceRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#source_zone_id EbsDiskReplicaGroup#source_zone_id}
  */
  readonly sourceZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#status EbsDiskReplicaGroup#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#tags EbsDiskReplicaGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#timeouts EbsDiskReplicaGroup#timeouts}
  */
  readonly timeouts?: EbsDiskReplicaGroupTimeouts;
}
export interface EbsDiskReplicaGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#create EbsDiskReplicaGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#delete EbsDiskReplicaGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#update EbsDiskReplicaGroup#update}
  */
  readonly update?: string;
}

export function ebsDiskReplicaGroupTimeoutsToTerraform(struct?: EbsDiskReplicaGroupTimeouts | cdktf.IResolvable): any {
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


export function ebsDiskReplicaGroupTimeoutsToHclTerraform(struct?: EbsDiskReplicaGroupTimeouts | cdktf.IResolvable): any {
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

export class EbsDiskReplicaGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EbsDiskReplicaGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EbsDiskReplicaGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group alicloud_ebs_disk_replica_group}
*/
export class EbsDiskReplicaGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ebs_disk_replica_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EbsDiskReplicaGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EbsDiskReplicaGroup to import
  * @param importFromId The id of the existing EbsDiskReplicaGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EbsDiskReplicaGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ebs_disk_replica_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ebs_disk_replica_group alicloud_ebs_disk_replica_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EbsDiskReplicaGroupConfig
  */
  public constructor(scope: Construct, id: string, config: EbsDiskReplicaGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ebs_disk_replica_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._destinationRegionId = config.destinationRegionId;
    this._destinationZoneId = config.destinationZoneId;
    this._diskReplicaGroupName = config.diskReplicaGroupName;
    this._groupName = config.groupName;
    this._id = config.id;
    this._oneShot = config.oneShot;
    this._pairIds = config.pairIds;
    this._resourceGroupId = config.resourceGroupId;
    this._reverseReplicate = config.reverseReplicate;
    this._rpo = config.rpo;
    this._sourceRegionId = config.sourceRegionId;
    this._sourceZoneId = config.sourceZoneId;
    this._status = config.status;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // destination_region_id - computed: false, optional: false, required: true
  private _destinationRegionId?: string; 
  public get destinationRegionId() {
    return this.getStringAttribute('destination_region_id');
  }
  public set destinationRegionId(value: string) {
    this._destinationRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegionIdInput() {
    return this._destinationRegionId;
  }

  // destination_zone_id - computed: false, optional: false, required: true
  private _destinationZoneId?: string; 
  public get destinationZoneId() {
    return this.getStringAttribute('destination_zone_id');
  }
  public set destinationZoneId(value: string) {
    this._destinationZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationZoneIdInput() {
    return this._destinationZoneId;
  }

  // disk_replica_group_name - computed: true, optional: true, required: false
  private _diskReplicaGroupName?: string; 
  public get diskReplicaGroupName() {
    return this.getStringAttribute('disk_replica_group_name');
  }
  public set diskReplicaGroupName(value: string) {
    this._diskReplicaGroupName = value;
  }
  public resetDiskReplicaGroupName() {
    this._diskReplicaGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskReplicaGroupNameInput() {
    return this._diskReplicaGroupName;
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // one_shot - computed: false, optional: true, required: false
  private _oneShot?: boolean | cdktf.IResolvable; 
  public get oneShot() {
    return this.getBooleanAttribute('one_shot');
  }
  public set oneShot(value: boolean | cdktf.IResolvable) {
    this._oneShot = value;
  }
  public resetOneShot() {
    this._oneShot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneShotInput() {
    return this._oneShot;
  }

  // pair_ids - computed: false, optional: true, required: false
  private _pairIds?: string[]; 
  public get pairIds() {
    return cdktf.Fn.tolist(this.getListAttribute('pair_ids'));
  }
  public set pairIds(value: string[]) {
    this._pairIds = value;
  }
  public resetPairIds() {
    this._pairIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairIdsInput() {
    return this._pairIds;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // reverse_replicate - computed: false, optional: true, required: false
  private _reverseReplicate?: boolean | cdktf.IResolvable; 
  public get reverseReplicate() {
    return this.getBooleanAttribute('reverse_replicate');
  }
  public set reverseReplicate(value: boolean | cdktf.IResolvable) {
    this._reverseReplicate = value;
  }
  public resetReverseReplicate() {
    this._reverseReplicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseReplicateInput() {
    return this._reverseReplicate;
  }

  // rpo - computed: false, optional: true, required: false
  private _rpo?: number; 
  public get rpo() {
    return this.getNumberAttribute('rpo');
  }
  public set rpo(value: number) {
    this._rpo = value;
  }
  public resetRpo() {
    this._rpo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInput() {
    return this._rpo;
  }

  // source_region_id - computed: false, optional: false, required: true
  private _sourceRegionId?: string; 
  public get sourceRegionId() {
    return this.getStringAttribute('source_region_id');
  }
  public set sourceRegionId(value: string) {
    this._sourceRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRegionIdInput() {
    return this._sourceRegionId;
  }

  // source_zone_id - computed: false, optional: false, required: true
  private _sourceZoneId?: string; 
  public get sourceZoneId() {
    return this.getStringAttribute('source_zone_id');
  }
  public set sourceZoneId(value: string) {
    this._sourceZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceZoneIdInput() {
    return this._sourceZoneId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EbsDiskReplicaGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EbsDiskReplicaGroupTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      destination_region_id: cdktf.stringToTerraform(this._destinationRegionId),
      destination_zone_id: cdktf.stringToTerraform(this._destinationZoneId),
      disk_replica_group_name: cdktf.stringToTerraform(this._diskReplicaGroupName),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      one_shot: cdktf.booleanToTerraform(this._oneShot),
      pair_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pairIds),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      reverse_replicate: cdktf.booleanToTerraform(this._reverseReplicate),
      rpo: cdktf.numberToTerraform(this._rpo),
      source_region_id: cdktf.stringToTerraform(this._sourceRegionId),
      source_zone_id: cdktf.stringToTerraform(this._sourceZoneId),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: ebsDiskReplicaGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_region_id: {
        value: cdktf.stringToHclTerraform(this._destinationRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_zone_id: {
        value: cdktf.stringToHclTerraform(this._destinationZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_replica_group_name: {
        value: cdktf.stringToHclTerraform(this._diskReplicaGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      one_shot: {
        value: cdktf.booleanToHclTerraform(this._oneShot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pair_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pairIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverse_replicate: {
        value: cdktf.booleanToHclTerraform(this._reverseReplicate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rpo: {
        value: cdktf.numberToHclTerraform(this._rpo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_region_id: {
        value: cdktf.stringToHclTerraform(this._sourceRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_zone_id: {
        value: cdktf.stringToHclTerraform(this._sourceZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      timeouts: {
        value: ebsDiskReplicaGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EbsDiskReplicaGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
