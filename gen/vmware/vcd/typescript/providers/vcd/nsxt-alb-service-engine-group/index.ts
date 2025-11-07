// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_service_engine_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtAlbServiceEngineGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * NSX-T ALB backing Cloud ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_service_engine_group#alb_cloud_id NsxtAlbServiceEngineGroup#alb_cloud_id}
  */
  readonly albCloudId: string;
  /**
  * NSX-T ALB Service Engine Group description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_service_engine_group#description NsxtAlbServiceEngineGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_service_engine_group#id NsxtAlbServiceEngineGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX-T ALB Importable Service Engine Group Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_service_engine_group#importable_service_engine_group_name NsxtAlbServiceEngineGroup#importable_service_engine_group_name}
  */
  readonly importableServiceEngineGroupName: string;
  /**
  * NSX-T ALB Service Engine Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_service_engine_group#name NsxtAlbServiceEngineGroup#name}
  */
  readonly name: string;
  /**
  * Boolean value that shows if virtual services are overallocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_service_engine_group#overallocated NsxtAlbServiceEngineGroup#overallocated}
  */
  readonly overallocated?: boolean | cdktf.IResolvable;
  /**
  * NSX-T ALB Service Engine Group reservation model. One of 'DEDICATED', 'SHARED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_service_engine_group#reservation_model NsxtAlbServiceEngineGroup#reservation_model}
  */
  readonly reservationModel: string;
  /**
  * Feature set for this ALB Service Engine Group. One of 'STANDARD', 'PREMIUM'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_service_engine_group#supported_feature_set NsxtAlbServiceEngineGroup#supported_feature_set}
  */
  readonly supportedFeatureSet?: string;
  /**
  * Boolean value that shows if sync should be performed on every refresh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_service_engine_group#sync_on_refresh NsxtAlbServiceEngineGroup#sync_on_refresh}
  */
  readonly syncOnRefresh?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_service_engine_group vcd_nsxt_alb_service_engine_group}
*/
export class NsxtAlbServiceEngineGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_alb_service_engine_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtAlbServiceEngineGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtAlbServiceEngineGroup to import
  * @param importFromId The id of the existing NsxtAlbServiceEngineGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_service_engine_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtAlbServiceEngineGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_alb_service_engine_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_service_engine_group vcd_nsxt_alb_service_engine_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtAlbServiceEngineGroupConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtAlbServiceEngineGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_alb_service_engine_group',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._albCloudId = config.albCloudId;
    this._description = config.description;
    this._id = config.id;
    this._importableServiceEngineGroupName = config.importableServiceEngineGroupName;
    this._name = config.name;
    this._overallocated = config.overallocated;
    this._reservationModel = config.reservationModel;
    this._supportedFeatureSet = config.supportedFeatureSet;
    this._syncOnRefresh = config.syncOnRefresh;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alb_cloud_id - computed: false, optional: false, required: true
  private _albCloudId?: string; 
  public get albCloudId() {
    return this.getStringAttribute('alb_cloud_id');
  }
  public set albCloudId(value: string) {
    this._albCloudId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get albCloudIdInput() {
    return this._albCloudId;
  }

  // deployed_virtual_services - computed: true, optional: false, required: false
  public get deployedVirtualServices() {
    return this.getNumberAttribute('deployed_virtual_services');
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

  // ha_mode - computed: true, optional: false, required: false
  public get haMode() {
    return this.getStringAttribute('ha_mode');
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

  // importable_service_engine_group_name - computed: false, optional: false, required: true
  private _importableServiceEngineGroupName?: string; 
  public get importableServiceEngineGroupName() {
    return this.getStringAttribute('importable_service_engine_group_name');
  }
  public set importableServiceEngineGroupName(value: string) {
    this._importableServiceEngineGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importableServiceEngineGroupNameInput() {
    return this._importableServiceEngineGroupName;
  }

  // max_virtual_services - computed: true, optional: false, required: false
  public get maxVirtualServices() {
    return this.getNumberAttribute('max_virtual_services');
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

  // overallocated - computed: false, optional: true, required: false
  private _overallocated?: boolean | cdktf.IResolvable; 
  public get overallocated() {
    return this.getBooleanAttribute('overallocated');
  }
  public set overallocated(value: boolean | cdktf.IResolvable) {
    this._overallocated = value;
  }
  public resetOverallocated() {
    this._overallocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overallocatedInput() {
    return this._overallocated;
  }

  // reservation_model - computed: false, optional: false, required: true
  private _reservationModel?: string; 
  public get reservationModel() {
    return this.getStringAttribute('reservation_model');
  }
  public set reservationModel(value: string) {
    this._reservationModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationModelInput() {
    return this._reservationModel;
  }

  // reserved_virtual_services - computed: true, optional: false, required: false
  public get reservedVirtualServices() {
    return this.getNumberAttribute('reserved_virtual_services');
  }

  // supported_feature_set - computed: true, optional: true, required: false
  private _supportedFeatureSet?: string; 
  public get supportedFeatureSet() {
    return this.getStringAttribute('supported_feature_set');
  }
  public set supportedFeatureSet(value: string) {
    this._supportedFeatureSet = value;
  }
  public resetSupportedFeatureSet() {
    this._supportedFeatureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedFeatureSetInput() {
    return this._supportedFeatureSet;
  }

  // sync_on_refresh - computed: false, optional: true, required: false
  private _syncOnRefresh?: boolean | cdktf.IResolvable; 
  public get syncOnRefresh() {
    return this.getBooleanAttribute('sync_on_refresh');
  }
  public set syncOnRefresh(value: boolean | cdktf.IResolvable) {
    this._syncOnRefresh = value;
  }
  public resetSyncOnRefresh() {
    this._syncOnRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOnRefreshInput() {
    return this._syncOnRefresh;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alb_cloud_id: cdktf.stringToTerraform(this._albCloudId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      importable_service_engine_group_name: cdktf.stringToTerraform(this._importableServiceEngineGroupName),
      name: cdktf.stringToTerraform(this._name),
      overallocated: cdktf.booleanToTerraform(this._overallocated),
      reservation_model: cdktf.stringToTerraform(this._reservationModel),
      supported_feature_set: cdktf.stringToTerraform(this._supportedFeatureSet),
      sync_on_refresh: cdktf.booleanToTerraform(this._syncOnRefresh),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alb_cloud_id: {
        value: cdktf.stringToHclTerraform(this._albCloudId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      importable_service_engine_group_name: {
        value: cdktf.stringToHclTerraform(this._importableServiceEngineGroupName),
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
      overallocated: {
        value: cdktf.booleanToHclTerraform(this._overallocated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reservation_model: {
        value: cdktf.stringToHclTerraform(this._reservationModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_feature_set: {
        value: cdktf.stringToHclTerraform(this._supportedFeatureSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_on_refresh: {
        value: cdktf.booleanToHclTerraform(this._syncOnRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
