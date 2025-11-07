// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/preferred_color_group_policy_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PreferredColorGroupPolicyObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the policy object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/preferred_color_group_policy_object#name PreferredColorGroupPolicyObject#name}
  */
  readonly name: string;
  /**
  * Color or space separated list of colors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/preferred_color_group_policy_object#primary_color_preference PreferredColorGroupPolicyObject#primary_color_preference}
  */
  readonly primaryColorPreference: string;
  /**
  * Path preference
  *   - Choices: `direct-path`, `multi-hop-path`, `all-paths`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/preferred_color_group_policy_object#primary_path_preference PreferredColorGroupPolicyObject#primary_path_preference}
  */
  readonly primaryPathPreference?: string;
  /**
  * Color or space separated list of colors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/preferred_color_group_policy_object#secondary_color_preference PreferredColorGroupPolicyObject#secondary_color_preference}
  */
  readonly secondaryColorPreference?: string;
  /**
  * Path preference
  *   - Choices: `direct-path`, `multi-hop-path`, `all-paths`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/preferred_color_group_policy_object#secondary_path_preference PreferredColorGroupPolicyObject#secondary_path_preference}
  */
  readonly secondaryPathPreference?: string;
  /**
  * Color or space separated list of colors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/preferred_color_group_policy_object#tertiary_color_preference PreferredColorGroupPolicyObject#tertiary_color_preference}
  */
  readonly tertiaryColorPreference?: string;
  /**
  * Path preference
  *   - Choices: `direct-path`, `multi-hop-path`, `all-paths`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/preferred_color_group_policy_object#tertiary_path_preference PreferredColorGroupPolicyObject#tertiary_path_preference}
  */
  readonly tertiaryPathPreference?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/preferred_color_group_policy_object sdwan_preferred_color_group_policy_object}
*/
export class PreferredColorGroupPolicyObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_preferred_color_group_policy_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PreferredColorGroupPolicyObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PreferredColorGroupPolicyObject to import
  * @param importFromId The id of the existing PreferredColorGroupPolicyObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/preferred_color_group_policy_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PreferredColorGroupPolicyObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_preferred_color_group_policy_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/preferred_color_group_policy_object sdwan_preferred_color_group_policy_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PreferredColorGroupPolicyObjectConfig
  */
  public constructor(scope: Construct, id: string, config: PreferredColorGroupPolicyObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_preferred_color_group_policy_object',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._primaryColorPreference = config.primaryColorPreference;
    this._primaryPathPreference = config.primaryPathPreference;
    this._secondaryColorPreference = config.secondaryColorPreference;
    this._secondaryPathPreference = config.secondaryPathPreference;
    this._tertiaryColorPreference = config.tertiaryColorPreference;
    this._tertiaryPathPreference = config.tertiaryPathPreference;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // primary_color_preference - computed: false, optional: false, required: true
  private _primaryColorPreference?: string; 
  public get primaryColorPreference() {
    return this.getStringAttribute('primary_color_preference');
  }
  public set primaryColorPreference(value: string) {
    this._primaryColorPreference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorPreferenceInput() {
    return this._primaryColorPreference;
  }

  // primary_path_preference - computed: false, optional: true, required: false
  private _primaryPathPreference?: string; 
  public get primaryPathPreference() {
    return this.getStringAttribute('primary_path_preference');
  }
  public set primaryPathPreference(value: string) {
    this._primaryPathPreference = value;
  }
  public resetPrimaryPathPreference() {
    this._primaryPathPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPathPreferenceInput() {
    return this._primaryPathPreference;
  }

  // secondary_color_preference - computed: false, optional: true, required: false
  private _secondaryColorPreference?: string; 
  public get secondaryColorPreference() {
    return this.getStringAttribute('secondary_color_preference');
  }
  public set secondaryColorPreference(value: string) {
    this._secondaryColorPreference = value;
  }
  public resetSecondaryColorPreference() {
    this._secondaryColorPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryColorPreferenceInput() {
    return this._secondaryColorPreference;
  }

  // secondary_path_preference - computed: false, optional: true, required: false
  private _secondaryPathPreference?: string; 
  public get secondaryPathPreference() {
    return this.getStringAttribute('secondary_path_preference');
  }
  public set secondaryPathPreference(value: string) {
    this._secondaryPathPreference = value;
  }
  public resetSecondaryPathPreference() {
    this._secondaryPathPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPathPreferenceInput() {
    return this._secondaryPathPreference;
  }

  // tertiary_color_preference - computed: false, optional: true, required: false
  private _tertiaryColorPreference?: string; 
  public get tertiaryColorPreference() {
    return this.getStringAttribute('tertiary_color_preference');
  }
  public set tertiaryColorPreference(value: string) {
    this._tertiaryColorPreference = value;
  }
  public resetTertiaryColorPreference() {
    this._tertiaryColorPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tertiaryColorPreferenceInput() {
    return this._tertiaryColorPreference;
  }

  // tertiary_path_preference - computed: false, optional: true, required: false
  private _tertiaryPathPreference?: string; 
  public get tertiaryPathPreference() {
    return this.getStringAttribute('tertiary_path_preference');
  }
  public set tertiaryPathPreference(value: string) {
    this._tertiaryPathPreference = value;
  }
  public resetTertiaryPathPreference() {
    this._tertiaryPathPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tertiaryPathPreferenceInput() {
    return this._tertiaryPathPreference;
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
      name: cdktf.stringToTerraform(this._name),
      primary_color_preference: cdktf.stringToTerraform(this._primaryColorPreference),
      primary_path_preference: cdktf.stringToTerraform(this._primaryPathPreference),
      secondary_color_preference: cdktf.stringToTerraform(this._secondaryColorPreference),
      secondary_path_preference: cdktf.stringToTerraform(this._secondaryPathPreference),
      tertiary_color_preference: cdktf.stringToTerraform(this._tertiaryColorPreference),
      tertiary_path_preference: cdktf.stringToTerraform(this._tertiaryPathPreference),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_color_preference: {
        value: cdktf.stringToHclTerraform(this._primaryColorPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_path_preference: {
        value: cdktf.stringToHclTerraform(this._primaryPathPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_color_preference: {
        value: cdktf.stringToHclTerraform(this._secondaryColorPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_path_preference: {
        value: cdktf.stringToHclTerraform(this._secondaryPathPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tertiary_color_preference: {
        value: cdktf.stringToHclTerraform(this._tertiaryColorPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tertiary_path_preference: {
        value: cdktf.stringToHclTerraform(this._tertiaryPathPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
