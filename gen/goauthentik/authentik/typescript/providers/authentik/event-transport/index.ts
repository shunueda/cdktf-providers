// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_transport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventTransportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `authentik Notification:`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_transport#email_subject_prefix EventTransport#email_subject_prefix}
  */
  readonly emailSubjectPrefix?: string;
  /**
  * Defaults to `email/event_notification.html`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_transport#email_template EventTransport#email_template}
  */
  readonly emailTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_transport#id EventTransport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allowed values:
  *   - `local`
  *   - `webhook`
  *   - `webhook_slack`
  *   - `email`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_transport#mode EventTransport#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_transport#name EventTransport#name}
  */
  readonly name: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_transport#send_once EventTransport#send_once}
  */
  readonly sendOnce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_transport#webhook_mapping_body EventTransport#webhook_mapping_body}
  */
  readonly webhookMappingBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_transport#webhook_mapping_headers EventTransport#webhook_mapping_headers}
  */
  readonly webhookMappingHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_transport#webhook_url EventTransport#webhook_url}
  */
  readonly webhookUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_transport authentik_event_transport}
*/
export class EventTransport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_event_transport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventTransport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventTransport to import
  * @param importFromId The id of the existing EventTransport that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_transport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventTransport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_event_transport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/event_transport authentik_event_transport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventTransportConfig
  */
  public constructor(scope: Construct, id: string, config: EventTransportConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_event_transport',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0',
        providerVersionConstraint: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emailSubjectPrefix = config.emailSubjectPrefix;
    this._emailTemplate = config.emailTemplate;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._sendOnce = config.sendOnce;
    this._webhookMappingBody = config.webhookMappingBody;
    this._webhookMappingHeaders = config.webhookMappingHeaders;
    this._webhookUrl = config.webhookUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_subject_prefix - computed: false, optional: true, required: false
  private _emailSubjectPrefix?: string; 
  public get emailSubjectPrefix() {
    return this.getStringAttribute('email_subject_prefix');
  }
  public set emailSubjectPrefix(value: string) {
    this._emailSubjectPrefix = value;
  }
  public resetEmailSubjectPrefix() {
    this._emailSubjectPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubjectPrefixInput() {
    return this._emailSubjectPrefix;
  }

  // email_template - computed: false, optional: true, required: false
  private _emailTemplate?: string; 
  public get emailTemplate() {
    return this.getStringAttribute('email_template');
  }
  public set emailTemplate(value: string) {
    this._emailTemplate = value;
  }
  public resetEmailTemplate() {
    this._emailTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTemplateInput() {
    return this._emailTemplate;
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

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // send_once - computed: false, optional: true, required: false
  private _sendOnce?: boolean | cdktf.IResolvable; 
  public get sendOnce() {
    return this.getBooleanAttribute('send_once');
  }
  public set sendOnce(value: boolean | cdktf.IResolvable) {
    this._sendOnce = value;
  }
  public resetSendOnce() {
    this._sendOnce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnceInput() {
    return this._sendOnce;
  }

  // webhook_mapping_body - computed: false, optional: true, required: false
  private _webhookMappingBody?: string; 
  public get webhookMappingBody() {
    return this.getStringAttribute('webhook_mapping_body');
  }
  public set webhookMappingBody(value: string) {
    this._webhookMappingBody = value;
  }
  public resetWebhookMappingBody() {
    this._webhookMappingBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookMappingBodyInput() {
    return this._webhookMappingBody;
  }

  // webhook_mapping_headers - computed: false, optional: true, required: false
  private _webhookMappingHeaders?: string; 
  public get webhookMappingHeaders() {
    return this.getStringAttribute('webhook_mapping_headers');
  }
  public set webhookMappingHeaders(value: string) {
    this._webhookMappingHeaders = value;
  }
  public resetWebhookMappingHeaders() {
    this._webhookMappingHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookMappingHeadersInput() {
    return this._webhookMappingHeaders;
  }

  // webhook_url - computed: false, optional: true, required: false
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
  }
  public resetWebhookUrl() {
    this._webhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlInput() {
    return this._webhookUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_subject_prefix: cdktf.stringToTerraform(this._emailSubjectPrefix),
      email_template: cdktf.stringToTerraform(this._emailTemplate),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      send_once: cdktf.booleanToTerraform(this._sendOnce),
      webhook_mapping_body: cdktf.stringToTerraform(this._webhookMappingBody),
      webhook_mapping_headers: cdktf.stringToTerraform(this._webhookMappingHeaders),
      webhook_url: cdktf.stringToTerraform(this._webhookUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_subject_prefix: {
        value: cdktf.stringToHclTerraform(this._emailSubjectPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_template: {
        value: cdktf.stringToHclTerraform(this._emailTemplate),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_once: {
        value: cdktf.booleanToHclTerraform(this._sendOnce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      webhook_mapping_body: {
        value: cdktf.stringToHclTerraform(this._webhookMappingBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_mapping_headers: {
        value: cdktf.stringToHclTerraform(this._webhookMappingHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_url: {
        value: cdktf.stringToHclTerraform(this._webhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
