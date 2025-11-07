// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/drs_replication_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DrsReplicationV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/drs_replication_v2#description DrsReplicationV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/drs_replication_v2#id DrsReplicationV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/drs_replication_v2#name DrsReplicationV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/drs_replication_v2#priority_station DrsReplicationV2#priority_station}
  */
  readonly priorityStation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/drs_replication_v2#replication_model DrsReplicationV2#replication_model}
  */
  readonly replicationModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/drs_replication_v2#volume_ids DrsReplicationV2#volume_ids}
  */
  readonly volumeIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/drs_replication_v2 flexibleengine_drs_replication_v2}
*/
export class DrsReplicationV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_drs_replication_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DrsReplicationV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DrsReplicationV2 to import
  * @param importFromId The id of the existing DrsReplicationV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/drs_replication_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DrsReplicationV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_drs_replication_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/drs_replication_v2 flexibleengine_drs_replication_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DrsReplicationV2Config
  */
  public constructor(scope: Construct, id: string, config: DrsReplicationV2Config) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_drs_replication_v2',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
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
    this._id = config.id;
    this._name = config.name;
    this._priorityStation = config.priorityStation;
    this._replicationModel = config.replicationModel;
    this._volumeIds = config.volumeIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // failure_detail - computed: true, optional: false, required: false
  public get failureDetail() {
    return this.getStringAttribute('failure_detail');
  }

  // fault_level - computed: true, optional: false, required: false
  public get faultLevel() {
    return this.getStringAttribute('fault_level');
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

  // name - computed: false, optional: true, required: false
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

  // priority_station - computed: false, optional: false, required: true
  private _priorityStation?: string; 
  public get priorityStation() {
    return this.getStringAttribute('priority_station');
  }
  public set priorityStation(value: string) {
    this._priorityStation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityStationInput() {
    return this._priorityStation;
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getStringAttribute('progress');
  }

  // record_metadata - computed: true, optional: false, required: false
  public get recordMetadata() {
    return this.getStringAttribute('record_metadata');
  }

  // replication_consistency_group_id - computed: true, optional: false, required: false
  public get replicationConsistencyGroupId() {
    return this.getStringAttribute('replication_consistency_group_id');
  }

  // replication_model - computed: false, optional: true, required: false
  private _replicationModel?: string; 
  public get replicationModel() {
    return this.getStringAttribute('replication_model');
  }
  public set replicationModel(value: string) {
    this._replicationModel = value;
  }
  public resetReplicationModel() {
    this._replicationModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationModelInput() {
    return this._replicationModel;
  }

  // replication_status - computed: true, optional: false, required: false
  public get replicationStatus() {
    return this.getStringAttribute('replication_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // volume_ids - computed: false, optional: false, required: true
  private _volumeIds?: string[]; 
  public get volumeIds() {
    return this.getListAttribute('volume_ids');
  }
  public set volumeIds(value: string[]) {
    this._volumeIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdsInput() {
    return this._volumeIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      priority_station: cdktf.stringToTerraform(this._priorityStation),
      replication_model: cdktf.stringToTerraform(this._replicationModel),
      volume_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._volumeIds),
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
      priority_station: {
        value: cdktf.stringToHclTerraform(this._priorityStation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_model: {
        value: cdktf.stringToHclTerraform(this._replicationModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._volumeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
