// https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UbikaProviderConfig {
  /**
  * API Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs#host UbikaProvider#host}
  */
  readonly host?: string;
  /**
  * disable TLS 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs#insecure_no_tls UbikaProvider#insecure_no_tls}
  */
  readonly insecureNoTls?: boolean | cdktf.IResolvable;
  /**
  * API Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs#port UbikaProvider#port}
  */
  readonly port?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs#alias UbikaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs ubika}
*/
export class UbikaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ubika";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UbikaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UbikaProvider to import
  * @param importFromId The id of the existing UbikaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UbikaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ubika", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs ubika} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UbikaProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UbikaProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ubika',
      terraformGeneratorMetadata: {
        providerName: 'ubika',
        providerVersion: '0.0.1',
        providerVersionConstraint: '0.0.1'
      },
      terraformProviderSource: 'ubikasec/ubika'
    });
    this._host = config.host;
    this._insecureNoTls = config.insecureNoTls;
    this._port = config.port;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // insecure_no_tls - computed: false, optional: true, required: false
  private _insecureNoTls?: boolean | cdktf.IResolvable; 
  public get insecureNoTls() {
    return this._insecureNoTls;
  }
  public set insecureNoTls(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureNoTls = value;
  }
  public resetInsecureNoTls() {
    this._insecureNoTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureNoTlsInput() {
    return this._insecureNoTls;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this._port;
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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
      host: cdktf.stringToTerraform(this._host),
      insecure_no_tls: cdktf.booleanToTerraform(this._insecureNoTls),
      port: cdktf.stringToTerraform(this._port),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_no_tls: {
        value: cdktf.booleanToHclTerraform(this._insecureNoTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
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
