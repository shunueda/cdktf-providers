// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_timeout_value
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemTimeoutValueAConfig extends cdktf.TerraformMetaArguments {
  /**
  * set timeout to stop ftp transfer in seconds, 0 is no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_timeout_value#ftp SystemTimeoutValueA#ftp}
  */
  readonly ftp?: number;
  /**
  * set timeout to stop http transfer in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_timeout_value#http SystemTimeoutValueA#http}
  */
  readonly http?: number;
  /**
  * set timeout to stop https transfer in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_timeout_value#https SystemTimeoutValueA#https}
  */
  readonly https?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_timeout_value#id SystemTimeoutValueA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * set timeout to stop scp transfer in seconds, 0 is no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_timeout_value#scp SystemTimeoutValueA#scp}
  */
  readonly scp?: number;
  /**
  * set timeout to stop sftp transfer in seconds, 0 is no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_timeout_value#sftp SystemTimeoutValueA#sftp}
  */
  readonly sftp?: number;
  /**
  * set timeout to stop tftp transfer in seconds, 0 is no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_timeout_value#tftp SystemTimeoutValueA#tftp}
  */
  readonly tftp?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_timeout_value#uuid SystemTimeoutValueA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_timeout_value thunder_system_timeout_value}
*/
export class SystemTimeoutValueA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_timeout_value";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemTimeoutValueA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemTimeoutValueA to import
  * @param importFromId The id of the existing SystemTimeoutValueA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_timeout_value#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemTimeoutValueA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_timeout_value", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_timeout_value thunder_system_timeout_value} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemTimeoutValueAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemTimeoutValueAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_timeout_value',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ftp = config.ftp;
    this._http = config.http;
    this._https = config.https;
    this._id = config.id;
    this._scp = config.scp;
    this._sftp = config.sftp;
    this._tftp = config.tftp;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ftp - computed: false, optional: true, required: false
  private _ftp?: number; 
  public get ftp() {
    return this.getNumberAttribute('ftp');
  }
  public set ftp(value: number) {
    this._ftp = value;
  }
  public resetFtp() {
    this._ftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp;
  }

  // http - computed: false, optional: true, required: false
  private _http?: number; 
  public get http() {
    return this.getNumberAttribute('http');
  }
  public set http(value: number) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // https - computed: false, optional: true, required: false
  private _https?: number; 
  public get https() {
    return this.getNumberAttribute('https');
  }
  public set https(value: number) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
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

  // scp - computed: false, optional: true, required: false
  private _scp?: number; 
  public get scp() {
    return this.getNumberAttribute('scp');
  }
  public set scp(value: number) {
    this._scp = value;
  }
  public resetScp() {
    this._scp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scpInput() {
    return this._scp;
  }

  // sftp - computed: false, optional: true, required: false
  private _sftp?: number; 
  public get sftp() {
    return this.getNumberAttribute('sftp');
  }
  public set sftp(value: number) {
    this._sftp = value;
  }
  public resetSftp() {
    this._sftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpInput() {
    return this._sftp;
  }

  // tftp - computed: false, optional: true, required: false
  private _tftp?: number; 
  public get tftp() {
    return this.getNumberAttribute('tftp');
  }
  public set tftp(value: number) {
    this._tftp = value;
  }
  public resetTftp() {
    this._tftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpInput() {
    return this._tftp;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ftp: cdktf.numberToTerraform(this._ftp),
      http: cdktf.numberToTerraform(this._http),
      https: cdktf.numberToTerraform(this._https),
      id: cdktf.stringToTerraform(this._id),
      scp: cdktf.numberToTerraform(this._scp),
      sftp: cdktf.numberToTerraform(this._sftp),
      tftp: cdktf.numberToTerraform(this._tftp),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ftp: {
        value: cdktf.numberToHclTerraform(this._ftp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http: {
        value: cdktf.numberToHclTerraform(this._http),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https: {
        value: cdktf.numberToHclTerraform(this._https),
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
      scp: {
        value: cdktf.numberToHclTerraform(this._scp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sftp: {
        value: cdktf.numberToHclTerraform(this._sftp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tftp: {
        value: cdktf.numberToHclTerraform(this._tftp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
