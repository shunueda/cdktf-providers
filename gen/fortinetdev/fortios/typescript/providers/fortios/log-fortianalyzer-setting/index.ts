// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_fortianalyzer_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogFortianalyzerSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_fortianalyzer_setting#enc_algorithm LogFortianalyzerSetting#enc_algorithm}
  */
  readonly encAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_fortianalyzer_setting#hmac_algorithm LogFortianalyzerSetting#hmac_algorithm}
  */
  readonly hmacAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_fortianalyzer_setting#id LogFortianalyzerSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_fortianalyzer_setting#reliable LogFortianalyzerSetting#reliable}
  */
  readonly reliable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_fortianalyzer_setting#server LogFortianalyzerSetting#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_fortianalyzer_setting#source_ip LogFortianalyzerSetting#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_fortianalyzer_setting#status LogFortianalyzerSetting#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_fortianalyzer_setting#upload_option LogFortianalyzerSetting#upload_option}
  */
  readonly uploadOption?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_fortianalyzer_setting fortios_log_fortianalyzer_setting}
*/
export class LogFortianalyzerSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_log_fortianalyzer_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogFortianalyzerSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogFortianalyzerSetting to import
  * @param importFromId The id of the existing LogFortianalyzerSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_fortianalyzer_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogFortianalyzerSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_log_fortianalyzer_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_fortianalyzer_setting fortios_log_fortianalyzer_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogFortianalyzerSettingConfig
  */
  public constructor(scope: Construct, id: string, config: LogFortianalyzerSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_log_fortianalyzer_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._hmacAlgorithm = config.hmacAlgorithm;
    this._id = config.id;
    this._reliable = config.reliable;
    this._server = config.server;
    this._sourceIp = config.sourceIp;
    this._status = config.status;
    this._uploadOption = config.uploadOption;
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

  // hmac_algorithm - computed: true, optional: true, required: false
  private _hmacAlgorithm?: string; 
  public get hmacAlgorithm() {
    return this.getStringAttribute('hmac_algorithm');
  }
  public set hmacAlgorithm(value: string) {
    this._hmacAlgorithm = value;
  }
  public resetHmacAlgorithm() {
    this._hmacAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacAlgorithmInput() {
    return this._hmacAlgorithm;
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

  // reliable - computed: true, optional: true, required: false
  private _reliable?: string; 
  public get reliable() {
    return this.getStringAttribute('reliable');
  }
  public set reliable(value: string) {
    this._reliable = value;
  }
  public resetReliable() {
    this._reliable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reliableInput() {
    return this._reliable;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // upload_option - computed: true, optional: true, required: false
  private _uploadOption?: string; 
  public get uploadOption() {
    return this.getStringAttribute('upload_option');
  }
  public set uploadOption(value: string) {
    this._uploadOption = value;
  }
  public resetUploadOption() {
    this._uploadOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadOptionInput() {
    return this._uploadOption;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enc_algorithm: cdktf.stringToTerraform(this._encAlgorithm),
      hmac_algorithm: cdktf.stringToTerraform(this._hmacAlgorithm),
      id: cdktf.stringToTerraform(this._id),
      reliable: cdktf.stringToTerraform(this._reliable),
      server: cdktf.stringToTerraform(this._server),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      status: cdktf.stringToTerraform(this._status),
      upload_option: cdktf.stringToTerraform(this._uploadOption),
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
      hmac_algorithm: {
        value: cdktf.stringToHclTerraform(this._hmacAlgorithm),
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
      reliable: {
        value: cdktf.stringToHclTerraform(this._reliable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
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
      upload_option: {
        value: cdktf.stringToHclTerraform(this._uploadOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
