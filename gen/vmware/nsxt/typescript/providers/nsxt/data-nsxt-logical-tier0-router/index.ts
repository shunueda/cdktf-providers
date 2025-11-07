// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/logical_tier0_router
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsxtLogicalTier0RouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/logical_tier0_router#description DataNsxtLogicalTier0Router#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/logical_tier0_router#display_name DataNsxtLogicalTier0Router#display_name}
  */
  readonly displayName?: string;
  /**
  * The ID of the edge cluster connected to this router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/logical_tier0_router#edge_cluster_id DataNsxtLogicalTier0Router#edge_cluster_id}
  */
  readonly edgeClusterId?: string;
  /**
  * The High availability mode of this router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/logical_tier0_router#high_availability_mode DataNsxtLogicalTier0Router#high_availability_mode}
  */
  readonly highAvailabilityMode?: string;
  /**
  * Unique ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/logical_tier0_router#id DataNsxtLogicalTier0Router#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/logical_tier0_router nsxt_logical_tier0_router}
*/
export class DataNsxtLogicalTier0Router extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_logical_tier0_router";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsxtLogicalTier0Router resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsxtLogicalTier0Router to import
  * @param importFromId The id of the existing DataNsxtLogicalTier0Router that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/logical_tier0_router#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsxtLogicalTier0Router to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_logical_tier0_router", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/logical_tier0_router nsxt_logical_tier0_router} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsxtLogicalTier0RouterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNsxtLogicalTier0RouterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_logical_tier0_router',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
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
    this._displayName = config.displayName;
    this._edgeClusterId = config.edgeClusterId;
    this._highAvailabilityMode = config.highAvailabilityMode;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // edge_cluster_id - computed: true, optional: true, required: false
  private _edgeClusterId?: string; 
  public get edgeClusterId() {
    return this.getStringAttribute('edge_cluster_id');
  }
  public set edgeClusterId(value: string) {
    this._edgeClusterId = value;
  }
  public resetEdgeClusterId() {
    this._edgeClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeClusterIdInput() {
    return this._edgeClusterId;
  }

  // high_availability_mode - computed: true, optional: true, required: false
  private _highAvailabilityMode?: string; 
  public get highAvailabilityMode() {
    return this.getStringAttribute('high_availability_mode');
  }
  public set highAvailabilityMode(value: string) {
    this._highAvailabilityMode = value;
  }
  public resetHighAvailabilityMode() {
    this._highAvailabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityModeInput() {
    return this._highAvailabilityMode;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      edge_cluster_id: cdktf.stringToTerraform(this._edgeClusterId),
      high_availability_mode: cdktf.stringToTerraform(this._highAvailabilityMode),
      id: cdktf.stringToTerraform(this._id),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_cluster_id: {
        value: cdktf.stringToHclTerraform(this._edgeClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      high_availability_mode: {
        value: cdktf.stringToHclTerraform(this._highAvailabilityMode),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
