// https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VyProviderConfig {
  /**
  * The base url for the central shared cognito service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs#central_cognito_base_url VyProvider#central_cognito_base_url}
  */
  readonly centralCognitoBaseUrl?: string;
  /**
  * The environment of the deployment service. This should be left blank unless you're testing the deployment service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs#deployment_service_environment VyProvider#deployment_service_environment}
  */
  readonly deploymentServiceEnvironment?: string;
  /**
  * The base url for the deployment enrollment service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs#enroll_account_base_url VyProvider#enroll_account_base_url}
  */
  readonly enrollAccountBaseUrl?: string;
  /**
  * The environment to interact with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs#environment VyProvider#environment}
  */
  readonly environment: string;
  /**
  * The base url for the version handler v2 service (for testing only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs#version_handler_v2_base_url VyProvider#version_handler_v2_base_url}
  */
  readonly versionHandlerV2BaseUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs#alias VyProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs vy}
*/
export class VyProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VyProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VyProvider to import
  * @param importFromId The id of the existing VyProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VyProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs vy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VyProviderConfig
  */
  public constructor(scope: Construct, id: string, config: VyProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'vy',
      terraformGeneratorMetadata: {
        providerName: 'vy',
        providerVersion: '1.0.1',
        providerVersionConstraint: '1.0.1'
      },
      terraformProviderSource: 'nsbno/vy'
    });
    this._centralCognitoBaseUrl = config.centralCognitoBaseUrl;
    this._deploymentServiceEnvironment = config.deploymentServiceEnvironment;
    this._enrollAccountBaseUrl = config.enrollAccountBaseUrl;
    this._environment = config.environment;
    this._versionHandlerV2BaseUrl = config.versionHandlerV2BaseUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // central_cognito_base_url - computed: false, optional: true, required: false
  private _centralCognitoBaseUrl?: string; 
  public get centralCognitoBaseUrl() {
    return this._centralCognitoBaseUrl;
  }
  public set centralCognitoBaseUrl(value: string | undefined) {
    this._centralCognitoBaseUrl = value;
  }
  public resetCentralCognitoBaseUrl() {
    this._centralCognitoBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralCognitoBaseUrlInput() {
    return this._centralCognitoBaseUrl;
  }

  // deployment_service_environment - computed: false, optional: true, required: false
  private _deploymentServiceEnvironment?: string; 
  public get deploymentServiceEnvironment() {
    return this._deploymentServiceEnvironment;
  }
  public set deploymentServiceEnvironment(value: string | undefined) {
    this._deploymentServiceEnvironment = value;
  }
  public resetDeploymentServiceEnvironment() {
    this._deploymentServiceEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentServiceEnvironmentInput() {
    return this._deploymentServiceEnvironment;
  }

  // enroll_account_base_url - computed: false, optional: true, required: false
  private _enrollAccountBaseUrl?: string; 
  public get enrollAccountBaseUrl() {
    return this._enrollAccountBaseUrl;
  }
  public set enrollAccountBaseUrl(value: string | undefined) {
    this._enrollAccountBaseUrl = value;
  }
  public resetEnrollAccountBaseUrl() {
    this._enrollAccountBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollAccountBaseUrlInput() {
    return this._enrollAccountBaseUrl;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this._environment;
  }
  public set environment(value: string | undefined) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // version_handler_v2_base_url - computed: false, optional: true, required: false
  private _versionHandlerV2BaseUrl?: string; 
  public get versionHandlerV2BaseUrl() {
    return this._versionHandlerV2BaseUrl;
  }
  public set versionHandlerV2BaseUrl(value: string | undefined) {
    this._versionHandlerV2BaseUrl = value;
  }
  public resetVersionHandlerV2BaseUrl() {
    this._versionHandlerV2BaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionHandlerV2BaseUrlInput() {
    return this._versionHandlerV2BaseUrl;
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
      central_cognito_base_url: cdktf.stringToTerraform(this._centralCognitoBaseUrl),
      deployment_service_environment: cdktf.stringToTerraform(this._deploymentServiceEnvironment),
      enroll_account_base_url: cdktf.stringToTerraform(this._enrollAccountBaseUrl),
      environment: cdktf.stringToTerraform(this._environment),
      version_handler_v2_base_url: cdktf.stringToTerraform(this._versionHandlerV2BaseUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      central_cognito_base_url: {
        value: cdktf.stringToHclTerraform(this._centralCognitoBaseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_service_environment: {
        value: cdktf.stringToHclTerraform(this._deploymentServiceEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enroll_account_base_url: {
        value: cdktf.stringToHclTerraform(this._enrollAccountBaseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_handler_v2_base_url: {
        value: cdktf.stringToHclTerraform(this._versionHandlerV2BaseUrl),
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
