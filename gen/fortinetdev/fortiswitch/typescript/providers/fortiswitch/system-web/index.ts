// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_web
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemWebConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_web#gui_language SystemWeb#gui_language}
  */
  readonly guiLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_web#http_https_connection_limit SystemWeb#http_https_connection_limit}
  */
  readonly httpHttpsConnectionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_web#http_port SystemWeb#http_port}
  */
  readonly httpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_web#https_pki_required SystemWeb#https_pki_required}
  */
  readonly httpsPkiRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_web#https_port SystemWeb#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_web#https_server_cert SystemWeb#https_server_cert}
  */
  readonly httpsServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_web#https_ssl_log_level SystemWeb#https_ssl_log_level}
  */
  readonly httpsSslLogLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_web#https_ssl_versions SystemWeb#https_ssl_versions}
  */
  readonly httpsSslVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_web#id SystemWeb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_web fortiswitch_system_web}
*/
export class SystemWeb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_web";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemWeb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemWeb to import
  * @param importFromId The id of the existing SystemWeb that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_web#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemWeb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_web", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_web fortiswitch_system_web} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemWebConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemWebConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_web',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._guiLanguage = config.guiLanguage;
    this._httpHttpsConnectionLimit = config.httpHttpsConnectionLimit;
    this._httpPort = config.httpPort;
    this._httpsPkiRequired = config.httpsPkiRequired;
    this._httpsPort = config.httpsPort;
    this._httpsServerCert = config.httpsServerCert;
    this._httpsSslLogLevel = config.httpsSslLogLevel;
    this._httpsSslVersions = config.httpsSslVersions;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gui_language - computed: true, optional: true, required: false
  private _guiLanguage?: string; 
  public get guiLanguage() {
    return this.getStringAttribute('gui_language');
  }
  public set guiLanguage(value: string) {
    this._guiLanguage = value;
  }
  public resetGuiLanguage() {
    this._guiLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiLanguageInput() {
    return this._guiLanguage;
  }

  // http_https_connection_limit - computed: true, optional: true, required: false
  private _httpHttpsConnectionLimit?: number; 
  public get httpHttpsConnectionLimit() {
    return this.getNumberAttribute('http_https_connection_limit');
  }
  public set httpHttpsConnectionLimit(value: number) {
    this._httpHttpsConnectionLimit = value;
  }
  public resetHttpHttpsConnectionLimit() {
    this._httpHttpsConnectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHttpsConnectionLimitInput() {
    return this._httpHttpsConnectionLimit;
  }

  // http_port - computed: true, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_pki_required - computed: true, optional: true, required: false
  private _httpsPkiRequired?: string; 
  public get httpsPkiRequired() {
    return this.getStringAttribute('https_pki_required');
  }
  public set httpsPkiRequired(value: string) {
    this._httpsPkiRequired = value;
  }
  public resetHttpsPkiRequired() {
    this._httpsPkiRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPkiRequiredInput() {
    return this._httpsPkiRequired;
  }

  // https_port - computed: true, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // https_server_cert - computed: true, optional: true, required: false
  private _httpsServerCert?: string; 
  public get httpsServerCert() {
    return this.getStringAttribute('https_server_cert');
  }
  public set httpsServerCert(value: string) {
    this._httpsServerCert = value;
  }
  public resetHttpsServerCert() {
    this._httpsServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsServerCertInput() {
    return this._httpsServerCert;
  }

  // https_ssl_log_level - computed: true, optional: true, required: false
  private _httpsSslLogLevel?: string; 
  public get httpsSslLogLevel() {
    return this.getStringAttribute('https_ssl_log_level');
  }
  public set httpsSslLogLevel(value: string) {
    this._httpsSslLogLevel = value;
  }
  public resetHttpsSslLogLevel() {
    this._httpsSslLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsSslLogLevelInput() {
    return this._httpsSslLogLevel;
  }

  // https_ssl_versions - computed: true, optional: true, required: false
  private _httpsSslVersions?: string; 
  public get httpsSslVersions() {
    return this.getStringAttribute('https_ssl_versions');
  }
  public set httpsSslVersions(value: string) {
    this._httpsSslVersions = value;
  }
  public resetHttpsSslVersions() {
    this._httpsSslVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsSslVersionsInput() {
    return this._httpsSslVersions;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gui_language: cdktf.stringToTerraform(this._guiLanguage),
      http_https_connection_limit: cdktf.numberToTerraform(this._httpHttpsConnectionLimit),
      http_port: cdktf.numberToTerraform(this._httpPort),
      https_pki_required: cdktf.stringToTerraform(this._httpsPkiRequired),
      https_port: cdktf.numberToTerraform(this._httpsPort),
      https_server_cert: cdktf.stringToTerraform(this._httpsServerCert),
      https_ssl_log_level: cdktf.stringToTerraform(this._httpsSslLogLevel),
      https_ssl_versions: cdktf.stringToTerraform(this._httpsSslVersions),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gui_language: {
        value: cdktf.stringToHclTerraform(this._guiLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_https_connection_limit: {
        value: cdktf.numberToHclTerraform(this._httpHttpsConnectionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_port: {
        value: cdktf.numberToHclTerraform(this._httpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_pki_required: {
        value: cdktf.stringToHclTerraform(this._httpsPkiRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_port: {
        value: cdktf.numberToHclTerraform(this._httpsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_server_cert: {
        value: cdktf.stringToHclTerraform(this._httpsServerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_ssl_log_level: {
        value: cdktf.stringToHclTerraform(this._httpsSslLogLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_ssl_versions: {
        value: cdktf.stringToHclTerraform(this._httpsSslVersions),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
