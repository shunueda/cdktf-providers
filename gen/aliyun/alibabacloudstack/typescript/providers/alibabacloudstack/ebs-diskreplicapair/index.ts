// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EbsDiskreplicapairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair#description EbsDiskreplicapair#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair#destination_disk_id EbsDiskreplicapair#destination_disk_id}
  */
  readonly destinationDiskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair#destination_region_id EbsDiskreplicapair#destination_region_id}
  */
  readonly destinationRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair#destination_zone_id EbsDiskreplicapair#destination_zone_id}
  */
  readonly destinationZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair#disk_replica_pair_name EbsDiskreplicapair#disk_replica_pair_name}
  */
  readonly diskReplicaPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair#id EbsDiskreplicapair#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair#last_recover_point EbsDiskreplicapair#last_recover_point}
  */
  readonly lastRecoverPoint?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair#one_shot EbsDiskreplicapair#one_shot}
  */
  readonly oneShot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair#replica_group_id EbsDiskreplicapair#replica_group_id}
  */
  readonly replicaGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair#rpo EbsDiskreplicapair#rpo}
  */
  readonly rpo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair#source_disk_id EbsDiskreplicapair#source_disk_id}
  */
  readonly sourceDiskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair#source_region_id EbsDiskreplicapair#source_region_id}
  */
  readonly sourceRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair#source_zone_id EbsDiskreplicapair#source_zone_id}
  */
  readonly sourceZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair#status EbsDiskreplicapair#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair alibabacloudstack_ebs_diskreplicapair}
*/
export class EbsDiskreplicapair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ebs_diskreplicapair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EbsDiskreplicapair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EbsDiskreplicapair to import
  * @param importFromId The id of the existing EbsDiskreplicapair that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EbsDiskreplicapair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ebs_diskreplicapair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/ebs_diskreplicapair alibabacloudstack_ebs_diskreplicapair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EbsDiskreplicapairConfig
  */
  public constructor(scope: Construct, id: string, config: EbsDiskreplicapairConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ebs_diskreplicapair',
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
    this._description = config.description;
    this._destinationDiskId = config.destinationDiskId;
    this._destinationRegionId = config.destinationRegionId;
    this._destinationZoneId = config.destinationZoneId;
    this._diskReplicaPairName = config.diskReplicaPairName;
    this._id = config.id;
    this._lastRecoverPoint = config.lastRecoverPoint;
    this._oneShot = config.oneShot;
    this._replicaGroupId = config.replicaGroupId;
    this._rpo = config.rpo;
    this._sourceDiskId = config.sourceDiskId;
    this._sourceRegionId = config.sourceRegionId;
    this._sourceZoneId = config.sourceZoneId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // destination_disk_id - computed: false, optional: false, required: true
  private _destinationDiskId?: string; 
  public get destinationDiskId() {
    return this.getStringAttribute('destination_disk_id');
  }
  public set destinationDiskId(value: string) {
    this._destinationDiskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDiskIdInput() {
    return this._destinationDiskId;
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

  // disk_replica_pair_name - computed: false, optional: true, required: false
  private _diskReplicaPairName?: string; 
  public get diskReplicaPairName() {
    return this.getStringAttribute('disk_replica_pair_name');
  }
  public set diskReplicaPairName(value: string) {
    this._diskReplicaPairName = value;
  }
  public resetDiskReplicaPairName() {
    this._diskReplicaPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskReplicaPairNameInput() {
    return this._diskReplicaPairName;
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

  // last_recover_point - computed: true, optional: true, required: false
  private _lastRecoverPoint?: number; 
  public get lastRecoverPoint() {
    return this.getNumberAttribute('last_recover_point');
  }
  public set lastRecoverPoint(value: number) {
    this._lastRecoverPoint = value;
  }
  public resetLastRecoverPoint() {
    this._lastRecoverPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRecoverPointInput() {
    return this._lastRecoverPoint;
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

  // replica_group_id - computed: false, optional: true, required: false
  private _replicaGroupId?: string; 
  public get replicaGroupId() {
    return this.getStringAttribute('replica_group_id');
  }
  public set replicaGroupId(value: string) {
    this._replicaGroupId = value;
  }
  public resetReplicaGroupId() {
    this._replicaGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaGroupIdInput() {
    return this._replicaGroupId;
  }

  // replica_pair_id - computed: true, optional: false, required: false
  public get replicaPairId() {
    return this.getStringAttribute('replica_pair_id');
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

  // source_disk_id - computed: false, optional: false, required: true
  private _sourceDiskId?: string; 
  public get sourceDiskId() {
    return this.getStringAttribute('source_disk_id');
  }
  public set sourceDiskId(value: string) {
    this._sourceDiskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDiskIdInput() {
    return this._sourceDiskId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination_disk_id: cdktf.stringToTerraform(this._destinationDiskId),
      destination_region_id: cdktf.stringToTerraform(this._destinationRegionId),
      destination_zone_id: cdktf.stringToTerraform(this._destinationZoneId),
      disk_replica_pair_name: cdktf.stringToTerraform(this._diskReplicaPairName),
      id: cdktf.stringToTerraform(this._id),
      last_recover_point: cdktf.numberToTerraform(this._lastRecoverPoint),
      one_shot: cdktf.booleanToTerraform(this._oneShot),
      replica_group_id: cdktf.stringToTerraform(this._replicaGroupId),
      rpo: cdktf.numberToTerraform(this._rpo),
      source_disk_id: cdktf.stringToTerraform(this._sourceDiskId),
      source_region_id: cdktf.stringToTerraform(this._sourceRegionId),
      source_zone_id: cdktf.stringToTerraform(this._sourceZoneId),
      status: cdktf.stringToTerraform(this._status),
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
      destination_disk_id: {
        value: cdktf.stringToHclTerraform(this._destinationDiskId),
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
      disk_replica_pair_name: {
        value: cdktf.stringToHclTerraform(this._diskReplicaPairName),
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
      last_recover_point: {
        value: cdktf.numberToHclTerraform(this._lastRecoverPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      one_shot: {
        value: cdktf.booleanToHclTerraform(this._oneShot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replica_group_id: {
        value: cdktf.stringToHclTerraform(this._replicaGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpo: {
        value: cdktf.numberToHclTerraform(this._rpo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_disk_id: {
        value: cdktf.stringToHclTerraform(this._sourceDiskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
