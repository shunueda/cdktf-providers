// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_flexible_port_speed_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFlexiblePortSpeedFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_flexible_port_speed_feature#description SystemFlexiblePortSpeedFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_flexible_port_speed_feature#feature_profile_id SystemFlexiblePortSpeedFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_flexible_port_speed_feature#name SystemFlexiblePortSpeedFeature#name}
  */
  readonly name: string;
  /**
  * port Type
  *   - Choices: `12 ports of 1/10GE + 3 ports 40GE`, `8 ports of 1/10GE + 4 ports of 40GE`, `2 ports of 100 GE`, `12 ports of 1/10GE + 1 port of 100GE`, `8 ports of 1/10GE + 1 port of 40GE + 1 port of 100GE`, `3 ports of 40GE + 1port of 100GE`
  *   - Default value: `12 ports of 1/10GE + 3 ports 40GE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_flexible_port_speed_feature#port_type SystemFlexiblePortSpeedFeature#port_type}
  */
  readonly portType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_flexible_port_speed_feature#port_type_variable SystemFlexiblePortSpeedFeature#port_type_variable}
  */
  readonly portTypeVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_flexible_port_speed_feature sdwan_system_flexible_port_speed_feature}
*/
export class SystemFlexiblePortSpeedFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_flexible_port_speed_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFlexiblePortSpeedFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFlexiblePortSpeedFeature to import
  * @param importFromId The id of the existing SystemFlexiblePortSpeedFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_flexible_port_speed_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFlexiblePortSpeedFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_flexible_port_speed_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_flexible_port_speed_feature sdwan_system_flexible_port_speed_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFlexiblePortSpeedFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: SystemFlexiblePortSpeedFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_flexible_port_speed_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
    this._portType = config.portType;
    this._portTypeVariable = config.portTypeVariable;
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

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // port_type - computed: false, optional: true, required: false
  private _portType?: string; 
  public get portType() {
    return this.getStringAttribute('port_type');
  }
  public set portType(value: string) {
    this._portType = value;
  }
  public resetPortType() {
    this._portType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTypeInput() {
    return this._portType;
  }

  // port_type_variable - computed: false, optional: true, required: false
  private _portTypeVariable?: string; 
  public get portTypeVariable() {
    return this.getStringAttribute('port_type_variable');
  }
  public set portTypeVariable(value: string) {
    this._portTypeVariable = value;
  }
  public resetPortTypeVariable() {
    this._portTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTypeVariableInput() {
    return this._portTypeVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
      port_type: cdktf.stringToTerraform(this._portType),
      port_type_variable: cdktf.stringToTerraform(this._portTypeVariable),
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
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
      port_type: {
        value: cdktf.stringToHclTerraform(this._portType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_type_variable: {
        value: cdktf.stringToHclTerraform(this._portTypeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
