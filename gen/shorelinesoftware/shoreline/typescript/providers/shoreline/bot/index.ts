// https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot#alarm_resource_query Bot#alarm_resource_query}
  */
  readonly alarmResourceQuery?: string;
  /**
  * A specific action to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot#command Bot#command}
  */
  readonly command: string;
  /**
  * A string value denoting the slack channel where notifications related to the object should be sent to. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot#communication_channel Bot#communication_channel}
  */
  readonly communicationChannel?: string;
  /**
  * A string value denoting the slack workspace where notifications related to the object should be sent to. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot#communication_workspace Bot#communication_workspace}
  */
  readonly communicationWorkspace?: string;
  /**
  * A user-friendly explanation of an object. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot#description Bot#description}
  */
  readonly description?: string;
  /**
  * If the object is currently enabled or disabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot#enabled Bot#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Used to tag 'datadog' monitor triggers vs 'shoreline' alarms (default). Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot#event_type Bot#event_type}
  */
  readonly eventType?: string;
  /**
  * General class for an Action or Bot (e.g., custom, standard, metric, or system check). Defaults to `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot#family Bot#family}
  */
  readonly family?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot#id Bot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name/symbol of a Shoreline integration involved in triggering the bot. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot#integration_name Bot#integration_name}
  */
  readonly integrationName?: string;
  /**
  * For 'datadog' monitor triggered bots, the DD monitor identifier. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot#monitor_id Bot#monitor_id}
  */
  readonly monitorId?: string;
  /**
  * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot#name Bot#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot shoreline_bot}
*/
export class Bot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shoreline_bot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bot to import
  * @param importFromId The id of the existing Bot that should be imported. Refer to the {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shoreline_bot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/bot shoreline_bot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotConfig
  */
  public constructor(scope: Construct, id: string, config: BotConfig) {
    super(scope, id, {
      terraformResourceType: 'shoreline_bot',
      terraformGeneratorMetadata: {
        providerName: 'shoreline',
        providerVersion: '1.15.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmResourceQuery = config.alarmResourceQuery;
    this._command = config.command;
    this._communicationChannel = config.communicationChannel;
    this._communicationWorkspace = config.communicationWorkspace;
    this._description = config.description;
    this._enabled = config.enabled;
    this._eventType = config.eventType;
    this._family = config.family;
    this._id = config.id;
    this._integrationName = config.integrationName;
    this._monitorId = config.monitorId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_resource_query - computed: false, optional: true, required: false
  private _alarmResourceQuery?: string; 
  public get alarmResourceQuery() {
    return this.getStringAttribute('alarm_resource_query');
  }
  public set alarmResourceQuery(value: string) {
    this._alarmResourceQuery = value;
  }
  public resetAlarmResourceQuery() {
    this._alarmResourceQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmResourceQueryInput() {
    return this._alarmResourceQuery;
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // communication_channel - computed: false, optional: true, required: false
  private _communicationChannel?: string; 
  public get communicationChannel() {
    return this.getStringAttribute('communication_channel');
  }
  public set communicationChannel(value: string) {
    this._communicationChannel = value;
  }
  public resetCommunicationChannel() {
    this._communicationChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationChannelInput() {
    return this._communicationChannel;
  }

  // communication_workspace - computed: false, optional: true, required: false
  private _communicationWorkspace?: string; 
  public get communicationWorkspace() {
    return this.getStringAttribute('communication_workspace');
  }
  public set communicationWorkspace(value: string) {
    this._communicationWorkspace = value;
  }
  public resetCommunicationWorkspace() {
    this._communicationWorkspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationWorkspaceInput() {
    return this._communicationWorkspace;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
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

  // integration_name - computed: false, optional: true, required: false
  private _integrationName?: string; 
  public get integrationName() {
    return this.getStringAttribute('integration_name');
  }
  public set integrationName(value: string) {
    this._integrationName = value;
  }
  public resetIntegrationName() {
    this._integrationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationNameInput() {
    return this._integrationName;
  }

  // monitor_id - computed: false, optional: true, required: false
  private _monitorId?: string; 
  public get monitorId() {
    return this.getStringAttribute('monitor_id');
  }
  public set monitorId(value: string) {
    this._monitorId = value;
  }
  public resetMonitorId() {
    this._monitorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdInput() {
    return this._monitorId;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_resource_query: cdktf.stringToTerraform(this._alarmResourceQuery),
      command: cdktf.stringToTerraform(this._command),
      communication_channel: cdktf.stringToTerraform(this._communicationChannel),
      communication_workspace: cdktf.stringToTerraform(this._communicationWorkspace),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      event_type: cdktf.stringToTerraform(this._eventType),
      family: cdktf.stringToTerraform(this._family),
      id: cdktf.stringToTerraform(this._id),
      integration_name: cdktf.stringToTerraform(this._integrationName),
      monitor_id: cdktf.stringToTerraform(this._monitorId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_resource_query: {
        value: cdktf.stringToHclTerraform(this._alarmResourceQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communication_channel: {
        value: cdktf.stringToHclTerraform(this._communicationChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communication_workspace: {
        value: cdktf.stringToHclTerraform(this._communicationWorkspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_type: {
        value: cdktf.stringToHclTerraform(this._eventType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      family: {
        value: cdktf.stringToHclTerraform(this._family),
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
      integration_name: {
        value: cdktf.stringToHclTerraform(this._integrationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_id: {
        value: cdktf.stringToHclTerraform(this._monitorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
