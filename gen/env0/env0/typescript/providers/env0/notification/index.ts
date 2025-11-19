// https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/notification#id Notification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the name of the notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * 'Slack', 'Teams', 'Email' or 'Webhook'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/notification#type Notification#type}
  */
  readonly type: string;
  /**
  * URL for Slack, Teams or Webhooks endpoint. Coma separated list of email addresses for email endpoint, you can use `$ENVIRONMENT_CREATOR$`, and `$DEPLOYER$` to resolve emails dynamically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/notification#value Notification#value}
  */
  readonly value: string;
  /**
  * the webhook secret to use for signing the webhook payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/notification#webhook_secret Notification#webhook_secret}
  */
  readonly webhookSecret?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/notification env0_notification}
*/
export class Notification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Notification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Notification to import
  * @param importFromId The id of the existing Notification that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Notification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/notification env0_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_notification',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.7',
        providerVersionConstraint: '1.29.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._value = config.value;
    this._webhookSecret = config.webhookSecret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // webhook_secret - computed: false, optional: true, required: false
  private _webhookSecret?: string; 
  public get webhookSecret() {
    return this.getStringAttribute('webhook_secret');
  }
  public set webhookSecret(value: string) {
    this._webhookSecret = value;
  }
  public resetWebhookSecret() {
    this._webhookSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretInput() {
    return this._webhookSecret;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
      webhook_secret: cdktf.stringToTerraform(this._webhookSecret),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_secret: {
        value: cdktf.stringToHclTerraform(this._webhookSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
