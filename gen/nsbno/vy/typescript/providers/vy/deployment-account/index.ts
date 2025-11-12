// https://registry.terraform.io/providers/nsbno/vy/0.5.0/docs/resources/deployment_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * A Slack channel where info about deployments go
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/0.5.0/docs/resources/deployment_account#slack_channel DeploymentAccount#slack_channel}
  */
  readonly slackChannel: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nsbno/vy/0.5.0/docs/resources/deployment_account vy_deployment_account}
*/
export class DeploymentAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vy_deployment_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeploymentAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeploymentAccount to import
  * @param importFromId The id of the existing DeploymentAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/nsbno/vy/0.5.0/docs/resources/deployment_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeploymentAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vy_deployment_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nsbno/vy/0.5.0/docs/resources/deployment_account vy_deployment_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentAccountConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'vy_deployment_account',
      terraformGeneratorMetadata: {
        providerName: 'vy',
        providerVersion: '0.5.0',
        providerVersionConstraint: '0.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._slackChannel = config.slackChannel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // slack_channel - computed: false, optional: false, required: true
  private _slackChannel?: string; 
  public get slackChannel() {
    return this.getStringAttribute('slack_channel');
  }
  public set slackChannel(value: string) {
    this._slackChannel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelInput() {
    return this._slackChannel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      slack_channel: cdktf.stringToTerraform(this._slackChannel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      slack_channel: {
        value: cdktf.stringToHclTerraform(this._slackChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
