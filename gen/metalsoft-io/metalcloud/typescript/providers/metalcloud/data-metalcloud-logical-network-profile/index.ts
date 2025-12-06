// https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/data-sources/logical_network_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMetalcloudLogicalNetworkProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Fabric Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/data-sources/logical_network_profile#fabric_id DataMetalcloudLogicalNetworkProfile#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Logical Network Profile label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/data-sources/logical_network_profile#label DataMetalcloudLogicalNetworkProfile#label}
  */
  readonly label: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/data-sources/logical_network_profile metalcloud_logical_network_profile}
*/
export class DataMetalcloudLogicalNetworkProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metalcloud_logical_network_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMetalcloudLogicalNetworkProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMetalcloudLogicalNetworkProfile to import
  * @param importFromId The id of the existing DataMetalcloudLogicalNetworkProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/data-sources/logical_network_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMetalcloudLogicalNetworkProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metalcloud_logical_network_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/data-sources/logical_network_profile metalcloud_logical_network_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMetalcloudLogicalNetworkProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataMetalcloudLogicalNetworkProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'metalcloud_logical_network_profile',
      terraformGeneratorMetadata: {
        providerName: 'metalcloud',
        providerVersion: '7.1.0',
        providerVersionConstraint: '7.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabricId = config.fabricId;
    this._label = config.label;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fabric_id - computed: false, optional: false, required: true
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // logical_network_profile_id - computed: true, optional: false, required: false
  public get logicalNetworkProfileId() {
    return this.getStringAttribute('logical_network_profile_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      label: cdktf.stringToTerraform(this._label),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
