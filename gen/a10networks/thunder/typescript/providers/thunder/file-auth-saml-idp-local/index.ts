// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_auth_saml_idp_local
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileAuthSamlIdpLocalConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'create': create; 'import': import; 'export': export; 'copy': copy; 'rename': rename; 'check': check; 'replace': replace; 'delete': delete;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_auth_saml_idp_local#action FileAuthSamlIdpLocal#action}
  */
  readonly action?: string;
  /**
  * Destination file name for copy and rename action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_auth_saml_idp_local#dst_file FileAuthSamlIdpLocal#dst_file}
  */
  readonly dstFile?: string;
  /**
  * SAML metadata local file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_auth_saml_idp_local#file FileAuthSamlIdpLocal#file}
  */
  readonly file?: string;
  /**
  * Full path of the uploaded file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_auth_saml_idp_local#file_handle FileAuthSamlIdpLocal#file_handle}
  */
  readonly fileHandle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_auth_saml_idp_local#id FileAuthSamlIdpLocal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_auth_saml_idp_local#uuid FileAuthSamlIdpLocal#uuid}
  */
  readonly uuid?: string;
  /**
  * Verify metadata's XML signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_auth_saml_idp_local#verify_xml_signature FileAuthSamlIdpLocal#verify_xml_signature}
  */
  readonly verifyXmlSignature?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_auth_saml_idp_local thunder_file_auth_saml_idp_local}
*/
export class FileAuthSamlIdpLocal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_file_auth_saml_idp_local";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileAuthSamlIdpLocal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileAuthSamlIdpLocal to import
  * @param importFromId The id of the existing FileAuthSamlIdpLocal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_auth_saml_idp_local#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileAuthSamlIdpLocal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_file_auth_saml_idp_local", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_auth_saml_idp_local thunder_file_auth_saml_idp_local} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileAuthSamlIdpLocalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FileAuthSamlIdpLocalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_file_auth_saml_idp_local',
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
    this._dstFile = config.dstFile;
    this._file = config.file;
    this._fileHandle = config.fileHandle;
    this._id = config.id;
    this._uuid = config.uuid;
    this._verifyXmlSignature = config.verifyXmlSignature;
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

  // verify_xml_signature - computed: false, optional: true, required: false
  private _verifyXmlSignature?: number; 
  public get verifyXmlSignature() {
    return this.getNumberAttribute('verify_xml_signature');
  }
  public set verifyXmlSignature(value: number) {
    this._verifyXmlSignature = value;
  }
  public resetVerifyXmlSignature() {
    this._verifyXmlSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyXmlSignatureInput() {
    return this._verifyXmlSignature;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      dst_file: cdktf.stringToTerraform(this._dstFile),
      file: cdktf.stringToTerraform(this._file),
      file_handle: cdktf.stringToTerraform(this._fileHandle),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      verify_xml_signature: cdktf.numberToTerraform(this._verifyXmlSignature),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_xml_signature: {
        value: cdktf.numberToHclTerraform(this._verifyXmlSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
