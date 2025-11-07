// https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/pagerduty_recipient
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PagerdutyRecipientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/pagerduty_recipient#id PagerdutyRecipient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The key of the PagerDuty Integration to send the notification to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/pagerduty_recipient#integration_key PagerdutyRecipient#integration_key}
  */
  readonly integrationKey: string;
  /**
  * The name of the PagerDuty Integration to send the notification to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/pagerduty_recipient#integration_name PagerdutyRecipient#integration_name}
  */
  readonly integrationName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/pagerduty_recipient honeycombio_pagerduty_recipient}
*/
export class PagerdutyRecipient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "honeycombio_pagerduty_recipient";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PagerdutyRecipient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PagerdutyRecipient to import
  * @param importFromId The id of the existing PagerdutyRecipient that should be imported. Refer to the {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/pagerduty_recipient#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PagerdutyRecipient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "honeycombio_pagerduty_recipient", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/pagerduty_recipient honeycombio_pagerduty_recipient} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PagerdutyRecipientConfig
  */
  public constructor(scope: Construct, id: string, config: PagerdutyRecipientConfig) {
    super(scope, id, {
      terraformResourceType: 'honeycombio_pagerduty_recipient',
      terraformGeneratorMetadata: {
        providerName: 'honeycombio',
        providerVersion: '0.42.0'
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
    this._integrationKey = config.integrationKey;
    this._integrationName = config.integrationName;
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

  // integration_key - computed: false, optional: false, required: true
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
  }

  // integration_name - computed: false, optional: false, required: true
  private _integrationName?: string; 
  public get integrationName() {
    return this.getStringAttribute('integration_name');
  }
  public set integrationName(value: string) {
    this._integrationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationNameInput() {
    return this._integrationName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      integration_key: cdktf.stringToTerraform(this._integrationKey),
      integration_name: cdktf.stringToTerraform(this._integrationName),
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
      integration_key: {
        value: cdktf.stringToHclTerraform(this._integrationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_name: {
        value: cdktf.stringToHclTerraform(this._integrationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
