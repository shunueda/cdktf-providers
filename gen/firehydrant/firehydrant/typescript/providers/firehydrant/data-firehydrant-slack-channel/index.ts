// https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/data-sources/slack_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFirehydrantSlackChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the channel, provided by Slack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/data-sources/slack_channel#slack_channel_id DataFirehydrantSlackChannel#slack_channel_id}
  */
  readonly slackChannelId?: string;
  /**
  * Name of this Slack channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/data-sources/slack_channel#slack_channel_name DataFirehydrantSlackChannel#slack_channel_name}
  */
  readonly slackChannelName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/data-sources/slack_channel firehydrant_slack_channel}
*/
export class DataFirehydrantSlackChannel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "firehydrant_slack_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFirehydrantSlackChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFirehydrantSlackChannel to import
  * @param importFromId The id of the existing DataFirehydrantSlackChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/data-sources/slack_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFirehydrantSlackChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "firehydrant_slack_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/data-sources/slack_channel firehydrant_slack_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFirehydrantSlackChannelConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFirehydrantSlackChannelConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'firehydrant_slack_channel',
      terraformGeneratorMetadata: {
        providerName: 'firehydrant',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._slackChannelId = config.slackChannelId;
    this._slackChannelName = config.slackChannelName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // slack_channel_id - computed: false, optional: true, required: false
  private _slackChannelId?: string; 
  public get slackChannelId() {
    return this.getStringAttribute('slack_channel_id');
  }
  public set slackChannelId(value: string) {
    this._slackChannelId = value;
  }
  public resetSlackChannelId() {
    this._slackChannelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelIdInput() {
    return this._slackChannelId;
  }

  // slack_channel_name - computed: false, optional: true, required: false
  private _slackChannelName?: string; 
  public get slackChannelName() {
    return this.getStringAttribute('slack_channel_name');
  }
  public set slackChannelName(value: string) {
    this._slackChannelName = value;
  }
  public resetSlackChannelName() {
    this._slackChannelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelNameInput() {
    return this._slackChannelName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      slack_channel_id: cdktf.stringToTerraform(this._slackChannelId),
      slack_channel_name: cdktf.stringToTerraform(this._slackChannelName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      slack_channel_id: {
        value: cdktf.stringToHclTerraform(this._slackChannelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
