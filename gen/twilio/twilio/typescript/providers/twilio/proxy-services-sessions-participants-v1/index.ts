// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_sessions_participants_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProxyServicesSessionsParticipantsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_sessions_participants_v1#friendly_name ProxyServicesSessionsParticipantsV1#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_sessions_participants_v1#id ProxyServicesSessionsParticipantsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_sessions_participants_v1#identifier ProxyServicesSessionsParticipantsV1#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_sessions_participants_v1#proxy_identifier ProxyServicesSessionsParticipantsV1#proxy_identifier}
  */
  readonly proxyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_sessions_participants_v1#proxy_identifier_sid ProxyServicesSessionsParticipantsV1#proxy_identifier_sid}
  */
  readonly proxyIdentifierSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_sessions_participants_v1#service_sid ProxyServicesSessionsParticipantsV1#service_sid}
  */
  readonly serviceSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_sessions_participants_v1#session_sid ProxyServicesSessionsParticipantsV1#session_sid}
  */
  readonly sessionSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_sessions_participants_v1 twilio_proxy_services_sessions_participants_v1}
*/
export class ProxyServicesSessionsParticipantsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_proxy_services_sessions_participants_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProxyServicesSessionsParticipantsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProxyServicesSessionsParticipantsV1 to import
  * @param importFromId The id of the existing ProxyServicesSessionsParticipantsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_sessions_participants_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProxyServicesSessionsParticipantsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_proxy_services_sessions_participants_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_sessions_participants_v1 twilio_proxy_services_sessions_participants_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProxyServicesSessionsParticipantsV1Config
  */
  public constructor(scope: Construct, id: string, config: ProxyServicesSessionsParticipantsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_proxy_services_sessions_participants_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._identifier = config.identifier;
    this._proxyIdentifier = config.proxyIdentifier;
    this._proxyIdentifierSid = config.proxyIdentifierSid;
    this._serviceSid = config.serviceSid;
    this._sessionSid = config.sessionSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // friendly_name - computed: true, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // proxy_identifier - computed: true, optional: true, required: false
  private _proxyIdentifier?: string; 
  public get proxyIdentifier() {
    return this.getStringAttribute('proxy_identifier');
  }
  public set proxyIdentifier(value: string) {
    this._proxyIdentifier = value;
  }
  public resetProxyIdentifier() {
    this._proxyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdentifierInput() {
    return this._proxyIdentifier;
  }

  // proxy_identifier_sid - computed: true, optional: true, required: false
  private _proxyIdentifierSid?: string; 
  public get proxyIdentifierSid() {
    return this.getStringAttribute('proxy_identifier_sid');
  }
  public set proxyIdentifierSid(value: string) {
    this._proxyIdentifierSid = value;
  }
  public resetProxyIdentifierSid() {
    this._proxyIdentifierSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdentifierSidInput() {
    return this._proxyIdentifierSid;
  }

  // service_sid - computed: false, optional: false, required: true
  private _serviceSid?: string; 
  public get serviceSid() {
    return this.getStringAttribute('service_sid');
  }
  public set serviceSid(value: string) {
    this._serviceSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSidInput() {
    return this._serviceSid;
  }

  // session_sid - computed: false, optional: false, required: true
  private _sessionSid?: string; 
  public get sessionSid() {
    return this.getStringAttribute('session_sid');
  }
  public set sessionSid(value: string) {
    this._sessionSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSidInput() {
    return this._sessionSid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      proxy_identifier: cdktf.stringToTerraform(this._proxyIdentifier),
      proxy_identifier_sid: cdktf.stringToTerraform(this._proxyIdentifierSid),
      service_sid: cdktf.stringToTerraform(this._serviceSid),
      session_sid: cdktf.stringToTerraform(this._sessionSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_identifier: {
        value: cdktf.stringToHclTerraform(this._proxyIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_identifier_sid: {
        value: cdktf.stringToHclTerraform(this._proxyIdentifierSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_sid: {
        value: cdktf.stringToHclTerraform(this._serviceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_sid: {
        value: cdktf.stringToHclTerraform(this._sessionSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
