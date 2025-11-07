// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskrouterWorkspacesV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_v1#default_activity_sid TaskrouterWorkspacesV1#default_activity_sid}
  */
  readonly defaultActivitySid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_v1#event_callback_url TaskrouterWorkspacesV1#event_callback_url}
  */
  readonly eventCallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_v1#events_filter TaskrouterWorkspacesV1#events_filter}
  */
  readonly eventsFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_v1#friendly_name TaskrouterWorkspacesV1#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_v1#id TaskrouterWorkspacesV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_v1#multi_task_enabled TaskrouterWorkspacesV1#multi_task_enabled}
  */
  readonly multiTaskEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_v1#prioritize_queue_order TaskrouterWorkspacesV1#prioritize_queue_order}
  */
  readonly prioritizeQueueOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_v1#template TaskrouterWorkspacesV1#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_v1#timeout_activity_sid TaskrouterWorkspacesV1#timeout_activity_sid}
  */
  readonly timeoutActivitySid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_v1 twilio_taskrouter_workspaces_v1}
*/
export class TaskrouterWorkspacesV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_taskrouter_workspaces_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TaskrouterWorkspacesV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TaskrouterWorkspacesV1 to import
  * @param importFromId The id of the existing TaskrouterWorkspacesV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TaskrouterWorkspacesV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_taskrouter_workspaces_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_v1 twilio_taskrouter_workspaces_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskrouterWorkspacesV1Config
  */
  public constructor(scope: Construct, id: string, config: TaskrouterWorkspacesV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_taskrouter_workspaces_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultActivitySid = config.defaultActivitySid;
    this._eventCallbackUrl = config.eventCallbackUrl;
    this._eventsFilter = config.eventsFilter;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._multiTaskEnabled = config.multiTaskEnabled;
    this._prioritizeQueueOrder = config.prioritizeQueueOrder;
    this._template = config.template;
    this._timeoutActivitySid = config.timeoutActivitySid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_activity_sid - computed: true, optional: true, required: false
  private _defaultActivitySid?: string; 
  public get defaultActivitySid() {
    return this.getStringAttribute('default_activity_sid');
  }
  public set defaultActivitySid(value: string) {
    this._defaultActivitySid = value;
  }
  public resetDefaultActivitySid() {
    this._defaultActivitySid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActivitySidInput() {
    return this._defaultActivitySid;
  }

  // event_callback_url - computed: true, optional: true, required: false
  private _eventCallbackUrl?: string; 
  public get eventCallbackUrl() {
    return this.getStringAttribute('event_callback_url');
  }
  public set eventCallbackUrl(value: string) {
    this._eventCallbackUrl = value;
  }
  public resetEventCallbackUrl() {
    this._eventCallbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCallbackUrlInput() {
    return this._eventCallbackUrl;
  }

  // events_filter - computed: true, optional: true, required: false
  private _eventsFilter?: string; 
  public get eventsFilter() {
    return this.getStringAttribute('events_filter');
  }
  public set eventsFilter(value: string) {
    this._eventsFilter = value;
  }
  public resetEventsFilter() {
    this._eventsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsFilterInput() {
    return this._eventsFilter;
  }

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // multi_task_enabled - computed: true, optional: true, required: false
  private _multiTaskEnabled?: boolean | cdktf.IResolvable; 
  public get multiTaskEnabled() {
    return this.getBooleanAttribute('multi_task_enabled');
  }
  public set multiTaskEnabled(value: boolean | cdktf.IResolvable) {
    this._multiTaskEnabled = value;
  }
  public resetMultiTaskEnabled() {
    this._multiTaskEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTaskEnabledInput() {
    return this._multiTaskEnabled;
  }

  // prioritize_queue_order - computed: true, optional: true, required: false
  private _prioritizeQueueOrder?: string; 
  public get prioritizeQueueOrder() {
    return this.getStringAttribute('prioritize_queue_order');
  }
  public set prioritizeQueueOrder(value: string) {
    this._prioritizeQueueOrder = value;
  }
  public resetPrioritizeQueueOrder() {
    this._prioritizeQueueOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritizeQueueOrderInput() {
    return this._prioritizeQueueOrder;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // timeout_activity_sid - computed: true, optional: true, required: false
  private _timeoutActivitySid?: string; 
  public get timeoutActivitySid() {
    return this.getStringAttribute('timeout_activity_sid');
  }
  public set timeoutActivitySid(value: string) {
    this._timeoutActivitySid = value;
  }
  public resetTimeoutActivitySid() {
    this._timeoutActivitySid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutActivitySidInput() {
    return this._timeoutActivitySid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_activity_sid: cdktf.stringToTerraform(this._defaultActivitySid),
      event_callback_url: cdktf.stringToTerraform(this._eventCallbackUrl),
      events_filter: cdktf.stringToTerraform(this._eventsFilter),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      multi_task_enabled: cdktf.booleanToTerraform(this._multiTaskEnabled),
      prioritize_queue_order: cdktf.stringToTerraform(this._prioritizeQueueOrder),
      template: cdktf.stringToTerraform(this._template),
      timeout_activity_sid: cdktf.stringToTerraform(this._timeoutActivitySid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_activity_sid: {
        value: cdktf.stringToHclTerraform(this._defaultActivitySid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_callback_url: {
        value: cdktf.stringToHclTerraform(this._eventCallbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      events_filter: {
        value: cdktf.stringToHclTerraform(this._eventsFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      multi_task_enabled: {
        value: cdktf.booleanToHclTerraform(this._multiTaskEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prioritize_queue_order: {
        value: cdktf.stringToHclTerraform(this._prioritizeQueueOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_activity_sid: {
        value: cdktf.stringToHclTerraform(this._timeoutActivitySid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
