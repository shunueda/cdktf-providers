// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_azure_analytics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayLogForwardingAzureAnalyticsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Log Forwarding [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_azure_analytics#enable GatewayLogForwardingAzureAnalytics#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_azure_analytics#id GatewayLogForwardingAzureAnalytics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Logs format [text/json]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_azure_analytics#output_format GatewayLogForwardingAzureAnalytics#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Pull interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_azure_analytics#pull_interval GatewayLogForwardingAzureAnalytics#pull_interval}
  */
  readonly pullInterval?: string;
  /**
  * Azure workspace id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_azure_analytics#workspace_id GatewayLogForwardingAzureAnalytics#workspace_id}
  */
  readonly workspaceId?: string;
  /**
  * Azure workspace key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_azure_analytics#workspace_key GatewayLogForwardingAzureAnalytics#workspace_key}
  */
  readonly workspaceKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_azure_analytics akeyless_gateway_log_forwarding_azure_analytics}
*/
export class GatewayLogForwardingAzureAnalytics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_gateway_log_forwarding_azure_analytics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayLogForwardingAzureAnalytics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayLogForwardingAzureAnalytics to import
  * @param importFromId The id of the existing GatewayLogForwardingAzureAnalytics that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_azure_analytics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayLogForwardingAzureAnalytics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_gateway_log_forwarding_azure_analytics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_azure_analytics akeyless_gateway_log_forwarding_azure_analytics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayLogForwardingAzureAnalyticsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GatewayLogForwardingAzureAnalyticsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akeyless_gateway_log_forwarding_azure_analytics',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enable = config.enable;
    this._id = config.id;
    this._outputFormat = config.outputFormat;
    this._pullInterval = config.pullInterval;
    this._workspaceId = config.workspaceId;
    this._workspaceKey = config.workspaceKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // pull_interval - computed: false, optional: true, required: false
  private _pullInterval?: string; 
  public get pullInterval() {
    return this.getStringAttribute('pull_interval');
  }
  public set pullInterval(value: string) {
    this._pullInterval = value;
  }
  public resetPullInterval() {
    this._pullInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullIntervalInput() {
    return this._pullInterval;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // workspace_key - computed: false, optional: true, required: false
  private _workspaceKey?: string; 
  public get workspaceKey() {
    return this.getStringAttribute('workspace_key');
  }
  public set workspaceKey(value: string) {
    this._workspaceKey = value;
  }
  public resetWorkspaceKey() {
    this._workspaceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceKeyInput() {
    return this._workspaceKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.stringToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      output_format: cdktf.stringToTerraform(this._outputFormat),
      pull_interval: cdktf.stringToTerraform(this._pullInterval),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      workspace_key: cdktf.stringToTerraform(this._workspaceKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.stringToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_format: {
        value: cdktf.stringToHclTerraform(this._outputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_interval: {
        value: cdktf.stringToHclTerraform(this._pullInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_key: {
        value: cdktf.stringToHclTerraform(this._workspaceKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
