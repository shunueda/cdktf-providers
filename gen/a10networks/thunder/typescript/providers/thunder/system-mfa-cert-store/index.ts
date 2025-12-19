// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mfa_cert_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemMfaCertStoreAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure certificate store host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mfa_cert_store#cert_host SystemMfaCertStoreA#cert_host}
  */
  readonly certHost?: string;
  /**
  * Configure certificate store path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mfa_cert_store#cert_store_path SystemMfaCertStoreA#cert_store_path}
  */
  readonly certStorePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mfa_cert_store#id SystemMfaCertStoreA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Certificate store host password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mfa_cert_store#passwd_string SystemMfaCertStoreA#passwd_string}
  */
  readonly passwdString?: string;
  /**
  * 'tftp': Use tftp for connection; 'ftp': Use ftp for connection; 'scp': Use scp for connection; 'http': Use http for connection; 'https': Use https for connection; 'sftp': Use sftp for connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mfa_cert_store#protocol SystemMfaCertStoreA#protocol}
  */
  readonly protocol?: string;
  /**
  * Certificate store host username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mfa_cert_store#username SystemMfaCertStoreA#username}
  */
  readonly username?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mfa_cert_store#uuid SystemMfaCertStoreA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mfa_cert_store thunder_system_mfa_cert_store}
*/
export class SystemMfaCertStoreA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_mfa_cert_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemMfaCertStoreA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemMfaCertStoreA to import
  * @param importFromId The id of the existing SystemMfaCertStoreA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mfa_cert_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemMfaCertStoreA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_mfa_cert_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mfa_cert_store thunder_system_mfa_cert_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemMfaCertStoreAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemMfaCertStoreAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_mfa_cert_store',
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
    this._certHost = config.certHost;
    this._certStorePath = config.certStorePath;
    this._id = config.id;
    this._passwdString = config.passwdString;
    this._protocol = config.protocol;
    this._username = config.username;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_host - computed: false, optional: true, required: false
  private _certHost?: string; 
  public get certHost() {
    return this.getStringAttribute('cert_host');
  }
  public set certHost(value: string) {
    this._certHost = value;
  }
  public resetCertHost() {
    this._certHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certHostInput() {
    return this._certHost;
  }

  // cert_store_path - computed: false, optional: true, required: false
  private _certStorePath?: string; 
  public get certStorePath() {
    return this.getStringAttribute('cert_store_path');
  }
  public set certStorePath(value: string) {
    this._certStorePath = value;
  }
  public resetCertStorePath() {
    this._certStorePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certStorePathInput() {
    return this._certStorePath;
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

  // passwd_string - computed: false, optional: true, required: false
  private _passwdString?: string; 
  public get passwdString() {
    return this.getStringAttribute('passwd_string');
  }
  public set passwdString(value: string) {
    this._passwdString = value;
  }
  public resetPasswdString() {
    this._passwdString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdStringInput() {
    return this._passwdString;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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
      cert_host: cdktf.stringToTerraform(this._certHost),
      cert_store_path: cdktf.stringToTerraform(this._certStorePath),
      id: cdktf.stringToTerraform(this._id),
      passwd_string: cdktf.stringToTerraform(this._passwdString),
      protocol: cdktf.stringToTerraform(this._protocol),
      username: cdktf.stringToTerraform(this._username),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_host: {
        value: cdktf.stringToHclTerraform(this._certHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_store_path: {
        value: cdktf.stringToHclTerraform(this._certStorePath),
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
      passwd_string: {
        value: cdktf.stringToHclTerraform(this._passwdString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
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
