// https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_docker_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InextDockerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Controls the settings of the connected agents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_docker_profile#additional_settings InextDockerProfile#additional_settings}
  */
  readonly additionalSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_docker_profile#defined_applications_only InextDockerProfile#defined_applications_only}
  */
  readonly definedApplicationsOnly?: boolean | cdktf.IResolvable;
  /**
  * Sets the maximum number of agents that can be connected to this profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_docker_profile#max_number_of_agents InextDockerProfile#max_number_of_agents}
  */
  readonly maxNumberOfAgents?: number;
  /**
  * The name of the resource, also acts as its unique ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_docker_profile#name InextDockerProfile#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_docker_profile inext_docker_profile}
*/
export class InextDockerProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "inext_docker_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InextDockerProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InextDockerProfile to import
  * @param importFromId The id of the existing InextDockerProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_docker_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InextDockerProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "inext_docker_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.0/docs/resources/inext_docker_profile inext_docker_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InextDockerProfileConfig
  */
  public constructor(scope: Construct, id: string, config: InextDockerProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'inext_docker_profile',
      terraformGeneratorMetadata: {
        providerName: 'infinity-next',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalSettings = config.additionalSettings;
    this._definedApplicationsOnly = config.definedApplicationsOnly;
    this._maxNumberOfAgents = config.maxNumberOfAgents;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_settings - computed: false, optional: true, required: false
  private _additionalSettings?: { [key: string]: string }; 
  public get additionalSettings() {
    return this.getStringMapAttribute('additional_settings');
  }
  public set additionalSettings(value: { [key: string]: string }) {
    this._additionalSettings = value;
  }
  public resetAdditionalSettings() {
    this._additionalSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSettingsInput() {
    return this._additionalSettings;
  }

  // additional_settings_ids - computed: true, optional: false, required: false
  public get additionalSettingsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_settings_ids'));
  }

  // authentication_token - computed: true, optional: false, required: false
  public get authenticationToken() {
    return this.getStringAttribute('authentication_token');
  }

  // defined_applications_only - computed: true, optional: true, required: false
  private _definedApplicationsOnly?: boolean | cdktf.IResolvable; 
  public get definedApplicationsOnly() {
    return this.getBooleanAttribute('defined_applications_only');
  }
  public set definedApplicationsOnly(value: boolean | cdktf.IResolvable) {
    this._definedApplicationsOnly = value;
  }
  public resetDefinedApplicationsOnly() {
    this._definedApplicationsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedApplicationsOnlyInput() {
    return this._definedApplicationsOnly;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_number_of_agents - computed: false, optional: true, required: false
  private _maxNumberOfAgents?: number; 
  public get maxNumberOfAgents() {
    return this.getNumberAttribute('max_number_of_agents');
  }
  public set maxNumberOfAgents(value: number) {
    this._maxNumberOfAgents = value;
  }
  public resetMaxNumberOfAgents() {
    this._maxNumberOfAgents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfAgentsInput() {
    return this._maxNumberOfAgents;
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

  // profile_type - computed: true, optional: false, required: false
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._additionalSettings),
      defined_applications_only: cdktf.booleanToTerraform(this._definedApplicationsOnly),
      max_number_of_agents: cdktf.numberToTerraform(this._maxNumberOfAgents),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._additionalSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      defined_applications_only: {
        value: cdktf.booleanToHclTerraform(this._definedApplicationsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_number_of_agents: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfAgents),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
