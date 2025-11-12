// https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GraylogProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs#api_version GraylogProvider#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs#auth_name GraylogProvider#auth_name}
  */
  readonly authName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs#auth_password GraylogProvider#auth_password}
  */
  readonly authPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs#web_endpoint_uri GraylogProvider#web_endpoint_uri}
  */
  readonly webEndpointUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs#x_requested_by GraylogProvider#x_requested_by}
  */
  readonly xRequestedBy?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs#alias GraylogProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs graylog}
*/
export class GraylogProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "graylog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GraylogProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GraylogProvider to import
  * @param importFromId The id of the existing GraylogProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GraylogProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "graylog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs graylog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GraylogProviderConfig
  */
  public constructor(scope: Construct, id: string, config: GraylogProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'graylog',
      terraformGeneratorMetadata: {
        providerName: 'graylog',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      terraformProviderSource: 'terraform-provider-graylog/graylog'
    });
    this._apiVersion = config.apiVersion;
    this._authName = config.authName;
    this._authPassword = config.authPassword;
    this._webEndpointUri = config.webEndpointUri;
    this._xRequestedBy = config.xRequestedBy;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this._apiVersion;
  }
  public set apiVersion(value: string | undefined) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // auth_name - computed: false, optional: false, required: true
  private _authName?: string; 
  public get authName() {
    return this._authName;
  }
  public set authName(value: string | undefined) {
    this._authName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authNameInput() {
    return this._authName;
  }

  // auth_password - computed: false, optional: false, required: true
  private _authPassword?: string; 
  public get authPassword() {
    return this._authPassword;
  }
  public set authPassword(value: string | undefined) {
    this._authPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // web_endpoint_uri - computed: false, optional: false, required: true
  private _webEndpointUri?: string; 
  public get webEndpointUri() {
    return this._webEndpointUri;
  }
  public set webEndpointUri(value: string | undefined) {
    this._webEndpointUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webEndpointUriInput() {
    return this._webEndpointUri;
  }

  // x_requested_by - computed: false, optional: true, required: false
  private _xRequestedBy?: string; 
  public get xRequestedBy() {
    return this._xRequestedBy;
  }
  public set xRequestedBy(value: string | undefined) {
    this._xRequestedBy = value;
  }
  public resetXRequestedBy() {
    this._xRequestedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xRequestedByInput() {
    return this._xRequestedBy;
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
      api_version: cdktf.stringToTerraform(this._apiVersion),
      auth_name: cdktf.stringToTerraform(this._authName),
      auth_password: cdktf.stringToTerraform(this._authPassword),
      web_endpoint_uri: cdktf.stringToTerraform(this._webEndpointUri),
      x_requested_by: cdktf.stringToTerraform(this._xRequestedBy),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_name: {
        value: cdktf.stringToHclTerraform(this._authName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_password: {
        value: cdktf.stringToHclTerraform(this._authPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_endpoint_uri: {
        value: cdktf.stringToHclTerraform(this._webEndpointUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x_requested_by: {
        value: cdktf.stringToHclTerraform(this._xRequestedBy),
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
