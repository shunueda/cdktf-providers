// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/report_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The kind of change sent ReportNotification. One of percentage/dollars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/report_notification#change ReportNotification#change}
  */
  readonly change: string;
  /**
  * Token for the cost report to be used in the notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/report_notification#cost_report_token ReportNotification#cost_report_token}
  */
  readonly costReportToken: string;
  /**
  * The frequency at which the ReportNotification is sent. One of daily/weekly/monthly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/report_notification#frequency ReportNotification#frequency}
  */
  readonly frequency: string;
  /**
  * Title of the report notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/report_notification#title ReportNotification#title}
  */
  readonly title: string;
  /**
  * Tokens for the users to be notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/report_notification#user_tokens ReportNotification#user_tokens}
  */
  readonly userTokens: string[];
  /**
  * Token for the workspace the report notification is added toe notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/report_notification#workspace_token ReportNotification#workspace_token}
  */
  readonly workspaceToken?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/report_notification vantage_report_notification}
*/
export class ReportNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_report_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportNotification to import
  * @param importFromId The id of the existing ReportNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/report_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_report_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/report_notification vantage_report_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: ReportNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_report_notification',
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
    this._change = config.change;
    this._costReportToken = config.costReportToken;
    this._frequency = config.frequency;
    this._title = config.title;
    this._userTokens = config.userTokens;
    this._workspaceToken = config.workspaceToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change - computed: false, optional: false, required: true
  private _change?: string; 
  public get change() {
    return this.getStringAttribute('change');
  }
  public set change(value: string) {
    this._change = value;
  }
  // Temporarily expose input value. Use with caution.
  public get changeInput() {
    return this._change;
  }

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

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // user_tokens - computed: false, optional: false, required: true
  private _userTokens?: string[]; 
  public get userTokens() {
    return cdktf.Fn.tolist(this.getListAttribute('user_tokens'));
  }
  public set userTokens(value: string[]) {
    this._userTokens = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokensInput() {
    return this._userTokens;
  }

  // workspace_token - computed: false, optional: true, required: false
  private _workspaceToken?: string; 
  public get workspaceToken() {
    return this.getStringAttribute('workspace_token');
  }
  public set workspaceToken(value: string) {
    this._workspaceToken = value;
  }
  public resetWorkspaceToken() {
    this._workspaceToken = undefined;
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
      change: cdktf.stringToTerraform(this._change),
      cost_report_token: cdktf.stringToTerraform(this._costReportToken),
      frequency: cdktf.stringToTerraform(this._frequency),
      title: cdktf.stringToTerraform(this._title),
      user_tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userTokens),
      workspace_token: cdktf.stringToTerraform(this._workspaceToken),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      change: {
        value: cdktf.stringToHclTerraform(this._change),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost_report_token: {
        value: cdktf.stringToHclTerraform(this._costReportToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tokens: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userTokens),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
