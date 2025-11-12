// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Logfortianalyzer3SettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#__change_ip Logfortianalyzer3Setting#__change_ip}
  */
  readonly changeIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#address_mode Logfortianalyzer3Setting#address_mode}
  */
  readonly addressMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#buffer_max_send Logfortianalyzer3Setting#buffer_max_send}
  */
  readonly bufferMaxSend?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#conn_timeout Logfortianalyzer3Setting#conn_timeout}
  */
  readonly connTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#enc_algorithm Logfortianalyzer3Setting#enc_algorithm}
  */
  readonly encAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#encrypt Logfortianalyzer3Setting#encrypt}
  */
  readonly encrypt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#fdp_device Logfortianalyzer3Setting#fdp_device}
  */
  readonly fdpDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#fdp_interface Logfortianalyzer3Setting#fdp_interface}
  */
  readonly fdpInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#hmac_algorithm Logfortianalyzer3Setting#hmac_algorithm}
  */
  readonly hmacAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#id Logfortianalyzer3Setting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#ips_archive Logfortianalyzer3Setting#ips_archive}
  */
  readonly ipsArchive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#localid Logfortianalyzer3Setting#localid}
  */
  readonly localid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#max_buffer_size Logfortianalyzer3Setting#max_buffer_size}
  */
  readonly maxBufferSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#mgmt_name Logfortianalyzer3Setting#mgmt_name}
  */
  readonly mgmtName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#override Logfortianalyzer3Setting#override}
  */
  readonly override?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#psksecret Logfortianalyzer3Setting#psksecret}
  */
  readonly psksecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#server Logfortianalyzer3Setting#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#source_ip Logfortianalyzer3Setting#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#status Logfortianalyzer3Setting#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#upload_day Logfortianalyzer3Setting#upload_day}
  */
  readonly uploadDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#upload_interval Logfortianalyzer3Setting#upload_interval}
  */
  readonly uploadInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#upload_option Logfortianalyzer3Setting#upload_option}
  */
  readonly uploadOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#upload_time Logfortianalyzer3Setting#upload_time}
  */
  readonly uploadTime?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting fortiswitch_logfortianalyzer3_setting}
*/
export class Logfortianalyzer3Setting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_logfortianalyzer3_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Logfortianalyzer3Setting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Logfortianalyzer3Setting to import
  * @param importFromId The id of the existing Logfortianalyzer3Setting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Logfortianalyzer3Setting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_logfortianalyzer3_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logfortianalyzer3_setting fortiswitch_logfortianalyzer3_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Logfortianalyzer3SettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Logfortianalyzer3SettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_logfortianalyzer3_setting',
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
    this._changeIp = config.changeIp;
    this._addressMode = config.addressMode;
    this._bufferMaxSend = config.bufferMaxSend;
    this._connTimeout = config.connTimeout;
    this._encAlgorithm = config.encAlgorithm;
    this._encrypt = config.encrypt;
    this._fdpDevice = config.fdpDevice;
    this._fdpInterface = config.fdpInterface;
    this._hmacAlgorithm = config.hmacAlgorithm;
    this._id = config.id;
    this._ipsArchive = config.ipsArchive;
    this._localid = config.localid;
    this._maxBufferSize = config.maxBufferSize;
    this._mgmtName = config.mgmtName;
    this._override = config.override;
    this._psksecret = config.psksecret;
    this._server = config.server;
    this._sourceIp = config.sourceIp;
    this._status = config.status;
    this._uploadDay = config.uploadDay;
    this._uploadInterval = config.uploadInterval;
    this._uploadOption = config.uploadOption;
    this._uploadTime = config.uploadTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // __change_ip - computed: true, optional: true, required: false
  private _changeIp?: number; 
  public get changeIp() {
    return this.getNumberAttribute('__change_ip');
  }
  public set changeIp(value: number) {
    this._changeIp = value;
  }
  public resetChangeIp() {
    this._changeIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeIpInput() {
    return this._changeIp;
  }

  // address_mode - computed: true, optional: true, required: false
  private _addressMode?: string; 
  public get addressMode() {
    return this.getStringAttribute('address_mode');
  }
  public set addressMode(value: string) {
    this._addressMode = value;
  }
  public resetAddressMode() {
    this._addressMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressModeInput() {
    return this._addressMode;
  }

  // buffer_max_send - computed: true, optional: true, required: false
  private _bufferMaxSend?: number; 
  public get bufferMaxSend() {
    return this.getNumberAttribute('buffer_max_send');
  }
  public set bufferMaxSend(value: number) {
    this._bufferMaxSend = value;
  }
  public resetBufferMaxSend() {
    this._bufferMaxSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferMaxSendInput() {
    return this._bufferMaxSend;
  }

  // conn_timeout - computed: true, optional: true, required: false
  private _connTimeout?: number; 
  public get connTimeout() {
    return this.getNumberAttribute('conn_timeout');
  }
  public set connTimeout(value: number) {
    this._connTimeout = value;
  }
  public resetConnTimeout() {
    this._connTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTimeoutInput() {
    return this._connTimeout;
  }

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

  // encrypt - computed: true, optional: true, required: false
  private _encrypt?: string; 
  public get encrypt() {
    return this.getStringAttribute('encrypt');
  }
  public set encrypt(value: string) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // fdp_device - computed: true, optional: true, required: false
  private _fdpDevice?: string; 
  public get fdpDevice() {
    return this.getStringAttribute('fdp_device');
  }
  public set fdpDevice(value: string) {
    this._fdpDevice = value;
  }
  public resetFdpDevice() {
    this._fdpDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdpDeviceInput() {
    return this._fdpDevice;
  }

  // fdp_interface - computed: true, optional: true, required: false
  private _fdpInterface?: string; 
  public get fdpInterface() {
    return this.getStringAttribute('fdp_interface');
  }
  public set fdpInterface(value: string) {
    this._fdpInterface = value;
  }
  public resetFdpInterface() {
    this._fdpInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdpInterfaceInput() {
    return this._fdpInterface;
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

  // ips_archive - computed: true, optional: true, required: false
  private _ipsArchive?: string; 
  public get ipsArchive() {
    return this.getStringAttribute('ips_archive');
  }
  public set ipsArchive(value: string) {
    this._ipsArchive = value;
  }
  public resetIpsArchive() {
    this._ipsArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsArchiveInput() {
    return this._ipsArchive;
  }

  // localid - computed: true, optional: true, required: false
  private _localid?: string; 
  public get localid() {
    return this.getStringAttribute('localid');
  }
  public set localid(value: string) {
    this._localid = value;
  }
  public resetLocalid() {
    this._localid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localidInput() {
    return this._localid;
  }

  // max_buffer_size - computed: true, optional: true, required: false
  private _maxBufferSize?: number; 
  public get maxBufferSize() {
    return this.getNumberAttribute('max_buffer_size');
  }
  public set maxBufferSize(value: number) {
    this._maxBufferSize = value;
  }
  public resetMaxBufferSize() {
    this._maxBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBufferSizeInput() {
    return this._maxBufferSize;
  }

  // mgmt_name - computed: true, optional: true, required: false
  private _mgmtName?: string; 
  public get mgmtName() {
    return this.getStringAttribute('mgmt_name');
  }
  public set mgmtName(value: string) {
    this._mgmtName = value;
  }
  public resetMgmtName() {
    this._mgmtName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtNameInput() {
    return this._mgmtName;
  }

  // override - computed: true, optional: true, required: false
  private _override?: string; 
  public get override() {
    return this.getStringAttribute('override');
  }
  public set override(value: string) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // psksecret - computed: false, optional: true, required: false
  private _psksecret?: string; 
  public get psksecret() {
    return this.getStringAttribute('psksecret');
  }
  public set psksecret(value: string) {
    this._psksecret = value;
  }
  public resetPsksecret() {
    this._psksecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psksecretInput() {
    return this._psksecret;
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
      __change_ip: cdktf.numberToTerraform(this._changeIp),
      address_mode: cdktf.stringToTerraform(this._addressMode),
      buffer_max_send: cdktf.numberToTerraform(this._bufferMaxSend),
      conn_timeout: cdktf.numberToTerraform(this._connTimeout),
      enc_algorithm: cdktf.stringToTerraform(this._encAlgorithm),
      encrypt: cdktf.stringToTerraform(this._encrypt),
      fdp_device: cdktf.stringToTerraform(this._fdpDevice),
      fdp_interface: cdktf.stringToTerraform(this._fdpInterface),
      hmac_algorithm: cdktf.stringToTerraform(this._hmacAlgorithm),
      id: cdktf.stringToTerraform(this._id),
      ips_archive: cdktf.stringToTerraform(this._ipsArchive),
      localid: cdktf.stringToTerraform(this._localid),
      max_buffer_size: cdktf.numberToTerraform(this._maxBufferSize),
      mgmt_name: cdktf.stringToTerraform(this._mgmtName),
      override: cdktf.stringToTerraform(this._override),
      psksecret: cdktf.stringToTerraform(this._psksecret),
      server: cdktf.stringToTerraform(this._server),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      status: cdktf.stringToTerraform(this._status),
      upload_day: cdktf.stringToTerraform(this._uploadDay),
      upload_interval: cdktf.stringToTerraform(this._uploadInterval),
      upload_option: cdktf.stringToTerraform(this._uploadOption),
      upload_time: cdktf.stringToTerraform(this._uploadTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      __change_ip: {
        value: cdktf.numberToHclTerraform(this._changeIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      address_mode: {
        value: cdktf.stringToHclTerraform(this._addressMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buffer_max_send: {
        value: cdktf.numberToHclTerraform(this._bufferMaxSend),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_timeout: {
        value: cdktf.numberToHclTerraform(this._connTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enc_algorithm: {
        value: cdktf.stringToHclTerraform(this._encAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt: {
        value: cdktf.stringToHclTerraform(this._encrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fdp_device: {
        value: cdktf.stringToHclTerraform(this._fdpDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fdp_interface: {
        value: cdktf.stringToHclTerraform(this._fdpInterface),
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
      ips_archive: {
        value: cdktf.stringToHclTerraform(this._ipsArchive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      localid: {
        value: cdktf.stringToHclTerraform(this._localid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_buffer_size: {
        value: cdktf.numberToHclTerraform(this._maxBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mgmt_name: {
        value: cdktf.stringToHclTerraform(this._mgmtName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override: {
        value: cdktf.stringToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psksecret: {
        value: cdktf.stringToHclTerraform(this._psksecret),
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
      upload_option: {
        value: cdktf.stringToHclTerraform(this._uploadOption),
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
