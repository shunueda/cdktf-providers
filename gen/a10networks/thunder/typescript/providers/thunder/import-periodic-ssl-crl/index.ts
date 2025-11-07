// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/import_periodic_ssl_crl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportPeriodicSslCrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/import_periodic_ssl_crl#id ImportPeriodicSslCrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the period in second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/import_periodic_ssl_crl#period ImportPeriodicSslCrl#period}
  */
  readonly period?: number;
  /**
  * profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/import_periodic_ssl_crl#remote_file ImportPeriodicSslCrl#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * SSL Crl File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/import_periodic_ssl_crl#ssl_crl ImportPeriodicSslCrl#ssl_crl}
  */
  readonly sslCrl: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/import_periodic_ssl_crl#use_mgmt_port ImportPeriodicSslCrl#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/import_periodic_ssl_crl#uuid ImportPeriodicSslCrl#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/import_periodic_ssl_crl thunder_import_periodic_ssl_crl}
*/
export class ImportPeriodicSslCrl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_import_periodic_ssl_crl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportPeriodicSslCrl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportPeriodicSslCrl to import
  * @param importFromId The id of the existing ImportPeriodicSslCrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/import_periodic_ssl_crl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportPeriodicSslCrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_import_periodic_ssl_crl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/import_periodic_ssl_crl thunder_import_periodic_ssl_crl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportPeriodicSslCrlConfig
  */
  public constructor(scope: Construct, id: string, config: ImportPeriodicSslCrlConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_import_periodic_ssl_crl',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._period = config.period;
    this._remoteFile = config.remoteFile;
    this._sslCrl = config.sslCrl;
    this._useMgmtPort = config.useMgmtPort;
    this._uuid = config.uuid;
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // remote_file - computed: false, optional: true, required: false
  private _remoteFile?: string; 
  public get remoteFile() {
    return this.getStringAttribute('remote_file');
  }
  public set remoteFile(value: string) {
    this._remoteFile = value;
  }
  public resetRemoteFile() {
    this._remoteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileInput() {
    return this._remoteFile;
  }

  // ssl_crl - computed: false, optional: false, required: true
  private _sslCrl?: string; 
  public get sslCrl() {
    return this.getStringAttribute('ssl_crl');
  }
  public set sslCrl(value: string) {
    this._sslCrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCrlInput() {
    return this._sslCrl;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
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
      id: cdktf.stringToTerraform(this._id),
      period: cdktf.numberToTerraform(this._period),
      remote_file: cdktf.stringToTerraform(this._remoteFile),
      ssl_crl: cdktf.stringToTerraform(this._sslCrl),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_file: {
        value: cdktf.stringToHclTerraform(this._remoteFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_crl: {
        value: cdktf.stringToHclTerraform(this._sslCrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
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
