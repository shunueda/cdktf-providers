// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortiguard_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogfortiguardSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortiguard_setting#enc_algorithm LogfortiguardSetting#enc_algorithm}
  */
  readonly encAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortiguard_setting#id LogfortiguardSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortiguard_setting#status LogfortiguardSetting#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortiguard_setting#upload_day LogfortiguardSetting#upload_day}
  */
  readonly uploadDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortiguard_setting#upload_interval LogfortiguardSetting#upload_interval}
  */
  readonly uploadInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortiguard_setting#upload_time LogfortiguardSetting#upload_time}
  */
  readonly uploadTime?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortiguard_setting fortiswitch_logfortiguard_setting}
*/
export class LogfortiguardSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_logfortiguard_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogfortiguardSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogfortiguardSetting to import
  * @param importFromId The id of the existing LogfortiguardSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortiguard_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogfortiguardSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_logfortiguard_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortiguard_setting fortiswitch_logfortiguard_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogfortiguardSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogfortiguardSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_logfortiguard_setting',
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
    this._encAlgorithm = config.encAlgorithm;
    this._id = config.id;
    this._status = config.status;
    this._uploadDay = config.uploadDay;
    this._uploadInterval = config.uploadInterval;
    this._uploadTime = config.uploadTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enc_algorithm - computed: true, optional: true, required: false
  private _encAlgorithm?: string; 
  public get encAlgorithm() {
    return this.getStringAttribute('enc_algorithm');
  }
  public set encAlgorithm(value: string) {
    this._encAlgorithm = value;
  }
  public resetEncAlgorithm() {
    this._encAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgorithmInput() {
    return this._encAlgorithm;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // upload_day - computed: true, optional: true, required: false
  private _uploadDay?: string; 
  public get uploadDay() {
    return this.getStringAttribute('upload_day');
  }
  public set uploadDay(value: string) {
    this._uploadDay = value;
  }
  public resetUploadDay() {
    this._uploadDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadDayInput() {
    return this._uploadDay;
  }

  // upload_interval - computed: true, optional: true, required: false
  private _uploadInterval?: string; 
  public get uploadInterval() {
    return this.getStringAttribute('upload_interval');
  }
  public set uploadInterval(value: string) {
    this._uploadInterval = value;
  }
  public resetUploadInterval() {
    this._uploadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadIntervalInput() {
    return this._uploadInterval;
  }

  // upload_time - computed: true, optional: true, required: false
  private _uploadTime?: string; 
  public get uploadTime() {
    return this.getStringAttribute('upload_time');
  }
  public set uploadTime(value: string) {
    this._uploadTime = value;
  }
  public resetUploadTime() {
    this._uploadTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadTimeInput() {
    return this._uploadTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enc_algorithm: cdktf.stringToTerraform(this._encAlgorithm),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.stringToTerraform(this._status),
      upload_day: cdktf.stringToTerraform(this._uploadDay),
      upload_interval: cdktf.stringToTerraform(this._uploadInterval),
      upload_time: cdktf.stringToTerraform(this._uploadTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enc_algorithm: {
        value: cdktf.stringToHclTerraform(this._encAlgorithm),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_day: {
        value: cdktf.stringToHclTerraform(this._uploadDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_interval: {
        value: cdktf.stringToHclTerraform(this._uploadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_time: {
        value: cdktf.stringToHclTerraform(this._uploadTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
