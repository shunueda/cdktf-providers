// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_timeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogTimelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * default connection that the dashboard uses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_timeline#default_connection LogTimeline#default_connection}
  */
  readonly defaultConnection?: string;
  /**
  * Description of the chart (Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_timeline#description LogTimeline#description}
  */
  readonly description?: string;
  /**
  * Seconds since epoch to end the visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_timeline#end_time LogTimeline#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_timeline#id LogTimeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_timeline#name LogTimeline#name}
  */
  readonly name: string;
  /**
  * Signalflow program text for the chart. More info at "https://developers.signalfx.com/docs/signalflow-overview"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_timeline#program_text LogTimeline#program_text}
  */
  readonly programText: string;
  /**
  * Seconds since epoch to start the visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_timeline#start_time LogTimeline#start_time}
  */
  readonly startTime?: number;
  /**
  * Tags associated with the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_timeline#tags LogTimeline#tags}
  */
  readonly tags?: string[];
  /**
  * Seconds to display in the visualization. This is a rolling range from the current time. Example: 3600 = `-1h`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_timeline#time_range LogTimeline#time_range}
  */
  readonly timeRange?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_timeline signalfx_log_timeline}
*/
export class LogTimeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_log_timeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogTimeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogTimeline to import
  * @param importFromId The id of the existing LogTimeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_timeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogTimeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_log_timeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_timeline signalfx_log_timeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogTimelineConfig
  */
  public constructor(scope: Construct, id: string, config: LogTimelineConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_log_timeline',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.1',
        providerVersionConstraint: '9.23.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultConnection = config.defaultConnection;
    this._description = config.description;
    this._endTime = config.endTime;
    this._id = config.id;
    this._name = config.name;
    this._programText = config.programText;
    this._startTime = config.startTime;
    this._tags = config.tags;
    this._timeRange = config.timeRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_connection - computed: false, optional: true, required: false
  private _defaultConnection?: string; 
  public get defaultConnection() {
    return this.getStringAttribute('default_connection');
  }
  public set defaultConnection(value: string) {
    this._defaultConnection = value;
  }
  public resetDefaultConnection() {
    this._defaultConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConnectionInput() {
    return this._defaultConnection;
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

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // program_text - computed: false, optional: false, required: true
  private _programText?: string; 
  public get programText() {
    return this.getStringAttribute('program_text');
  }
  public set programText(value: string) {
    this._programText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programTextInput() {
    return this._programText;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // time_range - computed: false, optional: true, required: false
  private _timeRange?: number; 
  public get timeRange() {
    return this.getNumberAttribute('time_range');
  }
  public set timeRange(value: number) {
    this._timeRange = value;
  }
  public resetTimeRange() {
    this._timeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_connection: cdktf.stringToTerraform(this._defaultConnection),
      description: cdktf.stringToTerraform(this._description),
      end_time: cdktf.numberToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      program_text: cdktf.stringToTerraform(this._programText),
      start_time: cdktf.numberToTerraform(this._startTime),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      time_range: cdktf.numberToTerraform(this._timeRange),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_connection: {
        value: cdktf.stringToHclTerraform(this._defaultConnection),
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
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      program_text: {
        value: cdktf.stringToHclTerraform(this._programText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      time_range: {
        value: cdktf.numberToHclTerraform(this._timeRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
