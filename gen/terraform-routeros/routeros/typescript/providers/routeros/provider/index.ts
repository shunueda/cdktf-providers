// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterosProviderConfig {
  /**
  * Path to MikroTik's certificate authority file (env: ROS_CA_CERTIFICATE | MIKROTIK_CA_CERTIFICATE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs#ca_certificate RouterosProvider#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * URL of the MikroTik router, default is TLS connection to REST.
  * 	* API: api[s]://host[:port]
  * 		* api://router.local
  * 		* apis://router.local:8729
  * 	* REST: http[s]://host
  * 		* http://router.local
  * 		* https://router.local
  * 		* router.local
  * 		* 127.0.0.1
  * 
  * 
  * 	export ROS_HOSTURL=router.local or export MIKROTIK_HOST=router.local
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs#hosturl RouterosProvider#hosturl}
  */
  readonly hosturl: string;
  /**
  * Whether to verify the SSL certificate or not (env: ROS_INSECURE | MIKROTIK_INSECURE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs#insecure RouterosProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Password for the MikroTik user (env: ROS_PASSWORD | MIKROTIK_PASSWORD).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs#password RouterosProvider#password}
  */
  readonly password?: string;
  /**
  * HTTP Client Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs#rest_timeout RouterosProvider#rest_timeout}
  */
  readonly restTimeout?: number;
  /**
  * RouterOS version for which resource schemes will be adapted. The version obtained from MikroTik will be used if not specified (env: ROS_VERSION).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs#routeros_version RouterosProvider#routeros_version}
  */
  readonly routerosVersion?: string;
  /**
  * Suppress the system object deletion warning (env: ROS_SUPPRESS_SYSO_DEL_WARN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs#suppress_syso_del_warn RouterosProvider#suppress_syso_del_warn}
  */
  readonly suppressSysoDelWarn?: boolean | cdktf.IResolvable;
  /**
  * Username for the MikroTik WEB/Winbox.
  * 
  * 
  * 	export ROS_USERNAME=admin or export MIKROTIK_USER=admin
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs#username RouterosProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs#alias RouterosProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs routeros}
*/
export class RouterosProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterosProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterosProvider to import
  * @param importFromId The id of the existing RouterosProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterosProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs routeros} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterosProviderConfig
  */
  public constructor(scope: Construct, id: string, config: RouterosProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
      },
      terraformProviderSource: 'terraform-routeros/routeros'
    });
    this._caCertificate = config.caCertificate;
    this._hosturl = config.hosturl;
    this._insecure = config.insecure;
    this._password = config.password;
    this._restTimeout = config.restTimeout;
    this._routerosVersion = config.routerosVersion;
    this._suppressSysoDelWarn = config.suppressSysoDelWarn;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this._caCertificate;
  }
  public set caCertificate(value: string | undefined) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // hosturl - computed: false, optional: false, required: true
  private _hosturl?: string; 
  public get hosturl() {
    return this._hosturl;
  }
  public set hosturl(value: string | undefined) {
    this._hosturl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hosturlInput() {
    return this._hosturl;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // rest_timeout - computed: false, optional: true, required: false
  private _restTimeout?: number; 
  public get restTimeout() {
    return this._restTimeout;
  }
  public set restTimeout(value: number | undefined) {
    this._restTimeout = value;
  }
  public resetRestTimeout() {
    this._restTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restTimeoutInput() {
    return this._restTimeout;
  }

  // routeros_version - computed: false, optional: true, required: false
  private _routerosVersion?: string; 
  public get routerosVersion() {
    return this._routerosVersion;
  }
  public set routerosVersion(value: string | undefined) {
    this._routerosVersion = value;
  }
  public resetRouterosVersion() {
    this._routerosVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerosVersionInput() {
    return this._routerosVersion;
  }

  // suppress_syso_del_warn - computed: false, optional: true, required: false
  private _suppressSysoDelWarn?: boolean | cdktf.IResolvable; 
  public get suppressSysoDelWarn() {
    return this._suppressSysoDelWarn;
  }
  public set suppressSysoDelWarn(value: boolean | cdktf.IResolvable | undefined) {
    this._suppressSysoDelWarn = value;
  }
  public resetSuppressSysoDelWarn() {
    this._suppressSysoDelWarn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressSysoDelWarnInput() {
    return this._suppressSysoDelWarn;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_certificate: cdktf.stringToTerraform(this._caCertificate),
      hosturl: cdktf.stringToTerraform(this._hosturl),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      rest_timeout: cdktf.numberToTerraform(this._restTimeout),
      routeros_version: cdktf.stringToTerraform(this._routerosVersion),
      suppress_syso_del_warn: cdktf.booleanToTerraform(this._suppressSysoDelWarn),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_certificate: {
        value: cdktf.stringToHclTerraform(this._caCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosturl: {
        value: cdktf.stringToHclTerraform(this._hosturl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_timeout: {
        value: cdktf.numberToHclTerraform(this._restTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routeros_version: {
        value: cdktf.stringToHclTerraform(this._routerosVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_syso_del_warn: {
        value: cdktf.booleanToHclTerraform(this._suppressSysoDelWarn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
