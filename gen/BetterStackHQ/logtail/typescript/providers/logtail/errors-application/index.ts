// https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/errors_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ErrorsApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the application group this application belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/errors_application#application_group_id ErrorsApplication#application_group_id}
  */
  readonly applicationGroupId?: number;
  /**
  * Data region or cluster name where application data will be stored. If omitted, the default data region for your team will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/errors_application#data_region ErrorsApplication#data_region}
  */
  readonly dataRegion?: string;
  /**
  * Error data retention period in days. Default retention is 90 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/errors_application#errors_retention ErrorsApplication#errors_retention}
  */
  readonly errorsRetention?: number;
  /**
  * This property allows you to temporarily pause data ingesting for this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/errors_application#ingesting_paused ErrorsApplication#ingesting_paused}
  */
  readonly ingestingPaused?: boolean | cdktf.IResolvable;
  /**
  * Application name. Must be unique within your team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/errors_application#name ErrorsApplication#name}
  */
  readonly name: string;
  /**
  * The platform type for the application. This helps configure appropriate SDKs and integrations. Examples: dot_net_errors, dot_net_maui_errors, dot_net_http_errors, aiohttp_errors, asgi_errors, asp_dot_net_errors, asp_dot_net_core_errors, aws_lambda_dot_net_errors, aws_lambda_node_errors, aws_lambda_python_errors... Must be suffixed with _errors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/errors_application#platform ErrorsApplication#platform}
  */
  readonly platform: string;
  /**
  * Used to specify the team the resource should be created in when using global tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/errors_application#team_name ErrorsApplication#team_name}
  */
  readonly teamName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/errors_application logtail_errors_application}
*/
export class ErrorsApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logtail_errors_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ErrorsApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ErrorsApplication to import
  * @param importFromId The id of the existing ErrorsApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/errors_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ErrorsApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logtail_errors_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/resources/errors_application logtail_errors_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ErrorsApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ErrorsApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'logtail_errors_application',
      terraformGeneratorMetadata: {
        providerName: 'logtail',
        providerVersion: '0.7.1',
        providerVersionConstraint: '0.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationGroupId = config.applicationGroupId;
    this._dataRegion = config.dataRegion;
    this._errorsRetention = config.errorsRetention;
    this._ingestingPaused = config.ingestingPaused;
    this._name = config.name;
    this._platform = config.platform;
    this._teamName = config.teamName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_group_id - computed: false, optional: true, required: false
  private _applicationGroupId?: number; 
  public get applicationGroupId() {
    return this.getNumberAttribute('application_group_id');
  }
  public set applicationGroupId(value: number) {
    this._applicationGroupId = value;
  }
  public resetApplicationGroupId() {
    this._applicationGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGroupIdInput() {
    return this._applicationGroupId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_region - computed: true, optional: true, required: false
  private _dataRegion?: string; 
  public get dataRegion() {
    return this.getStringAttribute('data_region');
  }
  public set dataRegion(value: string) {
    this._dataRegion = value;
  }
  public resetDataRegion() {
    this._dataRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRegionInput() {
    return this._dataRegion;
  }

  // errors_retention - computed: true, optional: true, required: false
  private _errorsRetention?: number; 
  public get errorsRetention() {
    return this.getNumberAttribute('errors_retention');
  }
  public set errorsRetention(value: number) {
    this._errorsRetention = value;
  }
  public resetErrorsRetention() {
    this._errorsRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsRetentionInput() {
    return this._errorsRetention;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingesting_host - computed: true, optional: false, required: false
  public get ingestingHost() {
    return this.getStringAttribute('ingesting_host');
  }

  // ingesting_paused - computed: true, optional: true, required: false
  private _ingestingPaused?: boolean | cdktf.IResolvable; 
  public get ingestingPaused() {
    return this.getBooleanAttribute('ingesting_paused');
  }
  public set ingestingPaused(value: boolean | cdktf.IResolvable) {
    this._ingestingPaused = value;
  }
  public resetIngestingPaused() {
    this._ingestingPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestingPausedInput() {
    return this._ingestingPaused;
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

  // platform - computed: false, optional: false, required: true
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_group_id: cdktf.numberToTerraform(this._applicationGroupId),
      data_region: cdktf.stringToTerraform(this._dataRegion),
      errors_retention: cdktf.numberToTerraform(this._errorsRetention),
      ingesting_paused: cdktf.booleanToTerraform(this._ingestingPaused),
      name: cdktf.stringToTerraform(this._name),
      platform: cdktf.stringToTerraform(this._platform),
      team_name: cdktf.stringToTerraform(this._teamName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_group_id: {
        value: cdktf.numberToHclTerraform(this._applicationGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_region: {
        value: cdktf.stringToHclTerraform(this._dataRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      errors_retention: {
        value: cdktf.numberToHclTerraform(this._errorsRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ingesting_paused: {
        value: cdktf.booleanToHclTerraform(this._ingestingPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
