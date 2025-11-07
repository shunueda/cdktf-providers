// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/agent_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgentProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra name of the Agent Profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/agent_profile#name AgentProfile#name}
  */
  readonly name: string;
  /**
  * Passes configured parameters to offbox agents. For example, to use HTTPS as the API connection from offbox agents to devices, use the key-value pair: proto-https - port-443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/agent_profile#open_options AgentProfile#open_options}
  */
  readonly openOptions?: { [key: string]: string };
  /**
  * List of [packages](https://www.juniper.net/documentation/us/en/software/apstra4.1/apstra-user-guide/topics/topic-map/packages.html) to be included with agents deployed using this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/agent_profile#packages AgentProfile#packages}
  */
  readonly packages?: { [key: string]: string };
  /**
  * Specifies the platform supported by the Agent Profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/agent_profile#platform AgentProfile#platform}
  */
  readonly platform?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/agent_profile apstra_agent_profile}
*/
export class AgentProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_agent_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AgentProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgentProfile to import
  * @param importFromId The id of the existing AgentProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/agent_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgentProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_agent_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/agent_profile apstra_agent_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AgentProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_agent_profile',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
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
    this._openOptions = config.openOptions;
    this._packages = config.packages;
    this._platform = config.platform;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // has_password - computed: true, optional: false, required: false
  public get hasPassword() {
    return this.getBooleanAttribute('has_password');
  }

  // has_username - computed: true, optional: false, required: false
  public get hasUsername() {
    return this.getBooleanAttribute('has_username');
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

  // open_options - computed: false, optional: true, required: false
  private _openOptions?: { [key: string]: string }; 
  public get openOptions() {
    return this.getStringMapAttribute('open_options');
  }
  public set openOptions(value: { [key: string]: string }) {
    this._openOptions = value;
  }
  public resetOpenOptions() {
    this._openOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openOptionsInput() {
    return this._openOptions;
  }

  // packages - computed: false, optional: true, required: false
  private _packages?: { [key: string]: string }; 
  public get packages() {
    return this.getStringMapAttribute('packages');
  }
  public set packages(value: { [key: string]: string }) {
    this._packages = value;
  }
  public resetPackages() {
    this._packages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      open_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._openOptions),
      packages: cdktf.hashMapper(cdktf.stringToTerraform)(this._packages),
      platform: cdktf.stringToTerraform(this._platform),
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
      open_options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._openOptions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      packages: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._packages),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
