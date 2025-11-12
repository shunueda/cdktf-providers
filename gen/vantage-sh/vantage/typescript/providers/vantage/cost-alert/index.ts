// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/cost_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CostAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * The email recipients for the Cost Alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/cost_alert#email_recipients CostAlert#email_recipients}
  */
  readonly emailRecipients?: string[];
  /**
  * The period of time used to compare costs. Options are 'day', 'week', 'month', 'quarter'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/cost_alert#interval CostAlert#interval}
  */
  readonly interval: string;
  /**
  * The tokens of the reports to alert on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/cost_alert#report_tokens CostAlert#report_tokens}
  */
  readonly reportTokens?: string[];
  /**
  * The Slack channels that will receive the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/cost_alert#slack_channels CostAlert#slack_channels}
  */
  readonly slackChannels?: string[];
  /**
  * The Microsoft Teams channels that will receive the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/cost_alert#teams_channels CostAlert#teams_channels}
  */
  readonly teamsChannels?: string[];
  /**
  * The threshold value for the Cost Alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/cost_alert#threshold CostAlert#threshold}
  */
  readonly threshold: number;
  /**
  * The title of the Cost Alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/cost_alert#title CostAlert#title}
  */
  readonly title: string;
  /**
  * The unit type used to compare costs. Options are 'currency' or 'percentage'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/cost_alert#unit_type CostAlert#unit_type}
  */
  readonly unitType: string;
  /**
  * The token of the Workspace to add the Cost Alert to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/cost_alert#workspace_token CostAlert#workspace_token}
  */
  readonly workspaceToken: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/cost_alert vantage_cost_alert}
*/
export class CostAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_cost_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CostAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CostAlert to import
  * @param importFromId The id of the existing CostAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/cost_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CostAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_cost_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/cost_alert vantage_cost_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CostAlertConfig
  */
  public constructor(scope: Construct, id: string, config: CostAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_cost_alert',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.68',
        providerVersionConstraint: '0.1.68'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emailRecipients = config.emailRecipients;
    this._interval = config.interval;
    this._reportTokens = config.reportTokens;
    this._slackChannels = config.slackChannels;
    this._teamsChannels = config.teamsChannels;
    this._threshold = config.threshold;
    this._title = config.title;
    this._unitType = config.unitType;
    this._workspaceToken = config.workspaceToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // email_recipients - computed: true, optional: true, required: false
  private _emailRecipients?: string[]; 
  public get emailRecipients() {
    return this.getListAttribute('email_recipients');
  }
  public set emailRecipients(value: string[]) {
    this._emailRecipients = value;
  }
  public resetEmailRecipients() {
    this._emailRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailRecipientsInput() {
    return this._emailRecipients;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // report_tokens - computed: true, optional: true, required: false
  private _reportTokens?: string[]; 
  public get reportTokens() {
    return this.getListAttribute('report_tokens');
  }
  public set reportTokens(value: string[]) {
    this._reportTokens = value;
  }
  public resetReportTokens() {
    this._reportTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportTokensInput() {
    return this._reportTokens;
  }

  // slack_channels - computed: true, optional: true, required: false
  private _slackChannels?: string[]; 
  public get slackChannels() {
    return this.getListAttribute('slack_channels');
  }
  public set slackChannels(value: string[]) {
    this._slackChannels = value;
  }
  public resetSlackChannels() {
    this._slackChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelsInput() {
    return this._slackChannels;
  }

  // teams_channels - computed: true, optional: true, required: false
  private _teamsChannels?: string[]; 
  public get teamsChannels() {
    return this.getListAttribute('teams_channels');
  }
  public set teamsChannels(value: string[]) {
    this._teamsChannels = value;
  }
  public resetTeamsChannels() {
    this._teamsChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsChannelsInput() {
    return this._teamsChannels;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // unit_type - computed: false, optional: false, required: true
  private _unitType?: string; 
  public get unitType() {
    return this.getStringAttribute('unit_type');
  }
  public set unitType(value: string) {
    this._unitType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitTypeInput() {
    return this._unitType;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_token - computed: false, optional: false, required: true
  private _workspaceToken?: string; 
  public get workspaceToken() {
    return this.getStringAttribute('workspace_token');
  }
  public set workspaceToken(value: string) {
    this._workspaceToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceTokenInput() {
    return this._workspaceToken;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailRecipients),
      interval: cdktf.stringToTerraform(this._interval),
      report_tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(this._reportTokens),
      slack_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._slackChannels),
      teams_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teamsChannels),
      threshold: cdktf.numberToTerraform(this._threshold),
      title: cdktf.stringToTerraform(this._title),
      unit_type: cdktf.stringToTerraform(this._unitType),
      workspace_token: cdktf.stringToTerraform(this._workspaceToken),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_recipients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailRecipients),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_tokens: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._reportTokens),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      slack_channels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._slackChannels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      teams_channels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._teamsChannels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_type: {
        value: cdktf.stringToHclTerraform(this._unitType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_token: {
        value: cdktf.stringToHclTerraform(this._workspaceToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
