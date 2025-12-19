// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/anomaly_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnomalyNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The token of the Cost Report that has the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/anomaly_notification#cost_report_token AnomalyNotification#cost_report_token}
  */
  readonly costReportToken: string;
  /**
  * The Slack/MS Teams channels that receive the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/anomaly_notification#recipient_channels AnomalyNotification#recipient_channels}
  */
  readonly recipientChannels?: string[];
  /**
  * The threshold amount that must be met for the notification to fire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/anomaly_notification#threshold AnomalyNotification#threshold}
  */
  readonly threshold?: number;
  /**
  * The tokens of the Users that receive the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/anomaly_notification#user_tokens AnomalyNotification#user_tokens}
  */
  readonly userTokens?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/anomaly_notification vantage_anomaly_notification}
*/
export class AnomalyNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_anomaly_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AnomalyNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AnomalyNotification to import
  * @param importFromId The id of the existing AnomalyNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/anomaly_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AnomalyNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_anomaly_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/anomaly_notification vantage_anomaly_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnomalyNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: AnomalyNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_anomaly_notification',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.71',
        providerVersionConstraint: '0.1.71'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._costReportToken = config.costReportToken;
    this._recipientChannels = config.recipientChannels;
    this._threshold = config.threshold;
    this._userTokens = config.userTokens;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cost_report_token - computed: false, optional: false, required: true
  private _costReportToken?: string; 
  public get costReportToken() {
    return this.getStringAttribute('cost_report_token');
  }
  public set costReportToken(value: string) {
    this._costReportToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costReportTokenInput() {
    return this._costReportToken;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // recipient_channels - computed: true, optional: true, required: false
  private _recipientChannels?: string[]; 
  public get recipientChannels() {
    return this.getListAttribute('recipient_channels');
  }
  public set recipientChannels(value: string[]) {
    this._recipientChannels = value;
  }
  public resetRecipientChannels() {
    this._recipientChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientChannelsInput() {
    return this._recipientChannels;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_tokens - computed: true, optional: true, required: false
  private _userTokens?: string[]; 
  public get userTokens() {
    return this.getListAttribute('user_tokens');
  }
  public set userTokens(value: string[]) {
    this._userTokens = value;
  }
  public resetUserTokens() {
    this._userTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokensInput() {
    return this._userTokens;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cost_report_token: cdktf.stringToTerraform(this._costReportToken),
      recipient_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipientChannels),
      threshold: cdktf.numberToTerraform(this._threshold),
      user_tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userTokens),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cost_report_token: {
        value: cdktf.stringToHclTerraform(this._costReportToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recipient_channels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipientChannels),
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
      user_tokens: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userTokens),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
