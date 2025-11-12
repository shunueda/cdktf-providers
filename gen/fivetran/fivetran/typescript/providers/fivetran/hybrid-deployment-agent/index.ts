// https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/hybrid_deployment_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HybridDeploymentAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of authentification. Possible values `AUTO`,`MANUAL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/hybrid_deployment_agent#auth_type HybridDeploymentAgent#auth_type}
  */
  readonly authType: string;
  /**
  * Determines whether re-authentication needs to be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/hybrid_deployment_agent#authentication_counter HybridDeploymentAgent#authentication_counter}
  */
  readonly authenticationCounter?: number;
  /**
  * The unique name for the hybrid deployment agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/hybrid_deployment_agent#display_name HybridDeploymentAgent#display_name}
  */
  readonly displayName: string;
  /**
  * Environment type. Possible values `DOCKER`,`PODMAN`,`KUBERNETES`,`SNOWPARK`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/hybrid_deployment_agent#env_type HybridDeploymentAgent#env_type}
  */
  readonly envType: string;
  /**
  * The unique identifier for the Group within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/hybrid_deployment_agent#group_id HybridDeploymentAgent#group_id}
  */
  readonly groupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/hybrid_deployment_agent fivetran_hybrid_deployment_agent}
*/
export class HybridDeploymentAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_hybrid_deployment_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HybridDeploymentAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HybridDeploymentAgent to import
  * @param importFromId The id of the existing HybridDeploymentAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/hybrid_deployment_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HybridDeploymentAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_hybrid_deployment_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/hybrid_deployment_agent fivetran_hybrid_deployment_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HybridDeploymentAgentConfig
  */
  public constructor(scope: Construct, id: string, config: HybridDeploymentAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_hybrid_deployment_agent',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.13',
        providerVersionConstraint: '1.9.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authType = config.authType;
    this._authenticationCounter = config.authenticationCounter;
    this._displayName = config.displayName;
    this._envType = config.envType;
    this._groupId = config.groupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_json - computed: true, optional: false, required: false
  public get authJson() {
    return this.getStringAttribute('auth_json');
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // authentication_counter - computed: true, optional: true, required: false
  private _authenticationCounter?: number; 
  public get authenticationCounter() {
    return this.getNumberAttribute('authentication_counter');
  }
  public set authenticationCounter(value: number) {
    this._authenticationCounter = value;
  }
  public resetAuthenticationCounter() {
    this._authenticationCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationCounterInput() {
    return this._authenticationCounter;
  }

  // config_json - computed: true, optional: false, required: false
  public get configJson() {
    return this.getStringAttribute('config_json');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // docker_compose_yaml - computed: true, optional: false, required: false
  public get dockerComposeYaml() {
    return this.getStringAttribute('docker_compose_yaml');
  }

  // env_type - computed: false, optional: false, required: true
  private _envType?: string; 
  public get envType() {
    return this.getStringAttribute('env_type');
  }
  public set envType(value: string) {
    this._envType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envTypeInput() {
    return this._envType;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // registered_at - computed: true, optional: false, required: false
  public get registeredAt() {
    return this.getStringAttribute('registered_at');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: cdktf.stringToTerraform(this._authType),
      authentication_counter: cdktf.numberToTerraform(this._authenticationCounter),
      display_name: cdktf.stringToTerraform(this._displayName),
      env_type: cdktf.stringToTerraform(this._envType),
      group_id: cdktf.stringToTerraform(this._groupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_counter: {
        value: cdktf.numberToHclTerraform(this._authenticationCounter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_type: {
        value: cdktf.stringToHclTerraform(this._envType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
