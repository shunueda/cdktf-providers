// https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_copilot_studio_application_insights
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PowerplatformCopilotStudioApplicationInsightsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The connection string for the target Application Insights resource in Azure. If needed, follow [these instructions](https://learn.microsoft.com/en-us/azure/azure-monitor/app/connection-strings?tabs=net#find-your-connection-string) to find your connection string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_copilot_studio_application_insights#application_insights_connection_string PowerplatformCopilotStudioApplicationInsights#application_insights_connection_string}
  */
  readonly applicationInsightsConnectionString: string;
  /**
  * The ID of the Copilot for which the Application Insights configuration is to be managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_copilot_studio_application_insights#bot_id PowerplatformCopilotStudioApplicationInsights#bot_id}
  */
  readonly botId: string;
  /**
  * Environment ID for the Power Platform environment where the Copilot exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_copilot_studio_application_insights#environment_id PowerplatformCopilotStudioApplicationInsights#environment_id}
  */
  readonly environmentId: string;
  /**
  * Whether to log an event each time a node within a topic is executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_copilot_studio_application_insights#include_actions PowerplatformCopilotStudioApplicationInsights#include_actions}
  */
  readonly includeActions?: boolean | cdktf.IResolvable;
  /**
  * Whether to log details of incoming/outgoing messages and events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_copilot_studio_application_insights#include_activities PowerplatformCopilotStudioApplicationInsights#include_activities}
  */
  readonly includeActivities?: boolean | cdktf.IResolvable;
  /**
  * Whether to log sensitive properties such as user ID, name, and text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_copilot_studio_application_insights#include_sensitive_information PowerplatformCopilotStudioApplicationInsights#include_sensitive_information}
  */
  readonly includeSensitiveInformation?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_copilot_studio_application_insights powerplatform_copilot_studio_application_insights}
*/
export class PowerplatformCopilotStudioApplicationInsights extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerplatform_copilot_studio_application_insights";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PowerplatformCopilotStudioApplicationInsights resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PowerplatformCopilotStudioApplicationInsights to import
  * @param importFromId The id of the existing PowerplatformCopilotStudioApplicationInsights that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_copilot_studio_application_insights#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PowerplatformCopilotStudioApplicationInsights to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerplatform_copilot_studio_application_insights", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_copilot_studio_application_insights powerplatform_copilot_studio_application_insights} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PowerplatformCopilotStudioApplicationInsightsConfig
  */
  public constructor(scope: Construct, id: string, config: PowerplatformCopilotStudioApplicationInsightsConfig) {
    super(scope, id, {
      terraformResourceType: 'powerplatform_copilot_studio_application_insights',
      terraformGeneratorMetadata: {
        providerName: 'power-platform',
        providerVersion: '3.9.1',
        providerVersionConstraint: '3.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationInsightsConnectionString = config.applicationInsightsConnectionString;
    this._botId = config.botId;
    this._environmentId = config.environmentId;
    this._includeActions = config.includeActions;
    this._includeActivities = config.includeActivities;
    this._includeSensitiveInformation = config.includeSensitiveInformation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_insights_connection_string - computed: false, optional: false, required: true
  private _applicationInsightsConnectionString?: string; 
  public get applicationInsightsConnectionString() {
    return this.getStringAttribute('application_insights_connection_string');
  }
  public set applicationInsightsConnectionString(value: string) {
    this._applicationInsightsConnectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsConnectionStringInput() {
    return this._applicationInsightsConnectionString;
  }

  // bot_id - computed: false, optional: false, required: true
  private _botId?: string; 
  public get botId() {
    return this.getStringAttribute('bot_id');
  }
  public set botId(value: string) {
    this._botId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botIdInput() {
    return this._botId;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_actions - computed: true, optional: true, required: false
  private _includeActions?: boolean | cdktf.IResolvable; 
  public get includeActions() {
    return this.getBooleanAttribute('include_actions');
  }
  public set includeActions(value: boolean | cdktf.IResolvable) {
    this._includeActions = value;
  }
  public resetIncludeActions() {
    this._includeActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeActionsInput() {
    return this._includeActions;
  }

  // include_activities - computed: true, optional: true, required: false
  private _includeActivities?: boolean | cdktf.IResolvable; 
  public get includeActivities() {
    return this.getBooleanAttribute('include_activities');
  }
  public set includeActivities(value: boolean | cdktf.IResolvable) {
    this._includeActivities = value;
  }
  public resetIncludeActivities() {
    this._includeActivities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeActivitiesInput() {
    return this._includeActivities;
  }

  // include_sensitive_information - computed: true, optional: true, required: false
  private _includeSensitiveInformation?: boolean | cdktf.IResolvable; 
  public get includeSensitiveInformation() {
    return this.getBooleanAttribute('include_sensitive_information');
  }
  public set includeSensitiveInformation(value: boolean | cdktf.IResolvable) {
    this._includeSensitiveInformation = value;
  }
  public resetIncludeSensitiveInformation() {
    this._includeSensitiveInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSensitiveInformationInput() {
    return this._includeSensitiveInformation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_insights_connection_string: cdktf.stringToTerraform(this._applicationInsightsConnectionString),
      bot_id: cdktf.stringToTerraform(this._botId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      include_actions: cdktf.booleanToTerraform(this._includeActions),
      include_activities: cdktf.booleanToTerraform(this._includeActivities),
      include_sensitive_information: cdktf.booleanToTerraform(this._includeSensitiveInformation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_insights_connection_string: {
        value: cdktf.stringToHclTerraform(this._applicationInsightsConnectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_id: {
        value: cdktf.stringToHclTerraform(this._botId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_actions: {
        value: cdktf.booleanToHclTerraform(this._includeActions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_activities: {
        value: cdktf.booleanToHclTerraform(this._includeActivities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_sensitive_information: {
        value: cdktf.booleanToHclTerraform(this._includeSensitiveInformation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
