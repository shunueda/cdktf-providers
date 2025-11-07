// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_log_pcapfile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLogPcapfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_log_pcapfile#download_mode SystemLogPcapfile#download_mode}
  */
  readonly downloadMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_log_pcapfile#id SystemLogPcapfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_log_pcapfile fortianalyzer_system_log_pcapfile}
*/
export class SystemLogPcapfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_log_pcapfile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLogPcapfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLogPcapfile to import
  * @param importFromId The id of the existing SystemLogPcapfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_log_pcapfile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLogPcapfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_log_pcapfile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_log_pcapfile fortianalyzer_system_log_pcapfile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLogPcapfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLogPcapfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_log_pcapfile',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._downloadMode = config.downloadMode;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // download_mode - computed: true, optional: true, required: false
  private _downloadMode?: string; 
  public get downloadMode() {
    return this.getStringAttribute('download_mode');
  }
  public set downloadMode(value: string) {
    this._downloadMode = value;
  }
  public resetDownloadMode() {
    this._downloadMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadModeInput() {
    return this._downloadMode;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      download_mode: cdktf.stringToTerraform(this._downloadMode),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      download_mode: {
        value: cdktf.stringToHclTerraform(this._downloadMode),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
