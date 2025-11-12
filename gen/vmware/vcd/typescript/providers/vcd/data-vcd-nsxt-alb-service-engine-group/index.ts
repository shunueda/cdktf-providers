// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_service_engine_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdNsxtAlbServiceEngineGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_service_engine_group#id DataVcdNsxtAlbServiceEngineGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX-T ALB Service Engine Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_service_engine_group#name DataVcdNsxtAlbServiceEngineGroup#name}
  */
  readonly name: string;
  /**
  * Boolean value that shows if virtual services are overallocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_service_engine_group#overallocated DataVcdNsxtAlbServiceEngineGroup#overallocated}
  */
  readonly overallocated?: boolean | cdktf.IResolvable;
  /**
  * Boolean value that shows if sync should be performed on every refresh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_service_engine_group#sync_on_refresh DataVcdNsxtAlbServiceEngineGroup#sync_on_refresh}
  */
  readonly syncOnRefresh?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_service_engine_group vcd_nsxt_alb_service_engine_group}
*/
export class DataVcdNsxtAlbServiceEngineGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_alb_service_engine_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdNsxtAlbServiceEngineGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdNsxtAlbServiceEngineGroup to import
  * @param importFromId The id of the existing DataVcdNsxtAlbServiceEngineGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_service_engine_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdNsxtAlbServiceEngineGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_alb_service_engine_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_alb_service_engine_group vcd_nsxt_alb_service_engine_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdNsxtAlbServiceEngineGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdNsxtAlbServiceEngineGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_alb_service_engine_group',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._overallocated = config.overallocated;
    this._syncOnRefresh = config.syncOnRefresh;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alb_cloud_id - computed: true, optional: false, required: false
  public get albCloudId() {
    return this.getStringAttribute('alb_cloud_id');
  }

  // deployed_virtual_services - computed: true, optional: false, required: false
  public get deployedVirtualServices() {
    return this.getNumberAttribute('deployed_virtual_services');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // reservation_model - computed: true, optional: false, required: false
  public get reservationModel() {
    return this.getStringAttribute('reservation_model');
  }

  // reserved_virtual_services - computed: true, optional: false, required: false
  public get reservedVirtualServices() {
    return this.getNumberAttribute('reserved_virtual_services');
  }

  // supported_feature_set - computed: true, optional: false, required: false
  public get supportedFeatureSet() {
    return this.getStringAttribute('supported_feature_set');
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      overallocated: cdktf.booleanToTerraform(this._overallocated),
      sync_on_refresh: cdktf.booleanToTerraform(this._syncOnRefresh),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      overallocated: {
        value: cdktf.booleanToHclTerraform(this._overallocated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
