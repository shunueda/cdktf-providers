// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebServiceSecureCertificateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * File URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure_certificate#file_url WebServiceSecureCertificateA#file_url}
  */
  readonly fileUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure_certificate#id WebServiceSecureCertificateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Load WEB certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure_certificate#load WebServiceSecureCertificateA#load}
  */
  readonly load?: number;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure_certificate#use_mgmt_port WebServiceSecureCertificateA#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure_certificate thunder_web_service_secure_certificate}
*/
export class WebServiceSecureCertificateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_service_secure_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebServiceSecureCertificateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebServiceSecureCertificateA to import
  * @param importFromId The id of the existing WebServiceSecureCertificateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebServiceSecureCertificateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_service_secure_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure_certificate thunder_web_service_secure_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebServiceSecureCertificateAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WebServiceSecureCertificateAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_service_secure_certificate',
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
    this._fileUrl = config.fileUrl;
    this._id = config.id;
    this._load = config.load;
    this._useMgmtPort = config.useMgmtPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_url - computed: false, optional: true, required: false
  private _fileUrl?: string; 
  public get fileUrl() {
    return this.getStringAttribute('file_url');
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
  public resetFileUrl() {
    this._fileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrlInput() {
    return this._fileUrl;
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

  // load - computed: false, optional: true, required: false
  private _load?: number; 
  public get load() {
    return this.getNumberAttribute('load');
  }
  public set load(value: number) {
    this._load = value;
  }
  public resetLoad() {
    this._load = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_url: cdktf.stringToTerraform(this._fileUrl),
      id: cdktf.stringToTerraform(this._id),
      load: cdktf.numberToTerraform(this._load),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_url: {
        value: cdktf.stringToHclTerraform(this._fileUrl),
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
      load: {
        value: cdktf.numberToHclTerraform(this._load),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
