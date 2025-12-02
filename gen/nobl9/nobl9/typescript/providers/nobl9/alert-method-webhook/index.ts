// https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertMethodWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description of the resource. Here, you can add details about who is responsible for the integration (team/owner) or the purpose of creating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_webhook#description AlertMethodWebhook#description}
  */
  readonly description?: string;
  /**
  * User-friendly display name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_webhook#display_name AlertMethodWebhook#display_name}
  */
  readonly displayName?: string;
  /**
  * Custom HTTP headers to include in the webhook request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_webhook#headers AlertMethodWebhook#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_webhook#id AlertMethodWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name of the resource, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_webhook#name AlertMethodWebhook#name}
  */
  readonly name: string;
  /**
  * Name of the Nobl9 project the resource sits in, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_webhook#project AlertMethodWebhook#project}
  */
  readonly project: string;
  /**
  * Custom HTTP headers to include in the webhook request. The values are treated as sensitive, will not be displayed in the Terraform state and will be encrypted by Nobl9 platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_webhook#sensitive_headers AlertMethodWebhook#sensitive_headers}
  */
  readonly sensitiveHeaders?: { [key: string]: string };
  /**
  * Webhook message template. See documentation for template format and samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_webhook#template AlertMethodWebhook#template}
  */
  readonly template?: string;
  /**
  * Webhook message fields. The message contains JSON payload with specified fields. See documentation for allowed fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_webhook#template_fields AlertMethodWebhook#template_fields}
  */
  readonly templateFields?: string[];
  /**
  * URL of the webhook endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_webhook#url AlertMethodWebhook#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_webhook nobl9_alert_method_webhook}
*/
export class AlertMethodWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nobl9_alert_method_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertMethodWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertMethodWebhook to import
  * @param importFromId The id of the existing AlertMethodWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertMethodWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nobl9_alert_method_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_webhook nobl9_alert_method_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertMethodWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: AlertMethodWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'nobl9_alert_method_webhook',
      terraformGeneratorMetadata: {
        providerName: 'nobl9',
        providerVersion: '0.45.0',
        providerVersionConstraint: '0.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._headers = config.headers;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._sensitiveHeaders = config.sensitiveHeaders;
    this._template = config.template;
    this._templateFields = config.templateFields;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // sensitive_headers - computed: false, optional: true, required: false
  private _sensitiveHeaders?: { [key: string]: string }; 
  public get sensitiveHeaders() {
    return this.getStringMapAttribute('sensitive_headers');
  }
  public set sensitiveHeaders(value: { [key: string]: string }) {
    this._sensitiveHeaders = value;
  }
  public resetSensitiveHeaders() {
    this._sensitiveHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveHeadersInput() {
    return this._sensitiveHeaders;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // template_fields - computed: false, optional: true, required: false
  private _templateFields?: string[]; 
  public get templateFields() {
    return this.getListAttribute('template_fields');
  }
  public set templateFields(value: string[]) {
    this._templateFields = value;
  }
  public resetTemplateFields() {
    this._templateFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateFieldsInput() {
    return this._templateFields;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      sensitive_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._sensitiveHeaders),
      template: cdktf.stringToTerraform(this._template),
      template_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._templateFields),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sensitiveHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._templateFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
