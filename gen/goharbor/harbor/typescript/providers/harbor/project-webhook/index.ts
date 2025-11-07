// https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project_webhook#address ProjectWebhook#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project_webhook#auth_header ProjectWebhook#auth_header}
  */
  readonly authHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project_webhook#description ProjectWebhook#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project_webhook#enabled ProjectWebhook#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project_webhook#events_types ProjectWebhook#events_types}
  */
  readonly eventsTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project_webhook#id ProjectWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project_webhook#name ProjectWebhook#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project_webhook#notify_type ProjectWebhook#notify_type}
  */
  readonly notifyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project_webhook#payload_format ProjectWebhook#payload_format}
  */
  readonly payloadFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project_webhook#project_id ProjectWebhook#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project_webhook#skip_cert_verify ProjectWebhook#skip_cert_verify}
  */
  readonly skipCertVerify?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project_webhook harbor_project_webhook}
*/
export class ProjectWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harbor_project_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectWebhook to import
  * @param importFromId The id of the existing ProjectWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harbor_project_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/project_webhook harbor_project_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'harbor_project_webhook',
      terraformGeneratorMetadata: {
        providerName: 'harbor',
        providerVersion: '3.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._authHeader = config.authHeader;
    this._description = config.description;
    this._enabled = config.enabled;
    this._eventsTypes = config.eventsTypes;
    this._id = config.id;
    this._name = config.name;
    this._notifyType = config.notifyType;
    this._payloadFormat = config.payloadFormat;
    this._projectId = config.projectId;
    this._skipCertVerify = config.skipCertVerify;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // auth_header - computed: false, optional: true, required: false
  private _authHeader?: string; 
  public get authHeader() {
    return this.getStringAttribute('auth_header');
  }
  public set authHeader(value: string) {
    this._authHeader = value;
  }
  public resetAuthHeader() {
    this._authHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHeaderInput() {
    return this._authHeader;
  }

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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // events_types - computed: false, optional: false, required: true
  private _eventsTypes?: string[]; 
  public get eventsTypes() {
    return this.getListAttribute('events_types');
  }
  public set eventsTypes(value: string[]) {
    this._eventsTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsTypesInput() {
    return this._eventsTypes;
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

  // notify_type - computed: false, optional: false, required: true
  private _notifyType?: string; 
  public get notifyType() {
    return this.getStringAttribute('notify_type');
  }
  public set notifyType(value: string) {
    this._notifyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyTypeInput() {
    return this._notifyType;
  }

  // payload_format - computed: false, optional: true, required: false
  private _payloadFormat?: string; 
  public get payloadFormat() {
    return this.getStringAttribute('payload_format');
  }
  public set payloadFormat(value: string) {
    this._payloadFormat = value;
  }
  public resetPayloadFormat() {
    this._payloadFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFormatInput() {
    return this._payloadFormat;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // skip_cert_verify - computed: false, optional: true, required: false
  private _skipCertVerify?: boolean | cdktf.IResolvable; 
  public get skipCertVerify() {
    return this.getBooleanAttribute('skip_cert_verify');
  }
  public set skipCertVerify(value: boolean | cdktf.IResolvable) {
    this._skipCertVerify = value;
  }
  public resetSkipCertVerify() {
    this._skipCertVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCertVerifyInput() {
    return this._skipCertVerify;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      auth_header: cdktf.stringToTerraform(this._authHeader),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      events_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventsTypes),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notify_type: cdktf.stringToTerraform(this._notifyType),
      payload_format: cdktf.stringToTerraform(this._payloadFormat),
      project_id: cdktf.stringToTerraform(this._projectId),
      skip_cert_verify: cdktf.booleanToTerraform(this._skipCertVerify),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_header: {
        value: cdktf.stringToHclTerraform(this._authHeader),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      events_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventsTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      notify_type: {
        value: cdktf.stringToHclTerraform(this._notifyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payload_format: {
        value: cdktf.stringToHclTerraform(this._payloadFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_cert_verify: {
        value: cdktf.booleanToHclTerraform(this._skipCertVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
