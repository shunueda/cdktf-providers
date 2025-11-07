// https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaProviderConfig {
  /**
  * A Custom CA certificates path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs#cacert_files KibanaProvider#cacert_files}
  */
  readonly cacertFiles?: string[];
  /**
  * Set logger to debug on Elasticsearch client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs#debug KibanaProvider#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Disable SSL verification of API calls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs#insecure KibanaProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Password to use to connect to Kibana using basic auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs#password KibanaProvider#password}
  */
  readonly password?: string;
  /**
  * Nummber time it retry connexion before failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs#retry KibanaProvider#retry}
  */
  readonly retry?: number;
  /**
  * Kibana URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs#url KibanaProvider#url}
  */
  readonly url: string;
  /**
  * Username to use to connect to Kibana using basic auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs#username KibanaProvider#username}
  */
  readonly username?: string;
  /**
  * Wait time in second before retry connexion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs#wait_before_retry KibanaProvider#wait_before_retry}
  */
  readonly waitBeforeRetry?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs#alias KibanaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs kibana}
*/
export class KibanaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kibana";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaProvider to import
  * @param importFromId The id of the existing KibanaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kibana", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs kibana} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaProviderConfig
  */
  public constructor(scope: Construct, id: string, config: KibanaProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'kibana',
      terraformGeneratorMetadata: {
        providerName: 'kibana',
        providerVersion: '8.5.3'
      },
      terraformProviderSource: 'disaster37/kibana'
    });
    this._cacertFiles = config.cacertFiles;
    this._debug = config.debug;
    this._insecure = config.insecure;
    this._password = config.password;
    this._retry = config.retry;
    this._url = config.url;
    this._username = config.username;
    this._waitBeforeRetry = config.waitBeforeRetry;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cacert_files - computed: false, optional: true, required: false
  private _cacertFiles?: string[]; 
  public get cacertFiles() {
    return this._cacertFiles;
  }
  public set cacertFiles(value: string[] | undefined) {
    this._cacertFiles = value;
  }
  public resetCacertFiles() {
    this._cacertFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertFilesInput() {
    return this._cacertFiles;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this._debug;
  }
  public set debug(value: boolean | cdktf.IResolvable | undefined) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
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

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this._retry;
  }
  public set retry(value: number | undefined) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // wait_before_retry - computed: false, optional: true, required: false
  private _waitBeforeRetry?: number; 
  public get waitBeforeRetry() {
    return this._waitBeforeRetry;
  }
  public set waitBeforeRetry(value: number | undefined) {
    this._waitBeforeRetry = value;
  }
  public resetWaitBeforeRetry() {
    this._waitBeforeRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitBeforeRetryInput() {
    return this._waitBeforeRetry;
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
      cacert_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cacertFiles),
      debug: cdktf.booleanToTerraform(this._debug),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      retry: cdktf.numberToTerraform(this._retry),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      wait_before_retry: cdktf.numberToTerraform(this._waitBeforeRetry),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cacert_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cacertFiles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
      wait_before_retry: {
        value: cdktf.numberToHclTerraform(this._waitBeforeRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
