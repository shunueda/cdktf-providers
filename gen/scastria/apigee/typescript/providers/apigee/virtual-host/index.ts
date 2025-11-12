// https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host#base_url VirtualHost#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host#environment_name VirtualHost#environment_name}
  */
  readonly environmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host#host_aliases VirtualHost#host_aliases}
  */
  readonly hostAliases: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host#id VirtualHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host#name VirtualHost#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host#port VirtualHost#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host#ssl_client_auth_enabled VirtualHost#ssl_client_auth_enabled}
  */
  readonly sslClientAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host#ssl_enabled VirtualHost#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host#ssl_ignore_validation_errors VirtualHost#ssl_ignore_validation_errors}
  */
  readonly sslIgnoreValidationErrors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host#ssl_keyalias VirtualHost#ssl_keyalias}
  */
  readonly sslKeyalias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host#ssl_keystore VirtualHost#ssl_keystore}
  */
  readonly sslKeystore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host#ssl_truststore VirtualHost#ssl_truststore}
  */
  readonly sslTruststore?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host apigee_virtual_host}
*/
export class VirtualHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apigee_virtual_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualHost to import
  * @param importFromId The id of the existing VirtualHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apigee_virtual_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/virtual_host apigee_virtual_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualHostConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualHostConfig) {
    super(scope, id, {
      terraformResourceType: 'apigee_virtual_host',
      terraformGeneratorMetadata: {
        providerName: 'apigee',
        providerVersion: '0.1.53',
        providerVersionConstraint: '0.1.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseUrl = config.baseUrl;
    this._environmentName = config.environmentName;
    this._hostAliases = config.hostAliases;
    this._id = config.id;
    this._name = config.name;
    this._port = config.port;
    this._sslClientAuthEnabled = config.sslClientAuthEnabled;
    this._sslEnabled = config.sslEnabled;
    this._sslIgnoreValidationErrors = config.sslIgnoreValidationErrors;
    this._sslKeyalias = config.sslKeyalias;
    this._sslKeystore = config.sslKeystore;
    this._sslTruststore = config.sslTruststore;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // environment_name - computed: false, optional: false, required: true
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
  }

  // host_aliases - computed: false, optional: false, required: true
  private _hostAliases?: string[]; 
  public get hostAliases() {
    return cdktf.Fn.tolist(this.getListAttribute('host_aliases'));
  }
  public set hostAliases(value: string[]) {
    this._hostAliases = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssl_client_auth_enabled - computed: false, optional: true, required: false
  private _sslClientAuthEnabled?: boolean | cdktf.IResolvable; 
  public get sslClientAuthEnabled() {
    return this.getBooleanAttribute('ssl_client_auth_enabled');
  }
  public set sslClientAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._sslClientAuthEnabled = value;
  }
  public resetSslClientAuthEnabled() {
    this._sslClientAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientAuthEnabledInput() {
    return this._sslClientAuthEnabled;
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // ssl_ignore_validation_errors - computed: false, optional: true, required: false
  private _sslIgnoreValidationErrors?: boolean | cdktf.IResolvable; 
  public get sslIgnoreValidationErrors() {
    return this.getBooleanAttribute('ssl_ignore_validation_errors');
  }
  public set sslIgnoreValidationErrors(value: boolean | cdktf.IResolvable) {
    this._sslIgnoreValidationErrors = value;
  }
  public resetSslIgnoreValidationErrors() {
    this._sslIgnoreValidationErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslIgnoreValidationErrorsInput() {
    return this._sslIgnoreValidationErrors;
  }

  // ssl_keyalias - computed: false, optional: true, required: false
  private _sslKeyalias?: string; 
  public get sslKeyalias() {
    return this.getStringAttribute('ssl_keyalias');
  }
  public set sslKeyalias(value: string) {
    this._sslKeyalias = value;
  }
  public resetSslKeyalias() {
    this._sslKeyalias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyaliasInput() {
    return this._sslKeyalias;
  }

  // ssl_keystore - computed: false, optional: true, required: false
  private _sslKeystore?: string; 
  public get sslKeystore() {
    return this.getStringAttribute('ssl_keystore');
  }
  public set sslKeystore(value: string) {
    this._sslKeystore = value;
  }
  public resetSslKeystore() {
    this._sslKeystore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeystoreInput() {
    return this._sslKeystore;
  }

  // ssl_truststore - computed: false, optional: true, required: false
  private _sslTruststore?: string; 
  public get sslTruststore() {
    return this.getStringAttribute('ssl_truststore');
  }
  public set sslTruststore(value: string) {
    this._sslTruststore = value;
  }
  public resetSslTruststore() {
    this._sslTruststore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTruststoreInput() {
    return this._sslTruststore;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_url: cdktf.stringToTerraform(this._baseUrl),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      host_aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostAliases),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      ssl_client_auth_enabled: cdktf.booleanToTerraform(this._sslClientAuthEnabled),
      ssl_enabled: cdktf.booleanToTerraform(this._sslEnabled),
      ssl_ignore_validation_errors: cdktf.booleanToTerraform(this._sslIgnoreValidationErrors),
      ssl_keyalias: cdktf.stringToTerraform(this._sslKeyalias),
      ssl_keystore: cdktf.stringToTerraform(this._sslKeystore),
      ssl_truststore: cdktf.stringToTerraform(this._sslTruststore),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_aliases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostAliases),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_client_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._sslClientAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_enabled: {
        value: cdktf.booleanToHclTerraform(this._sslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_ignore_validation_errors: {
        value: cdktf.booleanToHclTerraform(this._sslIgnoreValidationErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_keyalias: {
        value: cdktf.stringToHclTerraform(this._sslKeyalias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_keystore: {
        value: cdktf.stringToHclTerraform(this._sslKeystore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_truststore: {
        value: cdktf.stringToHclTerraform(this._sslTruststore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
