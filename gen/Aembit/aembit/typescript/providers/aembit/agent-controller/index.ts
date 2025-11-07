// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/agent_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgentControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allowed TLS Hostname for Aembit Managed TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/agent_controller#allowed_tls_hostname AgentController#allowed_tls_hostname}
  */
  readonly allowedTlsHostname?: string;
  /**
  * Description for the Agent Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/agent_controller#description AgentController#description}
  */
  readonly description?: string;
  /**
  * Active status of the Agent Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/agent_controller#is_active AgentController#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Name for the Agent Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/agent_controller#name AgentController#name}
  */
  readonly name: string;
  /**
  * Tags are key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/agent_controller#tags AgentController#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Unique Trust Provider to use for authentication of the Agent Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/agent_controller#trust_provider_id AgentController#trust_provider_id}
  */
  readonly trustProviderId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/agent_controller aembit_agent_controller}
*/
export class AgentController extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_agent_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AgentController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgentController to import
  * @param importFromId The id of the existing AgentController that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/agent_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgentController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_agent_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/agent_controller aembit_agent_controller} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentControllerConfig
  */
  public constructor(scope: Construct, id: string, config: AgentControllerConfig) {
    super(scope, id, {
      terraformResourceType: 'aembit_agent_controller',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedTlsHostname = config.allowedTlsHostname;
    this._description = config.description;
    this._isActive = config.isActive;
    this._name = config.name;
    this._tags = config.tags;
    this._trustProviderId = config.trustProviderId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_tls_hostname - computed: true, optional: true, required: false
  private _allowedTlsHostname?: string; 
  public get allowedTlsHostname() {
    return this.getStringAttribute('allowed_tls_hostname');
  }
  public set allowedTlsHostname(value: string) {
    this._allowedTlsHostname = value;
  }
  public resetAllowedTlsHostname() {
    this._allowedTlsHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTlsHostnameInput() {
    return this._allowedTlsHostname;
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // trust_provider_id - computed: false, optional: true, required: false
  private _trustProviderId?: string; 
  public get trustProviderId() {
    return this.getStringAttribute('trust_provider_id');
  }
  public set trustProviderId(value: string) {
    this._trustProviderId = value;
  }
  public resetTrustProviderId() {
    this._trustProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustProviderIdInput() {
    return this._trustProviderId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_tls_hostname: cdktf.stringToTerraform(this._allowedTlsHostname),
      description: cdktf.stringToTerraform(this._description),
      is_active: cdktf.booleanToTerraform(this._isActive),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      trust_provider_id: cdktf.stringToTerraform(this._trustProviderId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_tls_hostname: {
        value: cdktf.stringToHclTerraform(this._allowedTlsHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      trust_provider_id: {
        value: cdktf.stringToHclTerraform(this._trustProviderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
