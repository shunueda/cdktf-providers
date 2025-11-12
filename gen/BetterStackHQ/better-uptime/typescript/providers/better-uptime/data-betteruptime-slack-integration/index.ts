// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_slack_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBetteruptimeSlackIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the connected Slack channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_slack_integration#slack_channel_name DataBetteruptimeSlackIntegration#slack_channel_name}
  */
  readonly slackChannelName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_slack_integration betteruptime_slack_integration}
*/
export class DataBetteruptimeSlackIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_slack_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBetteruptimeSlackIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBetteruptimeSlackIntegration to import
  * @param importFromId The id of the existing DataBetteruptimeSlackIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_slack_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBetteruptimeSlackIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_slack_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_slack_integration betteruptime_slack_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBetteruptimeSlackIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataBetteruptimeSlackIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_slack_integration',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4',
        providerVersionConstraint: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._slackChannelName = config.slackChannelName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_type - computed: true, optional: false, required: false
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }

  // on_call_notifications - computed: true, optional: false, required: false
  public get onCallNotifications() {
    return this.getBooleanAttribute('on_call_notifications');
  }

  // slack_channel_id - computed: true, optional: false, required: false
  public get slackChannelId() {
    return this.getStringAttribute('slack_channel_id');
  }

  // slack_channel_name - computed: false, optional: false, required: true
  private _slackChannelName?: string; 
  public get slackChannelName() {
    return this.getStringAttribute('slack_channel_name');
  }
  public set slackChannelName(value: string) {
    this._slackChannelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelNameInput() {
    return this._slackChannelName;
  }

  // slack_status - computed: true, optional: false, required: false
  public get slackStatus() {
    return this.getStringAttribute('slack_status');
  }

  // slack_team_id - computed: true, optional: false, required: false
  public get slackTeamId() {
    return this.getStringAttribute('slack_team_id');
  }

  // slack_team_name - computed: true, optional: false, required: false
  public get slackTeamName() {
    return this.getStringAttribute('slack_team_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      slack_channel_name: cdktf.stringToTerraform(this._slackChannelName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      slack_channel_name: {
        value: cdktf.stringToHclTerraform(this._slackChannelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
