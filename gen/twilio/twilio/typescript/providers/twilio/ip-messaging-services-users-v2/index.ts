// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_users_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpMessagingServicesUsersV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_users_v2#attributes IpMessagingServicesUsersV2#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_users_v2#friendly_name IpMessagingServicesUsersV2#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_users_v2#id IpMessagingServicesUsersV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_users_v2#identity IpMessagingServicesUsersV2#identity}
  */
  readonly identity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_users_v2#role_sid IpMessagingServicesUsersV2#role_sid}
  */
  readonly roleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_users_v2#service_sid IpMessagingServicesUsersV2#service_sid}
  */
  readonly serviceSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_users_v2#x_twilio_webhook_enabled IpMessagingServicesUsersV2#x_twilio_webhook_enabled}
  */
  readonly xTwilioWebhookEnabled?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_users_v2 twilio_ip_messaging_services_users_v2}
*/
export class IpMessagingServicesUsersV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_ip_messaging_services_users_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpMessagingServicesUsersV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpMessagingServicesUsersV2 to import
  * @param importFromId The id of the existing IpMessagingServicesUsersV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_users_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpMessagingServicesUsersV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_ip_messaging_services_users_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_users_v2 twilio_ip_messaging_services_users_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpMessagingServicesUsersV2Config
  */
  public constructor(scope: Construct, id: string, config: IpMessagingServicesUsersV2Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_ip_messaging_services_users_v2',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes = config.attributes;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._identity = config.identity;
    this._roleSid = config.roleSid;
    this._serviceSid = config.serviceSid;
    this._xTwilioWebhookEnabled = config.xTwilioWebhookEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

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

  // identity - computed: false, optional: false, required: true
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // role_sid - computed: true, optional: true, required: false
  private _roleSid?: string; 
  public get roleSid() {
    return this.getStringAttribute('role_sid');
  }
  public set roleSid(value: string) {
    this._roleSid = value;
  }
  public resetRoleSid() {
    this._roleSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSidInput() {
    return this._roleSid;
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

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // x_twilio_webhook_enabled - computed: true, optional: true, required: false
  private _xTwilioWebhookEnabled?: string; 
  public get xTwilioWebhookEnabled() {
    return this.getStringAttribute('x_twilio_webhook_enabled');
  }
  public set xTwilioWebhookEnabled(value: string) {
    this._xTwilioWebhookEnabled = value;
  }
  public resetXTwilioWebhookEnabled() {
    this._xTwilioWebhookEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xTwilioWebhookEnabledInput() {
    return this._xTwilioWebhookEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.stringToTerraform(this._attributes),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      identity: cdktf.stringToTerraform(this._identity),
      role_sid: cdktf.stringToTerraform(this._roleSid),
      service_sid: cdktf.stringToTerraform(this._serviceSid),
      x_twilio_webhook_enabled: cdktf.stringToTerraform(this._xTwilioWebhookEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      identity: {
        value: cdktf.stringToHclTerraform(this._identity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_sid: {
        value: cdktf.stringToHclTerraform(this._roleSid),
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
      x_twilio_webhook_enabled: {
        value: cdktf.stringToHclTerraform(this._xTwilioWebhookEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
