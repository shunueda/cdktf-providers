// https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_service_now
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertChannelServiceNowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Populate fields in the ServiceNow incident with values from a custom template JSON file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_service_now#custom_template_file AlertChannelServiceNow#custom_template_file}
  */
  readonly customTemplateFile?: string;
  /**
  * The state of the external integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_service_now#enabled AlertChannelServiceNow#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_service_now#id AlertChannelServiceNow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ServiceNow instance URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_service_now#instance_url AlertChannelServiceNow#instance_url}
  */
  readonly instanceUrl: string;
  /**
  * Defines how Lacework compliance events get grouped. Must be one of Events or Resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_service_now#issue_grouping AlertChannelServiceNow#issue_grouping}
  */
  readonly issueGrouping?: string;
  /**
  * The integration name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_service_now#name AlertChannelServiceNow#name}
  */
  readonly name: string;
  /**
  * The ServiceNow password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_service_now#password AlertChannelServiceNow#password}
  */
  readonly password: string;
  /**
  * Whether to test the integration of an alert channel upon creation and modification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_service_now#test_integration AlertChannelServiceNow#test_integration}
  */
  readonly testIntegration?: boolean | cdktf.IResolvable;
  /**
  * The ServiceNow username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_service_now#username AlertChannelServiceNow#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_service_now lacework_alert_channel_service_now}
*/
export class AlertChannelServiceNow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_alert_channel_service_now";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertChannelServiceNow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertChannelServiceNow to import
  * @param importFromId The id of the existing AlertChannelServiceNow that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_service_now#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertChannelServiceNow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_alert_channel_service_now", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_service_now lacework_alert_channel_service_now} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertChannelServiceNowConfig
  */
  public constructor(scope: Construct, id: string, config: AlertChannelServiceNowConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_alert_channel_service_now',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.11',
        providerVersionConstraint: '2.0.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customTemplateFile = config.customTemplateFile;
    this._enabled = config.enabled;
    this._id = config.id;
    this._instanceUrl = config.instanceUrl;
    this._issueGrouping = config.issueGrouping;
    this._name = config.name;
    this._password = config.password;
    this._testIntegration = config.testIntegration;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_or_updated_by - computed: true, optional: false, required: false
  public get createdOrUpdatedBy() {
    return this.getStringAttribute('created_or_updated_by');
  }

  // created_or_updated_time - computed: true, optional: false, required: false
  public get createdOrUpdatedTime() {
    return this.getStringAttribute('created_or_updated_time');
  }

  // custom_template_file - computed: false, optional: true, required: false
  private _customTemplateFile?: string; 
  public get customTemplateFile() {
    return this.getStringAttribute('custom_template_file');
  }
  public set customTemplateFile(value: string) {
    this._customTemplateFile = value;
  }
  public resetCustomTemplateFile() {
    this._customTemplateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTemplateFileInput() {
    return this._customTemplateFile;
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

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }

  // intg_guid - computed: true, optional: false, required: false
  public get intgGuid() {
    return this.getStringAttribute('intg_guid');
  }

  // issue_grouping - computed: false, optional: true, required: false
  private _issueGrouping?: string; 
  public get issueGrouping() {
    return this.getStringAttribute('issue_grouping');
  }
  public set issueGrouping(value: string) {
    this._issueGrouping = value;
  }
  public resetIssueGrouping() {
    this._issueGrouping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueGroupingInput() {
    return this._issueGrouping;
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

  // org_level - computed: true, optional: false, required: false
  public get orgLevel() {
    return this.getBooleanAttribute('org_level');
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // test_integration - computed: false, optional: true, required: false
  private _testIntegration?: boolean | cdktf.IResolvable; 
  public get testIntegration() {
    return this.getBooleanAttribute('test_integration');
  }
  public set testIntegration(value: boolean | cdktf.IResolvable) {
    this._testIntegration = value;
  }
  public resetTestIntegration() {
    this._testIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testIntegrationInput() {
    return this._testIntegration;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_template_file: cdktf.stringToTerraform(this._customTemplateFile),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_url: cdktf.stringToTerraform(this._instanceUrl),
      issue_grouping: cdktf.stringToTerraform(this._issueGrouping),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      test_integration: cdktf.booleanToTerraform(this._testIntegration),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_template_file: {
        value: cdktf.stringToHclTerraform(this._customTemplateFile),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_url: {
        value: cdktf.stringToHclTerraform(this._instanceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issue_grouping: {
        value: cdktf.stringToHclTerraform(this._issueGrouping),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_integration: {
        value: cdktf.booleanToHclTerraform(this._testIntegration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
