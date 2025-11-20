// https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/settings_experimental
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SettingsExperimentalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/settings_experimental#id SettingsExperimental#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable or disable OpenAI integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/settings_experimental#openai_integration SettingsExperimental#openai_integration}
  */
  readonly openaiIntegration?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/settings_experimental portainer_settings_experimental}
*/
export class SettingsExperimental extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_settings_experimental";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SettingsExperimental resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SettingsExperimental to import
  * @param importFromId The id of the existing SettingsExperimental that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/settings_experimental#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SettingsExperimental to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_settings_experimental", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/settings_experimental portainer_settings_experimental} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SettingsExperimentalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SettingsExperimentalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'portainer_settings_experimental',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
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
    this._openaiIntegration = config.openaiIntegration;
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

  // openai_integration - computed: false, optional: true, required: false
  private _openaiIntegration?: boolean | cdktf.IResolvable; 
  public get openaiIntegration() {
    return this.getBooleanAttribute('openai_integration');
  }
  public set openaiIntegration(value: boolean | cdktf.IResolvable) {
    this._openaiIntegration = value;
  }
  public resetOpenaiIntegration() {
    this._openaiIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiIntegrationInput() {
    return this._openaiIntegration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      openai_integration: cdktf.booleanToTerraform(this._openaiIntegration),
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
      openai_integration: {
        value: cdktf.booleanToHclTerraform(this._openaiIntegration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
