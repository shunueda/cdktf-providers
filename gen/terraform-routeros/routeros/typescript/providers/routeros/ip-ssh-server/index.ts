// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_ssh_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpSshServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_ssh_server#___path___ IpSshServer#___path___}
  */
  readonly path?: string;
  /**
  * Whether to allow connection if cryptographic algorithms are set to none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_ssh_server#allow_none_crypto IpSshServer#allow_none_crypto}
  */
  readonly allowNoneCrypto?: boolean | cdktf.IResolvable;
  /**
  * Whether to allow password login at the same time when public key authorization is configured for a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_ssh_server#always_allow_password_login IpSshServer#always_allow_password_login}
  */
  readonly alwaysAllowPasswordLogin?: boolean | cdktf.IResolvable;
  /**
  * Allow to configure SSH ciphers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_ssh_server#ciphers IpSshServer#ciphers}
  */
  readonly ciphers?: string;
  /**
  * Allows to control which SSH forwarding method to allow:
  *   * no - SSH forwarding is disabled;
  *   * local - Allow SSH clients to originate connections from the server(router), this setting controls also dynamic forwarding;
  *   * remote - Allow SSH clients to listen on the server(router) and forward incoming connections;
  *   * both - Allow both local and remote forwarding methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_ssh_server#forwarding_enabled IpSshServer#forwarding_enabled}
  */
  readonly forwardingEnabled?: string;
  /**
  * RSA key size when host key is being regenerated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_ssh_server#host_key_size IpSshServer#host_key_size}
  */
  readonly hostKeySize?: number;
  /**
  * Select host key type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_ssh_server#host_key_type IpSshServer#host_key_type}
  */
  readonly hostKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_ssh_server#id IpSshServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Use stronger encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_ssh_server#strong_crypto IpSshServer#strong_crypto}
  */
  readonly strongCrypto?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_ssh_server routeros_ip_ssh_server}
*/
export class IpSshServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_ssh_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpSshServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpSshServer to import
  * @param importFromId The id of the existing IpSshServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_ssh_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpSshServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_ssh_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_ssh_server routeros_ip_ssh_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpSshServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpSshServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_ssh_server',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._allowNoneCrypto = config.allowNoneCrypto;
    this._alwaysAllowPasswordLogin = config.alwaysAllowPasswordLogin;
    this._ciphers = config.ciphers;
    this._forwardingEnabled = config.forwardingEnabled;
    this._hostKeySize = config.hostKeySize;
    this._hostKeyType = config.hostKeyType;
    this._id = config.id;
    this._strongCrypto = config.strongCrypto;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // allow_none_crypto - computed: false, optional: true, required: false
  private _allowNoneCrypto?: boolean | cdktf.IResolvable; 
  public get allowNoneCrypto() {
    return this.getBooleanAttribute('allow_none_crypto');
  }
  public set allowNoneCrypto(value: boolean | cdktf.IResolvable) {
    this._allowNoneCrypto = value;
  }
  public resetAllowNoneCrypto() {
    this._allowNoneCrypto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNoneCryptoInput() {
    return this._allowNoneCrypto;
  }

  // always_allow_password_login - computed: false, optional: true, required: false
  private _alwaysAllowPasswordLogin?: boolean | cdktf.IResolvable; 
  public get alwaysAllowPasswordLogin() {
    return this.getBooleanAttribute('always_allow_password_login');
  }
  public set alwaysAllowPasswordLogin(value: boolean | cdktf.IResolvable) {
    this._alwaysAllowPasswordLogin = value;
  }
  public resetAlwaysAllowPasswordLogin() {
    this._alwaysAllowPasswordLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysAllowPasswordLoginInput() {
    return this._alwaysAllowPasswordLogin;
  }

  // ciphers - computed: false, optional: true, required: false
  private _ciphers?: string; 
  public get ciphers() {
    return this.getStringAttribute('ciphers');
  }
  public set ciphers(value: string) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
  }

  // forwarding_enabled - computed: false, optional: true, required: false
  private _forwardingEnabled?: string; 
  public get forwardingEnabled() {
    return this.getStringAttribute('forwarding_enabled');
  }
  public set forwardingEnabled(value: string) {
    this._forwardingEnabled = value;
  }
  public resetForwardingEnabled() {
    this._forwardingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingEnabledInput() {
    return this._forwardingEnabled;
  }

  // host_key_size - computed: false, optional: true, required: false
  private _hostKeySize?: number; 
  public get hostKeySize() {
    return this.getNumberAttribute('host_key_size');
  }
  public set hostKeySize(value: number) {
    this._hostKeySize = value;
  }
  public resetHostKeySize() {
    this._hostKeySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeySizeInput() {
    return this._hostKeySize;
  }

  // host_key_type - computed: false, optional: true, required: false
  private _hostKeyType?: string; 
  public get hostKeyType() {
    return this.getStringAttribute('host_key_type');
  }
  public set hostKeyType(value: string) {
    this._hostKeyType = value;
  }
  public resetHostKeyType() {
    this._hostKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyTypeInput() {
    return this._hostKeyType;
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

  // strong_crypto - computed: false, optional: true, required: false
  private _strongCrypto?: boolean | cdktf.IResolvable; 
  public get strongCrypto() {
    return this.getBooleanAttribute('strong_crypto');
  }
  public set strongCrypto(value: boolean | cdktf.IResolvable) {
    this._strongCrypto = value;
  }
  public resetStrongCrypto() {
    this._strongCrypto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strongCryptoInput() {
    return this._strongCrypto;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      allow_none_crypto: cdktf.booleanToTerraform(this._allowNoneCrypto),
      always_allow_password_login: cdktf.booleanToTerraform(this._alwaysAllowPasswordLogin),
      ciphers: cdktf.stringToTerraform(this._ciphers),
      forwarding_enabled: cdktf.stringToTerraform(this._forwardingEnabled),
      host_key_size: cdktf.numberToTerraform(this._hostKeySize),
      host_key_type: cdktf.stringToTerraform(this._hostKeyType),
      id: cdktf.stringToTerraform(this._id),
      strong_crypto: cdktf.booleanToTerraform(this._strongCrypto),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_none_crypto: {
        value: cdktf.booleanToHclTerraform(this._allowNoneCrypto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      always_allow_password_login: {
        value: cdktf.booleanToHclTerraform(this._alwaysAllowPasswordLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ciphers: {
        value: cdktf.stringToHclTerraform(this._ciphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarding_enabled: {
        value: cdktf.stringToHclTerraform(this._forwardingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_key_size: {
        value: cdktf.numberToHclTerraform(this._hostKeySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_key_type: {
        value: cdktf.stringToHclTerraform(this._hostKeyType),
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
      strong_crypto: {
        value: cdktf.booleanToHclTerraform(this._strongCrypto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
