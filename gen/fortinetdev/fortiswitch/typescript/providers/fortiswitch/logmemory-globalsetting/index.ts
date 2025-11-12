// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logmemory_globalsetting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogmemoryGlobalsettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logmemory_globalsetting#full_final_warning_threshold LogmemoryGlobalsetting#full_final_warning_threshold}
  */
  readonly fullFinalWarningThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logmemory_globalsetting#full_first_warning_threshold LogmemoryGlobalsetting#full_first_warning_threshold}
  */
  readonly fullFirstWarningThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logmemory_globalsetting#full_second_warning_threshold LogmemoryGlobalsetting#full_second_warning_threshold}
  */
  readonly fullSecondWarningThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logmemory_globalsetting#hourly_upload LogmemoryGlobalsetting#hourly_upload}
  */
  readonly hourlyUpload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logmemory_globalsetting#id LogmemoryGlobalsetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logmemory_globalsetting#max_size LogmemoryGlobalsetting#max_size}
  */
  readonly maxSize?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logmemory_globalsetting fortiswitch_logmemory_globalsetting}
*/
export class LogmemoryGlobalsetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_logmemory_globalsetting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogmemoryGlobalsetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogmemoryGlobalsetting to import
  * @param importFromId The id of the existing LogmemoryGlobalsetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logmemory_globalsetting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogmemoryGlobalsetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_logmemory_globalsetting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logmemory_globalsetting fortiswitch_logmemory_globalsetting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogmemoryGlobalsettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogmemoryGlobalsettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_logmemory_globalsetting',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fullFinalWarningThreshold = config.fullFinalWarningThreshold;
    this._fullFirstWarningThreshold = config.fullFirstWarningThreshold;
    this._fullSecondWarningThreshold = config.fullSecondWarningThreshold;
    this._hourlyUpload = config.hourlyUpload;
    this._id = config.id;
    this._maxSize = config.maxSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // full_final_warning_threshold - computed: true, optional: true, required: false
  private _fullFinalWarningThreshold?: number; 
  public get fullFinalWarningThreshold() {
    return this.getNumberAttribute('full_final_warning_threshold');
  }
  public set fullFinalWarningThreshold(value: number) {
    this._fullFinalWarningThreshold = value;
  }
  public resetFullFinalWarningThreshold() {
    this._fullFinalWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullFinalWarningThresholdInput() {
    return this._fullFinalWarningThreshold;
  }

  // full_first_warning_threshold - computed: true, optional: true, required: false
  private _fullFirstWarningThreshold?: number; 
  public get fullFirstWarningThreshold() {
    return this.getNumberAttribute('full_first_warning_threshold');
  }
  public set fullFirstWarningThreshold(value: number) {
    this._fullFirstWarningThreshold = value;
  }
  public resetFullFirstWarningThreshold() {
    this._fullFirstWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullFirstWarningThresholdInput() {
    return this._fullFirstWarningThreshold;
  }

  // full_second_warning_threshold - computed: true, optional: true, required: false
  private _fullSecondWarningThreshold?: number; 
  public get fullSecondWarningThreshold() {
    return this.getNumberAttribute('full_second_warning_threshold');
  }
  public set fullSecondWarningThreshold(value: number) {
    this._fullSecondWarningThreshold = value;
  }
  public resetFullSecondWarningThreshold() {
    this._fullSecondWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullSecondWarningThresholdInput() {
    return this._fullSecondWarningThreshold;
  }

  // hourly_upload - computed: true, optional: true, required: false
  private _hourlyUpload?: string; 
  public get hourlyUpload() {
    return this.getStringAttribute('hourly_upload');
  }
  public set hourlyUpload(value: string) {
    this._hourlyUpload = value;
  }
  public resetHourlyUpload() {
    this._hourlyUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyUploadInput() {
    return this._hourlyUpload;
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

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      full_final_warning_threshold: cdktf.numberToTerraform(this._fullFinalWarningThreshold),
      full_first_warning_threshold: cdktf.numberToTerraform(this._fullFirstWarningThreshold),
      full_second_warning_threshold: cdktf.numberToTerraform(this._fullSecondWarningThreshold),
      hourly_upload: cdktf.stringToTerraform(this._hourlyUpload),
      id: cdktf.stringToTerraform(this._id),
      max_size: cdktf.numberToTerraform(this._maxSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      full_final_warning_threshold: {
        value: cdktf.numberToHclTerraform(this._fullFinalWarningThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      full_first_warning_threshold: {
        value: cdktf.numberToHclTerraform(this._fullFirstWarningThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      full_second_warning_threshold: {
        value: cdktf.numberToHclTerraform(this._fullSecondWarningThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hourly_upload: {
        value: cdktf.stringToHclTerraform(this._hourlyUpload),
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
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
