// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_slack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationSlackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_slack#name IntegrationSlack#name}
  */
  readonly name: string;
  /**
  * The Slack token to authenticate with the Slack API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_slack#slack_token IntegrationSlack#slack_token}
  */
  readonly slackToken: string;
  /**
  * Mondoo space identifier. If there is no space ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_slack#space_id IntegrationSlack#space_id}
  */
  readonly spaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_slack mondoo_integration_slack}
*/
export class IntegrationSlack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_integration_slack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationSlack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationSlack to import
  * @param importFromId The id of the existing IntegrationSlack that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_slack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationSlack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_integration_slack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_slack mondoo_integration_slack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationSlackConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationSlackConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_integration_slack',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.3',
        providerVersionConstraint: '0.35.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._slackToken = config.slackToken;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // mrn - computed: true, optional: false, required: false
  public get mrn() {
    return this.getStringAttribute('mrn');
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

  // slack_token - computed: false, optional: false, required: true
  private _slackToken?: string; 
  public get slackToken() {
    return this.getStringAttribute('slack_token');
  }
  public set slackToken(value: string) {
    this._slackToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slackTokenInput() {
    return this._slackToken;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      slack_token: cdktf.stringToTerraform(this._slackToken),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slack_token: {
        value: cdktf.stringToHclTerraform(this._slackToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
