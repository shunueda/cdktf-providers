// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_auth_saml_idp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportAuthSamlIdpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_auth_saml_idp#id ImportAuthSamlIdpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Overwrite existing file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_auth_saml_idp#overwrite ImportAuthSamlIdpA#overwrite}
  */
  readonly overwrite?: number;
  /**
  * password for the remote site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_auth_saml_idp#password ImportAuthSamlIdpA#password}
  */
  readonly password?: string;
  /**
  * Specific a proxy (format=HOST:PORT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_auth_saml_idp#proxy ImportAuthSamlIdpA#proxy}
  */
  readonly proxy?: string;
  /**
  * Profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_auth_saml_idp#remote_file ImportAuthSamlIdpA#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * Metadata name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_auth_saml_idp#saml_idp_name ImportAuthSamlIdpA#saml_idp_name}
  */
  readonly samlIdpName?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_auth_saml_idp#use_mgmt_port ImportAuthSamlIdpA#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * Verify metadata's XML signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_auth_saml_idp#verify_xml_signature ImportAuthSamlIdpA#verify_xml_signature}
  */
  readonly verifyXmlSignature?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_auth_saml_idp thunder_import_auth_saml_idp}
*/
export class ImportAuthSamlIdpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_import_auth_saml_idp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportAuthSamlIdpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportAuthSamlIdpA to import
  * @param importFromId The id of the existing ImportAuthSamlIdpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_auth_saml_idp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportAuthSamlIdpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_import_auth_saml_idp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import_auth_saml_idp thunder_import_auth_saml_idp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportAuthSamlIdpAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ImportAuthSamlIdpAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_import_auth_saml_idp',
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
    this._id = config.id;
    this._overwrite = config.overwrite;
    this._password = config.password;
    this._proxy = config.proxy;
    this._remoteFile = config.remoteFile;
    this._samlIdpName = config.samlIdpName;
    this._useMgmtPort = config.useMgmtPort;
    this._verifyXmlSignature = config.verifyXmlSignature;
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: number; 
  public get overwrite() {
    return this.getNumberAttribute('overwrite');
  }
  public set overwrite(value: number) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
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

  // saml_idp_name - computed: false, optional: true, required: false
  private _samlIdpName?: string; 
  public get samlIdpName() {
    return this.getStringAttribute('saml_idp_name');
  }
  public set samlIdpName(value: string) {
    this._samlIdpName = value;
  }
  public resetSamlIdpName() {
    this._samlIdpName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpNameInput() {
    return this._samlIdpName;
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
      id: cdktf.stringToTerraform(this._id),
      overwrite: cdktf.numberToTerraform(this._overwrite),
      password: cdktf.stringToTerraform(this._password),
      proxy: cdktf.stringToTerraform(this._proxy),
      remote_file: cdktf.stringToTerraform(this._remoteFile),
      saml_idp_name: cdktf.stringToTerraform(this._samlIdpName),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      verify_xml_signature: cdktf.numberToTerraform(this._verifyXmlSignature),
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
      overwrite: {
        value: cdktf.numberToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_file: {
        value: cdktf.stringToHclTerraform(this._remoteFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_idp_name: {
        value: cdktf.stringToHclTerraform(this._samlIdpName),
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
