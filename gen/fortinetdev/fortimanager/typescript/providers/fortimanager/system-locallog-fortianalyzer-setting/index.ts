// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_fortianalyzer_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLocallogFortianalyzerSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_fortianalyzer_setting#id SystemLocallogFortianalyzerSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_fortianalyzer_setting#peer_cert_cn SystemLocallogFortianalyzerSetting#peer_cert_cn}
  */
  readonly peerCertCn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_fortianalyzer_setting#reliable SystemLocallogFortianalyzerSetting#reliable}
  */
  readonly reliable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_fortianalyzer_setting#secure_connection SystemLocallogFortianalyzerSetting#secure_connection}
  */
  readonly secureConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_fortianalyzer_setting#server SystemLocallogFortianalyzerSetting#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_fortianalyzer_setting#severity SystemLocallogFortianalyzerSetting#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_fortianalyzer_setting#status SystemLocallogFortianalyzerSetting#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_fortianalyzer_setting#upload_time SystemLocallogFortianalyzerSetting#upload_time}
  */
  readonly uploadTime?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_fortianalyzer_setting fortimanager_system_locallog_fortianalyzer_setting}
*/
export class SystemLocallogFortianalyzerSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_locallog_fortianalyzer_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLocallogFortianalyzerSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLocallogFortianalyzerSetting to import
  * @param importFromId The id of the existing SystemLocallogFortianalyzerSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_fortianalyzer_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLocallogFortianalyzerSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_locallog_fortianalyzer_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_locallog_fortianalyzer_setting fortimanager_system_locallog_fortianalyzer_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLocallogFortianalyzerSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLocallogFortianalyzerSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_locallog_fortianalyzer_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._peerCertCn = config.peerCertCn;
    this._reliable = config.reliable;
    this._secureConnection = config.secureConnection;
    this._server = config.server;
    this._severity = config.severity;
    this._status = config.status;
    this._uploadTime = config.uploadTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // peer_cert_cn - computed: false, optional: true, required: false
  private _peerCertCn?: string; 
  public get peerCertCn() {
    return this.getStringAttribute('peer_cert_cn');
  }
  public set peerCertCn(value: string) {
    this._peerCertCn = value;
  }
  public resetPeerCertCn() {
    this._peerCertCn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCertCnInput() {
    return this._peerCertCn;
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

  // secure_connection - computed: true, optional: true, required: false
  private _secureConnection?: string; 
  public get secureConnection() {
    return this.getStringAttribute('secure_connection');
  }
  public set secureConnection(value: string) {
    this._secureConnection = value;
  }
  public resetSecureConnection() {
    this._secureConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureConnectionInput() {
    return this._secureConnection;
  }

  // server - computed: false, optional: true, required: false
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

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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

  // upload_time - computed: true, optional: true, required: false
  private _uploadTime?: string[]; 
  public get uploadTime() {
    return cdktf.Fn.tolist(this.getListAttribute('upload_time'));
  }
  public set uploadTime(value: string[]) {
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
      id: cdktf.stringToTerraform(this._id),
      peer_cert_cn: cdktf.stringToTerraform(this._peerCertCn),
      reliable: cdktf.stringToTerraform(this._reliable),
      secure_connection: cdktf.stringToTerraform(this._secureConnection),
      server: cdktf.stringToTerraform(this._server),
      severity: cdktf.stringToTerraform(this._severity),
      status: cdktf.stringToTerraform(this._status),
      upload_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uploadTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_cert_cn: {
        value: cdktf.stringToHclTerraform(this._peerCertCn),
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
      secure_connection: {
        value: cdktf.stringToHclTerraform(this._secureConnection),
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
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
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
      upload_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uploadTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
