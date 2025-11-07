// https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/slack_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlackDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * One of: slack channel name (#channel), channel ID, handle name (@user).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/slack_destination#channel SlackDestination#channel}
  */
  readonly channel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/slack_destination#id SlackDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lightstep project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/slack_destination#project_name SlackDestination#project_name}
  */
  readonly projectName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/slack_destination lightstep_slack_destination}
*/
export class SlackDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lightstep_slack_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlackDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlackDestination to import
  * @param importFromId The id of the existing SlackDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/slack_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlackDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lightstep_slack_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/slack_destination lightstep_slack_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlackDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: SlackDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'lightstep_slack_destination',
      terraformGeneratorMetadata: {
        providerName: 'lightstep',
        providerVersion: '1.98.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channel = config.channel;
    this._id = config.id;
    this._projectName = config.projectName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
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

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel: cdktf.stringToTerraform(this._channel),
      id: cdktf.stringToTerraform(this._id),
      project_name: cdktf.stringToTerraform(this._projectName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel: {
        value: cdktf.stringToHclTerraform(this._channel),
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
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
