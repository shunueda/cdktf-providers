// https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeyfactorAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Either the GUID or ClientMachine name of the Keyfactor Command Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/agent#agent_identifier DataKeyfactorAgent#agent_identifier}
  */
  readonly agentIdentifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/agent keyfactor_agent}
*/
export class DataKeyfactorAgent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyfactor_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeyfactorAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeyfactorAgent to import
  * @param importFromId The id of the existing DataKeyfactorAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeyfactorAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyfactor_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/agent keyfactor_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeyfactorAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeyfactorAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'keyfactor_agent',
      terraformGeneratorMetadata: {
        providerName: 'keyfactor',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentIdentifier = config.agentIdentifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // agent_identifier - computed: false, optional: false, required: true
  private _agentIdentifier?: string; 
  public get agentIdentifier() {
    return this.getStringAttribute('agent_identifier');
  }
  public set agentIdentifier(value: string) {
    this._agentIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdentifierInput() {
    return this._agentIdentifier;
  }

  // agent_platform - computed: true, optional: false, required: false
  public get agentPlatform() {
    return this.getNumberAttribute('agent_platform');
  }

  // auth_certificate_reenrollment - computed: true, optional: false, required: false
  public get authCertificateReenrollment() {
    return this.getStringAttribute('auth_certificate_reenrollment');
  }

  // blueprint - computed: true, optional: false, required: false
  public get blueprint() {
    return this.getStringAttribute('blueprint');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }

  // client_machine - computed: true, optional: false, required: false
  public get clientMachine() {
    return this.getStringAttribute('client_machine');
  }

  // last_error_code - computed: true, optional: false, required: false
  public get lastErrorCode() {
    return this.getNumberAttribute('last_error_code');
  }

  // last_error_message - computed: true, optional: false, required: false
  public get lastErrorMessage() {
    return this.getStringAttribute('last_error_message');
  }

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getStringAttribute('last_seen');
  }

  // last_thumbprint_used - computed: true, optional: false, required: false
  public get lastThumbprintUsed() {
    return this.getStringAttribute('last_thumbprint_used');
  }

  // legacy_thumbprint - computed: true, optional: false, required: false
  public get legacyThumbprint() {
    return this.getStringAttribute('legacy_thumbprint');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_identifier: cdktf.stringToTerraform(this._agentIdentifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_identifier: {
        value: cdktf.stringToHclTerraform(this._agentIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
