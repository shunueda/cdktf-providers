// https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/logical_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicalNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Infrastructure Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/logical_network#infrastructure_id LogicalNetwork#infrastructure_id}
  */
  readonly infrastructureId: string;
  /**
  * Logical Network label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/logical_network#label LogicalNetwork#label}
  */
  readonly label: string;
  /**
  * Logical Network Profile Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/logical_network#logical_network_profile_id LogicalNetwork#logical_network_profile_id}
  */
  readonly logicalNetworkProfileId: string;
  /**
  * Logical Network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/logical_network#name LogicalNetwork#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/logical_network metalcloud_logical_network}
*/
export class LogicalNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metalcloud_logical_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogicalNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogicalNetwork to import
  * @param importFromId The id of the existing LogicalNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/logical_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogicalNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metalcloud_logical_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/logical_network metalcloud_logical_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicalNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: LogicalNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'metalcloud_logical_network',
      terraformGeneratorMetadata: {
        providerName: 'metalcloud',
        providerVersion: '7.0.10',
        providerVersionConstraint: '7.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._infrastructureId = config.infrastructureId;
    this._label = config.label;
    this._logicalNetworkProfileId = config.logicalNetworkProfileId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // infrastructure_id - computed: false, optional: false, required: true
  private _infrastructureId?: string; 
  public get infrastructureId() {
    return this.getStringAttribute('infrastructure_id');
  }
  public set infrastructureId(value: string) {
    this._infrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureIdInput() {
    return this._infrastructureId;
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

  // logical_network_id - computed: true, optional: false, required: false
  public get logicalNetworkId() {
    return this.getStringAttribute('logical_network_id');
  }

  // logical_network_profile_id - computed: false, optional: false, required: true
  private _logicalNetworkProfileId?: string; 
  public get logicalNetworkProfileId() {
    return this.getStringAttribute('logical_network_profile_id');
  }
  public set logicalNetworkProfileId(value: string) {
    this._logicalNetworkProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalNetworkProfileIdInput() {
    return this._logicalNetworkProfileId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      infrastructure_id: cdktf.stringToTerraform(this._infrastructureId),
      label: cdktf.stringToTerraform(this._label),
      logical_network_profile_id: cdktf.stringToTerraform(this._logicalNetworkProfileId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._infrastructureId),
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
      logical_network_profile_id: {
        value: cdktf.stringToHclTerraform(this._logicalNetworkProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
