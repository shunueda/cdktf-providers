// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_channels_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskrouterWorkspacesTaskChannelsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_channels_v1#channel_optimized_routing TaskrouterWorkspacesTaskChannelsV1#channel_optimized_routing}
  */
  readonly channelOptimizedRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_channels_v1#friendly_name TaskrouterWorkspacesTaskChannelsV1#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_channels_v1#id TaskrouterWorkspacesTaskChannelsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_channels_v1#unique_name TaskrouterWorkspacesTaskChannelsV1#unique_name}
  */
  readonly uniqueName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_channels_v1#workspace_sid TaskrouterWorkspacesTaskChannelsV1#workspace_sid}
  */
  readonly workspaceSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_channels_v1 twilio_taskrouter_workspaces_task_channels_v1}
*/
export class TaskrouterWorkspacesTaskChannelsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_taskrouter_workspaces_task_channels_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TaskrouterWorkspacesTaskChannelsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TaskrouterWorkspacesTaskChannelsV1 to import
  * @param importFromId The id of the existing TaskrouterWorkspacesTaskChannelsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_channels_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TaskrouterWorkspacesTaskChannelsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_taskrouter_workspaces_task_channels_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/taskrouter_workspaces_task_channels_v1 twilio_taskrouter_workspaces_task_channels_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskrouterWorkspacesTaskChannelsV1Config
  */
  public constructor(scope: Construct, id: string, config: TaskrouterWorkspacesTaskChannelsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_taskrouter_workspaces_task_channels_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channelOptimizedRouting = config.channelOptimizedRouting;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._uniqueName = config.uniqueName;
    this._workspaceSid = config.workspaceSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_optimized_routing - computed: true, optional: true, required: false
  private _channelOptimizedRouting?: boolean | cdktf.IResolvable; 
  public get channelOptimizedRouting() {
    return this.getBooleanAttribute('channel_optimized_routing');
  }
  public set channelOptimizedRouting(value: boolean | cdktf.IResolvable) {
    this._channelOptimizedRouting = value;
  }
  public resetChannelOptimizedRouting() {
    this._channelOptimizedRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelOptimizedRoutingInput() {
    return this._channelOptimizedRouting;
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

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // unique_name - computed: false, optional: false, required: true
  private _uniqueName?: string; 
  public get uniqueName() {
    return this.getStringAttribute('unique_name');
  }
  public set uniqueName(value: string) {
    this._uniqueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueNameInput() {
    return this._uniqueName;
  }

  // workspace_sid - computed: false, optional: false, required: true
  private _workspaceSid?: string; 
  public get workspaceSid() {
    return this.getStringAttribute('workspace_sid');
  }
  public set workspaceSid(value: string) {
    this._workspaceSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceSidInput() {
    return this._workspaceSid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_optimized_routing: cdktf.booleanToTerraform(this._channelOptimizedRouting),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      unique_name: cdktf.stringToTerraform(this._uniqueName),
      workspace_sid: cdktf.stringToTerraform(this._workspaceSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_optimized_routing: {
        value: cdktf.booleanToHclTerraform(this._channelOptimizedRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      unique_name: {
        value: cdktf.stringToHclTerraform(this._uniqueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_sid: {
        value: cdktf.stringToHclTerraform(this._workspaceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
