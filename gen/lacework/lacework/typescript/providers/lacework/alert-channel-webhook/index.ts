// https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertChannelWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The state of the external integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_webhook#enabled AlertChannelWebhook#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_webhook#id AlertChannelWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The integration name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_webhook#name AlertChannelWebhook#name}
  */
  readonly name: string;
  /**
  * Whether to test the integration of an alert channel upon creation and modification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_webhook#test_integration AlertChannelWebhook#test_integration}
  */
  readonly testIntegration?: boolean | cdktf.IResolvable;
  /**
  * The url of the external webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_webhook#webhook_url AlertChannelWebhook#webhook_url}
  */
  readonly webhookUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_webhook lacework_alert_channel_webhook}
*/
export class AlertChannelWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_alert_channel_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertChannelWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertChannelWebhook to import
  * @param importFromId The id of the existing AlertChannelWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertChannelWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_alert_channel_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_webhook lacework_alert_channel_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertChannelWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: AlertChannelWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_alert_channel_webhook',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._testIntegration = config.testIntegration;
    this._webhookUrl = config.webhookUrl;
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

  // intg_guid - computed: true, optional: false, required: false
  public get intgGuid() {
    return this.getStringAttribute('intg_guid');
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

  // webhook_url - computed: false, optional: false, required: true
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      test_integration: cdktf.booleanToTerraform(this._testIntegration),
      webhook_url: cdktf.stringToTerraform(this._webhookUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
