// https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/integration_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of contact group names to receive notifications.
  * Each contact group can contain multiple contacts (email addresses, phone numbers, or integrations)
  * that will be notified when alerts are triggered. Defaults to ['Default'] if not specified.
  * Set to an empty list to disable notifications at this level and rely on parent check group notifications instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/integration_webhook#contact_groups IntegrationWebhook#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Custom headers to send with the webhook request (JSON format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/integration_webhook#headers IntegrationWebhook#headers}
  */
  readonly headers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/integration_webhook#name IntegrationWebhook#name}
  */
  readonly name: string;
  /**
  * The webhook URL to POST to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/integration_webhook#postback_url IntegrationWebhook#postback_url}
  */
  readonly postbackUrl: string;
  /**
  * Use legacy payload format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/integration_webhook#use_legacy_payload IntegrationWebhook#use_legacy_payload}
  */
  readonly useLegacyPayload?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/integration_webhook uptime_integration_webhook}
*/
export class IntegrationWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_integration_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationWebhook to import
  * @param importFromId The id of the existing IntegrationWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/integration_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_integration_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/integration_webhook uptime_integration_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_integration_webhook',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.21.0',
        providerVersionConstraint: '2.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactGroups = config.contactGroups;
    this._headers = config.headers;
    this._name = config.name;
    this._postbackUrl = config.postbackUrl;
    this._useLegacyPayload = config.useLegacyPayload;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_groups - computed: true, optional: true, required: false
  private _contactGroups?: string[]; 
  public get contactGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('contact_groups'));
  }
  public set contactGroups(value: string[]) {
    this._contactGroups = value;
  }
  public resetContactGroups() {
    this._contactGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string; 
  public get headers() {
    return this.getStringAttribute('headers');
  }
  public set headers(value: string) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // postback_url - computed: false, optional: false, required: true
  private _postbackUrl?: string; 
  public get postbackUrl() {
    return this.getStringAttribute('postback_url');
  }
  public set postbackUrl(value: string) {
    this._postbackUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postbackUrlInput() {
    return this._postbackUrl;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // use_legacy_payload - computed: true, optional: true, required: false
  private _useLegacyPayload?: boolean | cdktf.IResolvable; 
  public get useLegacyPayload() {
    return this.getBooleanAttribute('use_legacy_payload');
  }
  public set useLegacyPayload(value: boolean | cdktf.IResolvable) {
    this._useLegacyPayload = value;
  }
  public resetUseLegacyPayload() {
    this._useLegacyPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLegacyPayloadInput() {
    return this._useLegacyPayload;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      headers: cdktf.stringToTerraform(this._headers),
      name: cdktf.stringToTerraform(this._name),
      postback_url: cdktf.stringToTerraform(this._postbackUrl),
      use_legacy_payload: cdktf.booleanToTerraform(this._useLegacyPayload),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      headers: {
        value: cdktf.stringToHclTerraform(this._headers),
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
      postback_url: {
        value: cdktf.stringToHclTerraform(this._postbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_legacy_payload: {
        value: cdktf.booleanToHclTerraform(this._useLegacyPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
