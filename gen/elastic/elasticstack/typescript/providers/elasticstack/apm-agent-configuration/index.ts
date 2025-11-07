// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/apm_agent_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApmAgentConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The agent name is used by the UI to determine which settings to display.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/apm_agent_configuration#agent_name ApmAgentConfiguration#agent_name}
  */
  readonly agentName?: string;
  /**
  * The environment of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/apm_agent_configuration#service_environment ApmAgentConfiguration#service_environment}
  */
  readonly serviceEnvironment?: string;
  /**
  * The name of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/apm_agent_configuration#service_name ApmAgentConfiguration#service_name}
  */
  readonly serviceName: string;
  /**
  * Agent configuration settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/apm_agent_configuration#settings ApmAgentConfiguration#settings}
  */
  readonly settings: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/apm_agent_configuration elasticstack_apm_agent_configuration}
*/
export class ApmAgentConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_apm_agent_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApmAgentConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApmAgentConfiguration to import
  * @param importFromId The id of the existing ApmAgentConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/apm_agent_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApmAgentConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_apm_agent_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/apm_agent_configuration elasticstack_apm_agent_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApmAgentConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ApmAgentConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_apm_agent_configuration',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentName = config.agentName;
    this._serviceEnvironment = config.serviceEnvironment;
    this._serviceName = config.serviceName;
    this._settings = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_name - computed: false, optional: true, required: false
  private _agentName?: string; 
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }
  public set agentName(value: string) {
    this._agentName = value;
  }
  public resetAgentName() {
    this._agentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNameInput() {
    return this._agentName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_environment - computed: false, optional: true, required: false
  private _serviceEnvironment?: string; 
  public get serviceEnvironment() {
    return this.getStringAttribute('service_environment');
  }
  public set serviceEnvironment(value: string) {
    this._serviceEnvironment = value;
  }
  public resetServiceEnvironment() {
    this._serviceEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEnvironmentInput() {
    return this._serviceEnvironment;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // settings - computed: false, optional: false, required: true
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_name: cdktf.stringToTerraform(this._agentName),
      service_environment: cdktf.stringToTerraform(this._serviceEnvironment),
      service_name: cdktf.stringToTerraform(this._serviceName),
      settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._settings),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_name: {
        value: cdktf.stringToHclTerraform(this._agentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_environment: {
        value: cdktf.stringToHclTerraform(this._serviceEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._settings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
