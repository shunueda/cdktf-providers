// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EbsDiskreplicagroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup#description EbsDiskreplicagroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup#destination_region_id EbsDiskreplicagroup#destination_region_id}
  */
  readonly destinationRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup#destination_zone_id EbsDiskreplicagroup#destination_zone_id}
  */
  readonly destinationZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup#disk_replica_group_name EbsDiskreplicagroup#disk_replica_group_name}
  */
  readonly diskReplicaGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup#id EbsDiskreplicagroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup#last_recover_point EbsDiskreplicagroup#last_recover_point}
  */
  readonly lastRecoverPoint?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup#region_id EbsDiskreplicagroup#region_id}
  */
  readonly regionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup#rpo EbsDiskreplicagroup#rpo}
  */
  readonly rpo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup#site EbsDiskreplicagroup#site}
  */
  readonly site?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup#source_region_id EbsDiskreplicagroup#source_region_id}
  */
  readonly sourceRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup#source_zone_id EbsDiskreplicagroup#source_zone_id}
  */
  readonly sourceZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup#status EbsDiskreplicagroup#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup#tags EbsDiskreplicagroup#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup alibabacloudstack_ebs_diskreplicagroup}
*/
export class EbsDiskreplicagroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ebs_diskreplicagroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EbsDiskreplicagroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EbsDiskreplicagroup to import
  * @param importFromId The id of the existing EbsDiskreplicagroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EbsDiskreplicagroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ebs_diskreplicagroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ebs_diskreplicagroup alibabacloudstack_ebs_diskreplicagroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EbsDiskreplicagroupConfig
  */
  public constructor(scope: Construct, id: string, config: EbsDiskreplicagroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ebs_diskreplicagroup',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
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
    this._id = config.id;
    this._lastRecoverPoint = config.lastRecoverPoint;
    this._regionId = config.regionId;
    this._rpo = config.rpo;
    this._site = config.site;
    this._sourceRegionId = config.sourceRegionId;
    this._sourceZoneId = config.sourceZoneId;
    this._status = config.status;
    this._tags = config.tags;
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

  // disk_replica_group_name - computed: false, optional: true, required: false
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

  // pair_ids - computed: true, optional: false, required: false
  public get pairIds() {
    return this.getListAttribute('pair_ids');
  }

  // pair_number - computed: true, optional: false, required: false
  public get pairNumber() {
    return this.getNumberAttribute('pair_number');
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // replica_group_id - computed: true, optional: false, required: false
  public get replicaGroupId() {
    return this.getStringAttribute('replica_group_id');
  }

  // rpo - computed: true, optional: true, required: false
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

  // site - computed: false, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination_region_id: cdktf.stringToTerraform(this._destinationRegionId),
      destination_zone_id: cdktf.stringToTerraform(this._destinationZoneId),
      disk_replica_group_name: cdktf.stringToTerraform(this._diskReplicaGroupName),
      id: cdktf.stringToTerraform(this._id),
      last_recover_point: cdktf.numberToTerraform(this._lastRecoverPoint),
      region_id: cdktf.stringToTerraform(this._regionId),
      rpo: cdktf.numberToTerraform(this._rpo),
      site: cdktf.stringToTerraform(this._site),
      source_region_id: cdktf.stringToTerraform(this._sourceRegionId),
      source_zone_id: cdktf.stringToTerraform(this._sourceZoneId),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
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
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
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
      site: {
        value: cdktf.stringToHclTerraform(this._site),
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
