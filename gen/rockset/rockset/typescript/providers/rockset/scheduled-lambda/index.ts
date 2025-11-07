// https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/scheduled_lambda
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScheduledLambdaConfig extends cdktf.TerraformMetaArguments {
  /**
  * The apikey to use when triggering execution of the associated query lambda.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/scheduled_lambda#apikey ScheduledLambda#apikey}
  */
  readonly apikey: string;
  /**
  * The UNIX-formatted cron string for this scheduled query lambda.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/scheduled_lambda#cron_string ScheduledLambda#cron_string}
  */
  readonly cronString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/scheduled_lambda#id ScheduledLambda#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the QL to use for scheduled execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/scheduled_lambda#query_lambda_name ScheduledLambda#query_lambda_name}
  */
  readonly queryLambdaName: string;
  /**
  * The QL tag to use for scheduled execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/scheduled_lambda#tag ScheduledLambda#tag}
  */
  readonly tag?: string;
  /**
  * The number of times to execute this scheduled query lambda. Once this scheduled query lambda has been executed this many times, it will no longer be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/scheduled_lambda#total_times_to_execute ScheduledLambda#total_times_to_execute}
  */
  readonly totalTimesToExecute?: number;
  /**
  * The version of the QL to use for scheduled execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/scheduled_lambda#version ScheduledLambda#version}
  */
  readonly version?: string;
  /**
  * The value to use as the authorization header when hitting the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/scheduled_lambda#webhook_auth_header ScheduledLambda#webhook_auth_header}
  */
  readonly webhookAuthHeader?: string;
  /**
  * The payload that should be sent to the webhook. JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/scheduled_lambda#webhook_payload ScheduledLambda#webhook_payload}
  */
  readonly webhookPayload?: string;
  /**
  * The URL of the webhook that should be triggered after this scheduled query lambda completes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/scheduled_lambda#webhook_url ScheduledLambda#webhook_url}
  */
  readonly webhookUrl?: string;
  /**
  * Workspace name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/scheduled_lambda#workspace ScheduledLambda#workspace}
  */
  readonly workspace: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/scheduled_lambda rockset_scheduled_lambda}
*/
export class ScheduledLambda extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rockset_scheduled_lambda";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScheduledLambda resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScheduledLambda to import
  * @param importFromId The id of the existing ScheduledLambda that should be imported. Refer to the {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/scheduled_lambda#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScheduledLambda to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rockset_scheduled_lambda", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/scheduled_lambda rockset_scheduled_lambda} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScheduledLambdaConfig
  */
  public constructor(scope: Construct, id: string, config: ScheduledLambdaConfig) {
    super(scope, id, {
      terraformResourceType: 'rockset_scheduled_lambda',
      terraformGeneratorMetadata: {
        providerName: 'rockset',
        providerVersion: '0.9.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apikey = config.apikey;
    this._cronString = config.cronString;
    this._id = config.id;
    this._queryLambdaName = config.queryLambdaName;
    this._tag = config.tag;
    this._totalTimesToExecute = config.totalTimesToExecute;
    this._version = config.version;
    this._webhookAuthHeader = config.webhookAuthHeader;
    this._webhookPayload = config.webhookPayload;
    this._webhookUrl = config.webhookUrl;
    this._workspace = config.workspace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apikey - computed: false, optional: false, required: true
  private _apikey?: string; 
  public get apikey() {
    return this.getStringAttribute('apikey');
  }
  public set apikey(value: string) {
    this._apikey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apikeyInput() {
    return this._apikey;
  }

  // cron_string - computed: false, optional: false, required: true
  private _cronString?: string; 
  public get cronString() {
    return this.getStringAttribute('cron_string');
  }
  public set cronString(value: string) {
    this._cronString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronStringInput() {
    return this._cronString;
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

  // query_lambda_name - computed: false, optional: false, required: true
  private _queryLambdaName?: string; 
  public get queryLambdaName() {
    return this.getStringAttribute('query_lambda_name');
  }
  public set queryLambdaName(value: string) {
    this._queryLambdaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLambdaNameInput() {
    return this._queryLambdaName;
  }

  // rrn - computed: true, optional: false, required: false
  public get rrn() {
    return this.getStringAttribute('rrn');
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // total_times_to_execute - computed: false, optional: true, required: false
  private _totalTimesToExecute?: number; 
  public get totalTimesToExecute() {
    return this.getNumberAttribute('total_times_to_execute');
  }
  public set totalTimesToExecute(value: number) {
    this._totalTimesToExecute = value;
  }
  public resetTotalTimesToExecute() {
    this._totalTimesToExecute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTimesToExecuteInput() {
    return this._totalTimesToExecute;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // webhook_auth_header - computed: false, optional: true, required: false
  private _webhookAuthHeader?: string; 
  public get webhookAuthHeader() {
    return this.getStringAttribute('webhook_auth_header');
  }
  public set webhookAuthHeader(value: string) {
    this._webhookAuthHeader = value;
  }
  public resetWebhookAuthHeader() {
    this._webhookAuthHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookAuthHeaderInput() {
    return this._webhookAuthHeader;
  }

  // webhook_payload - computed: false, optional: true, required: false
  private _webhookPayload?: string; 
  public get webhookPayload() {
    return this.getStringAttribute('webhook_payload');
  }
  public set webhookPayload(value: string) {
    this._webhookPayload = value;
  }
  public resetWebhookPayload() {
    this._webhookPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookPayloadInput() {
    return this._webhookPayload;
  }

  // webhook_url - computed: false, optional: true, required: false
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
  }
  public resetWebhookUrl() {
    this._webhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlInput() {
    return this._webhookUrl;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apikey: cdktf.stringToTerraform(this._apikey),
      cron_string: cdktf.stringToTerraform(this._cronString),
      id: cdktf.stringToTerraform(this._id),
      query_lambda_name: cdktf.stringToTerraform(this._queryLambdaName),
      tag: cdktf.stringToTerraform(this._tag),
      total_times_to_execute: cdktf.numberToTerraform(this._totalTimesToExecute),
      version: cdktf.stringToTerraform(this._version),
      webhook_auth_header: cdktf.stringToTerraform(this._webhookAuthHeader),
      webhook_payload: cdktf.stringToTerraform(this._webhookPayload),
      webhook_url: cdktf.stringToTerraform(this._webhookUrl),
      workspace: cdktf.stringToTerraform(this._workspace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apikey: {
        value: cdktf.stringToHclTerraform(this._apikey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cron_string: {
        value: cdktf.stringToHclTerraform(this._cronString),
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
      query_lambda_name: {
        value: cdktf.stringToHclTerraform(this._queryLambdaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_times_to_execute: {
        value: cdktf.numberToHclTerraform(this._totalTimesToExecute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_auth_header: {
        value: cdktf.stringToHclTerraform(this._webhookAuthHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_payload: {
        value: cdktf.stringToHclTerraform(this._webhookPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_url: {
        value: cdktf.stringToHclTerraform(this._webhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace: {
        value: cdktf.stringToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
