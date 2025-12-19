// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_ssl_cert_local
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileSslCertLocalConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'create': create; 'import': import; 'export': export; 'replace': replace;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_ssl_cert_local#action FileSslCertLocal#action}
  */
  readonly action?: string;
  /**
  * 'pem': pem; 'der': der; 'pfx': pfx; 'p7b': p7b;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_ssl_cert_local#certificate_type FileSslCertLocal#certificate_type}
  */
  readonly certificateType?: string;
  /**
  * destination file name for copy and rename action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_ssl_cert_local#dst_file FileSslCertLocal#dst_file}
  */
  readonly dstFile?: string;
  /**
  * ssl certificate local file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_ssl_cert_local#file FileSslCertLocal#file}
  */
  readonly file?: string;
  /**
  * full path of the uploaded file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_ssl_cert_local#file_handle FileSslCertLocal#file_handle}
  */
  readonly fileHandle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_ssl_cert_local#id FileSslCertLocal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The password for certificate file (pfx type only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_ssl_cert_local#pfx_password FileSslCertLocal#pfx_password}
  */
  readonly pfxPassword?: string;
  /**
  * The password for exported certificate file (pfx type only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_ssl_cert_local#pfx_password_export FileSslCertLocal#pfx_password_export}
  */
  readonly pfxPasswordExport?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_ssl_cert_local#uuid FileSslCertLocal#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_ssl_cert_local thunder_file_ssl_cert_local}
*/
export class FileSslCertLocal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_file_ssl_cert_local";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileSslCertLocal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileSslCertLocal to import
  * @param importFromId The id of the existing FileSslCertLocal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_ssl_cert_local#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileSslCertLocal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_file_ssl_cert_local", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_ssl_cert_local thunder_file_ssl_cert_local} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileSslCertLocalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FileSslCertLocalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_file_ssl_cert_local',
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
    this._action = config.action;
    this._certificateType = config.certificateType;
    this._dstFile = config.dstFile;
    this._file = config.file;
    this._fileHandle = config.fileHandle;
    this._id = config.id;
    this._pfxPassword = config.pfxPassword;
    this._pfxPasswordExport = config.pfxPasswordExport;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // certificate_type - computed: false, optional: true, required: false
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  public resetCertificateType() {
    this._certificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
  }

  // dst_file - computed: false, optional: true, required: false
  private _dstFile?: string; 
  public get dstFile() {
    return this.getStringAttribute('dst_file');
  }
  public set dstFile(value: string) {
    this._dstFile = value;
  }
  public resetDstFile() {
    this._dstFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFileInput() {
    return this._dstFile;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // file_handle - computed: false, optional: true, required: false
  private _fileHandle?: string; 
  public get fileHandle() {
    return this.getStringAttribute('file_handle');
  }
  public set fileHandle(value: string) {
    this._fileHandle = value;
  }
  public resetFileHandle() {
    this._fileHandle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileHandleInput() {
    return this._fileHandle;
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

  // pfx_password - computed: false, optional: true, required: false
  private _pfxPassword?: string; 
  public get pfxPassword() {
    return this.getStringAttribute('pfx_password');
  }
  public set pfxPassword(value: string) {
    this._pfxPassword = value;
  }
  public resetPfxPassword() {
    this._pfxPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxPasswordInput() {
    return this._pfxPassword;
  }

  // pfx_password_export - computed: false, optional: true, required: false
  private _pfxPasswordExport?: string; 
  public get pfxPasswordExport() {
    return this.getStringAttribute('pfx_password_export');
  }
  public set pfxPasswordExport(value: string) {
    this._pfxPasswordExport = value;
  }
  public resetPfxPasswordExport() {
    this._pfxPasswordExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxPasswordExportInput() {
    return this._pfxPasswordExport;
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
      action: cdktf.stringToTerraform(this._action),
      certificate_type: cdktf.stringToTerraform(this._certificateType),
      dst_file: cdktf.stringToTerraform(this._dstFile),
      file: cdktf.stringToTerraform(this._file),
      file_handle: cdktf.stringToTerraform(this._fileHandle),
      id: cdktf.stringToTerraform(this._id),
      pfx_password: cdktf.stringToTerraform(this._pfxPassword),
      pfx_password_export: cdktf.stringToTerraform(this._pfxPasswordExport),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_type: {
        value: cdktf.stringToHclTerraform(this._certificateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_file: {
        value: cdktf.stringToHclTerraform(this._dstFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_handle: {
        value: cdktf.stringToHclTerraform(this._fileHandle),
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
      pfx_password: {
        value: cdktf.stringToHclTerraform(this._pfxPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pfx_password_export: {
        value: cdktf.stringToHclTerraform(this._pfxPasswordExport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
