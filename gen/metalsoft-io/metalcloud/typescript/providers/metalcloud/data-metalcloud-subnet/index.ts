// https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/data-sources/subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMetalcloudSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Subnet label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/data-sources/subnet#label DataMetalcloudSubnet#label}
  */
  readonly label: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/data-sources/subnet metalcloud_subnet}
*/
export class DataMetalcloudSubnet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metalcloud_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMetalcloudSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMetalcloudSubnet to import
  * @param importFromId The id of the existing DataMetalcloudSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/data-sources/subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMetalcloudSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metalcloud_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/data-sources/subnet metalcloud_subnet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMetalcloudSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: DataMetalcloudSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'metalcloud_subnet',
      terraformGeneratorMetadata: {
        providerName: 'metalcloud',
        providerVersion: '7.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._label = config.label;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      label: cdktf.stringToTerraform(this._label),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
