// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/css_start_stream_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssStartStreamMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The input index for monitoring the screen audio, supports multiple input audio sources.The valid range for InputIndex is that it must already exist.If left blank, there will be no audio output by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/css_start_stream_monitor#audible_input_index_list CssStartStreamMonitor#audible_input_index_list}
  */
  readonly audibleInputIndexList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/css_start_stream_monitor#id CssStartStreamMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/css_start_stream_monitor#monitor_id CssStartStreamMonitor#monitor_id}
  */
  readonly monitorId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/css_start_stream_monitor tencentcloud_css_start_stream_monitor}
*/
export class CssStartStreamMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_start_stream_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssStartStreamMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssStartStreamMonitor to import
  * @param importFromId The id of the existing CssStartStreamMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/css_start_stream_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssStartStreamMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_start_stream_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/css_start_stream_monitor tencentcloud_css_start_stream_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssStartStreamMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: CssStartStreamMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_start_stream_monitor',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._audibleInputIndexList = config.audibleInputIndexList;
    this._id = config.id;
    this._monitorId = config.monitorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audible_input_index_list - computed: false, optional: true, required: false
  private _audibleInputIndexList?: number[]; 
  public get audibleInputIndexList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('audible_input_index_list')));
  }
  public set audibleInputIndexList(value: number[]) {
    this._audibleInputIndexList = value;
  }
  public resetAudibleInputIndexList() {
    this._audibleInputIndexList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audibleInputIndexListInput() {
    return this._audibleInputIndexList;
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

  // monitor_id - computed: false, optional: false, required: true
  private _monitorId?: string; 
  public get monitorId() {
    return this.getStringAttribute('monitor_id');
  }
  public set monitorId(value: string) {
    this._monitorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdInput() {
    return this._monitorId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audible_input_index_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._audibleInputIndexList),
      id: cdktf.stringToTerraform(this._id),
      monitor_id: cdktf.stringToTerraform(this._monitorId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audible_input_index_list: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._audibleInputIndexList),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
