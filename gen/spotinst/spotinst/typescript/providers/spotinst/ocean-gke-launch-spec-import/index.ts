// https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_gke_launch_spec_import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanGkeLaunchSpecImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_gke_launch_spec_import#id OceanGkeLaunchSpecImport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_gke_launch_spec_import#node_pool_name OceanGkeLaunchSpecImport#node_pool_name}
  */
  readonly nodePoolName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_gke_launch_spec_import#ocean_id OceanGkeLaunchSpecImport#ocean_id}
  */
  readonly oceanId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_gke_launch_spec_import spotinst_ocean_gke_launch_spec_import}
*/
export class OceanGkeLaunchSpecImport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_gke_launch_spec_import";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanGkeLaunchSpecImport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanGkeLaunchSpecImport to import
  * @param importFromId The id of the existing OceanGkeLaunchSpecImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_gke_launch_spec_import#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanGkeLaunchSpecImport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_ocean_gke_launch_spec_import", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/ocean_gke_launch_spec_import spotinst_ocean_gke_launch_spec_import} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanGkeLaunchSpecImportConfig
  */
  public constructor(scope: Construct, id: string, config: OceanGkeLaunchSpecImportConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_gke_launch_spec_import',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.231.0',
        providerVersionConstraint: '1.231.0'
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
    this._nodePoolName = config.nodePoolName;
    this._oceanId = config.oceanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // node_pool_name - computed: false, optional: false, required: true
  private _nodePoolName?: string; 
  public get nodePoolName() {
    return this.getStringAttribute('node_pool_name');
  }
  public set nodePoolName(value: string) {
    this._nodePoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolNameInput() {
    return this._nodePoolName;
  }

  // ocean_id - computed: false, optional: false, required: true
  private _oceanId?: string; 
  public get oceanId() {
    return this.getStringAttribute('ocean_id');
  }
  public set oceanId(value: string) {
    this._oceanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oceanIdInput() {
    return this._oceanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      node_pool_name: cdktf.stringToTerraform(this._nodePoolName),
      ocean_id: cdktf.stringToTerraform(this._oceanId),
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
      node_pool_name: {
        value: cdktf.stringToHclTerraform(this._nodePoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocean_id: {
        value: cdktf.stringToHclTerraform(this._oceanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
