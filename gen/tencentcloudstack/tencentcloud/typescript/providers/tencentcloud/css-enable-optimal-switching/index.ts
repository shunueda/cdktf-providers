// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/css_enable_optimal_switching
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssEnableOptimalSwitchingConfig extends cdktf.TerraformMetaArguments {
  /**
  * `0`:disabled, `1`:enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/css_enable_optimal_switching#enable_switch CssEnableOptimalSwitching#enable_switch}
  */
  readonly enableSwitch?: number;
  /**
  * Group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/css_enable_optimal_switching#host_group_name CssEnableOptimalSwitching#host_group_name}
  */
  readonly hostGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/css_enable_optimal_switching#id CssEnableOptimalSwitching#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Stream id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/css_enable_optimal_switching#stream_name CssEnableOptimalSwitching#stream_name}
  */
  readonly streamName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/css_enable_optimal_switching tencentcloud_css_enable_optimal_switching}
*/
export class CssEnableOptimalSwitching extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_enable_optimal_switching";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssEnableOptimalSwitching resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssEnableOptimalSwitching to import
  * @param importFromId The id of the existing CssEnableOptimalSwitching that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/css_enable_optimal_switching#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssEnableOptimalSwitching to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_enable_optimal_switching", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/css_enable_optimal_switching tencentcloud_css_enable_optimal_switching} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssEnableOptimalSwitchingConfig
  */
  public constructor(scope: Construct, id: string, config: CssEnableOptimalSwitchingConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_enable_optimal_switching',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableSwitch = config.enableSwitch;
    this._hostGroupName = config.hostGroupName;
    this._id = config.id;
    this._streamName = config.streamName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_switch - computed: false, optional: true, required: false
  private _enableSwitch?: number; 
  public get enableSwitch() {
    return this.getNumberAttribute('enable_switch');
  }
  public set enableSwitch(value: number) {
    this._enableSwitch = value;
  }
  public resetEnableSwitch() {
    this._enableSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSwitchInput() {
    return this._enableSwitch;
  }

  // host_group_name - computed: false, optional: true, required: false
  private _hostGroupName?: string; 
  public get hostGroupName() {
    return this.getStringAttribute('host_group_name');
  }
  public set hostGroupName(value: string) {
    this._hostGroupName = value;
  }
  public resetHostGroupName() {
    this._hostGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupNameInput() {
    return this._hostGroupName;
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

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_switch: cdktf.numberToTerraform(this._enableSwitch),
      host_group_name: cdktf.stringToTerraform(this._hostGroupName),
      id: cdktf.stringToTerraform(this._id),
      stream_name: cdktf.stringToTerraform(this._streamName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_switch: {
        value: cdktf.numberToHclTerraform(this._enableSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_group_name: {
        value: cdktf.stringToHclTerraform(this._hostGroupName),
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
      stream_name: {
        value: cdktf.stringToHclTerraform(this._streamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
